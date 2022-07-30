import { Box } from './box/Box';
import { Container, Title } from './App.styled';
import { useState, useEffect, useMemo } from 'react';
import { ContactForm } from './form/Form';
import ContactList from './contacts/ContactsList';
import { nanoid } from 'nanoid';
import { Filter } from './filter/Filter';

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default function App() {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);

  const [filter, setFilter] = useState('');

  const submitForm = ({ name, number }, { resetForm }) => {
    const contactsNames = contacts.map(contact => contact.name);
    if (contactsNames.includes(name)) {
      alert(` ${name} is already in contacts.`);
    } else {
      const person = {
        id: nanoid(),
        name,
        number,
      };
      setContacts(prevState => [...prevState, person]);
      resetForm();
    }
  };

  const newContacts = useMemo(() => {
    return contacts.filter(person =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  const onFilter = evt => {
    setFilter(evt.target.value);
  };

  const onDelete = id => {
    setContacts(prevState => {
      return prevState.filter(c => c.id !== id);
    });
  };

  return (
    <Box
      as={'div'}
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="white"
      backgroundColor="#1d2327"
    >
      <Container>
        <Title> Phonebook </Title>
        <ContactForm submitForm={submitForm} />
        <Filter value={filter} onFilter={onFilter} />
        <ContactList contactsInfo={newContacts} deleteContact={onDelete} />
      </Container>
    </Box>
  );
}

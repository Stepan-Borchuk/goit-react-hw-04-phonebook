import PropTypes from 'prop-types';
import { ContactListItem } from './ContactsItem';
import { ContactsTitle, List } from './ContactsList.styled';

export default function ContactList({ contactsInfo, deleteContact }) {
  return (
    <div>
      <ContactsTitle>Contacts list</ContactsTitle>
      <List>
        {contactsInfo?.map(item => (
          <ContactListItem
            item={item}
            key={item.id}
            deleteContact={deleteContact}
          />
        ))}
      </List>
    </div>
  );
}

ContactList.propTypes = {
  contactsInfo: PropTypes.arrayOf(PropTypes.shape),
  deleteContact: PropTypes.func,
};

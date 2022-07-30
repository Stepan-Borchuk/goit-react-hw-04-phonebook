import PropTypes from 'prop-types';
import { ContactsItem, DeleteButton, Text } from './ContactsItem.styled';

export const ContactListItem = ({ item, deleteContact }) => {
  return (
    <ContactsItem>
      <Text>Name: {item.name}</Text>
      <Text>Number: {item.number}</Text>
      <DeleteButton type="button" onClick={() => deleteContact(item.id)}>
        Delete
      </DeleteButton>
    </ContactsItem>
  );
};

ContactListItem.propTypes = {
  deleteContact: PropTypes.func,
  item: PropTypes.objectOf(PropTypes.string),
};

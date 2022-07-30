import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Box, Input, InputName, SubmitButton } from './Form.styled';

export const ContactForm = ({ submitForm }) => {
  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={submitForm}>
      <Box>
        <InputName>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </InputName>
        <InputName>
          phone
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="enter your phone number"
          />
        </InputName>
        <SubmitButton type="submit">Add contacts</SubmitButton>
      </Box>
    </Formik>
  );
};

ContactForm.propTypes = {
  submitForm: PropTypes.func,
};

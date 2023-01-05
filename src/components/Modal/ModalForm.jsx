import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeContacts } from 'redux/operations';

const ModalForm = ({ id }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts.items);

  const handleChange = e => {
    const { name: nameEvent, value } = e.target;

    switch (nameEvent) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('Not this field');
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    const contact = {
      name,
      number: number,
    };
    if (contacts.find(({ number: phone }) => phone === number)) {
      alert(
        'This phone number is already in the contact list');
      return;
    }

    dispatch(changeContacts({ id, contact }));
    resetForm();
   alert('Contact is change');
  };
  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        <span>Name</span>
        <input
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        <span>Number</span>
        <input
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit">Edit</button>
    </form>
  );
};

export default ModalForm;
import { useDispatch, useSelector } from "react-redux";
import { getPhones } from "redux/phoneSlice";
import { addContacts } from 'redux/operations';
import { Form, Input, Button, Text } from "./ContactFormStyled";

export default function ContactForm(){
  
  const dispatch = useDispatch();
  const phones = useSelector(getPhones);

  const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        if(phones.some(phone => phone.name.toLowerCase() === name.toLowerCase())){
          return alert(`${name} is already in contacts `)
        }
        dispatch(addContacts({name, number}));
        form.reset();
  };
  return (
          <Form onSubmit={handleSubmit}>
          
              <Text>Name</Text>
              <Input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              <Text>Number</Text>
              <Input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
              <div>
                <Button type="submit">Add contact</Button>
              </div>
           
          </Form>
        )
}

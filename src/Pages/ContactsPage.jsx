import { getPhones } from "redux/phoneSlice";
import { useSelector } from 'react-redux';
import ContactForm from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter"; 
import { useDispatch} from "react-redux";
import { fetchContacts } from "redux/operations";
import { useEffect } from "react";
import { Title, SecondTitle } from "./ContactsPageStyled";


export default function ContactsPage(){
  const contacts = useSelector(getPhones);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

 

    return (
      <div
        className="App"
      >
       <div>
        <Title>Phonebook</Title>
        <ContactForm />
       
       </div>
        {contacts.length>0 ? <SecondTitle>Contacts</SecondTitle> : <SecondTitle>There are no contacts</SecondTitle>}
        {contacts.length>0 &&  <Filter />}
        <ContactList />
      </div>
    );
  
  }
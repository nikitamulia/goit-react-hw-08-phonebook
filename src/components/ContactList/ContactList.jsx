import { ContactListItem } from "./ContactListItem";
import { useSelector } from "react-redux";
import { getStatusFilter } from "redux/filterSlice";
import { getPhones } from "redux/phoneSlice";
import { List } from "./ContactListStyled";



export const ContactList = () => {
    const contacts = useSelector(getPhones);
    const filter = useSelector(getStatusFilter);

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
   
    
    return(
        <List>
            {filteredContacts.map(contact => {
                const {name, number, id} = contact || {}
                return <ContactListItem key = {id} name={name} phone={number} id={id}/>
            })}
        </List>
    )
}

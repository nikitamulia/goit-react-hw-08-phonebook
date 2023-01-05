import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { deleteContacts } from "redux/operations";
import { Item, Button } from "./ContactListItemStyled";
import { BsXCircle } from "react-icons/bs";



export const ContactListItem = ({id, name, phone}) => {
    const dispatch = useDispatch();
    

    return(
        <Item>
            {name}:{phone} 
            <Button type="button" value={id} onClick = {() => dispatch(deleteContacts(id))}>
            <BsXCircle size="20px" />
            </Button>
            {/* <Button type="button" value={id} onClick={openModal}>
            <BsPencil size="20px"/>
            </Button>
            {modal === true ? <ModalWindow openModal={openModal}  id={id}/> : ''} */}
            
        </Item>
            
    );
};
ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};

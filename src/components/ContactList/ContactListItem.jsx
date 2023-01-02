import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { deleteContacts, changeContacts } from "redux/operations";
import { Item, Button } from "./ContactListItemStyled";
import DeleteIcon from "../../icons/DeleteIcon.svg"


export const ContactListItem = ({id, name, phone}) => {
    const dispatch = useDispatch();
    
    return(
            <Item>
                {name}:{phone} 
                <Button type="button" value={id} onClick = {() => dispatch(deleteContacts(id))}>
                <img src={DeleteIcon} alt="" />
                </Button>
                <Button type="button" value={id} onClick = {() => dispatch(changeContacts(id))}>
                    Update
                </Button>
            </Item>
    );
};
ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};

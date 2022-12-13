import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { deleteContacts } from "redux/operations";


export const ContactListItem = ({id, name, phone}) => {
    const dispatch = useDispatch();
    
    return(
            <li>{name}:{phone} <button type="button" value={id} onClick = {() => dispatch(deleteContacts(id))}>Delete</button> </li>
    );
};
ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};

// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { useDispatch, useSelector } from 'react-redux';
// import { changeContacts } from 'redux/operations';
// import { Form, Input, Text } from "./ModalStyled";
// import { getPhones } from "redux/phoneSlice";
// import {  BsPencil } from "react-icons/bs";

// function ModalEdit({id, name, phone}) {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const dispatch = useDispatch();
//   const phones = useSelector(getPhones);

//   const handleSubmit = e => {
//         e.preventDefault();
//         const form = e.target;
//         const name = form.elements.name.value;
//         const number = form.elements.number.value;
//         if(phones.some(phone => phone.name.toLowerCase() === name.toLowerCase())){
//           return alert(`${name} is already in contacts `)
//         }
//         dispatch(changeContacts({id, name, number}));
//         form.reset();
//   };

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//             <BsPencil size="20px"/>
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <Form onSubmit={handleSubmit}>
          
//           <Text>Name</Text>
//           <Input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//           <Text>Number</Text>
//           <Input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//       </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick = {() => dispatch(changeContacts(id))}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }
// export default ModalEdit;
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';  
// import ModalForm from './ModalForm';
// import React, { useState } from 'react';

// const ModalWindow = ({ openModal, id }) => {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);

//   return (
//     <div
//     className="modal show"
//     style={{ display: 'block', position: 'initial' }}
//   >
//     <Modal.Dialog>
//       <Modal.Header closeButton>
//         <Modal.Title>Modal title</Modal.Title>
//       </Modal.Header>

//       <Modal.Body>
//       <ModalForm id={id} />
//       </Modal.Body>

//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>Close</Button>
//         <Button variant="primary">Save changes</Button>
//       </Modal.Footer>
//     </Modal.Dialog>
//   </div>
//   );
// };

// export default ModalWindow;

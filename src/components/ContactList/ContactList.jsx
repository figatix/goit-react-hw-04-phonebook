
import PropTypes from "prop-types";
import React from "react";
import { ContactItem } from "../ContactItem/ContactItem";
import { StyledContactList } from "./ContactList.styled";

const ContactList = ({ filteredContacts, onDeleteBtnClick }) => {
  return (
    <StyledContactList>
      {filteredContacts.map(({ name, id, number }) => {
        return <ContactItem
          personName={name}
          personNumber={number}
          key={id}
          id={id}
          filteredContacts={filteredContacts}
          onDeleteBtnClick={onDeleteBtnClick} />
      })}
    </StyledContactList>
  )
}

// class ContactList extends Component {

//   render() {
//     const { filteredContacts, onDeleteBtnClick } = this.props

//     return (

//       <StyledContactList>
//         {filteredContacts.map(({ name, id, number }) => {
//           return <ContactItem
//             personName={name}
//             personNumber={number}
//             key={id}
//             id={id}
//             filteredContacts={filteredContacts}
//             onDeleteBtnClick={onDeleteBtnClick} />
//         })}
//       </StyledContactList>
//     )
//   }
// }

export { ContactList };

ContactList.propTypes = {
  onDeleteBtnClick: PropTypes.func,
  filteredContacts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
}

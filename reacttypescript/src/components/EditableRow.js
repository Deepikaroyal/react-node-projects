import React from "react";
import "../../src/App.css";
import { useRef } from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  //useref is same as usestate and preserve the value but there is no re-render:
   const inputElement= useRef()
  //function for useref for focus on input field:
   const focusInput = () => {
    inputElement.current.focus();
  };
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter your firstname..."
          name="firstName"
          ref={inputElement}
          value={editFormData.firstName}
          onChange={handleEditFormChange}
        >
          {/* {console.log("00", editFormData)} */}
        </input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter your LastName..."
          ref={inputElement}
          name="lastName"
          value={editFormData.lastName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          ref={inputElement}
          value={editFormData.email}
          onChange={handleEditFormChange}
        >
          {console.log(editFormData.email)}
        </input>
      </td>
      <td>
        <button className="save-button" type="submit" onClick={focusInput}>
          Save
        </button>
        <button
          className="cancel-button"
          type="button"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};
export default EditableRow;

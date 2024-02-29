import React, { useState } from "react";
import {GrEdit} from 'react-icons/gr';
import {MdDelete}from 'react-icons/md';
import {AiOutlineUserAdd} from 'react-icons/ai';
import { Link } from "react-router-dom";

export default function ReadOnlyRow({
  el,
  handleEditClick,
  handleDeleteClick,
  handleFormToggler
}) {

  return (
    <tr>
      <Link to={`/dashboard/${el._id}`} state={{ id: el._id }} className='user-name-link'>
      <td>{el.firstName}</td></Link>
      <td>{el.lastName}</td>
      <td>{el.email}</td>
      <td>
      <button
          class="add-button"
          type="button"
           onClick={handleFormToggler}
        >
          <AiOutlineUserAdd/>
        </button>
        <button
          className="edit-button"
          type="button"
          onClick={(event) => handleEditClick(event, el)}
        >
          <GrEdit/>
        </button>
        <button
          class="delete-button"
          type="button"
          onClick={() => handleDeleteClick(el._id)}
        >
          <MdDelete/>
        </button>
        
      </td>
    </tr>
  );
}

import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const LineItems = ({item,handleCheck,handleDelete}) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      {item.checked ? (
        <label>
          <strike>{item.text}</strike>
        </label>
      ) : (
        <label>{item.text}</label>
      )}
      <FaTrashAlt
        role="button"
        tabIndex="0"
        onClick={() => handleDelete(item.id)}
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default LineItems;

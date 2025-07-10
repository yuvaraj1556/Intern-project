import React from "react";
import ItemsList from "./ItemsList";

const Content = ({ items, handleCheck, handleDelete}) => {
  return (
    <>
      {items.length > 0 ? (
        <ItemsList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ color: "red" }}>To do list is empty</p>
      )}
    </>
  );
};

export default Content;

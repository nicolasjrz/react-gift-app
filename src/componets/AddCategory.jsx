import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [value, setValue] = useState("");

  const handleInputChange = ({ target }) => {
    setValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (value.trim().length <= 1) return;
    //setCategories((categories) => [value, ...categories]);
    onNewCategory(value.trim());
    setValue("");
  };
  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        name="input"
        id="input"
        placeholder="search gift"
        onChange={handleInputChange}
        value={value}
      />
    </form>
  );
};

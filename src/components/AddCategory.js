import React from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = React.useState("");

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories(prevCategory => {
        return [inputValue, ...prevCategory];
      });
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={inputValue}
        value={inputValue}
        onChange={e => handleInputChange(e)}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};

export default AddCategory;

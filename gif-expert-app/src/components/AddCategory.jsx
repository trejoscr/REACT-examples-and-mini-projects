import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {

  const [inpuValue, setInpuValue] = useState('');

  const onInputChange = ({target}) => {
    setInpuValue(target.value);
  }

  const onSubmit = (event) => {

    event.preventDefault();    
    if(inpuValue.trim().length <= 1) return

    //setCategories(categories => [inpuValue, ...categories]);
    
    setInpuValue('');
    onNewCategory(inpuValue.trim());
    
  }

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
      type="text"
        placeholder="Search gifs..." 
        value={inpuValue}
        onChange={onInputChange}
      />
    </form>    
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}
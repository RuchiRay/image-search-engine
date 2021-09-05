import React,{useRef} from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setTerm } from "../action/action";
export const Search = () => {
  const term = useSelector((state) => state.term);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    console.log('changing term');
    
    dispatch(setTerm(inputRef.current.value))
  };
  return (
    <div className="search-form">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="try nature or food"
          defaultValue={term.searchTerm}
          ref={inputRef}
         
        />
        <button type="submit" className='btn'>
          <FaSearch className='search-icon' />
        </button>
      </form>
    </div>
  );
};

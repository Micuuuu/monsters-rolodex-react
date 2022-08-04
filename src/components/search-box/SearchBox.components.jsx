import  {Component} from 'react';
import './searchBox.styles.css';


const  SearchList =  ({className, placeholder, onChangeHandler}) => {
      
        return(
          <input 
          className ={ `search-box ${className}`}
          type = 'search' 
          placeholder = {placeholder}
          onChange = {onChangeHandler} // functia asta va fi apelata de fieacare data cand react va face render deci o putem pune ca metoda pentru a optimiza 
        
        />
        )
  
}

export default SearchList; 
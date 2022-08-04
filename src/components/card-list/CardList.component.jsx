import  {Component} from 'react';
import './CardList.style.css';
import Card from '../card/Card.component';



const CardList = ({monsters}) => {
    
        
        
    return (
        <div className= 'card-list'>
            {monsters.map(el=>(
                 <Card
                    monster = {el} 
                    src ={`https://robohash.org/${el.id}?set=set2&size=180x180`} 
                    alt = {`monster ${el.name}`}/>
            ))}
        </div>

    );
    

}

export default CardList
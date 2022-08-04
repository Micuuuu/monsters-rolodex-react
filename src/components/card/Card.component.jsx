import  {Component} from 'react';
import  './Card.styles.css';

const Card = (props) => {
    
        console.log(props)
        const {alt, src, monster} = props
        console.log(monster.id)
        return(
            <div className= 'card-container'  key = {monster.id}>
                    <img  alt={alt} src = {src} />
                    <h1 >{monster.name}</h1>
                    <p>{monster.email}</p>
            </div>
        )
    

}


export default Card
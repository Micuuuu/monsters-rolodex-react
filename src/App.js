import { useState, useEffect } from 'react'

import  {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from'./components/card-list/CardList.component'
import SearchList from './components/search-box/SearchBox.components';
//// varianta cu funtion components
const App = () =>{
  const[searchField, setSearchField] = useState(''); //[value, setvalue] - primim un vector cu 2 valori
  const [monsters,setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  useEffect (()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) =>response.json())
        .then(users => setMonsters(users))
  }, [])

  useEffect (() => {
    const newFilteredMonsters = monsters.filter(el => {return el.name.toLocaleLowerCase().includes(searchField)})
    setFilteredMonsters(newFilteredMonsters);
    
  }, [monsters, searchField]);
  
  const onSearchChanges = (event)=>{
        const searchString= event.target.value.toLocaleLowerCase();
        setSearchField(searchString);
      }

  return (
    <div className="App">
        <h1 className = 'app-title'>Monsters Rolodex</h1>
      <SearchList 
        onChangeHandler = {onSearchChanges} 
        placeholder = {'Search monsters'} 
        className = 'monsters-search-box' />
      <CardList monsters = {filteredMonsters}/>
      </div>
      )
}

              /// varianta cu class components
// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ''

//     }
//   }
//   //how to get the list from api with react 
//   componentDidMount(){  //mounting este prima data cand react face render al unui component in DOM
//     //fetch from API
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) =>response.json())
//       .then(users => this.setState({
//         monsters: users
//       }))

//   }
//   onSearchChanges = (event)=>{
//     const searchString= event.target.value.toLocaleLowerCase();
//     this.setState(()=>{return {searchField: searchString}});
//   }
  
    
  
//   render(){

//     //optimizare - scapam de folosirea lui this atat de des
//     const {monsters, searchField } = this.state;
//     const {onSearchChanges} = this;

//     const filteredMonsters = monsters.filter(el => {return el.name.toLocaleLowerCase().includes(searchField)});
   
//     return (
      
//       <div className="App">
//         <h1 className = 'app-title'>Monsters Rolodex</h1>
//       <SearchList onChangeHandler = {onSearchChanges} placeholder = {'Search monsters'} className = 'monsters-search-box' />
//       <CardList monsters = {filteredMonsters}/>
//       </div>
//     );
//   }
  
// }

 export default App;

//// exemplu prima parte
// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       name: 'Sefule',
//       company: 'ZTE'

//     }
//   }
//   render(){
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Hi {this.state.name}, I work at {this.state.company}
//           </p>
//          <button onClick = {() =>{
//           // this.setState({name: 'Micule'})   // aveasta metoda va face un nou obiect care va activa reactul si va updata UI ul
//           // vom folosi mai mult functiile pt asta
//           this.setState(
//           (state,props)=>{
//             return { name:'Micule' };
//           },
//           ()=>{
//             console.log(this.state);
//           }) 
          
//          }} > Change your Name</button>
//         </header>
//       </div>
//     );
//   }
  
// }
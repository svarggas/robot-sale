import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

function App() {

  // State with hooks
  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState('')

  //Like ComponentDidMount, run once 
  // Because of the second parameter being a empty array 
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {setRobots(users)});
  },[])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  const filteredRobots = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })

  return !robots.length ? <h1>Loading</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>Robot Sale</h1>
        <h3 className='f3' style={{ marginTop:'-30px' }}>
          Dont miss a oportunity, prices <u>always</u> changing, literally
        </h3>
        
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
}

export default App;
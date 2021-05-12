import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import { requestRobots, setSearchfield } from '../actions'
import { render } from 'react-dom';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
} 

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchfield(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
} 

class App extends React.Component {

  componentDidMount() {
    this.props.onRequestRobots()
  }

  render(){
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return isPending ? <h1>Loading...</h1> :
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

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
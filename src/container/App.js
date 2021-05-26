import React, {Component} from 'react';
import CardList from '../components/CardList';
import Search from '../components/Search';
import Scroll from '../components/Scroll';

class App extends Component{
  constructor() {
    super();
    this.state = {
      robots : [],
      searchField : ''
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}))
  }

onSearch = (event) => {
  this.setState({searchField: event.target.value})
}

  render() {
    const {robots, searchField} = this.state;
    const filteredSearch = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    }) 
    return (
      !robots.length ? <h1>Loading...</h1> :
      (
        <div className="App">
          <Search search={this.onSearch}/>
          <Scroll>
            <CardList robots={filteredSearch}/>
          </Scroll>
        </div>
      )
    );
  }  
  }

export default App;

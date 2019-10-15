import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar'
import Players from './components/Players'




export default class App extends Component {
  constructor(){
    super()
    this.state = {
      player: [{
        country: '',
        id: '',
        name: '',
        searches: ''
      }]
    }
  }

  componentDidMount() {
    // fetches player data for state
    this.fetchPlayerData()
  }

  fetchPlayerData = () => {
    axios.get('http://localhost:5000/api/players').then(res => this.setState({
      player: res.data
    })).catch(err => console.log("error:", err))
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <h1>Players!</h1>
          {this.state.player.map(athlete => <Players player={athlete}/>)}
        </header>
      </div>
    )
  }
}



// import React from 'react';
// import './App.css';
// import SearchButtons from './components/SearchButtons'

// function App() {
//  



//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Players!</h1>
//         <SearchButtons alphabet={alphabet}/>
//       </header>
//     </div>
//   );
// }

// export default App;

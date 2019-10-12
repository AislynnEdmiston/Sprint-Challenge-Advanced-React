import React, { Component } from 'react';
import './App.css';
import SearchButtons from './components/SearchButtons';



export default class App extends Component {

  fetchPlayerData = () => {
    axios.get('http://localhost:5000/api/players').then(res => console.log(res.data)).catch(err => console.log("error:", err))
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Players!</h1>
          <SearchButtons />
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

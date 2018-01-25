import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {
  render() {
    const helloWorld = 'Welcome to the Road to learn React';
    const cheese = {
      text: "Welcome to the world of the wide web."
    }
    return (
      
      <div className="App">
        <h2>{helloWorld}</h2>
        <h2>{cheese.text}</h2>

        {list.map(item => {
            <div key={item.objectID}>
          
              <span>
                <a href={item.url}>{item.title} </a>  
              </span>
              <span>{item.author} </span>
              <span>{item.num_comments} </span>
              <span>{item.points} </span>
            </div>
        })}
        <img src="https://i.imgur.com/ovPlyGx.png"></img>
      </div>
    );
  }
}

export default App;
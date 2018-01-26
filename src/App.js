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

function isSearched(searchTerm) {
  return function (item) {
    // some condition which returns true of false
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }

  // const isSearched = searchTerm => item => 
  // item.title.toLowerCase().includes(searchTerm.toLowerCase()); 
}



function Search({value, onChange, children}) {
  return (
    <form>
      {children} < input
        type="text"
        value={value}
        onChange={onChange}
      />
    </form>
  );
}


function Button(props){
  const { onClick, className = '', children } = props; 

  return (
    <button 
      onClick={onClick}
      className={className}
      type="button">
      {children}
    </button> 
  );
}

function Table(props){
  const { list, pattern, onDismiss } = props; 

  return (
    <div>
        {list.filter(isSearched(pattern)).map(item =>
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author} </span>
            <span>{item.num_comments} </span>
            <span>{item.points} </span>
            <span>
              <Button onClick={() => onDismiss(item.objectID)}>
                Dismiss
              </Button>
            </span>
          </div>
        )}
      </div>
  ); 
}



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list: list,
      searchTerm: '',
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onClickMe = this.onClickMe.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onClickMe = () => {
    console.log(this);
  }

  onDismiss(id) {
    function isNotId(item) {
      return item.objectID !== id;
    }
    // const isNotId = item => item.objectID !== id; 
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });

  }

  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="App">
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
        >
          Search
        </Search>
        <Table
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>

    );
  }
}

export default App;


// class App extends Component {
//   render() {
//     const helloWorld = 'Welcome to the Road to learn React';
//     const cheese = {
//       text: "Welcome to the world of the wide web."
//     }
//     return (

//       <div className="App">
//         <h2>{helloWorld}</h2>
//         <h2>{cheese.text}</h2>

//         {list.map(item => {
//           <div key={item.objectID}>

//             <span>
//               <a href={item.url}>{item.title} </a>
//             </span>
//             <span>{item.author} </span>
//             <span>{item.num_comments} </span>
//             <span>{item.points} </span>
//           </div>
//         })}
//         <img src="https://i.imgur.com/ovPlyGx.png"></img>
//       </div>
//     );
//   }
// }


// class Button extends Component {
//   render() {
//     const {
//       onClick,
//       className = '',
//       children,
//     } = this.props;

//     return (
//       <button
//         onClick={onClick}
//         className={className}
//         type="button"
//       >
//         {children}
//       </button>
//     );
//   }
// }

// class Search extends Component {
//   render() {
//     const { value, onChange, children } = this.props;
//     return (
//       <form>
//         {children}
//         <input
//           type="text"
//           value={value}
//           onChange={onChange}
//         />
//       </form>
//     );
//   }
// }




// class Table extends Component {
//   render() {
//     const { list, pattern, onDismiss } = this.props;
//     return (
//       <div>
//         {list.filter(isSearched(pattern)).map(item =>
//           <div key={item.objectID}>
//             <span>
//               <a href={item.url}>{item.title}</a>
//             </span>
//             <span>{item.author} </span>
//             <span>{item.num_comments} </span>
//             <span>{item.points} </span>
//             <span>
//               <Button onClick={() => onDismiss(item.objectID)}>
//                 Dismiss
//               </Button>
//               <Button className="What"></Button>
//             </span>
//           </div>
//         )}
//       </div>
//     );
//   }
// }
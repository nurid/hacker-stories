import * as React from 'react';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
   title: 'Redux',
   url: 'https://redux.js.org/',
   author: 'Dan Abramov, Andrew Clark',
   num_comments: 2,
   points: 5,
   objectID: 1,
  },
];

const title2 = 'react eslint waring ttile2 never used?';
const title = 'React Reactor';
const welcome = { title: "React", greeting: "Hey..."};

function getSound(sound) {
  return sound;
}

const ar = ["makan", "nasi", "goreng"];

function App() {

  return (
   <div>
     <h1>Hello {title}</h1>

     <label htmlFor="search">Search: </label>
     <input id="search" type="text" />

     <h1>{welcome.title} {welcome.greeting}</h1>

     <h1>Hello {getSound("Tiger")}</h1>

     <h1> Mapping array ar</h1>
     <ul>
       {ar.map((val, index) => <li>{++index}. {val}</li>)}
     </ul>

     <h1>Mapping list of objects</h1>

     <ul>
      {list.map(function(item) {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
        );
      })}
     </ul>

     <hr />

     <h1>List component</h1>
     <List />

      <h1>Search component</h1>
      <Search />
  </div>

  )
}

function Search() {
  return (
    <div>
     <label htmlFor="search">Search: </label>
     <input id="search" type="text" />
    </div>
  )
}

function List() {
  return (
     <ul>
      {list.map(function(item) {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
        );
      })}
     </ul>
  )
}
export default App

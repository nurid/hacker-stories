import * as React from 'react';

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
   </div>
  )
}

export default App

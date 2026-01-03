import { useState } from 'react';
import './App.css';
import News from './components/News';
//import Timer from './components/Timer';

function App() {
  // {/*Create a state to store the selected category */}
    const [category, setCategory] = useState("general");

  return (
    <div className="App">
      {/* Timer Application */}
      {/* <Timer /> */}

      <h1> My News Application </h1>
      {/* Button to change the category */}
      <button className="btn" onClick={() => setCategory("general")}>General</button>
      <button className="btn" onClick={() => setCategory("sports")}>Sports</button>
      <button className="btn" onClick={() => setCategory("technology")}>Technology</button>
      <button className="btn" onClick={() => setCategory("health")}>Health</button>
      <button className="btn" onClick={() => setCategory("entertainment")}>Entertainment</button>

      {/* Passing the category to News */}

      <News category ={category} />
    </div>
  );
}

export default App;
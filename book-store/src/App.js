import React from 'react';
import Header from "./components/Header";
import{Route,Routes} from'react-router-dom';
import Home from "./components/Home";
import AddBook from './components/AddBook';
import Books from "./components/Book/Books";
import About from './components/About';
function App() {
  return (
      <React.Fragment>
      <header>
         <Header/>
      </header>
    <main>
    <Routes>
      <Route path="/" elemant={<Home />} exact  />
      <Route path="/add" elemant={<AddBook/>} exact  />
      <Route path="/books" elemant={<Books/>} exact  />
      <Route path="/about" elemant={<About/>} exact  />
      </Routes>
      </main>
      </React.Fragment>
  );
}

export default App;

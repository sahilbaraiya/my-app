import logo from './logo.svg';
import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './Home.JS';
import {User} from './components/User';


function Welcome(props) {
  return <h1>jay swaminarayan {props.name}</h1>
}

function Greet(props) {
  return <h1>good morning {props.rest}</h1>
}

const Pro = () => {
  return <h1>hello This profile component</h1>;
};
const Contact = () => {
  return <h1>hello This contact component </h1>;
};

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className='App'>
          <img src={logo} className='App-logo' all='logo' />
          <p>Jay Swaminarayan</p>

          <user/>
          <Welcome name="sahil" />
          <Welcome name="utsav" />

          <Greet rest="to all" />
          <Home/> 

          <NavLink to="/profile">profile</NavLink>
          <br></br>
          <NavLink to="/contact">contact</NavLink>
          <Routes>

            <Route path='/Profile' element={<Pro />} />
            <Route path='/contact' element={<Contact />} />

          </Routes>



        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;













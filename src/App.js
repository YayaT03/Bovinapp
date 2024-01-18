import { Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from "../src/view/Home"
import Blog from "./view/Blog"
import Login from "./view/Login"
import Aplication from "../src/dashboard/Aplication"

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='Blog' element={<Blog/>} />
      <Route path='Login' element={<Login/>}/>
      <Route exact path="/Aplication/*" element={<Aplication/>} />
      <Route path="*" element={<h1>Not found - No insista tienes una pagina que no existe</h1>} />

      </Routes>

      
    </div>
  );
}

export default App;

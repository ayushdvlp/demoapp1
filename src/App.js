
import logo from './logo.svg';
import './App.css';
import DisplayOfCakes from './components/DisplayOfCakes';
import Navbar from './routing components/Navbar';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './routing components/Home';
import Fashion from './routing components/Fashion';
import Electronics from './routing components/Electronics';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path='/'             element={<Home/>}/>
            <Route path='/fashion'      element={<Fashion/>}/>
            <Route path='/electronics'  element={<Electronics/>}/>
        </Routes>
    </div>
    </BrowserRouter>
)   
}

export default App;

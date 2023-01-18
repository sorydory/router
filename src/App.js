import './App.css';
import Product from './pages/Product';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import Subpages from './pages/Subpages';
import Subpage from './pages/Subpage';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">
      <Header sitename="green"/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:productname' element={<Product/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='subpages' element={<Subpages/>}/>
        <Route path='subpages/:id' element={<Subpage/>}/>
        <Route path=':id' element={<Subpage/>}/>
      </Routes>
      <Route path="*" element={<NotFound/>}/>

    </div>
  );
}

export default App;

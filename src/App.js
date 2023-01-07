
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import './App.css';
import ADD from './component/ADD';

import POrder from './component/POrder';
import Update from './component/Update';
import NavbarLink from './NavbarLink';



function App() {

  
  return (
    <div className="App">
      
      
      <BrowserRouter>
      
    <Routes>
      {/* <Route path='/' element={<NavbarLink />} /> */}
      <Route path='/' element={<POrder />} />
      <Route path='/add' element={<ADD />} />
      <Route path='/update' element={<Update />} />
    </Routes>
    <div style={{marginTop:"5rem",textAlign:"center"}}>
      <Link to="/add" style={{backgroundColor:"gray",borderRadius:"8px",fontSize:"20px",border:"none",padding:"16px",margin:"30px"}} >ADD</Link> 
      <Link to="/update" style={{backgroundColor:"gray",borderRadius:"8px",fontSize:"20px",border:"none",padding:"16px",margin:"30px"}} >Update</Link>
    </div>
    
    </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import {Link,Outlet} from 'react-router-dom';

const NavbarLink = () => {
    return (
        <div>
     <div style={{marginTop:"5rem",textAlign:"center"}}>
      <Link to="/add" style={{backgroundColor:"gray",borderRadius:"8px",fontSize:"20px",border:"none",padding:"16px",margin:"30px"}} >ADD</Link> 
      <Link to="/update" style={{backgroundColor:"gray",borderRadius:"8px",fontSize:"20px",border:"none",padding:"16px",margin:"30px"}} >Update</Link>
    </div>
    <Outlet />
        </div>
    );
}

export default NavbarLink;

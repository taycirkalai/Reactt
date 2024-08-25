import React from "react";
import { Link } from "react-router-dom";
import res from'../../pics/resplogo.png'

function SideBar(){
    return(
<div className="sidebar pe-4 pb-3">
  <nav className="navbar bg-light navbar-light">
    
    <div className="d-flex align-items-center ms-4 mb-5">
      <div className="position-relative">
        <img className="rounded-circle" src={res} alt="img" style={{width: 60, height: 70 , marginTop:'15px'}} />
        <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
      </div>
      <div className="ms-3">
        <h6 className="mb-0"style ={{marginTop:'30px' , marginLeft:'-5px'}}>Responsable</h6>
        <span style ={{ marginLeft:'-5px'}}>Responsable</span>
      </div>
    </div>

    <div className="navbar-nav w-100">
    <Link to={"/wlcresp"}>
      <a className="nav-item nav-link active">
        <i className="fa fa-user-md me-2" />
        Dashboard
    </a>
    </Link>
      <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            <i className="fa fa-ambulance me-2" />DEMANDES</a>
        <div className="dropdown-menu bg-transparent border-0">
         <Link to={"/listdmdSangResp"} className="nav-link dropdown-toggle">DEMANDE SANG</Link>
         <Link to={"/listdmdEventResp"} className="nav-link dropdown-toggle">DEMANDE EVENEMNT</Link>
         <Link to={"/listdmdAmbResp"} className="nav-link dropdown-toggle">DEMANDE AMBASSADEUR</Link>
         <Link to={"/ListAmbAccepter"}className="nav-link dropdown-toggle">LISTE DES AMBASSADEUR</Link>
        </div>
      
      </div>
      
     
    </div>
  </nav>

</div>

    );}
export default SideBar;
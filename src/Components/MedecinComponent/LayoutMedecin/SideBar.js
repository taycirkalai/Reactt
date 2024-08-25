import React from "react";
import { Link } from "react-router-dom";
import med from'../../pics/medecin.png'

function SideBar(){
    return(
<div className="sidebar pe-4 pb-3">
  <nav className="navbar bg-light navbar-light">
    
    <div className="d-flex align-items-center ms-4 mb-5">
      <div className="position-relative">
      <img className="rounded-circle" src={med} alt="img" style={{width: 60, height: 60 , marginTop:'15px'}} />
        <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
      </div>
      <div className="ms-3">
        <h6 className="mb-0"style ={{marginTop:'10px'}}>Medecin</h6>
        <span>Medecin</span>
      </div>
    </div>

    <div className="navbar-nav w-100">
    <Link to={"/wlcMed"}>
      <a className="nav-item nav-link active">
        <i className="fa fa-user-md me-2" />
        Dashboard
    </a>
    </Link>
      <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            <i className="fa fa-ambulance me-2" />DEMANDE</a>
        <div className="dropdown-menu bg-transparent border-0">
         <Link to={"/addDemande"} className="nav-link dropdown-toggle">DEPOSER DEMANDE</Link>
         <Link to={"/listdmd"} className="nav-link dropdown-toggle">LISTE DEMANDES</Link>
        </div>
      </div>
      <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            <i className="fa fa-calendar-check" />RENDEZ-VOUS</a>
        <div className="dropdown-menu bg-transparent border-0">
         <Link to={"/ListRDV"}className="nav-link dropdown-toggle">LISTE RENDEZ-VOUS</Link>
         <Link to={"/ListRDVAccepter"}className="nav-link dropdown-toggle">MES RENDEZ-VOUS</Link>
        </div>
      </div>
     
    </div>
  </nav>

</div>

    );}
export default SideBar;
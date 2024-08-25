import React from "react";
import { Link } from "react-router-dom";
import admin from '../../pics/Logoadmin.png'

function SideBar(){
    return(
<div className="sidebar pe-4 pb-3">
  <nav className="navbar bg-light navbar-light">
    
    <div className="d-flex align-items-center ms-4 mb-5">
      <div className="position-relative">
        <img className="rounded-circle" src={admin} alt="img" style={{width: 40, height: 40}} />
        <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
      </div>
      <div className="ms-3">
        <h6 className="mb-0"style ={{marginTop:'10px'}}>ADMIN</h6>
        <span>Admin</span>
      </div>
    </div>

    <div className="navbar-nav w-100">
    <Link to={"/wlcAd"}>
      <a className="nav-item nav-link active">
        <i className="fa fa-home me-2" />
        Dashboard
    </a>
    </Link>
      <div className="nav-item dropdown fixCL">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            <i className="fa fa-user me-2" />LISTE USERS</a>
        <div className="dropdown-menu bg-transparent border-0">
         <Link to={"/ListUserspm"} className="nav-link dropdown-toggle">PERSONNE MORALE</Link>
         <Link to={"/ListUsersph"} className="nav-link dropdown-toggle">PERSONNE PHYSIQUE</Link>
        </div>
      </div>
      <Link to={"/ListMed"}>
      <a className="nav-item nav-link ">
        <i className="fa fa-user-md" />
        LISTE MEDS
    </a></Link>
    <Link to={"/ListResp"}>
      <a className="nav-item nav-link ">
      <i class="icofont-business-man-alt-1"></i>        LISTE RESP
    </a></Link>
      <div className="nav-item dropdown fixCL">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            <i className="fa fa-newspaper" />ARTICLE</a>
        <div className="dropdown-menu bg-transparent border-0">
         <Link to={"/ListArticle"}className="nav-link dropdown-toggle">LISTE ARTICLE</Link>

        </div>
      </div>
      <div className="nav-item dropdown fixCL">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            <i className="fa fa-bullhorn" />PUBLICATION</a>
        <div className="dropdown-menu bg-transparent border-0">
         <Link to={"/ListPub"} className="nav-link dropdown-toggle" >LISTE PUBLICATION</Link>
        </div>
      </div>

      <div className="nav-item dropdown fixCL">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            <i className="fa fa-hospital" />CENTRES</a>
        <div className="dropdown-menu bg-transparent border-0">
         <Link to={"/ListCentre"} className="nav-link dropdown-toggle" >LISTE CENTRES</Link>
        </div>
      </div>
      <div className="nav-item dropdown fixCL">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            <i className="fa fa-file-image" />MEDIA D'EVENT</a>
        <div className="dropdown-menu bg-transparent border-0">
         <Link to={"/ListMedia"} className="nav-link dropdown-toggle" >LISTE MEDIA</Link>
        </div>
      </div>
    </div>
  </nav>

</div>

    );}
export default SideBar;
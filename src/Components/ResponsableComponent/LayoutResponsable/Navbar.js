import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import res from'../../pics/ress.png'

function NavBar(){
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id_resp'); 
    localStorage.removeItem('id_centre'); 
    navigate('/loginR')

  }
  const id_resp = localStorage.getItem("id_resp");
    return(
  <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
   
    <a href="#" className="sidebar-toggler flex-shrink-0">
      <i className="fa fa-bars" />
    </a>
    <div className="navbar-nav align-items-center ms-auto">
      <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
          <img className="rounded-circle me-lg-2" src={res} alt="img" style={{width: 50, height: 35}} />
          <span className="d-none d-lg-inline-flex">Responsable</span>
        </a>
        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
        <button className="dropdown-item"><Link to={`/ProfilResp/${id_resp}`} >Profil</Link></button>
          <button onClick={handleLogout}className="dropdown-item">Déconnexion</button>
        </div>
      </div>
    </div>
  </nav>

);}
export default NavBar;
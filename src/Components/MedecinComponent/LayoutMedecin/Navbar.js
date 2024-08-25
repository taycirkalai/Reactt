import React from "react";
import { Link, useNavigate } from 'react-router-dom' 
// import med from '../../../../public/images/service/medecin.png'
import med from '../../pics/medecin.png'

function NavBar(){
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token'); 
    localStorage.removeItem('id_med'); 
    localStorage.removeItem('id_centre'); 
    navigate('/loginM')

  }
  const id_med = localStorage.getItem("id_med");
    return(
  <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
   
    <a href="#" className="sidebar-toggler flex-shrink-0">
      <i className="fa fa-bars" />
    </a>
    <div className="navbar-nav align-items-center ms-auto">
      <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
        <img className="rounded-circle me-lg-2" src={med} alt="img" style={{width: 40, height: 40}} />
          <span className="d-none d-lg-inline-flex">Medecin</span>
        </a>
        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
          
            <button className="dropdown-item"><Link to={`/ProfilMed/${id_med}`} >Profil</Link></button>
         <button onClick={handleLogout}className="dropdown-item">Déconnexion</button>
        </div>
      </div>
    </div>
  </nav>

);}
export default NavBar;
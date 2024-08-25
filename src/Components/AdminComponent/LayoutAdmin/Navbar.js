import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import admin from '../../pics/iconAdmin.jpg'

function NavBar(){
  const navigate = useNavigate()
 
// Récupérer l'ID de l'administrateur depuis localStorage
const adminId = localStorage.getItem('adminId');

const handleLogout = () => {
  localStorage.removeItem('token');
  navigate('/login');
};

    return(
   <>
   <head>
    <link rel='stylesheet' href="%PUBLIC_URL%/Admin/css/style.css">
      </link>   </head>
   
  <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
   
    <a href="#" className="sidebar-toggler flex-shrink-0">
      <i className="fa fa-bars" />
    </a>
    <div className="navbar-nav align-items-center ms-auto">
    <div class="nav-item dropdown">
                            <i class="fa fa-envelope me-lg-2"></i>
                            <Link to={"/Message"}> <span class="d-none d-lg-inline-flex">Message</span></Link>
                        
                        </div>
      <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
          <img className="rounded-circle me-lg-2" src={admin} alt="img" style={{width: 40, height: 40}} />
          <span className="d-none d-lg-inline-flex">ADMIN</span>
        </a>
        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
           <Link to={`/Profil/1`} className="dropdown-item">Profil</Link>
          <button onClick={handleLogout}className="dropdown-item">Déconnexion</button>
        </div>
      </div>
    </div>
  </nav>
</>
);}
export default NavBar;
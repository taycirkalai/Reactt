import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import '../../style.css'
import logo from'../pics/logo.png'

function Header() {


  const img = {
    height: '65px',
    weidth: '50px',
    marginLeft: '-120px'
  }
  const color = {
    color: '#DC143C'
  }
  const userRole = localStorage.getItem("role");
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
  const [isLoggedOut, setIsLoggedOut] = useState(localStorage.getItem("isLoggedOut") === "true");
  //const [isLoggedOut, setIsLoggedOut]=useState(localStorage.getItem("isLoggedOut") === "true");
  localStorage.setItem("isLoggedIn", true);
  localStorage.setItem("isLoggedOut", true);
  const navigate = useNavigate()
  // Gérer la déconnexion de l'utilisateur
  const handleLogout = () => {
    // Supprimer les informations d'authentification de l'utilisateur du stockage local
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    localStorage.removeItem('token')
    localStorage.removeItem('id_user');
    navigate('/')
    // Mettre à jour l'état local pour signaler que l'utilisateur est déconnecté
    setIsLoggedIn(false);
    setIsLoggedOut(true);
  };
  const id_user = localStorage.getItem("id_user");
  // Affiche les fonctions appropriées dans la barre de navigation en fonction du rôle de l'utilisateur
  const navBar = () => {
    if (userRole === "personne physique") {
      // Afficher les fonctions pour les utilisateurs ayant le rôle d'administrateur
      return (
        <>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Demande <i className="icofont-thin-down" /></a>
            <ul className="dropdown-menu" aria-labelledby="dropdown02">
              <li><a className="dropdown-item"><Link to="/Rdv">Prendre rendez-vous</Link></a></li>
              <li><a className="dropdown-item"><Link to="/consulterRdv">Consulter rendez-vous</Link></a></li>
              <li><a className="dropdown-item"><Link to="/Amb">Déposer demande <br/>ambassadeur</Link></a></li>
              <li><a className="dropdown-item"><Link to="/consulterAmb">Consulter votre demande <br/>ambassadeur</Link></a></li>
            </ul>
          </li>
          {isLoggedIn && (
             <li className="nav-item dropdown">
             <a className="nav-link dropdown-toggle" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Profile <i className="icofont-thin-down" /></a>
             <ul className="dropdown-menu" aria-labelledby="dropdown02">
             <li><a className="dropdown-item"><Link to={`/ProfilUserPh/${id_user}`}>Paramètres</Link></a></li>     

             <li className="nav-item">
              <a href="" className="nav-link" style={color} onClick={handleLogout}>
                logout</a>
            </li>               
          </ul>
           </li>
        
          

          )}
          {!isLoggedIn && isLoggedOut && (
            <li className="nav-item">
              <a className="nav-link" style={color}>
                <Link to="/HomeLogin">login</Link>
              </a>
            </li>
          )}
        </>
      );
    } else if (userRole === "personne morale") {
      // Afficher les fonctions pour les utilisateurs ayant le rôle de modérateur
      return (
        <>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Entreprise <i className="icofont-thin-down" /></a>
            <ul className="dropdown-menu" aria-labelledby="dropdown02">
              <li><a className="dropdown-item" ><Link to="/OrganiseCollect">Organiser une collecte</Link></a></li>
              <li><a className="dropdown-item" ><Link to="/ConsulterdmdCollecte">Consulter demande</Link></a></li>
            </ul>
          </li>
          {isLoggedIn && (
            
            <li className="nav-item dropdown">
             <a className="nav-link dropdown-toggle" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Profile <i className="icofont-thin-down" /></a>
             <ul className="dropdown-menu" aria-labelledby="dropdown02">
             <li><a className="dropdown-item"><Link to={`/ProfilUserPM/${id_user}`}>Paramètres</Link></a></li>     

             <li className="nav-item">
              <a href="" className="nav-link" style={color} onClick={handleLogout}>
                logout</a>
            </li>               
          </ul>
           </li>
          )}
        </>)
    } else {
      // Afficher les fonctions pour les utilisateurs non connectés ou ayant un rôle invalide
      return (
        <>
          <li className="nav-item">
            <a className="nav-link" style={color}>
              <Link to="/HomeLogin">login</Link>
            </a>
          </li>
        </>
      );
    }
  };

  return (
    <header>
      <div className="header-top-bar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <ul className="top-bar-info list-inline-item pl-0 mb-0">
                <li className="list-inline-item"><a href="mailto:support@gmail.com"><i className="icofont-support-faq mr-2" />dondusangdonnevie@gmail.com</a></li>
                <li className="list-inline-item"><i className="icofont-location-pin mr-2" />Adresse Bab Saadoun station - Tunisia</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                <a href="tel:+23-345-67890">
                  <span>Contact:   </span>
                  <span className="h4">71 561 920</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navigation" id="navbar">
        <div className="container">
          <a className="navbar-brand" >
            <Link to="/"> <img style={img} src= {logo}/></Link>
          </a>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain" aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icofont-navigation-menu" />
          </button>
          <div className="collapse navbar-collapse" id="navbarmain">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a className="nav-link" ><Link to="/actualite">Actualité</Link></a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Type de don <i className="icofont-thin-down" /></a>
                <ul className="dropdown-menu" aria-labelledby="dropdown02">
                  <li><a className="dropdown-item" ><Link to="/DonSang">LE DON DE SANG </Link></a></li>
                  <li><a className="dropdown-item" ><Link to="/DonPlasma">LE DON DE PLASMA </Link></a></li>
                  <li><a className="dropdown-item" ><Link to="/DonPlaquette">LE DON DE PLAQUETTES</Link></a></li>

                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Qui peut donner <i className="icofont-thin-down" /></a>
                <ul className="dropdown-menu" aria-labelledby="dropdown02">
                  <li><a className="dropdown-item" ><Link to="/Conditions">CONDITIONS</Link></a></li>
                  <li><a className="dropdown-item"  ><Link to="/ContreIndection">CONTRE-INDICATIONS </Link></a></li>
                  <li><a className="dropdown-item" ><Link to="/Test">TEST : PUIS-JE DONNER ?</Link></a></li>
                  <li><a className="dropdown-item" ><Link to="/Delai">DÉLAI ENTRE 2 DONS</Link></a></li>

                </ul>
              </li>          <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">À propos <i className="icofont-thin-down" /></a>
                <ul className="dropdown-menu" aria-labelledby="dropdown02">
                  <li><a className="dropdown-item" href=""><Link to="/Mission">NOTRE MISSION</Link></a></li>
                  <li><a className="dropdown-item" href=""><Link to="/Valeur">NOS VALEURS</Link></a></li>

                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Le sang <i className="icofont-thin-down" /></a>
                <ul className="dropdown-menu" aria-labelledby="dropdown02">
                  <li><a className="dropdown-item" href=""><Link to="/Sang">QU'EST-CE QUE LE SANG ?</Link></a></li>
                  <li><a className="dropdown-item" href=""><Link to="/GroupeSanguins">LES GROUPES SANGUINS</Link></a></li>
                  <li><a className="dropdown-item" href=""><Link to="/PocheSang">LE PARCOURS D'UNE POCHE </Link>
                    <br></br>DE SANG</a></li>

                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Les centres <i className="icofont-thin-down" /></a>
                <ul className="dropdown-menu" aria-labelledby="dropdown02">
                  <li><a className="dropdown-item" href=""><Link to="/Sfax">crts-sfax </Link></a></li>
                  <li><a className="dropdown-item" href=""><Link to="/Sousse">crts-sousse</Link></a></li>
                  <li><a className="dropdown-item" href=""><Link to="/Gabes">crts-gabes</Link></a></li>
                  <li><a className="dropdown-item" href=""><Link to="/Gafsa">crts-gafsa</Link> </a></li>
                  <li><a className="dropdown-item" href=""><Link to="/Jandouba">crts-jendouba</Link></a></li>


                </ul>
              </li>

              
              <li className="nav-item"><a className="nav-link" ><Link to="/Contact">Contact </Link></a></li>
              {navBar()}
            </ul>


          </div>
        </div>
      </nav>
    </header>

  );
}
export default Header;
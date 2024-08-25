import Footer from "./Footer";
import Header from "./Header";
import axios from 'axios';
import { useState ,useEffect } from "react";
import { useNavigate , Link} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
function Rdv() {
  const [idUser, setIdUser] = useState(null);
  useEffect(() => {
    if ((!localStorage.getItem('token'))|| (localStorage.getItem("role")!="personne physique")){
      navigate('/LoginPH');
    } else {
      setIdUser(jwt_decode(localStorage.getItem('token')).sub);
     
    }
  }, []);

  useEffect(() => {
    if (idUser) {
      console.log("idUser: ", idUser);
    }
  }, [idUser]);

  const [id_centre, setIdCentre] = useState("");
  
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [centres, setCentres] = useState([]);
  const navigate = useNavigate();

  const API_BASE_URL="http://localhost:8080/api/rdv/ajout";

  useEffect(() => {
    axios.get('http://localhost:8080/api/centre/all')
      .then(response => {
        setCentres(response.data);
      })
      .catch(error => {
        console.error(error.response.data);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!id_centre) {
      console.error("Centre ID cannot be null");
      return;
    }
    const id_user = localStorage.getItem('id_user');
if (!id_user) {
  console.error("personne physique ID not found");
  return;
}

    const data = {
      centre: {
        id_centre: id_centre
      },
      personnePhysique :{
        id_user: parseInt(id_user),
        nom:nom,
        prenom:prenom,
      }
    };
    axios.post(`${API_BASE_URL}`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
    .then(response => {
      console.log(response.data);
      navigate('/consulterRdv');
    })
    .catch(error => console.error(error));
  };

  const handleCentreChange = (event) => {
    setIdCentre(event.target.value);
  };

    const img={
        width : '1500px' ,
        height :'400px',
        marginTop:'-8%'
    }
    const test={
        width : '1500px' ,
        height :'420px'
    }
  
    const text={
        marginTop:'-25%'
    }
  
  return (
    <div>
    <Header/>
    <div>

<section className="page-title bg-1" style ={test}>


  <div className="overlay" >
  <img style ={img}src="images/rdv1.png"></img>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center" >
            <div style={text}>
            <span className="text-white"></span>
          <h1 className="text-capitalize mb-5 text-lg">Réservez votre rendez-vous</h1>
          <span className="text-white">Je me mobilise pour sauver des vies.</span>
            </div>
        
        </div>
      </div>
    </div>
  </div>
</section>

<section className="appoinment section">
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <div className="mt-3">
          <div className="feature-icon mb-3">
            <i className="icofont-support text-lg" />
          </div>
          <span className="h3">Une assistance à tout moment</span>
          <h2 className="text-color mt-3">71 573 884 </h2>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="appoinment-wrap mt-5 mt-lg-0 pl-lg-5">
          <h2 className="mb-2 title-color">Rendez-Vous</h2>
          <p className="mb-4">EN 30 MINUTES, VOUS POUVEZ SAUVER 3 VIES!</p>
          <form id="#" className="appoinment-form" onSubmit={handleSubmit} >
            <div className="row">
              <div className="col-lg-6">
                
              </div>
            
           <div className="form-group">
           <select className="form-control" id="centre" name="centre" onChange={handleCentreChange}>
                <option value="">Sélectionnez un centre</option>
                {centres.map(centre => (
                  <option key={centre.id_centre} value={centre.id_centre}>{centre.name_centre} ({centre.lieu_centre})</option>
                ))}
              </select>
              </div>
           </div>
            <button type="submit" className="btn btn-main btn-round-full" >PRENDRE RENDEZ-VOUS<i className="icofont-simple-right ml-2" /></button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
<Footer/>

    </div>
);}

export default Rdv;
import Footer from "./Footer";
import Header from "./Header";
import axios from 'axios';
import { useState ,useEffect } from "react";
import { useNavigate , Link} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
function OrganiseCollect (){
  const navigate1 = useNavigate();
const [showAlert, setShowAlert] = useState(false);
  const [idUser, setIdUser] = useState(null);
  
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate1('/LoginPM');
    } else {
      setIdUser(jwt_decode(localStorage.getItem('token')).sub);
    }
  }, [idUser]);

  useEffect(() => {
    if (idUser) {
      console.log("idUser: ", idUser);
    }
  }, [idUser]);
  const [id_centre, setIdCentre] = useState("");
  
  const [nom_entreprise, setNomEntreprise] = useState("");
  const [localisation, setLocalisation] = useState("");
  const [nombre_colab, setNombreColab] = useState("");
  const [date_event, setDateEvent] = useState("");
  const [commentaire, setCommentaire] = useState("");
  const [centres, setCentres] = useState([]);
  const navigate = useNavigate();

  const API_BASE_URL="http://localhost:8080/api/event/ajout";

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
      console.error("personne morale ID not found");
      return;
    }
const data = {
  nombre_colab:nombre_colab,
  commentaire:commentaire,
  date_event:date_event,
  centre: {
    id_centre: id_centre
  },
  personneMorale :{
    id_user: parseInt(id_user),
    nom_entreprise:nom_entreprise,
    localisation:localisation,
    
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
  navigate('/ConsulterdmdCollecte');
})
.catch(error => console.error(error));
};
const handleDateEventChange = (e) => {
  const currentDate = new Date(); 
  const dateEvent = new Date(e.target.value); 
  if (dateEvent.getTime() < currentDate.getTime()) {
    setShowAlert(true); 
    return;
  };
  
  const formattedDate = dateEvent.toISOString(); // Formater la date au format ISO 8601
  
  setDateEvent(formattedDate);
  setShowAlert(false); 
};

const handleCentreChange = (event) => {
setIdCentre(event.target.value);
};
  const img={
        width : '1500px' ,
        height :'420px',
        marginTop:'-8%'
    }
    const test={
        width : '1500px' ,
        height :'420px'
    }
  
    const text={
        marginTop:'-30%'
    }
    const jus={
        textAlign: 'justify'
      }
return (
    <div>
<Header/>
<div>

<section className="page-title bg-1" style ={test}>


  <div className="overlay" >
  <img style ={img}src="images/org.jpg"></img>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center" >
            <div style={text}>
            <span className="text-white"><br/></span>
          <h1 className="text-capitalize mb-5 text-lg">MOBILISER MON ENTREPRISE</h1>
          <span className="text-white">
          Beaucoup entreprises, organisations ou encore écoles organisent chaque année
         des collectes de sang dans leurs locaux.<br/> Envie de rejoindre cette aventure ?

          </span>
            </div>
        
        </div>
      </div>
    </div>
  </div>
</section>

<div>
  
<div className="container">
   
   <div className="row">
     <div className="col-lg-8">
       <div className="department-content mt-5">
         <h3 className="mt-5 mb-4">Pourquoi mobiliser son entreprise ?</h3>

         
         <div className="divider my-4" />
         <p className="" style={jus}>

         Pour plusieurs raisons !<br/>
        Tout d’abord, parce que vous offrirez à l’ensemble de vos collaborateurs un accès facile à un geste citoyen très important. 
        Ensuite, parce que pour une entreprise, organiser une collecte de sang représente une importante plus-value en termes d’image, de citoyenneté et de solidarité. Cette action permettra de donner une image plus humaine à votre entreprise tant à l’extérieur qu’auprès de vos employés.
        <br/>
          Alors vous aussi rejoignez l’aventure « don de sang » !
         </p>
        
         <h3 className="mt-5 mb-4">Comment mobiliser votre entreprise ?</h3>

         
         <div className="divider my-4" />
         <p className="" style={jus}>

         Pour mobiliser votre entreprise, il vous suffit simplement de compléter le formulaire ci-dessous. Nous vous contacterons au plus vite pour étudier ensemble la faisabilité de ce beau projet.
         </p>
        
        </div></div></div></div>
  <section className="contact-form-wrap section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <form id="contact-form" className="contact__form " onSubmit={handleSubmit} >
            {/* form message */}
            {showAlert && ( 
            <div className="alert alert-warning" role="alert">
              La date d'évenement doit être suppérieure à la date d'aujourd'huis
            </div>
          )}
            <div className="row">
              
              
              <div className="col-lg-6">
                <div className="form-group">
                  <input name="nombre_colab" id="nombre_colab" type="text" className="form-control" placeholder="Nombre de collaborateurs dans l'entreprise" 
                   value={nombre_colab} onChange={event => setNombreColab(event.target.value)} 
                    required/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input type="datetime-local" id="date_event"
                   className="form-control" name="date_event" 
                    onChange={handleDateEventChange} />
              </div>
            </div> 
           
            </div>
            <div className="form-group-2 mb-4">
              <textarea name="commentaire" id="commentaire" className="form-control" rows={8} placeholder="commentaires"
               value={commentaire} onChange={event => setCommentaire(event.target.value)} 
               required />
            </div>
            <div className="form-group">
           <select className="form-control" id="centre" name="centre" onChange={handleCentreChange}>
                <option value="">Sélectionnez un centre</option>
                {centres.map(centre => (
                  <option key={centre.id_centre} value={centre.id_centre}>{centre.name_centre} ({centre.lieu_centre})</option>
                ))}
              </select>
              </div>
            <div className="text-center">
              <input className="btn btn-main btn-round-full" type="submit" defaultValue="Send Messege" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>
<br/>

</div>





<Footer/>

    </div>
);
}
export default OrganiseCollect;
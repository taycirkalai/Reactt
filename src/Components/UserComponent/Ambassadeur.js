import Footer from "./Footer";
import Header from "./Header";
import { useState ,useEffect } from "react";
import axios from 'axios';
import { useNavigate , Link} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
function Ambassadeur (){
  const navigate1 = useNavigate();
  const [idUser, setIdUser] = useState(null);
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate1('/LoginPH');
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
  
  const [experience, setExperience] = useState("");
  const [centres, setCentres] = useState([]);
  const navigate = useNavigate();
  const API_BASE_URL="http://localhost:8080/api/demandeAm/ajout";

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
  experience:experience,
  centre: {
    id_centre: id_centre
  },
  personnePhysique :{
    id_user: parseInt(id_user),
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
  alert("Votre demande a été envoyer avec succées");
  navigate('/consulterAmb');
  //window.location.reload();
})
.catch(error => console.error(error));
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
      const amb={
        width : '550px' ,
        height :'350px',
        marginTop:'-50%',
        marginLeft:'100%',
  
      }
return (
    <div>
<Header/>
<div>

<section className="page-title bg-1" style ={test}>


  <div className="overlay" >
  <img style ={img}src="images/amb.jpg"></img>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center" >
            <div style={text}>
            <span className="text-white"><br/></span>
          <h1 className="text-capitalize mb-5 text-lg">AMBASSADEURS DE CRISE</h1>
          <span className="text-white">
          Vous êtes un professionnel et vous souhaitez appuyer les communications de 
          la service du snag vers les donneurs de sang ?



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
         <h3 className="mt-5 mb-4">Pourquoi ce programme ?</h3>

         
         <div className="divider my-4" />
         <p className="" style={jus}>

         Le Service du Sang  a pour mission de subvenir à tout moment aux besoins des hôpitaux en produits sanguins de qualité.
Chaque année plus de 90.000 donneurs, des centaines de bénévoles et un personnel totalement investi et dévoué à la cause du don de sang font de cette mission une réalité.
Il arrive cependant que certains événements (vacances scolaires, confinement, inondation…) viennent perturber les approvisionnements et mettent à mal nos stocks de produits sanguins.
Pour prévenir au mieux ces périodes creuses et parfois critiques, le Service du Sang a décidé de lancer un programme nommé « Ambassadeurs de crise ». Ce programme a pour ambition de créer un réseau de personnes ou d’entreprises (les ambassadeurs) .
La mission des "ambassadeurs de crise" sera de relayer et de soutenir le message du Service du Sang vers leurs collaborateurs directs et indirects (fournisseurs, clients...)
         </p>
        <img style={amb} src="images/devenirAmb.png"></img>
         <h3 className="mt-5 mb-4">Concrètement</h3>

         
         <div className="divider my-4" />
         <p className="" style={jus}>

         Nous vous demanderons périodiquement de soutenir nos efforts de communication afin de sensibiliser le plus grand nombre de personnes aux besoins en sang et de les motiver à se rendre dans un point de collecte du Service du Sang.
Quand le besoin s’en fera sentir, et uniquement à ce moment-là, nous vous contacterons pour vous demander votre soutien. 

En fonction de vos possibilités, vous pourrez alors utiliser tout ou partie du matériel mis à votre disposition :
<ul className="list-unstyled department-service">
            <li style={jus}><i className="icofont-minus"></i>un mail rédigé par nos soins</li>
            <li style={jus}><i className="icofont-minus"></i>un post, un visuel ou une image de couverture à publier sur votre profil Facebook (professionnel ou privé) ou sur l’intranet de votre entreprise,</li>
            <li style={jus}><i className="icofont-minus"></i>une signature à insérer dans vos e-mails</li>
            <li style={jus}><i className="icofont-minus"></i>un visuel à diffuser sur vos écrans digitaux</li>
          </ul>
         </p>
         <p className="" style={jus}><b>Tous ces éléments seront mis à votre disposition par le Service du Sang : vous ne devrez rien rédiger ou créer par vous-même !</b></p>
        </div></div></div></div>
  <section className="contact-form-wrap section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <form id="contact-form" className="contact__form " method="post"onSubmit={handleSubmit}>
            {/* form message */}
          
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <textarea name="experience" id="experience" type="text" className="form-control"rows={8} placeholder="Votre expérience"
                   value={experience} onChange={event => setExperience(event.target.value)}/>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="form-group">
                <select className="form-control" id="centre" name="centre" onChange={handleCentreChange}>
                <option value="">Sélectionnez un centre</option>
                {centres.map(centre => (
                  <option key={centre.id_centre} value={centre.id_centre}>{centre.name_centre} ({centre.lieu_centre})</option>
                ))}
              </select>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <input className="btn btn-main btn-round-full" name="submit" type="submit" defaultValue="Send Messege" />
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
export default Ambassadeur;
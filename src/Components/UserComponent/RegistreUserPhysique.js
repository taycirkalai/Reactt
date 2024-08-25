import { Link} from 'react-router-dom';
import '../../LoginUser.css';
import axios from 'axios';
import { useState  } from "react";
import { useNavigate } from 'react-router-dom';
function RegistrePhysique(){
  const [id_citoyen, setIdcitoyen] = useState("");
  const [nom, setName] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [date_nais, setDate] = useState("");
  const [sexe, setSexe] = useState("");
  const [type_sang, setTypesang] = useState("");
  const [ageError, setAgeError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [bloodTypeError, setBloodTypeError] = useState("");
  const [PwdError, setPwdError] = useState("");
  const [EmailPoint, setEmailPoint] = useState("");
  const [Mobileerror, setMobileerror] = useState("");
  const [IdError, setIdError] = useState("");
  //const navigate = useNavigate();
  const navigate = useNavigate();
  const API_BASE_URL="http://localhost:8080/api/user/personneph";
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API_BASE_URL}/registre`, { id_citoyen,nom,prenom , email , password,mobile,date_nais,sexe,type_sang },
      {
        headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8080'
    }})
      .then((response) => {
        alert("inscription avec succes")
        navigate('/LoginPH');
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.response.data);
        if (error.response.data === "La date de naissance est obligatoire") {
          setAgeError("Date de naissance doit être obligatoire");
        } else if (error.response.data === "L'âge doit être supérieur ou égal à 18 ans") {
          setAgeError("L'âge doit être suppérieur ou égale à 18 ans ");
        } else if (error.response.data === "Le groupe sanguin doit être A+,A-,B+ B-, AB+ ,AB-,O+ ou O-") { // check for blood type error message
          setBloodTypeError("Le groupe sanguin doit être A+,A-,B+ B-, AB+ ,AB-,O+ ou O-");
        } else if (error.response.data === "L'email existe déjà") {
          setEmailError("L'email déjà exsiste");
        }else if (error.response.data === "Le mot de passe doit contenir au moins 4 caractères") {
          setPwdError("Le mot de passe doit contenir au moins 4 caractères");
        }else if (error.response.data === "L'e-mail doit contenir un point") {
          setEmailPoint("L'email doit contenir un point par exemple .com ou .fr");
        } else if (error.response.data === "L'ID citoyen existe déjà") {
          setIdError("L'ID citoyen existe déjà");
        }else if (error.response.data === "Le numéro de téléphone existe déjà") {
          setMobileerror("Le numéro de téléphone existe déjà");
        }
       
       
      });
  };
  const handleSexeChange = (event) => {
    setSexe(event.target.value);
  };
  return(
    
    <div>
<section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-9 col-lg-8 col-xl-6">
        <img src="images/registre3.png" className="img-fluid" alt="Phone image" />
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
      <center><h2>Inscription </h2></center>
          <br/>
        <form onSubmit={handleSubmit}>
       <div className="row">
  <div className="col-md-6 mb-4">
    <div className="form-outline">
      
    <label className="form-label" htmlFor="form3Example1">Nom</label>
      <input type="text" id="form3Example1" className="form-control"
       value={nom}onChange={(event) => setName(event.target.value)} required/>
    </div>
  </div>
  <div className="col-md-6 mb-4">
    <div className="form-outline">
      
    <label className="form-label" htmlFor="form3Example2">Prénom</label>
      <input type="text" id="form3Example2" className="form-control"
      value={prenom}onChange={(event) => setPrenom(event.target.value)} required />
    </div>
  </div>
</div>

<div className="row">
  <div className="col-md-6 mb-4">
  
    <div className="form-outline">
      
    <label className="form-label" htmlFor="form3Example1">Email</label>
      <input type="email" id="form3Example3" className="form-control"
       value={email}onChange={(event) => setEmail(event.target.value)} required/>
       {emailError && <p style={{color:"red"}}>{emailError}</p>}
       {EmailPoint && <p style={{color:"red"}}>{EmailPoint}</p>}
    </div>
  </div>
  <div className="col-md-6 mb-4">
    <div className="form-outline">
      
    <label className="form-label" htmlFor="form3Example2">Mot de passe</label>
      <input type="password" id="form3Example4" className="form-control"
      value={password}onChange={(event) => setPassword(event.target.value)} required />
                {PwdError && <p style={{color:"red"}}>{PwdError}</p>}

    </div>
  </div>
</div>
<div className="row">
  <div className="col-md-6 mb-4">
    <div className="form-outline">
    <label className="form-label" htmlFor="form3Example1">Date de naissance</label>
      <input type="date" id="form3Example1" className="form-control"
      value={date_nais}onChange={(event) => setDate(event.target.value)} required />
       {ageError && <p style={{color:"red"}}>{ageError}</p>}
    </div>
  </div>
  <div className="col-md-6 mb-4">
    <div className="form-outline">
    <label className="form-label" htmlFor="form3Example2">Mobile</label>
      <input type="text" id="form3Example2" className="form-control" 
      value={mobile} onChange={(event) => setMobile(event.target.value)}  maxLength={8}minLength={8} required />
          {Mobileerror && <p style={{color:"red"}}>{Mobileerror}</p>}

    </div>
  </div>
</div>
<div className="row">
  
  <div className="col-md-6 mb-4">
    <div className="form-outline">
    <label className="form-label" htmlFor="form3Example2">Type de sang</label>
      <input type="text" id="form3Example2" className="form-control"
      value={type_sang}onChange={(event) => setTypesang(event.target.value)} required  />
      {bloodTypeError && <p style={{color:"red"}}>{bloodTypeError}</p>}
    </div>
  </div>
  <div className="col-md-6 mb-4">
    <div className="form-outline">
    <label className="form-label" htmlFor="form3Example2">Id citoyen</label>
      <input type="text" id="form3Example2" className="form-control"
      value={id_citoyen}onChange={(event) => setIdcitoyen(event.target.value)} maxLength={8}minLength={8} required />
    {IdError && <p style={{color:"red"}}>{IdError}</p>}
    </div>
  </div>
</div>
<div className="row">
<div className="col-md-6 mb-4">
    <div className="form-outline">
      
    <label className="form-label" htmlFor="form3Example2">Sexe</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          value="homme"
          onChange={handleSexeChange}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Homme
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          value="femme"
          onChange={handleSexeChange}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Femme
        </label>
        
      </div>
    </div>
  </div>
  
</div>
          
          {/* Submit button */}
          <button type="submit" className="btn btn-danger btn-lg btn-block">Inscription</button>
          <div className="text-center">
                <p>Vous avez déjà un compte? <Link to="/LoginPH">Connexion</Link></p>
                </div>
        </form>
      </div>
    </div>
  </div>
</section>


    </div>)
    
}
export default RegistrePhysique;

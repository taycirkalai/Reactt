import axios from 'axios';
import { useState ,useEffect } from "react";
import { useNavigate , Link} from 'react-router-dom';
function RegisterMedComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [id_centre, setCentre] = useState("");
  const [centres, setCentres] = useState([]);
  const [emailError, setEmailError] = useState("");
  //const navigate = useNavigate();
  const navigate = useNavigate();
  const API_BASE_URL="http://localhost:8080/api/medecin/registre";
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
      alert ("Il faut sélectionne un centre")
      return;
    }

    const data = {
      name: name,
      email: email,
      password: password,
      centre: {
        id_centre: id_centre
      }
    };

    axios.post(API_BASE_URL, data, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8080'
      }
    })
    .then((response) => {
      console.log(response.data);
      navigate('/loginM');
    })
    .catch((error) => {
      console.error(error.response.data);
    if (error.response.data === "L'email existe déjà") {
      setEmailError("L'email déjà exsiste");
    }
  });
}
  const handleCentreChange = (event) => {
    setCentre(event.target.value);
  };
  
  const img={
    height:'120px',
    weidth:'120px',
    marginLeft:'90px'
}
const sin={
marginTop:'10px',
marginLeft:'100px'
};
  return(
    <div className="container-fluid">
    <div className="row h-100 align-items-center justify-content-center" style={{minHeight: '100vh'}}>
      <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
         <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
               <img style={img}src="images/logoMed.png" alt="img" ></img>
           <div className="d-flex align-items-center justify-content-between mb-3">
           <h3 style={sin}>S'INSCRIRE</h3>
    
           <br></br>
         </div>
         <form onSubmit={handleSubmit}>           
         <div className="form-floating mb-3">
     <input type="text" className="form-control" value={name}onChange={(event) => setName(event.target.value)}id="floatingInput" required />
     <label htmlFor="floatingInput">Nom & prénom </label>
   </div>
   <div className="form-floating mb-3">
     <input type="email" className="form-control" value={email}onChange={(event) => setEmail(event.target.value)}id="floatingInput" required />
     <label htmlFor="floatingInput">Adresse Email</label>
     {emailError && <p style={{color:"red"}}>{emailError}</p>}
   </div>
   <div className="form-floating mb-3">
     <input type="password" className="form-control" value={password}onChange={(event) => setPassword(event.target.value)}id="floatingInput" required />
     <label htmlFor="floatingInput">Mot de passe </label>
   </div>
   <div className="form-floating mb-3">
   <select className="form-select" id="centre" name="centre" onChange={handleCentreChange}>
        <option value="">-- Sélectionnez un centre --</option>
        {centres.map(centre => (
          <option key={centre.id_centre} value={centre.id_centre}>{centre.name_centre} ({centre.lieu_centre})</option>
        ))}
      </select>
 <label htmlFor="floatingSelect">Centre</label>
</div>
      <button type="submit" className="btn btn-primary py-3 w-100 mb-4">Inscrire</button>
      <p className="text-center mb-0">Vous avez de compte? <Link to="/loginM">Connexion</Link></p>
      </form>
    </div>
  </div>
</div>

</div>
  );}

export default RegisterMedComponent;
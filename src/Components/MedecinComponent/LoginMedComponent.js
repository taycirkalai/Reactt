import axios from 'axios';
import { useState  } from "react";
import { useNavigate ,Link} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
function LoginMedComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");
  const API_BASE_URL="http://localhost:8080/api/medecin";
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API_BASE_URL}/login`, { email, password },
      {
        headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8080'
    }})
    .then((response) => {
      const token = response.data;
      const decodedToken = jwt_decode(token); // Decode the token to get the ID of the medecin
      localStorage.setItem('token', token); // Store the token in local storage
      localStorage.setItem('id_med', decodedToken.id_med); // Store the ID of the medecin in local storage
      localStorage.setItem('id_centre', decodedToken.id_centre); 
      navigate('/wlcmed');
      // console.log(response.data);
      // localStorage.setItem('token' ,response.data )  
    })
    .catch((error) => {
      console.error(error.response.data);
      if (error.response.data === "Email does not exist") {
        setEmailError("Email n'exsiste pas");
      } else if (error.response.data === "Invalid email or password") {
        setPasswordError("Mot de passe incorect");
      }
    });
  };
  
  const img={
    height:'120px',
    weidth:'120px',
    marginLeft:'110px'
}
const sin={
marginTop:'10px',
marginLeft:'110px'
}
  return(
    <div className="container-fluid">
<div className="row h-100 align-items-center justify-content-center" style={{minHeight:'100vh'}}>
 <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
   <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
   <img style={img}src="images/logoMed.png" alt="img"></img>
     <div className="d-flex align-items-center justify-content-between mb-3">
     <h3 style={sin}>Connexion</h3>
      
       <br></br>
     </div>

     <form action="#" className="space-y-6"onSubmit={handleSubmit}>
     {emailError && <div className="alert alert-danger">{emailError}</div>}
     <div className="form-floating mb-3">
       <input type="email" className="form-control" value={email}onChange={(event) => setEmail(event.target.value)}id="floatingInput" required />
       <label htmlFor="floatingInput">Adresse Email</label>
     </div>
     {passwordError && <div className="alert alert-danger">{passwordError}</div>}
     <div className="form-floating mb-4">
       <input type="password" className="form-control"value={password}  onChange={(event) => setPassword(event.target.value)} id="floatingPassword" required/>
       <label htmlFor="floatingPassword">Mot de passe</label>
     </div>
     <button type="submit" className="btn btn-primary py-3 w-100 mb-4">Connexion</button>
     <p class="text-center mb-0">Vous n'avez pas de compte? <Link to="/registerM">S'inscrire</Link></p>
     <p class="text-center mb-0">mot de passe oublier ?  <Link to="/RestPassword">Réinstaller</Link></p>

     </form>
   </div>
 </div>
</div>
</div>

 )
    }

export default LoginMedComponent;
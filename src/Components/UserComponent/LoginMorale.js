import { Link} from 'react-router-dom';
import '../../LoginUser.css';
import axios from 'axios';
import { useState  } from "react";
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
function LoginMorale (){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  //const navigate = useNavigate();
  const navigate = useNavigate();
  const API_BASE_URL="http://localhost:8080/api/user/personnem";
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
      localStorage.setItem('id_user', decodedToken.id_user); // Store the ID of the medecin in local storage
      localStorage.setItem('role', decodedToken.role);
      navigate('/'); 
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

   
 
  
  return(
    
    <div>
<section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-9 col-lg-8 col-xl-6">
        <img src="images/don.jpg" className="img-fluid" alt="Phone image" />
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
      <center><h2 style={{marginTop:'-1%'}}>Connexion </h2></center>
          <br/>
        <form onSubmit={handleSubmit}>
        {emailError && <div className="alert alert-danger mt-2">{emailError}</div>}
          <div className="form-outline mb-4">
         
          <label className="form-label" htmlFor="form1Example13">Email</label>
          <input type="email" id="form1Example13" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control form-control-lg" />
                
                </div>
                {passwordError && <div className="alert alert-danger mt-2">{passwordError}</div>}
          <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form1Example13">Mot de passe</label>
          <input type="password" id="form1Example13" value={password} onChange={(event) => setPassword(event.target.value)} className="form-control form-control-lg" />
                  
                </div>
          {/* Submit button */}
          <button type="submit" className="btn btn-danger btn-lg btn-block">Connexion</button>
          
          <div className="text-center">
                <p>Vous n'avez pas de compte?<Link to="/RegisterPM">Inscription</Link> <br/>
               <Link to="/RestPasswordPM">Mot de passe oublier ?</Link></p>
                </div>
        </form>
      </div>
    </div>
  </div>
</section>


    </div>)
    
}
export default LoginMorale;

import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams ,useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import userlogo from'../pics/profiluser.png'


export default function ProfilUserPh() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/loginPh')
    }
  }, [])
  
  const [user, setUser] = useState({
    email: "",
    nom: "",
    prenom:"",
    id_citoyen:""
  });
  const {id} = useParams();
  console.log(id);
  useEffect(() => {
    loadUser();
  },[]);
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/api/user/personneph/ph/${id}`);
    setUser(result.data);
  };
  const pen={
    marginLeft:'400px'
  }
  
  return (

<div>
  <Header/>
  <section style={{backgroundColor: '#eee'}}>
  <div className="container py-5">
    <div className="row">
      <div className="col">
        <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">Mes informations</li>
          
          </ol>
        </nav>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            <img src={userlogo} alt="avatar" className="rounded-circle img-fluid" style={{width: 150}} />
            <p className="text-muted mb-1">Bienvenu</p>
            <h5 className="my-3"> {user.email}</h5>
         
          </div>
        </div>
     
      </div>
      <div className="col-lg-8">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Nom & Prénom   </p>
              
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">
                {user.nom} {user.prenom}
                <Link 
                  to={`/edituserPh/${id}`}
                ><i class="icofont-pencil-alt-2" style={pen} alt="Modifier" ></i></Link> 

                </p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user.email}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Télèphone</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user.mobile}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Type de sang</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user.type_sang}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Id citoyen</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user.id_citoyen}</p>
              </div>

            </div>

            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0"> <Link 
                  to={`/ChangerPassword/${id}`}
                >Paramétre avancé</Link> </p>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  </div>
</section>
<Footer/>

</div>

  );
}
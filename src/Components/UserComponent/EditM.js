import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import userlogo from'../pics/profiluser.png'

export default function EdituserM() {
  //let navigate = useNavigate();
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/loginPM')
    }
  }, [])
  const { id_user} = useParams();
  console.log(id_user);

  const [user, setUser] = useState({
    email: "",
    nom: "",
    prenom:"",
    mobile:"",
    type_sang:"",
    nom_entreprise:"",
    localisation:""
   
  });

  const { email, nom, prenom,mobile,type_sang,nom_entreprise,localisation} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadCentre();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/user/personnem/um/${id_user}`, user);
    navigate(`/ProfilUserPM/${id_user}`);
  };
  const loadCentre = async () => {
    const result = await axios.get(`http://localhost:8080/api/user/personnem/m/${id_user}`);
    setUser(result.data);
  };
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
        <form onSubmit={(e) => onSubmit(e)}>

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
                    <p className="mb-0">Nom </p>
                  
                  </div>
                  <div className="col-sm-9">
                  <input
                type={"text"}
                className="form-control"
                placeholder="Donner le nom "
                name="nom"
                value={nom}
                onChange={(e) => onInputChange(e)}
              />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Prénom</p>
                  </div>
                  <div className="col-sm-9">
                  <input
                type={"text"}
                className="form-control"
                placeholder="Donner le nom "
                name="prenom"
                value={prenom}
                onChange={(e) => onInputChange(e)}
              />                  </div>
                </div>
                <hr />

                <div className="row">

                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                  <input
                type={"text"}
                className="form-control"
                placeholder="Donner le nom "
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Télèphone</p>
                  </div>
                  <div className="col-sm-9">
                  <input
                type={"text"}
                className="form-control"
                placeholder="Donner le nom "
                name="mobile"
                value={mobile}
                onChange={(e) => onInputChange(e)}
              />            
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Type de sang</p>
                  </div>
                  <div className="col-sm-9">
                  <input
                type={"text"}
                className="form-control"
                placeholder="Donner le nom "
                name="type_sang"
                value={type_sang}
                onChange={(e) => onInputChange(e)}
              /> 
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Nom entreprise </p>
                  </div>
                  <div className="col-sm-9">
                  <input
                type={"text"}
                className="form-control"
                placeholder="Donner le nom "
                name="nom_entreprise"
                value={nom_entreprise}
                onChange={(e) => onInputChange(e)}
              />                   </div>
                </div>

                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Localisation:</p>
                  </div>
                  <div className="col-sm-9">
                  <input
                type={"text"}
                className="form-control"
                placeholder="Donner le nom "
                name="localisation"
                value={localisation}
                onChange={(e) => onInputChange(e)}
              />                   </div>
                </div>
               <br/>
              <center>
              <button type="submit" className="btn btn-outline-primary">
              Envoyer
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Annuler
            </Link>
                </center>  
              </div>
              
            </div>
          
          
          </div>
        </div>
        </form>
      </div>
      
            
    </section>
    <Footer/>
    
    </div>
    
      );
    }
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ress from"../../pics/res.png";

export default function EditRes() {
  //let navigate = useNavigate();
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/loginR')
    }
  }, [])
  const { id} = useParams();
  console.log(id);

  const [res, setRes] = useState({
    email: ""
   
  });

  const { email} = res;

  const onInputChange = (e) => {
    setRes({ ...res, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/responsable/${id}`, res);
    navigate(`/ProfilResp/${id}`);
  };
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/api/responsable/${id}`);
    setRes(result.data);
  };
  return (
    <div>
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
              <img src={ress} alt="avatar" className="rounded-circle img-fluid" style={{width: 150}} />
                <p className="text-muted mb-1">Bienvenu</p>
                <h5 className="my-3"> {res.email}</h5>
             
              </div>
            </div>
         
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
               
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
           
               <br/>
              <center>
              <button type="submit" className="btn btn-outline-primary">
              Envoyer
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/wlcResp">
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
    
    </div>
    
      );
    }
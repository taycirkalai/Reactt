import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import admin from '../../pics/iconAdmin.jpg'

function ChangerPasswordAdmin() {
    const navigate = useNavigate()
    const { id } = useParams();
    const [email, setEmail] = useState('');
    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [alertColor, setAlertColor] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [alertEmail, setAlertEmail] = useState('');

  
    useEffect(() => {
      if (!localStorage.getItem('token')) {
        navigate('/loginR')
      }
    }, [])
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const params = new URLSearchParams();
      params.append('email', email);
      params.append('oldPass', oldPass);
      params.append('newPass', newPass);
  
      try {
        const response = await fetch('http://localhost:8080/api/admin/updatePassword', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: params.toString()
        });
    
        const data = await response.text();
    
        if (response.ok) {
            setAlertColor('success');
            setAlertMessage('Mot de passe modifié avec succès.');
            setEmail('');
            setOldPass('');
            setNewPass('');
            setAlertEmail('');
        } else if (response.status === 400 && data === "Email incorrect.") {
            setAlertEmail('');
            setAlertMessage('Email incorrect.');
            setAlertColor('danger');
        } else if (response.status === 400 && data === "Ancien mot de passe incorrect.") {
            setAlertEmail('');
            setAlertMessage('Ancien mot de passe incorrect.');
            setAlertColor('danger');
        }
    } catch (error) {
        console.error(error);
    }
    
    };
  
  
  return (
    <div>
          
      <section style={{backgroundColor: '#eee'}}>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">Modifier mot de passe </li>
              
              </ol>
            </nav>
          </div>
        </div>
        {alertMessage &&
        <div className={`alert alert-${alertColor} mt-3`} role="alert">
          {alertMessage}
        </div>
      }
   
        <form onSubmit={handleSubmit}>

        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img src={admin} alt="avatar" className="rounded-circle img-fluid" style={{width: 150}} />
                <p className="text-muted mb-1">Bienvenu</p>
             
              </div>
            </div>
         
          </div>
        
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email </p>
                  </div>
                  <div className="col-sm-9">
                  <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Ancien mot de passe:</p>
                  </div>
                  <div className="col-sm-9">
                  <input type="password" value={oldPass} onChange={(event) => setOldPass(event.target.value)} />

        </div>
                </div>
                <hr />

                <div className="row">

                  <div className="col-sm-3">
                    <p className="mb-0">Nouveau mot de passe:</p>
                  </div>
                  <div className="col-sm-9">
                  <input type="password" value={newPass} onChange={(event) => setNewPass(event.target.value)} />
            </div>
                </div>
               
               <br/>
              <center>
              <button type="submit" className="btn btn-outline-primary">
              Envoyer
            </button>
            <Link className="btn btn-outline-danger mx-2" to={`/ProfilResp/${id}`}>
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
export default ChangerPasswordAdmin;

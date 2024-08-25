import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import jwt_decode from 'jwt-decode';
export default function RdvDetails() {
const [rdv, setRdv] = useState({});
const [newDate, setNewDate] = useState('');
const navigate = useNavigate()
const { id } = useParams();
const navigate1 = useNavigate();
const [medecinId, setMedecinId] = useState(null);
const [showAlert, setShowAlert] = useState(false);
const [showAlert1, setShowAlert1] = useState(false);
const [errorMessage, setErrorMessage] = useState();
useEffect(() => {
  if (!localStorage.getItem('token')) {
    navigate1('/loginM');
  } else {
    setMedecinId(jwt_decode(localStorage.getItem('token')).sub);
  }
}, []);
 
const [user, setUser] = useState({
  nom: "",
  prenom: "",
 
});
useEffect(() => {
const fetchRDVDetails = async () => {
const response = await axios.get(`http://localhost:8080/api/rdv/${id}`);
setRdv(response.data);
};
fetchRDVDetails();
}, [id]);

const handleNewDateChange = (event) => {
setNewDate(event.target.value);
};


const handleUpdateRDV = async () => {
  const currentDate = new Date();
  const daterdv = new Date(newDate);
  if (daterdv.getTime() < currentDate.getTime()) {
    setShowAlert(true); // Set showAlert to true si date_debut est inférieure à la date courante
    return;
  }
    const id_med = localStorage.getItem("id_med");
    try {
    await axios.put(`http://localhost:8080/api/rdv/rdv/${rdv.id_rdv}?date=${newDate}&id_med=${id_med}`);
   // window.location.reload();
   navigate('/ListRDVAccepter')
  } catch (error) {
    if (error.response && error.response.status === 400) {
      const errorMessage = error.response.data;
      setShowAlert1(true);
      setErrorMessage(errorMessage);
    }
  }}
  
  const divStyle = {
    color: '#34AFE4',
    marginLeft: '25%'
  };
  const cont={
    marginTop:'50px'
  }
return (
  <div className="container" style={cont}>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 style={divStyle}className="text-center m-4">Détails de la demande de rendez-vous</h2>
          {showAlert && ( 
            <div className="alert alert-warning" role="alert">
              La date de rendez-vous doit être suppérieur à la date de aujourd'hui
            </div>
          )}
              {showAlert1 && (
            <div className="alert alert-danger" role="alert">
              Vous ne pouvez pas donner un rendez-vous car ce patient a déjà effectué un rendez-vous dans les deux derniers mois !<br></br>
              <b>il faut avoir 2 mois entre les deux don</b>
            </div>
          )}
          <div className="card">
            <div className="card-header">
              
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  <b>Nom :  </b> 
                  {rdv.personnePhysique?.nom}
                </li>
                <li className="list-group-item">
                  <b>Prénom :  </b> 
                  {rdv.personnePhysique?.prenom}
                </li>

                <li className="list-group-item">
                  <b>Date de demande :  </b> 
                  {new Date(rdv.date_demande).toLocaleString('fr-FR', {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'})}
                </li>
                <li className="list-group-item">
                  <b>Date de rendez-vous :  </b> 
                  {rdv.date_rdv ? new Date(rdv.date_rdv).toLocaleString('fr-FR', {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'}) : 'non affectée'}
                </li>
                <li className="list-group-item">
                  <b>Nouvelle date de rendez-vous :  </b> 
                  <input type="datetime-local" id="newDate" name="newDate" value={newDate} onChange={handleNewDateChange} />
                  <br/>
                  <br/>
                 <b>                 </b><button  class="btn btn-primary" onClick={handleUpdateRDV}>Valider</button>
                </li>
</ul></div></div></div></div></div>
);
}
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
export default function ListdmdEventResp() {
  const [demandesEvent, setDmdEvent] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/loginR')
    }
  }, [])

  useEffect(() => {
    const fetchDemandesEvent = async () => {
      const centreId = localStorage.getItem("id_centre");
      const response = await axios.get(`http://localhost:8080/api/event/centre?centreId=${centreId}`);
      setDmdEvent(response.data);
    };
    fetchDemandesEvent();
  }, []);
 

const AccepterDmdEvent = async (id) => {
  await axios.put(`http://localhost:8080/api/event/${id}/accepter`);
  window.location.reload();
};
const RefuserDmdEvent = async (id) => {
  await axios.put(`http://localhost:8080/api/event/${id}/refuser`);
  window.location.reload();
};
const deleteDmdEvent = async (id) => {
  await axios.delete(`http://localhost:8080/api/event/${id}`);
  window.location.reload();
};
const handleSearch = (event) => {
  setSearchTerm(event.target.value);
};

const filteredDmdEvent = demandesEvent.filter((demandesEvent) =>
demandesEvent.etat_demande.toLowerCase().includes(searchTerm.toLowerCase())
);
const divStyle = {
  color: '#88D0F4',
  marginLeft: '25%',
  marginTop:'1%',
};

const tabstyle={
  marginTop:"1%"
}
const divSerach={
  width:'20%',
  marginLeft:'',
  marginTop:"2%",
  marginBottom: "0"
}
const formStyle = {
  display: "grid",
  gridTemplateColumns: "1fr auto",
  alignItems: "center",
  marginBottom: "1rem"
}
return (
    <div className="container">
    <div className="py-4">
      <h3 style={divStyle}> LISTE DES DEAMNDES D'EVENEMENT DANS LE CENTRE </h3>
      <div>
      <form style={formStyle}>
          <input
           style={divSerach}
            className="form-control border-0"
            type="search"
            placeholder="Recherche"
            value={searchTerm}
            onChange={handleSearch}
          />
        </form>
        </div>
      <table style={tabstyle} className="table border shadow">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date demande</th>
            <th scope="col">Date Event</th>
            <th scope="col">Nom d'entreprise</th>
            <th scope="col">Nombre de Collaborateurs</th>
            <th scope="col">Etat</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {filteredDmdEvent.map((demandesEvent, index) => (
              <tr>
                <th scope="row"key={index.toString()} >
                  {index + 1}
                </th>
                   
                    <td>{new Date(demandesEvent.date_demande).toLocaleString('fr-FR', {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'})}</td>
                    <td>{new Date(demandesEvent.date_event).toLocaleString('fr-FR', {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'})}</td>
                    <td>{demandesEvent.personneMorale?.nom_entreprise}</td>
                    <td>{demandesEvent.nombre_colab}</td>
                    <td> <h6 className={`mb-0 ${demandesEvent.etat_demande === "Accepter" ? "text-success" : demandesEvent.etat_demande === "En attente" ? "text-warning" : "text-danger"}`}>
                              {demandesEvent.etat_demande}
                            </h6></td>
              <td>
              <Link title="Détails"
                  to={`/viewdmdevent/${demandesEvent.id_event}`} style={{color:"#03A9F4"}}
                ><i className="fas fa-eye"></i>
                  <b>               </b>
                </Link>
                  <Link title="Accepter"
                  onClick={() => AccepterDmdEvent(demandesEvent.id_event)} style={{color:"#37980A "}}
                ><i className="fas fa-check "></i>
                  <b>               </b>
                  
                </Link>
                <br/>
                   <Link title="Refuser" onClick={() => RefuserDmdEvent(demandesEvent.id_event)} style={{color:"#E34724", marginLeft:"7px"}}>
                 <i className="fas fa-times"></i>
                           <b>               </b>
                       </Link>
                
              </td>
              
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)
 }
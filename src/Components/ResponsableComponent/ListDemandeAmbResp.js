import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


export default function ListDemandeAmbResp() {
  const [demandes, setDmdAmb] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/loginR')
    }
  }, [])

  useEffect(() => {
    const fetchDemandesAmb = async () => {
      const centreId = localStorage.getItem("id_centre");
      const response = await axios.get(`http://localhost:8080/api/demandeAm/centre?centreId=${centreId}`);
      setDmdAmb(response.data);
    };
    fetchDemandesAmb();
  }, []);
 

const AccepterDmdAmb = async (id) => {
  await axios.put(`http://localhost:8080/api/demandeAm/${id}/accepter`);
  window.location.reload();
};
const RefuserDmdAmb = async (id) => {
  await axios.put(`http://localhost:8080/api/demandeAm/${id}/refuser`);
  window.location.reload();
};
const deleteDmdAmb = async (id) => {
  await axios.delete(`http://localhost:8080/api/demandeAm/${id}`);
  window.location.reload();
};
const handleSearch = (event) => {
  setSearchTerm(event.target.value);
};

const filteredDmdAmb = demandes.filter((demandeAmb) =>
  demandeAmb.etat.toLowerCase().includes(searchTerm.toLowerCase())
);
const divStyle = {
  color: '#88D0F4',
  marginLeft: '29%',
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
      <h3 style={divStyle}> LISTE DES DEAMNDES D'AMBASSADEUR </h3>
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
            <th scope="col">Nom & Prénom</th>
            <th scope="col">Expérience</th>
            <th scope="col">Date demande</th>
            <th scope="col">Etat</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {filteredDmdAmb.map((demandeAmb, index) => (
              <tr>
                <th scope="row"key={index.toString()} >
                  {index + 1}
                </th>
                <td>{demandeAmb.personnePhysique.nom} {demandeAmb.personnePhysique.prenom}</td>
                    <td>{demandeAmb.experience}</td>
                    <td>{new Date(demandeAmb.date_dmd).toLocaleString('fr-FR', {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'})}</td>
                    
               
                    <td> <h6 className={`mb-0 ${demandeAmb.etat === "Accepter" ? "text-success" : demandeAmb.etat === "En attente" ? "text-warning" : "text-danger"}`}>
                              {demandeAmb.etat}
                            </h6></td>
              <td>
              <Link title="Détails"
                  to={`/ViewDmdAmbNonAccepter/${demandeAmb.id_am}`} style={{color:"#03A9F4"}}
                ><i className="fas fa-eye"></i>
                  <b>               </b>
                </Link>
                  <Link title="Accepter"
                  onClick={() => AccepterDmdAmb(demandeAmb.id_am)} style={{color:"#37980A "}}
                ><i className="fas fa-check "></i>
                  <b>               </b>
                </Link>
                <br/>
             
                   <Link title="Refuser" onClick={() => RefuserDmdAmb(demandeAmb.id_am)} style={{color:"#E34724" , marginLeft:"8px"}}>
                 <i className="fas fa-times"></i>
                           <b>               </b>
                       </Link>
                <Link title="Supprimer"
                    onClick={() => deleteDmdAmb(demandeAmb.id_am)}style={{color:"#E34724"}}
                  ><i className="fas fa-trash"></i>
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
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
export default function ListDemandeSangResp() {
  const [demandes, setDmdSang] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/loginR')
    }
  }, [])

  useEffect(() => {
    const fetchDemandesSang = async () => {
      const centreId = localStorage.getItem("id_centre");
      const response = await axios.get(`http://localhost:8080/api/demandesang/centre?centreId=${centreId}`);
      setDmdSang(response.data);
    };
    fetchDemandesSang();
  }, []);
 

const AccepterDmdSang = async (id) => {
  await axios.put(`http://localhost:8080/api/demandesang/${id}/accepter`);
  window.location.reload();
};
const RefuserDmdSang = async (id) => {
  await axios.put(`http://localhost:8080/api/demandesang/${id}/refuser`);
  window.location.reload();
};
const deleteDmdSang = async (id) => {
  await axios.delete(`http://localhost:8080/api/demandesang/${id}`);
  window.location.reload();
};
const handleSearch = (event) => {
  setSearchTerm(event.target.value);
};

const filteredDmdSang = demandes.filter((demandeSang) =>
  demandeSang.etat.toLowerCase().includes(searchTerm.toLowerCase())
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
      <h3 style={divStyle}> LISTE DES DEAMNDES DE SANG </h3>
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
            <th scope="col">Type de sang</th>
            <th scope="col">Date demande</th>
            <th scope="col">Date operation</th>
            <th scope="col">Du Centre</th>
            <th scope="col">Etat</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {filteredDmdSang.map((demandeSang, index) => (
              <tr>
                <th scope="row"key={index.toString()} >
                  {index + 1}
                </th>
                    <td>{demandeSang.type_sang}</td>
                    <td>{new Date(demandeSang.date_dmd).toLocaleString('fr-FR', {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'})}</td>
                    <td>{new Date(demandeSang.date_operation).toLocaleString('fr-FR', {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'})}</td>
                  
                    <td>{demandeSang.medecin.centre.name_centre}</td>
                    <td> <h6 className={`mb-0 ${demandeSang.etat === "Accepter" ? "text-success" : demandeSang.etat === "En attente" ? "text-warning" : "text-danger"}`}>
                              {demandeSang.etat}
                            </h6></td>
              <td>
               
                  <Link title="Accepter"
                  onClick={() => AccepterDmdSang(demandeSang.id_dmd)} style={{color:"#37980A "}}
                ><i className="fas fa-check "></i>
                  <b>               </b>
                </Link>
             
                   <Link title="Refuser" onClick={() => RefuserDmdSang(demandeSang.id_dmd)} style={{color:"#E34724"}}>
                 <i className="fas fa-times"></i>
                           <b>               </b>
                       </Link>
                <Link title="Supprimer"
                    onClick={() => deleteDmdSang(demandeSang.id_dmd)}style={{color:"#E34724"}}
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
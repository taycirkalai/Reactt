import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
export default function ListRdv() {
  const [rdv, setRdv] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/loginM')
    }
  }, [])

  useEffect(() => {
    const fetchRDVByCentre= async () => {
      const centreId = localStorage.getItem("id_centre");
      const response = await axios.get(`http://localhost:8080/api/rdv/attente/centre?centreId=${centreId}&etat=En attente`);
      setRdv(response.data);
    };
    fetchRDVByCentre();
  }, []);
  const loadRDV = async()=>{
   // const result = await axios.get("http://localhost:8080/api/rdv/all");
    navigate('/ListRDVAccepter')
   // setRdv(result.data);
};

const deleteRDV = async (id) => {
  await axios.delete(`http://localhost:8080/api/rdv/${id}`);
  loadRDV();
};
const handleSearch = (event) => {
  setSearchTerm(event.target.value);
};

const filteredRdV = rdv.filter((rdv) =>
  rdv.personnePhysique.nom.toLowerCase().includes(searchTerm.toLowerCase())
  
);


const divStyle = {
  color: '#88D0F4',
  marginLeft: '29%',
  marginTop:'1%',
};
const stylebnt = {
  marginTop:"0"
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
      <h3 style={divStyle}> LISTE DES DEAMNDES DE RENDEZ-VOUS </h3>
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
            <th scope="col">Nom</th>
            <th scope="col">Prenom</th>
            <th scope="col">Date demande</th>
            <th scope="col">Etat</th>
            <th scope="col">Centre</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {filteredRdV.map((rdv, index) => (
              <tr>
                <th scope="row"key={index.toString()} >
                  {index + 1}
                </th>
                    <td>{rdv.personnePhysique.nom}</td>
                    <td>{rdv.personnePhysique.prenom}</td>
                    <td>{new Date(rdv.date_demande).toLocaleString('fr-FR', {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'})}</td>
                    <td>{rdv.etat}</td>
                    <td>{rdv.centre.name_centre}</td>
              <td>
                <Link 
                  to={`/AccepterRdv/${rdv.id_rdv}`} style={{color:"#37980A "}}
                ><i className="fas fa-check "></i>
                  <b>               </b>
                </Link>
             
                   <Link onClick={() => deleteRDV(rdv.id_rdv)} style={{color:"#E34724"}}>
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
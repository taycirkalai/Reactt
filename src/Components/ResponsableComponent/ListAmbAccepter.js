import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
export default function ListAmbAccepter() {
  const [amb, setAmb] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/loginR')
    }
  }, [])

  
  useEffect(() => {
    const fetchAmbByCentre= async () => {
      const idCentre = localStorage.getItem("id_centre");
      const response = await axios.get(`http://localhost:8080/api/demandeAm/accepter/centre?centreId=${idCentre}&etat=Accepter`);
      setAmb(response.data);
    };
    fetchAmbByCentre();
  }, []);
  const loadAMB = async()=>{
    navigate('/ListAmbAccepter')
};

const deleteAMB = async (id) => {
  await axios.delete(`http://localhost:8080/api/demandeAm/${id}`);
  window.location.reload();
};

const handleSearch = (event) => {
  setSearchTerm(event.target.value);
};

const filteredAmb = amb.filter((amb) =>
  amb.experience.toLowerCase().includes(searchTerm.toLowerCase())
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
      <h3 style={divStyle}> LISTE DES AMBASSADEURS DANS LE CENTRE </h3>
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
            <th scope="col">Email</th>
            <th scope="col">Experience</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {filteredAmb.map((amb, index) => (
              <tr>
                <th scope="row"key={index.toString()} >
                  {index + 1}
                </th>
                    <td>{amb.personnePhysique.nom} {amb.personnePhysique.prenom}</td>
                    <td>{amb.personnePhysique.email}</td>
                    <td>{amb.experience}</td>
              <td>
              <Link title="Détails"
                  to={`/viewdmdAmb/${amb.id_am}`} style={{color:"#03A9F4"}}
                ><i className="fas fa-eye"></i>
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
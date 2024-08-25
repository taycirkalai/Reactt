import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
export default function ListCentre() {
  const [centres, setCentre] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [])
  useEffect(() => {
    const fetchCentre = async () => {
      const response = await axios.get('http://localhost:8080/api/centre/all');
      setCentre(response.data);
    };

    fetchCentre();
  }, []);
  const loadCentre = async()=>{
    const result = await axios.get("http://localhost:8080/api/centre/all");
    setCentre(result.data);
};

const deleteCentre = async (id_centre) => {
  await axios.delete(`http://localhost:8080/api/centre/${id_centre}`);
  loadCentre();
};
const handleSearch = (event) => {
  setSearchTerm(event.target.value);
};

const filteredCentre = centres.filter((centre) =>
  centre.name_centre.toLowerCase().includes(searchTerm.toLowerCase())
);
const divStyle = {
  color: '#88D0F4',
  marginLeft: '35%',
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
      <h3 style={divStyle}>LISTE CENTRES </h3>
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
          <Link to={"/addCentre"} style={stylebnt}type="button" class="btn btn-danger">AJOUTER CENTRE</Link>
        </form>
        </div>
      
      
      <table style={tabstyle} className="table border shadow">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom</th>
            <th scope="col">Lieu</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {filteredCentre.map((centre, index) => (
              <tr>
                <th scope="row"key={index.toString()} >
                  {index + 1}
                </th>
                    <td>{centre.name_centre}</td>
                    <td>{centre.lieu_centre}</td>
              <td>
                <Link 
                  to={`/editeCentre/${centre.id_centre}`}style={{color:"#FFC107"}}
                ><i className="fas fa-edit"></i>
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
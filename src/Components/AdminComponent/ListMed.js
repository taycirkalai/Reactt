import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link ,useNavigate} from "react-router-dom";

export default function ListeMed() {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [])
  const [med, setMed] = useState([]);


  useEffect(() => {
    loadMeds();
  }, []);

  const loadMeds = async () => {
    const result = await axios.get("http://localhost:8080/api/medecin/allM");
    setMed(result.data);
  };

 
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const filteredMed = med.filter((med) =>
    med.name.toLowerCase().includes(searchTerm.toLowerCase()),
   
    
  );
  const divStyle = {
    color: '#88D0F4',
    marginLeft: '35%',
    marginTop:'1%',
  };
  const tabstyle={
    marginTop:"2%"
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
        <h3 style={divStyle}>LISTE DES MEDECINS</h3>
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
              <th scope="col">Nom & Prenom</th>
              <th scope="col">Email</th>
              <th scope="col">Travail au centre</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredMed.map((med, index) => (
              <tr>
                <th scope="row"key={index.toString()} >
                  {index + 1}
                </th>
                <td>{med.name}</td>
                <td>{med.email}</td>
                <td>{med.centre.name_centre}</td>
                <td>
                  <Link title="Details"
                    to={`/viewMed/${med.id_med}`}style={{color:"#03A9F4"}}
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
  );
}
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link ,useNavigate} from "react-router-dom";

export default function ListeResp() {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [])
  const [resp, setResp] = useState([]);


  useEffect(() => {
    loadResp();
  }, []);

  const loadResp = async () => {
    const result = await axios.get("http://localhost:8080/api/responsable/all");
    setResp(result.data);
  };

 
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const filteredResp = resp.filter((resp) =>
    resp.email.toLowerCase().includes(searchTerm.toLowerCase()),
   
    
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
        <h3 style={divStyle}>LISTE DES RESPONSABLES</h3>
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
              <th scope="col">Email</th>
              <th scope="col">Travail au centre</th>
              <th scope="col">Lieu de centre</th>
            
            </tr>
          </thead>
          <tbody>
            {filteredResp.map((resp, index) => (
              <tr>
                <th scope="row"key={index.toString()} >
                  {index + 1}
                </th>
                <td>{resp.email}</td>
                <td>{resp.centre.name_centre}</td>
                <td scope="col" style={{width:'20%'}}>{resp.centre.lieu_centre}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
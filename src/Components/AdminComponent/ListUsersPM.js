import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link ,useNavigate} from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [])

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/api/user/personnem/allm");
    setUsers(result.data);
  };

  const deleteUser = async (id_user) => {
    await axios.delete(`http://localhost:8080/api/user/personnem/dm/${id_user}`);
    loadUsers();
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const filteredPersonneM = users.filter((user) =>
    user.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const divStyle = {
    color: '#88D0F4',
    marginLeft: '25%',
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
        <h3 style={divStyle}>LISTE DES PERSONNES MORALE</h3>
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
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th scope="col">type sang</th>
              <th scope="col">Entreprise</th>
              <th scope="col">Localisation</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredPersonneM.map((user, index) => (
              <tr>
                <th scope="row"key={index.toString()} >
                  {index + 1}
                </th>
                <td>{user.nom}</td>
                <td>{user.prenom}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                 <td>{user.type_sang}</td>
                 <td>{user.nom_entreprise}</td>
                 <td>{user.localisation}</td>
                <td>
                  <Link
                    to={`/viewuserpm/${user.id_user}`}style={{color:"#03A9F4"}}
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
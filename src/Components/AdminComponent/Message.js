import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link ,useNavigate} from "react-router-dom";

export default function Message() {
  const [message, setMessage] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [])

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    const result = await axios.get("http://localhost:8080/api/message/all");
    setMessage(result.data);
  };

  const deleteMSG = async (id_msg) => {
    await axios.delete(`http://localhost:8080/api/message/${id_msg}`);
    loadMessages();
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const filteredMsg = message.filter((msg) =>
    msg.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const updatemessageEtat = async (id) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/message/updateEtat/${id}`);
      console.log(response.data);
      loadMessages(); 
    } catch (error) {
      console.error(error);
    }
  };
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
        <h3 style={divStyle}>LES MESSAGES RECUS</h3>
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
              <th scope="col">DATE</th>
              <th scope="col">EMAIL</th>
              <th scope="col">QUESTION</th>
              <th scope="col">REPONSE</th>
              <th scope="col">Action</th>
              <th scope="col">Publier</th>
            </tr>
          </thead>
          <tbody>
            {filteredMsg.map((msg, index) => (
              <tr>
                <th scope="row"key={index.toString()} >
                  {index + 1}
                </th>
               <td> {new Date(msg.date_question).toLocaleDateString('fr-FR', {day: 'numeric', month: 'numeric', year: 'numeric'})}</td>
                
                <td>{msg.email}</td>
                <td>{msg.question}</td>
                <td>{msg.reponse}</td>
                <td>
                  <Link title="Répondre"
                    to={`/repondreMsg/${msg.id_msg}`}style={{color:"#03A9F4"}}
                  ><i className="fa fa-envelope-square"></i>
                  <b>               </b>
                  </Link>
                  <Link title="Supprimer"
                    onClick={() => deleteMSG(msg.id_msg)}style={{color:"#E34724"}}
                  ><i className="fas fa-trash" ></i>
                  <b>               </b>
                  </Link>
                </td>
                <td>
              <button className={msg.etat === "publier" ? "btn btn-light" : "btn btn-success"} onClick={() => updatemessageEtat(msg.id_msg)}>
  {msg.etat === "publier" ? "Non publier" : "Publier"}
</button>

    </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
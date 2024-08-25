import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link , useNavigate} from 'react-router-dom';
import buttons from '../../boutons.css';
export default function ListPublication() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  })
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const fetchPublication= async () => {
      const response = await axios.get('http://localhost:8080/api/pub/all');
      setPublications(response.data);
    };

    fetchPublication();
  }, []);
  const loadPublication = async()=>{
    const result = await axios.get("http://localhost:8080/api/pub/all");
  setPublications(result.data);
};
const fetchPublicationSortedByDate = async () => {
  const response = await axios.get('http://localhost:8080/api/pub/publication/sortByDate');
  setPublications(response.data);
};

useEffect(() => {
  fetchPublicationSortedByDate();
}, []);
  const DeletePublication = async (id) =>{
    await axios.delete(`http://localhost:8080/api/pub/${id}`)
    loadPublication()
};
const handleSearch = (event) => {
  setSearchTerm(event.target.value);
};

const filteredPublication = publications.filter((publication) =>
  publication.titre.toLowerCase().includes(searchTerm.toLowerCase())
);
const updatePublicationEtat = async (id) => {
  try {
    const response = await axios.put(`http://localhost:8080/api/pub/updateEtat/${id}`);
    console.log(response.data);
    loadPublication(); 
  } catch (error) {
    console.error(error);
  }
};
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
const imgStyle={
  width:"200px",
  height:"200px"
}
  return (
    <div className="container">
    <div className="py-4">
      <h3 style={divStyle}>LISTE DES PUBLICATIONS</h3>
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
           <Link to={"/addPub"} style={stylebnt}type="button" class="btn btn-danger">AJOUTER PUBLICATION</Link>
        </form>
        </div>
      <table style={tabstyle} className="table border shadow">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Titre</th>
            <th scope="col">Description</th>
            <th scope="col">Lieu</th>
            <th scope="col">Date debut</th>
            <th scope="col">Date fin</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
            <th scope="col">Active</th>
          </tr>
        </thead>
        <tbody>
        {filteredPublication.map((publication, index) => (
              <tr>
                <th scope="row"key={index.toString()} >
                  {index + 1}
                </th>
                    <td>{publication.titre}</td>
                    <td>
                    <div style={{ overflow: 'auto', maxHeight: '200px', width: '100%' , textAlign: 'justify'}}>
                    {publication.description}</div>
                    </td>
                    
                    <td>{publication.lieu}</td>
                    <td>{new Date(publication.date_debut).toLocaleString('fr-FR', {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'})}</td>
                    <td>{new Date(publication.date_fin).toLocaleString('fr-FR', {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'})}</td>
                    <td> <img style={imgStyle}src={`http://localhost:8080/${publication.imagePath}`} alt={publication.imagePath}></img></td>
              <td>
                <Link 
                  to={`/viewpub/${publication.id_pub}`} style={{color:"#03A9F4"}}
                ><i className="fas fa-eye"></i>
                  <b>               </b>
                </Link>
                <Link 
                  to={`/editepub/${publication.id_pub}`}style={{color:"#FFC107"}}
                ><i className="fas fa-edit"></i>
                   <b>               </b>
                </Link>
                <Link
                    onClick={() => DeletePublication(publication.id_pub)}style={{color:"#E34724"}}
                  ><i className="fas fa-trash"></i>
                  <b>               </b>
                  </Link>
              </td>
              <td>
        
<button className={`toggle-button ${publication.etat === "publier" ? "on" : "off"}`} onClick={() => updatePublicationEtat(publication.id_pub)}>
  <span className="toggle-text">{publication.etat === "publier" ? "On" : "Off"}</span>
</button>

    </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
              )
            }
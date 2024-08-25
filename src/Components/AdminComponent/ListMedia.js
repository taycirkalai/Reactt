import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

export default function ListMedia() {
  const [media, setMedia] = useState([]);
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [])
  useEffect(() => {
    const fetchMedia = async () => {
      const response = await axios.get('http://localhost:8080/api/media/all');
      setMedia(response.data);
      
    };

    fetchMedia();
  }, []);
  const loadMedia = async()=>{
    const result = await axios.get("http://localhost:8080/api/media/all");
    setMedia(result.data);
  };
const deleteMedia = async (id) => {
  await axios.delete(`http://localhost:8080/api/media/${id}`);
  loadMedia();
};
const handleSearch = (event) => {
  setSearchTerm(event.target.value);
};

const filteredMedia = media.filter((media) =>
  media.description.toLowerCase().includes(searchTerm.toLowerCase())
);
const updateMediaEtat = async (id) => {
  try {
    const response = await axios.put(`http://localhost:8080/api/media/updateEtat/${id}`);
    console.log(response.data);
    loadMedia(); 
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
  width:"350px",
  height:"300px"
}
  return (
    <div className="container">
    <div className="py-4">
      <h3 style={divStyle}>LISTE Media</h3>
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
           
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th scope="col">Video</th>
            <th scope="col">Action</th>
            <th scope="col">Publier ou Non</th>
          </tr>
        </thead>
        
        <tbody>
            {filteredMedia.map((media, index) => (
              <tr>
                <th scope="row" key={index.toString()}>
                  {index + 1}
                </th>
                <td>
                <div style={{ overflow: 'auto', maxHeight: '200px', width: '100%' }}>
                         {media.description}
                 </div>
        </td>
         
     
                <td>
                {media.imagePath.split(',').map((imagePath, index) => (
                  <img
                    key={index}
                    style={{ width: '200px', height: '200px',marginBottom: '10px'  }}
                    src={`http://localhost:8080/${imagePath}`}
                    alt={imagePath}
                  />
                ))} 
              </td>
              <td>
              {media.videoPath ? (
  <td>
    <video width="200" height="190" controls>
      <source src={`http://localhost:8080/${media.videoPath}`} type="video/mp4" />
    </video>
  </td>
) : (
  <td>Aucune vidéo disponible</td>
)}

</td>


              <td>
                <Link title='Details'
                  to={`/viewMedia/${media.id_media}`} style={{color:"#03A9F4"}}
                ><i className="fas fa-eye"></i>
                  <b>               </b>
                </Link>
                <Link title='Supprimer'
                    onClick={() => deleteMedia(media.id_media)}style={{color:"#E34724"}}
                  ><i className="fas fa-trash"></i>
                  <b>               </b>
                  </Link>
              </td>
              <td>
              <button className={media.etat === "publier" ? "btn btn-light" : "btn btn-success"} onClick={() => updateMediaEtat(media.id_media)}>
  {media.etat === "publier" ? "Non publier" : "Publier"}
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
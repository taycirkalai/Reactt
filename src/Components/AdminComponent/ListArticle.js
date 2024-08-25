import React, { useState, useEffect } from 'react';
import axios from 'axios';
import buttons from '../../boutons.css';
import { Link, useNavigate } from "react-router-dom";
export default function ListArticle() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate()
  const [activeStates, setActiveStates] = useState({});
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [])
  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios.get('http://localhost:8080/api/article/all');
      setArticles(response.data);
      
    };

    fetchArticles();
  }, []);
  const loadArticles = async()=>{
    const result = await axios.get("http://localhost:8080/api/article/all");
    const activeStates = {};
  result.data.forEach((article) => {
    activeStates[article.id] = article.active;
  });
  setActiveStates(activeStates);
  setArticles(result.data);
};
const fetchArticlesSortedByDate = async () => {
  const response = await axios.get('http://localhost:8080/api/article/article/sortByDate');
  setArticles(response.data);
};

useEffect(() => {
  fetchArticlesSortedByDate();
}, []);
const deleteArt = async (id) => {
  await axios.delete(`http://localhost:8080/api/article/${id}`);
  loadArticles();
};
const handleSearch = (event) => {
  setSearchTerm(event.target.value);
};

const filteredArticles = articles.filter((article) =>
  article.titre.toLowerCase().includes(searchTerm.toLowerCase())
  
);
const updateArticleEtat = async (id) => {
  try {
    const response = await axios.put(`http://localhost:8080/api/article/updateEtat/${id}`);
    console.log(response.data);
    loadArticles(); // Recharger les articles pour afficher le nouvel état
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
  width:"250px",
  height:"200px"
}
  return (
    <div className="container">
    <div className="py-4">
      <h3 style={divStyle}>LISTE ARTICLES</h3>
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
           <Link to={"/addArt"}style={stylebnt} type="button" class="btn btn-danger">AJOUTER ARTICLE</Link>
        </form>
        </div>
      <table style={tabstyle} className="table border shadow">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Titre</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
            <th scope="col">Active/Non</th>
          </tr>
        </thead>
        
        <tbody>
            {filteredArticles.map((article, index) => (
              <tr>
                <th scope="row" key={index.toString()}>
                  {index + 1}
                </th>
                <td>{article.titre}</td>
                <td>
                <div style={{ overflow: 'auto', maxHeight: '200px', width: '100%', textAlign: 'justify' }}>
                         {article.description}
                 </div>
            </td>
                <td>
                <img style={imgStyle}src={`http://localhost:8080/${article.imagePath}`} alt={article.imagePath}></img>
               
                </td>
              <td>
                <Link 
                  to={`/viewArt/${article.id}`} style={{color:"#03A9F4"}}
                ><i className="fas fa-eye"></i>
                  <b>               </b>
                </Link>
                <Link 
                  to={`/editeArt/${article.id}`}style={{color:"#FFC107"}}
                ><i className="fas fa-edit"></i>
                   <b>               </b>
                </Link>
                <Link
                    onClick={() => deleteArt(article.id)}style={{color:"#E34724"}}
                  ><i className="fas fa-trash"></i>
                  <b>               </b>
                  </Link>
              </td>
              <td>
              <button className={`toggle-button ${article.etat === "publier" ? "on" : "off"}`} onClick={() => updateArticleEtat(article.id)}>
  <span className="toggle-text">{article.etat === "publier" ? "On" : "Off"}</span>
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
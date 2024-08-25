import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
export default function EditArticle() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  const { id } = useParams();

  const [article, setArticle] = useState({
    titre: "",
    description: "",
    image: "",
  });

  const { titre, description, image } = article;

  const onInputChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadArt();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("titre", titre);
    formData.append("description", description);
    formData.append("file", image);

    await axios.put(`http://localhost:8080/api/article/update/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    navigate("/ListArticle");
  };

  const loadArt = async () => {
    const result = await axios.get(`http://localhost:8080/api/article/${id}`);
    setArticle(result.data);
  };

  const divStyle = {
    color: "#F4192A",
    marginLeft: "25%",
  };
  const divStyle1 = {
    marginLeft: "35%",
  };

  const handleFileInputChange = (event) => {
    setArticle({ ...article, image: event.target.files[0] });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 style={divStyle}className="text-center m-4">EDIT ARTICLE</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="titre" className="form-label">
                Titre
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter le titre"
                name="titre"
                value={titre}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea cols={5} rows={5}
                type={"text"}
                className="form-control"
                placeholder="Enter description de l'article"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <input type="file" onChange={handleFileInputChange} />
            
            </div>
            <button style={divStyle1} type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/ListArticle">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
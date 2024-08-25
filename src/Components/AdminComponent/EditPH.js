import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
export default function EditUserPH() {
  //let navigate = useNavigate();
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [])
  const { id_user } = useParams();
  console.log(id_user);

  const [user, setUser] = useState({
    id_citoyen:"",
    nom: "",
    prenom: "",
    email: "",
    mobile:"",
    type_sang:"",
    sexe:"",
   
  });

  const { id_citoyen,nom, prenom, email,mobile, type_sang,sexe} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadArt();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/user/personneph/ph/${id_user}`, user);
    navigate("/ListUsersph");
  };
  const loadArt = async () => {
    const result = await axios.get(`http://localhost:8080/api/user/personneph/ph/${id_user}`);
    setUser(result.data);
  };
  const divStyle = {
    color: '#F4192A',
    marginLeft: '25%'
  };
  const divStyle1 = {
    marginLeft: '35%'
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 style={divStyle}className="text-center m-4">EDIT PERSONNE PHYSIQUE</h2>

          <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
              <label htmlFor="id_citoyen" className="form-label">
                id citoyen
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="donner l' identifiant de citoyen"
                name="id_citoyen"
                value={id_citoyen}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          <div className="mb-3">
              <label htmlFor="nom" className="form-label">
                nom
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="donner le nom"
                name="nom"
                value={nom}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="prenom" className="form-label">
              prenom
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="donner le prenom"
                name="prenom"
                value={prenom}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="donner l'email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
           
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">
                mobile
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="donner le numéro de telephone"
                name="mobile"
                value={mobile}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="type_sang" className="form-label">
                type de sang
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="donner le type de sang"
                name="type_sang"
                value={type_sang}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="sexe" className="form-label">
                sexe
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="donner le sexe"
                name="sexe"
                value={sexe}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button style={divStyle1} type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
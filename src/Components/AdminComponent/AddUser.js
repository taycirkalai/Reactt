import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react"
export default function AddUser() {
  //let navigate = useNavigate();
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [])
  const [user, setUser] = useState({
    nom: "",
    prenom: "",
    email: "",
    password:"",
    role:"",
    sexe:"",
    mobile:"",
    date_nais:"",
    type_sang:"",
  });

  const { nom, prenom, email,password,role,sexe,mobile,date_nais,type_sang } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/user/ajout", user);
    navigate("/Home");
  };
 
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
              <label htmlFor="nom" className="form-label">
                nom
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your prenom"
                name="nom"
                value={nom}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Prenom" className="form-label">
                prenom
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your prenom"
                name="prenom"
                value={prenom}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                password
              </label>
              <input
                type={"password"}
                className="form-control"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="role" className="form-label">
                role
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your role"
                name="role"
                value={role}
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
                placeholder="Enter your sexe"
                name="sexe"
                value={sexe}
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
                placeholder="Enter your e-mail address"
                name="mobile"
                value={mobile}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="date_nais" className="form-label">
                date Naissance
              </label>
              <input
                type={"date"}
                className="form-control"
                placeholder="Enter your date nais"
                name="date_nais"
                value={date_nais}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                type sang
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your type of sang"
                name="type_sang"
                value={type_sang}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
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
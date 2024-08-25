import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  //let navigate = useNavigate();
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [])
  const { id_user } = useParams();
  const [user, setUser] = useState({
    nom: "",
    prenom: "",
    email: "",
    role:"",
    mobile:"",
    type_sang:"",
  });

  const { nom,prenom,email, role, mobile,type_sang } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUsers();
  });


  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/user/${id_user}`, user);
    navigate("/home");
  };

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:8080/api/user/${id_user}`);
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
          <h2 style={divStyle}className="text-center m-4">Edit User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                NOM
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="Nom"
                value={nom}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                PRENOM
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="prenom"
                value={prenom}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                EMAIL
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
              <label htmlFor="role" className="form-label">
               ROLE
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
              <label htmlFor="mobile" className="form-label">
                MOBILE
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your mobile number"
                name="mobile"
                value={mobile}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                TYPE DE SANG
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="type_sang"
                value={type_sang}
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
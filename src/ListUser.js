import React , {useState , useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom"
function ListUser() {
    const [users , setUsers]=useState([]);
    const API_BASE_URL="http://localhost:8080/api/users";
  //  const{id}=useParams()
    //const longId = parseInt(id, 10);


    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async()=>{
        const result = await axios.get("http://localhost:8080/api/user/all");
        setUsers(result.data);
    };

    const DeleteUser = async (id) =>{
        await axios.delete(`http://localhost:8080/api/user/${id}`)
        loadUsers()
    }
  return (
    <div>
<div>
  <div className="container-xl">
    <div className="table-responsive">
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-8"><h2>User <b>Details</b></h2></div>
            <div className="col-sm-4">
              <div className="search-box">
                <i className="material-icons"></i>
                <input type="text" className="form-control" placeholder="Search…" />
              </div>
            </div>
          </div>
        </div>
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>

              <th>Nom</th>
              <th>Prénom</th>
              <th>Email </th>
              <th>Password </th>
              <th>Mobile</th>
              <th>Date naissance</th>
              <th>Role</th>
              <th>Sexe</th>
              <th>Type de sang</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
       {
         users.map(user=>(
        <tr key={user.id_user}>
             <td>{user.nom}</td>
             <td>{user.prenom}</td>
             <td>{user.email}</td>
             <td>{user.mobile}</td>
             <td>{user.date_nais}</td>
             <td>{user.role}</td>
             <td>{user.sexe}</td>
             <td>{user.type_sang}</td>
             <td>{user.password}</td>
             <td>
             <Link className="btn btn-primary mx-2"
                    to={`/viewuser/${user.id}`}>
                    View
                  </Link>                
                  <Link className='btn btn-outline-primary mx-2' onClick={()=>DeleteUser(user.id_user)} >Edit</Link>
                <button className='btn btn-danger mx-2' onClick={()=>DeleteUser(user.id_user)}>Delete</button>

             </td>
        </tr>

         )
   )
       }
                    
              
              
</tbody>
        </table>
       
      </div>
    </div>  
  </div>
</div>

    </div>
  )
}

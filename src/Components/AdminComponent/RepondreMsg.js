import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate ,Link} from 'react-router-dom';
import { useParams } from "react-router-dom";
export default function RepondreMsg() {
    const [msg, setMSG] = useState({});
    const [reponse, setReponse] = useState('');
    const { id } = useParams();
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login')
        }
    }, [])

    useEffect(() => {
        const fetchMSGDetails = async () => {
            const response = await axios.get(`http://localhost:8080/api/message/${id}`);
            setMSG(response.data);
        };
        fetchMSGDetails();
    });

    const handleReponse = (event) => {
        setReponse(event.target.value);
    };

    const handleUpdateMsg = async () => {
        await axios.put(`http://localhost:8080/api/message/reponse/${msg.id_msg}?reponse=${reponse}`);
        alert("reponse envoyer avec succes ")
        window.location.reload();
    };
      
    const divStyle = {
        color: '#2C97F1 ',
        marginLeft: '25%'
    };
    const cont = {
        marginTop: '50px',
        marginLeft: '25px'
    }
    
    return (
        <div className="container" style={cont}>
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 style={divStyle} className="text-center m-4">Consulter message et Répondre</h2>

                    <div className="card">
                        <div className="card-header">

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Email :  </b>
                                    {msg.email}
                                </li>
                                <li className="list-group-item">
                                    <b>Question :  </b>
                                    {msg.question}
                                </li>
                                <li className="list-group-item">
                                    <b>Date de demande :  </b>
                                    {new Date(msg.date_question).toLocaleString('fr-FR', { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' })}
                                </li>
                                <li className="list-group-item">
                                    <b>Réponse :  </b>
                                    {msg.reponse}
                                </li>
                                <li className="list-group-item">
                                    <b>Date de réponse :  </b> 
                                        {msg.date_reponse ? new Date(msg.date_reponse ).toLocaleString('fr-FR', {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'}) : 'non affectée'}
                                </li>
                                <li className="list-group-item">
                                    <b>Répondre :  </b><br></br>
                                    <textarea cols={54} type="text" id="reponse" name="reponse" value={reponse} onChange={handleReponse} />
                                    <br></br>
                                  
                                    <Link class="btn" to="/Message" style={{color:"#F53B35",marginLeft:"-40px"}}><i class="fa fa-chevron-left" aria-hidden="true"></i>  ANNULER</Link>
                                    <button class="btn" onClick={handleUpdateMsg}  style={{color:"#03A9F4",marginLeft:"-50px"}}>  ENVOYER REPONSE  <i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                                </li>
                            </ul></div></div></div></div></div>
    );
}
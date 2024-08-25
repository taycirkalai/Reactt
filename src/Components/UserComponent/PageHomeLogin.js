import '../../PageHomeLogin.css';
import {  Link} from 'react-router-dom';

function HomeLogin (){
    const icon={
        color: '#F41010' ,
        width:'50px' , height:'50px',
        marginTop:'60%',
        marginLeft:'20%'
    }
    return (
        <div>

<section className="background-radial-gradient overflow-hidden">
  <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div className="row gx-lg-5 align-items-center mb-5">
      <div className="col-lg-6 mb-5 mb-lg-0" style={{zIndex: 10}}>
        <h1 className="my-5 display-5 fw-bold ls-tight" style={{color: 'rgb(6, 36, 96)'}}>
        Bienvenue  <br />
          <span style={{color: 'rgb(6, 36, 96)'}}>Service de sang !</span>
        </h1>
        <p className="mb-4 opacity-70" style={{color: 'rgb(6, 36, 96)' ,textAlign: 'justify'}}>
        Bienvenue sur notre site de service de sang ! Nous sommes une équipe de médecins
         responsables de centre  qui travaillent sans relâche pour fournir des produits 
         sanguins sûrs et de qualité à ceux qui en ont besoin. Notre objectif est de répondre 
         à vos besoins en matière de transfusion sanguine avec efficacité et professionnalisme. 
         Nous sommes fiers de vous offrir des services de pointe et de travailler en étroite 
         collaboration avec les professionnels de la santé pour assurer des soins optimaux à
          nos patients. Merci de votre confiance envers notre équipe 
        et n'hésitez pas à nous contacter pour toute question ou préoccupation.
        </p>
      </div>
      <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong" />
        <div id="radius-shape-2" className="position-absolute shadow-5-strong" />
        <div className="card bg-glass">
          <div className="card-body px-4 py-5 px-md-5">
            <form>
             
              {/* Email input */}
              <div className="form-outline mb-4">
                <label style={{color:'black'}} className="form-label" htmlFor="form3Example3">Si vos étés un médecin cliquez ici s'il vous plaît </label>
                <Link to="/loginM">   <button type="submit" className="btn btn-custom btn-block mb-4">
                                  Inscription
                     </button></Link>
              </div>
              {/* Password input */}
              <div className="form-outline mb-4">
                <label  style={{color:'black'}}className="form-label" htmlFor="form3Example4">Si vos étés un responsable cliquez ici s'il vous plaît</label>
                <Link to="/loginR">   <button type="submit" className="btn btn-custom btn-block mb-4">
                Inscription
                     </button></Link>
              </div>
              <div className="form-outline mb-4">
                <label style={{color:'black'}}className="form-label" htmlFor="form3Example4">Si vos étés un utilisateur cliquez ici s'il vous plaît</label>
                <Link to="/LoginUser">    <button  type="submit" className="btn btn-custom btn-block mb-4">
                Inscription

                                  
                     </button></Link>
              </div>
            
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}
export default HomeLogin;
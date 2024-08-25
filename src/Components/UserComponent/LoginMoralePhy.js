import '../../PageHomeLogin.css';
import {  Link} from 'react-router-dom';

function HomeLoginPmPh (){
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
    <div className="row gx-lg-4 mb-4"  style={{marginTop:'10%'}}>
      <div className="col-lg-6 mb-6 mb-lg-0" style={{zIndex: 10}}>
        <h1 className="my-5 display-5 fw-bold ls-tight" style={{color: 'rgb(6, 36, 96)'}}>
        Bienvenue  <br />
          <span style={{color: 'rgb(6, 36, 96)'}}>Cher user !</span>
        </h1>
        <p className="mb-4 opacity-70" style={{color: 'rgb(6, 36, 96)' ,textAlign: 'justify'}}>
        Une personne morale est une entité. Elle peut être une entreprise, une organisation, une association ou même un gouvernement. 
        D'un autre côté, une personne physique est un individu qui existe en tant que personne réelle.
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
                <label style={{color:'black'}} className="form-label" htmlFor="form3Example3">Si vos étés une personne morale cliquez ici s'il vous plaît </label>
                <Link to="/LoginPM">   <button type="submit" className="btn btn-custom btn-block mb-4">
                                  Inscription
                     </button></Link>
              </div>
              {/* Password input */}
              <div className="form-outline mb-4">
                <label  style={{color:'black'}}className="form-label" htmlFor="form3Example4">Si vos étés une personne physique cliquez ici s'il vous plaît</label>
                <Link to="/LoginPH">   <button type="submit" className="btn btn-custom btn-block mb-4">
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
export default HomeLoginPmPh;
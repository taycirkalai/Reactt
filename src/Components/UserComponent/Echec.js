import Footer from "./Footer";
import { Link} from 'react-router-dom';

import Header from "./Header";
function Echec (){
    const cadre ={
        height:'500px',
        width:'1000px',
        marginLeft:'30%'

        }

        const jus={
            textAlign: 'justify'
          }
            
        const icone={
            width : '100px' ,
            height :'100px',
            marginTop:'2%',
            marginLeft:'45%'
        }
        const img={
            width : '1500px' ,
            height :'400px',
            marginTop:'-8%'
        }
        const test={
            width : '1500px' ,
            height :'420px'
        }
      
        const text={
            marginTop:'-25%'
        }
return (
    <div>
<Header/>
<div>
<section className="page-title bg-1" style ={test}>



<div className="overlay" >
<img style ={img}src="images/questionnaire.jpg"></img>
</div>
<div className="container">
  <div className="row">
    <div className="col-md-12">
      <div className="block text-center" >
          <div style={text}>
          <span className="text-white"></span>
        <h1 className="text-capitalize mb-5 text-lg">TEST : PUIS-JE DONNER MON SANG ?</h1>
        <span className="text-white">Ce questionnaire est indicatif et ne remplace ni le questionnaire médical, ni l’examen médical réalisé par un médecin avant le don. </span>
          </div>
      
      </div>
    </div>
  </div>
</div>
</section>
<div className="col-lg-6 col-md-6 col-sm-6">

        <div className="service-block mb-5" style={cadre}>
            <img style={icone}src="images/icone-goutte.jpg"></img>
           <center><h3>Merci d’avoir fait le test !</h3></center>
           <br/>
          <p style={jus} style={{marginLeft:'7%'}} >
          D'après vos réponses, vous ne pouvez pas faire un don de sang. Cependant, ce questionnaire en ligne est indicatif. 
          <br/>Lors de la collecte, vous devrez compléter un questionnaire médical et passer un examen médical avant 
           le don. <br/>Seul le médecin est à même de confirmer votre inaptitude à faire un don.
        </p>

 
 <center><button type="button" className=" btn btn-danger"  style={{marginTop:'5%'}}> 
 <Link to="/Test" style={{color:'white'}}>Retour au début</Link></button></center>
        </div>
        
      </div>
</div>
<Footer/>

    </div>
    
);
}
export default  Echec;

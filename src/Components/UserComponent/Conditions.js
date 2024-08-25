import Footer from "./Footer";
import Header from "./Header";
import {  Link} from 'react-router-dom';

function DonPlasma (){
    const video={
        marginLeft:'-60%',
        marginTop:'-20%'
      }
  const titre={
    marginLeft:'-100%',
  
  }
    const img={
        width : '1500px' ,
        height :'420px',
        marginTop:'-8%'
    }
    const test={
        width : '1500px' ,
        height :'420px'
    }
    const text={
        marginTop:'-30%'
    }
    const cadre ={
      height:'300px',
      }
  const img1={
    marginTop:'3%'

  }

    const color ={
        color:'#DC143C',
        fontWeight: 'bold'
      }
    const jus={
      textAlign: 'justify'
    }
return (
    <div>
<Header/>
<div>

<section className="page-title bg-1" style ={test}>
  <div className="overlay" >
  <img style ={img}src="images/condition.jpg"></img>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center" >
            <div style={text}>
            <span className="text-white">QUI PEUT DONNER ?</span>
          <h1 className="text-capitalize mb-5 text-lg">CONDITIONS</h1>
          <span className="text-white">Les personnes de tous les groupes sanguins peuvent donner leur sang. <br/>Les donneurs appartenant au groupe sanguin O négatif (donneurs universels) sont particulièrement recherchés.</span>
            </div>
        
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section department-single">
  
  <div className="container">
   
    <div className="row">
      
      <div className="col-lg-8">
        <div className="department-content mt-5">
          <h3 className="mt-5 mb-4">Qui peut donner du sang , palsma et palquette ?</h3>

          
          <div className="divider my-4" />
          <p className="lead" style={jus}>Toute personne :</p>
          <ul className="list-unstyled department-service">
            <li><i className="icofont-check mr-2" /> En bonne santé ;</li>
            <li><i className="icofont-check mr-2" />Agée de minimum 18 ans </li>
            <li><i className="icofont-check mr-2" />Pesant au moins 50 kg </li>
            <li><i className="icofont-check mr-2" />Ne présentant pas de risque de transmettre des maladies infectieuses</li>
          </ul>
          <p className="lead" style={jus}>En plus de ces critères de base, il existe toute une série de  
        <Link to="/ContreIndection"> <b>contre-indications </b>
</Link>vous écartant temporairement voire, dans certains cas, définitivement, du don de plaquettes.</p>
          <p className="lead" style={jus}><div style={color}>Note bien :</div> 
          Tous les groupes sanguins peuvent donner leur plasma et sang mais les plaquettes sont prélevées préférentiellement chez les donneurs des groupes O et A.
</p>
        </div>
       
      </div>
    
    </div>
  </div>
</section>
<section className="section testimonial">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 offset-lg-6">
        <div className="section-title">
         <center><h2 style={titre}>LE DON EST UN ACTE RESPONSABLE, VOLONTAIRE, BÉNÉVOLE ET NON RÉMUNÉRÉ</h2></center> 
          <div className="divider  my-4" />
        </div>
        <video style={video} width={700} height={500} controls>
       <source src="images/sang.mp4" />

          </video>
      </div>
    </div>
  
  </div>
</section>
</div>

<Footer/>

    </div>
);
}
export default DonPlasma;
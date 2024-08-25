import Footer from "./Footer";
import Header from "./Header";
import { Link} from 'react-router-dom';

function DonSan (){
    const img={
        width : '1500px' ,
        height :'420px',
        marginTop:'-8%'
    }
    const test={
        width : '1500px' ,
        height :'420px'
    }
    const jus={
      textAlign: 'justify'
    }
    const text={
        marginTop:'-30%'
    }
    const color ={
      color:'#DC143C',
      fontWeight: 'bold'
    }
    const image={
      width : '330px' ,
        height :'290px',
        marginLeft:'-5%'

    }
    const colorr ={
      color:'#FFFFFF',
      
    }
    const top={
      marginTop:'5%'

    }
    const imgg ={
      width : '1000px' ,
        height :'450px'
    }

    const plq={
      width : '400px' ,
      height :'350px',
      marginTop:'-60%',
      marginLeft:'110%',

    }
return (
    <div>
<Header/>
<div>

<section className="page-title bg-1" style ={test}>

  <div className="overlay" >
  <img style ={img}src="images/sang1.jpg"></img>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center" >
            <div style={text}>
            <span className="text-white">DONNER</span>
          <h1 className="text-capitalize mb-5 text-lg">LE DON DE SANG</h1>
          <span className="text-white">À l'heure actuelle, il n'existe aucun médicament ou traitement de synthèse pouvant remplacer le sang humain ou ses produits sanguins instables.
          <br/> Le sang est donc un produit irremplaçable.</span>
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
          <h3 className="mt-5 mb-4">Pourquoi donner son sang ?</h3>

          
          <div className="divider my-4" />
          <p className="" style={jus}>Parce qu’à l’heure actuelle, aucun médicament ne peut se substituer au sang humain ou à ses composants. Le sang humain est donc toujours un produit irremplaçable. Or chaque jour, des centaines de malades ou accidentés ont besoin d’une transfusion pour survivre et guérir. C’est pour cela que nous avons besoin 
          de votre générosité et de vos dons au quotidien !</p>
          <h3 className="mt-5 mb-4">À quoi sert le don de sang ?</h3>

          <div className="divider my-4" />
          <p className="" style={jus}>Une fois le sang prélevé chez un donneur, les différents constituants du sang, à savoir les globules rouges, le plasma et les  plaquettes sont séparés, traités et préparés pour être transportés vers les hôpitaux, selon les besoins.
          Ainsi divisé en 3 produits sanguins, votre don de sang peut contribuer à soigner 3 personnes !</p>
          <center><img style ={plq}src="images/Dsang.jpg"></img></center>

          <h3 className="mt-5 mb-4">Comment se passe le don de sang ?</h3>
          <div className="divider my-4" />
          <p className="" style={jus}>Vous pouvez vous rendre en collecte (sans rendez-vous sauf exception) ou sur un site de prélèvement fixe (sur rendez-vous). Vous serez tout d’abord invité.e à remplir un questionnaire médical. Ensuite, vous serez reçu.e pour un entretien médical confidentiel (gratuit) afin d’évaluer si le don ne présente aucun risque pour vous-même ou pour le receveur, en fonction :</p>
          <ul className="list-unstyled department-service">
            <li><i className="icofont-check mr-2" />de votre état de santé actuel ;</li>
            <li><i className="icofont-check mr-2" />de vos antécédents médicaux et chirurgicaux ;</li>
            <li><i className="icofont-check mr-2" />des médicaments que vous prenez ou avez pris ;</li>
            <li><i className="icofont-check mr-2" />de voyages que vous avez effectués ;</li>
            <li><i className="icofont-check mr-2" /> d’éventuels comportements à risque.</li>
          </ul>
          <p className="" style={jus}>Lorsque le médecin aura donné son autorisation, vous serez invité.e à procéder au don de sang. Selon votre volume sanguin, déterminé en fonction de votre poids et de votre taille, nous prélevons en moyenne entre 430ml et 470ml de sang.</p>
          <p className="" style={jus}><div style={color}>Petit conseil :</div> avant de vous rendre dans une de nos collectes, mangez léger et hydratez-vous bien ! 

</p>
        </div>
      </div>
    
    
    </div>
  </div>
</section>

  <div className="container">
    <div className="row">
      <div className="col-lg-7" >
        <div className="cta-content">
          <div className="divider mb-4" />
          
          <h2 className="mb-5 text-lg">VOUS ENVISAGEZ DE FAIRE UN DON DE SANG ?
 <h3><span className="title-color">Répondez à notre questionnaire en ligne ou informez-vous sur les conditions et contre-indications avant de vous rendre à une collecte !</span></h3></h2>
          <img style ={imgg}src="images/rdvv.jpeg"></img>
          <a href="appoinment.html" className="btn btn-main-2 btn-round-full" style={top}><Link to="/Test" style={{color:'white'}}>Faites le test</Link> <i className="icofont-simple-right  ml-2" /></a>
        <br/>
        <br/>
        </div>
      </div>
    </div>
  </div>




</div>





<Footer/>

    </div>
);
}
export default DonSan;
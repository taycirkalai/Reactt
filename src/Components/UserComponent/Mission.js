import Footer from "./Footer";
import Header from "./Header";

function Mission (){
    const jus={
        textAlign: 'justify'
      }
      const plq={
        width : '400px' ,
        height :'350px',
        marginTop:'-60%',
        marginLeft:'110%',
  
      }
      const color ={
        color:'#DC143C',
        fontWeight: 'bold'
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
    const img1={
        width : '80px' ,
        height :'80px'    }
    const text={
        marginTop:'-28%'
    }
return (
    <div>
<Header/>
<div>

<section className="page-title bg-1" style ={test}>


  <div className="overlay" >
  <img style ={img}src="images/mission.jpg"></img>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center" >
            <div style={text}>
            <span className="text-white">À PROPOS<br/></span>
          <h1 className="text-capitalize mb-5 text-lg">NOTRE MISSION</h1>
          <span className="text-white">Nous sommes à la source du recrutement de donneurs, du prélèvement, de la préparation et de la distribution de dérivés sanguins, <br/>indispensables pour apporter des soins à un grand nombre de malades.</span>
            </div>
        
        </div>
      </div>
    </div>
  </div>
</section>

<div>
  <section className="section contact-info pb-0">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-sm-6 col-md-6">
          <div className="contact-block mb-4 mb-lg-0">
          <img style={img1}   src="images/besion.png"  ></img>   
            <h5>RÉPONDRE AUX BESOINS</h5>
            Fournir aux hôpitaux les dérivés sanguins qu'ils demandent.
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-md-6">
          <div className="contact-block mb-4 mb-lg-0">
          <img style={img1}   src="images/sang.png"  ></img>   
            <h5>CONTRÔLER</h5>
            Veiller à la qualité des dérivés sanguins
            <br/>
            <br/>
</div>
        </div>
        <div className="col-lg-4 col-sm-6 col-md-6">
          <div className="contact-block mb-4 mb-lg-0">
       <img style={img1}   src="images/accomp.png"  ></img>   
    <h5>ACCOMPAGNER</h5>
    Veiller à la qualité de l'accueil fait aux donneurs
          </div>
        </div>
      </div>
    </div>
  </section>

</div>

<div className="container">
   
   <div className="row">
     <div className="col-lg-8">
       <div className="department-content mt-5">
         <h3 className="mt-5 mb-4">Veiller à la protection de la santé des donneurs et des receveurs :</h3>

         
         <div className="divider my-4" />
         <p className="" style={jus}>Pour ce faire, nous sommes à la pointe des nouvelles technologies (machines de prélèvement, de séparation ou encore d'analyses).</p>
        
         <h3 className="mt-5 mb-4">Apporter notre contribution en termes quantitatifs :
</h3>

         <div className="divider my-4" />
         <p className="" style={jus}>Parallèlement à la « qualité », nous devons également apporter notre contribution en termes quantitatifs : La Tunisie doit en effet être « autosuffisante » en produits sanguins, ce qui signifie que nous devons avoir « suffisamment » de donneurs pour faire face à toute demande émanant des hôpitaux.</p>

    
       </div>
     </div>
   
   
   </div>
 </div>




</div>





<Footer/>

    </div>
);
}
export default Mission;
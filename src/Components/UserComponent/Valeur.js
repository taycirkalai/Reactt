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
          <h1 className="text-capitalize mb-5 text-lg">NOS VALEURS</h1>
          <span className="text-white">Faisant partie intégrante de la service du sang, nous en partageons pleinement les principes fondamentaux.</span>
            </div>
        
        </div>
      </div>
    </div>
  </div>
</section>

<div>


  
  <div className="container">
   
    <div className="row">
      
      <div className="col-lg-8">
        <div className="department-content mt-5">
          <h3 className="mt-5 mb-4">Le Service du Sang</h3>

          
          <div className="divider my-4" />
          <p className="lead" style={jus}>Le Service du Sang a son propre domaine d’expertise et un rôle bien spécifique dans le secteur de la santé.
Ces spécificités influencent sa propre culture. Cette culture se traduit au travers de valeurs fondamentales pour tous nos collaborateurs:</p>
        </div>
      </div>
    </div>
  </div>

  <section className="section contact-info pb-0">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-sm-6 col-md-6">
          <div className="contact-block mb-4 mb-lg-0">
          <img style={img1}   src="images/solidarite.png"  ></img>   
            <h5>SOLIDARITÉ</h5>
       <p style={jus} >
        
       Je contribue à renforcer l’engagement de tou.te.s au bon fonctionnement intégré et continu de nos activités, en démontrant une attitude d’engagement responsable, de partage et de coopération constructive avec l’ensemble de mes collègues et de nos partenaires externes.
        </p>             </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-md-6">
          <div className="contact-block mb-4 mb-lg-0">
          <img style={img1}   src="images/efficace.png"  ></img>   
            <h5>EFFICACITÉ ET EXCELLENCE</h5>
            <p style={jus} >
            Dans mon action au quotidien, je m’investis pour contribuer à la mission et aux objectifs du Service du Sang, dans une logique d’amélioration continue de nos performances et du respect des standards de qualité les plus élevés pour répondre aux besoins de tous nos partenaires.</p>
</div>
        </div>
        <div className="col-lg-4 col-sm-6 col-md-6">
          <div className="contact-block mb-4 mb-lg-0">
       <img style={img1}   src="images/equipe.png"  ></img>  
     
    <h5>COHÉSION INTERNE <br/> &  <br/>ESPRIT D'ÉQUIPE
</h5>
    <p style={jus}>J’adhère aux objectifs de notre organisation et veille à y apporter ma contribution, en œuvrant ensemble pour l’intérêt collectif et en privilégiant le dialogue et la transparence avec toutes les équipes.   </p>
  

           </div>
        </div>
      </div>
    </div>
  </section>

</div>


<section className="section department-single">
  
  <div className="container">
   
    <div className="row">
      
      <div className="col-lg-8">
        <div className="department-content mt-5">
          <h3 className="mt-5 mb-4">Les principes de la service du sang :</h3>

          
          <div className="divider my-4" />
          <ul className="list-unstyled department-service">
            <li><i  style={jus} className="icofont-check mr-2" /> <b>IMPARTIALITÉ:</b>
            
             Il ne fait aucune distinction de nationalité, de race, de religion, de condition sociale et d’appartenance politique. Il s’applique seulement à secourir les individus à la mesure de leur souffrance et à subvenir par priorité aux détresses les plus urgentes.
             </li>
            <li><i style={jus}  className="icofont-check mr-2" /><b>INDÉPENDANCE:</b>
             Le Mouvement est indépendant. Auxiliaires des pouvoirs publics dans leurs activités humanitaires et soumises aux lois qui régissent leur pays respectif, les Sociétés nationales doivent pourtant conserver une autonomie qui leur permette d’agir toujours selon les principes du Mouvement.
             </li>
            <li><i className="icofont-check mr-2" /><b>VOLONTARIAT:</b> Il est un mouvement de secours volontaire et désintéressé. </li>
          </ul>
         
        </div>
       
      </div>
    
    </div>
  </div>
</section>
</div>





<Footer/>

    </div>
);
}
export default Mission;
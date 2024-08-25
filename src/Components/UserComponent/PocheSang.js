import Footer from "./Footer";
import Header from "./Header";

function PocheSang (){
    const image={
        width : '700px' ,
        height :'500px',
        marginLeft:'20%'
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
        marginTop:'-25%'
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
  <img style ={img}src="images/poche.jpg"></img>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center" >
            <div style={text}>
            <span className="text-white">EN SAVOIR PLUS SUR LE SANG</span>
          <h1 className="text-capitalize mb-5 text-lg">LE PARCOURS D'UNE POCHE DE SANG</h1>
          <span className="text-white">Du prélèvement jusqu’à la distribution dans les hôpitaux, en passant par l’analyse des prélèvements sanguins<br/> et la séparation des différents produits sanguins (globules rouges, plasma, plaquettes), découvrez le parcours d’une poche de sang.

</span>
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
          <h2 className="mt-5 mb-4">Le parcours d'une poche:</h2>

          <div className="divider my-4" />
          <h4>LE PRÉLÈVEMENT</h4>
          <p className="" style={jus}> 

          Avant le prélèvement, le donneur répond à un questionnaire médical et rencontre ensuite un médecin qui le questionne sur son mode de vie et sur ses antécédents médicaux afin de s’assurer que le donneur est apte à donner son sang et que son don ne représente aucun risque tant pour sa santé que pour celle du receveur. Une fois le feu vert du médecin, l’infirmier.ère installe le donneur et effectue le prélèvement. Nous prélevons en moyenne 450 ml de sang ainsi que plusieurs tubes qui serviront aux analyses.
 </p>

 <h4>LA PRÉPARATION DES PRODUITS</h4>
          <p className="" style={jus}>Une fois le sang prélevé, les poches de sang sont centrifugées afin de les séparer en 3 produits : les globules rouges, les plaquettes et le plasma. Un don de sang total n’est jamais transfusé tel quel à un receveur. On lui transfuse uniquement ce dont il a besoin en fonction de sa pathologie.
 </p>

 <h4>L'ANALYSE BIOLOGIQUE</h4>
          <p className="" style={jus}> 
          Parallèlement à la deuxième étape, des tests sur les échantillons sanguins prélevés lors du don sont réalisés (tests virologiques, sérologiques, immunologiques). Si une anomalie est détectée, les poches sont directement détruites et le donneur est averti.
 </p>

 <h4>VALIDATION ET DISTRIBUTION</h4>
          <p className="" style={jus}>Une fois les poches prêtes et les résultats des analyses ne présentant aucune anomalie, les produits sanguins sont distribués dans les hôpitaux desservis par le Service du Sang en fonction de leur demande.
 </p>
 <ul className="list-unstyled department-service">
            <li><i  style={jus} className="icofont-check mr-2" /> 42 jours pour les globules rouges 
                         </li>
            <li><i style={jus}  className="icofont-check mr-2" />5 jours pour les plaquettes
             </li>
            <li><i className="icofont-check mr-2" />3 ans pour le plasma </li>
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
export default PocheSang;
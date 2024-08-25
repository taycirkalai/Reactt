import Footer from "./Footer";
import Header from "./Header";

function GroupeSang (){
    const image={
        width : '650px' ,
        height :'400px',
        marginLeft:'20%'
    }
    const image1={
        width : '500px' ,
        height :'400px',
        marginLeft:'35%'
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
  <img style ={img}src="images/Groupe.jpg"></img>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center" >
            <div style={text}>
            <span className="text-white">EN SAVOIR PLUS SUR LE SANG</span>
          <h1 className="text-capitalize mb-5 text-lg">LES GROUPES SANGUINS</h1>
          <span className="text-white">Lors d’une transfusion, il est important que le groupe sanguin du donneur soit compatible avec celui du receveur.



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
          <h3 className="mt-5 mb-4">Répartition des groupes sanguins:</h3>

          
          <div className="divider my-4" />
          <p className="" style={jus}>Il existe plusieurs systèmes antigéniques qui permettent d’identifier les cellules sanguines. Les plus connus sont les systèmes ABO et Rh qui définissent la compatibilité et l'incompatibilité sanguine entre le donneur et le receveur.

          <p className="" style={jus}>Le système ABO permet d’attribuer à chaque individu une lettre qui caractérise son groupe sanguin : A, B, AB ou O. Le système Rh détermine si vous êtes Rh positif ou négatif.

Dans la population caucasienne (individus présentant des traits physiques européens et une peau claire), la répartition des différents types de sang est la suivante :</p>
        </p>
<img  style ={image1} src="images/ABO.jpg"></img>

        </div>
       
      </div>
    
    </div>
  </div>
  <div className="container">
   
    <div className="row">
      
      <div className="col-lg-8">
        <div className="department-content mt-5">
          <h3 className="mt-5 mb-4">Compatibilité des groupes sanguins:</h3>
          Les personnes du groupe O, également appelées « donneurs universels », peuvent donner leurs globules rouges  à n’importe quel receveur. Le groupe O- est surtout utilisé dans les situations d'urgence.

A l’inverse, les personnes du groupe AB+ sont les « receveurs universels », ils peuvent recevoir du sang, des globules rouges, de tous les groupes sanguins.

Toutefois, dans la majorité des cas, les receveurs sont transfusés avec le sang d'un donneur de leur propre groupe sanguin.
          
          <div className="divider my-4" />

          <img  style ={image} src="images/Compatibilite.jpg"></img>
          <br/>
          <br></br>
          <p className="" style={jus}>Pour le plasma, les choses sont différentes : ce sont les personnes du groupe AB qui sont
« donneurs universels », leur plasma peut être transfusé à tous les patients. A l’inverse, les personnes du groupe O sont les « receveurs universels », ils peuvent recevoir du plasma de tous les groupes sanguins.

Pour garantir la sécurité du receveur lors d’une transfusion, il est primordial de respecter les règles de compatibilité selon les groupes sanguins, et le type de produit : globules rouges, plaquettes ou plasma. En cas d’incompatibilité, le système immunitaire du receveur va reconnaître la présence de substances, « les antigènes », qui lui sont étrangères, ce qui peut entraîner le rejet du composant sanguin et une aggravation de l'état du malade. 
 </p>
 <p style={{color:'red'}}><b>Quel que soit votre groupe sanguin, vos globules rouges, votre plasma ou vos plaquettes peuvent sauver des vies !
</b></p>

        
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
export default GroupeSang;
import Footer from "./Footer";
import Header from "./Header";

function Sang (){
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
  <img style ={img}src="images/Csang.jpg"></img>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center" >
            <div style={text}>
            <span className="text-white">EN SAVOIR PLUS SUR LE SANG</span>
          <h1 className="text-capitalize mb-5 text-lg">QU'EST-CE QUE LE SANG ?</h1>
          <span className="text-white">Le sang est un tissu liquide qui circule dans notre corps grâce aux vaisseaux sanguins.

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
          <h3 className="mt-5 mb-4">Qu'est-ce que le sang ?</h3>

          
          <div className="divider my-4" />
          <p className="" style={jus}>Le sang est un tissu liquide qui circule dans notre corps grâce aux vaisseaux sanguins. Il est composé de globules rouges, de globules blancs et de plaquettes qui baignent dans un liquide appelé plasma. Le sang joue un rôle essentiel dans le transport de l’oxygène, des nutriments, des anticorps et des hormones.
Chez un adulte, le volume sanguin est d’environ 5 litres mais ce volume varie en fonction du poids, de la taille et du sexe de l’individu.
<br/>La composition du sang est la suivante : </p>
          <ul className="list-unstyled department-service">
            <li><i className="icofont-check mr-2" /> 45% de cellules (globules rouges, globules blancs et plaquettes)</li>
            <li><i className="icofont-check mr-2" />55% de plasma (partie liquide)</li>
          </ul>
        
        </div>
       
      </div>
    
    </div>
  </div>
  <div className="container">
   
    <div className="row">
      
      <div className="col-lg-8">
        <div className="department-content mt-5">
          <h3 className="mt-5 mb-4">Les cellules sanguines:</h3>

          
          <div className="divider my-4" />

          <img  style ={image} src="images/Celsang.png"></img>
          <br/>
          <br></br>
          <h4>LES GLOBULES ROUGES</h4>
          <p className="" style={jus}>Les globules rouges contiennent de l’hémoglobine qui donne au sang sa couleur rouge. Ils ont pour rôle de transporter l’oxygène de nos poumons vers les autres organes du corps. 
Dans le sang, ces cellules sont les plus nombreuses. En effet, il y a environ 5 millions de globules rouges par millimètre cube de sang. Un manque de globules rouges se caractérise par un affaiblissement continu et une forte fatigue. C’est ce que l’on appelle une anémie. 
La transfusion de globules rouges est nécessaire lors d’une grave anémie ou d'une forte hémorragie (ex : un accidenté de la route). 
 </p>

 <h4>LES GLOBULES BLANCS</h4>
          <p className="" style={jus}>Les globules blancs (ou leucocytes) sont des cellules du système immunitaire qui nous protègent des agressions extérieures telles que les bactéries, les virus, les cellules étrangères, etc. Il existe trois types de globules blancs : des granulocytes, lymphocytes et monocytes qui assurent chacun, par leur spécificité propre, les fonctions de défense. On en dénombre entre 4000 et 10.000 par mm³.
Comme les globules blancs peuvent être responsables de certaines complications dues à une incompatibilité des composants sanguins du donneur et du receveur lors d’une transfusion, ils sont extraits du sang grâce à un filtre. On dit que les poches de sang sont déleucocytées. 
 </p>

 <h4>LES PLAQUETTES</h4>
          <p className="" style={jus}>Les plaquettes « thrombocytes » ont un rôle primordial dans la prévention ou l’arrêt des saignements internes et externes de notre corps. Lorsque l’on se coupe, la coagulation se fait par la formation d’un caillot (thrombus) ou d’une croûte, grâce à l’action des plaquettes. 
La transfusion de plaquettes sanguines est nécessaire lors d’interventions chirurgicales lourdes avec pertes sanguines importantes, pour les traitements de leucémie et des cancers
 </p>

 <h4>LE PLASMA</h4>
          <p className="" style={jus}>Le plasma est la partie liquide du sang qui est composée à 90% d’eau et qui transporte tous les éléments du sang. 
Les 10% restants contiennent des lipoprotéines, de l’albumine, les protéines de coagulation, et les immunoglobulines.
 </p>
        
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
export default Sang;
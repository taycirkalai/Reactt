import Footer from "./Footer";
import Header from "./Header";
import { useNavigate , Link} from 'react-router-dom';

function DonPlasma (){
    const video={
        marginLeft:'-60%',
        marginTop:'-20%'
      }
  const image={
    width : '600px' ,
    height :'600px'  
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
          <h1 className="text-capitalize mb-5 text-lg">DÉLAI ENTRE DEUX DONS</h1>
          <span className="text-white">Le délai d’attente entre deux dons est obligatoire afin de protéger la santé du donneur.
 Celui-ci varie en fonction du type de don.</span>
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
          <h2 className="mt-5 mb-4">Intervalle entre 2 dons</h2>

          
          <div className="divider my-4" />
          <p className="" style={jus}>
          Pour un don de sang total, la loi autorise le don après un délai de minimum 2 mois entre 2 dons. Cependant, la Croix-Rouge préconise un délai de 3 mois. Dans les deux cas, vous pouvez donner maximum 4 fois en 365 jours.
Pour ce qui est du don de plasma, celui-ci peut s’effectuer tous les 15 jours et vous pouvez donner maximum 15 litres de plasma par an.
En ce qui concerne les plaquettes, il faut attendre au minimum 2 semaines entre 2 dons et vous pouvez donner maximum 24 fois par an. Cependant, la Croix-Rouge préconise un délai d’attente d’un mois entre 2 dons.
          </p>
        </div>
      </div>
      <br/>
   <center> <img style={image}src ="images/delaidon.jpeg"></img></center>
    </div>
  </div>
</section>

</div>

<Footer/>

    </div>
);
}
export default DonPlasma;
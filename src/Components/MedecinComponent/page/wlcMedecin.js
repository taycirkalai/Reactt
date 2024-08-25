function WlcMed(){
    const divStyle1 = {
        marginLeft: '25%'
      };
      const img = {
        height: '60%',
        width:'60%',
        marginTop:'1%',
        marginLeft:"-5%"
      };
      const bn = {
        color:"#2D7BAF",
        marginLeft:"6%",
        marginTop:'4%'
      };
    return(
<div style={divStyle1} >
<h1 className="mb-4" style={bn}>BIENVENUE MEDECIN</h1>
      <img src="images/Don_du_sang.jpg" alt="wlc" style={img}></img>
    </div>

             
)
}
export default WlcMed;
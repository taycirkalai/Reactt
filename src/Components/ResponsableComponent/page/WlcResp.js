function Wlc(){
    const divStyle1 = {
        marginLeft: '25%'
      };
      const img = {
        height: '55%',
        width:'55%',
        marginTop:'3%',
        marginLeft:"-1%"
      };
      const bn = {
        color:"#0c4070",
        marginLeft:"-1%",
        marginTop:'6%'
      };
    return(
<div style={divStyle1} >
<h1 className="mb-4" style={bn}>BIENVENUE RESPONSABLE</h1>
      <img src="images/arb.png"alt="wlc" style={img}></img>
      <h1 className="mb-4"></h1>
       

    </div>

             
)
}
export default Wlc;
import background from "../images/logo.png";

const Header = () => {
    return(
      <div>
      <MainHeader/>
      <p></p>
      <SubHeader/>
      </div>
    );
  }
  function MainHeader(){
    return(
      <div className="d-flex justify-content-center"  style={{backgroundColor:"white"}}>
        <img src={background} style={{height:"35px",verticalAlign:"top"}}></img>
        <span style={{backgroundColor:"white",color:"cyan"}}>React Course</span> 
      </div>
    );
  }
  function SubHeader(){
    return(
      <p className="text-center" style={subHeaderStyle}>This is a subheader.</p>
    );
  }
  const subHeaderStyle={
    color:"red",
    backgroundColor:"white"
  }

  export default Header;
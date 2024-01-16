function Header(){
    return(
      <div>
      <MainHeader/>
      <SubHeader/>
      </div>
    );
  }
  function MainHeader(){
    return(
      <h1 className="heading1" >React Course</h1>
    );
  }
  function SubHeader(){
    return(
      <p style={subHeaderStyle}>This is a subheader.</p>
    );
  }
  const subHeaderStyle={
    color:"red",
    backgroundColor:"black"
  }

  export default Header;
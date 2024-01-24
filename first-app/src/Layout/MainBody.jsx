import Students from "./students";
import StudentReview from "./StudentReview";

function MainBody(){
    const firstvariable = "React JS"; //var and let also could be used for declaring variable
    const lecturenumber = "3";
    const lecture = "New lecture is ";
    const lehrer = "English";
    return (
      <div> 
        <p>Creating and using variables like {firstvariable} </p>
        <p>Total lecture: {lecturenumber}</p>
        <div>{lecture} {lehrer}</div>
        <ul>
          <li>Basic Doundation</li>
          <li>Functional and Class Components</li> 
        </ul>
        <p>Using functions in rendering.</p>
        <div>Enter task: <input maxLength={4} readOnly={false} placeholder='Mert'></input> </div>
        <div>Students enroll</div>
        <div className="container row">
          
          <Students 
            Experience={2} 
            name="Mert Duyar">
              <StudentReview/>
            </Students>
          
          <Students 
            Experience={5} 
            name="Resul Özkale">
              <StudentReview/>
          </Students>
          
          <Students 
            Experience={7} 
            name="Murat Koç"/>
          </div>
      </div>

    );
  }

export default MainBody;
import { faker } from "@faker-js/faker";

function Students(props){
    
    return (
      <div className="col-4 p-4">
        
        <div className="row border">
          <div className="col-2">
            <img className="w-100 py-2" src={faker.image.avatar()}></img>
          </div>
          <div className="col-8">
            {props.name}<br></br>
            Programming Experience {props.Experience} years
          </div>
          <div className="col-2">
            {props.children}
          </div>
        </div>
      </div>
    );
  }

  export default Students;
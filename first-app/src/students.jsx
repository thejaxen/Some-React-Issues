import { faker } from "@faker-js/faker";

function Students(props){
    
    return (
      <div className="container p-4">
        <div className="row">Students enrolled.</div>
        <div className="row border">
          <div className="col-1">
            <img className="w-100" src={faker.image.avatar()}></img>
          </div>
          <div className="col-10">
            {props.name}<br></br>
            Programming Experience {props.Experience} years
          </div>
        </div>
      </div>
    );
  }

  export default Students;
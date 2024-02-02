import { faker } from "@faker-js/faker";
import React from "react";

class Students extends React.Component {
    render() {
    return (
      <div className="col-4 p-4">
        <div className="row border">
          <div className="col-2">
            <img className="w-100 py-2" src={faker.image.avatar()}></img>
          </div>
          <div className="col-8">
            {this.props.name}<br></br>
            Programming Experience {this.props.Experience} years
          </div>
          <div className="col-2">
            {this.props.children}
          </div>
        </div>
      </div>
    );
    }
  }

  export default Students;
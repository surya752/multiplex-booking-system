import { Component } from "react";

class Footer extends Component {
 /* render() {
    return <div>{this.props.email}</div>;
  }*/
  constructor() {
    super();
    this.state = {
      firstName: "Surya",
      lastName: "Rekhapalli",
    };
  }
  sayHello = () => {
    console.log("HIIIII", this.state.firstName);
  };
  
  changeFirstName = (name) => {
    this.setState({ firstName: name });
  };
  render() {
    return (
      <div>
        <p>{this.props.email}</p>
        <p>First name is {this.state.firstName}</p>
        <button onClick={() => this.sayHello()}>say Hi</button>
        <button onClick={() => this.changeFirstName("Uma")}>
          Change Name
        </button>
      </div>
    );
  }
}
export default Footer;
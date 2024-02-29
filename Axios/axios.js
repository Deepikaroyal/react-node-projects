import React from "react";
import axios from "axios";





export class Axios extends React.Component {
  state = {
    personData: [],
    isLoading: true,
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setTimeout(() => {
        const personData = res.data;
        this.setState({ personData });
        this.setState({ isLoading: false });
      }, 2000);
    });
  }
  render() {
    return this.state.isLoading ? (
      "Data is Loading...."
    ) : (
      <div>
        <table border="2">
            <tr>
                <th>S.no.</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
            </tr>
          {this.state.personData.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.username}</td>
              <td>{person.email}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default Axios; 

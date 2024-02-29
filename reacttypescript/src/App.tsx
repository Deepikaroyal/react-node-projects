import {useSelector,useDispatch} from 'react-redux';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Sidebar from "./components/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import { StringDecoder } from "string_decoder";
import { Form, Button } from "react-bootstrap";
import { useState,useEffect,useCallback,useRef } from "react";
import data from "./mock-data.json";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import { alertAction } from './actions/alertAction';
import { getUser } from './services/Services';



const App: React.FC = () => {
 
  //state for redux:
  const myState=useSelector((state:any)=>state.alertReducer.user);
  const dispatch=useDispatch();
 // console.log('myState',myState)
  // const [userList, setUserList] = useState<any>(data);
  const [userList, setUserList] = useState<any>([]);
 // console.log("listttt",userList)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  //state for editing data:
  const [editFormData, setEditFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  //handling id of user:
  const [editUser, setEditUser] = useState(null);
  // console.log("edituser1123",editUser)
  //form toggler state:
  const [formToggle, setFormToggle] = useState(false)

  //handling data coming from api call:
  useEffect(() => {
    console.log(getUser())
          getUser().then((data:any) => {
            setUserList(data.data.responseData.users);
            // setResponse(data.responseData);
            console.log('$$',userList)
          })
          .catch((err) => { console.log(err); })
    //   const currentTableData = useMemo(() => {
    //     return userData;
      }, [])

  //handle form change when new user added:
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: [event.target.value] });
  };
  //handling form change  after editing:
  const handleEditFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEditFormData({
      ...editFormData,
      [event.target.name]: [event.target.value],
    });
  };

  //handling form submit:
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUserList = {
      _id: nanoid(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
    };
    const newUserListtwo = [...userList, newUserList];
    setUserList(newUserListtwo);
  };
  //handling form submit after editing:
  const handleEditFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const editedContact = {
      _id: editUser,
      firstName: editFormData.firstName,
      lastName: editFormData.lastName,
      email: editFormData.email,
    };
    console.log("editUser11 ",editUser);
    const newContacts = [...userList];

    const index = userList.findIndex(
      (userList: any) => userList._id === editUser
     
    );
    
    console.log("editUser ",editUser);
    console.log("index",index);

    newContacts[index] = editedContact;

    setUserList(newContacts);
    setEditUser(null);
  };
  //handling edit button by matching id value of user:
  const handleEditClick = useCallback( (
    event: React.ChangeEvent<HTMLInputElement>,
    userList: any
  ) => {
    event.preventDefault();
    setEditUser(userList._id);
    console.log('handle67',editUser);
    const formValues = {
      firstName: userList.firstName,
      lastName: userList.lastName,
      email: userList.email,
    };
    setEditFormData(formValues);
  },[userList])
  //handle cancel:

  const handleCancelClick = () => {
    setEditUser(null);
  };
  //handle delete:

  const handleDeleteClick = useCallback((contactId: any) => {
    console.log("id",contactId)
    const newContacts = [...userList];

    const index = userList.findIndex(
      (contact: any) => contact._id === contactId
    );

    newContacts.splice(index, 1);

    setUserList(newContacts);
  },[userList])
//add user form toggler:

function handleFormToggler(){
 
  setFormToggle(!formToggle)
}
  return (
    <>
      <Container fluid className="App">
  <Row className='task-header'>
  <Col></Col>
    <Col md="auto">TASK</Col>
    <Col ></Col>
    
  </Row>
  <Row className='mid-body-row'>
    <Col xs lg="2" className='Sidebar shadow-lg '><Sidebar/></Col>
    <Col >
      <div className="app-container">
        <form onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>E-mail</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((el: any) => (
                <>
                  {editUser === el._id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      el={el}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                      handleFormToggler ={handleFormToggler}
                    />
                  )}
                </>
              ))}
            </tbody>
          </table>
        </form>
    
        <div className=" d-flex justify-content-center h-100 align-items-center py-5 mt-md-0">
       
          {formToggle?
          <Form
            className="login-form rounded p-4 p-sm-5 "
            onSubmit={handleSubmit}
          >
       
            <h1 className="login-heading mb-4">Form</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <div className="login-email-input-field input-group mb-3">
                <input
                  type="text"
                  name="firstName"
                  className=" login-email-input-box form-control"
                  placeholder="Enter your Firstname"
                  onChange={handleChange}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNumber">
              <div className="login-email-input-field input-group mb-3">
                <input
                  type="text"
                  name="lastName"
                  className=" login-email-input-box form-control"
                  placeholder="Enter your Lastname"
                  onChange={handleChange}
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNumber">
              <div className="login-email-input-field input-group mb-3">
                <input
                  type="email"
                  name="email"
                  className=" login-email-input-box form-control"
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
              </div>
            </Form.Group>
            <Button
              className="login-button mb-3"
              variant="primary"
              type="submit"
              onClick={()=>dispatch(alertAction(formData))}
            >
              ADD USER
            </Button>
          </Form> :''}
        </div>
      </div>
      </Col>
   
  </Row>
</Container>
    </>
  );


};

export default App;

import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { getUserDetail } from "../services/Services";
import { useParams } from "react-router-dom";
import "../App.css";

export default function Dashboard() {

  const param = useParams();
  const [userData, setUserData] = useState();
  console.log("param", param);
  const { id } = param;
  //getting data from api for matching id:
  useEffect(() => {
   // console.log("getuserdetail4545",getUserDetail)
    getUserDetail(id)
      .then((data) => {
        // console.log(data,)
        console.log("hhh", data.data.responseData.usr);
        setUserData(data.data.responseData.usr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <Container fluid className="App">
        <Row className="task-header">
          <Col></Col>
          <Col md="auto">TASK</Col>
          <Col></Col>
        </Row>
        <Row className="mid-body-row">
          <Col xs lg="2" className="Sidebar shadow-lg ">
            <Sidebar />
          </Col>
          <Col>
            <div></div>
            <form className="mt-3">
              <div className=" login-form rounded p-4 p-sm-5">
                <h1 className="user-detail-heading">User Detail</h1>
                <h2>
                  Firstname:
                  <span className="userdetail-span ">
                    {userData?.firstName}{" "}
                  </span>
                </h2>
                <h3>
                  Lastname:
                  <span className="userdetail-span">{userData?.lastName} </span>
                </h3>

                <h3>
                  Email:
                  <span className="userdetail-span">{userData?.email} </span>
                </h3>
                {/* <h3>
                  Country
                  <span className="userdetail-span">
                    {userData?.address[0].country}{" "}
                  </span>
                </h3>
                <h3>
                  State
                  <span className="userdetail-span">
                    {userData?.address[0].state}{" "}
                  </span>
                </h3> */}
                
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

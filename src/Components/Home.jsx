import React from "react";
import Container from "./Container";
import Nav from "./Nav";
import "./Home.css";
export default function Home() {
  return (
    <div>
      <Container>
        <Nav />
      </Container>
      <div className="B">
        <div className="card">
          <img
            src="https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="card-img-top"
            alt="Robot Image"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="side-section">
          <h1>Dev Section</h1>
          <ul style={{ listStyle: "none" }}>
            <li style={{ paddingRight: "1vw" }}>
              <h2>Arihant SIngh Rana</h2>Front End Developer
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

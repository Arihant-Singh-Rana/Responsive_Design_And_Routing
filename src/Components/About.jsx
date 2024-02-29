import React from "react";
import Container from "./Container";
import Nav from "./Nav";
export default function About() {
  return (
    <div>
      <Container>
        <Nav />
      </Container>
      <h1
        style={{
          color: "White",
          textAlign: "center",
          fontSize: "xxx-large",
          marginTop: "30vh",
        }}
      >
        This Is About Us Section{" "}
      </h1>
    </div>
  );
}

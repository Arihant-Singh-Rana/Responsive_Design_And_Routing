import React from "react";
import Container from "./Container";
import Nav from "./Nav";
export default function Notes() {
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
        This Is Notes Section
      </h1>
    </div>
  );
}

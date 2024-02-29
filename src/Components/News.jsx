import React from 'react'
import Container from "./Container";
import Nav from "./Nav";
export default function News() {
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
        This Is The News Section
      </h1>
    </div>
  );
}

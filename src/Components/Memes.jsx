import React from 'react'
import Container from "./Container";
import Nav from "./Nav";
export default function Memes() {
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
        This Is The Memes Section
      </h1>
    </div>
  );
}
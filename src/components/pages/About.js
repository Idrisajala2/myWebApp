import React from 'react'
import styled from "styled-components"
import Content from "./Content"
const About = () => {
  return (
  <Container>
      <Wrapper>
    <Image src="/ims.jpg" />
<Content title="a breif note" text="A young rabbit embarks on a journey to dig the burrow of her dreams, despite not having a clue what she’s doing. Rather than reveal to her neighbors her imperfections, she digs herself deeper and deeper into trouble."/>
<Content title="note" text="stars Anthony Mackie as Sam Wilson aka The Falcon, and Sebastian Stan as Bucky Barnes aka The Winter Soldier. The pair, who came together in the final moments of “Avengers: Endgame,” team up on a global adventure that tests their abilities—and their patience."/>
      </Wrapper>
  </Container>
  )
}

export default About;

const Container = styled.div`
width:100%;
height:100%;
min-Height:calc(100vh - 80px);
background:lightgray;


`
const Wrapper = styled.div`
width:85%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;

`;
const Image = styled.img`
margin :40px 0;
width: 1000px;
height: 600px;
object-fit:contain;
box-shadow:rgba(99,99,99,0.2),0px 2px 8px 0px
`


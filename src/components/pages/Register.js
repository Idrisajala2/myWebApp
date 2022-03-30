import React from 'react'
import styled from "styled-components"
import Content1 from "./Content1"
const About = () => {
  return (
  <Container>
      <Wrapper>
    <Image src="/my dp.jpg" />
    <Div>
        <Input/>
        <Button>Name</Button>
    </Div> 
    <Div>
    <Input1/>
        <Button>other names</Button>
    </Div>
    <Div>
    <Input1/>
        <Button>password</Button>
    </Div> <Div>
    <Input1/>
        <Button> confirm password</Button>
    </Div>
    <Button1>sign in</Button1>
     <Content1 />
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
margin :50px 20px;
width: 400px;
height: 400px;
border-radius:50%;
object-fit:cover;
border:4px solid white;
box-shadow:rgba(99,99,99,0.2),0px 2px 8px 0px;
`;

const Input = styled.input`
margin-bottom:20px;
height:40px;
width:520px;
outline:none;
border:none;
border-radius:5px 0px 0px 5px;
font-size:30px;
`;
const Input1 = styled.input`
margin-bottom:20px;
height:40px;
width:520px;
font-size:30px;
outline:none;
border:none;
border-radius:5px 0px 0px 5px;
`
const Div = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
background:white;
width:650px;
margin-bottom:20px;
`
const Button = styled.button`
margin-bottom:1px;
height:60px;
width:220px;
background:transparent;
font-size:20px;
padding:10px;
outline:none;
border:none;
font-weight:bold;
color:orangeRed;
cursor:pointer;
:hover{
    background:LightGreen;
    transform:scale(1.05);
}
`
const Button1 = styled.button`
height:60px;
width:150px;
background:lightGreen;
font-size:20px;
padding:10px;
outline:none;
border:none;
font-weight:bold;
color:orangeRed;
cursor:pointer;
:hover{
    background:LightGreen;
    transform:scale(1.05);
}
`
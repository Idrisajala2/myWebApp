import React from "react"
import styled from "styled-components"
const Hero = () =>{
    return(
<Contaner>
    <Wrapper>
      <Text>welcome</Text>
       <Name>Idris</Name>
    </Wrapper>
</Contaner>
    )
}
export default Hero;

const  Contaner = styled.div`
width:100%;
height:700px;
display:flex;
align-items:center;
justify-content:center;
background-image: url("sch.jpg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;

`
const  Wrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`
const  Text = styled.div`
font-weight:bold;
color:white;
font-size:40px;
`
const  Name = styled.div`
font-weight:bold;
font-size:70px;
text-transform:uppercase;
`
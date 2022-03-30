import React from "react"
import styled from "styled-components"
const Content = ({title,text}) => {
    return(
   <Contaner>
       <Holder>
           <Line>
         <Title></Title>
         </Line>    
         <Tit>{title}</Tit>
         <Line>
         <Title></Title>
         </Line>
       </Holder>
       <Text>{text}</Text>
   </Contaner>
    )
}
export default Content

const Contaner = styled.div`
width:100%;
height:100%;
margin-bottom:30px;
display:flex;
flex-direction:column;
align-items:center;
`;
const Holder = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin:0px 10px;
/* background-color:red; */
`;
const Line = styled.div`
background-color:black;
width:200px;
height:3px;
`
const Text = styled.div`
width:700px;
text-align:center;
font-size:25px;
line-height:1.8;
`;
const Title = styled.div`
 font-weight:900;
 font-size:40px;

`

const Tit = styled.div`
font-size:25px;
font-weight:700;
margin:0px 20px;
`

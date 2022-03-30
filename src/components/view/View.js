import React from "react"
import styled from "styled-components"
import data from "../data.json"
import { Link } from "react-router-dom"
const View = () =>{
    return(
 <Contaner>
     <Wrapper>
  {data?.map((props)=>( 
  <Card key={props.id1} to={`/detail/${props.id1}`} onClick={()=> {
      console.log(`this is the id for this card: ${props.id1}`)
  }} >
      
     <Image src={props.cardImg}/>
</Card>
            ))}
            </Wrapper>
        </Contaner>
    )
}
export default View;

const Contaner = styled.div`
width:100%;
margin-top:60px;

`
const Wrapper = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
`
const Card = styled(Link)`
text-decoration:none;
overflow:hidden;
width:350px;
height:300px;
border-radius:5px;
margin: 10px;
box-shadow: rgba(0,0,0,0.05) 0px 6px 24px 0px,
rgba(0,0,0,0.05) 0px 0px 0px 1px;
transform:scale(1);
transition:all 350ms;
:hover {
    transform:scale(0.98);
    cursor:pointer;
}
`;
const Image = styled.img`
width:100%;
height:100%;
border-radius:10px;
`


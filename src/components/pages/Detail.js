import React, {useEffect, useState} from "react"
import styled from "styled-components"
import data from "../data.json"
import {useParams} from "react-router-dom"
import View from "../view/View"

const Detail = () => {
    const {id} = useParams()
    console.log(id)
    const [getData, setGetData] = useState({})
    const fetchData=() =>{
        setGetData(data[id - 1]);
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <Container>
         <Wrapper>
             <Image src={getData.cardimg} alt=""/>
             <View title={getData.title}  alt=""/>
         </Wrapper>
        </Container>
    )
}
export default Detail;

const Container = styled.div`
width:100%;
height: 100%;
min-height: calc(100vh -80%);
margin-top:20px;
`
const Wrapper = styled.div`
display:flex;
align-items:center;
flex-direction:column;
`

const Image = styled.img`
margin:40px;
width:700px;
height:400px;
object-fit:cover;
box-shadow:rgba(100,100,111,0.2) 0px 7px 29px 0px

`


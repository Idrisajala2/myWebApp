import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"
const Header = () =>{
    return(
<Contaner>
    <Wrapper>
        <Link to="/">
        <Avater src="/my dp.jpg
        "/>
        </Link>
        
        <Navigation>
             <Nav to="/Login">Login</Nav>
            <Nav to="/About">About</Nav>
            <Nav to="/register">Register</Nav>
            <Nav to="/signout">Sign Out</Nav>
        </Navigation>
    </Wrapper>
</Contaner>
    )
}
export default Header;
const Avater = styled.img`
width:60px;
height:60px;
border:3px solid white;
border-radius:50%;
object-fit:contain;
background-size:contain;
background-position:center center;
margin-left:20px;

`
const Navigation = styled.div`
display:flex;
align-items:center;
justify-content:center;

`
const Nav = styled(Link)`
padding:15px 30px;
background:white;
margin:6px 10px;
border-radius:2px;
text-transform:uppercase;
font-weight:700;
font-size:13px;
color:black;
transform:scale(1);
transition:all 350ms;

:hover{
cursor:pointer;
transform:scale(1.03);
}
`

const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width:100%;
`
const Contaner = styled.div`
background:#004080;
height:90px;
width:100%
`
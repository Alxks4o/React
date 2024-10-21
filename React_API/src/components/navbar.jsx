import React, {useState, useEffect}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    Container,
    Navbar,
    Nav,
} from 'react-bootstrap';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function PageNavbar(){
    
    const [user, setUser] = useState("");
    const navigate = useNavigate();
    
    useEffect(() =>{    

        var user = Cookies.get('token');
        var site = Cookies.get('site')
        
        if(user === undefined){
            navigate('/login')
        }else{
            if(site === undefined)
                {
                    navigate('/sites')
                }else{
                    axios
                    .get('http://127.0.0.1:3000/users/'+user+'/email')
                    .then((res) => {
                        setUser(res.data);
                    })
                    .catch((err) =>{
                        navigate('/login');
                    })
                }
            }
        },[])

        return(
            <>
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container style={{marginLeft: 0}}>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="/sites">Sites</Nav.Link>
                        </Nav>
                        <Nav >
                            <Nav.Link >Signed in as: <a style={{textDecoration:'underline'}}>{user.email}</a></Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        )
}
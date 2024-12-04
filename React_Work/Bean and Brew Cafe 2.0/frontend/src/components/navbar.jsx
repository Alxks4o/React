import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import {
    Container,
    Navbar,
    Nav
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function PageNavbar(){
    
    const [user, setUser] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        var user = Cookies.get('token');
        var site = Cookies.get('site');

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
                    setisLoaded(true)
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
                <Container fluid>
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/sites">Home</Nav.Link>
                        <Nav.Link href="/">Pricing</Nav.Link>
                        <Nav.Link href="/orders/site">View Orders</Nav.Link>
                        <Nav.Link href="/changepassword">Change Password</Nav.Link>

                    </Nav>
                    <Nav className="justify-content-end">
                        <Navbar.Text style={{marginRight:"16px"}}>
                            Signed in as: {user.email}
                        </Navbar.Text>
                        <Nav.Link href="/logout">Sign Out</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
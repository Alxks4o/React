import React, {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    Col,
    Container,
    Row,
    Card,
    Button,
    Navbar
}from 'react-bootstrap';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PageNavbar from '../components/navbar';


export default function Sites(){
    
    const navigate = useNavigate();
    const [sites, setSites] = useState([]);
    const selectSite = (site) =>{
        Cookies.set('site',site)
        navigate('/')
    }
        useEffect(() =>{
        axios
        .get('http://127.0.0.1:3000/sites/')
        .then((res) => {
            setSites(res.data)
        })
        .catch((error) => console.log(error))
    },[])

    return(
        <>
            <PageNavbar/>
            <Container>
                <Row>
                    {
                        sites.map(site =>(
                            
                            <Col xs={'4'}>
                                <Card fluid style={{width: '100%',height: "100%" ,marginTop: '18px'}} >
                                    <Card.Img variant="top" src={site.image}/>
                                    <Card.Body>
                                        <Card.Title>{site.name}</Card.Title>                                                       
                                    <Button onClick={() => selectSite(site._id)} variant="primary">lick me!</Button>
                                </Card.Body>
                                </Card>
                            </Col>
                          
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}
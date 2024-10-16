import React, {useState, useEffect}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import PageNavbar from '../components/navbar'
import axios from 'axios';
import { 
    Col, 
    Container, 
    Row,
    Card
} from 'react-bootstrap';
import Cookies from 'js-cookie';


export default function Index(){
            
    const [site, setSite] = useState({});

    useEffect(() =>{
        var siteid = Cookies.get('site')

        axios.get('http://192.168.168.122:3000/sites/'+siteid)
        .then((res) =>{
            setSite(res.data)
        })
        .catch((error) => console.log(error))
    },[])

    return(
        <>
            <PageNavbar/>
            <Container>
                <Row>
                    <Col xs={3}>
                        <Card fluid style={{width: '100%'}} >
                            <Card.Img variant="top" src={site.image}/>
                                <Card.Body>
                                    <Card.Title>You are shopping at: {site.name}</Card.Title>                                                      
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
    
}
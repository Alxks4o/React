import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    Container,
    Row, 
    Col,
    Button,
    Card
} from 'react-bootstrap'
import axios from 'axios';



export default function Root(){
    const [sites, setSites] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() =>{
        axios
        .get("http://localhost:3000/sites/")
        .then((res) =>{
            setSites(res.data)
            setIsLoaded(true)
        })
        .catch((err) => console.log(err))

    },[]);

    if(isLoaded)
    {    
        return (
            <Container style={{textAlign: 'center', padding:"10px", marginTop:12, marginLeft:20}}>
                <Row>
                    <Row>
                        {
                            
                            sites.map(site => (
                                <Card  style={{width: '18rem', marginRight:35}} key={site._id}>
                                    <Card.Img variant="top" src={site.image}/>
                                    <Card.Body>
                                            <Card.Title>{site.name}</Card.Title>
                                            <Card.Text>{site.description}</Card.Text>
                                            <Button href={'/site/'+site._id} variant='primary'>Link to image</Button>
                                    </Card.Body>
                                </Card>
                            ))
                        }
                    </Row>
                </Row>
            </Container>
        );
    }
 }
                     
                                        
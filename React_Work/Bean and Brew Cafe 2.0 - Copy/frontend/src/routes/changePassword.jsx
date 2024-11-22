// import React, {useState, useEffect} from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import axios from "axios";
// import {
//     Alert,
//     Button,
//     Card,
//     Col,
//     Container,
//     Form,
//     Row
// } from 'react-bootstrap';
// import Cookies from 'js-cookie';
// import { useNavigate } from 'react-router-dom';
// import PageNavbar from "../components/navbar";




// export default function ChangePassword(){

//     const [user, setUser] = useState([])
//     const [show, setShow] = useState(false);
//     const [passwordValue, setPasswordValue] = useState("")
//     const [isLoaded, setisLoaded] = useState(false);
//     const [message, setMessage] = useState("");
//     const navigate = useNavigate();

//     const handleSubmit= (event) => {
//         event.preventDefault();

        
//         var userid = Cookies.get('token');
        
//         axios
//         .put('http://localhost:3000/users/'+userid+'/password/',{
//             password:passwordValue
//         })
//         .then((res) => {
//             navigate('/login')
//             setisLoaded(true)
//         })
//     }
    
//     // const handleSubmit1 = (event) => {
//     //     event.preventDefault();
//     //     var userid = Cookies.get('token');
//     //     var newPassword = inputs.password;

//     //     axios
//     //     .put('http://127.0.0.1:3000/users/'+userid+'/password/',{
//     //         password:event.target[0].value
//     //     }).then((res) =>{
//     //         console.log(res.data)
//     //     }).catch((error) =>{
//     //         setShow(true);
//     //         setMessage(error.response.data.error);
//     //     })
//     // }
    
//     const handleChange = (event) =>{
//         setPasswordValue(event.target.value)
//     }

//     useEffect(() =>{
//         var userid = Cookies.get('token');
//         axios
//         .get('http://127.0.0.1:3000/users?_id='+userid)
//         .then((res) => {
//             (res.data);[]
//             setUser(res.data)
//             setisLoaded(true)
//         })
//         .catch((error) => console.log(error))
//     },[]);
   
//     if(isLoaded)
//     {
//     return(
//         <>
    
//             <Container>
//                 <Row>
//                     <Col xs='2'></Col>
//                     <Col xs='8'>
//                         <Alert variant="danger" show={show} onClose={() => setShow(false)} dismissible> 
//                             <Alert.Heading>Oh No!</Alert.Heading>
//                             <p>
//                                 {message}
//                             </p>
//                         </Alert>
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Change Password</Card.Title>
//                                 <Card.Text>
//                                     <Form onSubmit={(event)=> handleSubmit(event)}> 
//                                         <Form.Group >
//                                             <Form.Label>Passoword</Form.Label>
//                                             <Form.Control onChange={handleChange} type='password' placeholder='Password' name='newPassword' required/>                                            
//                                         </Form.Group>

//                                         <Form.Group>
//                                             <Form.Label>Repeat Password</Form.Label>
//                                             <Form.Control type='password' name='RepeatNewPassword' placeholder='Repeat Password' required />
//                                         </Form.Group>

//                                         <Button variant='primary' type='submit'>
//                                             Submit
//                                         </Button>
//                                     </Form>
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col xs='2'></Col>
//                 </Row>
//             </Container>
//         </>
//     )
//     }
// }
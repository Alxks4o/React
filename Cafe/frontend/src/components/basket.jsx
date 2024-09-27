import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Table,
    Card, 
    Button
} from 'react-bootstrap'
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Cookies from 'js-cookie';

export default function Basket(){
    const [basket, setBasket] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=> {
        var user = Cookies.get("user")
        axios
        .get("http://localhost:3000/basket/?user="+user)
        .then((res) =>{
            setBasket(res.data)
            setIsLoaded(true);
            console.log(res.data.items)
        })
        .catch((err) => console.log(err))
    },[]);

    const removeButton = (event) => {
        var userid = Cookies.get("user");
        var item = event.currentTarget.id
        console.log
        axios
        .delete("http://localhost:3000/basket/item?item"+item+"&user"+userid,{

        })
      };
    
    if(isLoaded)
    {
        return (
            <>
                <Card>
                    <Card.Body>
                        <Card.Title>Basket</Card.Title>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    basket.items.map(item=>(
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{item.quantity}</td>
                                            <td>£{item.price}</td>
                                            <td>£{item.quantity * item.price}</td>                                            
                                            <td><Button onClick={removeButton} id={item.id} variant='danger' style={{backgroundColor:'red', borderColor: 'red'}}>Remove</Button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                        <Card.Text>
                            Total Price: £{basket.total}
                            <Button className='float-end' variant='success'>Check out</Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </>
        )
    }
}
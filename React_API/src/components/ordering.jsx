import React, {useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import {
    Tab,
    Tabs,
    Table,
    Button,
    Card

} from 'react-bootstrap';
import Cookies from "js-cookie";

export default function Ordering(){
    
    const[isLoaded, setisLoaded] = useState(false);
    const [drinks, setDrink] = useState([])
    const [food, setFood] = useState([])
    const [basket, setBasket] = useState([])

    useEffect(() => {
        var userid = Cookies.get('token')
        axios
        .get('http://127.0.0.1:3000/products/drinks')
        .then((res) => {
            setDrink(res.data);
        }).then(()=>{
            axios
            .get('http://127.0.0.1:3000/products/food')
            .then((res) => {
                setFood(res.data);
            }).then(() => {
                axios
                .get('http://127.0.0.1:3000/basket?user='+userid)
                .then((res) => {
                    setBasket(res.data);
                    setisLoaded(true);
                })
            })
        })
        .catch((error) => console.log(error))
    },[])
    
    const AddToBasket = (item) =>{
        var userid = Cookies.get('token')
        axios
        .post('http://localhost:3000/basket/item',{
            item:item,
            user:userid
        }).then((res) => {
            setBasket(res.data)
        })
    }

    if(isLoaded){
    return(
        <>
            <Tabs
                defaultActiveKey='drinks'
            >
                    <Tabs eventKey='drinks' title="Drinks">
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Add to Basket</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    drinks.map(drink => (
                                    <tr>
                                        <td><img src={drink.image} style={{width:"100px"}} alt="" /></td>
                                        <td>{drink.name}</td>
                                        <td>£{drink.price}</td>
                                        <td><Button onClick={() => {AddToBasket(drink._id)}}>Add to Basket</Button></td>
                                    </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Tabs>
        
                <Tabs eventKey='food' title="Food">
                <Table striped>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Add to Basket</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                food.map(food => (
                                <tr>
                                    <td><img src={food.image} style={{width:"100px"}} alt="" /></td>
                                    <td>{food.name}</td>
                                    <td>£{food.price}</td>
                                    <td><Button onClick={() => {AddToBasket(food._id)}}>Add to Basket</Button></td>
                                </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Tabs>
            </Tabs>
            <Card>
                <Card.Title>Basket</Card.Title>
                <Card.Body>
                    <Table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove from basket</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                basket.items.map(item =>(
                                    <tr>
                                        <td><img src={basket.image} alt="" /></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><Button variant="danger">Remove from basket</Button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                    <Card.Text>
                        £
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}}
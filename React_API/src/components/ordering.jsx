import React, {useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import {
    Tab,
    Tabs,
    Table,
    Button

} from 'react-bootstrap';

export default function Ordering(){
    
    const [drinks, setDrink] = useState([])
    const [food, setFood] = useState([])


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
                                        <td><Button>Add to Basket</Button></td>
                                    </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Tabs>
            </Tabs>
            <Tabs
            defaultActiveKey='food'
            >
                <Tabs eventKey='food' title="Food">
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
                                    <td><Button>Add to Basket</Button></td>
                                </tr>
                                ))
                            }
                        </tbody>
                </Tabs>
            </Tabs>
        </>
    )
}
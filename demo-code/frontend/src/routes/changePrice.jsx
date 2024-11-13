import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import {
    Button,
    Card,
    Container,
    Tab,
    Table,
    Tabs
} from 'react-bootstrap';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function Ordering(){
    const [isLoaded, setisLoaded] = useState(false);
    const [drinks, setDrinks] = useState([]);
    const [foods, setFood] = useState([]);
    const navigate = useNavigate();

    const handleChangeDrinks = (event) => {
        axios
        .get('http://localhost:3000/products/price/'+drinks[event.target.selectedIndex]._id)
        .then((res) => {
            setDrinks(res.data)
        })
    }

    const handleChangeFood = (event) => {
        axios
        .get('http://localhost:3000/products/price/'+foods[event.target.selectedIndex]._id)
        .then((res) => {
            setFood(res.data)
        })
    }

    useEffect(() =>{
        axios
        .get('http://127.0.0.1:3000/products/drinks')
        .then((res) => {
            setDrinks(res.data);
        }).then(()=>{
            axios.get('http://127.0.0.1:3000/products/food')
            .then((res)=>{
                setFood(res.data);
                setisLoaded(true)
            })
        })
        .catch((error) => console.log(error))
    },[]);

    if(isLoaded)
    {
        return(
            <>          
                <Container>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>                                    
                                <th>Change Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                drinks.map(drink => (
                                    <tr key={drink._id}>
                                        <td><img src={drink.image} style={{width:"100px"}}/></td>
                                        <td>{drink.name}</td>
                                        <td>£{drink.price}</td>                                            
                                        <td>
                                            <input type="number" placeholder="Enter price..." style={{margin:"10px", borderRadius:"5px", borderWidth:"1px"}}/><br />                                                
                                            <Button onChange={handleChangeDrinks} style={{marginLeft:"10px"}}>Change Price</Button>
                                        </td>
                                    </tr>
                                ))
                            }                            
                        
                            {
                                foods.map(food => (
                                    <tr key={food._id}>
                                        <td><img src={food.image} style={{width:"100px"}}/></td>
                                        <td>{food.name}</td>
                                        <td>£{food.price}</td>
                                        <td>
                                            <input type="number" placeholder="Enter price..." style={{margin:"10px", borderRadius:"5px", borderWidth:"1px"}}/><br />
                                            <Button onChange={handleChangeFood} style={{marginLeft:"10px"}}>Change Price</Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                        </Table>
                    
                    </Container>                 
            </>
        )
    }
}
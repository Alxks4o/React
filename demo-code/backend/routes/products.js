var express = require('express');
var router = express.Router();
const {MongoClient} = require('mongodb');
var mongo = require('mongodb');

const databaseLink = 'mongodb://localhost:27017/';

//localhost:3000/products/drinks - GET
router.get('/drinks',async function(req,res,next){
    try{
        const client = new MongoClient(databaseLink);
        const database = client.db('coffee');
        const collection = database.collection('products');
        var drinks = await collection.find({type:'drink'}).toArray();

        res.json(drinks);

        client.close();

    }catch(error){
        console.log(error);
        res.status(500).json({error:"Cannot get drinks"})
    }
});

router.get('/food',async function(req,res,next){
    try{
        const client = new MongoClient(databaseLink);
        const database = client.db('coffee');
        const collection = database.collection('products');
        var food = await collection.find({type:'food'}).toArray();

        res.json(food);

        client.close();

    }catch(error){
        console.log(error);
        res.status(500).json({error:"Cannot get drinks"})
    }
});


router.put('/:products/price', async function(req,res,next){
    try {
        
        var product_id = req.body._id
        var newPrice = req.body.price

        if(newPrice!==undefined){
            const client = new MongoClient(databaseLink);
            const database = client.db('coffee');
            const collection =  database.collection('products');

            await collection.updateOne({
                _id: new mongo.ObjectId(product_id)
            },{
                "$set":{
                    price:newPrice
                }
            });
        }

        res.json(product);

    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Could not change price"});
    }
})


module.exports = router;
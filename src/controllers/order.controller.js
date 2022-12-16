import orderModel from "../models/order.model.js"
import {getUser} from "./user.controller.js"

async function getCompletedOrders(req, res){
    const stateFilter = "Completado"
    const orders = await orderModel.find({state: stateFilter}).populate("user review")
    return res.status(200).send({orders})
}

async function getOrders(req, res){
    const user = await getUser(req.body.username, req.body.password)
    if(user.role == "Admin"){
        const orders = await orderModel.find().populate("user review")
        return res.status(200).send({orders})
    } else {
        return res.status(403).send({error: "para agregar un pedido debe iniciar sesión"})
    }
}

async function getOwnOrders(req, res){
    const user = await getUser(req.body.username, req.body.password)
    if(user){
        const orders = await orderModel.find({'user.username': user.username}).populate("user review")
        return res.status(200).send({orders})
    } else {
        return res.status(403).send()
    }
}

async function newOrder(req, res){
    const user = await getUser(req.body.username, req.body.password)
    .catch((error) => {
        return res.status(403).send(error)
    })
    console.log(req)
    try{
        await orderModel.create({
            user: user,
            description: req.body.description,
            title: req.body.title,
            img: req.file.filename,
            state: 'En revisión'
        })
        return res.status(201).send('order created')
    }catch(error){
        return res.status(500).send(error)
    }
}

export {getCompletedOrders, getOrders, getOwnOrders, newOrder}
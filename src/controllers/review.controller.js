import reviewModel from "../models/review.model.js"

async function newReview(req, res){
    const review = await newReview(req.body.idReview, req.body.message, req.body.rating)
    .catch((error) => {
        return res.status(403).send(error)
    })
    console.log(req)
    try{
        await reviewModel.create({
            idReview: req.body.idReview,
            message: req.body.message,
            rating: req.body.rating
        })
        return res.status(201).send('Reseña Guardada')
    }catch(error){
        return res.status(500).send(error)
    }
}

export {newReview}
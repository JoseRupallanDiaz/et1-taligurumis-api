export function getFile(req, res){
    const path = "./images/"+ req.params.path
    console.log(path)
    return res.sendFile(req.params.path, {root: './images'})
}
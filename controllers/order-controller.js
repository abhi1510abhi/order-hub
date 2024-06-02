
const health = async (req, res) => {
    console.log("inside api")
    return res.json({health : "OK"})
}

const printName = async (req, res) => {
    console.log("inside api" , req.body)
    return res.json({data : req.body})
}

module.exports = {
    health,
    printName
}
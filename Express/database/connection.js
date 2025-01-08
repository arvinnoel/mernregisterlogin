const mongoose = require('mongoose')

function RunServer(){
    try {
        mongoose.connect('mongodb+srv://noelarvin96:arvin24@cluster0.zfl7f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('Mongoose connected')
    } catch (error) {
        console.log(error)
    }
}

module.exports = RunServer 
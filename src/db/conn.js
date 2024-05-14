const mongoose = require('mongoose')

async function main(){
    try {
        await mongoose.connect(
            `string connection`
        )
    } catch (error) {
        console.log(`Error ${error}`)
    }
}

module.exports = main
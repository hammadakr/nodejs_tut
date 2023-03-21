const os= require('os')

// info about the user

const user = os.userInfo()

console.log(user)

console.log(`The system uptime is: ${os.uptime()} second`)

const currentos = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freemem: os.freemem()
}

console.log(currentos)
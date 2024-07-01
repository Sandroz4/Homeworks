name = 'python'


const namePromise = new Promise((resolve, reject) => {
    if(name === 'python'){resolve('hello world')}
    else{reject('not python')}
})

console.log(namePromise)
age = 18


const agePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(age > 16){resolve('resolved after 2 sec')}
        else{reject('you are not allowed to drink')}
    }, 2000)
})


agePromise
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })
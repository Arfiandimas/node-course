const firstPromise= () => (new Promise((resolve,reject) => {
    setTimeout(() =>{ resolve('first Promise')},2000) 
  }))
  
  const secondPromise = () => ( new Promise((resolve,reject) =>{
    setTimeout(() =>{ resolve('second Promise')},2000) 
  }))
  
  const thirdPromise = () => ( new Promise((resolve,reject) =>{
    setTimeout(() =>{ resolve('third Promise')},2000) 
  }))
   
async function promiseAll() {
    let result = await Promise.all(
        [firstPromise(), secondPromise(), thirdPromise()]
    )
    console.log(result)
}

async function promiseRace() {
    let result = await Promise.race(
        [firstPromise(), secondPromise(), thirdPromise()]
    )
    console.log(result)
}

// promiseAll()
promiseRace()
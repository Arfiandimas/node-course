const firstPromise= () => (new Promise((resolve,reject) => {
    setTimeout(() =>{ resolve('first Promise')},2000) 
  }))
  
  const secondPromise = () => ( new Promise((resolve,reject) =>{
    setTimeout(() =>{ resolve('second Promise')},2000) 
  }))
  
  const thirdPromise = () => ( new Promise((resolve,reject) =>{
    setTimeout(() =>{ resolve('third Promise')},2000) 
  }))
   
async function asyncParalel() {
    let a =firstPromise()
    let b= secondPromise()
    let c= thirdPromise()
    console.log('done')
}
   
async function asyncSerial() {
    let a= await firstPromise()
    let b= await secondPromise()
    let c= await thirdPromise()
    console.log('done')
}

// asyncParalel()
asyncSerial()
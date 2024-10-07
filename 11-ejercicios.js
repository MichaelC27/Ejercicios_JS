let array = [1,3,4,5,6]

let rotar = (arre)=>{
    let element = arre.pop()
    arre.unshift(element)
    return arre
}
 for (let index = 0; index < 5; index++) {
    console.log(rotar(array))
 }

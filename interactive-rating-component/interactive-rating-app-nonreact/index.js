// document.addEventListener("click", (e)=> {
//     console.log(e.target)
// })

const target= document.getElementsByTagName("i")



// To get classList of The element
let e= document.getElementById("btn")
console.log(e)
// // alert(e.classList)
// console.log(e.classList)



console.log(target)


console.log(target.length)


for( var i=0;i<target.length;i++){
    console.log(target.classList)
    target[i].addEventListener("click",(e)=> {
       target[i].classList.add("select")
    })
}
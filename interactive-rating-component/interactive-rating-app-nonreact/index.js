// document.addEventListener("click", (e)=> {
//     console.log(e.target)
// })

const target= document.getElementsByTagName("i")



// To get classList of The element
let e= document.getElementById("btn")
console.log(e)
// // alert(e.classList)
// console.log(e.classList)



// target[i].addEventListener("click",(e)=> {

//    target[i].classList.toggle("select")
// })

for( var i=0;i<target.length;i++){
    console.log(target[i])
    target[i].addEventListener("click",(e) => {
        console.log(e.target)

        if(e.target.classList.contains("no")){
            e.target.parentElement.classList.toggle("select")
        }
     
       
    })

}
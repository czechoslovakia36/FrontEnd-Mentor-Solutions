// document.addEventListener("click", (e)=> {
//     console.log(e.target)
// })

const target= document.getElementsByTagName("i")



// To get classList of The element
let iconTag= document.getElementById("btn")
let p = document.getElementsByClassName("no")
// console.log(e)
// // alert(e.classList)
// console.log(e.classList)
const ratings2= [...p]
console.log(ratings2[0])
const ratings = [...target]


// ratings2.map(rating => {
//     console.log(rating)
//     rating.onclick = () => {
       
//        rating.classList.add("active")
//        index= ratings2.indexOf(rating) 
//        console.log(index)
//        console.log(rating)
//         for (var i=0 ; i<ratings2.length;i++){
//             if(i==index){
                
//             }
//             else {
//                 rating.classList.remove("active")
//             }
//         }
       
       
//     }
// }
//    )

ratings.map(rating => {
   
    rating.onclick = () => {
       
       rating.classList.add("active")
       index= ratings.indexOf(rating) 
       console.log(index)
       console.log(rating)
        for (var i=0 ; i<ratings.length;i++){
            if(i==index){
                
            }
            else {
                ratings[i].classList.remove("active")
            }
        }
       
       
    }
}
   )





// target[i].addEventListener("click",(e)=> {

//    target[i].classList.toggle("select")
// })

// for( var i=0;i<target.length;i++){
//     console.log(target[i])
//     target[i].addEventListener("click",(e) => {
//         console.log(e.target)

//         e.target.classList.remove("select")
    

//         if(e.target.classList.contains("no") ){
//             e.target.parentElement.classList.add("select")
//         }
     
       
//     })

// }
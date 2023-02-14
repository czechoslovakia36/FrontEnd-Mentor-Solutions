// document.addEventListener("click", (e)=> {
//     console.log(e.target)
// })

let givenRating=0

const target= document.getElementsByTagName("i")



// To get classList of The element
let iconTag= document.getElementById("btn")
let p = document.getElementsByClassName("no")
// console.log(e)
// // alert(e.classList)
// console.log(e.classList)
const ratings2= [...p]
// console.log(ratings2[0])
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
    //    console.log(index)
    //    console.log(rating)
        for (var i=0 ; i<ratings.length;i++){
            if(i==index){
                givenRating=index+1
               
            }
            else {
                ratings[i].classList.remove("active")
            }
        }
       
       
    }
}
   )

// 
console.log(givenRating)


// const url= new URL(`index2.html/?rating=${givenRating}`)
// const urlParams = new URL("https://example.com/?product=trousers&color=black&newuser&size=s").searchParams;

// for(let p of urlParams){
//     console.log(p)
// }





function navigate() {
    // window.location.href=url
    // const urlParams= new URL(`https://example.com/?rating=${givenRating}`).searchParams
    // const rating= urlParams.get("rating")
    var params = new URLSearchParams();
    params.append("rating",givenRating)
    var url= "index2.html?"+ params.toString()
    // console.log(rating)
    window.location.href=url
}








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
// window.onload = () =>{


//     var params= new URLSearchParams(window.location.search)
//     rating= params.get("rating")
//     console.log(rating)

//     let span = document.getElementsByTagName("span")
//     span.innerHTML= `<b>You Selected ${rating} out of 5</b>`
//     console.log(span)

   
// }


document.addEventListener('DOMContentLoaded',()=>{
    var params= new URLSearchParams(window.location.search)
    rating= params.get("rating")
    console.log(rating)
    
    let span = document.getElementById('content')
    span.innerHTML= `You Selected ${rating} out of 5`
    console.log(span)
})






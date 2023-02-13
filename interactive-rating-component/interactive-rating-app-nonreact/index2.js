window.onload = () =>{
    var params= new URLSearchParams(window.location.search)
    rating= params.get("rating")
    console.log(rating)
}
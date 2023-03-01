export default function validate(){
    console.log("validate ")
    let name= document.getElementById("name")
    let email= document.getElementById("email")
    let phoneNumber= document.getElementById("phonenumber")
    // let phoneNumber= null

    if(Boolean(name) && Boolean(email) && Boolean(phoneNumber)){

        if(name.value===''){


            document.getElementById("name").parentElement.children[1].children[0].classList.remove('hide')
            document.getElementById("name").parentElement.children[1].children[0].classList.add('show')
            name.classList.add('error-border')
            console.log("Please enter the name")

            setTimeout(()=>{
                document.getElementById("name").parentElement.children[1].children[0].classList.remove('show')
                document.getElementById("name").parentElement.children[1].children[0].classList.add('hide')
                name.classList.remove('error-border')
            },3000)

           
          
        }
        else if (email.value===''){
            document.getElementById("email").parentElement.children[3].children[0].classList.remove('hide')
            document.getElementById("email").parentElement.children[3].children[0].classList.add('show')
            email.classList.add("error-border")
            console.log("Please enter the name")

            setTimeout(()=>{
                document.getElementById("email").parentElement.children[3].children[0].classList.remove('show')
                document.getElementById("email").parentElement.children[3].children[0].classList.add('hide')
                email.classList.remove('error-border')
            },3000)


            
        }   
        else if(phoneNumber.value===""){
            document.getElementById("email").parentElement.children[5].children[0].classList.remove('hide')
            document.getElementById("email").parentElement.children[5].children[0].classList.add('show')
            phoneNumber.classList.add("error-border")
            console.log("Please enter the name")

            setTimeout(()=>{
                document.getElementById("email").parentElement.children[5].children[0].classList.remove('show')
                document.getElementById("email").parentElement.children[5].children[0].classList.add('hide')
                phoneNumber.classList.remove('error-border')
            },3000)
            
        }     


    } 
}
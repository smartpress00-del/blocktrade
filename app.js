async function register(){

let username = document.getElementById("username").value
let email = document.getElementById("email").value
let password = document.getElementById("password").value

if(!username || !email || !password){
alert("Please fill all fields")
return
}

try{

let response = await fetch("http://localhost:5000/api/auth/register",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
username,
email,
password
})

})

let data = await response.json()

alert("Account created successfully")

}catch(error){

alert("Registration failed")

}

}

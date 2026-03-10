async function register(){

let username=document.getElementById("username").value
let email=document.getElementById("email").value
let password=document.getElementById("password").value

await fetch("http://localhost:5000/api/auth/register",{

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

alert("Account created")

}

async function buyBTC(){

let amount=document.getElementById("buyAmount").value

await fetch("http://localhost:5000/api/trade/buy",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

userId:"USER_ID",
usdAmount:amount

})

})

alert("BTC purchased")

}

const BASE_URL = "https://quotes-api-self.vercel.app/quote";


let btn = document.querySelector("button");
let display = document.querySelector("#msg");

btn.addEventListener("click",async (evt)=>{
    try{
     let response = await fetch(BASE_URL);

     if(!response.ok){
        throw new Error(`Error : ${response.statusText}`);
     }

     let data = await response.json();

     if(data && data.quote){
        display.innerText = data.quote;
     }
     else {
        display.innerText = "No quotes available.";
     }
   }  catch(err){
        console.error("Error",err);
        display.innerText = "Failed to generate";
    }
});
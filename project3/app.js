const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click",()=>{
    let inpWord= document.getElementById("inp-word").value;
    console.log(inpWord);
   axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${inpWord}`)
    .then((response)=>console.log(response))
    // .then((data) =>{
    //     console.log(data);
    //     result.innerHTML=
    //     `
    //     <div class="word">
    //       <h3>${inpWord}</h3>
    //       <button><i class="fa-solid fa-volume-high"></i></button>
    //     </div>
    //     <div class="details">
    //         <p>pos</p>
    //         <p>/sample/ </p>

    //     </div>
    //     <p class="word-meaning">
    //         Lorem ipsum,dolar sit amet
    //         consectetur adipisicing elit.
    //         Dolorum, debitis.
    //     </p>
    //     </p>
    //     <p>
    //         Lorem ipsum,dolar sit amet
    //         consectetur adipisicing elit.
    //          lure , isten.
    //          </p>`;
    //});


});

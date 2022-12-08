function randomNum()
{
    var result=document.getElementById("heading")
    var arr=['red','green','orange','blue']
    var index=0;
    setInterval(()=>{
        if(index==4)
        {
            index=0;
        }
        result.innerHTML=Math.floor(Math.random()*10000) 

        result.style.color=arr[index]
        index++;
        
    },2000)
    
    
}
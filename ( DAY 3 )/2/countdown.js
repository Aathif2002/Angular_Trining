let countdown=10;
function count()
{
    document.getElementById("countdown").innerHTML=countdown;
    if(countdown===0)
    {
        clearInterval(seconds);
        display();
    }
  
    else{
       countdown--;
    }
    
}
function display()
    {
        document.getElementById("countdown").style.display='none';
        document.getElementById("gif").src="giphy5.gif";
        document.getElementById("gif").style.display="block";
    }
let seconds;
seconds=setInterval(count,1000) 
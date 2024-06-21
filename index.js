var modecolor=document.getElementById("theme1");
var roots =document.querySelector(":root");
modecolor.addEventListener("click",()=>{
   roots.style.setProperty("--darkbg","#d2dde1");
   roots.style.setProperty("--darkhgltcolor","#fff");
   roots.style.setProperty("--darkshdw","0 16px 20px rgba(0,0,0,0.4)");
   roots.style.setProperty("--darkftcolor","black");
})

var modecolor2=document.getElementById("theme2");
var roots =document.querySelector(":root");
modecolor2.addEventListener("click",()=>{
    roots.style.setProperty("--darkbg","#181a1e");
    roots.style.setProperty("--darkhgltcolor","#181a1e");
    roots.style.setProperty("--darkshdw","0 18px 32px rgba(0,0,0,0.4)");
    roots.style.setProperty("--darkftcolor","#edeffd");

})

const ones=document.getElementById("one");
const oness=document.getElementById("ones");
const twos=document.getElementById("two");
const twoss=document.getElementById("twos")
const threes=document.getElementById("three");
const threess=document.getElementById("threes");
const fours=document.getElementById("four");
const fourss=document.getElementById("fours");


window.addEventListener("scroll",()=>{
    const scroll=document.documentElement.scrollHeight-window.scrollY;
    var i = 2550;
    var j=1791;
    if(scroll>2549){
       ones.style.borderBottom ="2px solid var(--lgtclr)";
       oness.style.color="var(--lgtclr)";
    }
    else{
        ones.style.borderBottom ="0px solid white"; 
        oness.style.color ="var(--darkftcolor)";
    }
    if(i>scroll && scroll>1790){
        twos.style.borderBottom ="2px solid var(--lgtclr)";
        twoss.style.color ="var(--lgtclr)";
    }
    else{
        twos.style.borderBottom ="0px solid white"; 
        twoss.style.color ="var(--darkftcolor)";
    }
    if(j>scroll && scroll>953){
        threes.style.borderBottom ="2px solid var(--lgtclr)";
        threess.style.color ="var(--lgtclr)";
    }
    else{
        threes.style.borderBottom ="0px solid white"; 
        threess.style.color ="var(--darkftcolor)";
    }
    if(scroll<954){
        fours.style.borderBottom ="2px solid var(--lgtclr)";
        fourss.style.color ="var(--lgtclr)";
    }
    else{
        fours.style.borderBottom ="0px solid var(--lgtclr)";
        fourss.style.color ="var(--darkftcolor)";
    }

    }
)

function Subject(){
    document.getElementById("sub-marklist-view").className="viewarea";   
};  

function Subject2(){
    document.getElementById("sub-marklist-view2").className="viewarea";   
};  

function Subject3(){
    document.getElementById("sub-marklist-view3").className="viewarea";   
};  

function Remove(){
    document.getElementById("sub-marklist-view").className="sub-mark1";
};

function Remove2(){
    document.getElementById("sub-marklist-view2").className="sub-mark1";   
};

function Remove3(){
    document.getElementById("sub-marklist-view3").className="sub-mark1";   
};

function View(){
    var viewicon=document.getElementById("Small-icon");
    if(viewicon.className=="Small-nav"){
        viewicon.className="Small-nav-view";   
    }
    else {
       viewicon.className ="Small-nav";
    } 
}

const bgCol = document.getElementById("bgCol");
const shadowCol = document.getElementById("shadowCol");
const boxCol = document.getElementById("boxCol");


const infoTool=document.getElementById("infoTool");
const bg = document.getElementById("testingBox");
const info= document.getElementById("infoToolkit");
const x=document.getElementById("xVal");
const y=document.getElementById("yVal");
const z=document.getElementById("zVal");
const w=document.getElementById("wVal");
x.value = -50;
y.value = -50;

const navigator= document.getElementById("navigator");
const mobileResult = document.getElementById("screen");
const ci= document.getElementById("ci");

const themeButton = document.getElementById("themeCont");
const themeCursor=document.querySelectorAll("#themeCont svg");
let currentShadow;
const copyBtn = document.getElementById("copyBtn");
console.log(ci);
ci.isConnected=false;
const textA=document.getElementById("resultT")
//border-radius: x y z w color
const color = "#ff88cc"
const box=document.getElementById("resultBox");
let seeResult = false;
let theme = true; //false for dark - true for light
bgCol.value="#efefef";
boxCol.value="#9999ff";
shadowCol.value= "#ff5555"
navigator.addEventListener("click",e=>{
    if(!seeResult){
        mobileResult.style.transform = "translateY(-100%)";
        seeResult = !seeResult;
    }else{
        mobileResult.style.transform = "translateY(0%)";
        seeResult = !seeResult;

    }
})
const informate=(message)=>{
    infoTool.innerText = message
    info.style.transform = "translateY(0%)";
    setTimeout(()=>{
        info.style.transform = "translateY(-200%)"
    },3000)
}
copyBtn.addEventListener("click",e=>{  //COPY DOESNT WORK TO BE SOLVED !
    // currentShadow.setSelectionRange(0,500,"forward");
    // document.execCommand("copy",true,currentShadow);
    informate("Copied to clipboard successfully !");
})
const changeProps=(check)=>{

    requestAnimationFrame(changeProps);
    if(ci.checked){
        box.style.borderRadius = "50%";
    }else{
        box.style.borderRadius = "0";
    }
    xval = x.value;
    yval = y.value;
    zval = z.value;
    wval = w.value;

    if(xval ==''){
        xval=0
    }
    if(yval ==''){
        yval=0
    }
    if(zval ==''){
        zval=0
    }
    if(wval ==''){
        wval=0
    }
    currentShadow =xval+ "px " + yval + "px " + zval + "px " + wval + "px "+ shadowCol.value;
    box.style.boxShadow= currentShadow;
    box.style.background = boxCol.value; 
    bg.style.background = bgCol.value; 
    textA.value = currentShadow;
};changeProps();

const darkTheme= document.styleSheets[1];
const lightTheme= document.styleSheets[0];
console.log(lightTheme);

let themeSetter=(firstTime =false)=>{
    var time = new Date();
    time = time.getUTCHours();
    if(firstTime){
        if((time >0 && time < 8)||(time > 18)){
            theme = false;
        }else{
            theme= true;
        }
    }
    
    console.log(time);
    theme = !theme;
    informate(theme?"Light" +" theme set !":"Dark" +" theme set !");

    if(theme){
        for(let i=0;i<2;i++){
            themeCursor[i].style.transform= "translate(0%)"
        }
        darkTheme.disabled = true;
        lightTheme.disabled = false;
    }else{
        for(let i=0;i<2;i++){
            themeCursor[i].style.transform= "translate(-100%)"
        }
        darkTheme.disabled = false;
        lightTheme.disabled = true;
    }
};

themeButton.addEventListener("click",()=>{
    themeSetter()
})


const init=()=>{
    themeSetter(true);
};init();


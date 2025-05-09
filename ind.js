const textbox = document.getElementById("textbox");
const cel = document.getElementById("cel");
const fah = document.getElementById("fah");
const result = document.getElementById("result");
let temp;


function convert(){
    if(cel.checked){
        temp= Number(textbox.value);
        temp= temp* 9/5 + 32;
        result.textContent = temp.toFixed(1) + " °F";
    }
    else if(fah.checked){
        temp= Number(textbox.value);
        temp= (temp-32) * (5/9);
        result.textContent = temp.toFixed(1) + " °C";
    }
    else{
        result.textContent = "Select a Unit"
        
    }
}
const toggleBtn = document.getElementById("list");
const sidebar = document.getElementById("sideb");

toggleBtn.addEventListener("click", function(){
    sidebar.classList.toggle("collapsed");
});
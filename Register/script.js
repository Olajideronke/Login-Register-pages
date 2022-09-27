// const container = document.querySelector(".container")
//  const visibility = document.querySelectorAll(".showHidePw")
//  const pwinput= document.querySelectorAll(".password");
//  const icon=document.querySelectorAll(".icon")
//      visibility.addEventlistener("click", changeVisibility)

// //  js code to show/hide password and change icon
// function changeVisibility(){

// }

//             if(pwinput.type==="password"){
//                 pwinput.type="text";

//                 visibility.forEach(icon=>{
//                     icon.classlist.replace("uil-eye-slash", "uil-eye");
//                 })
//             }else{
//                 pwinput.type="password"

//                 visibility.forEach(icon=>{
//                     icon.classlist.replace("uil-eye", "uil-eye-slash");
//                 })
//                }
// function visibility(){
//     const visibilityBtn = document.getElementById("pass");
//     var y = document.getElementById("hide1");
//     var z = document.getElementById("hide2");
//     if(x.type === 'password'){
//         x.type = 'text';
//         y.style.display ="block";
//         y.style.position = "absolute"
//         z.style.display = "none";
//     }else{
//         x.type = 'password';
//         y.style.display = "none";
//         z.style.display = "block";
//     }
// }

const visibilityBtn = document.getElementById("visibilityBtn")
visibilityBtn.addEventListener("click",changeVisibility)

function changeVisibility(){
    const pwInput = document.getElementById("pass")
    const icon = document.getElementById("icon")
    if(pwInput.type === "password"){
        pwInput.type="text"
        icon.innerText="visibility_off"
    }else{
        pwInput.type= "password"
        icon.innerText="visibility"
    }

}

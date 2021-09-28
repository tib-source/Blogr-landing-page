const hamburger = document.querySelector("#menu")
const hamburgerMenu = document.querySelector(".menu__links")
const dropdown = document.querySelectorAll(".drop")
const dropdownContent = document.querySelectorAll(".dropdown-content")

hamburger.addEventListener("click", function(){
    let visibile = hamburgerMenu.style.visibility 
    if(visibile == "hidden" || visibile == ""){
        return hamburgerMenu.style.visibility = "visible"
    }else{
        return hamburgerMenu.style.visibility = "hidden"
    }
})


console.log(dropdown)

dropdown.forEach((button, index) => {
    button.addEventListener("click", function(){
        
        let display = dropdownContent[index].style.display
        button.classList.toggle("op")
        if(display=="none"||display==""){
            document.querySelectorAll(".arrow")[index].style.transform = "rotate(-180deg)"
            return dropdownContent[index].style.display = "flex"
        }else{
            document.querySelectorAll(".arrow")[index].style.transform = "rotate(0deg)"
            return dropdownContent[index].style.display = "none"
        }
    })
} )
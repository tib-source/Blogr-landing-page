const hamburger = document.querySelector("#menu")
const hamburgerMenu = document.querySelector(".menu__links")
const dropdown = document.querySelectorAll(".drop")
const dropdownContent = document.querySelectorAll(".dropdown-content")

hamburger.addEventListener("click", function(){
    let visibile = hamburgerMenu.style.visibility 
    console.log(visibile)
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

        if(display=="none"||display==""){
            document.querySelectorAll(".arrow")[index].style.rotate = "-180deg"
            return dropdownContent[index].style.display = "flex"
        }else{
            document.querySelectorAll(".arrow")[index].style.rotate = "0deg"
            return dropdownContent[index].style.display = "none"
        }
    })
} )
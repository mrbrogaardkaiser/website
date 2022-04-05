import { renderTemplate, setActive, showPage } from "./utils.js";

function renderNavItems(evt){
    const element = evt.target
    setActive(element)
    const id = element.id
    renderTemplate(id)
    switch (id){
        case "home-page": {
            break
        }
        case "exp-page":{
            break
        }
        case "edu-page":{
            break
        }
        case "profile-page":{
            break
        }
        case "contact-page":{
            break
        }
}
}
document.getElementById("navbar").onclick= renderNavItems;
showPage("home-page");
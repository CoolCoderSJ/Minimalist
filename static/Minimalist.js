$(document).ready(function(){
    sidebar = document.getElementsByClassName("sidebar")[0];
    sidebarelem = document.querySelector('.sidebar')
    style = getComputedStyle(sidebarelem)
    console.log(style.display)
    html = document.getElementsByTagName("html")[0];
    if (style.display === "none") {
        body = document.getElementsByTagName("body")[0];
        body.innerHTML = `
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css">
        <div class="sidebari">
            <div>
                <h3 style="margin-left: 5px; text-align: center;">
                    <i class="fas fa-bars sidebari-icon" onclick="toggleNav()"></i>
                </h3>
            </div>
        </div>` + body.innerHTML
        html.setAttribute("style", "margin-left: 40px !important;")
    }
    else {
        body = document.getElementsByTagName("body")[0];
        body.innerHTML = `
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css">
        <div class="sidebari" style="left: 205px; z-index: 2;">
            <div>
                <h3 style="margin-left: 5px; text-align: center;">
                    <i class="fas fa-window-close sidebari-icon" onclick="toggleNav()"></i>
                </h3>
            </div>
        </div>` + body.innerHTML
        html.setAttribute("style", "margin-left: 245px !important;")   
    }
});

function toggleNav() {
    sidebar = document.getElementsByClassName("sidebar")[0];
    sidebari = document.getElementsByClassName("sidebari")[0];
    sidebariicon = document.getElementsByClassName("sidebari-icon")[0];
    sidebarelem = document.querySelector('.sidebar');
    display = ""
    if (sidebar.style.display === "") {
        style = getComputedStyle(sidebarelem)
        display = style.display
    }   
    else {
        display = sidebar.style.display
    }

    if (display === "none") {
        sidebariicon.setAttribute("class", "fas fa-window-close sidebari-icon");
        sidebari.setAttribute("style", "transition: 500ms; left: 205px; z-index: 2;");
        sidebar.setAttribute("style", "display: block !important;");
    }

    else {
        sidebariicon.setAttribute("class", "fas fa-bars sidebari-icon");
        sidebari.setAttribute("style", "transition: 500ms; left: 0;");
        sidebar.setAttribute("style", "display: none !important;");
    }
}
let mobile = false;

function onWindowResizeDesktop() {
    document.querySelectorAll(".mobile").forEach(elem => elem.classList.replace("mobile", "desktop"));
    Render.setSize(render, window.innerWidth * 0.7, window.innerHeight);
}

function onWindowResizeMobile() {
    document.querySelectorAll(".desktop").forEach(elem => elem.classList.replace("desktop", "mobile"));
    Render.setSize(render, window.innerWidth, window.innerHeight * 0.6);
}

function onWindowResize() {
    mobile = window.innerWidth < window.innerHeight;
    if(mobile) onWindowResizeMobile();
    else onWindowResizeDesktop();
}

window.addEventListener("resize", onWindowResize);
onWindowResize();
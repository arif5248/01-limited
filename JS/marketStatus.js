function includeNabButton() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("navButton").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", `../component/layout/nabBtn.html`, true);
    xhttp.send();
}
function getViewportDimensions() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    return { height: windowHeight, width: windowWidth };
}

function displayDimensions() {
    const dimensions = getViewportDimensions();
    document.documentElement.style.setProperty('--vh', `${dimensions.height}px`);
    document.documentElement.style.setProperty('--vw', `${dimensions.width}px`);
    console.log(`Height: ${dimensions.height}px`);
    console.log(`Width: ${dimensions.width}px`);
}

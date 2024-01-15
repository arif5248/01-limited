async function loadContent(page, targetDiv, css, jsID, js) {
    document.getElementById('mainContentSection').innerHTML = '';
    try {
        const response = await fetch(page);
        const data = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const myDivContent = doc.getElementById(targetDiv).innerHTML;
        document.getElementById('mainContentSection').innerHTML = myDivContent;

        const styleSheet = document.head.getElementsByTagName('link')
        const styleTagsArray = Array.from(styleSheet);
        styleTagsArray.forEach(style => {
            if (style.id !== 'boots' && style.id !== 'main-page') {
                style.parentNode.removeChild(style);
            }
        });

        const newStyleSheet = document.createElement('link');
        newStyleSheet.rel = 'stylesheet';
        newStyleSheet.href = css;
        newStyleSheet.setAttribute('data-loaded', 'dynamic-style');
        document.head.appendChild(newStyleSheet);


        
        const script = document.head.getElementsByTagName('script');
        const scriptTagsArray = Array.from(script);
        scriptTagsArray.forEach(scriptTag => {
            if (scriptTag.id !== 'boots') {
                scriptTag.parentNode.removeChild(scriptTag);
            }
        });
        
        const newScript = document.createElement('script');
        newScript.src = js;
        console.log(newScript)
        newScript.id = jsID;

        document.head.appendChild(newScript);
        } catch (error) {
            console.error('Error:', error);
        }
}


async function route(page,id,css, jsID, js, callback){
    console.log(callback)
      document.addEventListener
        await loadContent(page, id, css, jsID, js);
        if (typeof callback === 'function') {
            callback();
        }
    
}

document.addEventListener('DOMContentLoaded', async function () {
    await loadContent('../component/home.html', 'homeMainSection', '../css/home.css','homeJs', '../JS/home.js');
    
});
function populateIpoSection() {
    document.getElementById('ipoSection').innerHTML =`
    <div class="container">
        <div class="ipoContent">
            <div class="contentHeader">
                <div class="ipoHeading">
                    <div class="static-heading">
                        <h3>IPO</h3>
                    </div>
                    <div class="headingForIPO"><h3>BEST HOLDINGS LTD (BHL)</h3></div>
                </div>
                <div class="subscriptionDate">
                    <h5 class="date-title">Subscription Date</h5>
                    <h5 class="date">14/01/2024-18/01/2024</h5>
                </div>
            </div>
            <div class="contentBody">
                <table>
                    <tr>
                        <td>Price</td>
                        <td>24</td>
                    </tr>
                    <tr>
                        <td>Minimum Application Amount (Tk)</td>
                        <td>10000</td>
                    </tr>
                    <tr>
                        <td>Maximum Application Amount (Tk)</td>
                        <td>1000000</td>
                    </tr>
                    <tr>
                        <td>Total Share</td>
                        <td>125055829</td>
                    </tr><tr>
                        <td>Total Value</td>
                        <td>35000000000</td>
                    </tr>
                    <tr>
                        <td>IPO Type</td>
                        <td>Share</td>
                    </tr>
                    <tr>
                        <td>Quantity/Lot</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>NAV</td>
                        <td>56.35</td>
                    </tr>
                    <tr>
                        <td>EPS</td>
                        <td>1.24</td>
                    </tr>
                    <tr>
                        <td>Eligibility</td>
                        <td>50000</td>
                    </tr>
                        <td>Company Prospectus</td>
                        <td><Button class="btn">PDF</Button></td>
                    </tr>
                    </tr>
                        <td>Summary</td>
                        <td><Button class="btn">PDF</Button></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    `
}






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
window.onload = function() {
    includeNabButton();
    displayDimensions();
    populateIpoSection();
    // document.getElementById('exchangeNews').style.display = 'none';
    // document.getElementById('miscNews').style.display = 'none';
};
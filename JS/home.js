const profile = {
    id: 101,
    name: "Mohammad Jahangir",
    mobile: "01730339167",
    email: "mohammad.jahangir@berichbd.com",
    image_url: "../images/user_photo.jpeg"
}
const table1 = [
    {
        fieldName: "Ledger Balance",
        value: 0
    },
    {
        fieldName: "Profile Balance",
        value: 0
    },
    {
        fieldName: "Total Stock Value",
        value: 0
    },
    {
        fieldName: "Total Portfolio",
        value: 0
    },
    {
        fieldName: "Change from Last Day",
        value: 0
    },
    {
        fieldName: "Available Fund",
        value: 0
    },
    {
        fieldName: "Available Reward Points",
        value: 0
    },
]
const table1More =[
    {
        fieldName: "Unposted Amount",
        value: 0
    },
    {
        fieldName: "Due CDBL Fee",
        value: 0
    },
    {
        fieldName: "Pending Withdrawl",
        value: 0
    },
    {
        fieldName: "IPO Fund Block",
        value: 0
    },
    {
        fieldName: "Purchase Limit",
        value: 0
    },
]
const table2 = [
    {
        fieldName: "Investment",
        value: 0
    },
    {
        fieldName: "Withdrawn",
        value: 0
    },
    {
        fieldName: "Net Investment",
        value: 0
    },
    {
        fieldName: "Realized Profit/(Loss)",
        value: 0
    },
    {
        fieldName: "Unrealized Profit/(Loss)",
        value: 0
    },
    {
        fieldName: "Net Profit/(Loss)",
        value: 0
    },
]
function getProfile(){
    document.getElementById('profile-content').innerHTML = `
    <div class="leftSide">
        <div class="userImage">
            <img src=${profile.image_url} alt=${profile.name}>
        </div>
        <div class="profileBtn">
            <a href="#">PROFILE</a>
        </div>
    </div>
    <div class="rightSide">
        <div class="mainInfo">
            <h3>ID: ${profile.id}</h3>
            <h3>${profile.name}</h3>
        </div>
        <hr>
        <div class="contactInfo">
            <p>${profile.mobile}</p> <p> ${profile.email}</p>
        </div>
    </div>
    `
}
function getTable1(){
    var tableContent = document.getElementById('table-1Content')
    var table= tableContent.appendChild(document.createElement('table'))
    table.classList.add('tablee','table-borderlesss')

    table1.forEach(function (row, index) {
        console.log(index)
        var tableRow = document.createElement('tr');
        tableRow.classList.add('item');

        tableRow.innerHTML = `
            <td class="column-left">${row.fieldName}</td>
            <td class="column-right">
                <div> <span>TK</span> <span>${row.value}</span> </div>
            </td>
        `;

        table.appendChild(tableRow);
        if(index===4){
            var breakRow = document.createElement('br');
            table.appendChild(breakRow);
        }
    })
}
function getTable1More(){
    var tableContent = document.getElementById('more-table1')
    var table= tableContent.appendChild(document.createElement('table'))

    table1More.forEach(function (row, index) {
        var tableRow = document.createElement('tr');
        tableRow.classList.add('item');

        tableRow.innerHTML = `
            <td class="column-left">${row.fieldName}</td>
            <td class="column-right">
                <div> <span>TK</span> <span>${row.value}</span> </div>
            </td>
        `;

        table.appendChild(tableRow);
    })
}
function getTable2(){
    var tableContent = document.getElementById('table-2Content')
    var table= tableContent.appendChild(document.createElement('table'))
    table.classList.add('tablee','table-borderlesss')

    table2.forEach(function (row, index) {
        console.log(index)
        var tableRow = document.createElement('tr');
        tableRow.classList.add('item');

        tableRow.innerHTML = `
            <td class="column-left">${row.fieldName}</td>
            <td class="column-right">
                <div> <span>TK</span> <span>${row.value}</span> </div>
            </td>
        `;

        table.appendChild(tableRow);
        if(index===2){
            var breakRow = document.createElement('br');
            table.appendChild(breakRow);
        }
    })
}



function showMore(){
    document.getElementById('popUpSec').style.display = 'block'
}
function closeMore(){
    document.getElementById('popUpSec').style.display = 'none'
}

function showStockData(stockType) {
    document.getElementById('currentStockBody').style.display = 'none';
    document.getElementById('oldStockBody').style.display = 'none';

    document.getElementById(stockType).style.display = 'block';
    updateButtonState(stockType);

}
function updateButtonState(activeButton) {
    var buttons = document.querySelectorAll('.btnGroup .stockBtn');
    buttons.forEach(function (button) {
        button.classList.remove('active');
    });

    var activeButtonElement = document.querySelector('.btnGroup .stockBtn[onclick*="' + activeButton + '"]');
    if (activeButtonElement) {
        activeButtonElement.classList.add('active');
    }
}









function includeHeader() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("navbarAfter").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "../component/layout/afterNavbar.html", true);
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
function onloadeddata(){
    document.getElementById('currentStockBody').style.display = 'block';
    document.getElementById('oldStockBody').style.display = 'none';
}

window.onload = function() {
    onloadeddata();
    displayDimensions();
    includeHeader();
    getProfile();
    getTable1();
    getTable1More()
    getTable2()
    closeMore()
};
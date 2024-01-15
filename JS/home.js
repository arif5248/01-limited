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
function getProfile() {
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

function initialize(){
    getProfile();
    getTable1()
    getTable1More()
    getTable2()
    closeMore()
    
}



window.onload = function() {
    getProfile();
    getTable1()
    getTable1More()
    getTable2()
    closeMore()
};




// function showSupportTeam(){
//     document.getElementById('support-slide').style.display = 'block'
// }
// function closeSupportTeam(){
//     document.getElementById('support-slide').style.display = 'none'
// }

// function sendMessage(){
//     document.getElementById('sendMessageSection').innerHTML = `
//     <div class="sendMessageHeading">
//         <span></span>
//         <h3>Send Message</h3>
//         <img onclick="closeSendMessage()" src="../images/icons/remove.png" alt="Close">
//     </div>
//     <div class="container">
//         <div class="sendMessageBody">
//             <form action="" method="post" enctype="multipart/form-data">
//                 <select name="" id="messageType">
//                     <option value="">-- Select Type --</option>
//                 </select>
//                 <input type="text" placeholder="Enter Name" class="inputStyle input-color" id="msg_req_user_name" name="name">
//                 <input type="text" placeholder="Enter Mobile Number" class="inputStyle input-color" id="msg_req_user_mobile" name="mobile">
//                 <input type="text" placeholder="Enter Email Address" class="inputStyle input-color" id="msg_req_user_email" name="email">
//                 <textarea id="messageTextarea" name="message" rows="7" placeholder="Enter your message..."></textarea>
//                 <div class="file">
//                     <label for="fileInput" class="fileInputLabel">
//                         <span>Browse</span>
//                         <input type="file" id="fileInput" name="file" accept=".jpg, .jpeg, .png, .pdf">
//                     </label>
//                     <span>Allowed file type PNG, JPEG, PDF</span>
//                 </div>
//                 <button class= "submitSendMsg" type="submit">Submit</button>
//             </form>
//         </div>
//     </div>
//     `
// }
// function videoChat(){
//     document.getElementById('videoChatSection').innerHTML = `
//     <div class="sendMessageHeading">
//         <span></span>
//         <h3>Video Chat(Via Zoom)</h3>
//         <img onclick="closeVideoChat()" src="../images/icons/remove.png" alt="Close">
//     </div>
//     <div class="container">
//         <div class="sendMessageBody">
//             <form action="" method="post" enctype="multipart/form-data">
//                 <input type="text" placeholder="Enter Name" class="inputStyle input-color" id="video_req_user_name" name="name">
//                 <input type="text" placeholder="Enter Mobile Number" class="inputStyle input-color" id="video_req_user_mobile" name="mobile">
//                 <input type="text" placeholder="Enter Email Address" class="inputStyle input-color" id="video_req_user_email" name="email">
//                 <input type="date" placeholder="Select a Date" class="inputStyle input-color" id="video_req_date" name="date">
//                 <input type="time" placeholder="Select a Time" class="inputStyle input-color" id="video_req_time" name="time">
//                 <button class= "submitSendMsg" type="submit">Submit</button>
//             </form>
//         </div>
//     </div>
//    `
// }

// function showSendMessage(){
//     document.getElementById('sendMessageSection').style.display = 'block'
// }
// function closeSendMessage(){
//     document.getElementById('sendMessageSection').style.display = 'none'
// }
// function showVideoChat(){
//     document.getElementById('videoChatSection').style.display = 'block'
// }
// function closeVideoChat(){
//     document.getElementById('videoChatSection').style.display = 'none'
// }
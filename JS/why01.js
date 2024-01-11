const contents = [
    {
        heading: "Free 01 ID",
        url:"#",
    },
    {
        heading: "24 Hours Support Team",
        url:"#",
    },
    {
        heading: "Shariah Compliant (Interest Fee) Company",
        url:"#",
    },
    {
        heading: "Operated by Experienced Professional Team",
        url:"#",
    },
    {
        heading: "Real Time  Share Trading through Web/Api",
        url:"#",
    },
    {
        heading: "Online Money Deposit & amp; Withdrawal Facility",
        url:"#",
    },
    {
        heading: "Paper Less Company",
        url:"#",
    },
    {
        heading: "Account Manager Facility",
        url:"#",
    },
    {
        heading: "Robot Trade Facility",
        url:"#",
    },
    {
        heading: "Instant IPO Application through Web/App",
        url:"#",
    },
    {
        heading: "Trustworthy&amp; Reliable",
        url:"#",
    }
]

document.addEventListener('DOMContentLoaded', function () {
    populateWhy01();
});

function populateWhy01() {
    var why01Div = document.getElementById('why-01-content');

    contents.forEach(function (content) {
        var newContent = document.createElement('div');
        newContent.classList.add('item');

        newContent.innerHTML = `
        <a href=${content.url} class="heading">
            <h4>${content.heading}</h4>
        </a>
        `;

        why01Div.appendChild(newContent);

    });
}

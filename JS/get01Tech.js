const get01TechData = [
    {
        heading: "'01' offers multiexchange, multi-product, multi-broker supported Technological platform / Software for Capital & Financial market related business.",
        url:"#",
    },
    {
        heading: "Software that are ready to Sell to Brokerage Houses of CSE & DSE",
        url:"#",
    },
    {
        heading: "Web based Order Management System (OMS) for Clients",
        url:"#",
    },
    {
        heading: "Android App based Order Management System (OMS)for Clients",
        url:"#",
    },
    {
        heading: "Order Management System (OMS) for Authorized Representatives (Web & Directly connected Terminal)",
        url:"#",
    },
    {
        heading: "Back Office Software (Covers Operations, Accounts, HR & Admin etc.)",
        url:"#",
    },
]

document.addEventListener('DOMContentLoaded', function () {
    populatedGet01Tech();
});

function populatedGet01Tech() {
    var get01TechDiv = document.getElementById('get01TechnologyContent');

    get01TechData.forEach(function (content) {
        var get01TechContents = document.createElement('div');
        get01TechContents.classList.add('item');

        get01TechContents.innerHTML = `
        <a href=${content.url} class="heading">
            <h4>${content.heading}</h4>
        </a>
        `;

        get01TechDiv.appendChild(get01TechContents);

    });
}
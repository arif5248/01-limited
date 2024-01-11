const mediaNews=[
    {
        image:"../images/dse.jpg",
        date:"04/jan/2024 00:00:00 AM",
        source:"sharenews24.com",
        headline: "শেয়ারবাজারে তারল্য বাড়াতে বিএসইসি চেয়ারম্যান ও গভর্নরের বৈঠক"
    },
    {
        image:"../images/graph.png",
        date:"04/jan/2024 00:00:00 AM",
        source:"sharenews24.com",
        headline: "সূচকের উত্থানেও লেনদেন কমেছে এসএমই মার্কেটে"
    },
    {
        image:"../images/floorPrice.jpg",
        date:"04/jan/2024 00:00:00 AM",
        source:"sharenews24.com",
        headline: "ফ্লোর প্রাইস প্রত্যাহারের দাবি শীর্ষ ব্রোকারদের"
    },
    {
        image:"../images/dse-cse.jpg",
        date:"04/jan/2024 00:00:00 AM",
        source:"sharenews24.com",
        headline: "বাজারে ওষুধ নেই এশিয়াটিকের, তারপরও প্রফিট মার্জিনে এগিয়ে"
    },
    {
        image:"../images/dse.jpg",
        date:"04/jan/2024 00:00:00 AM",
        source:"sharenews24.com",
        headline: "শেয়ারবাজারে তারল্য বাড়াতে বিএসইসি চেয়ারম্যান ও গভর্নরের বৈঠক"
    },
    {
        image:"../images/graph.png",
        date:"04/jan/2024 00:00:00 AM",
        source:"sharenews24.com",
        headline: "সূচকের উত্থানেও লেনদেন কমেছে এসএমই মার্কেটে"
    },
    {
        image:"../images/floorPrice.jpg",
        date:"04/jan/2024 00:00:00 AM",
        source:"sharenews24.com",
        headline: "ফ্লোর প্রাইস প্রত্যাহারের দাবি শীর্ষ ব্রোকারদের"
    },
    {
        image:"../images/dse-cse.jpg",
        date:"04/jan/2024 00:00:00 AM",
        source:"sharenews24.com",
        headline: "বাজারে ওষুধ নেই এশিয়াটিকের, তারপরও প্রফিট মার্জিনে এগিয়ে"
    }
];
const miscNews=[
    {
        image:"../images/dse.jpg",
        date:"04/jan/2024 00:00:00 AM",
        source:"sharenews24.com",
        headline: "শেয়ারবাজারে তারল্য বাড়াতে বিএসইসি চেয়ারম্যান ও গভর্নরের বৈঠক"
    },
    {
        image:"../images/graph.png",
        date:"04/jan/2024 00:00:00 AM",
        source:"sharenews24.com",
        headline: "সূচকের উত্থানেও লেনদেন কমেছে এসএমই মার্কেটে"
    },
    {
        image:"../images/floorPrice.jpg",
        date:"04/jan/2024 00:00:00 AM",
        source:"sharenews24.com",
        headline: "ফ্লোর প্রাইস প্রত্যাহারের দাবি শীর্ষ ব্রোকারদের"
    },
    {
        image:"../images/dse-cse.jpg",
        date:"04/jan/2024 00:00:00 AM",
        source:"sharenews24.com",
        headline: "বাজারে ওষুধ নেই এশিয়াটিকের, তারপরও প্রফিট মার্জিনে এগিয়ে"
    },
    {
        image:"../images/dse.jpg",
        date:"04/jan/2024 00:00:00 AM",
        source:"sharenews24.com",
        headline: "শেয়ারবাজারে তারল্য বাড়াতে বিএসইসি চেয়ারম্যান ও গভর্নরের বৈঠক"
    },
    {
        image:"../images/graph.png",
        date:"04/jan/2024 00:00:00 AM",
        source:"sharenews24.com",
        headline: "সূচকের উত্থানেও লেনদেন কমেছে এসএমই মার্কেটে"
    },
    {
        image:"../images/floorPrice.jpg",
        date:"04/jan/2024 00:00:00 AM",
        source:"sharenews24.com",
        headline: "ফ্লোর প্রাইস প্রত্যাহারের দাবি শীর্ষ ব্রোকারদের"
    },
    {
        image:"../images/dse-cse.jpg",
        date:"04/jan/2024 00:00:00 AM",
        source:"sharenews24.com",
        headline: "বাজারে ওষুধ নেই এশিয়াটিকের, তারপরও প্রফিট মার্জিনে এগিয়ে"
    }
];


document.addEventListener('DOMContentLoaded', function () {
    fetchData("todaysNews_api",populatedExchangeNews)
    populateMediaNews();
    populatedMiscNews();
});

function populateMediaNews() {
    var miscNewsDiv = document.getElementById('miscNews');

    miscNews.forEach(function (newsItem) {
        var newsElement = document.createElement('div');
        newsElement.classList.add('news-item');

        newsElement.innerHTML = `
            <div class="newsImage">
                <img src="${newsItem.image}" alt="News Image">
            </div>
            <div class="newsContent">
                <div class="date-source">
                    <div class="date">${newsItem.date}</div>
                    <div class="source">${newsItem.source}</div>
                </div>
                <div class="headline"><h4>${newsItem.headline}</h4></div>
                <button class="btn btn-primary btn-details">Details</button>
            </div>
        `;

        miscNewsDiv.appendChild(newsElement);

    });
}
function populatedMiscNews() {
    var meadiaNewsDiv = document.getElementById('mediaNews');

    miscNews.forEach(function (newsItem) {
        var newsElement = document.createElement('div');
        newsElement.classList.add('news-item');

        newsElement.innerHTML = `
            <div class="newsImage">
                <img src="${newsItem.image}" alt="News Image">
            </div>
            <div class="newsContent">
                <div class="date-source">
                    <div class="date">${newsItem.date}</div>
                    <div class="source">${newsItem.source}</div>
                </div>
                <div class="headline"><h4>${newsItem.headline}</h4></div>
                <button class="btn btn-primary btn-details">Details</button>
            </div>
        `;

        meadiaNewsDiv.appendChild(newsElement);

    });
}
function populatedExchangeNews(data) {
    var exchangeNewsDiv = document.getElementById('exchangeNews');

    data.TodaysNews.forEach(function (newsItem) {
        var newsElement = document.createElement('div');
        newsElement.classList.add('exchange-news-item');

        newsElement.innerHTML = `
            <div class="exchangeHeading">
                <h4>${newsItem.Head}</h4>
            </div>
            <div class="exchangeContent">
                <div class="exchangeContent"><p>${newsItem.News}</p></div>
            </div>
        `;

        exchangeNewsDiv.appendChild(newsElement);

    });
}

function showNews(newsType) {
    document.getElementById('mediaNews').style.display = 'none';
    document.getElementById('exchangeNews').style.display = 'none';
    document.getElementById('miscNews').style.display = 'none';

    document.getElementById(newsType).style.display = 'block';
    updateButtonState(newsType);

}
function updateButtonState(activeButton) {
    var buttons = document.querySelectorAll('.newsBtnGroup .btn');
    buttons.forEach(function (button) {
        button.classList.remove('active');
    });

    var activeButtonElement = document.querySelector('.newsBtnGroup .btn[onclick*="' + activeButton + '"]');
    if (activeButtonElement) {
        activeButtonElement.classList.add('active');
    }
}
function onloadeddata() {
    document.getElementById('mediaNews').style.display = 'block';
    document.getElementById('exchangeNews').style.display = 'none';
    document.getElementById('miscNews').style.display = 'none';
}
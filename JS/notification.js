const notificationData=[
    {
        date:"04/jan/2024 00:00:00 AM",
        headline: "শেয়ারবাজারে তারল্য বাড়াতে বিএসইসি চেয়ারম্যান ও গভর্নরের বৈঠক"
    },
    {
       
        date:"04/jan/2024 00:00:00 AM",
        headline: "সূচকের উত্থানেও লেনদেন কমেছে এসএমই মার্কেটে"
    },
    {
        date:"04/jan/2024 00:00:00 AM",
        headline: "ফ্লোর প্রাইস প্রত্যাহারের দাবি শীর্ষ ব্রোকারদের"
    },
    {
        date:"04/jan/2024 00:00:00 AM",
        headline: "বাজারে ওষুধ নেই এশিয়াটিকের, তারপরও প্রফিট মার্জিনে এগিয়ে"
    },
    {
        date:"04/jan/2024 00:00:00 AM",
        headline: "শেয়ারবাজারে তারল্য বাড়াতে বিএসইসি চেয়ারম্যান ও গভর্নরের বৈঠক"
    },
    {
        date:"04/jan/2024 00:00:00 AM",
        headline: "সূচকের উত্থানেও লেনদেন কমেছে এসএমই মার্কেটে"
    },
    {
        date:"04/jan/2024 00:00:00 AM",
        headline: "ফ্লোর প্রাইস প্রত্যাহারের দাবি শীর্ষ ব্রোকারদের"
    },
    {
        date:"04/jan/2024 00:00:00 AM",
        headline: "বাজারে ওষুধ নেই এশিয়াটিকের, তারপরও প্রফিট মার্জিনে এগিয়ে"
    }
];

document.addEventListener('DOMContentLoaded', function () {
    populateNotification();
});

function populateNotification() {
    var notificationDiv = document.getElementById('notificationContent');

    notificationData.forEach(function (newsItem) {
        var notificationContents = document.createElement('div');
        notificationContents.classList.add('item');

        notificationContents.innerHTML = `
            <div class="notification">
                <div class="date">${newsItem.date}</div>
                <hr>
                <div class="headline"><h4>${newsItem.headline}</h4></div>
                <button class="btn btn-primary btn-details">View</button>
            </div>
        `;

        notificationDiv.appendChild(notificationContents);

    });
}

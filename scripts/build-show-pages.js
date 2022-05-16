// array of shows
let shows = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA"
    }
];

//selecting the table class
const table = document.querySelector('.table');

//creating the title of the table
const title = document.createElement("h1");
title.classList.add("table__title");

// created the string thats goes in title
title.innerText = "Shows";

// appending the element into the table section

// creating the date venue location titles for tablet and desktop mode
const menu = document.createElement('section');
menu.classList.add('table__menu');

const header = document.createElement('section');
header.classList.add('table__header');

const dateMenu = document.createElement('p')
dateMenu.classList.add('table__date-menu')

const venueMenu = document.createElement('p')
venueMenu.classList.add('table__venue-menu')

const locationMenu = document.createElement('p')
locationMenu.classList.add('table__location-menu')

dateMenu.innerText = "DATE";
venueMenu.innerText = "VENUE";
locationMenu.innerText = "LOCATION";

// appending the menu into the table
table.appendChild(header);
header.appendChild(title);
header.appendChild(menu);
menu.appendChild(dateMenu);
menu.appendChild(venueMenu);
menu.appendChild(locationMenu);

// start of function showList
function showList(show){

    // created the info section
    const info = document.createElement("section");
    info.classList.add("table__info");

    // created a the label and element to hold the date
    const dateContainer = document.createElement('section');
    dateContainer.classList.add('table__date');
    const dateLabel = document.createElement('p');
    dateLabel.classList.add('table__label');
    const dateInfo = document.createElement('p');
    dateInfo.classList.add("table__text");

    // created a the label and element to hold the venue
    const venueContainer = document.createElement('section');
    venueContainer.classList.add('table__venue');
    const venueLabel = document.createElement('p');
    venueLabel.classList.add('table__label');
    const venueInfo = document.createElement('p');
    venueInfo.classList.add("table__text");

    // created a the label and element to hold the location
    const locationContainer = document.createElement('section');
    locationContainer.classList.add('table__location');
    const locationLabel = document.createElement('p');
    locationLabel.classList.add("table__label");
    const locationInfo = document.createElement('p');
    locationInfo.classList.add("table__text");

    // created the submit section and buy tickets button
    const buttonContainer = document.createElement('section');
    buttonContainer.classList.add('table__submit');
    const buyTicket = document.createElement('button')
    buyTicket.classList.add("table__button");

    // date information innertext
    dateLabel.innerText = "DATE";
    dateInfo.innerText = show.date;

    // venue information innertext
    venueLabel.innerText = "VENUE";
    venueInfo.innerText = show.venue;

    // location information innertext
    locationLabel.innerText = "LOCATION";
    locationInfo.innerText = show.location;

    // buy tickets innertext
    buyTicket.innerText = "BUY TICKETS";

    //appending the label and date
    dateContainer.appendChild(dateLabel);
    dateContainer.appendChild(dateInfo);

    //appending the label and venue
    venueContainer.appendChild(venueLabel);
    venueContainer.appendChild(venueInfo);

    //appending the label and location
    locationContainer.appendChild(locationLabel);
    locationContainer.appendChild(locationInfo);

    //appending text in the button
    info.appendChild(dateContainer);
    info.appendChild(venueContainer);
    info.appendChild(locationContainer);
    info.appendChild(buttonContainer);
    buttonContainer.appendChild(buyTicket);

    // appending the info section into the table
    table.appendChild(info);
}

for(i = 0; i < shows.length; i++){
    showList(shows[i]);
}





# Theatre Travels
My second milestone project is a website for a small travel agency
that specializes in short trips to European capitals for theatre enthusiasts.

The deployed website can be found [here](https://sarani1612.github.io/milestone-project-2/).

## UX
What sets this travel agency apart from many others out there is its focus on giving people a cultural experience
they will remember for many years by including a trip to the theatre in all their travel packages.
In addition, they make sure to pick hotels and restaurants of a high standard in order to create an all-round feeling of glamour and luxury.

I felt it would be important for the customers to get this feeling already from their first visit to the website.
I therefore chose a simple design without any clutter or clashing colours, and I chose a colour scheme
and images that were meant to convey the sense of a tranquil, magical sunset,
given that that would typically be around the time of day where you would be heading to the theatre.

### User Stories
- as a first time user of the website, I can easily move through the sections without too much clicking.
- as a firs time user of the website, I can quickly get a sense of what the business is about and what they offer.
- as a potential customer, I can easily locate the business' social media profiles where I will be able to get more information and read reviews.
- as a returning customer, I can quickly get in touch with the business to discuss my next vacation without necessarily having to go through the other sections.

### Wireframes
See the wireframes I created for this website by clicking on the links below.

Each file contains 4 views: view 1 is the landing page, view 2 is the Destinations section with the city images
while view 3 is one of the modals that pop up when an image is clicked. View 4 is what I imagined the Contact section would look like.
- [Mobile](wireframes/mobile.pdf)
- [Tablet](wireframes/tablet.pdf)
- [Desktop](wireframes/desktop.pdf)

The wireframes were created with [Balsamiq](https://balsamiq.com/).

## Features
The website is a one-page site where the user can scroll down from the **landing-page** to the **Destinations** section
and further on to the **Contact** section.\
There is a navigation bar which stays fixed at the top when scrolling and a footer at the bottom of the Contact section.

### Landing-page
The landing-page consist of a background photo of an easily recognizagle, popular holiday destination, London.
Over the photo is the name of the business and a very brief text explaining what the business is about.\
The landing-page covers the full viewport and is kept minimalistic and simple to avoid information overload.

### Destinations section
This bulk of this section is 9 photos of the destinations that the business offers. Since these photos are really what is important here,
the background is a soft gradient with no figures, shapes and so on.\
At the top, there is a paragraph inviting users to click on the photos in order to see more information about the trip.\
There is also a friendly paragraph encouraging users to contact the business.\
Clicking on each of the photos opens up a modal with a map and a description of the destination.
The modal content has the same soft gradient background as the Destinations section itself to tie it all together.

### Contact Section
The contact section uses the same background photo as the landing-page, again to tie it all together.
Here, however, it has been toned down with an overlay to make the contact form stand out and easier to read.\
The form itself has input fields for name, email address, travel dates, duration and comments. It is followed by a submit button.\
Finally, at the bottom there is a footer with copyright info and links to social media (Facebook, Twitter, Instagram and Pinterest).

### Existing Features
- **Colour scheme:** As mentioned above in the introduction, a colour scheme reminiscent of a sunset was used for this website.
The main colour is a vivid orange, and it is used for the business name heading, header, footer and the text in the **contact** section.
A complementary dark purplish blue colour is used for text and icons in the header and footer, the submit button and for image borders in the **destinations** section.
A darker shade of the blue color is used as a hover over colour for the links, icons, button and image borders. An even darker, almost black, shade was used for longer texts in the **destinations** section and the modals since this is easier on the eyes.\
The orange colour was also used as a partially transparent background to the sub-heading on the landing-page, and the text itself differs from other text on the website in that it is white.
This was done to increase the contrast ratio between text and background in order to make it easier to read.
- **Photos:** All the photos for the holiday destinations show the cities during a sunset which ties in with the colour scheme and adds to the overall theme of the website.
- **Navigation bar:** The website has a navigation bar with the business name and links to all sections on the site. It is fixed to the top so that it always stays within view.
This is important given that it is a one-page website and a lot of scrolling would be required otherwise. This way the user can navigate easily between the sections at all times.
- **Footer:** The website has a footer with copyright info and with links to social media where the user would be able to find additional info and reviews.
The footer stays at the bottom of the page and is only visible when scrolling down.
- **Animations:** The website uses subtle hover animations on all clickable content (links in header and footer, images and submit button) for better interactivity and a more intuitive user experience.
- **Modals:** The website uses modals to display a map and info about the holiday destinations when a photo is clicked.
This enables smoother transitions between sections because the user will not have to first open a new page and wait for it to load.
Furthermore, when the modal is closed the user will be exactly where they were before and they avoid having to scroll past already seen content, which can sometimes be reason enough to lose interest and leave the website.
- **Maps:** Each modal contains a map of the area of interest in each city with three pins showing a restaurant, hotel and theatre, and the user can zoom in and out to better explore the area.
This, along with the info text, helps the user to better visualize themselves going on a trip.

### Features Left to Implement
The following features could be added later on for a more complete website and better user experience:
- **Price and practicalities info:** Obviously, users would be interested in knowing the price of a holiday package, and so a useful feature would be a subpage linked to in the header detailing the costs involved.
There could also be a chart showing prices for the same trip at different times of year for quick comparison.
Furthermore, users would be interested in knowing the practicalities such as how they will receive tickets to the theatre, visa requirements, transfers to and from the airport etc.\
- **Search and filter:** For an even better user experience, a search and filter option could be added so that it would be possible to search for a specific destination or to filter on price, type of show, hotel facilities, best time of year to go etc.
- **Enhanced maps:** To really get the users to immerse themselves in the planning of their trip, a nice feature would be the option to show other hotels, restaurants and so on on the maps.
- **Reviews:** A section with reviews from previous clients would help convince users that the business is above board and delivers on its promises.

## Technologies and Tools Used
The following technologies were used to make the website:
- **HTML** and **CSS** were used for the overall structure of the website
- **[Bootstrap](https://getbootstrap.com/)** was used to make a website that would be responsive on all screen specializes
- **JavaScript** was used for displaying modals and maps and for setting up the contact form with EmailJS
- **[JQuery](https://jquery.com/)** was used to facilitate DOM manipulation in connection with the modals
- **[PopperJS](https://popper.js.org/)** was used for Bootstrap
- **[Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial)** was used to render the maps
- **[EmailJS](https://www.emailjs.com/)** was used to set up the contact form to send emails
- **[Google Fonts](https://fonts.google.com/)** provided the two fonts, Montserrat Alternates and Lato, used on the website
- **[favicon.io](https://favicon.io/)** was used to generate a favicon for the website
- **[BeFunky](https://www.befunky.com/create/crop-photo/)** was used to resize images for faster loading
- **[Colormind](http://colormind.io/)** was used to generate a colour scheme

## Testing

### Testing User Stories

### Manually testing all content and features across the website

## Deployment

### Running the project locally

## Credits

### Code

### Content

### Media


*This website is purely for educational purposes*


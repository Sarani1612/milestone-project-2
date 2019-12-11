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
- as a user of the website, I can easily navigate between the sections of the website.
- as a first time user of the website, I can intuitively get to what I am looking for.
- as a first time user of the website, I can quickly get a sense of what the business is about and what they offer.
- as a potential customer, I can easily locate the business' social media profiles where I will be able to get more information and read reviews.
- as a returning customer, I can quickly get in touch with the business to discuss my next vacation without necessarily having to go through the other sections.
- as a potential customer who is trying to pick a destination, I can find information on the individual cities and compare my options.

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

### Wireframe differences
- As can be seen in my [wireframes](wireframes/), the original idea was for the contact section to be a text inviting the user to get in touch via email or phone, and there was no form.
However, as the website started to take shape, I realized it did not look very professional and most users have come to expect a contact form on most websites.
In addition, filling out a form always seems easier to do than writing an email from scratch or calling, and I therefore thought it would do a much better job of getting the users to reach out than a simple text.
- The [wireframes](wireframes/) do not include a navigation bar because I initially deemed it unnecessary on a website of such a small size. Given that there is only two sections (apart from the landing-page),
it did not seem like moving around the site would be an issue even without a navigation bar. However, there is absoloutely no harm in making navigating the site as easy as possible for the users, and I therefore decided to implement a navigation bar after all.

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
The HTML code was put through the [W3C Markup Validator](https://validator.w3.org/) to check for syntax errors.
Similarly, the CSS code was put through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).

All the following testing has been carried out on smaller screens running both iOS and Android and on larger screens running both macOS and Windows in multiple browsers.
In addition, Chrome's developer tools were used extensively to test on all screen sizes including medium size which I did not otherwise have access to.

### Testing User Stories
1. as a user of the website, I can easily navigate between the sections of the website.
    - this is ensured by the navigation bar which has clearly labelled links for all sections of the website.
    Since it is fixed to the top, it is always available for the user to click on and go to another section.
2. as a first time user of the website, I can intuitively get to what I am looking for.
    - this is ensured by two features: firstly, the navigation bar with easily identifiable links quickly locates all sections of the website.
    Secondly, the hover animations send a clear signal to the user that the element can be clicked which makes it easy to discover the modals and the social media accounts.
3. as a first time user of the website, I can quickly get a sense of what the business is about and what they offer.
    - as the business concept is fairly simple, the subheading on the landing-page is enough to give the user a strong idea of what is on offer,
    and the texts in the modals confirm this idea and add more information.
4. as a potential customer, I can easily locate the business' social media profiles where I will be able to get more information and read reviews.
    - the business' social media accounts are available through the icons located in the footer. They open in a new tab so the user still has easy access to the website.
5. as a returning customer, I can quickly get in touch with the business to discuss my next vacation without necessarily having to go through the other sections.
    - the contact section is linked to in the navigation bar, so it is possible to get to it directly from the landing-page if desired.
6. as a potential customer who is trying to pick a destination, I can find information on the individual cities and compare my options.
    - clicking on a city photo immediately gives access to more information about the hotels, restaurants and venues, and the information is structured the same way for all destinations which makes it easier to compare them.

### Manually testing all content and features across the website
In addition to checking that the website looked as intended on all screen sizes, I paid close attention to the following points:
- **Navigation bar**
    - I clicked the links in the navigation bar to make sure they worked and linked to the right section on the page.
    - I scrolled down to make sure it always stayed at the top.
    - I made sure that it collapsed into a button on small screens.
- **Images**
    - I verified that all images including background images loaded and were responsive on all screen sizes (no stretching).
- **Modals**
    - I clicked on all the modals to ensure they could be opened on all screens. I also made sure they could be closed again both when clicking outside of it and when clicking the X in the upper right corner.
- **Maps**
    I checked that the maps loaded on all screens and that the three markers were there. I had to adjust the zoom level a bit because on smaller screens some of the maps were too small to have all three markers within view.
- **Text**
    - All text throughout the website and in the modals looked as intended with the right size, colour and font.
- **Contact form**
    - The contact form looked as intended on all screens with correct placeholders, labels, styling etc.
    - Error messages showed up when the form was not filled in correctly. 
    - I verified that the form was set up correctly with EmailJS by filling out the form with a valid email address.
    When the form was submitted, I received it in my linked inbox, and I also received an auto-reply to the email I used in the form.
- **Submit button**
    - The submit button looked as intended on all screens.
    - When submitting a form successfully, the button changed text and styling as intended.
- **Footer**
    - The footer looked as intended, stayed at the bottom of the page and took up the correct amount of space.
- **Icons**
    - All the icons in the footer looked as intented and opened the correct links in new tabs.
- **Hover animations**
    - The hover animations on the navigation bar items, images and footer icons worked as intended.

#### Resolved Issues
- **Navigation bar button:** the button on small screens did not respond to CSS rule for colour in the same way that the links to the page sections did,
and it meant that the button was the same colour as the navigation bar itself and therefore not visible. I solved this issue by inserting an icon from [Font Awesome](https://fontawesome.com/) and styling that instead.
- **Landing-page background image:** early on there was a problem with the landing-page background photo not loading on an iPhone.
I found out that it was a common problem in iOS when background-attachment is set to fixed. I solved the issue with a media query for small screens that sets background-attachment to scroll. 
- **Contact section in landscape mode:** I discovered there was an issue with the contact section in landscape mode on larger smartphones and on tablets where it was not possible
to see the whole form or to scroll down to see it. The issue occurred due to the media query for medium sized screens and up, because it set the contact section + footer to equal the viewport height (80vh and 20vh respectively).
I solved the issue by making the media query only apply to heights of at least 825px which is enough to show all content in the section.
- **Map taller than modal content section*:** There was an issue with the map overflowing the modal content div when the viewport was not very tall.
I fixed this by giving the modal content div a min-height so that it is always tall enough to contain the map.

## Deployment
I set up a new repository in GitHub and clicked the Gitpod button which immediately set up a new environment for me. I did all the coding in the Gitpod environment and periodially pushed the commits from the command line.
To deploy the website I went to the settings tab for the depository on GitHub and set the master branch as the publishing source and a few moments later the website was available on GitHub Pages through the link provided at the top.

### Running the project locally
Follow these steps if you wish to run the project locally:
- go to the [repository page](https://github.com/Sarani1612/milestone-project-2) on GitHub
- click the "clone or download" button on the right-hand side
- copy the URL that shows up
- in Terminal, change the current working directory to the location where you want the cloned directory to be made
- type 'git clone' and paste the URL from step 2
- press enter
- the local clone will be created

These instructions and more info can be found on [this GitHub Help Page](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).

## Credits

### Code
- the code used for opening and closing modal boxes is based on the [W3Schools' How To Make a Modal Box tutorial](https://www.w3schools.com/howto/howto_css_modals.asp)

### Content
- texts for the modals about the destinations are written by me with inspiration from the hotels', restaurants' and venues' own websites.

### Media
- all photos are free stock photos from [Unsplash](https://unsplash.com/) and [Pexels](https://www.pexels.com/).
- the social media icons are from [Font Awesome](https://fontawesome.com/).


*This website has been designed for educational purposes only*


# ![LOTR](https://github.com/srihari-m-s/react-lotr/blob/master/src/assets/lord-of-the-rings-logo-image_64x64.ico?raw=true)        React LOTR Info - Overview

React LOTR Info is an application that fetches LOTR data from [the-one-api](https://the-one-api.dev/) and displays the information as a list. Application is built using Vite, React, Tanstack Query, Redux Toolkit, HTML and CSS. The project is inspired from the react tutorial by [@Smoljames](https://www.youtube.com/@Smoljames) on YouTube. Of course the application is not a line-to-line copy of the tutorial. 

The Application has dashboard of a sort that lets users select[Books, Movies or Characters] which information they want. After selection, the application fetches the data and displays it as a list. For Characters, because the number of characters is large a search bar has been implemented. Users can search for character only by NAME.
**Lazy Loading** is implemented on the characters list to improve application performance.

# Install

To install this application you need [Node JS 16.0 or above](https://nodejs.org/en/download/).
- Clone repo using git or download the repo files
-- ``git clone https://github.com/srihari-m-s/react-lotr.git``

- Use npm to install dependencies and start local dev server
-- ``npm install``
-- ``npm run dev``

# Getting Started

1. First thing is to signup to [the-one-api](https://the-one-api.dev/) to get the unique Access Token. This access token must be sent with each fetch request. Please read documentation for further info. 
2. Create a .env file in root directory and store the API KEY as **VITE_LOTR_API_KEY** here.
    ``VITE_LOTR_API_KEY = your access token``
3. Run ``npm run dev`` to start the vite local dev server.
4. The Application should be up and running. Check it out!

# Acknowledgements


The project is inspired from the react tutorial by [@Smoljames](https://www.youtube.com/@Smoljames) on YouTube. Of course the application is not a line-to-line copy of the tutorial. Check out the tutorial at [Learn React.js by Building a Lord Of The Rings Web App](https://youtu.be/hRlujM-sycg).

# License

MIT License.

# Application Demo Images
## 1. Home
![Home](https://github.com/srihari-m-s/react-lotr/blob/master/images/Home.jpg?raw=true)

## 2. Books
![Books](https://github.com/srihari-m-s/react-lotr/blob/master/images/Books.jpg?raw=true)

## 3. Movies
![Movies](https://github.com/srihari-m-s/react-lotr/blob/master/images/Movies.jpg?raw=true)

## 4. Characters
![Characters](https://github.com/srihari-m-s/react-lotr/blob/master/images/Characters.jpg?raw=true)

## 5. Characters - search
![Characters](https://github.com/srihari-m-s/react-lotr/blob/master/images/Char-search.jpg?raw=true)
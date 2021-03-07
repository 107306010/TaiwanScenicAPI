This project is built with [create-react-app](https://github.com/facebook/create-react-app) and styled with [mterial-ui](https://github.com/mui-org/material-ui)
# TaiwanScenicAPI
A simple website to view scenics in counties of Taiwan. Referenced API: [MOTC Transport API V2](https://ptx.transportdata.tw/MOTC?t=Tourism&v=2)<br/>
Demo website: https://taiwanscenic.herokuapp.com/
## Features
* lazy load <br/>
* Infinite scroll <br/>
* Client-side routing <br/>
* A small Taiwan map which you can choose the county at the home page <br/>
### Lazy load & Infinite scroll
Use **IntersectionObserver API** to achieve image lazy loading and infinite scroll.
### Client-side routing
Use **react-router-dom** to achieve client-side-routing to offer better user experience. <br/>
One thing has to mention is that this app does not build with Express or Next.js which provid backend server for the website. <br/>
So the secret information (my API key...) can be found by anyone. But I think a small project like this one may be ok with that issue...:sweat_smile:
### Taiwan map
Use **react-simple-maps** and **react-tooltip** to display Taiwan map, corresponding county name tags and links.
## Source Code File Structure
```
src
 ┣ api
 ┃ ┗ ptxapi.js
 ┣ assets
 ┃ ┣ COUNTY_MOI_1090820.json
 ┃ ┗ pexels-henry-&-co-3073037.jpg
 ┣ component
 ┃ ┣ HomePage
 ┃ ┃ ┣ BackGroundImage.js //This component is reusable, can add background easily by giving the image url as props to it.
 ┃ ┃ ┣ HomePage.js 
 ┃ ┃ ┣ HomeText.js
 ┃ ┃ ┗ TaiwanMap.js //The svg pic of Taiwan .
 ┃ ┣ Nav
 ┃ ┃ ┣ County.js //The value and name of counties in Taiwan.
 ┃ ┃ ┣ NavBar.js
 ┃ ┃ ┗ RegionSelect.js //Reusable select box.
 ┃ ┗ ScenicPage 
 ┃ ┃ ┣ ScenicItem.js 
 ┃ ┃ ┣ ScenicList.js 
 ┃ ┃ ┣ ScenicMedia.js //Present the image, if not exist use default image.
 ┃ ┃ ┣ ScenicPage.js //Reusable, generate different county page due to different props. Do the API request and infinite scroll.
 ┃ ┃ ┗ TitleComponent.js //Set the page title
 ┣ lazyload
 ┃ ┗ lazyload.js
 ┣ index.js
 ┗ Main.js //Specify the route here.
 ```
## To be improved
- [ ] UI
- [ ] responsive design
- [ ] environment variable problem

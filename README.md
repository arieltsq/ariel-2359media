TLDR: This was build for a React.js Front-end test

Link to view the actual site: [Ariel-2359 on Heroku](https://ariel-2359media.herokuapp.com)
##
```
npm install
npm run start
```

#### File Structure
```
+-- src
|   +-- Components.js
||   +-- Favourite.js
||  +-- Footer.js
||  +--  Images.js
||  +--  Main.js
||  +--  NavigationBar.js
||  +--  SearchImages.js
+-- App.js
+-- index.js    
+-- index.css
```


#### Thinking process
------

##### What haven't been done right
- Hover states for favorites.
- Allowing user to add favorites
- Having the fetch button that fetch more images (since I've not particularly fulfilled the primary functions)
- A dedicated page that user can go to view their tagged favorite images at any time

##### Wireframes
- Tried to structured my thoughts around these wireframes to help me structure my code out

![Web wireframe](https://ariel-2359media.herokuapp.com/web-wireframe.JPG "Web-wireframe")
Wireframe that I first drew for illustration purposes

![Hovering States](https://ariel-2359media.herokuapp.com/hovering-states.JPG "Hovering states")
Trying to map out my thoughts for the hovering states that were required

![Data flow](https://ariel-2359media.herokuapp.com/data-flow.JPG "Data flow")
Mapping out the data flow

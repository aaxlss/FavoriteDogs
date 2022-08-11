# Webapp - 'favourite dogs'

With this web app you will be able to visualize 6 dogs in a carousel list where you can select any and added it to your favourite list. 
Here there are 2 endpoints *Home* where you can see the list of 6 random dogs and *Favourites* you will be able to see the list of your favourite dogs that you have added previously, and you will be able to delete them from the list if you want.

In order to get this project in your machine, you should clone the repository with the next command:

    git clone https://github.com/aaxlss/FavoriteDogs.git

After you get the repository, you could run the next command to start the local server.

    npm start
  
  The server, by default, will run in the next URL

      http://localhost:3000/

The project was planned to use third part components like the Carousel and the notifications as well as I created my how components.

The structure of the application has been divided by Home screen, Favourites screen, a Layout and a Header where the menu is.

# Improvements

**Home screen:** I would like to improve, adding a loading to show while the call to get the 6 dogs is processing. This will make the UI look better while the user is waiting for the information.
**Favourite screen:** I would like to add a new button that help the user get rid of all the dogs with one single click. This will improve the time if the user wants to delete all of them. Also, include a warning message before to delete any dog, this will avoid deleting accidentally any information.

**Carousel component**: set up this third component to show the information in a better way and adjust the images depending on the size of images.

**Button component:** I would like to make the buttons with a better style to show the text, icon and add some effects when the user hover the button or click on it.
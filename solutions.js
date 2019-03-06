// Exercise 1): Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.
document.getElementsByTagName('nav')[0];
// Exercise 2): Find the sidebar on the left by using its id and set it equal to the variable sideBar.
let sideBar = document.getElementById('sidebar-left');
// Exercise 3): Find the 'Pages' and 'Groups' sections of the sidebar by using their class.
document.getElementsByClassName('groups')[0];
document.getElementsByClassName('pages')[0];
// Exercise 4): Set the text of the 'Favorites' `h5` to say "Least Favs".
sideBar.getElementsByClassName('favorites')[0].getElementsByTagName('h5')[0].innerHTML = ("Least Favs")
// Exercise 5): Find the first of the ads in the sidebar and hide it.
rightSideBar = document.getElementById('sidebar-right');
rightSideBar.getElementsByClassName("ad-slot")[0].style.visibility = ('hidden');
// Exercise 6): Set the visibility on the ad that you hid in the previous exercise to make it visible again.
rightSideBar.getElementsByClassName("ad-slot")[0].style.visibility = ('visible');
// Exercise 7): Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.
image[1].setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSto4yPWubMque3dBdOrY4PpRe8ccKeQqifgPkNV3bKlTWEQqRh")
// Exercise 8): Find Sam's post and change its text to something incredible.
document.getElementsByClassName("media-body")[4].getElementsByTagName("p")[0].innerText = ("LALALALA!!!")
// Exercise 9): Find the first post and add the `.post-liked` class to it, and watch it turn blue.
let firstPost = document.getElementsByClassName("media-body")[1]
let status = firstPost.getElementsByTagName("p")[0]
comment.className = comment.className + ' post-liked'
// Exercise 10: Find the second post and add the `.post-shared` class to the `li` containing the text Shared to watch it turn red.
secondPost = document.getElementsByClassName("inline-list")[1]
let share1 = secondPost.getElementsByTagName("li")[2]
share1.className = share1.className + ' post-shared'

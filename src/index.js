console.log("hello world");
/**Use the fetch API to call the appropriate routes to display the data (/api/users and /api/restaurants)
Display users in the users-list unordered list and restaurants can be displayed in the restaurants-list unordered list.
Create HTML with a template literal by mapping over the users and restaurants. */

const getUsers = async () => {
  const response = await fetch("http://localhost:1337/api/users");
  const json = await response.json();
  return json;
};

const usersArray = getUsers();

const getRestaurants = async () => {
  const response = await fetch("http://localhost:1337/api/restaurants");
  const json = await response.json();
  console.log(json);
  return json.restaurants;
};

getRestaurants();

const userElement = document.getElementById("users-list");

const renderUsers = (users) => {
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const element = document.createElement("li");
    element.innerText = "Name: " + user.name;
    userElement.appendChild(element);
  }
};

//i think we need to pass our array into renderUsers()
renderUsers(usersArray);
// that makes sense...
//its still not working but.....maybe lol
// it's not showing on our webpage right? --nope 

// i have to go but nice working with you!! he said solution is at the encodeURI.
//  ill share repo with you tomorrow so you can fork it
night!
// same here! I'm gonna pore over tge solution
// night night!
// buttonElement.addEventListener("click", async () => {
//     const puppies = await getPuppies();
//     renderPuppies(puppies);
// })

// console.log("hello")

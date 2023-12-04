const button = document.querySelector(".button");
let jokeSetup = document.querySelector("#jokeSetup");
let jokeContent = document.querySelector("#jokeContent");

document.addEventListener("DOMContentLoaded", getJoke);
button.addEventListener("click", getJoke);

async function getJoke() {
  const jokeData = await fetch("https://v2.jokeapi.dev/joke/Christmas", {
    headers: {
      Accept: "application/json",
    },
  });
  const jokeObj = await jokeData.json();
  jokeSetup.textContent = jokeObj.setup;
  jokeContent.textContent = jokeObj.delivery + " 😂";
}

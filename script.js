const jokes = document.querySelector("#joke");
const btn = document.querySelector('.btn')

const generateJokes = async () => {
  try {
    const setHeader = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await fetch("https://icanhazdadjoke.com", setHeader);
    const data = await res.json();
    jokes.innerHTML = data.joke;
  } catch (err) {
    console.log(`the error is ${err}`);
  }
};


generateJokes();
btn.addEventListener("click", generateJokes);



// Utilizando .then().catch()
let data = null;
function fetchData() {
  fetch("https://api.github.com/users/danvitoriano")
    .then((response) => response.json())
    .then((responseData) => {
      data = responseData;
    })
    .catch((error) => {
      console.error("Ocorreu un erro", error);
    });
}

// Utilizando async/await
async function fetchData() {
  try {
    const response = await fetch("https://api.github.com/users/danvitoriano");
    const data = response.json();
    return data;
  } catch (error) {
    console.error("Ocorreu un erro", error);
  }
}

// async com com try/catch
async function createUser() {
  try {
    const response = await fetch("https://api.github.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        name: "Gustavo Sales",
        email: "gustavo@gsales.io",
        password: "secret",
      },
    });
    const data = response.json();
    return data;
  } catch (error) {
    console.error("Ocorreu un erro", error);
  }
}

// setTimeout
setTimeout(() => {
  alert("Olá mundo");
}, 5000);

// setInterval
let timesToRun = 5;
let runningCounter = 0;
const interval = setInterval(() => {
  runningCounter++;
  console.log(new Date().toLocaleTimeString());

  if (runningCounter >= timesToRun) {
    console.log("Intervalo parado");
    clearInterval(interval);
  }
}, 1000);
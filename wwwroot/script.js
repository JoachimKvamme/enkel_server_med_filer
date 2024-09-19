async function getFiles() {
  let response = await fetch("https://ghibliapi.vercel.app/films");
  console.log(response);
  let films = await response.json();
  console.log(films);
  return films;
}

async function showFilms() {
  let films = await getFiles();
  console.log(films);
  let liste = document.createElement("ul");
  document.getElementById("main").appendChild(liste);

  films.forEach((element) => {
    console.log(element.description);
    let listItem = document.createElement("li");
    listItem.textContent = element.title;
    liste.appendChild(listItem);
  });
}

showFilms();

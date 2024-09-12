fetch("https://reactnative.dev/movies.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.movies);
    const moviesData = data.movies;
    let output = document.getElementById("moviedata");

    moviesData.forEach((movie) => {
      let heading = document.createElement("h1");
      heading.textContent = movie.id + "-" + movie.title;
      output.append(heading);
    });
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });

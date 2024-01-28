const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const movie = [
  {
    Sn: 1,
    MovieName: "Soldier Ant",
    Genre: "Action",
    Rented: false,
    ReturnDate: null,
  },
  {
    Sn: 2,
    MovieName: "Aki and Paw Paw",
    Genre: "Comedy",
    Rented: false,
    ReturnDate: null,
  },
  {
    Sn: 3,
    MovieName: "A Trybe called Judea",
    Genre: "Drama",
    Rented: false,
    ReturnDate: null,
  },
  {
    Sn: 4,
    MovieName: "She must be obeyed",
    Genre: "Action",
    Rented: false,
    ReturnDate: null,
  },
  {
    Sn: 5,
    MovieName: "SHouse of dragon",
    Genre: "Action",
    Rented: false,
    ReturnDate: null,
  },
];

//class
class RentingApp {
  constructor(films) {
    this.AllMovies = films;

    this.UnRentedMovies = films.filter((film) => film.Rented == false);

    this.RentedMovie = films.filter((film) => {
      return film.Rented == true;
    });
  }

  RentMovie(sn) {
    movie[sn - 1].Rented = true; //if sn = 1, movie[0]; sn =2, movie[1], sn=3 movie[2]
    this.UnRentedMovies = movie.filter((film) => film.Rented == false);
    this.RentedMovie = movie.filter((film) => film.Rented == true);
    console.log(" You have rented the following Movie(s) \n");
    console.log(this.RentedMovie);
    LoadOptions();
    ProcessRenting(movie);
  }

  ReturnMovie(sn) {
    const d = new Date();
    movie[sn - 1].Rented = false; //if sn = 1, movie[0]; sn =2, movie[1], sn=3 movie[2]
    movie[sn - 1].ReturnDate = d;
    this.UnRentedMovies = movie.filter((film) => film.Rented == false);
    this.RentedMovie = movie.filter((film) => film.Rented == true);
    console.log(
      "the following movie(s) are now available for renting \n",
      this.UnRentedMovies
    );
  }
}
function LoadOptions() {
  console.log("\n1. View Movie list \n2. Rent Movie \n3. Return Movie \n");
}

function ProcessRenting(films) {
  readline.question("Type your selection below \n", (ans) => {
    if (ans == 1) {
      console.log(films.AllMovies);
      ProcessRenting(films);
    } else if (ans == 2) {
      console.log(films.AllMovies);
      readline.question(
        "Enter the SN of the movie you want to rent \n",
        (move) => {
          films.RentMovie(move);
        }
      );
      
    } else if (ans == 3) {
      films.AllMovies;
      readline.question("enter the SN of the movie to return", (move) => {
        films.ReturnMovie(move);
      });
      LoadOptions();
      ProcessRenting(films);
    } else {
      console.log("You select invalid option please try again\n");
      LoadOptions();
      ProcessRenting(films);
    }
  });
}
console.log(`Welcome To Blessing Movie Rental Store \n`);
LoadOptions();
const films = new RentingApp(movie);
ProcessRenting(films);



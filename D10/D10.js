/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("------------------------------------- Exercise A ------------------------------------");

const sum = 10 + 20;
console.log("The value of 'sum' is:", sum);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("------------------------------------- Exercise B ------------------------------------");

const random = Math.floor(Math.random() * 20 + 1);
console.log("The value of 'random' is:", random);

// THIS IS JUST A WAY TO CHECK IF THE EXERCISE IS CORRECT:
/*
for (let i = 0; i < 100; i++) {
  const random = Math.floor(Math.random() * 20);
  console.log("The value of 'random' is:", random);
}
*/

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("------------------------------------- Exercise C ------------------------------------");

let me = {
  name: "Alessandro",
  surname: "Ontani",
  age: 23,
};
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("------------------------------------- Exercise D ------------------------------------");

delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("------------------------------------- Exercise E ------------------------------------");

me.skills = ["python", "javascript"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("------------------------------------- Exercise F ------------------------------------");

me.skills.push("asMarkUp: CSS & HTML");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("------------------------------------- Exercise G ------------------------------------");

me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("------------------------------------- Exercise 1 ------------------------------------");

const dice = function () {
  return Math.floor(Math.random() * 6 + 1);
};

console.log("your random number is:", dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("------------------------------------- Exercise 2 ------------------------------------");

const whoIsBigger = function (n1, n2) {
  if (n1 > n2) {
    console.log(n1, "it's bigger then", n2);
    return n1;
  } else if (n1 === n2) {
    console.log("these numbers are equals");
    return n1;
  } else {
    console.log(n2, "it's bigger then", n1);
    return n2;
  }
};

whoIsBigger(8, 3);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.
console.log("------------------------------------- Exercise  ------------------------------------")
  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("------------------------------------- Exercise 3 ------------------------------------");

const myString = "This is a sentence used as parameter for the splitMe function";

const splitMe = function (element) {
  return element.split(" ");
};

const myStringArray = splitMe(myString);
console.log(myStringArray);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("------------------------------------- Exercise 4 ------------------------------------");
const deleteOne = function (str, bool) {
  let stringArray = str.split("");
  if (bool === true) {
    stringArray.shift();
    stringArray.join("");
    return stringArray;
  } else if (bool === false) {
    stringArray.pop();
    stringArray.join("");
    return stringArray;
  }
};

const stringResult = deleteOne("goodLookingString", false);
console.log(stringResult);
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("------------------------------------- Exercise 5 ------------------------------------");

const onlyLetters = function (string) {
  let = withNoDigits = string.replace(/[0-9]/g, "");
  return withNoDigits;
};

const onlyLetterString = onlyLetters("We were looking for your 2 dogs");
console.log(onlyLetterString);

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("------------------------------------- Exercise 6 ------------------------------------");

const isThisAnEmail = function (input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log("is this a valid e-mail address?", re.test(String(input).toLowerCase()));
};

isThisAnEmail("ale-email@email.com");
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("------------------------------------- Exercise 7 ------------------------------------");

// after have cleared my mind on the Date() constructor and in general with this primitive data type, i'm now able to solve this exercise.

const today = new Date();
const daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

const whatDayIsIt = function (day) {
  const weekday = today.getDay();
  switch (weekday) {
    case 1:
      console.log("today is -->", daysOfTheWeek[0]);
      break;
    case 2:
      console.log("today is -->", daysOfTheWeek[1]);
      break;
    case 3:
      console.log("today is -->", daysOfTheWeek[2]);
      break;
    case 4:
      console.log("today is -->", daysOfTheWeek[3]);
      break;
    case 5:
      console.log("today is -->", daysOfTheWeek[4]);
      break;
    case 6:
      console.log("today is -->", daysOfTheWeek[5]);
      break;
    default:
      console.log("today is --> sunday");
      break;
  }
};

whatDayIsIt(today);

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("------------------------------------- Exercise 8 ------------------------------------");

const rollTheDices = (multiplier) => {
  let theSum = 0;
  const theAddends = [];
  for (let i = 0; i < multiplier; i++) {
    let theValue = dice();
    theAddends.push(theValue);
    theSum += theValue;
  }
  const rollTheDicesObject = {};
  rollTheDicesObject.sum = theSum;
  rollTheDicesObject.values = theAddends;
  return rollTheDicesObject;
};

const resultObject = rollTheDices(10);
console.log(resultObject);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("------------------------------------- Exercise 9 ------------------------------------");
// Spent some other times learning how date work on Js and i got able to write this.
const theDate = new Date(2022, 00, 11);

const howManyDays = (date) => {
  const isToday = new Date();

  let timeDifference = isToday.valueOf() - date.valueOf();
  return (timeDifference /= 1000 * 60 * 60 * 24);
};

const theTimePassed = howManyDays(theDate);
console.log("From the date you picked are passed:", Math.round(theTimePassed), "days");

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("------------------------------------- Exercise 10 ------------------------------------");

const aDate = new Date(1999, 00, 11);

const isTodayMyBirthday = (date) => {
  const myBirthday = new Date(1999, 00, 11).valueOf();
  const suspiciusDate = new Date(date).valueOf();
  if (myBirthday - suspiciusDate === 0) {
    return true;
  } else {
    console.log(myBirthday);
    console.log(suspiciusDate);
    return false;
  }
};

const isTheSameDate = isTodayMyBirthday(aDate);
console.log("is it the same date of my birthday? -->", isTheSameDate);

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("------------------------------------- Exercise 11 ------------------------------------");

const itsMe = {
  firstname: "Alessandro",
  lastname: "Ontani",
  age: 23,
  interests: ["coding", "photography", "gaming", "football"],
};

const deleteProp = (object, toDelete) => {
  if (object[toDelete] !== undefined) {
    delete object[toDelete];
    return object;
  } else {
    console.log("there is no property named as -->", toDelete + ".");
    console.log("please, check the value you inserted and fix it to make the function work properly");
  }
};

const updatedObject = deleteProp(itsMe, "firstname");
console.log(updatedObject);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("------------------------------------- Exercise 12 ------------------------------------");

const newestMovie = (array) => {
  const newestMovie = array.filter((element) => element.Year == Math.max(...movies.map((item) => item.Year)));
  console.log(newestMovie);
};

newestMovie(movies);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("------------------------------------- Exercise 13 ------------------------------------");

const countMovies = (array) => {
  let totalMovies = 0;
  array.forEach(() => {
    return (totalMovies = totalMovies + 1);
  });
  console.log("The amount of movies inside the movies array is:", totalMovies);
};

countMovies(movies);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("------------------------------------- Exercise 14 ------------------------------------");

const moviesYear = (array) => {
  const moviesYear = [];
  for (let i = 0; i < array.length; i++) {
    moviesYear.push(movies[i].Year);
  }
  return moviesYear;
};

const moviesYears = moviesYear(movies);
console.log(moviesYears);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("------------------------------------- Exercise 15 ------------------------------------");
let lastMilMovies = [];

const onlyInLastMillennium = (arrayFor, arrayTo) => {
  arrayFor.forEach((element) => {
    if (parseInt(element.Year) > 2000) {
      arrayTo.push(element);
    }
  });
  return arrayTo;
};

lastMilMovies = onlyInLastMillennium(movies, lastMilMovies);
console.log(lastMilMovies);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("------------------------------------- Exercise 16 ------------------------------------");

const sumAllTheYears = (array) => {
  let yearsSum = 0;
  array.forEach((element) => {
    yearsSum += Number(element);
  });
  return yearsSum;
};

const sumOfAllYears = sumAllTheYears(moviesYears);
console.log("The sum of all years is:", sumOfAllYears);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("------------------------------------- Exercise 17 ------------------------------------");

const searchByTitle = (title) => {
  let filteredMovies = movies.filter((element) => {
    return element.Title == title;
  });
  return filteredMovies;
};

const searchedByTitle = searchByTitle("Avengers: Endgame");
console.log(searchedByTitle);

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("------------------------------------- Exercise 18 ------------------------------------");

const searchAndDivide = (argument) => {
  const moviesSearched = {};
  let match = [];
  let unmatch = [];
  let regex = new RegExp(argument);
  movies.forEach((element) => {
    if (element.Title.match(regex) === null) {
      unmatch.push(element);
    } else {
      match.push(element);
    }
  });
  moviesSearched.match = match;
  moviesSearched.unmatch = unmatch;
  return moviesSearched;
};

const objectFound = searchAndDivide("Avengers: Endgame");
console.log(objectFound);

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("------------------------------------- Exercise 19 ------------------------------------");

const removeIndex = (value) => {
  if (value > 13) {
    console.log("please, insert a correct value, it should be a number in between of 1 and 13");
  } else {
    return movies.splice(value, 1);
  }
};

const objectPopped = removeIndex(5);
console.log("this is the object that just got deleted by the function:", objectPopped);
//console.log(movies)  --> this is just an alternative way to check if the object got deleted, it's commented to not get a huge array inside the console.

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("------------------------------------- Exercise 20 ------------------------------------");
const idSelector = () => {
  return document.getElementById("container");
};
console.log("Wont be displayed cause there's no actual interaction with a DOM");

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("------------------------------------- Exercise 21 ------------------------------------");
const tdSelector = () => {
  return document.getElementsByTagName("td");
  //return document.querySelectorAll("td")
};
console.log("Wont be displayed cause there's no actual interaction with a DOM");

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("------------------------------------- Exercise 22 ------------------------------------");

const tdPrinter = () => {
  const tdCollection = document.getElementsByTagName("td");
  const tdArray = Array.from(tdCollection);
  tdArray.forEach((element) => {
    console.log(element.value);
  });
};
console.log("Wont be displayed cause there's no actual interaction with a DOM");

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log("------------------------------------- Exercise 23 ------------------------------------");

const redPainter = () => {
  const myAnchorCollection = document.getElementsByTagName("a");
  const myAnchorArray = Array.from(myAnchorCollection);
  myAnchorArray.forEach((element) => {
    element.style.backgroundColor = red;
  });
};
console.log("Wont be displayed cause there's no actual interaction with a DOM");

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log("------------------------------------- Exercise 24 ------------------------------------");

const listItem = () => {
  const myNewListItem = document.createElement("li");
  document.getElementById("myList").appendChild(myNewListItem);
};
console.log("Wont be displayed cause there's no actual interaction with a DOM");

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log("------------------------------------- Exercise 25 ------------------------------------");

const myEmptyList = () => {
  let myEmptyList = document.getElementById("myList");
  while (myEmptyList.firstChild) {
    myEmptyList.removeChild(myEmptyList.firstChild);
  }
};
console.log("Wont be displayed cause there's no actual interaction with a DOM");

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log("------------------------------------- Exercise 26 ------------------------------------");

const addAClass = () => {
  const myTrCollection = document.getElementsByTagName("tr");
  const myTrArray = Array.from(myTrCollection);
  myTrArray.forEach((element) => {
    element.classList.add(".test");
  });
};
console.log("Wont be displayed cause there's no actual interaction with a DOM");

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log("------------------------------------- Exercise 27 ------------------------------------");

const halftree = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = new String();
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }
};

halftree(10);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log("------------------------------------- Exercise 28 ------------------------------------");

const fullTree = (height) => {
  for (let i = 1; i <= height; i++) {
    let str = new String();
    for (let space = 1; space <= height - i; space++) {
      str += " ";
    }
    for (let star = 1; star <= i * 2 - 1; star++) {
      str += "*";
    }
    console.log(str);
  }
};

fullTree(10);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log("------------------------------------- Exercise 29 ------------------------------------");

const isItPrime = (n) => {
  if (n <= 1) return false;

  for (let i = 2; i < n; i++) if (n % i == 0) return false;
  return true;
};

console.log("is it prime?", isItPrime(11));

/* Questo array viene usato per gli esercizi. Non modificarlo. */

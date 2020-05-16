'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 1; i<=2; i++) {
    let a = prompt("Один из просмотренных фильмов?", "");
    let b = prompt("На сколько оцените его?", "");
    while ((a == "") || (b == "") || (a == null) || (b == null) || (a.length>50)) {
        a = prompt("Один из просмотренных фильмов?", "");
        b = prompt("На сколько оцените его?", "");
    }
    personalMovieDB.movies[a] = b;    
}

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}   
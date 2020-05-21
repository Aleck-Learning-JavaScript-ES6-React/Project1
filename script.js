'use strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже просмотрели?", "");

        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже просмотрели?", "");
        }
    },
    rememberMyFilms: function () {
        for (let i = 1; i <= 2; i++) {
            let a = prompt("Один из просмотренных фильмов?", "");
            let b = prompt("На сколько оцените его?", "");
            while ((a == "") || (b == "") || (a == null) || (b == null) || (a.length > 50)) {
                a = prompt("Один из просмотренных фильмов?", "");
                b = prompt("На сколько оцените его?", "");
            }
            personalMovieDB.movies[a] = b;
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    showMyDB: function () {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            let a = prompt(`Ваш любимый жанр под номером ${i+1}`);
            if ((a == "") || (a == null)) {
                i--;
            } else {
                personalMovieDB.genres[i] = a;
            }            
        }
        personalMovieDB.genres.forEach(function(item,i) {
            console.log(`Любимый жанр №${i+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        personalMovieDB.privat = !personalMovieDB.privat;
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
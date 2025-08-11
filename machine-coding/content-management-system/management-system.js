const Movie = require('./movie');
const Users = require('./users');

class ManagementSystem {
    constructor() {
        this.users = new Map();
        this.cacheL1 = new Map();
        this.cacheL2 = new Map();
        this.movieTitle = new Map();
        this.movieYear = new Map();
        this.movieGenre = new Map();
    }
    addUser(id, name, genre) {
        this.users.set(id, new Users(id, name, genre));
        return `User added`;
    }
    addMovie(id, title, genre, year, rating) {
        if (!this.movieYear.has(year)) {
            this.movieYear.set(year, new Set());
        }
        this.movieYear.set(
            year,
            this.movieYear.get(year).add(new Movie(id, title, genre, year, rating)),
        );
        if (!this.movieYear.has(title)) {
            this.movieYear.set(title, new Set());
        }
        this.movieYear.set(
            title,
            this.movieYear.get(title).add(new Movie(id, title, genre, year, rating)),
        );
        if (!this.movieYear.has(genre)) {
            this.movieYear.set(genre, new Set());
        }
        this.movieYear.set(
            genre,
            this.movieYear.get(genre).add(new Movie(id, title, genre, year, rating)),
        );
        return `Movie added`;
    }
    search(userId, searchType, value) {
        //check L1
        //l2
        //base
        console.log('object');
        return {};
        /**
         *
         */
    }
    searchMulti(userId, searchType, value) {
        //check L1
        //l2
        //base
        console.log('object');
        return {};
        /**
         *
         */
    }
}

module.exports = ManagementSystem;

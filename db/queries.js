const pool = require("./pool");



async function allMovies() {
    const {rows} = await pool.query(`
        SELECT * FROM movies
        `)
    return rows;
}

async function getALLMoviesWithDirectors(){
    const {rows} = await pool.query(`
 SELECT 
    *
FROM directors
JOIN movie_director ON directors.directorid = movie_director.directorid
JOIN movies ON movie_director.movieid = movies.movieid`);
   
    return rows;
}
async function getAllMoviesWithGeneres(){
     const {rows} = await pool.query(`
        SELECT 
    *
FROM genres
JOIN movie_genre ON genres.genreid = movie_genre.genreid
JOIN movies ON movie_genre.movieid = movies.movieid
        `)
    return rows;
}
async function getSpecficMovies(id){
    const {rows} = await pool.query(`SELECT 
    *
FROM movies

WHERE movies.movieid = ${id}`)
    return rows;
}

async function getAllGenersOfSingleMovie(id){
    const {rows} = await pool.query(`
        SELECT 
   *
   FROM genres
   JOIN movie_genre ON movie_genre.genreid = genres.genreid 
    JOIN movies ON movie_genre.movieid = movies.movieid
	WHERE movies.movieid = ${id}
        `)
    return rows;
}

async function getAllDirectorsOfSingleMovie(id){
    const {rows} = await pool.query(`
         SELECT 
   *
   FROM directors
   JOIN movie_director ON movie_director.directorid = directors.directorid 
    JOIN movies ON movie_director.movieid = movies.movieid
	WHERE movies.movieid = ${id}
        `)
    return rows;
}
async function getAllDirectorsIdofSingleMovie(id){
    const {rows} = await pool.query(`
         SELECT 
 directors.directorid
   FROM directors
   JOIN movie_director ON movie_director.directorid = directors.directorid 
    JOIN movies ON movie_director.movieid = movies.movieid
	WHERE movies.movieid = ${id}
        `)
    return rows;
}

async function getAllGenersIdOfSingleMovie(movieid){
     const {rows} = await pool.query(`
        SELECT 
   genres.genreid
   FROM genres
   JOIN movie_genre ON movie_genre.genreid = genres.genreid 
    JOIN movies ON movie_genre.movieid = movies.movieid
	WHERE movies.movieid = ${movieid}
        `)
    return rows;
}
async function insertNewMovie(
    moviename, 
    typeofmovie,
    description, 
    priority,
    imageurl, 
    director, 
    geners,      // ← this is likely an array
    rating, 
    watcheddate
) {
     const movieResult = await pool.query(`
        INSERT INTO movies 
            (moviename, description, typeofmovie, priority, imageurl, rating, watcheddate) 
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING movieid
    `, [moviename, description, typeofmovie, priority, imageurl, rating, watcheddate]);

    const movieId = movieResult.rows[0].movieid;

    // === Director ===
    if (director) {
        const directorArray = Array.isArray(director) ? director : [director];
        for (const directorId of directorArray){
            if(directorId){
                 await pool.query(`
            INSERT INTO movie_director (directorid, movieid)
            VALUES ($1, $2)
        `, [directorId, movieId]);
            }
        }
       
    }

    // === Genres (Array Handling) ===
    if (geners) {
   
        // Convert to array if it's not already (in case single value comes as string)
        const genreArray = Array.isArray(geners) ? geners : [geners];

        for (const genreId of genreArray) {
            if (genreId) {  // skip empty values
                await pool.query(`
                    INSERT INTO movie_genre (genreid, movieid)
                    VALUES ($1, $2)
                `, [genreId, movieId]);
            }
        }
    }

 
}

async function editExistingMovie(
    moviename, typeofmovie, description, priority,
    imageurl, director, geners, rating, watcheddate, movieid
) {

    // 1. Update the main movie record
    const movieResult = await pool.query(`
        UPDATE movies 
        SET 
            moviename = $1,
            typeofmovie = $2,
            description = $3,
            priority = $4,
            imageurl = $5,
            rating = $6,
            watcheddate = $7
        WHERE movieid = $8
        RETURNING movieid;
    `, [moviename, typeofmovie, description, priority, imageurl, rating, watcheddate, movieid]);

    console.log(movieResult.rows[0])
    const updatedMovieId = movieResult.rows[0].movieid;

    // 2. Handle Directors - Delete old + Insert new
    if (director) {
        const directorArray = Array.isArray(director) ? director : [director];

        // Remove all existing directors for this movie
        await pool.query(`DELETE FROM movie_director WHERE movieid = $1`, [updatedMovieId]);

        // Insert the new selected directors
        for (const directorId of directorArray) {
            if (directorId) {
                await pool.query(`
                    INSERT INTO movie_director (directorid, movieid)
                    VALUES ($1, $2)
                `, [directorId, updatedMovieId]);
            }
        }
    }

    // 3. Handle Genres - Delete old + Insert new
    if (geners) {
        const genreArray = Array.isArray(geners) ? geners : [geners];

        // Remove all existing genres for this movie
        await pool.query(`DELETE FROM movie_genre WHERE movieid = $1`, [updatedMovieId]);

        // Insert the new selected genres
        for (const genreId of genreArray) {
            if (genreId) {
                await pool.query(`
                    INSERT INTO movie_genre (genreid, movieid)
                    VALUES ($1, $2)
                `, [genreId, updatedMovieId]);
            }
        }
    }

    return movieResult.rows[0];
}

async function deleteSingleMovie(movieid) {
  
    
    try {
        await pool.query(`DELETE FROM movie_genre WHERE movieid = $1`, [movieid]);
        await pool.query(`DELETE FROM movie_director WHERE movieid = $1`, [movieid]);
        await pool.query(`DELETE FROM movies WHERE movieid = $1`, [movieid]);

       
    } 
    catch (error) {
        console.error("Delete Movie Error:", error);
        res.status(500).send("Error deleting movie");
    }
}
module.exports = {
    allMovies,
    getALLMoviesWithDirectors,
     getAllMoviesWithGeneres,
    getSpecficMovies,
    getAllGenersOfSingleMovie,
    getAllDirectorsOfSingleMovie,
    insertNewMovie,
     getAllDirectorsIdofSingleMovie,
     getAllGenersIdOfSingleMovie,
     editExistingMovie,
    deleteSingleMovie
}
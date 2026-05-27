SELECT * FROM movies
SELECT * FROM  Movies JOIN Directors ON Movies.director_id = Directors.id WHERE movieid = 1

SELECT * FROM movies
SELECT * FROM DIRECTORS
SELECT * FROM GENRES
SELECT * FROM MOVIE_GENRE
SELECT * FROM MOVIE_DIRECTOR


DELETE FROM GENRES WHERE genreid = 16
ALTER TABLE directors
    ALTER COLUMN directorname SET NOT NULL;

DELETE TABLE directors
	ALT
//
ALTER TABLE directors
ADD CONSTRAINT unique_director_name UNIQUE (directorname);

//
ALTER TABLE GENRES
ADD CONSTRAINT unique_genre_name UNIQUE (genername);
//
SELECT 
    constraint_name, 
    constraint_type
FROM 
    information_schema.table_constraints
WHERE 
    table_name = 'genres';



  SELECT 
   *
   FROM genres
   JOIN movie_genre ON movie_genre.genreid = genres.genreid 
    JOIN movies ON movie_genre.movieid = movies.movieid
	WHERE movies.movieid = 2

 SELECT *
        FROM directors
		
WHERE movies.movieid = 4
CREATE TABLE movies(
movieid INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
moviename VARCHAR (100),
description varchar(255),
typeofmovie  varchar(12),
rating  INTEGER
watchedDate DATE,
)
ALTER TABLE movies 
ADD CONSTRAINT unique_movie_name UNIQUE (moviename);

INSERT INTO movies (moviename, description, typeofmovie)
VALUES 
	('Django Unchanined', 'A Movie About A Slave', 'Movie')

UPDATE movies
SET priority = 5
WHERE movieid = 1;

SELECT * FROM directors
UPDATE directors
SET directorname = 'Quentin Tarantin0'
WHERE directorid = 1;

INSERT INTO directors (directorname)
VALUES 
	('Quentin Tarantino')
INSERT INTO genres (genername)
VALUES 
	('Adventure'),
	('Action'),
	('Comedy'),
	('Crime'),
	('Drama'),
	('Fantasy'),
	('Horror'),
	('Mystery'),
	('Romance'),
	('Science Fiction'),
	('Thriller'),
	('Western')

INSERT INTO movie_director(directorid, movieid)
VALUES (1, 1)

SELECT 
    *
FROM movies
JOIN movie_director ON movies.movieid = movie_director.movieid
JOIN directors ON movie_director.directorid = directors.directorid

SELECT 
    *
FROM movies
JOIN movie_director ON movies.movieid = movie_director.movieid
JOIN directors ON movie_director.directorid = directors.directorid
WHERE movies.movieid = 1

INSERT INTO directors (directorname)
VALUES 
	('Steven Spielberg'),
	('Martin Scorsese'),
	('Christopher Nolan'),
	('James Cameron')

INSERT INTO movies (moviename, description, typeofmovie, priority)
VALUES 
	('Jaws', 'A Movie About A Shark Attack In The Ocean', 'Movie', 4),
	('GoodFellas', 'A Gangster Movie About Gangester', 'Movie', 5),
	('Avatar', 'A Movie About Allien Spceies', 'Movie', 5),
	('Inception', 'A Movie About Decepiton and Dream Walking', 'Movie', 4)

INSERT INTO movie_director(directorid, movieid)
VALUES (2, 2),
		(3, 3),
		(4, 5),
		(5, 4)
UPDATE movies
SET imageurl = 'https://i.pinimg.com/1200x/ec/72/fe/ec72fe02e05bdfb9191d55ef6ae6cd5f.jpg'
WHERE movieid = 3;

SELECT * FROM movies
SELECT* FROM movie_genre
INSERT INTO movie_genre(genreid, movieid)
VALUES (7, 2),
		(8, 2),
		(2, 3),
		(4, 3),
		(6, 4),
		(2, 4),
		(2,5),
		(11, 5)

SELECT * FROM movie_genre
SELECT * FROM genres
SELECT 
    *
FROM genres
JOIN movie_genre ON genres.genreid = movie_genre.genreid
JOIN movies ON movie_genre.movieid = movies.movieid
WHERE genres.genreid = 2

 SELECT 
             *
         FROM genres
        JOIN movie_genre ON genres.genreid = movie_genre.genreid
        JOIN movies ON movie_genre.movieid = movies.movieid
        WHERE genres.genreid = 2

SELECT 
    *
FROM movies
JOIN movie_director ON movies.movieid = movie_director.movieid
JOIN directors ON movie_director.directorid = directors.directorid
WHERE movies.movieid = 2


 SELECT 
     *
   FROM genres
   JOIN movie_genre ON genres.genreid = movie_genre.movieid
    JOIN movies ON movie_genre.movieid = movies.movieid
     WHERE genres.genreid = ${id}

SELECT * FROM movies
SELECT * FROM directors
SELECT * FROM genres
SELECT * FROM movie_director
SELECT * FROM movie_genre


 SELECT 
    *
FROM directors
JOIN movie_director ON directors.directorid = movie_director.directorid
JOIN movies ON movie_director.movieid = movies.movieid

SELECT 
    *
FROM genres
JOIN movie_genre ON genres.genreid = movie_genre.genreid
JOIN movies ON movie_genre.movieid = movies.movieid

  SELECT 
*
FROM directors 
JOIN movie_director ON directors.directorid = movie_director.directorid
JOIN movies ON movie_director.movieid = movies.movieid
WHERE directors.directorid = 1

ALTER TABLE  movie_director
  DROP CONSTRAINT movie_director_directorid_fkey,
  ADD CONSTRAINT movie_director_directorid_fkey
    FOREIGN KEY (directorid) REFERENCES directors(directorid) 
    ON DELETE CASCADE;

-- Fix the Course relationship
ALTER TABLE movie_director
  DROP CONSTRAINT movie_director_movieid_fkey,
  ADD CONSTRAINT movie_director_movieid_fkey
    FOREIGN KEY (movieid) REFERENCES movies(movieid) 
    ON DELETE CASCADE;


--add constraint to the movie genre table
ALTER TABLE  movie_genre
  DROP CONSTRAINT movie_genre_genreid_fkey,
  ADD CONSTRAINT movie_genre_genreid_fkey
    FOREIGN KEY (genreid) REFERENCES genres(genreid) 
    ON DELETE CASCADE;

-- Fix the Course relationship
ALTER TABLE movie_genre
  DROP CONSTRAINT movie_genre_movieid_fkey,
  ADD CONSTRAINT movie_genre_movieid_fkey
    FOREIGN KEY (movieid) REFERENCES movies(movieid) 
    ON DELETE CASCADE;

SELECT * FROM movies

ALTER TABLE movies 
ALTER COLUMN watcheddate DROP NOT NULL;


SELECT constraint_name 
FROM information_schema.table_constraints 
WHERE table_name = 'MOVIES' 
  AND constraint_type = 'UNIQUE KEY';


 
SELECT constraint_name 
FROM information_schema.table_constraints 
WHERE table_name = 'directors' 
  AND constraint_type = 'UNIQUE KEY';


 
  DELETE FROM movies WHERE movieid IN (10, 11, 12,13,14, 15, 16, 17, 18, 19, 20, 21, 22,23, 24, 25)
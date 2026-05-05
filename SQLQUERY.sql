SELECT * FROM movies
SELECT * FROM  Movies JOIN Directors ON Movies.director_id = Directors.id WHERE movieid = 1

SELECT * FROM movies
SELECT * FROM DIRECTORS
SELECT * FROM GENRES
SELECT * FROM MOVIE_GENRE
SELECT * FROM MOVIE_DIRECTOR


CREATE TABLE movies(
movieid INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
moviename VARCHAR (100),
description varchar(255),
typeofmovie  varchar(12),
rating  INTEGER
watchedDate DATE,
)
INSERT INTO movies (moviename, description, typeofmovie)
VALUES 
	('Django Unchanined', 'A Movie About A Slave', 'Movie')

UPDATE movies
SET priority = 5
WHERE movieid = 1;

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
INSERT INTO movie_genre(genreid, movieid)
VALUES (1, 1),
		(12, 1)

SELECT * FROM movie_genre
SELECT * FROM genres
SELECT 
    *
FROM genres
JOIN movie_genre ON genres.genreid = movie_genre.genreid
JOIN movies ON movie_genre.movieid = movies.movieid

		
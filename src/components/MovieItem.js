import React from "react";
import * as MI from '../style/style'

const MovieItem = ({ title, year, poster_path, genre_ids, overview }) => {
	
	const genres = [
		{ id: 28, name: "Action" },
		{ id: 12, name: "Adventure" },
		{ id: 16, name: "Animation" },
		{ id: 35, name: "Comedy" },
		{ id: 80, name: "Crime" },
		{ id: 99, name: "Documentary" },
		{ id: 18, name: "Drama" },
		{ id: 10751, name: "Family" },
		{ id: 14, name: "Fantasy" },
		{ id: 36, name: "History" },
		{ id: 27, name: "Horror" },
		{ id: 10402, name: "Music" },
		{ id: 9648, name: "Mystery" },
		{ id: 10749, name: "Romance" },
		{ id: 878, name: "Science Fiction" },
		{ id: 10770, name: "TV Movie" },
		{ id: 53, name: "Thriller" },
		{ id: 10752, name: "War" },
		{ id: 37, name: "Western" }
	];	

	const genreNames = genre_ids.map(id => {
		const genre = genres.find(g => g.id === id);
		return genre ? genre.name : "Unknown";
	});


	return (
		<MI.Box as="li" bg="skyblue">
            <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={title} />
            <div>
                <p className="title">{title}</p>
                <div>
                    <span className="genre">{genreNames}</span> |
                    <span className="year">{year}</span> |
                    <span className="language"></span> |
                    <span className="rating"></span>
                </div>
                <p className="description">{overview}</p>
            </div>

        </MI.Box>
	)
}

export default MovieItem
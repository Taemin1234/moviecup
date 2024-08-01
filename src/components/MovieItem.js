import React from "react";
import * as MI from '../style/style'
import {genres, language} from '../data/data'

const MovieItem = ({ title, year, poster_path, genre_ids, overview, original_language, vote_average }) => {
	
	// 장르 컨버터
	const genreNames = genre_ids.map(id => {
		const genre = genres.find(g => g.id === id);
		return genre ? genre.name : "Unknown";
	});

	//언어 컨버터
	const transLang = language.find(langA => langA.lang === original_language)
	const useLang = transLang.trans

	const rating = Number(vote_average.toFixed(2))


	return (
		<MI.Box as="li" bg="skyblue">
            <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={title} />
            <div>
                <p className="title">{title}</p>
                <div>
                    <span className="genre">{genreNames}</span> |
                    <span className="year">{year}</span> |
                    <span className="language">{useLang}</span> |
                    <span className="rating">{rating}</span>
                </div>
                <p className="description">{overview}</p>
            </div>

        </MI.Box>
	)
}

export default MovieItem
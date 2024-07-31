import React from "react";
import * as MI from '../style/style'

const MovieItem = ({ title, year, poster_path, genre_ids, overview, original_language, vote_average }) => {
	
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

	const language = [
		{lang:'en', trans:'영어'},
		{lang:'es', trans:'스페인어'},
		{lang:'fr', trans:'프랑스어'},
		{lang:'de', trans:'독일어'},
		{lang:'it', trans:'이탈리아어'},
		{lang:'ja', trans:'일본어'},
		{lang:'ko', trans:'한국어'},
		{lang:'zh', trans:'중국어'},
		{lang:'ru', trans:'러시아어'},
		{lang:'pt', trans:'포르투갈어'},
		{lang:'hi', trans:'힌디어'},
		{lang:'ar', trans:'아랍어'},
		{lang:'bn', trans:'벵골어'},
		{lang:'pl', trans:'폴란드어'},
		{lang:'nl', trans:'네덜란드어'},
		{lang:'tr', trans:'터키어'},
		{lang:'sv', trans:'스웨덴어'},
		{lang:'fi', trans:'핀란드어'},
		{lang:'no', trans:'노르웨이어'},
		{lang:'da', trans:'덴마크어'},
		{lang:'cs', trans:'체코어'},
		{lang:'el', trans:'그리스어'},
		{lang:'he', trans:'히브리어'}
	];

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
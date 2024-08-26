import React from "react";
import * as MI from '../style/style'
import {genres, language} from '../data/data'


const MovieItem = ({ title, year, poster_path, genre_ids, overview, original_language, vote_average }) => {
	// 장르 컨버터
	const genreNames = genre_ids.map(id => {
		const genre = genres.find(g => g.id === id);
		return genre ? genre.name : "불명";
	});

	//언어 컨버터
	const transLang = language.find(langA => langA.lang === original_language)
	const useLang = transLang ? transLang.trans : '불명'

	const rating = Number(vote_average.toFixed(2))


	return (
		<MI.Box as="li">
            <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={title} />
            <MI.BoxCont>
                <p className="title">{title}</p>
                <div className="genre_wrap">
                    {genreNames.map((el, i) => {
                        return <MI.Buttons as="span" cursor={'default'} key={i}>{el}</MI.Buttons>
                    })}
                </div>
                <div className="info">
                    <p className="year">{year}</p>
                    <p className="language">{useLang}</p>
                    <p className="rating">{rating}</p>
                </div>
                <p className="description">{overview}</p>
            </MI.BoxCont>
        </MI.Box>
	)
}

export default MovieItem
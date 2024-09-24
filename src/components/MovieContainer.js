import React, { useState } from 'react';
import * as MI from '../style/style';

import IndexBox from './IndexBox';
import MovieInfo from './MovieInfo';
import Modal from './Modal';
import Worldcup from './Worldcup';

function MovieContainer () {
    const [show, setShow] = useState(false)
    const showModal = () => setShow(!show);

    const [showMovie, setShowMovie] = useState(false)
    const showMovieModal = () => setShowMovie(!showMovie);

    return (
        <MI.Container>
            <IndexBox showModal={showModal} showMovieModal={showMovieModal} />
            {show && <Modal closeModal={showModal} />}
            {showMovie && <Worldcup closeModal={showMovieModal} />}
            <MovieInfo/>
        </MI.Container>
    )
}

export default MovieContainer
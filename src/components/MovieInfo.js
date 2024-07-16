import React from "react";

const MovieInfo = () => {
    return (
        <div>
            {/* <img src="" /> */}
            <div>
                <p className="title"></p>
                <div>
                    <span className="genre"></span> |
                    <span className="country"></span> |
                    <span className="year"></span> |
                    <span className="duration"></span> |
                    <span className="rating"></span>
                </div>
                <p className="description"></p>
            </div>
        </div>
    );
};

export default MovieInfo
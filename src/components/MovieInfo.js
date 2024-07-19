import {React} from "react";
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../api';

const MovieInfo = () => {
    const { data, dataUpdatedAt } = useQuery({ queryKey: ['movieList'], queryFn: getPosts });

    let result = data

    console.log(result.results);

   

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
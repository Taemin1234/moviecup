import React from "react";
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../api';

import MovieItem from './MovieItem'

const MovieInfo = () => {
    const { data, isLoading, isError } = useQuery({ queryKey: ['movieList'], queryFn: getPosts });

    //데이터를 불러오는 동안 로딩 상태 처리 (옵셔녈 체이닝으로 가능)
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error...</div>;
    }

    let list = data?.results ?? [];

    // console.log(result.data?.results[0].release_date);
    console.log(list);
    console.log(data?.total_pages);

    return (
       <>
        {list.map((item) => (
            <MovieItem poster_path={item.poster_path} title={item.title} year={item.release_date} genre_ids={item.genre_ids} overview={item.overview} key={item.id}/>
        ))}
       </>
    );
};


export default MovieInfo
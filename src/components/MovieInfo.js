import React, { useRef, useCallback } from "react";
import { useInfiniteQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import * as MI from '../style/style'
import { getPosts } from '../api';

import MovieItem from './MovieItem'

const MovieInfo = () => {
    //redux 값 가져오기
    let with_genres = useSelector((state) => state.genre)
    // let {startYear, endYear} = useSelector((state) => state.year)
    let with_original_language = useSelector((state) => state.language)

    const {
        data,
        isLoading,
        isError,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useInfiniteQuery({
        queryKey: ['movieList', with_genres, with_original_language],
        queryFn: ({ pageParam = 1 }) => getPosts({ 
            pageParam,
            withGenres: with_genres,
            withOriginalLanguage: with_original_language,
        }),
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = lastPage.page + 1;
            return nextPage <= lastPage.total_pages ? nextPage : undefined;
        }
    });

    const observerElem = useRef();

    const lastMovieElementRef = useCallback(node => {
        if (isLoading || isFetchingNextPage) return;
        if (observerElem.current) observerElem.current.disconnect();
        observerElem.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasNextPage) {
                fetchNextPage();
            }
        });
        if (node) observerElem.current.observe(node);
    }, [isLoading, isFetchingNextPage, fetchNextPage, hasNextPage]);


    //데이터를 불러오는 동안 로딩 상태 처리 (옵셔녈 체이닝으로 가능)
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error...</div>;
    }

    const list = data?.pages.flatMap(page => page.results) ?? [];

    // console.log(list);

    return (
        <MI.BoxWrap as="ul">
            {list.map((item, index) => {
                if (list.length === index + 1) {
                    return (
                        <div ref={lastMovieElementRef} key={item.id}>
                            <MovieItem
                                poster_path={item.poster_path}
                                title={item.title}
                                year={item.release_date}
                                genre_ids={item.genre_ids}
                                overview={item.overview}
                                original_language={item.original_language}
                                vote_average={item.vote_average}
                            />
                        </div>
                    );
                } else {
                    return (
                        <MovieItem
                            poster_path={item.poster_path}
                            title={item.title}
                            year={item.release_date}
                            genre_ids={item.genre_ids}
                            overview={item.overview}
                            original_language={item.original_language}
                            vote_average={item.vote_average}
                            key={item.id}
                        />
                    );
                }
            })}
            {isFetchingNextPage && <div>Loading more...</div>}
        </MI.BoxWrap>
    );
};


export default MovieInfo
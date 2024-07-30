import React, { useRef, useCallback } from "react";
import { useInfiniteQuery  } from '@tanstack/react-query';
import * as MI from '../style/style'
import { getPosts} from '../api';

import MovieItem from './MovieItem'


const MovieInfo = () => {
    const {
        data,
        isLoading,
        isError,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useInfiniteQuery({
        queryKey: ['movieList'],
        queryFn: ({ pageParam = 1 }) => getPosts({ pageParam }),
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

    // let list = data?.results ?? [];
    const list = data?.pages.flatMap(page => page.results) ?? [];

    // console.log(result.data?.results[0].release_date);
    console.log(list);

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
                            />
                            <p>ref 포함</p>
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
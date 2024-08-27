import React, { useRef, useCallback, useEffect, useState } from "react";
import { useInfiniteQuery } from '@tanstack/react-query';
import { useSelector, useDispatch } from 'react-redux';
import * as MI from '../style/style'
import { getPosts } from '../api';

import MovieItem from './MovieItem'

import { addWorldcup } from '../store/worldcupSlice'

const MovieInfo = () => {
    const [choiceList, setChoiceList] = useState([])

    // const dispatch = useDispatch();
    // // choiceList가 변경될 때만 dispatch 실행
    // useEffect(() => {
    //     if (choiceList.length > 0) {
    //         dispatch(addWorldcup(choiceList));
    //     }
    // }, [choiceList, dispatch]);

    //redux 값 가져오기
    let with_genres = useSelector((state) => state.genre)
    let start_year = useSelector((state) => state.year.startYear)
    let end_year = useSelector((state) => state.year.endYear)
    let with_original_language = useSelector((state) => state.language)

    const {
        data,
        isLoading,
        isError,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useInfiniteQuery({
        queryKey: ['movieList', with_genres, with_original_language, start_year, end_year],
        queryFn: ({ pageParam = 1 }) => getPosts({ 
            pageParam,
            withGenres: with_genres,
            withOriginalLanguage: with_original_language,
            startYear: start_year,
            endYear: end_year,
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

    const list = data?.pages.flatMap(page => page.results) ?? [];

    //월드컵을 위한 16개 데이터를 뽑기
    const arrCl = [];
    const generateList = (arr) => {
        if (arr.length > 0) {
            
            const arrNum = [];
            for (let i = 0; i < 16; i++) {
                const rand = Math.floor(Math.random() * arr.length);
                if (arrNum.indexOf(rand) === -1) {
                    arrNum.push(rand);
                    arrCl.push(arr[rand]);
                } else {
                    i--;
                }
            }
            // setChoiceList(arrCl);
        }
    }

    useEffect(() => {
        // if (list.length > 0) {
        //     const arrCl = [];
        //     const arrNum = [];
        //     for (let i = 0; i < 16; i++) {
        //         const rand = Math.floor(Math.random() * list.length);
        //         if (arrNum.indexOf(rand) === -1) {
        //             arrNum.push(rand);
        //             arrCl.push(list[rand]);
        //         } else {
        //             i--;
        //         }
        //     }
        //     setChoiceList(arrCl);
        // }
        generateList(list)
        // setChoiceList(arrCl);
    }, [list]); // list가 변경될 때만 실행


    //데이터를 불러오는 동안 로딩 상태 처리 (옵셔녈 체이닝으로 가능)
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error...</div>;
    }

    // const list = data?.pages.flatMap(page => page.results) ?? [];

    console.log(list);
    console.log(choiceList)

    // console.log(arrCl)


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
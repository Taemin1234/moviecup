import React, { useRef, useCallback, useEffect, useMemo } from "react";
import { useInfiniteQuery } from '@tanstack/react-query';
import { useSelector, useDispatch } from 'react-redux';
import * as MI from '../style/style'
import { getPosts } from '../api';

import MovieItem from './MovieItem'

import { addWorldcup } from '../store/worldcupSlice'

const MovieInfo = () => {
    //redux 값 가져오기
    let with_genres = useSelector((state) => state.genre)
    let start_year = useSelector((state) => state.year.startYear)
    let end_year = useSelector((state) => state.year.endYear)
    let with_original_language = useSelector((state) => state.language)

    console.log(with_genres)
    console.log(start_year)
    console.log(end_year)
    console.log(with_original_language)

    const dispatch = useDispatch();

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

    const list = useMemo(() => {
        const results = data?.pages?.flatMap(page => page?.results ?? []) ?? [];
        return results.filter(Boolean);
      }, [data]);

    
    //월드컵을 위한 16개 데이터를 뽑기
    useEffect(() => {
        if (list.length > 0) {
            const arrCl = [];
            const arrNum = [];
            for (let i = 0; i < 16; i++) {
                const rand = Math.floor(Math.random() * list.length);
                if (arrNum.indexOf(rand) === -1) {
                    arrNum.push(rand);
                    arrCl.push(list[rand]);
                } else {
                    i--;
                }
            }

            dispatch(addWorldcup(arrCl));
        }

        
    }, [list, dispatch]); // list가 변경될 때만 실행


    //데이터를 불러오는 동안 로딩 상태 처리 (옵셔녈 체이닝으로 가능)
    if (isLoading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '300px',
                flexDirection: 'column',
                gap: '15px',
                color: '#c0c0c0'
            }}>
                <div style={{
                    width: '40px',
                    height: '40px',
                    border: '3px solid #4a5568',
                    borderTop: '3px solid #fff',
                    borderRadius: '50%',
                    animation: 'spin 0.8s linear infinite'
                }}></div>
                <p style={{ fontSize: '16px' }}>로딩중...</p>
                <style>{`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}</style>
            </div>
        );
    }

    if (isError) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '300px',
                flexDirection: 'column',
                gap: '15px',
                padding: '30px',
                background: 'rgba(54, 54, 54, 0.5)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
                <p style={{ fontSize: '18px', color: '#ff6b6b', fontWeight: 600 }}>⚠️ 오류가 발생했습니다</p>
                <p style={{ fontSize: '14px', color: '#c0c0c0' }}>잠시 후 다시 시도해주세요</p>
            </div>
        );
    }

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
            {isFetchingNextPage && (
                <div style={{
                    gridColumn: '1 / -1',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                    gap: '12px',
                    color: '#c0c0c0'
                }}>
                    <div style={{
                        width: '30px',
                        height: '30px',
                        border: '2px solid #4a5568',
                        borderTop: '2px solid #fff',
                        borderRadius: '50%',
                        animation: 'spin 0.8s linear infinite'
                    }}></div>
                    <p style={{ fontSize: '14px' }}>더 많은 영화를 불러오는 중...</p>
                </div>
            )}
        </MI.BoxWrap>
    );
};


export default MovieInfo
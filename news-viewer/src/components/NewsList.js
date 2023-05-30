import React, { useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem"
import axios from "axios";
import usePromise from "../lib/usePromise";

const NewsItemBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = ({category}) => {
    const [ apiKey, setApiKey ] = useState('4ffd8bf1e15d46039d25054a026c09bc');
    // const [ articles, setArticles ] = useState(null);
    // const [ loading , setLoading ] = useState(null);
    const [loading, response, error] = usePromise(() => {
        // props로 넘어온 state로
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${apiKey}`,
        )
    }, [category])

    // 대기 중
    if (loading) {
        return <NewsItemBlock>대기 중입니다...</NewsItemBlock>
    }
    // articles 값이 설정 안될경우 (NULL 오류 방지)
    if (!response) {
        return null;
    }
    // 에러가 발생했을 떄
    if (error) {
        return <NewsItemBlock>에러 발생...</NewsItemBlock>;
    }

    // articles 같이 유효할 떄
    const { articles } = response.data;
    return (
        <NewsItemBlock>
            {articles.map(v =>  (
                <NewsItem key={v.url} article={v} />
            ))}
        </NewsItemBlock>
    );
};

export default NewsList;
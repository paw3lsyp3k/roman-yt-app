import React, {useState, useEffect} from 'react';
import { ArticleWrapper, Wrapper, TitleWrapper, NewsSectionHeader, ContentWrapper } from './NewsSection.styles';
import { Button } from '../../components/atoms/Button/Button';
import axios from 'axios';

const API_TOKEN = '946453d6f827fe9f9df1de4cb5c982';

const NewsSection = () => {
    const[articles, setArticles] = useState([]);
    const[error, setError] = useState('');

    useEffect(() => {
        axios.post('https://graphql.datocms.com/', {
            query: `
            {
                allArticles{
                  id
                  title
                  category
                  content
                  image{
                          url
                  }
                  }
              } 
            `
        }, {
            headers: {
                authorization: `Bearer ${API_TOKEN}`,
            },
        }
        )
        .then(({data: { data }}) => {
            setArticles(data.allArticles);
        })
        .catch(() => {
            setError(`Sorry, we couldn't load articles for you`)
        });
    }, []);

    return (
        <Wrapper>
            <NewsSectionHeader>University news feed </NewsSectionHeader>
            {articles.length > 0  ? articles.map(({title, category, content, image = null}) => (
                <ArticleWrapper key={title}>
                <TitleWrapper>
                    <h3>{title}</h3>
                    <p>{category}</p>
                </TitleWrapper>
                <ContentWrapper>
                    <p>{content}t</p>
                    {image ? <img src={image.url} alt="article image" /> : null}
                </ContentWrapper>
                <Button isBig>click me</Button>
            </ArticleWrapper>
            )): <NewsSectionHeader>{error ? error : 'Loading...'}</NewsSectionHeader>}
        </Wrapper>

    )
};

export default NewsSection;
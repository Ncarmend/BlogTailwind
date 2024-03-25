// src/components/Article.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { articles } from '../articles/articlesdata';
import { data } from '../articles/datas';

function Article({ match }) {
  const { id } = useParams();
  //const { id } = match.useParams;
  const article = articles.find((a) => a.id === Number(id));
  const data = data.find((a) => a.id === Number(id));

  /*if (!article) {
    return <div>Article non trouvé</div>;
  }*/

  return (
    <div>
      <h1>{article}</h1>
      <p>{article}</p>
      <h1>{data}</h1>
      <p>{data}</p>
    </div>
  );
}

export default Article;

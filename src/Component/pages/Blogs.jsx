import React, { useState } from 'react';
import {  Routes, Route } from 'react-router-dom';
import { articles } from '../articles/articlesdata';
//import { data } from '../articles/datas';
import Articles from './Articles'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Collapse,
  Button
} from "@material-tailwind/react";


function ArticleList() {

  const [open, setOpen] = React.useState(false);
 
  const toggleOpen = () => setOpen((cur) => !cur);
 
  
  return (
    
    
  <>
  <div className="bg-gradient-to-r from-gray-950 via-purple-950 to-indigo-950  brightness-200 " >
    <figure className="relative h-96 w-full">
      <img
        className="h-full w-full rounded-xl object-cover object-center"
        src="./images/pht1.jpg"
        alt="nature image"
      />
      <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <Typography variant="h5" color="blue-gray">
            By Dayana
          </Typography>
          <Typography color="gray" className="mt-2 font-normal">
            18 December 2023
          </Typography>
        </div>
        <Typography variant="h5" color="blue-gray">
        BLOG
        </Typography>
      </figcaption>
    </figure>

    <div  >
          <h1 className='text-green-800 text-5xl'>Liste des Articles</h1>
          
            
          </div>
          <div>
            {articles.map((article) => (
              <>
              <h2 key={article.id}> </h2>
                <h1 className='text-green-600 text-5xl  -skew-y-6'>{article.title}</h1>
                <div className="relative inset-4 flex justify-between  ml-28 mr-28 mb-8 pt-12">
                <img  className="h-96 w-full rounded-lg object-cover object-center skew-y-6" src={article.img} alt={`Image ${article.id}`} />
                </div>

                <div >
                 <p className="relative   justify-between mr-24 ml-28 content-center font-sans text-xl font-normal leading-relaxed text-inherit antialiased  skew-y-6">
                    {article.content}
                </p>

                <Button onClick={toggleOpen}>Open Collapse</Button>
      <Collapse open={open}>
        <Card className="my-4 mx-auto w-8/12">
          <CardBody>
            <Typography>
              Use our Tailwind CSS collapse for your website. You can use if for
              accordion, collapsible items and much more.
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
                 </div>
  </>
            ))}
          </div>
         
        <Routes>
          
            <Route>
              <Route path="/"  component={ArticleList} />
              <Route path="/article/:id" component={Articles} />
              <Route path="/data/:id" component={Articles} />
            </Route>

        
          </Routes >
      </div>
    
      </>
    
  );
}

export default ArticleList;

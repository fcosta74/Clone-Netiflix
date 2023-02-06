import React, {useEffect, useState} from 'react';
import Tmdb from './services/Tmdb';
import './App.scss';
import {Movies} from './Components/Movies';
import { FeaturedMovie } from './Components/FeaturedMovie';
import { Header } from './Components/Header';
import {Global} from './styles/global';


function App(){
  const [movieList, setMovieList ] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState (false);



  useEffect(() =>{
    const loadAll = async() => {
      const list = await Tmdb.getHomeList();
      setMovieList(list)
    
      // Pegando o filme em destaque 

      const originals = list.filter(i=>i.slug === 'originals')
      const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      const chosen = originals[0].items.results[randomChosen];
      const chosenInfo = await Tmdb.getSerieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo)
    }

    loadAll();
  },[])
    // Fazer efeito scroll header 
  useEffect(()=>{
    const scrollListener = () =>{
      // eslint-disable-next-line no-undef
      if(window.scrollY > 10){
        setBlackHeader(true);
      }else{
        setBlackHeader(false)
      }
    }
    // eslint-disable-next-line no-undef
    window.addEventListener('scroll', scrollListener);

    return () => {
      // eslint-disable-next-line no-undef
      window.removeEventListener('scroll', scrollListener);
    }
  },[])

  return(
    
      // eslint-disable-next-line react/jsx-filename-extension
      <>
     
      <Global />
      <div className='App'>
        <Header black={blackHeader} />

        {featuredData &&
          <FeaturedMovie item={featuredData} />}
        <section className='list'>
          {movieList.map((item, key) => (
            // eslint-disable-next-line react/no-array-index-key
            <Movies key={key} title={item.title} items={item.items} />
          ))}
        </section>
        
      </div>
    </>
    
  );
  
}

export default App;

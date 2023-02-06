/* eslint-disable react/prop-types */
import React from 'react';
import './styles.scss';

// eslint-disable-next-line import/prefer-default-export, react/prop-types
export function FeaturedMovie( { item } ){

  // eslint-disable-next-line react/prop-types
  const firstDate = new Date(item.first_air_date)
  const genres = [];
  // eslint-disable-next-line no-restricted-syntax, guard-for-in, react/prop-types
  for(const i in item.genres){
    // eslint-disable-next-line react/prop-types
    genres.push(item.genres[i].name);
  }

  return (
    <section className="featured" style={{
      // eslint-disable-next-line react/prop-types
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
       backgroundSize: 'cover',
       bacgkroundPosition: 'center'
      
      }}>

      <div className="vertical">
          <div className="horizontal">
            <div className="featuredName">{ item.original_name }</div>

            <div className="featuredInfo">
                <div className="featuredPoints">{item.vote_average} Pontos</div>
                <div className="featuredYear">{firstDate.getFullYear()}</div>
                <div className="featuredSeasons">{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''} </div>
                <div className="featuredDescription">{item.overview}</div>
                <div className="featuredButtons">
                  <a href=" # ">► Assistir</a>
                  <a href=" # ">+ Minha lista</a>
                </div>
                <div className="featuredGenres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
            </div>
          </div>
      </div>
    </section>
  )
}
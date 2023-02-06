/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {useState} from 'react';
import './styles.scss';
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi';

// eslint-disable-next-line import/prefer-default-export, react/prop-types
export function Movies( { title, items } ){


  const [scrollX, setScrollX] = useState(0);

  // Função para animar a lista para esquerda e direita

  const handleLeftArrow = () =>{
    let x = scrollX + Math.round(window.innerWidth / 2)
    if(x > 0){
      x = 0;
    }

    setScrollX(x)

  }

  const handleRightArrow = () =>{
    let x = scrollX - Math.round(window.innerWidth / 2)
    // eslint-disable-next-line react/prop-types
    const listW = items.results.length * 250;
    if((window.innerWidth - listW)> x){
     x = (window.innerWidth - listW) - 60;
    }

    setScrollX(x)
    
  }

  return(
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="left" onClick={ handleLeftArrow }>
        <FiChevronLeft style={{fontSize:50}} />
      </div>

      <div className="right" onClick={handleRightArrow}>
      <FiChevronRight style={{fontSize:50}}/>
      </div>


      <div className="listArea">
        <div className="list" style={{
          marginLeft: scrollX,
          // eslint-disable-next-line react/prop-types
          width: items.results.length * 250
        
          }} >
            {items.results.length > 0 && items.results.map((item ) => (
              <div className="item">
                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
              </div>
          )) }
        </div>
      </div>
      
    </div>
  );
}
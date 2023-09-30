import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'https://api.mangadex.org/';
// const title = 'Berserk';

const Search = ({ title, manga }) => {
  const [mangaIds, setMangaIds] = useState([]);

  useEffect(() => {
    const fetchMangaData = async () => {
       {
        const resp = await axios.get(`${baseUrl}/manga`, {
          params: {
            title: "Berserk"
          }
        });

        const mangaData = resp.data.data;
        const ids = mangaData.map(manga => manga.id);

        setMangaIds(ids);
      }
   
    };
  
  

    fetchMangaData();
  }, [title]);

  
  const id = mangaIds;
  useEffect(()=>{

    const fetchManga = async () => {
      const res=await fetch(`https://api.mangadex.org/manga/${id}`)
        const resData= await res.json();
        const manga = resData;
        console.log(manga);

    }
    fetchManga();
  },)

  return (
    <div>
      <h2>Manga IDs:</h2>
      <div>
      {mangaIds.map(title =>(
        <div
          key = {id}
          title={title}>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Search
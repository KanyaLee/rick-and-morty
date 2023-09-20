
import Character from '../components/Character';
import Pagination from '../components/Pagination';
import { CharactersResponse } from '@/interface/charactersResponse';
import { getCharacters } from '../services/rickAndMortyapi';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


type HomeProps = {
    characters: CharactersResponse;
    currentPage: number;
  };
  
export default function Home({ characters, currentPage }: HomeProps) {
    const router = useRouter();

    const onPageChange = (newPage: number) => {
        router.push(`/?page=${newPage}`);
    };

    
    
  return (
    <div className="container mx-auto px-4 text-center">
        <h1 className="text-2xl font-bold m-10">Rick and Morty Characters</h1>
        <div className = "grid grid-cols-3 gap-4 mb-8">
        {characters.results.map((character: { id: any; name: any; image: any; }) => (
          <Character key={character.id} name={character.name} image={character.image} />
        ))}
      </div>

    <Pagination currentPage={currentPage} totalPages={characters.info.pages} onPageChange={onPageChange}/>
    </div>
  );
}

export async function getServerSideProps(context: { query: { page: string; }; }) {
  const currentPage = context.query.page ? parseInt(context.query.page as string) : 1;
  const characters = await getCharacters(currentPage);


  return {
    props: {
      characters,
      currentPage
    },
  };
}

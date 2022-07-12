import React, { useEffect, useRef, useState } from 'react'
import { pokemonApi } from '../api/pokemonApi';
import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';

export const usePokemonPaginated = () => {
    
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);
    const nextPageUrl = useRef("https://pokeapi.co/api/v2/pokemon?limit=40");

    const loadPokemons =async () => {
        const resp = await pokemonApi.get<PokemonPaginatedResponse>(nextPageUrl.current);
        nextPageUrl.current = resp.data.next;
        mapPokemonList(resp.data.results)
    }

    const mapPokemonList = (pokemonList: Result[]) => {
        //const newPokemonList: SimplePokemon[] = 
        pokemonList.map(({name, url})=>{
            const urlParts = url.split('/');
            console.log(urlParts);
            
        });
    }

    useEffect(() => {
        loadPokemons();
    }, [])
    
    return {
        simplePokemonList,
    }
    
}

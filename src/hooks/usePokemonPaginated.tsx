import React, { useEffect } from 'react'
import { pokemonApi } from '../api/pokemonApi';

export const usePokemonPaginated = () => {
    
    const url = "https://pokeapi.co/api/v2/pokemon?limit=40";

    const loadPokemons =async () => {
        const resp = await pokemonApi.get(url);
        console.log(resp.data);
        
    }

    useEffect(() => {
        loadPokemons();
    }, [])
    
    
}

import React from 'react'
import { Text, View } from 'react-native'
import { PokemonFull } from '../interfaces/pokemonInterfaces';

interface Props {
    pokemon: PokemonFull;
}

export const PokemonDetails = ( {pokemon}: Props ) => {
    return (
        <View>
            <Text>{pokemon.name}</Text>
        </View>
    )
}

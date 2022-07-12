import React from 'react'
import { Text, View } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterfaces'

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ( {pokemon}:Props ) => {
    return (
        <View>
            <Text>{pokemon.name}</Text>
        </View>
    )
}

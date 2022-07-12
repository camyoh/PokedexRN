import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { PokemonFull } from '../interfaces/pokemonInterfaces';

interface Props {
    pokemon: PokemonFull;
}

export const PokemonDetails = ( {pokemon}: Props ) => {
    return (
        <ScrollView
            style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor: 'red'
            }}
        >

        </ScrollView>
    )
}

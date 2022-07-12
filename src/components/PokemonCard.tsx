import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SimplePokemon } from '../interfaces/pokemonInterfaces'
import { FadeInImage } from './FadeInImage';

const windowWidth = Dimensions.get('window').width

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
    return (
        <TouchableOpacity>
            <View style={{
                ...styles.cardContainer,
                width: windowWidth * 0.4,
            }}>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        backgroundColor: "red",
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
    }
});
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SimplePokemon } from '../interfaces/pokemonInterfaces'
import { FadeInImage } from './FadeInImage';

const windowWidth = Dimensions.get('window').width

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
        >
            <View style={{
                ...styles.cardContainer,
                width: windowWidth * 0.4,
            }}>
                <View>
                    <Text style={styles.name}>
                        {pokemon.name}
                        {"\n#" + pokemon.id}
                    </Text>
                </View>

                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokebola}
                />

                <FadeInImage 
                    uri={ pokemon.picture }
                    style={styles.pokemonImage}
                />

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
    },
    name: {
        color:'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 10,
        left: 10,
    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -20,
        right: -20,
        opacity: 0.5,
    },
    pokemonImage: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: -8,
        bottom: -5,
    }
});
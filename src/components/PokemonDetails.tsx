import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonFull;
}

export const PokemonDetails = ( {pokemon}: Props ) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator = {false}
            style={{
                ...StyleSheet.absoluteFillObject,
            }}
        >
            <View style={{
                ...styles.container,
                marginTop: 350,
            }}>
                <Text style={styles.title}>Types</Text>
                <View style={{flexDirection: 'row'}}>
                    {
                        pokemon.types.map( ({type}) => (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                }}
                                key={type.name}
                            >
                                { type.name }
                            </Text>
                        ))
                    }
                </View>

                <Text style={styles.title}>Weight</Text>
                <Text style={styles.regularText}>{pokemon.weight} Lb</Text>
            </View>

            <View
                style={styles.container}
            >
                <Text style={styles.title}>Sprites</Text>
            </View>

            <ScrollView
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
            >
                <FadeInImage 
                    uri={pokemon.sprites.front_default}
                    style={styles.basicSprite}
                />
                <FadeInImage 
                    uri={pokemon.sprites.back_default}
                    style={styles.basicSprite}
                />
                <FadeInImage 
                    uri={pokemon.sprites.front_shiny}
                    style={styles.basicSprite}
                />
                <FadeInImage 
                    uri={pokemon.sprites.back_shiny}
                    style={styles.basicSprite}
                />
            </ScrollView>

            <View
                style={styles.container}
            >
                <Text style={styles.title}>Abilities</Text>
                <View style={{flexDirection: 'row'}}>
                    {
                        pokemon.abilities.map( ({ability}) => (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                }}
                                key={ability.name}
                            >
                                { ability.name }
                            </Text>
                        ))
                    }
                </View>
            </View>

            <View
                style={styles.container}
            >
                <Text style={styles.title}>Moves</Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {
                        pokemon.moves.map( ({move}) => (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                }}
                                key={move.name}
                            >
                                { move.name }
                            </Text>
                        ))
                    }
                </View>
            </View>

            <View
                style={styles.container}
            >
                <Text style={styles.title}>Stats</Text>
                <View>
                    {
                        pokemon.stats.map(( stat ) => (
                            <View 
                                key={stat.stat.name}
                                style={{flexDirection: 'row'}}
                            >
                                <Text
                                    style={{
                                        ...styles.regularText,
                                        marginRight: 10,
                                        width: 150
                                    }}
                                >
                                    {stat.stat.name}
                                </Text>
                                <Text
                                    style={{
                                        ...styles.regularText,
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {stat.base_stat}
                                </Text>
                            </View>
                        ))
                    }
                </View>
            </View>

            <View
                style={{
                    marginBottom: 20,
                    alignItems: 'center'
                }}
            >
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={styles.basicSprite}
                />
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    regularText: {
        fontSize: 19,
    },
    basicSprite: {
        width: 100,
        height: 100,
    }
});
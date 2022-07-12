import React from 'react'
import { ActivityIndicator, Image, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated'
import { styles } from '../theme/appTheme'

export const HomeScreen = () => {
    const { top } = useSafeAreaInsets();
    const { simplePokemonList, loadPokemons } = usePokemonPaginated();
    console.log(simplePokemonList);


    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />

            <FlatList
                data={simplePokemonList}
                keyExtractor={(pokemon) => pokemon.id}
                renderItem={({ item }) => <Text>{item.name}</Text>}

                //infinite scroll
                onEndReached={ loadPokemons }
                onEndReachedThreshold={0.4}

                ListFooterComponent={(
                    <ActivityIndicator 
                        style={{height: 100}}
                        size={20}
                        color="grey"
                    />
                )}
            />

            {/* <Text style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20,
            }}>Pokedex</Text> */}
        </>
    )
}

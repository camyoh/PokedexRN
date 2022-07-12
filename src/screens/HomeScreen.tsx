import React from 'react'
import { ActivityIndicator, Image, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FadeInImage } from '../components/FadeInImage'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated'
import { styles } from '../theme/appTheme'

export const HomeScreen = () => {
    const { top } = useSafeAreaInsets();
    const { simplePokemonList, loadPokemons } = usePokemonPaginated();

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />

            <FlatList
                data={simplePokemonList}
                keyExtractor={(pokemon) => pokemon.id}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                renderItem={({ item }) => (
                    <FadeInImage 
                        uri={item.picture}
                        style={{
                            width: 100,
                            height: 100
                        }}
                    />
                )}

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

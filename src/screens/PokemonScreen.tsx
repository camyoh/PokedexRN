import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { FadeInImage } from '../components/FadeInImage'
import { usePokemon } from '../hooks/usePokemon'
import { RootStackParams } from '../navigator/Navigator'

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { };

const windowWidth = Dimensions.get('window').width

export const PokemonScreen = ({ navigation, route }: Props) => {

    const { simplePokemon, color } = route.params;
    const { id, name, picture } = simplePokemon;
    const { top } = useSafeAreaInsets();
    
    const {isLoading, pokemon} = usePokemon(id)
    
    

    return (
        <View style={{flex: 1}}>
            <View
                style={{
                    ...styles.headerContainer,
                    backgroundColor: color,
                }}
            >

                <TouchableOpacity
                    onPress={() => navigation.pop()}
                    activeOpacity={0.8}
                    style={{
                        ...styles.backButton,
                        top: top + 10 
                    }}
                >
                    <Icon 
                        name='arrow-back-outline'
                        color='white'
                        size={35}
                    />
                </TouchableOpacity>

                <Text
                    style={{
                        ...styles.pokemonName,
                    }}
                >
                    {name.toUpperCase() + '\n'}# {id}
                </Text>

                <Image 
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokeball}
                />

                <FadeInImage 
                    uri={picture}
                    style={styles.pokemonImage}
                />

            </View>

            <View style={styles.loadingIndicator}>
                <ActivityIndicator 
                    color={color}
                    size={50}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomLeftRadius: 1000,
        borderBottomRightRadius: 1000,
    },
    backButton: {
        position: 'relative',
        alignSelf: 'flex-start',
        left: 10
    },
    pokemonName: {
        color: 'white',
        fontSize: 35,
        alignSelf: 'flex-start',
        left: 20
    },
    pokeball: {
        width: 250,
        height: 250,
        bottom: -15,
        opacity: 0.7
    },
    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { RootStackParams } from '../navigator/Navigator'

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { };

const windowWidth = Dimensions.get('window').width

export const PokemonScreen = ({ navigation, route }: Props) => {

    const { simplePokemon, color } = route.params;
    const { top } = useSafeAreaInsets();
    console.log(`width: ${windowWidth}`);
    

    return (
        <View>
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
})
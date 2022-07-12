import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../navigator/Navigator'

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'>{};

export const PokemonScreen = (props: Props) => {
    return (
        <View>
            <Text>PokemonScreen</Text>
        </View>
    )
}

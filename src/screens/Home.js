import * as React from 'react';
import * as RN from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Home() {

    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <RN.Button title='Add' onPress={() => navigation.navigate('Add')} />
        })
    },[navigation])



    return(
        <RN.View>
            <RN.Text>This is the home screen</RN.Text>
        </RN.View>
    )
}
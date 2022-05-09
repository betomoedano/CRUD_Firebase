import * as React from 'react';
import * as RN from 'react-native';

export default function Product({
    id,
    emoji,
    name,
    price,
}) {
    return(
        <RN.View>
            <RN.View >
                <RN.Text >{emoji}</RN.Text>
                <RN.Text >{name}</RN.Text>
                <RN.Text>{price}</RN.Text>
            </RN.View>
        </RN.View>
    )
}
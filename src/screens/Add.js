import * as React from 'react';
import * as RN from 'react-native';
import {
    collection,
    addDoc,
    orderBy,
    query,
    onSnapshot
  } from 'firebase/firestore';
import { database } from '../../config/fb';

export default function Add() {

    const onSend = () => {
        const newData = {
            prduct: 'hello',
            price: 'world'
        }
        addDoc(collection(database, 'products'), {
            product: newData.prduct,
            price: 'hello',
        });
      }

    return(
        <RN.View>
            <RN.Text>This is the Add screen</RN.Text>
            <RN.Button title='create' onPress={onSend}/>
        </RN.View>
    )
}
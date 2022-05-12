import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/styles';

export function Case({ value, onPress }) {

  return (
    
    <TouchableOpacity style={styles.case} onPress={onPress}>
        <Text>
            {value}
            {value == "X" && <Icon name="close" style={styles.X}/> }
            {value == "O" &&  <Icon name="circle-outline" style={styles.O}/>}
        </Text>
    </TouchableOpacity>
  );
}
import { Text, View } from 'react-native';
import styles from '../styles/styles';

export function Footer({ title }) {
  return (
    
    <View style={styles.foot}>
        <Text>{title}</Text>
    </View>
    
  );
}

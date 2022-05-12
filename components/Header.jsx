import { Text, SafeAreaView } from 'react-native';
import styles from '../styles/styles';

export function Header({ title }) {
  return (
    
    <SafeAreaView style={styles.head}>
        <Text>{title}</Text>
    </SafeAreaView>
    
  );
}




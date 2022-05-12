import { Text, View } from 'react-native';
import styles from '../styles/styles';

export function Content({ content }) {
  return (
    
    <View style={styles.content}>
        <Text>🍜 J'aime {content}! 🍜</Text>
    </View>
  );
}
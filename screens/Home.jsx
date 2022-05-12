import { View, StatusBar, TouchableOpacity, Text } from 'react-native';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Content } from '../components/Content';
import styles from '../styles/styles';

export function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <StatusBar barStyle = "dark-content" backgroundColor = "#00BCD4" marginTop = "100px"/>
        <Header title="🏠 Bienvenue sur la Homepage 🏠" />
        <Content content="les nouilles"/>
        
        <TouchableOpacity onPress={() => navigation.navigate('Gyro')} style={{ backgroundColor: "#FF00FF", width: "100%", alignItems: "center", padding: 20}}>
          <Text>🧭 Go to Gyroscope 🧭</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Random Data')} style={{ backgroundColor: "#FFFF00", width: "100%", alignItems: "center", padding: 20}}>
          <Text>🏎 Go to Data 💨</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Game')} style={{ backgroundColor: "#454545", width: "100%", alignItems: "center", padding: 20 }}>
          <Text style={{ color: "#FFFFFF" }}>🎮 Go to Game ❌⭕️</Text>
        </TouchableOpacity>

        <Footer title="🥷 Jordan 💨" />
    </View>
  );
}
  
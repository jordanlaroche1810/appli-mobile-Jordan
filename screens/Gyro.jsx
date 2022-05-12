import { View, StatusBar, TouchableOpacity, Text } from 'react-native';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Sensors } from '../components/Sensors';
import styles from '../styles/styles';

export function GyroScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <StatusBar barStyle = "dark-content" backgroundColor = "#00BCD4" marginTop = "100px"/>
        <Header title="🧭 Bienvenue sur la page du Gyroscope 🧭" />
        <Sensors />

        <TouchableOpacity onPress={() => navigation.navigate('Random Data')} style={{ backgroundColor: "#FFFF00", width: "100%", alignItems: "center", padding: 20}}>
          <Text>🏎 Go to Data 💨</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ backgroundColor: "#FF0000", width: "100%", alignItems: "center", padding: 20}}>
          <Text>🏠 Go to Home 🏠</Text>
        </TouchableOpacity>

        <Footer title="🥷 Jordan 💨" />
    </View>
  );
}
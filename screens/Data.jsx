import { View, StatusBar, TouchableOpacity, Text } from 'react-native';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { JeVeuxMesDonnees } from '../components/Donnees';
import styles from '../styles/styles';


export function DataScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <StatusBar barStyle = "dark-content" backgroundColor = "#00BCD4" marginTop = "100px"/>
        <Header title="🏎 Bienvenue sur la page des randoms data 💨" />
        < JeVeuxMesDonnees />

        <TouchableOpacity onPress={() => navigation.navigate('Gyro')} style={{ backgroundColor: "#FF00FF", width: "100%", alignItems: "center", padding: 20}}>
          <Text>🧭 Go to Gyroscope 🧭</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ backgroundColor: "#FF0000", width: "100%", alignItems: "center", padding: 20}}>
          <Text>🏠 Go to Home 🏠</Text>
        </TouchableOpacity>

        <Footer title="🥷 Jordan 💨" />
    </View>
  );
}
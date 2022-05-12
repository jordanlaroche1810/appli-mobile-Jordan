import axios from "axios";
import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import styles from '../styles/styles';

const baseURL = 'https://random-data-api.com';

export function JeVeuxMesDonnees() {
  const [cars, setCars] = useState({});

  useEffect(() =>{
    getAllCars()
  }, []);

  const getAllCars = () => {
    axios.get(`${baseURL}/api/vehicle/random_vehicle`)
    .then((response) =>{
      const car = response.data;
      setCars(car)
    })
  }
  
  return (
    <View style={styles.container}>
        <Text>{cars.make_and_model}</Text>
        <Text>{cars.color}</Text>
        <Text>{cars.kilometrage}Km au compteur</Text>
    </View>
  );
}

/* export async function getCars(id) {
  const { data } = await axios.get(`${baseUrl}/api/vehicle/${id}`);
  return data;
} */
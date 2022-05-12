import { useState, useEffect } from 'react';
import { View, StatusBar, TouchableOpacity, Text, Alert } from 'react-native';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Case } from '../components/GameCase';
import styles from '../styles/styles';


let initData = [["", "", ""], ["", "", ""], ["", "", ""]];
export const GameScreen = ({ navigation }) => {

  const [data, setData] = useState( initData );
  const [player, setPlayer] = useState("O");

  const [winX, setWinX] = useState(0);
  const [winO, setWinO] = useState(0);

  const [coup, setCoup] = useState(1);


  const handlePress = (x,y) => {
    if(player == "O") setPlayer("X")
    else setPlayer("O");
    let tmp = data;
    tmp[x][y] = player;

    setCoup(coup+1);
    console.log(coup);

    setData(tmp);
    /* console.log(data); */

    const nb_case = 3;

    let resultData;

    /* Check Row */
    for(let i = 0; i < nb_case; i++){
      resultData = data[i][0] + data[i][1] + data[i][2];
      if (resultData === "XXX"){
        Alert.alert("Le Joueur X gagne !")
        setWinX(winX + 1);
        setData([["", "", ""], ["", "", ""], ["", "", ""]]);
        setCoup(1);

      } else if (resultData === "OOO"){
        Alert.alert("Le Joueur O gagne !")
        setWinO(winO + 1);
        setData([["", "", ""], ["", "", ""], ["", "", ""]]);
        setCoup(1);
      }
    }

    /* Check Line */
    for(let i = 0; i < nb_case; i++){
      resultData = data[0][i] + data[1][i] + data[2][i];
      if (resultData === "XXX"){
        Alert.alert("Le Joueur X gagne !")
        setWinX(winX + 1);
        setData([["", "", ""], ["", "", ""], ["", "", ""]]);
        setCoup(1);
      } else if (resultData === "OOO"){
        Alert.alert("Le Joueur O gagne !")
        setWinO(winO + 1);
        setData([["", "", ""], ["", "", ""], ["", "", ""]]);
        setCoup(1);
      }
    }

    /* Check Diag 1*/
    resultData = data[0][0] + data[1][1] + data[2][2];
    if (resultData === "XXX"){
      Alert.alert("Le Joueur X gagne !")
      setWinX(winX + 1);
      setData([["", "", ""], ["", "", ""], ["", "", ""]]);
      setCoup(1);
    } else if (resultData === "OOO"){
      Alert.alert("Le Joueur O gagne !")
      setWinO(winO + 1);
      setData([["", "", ""], ["", "", ""], ["", "", ""]]);
      setCoup(1);
    }

    /* Check Diag 2*/
    resultData = data[0][2] + data[1][1] + data[2][0];
    if (resultData === "XXX"){
      Alert.alert("Le Joueur X gagne !")
      setWinX(winX + 1);
      setData([["", "", ""], ["", "", ""], ["", "", ""]]);
      setCoup(1);
    } else if (resultData === "OOO"){
      Alert.alert("Le Joueur O gagne !")
      setWinO(winO + 1);
      setData([["", "", ""], ["", "", ""], ["", "", ""]]);
      setCoup(1);
    }
  
    if(coup === 9){
      Alert.alert("Égalité");
      setData([["", "", ""], ["", "", ""], ["", "", ""]]);
      setCoup(1);
    }
  };

  return (
    <View style={styles.container}>
        <StatusBar barStyle = "dark-content" backgroundColor = "#00BCD4" marginTop = "100px"/>
        <Header title="🎮 TicTacToe ❌⭕️" />
        <View>
            <Text>Score de Joueur X : {winX}</Text>
            <Text>Score de Joueur O : {winO}</Text>
        </View>
        <View>
          {data.map((item, index) => 
            (
              <View key={index} style={{flexDirection: "row"}}>
                {item.map((cse, caseIndex) => <Case key={caseIndex} onPress={() => handlePress(index, caseIndex)} value={item[caseIndex]} />)}
              </View>
            )
          )}

        </View>
        
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ backgroundColor: "#FF0000", width: "auto", alignItems: "center", padding: 20, justifyContent: "end", borderRadius: 20}}>
          <Text>🏠 Go to Home 🏠</Text>
        </TouchableOpacity>

        <Footer title="🥷 Jordan 💨" />
    </View>
  );
}
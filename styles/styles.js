import { StyleSheet } from 'react-native'


export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    
      text:{
        color: '#FFF'
      },

      head: {
        flex: 1,
        backgroundColor: '#00FF00',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 125,
        width: "100%"
      },
  
      content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
      },

      foot: {
        flex: 1,
        backgroundColor: '#0000FF',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 125,
        width: "100%"
      },

      buttonContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        marginTop: 15,
      },

      button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        padding: 10,
      },
      
      middleButton: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#ccc',
      },

      case: {
        borderWidth: 3,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
      },

      X: {
        color: "red",
        fontSize: 75,
        flex: 1,
      },

      O: {
        color: "blue",
        fontSize: 75,
        flex: 1,
        
      }
});
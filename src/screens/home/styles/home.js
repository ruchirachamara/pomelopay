import { StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
      marginTop: 20,
      marginBottom: 20
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 20,
      paddingBottom: 25
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    internalContainer: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 50,
      borderColor: '#069',
      borderWidth: 1,
      borderStyle: 'solid',
      marginBottom: 10,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      borderRadius: 5
    },
    internalTextLabel: {
      fontSize: 14,
      fontWeight: 'bold'
    },
    internalRowWrapper: {
      display: 'flex',
      flexDirection: 'row',
    },
    internalRowWrapperFirstColumn: {
      width: '40%'
    },
    internalRowWrapperSecondColumn: {
      width: '60%'
    }
})
  
export default styles
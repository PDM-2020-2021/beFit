import { StyleSheet} from 'react-native';
import SharedVariables from '../assets/shared-variables';

const SharedStyles = StyleSheet.create({
    home_container: {
      width: '100%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#f5f5f5",
    },
    container: {
      alignSelf: 'center',
      width: '100%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    scroll_container: {
      alignSelf: 'center',
      width: '100%',
      flex: 1,
    },
    comicStyle: {
      fontFamily: "Comic"
    }
});

export default SharedStyles
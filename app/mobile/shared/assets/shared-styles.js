import { StyleSheet} from 'react-native';
import SharedVariables from '../assets/shared-variables';

const SharedStyles = StyleSheet.create({
    home_container: {
      alignSelf: 'center',
      width: '100%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: SharedVariables.bckgColor,
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
});

export default SharedStyles
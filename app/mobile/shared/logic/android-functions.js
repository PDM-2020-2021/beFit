import {
    ToastAndroid
} from 'react-native';

export function showMessage(msg){
    ToastAndroid.show(msg, ToastAndroid.SHORT);
};
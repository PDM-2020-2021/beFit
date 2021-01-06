import AsyncStorage from '@react-native-async-storage/async-storage';

export async function set(key, val) {
    await AsyncStorage.setItem(key, val);
}
export async function get(key) {
    return await AsyncStorage.getItem(key);
}
export async function removeItem(key) {
    await AsyncStorage.removeItem(key);
}
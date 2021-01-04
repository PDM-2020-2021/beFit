import { CommonActions } from '@react-navigation/native';
import jwt_decode from "jwt-decode";

import * as storage from '../logic/storage-requester';

export function handleUserAuthenticationRequest(token, navigation) {
    const decToken = JSON.parse(JSON.stringify(jwt_decode(token)));

    let userData = {
        id: decToken.user_id,
        role: decToken.auth[0].authority,
        email: decToken.sub,
        token: token
    };

    storage.set('user', JSON.stringify(userData))
        .then(() => {
            if (userData.role === 'ROLE_CLIENT') {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [
                            { name: 'Abonamente' },
                        ],
                    }));
            }
            else if (userData.role === 'ROLE_ADMIN') {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [
                            { name: 'Admin' },
                        ],
                    }));
            }
        })
        .catch(e => {
            console.log(e);
        });
}
export function diconnect(navigation){
    storage.removeItem('user')
        .then(() => {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        { name: 'Acasa' },
                    ],
                }));
        })
        .catch(err => console.log(err));
}
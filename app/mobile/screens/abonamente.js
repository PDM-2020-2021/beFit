import React from "react";

import AppTile from '../shared/componente/tile'
import SharedStyles from '../shared/assets/shared-styles'
import { ScrollView } from "react-native-gesture-handler";
import { StyleSheet, View } from 'react-native';
import BfDrawer from '../shared/componente/bf-drawer';
import RNPickerSelect from 'react-native-picker-select';
import SharedVariables from "../shared/assets/shared-variables";


export default class Abonamente extends React.Component {

    abonamente = [
        { id: 1, title: 'Abonament spa', valability: 17, categ: 'Spa', imgSrc: 'spa.jpg', price: 10 },
        { id: 2, title: 'Abonament fitness', valability: 18, categ: 'Fitness', imgSrc: 'fitness.jpg', price: 20 },
        { id: 3, title: 'Abonament cardio', valability: 19, categ: 'Cardio', imgSrc: 'cardio.jpg', price: 30 },
        { id: 4, title: 'Abonament golf', valability: 20, categ: 'Golf', imgSrc: 'golf.jpg', price: 40 },

        { id: 5, title: 'Abonament spa', valability: 17, categ: 'Spa', imgSrc: 'spa.jpg', price: 10 },
        { id: 6, title: 'Abonament fitness', valability: 18, categ: 'Fitness', imgSrc: 'fitness.jpg', price: 20 },
        { id: 7, title: 'Abonament cardio', valability: 19, categ: 'Cardio', imgSrc: 'cardio.jpg', price: 30 },
        { id: 8, title: 'Abonament golf', valability: 20, categ: 'Golf', imgSrc: 'golf.jpg', price: 40 },
    ];

    categories = [
        { label: 'Spa', value: 'Spa' },
        { label: 'Fitness', value: 'Fitness' },
        { label: 'Cardio', value: 'Cardio' },
        { label: 'Golf', value: 'Golf' },
    ];

    constructor(props) {
        super(props);
        this.state = { categorySelected: '', abonamente: [] };
        this.state.abonamente = this.abonamente;
    }

    onFilterPick() {
        let temp = [];
        this.abonamente.forEach(
            ab => {
                if (ab.categ === this.state.categorySelected) {
                    temp.push(ab);
                }
            }
        )
        this.state.abonamente = temp;
    }

    setCategory = (category) => {
        this.state.categorySelected = category;
        this.setState({ categorySelected: category });
        this.onFilterPick();
    }

    render() {
        let navigation = this.props.navigation;
        return (
            <BfDrawer navigation={this.props.navigation}
                content={(
                    <ScrollView style={SharedStyles.scroll_container}>

                        <View style={styles.pickerStyle}>
                            <RNPickerSelect
                                placeholder={{
                                    label: 'Alege categoria...',
                                    value: null,
                                }}
                                onValueChange={(value) =>
                                    this.setCategory(value)
                                }
                                items={this.categories}
                            />
                        </View>

                        {this.state.abonamente.map(function (ab, index) {
                            let imageSource = `../shared/static/images/${ab.imgSrc}`;
                            console.log(imageSource);
                            return (<AppTile
                                navigation={navigation}
                                key={index}
                                id={ab.id}
                                title={ab.title}
                                getImage={require('../shared/static/images/spa.jpg')}
                                valability={ab.valability}
                                price={ab.price}
                            ></AppTile>)
                        })}

                    </ScrollView>
                )}
            />
        );
    }
}

const styles = StyleSheet.create({
    pickerStyle: {
        width: "53%",
        marginLeft: 10,
    },
    textStyle: {
        fontFamily: "Comic",
        fontSize: 20,
        textAlign: "center",
        color: SharedVariables.bckgColor,
        marginBottom: 20,
    },
});
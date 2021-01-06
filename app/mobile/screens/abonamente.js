import React from "react";

import AppTile from '../shared/componente/tile';
import SharedStyles from '../shared/assets/shared-styles';
import { ScrollView } from "react-native-gesture-handler";
import { StyleSheet, View } from 'react-native';
import BfDrawer from '../shared/componente/bf-drawer';
import RNPickerSelect from 'react-native-picker-select';
import SharedVariables from "../shared/assets/shared-variables";
import * as api from '../shared/logic/api-requester';

export default class Abonamente extends React.Component {

    categories = [];
    pageSize = 5;
    pageNo = 0;

    constructor(props) {
        super(props);
        this.state = { categorySelected: '', abonamente: [] };
    }

    componentDidMount() {
        this.bringSomeAbs();
        this.bringCategories();
    }

    bringCategories() {
        api.get('/category/')
            .then((response) => {
                response.forEach(categ => {
                    this.categories.push(categ.value);
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

    bringSomeAbs() {
        let paginationData = {}
        if (this.state.categorySelected)
            paginationData = {
                pageNo: this.pageNo,
                pageSize: this.pageSize,
                sortBy: 'id',
                filter: this.state.categorySelected
            }
        else
            paginationData = {
                pageNo: this.pageNo,
                pageSize: this.pageSize,
                sortBy: 'id',
                filter: null
            }

        api.post('/abonament/filters/pagination', paginationData)
            .then((response) => {
                this.absCount = response.dbAbsCount;
                let temp = this.state.abonamente;
                temp.push(...response.abonamentList);
                this.setState({ abonamente: temp });
            })
            .catch(error => {
                console.log(error);
            });
    }

    filterAbsByCategory() {
        this.pageNo = 0;

        let paginationData = {
            pageNo: this.pageNo,
            pageSize: this.pageSize,
            sortBy: 'id',
            filter: this.state.categorySelected
        }

        api.post('/abonament/filters/pagination', paginationData)
            .then((response) => {
                this.setState({ abonamente: response.abonamentList });
            })
            .catch(error => {
                console.log(error);
            });
    }

    isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        const paddingToBottom = 1;
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    };

    render() {
        let navigation = this.props.navigation;

        return (
            <BfDrawer navigation={this.props.navigation}
                content={(
                    <ScrollView style={SharedStyles.scroll_container}
                        onScroll={({ nativeEvent }) => {
                            if (this.pageNo <= (this.absCount / this.pageSize) &&
                                this.isCloseToBottom(nativeEvent)) {
                                this.pageNo++;
                                this.bringSomeAbs();
                            }
                        }}
                        scrollEventThrottle={16}
                    >

                        <View style={styles.pickerStyle}>
                            <RNPickerSelect
                                value={this.state.categorySelected}
                                placeholder={{
                                    label: 'Alege categoria...',
                                    value: null
                                }}
                                onValueChange={(value) => {
                                    this.setState({ categorySelected: value }, () => {
                                        this.filterAbsByCategory();
                                    });
                                }}
                                items={this.categories.map(function (categ, index) {
                                    return { label: categ, value: categ, key: categ }
                                })}
                                useNativeAndroidPickerStyle={false}
                                textInputProps={{
                                    fontSize: 16, color: '#000',
                                    marginTop: 10, marginLeft: 10
                                }}
                            />
                        </View>

                        {this.state.abonamente.map(function (ab, index) {
                            return (<AppTile
                                navigation={navigation}
                                key={index}

                                id={ab.id}
                                getImage={'data:image/png;base64,' + ab.image}
                                title={ab.title}
                                price={ab.price}
                                valability={ab.valability}
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
        width: "98%",
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
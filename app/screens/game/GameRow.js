import {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import React from "react";


export default class GameRow extends Component {
    render() {
        let {round} = this.props;
        return (
            <View style={styles.gameRowWrapper}>
                <View style={styles.gameRow}>
                    {round.map((points, index) =>
                        <Text key={index} style={styles.gameCol}>
                            {points}
                        </Text>
                    )}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    gameRowWrapper: {
        height: 20,
    },
    gameRow:{
        flex: 1,
        flexDirection: 'row',
    },
    gameCol:{
        flex: 1,
        textAlign: 'center',
        borderWidth: 1,
    },
});
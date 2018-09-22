import {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import React from "react";


export default class GameResult extends Component {
    render() {
        let {pointsTogether} = this.props;
        return (
            <View style={styles.gameResultsWrapper}>
                <View style={styles.gameResultsRow}>
                    {pointsTogether.map((points, index) =>
                        <Text key={index} style={styles.gameResultsCol}>
                            {points}
                        </Text>
                    )}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    gameResultsWrapper: {
        height: 20,
    },
    gameResultsRow:{
        flex: 1,
        flexDirection: 'row',
    },
    gameResultsCol:{
        flex: 1,
        textAlign: 'center',
        borderWidth: 1,
    },
});
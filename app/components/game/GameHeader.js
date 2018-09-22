import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";


export default class GameHeader extends Component {
    render(){
        const {players} = this.props;
        return (
            <View style={styles.gameHeaderWrapper}>
                <View style={styles.gameHeaderRow}>
                    {players.map((player, index) =>
                        <Text key={index} style={styles.gameHeaderCol}>
                            {player.name}
                        </Text>
                    )}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    gameHeaderWrapper: {
        height: 20,
    },
    gameHeaderRow:{
        flex: 1,
        flexDirection: 'row',
    },
    gameHeaderCol:{
        flex: 1,
        textAlign: 'center',
        borderWidth: 1,
    },
});
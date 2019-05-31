import React, {Component} from 'react';
import {View} from "react-native";
import GameRow from "./GameRow";


export default class GameRows extends Component {
    render() {
        const {rounds} = this.props;
        return (
            <View>
                {rounds.map((round, index) =>
                    <GameRow key={index} round={round} />
                )}
            </View>
        )
    }
}
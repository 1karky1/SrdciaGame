import React, {Component} from 'react';
import { Button, StyleSheet, View, ScrollView,} from 'react-native';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import GameHeader from "./GameHeader";
import GameResult from "./GameResult";
import GameRows from "./GameRows";
import {addRound} from "../../actions/gameActions";

class Game extends Component {

    pointsTogether = () => {
        return this.props.rounds.reduce((acc, round) => {
            return [acc[0] + round[0], acc[1] + round[1], acc[2] + round[2], acc[3] + round[3]]
        }, [0,0,0,0]);
    };

    render() {
        const {players, rounds, addRound, navigation} = this.props;
        return (
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.gamePage}>
                    <GameHeader players={players}/>
                    <GameRows rounds={rounds}/>
                    <GameResult pointsTogether={this.pointsTogether()}/>
                    <Button
                        onPress={() => addRound([0, 0, 0, 0])}
                        title="Add round"
                        color="#841584"
                    />
                    <Button
                        onPress={() => navigation.navigate('GameMenu')}
                        title="Exit"
                        color="#841584"
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    contentContainerStyle: {
        flexGrow: 1

    },
    gamePage: {
        padding: 10,
        flex: 1,
        backgroundColor: '#F5FCFF',
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


const mapStateToProps = state => ({
    players: state.game.players,
    rounds: state.game.rounds,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    addRound,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Game);

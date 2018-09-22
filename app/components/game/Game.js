import React, {Component} from 'react';
import {
    Button,
    StyleSheet,
    View,
    ScrollView,
} from 'react-native';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import GameHeader from "./GameHeader";
import GameResult from "./GameResult";
import GameRows from "./GameRows";

let ROUNDS = [
    [10, 10, 10, 10],
    [10, 10, 10, 10],
    [10, 10, 10, 10]
];

class Game extends Component {

    state = {
        rounds: ROUNDS
    };

    pointsTogether = () => {
        return this.state.rounds.reduce((acc, round) => {
            return [acc[0] + round[0], acc[1] + round[1], acc[2] + round[2], acc[3] + round[3]]
        }, [0,0,0,0]);
    };

    addRound = (round) => {
        this.setState({rounds: this.state.rounds.concat([round])})
    };

    render() {
        const {players} = this.props;
        return (
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.gamePage}>
                    <GameHeader players={players}/>
                    <GameRows rounds={this.state.rounds}/>
                    <GameResult pointsTogether={this.pointsTogether()}/>
                    <Button
                        onPress={() => this.addRound([20, 20, 20, 20])}
                        title="Add round"
                        color="#841584"
                    />
                    <Button
                        onPress={() => this.props.navigation.navigate('Menu')}
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
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Game);

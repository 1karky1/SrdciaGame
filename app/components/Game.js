import React, {Component} from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";

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
                <View style={{height: 20}}>
                    <View style={styles.gameRow}>
                        {players.map((player, index) =>
                            <Text key={index} style={styles.gameCol}>
                                {player.name}
                            </Text>
                        )}
                    </View>
                </View>
                {this.state.rounds.map((round, index) =>
                    <View key={index} style={{height: 20}}>
                        <View style={styles.gameRow}>
                            {round.map((points, index) =>
                                <Text key={index} style={styles.gameCol}>
                                    {points}
                                </Text>
                            )}
                        </View>
                    </View>
                )}
                <View style={{height: 20}}>
                    <View style={styles.gameRow}>
                        {this.pointsTogether().map((points, index) =>
                            <Text key={index} style={styles.gameCol}>
                                {points}
                            </Text>
                        )}
                    </View>
                </View>
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

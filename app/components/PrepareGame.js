import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {
    StyleSheet, Text, View,
    Button, ScrollView,
} from 'react-native';
import Input from './generic/Input';
import {setPlayer} from '../actions/gameActions'

class PrepareGame extends Component {

    render() {
        const {navigation, players, setPlayer} = this.props;
        return (
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.prepareGamePage}>
                    <Text>
                        Zadaj mena hracov
                    </Text>
                    {players.map((item, index) =>
                        <Input
                                key={index}
                                placeholder={'Meno'}
                                value={players[index].name || ''}
                                onStopEditing={setPlayer.bind(this, index)}
                            />
                    )}
                    <Button
                        onPress={() => navigation.navigate('Game')}
                        title="Start"
                        color="#841584"
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    contentContainerStyle: {
        flexGrow: 1
    },
    prepareGamePage: {
        padding: 40,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
});


const mapStateToProps = state => ({
    players: state.game.players,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setPlayer,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PrepareGame);

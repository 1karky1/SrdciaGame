import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ScrollView,
} from 'react-native';

class PrepareGame extends Component {
    render() {
        const {playersCount} = this.props;
        return (
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
            <View style={styles.prepareGamePage}>
                <Text>
                    Zadaj hracov {playersCount}
                </Text>
                {[...Array(playersCount)].map((item, index) =>
                    <View key={index}>
                        <Text>
                            {index + 1}. Hrac
                        </Text>
                        <TextInput placeholder={'Meno'}/>
                    </View>
                )}
                <Button
                    onPress={() => this.props.navigation.navigate('Game')}
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
    playersCount: state.settings.playersCount,
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PrepareGame);

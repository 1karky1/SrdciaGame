import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
} from 'react-native';

export default class PrepareGame extends Component {
    render() {
        return (
            <View style={styles.prepareGamePage}>
                <Text>
                    Zadaj hracov
                </Text>
                <Text>
                    Hrac 1
                </Text>
                <TextInput
                    placeholder={'Meno'}
                />
                <Text>
                    Hrac 2
                </Text>
                <TextInput
                    placeholder={'Meno'}
                />
                <Text>
                    Hrac 3
                </Text>
                <TextInput
                    placeholder={'Meno'}
                />
                <Text>
                    Hrac 4
                </Text>
                <TextInput
                    placeholder={'Meno'}
                />
                <Button
                    onPress={() => this.props.navigation.navigate('Game')}
                    title="Start"
                    color="#841584"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    prepareGamePage: {
        padding: 40,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
});

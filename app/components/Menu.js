import React, {Component} from 'react';
import {
    Button,
    StyleSheet,
    View,
    Alert
} from 'react-native';


export default class Menu extends Component {
    onPressLearnMore = (m) => {
        Alert.alert(m);
    };

    render() {
        return (
            <View style={styles.menuPage}>
                <View style={styles.menuButton}>
                    <Button
                        style={styles.menuButton}
                        onPress={() => this.props.navigation.navigate('PrepareGame')}
                        title="Start Game"
                        color="#841584"
                        accessibilityLabel=""
                    />
                </View>
                <View style={styles.menuButton}>
                    <Button
                        style={styles.menuButton}
                        onPress={this.onPressLearnMore.bind(undefined, 'save')}
                        title="Saved Games"
                        color="#841584"
                        accessibilityLabel=""
                    />
                </View>
                <View style={styles.menuButton}>
                    <Button
                        style={styles.menuButton}
                        onPress={this.onPressLearnMore.bind(undefined, 'settings')}
                        title="Settings"
                        color="#841584"
                        accessibilityLabel=""
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menuPage: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    menuButton: {
        margin: 10,
    },
});

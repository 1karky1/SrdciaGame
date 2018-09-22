import React, {Component} from 'react';
import {
    StyleSheet, Text, View, TextInput
} from 'react-native';

export default class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputText: props.value || ''
        };
    };

    render() {
        const {label, placeholder, onStopEditing} = this.props;
        return (
            <View style={styles.inputStyle}>
                <Text>
                    {label}
                </Text>
                <TextInput
                    onChangeText={text => {
                        this.setState({inputText: text})
                    }}
                    onEndEditing={e => onStopEditing(e.nativeEvent.text)}
                    placeholder={placeholder}
                    value={this.state.inputText}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputStyle: {},
});
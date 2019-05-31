import {Animated, Easing} from "react-native";

export default {
    initialRouteName: 'GameMenu',
    headerMode: 'none',
    transitionConfig : () => ({
        transitionSpec: {
            duration: 0,
            timing: Animated.timing,
            easing: Easing.step0,
        },
    })
}
import { createStackNavigator } from 'react-navigation'
import GameMenu from "../screens/GameMenu";
import CreateUsers from "../screens/CreateUsers";
import Game from "../screens/game/Game";
import configuration from "./configuration";

export default createStackNavigator({
    GameMenu: GameMenu,
    Game: Game,
    CreateUsers: CreateUsers,
}, configuration);

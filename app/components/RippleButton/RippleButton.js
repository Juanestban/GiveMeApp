import { Children } from 'react'
// import {useTapGestureHandler} from 'react-native-redash/lib/module/v1'


// Falta testear react-native (gesture-handler - reanimated - redash)
const RippleButton = ({ onPress, backgroundColor, children }) => {
    const child = Children.only(children)
    return child
}

export default RippleButton
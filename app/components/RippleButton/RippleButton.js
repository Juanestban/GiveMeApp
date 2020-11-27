import {Children} from 'react'

// Instalar react-native-gesture-handler
// Instalar react-native-reanimated
// Instalar react-native-redash
const RippleButton = ({onPress, backgroundColor, children}) => {
    const child = Children.only(children)
    return child
}

export default RippleButton
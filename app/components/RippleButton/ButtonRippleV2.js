import React from 'react'
import { Pressable } from 'react-native'

const ButtonRippleV2 = ({
    children,
    rippleColor,
    onPress,
    styleButton,
    otherProps,
    borderless,
    radius
}) => {
    return (
        <Pressable
            style={styleButton}
            onPress={onPress}
            delayLongPress={1000}
            android_ripple={{
                color: rippleColor,
                borderless,
                radius
            }}
            {...otherProps}
        >
            {children}
        </Pressable>
    )
}

export default ButtonRippleV2
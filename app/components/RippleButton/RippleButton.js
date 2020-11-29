import React, { Children, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { State, TapGestureHandler } from 'react-native-gesture-handler'
import Animated, {
    call,
    cond,
    diff,
    eq,
    greaterThan,
    onChange,
    or,
    useCode
} from 'react-native-reanimated'
import { mix, translate, useTapGestureHandler, vec, withTransition } from 'react-native-redash/lib/module/v1'

const RippleButton = ({
    onPress = () => console.log('press me'),
    backgroundColor,
    styeButtonRipple,
    children
}) => {
    const [radius, setRadius] = useState(-1)
    const child = Children.only(children)
    const { gestureHandler, state, position } = useTapGestureHandler()
    const progress = withTransition(eq(state, State.BEGAN), {duration: 2000})
    const opacity = or(greaterThan(diff(progress), 0), eq(progress, 1))
    const scale = mix(progress, .001, 1)
    useCode(() => onChange(state, [
        cond(eq(state, State.END), call([], onPress))
    ]), [onPress])

    return (
        <TapGestureHandler {...gestureHandler}>
            <Animated.View {...child.props}>
                <View
                    style={[
                        styeButtonRipple,
                        { ...StyleSheet.absoluteFillObject, overflow: 'hidden' }
                    ]}
                    onLayout={({
                        nativeEvent: { layout: { width, height } }
                    }) => setRadius(Math.sqrt(width ** 2 + height ** 2))}
                >
                    {radius !== -1 && (
                        <Animated.View style={{
                            opacity,
                            backgroundColor,
                            borderRadius: radius,
                            width: radius * 2,
                            height: radius * 2,
                            transform: [
                                ...translate(vec.create(-radius)),
                                ...translate(position),
                                { scale }
                            ]
                        }} />
                    )}
                </View>
                {child.props.children}
            </Animated.View>
        </TapGestureHandler>
    )
}

export default RippleButton
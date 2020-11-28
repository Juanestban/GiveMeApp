const Colors = {
    primaryColor: '#17202A',
    darkPrimaryColor: '#0E131A',
    secondColor: '#C5D5E8',
    darkTextColor: '#0E131A',
    whiteTextColor: '#E9E9E9',
    white: '#FFF',
    black: '#000',
}

export const ColorTheme = {
    darkTheme: {
        primary: Colors.primaryColor,
        background: Colors.primaryColor,
        card: Colors.darkPrimaryColor,
        text: Colors.whiteTextColor,
        border: Colors.darkPrimaryColor,
        notification: Colors.secondColor
    },
    lightTheme: {
        primaryColor: Colors.secondColor,
    }
}

export default Colors;
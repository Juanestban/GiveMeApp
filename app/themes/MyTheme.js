import { ColorTheme } from "../config/Colors"

// conditional rendering con dark para cambiear el color
const MyTheme = {
    dark: true,
    colors: {
        ...ColorTheme.darkTheme
    }
}

export default MyTheme
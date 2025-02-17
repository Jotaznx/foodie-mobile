import { Image, Text, View } from "react-native";
import { styles } from "./header.style.js";
import icons from "../../constants/icons.js"

function Header(props) {
    return <View style={styles.header}>
        <Image source={icons.logo} style={styles.logo}/>
        <Text style={styles.titulo}>{props.texto}</Text>
    </View>
}
export default Header;
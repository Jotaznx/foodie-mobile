import { View } from "react-native";
import { styles } from "./login.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";

function Login() {
  return (
    <View style={styles.container}>
      <Header texto="Acesse sua conta" />
      <View style={styles.containerInput}>
        <View style={styles.input}>
          <TextBox texto="E-mail" placeholder="Digite seu email" />
        </View>
        <View style={styles.input}>
          <TextBox
            texto="Senha"
            placeholder="Digite sua senha"
            isPassword={true}
          />
        </View>
      </View>
      <Button texto="Acessar" />
    </View>
  );
}

export default Login;

import { Button, Image, Text } from 'react-native';
import { styles } from './style.js';
import icons from './src/constants/icons.js'

export default function App() {
  const nome = "Vai Corinthians!";
  return (<>
      <Text style={styles.texto}>{nome}</Text>
      <Image style={styles.imagem} source={icons.remove}/>
      <Button title="Salvar dados"/>
  </> 
  );                 
};
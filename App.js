import { Text } from 'react-native';
import { styles } from './style.js';

export default function App() {
  const nome = "pintao";
  return (
      <Text style={styles.texto}>Quero {nome}</Text>
  );
};
import { useState } from 'react';
import { SafeAreaView, Text, TextInput, View, StyleSheet } from 'react-native';

export function Paso4Volumen() {
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');

  const numBase = parseFloat(base) || 0;
  const numAltura = parseFloat(altura) || 0;
  const resultado = (numBase * numAltura) / 2;

  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>Cálculo de Área (Triángulo)</Text>

      <Text style={styles.etiqueta}>Base</Text>
      <TextInput
        style={styles.campo}
        value={base}
        onChangeText={setBase}
        placeholder="Ingrese la base"
        keyboardType="numeric"
      />

      <Text style={styles.etiqueta}>Altura</Text>
      <TextInput
        style={styles.campo}
        value={altura}
        onChangeText={setAltura}
        placeholder="Ingrese la altura"
        keyboardType="numeric"
      />

      <View style={styles.preview}>
        <Text style={styles.previewTexto}>
          Área = ({numBase} * {numAltura}) / 2 = {resultado}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8', padding: 16 },
  titulo: { fontSize: 18, fontWeight: '700', color: '#1565c0', marginBottom: 20 },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 14,
    color: '#1a1a1a',
  },
  preview: {
    marginTop: 8,
    backgroundColor: '#1a1a2e',
    borderRadius: 8,
    padding: 12,
  },
  previewTexto: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: '#a8ff78',
  },
});
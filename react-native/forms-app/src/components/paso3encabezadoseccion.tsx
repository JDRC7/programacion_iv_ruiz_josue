import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Paso3EncabezadoSeccionProps {
  titulo: string;
  region: string;
}

export function Paso3EncabezadoSeccion({ titulo, region }: Paso3EncabezadoSeccionProps) {
  return (
    <View style={styles.encabezado}>
      <Text style={styles.encabezadoTitulo}>{titulo}</Text>
      <Text style={styles.encabezadoRegion}>{region}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#1565c0',
  },
  encabezadoTitulo: { fontSize: 13, fontWeight: '700', color: '#0d47a1' },
  encabezadoRegion: { fontSize: 11, color: '#546e7a' },
});
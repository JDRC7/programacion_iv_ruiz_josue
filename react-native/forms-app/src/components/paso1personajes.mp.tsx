
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import { Paso1FilaServidor } from './paso1FilaServidor';

export type Estudiante = {
  id: string;
  nombre: string;
  curso: string;
  nota: number;
  aprobado: boolean;
};

const ESTUDIANTES: Estudiante[] = [
  { id: '1', nombre: 'Juan Pérez', curso: '10mo A', nota: 9.5, aprobado: true },
  { id: '2', nombre: 'María López', curso: '10mo A', nota: 8.7, aprobado: true },
  { id: '3', nombre: 'Carlos Gómez', curso: '10mo B', nota: 5.8, aprobado: false },
  { id: '4', nombre: 'Ana Torres', curso: '10mo B', nota: 7.2, aprobado: true },
];

export function Paso1() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Sistema de Notas Escolares</Text>

      <FlatList
        data={ESTUDIANTES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Paso1FilaServidor servidor={item} />
        )}
        contentContainerStyle={styles.lista}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
    color: '#222',
  },
  lista: {
    paddingBottom: 20,
  },
});

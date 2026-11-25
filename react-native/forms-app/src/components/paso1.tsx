import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import { Paso1FilaServidor } from './paso1FilaServidor';

export type Servidor = {
  id: string;
  nombre: string;
  ip: string;
  activo: boolean;
};

export const SERVIDORES: Servidor[] = [
  { id: '1', nombre: 'Wolverine', ip: '10.0.2.16', activo: true },
  { id: '2', nombre: 'Andrew Garfield', ip: '10.0.2.11', activo: true },
  { id: '3', nombre: 'Spider-Man', ip: '10.0.3.5', activo: false },
  { id: '4', nombre: 'Deadpool', ip: '10.0.3.6', activo: true },
];

export function Paso1() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Lista de Personajes</Text>
      <FlatList
        data={SERVIDORES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaServidor servidor={item} />}
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
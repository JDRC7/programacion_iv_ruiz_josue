import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Servidor } from './paso1';

interface Paso1FilaServidorProps {
  servidor: Servidor;
}

export function Paso1FilaServidor({ servidor }: Paso1FilaServidorProps) {
  return (
    <View style={styles1.fila}>
      <View style={styles1.info}>
        <Text style={styles1.nombre}>{servidor.nombre}</Text>
        <Text style={styles1.ip}>{servidor.ip}</Text>
      </View>
      <View
        style={[
          styles1.estado,
          servidor.activo ? styles1.estadoActivo : styles1.estadoCaido
        ]}
      >
        <Text style={styles1.textoEstado}>
          {servidor.activo ? 'ACTIVO' : 'CAÍDO'}
        </Text>
      </View>
    </View>
  );
}

const styles1 = StyleSheet.create({
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 6,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  info: {
    flex: 1,
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  ip: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  estado: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: '#ffcccc',
  },
  estadoActivo: {
    backgroundColor: '#d4edda',
  },
  estadoCaido: {
    backgroundColor: '#f8d7da',
  },
  textoEstado: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
});
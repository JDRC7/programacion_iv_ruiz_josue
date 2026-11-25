
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Estudiante } from './paso1';

interface Paso1FilaServidorProps {
  servidor: Estudiante;
}

export function Paso1FilaServidor({ servidor }: Paso1FilaServidorProps) {
  return (
    <View style={styles1.fila}>
      <View style={styles1.info}>
        <Text style={styles1.nombre}>{servidor.nombre}</Text>
        <Text style={styles1.curso}>{servidor.curso}</Text>
        <Text style={styles1.nota}>Nota: {servidor.nota}/10</Text>
      </View>

      <View
        style={[
          styles1.estado,
          servidor.aprobado
            ? styles1.estadoActivo
            : styles1.estadoCaido
        ]}
      >
        <Text style={styles1.textoEstado}>
          {servidor.aprobado ? 'APROBADO' : 'REPROBADO'}
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
  curso: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  nota: {
    fontSize: 14,
    color: '#444',
    marginTop: 4,
    fontWeight: 'bold',
  },
  estado: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
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

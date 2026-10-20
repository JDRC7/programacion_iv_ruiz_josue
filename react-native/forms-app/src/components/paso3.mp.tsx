
import React from 'react';
import {
  SafeAreaView,
  Text,
  SectionList,
  StyleSheet,
} from 'react-native';

import { Paso3EncabezadoSeccion } from './paso3encabezadoseccion';
import { Paso2Separador } from './paso2separador';
import { Estudiante } from './paso1';
import { Paso1FilaServidor as FilaEstudiante } from './paso1FilaServidor';

type SeccionCurso = {
  title: string;
  paralelo: string;
  data: Estudiante[];
};

const SECCIONES: SeccionCurso[] = [
  {
    title: 'Décimo Año',
    paralelo: 'Paralelo A',
    data: [
      { id: 's1', nombre: 'Juan Pérez', curso: '10mo A', nota: 9.5, aprobado: true },
      { id: 's2', nombre: 'María López', curso: '10mo A', nota: 8.7, aprobado: true },
      { id: 's3', nombre: 'Carlos Gómez', curso: '10mo A', nota: 5.8, aprobado: false },
    ],
  },
  {
    title: 'Décimo Año',
    paralelo: 'Paralelo B',
    data: [
      { id: 's4', nombre: 'Ana Torres', curso: '10mo B', nota: 9.2, aprobado: true },
      { id: 's5', nombre: 'Pedro Sánchez', curso: '10mo B', nota: 6.2, aprobado: false },
    ],
  },
  {
    title: 'Primero de Bachillerato',
    paralelo: 'Paralelo A',
    data: [
      { id: 's6', nombre: 'Laura Martínez', curso: '1ro BGU A', nota: 8.9, aprobado: true },
      { id: 's7', nombre: 'Diego Ramírez', curso: '1ro BGU A', nota: 5.5, aprobado: false },
      { id: 's8', nombre: 'Sofía Castro', curso: '1ro BGU A', nota: 9.8, aprobado: true },
    ],
  },
];

export function Paso3() {
  return (
    <SafeAreaView style={styles3.contenedor}>
      <Text style={styles3.tituloPantalla}>
        Sistema de Notas Escolares
      </Text>

      <SectionList<Estudiante, SeccionCurso>
        sections={SECCIONES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FilaEstudiante servidor={item} />
        )}
        renderSectionHeader={({ section }) => (
          <Paso3EncabezadoSeccion
            titulo={section.title}
            region={section.paralelo}
          />
        )}
        stickySectionHeadersEnabled
        ItemSeparatorComponent={Paso2Separador}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </SafeAreaView>
  );
}

const styles3 = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  tituloPantalla: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
});

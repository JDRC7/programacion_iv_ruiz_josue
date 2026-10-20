
import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import { Paso2Separador } from './paso2separador';
import { Paso2ListaVacia } from './paso2listavacia';
import { Estudiante, ESTUDIANTES } from './paso1';
import { Paso1FilaServidor as FilaEstudiante } from './paso1FilaServidor';

const PAGINA_2: Estudiante[] = [
  {
    id: '5',
    nombre: 'Pedro Sánchez',
    curso: '10mo A',
    nota: 8.5,
    aprobado: true,
  },
  {
    id: '6',
    nombre: 'Laura Martínez',
    curso: '10mo B',
    nota: 6.2,
    aprobado: false,
  },
];

export function Paso2() {
  const [datos, setDatos] = useState<Estudiante[]>(ESTUDIANTES);
  const [refrescando, setRefrescando] = useState(false);
  const [cargandoMas, setCargandoMas] = useState(false);
  const [paginaActual, setPaginaActual] = useState(1);

  const onRefresh = useCallback(() => {
    setRefrescando(true);

    setTimeout(() => {
      setDatos(ESTUDIANTES);
      setPaginaActual(1);
      setRefrescando(false);
    }, 1000);
  }, []);

  const onEndReached = useCallback(() => {
    if (cargandoMas || paginaActual >= 2) return;

    setCargandoMas(true);

    setTimeout(() => {
      setDatos((prev) => [...prev, ...PAGINA_2]);
      setPaginaActual(2);
      setCargandoMas(false);
    }, 800);
  }, [cargandoMas, paginaActual]);

  return (
    <SafeAreaView style={styles2.contenedor}>
      <Text style={styles2.titulo}>
        Notas de Estudiantes · Página {paginaActual}
      </Text>

      <FlatList<Estudiante>
        data={datos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FilaEstudiante servidor={item} />
        )}
        ItemSeparatorComponent={Paso2Separador}
        ListEmptyComponent={Paso2ListaVacia}
        refreshing={refrescando}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.3}
        ListFooterComponent={
          cargandoMas ? (
            <ActivityIndicator
              style={{ margin: 16 }}
              color="#1565c0"
            />
          ) : <></>
        }
      />
    </SafeAreaView>
  );
}

const styles2 = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
});

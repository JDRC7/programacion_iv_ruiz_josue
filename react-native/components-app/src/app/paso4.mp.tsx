
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

// ─── Paso 4 — ScrollView y SafeAreaView ──────────────────────────────

const NOTAS_DEMO = [
  { id: '1', titulo: 'Tareas pendientes', categoria: 'Personal', fecha: '25/11/2026', progreso: 80, prioridad: 90 },
  { id: '2', titulo: 'Proyecto de programación', categoria: 'Estudios', fecha: '25/11/2026', progreso: 60, prioridad: 85 },
  { id: '3', titulo: 'Ideas para mi aplicación', categoria: 'Proyectos', fecha: '24/11/2026', progreso: 45, prioridad: 70 },
  { id: '4', titulo: 'Apuntes de React Native', categoria: 'Estudios', fecha: '24/11/2026', progreso: 90, prioridad: 60 },
  { id: '5', titulo: 'Lista de compras', categoria: 'Personal', fecha: '23/11/2026', progreso: 100, prioridad: 30 },
  { id: '6', titulo: 'Diseño de interfaz', categoria: 'Proyectos', fecha: '23/11/2026', progreso: 35, prioridad: 80 },
  { id: '7', titulo: 'Estudiar TypeScript', categoria: 'Estudios', fecha: '22/11/2026', progreso: 70, prioridad: 75 },
  { id: '8', titulo: 'Organizar documentos', categoria: 'Personal', fecha: '22/11/2026', progreso: 20, prioridad: 40 },
  { id: '9', titulo: 'Ideas de diseño', categoria: 'Proyectos', fecha: '21/11/2026', progreso: 55, prioridad: 50 },
  { id: '10', titulo: 'Resumen de clases', categoria: 'Estudios', fecha: '21/11/2026', progreso: 95, prioridad: 65 },
  { id: '11', titulo: 'Recordatorios', categoria: 'Personal', fecha: '20/11/2026', progreso: 15, prioridad: 35 },
  { id: '12', titulo: 'Planificación semanal', categoria: 'Proyectos', fecha: '20/11/2026', progreso: 50, prioridad: 80 },
]

interface BarraProgresoProps {
  porcentaje: number
  etiqueta: string
}

function BarraProgreso({ porcentaje, etiqueta }: BarraProgresoProps) {
  const color = porcentaje > 85 ? '#2e7d32'
              : porcentaje > 60 ? '#f57f17'
              : '#c62828'

  return (
    <View style={estilos4.barraFila}>
      <Text style={estilos4.barraEtiqueta}>{etiqueta}</Text>
      <View style={estilos4.barraFondo}>
        <View
          style={[
            estilos4.barraRelleno,
            {
              width: `${porcentaje}%`,
              backgroundColor: color
            }
          ]}
        />
      </View>
      <Text style={[estilos4.barraPct, { color }]}>
        {porcentaje}%
      </Text>
    </View>
  )
}

function TarjetaNota({
  titulo,
  categoria,
  fecha,
  progreso,
  prioridad
}: typeof NOTAS_DEMO[0]) {
  return (
    <View style={estilos4.nota}>
      <View style={estilos4.notaEncabezado}>
        <Text style={estilos4.notaTitulo}>{titulo}</Text>
        <Text style={estilos4.notaCategoria}>{categoria}</Text>
      </View>

      <Text style={estilos4.notaFecha}>
        Fecha de creación: {fecha}
      </Text>

      <BarraProgreso porcentaje={progreso} etiqueta="Avance" />
      <BarraProgreso porcentaje={prioridad} etiqueta="Prioridad" />
    </View>
  )
}

export function Paso4() {
  return (
    <SafeAreaView style={estilos4.safeArea}>
      <View style={estilos4.header}>
        <Text style={estilos4.headerTitulo}>Mis notas</Text>
        <Text style={estilos4.headerSub}>
          {NOTAS_DEMO.length} notas guardadas
        </Text>
      </View>

      <ScrollView
        style={estilos4.scroll}
        contentContainerStyle={estilos4.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {NOTAS_DEMO.map((nota) => (
          <TarjetaNota key={nota.id} {...nota} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

// ─── Estilos ────────────────────────────────────────────────────────

const estilos4 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0d1b2a',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1c2e40',
  },
  headerTitulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#e3f2fd',
  },
  headerSub: {
    fontSize: 12,
    color: '#78909c',
    marginTop: 2,
  },
  scroll: {
    flex: 1,
  },
  scrollContenido: {
    padding: 16,
    gap: 10,
    paddingBottom: 40,
  },
  nota: {
    backgroundColor: '#132232',
    borderRadius: 10,
    padding: 14,
    gap: 8,
    borderWidth: 1,
    borderColor: '#1c3548',
  },
  notaEncabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    gap: 8,
  },
  notaTitulo: {
    fontSize: 14,
    fontWeight: '700',
    color: '#e3f2fd',
    flex: 1,
  },
  notaCategoria: {
    fontSize: 12,
    color: '#4fc3f7',
  },
  notaFecha: {
    fontSize: 11,
    color: '#546e7a',
    marginBottom: 2,
  },
  barraFila: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  barraEtiqueta: {
    fontSize: 11,
    color: '#78909c',
    width: 55,
  },
  barraFondo: {
    flex: 1,
    height: 4,
    backgroundColor: '#1c3548',
    borderRadius: 2,
    overflow: 'hidden',
  },
  barraRelleno: {
    height: '100%',
    borderRadius: 2,
  },
  barraPct: {
    fontSize: 11,
    fontWeight: '600',
    width: 34,
    textAlign: 'right',
  },
})

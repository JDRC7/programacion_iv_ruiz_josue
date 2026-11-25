
import { StyleSheet, Text, View } from 'react-native'

// ─── Paso 1 — Props tipadas ─────────────────────────────────

interface TarjetaNotaProps {
  titulo: string
  contenido: string
  fecha: string
  categoria?: string
}

function TarjetaNota({
  titulo,
  contenido,
  fecha,
  categoria
}: TarjetaNotaProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.tituloNota}>{titulo}</Text>
      <Text style={styles.contenidoNota}>{contenido}</Text>
      <Text style={styles.fechaNota}>{fecha}</Text>
      <Text style={styles.categoriaNota}>
        {categoria ?? 'Sin categoría'}
      </Text>
    </View>
  )
}

export function Paso1() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Mis notas</Text>

      <TarjetaNota
        titulo="Tareas pendientes"
        contenido="Terminar el proyecto de programación y estudiar para el examen."
        fecha="25/11/2026"
        categoria="Estudios"
      />

      <TarjetaNota
        titulo="Ideas para el proyecto"
        contenido="Crear una aplicación sencilla para organizar actividades."
        fecha="24/11/2026"
        categoria="Proyectos"
      />

      <TarjetaNota
        titulo="Recordatorios"
        contenido="Comprar materiales y organizar los documentos."
        fecha="23/11/2026"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 12,
  },
  encabezado: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 4,
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    gap: 6,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  tituloNota: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  contenidoNota: {
    fontSize: 14,
    color: '#424242',
  },
  fechaNota: {
    fontSize: 12,
    color: '#1565c0',
  },
  categoriaNota: {
    fontSize: 12,
    color: '#757575',
  },
})

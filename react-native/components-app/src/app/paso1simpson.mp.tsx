
import { StyleSheet, Text, View } from 'react-native'

// ─── 1. Definir la interfaz para tipar las propiedades ───────────────
interface NotaProps {
  titulo: string
  cantidadPalabras: number
  categoria: string
  descripcion: string
}

// ─── 2. Componente reutilizable TarjetaNota ──────────────────────────
function TarjetaNota({
  titulo,
  cantidadPalabras,
  categoria,
  descripcion
}: NotaProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.detalle}>
        Palabras: {cantidadPalabras}
      </Text>
      <Text style={styles.detalle}>
        Categoría: {categoria}
      </Text>
      <Text style={styles.descripcion}>
        "{descripcion}"
      </Text>
    </View>
  )
}

// ─── 3. Pantalla principal que renderiza la lista ───────────────────
export default function PasoNotas() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Mis notas guardadas</Text>

      <TarjetaNota
        titulo="Ideas para mi proyecto"
        cantidadPalabras={45}
        categoria="Proyectos"
        descripcion="Desarrollar una aplicación para organizar tareas y actividades diarias."
      />

      <TarjetaNota
        titulo="Apuntes de programación"
        cantidadPalabras={80}
        categoria="Estudios"
        descripcion="Repasar los componentes, propiedades y estados de React Native."
      />

      <TarjetaNota
        titulo="Lista de pendientes"
        cantidadPalabras={30}
        categoria="Personal"
        descripcion="Organizar los horarios, terminar las tareas y preparar los materiales."
      />
    </View>
  )
}

// ─── 4. Estilos ─────────────────────────────────────────────────────
const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 12,
  },
  encabezado: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 8,
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
  titulo: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  detalle: {
    fontSize: 14,
    color: '#555555',
  },
  descripcion: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#1565c0',
    marginTop: 4,
  },
})

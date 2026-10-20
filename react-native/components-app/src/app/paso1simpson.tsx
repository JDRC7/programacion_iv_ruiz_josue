import { StyleSheet, Text, View } from 'react-native'

// ─── 1. Definir la interfaz para tipar las propiedades ───────────────
interface PersonajeProps {
  nombre: string
  edad: number
  ocupacion: string
  frase: string
}

// ─── 2. Componente reutilizable TarjetaPersonaje ─────────────────────
function TarjetaPersonaje({ nombre, edad, ocupacion, frase }: PersonajeProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.detalle}>Edad: {edad} años</Text>
      <Text style={styles.detalle}>Ocupación: {ocupacion}</Text>
      <Text style={styles.frase}>"{frase}"</Text>
    </View>
  )
}

// ─── 3. Pantalla principal que renderiza la lista ───────────────────
export default function PasoPersonajes() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Personajes de Los Simpson</Text>

      <TarjetaPersonaje
        nombre="Homer Simpson"
        edad={39}
        ocupacion="Inspector de seguridad"
        frase="¡D'oh!"
      />

      <TarjetaPersonaje
        nombre="Bart Simpson"
        edad={10}
        ocupacion="Estudiante"
        frase="¡Multiplícate por cero!"
      />

      <TarjetaPersonaje
        nombre="Lisa Simpson"
        edad={8}
        ocupacion="Estudiante y saxofonista"
        frase="Si alguien lo necesita, estaré en mi habitación"
      />
    </View>
  )
}

// ─── 4. Estilos ──────────────────────────────────────────────────────
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
  nombre: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  detalle: {
    fontSize: 14,
    color: '#555555',
  },
  frase: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#1565c0',
    marginTop: 4,
  },
})

import { ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'

// ─── Componente Card reutilizable ──────────────────────────────────
interface CardProps {
  titulo: string
  subtitulo?: string
  color?: string
  children: ReactNode
}

function Card({ titulo, subtitulo, color, children }: CardProps) {
  return (
    <View style={estilos.card}>
      {/* Color personalizado o color predeterminado */}
      <View style={[
        estilos.cardCabecera,
        { backgroundColor: color ?? '#1565c0' }
      ]}>
        <Text style={estilos.cardTitulo}>{titulo}</Text>
        {subtitulo && (
          <Text style={estilos.cardSubtitulo}>{subtitulo}</Text>
        )}
      </View>
      <View style={estilos.cardCuerpo}>{children}</View>
    </View>
  )
}

// ─── Componente FilaInfo ───────────────────────────────────────────
interface FilaInfoProps {
  etiqueta: string
  valor: string
}

function FilaInfo({ etiqueta, valor }: FilaInfoProps) {
  return (
    <View style={estilos.fila}>
      <Text style={estilos.etiqueta}>{etiqueta}</Text>
      <Text style={estilos.valor}>{valor}</Text>
    </View>
  )
}

// ─── Pantalla Principal ────────────────────────────────────────────
export function Paso3() {
  return (
    <View style={estilos.fondo}>
      <Text style={estilos.tituloPrincipal}>
        Panel de mis notas
      </Text>

      {/* Card de estadísticas de notas */}
      <Card
        titulo="Estadísticas"
        subtitulo="Resumen de tus notas"
        color="#d32f2f"
      >
        <FilaInfo etiqueta="Total de notas" valor="25" />
        <FilaInfo etiqueta="Notas favoritas" valor="8" />
        <FilaInfo etiqueta="Notas archivadas" valor="5" />
      </Card>

      {/* Card de organización */}
      <Card
        titulo="Organización"
        subtitulo="Estado de tus apuntes"
        color="#2e7d32"
      >
        <FilaInfo etiqueta="Estudios" valor="10 notas" />
        <FilaInfo etiqueta="Personal" valor="8 notas" />
        <FilaInfo etiqueta="Proyectos" valor="7 notas" />
      </Card>

      {/* FilaInfo fuera de una Card */}
      <View style={stylesContenedorSuelto.contenedorSuelto}>
        <Text style={stylesContenedorSuelto.textoTituloSuelto}>
          Estado general de la aplicación:
        </Text>
        <FilaInfo etiqueta="Sincronización" valor="Actualizada" />
      </View>
    </View>
  )
}

// ─── Estilos principales ───────────────────────────────────────────
const estilos = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 16,
  },
  tituloPrincipal: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a237e',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardCabecera: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 2,
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  cardSubtitulo: {
    fontSize: 12,
    color: '#bbdefb',
  },
  cardCuerpo: {
    padding: 12,
    gap: 8,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  etiqueta: {
    fontSize: 13,
    color: '#546e7a',
    fontWeight: '500',
  },
  valor: {
    fontSize: 13,
    color: '#1a1a1a',
    fontFamily: 'monospace',
  },
})

// ─── Estilos del contenedor independiente ─────────────────────────
const stylesContenedorSuelto = StyleSheet.create({
  contenedorSuelto: {
    backgroundColor: '#ffffff',
    padding: 14,
    borderRadius: 8,
    gap: 6,
  },
  textoTituloSuelto: {
    fontSize: 12,
    fontWeight: '600',
    color: '#757575',
  },
})

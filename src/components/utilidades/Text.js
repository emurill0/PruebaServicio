import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function TextC({ texto = 'Indefinido', font = 'PoppinsRegular', fontSize = 12, color = 'black', textAlign = 'left', }) {
    // Estilos dinámicos del texto basados en las props recibidas
    const textStyle = {
        fontFamily: font, // Si no se proporciona `font`, se usará la fuente predeterminada del sistema
        fontSize: fontSize, // Si no se proporciona `fontSize`, se usará 12
        color: color,
        textAlign: textAlign, // Si no se proporciona `color`, se usará 'black'
    };

    return (
        <Text style={[styles.titleText, textStyle]}>
            {texto} 
        </Text>
    );
}

// Estilos del componente TextC utilizando StyleSheet.create
const styles = StyleSheet.create({
    titleText: {
        padding: 0, // Relleno cero
        margin: 0, // Margen cero
    },
});

import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { TextInput, Button, StyleSheet, Text, View } from 'react-native';

const drawNumber = (num, char) => {
  // Define las representaciones de los dígitos del 0 al 9
  const digits = [
    ["###", "# #", "# #", "# #", "###"],
    ["  #", "  #", "  #", "  #", "  #"],
    ["###", "  #", "###", "#  ", "###"],
    ["###", "  #", "###", "  #", "###"],
    ["# #", "# #", "###", "  #", "  #"],
    ["###", "#  ", "###", "  #", "###"],
    ["###", "#  ", "###", "# #", "###"],
    ["###", "  #", "  #", "  #", "  #"],
    ["###", "# #", "###", "# #", "###"],
    ["###", "  #", "###", "  #", "###"]
  ];

  // Convierte el número a una cadena
  const numStr = num.toString();

  // Inicializa la representación dibujada
  let drawn = "";

  // Itera a través de cada fila de la representación del número
  for (let i = 0; i < 5; i++) {
    // Inicializa una nueva línea
    let line = "";

    for (let j = 0; j < numStr.length; j++) {
      const digit = parseInt(numStr[j]);
      const digitRepresentation = digits[digit][i];

      // Agrega un espacio entre los números
      if (j > 0) {
        line += " "; // Un espacio para separación
      }

      line += digitRepresentation;
    }

    // Agrega la línea actual a la representación dibujada
    drawn += line + "\n";
  }

  // Reemplaza el carácter especificado por el usuario
  drawn = drawn.replace(/#/g, char);

  return drawn;
};


const App = () => {
  const [numero, setNumero] = useState(0);
  const [caracter, setCaracter] = useState("#");
  const [resultado, setResultado] = useState("");

  const handleDibujarNumero = () => {
    // Llama a la función drawNumber con el número y el carácter seleccionado
    const dibujo = drawNumber(numero, caracter);
    setResultado(dibujo);
  };

  return (
    <View style={styles.container}>
      <Text>Ingrese un número del 0 al 9:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(text) => setNumero(parseInt(text))}
        value={numero.toString()}
      />

      <Text>Seleccione un carácter:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setCaracter(text)}
        value={caracter}
      />

      <Button title="Dibujar Número" onPress={handleDibujarNumero} />

      <Text>Resultado:</Text>
      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7D7FC",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    backgroundColor: "#FFFFCC",
    borderColor: "pink",
    borderWidth: 3,
    width: 100,
    marginBottom: 10
  },
  resultado: {
    fontFamily: 'monospace', // Usamos una fuente de espaciado fijo para mantener la alineación
    fontSize: 16, // Tamaño de fuente ajustado
    marginTop: 10
  }
});

export default App;

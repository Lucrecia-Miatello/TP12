import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { TextInput, Button, StyleSheet, Text, View } from 'react-native';

const drawNumber = (num, char) => {
  
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

  
  const numStr = num.toString();

  
  let drawn = "";

  
  for (let i = 0; i < 5; i++) {
    
    let line = "";

    for (let j = 0; j < numStr.length; j++) {
      const digit = parseInt(numStr[j]);
      const digitRepresentation = digits[digit][i];

      
      if (j > 0) {
        line += " "; 
      }

      line += digitRepresentation;
    }

    
    drawn += line + "\n";
  }

  
  drawn = drawn.replace(/#/g, char);

  return drawn;
};


const App = () => {
  const [numero, setNumero] = useState(0);
  const [caracter, setCaracter] = useState("#");
  const [resultado, setResultado] = useState("");

  const handleDibujarNumero = () => {
    
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
    fontFamily: 'monospace', 
    fontSize: 16, 
    marginTop: 10
  }
});

export default App;

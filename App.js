import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'


export default function App(){

  const[nome, setNome] = useState('Enrico'); //[nome, funcao pra mudar o valor]
  const[input, setInput] = useState('')


  function alteraNome(){
    setNome(input);
    setInput('') //pra ficar vazio depois
  }

  return(
    <View style={styles.container}>

      <TextInput
      placeholder="Seu nome"
      value={input}
      onChangeText={(texto) => setInput(texto) } 
      />

      <TouchableOpacity style={styles.button}
      onPress={alteraNome}>
        <Text> Alterar  nome </Text>
      </TouchableOpacity>

      <Text style={styles.texto}> {nome}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop:15
  },

  texto:{
    color: "#000",
    fontSize: 25

  },

  button:{
    height: 50,
    width: 120,
    backgroundColor:"#289",
    justifyContent: "center",
    alignItems:"center"
  }
   
})

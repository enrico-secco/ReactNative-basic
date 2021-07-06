import React, {Component} from 'react';
import { View, Text, StyleSheet, Platform, Button, Modal} from 'react-native'; //componentes



class Entrar extends Component{ 

  render(){ 


    return(
      
     <View style={{backgroundColor: '#393939', width: '100%', height: 350, borderRadius: 10, 
     alignItems: "center", justifyContent:"center"}}>
         <Text style={{color: "#fff", fontSize: 28}}>Bora que NinEnrico vai ta on HU HU HI</Text>
        <Button title="sair" onPress={this.props.fechar}/>
     </View>

    )
  }
}


export default Entrar;
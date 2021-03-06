import React, { useState } from "react";
import { styles } from "./style";
import { Image, Text, TextInput, View, StatusBar } from "react-native";

import IlustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from "../../components/buttonicon";
export const Signin = () => {
    
  return(
    <View style={styles.container}>
        <StatusBar 
            barStyle="light-content" 
            backgroundColor={"transparent"}
            translucent
        />
        <Image 
            source={IlustrationImg} 
            style={styles.image} 
            resizeMode='stretch'
        />
    
        <View style={styles.content}>
            <Text style={styles.title}>
                Organize {`\n`}
                suas jogatinas {`\n`}
                facilmente
            </Text>

            <Text style={styles.subtitle}>
                Crie grupos para jogar seus games {`\n`}
                favoritos com seus amigos
            </Text>

            <ButtonIcon 
                title="Entrar com Discord" 
            />
        </View>
    </View>

  );
}

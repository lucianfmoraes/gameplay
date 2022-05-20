import React from "react";
import {
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native';
import DiscordImg from '../../assets/discord.png';
import { theme } from "../../global/styles/theme";
import { styles } from "./style";

type Props = {
    title: string;
}

export const ButtonIcon = ({ title }: Props) => {
    return (
        <TouchableOpacity 
            style={styles.container}
            activeOpacity={theme.opacity.regular}
        >
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon} />
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
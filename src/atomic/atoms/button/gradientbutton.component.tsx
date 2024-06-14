import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import Label from '../label/label.component';
import { CommonTheme } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';

const { color } = CommonTheme

type ButtonProps = TouchableOpacityProps & {
    title: string;
    size?: 'small' | 'default';
    disabled?: boolean;
};

const GradientButton: React.FC<ButtonProps> = ({
    title,
    size = 'default',
    disabled = false,
    style,
    ...props
}) => {
    const buttonStyle = [
        styles.button,
        styles[size],
        style
    ];


    return (
        <TouchableOpacity style={buttonStyle} disabled={disabled} {...props}>
            <LinearGradient
                colors={disabled?['#D6D6D6', '#D6D6D6']:['#e35306', '#f88c1f']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
            >
                <Label variant={size === "small" ? "p2" : "h6"} style={styles.activeText}> {title}</Label>
            </LinearGradient>


        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
    },
    gradient: {
        paddingHorizontal: 5,
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        borderRadius:5
    },
    small: {
        height: 38,
    },
    default: {
        height: 48,
    },
    activeText: {
        color: '#ffffff',
        fontWeight:"700"
    },

});

export default GradientButton;


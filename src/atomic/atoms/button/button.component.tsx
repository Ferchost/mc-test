
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import Label from '../label/label.component';
import { CommonTheme } from '../../theme';

const { color } = CommonTheme

type ButtonProps = TouchableOpacityProps & {
    title: string;
    variant: 'activeWithBorder' | 'activeWithoutBorder';
    size?: 'small' | 'default';
    disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
    title,
    variant,
    size = 'default',
    disabled = false,
    style,
    ...props
}) => {
    const buttonStyle = [
        styles.button,
        styles[size],
        disabled ? styles.disabled : styles[variant],
        style
    ];

    const textStyle = [
        styles.text,
        disabled ? styles.disabledText :
            variant === 'activeWithBorder' ? styles.activeTextBorder : {},
        variant === 'activeWithoutBorder' ? styles.activeText : {},
    ];

    return (
        <TouchableOpacity style={buttonStyle} disabled={disabled} {...props}>
            
            {size === "small" ?
                <Label variant={'p2'} style={textStyle}> {title}</Label>
                :
                <Label variant={'h6'} style={textStyle}> {title}</Label>
            }
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 15,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    small: {
        height: 38,
        
    },
    default: {
        height: 48,
    },
    disabled: {
        backgroundColor: '#cccccc',
        borderColor: '#cccccc',
    },
    activeWithBorder: {
        borderColor: color.mainOrange,
        borderWidth: 2,
    },
    activeWithoutBorder: {
        backgroundColor: color.grayBlack,
    },
    text: {
        fontWeight: 'bold',
    },
    activeText: {
        color: '#ffffff',
    },
    activeTextBorder: {
        color: '#E35205',
    },
    disabledText: {
        color: '#fff',
    },
});

export default Button;

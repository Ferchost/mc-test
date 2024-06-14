import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, View } from 'react-native';
import Label from '../label/label.component';
import { CommonTheme } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import { CardDetails } from '../icons/cardDetails';
import { InactiveLock } from '../icons/inactiveLock';
import { ActiveLock } from '../icons/activeLock';
import { ControlCard } from '../icons/controlsCard';
import { CardControlICon } from '../CardControlIcon/iconCardControl.component';

const { color } = CommonTheme

type ButtonProps = TouchableOpacityProps & {
    title: string;
    type?: 'controls' | 'card-details' | 'locks';
    active?: boolean;

};

const CircularButtonWLabel: React.FC<ButtonProps> = ({
    title,
    type,
    active = false,
    style,
    ...props
}) => {
    const buttonStyle = [
        styles.button,
        style
    ];


    return (
        <TouchableOpacity style={buttonStyle} {...props}>
            {
                active ?
                    <LinearGradient
                        colors={['#e35306', '#f88c1f']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.gradient}>
                        {
                            type == "card-details" ?
                                <InactiveLock /> : type == "locks" ? <ActiveLock /> : <InactiveLock />
                        }
                    </LinearGradient>
                    :
                    <View style={styles.inactiveButton}>
   {
                            type == "card-details" ?
                                <CardControlICon /> : type == "locks" ? <InactiveLock /> : <ControlCard />
                        }
                    </View>
            }
            <Label variant={"p2"} style={styles.activeText}> {title}</Label>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 112,
        height: 78,
    },
    gradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 99,
        width: 52,
        height: 52,
    },
    inactiveButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 99,
        borderWidth: 1,
        borderColor: color.mainOrange,
        width: 52,
        height: 52,
    },
    activeText: {
        color: color.grayBlack,
        marginTop: 15
    },

});

export default CircularButtonWLabel;


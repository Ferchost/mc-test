import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, Touchable, TouchableOpacity } from 'react-native';
import Label from '../label/label.component';
import { CommonTheme } from "../../theme/common.theme"
import GradientButton from '../button/gradientbutton.component';
import LinearGradient from 'react-native-linear-gradient';
import { Close } from '../icons/close';

const color = CommonTheme.color
interface IModalAllSetProps {
    allSetModalVisible: boolean,
    setAllSetModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    onContinue: () => void
}
const ModalAllSet = ({ allSetModalVisible, setAllSetModalVisible, onContinue }: IModalAllSetProps) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={allSetModalVisible}>

                <View style={styles.centeredView}>

                    <View style={styles.modalView}>
                        <LinearGradient
                            colors={['#e35306', '#f88c1f']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{ position: 'relative', height: 84, width: 84, backgroundColor: "#fff", borderRadius: 99, borderWidth: 6, borderColor: "#fff", top: -80, justifyContent: 'center', alignItems: 'center' }}
                        >
                            <Image source={require('../../../assets/images/circleCheck.png')} style={{ height: 40, width: 40, resizeMode: 'contain' }} />
                        </LinearGradient>

                        <View style={{ marginTop: -120, alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => setAllSetModalVisible(false)} style={{ position: 'absolute', right: -40, top: -70 }}>
                                <Close />
                            </TouchableOpacity>
                            <Label variant={'h4'} style={{ color: color.grayBlack }} >
                                All set!
                            </Label>
                            <Label variant={'h6'} style={{ color: color.gray800, marginTop: 15 }} >
                                Enjoy your digital journey.
                            </Label>
                        </View>

                        <GradientButton title={'View Dashboard'} onPress={onContinue} />
                    </View>

                </View>

            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        height: 340,
        width: 327,
        margin: 20,
        backgroundColor: '#fff',
        borderRadius: 9,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: 'space-between'
    },

});

export default ModalAllSet;
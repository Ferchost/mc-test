import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image } from 'react-native';
import Label from '../label/label.component';
interface IModalFaceIdProps {
    FaceIdModalVisible: boolean
}
const ModalFaceId = ({ FaceIdModalVisible }: IModalFaceIdProps) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={FaceIdModalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image source={require('../../../assets/images/FaceId.png')} style={{height:80, width:80, resizeMode:'contain'}}  />
                        <Label variant={'p1'} style={{ color: "#fff", marginTop:15 }} >
                            Face ID
                        </Label>
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
        height: 155,
        width: 155,
        margin: 20,
        backgroundColor: 'rgba(51, 51, 51, 0.6)',
        borderRadius: 8,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

});

export default ModalFaceId;
import React from 'react';
import { Modal, StyleSheet, View, Image } from 'react-native';
import Label from '../label/label.component';
interface IModalConnectedProps {
    connectedModalVisible: boolean
}
const ModalConnected = ({ connectedModalVisible }: IModalConnectedProps) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={connectedModalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image source={require('../../../assets/images/link-m.png')} style={{height:80, width:80, resizeMode:'contain'}}  />
                        <Label variant={'h6'} style={{ color: "#fff", marginTop:15 }} >
                            Connected
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
        height: 188,
        width: 188,
        margin: 20,
        backgroundColor: 'rgba(51, 51, 51, 0.6)',
        borderRadius: 4,
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
    },

});

export default ModalConnected;
import { ChevronLeft } from "../../atoms/icons/chevronLeft";
import { Close } from "../../atoms/icons/close";
import Label from "../../atoms/label/label.component";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

interface IHeader {
    title: string
    cornerAction?: () => any,
    closeButton?: boolean,
    backButton?: boolean

}const CustomHeader = ({ title, cornerAction, closeButton, backButton }: IHeader) => {
    return (
        <LinearGradient
            colors={['#e35306', '#f88c1f']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.header}
        >
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', height: 35, paddingHorizontal: 20, alignItems: 'center' }}>

                <TouchableOpacity onPress={cornerAction} style={{ height: 35, width: '5%', alignItems: 'center', justifyContent: 'center' }}>
                    {
                        closeButton && <Close color='#fff' />
                    }
                    {
                        backButton && <ChevronLeft />
                    }
                </TouchableOpacity>
                <Label style={styles.headerTitle} variant={'h6'}>{title}</Label>
                <View style={{ height: 50, width: '5%' }} />
            </View>
        </LinearGradient>
    );
};
const styles = StyleSheet.create({
    header: {
        height: 100,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    headerTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700',
    },
});

export default CustomHeader
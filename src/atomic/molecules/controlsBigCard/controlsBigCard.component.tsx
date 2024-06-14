import { View, Text, StyleSheet, Alert, Image, TouchableOpacity } from "react-native"
import Button from "../../atoms/button/button.component"
import Label from "../../atoms/label/label.component"
import TextInput from "../../atoms/textInput/textInput.component"
import { CommonTheme } from "../../theme/common.theme"
import { ChevronRight } from "../../atoms/icons/chevronRight"

const color = CommonTheme.color
interface IControlsCardProp {
    item: ControlsGrid;
}
export interface ControlsGrid {
    title: string,
    icon: string
}

const ControlsBigCard = ({ item }: IControlsCardProp) => {
    const localImages: any = {
        cardPin: require('../../../assets/images/controlsIcons/cardPin.png'),
        bell: require('../../../assets/images/controlsIcons/bell.png'),
        card: require('../../../assets/images/controlsIcons/card.png'),
        arrows: require('../../../assets/images/controlsIcons/arrows.png'),
    };


    return (
        <TouchableOpacity style={styles.gridItem}>
            <Image source={localImages[item?.icon]} style={styles.ControlsLogo} />
            <Label style={styles.itemText} variant={'p1'}>{item?.title}</Label>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    gridItem: {
        height: 92,
        width: 156,
        marginVertical: 8,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: color.mainOrange,
        borderRadius: 4,
        backgroundColor: '#fff'
    },
    itemText: {
        marginTop: 8,
        color: color.mainOrange,
        textAlign: 'center',
    },
    ControlsLogo: { height: 20, width: 20, alignSelf: 'center', resizeMode:'contain'}
});

export default ControlsBigCard
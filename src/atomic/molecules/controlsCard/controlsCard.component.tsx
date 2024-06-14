import { View, StyleSheet, Image } from "react-native"
import Label from "../../atoms/label/label.component"
import { CommonTheme } from "../../theme/common.theme"
import { ChevronRight } from "../../atoms/icons/chevronRight"
import { TouchableOpacity } from "react-native-gesture-handler"

const color = CommonTheme.color
interface IControlsCardProp {
    item: Controls;
}
export interface Controls {
    title: string,
    status: string | number,
    icon: string
}

const ControlsCard = ({ item }: IControlsCardProp) => {
    const localImages: any = {
        faceId: require('../../../assets/images/controlsIcons/faceId.png'),
        wallet: require('../../../assets/images/controlsIcons/wallet.png'),
        recurring: require('../../../assets/images/controlsIcons/recurring.png'),
        leaves: require('../../../assets/images/controlsIcons/leaves.png'),
        link: require('../../../assets/images/controlsIcons/link.png'),
        addUser: require('../../../assets/images/controlsIcons/addUser.png'),
        warning: require('../../../assets/images/controlsIcons/warning.png'),
        globe: require('../../../assets/images/controlsIcons/globe.png'),
        contactless: require('../../../assets/images/controlsIcons/contactless.png'),
        score: require('../../../assets/images/controlsIcons/score.png'),


    };


    return (
        <TouchableOpacity style={styles.container} >
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                <Image source={localImages[item?.icon]} style={styles.ControlsLogo} />
                <View style={{ marginLeft: 15 }}>
                    <Label variant={"p1"}>
                        {item?.title}
                    </Label>
                </View>
            </View>
            <View style={{ flexDirection:'row', justifyContent:'center' }}>
                <Label style={{ marginRight:10 }} variant={"p2"}>
                    {item?.status}
                </Label>
               <ChevronRight/>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        justifyContent: "space-between",
        alignItems: 'center',
        height: 73,
        width: '100%',
        backgroundColor: "#fff",
        borderBottomWidth: 2,
        flexDirection: 'row',
        borderBottomColor: color.graySuperLight
    },
    ControlsLogo: { height: 24, width: 24, alignSelf: 'center' }
});

export default ControlsCard
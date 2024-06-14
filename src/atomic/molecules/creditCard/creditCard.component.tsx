import { ActiveLock } from "../../atoms/icons/activeLock";
import { InactiveLock } from "../../atoms/icons/inactiveLock";
import Label from "../../atoms/label/label.component";
import { Image, ImageSourcePropType, View } from "react-native"


interface ICreditCard {
    id: number,
    name: string,
    type: string,
    expMont: string,
    expYear: string,
    cvc: number,
    cardNumber: string

}
type type = 'orangeCard' | 'whiteCard';

type LocalImagesType = {
    [key in type]: ImageSourcePropType;
};
const CreditCard = ({ item, isLocked }: any) => {
    const localImages: LocalImagesType | any = {
        orangeCard: require('../../../assets/images/orangeCard.png'),
        whiteCard: require('../../../assets/images/whiteCard.png'),

    };
    return (
        <View style={{ width: 260, height: 160, marginVertical: 15, marginLeft:14 }}>
            <Image source={localImages[item?.type]} style={{ resizeMode: 'cover', borderRadius: 8, height: '100%', width: '100%' }} />
            <Label style={{ position: 'absolute', bottom: 25, left: 20, color: (item?.type == "whiteCard" ? "black" : 'white') }} variant={"small"}>{item?.name}</Label>

            {
                isLocked && <View style={{ width: 260, height: 160, position: 'absolute', backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 12, alignItems: 'center' }}>
                    <View style={{ height: 18 }} />
                    <ActiveLock />
                    <Label style={{ color: 'white', alignSelf: 'center', marginTop: 10 }} variant={"small"}>Your card has been temporarily locked</Label>
                </View>
            }
        </View>
    )
}
export default CreditCard
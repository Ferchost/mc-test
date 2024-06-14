import { ActiveLock } from "../../atoms/icons/activeLock";
import Label from "../../atoms/label/label.component";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native"


export interface ICreditCard {
    id: number,
    name: string,
    type: string,
    expMont: string,
    expYear: string,
    cvc: number,
    cardNumber: string

}

interface ICreditCardProps {
    item: ICreditCard,
    isLocked: boolean
}
type type = 'orangeCard' | 'whiteCard';

type LocalImagesType = {
    [key in type]: ImageSourcePropType;
};
const CreditCard = ({ item, isLocked }: ICreditCardProps) => {
    const localImages: LocalImagesType | any = {
        orangeCard: require('../../../assets/images/orangeCard.png'),
        whiteCard: require('../../../assets/images/whiteCard.png'),

    };
    return (
        <View style={style.container}>
            <Image source={localImages[item?.type]} style={style.image} />
            <Label style={{ position: 'absolute', bottom: 25, left: 20, color: (item?.type == "whiteCard" ? "black" : 'white') }} variant={"small"}>{item?.name}</Label>

            {
                isLocked && <View style={style.blockedCover}>
                    <View style={{ height: 18 }} />
                    <ActiveLock />
                    <Label style={{ color: 'white', alignSelf: 'center', marginTop: 10 }} variant={"small"}>Your card has been temporarily locked</Label>
                </View>
            }
        </View>
    )
}

const style = StyleSheet.create({
    container:{ width: 260, height: 160, marginVertical: 15, marginLeft: 14 },
    image:{ resizeMode: 'cover', borderRadius: 8, height: '100%', width: '100%' },
    blockedCover:{ width: 260, height: 160, position: 'absolute', backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 12, alignItems: 'center' }
})
export default CreditCard
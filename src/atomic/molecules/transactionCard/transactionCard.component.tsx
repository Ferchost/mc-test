import { View, StyleSheet, Image } from "react-native"
import Label from "../../atoms/label/label.component"
import { CommonTheme } from "../../theme/common.theme"

const color = CommonTheme.color
interface ITransactionCardProp {
    item: Transaction;
}
export interface Transaction {
    id: number;
    name: string;
    logo: string;
    date: string;
    time: string;
    amount: number;
    pointsearned: string;
}

const TransactionCard = ({ item }: ITransactionCardProp) => {
    const localImages: any = {
        Brand4: require('../../../assets/images/Brand4.png'),
        Brand5: require('../../../assets/images/Brand5.png'),
        Brand3: require('../../../assets/images/Brand3.png'),
    };


    return (
        <View style={styles.container} >
            <View style={{ flexDirection: 'row', justifyContent:'center', alignItems:'center'}} >
                <Image source={localImages[item?.logo]} style={styles.transactionLogo} />
                <View style={{marginLeft:15}}>
                    <Label variant={"p1"}>
                        {item?.name}
                    </Label>
                    <Label variant={"p2"} style={{ color: color.gray400,marginTop:5  }}>
                        {item?.date} {item?.time}
                    </Label>
                </View>
            </View>
            <View>
                <Label variant={"p1"}>
                    ${item?.amount}
                </Label>
                <Label variant={"p2"} style={{ color: color.accentLink, marginTop:5 }}>
                    {item?.pointsearned}
                </Label>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        justifyContent: "space-between",
        alignItems: 'center',
        height: 74,
        width: '100%',
        backgroundColor: "#fff",
        borderBottomWidth: 2,
        flexDirection: 'row',
        borderBottomColor: color.graySuperLight
    },
    transactionLogo: { height: 40, width: 40, alignSelf: 'center' }
});

export default TransactionCard
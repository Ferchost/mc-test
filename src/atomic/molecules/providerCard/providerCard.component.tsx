import { View, StyleSheet, Image } from "react-native"
import Button from "../../atoms/button/button.component"
import { CommonTheme } from "../../theme/common.theme"
import GradientButton from "../../atoms/button/gradientbutton.component"

const color = CommonTheme.color
interface IProviderCardProp {
    item: any; 
    setSelectedProvider: (provider: string | null) => void;
    isConnected: boolean;
  } 

const ProviderCard = ({ item, setSelectedProvider, isConnected }: IProviderCardProp) => {
    const localImages: any = {
        Brand1: require('../../../assets/images/Brand1.png'),
        Brand6: require('../../../assets/images/Brand6.png'),
        Brand2: require('../../../assets/images/Brand2.png'),
        Brand3: require('../../../assets/images/Brand3.png'),
    };


    return (
        <View style={isConnected ? styles.containerSelected : styles.container} >
            <Image source={localImages[item?.item?.logo]} style={styles.providerLogo} />
            {
                !isConnected ? <Button style={{ width: "100%" }} size="small" title={'Connect'} variant={'activeWithBorder'} onPress={() => setSelectedProvider(item?.item)} />
                    :
                    <GradientButton style={{ width: "100%" }}  size="small" title={'Connected'}  />
            }

            {
                isConnected && <Image source={require('../../../assets/images/check.png')} style={{ height: 20, width: 20,  borderRadius: 99, position: 'absolute', top: 5, right: 5 }} />
                
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        margin:10,
        paddingHorizontal: 25,
        justifyContent: "space-around",
        alignItems: 'center',
        height: 178,
        width: 156,
        borderRadius: 7,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    containerSelected: {
        flex:1,
        margin:10,
        paddingHorizontal: 25,
        justifyContent: "space-around",
        alignItems: 'center',
        height: 178,
        width: 156,
        borderRadius: 7,
        backgroundColor: "#fff",
        borderWidth: 4,
        borderColor: color.mainOrange

    },
    providerLogo: { height: 72, width: 72, alignSelf: 'center' }
});

export default ProviderCard
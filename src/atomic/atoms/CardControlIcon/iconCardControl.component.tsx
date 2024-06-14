import { Image, View } from "react-native"



export const CardControlICon = () => {
    return (
        <View style={{ height: 32, width: 32, alignItems:'center', justifyContent:'center' }}>
            <Image source={require('../../../assets/images/cardControl.png')} style={{resizeMode:'cover', width:'100%', height:'100%'}} />
        </View>

    )
}



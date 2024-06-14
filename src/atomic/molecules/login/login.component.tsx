import { BottomSheetTextInput } from "@gorhom/bottom-sheet"
import { View, Text, StyleSheet, Alert, Image, ImageSourcePropType } from "react-native"
import Button from "../../atoms/button/button.component"
import Label from "../../atoms/label/label.component"
import TextInput from "../../atoms/textInput/textInput.component"
import { CommonTheme } from "../../theme/common.theme"
import { IItem } from "@app/scenes/onboarding.dashboard.screen"
import { useState } from "react"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Close } from "../../../atomic/atoms/icons/close"
const color = CommonTheme

interface ILoginProps {
    onClose: () => void,
    onContinue: () => void,
    item: IItem
}
type BrandNames = 'Brand1' | 'Brand2' | 'Brand3' | 'Brand6';

type LocalImagesType = {
    [key in BrandNames]: ImageSourcePropType;
};

const LoginBottomSheet = ({ onClose, onContinue, item }: ILoginProps) => {
    const [mail, setMail] = useState<string>("a")
    const [password, setPassword] = useState<string>("")

    const localImages: LocalImagesType | any = {
        Brand1: require('../../../assets/images/Brand1.png'),
        Brand6: require('../../../assets/images/Brand6.png'),
        Brand2: require('../../../assets/images/Brand2.png'),
        Brand3: require('../../../assets/images/Brand3.png'),
    };
    return (
        <>

            <TouchableOpacity onPress={() => onClose()} style={styles.closeButton}>
                <Close />
            </TouchableOpacity>

            <View style={styles.container} >

                <Image source={localImages[item?.logo]} style={styles.providerLogo} />
                <Label style={{ marginTop: 30, marginBottom: 25 }} variant={"h5"}>Connect {item?.name}</Label>
                <View style={{ height: 5 }} />
                <TextInput onChangeText={(t) => setMail(t)} labelText={"User Name"} placeHolderText={"Your email"} />
                <TextInput onChangeText={(t) => setPassword(t)} labelText={"Password"} placeHolderText={"Your password"} isPassword />
                <Label style={{ marginTop: 15, marginBottom: 40, textAlign: 'center' }} variant={"small"}>By clicking the button below, you agree to the Terms and Conditions for connecting your Spotify account.</Label>
                <Button style={{ width: "100%" }} disabled={mail == "" || password == ""} title={'Connect'} variant={'activeWithoutBorder'} onPress={onContinue} />

            </View>
        </>

    )
}
const styles = StyleSheet.create({
    container: { paddingHorizontal: 20, justifyContent: "center", alignItems: 'center' },
    providerLogo: { height: 80, width: 80, marginTop: -20, alignSelf: 'center' },
    closeButton: { position: 'relative', height: 24, width: 24, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end', marginTop: 15, marginRight: 15 }
});

export default LoginBottomSheet
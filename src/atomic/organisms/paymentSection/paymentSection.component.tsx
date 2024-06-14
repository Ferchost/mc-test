import { StyleSheet, View } from "react-native";
import Label from "../../atoms/label/label.component";
import { CommonTheme } from "../../theme/common.theme"
import Button from "../../atoms/button/button.component";

const color = CommonTheme.color

interface IPaymentSectionProps {
  limit?: number,
  actualDebt?: number,
  available?: number
}

const PaymenteSection = ({ limit, actualDebt, available }: IPaymentSectionProps) => {

  return (
    <View style={style.container}>
      <Label style={{ fontWeight: '600', color: color.mainOrange }} variant={"h6"}>
        Payment Due in 5 Days
      </Label>


      <View style={style.textContainer}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Label style={{ color: color.gray800 }} variant={"p2"}>
            Statement Balance
          </Label>
          <Label style={{ color: color.grayBlack, marginTop: 5 }} variant={"h5"}>
            $600.00
          </Label>
        </View>
        <View style={{ height: 40, width: 1, backgroundColor: color.gray100 }} />
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Label style={{ color: color.gray800 }} variant={"p2"}>
            Minimum Payment
          </Label>
          <Label style={{ color: color.grayBlack, marginTop: 5 }} variant={"h5"}>
            $60.00
          </Label>
        </View>
      </View>
      <Button title={"Make a payment"} variant={"activeWithBorder"} style={{ width: '100%', marginTop: 25 }} />
    </View>
  )
}

const style = StyleSheet.create({
  container: { width: "100%", marginTop: 15, alignSelf: 'center', justifyContent: 'center', height: 218, backgroundColor: '#fff', alignItems: 'center', padding: 20 },
  textContainer: { width: '100%', marginTop: 25, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },

})

export default PaymenteSection
import { View } from "react-native";
import CircularButtonWLabel from "../../atoms/button/circularButtonWithLabel.component";
import Label from "../../atoms/label/label.component";
import ProgressBar from "../../atoms/progressBar/progressBar.component";


const BalanceSection = ({ limit, actualDebt, available }: any) => {

  return (
    <View style={{ width: "100%", marginTop: 15, alignSelf: 'center', justifyContent: 'center', height: 206, backgroundColor: '#fff', alignItems: 'center', padding: 20 }}>
      <Label style={{ fontWeight: '600' }} variant={"h3"}>
        ${actualDebt}1,000.00
      </Label>
      <Label style={{ marginTop: 5, marginBottom: 15 }} variant={"p2"}>
        Current Balance
      </Label>
      <ProgressBar max={10000} current={1000} />

      <View style={{ width: '100%', height: 22, marginTop: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Label variant={"p2"}>
          Available Credit:
        </Label>
        <Label variant={"p2"}>
          ${available}9,000,00
        </Label>
      </View>
      <View style={{ width: '100%', height: 22, marginTop: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Label variant={"p2"}>
          Total Credit Limit:
        </Label>
        <Label variant={"p2"}>
          ${limit}10,000,00
        </Label>
      </View>

    </View>
  )
}

export default BalanceSection
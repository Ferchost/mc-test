import { View } from "react-native";
import Label from "../../atoms/label/label.component";
import { CommonTheme } from "../../theme/common.theme"
import TransactionCard, { Transaction } from "../../molecules/transactionCard/transactionCard.component";
import { ChevronRight } from "../../atoms/icons/chevronRight";
const customData = require('../../../data/recentTransactions.json');

const color = CommonTheme.color


const RecentTransactionsSection = ({ limit, actualDebt, available }: any) => {

  return (
    <View style={{ width: "100%", marginTop: 15, alignSelf: 'center', justifyContent: 'center', height: 266, alignItems: 'center', }}>
      <View style={{ height: 44, backgroundColor: color.gray100, width: '100%', paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
        <Label style={{ color: color.grayBlack }} variant={"p2"}>
          Recent Transactions
        </Label>
        <View style={{ flexDirection: 'row', alignItems:'center' }}>
          <Label style={{ color: color.grayBlack, marginRight:12 }} variant={"p2"}>
            View All
          </Label>
          <ChevronRight />
        </View>
      </View>
      <View style={{ height: 222, backgroundColor: "#ffffff", width: '100%' }} >

        {
          customData.map((item: Transaction) => {
            return <TransactionCard key={item.id} item={item} />
          })
        }

      </View>





    </View>
  )
}

export default RecentTransactionsSection
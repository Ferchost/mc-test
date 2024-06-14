import { View } from "react-native";
import CircularButtonWLabel from "../../atoms/button/circularButtonWithLabel.component";


const MainActionsButtons = ({ action1, action2, action3, cardBlocked }: any) => {

    return (
        <View style={{ width: "100%", flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between',height: 140, backgroundColor:'#fff', alignItems:'center', padding:20, borderTopWidth:1 }}>
          <CircularButtonWLabel  onPress={()=>action1()} type="controls" title={"Controls"}/>
          <CircularButtonWLabel  onPress={()=>action2()}  active={cardBlocked} type="locks" title={"Lock Card"}/>
          <CircularButtonWLabel  onPress={()=>action3()}  type="card-details" title={"Card Details"}/>

        </View>
    )
}

export default MainActionsButtons
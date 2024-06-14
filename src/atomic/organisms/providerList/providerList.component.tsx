import ProviderCard from "../../molecules/providerCard/providerCard.component";
import { View, FlatList } from "react-native";


const ProviderList = ({ data, setSelectedProvider, connectedProvider }: any) => {

    return (
        <View style={{ width: "100%", marginTop: 35, flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between' }}>
            <FlatList
                data={data}
                renderItem={(item) => <ProviderCard setSelectedProvider={setSelectedProvider} isConnected={connectedProvider?.name === item?.item?.name} item={item} />}
                numColumns={2}
                ItemSeparatorComponent={() => <View style={{}} />}
            />
        </View>
    )
}

export default ProviderList
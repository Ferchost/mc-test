import { IItem } from "../../../app/scenes/onboarding.dashboard.screen";
import ProviderCard from "../../molecules/providerCard/providerCard.component";
import { View, FlatList, StyleSheet } from "react-native";

interface IProviderListProps {
    data: IItem[],
    setSelectedProvider: any,
    connectedProvider: IItem
}

const ProviderList = ({ data, setSelectedProvider, connectedProvider }: IProviderListProps) => {

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={(item) => <ProviderCard setSelectedProvider={setSelectedProvider} isConnected={connectedProvider?.name === item?.item?.name} item={item} />}
                numColumns={2}
                ItemSeparatorComponent={() => <View style={{}} />}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: { width: "100%", marginTop: 35, flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between' }
})


export default ProviderList
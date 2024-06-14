import React, { FC, Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Alert, StatusBar, StyleSheet, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useTheme } from 'styled-components/native';
import { DashboardRoutes } from './dashboard.stack';
import Label from '../../atomic/atoms/label/label.component';
import BottomSheet, { BottomSheetBackdrop, BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import LoginBottomSheet from '../../atomic/molecules/login/login.component';
import ProviderList from '../../atomic/organisms/providerList/providerList.component';
import Button from '../../atomic/atoms/button/button.component';
import GradientButton from '../../atomic/atoms/button/gradientbutton.component';
import ModalConnected from '../../atomic/atoms/modalConnect/modalConnect.component';
import ModalAllSet from '../../atomic/atoms/modalAllSet/modalAllSet.component';
const customData = require('../../data/serviceProviders.json');

type ScreenProps = StackScreenProps<DashboardRoutes, 'Onboarding'>;
export interface IItem {
  id: number,
  name: string,
  logo: string,
  barColor: string
}


const OnboardingDashboardScreen: FC<ScreenProps> = ({ navigation }) => {
  const [selectedProvider, setSelectedProvider] = useState<IItem>({
    id: 0,
    name: "",
    logo: "",
    barColor: "#fff"
  })

  const [connectedProvider, setConnectedProvider] = useState<IItem>({
    id: 0,
    name: "",
    logo: "",
    barColor: "#fff"
  })
  const [connectedModalVisible, setConnectedModalVisible] = useState(false)
  const [allSetModalVisible, setAllSetModalVisible] = useState(false)

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['1%', '73%'], []);
  
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={1}
      />
    ),
    []
  );

  useEffect(() => {
    if (selectedProvider.name !== "") {
      bottomSheetRef.current?.snapToIndex(1)
    }
  }, [selectedProvider])

  const handleConnect = () => {
    setTimeout(() => {
      setConnectedModalVisible(true)
      setConnectedProvider(selectedProvider)
    }, 1500);
    setTimeout(() => {
      bottomSheetRef.current?.forceClose()
      setConnectedModalVisible(false)
    }, 2000);
  }

  const handleContinue = () => {
    setAllSetModalVisible(true)
  }
  const handleCloseModal = () => {
    bottomSheetRef.current?.forceClose()
    setSelectedProvider({
      id: 0,
      name: "",
      logo: "",
      barColor: "#fff"
    })
  }

  const handleNavigate = () => {
    navigation.reset({
      index: 0,
      routes: [
        { name: 'Cards' },
      ],
    })
    setAllSetModalVisible(false)
  }

  const theme = useTheme();
  return (
    <Fragment>

      <StatusBar
        animated={true}
        translucent={true}
        showHideTransition="fade"
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <View style={{ paddingHorizontal: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: "#fff", width: "100%", height: "100%", }} >
        <Label style={{ marginTop: 0 }} variant={'h5'}>
          Connect service providers
        </Label>
        <Label style={{ marginTop: 25, textAlign: 'center', width: '90%' }} variant={'p1'}>
          Select accounts you have that you would like to update with your new credit card
        </Label>
        <ProviderList data={customData} setSelectedProvider={setSelectedProvider} selectedProvider={selectedProvider} connectedProvider={connectedProvider} setConnectedProvider={setConnectedProvider} />
        <GradientButton style={{ width: "100%", marginTop: 45 }} title={'Continue'} disabled={connectedProvider.name == ""} onPress={() => handleContinue()} />
        <Button style={{ width: "100%", marginTop: 15 }} title={'Skip for now'} variant={'activeWithBorder'} onPress={() => Alert.alert("action no ready")} />
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        keyboardBehavior="interactive"
        handleIndicatorStyle={{ display: "none" }}
        handleComponent={() => (<View style={{ height: 10, width: "100%", backgroundColor: selectedProvider?.barColor }} />)}
        backdropComponent={renderBackdrop}
      >
        <LoginBottomSheet onContinue={() => handleConnect()} onClose={() => handleCloseModal()} item={selectedProvider} />
      </BottomSheet>
      <ModalConnected connectedModalVisible={connectedModalVisible} />
      <ModalAllSet allSetModalVisible={allSetModalVisible} setAllSetModalVisible={setAllSetModalVisible} onContinue={() => handleNavigate()} />
    </Fragment>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    marginTop: 8,
    height: 44,
    marginBottom: 10,
    borderRadius: 7,
    fontSize: 16,
    lineHeight: 20,
    padding: 8,
    backgroundColor: 'rgba(151, 151, 151, 0.25)',
  },
});

export default OnboardingDashboardScreen;

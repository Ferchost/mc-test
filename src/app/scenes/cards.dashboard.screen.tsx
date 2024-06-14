import { StackScreenProps } from '@react-navigation/stack';
import React, { FC, Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CustomHeader, DashboardRoutes } from './dashboard.stack';
import { Animated, Dimensions, Image, Modal, ScrollView, Text, View } from 'react-native';
import MainActionsButtons from '../../atomic/organisms/mainActionsButtons/mainActionButtons.component';
import BalanceSection from '../../atomic/organisms/balanceSection/balanceSection.component';
import PaymenteSection from '../../atomic/organisms/paymentSection/paymentSection.component';
import RecentTransactionsSection from '../../atomic/organisms/recentTransactions/recentTransactions.component';
import Label from "../../atomic/atoms/label/label.component";
import { CommonTheme } from "../../atomic/theme/common.theme"
import Button from '../../atomic/atoms/button/button.component';
import Carousel from 'react-native-reanimated-carousel';
import CreditCard from '../../atomic/molecules/creditCard/creditCard.component';
import ModalFaceId from '../../atomic/atoms/modalFaceId/modalFaceId.component';
const customData = require('../../data/userCards.json');

const color = CommonTheme.color
type ScreenProps = StackScreenProps<DashboardRoutes, 'Cards'>;
const { width, height } = Dimensions.get('window');


const CardsScreen: FC<ScreenProps | any> = ({ navigation }) => {
    const [carouselIndex, setCarouselIndex] = useState(0)
    const [expanded, setExpanded] = useState(false);
    const [blockedCards, setBlockedCards] = useState(false);
    const [faceID, setFaceIRequest] = useState(false);


    const heightAnim = useRef(new Animated.Value(120)).current;

    const handleSnapToItem = (index: number) => {
        setCarouselIndex(index);
    };
    const handleBlockCards = () => {
        setFaceIRequest(true)
        setTimeout(() => {
            setBlockedCards(!blockedCards);
            setFaceIRequest(false)
        }, 1000);
    };
    const toggleHeight = () => {
        !expanded && setFaceIRequest(true)
        setTimeout(() => {
            Animated.timing(heightAnim, {
                toValue: expanded ? 120 : 566,
                duration: 300,
                useNativeDriver: false,
            }).start();
            setExpanded(!expanded);
            !expanded && setFaceIRequest(false)

        }, expanded ? 1 : 1000);

    };

    return (
        <Fragment>
            <CustomHeader title={'Cards'} route={''} closeButton={expanded} cornerAction={toggleHeight} />
            <ScrollView>
                <Animated.View style={{ width: '100%', alignItems: 'center', paddingHorizontal: 20, height: heightAnim, backgroundColor: color.graySuperLight }}>

                    <Label style={{ marginTop: 25 }} variant={"p1"}>
                        Mastercard <Text style={{ fontWeight: 'bold', fontSize: 18 }}>••••</Text> {customData[carouselIndex].cardNumber.slice(-4)}
                    </Label>
                    <Carousel
                        data={customData}
                        width={290}
                        height={180}
                        renderItem={({ item }) => <CreditCard isLocked={blockedCards} item={item} />}
                        onSnapToItem={handleSnapToItem}
                        pagingEnabled={true}
                        autoPlay={false}
                        scrollAnimationDuration={1000}
                        style={{ width: '198%', alignContent: 'center', alignSelf: 'center', justifyContent: 'center', marginTop: 12 }}
                    />
                    {
                        expanded && <>

                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 22 }}>
                                <Image source={require('../../assets/images/AppleWallet.png')} style={{ height: 42, width: 136, marginBottom: 20, marginTop: 10 }} />
                                <Label style={{ color: color.mainOrange }} variant={"p1"}>
                                    Card Number
                                </Label>
                                <Label style={{ color: color.grayBlack, marginTop: 5 }} variant={"h5"}>
                                    {customData[carouselIndex].cardNumber}
                                </Label>
                            </View>
                            <View style={{ height: 1, width: "100%", backgroundColor: color.gray400, marginVertical: 25 }} />

                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Label style={{ color: color.mainOrange }} variant={"p1"}>
                                        Expiration Date
                                    </Label>
                                    <Label style={{ color: color.grayBlack, marginTop: 5 }} variant={"h5"}>
                                        {customData[carouselIndex].expMonth}/{customData[carouselIndex].expYear}
                                    </Label>
                                </View>
                                <View style={{ height: 40, width: 1, backgroundColor: color.gray400, marginHorizontal: 25 }} />
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Label style={{ color: color.mainOrange }} variant={"p1"}>
                                        CVC
                                    </Label>
                                    <Label style={{ color: color.grayBlack, marginTop: 5 }} variant={"h5"}>
                                        {customData[carouselIndex].cvc}
                                    </Label>
                                </View>
                            </View>
                            <Button title={"Copy Card Number"} variant={"activeWithBorder"} style={{ width: '100%', marginTop: 25 }} />

                        </>
                    }
                </Animated.View>
                <View style={{ backgroundColor: color.graySuperLight, marginTop: 35 }}>
                    <MainActionsButtons cardBlocked={blockedCards} action3={toggleHeight} action2={handleBlockCards} />
                    <BalanceSection />
                    <PaymenteSection />
                    <RecentTransactionsSection />
                </View>
                <ModalFaceId FaceIdModalVisible={faceID} />
              
            </ScrollView>
            
        </Fragment>

    )

}
export default CardsScreen;



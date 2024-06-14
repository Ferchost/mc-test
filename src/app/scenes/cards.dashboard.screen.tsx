import { StackScreenProps } from '@react-navigation/stack';
import React, { FC, Fragment, useRef, useState } from 'react';
import { DashboardRoutes } from './dashboard.stack';
import { Animated, ScrollView, View } from 'react-native';
import MainActionsButtons from '../../atomic/organisms/mainActionsButtons/mainActionButtons.component';
import BalanceSection from '../../atomic/organisms/balanceSection/balanceSection.component';
import PaymenteSection from '../../atomic/organisms/paymentSection/paymentSection.component';
import RecentTransactionsSection from '../../atomic/organisms/recentTransactions/recentTransactions.component';
import { CommonTheme } from "../../atomic/theme/common.theme"
import ModalFaceId from '../../atomic/atoms/modalFaceId/modalFaceId.component';
import CardViewer from '../../atomic/organisms/cardViewer/cardViewer.component';
import CustomHeader from '../../atomic/molecules/header/header.component';
const customData = require('../../data/userCards.json');

const color = CommonTheme.color
type ScreenProps = StackScreenProps<DashboardRoutes, 'Cards'>;

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
            <CustomHeader title={'Cards'} closeButton={expanded} cornerAction={toggleHeight} />
            <ScrollView>
                <CardViewer
                    heightAnim={heightAnim}
                    customData={customData}
                    carouselIndex={carouselIndex}
                    blockedCards={blockedCards}
                    handleSnapToItem={handleSnapToItem}
                    expanded={expanded} />
                <View style={{ backgroundColor: color.graySuperLight, marginTop: 35 }}>
                    <MainActionsButtons cardBlocked={blockedCards} action1={()=>navigation.navigate('Controls')} action3={toggleHeight} action2={handleBlockCards} />
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



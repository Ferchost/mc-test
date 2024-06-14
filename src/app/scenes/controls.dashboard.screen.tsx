import { StackScreenProps } from '@react-navigation/stack';
import React, { FC, Fragment } from 'react';
import { DashboardRoutes } from './dashboard.stack';
import { ScrollView, StyleSheet, View } from 'react-native';
import { CommonTheme } from "../../atomic/theme/common.theme"
import ControlsCard, { Controls } from '../../atomic/molecules/controlsCard/controlsCard.component';
import ControlsBigCard, { ControlsGrid } from '../../atomic/molecules/controlsBigCard/controlsBigCard.component';
import CustomHeader from '../../atomic/molecules/header/header.component';

const menuData = require('../../data/menu.json');
const gridMenu = require('../../data/gridMenu.json');
const color = CommonTheme.color
type ScreenProps = StackScreenProps<DashboardRoutes, 'Controls'>;


const ControlsScreen: FC<ScreenProps | any> = ({ navigation }) => {
    return (
        <Fragment>
            <CustomHeader title={'Card Controls'} backButton={true} cornerAction={() => navigation.goBack()} />
            <ScrollView style={{ backgroundColor: color.graySuperLight }}>
                <View style={{ width: '100%' }}>
                    <View style={styles.grid}>
                        {gridMenu.map((item: ControlsGrid, index: number) => (
                            <ControlsBigCard item={item} key={index} />
                        ))}
                    </View>
                    {menuData.map((item: Controls, index: number) => (
                        <>
                            <ControlsCard item={item} key={index} />
                            {(index === 3 || index === 5 || index === 7) && <View style={styles.separator} />}
                        </>
                    ))}
                </View>

            </ScrollView>

        </Fragment>

    )

}
const styles = StyleSheet.create({
    separator: {
        height: 15,
        backgroundColor: color.graySuperLight,
    },
    grid: {
        marginTop: 15,
        marginBottom: 15,
        paddingHorizontal: 32,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

});

export default ControlsScreen;



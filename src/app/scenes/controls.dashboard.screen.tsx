import { StackScreenProps } from '@react-navigation/stack';
import React, { FC, Fragment } from 'react';
import { CustomHeader, DashboardRoutes } from './dashboard.stack';
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { CommonTheme } from "../../atomic/theme/common.theme"
import ControlsCard, { Controls } from '../../atomic/molecules/controlsCard/controlsCard.component';
import ControlsBigCard, { ControlsGrid } from '../../atomic/molecules/controlsBigCard/controlsBigCard.component';

const menuData = require('../../data/menu.json');
const gridMenu = require('../../data/gridMenu.json');

const color = CommonTheme.color
type ScreenProps = StackScreenProps<DashboardRoutes, 'Controls'>;


const ControlsScreen: FC<ScreenProps | any> = ({ navigation }) => {
    return (
        <Fragment>
            <CustomHeader title={'Card Controls'} route={''} backButton={true} cornerAction={() => navigation.goBack()} />
            <ScrollView style={{ backgroundColor: color.graySuperLight }}>
                <View style={{ width: '100%' }}>
                    <View style={styles.grid}>
                        {gridMenu.map((item:ControlsGrid, index:number) => (
                            <ControlsBigCard item={item} key={index}/>
                        ))}
                    </View>
                    {menuData.map((item:Controls, index:number) => (
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
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    text: {
        fontSize: 16,
    },
    status: {
        fontSize: 16,
        color: '#888',
    },
    separator: {
        height: 15,
        backgroundColor: color.graySuperLight,
    },
    containergrid: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#fff',
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



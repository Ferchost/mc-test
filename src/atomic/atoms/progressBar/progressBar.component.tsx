import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { CommonTheme } from "../../theme/common.theme"

const color = CommonTheme.color

interface IProgresBarProps {
    max: number,
    current: number
}

const ProgressBar = ({ max, current }: IProgresBarProps) => {
    const percentage = (current / max) * 100;

    return (
        <View style={styles.progressBar}>
            <View style={[styles.progress, { width: `${percentage}%` }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    progressBar: {
        flexDirection: 'row',
        height: 8,
        width: '100%',
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        overflow: 'hidden',
    },
    progress: {
        backgroundColor: color.accentSuccess,
        height: '100%',
    },
    progressText: {
        position: 'absolute',
        alignSelf: 'center',
        color: 'black',
    },
});

export default ProgressBar;
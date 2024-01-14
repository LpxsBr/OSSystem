import { StyleSheet, Text, View } from 'react-native'

export default function InfoBar() {
    return (
        <View style={infoBarStyles.container}></View>
    )
}

const infoBarStyles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 28
    },
});

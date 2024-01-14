import { Image, StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Navbar() {
    return (
        <View style={navbarStyles.container}>
            <View>
                <Text style={navbarStyles.title}>OS System V01</Text>
            </View>
            <View>
                <Ionicons name="cog" size={32} color="#fff" />
            </View>
            {/* remeber to add navigation */}
        </View>
    )
}

const navbarStyles = StyleSheet.create({
    container: {
        //   flex: 1,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'blue',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        height: 70
    },

    title: {
        fontWeight: '900',
        color: '#fff'
    }
});

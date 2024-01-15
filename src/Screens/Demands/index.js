import { StatusBar }                            from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View }   from 'react-native';
import DemandBox                                from '../../components/DemandBox';

export default function Demands() {
    return (
        <>
            <View style={demandScreenStyles.container}>

                <View>
                    <Text style={demandScreenStyles.container_title}>Últimas movimentações</Text>
                </View>

                <ScrollView
                    style={demandScreenStyles.containerView}
                    contentContainerStyle={{
                        rowGap: 20,
                        alignItems: 'center',
                    }}>
                    {/* put the map from fetched api */}
                    <DemandBox />
                    <DemandBox />
                    <DemandBox />
                    <DemandBox />
                    <DemandBox />

                </ScrollView>

                <StatusBar style="auto" />
            </View>
        </>
    );
}

const demandScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },

    containerView: {
        flex: 1,
        paddingVertical: 20,
        height: 200
    },

    container_title: {
        fontSize: 15
    },

});
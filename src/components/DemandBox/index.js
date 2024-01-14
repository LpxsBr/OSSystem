import { Button, StyleSheet, Text, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

export default function DemandBox(){
    return (

        <View style={demandBoxStyles.box}>
            <View style={demandBoxStyles.box_section_info}>
                <Text style={demandBoxStyles.box_section_info_title}>Manutenção corretiva</Text>
                <Text>Equipamento: BL001</Text>
                <Text>Descrição: Balancinho fraco, sem força</Text>
                {/* <Text></Text> */}
            </View>
            <View style={demandBoxStyles.box_section_controll_status}>
                <View style={demandBoxStyles.box_info}>
                    {/* <Ionicons name="checkmark-circle-outline" size={32} color="green" /> */}
                    {/* <Ionicons name="timer-outline" size={32} color="blue" /> */}
                    {/* <Ionicons name="stats-chart-outline" size={32} color="orange" /> */}
                    <Ionicons name="alert-circle-outline" size={32} color="red" />
                </View>
                <View style={demandBoxStyles.box_controll}>
                    <Button title='Se oferecer' />
                </View>
            </View>
        </View>
    )
}

const demandBoxStyles = StyleSheet.create({
      
    box: {
      borderRadius: 8,
      backgroundColor: '#d3d3d3',
      height: 0.6 * 300,
      width: 0.75 * 500,
      padding: 8,
      gap: 10,
      justifyContent: 'space-evenly'
    },
  
    box_section_info: {
      // backgroundColor: 'red',
      height: 0.35 * 300,
      justifyContent: 'space-evenly'
    },
  
    box_section_info_title: {
      fontSize: 15,
      fontWeight: '700'
    },
  
    box_section_controll_status: {
      // backgroundColor: 'blue',
      height: 0.16 * 300,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10
  
    },
  
    box_controll: {
      // backgroundColor: 'grey',
      height: 0.16 * 300,
      width: 0.35 * 300,
    },
  
    box_info: {
      // backgroundColor: 'pink',
      height: 0.16 * 300,
      width: 0.10 * 300,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly'
  
    }
  
  });
  
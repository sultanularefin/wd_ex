import {View} from "../Themed";
import {TouchableOpacity} from "react-native";
import {CommonActions} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import React from "react";


export interface HeaderBack_Button_Reg_Page_Props{
    displayHeight: number,
    displayWidth: number,
    navigation:any,
}
const HeaderBack_Button_Reg_Page: React.FC<HeaderBack_Button_Reg_Page_Props> = ({
                                                                                                      navigation,
                                                                                                      displayHeight,
                                                                                                      displayWidth,

                                                                                                  }) => {




    return(

        <View style={{
            height: displayHeight/10,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            backgroundColor: 'silver',
            width: displayWidth,
            // marginBottom: 10,
        }}>






        </View>
    );
}

export default HeaderBack_Button_Reg_Page;

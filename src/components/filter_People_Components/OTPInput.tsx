import {Text, View} from "../Themed";
import {Keyboard, TextInput, TouchableOpacity} from "react-native";
import {CommonActions} from "@react-navigation/native";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import React, {forwardRef} from "react";


export interface OTPInput_Props{

    totalHeight: number,

    user_OTP_State2: string,
    update_OTP_Text:(value:string)=> void,
    ref:  React.RefObject<TextInput>,

}

//@ts-ignore
const OTPInput: React.FC<OTPInput_Props> = forwardRef((
    props,
    // forwardedRef:React.Ref<typeof TextInput>,
    forwardedRef:React.Ref<TextInput>,
) => {

    return(

        <View style={{
            width: '90%',
            height: props.totalHeight/15.5,
            borderTopColor: 'white',
            borderLeftColor: 'white',
            borderRightColor: 'white',
            backgroundColor: 'white',
            marginTop: 4,
            borderBottomColor: 'grey',

            borderWidth: 1,
            // borderRadius: 30,
            // width: '80%',

            marginBottom: 10,
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            <TextInput
                style={{
                    height: 45,
                    marginLeft: 6,
                    borderBottomColor: 'black',
                    flex: 1,
                    color: 'black',
                }}

                // underlineColorAndroid="#FFFFFF"

                placeholder={"Enter OTP (123456)"}
                placeholderTextColor="black"
                keyboardType= "phone-pad"
                ref={forwardedRef}
                onChangeText={(phone:string) => props.update_OTP_Text(phone)}


                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={false}

                value={props.user_OTP_State2}
                selectionColor={"black"}
            />




        </View>


    );
});

export default OTPInput;

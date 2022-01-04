import {Text, View} from "../Themed";
import {Keyboard, TextInput, TouchableOpacity} from "react-native";
import {CommonActions} from "@react-navigation/native";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import React, {forwardRef} from "react";


export interface PhoneInput_Props{

    totalHeight: number,

    user_PhoneState2: string,
    updatePhone:(value:string)=> void,
    ref:  React.RefObject<TextInput>,

}

//@ts-ignore
const PhoneInput: React.FC<PhoneInput_Props> = forwardRef((
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

                placeholderTextColor="black"
                keyboardType= "phone-pad"
                ref={forwardedRef}
                onChangeText={(phone:string) => props.updatePhone(phone)}


                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={false}

                value={props.user_PhoneState2}
                selectionColor={"black"}
            />




        </View>


    );
});

export default PhoneInput;

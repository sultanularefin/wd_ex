import React, {
    useEffect,
    useState
} from 'react';

import {
    Text,
    StatusBar,
    TextInput,
    View,
    StyleSheet,
    Button,
    Alert,
    ScrollView,
    Image,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    Switch,
    Animated
} from 'react-native';

import { Ionicons,Feather } from '@expo/vector-icons';

import OneUser_View_withOther_Components from "./OneUser_View_withOther_Components";
import {Profile} from "../../customInterfaces/UserActivity";
// import {Profile} from "../../appStore/Reducers/authSlice";


export interface User_Items_Props{
    property:Profile,
    currentIndex:number,
}


const User_Items: React.FC<User_Items_Props> =  ({
                                                     property,

                                                     currentIndex,
                                                 }) => {


    const deviceWidth = Dimensions.get('window').width;



    const index = currentIndex;

    const close1 = () => {
        console.log('.....close1...');
    };


    // let finalImageResouce ="https://image.freepik.com/free-psd/christmas-tree-armchair-3d-rendering_429483-293.jpg";




    // if (localIndex === 0) {
    // const oneElement = property;
    // const lastIndex2 = currentIndex;

    return (
       <OneUser_View_withOther_Components
            key={index.toString()}
            ImageResource = {property.pictureUrl}
            // currentIndexLast ={lastIndex2}
            property2 =  {property}
            index = {index}
        />


    );

}


export default User_Items;


const ListOfImagesStyles = StyleSheet.create({



});


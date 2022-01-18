import {
    createSlice,
    createAsyncThunk,
    PayloadAction,
} from '@reduxjs/toolkit';
import * as Keychain from 'react-native-keychain';
import {RootState} from "../app/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {baseInterface} from "./baseInterface";
import {Alert} from "react-native";
import {Options} from "react-native-keychain";


export interface Profile {
    id: number;
    restaurant_id: number;
    name: string;
    address: string;
    postcode: string;
    phone: string;
    email: string;
    role: string;
}

export interface Restaurant {
    id: number;
    name: string;
    address_line1: string;
    address_line2: string;
    city: string;
    country: string;
    postcode: string;
    phone: string;
    opening_time: string;
    closing_time: string;
    is_active: number;
    created_at: Date;
    updated_at: Date;
}

export interface Product {
    name: string;
    checkedItem: any[];
    quantity: number;
    unit_price: number;
    unit_total: string;
}

export interface Details {
    products: Product[];
    subtotal: number;
    discount: number;
    total: number;
}

export interface Customer {
    name: string;
    phone: string;
    address: string;
    postcode: string;
}

export interface Order {
    id: number;
    restaurant_id: number;
    order_type: string;
    order_status: string;
    payment_type: string;
    payment_status: string;
    payment_id?: any;
    requested_time: string;
    accepted_time?: any;
    total: number;
    details: Details;
    customer: Customer;
    created_at: Date;
    updated_at: Date;
}

export interface Option {
    id: number;
    product_id: number;
    title: string;
    total_price: number;
    additional_price?: any;
    description?: any;
    created_at: Date;
    updated_at: Date;
}

export interface Product2 {
    id: number;
    title: string;
    description: string;
    price: number;
    image?: any;
    category: string;
    has_options: number;
    options: Option[];
}

export interface Offer {
    id: number;
    restaurant_id: number;
    start_date?: any;
    end_date?: any;
    discount_percentage: number;
    offer_type: string;
    offer_applies_on_total?: any;
    created_at: Date;
    updated_at: Date;
}

export interface DeliveryCharge {
    id: number;
    restaurant_id: number;
    delivery_charge: number;
    free_delivery_order_amount: number;
    delivery_radius_miles: number;
    is_delivery_available: number;
    created_at: Date;
    updated_at: Date;
}

export interface Data {
    profile: Profile;
    restaurant: Restaurant;
    orders: Order[];
    products: Product2[];
    offers: Offer[];
    delivery_charge: DeliveryCharge;
}

export interface Pivot {
    user_id: number;
    role_id: number;
}

export interface Role {
    id: number;
    title: string;
    created_at: Date;
    updated_at: Date;
    pivot: Pivot;
}

export interface email_password_login_responseInterface2 {
    // access_token: string;
    accessToken: string; // changed on dec_19_2021.
    data?: Data; // NOT PRESENT IN THE ACCOUNT GrABBNY...
    roles: Role[]; //// CHANGED ON DEC_19_2021. WITH NEW API
    // accessToken: string;


}


export interface email_password_login_responseInterface_SpareShareGRabbany {
    // access_token: string;
    accessToken: string; // changed on dec_19_2021.
    // data?: Data; // NOT PRESENT IN THE ACCOUNT GrABBNY...
    roles: Role[]; //// CHANGED ON DEC_19_2021. WITH NEW API
    // accessToken: string;


}






export interface custom_Email_password_login_response_SpareSHare_GRabbany_Interface extends email_password_login_responseInterface_SpareShareGRabbany{


    // made changes by arefin..for test purposes nov_25.

    email: string,
    password: string,
}



export interface custom_Email_password_login_responseInterface2 extends email_password_login_responseInterface2{


    // made changes by arefin..for test purposes nov_25.

    email: string,
    password: string,
}





export interface registration_interface {
    name: string,
    mobile_no: string,
    email: string,
    password: string,
    image: {
        uri: "",
    },
}


export interface email_Password_for_login {
    email: string,
    password: string,
}


export interface userId_newAND_OLD_passwordInterface {
    userID: string,
    old_Password: string,
    new_Password: string,

}

// DONOT DELETE THIS COMMENTED CODE OLD RESTAURANT API MAY BE ,, COMMENTED ON JANUARY_08_2022
/*
export interface email_password_login_responseInterface2{
    // id: string;
    // user_id: string;
    // email: string;
    // mobile_no: string;
    // password: string;
    // user_profile_photo: string;
    // last_login: string;
    // created_at: string;
    // updated_at: string;
    // temp_block_time: string;
    // email_verify: string;
    // verify_token: string;
    // name: string;
    // address: string;
    // profession: string;
    // status: string;
    // message: string;
    // interest: string[];



}
*/

export interface forget_Password_Interface{

    message: string;
}


export interface Password_update_Interface{

    message: string;
}

export interface localStorageInterface{



    accessToken: string,
    address: string,
    email:string,
    id: number,
    imageURL:string,
    name:string,
    //6

    phone:string,
    postcode: string,
    restaurant_id: number,
    role: string,
    token:string,
}


export interface AuthStateInterface extends baseInterface{


    localStorage:localStorageInterface,

    loggerPerson: Profile;
    email_password_login_response: email_password_login_responseInterface2;
    forget_password_email_response: forget_Password_Interface;
    password_Update_response: Password_update_Interface;
    isOffline: boolean;

}

const initialState: AuthStateInterface = {

    apiInovocatoinStatus: '',
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',

    isLogged_in: false,

    localStorage: {
        // email: '',
        // userID: '',
        // userName: '',
        // mobileNumber: '',
        // userImageURI: '',
        // token: '',


        accessToken: '',
        address: '',
        email:'',
        id: -11,
        imageURL:'',
        name:'',
        //6

        phone:'',
        postcode: '',
        restaurant_id: -11,
        role: '',
        token:'',
    },



    email_password_login_response:{
        access_token:"",
        data: {
            profile: {
                id: -11,
                restaurant_id: -11,
                name: "",
                address: "",
                postcode: "",
                phone: "",
                email: "",
                role: "",
            },
            Restaurant: {
                id: -11,
                name: "",
                address_line1: "",
                address_line2: "",
                city: "",
                country: "",
                postcode: "",
                phone: "",
                opening_time: "",
                closing_time: "",
                is_active: -22,
                created_at: Date,
                updated_at: Date,
            },


            orders: [],
            products: [],
            offers: [],
            delivery_charge: {

                id: -44,
                restaurant_id: -33,
                delivery_charge: -33,
                free_delivery_order_amount: -33,
                delivery_radius_miles: -33,
                is_delivery_available: -33,
                // @ts-ignore
                created_at: Date.now(),
                // @ts-ignore
                updated_at: Date.now(),
            },

        },
    },

    forget_password_email_response:{
        message: '',
    },
    password_Update_response: {

        message: '',
    },

    isOffline: false,


};


export const getRandomArbitrary= (min:number, max:number) => Math.floor(Math.random() * (max - min) + min);

export const generateTitle= (length:number) => {

    let _result = '';
    let iterator = 0;
    const _allowedChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0127456789';

    while (iterator < Math.round(length)) {

        const randomInt = getRandomArbitrary(0, _allowedChars.length);


        _result += _allowedChars[randomInt];

        iterator +=1;
    }

    return _result;
};


const initailState0 = initialState;




export const login_With_Email_Password__Restaurant_API_Arefin_Async = createAsyncThunk(

    'users/login_With_Email_Password__Restaurant_API_Arefin_Async',

    async (emailPassword:email_Password_for_login, thunkAPI) => {
        try {


            // console.log("emailPassword.email: at[login_With_Email_Password__Restaurant_API_Arefin_Async]", emailPassword.email);
            // console.log("emailPassword.password: : at[login_With_Email_Password__Restaurant_API_Arefin_Async] ", emailPassword.password);

            // return;

            const response = await fetch(

                // 'https://eazm.co.uk/api/login',
                'http://18.170.53.153/api/login',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({

                        // email: emailPassword.email,
                        // password: emailPassword.password,
                        email: "rabbany85@gmail.com",
                        password: "secRet@007",
                    }),
                },
            );

            // console.log("response: ",response);

            const data = await response.json();
            const sanitisedData= JSON.stringify(data);
            // response;


            // return JSON.stringify(data);
            // await response.json();

            // console.log("sanitisedData:  403",sanitisedData);
            // console.log("data:  430",data);

            if (response.status === 200) {


                // return data;




                await update_vault_with_email_passwrod(emailPassword.email, emailPassword.password);






                return data;
                // return JSON.stringify(data);


                // return partner_request_from_logger_data.receiver;
                // return data;

                // return customizedPostReactionResponse_Data;

            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (error: any) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    },
);





export const login_With_Email_Password_Spare_share_GRabbany = createAsyncThunk(

    'users/login_With_Email_Password_Spare_share_GRabbany',

    async (emailPassword:email_Password_for_login, thunkAPI) => {
        try {


            const response = await fetch(

                'http://18.170.53.153/api/login',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({

                        // email: emailPassword.email,
                        // password: emailPassword.password,
                        email: "rabbany85@gmail.com",
                        password: "secRet@007",
                    }),
                },
            );

            // console.log("response: ",response);

            const data = await response.json();
            const sanitisedData= JSON.stringify(data);
            // response;


            // return JSON.stringify(data);
                // await response.json();

            // console.log("sanitisedData:  403",sanitisedData);
            // console.log("data:  430",data);

            if (response.status === 200) {


                // return data;


                    const loginResponse_WithRoles_GR : email_password_login_responseInterface_SpareShareGRabbany = data;

                    // console.log("data.accessToken: ",data.accessToken);
                    if(data.accessToken){

                        // const loginResponse_WithRoles_GR : email_password_login_responseInterface_SpareShareGRabbany = temp_login_response;



                        console.log("invoke: ",update_vault_with_email_passwrod_SpareShareRoles);
                        await update_vault_with_email_passwrod_SpareShareRoles(emailPassword.email, emailPassword.password,loginResponse_WithRoles_GR);



                        // console.log("");
                    }


                    // const loginResponse : email_password_login_responseInterface2 = temp_login_response;



                return data;
                // return JSON.stringify(data);


                // return partner_request_from_logger_data.receiver;
                // return data;

                // return customizedPostReactionResponse_Data;







            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (error: any) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    },
);



export const sent_New_Password_to_Email_Async = createAsyncThunk(

    'users/forgetPassword',

    async (

        userEmailState:string,

        thunkAPI) => {
        try {

            console.log("___forgetPassword___:_________at[sent_New_Password_to_Email_Async]=> ___ ", userEmailState);
            const response = await fetch(
                '18.170.53.153/api_dev/api/user/forgotPassword',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: userEmailState,

                    }),
                },
            );


            const data = await response.json();

            if (response.status === 200) {

                return data;
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (error) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    },
);

export const getUserProfile_Async = createAsyncThunk(
    'users/profile',
    async (
        userID:string,
        thunkAPI) => {
        try {

            console.log("userID in ", userID);


            const response = await fetch(

                '18.170.53.153/user/getUserProfile',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId: userID,
                    }),
                },
            );
            const data = await response.json();
            if (response.status === 200) {

                return data;
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (error) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    },
);




export const create_user_in_registration_page = createAsyncThunk(

    'users/create_user_in_registration_page',
    async (
        userData:registration_interface,


        thunkAPI) => {
        try {

            const myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer access-token");

            const formData = new FormData();


            formData.append('image', {
                uri: userData.image.uri,
                filename: 'image.png',
                type: 'image/png',

            });



            formData.append("name", userData.name);
            formData.append("mobile_no", userData.mobile_no);
            formData.append("email", userData.email);
            formData.append("password", userData.password);

            const registrationURL = "18.170.53.153/Signup";


            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formData,
                redirect: 'follow',
            };



            const response = await fetch(registrationURL, requestOptions);

            const data2 = await response.json();
            console.log('response _____in authSlicewd: ', data2);

            console.log("  << status: authSlicewd with userID >> ", response.status);
            if (response.status === 200) {

                return data2;
            } else {
                return thunkAPI.rejectWithValue(data2);
            }


        } catch (error: any) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    },
);









export const update_password_async = createAsyncThunk(

    'users/updatePassword',
    async (
        userId_newAND_OLD_password:userId_newAND_OLD_passwordInterface,
        thunkAPI) => {
        try {


            const response = await fetch(
                '18.170.53.153/user/changePassword',

                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        user_id: userId_newAND_OLD_password.userID,
                        new_password: userId_newAND_OLD_password.new_Password,
                        old_password: userId_newAND_OLD_password.old_Password,



                    }),
                },
            );
            const data = await response.json();

            if (response.status === 200) {


                return data;
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (error:any) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    },
);




export const logout5 = createAsyncThunk(
    'auth/logout5',
    async (

        thunkAPI) => {
        try {

            await AsyncStorage.clear();


        } catch (error:any) {
            console.log('Error', error.response.data);

        }
    },
);


const update_vault_with_email_passwrod_SpareShareRoles = async (

    email:string,
    password:string,
    payload_with_role: email_password_login_responseInterface_SpareShareGRabbany,


) => {


    const accessTokenPair =  ["@accessToken", payload_with_role.accessToken];

    const roles__array = ["@roles", JSON.stringify(payload_with_role.roles)];


    await AsyncStorage.multiSet([

        accessTokenPair,
        roles__array,
    ]);

    await Keychain.setGenericPassword(

        email, //:username
        password, //: password,
        // payload_with_role, //options?: Options


    );

    try {
        // Retrieve the credentials
        const credentials = await Keychain.getGenericPassword();
        if (credentials) {

            console.log("credentials",credentials);
            console.log(
                `Credentials successfully loaded for user ${credentials.username}`,
            );


            console.log(`Credentials successfully loaded for user ${credentials.username}`);
        } else {
            console.log('No credentials stored');
        }
    } catch (error) {
        console.log("Keychain couldn't be accessed!", error);
    }
    // await Keychain.resetGenericPassword();
};




const update_vault_with_email_passwrod = async (

    email:string,
    password:string,

) => {




    // emailPassword.email
    // const username = 'zuck';
    // const password = 'poniesRgr8';

    // Store the credentials
    await Keychain.setGenericPassword(email, password);

    try {
        // Retrieve the credentials
        const credentials = await Keychain.getGenericPassword();
        if (credentials) {

            console.log("credentials",credentials);
            console.log(
                `Credentials successfully loaded for user ${credentials.username}`,



            );


            console.log(`Credentials successfully loaded for user ${credentials.username}`);
        } else {
            console.log('No credentials stored');
        }
    } catch (error) {
        console.log("Keychain couldn't be accessed!", error);
    }
    // await Keychain.resetGenericPassword();
};


const updateLocalStorage_SpareShare = async (

    accessToken: string,
    roles: Role[],


) => {


    // multiSet = async () => {
    const accessTokenPair =  ["@accessToken", accessToken];

    // const roles__array = ["@roles", roles];


    // 6 +5 =11




    try {
        await AsyncStorage.multiSet([

            accessTokenPair,
            // roles__array,


        ]);
    } catch(error:any) {
        //save error

        console.log("some error in updateLocalStorage_SpareShare", error);
    }

    console.log("Done.");



// phone:string,
//     postcode: string,
//     restaurant_id: number,
//     role: string,
//     token:string,


};


const updateLocalStorage= async (

    accessToken: string,
    address: string,
    email:string,
    id: number,
    imageURL:string,
    name:string,
    //6

    phone:string,
    postcode: string,
    restaurant_id: number,
    role: string,
    token:string,







) => {

    // SHOULD HAVE USED MULTISET...

    /*
    AsyncStorage.setItem('accessToken', accessToken);
    AsyncStorage.setItem('address', address);
    AsyncStorage.setItem('email', email);
    AsyncStorage.setItem('id', id.toString());
    AsyncStorage.setItem('profilePhoto', imageURL);
    AsyncStorage.setItem('userName', name);

    // 6 +5 =11


    AsyncStorage.setItem('phone', phone);
    AsyncStorage.setItem('postcode', postcode);
    AsyncStorage.setItem('restaurant_id', restaurant_id.toString());
    AsyncStorage.setItem('role', role);
    AsyncStorage.setItem('tokenFCM', token);

    */



    // multiSet = async () => {
    const accessTokenPair =  ["@accessToken", accessToken];
    const addressPair = ["@address", address];

    const emailPair =  ["@email", email];
    const idPair = ["@id", id.toString()];
    const imageURLPair =  ["@imageURL", imageURL];
    const namePair = ["@name", name];
    // 6 +5 =11


    const phonePair =  ["@phone", phone];
    const postcodePair = ["@postcode", postcode];
    const restaurant_idPair =  ["@restaurant_id", restaurant_id.toString()];
    const rolePair = ["@role", role];
    const tokenPair =  ["@token", token];

    try {
        await AsyncStorage.multiSet([

            accessTokenPair,
            addressPair,
            emailPair,
            idPair,
            imageURLPair,
            namePair,
            // 6 +5 =11

            phonePair,
            postcodePair,
            restaurant_idPair,
            rolePair,
            tokenPair,

        ]);
    } catch(error:any) {
        //save error

        console.log("some error", error);
    }

    console.log("Done.");



// phone:string,
//     postcode: string,
//     restaurant_id: number,
//     role: string,
//     token:string,


};

const authSlicewd = createSlice({
    name: 'auth',
    initialState,
    reducers: {




        populate_logger_offline_status:  (
            state,

            action: PayloadAction<{userID: string, userImage: string}>,
        ) => {


            const userID__Image: {userID: string, userImage: string}= action.payload;
            console.log("------____-_----__ ?? populate_logger_offline_status ???");
            state.isOffline = true;

            // state.localStorage.userID = userID__Image.userID;
            // state.loggerPerson.user_id = userID__Image.userID;
            // state.localStorage.userImageURI = userID__Image.userImage;

        },


        logout10: (state) => {


            console.log("--rpg");

        },



        clearState: (state) => {

            const returnedTarget = Object.assign(state, initailState0);




            return returnedTarget;
        },


    },
    extraReducers: (builder) => {


        builder.addCase(getUserProfile_Async.pending, (state) => {
            state.apiInovocatoinStatus = 'loading';

        }).
        addCase(getUserProfile_Async.rejected, (state,
                                                action) => {

            console.log("(2)_____state.apiInovocatoinStatus = 'failed____'");
            state.apiInovocatoinStatus = "failed";
            state.isFetching = false;
            state.isSuccess= false;
            state.isError= true;
            state.errorMessage= 'please check internet';




        }).
        addCase(getUserProfile_Async.fulfilled, (state, action) => {

            state.apiInovocatoinStatus = "idle";


            state.isFetching = false;
            state.isSuccess= true;
            state.isError= false;
            state.errorMessage= '';


            const loggerData_temp =action.payload;



            const logger_data_temp2 ={
                ...loggerData_temp,

                buzz_countdown: Number(loggerData_temp.buzz_countdown),

                buzz_req_countdown: Number(loggerData_temp.buzz_req_countdown),


            };

            state.loggerPerson= logger_data_temp2;





            /* ONLY HERE AND LOGIN WITH EMAIL PASSWORD THIS TWO WILL BE ENOUGH */
            state.localStorage.accessToken= action.payload.email;
            state.localStorage.address = action.payload.user_id;
            state.localStorage.email= action.payload.name;
            state.localStorage.id= action.payload.mobile_no;
            state.localStorage.imageURL= action.payload.user_profile_photo;
            state.localStorage.name= action.payload.user_profile_photo;

            // 6 +5 =11
            state.localStorage.phone= action.payload.email;
            state.localStorage.postcode = action.payload.user_id;
            state.localStorage.restaurant_id= action.payload.name;
            state.localStorage.role= action.payload.mobile_no;
            state.localStorage.token= action.payload.user_profile_photo;

            /* ONLY HERE LOGIN WITH EMAIL PASSWORD, AND GET USER pROFILE FROM SPLASH SCREEN PAGE THIS TWO WILL BE ENOUGH */

        });






        builder.addCase(login_With_Email_Password__Restaurant_API_Arefin_Async.pending, (state) => {
            state.apiInovocatoinStatus = 'loading';

        }).
        addCase(login_With_Email_Password__Restaurant_API_Arefin_Async.rejected, (state, action) => {
            console.log("(3)_____state.apiInovocatoinStatus = 'failed____'");
            state.apiInovocatoinStatus = "failed";
            state.isFetching = false;
            state.isSuccess= false;
            state.isError= true;
        }).
        addCase(login_With_Email_Password__Restaurant_API_Arefin_Async.fulfilled, (state, action) => {

            state.apiInovocatoinStatus = "idle";



            const data =action.payload;


            const temp_login_response= action.payload;







            state.isFetching = false;
            state.isSuccess= true;
            state.isError= false;
            state.errorMessage= "";


            // const temp_login_response= action.payload;

            if (temp_login_response!==undefined) {

                const loginResponse : email_password_login_responseInterface2 = temp_login_response;


                console.log("");


                /*
                if(loginResponse.access_token){


                    state.email_password_login_response= action.payload;




                    updateLocalStorage(
                        loginResponse.access_token,
                        loginResponse.data.profile.address,
                        loginResponse.data.profile.email,
                        loginResponse.data.profile.id,
                        "",// photo,
                        loginResponse.data.profile.name,
                        // 6 +5 =11
                        loginResponse.data.profile.phone,
                        loginResponse.data.profile.postcode,
                        loginResponse.data.profile.restaurant_id,
                        loginResponse.data.profile.role,
                        "", //fcm token


                    );



                    // ONLY HERE LOGIN WITH EMAIL PASSWORD, AND GET USER pROFILE FROM SPLASH SCREEN PAGE THIS TWO WILL BE ENOUGH
                    // state.localStorage.email= loginResponse.email;
                    // state.localStorage.userID = loginResponse.user_id;
                    // state.localStorage.userName= loginResponse.name;
                    // state.localStorage.mobileNumber= loginResponse.mobile_no;
                    // state.localStorage.userImageURI= loginResponse.user_profile_photo;



                    state.localStorage.accessToken= loginResponse.access_token;
                    state.localStorage.address = loginResponse.data.profile.address;
                    state.localStorage.email=  loginResponse.data.profile.email;
                    state.localStorage.id=  loginResponse.data.profile.id;
                    state.localStorage.imageURL= "";
                    state.localStorage.name= loginResponse.data.profile.name;

                    // 6 +5 =11
                    state.localStorage.phone=  loginResponse.data.profile.phone;
                    state.localStorage.postcode = loginResponse.data.profile.postcode;
                    state.localStorage.restaurant_id= loginResponse.data.profile.restaurant_id;
                    state.localStorage.role= loginResponse.data.profile.role;
                    state.localStorage.token= "";

                    // ONLY HERE LOGIN WITH EMAIL PASSWORD, AND GET USER pROFILE FROM SPLASH SCREEN PAGE THIS TWO WILL BE ENOUGH

                }
                */
            }

        });

        builder.addCase(login_With_Email_Password_Spare_share_GRabbany.pending, (state) => {
            state.apiInovocatoinStatus = 'loading';

        }).
        addCase(login_With_Email_Password_Spare_share_GRabbany.rejected, (state,
                                                                          action) => {
            console.log("(3)_____state.apiInovocatoinStatus = 'failed____'");
            state.apiInovocatoinStatus = "failed";
            state.isFetching = false;
            state.isSuccess= false;
            state.isError= true;
        }).
        addCase(login_With_Email_Password_Spare_share_GRabbany.fulfilled, (state, action) => {

            state.apiInovocatoinStatus = "idle";
            state.isLogged_in = true; // requires for role change.



            const data =action.payload;


            const temp_login_response= action.payload;











            state.isFetching = false;
            state.isSuccess= true;
            state.isError= false;
            state.errorMessage= "";


            // const temp_login_response= action.payload;

            if (temp_login_response!==undefined) {

                // const loginResponse : email_password_login_responseInterface2 = temp_login_response;
                const loginResponse_WithRoles_GR : email_password_login_responseInterface_SpareShareGRabbany = temp_login_response;


                console.log("");


                if(loginResponse_WithRoles_GR.accessToken){


                    state.email_password_login_response= action.payload;

                    /*
                    updateLocalStorage_SpareShare(
                        loginResponse_WithRoles_GR.accessToken,
                        loginResponse_WithRoles_GR.roles,

                    );
                    */

                    /*

                    // ONLY HERE LOGIN WITH EMAIL PASSWORD, AND GET USER pROFILE FROM SPLASH SCREEN PAGE THIS TWO WILL BE ENOUGH
                    // state.localStorage.email= loginResponse.email;
                    // state.localStorage.userID = loginResponse.user_id;
                    // state.localStorage.userName= loginResponse.name;
                    // state.localStorage.mobileNumber= loginResponse.mobile_no;
                    // state.localStorage.userImageURI= loginResponse.user_profile_photo;



                    state.localStorage.accessToken= loginResponse.access_token;
                    state.localStorage.address = loginResponse.data.profile.address;
                    state.localStorage.email=  loginResponse.data.profile.email;
                    state.localStorage.id=  loginResponse.data.profile.id;
                    state.localStorage.imageURL= "";
                    state.localStorage.name= loginResponse.data.profile.name;

                    // 6 +5 =11
                    state.localStorage.phone=  loginResponse.data.profile.phone;
                    state.localStorage.postcode = loginResponse.data.profile.postcode;
                    state.localStorage.restaurant_id= loginResponse.data.profile.restaurant_id;
                    state.localStorage.role= loginResponse.data.profile.role;
                    state.localStorage.token= "";

                    */
                    // ONLY HERE LOGIN WITH EMAIL PASSWORD, AND GET USER pROFILE FROM SPLASH SCREEN PAGE THIS TWO WILL BE ENOUGH

                }
            }

        });

        builder.addCase(sent_New_Password_to_Email_Async.pending, (state) => {
            state.apiInovocatoinStatus = 'loading';

        }).
        addCase(sent_New_Password_to_Email_Async.rejected, (state, action) => {
            console.log("_____state.apiInovocatoinStatus sent_New_Password_to_Email_Async = 'failed____'");
            state.apiInovocatoinStatus = "failed";

            state.isFetching = false;
            state.isSuccess= false;
            state.isError= true;
        }).
        addCase(sent_New_Password_to_Email_Async.fulfilled, (state, action) => {

            state.apiInovocatoinStatus = "idle";


            state.isFetching = false;
            state.isSuccess= true;
            state.isError= false;
            state.errorMessage= '';
            state.forget_password_email_response= action.payload;
        });


        builder.addCase(update_password_async.pending, (state) => {
            state.apiInovocatoinStatus = 'loading';

        }).
        addCase(update_password_async.rejected, (state, action) => {
            console.log("_____state.apiInovocatoinStatus at update_password_async = 'failed____'");
            state.apiInovocatoinStatus = "failed";

            state.isFetching = false;
            state.isSuccess= false;
            state.isError= true;
        }).
        addCase(update_password_async.fulfilled, (state, action) => {

            state.apiInovocatoinStatus = "idle";



            console.log("_____action.payload_____",action.payload);
            state.isFetching = false;
            state.isSuccess= true;
            state.isError= false;
            state.errorMessage= '';
            state.password_Update_response= action.payload;
        });

    },
});


export const select_logger_person_data = (state: RootState) => state.authReducer;

export const select_logger_person_data2 = (state: RootState) => state.authReducer.loggerPerson;

export const select_Redux_auth_store_data = (state: RootState) => state.authReducer.localStorage;

export const select_email_password_login_response = (state: RootState) => state.authReducer.email_password_login_response;

export const select_forget_password_data = (state: RootState) => state.authReducer.forget_password_email_response;

export const select_password_update_response = (state: RootState) => state.authReducer.password_Update_response;


export const select_offlineStatus = (state: RootState) => state.authReducer.isOffline;

export const select_Auth_is_LoggedIN = (state: RootState) => state.authReducer.isLogged_in;



export const {
    clearState,
    logout10,
    populate_logger_offline_status,
} = authSlicewd.actions;


export default authSlicewd.reducer;

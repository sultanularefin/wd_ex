import {
    createSlice,
    createAsyncThunk,
    PayloadAction
} from '@reduxjs/toolkit';
import {baseInterface} from "./baseInterface";


import {UserData2    }    from  "../../dataIMP/UserData2";
import {UserData7    } from     "../../dataIMP/UserData7";
import {UserData2627 } from     "../../dataIMP/UserData2627";
import {UserData10780} from     "../../dataIMP/UserData10780";
import {UserData13116} from     "../../dataIMP/UserData13116";

import {UserData14842} from     "../../dataIMP/UserData14842";
import {UserData17172} from     "../../dataIMP/UserData17172";
import {UserData20566} from     "../../dataIMP/UserData20566";
import {UserData21632} from     "../../dataIMP/UserData21632";

import {UserData27366} from     "../../dataIMP/UserData27366";
import {UserData29127} from     "../../dataIMP/UserData29127";
import {UserData30024} from     "../../dataIMP/UserData30024";
import {UserData30332} from     "../../dataIMP/UserData30332";
import {UserData31870} from     "../../dataIMP/UserData31870";
import {UserData33550} from     "../../dataIMP/UserData33550";

import {UserData34407} from     "../../dataIMP/UserData34407";
import {UserData34429} from     "../../dataIMP/UserData34429";
import {UserData36495} from     "../../dataIMP/UserData36495";

import {UserData37327} from     "../../dataIMP/UserData37327";
import {UserData38639} from     "../../dataIMP/UserData38639";


export interface user_Filter_Payload_Interface {
    startDate: string,//Date,
    endDate: string,//Date,
    userCategory: one_User_Activity_Status_interface[],
}

// startDate,endDate,all_Activity_Status_of_Users_State




import {RootState} from "../app/store";
import {one_User_Activity_Status_interface} from "../../screens/UserAnalyzer_Page";
import {dateToDayId_Interface, Profile, UserActivity} from "../../customInterfaces/UserActivity";
// import {useState} from "react";



// @ts-ignore
const tempAllOptionsState__2   : UserActivity = UserData2;

// @ts-ignore
const tempAllOptionsState__7   : UserActivity =UserData7;
// @ts-ignore
const tempAllOptionsState__2627: UserActivity =UserData2627;
// @ts-ignore
const tempAllOptionsState__10780 : UserActivity =UserData10780;
// @ts-ignore
const tempAllOptionsState__13116 : UserActivity =UserData13116;
// @ts-ignore
const tempAllOptionsState__14842 : UserActivity =UserData14842;
// @ts-ignore
const tempAllOptionsState__17172 : UserActivity =UserData17172;
// @ts-ignore
const tempAllOptionsState__20566 : UserActivity =UserData20566;
// @ts-ignore
const tempAllOptionsState__21632 : UserActivity =UserData21632;
// @ts-ignore
const tempAllOptionsState__27366 : UserActivity =UserData27366;
// @ts-ignore
const tempAllOptionsState__29127 : UserActivity =UserData29127;
// @ts-ignore
const tempAllOptionsState__30024 : UserActivity =UserData30024;
// @ts-ignore
const tempAllOptionsState__30332 : UserActivity =UserData30332;
// @ts-ignore
const tempAllOptionsState__31870 : UserActivity =UserData31870;
// @ts-ignore
const tempAllOptionsState__33550 : UserActivity =UserData33550;
// @ts-ignore
const tempAllOptionsState__34407 : UserActivity =UserData34407;
// @ts-ignore
const tempAllOptionsState__34429 : UserActivity =UserData34429;
// @ts-ignore
const tempAllOptionsState__36495 : UserActivity =UserData36495;
// @ts-ignore
const tempAllOptionsState__37327 : UserActivity =UserData37327;
// @ts-ignore
const tempAllOptionsState__38639 : UserActivity =UserData38639;






export interface UserAnalyzer_State_interface extends baseInterface{

    all_USER_Data: Profile[],
    all_Read_USER_Data: Profile[],
    user_Data_State_in_Slice : UserActivity[],

}



const initialState: UserAnalyzer_State_interface = {

    apiInovocatoinStatus: '',
    isFetching: true,
    isSuccess: false,
    isError: false,
    errorMessage: '',

    // -------base above.--------


    // lazy_loading____above------------


    all_USER_Data: [],
    user_Data_State_in_Slice: ([
        tempAllOptionsState__2, tempAllOptionsState__7, tempAllOptionsState__2627, tempAllOptionsState__10780,tempAllOptionsState__13116,
        tempAllOptionsState__14842,tempAllOptionsState__17172,tempAllOptionsState__20566, tempAllOptionsState__21632, tempAllOptionsState__27366,
        tempAllOptionsState__29127, tempAllOptionsState__30024, tempAllOptionsState__30332, tempAllOptionsState__31870, tempAllOptionsState__33550,
        tempAllOptionsState__34407,tempAllOptionsState__34429, tempAllOptionsState__36495, tempAllOptionsState__38639

    ]),
    all_Read_USER_Data: [],
};


const initailState0 = initialState;







// 222









const filter_SelectedDate_between_start_date_and_end_date=(startDate:string, endDate:string, selectedDate:string)=>{

    if (selectedDate > startDate && selectedDate < endDate) {

        // console.log(`Selected date ${selectedDate} between startDate:${startDate} and endDate${endDate}`);

        return true;
        // el_down.innerHTML = "Date is in between the "
        //     + "Date 1 and Date 2";
    }
    else{
        // console.log("not true");
        // console.log(`Selected date ${selectedDate} not between startDate:${startDate} and endDate${endDate}`);
        return  false;
    }

};






const filter_SelectedDate_between_start_date_and_end_date___4=(startDate:string, endDate:string, selectedDate:string)=>{

    // console.log(`Selected date ${selectedDate} between startDate:${startDate} and endDate${endDate}`);

    const fromDate = startDate.split('-');
    // '2020-01-30T05:00:00.000Z'.split('-');


    const compareDate = selectedDate.split('-');
    //'2020-02-31T22:18:46Z'.split('-');  // false. should be true...


    const toDate = endDate.split('-');
    //'2021-01-01T05:00:00.000Z'.split('-');

    const partStringToInt = (str:string) => parseInt(str, 10);
    const compareBetween = (startValue:string, compareValue:string, endValue:string) => partStringToInt(startValue) <= partStringToInt(compareValue) && partStringToInt(compareValue) <= partStringToInt(endValue);

    const compareYearBetween_Strt_Sel_End = (startValue:string, compareValue:string, endValue:string) => partStringToInt(startValue) <= partStringToInt(compareValue) && partStringToInt(compareValue) <= partStringToInt(endValue);
    // console.log(`compareYearBetween_Strt_Sel_End(${fromDate[0]}, ${compareDate[0]}, ${toDate[0]}): ", ${compareYearBetween_Strt_Sel_End(fromDate[0], compareDate[0], toDate[0])}`);

    const compareMontHBetween__Strt_Sel_End = (startValue:string, compareValue:string, endValue:string) => partStringToInt(startValue) <= partStringToInt(compareValue) && partStringToInt(compareValue) <= partStringToInt(endValue);
    // console.log(`compareMontHBetween__Strt_Sel_End(${fromDate[1]}, ${compareDate[1]}, ${toDate[1]}): ", ${compareMontHBetween__Strt_Sel_End(fromDate[1], compareDate[1], toDate[1])}`);


    const compareDayBetween__Strt_Sel_End = (startValue:string, compareValue:string, endValue:string) => partStringToInt(startValue) <= partStringToInt(compareValue) && partStringToInt(compareValue) <= partStringToInt(endValue);
    // console.log(`compareDayBetween__Strt_Sel_End(${fromDate[2]}, ${compareDate[2]}, ${toDate[2]}): ", ${compareDayBetween__Strt_Sel_End(fromDate[2], compareDate[2], toDate[2])}`);



    const result = compareYearBetween_Strt_Sel_End(fromDate[0], compareDate[0], toDate[0]) // Year
        || compareMontHBetween__Strt_Sel_End(fromDate[1], compareDate[1], toDate[1]) // Month
        && compareDayBetween__Strt_Sel_End(fromDate[2].substring(0, 2), compareDate[2].substring(0, 2), toDate[2].substring(0, 2)); // Day
    console.log(result);

    return result;

};


const get_dayID_From_Date=(startDate:string, endDate:string, selectedDate:string)=>{

    // console.log(`Selected date ${selectedDate} between startDate:${startDate} and endDate${endDate}`);

    const fromDate = startDate.split('-');
    // '2020-01-30T05:00:00.000Z'.split('-');


    const compareDate = selectedDate.split('-');
    //'2020-02-31T22:18:46Z'.split('-');  // false. should be true...


    const toDate = endDate.split('-');
    //'2021-01-01T05:00:00.000Z'.split('-');








    const partStringToInt = (str:string) => parseInt(str, 10);
    const compareBetween = (startValue:string, compareValue:string, endValue:string) => partStringToInt(startValue) <= partStringToInt(compareValue) && partStringToInt(compareValue) <= partStringToInt(endValue);

    const compareYearBetween_Strt_Sel_End = (startValue:string, compareValue:string, endValue:string) => partStringToInt(startValue) <= partStringToInt(compareValue) && partStringToInt(compareValue) <= partStringToInt(endValue);
    console.log(`compareYearBetween_Strt_Sel_End(${fromDate[0]}, ${compareDate[0]}, ${toDate[0]}): ", ${compareYearBetween_Strt_Sel_End(fromDate[0], compareDate[0], toDate[0])}`);

    const compareMontHBetween__Strt_Sel_End = (startValue:string, compareValue:string, endValue:string) => partStringToInt(startValue) <= partStringToInt(compareValue) && partStringToInt(compareValue) <= partStringToInt(endValue);
    console.log(`compareMontHBetween__Strt_Sel_End(${fromDate[1]}, ${compareDate[1]}, ${toDate[1]}): ", ${compareMontHBetween__Strt_Sel_End(fromDate[1], compareDate[1], toDate[1])}`);


    const compareDayBetween__Strt_Sel_End = (startValue:string, compareValue:string, endValue:string) => partStringToInt(startValue) <= partStringToInt(compareValue) && partStringToInt(compareValue) <= partStringToInt(endValue);
    console.log(`compareDayBetween__Strt_Sel_End(${fromDate[2]}, ${compareDate[2]}, ${toDate[2]}): ", ${compareDayBetween__Strt_Sel_End(fromDate[2], compareDate[2], toDate[2])}`);



    const result = compareYearBetween_Strt_Sel_End(fromDate[0], compareDate[0], toDate[0]) // Year
        || compareMontHBetween__Strt_Sel_End(fromDate[1], compareDate[1], toDate[1]) // Month
        && compareDayBetween__Strt_Sel_End(fromDate[2].substring(0, 2), compareDate[2].substring(0, 2), toDate[2].substring(0, 2)); // Day
    console.log(result);

    return result;

};

// const all_DateIDS_in_interval= filter__DateIDs_in_Interval(all_Interval_Days,all__DateIDS);
const filter__DateIDs_in_Interval= (all_Interval_Days:string[],all__DateIDS:{oneDay:dateToDayId_Interface}[])=> {





    // console.log(found);

    return "RPG";
}


const filter_User_BY_Date_and_Status = (state: any,
                                        action: PayloadAction<user_Filter_Payload_Interface>) => {



    const all_Interval_Days:string[]= [];

    // console.log("action.payload;: ",action.payload);

    const temp__all_connect_later_Data = state.all_connect_later_Data;  // all_connect_later_Data//  <====   feedzData;

    const {startDate,endDate,userCategory}: user_Filter_Payload_Interface = action.payload;

    console.log("startDate: ",startDate); //12/23/21 //MONTH/DAY/YEAR  // 01/01/16
    console.log("endDate: ",endDate);  // 01/01/22   01/01/17



    // console.log("userCategory: ",userCategory);



    const start_Date_Splitted = startDate.split('/');


    const date_OF_StartDate= parseInt(start_Date_Splitted[1],10); // day
    const month_OF_StartDate = parseInt(start_Date_Splitted[0],10); // month //-1; // parseInt(parts2[1],10) - 1;
    const year_OF_StartDate = parseInt(start_Date_Splitted[2],10); // year





    // console.log("start_Date_Splitted: ",start_Date_Splitted);
    // console.log("year_OF_StartDate: ",year_OF_StartDate);
    // console.log("month_OF_StartDate: ",month_OF_StartDate);
    // console.log("date_OF_StartDate: ",date_OF_StartDate);






    const end_Date_Splitted = endDate.split('/');


    const date_OF_EndDate= parseInt(end_Date_Splitted[1],10); // day
    const month_OF_EndDate = parseInt(end_Date_Splitted[0],10); // month //-1; // parseInt(parts2[1],10) - 1;
    const year_OF_EndDate= parseInt(end_Date_Splitted[2],10); // year





    // console.log("end_Date_Splitted: ",end_Date_Splitted);
    // console.log("year_OF_EndDate: ",year_OF_EndDate);
    // console.log("month_OF_EndDate: ",month_OF_EndDate);
    // console.log("date_OF_EndDate: ",date_OF_EndDate);





    let inital_Date_only = date_OF_StartDate;
    let end_Date_only = date_OF_EndDate;


    let inital_Month_only = month_OF_StartDate;
    let end_Month_only = month_OF_EndDate;

    let inital_year_only = year_OF_StartDate;
    let end_year_only = year_OF_EndDate;

    const yearly_Month_Limit =12;
    const monthly_Date_Limit =31;
    let counter =0;
    console.log("counter: ", counter);


    console.log("inital_Date_only: ",inital_Date_only);
    console.log("end_Date_only: ",end_Date_only);


    // for(i = 0, j = 0; (i < p) && (j < q); i++, j++){
    // i < p, j < q
    for(inital_Date_only; (inital_Date_only <= end_Date_only) && (inital_Month_only<=end_Month_only) && (inital_year_only<=end_year_only); inital_Date_only++ ){

        const oneDate=`20${inital_year_only}-${
            ((inital_Month_only.toString()).length===2)
                ?inital_Month_only
                :"0"+inital_Month_only
        }-${
            ((inital_Date_only.toString()).length===2)
                ?inital_Date_only
                :"0"+inital_Date_only
        }`
        all_Interval_Days.push(oneDate);
        //


        if (inital_Date_only===monthly_Date_Limit){
            inital_Date_only=0;
            inital_Month_only=inital_Month_only+1;

        }


        if (inital_Month_only===yearly_Month_Limit){
            inital_Month_only=0;
            inital_year_only=inital_year_only+1;

        }
        counter = counter+1;

    }

    console.log("counter: ",counter);




    const allUserS: Profile= state.user_Data_State_in_Slice.map((item: UserActivity) =>
        item.profile);

    // const allUserIDS= state.user_Data_State_in_Slice.map((item: UserActivity) =>
    //     item.toString).join(', ');


    // console.log("allUserSName::",allUserSName);





    /*

    const RPG=  state.user_Data_State_in_Slice.map((item: UserActivity) =>


                (Object.entries(item.calendar.dateToDayId))



    );
    */



    state.all_Read_USER_Data= allUserS;
    state.all_USER_Data= allUserS;  //state.sizeOFTotalState_feedz= RPG_Filtered.length;
    // state.endReachedState_connect_trip____later=true;


};




// const realm_connect__Later__data_to_redux


export const convert_string_date_to_UTC_date_Realm_To_Redux_String_TO_Date_C_Later= (stringDate:string) => {




    // const parts2 ='2021-12-01 11:33:19'.split('-');
    const parts2 = stringDate.split('-');
    const parts3 = parts2[2].split(':');
    const parts4 = parts3[0].split(' ')[1];

    const year= parseInt(parts2[0],10);
    const month = parseInt(parts2[1],10)-1; // parseInt(parts2[1],10) - 1;
    const day = parseInt(parts3[0],10);
    const hour = parseInt(parts4,10);
    const minute = parseInt(parts3[1],10);
    const second = parseInt(parts3[2],10);



    const  mydate2 = new Date(Date.UTC(year,month ,day ,hour,minute,second));
    // const  mydate2 = new Date(Date.UTC(year,month ,day ,hour,minute,second)).toLocaleDateString('en-BD');

    console.log(`input: ,${stringDate} and output: ${mydate2}`);
    // console.log("mydate2: ", mydate2);

    return mydate2;
};


const loading_false_connect_later = (state: any,  action: PayloadAction<null>) => {

    state.show_Loading_connect_trip___later = false;
};






const checkDate=(some_Connect_LaterDate:string)=> {
    console.log("some_Connect_LaterDate: ",some_Connect_LaterDate);

    // one_Connect_Now_Data.trip_date.toString(),
    return some_Connect_LaterDate;
};







const filter_by_String = (state: any,
                             action: PayloadAction<string>) => {


    console.log(" at << filter_by_String >>");
    const temp_Search_String = action.payload;


    console.log("temp_Search_String: ",temp_Search_String);




    if (temp_Search_String!==undefined){

        const all_USER_Data_Temp =state.all_USER_Data;



        const filtered_Peoples = all_USER_Data_Temp.filter((oneItem:Profile) => oneItem.name.toLocaleLowerCase().
        match(temp_Search_String.toLocaleLowerCase()));

        // state.read_active_partner_data = filteredActivePartners;
        // state.read_active_partner_data.concat(newData);

        // state.read_active_partner_data = state.read_active_partner_data.concat(newData);
        // state.show_Loading__active_partnersSlice=false;


        state.all_Read_USER_Data =filtered_Peoples;


    }



};



// update_search_date_connect_Later2
const reset_search0 = (state: any,
                                      action: PayloadAction<null>) => {


    console.log(" at << reset_search >>");


    // state.all_USER_Data =state.all_USER_Data;
    state.all_Read_USER_Data = state.all_USER_Data;

};



const UserAnalyzerSlice = createSlice({
    name: 'userAnalyzer',
    initialState,
    reducers: {

        clear_Tripz_State: (state) => {

            // console.log("initailState0 : after clear_Tripz_State ==> ==> ==> ", initailState0);

            const returnedTarget = Object.assign(state, initailState0);
            // console.log("returnedTarget: ", returnedTarget);
            return returnedTarget;
        },


        filter_Users_By_updated_2_date_intervals_1: filter_User_BY_Date_and_Status,
        reset_search:reset_search0,
        filter_person_by_Search_String: filter_by_String,
        offline_Thus_loading_state_false_connect_Later: loading_false_connect_later,

    },
    extraReducers: (builder) => {













    }
});

export const {


    filter_Users_By_updated_2_date_intervals_1,
    filter_person_by_Search_String,
    reset_search,



} = UserAnalyzerSlice.actions;


export const select_ALL_Profiles_Hidded = (state: RootState) => state.UserAnalyzer_Reducer.all_USER_Data;
export const select_ALL_Profiles = (state: RootState) => state.UserAnalyzer_Reducer.all_Read_USER_Data;







export default UserAnalyzerSlice.reducer;

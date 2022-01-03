export interface UserActivity {
    profile: Profile;
    calendar: Calendar;
    entities: Entities;
    earliestDate: string;
}


export interface Profile {
    pictureUrl: string;
    name: string;
    userID_Custom_Arefin: number,
}

export interface Day {
    id: number;
    userId: number;
    date: string;
    deletedDefaultMealTypes: any[];
}

export interface Meal {
    id: number;
    userId: number;
    dayId: number;
    type: string;
    goals: any[];
}

export interface dateToDayId_Interface{
    x: number;
}
export interface Calendar {
    /*
    dateToDayId: {
        string: number;
    };
    */
    dateToDayId: dateToDayId_Interface;
    dishIdToMealId: {
        string: number;
    };
    mealIdToDayId: {
        string: number;
    };
    daysWithDetails: {
        day: Day;
        details: {
            meal: Meal;
            details: {
                date: string;
                dishes: any;//;Dishes;
                tags: any[];
                photos: any[];
            };
        };
    };
}

export interface Meals {
}

export interface Users {
}

export interface Recipes {
}

export interface DishIdeas {
}

export interface MealPlans {
}


export interface Metadata {
}


export interface Dishes60 {
}


export interface Entities {
    dishes: Dishes60;
    meals: Meals;
    users: Users;
    recipes: Recipes;
    dishIdeas: DishIdeas;
    mealPlans: MealPlans;
    events: {
        events: {
            id: number;
            userId: number;
            entityType: string;
            entityId: number;
            mealData: {
                mealId: number;
                ordinal: number;
                hoursSincePrevious: number;
            };
            mealHasImages: boolean;
            metadata: Metadata;
        };
        index: number;
    };
}

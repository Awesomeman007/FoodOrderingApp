import { NumberValueAccessor } from "@angular/forms/src/directives";

export interface Menu {
    name: string;
    imageURL: string;
    description: string;
    price: number;
}

export interface Order {
    menuNum: string;
    name: string;
    price: number;
    calorie: number;
    protein: number;
    carb: number;
    fats: number;
    time: number;
}

export interface Tracking {
    calorie: number;
    protein: number;
    carb: number;
    fats: number;
    totalExpense: number;

}
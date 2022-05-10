
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CarInput {
    brand: string;
    name: string;
    year: number;
    price: number;
    kilometers: number;
    engine: string;
    picture: string;
}

export interface Car {
    id: string;
    brand: string;
    name: string;
    year: number;
    price: number;
    kilometers: number;
    engine: string;
    picture: string;
}

export interface IQuery {
    car(id: string): Car | Promise<Car>;
    cars(): Car[] | Promise<Car[]>;
}

export interface IMutation {
    createCar(input?: Nullable<CarInput>): Car | Promise<Car>;
    updateCar(id: string): Car | Promise<Car>;
    deleteCar(id: string): boolean | Promise<boolean>;
}

type Nullable<T> = T | null;

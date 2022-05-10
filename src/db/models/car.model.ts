import { Column, Model, Table } from 'sequelize-typescript';

@Table({
    modelName: 'carModel',
    timestamps: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'car'
})
export class Car extends Model {
    @Column
    brand: string;

    @Column
    name: string;

    @Column
    year: number;

    @Column
    price: number;

    @Column
    kilometers: number;

    @Column
    engine: string;

    @Column
    picture: string;
}
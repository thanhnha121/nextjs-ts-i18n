import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "logs", timestamps: false })
export class Logs extends Model {
    @Column(DataType.STRING)
    source: string = "";

    @Column(DataType.STRING)
    device_id: string = "";

    @Column(DataType.STRING)
    user_id: string = "";

    @Column(DataType.STRING)
    os_version: string = "";

    @Column(DataType.STRING)
    device_model: string = "";

    @Column(DataType.STRING)
    type: string = "";

    @Column(DataType.DATE)
    created_at: Date = new Date();

    @Column(DataType.TEXT)
    data: string = "";
}

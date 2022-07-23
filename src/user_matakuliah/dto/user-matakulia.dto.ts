import { Type } from "class-transformer";
import { IsInt, IsNotEmpty } from "class-validator";


export class CreateUserMataKuliahDto {
    userId: number;

    mataKuliahId: number;

    start: number;

    end: number;

    semester: number;
}
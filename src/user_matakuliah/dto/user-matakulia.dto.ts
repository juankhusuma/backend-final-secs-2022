import { Type } from "class-transformer";
import { IsNotEmpty } from "class-validator";


export class CreateUserMataKuliahDto {    
    @IsNotEmpty()
    @Type(() => Number)
    mataKuliahId: number;

    @IsNotEmpty()
    schedule: any;

    @IsNotEmpty()
    start: string;

    @IsNotEmpty()
    end: string;

    @IsNotEmpty()
    semester: number;
}

export class UpdateUserMataKuliahDto {
    schedule: any;

    start: string;

    end: string;

    semester: number;
}
import { Type } from "class-transformer";
import { IsInt, IsNotEmpty } from "class-validator";


export class CreateMataKuliahDto {
    @IsNotEmpty()
    code: string;
    
    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    @IsInt()
    @Type(() => Number)
    room: number;
    
    @IsNotEmpty()
    class: string;
    
    @IsNotEmpty()
    prodi:string
}

export class UpdateMataKuliahDto {
    code: string;
    
    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    @IsInt()
    @Type(() => Number)
    room: number;
    
    @IsNotEmpty()
    class: string;
    
    @IsNotEmpty()
    prodi:string
}
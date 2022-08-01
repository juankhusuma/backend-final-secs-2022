import { IsNotEmpty } from "class-validator";


export class CreatePenilaianDto {
    @IsNotEmpty()
    userId: Number;

    @IsNotEmpty()
    kehadiran: Number;
    
    @IsNotEmpty()
    total_sks: Number;
    
    @IsNotEmpty()
    tugas: Number;
    
    @IsNotEmpty()
    uas: Number;
    
    @IsNotEmpty()
    semester: Number;
}

export class UpdatePenilaianDto {
    kehadiran: Number;
    
    total_sks: Number;
    
    tugas: Number;
    
    uas: Number;
    
    semester: Number;
}

import { IsNotEmpty, IsNumber, IsPositive, IsString, Max, isPositive,Min } from "class-validator";

export class CreateUserDto {
    
    @IsNotEmpty({message :'A nev megadasa kötelező'})
    name:string;

    @IsNotEmpty({message:'a eletkor megadasag'})
    @IsNumber()
    @IsPositive()
    @Max(120)
    @Min(18)
    age:number;

    @IsNotEmpty()
    @IsString()
    city:string;
}

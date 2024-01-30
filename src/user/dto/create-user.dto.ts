import { IsNotEmpty, IsNumber, IsPositive, Max, isPositive } from "class-validator";

export class CreateUserDto {
    
    @IsNotEmpty({message :'A nev megadasa kötelező'})
    name:string;

    @IsNotEmpty({message:'a eletkor megadasag'})
    @IsNumber()
    @IsPositive()
    @Max(120)
    age:number;

    @IsNotEmpty()
    city:string;
}

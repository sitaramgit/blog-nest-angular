import { IsNotEmpty, Length, IsEmail } from "class-validator"

export class CreateUserDto {
    @IsNotEmpty({message: "required"})
    @Length(5, 50)
    name: string

    @Length(5, 100)
    @IsNotEmpty({message: "required"})
    @IsEmail()
    email: string

    @IsNotEmpty({message: "required"})
    @Length(4, 10)
    password: string
}

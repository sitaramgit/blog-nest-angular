import { IsNotEmpty, Length, IsEmail } from "class-validator"

export class CreatePostDto {
    @IsNotEmpty({message: "required"})
    @Length(5, 50)
    title: string

    @Length(5, 1000)
    @IsNotEmpty({message: "required"})
    description: string

    
    image?: any
}

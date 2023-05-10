import { IsNotEmpty, Length, IsEmail } from "class-validator"

export class CreatePostDto {
    @IsNotEmpty({message: "required"})
    @Length(5, 100)
    title: string

    @Length(5, 10000)
    @IsNotEmpty({message: "required"})
    description: string

    user_id?: number;
    
    image?: any
}

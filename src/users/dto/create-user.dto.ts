import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

// Data transfer object for creating a new user
export class CreateUserDto {
  // The name of the user
  @IsString()
  @IsNotEmpty()
  name: string;

  // The email of the user, must be a valid email format
  @IsEmail()
  @IsNotEmpty()
  email: string;

  // The password for the user, minimum length of 8 characters
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}

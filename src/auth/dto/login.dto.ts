import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// Data transfer object for user login
export class LoginDto {
  // The user's email
  @IsEmail()
  @IsNotEmpty()
  email: string;

  // The user's password
  @IsString()
  @IsNotEmpty()
  password: string;
}

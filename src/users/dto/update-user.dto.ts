import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

// Data transfer object for updating a user, extending CreateUserDto with all fields optional
export class UpdateUserDto extends PartialType(CreateUserDto) {}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

// All endpoints in this controller are protected by the JwtAuthGuard
@UseGuards(JwtAuthGuard)
// Defines the base route for all endpoints in this controller as '/users'
@Controller('users')
export class UsersController {
  // Injects the UsersService to handle the business logic
  constructor(private readonly usersService: UsersService) {}

  // Endpoint to create a new user
  /**
   * Handles POST requests to create a new user.
   * @param createUserDto - The data for the new user.
   * @returns The newly created user.
   */
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // Endpoint to get all users
  /**
   * Handles GET requests to retrieve all users.
   * @returns A list of all users.
   */
  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  // Endpoint to get a single user by ID
  /**
   * Handles GET requests to retrieve a single user by their ID.
   * @param id - The ID of the user to retrieve.
   * @returns The user with the specified ID.
   */
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  // Endpoint to update a user's data
  /**
   * Handles PATCH requests to update a user's information.
   * @param id - The ID of the user to update.
   * @param updateUserDto - The data to update the user with.
   * @returns The updated user.
   */
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  // Endpoint to delete a user
  /**
   * Handles DELETE requests to remove a user.
   * @param id - The ID of the user to remove.
   * @returns The removed user.
   */
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';

// This service handles the business logic for the Users module.
@Injectable()
export class UsersService {
  // Injects the UsersRepository to interact with the data layer
  constructor(private readonly usersRepository: UsersRepository) {}

  // Creates a new user
  /**
   * Creates a new user.
   * @param createUserDto - The data for the new user.
   * @returns The newly created user.
   */
  async create(createUserDto: CreateUserDto) {
    return this.usersRepository.create(createUserDto);
  }

  // Returns all users
  /**
   * Retrieves all users.
   * @returns A list of all users.
   */
  async findAll() {
    return this.usersRepository.findAll();
  }

  // Finds a user by their ID
  /**
   * Retrieves a single user by their ID.
   * @param id - The ID of the user to retrieve.
   * @returns The user with the specified ID.
   * @throws NotFoundException if the user is not found.
   */
  async findOne(id: number) {
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  /**
   * Retrieves a single user by their email.
   * @param email - The email of the user to retrieve.
   * @returns The user with the specified email.
   */
  async findOneByEmail(email: string) {
    return this.usersRepository.findOneByEmail(email);
  }

  // Updates a user's data
  /**
   * Updates a user's information.
   * @param id - The ID of the user to update.
   * @param updateUserDto - The data to update the user with.
   * @returns The updated user.
   * @throws NotFoundException if the user is not found.
   */
  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.update(id, updateUserDto);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  // Removes a user by their ID
  /**
   * Removes a user by their ID.
   * @param id - The ID of the user to remove.
   * @returns The removed user.
   * @throws NotFoundException if the user is not found.
   */
  async remove(id: number) {
    const user = await this.usersRepository.remove(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }
}

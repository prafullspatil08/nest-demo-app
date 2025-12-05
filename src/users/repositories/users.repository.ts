import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

// This repository handles the data access for the Users module using TypeORM.
@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * Creates a new user in the database.
   * @param createUserDto - The data for the new user.
   * @returns The newly created user.
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  /**
   * Returns all users from the database.
   * @returns A list of all users.
   */
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  /**
   * Finds a user by their ID.
   * @param id - The ID of the user to find.
   * @returns The user with the specified ID, or null if not found.
   */
  async findOne(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  /**
   * Finds a user by their email.
   * @param email - The email of the user to find.
   * @returns The user with the specified email, or null if not found.
   */
  async findOneByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOneBy({ email });
  }

  /**
   * Updates a user's data in the database.
   * @param id - The ID of the user to update.
   * @param updateUserDto - The data to update the user with.
   * @returns The updated user, or null if not found.
   */
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User | null> {
    await this.userRepository.update(id, updateUserDto);
    return this.findOne(id);
  }

  /**
   * Removes a user from the database by their ID.
   * @param id - The ID of the user to remove.
   * @returns The removed user, or null if not found.
   */
  async remove(id: number): Promise<User | null> {
    const user = await this.findOne(id);
    if (!user) {
      return null;
    }
    await this.userRepository.remove(user);
    return user;
  }
}

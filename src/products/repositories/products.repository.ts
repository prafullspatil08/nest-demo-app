import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Product } from '../entities/product.entity';

// This repository handles the data access for the Products module using TypeORM.
@Injectable()
export class ProductsRepository {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  /**
   * Creates a new product in the database.
   * @param createProductDto - The data for the new product.
   * @returns The newly created product.
   */
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = this.productRepository.create(createProductDto);
    return this.productRepository.save(newProduct);
  }

  /**
   * Returns all products from the database.
   * @returns A list of all products.
   */
  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  /**
   * Finds a product by its ID.
   * @param id - The ID of the product to find.
   * @returns The product with the specified ID, or null if not found.
   */
  async findOne(id: number): Promise<Product | null> {
    return this.productRepository.findOneBy({ id });
  }

  /**
   * Updates a product's data in the database.
   * @param id - The ID of the product to update.
   * @param updateProductDto - The data to update the product with.
   * @returns The updated product, or null if not found.
   */
  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product | null> {
    await this.productRepository.update(id, updateProductDto);
    return this.findOne(id);
  }

  /**
   * Removes a product from the database by its ID.
   * @param id - The ID of the product to remove.
   * @returns The removed product, or null if not found.
   */
  async remove(id: number): Promise<Product | null> {
    const product = await this.findOne(id);
    if (!product) {
      return null;
    }
    await this.productRepository.remove(product);
    return product;
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsRepository } from './repositories/products.repository';

// This service handles the business logic for the Products module.
@Injectable()
export class ProductsService {
  // Injects the ProductsRepository to interact with the data layer
  constructor(private readonly productsRepository: ProductsRepository) {}

  // Creates a new product
  /**
   * Creates a new product.
   * @param createProductDto - The data for the new product.
   * @returns The newly created product.
   */
  async create(createProductDto: CreateProductDto) {
    return this.productsRepository.create(createProductDto);
  }

  // Returns all products
  /**
   * Retrieves all products.
   * @returns A list of all products.
   */
  async findAll() {
    return this.productsRepository.findAll();
  }

  // Finds a product by its ID
  /**
   * Retrieves a single product by its ID.
   * @param id - The ID of the product to retrieve.
   * @returns The product with the specified ID.
   * @throws NotFoundException if the product is not found.
   */
  async findOne(id: number) {
    const product = await this.productsRepository.findOne(id);
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  // Updates a product's data
  /**
   * Updates a product's information.
   * @param id - The ID of the product to update.
   * @param updateProductDto - The data to update the product with.
   * @returns The updated product.
   * @throws NotFoundException if the product is not found.
   */
  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productsRepository.update(id, updateProductDto);
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  // Removes a product by its ID
  /**
   * Removes a product by its ID.
   * @param id - The ID of the product to remove.
   * @returns The removed product.
   * @throws NotFoundException if the product is not found.
   */
  async remove(id: number) {
    const product = await this.productsRepository.remove(id);
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }
}

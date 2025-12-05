import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';

/**
 * The bootstrap function is the entry point of the application.
 * It sets up the NestJS application instance and configures global features.
 */
async function bootstrap() {
  // Create a new NestJS application instance
  const app = await NestFactory.create(AppModule);

  // Global prefix for all routes
  // Set a global prefix for all routes in the application
  // This means every endpoint will be prefixed with '/api/v1'
  app.setGlobalPrefix('api/v1');

  // Global validation pipe
  // Apply a global validation pipe to all incoming requests
  // `whitelist: true` ensures that any properties not in the DTO are stripped out
  // `transform: true` automatically transforms incoming data to the DTO's type
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // Global exception filter
  // Apply a global exception filter to catch and format all unhandled exceptions
  app.useGlobalFilters(new GlobalExceptionFilter());

  // Global response interceptor
  // Apply a global response interceptor to format all successful responses
  app.useGlobalInterceptors(new ResponseInterceptor());

  // Start the application and listen for incoming requests on the specified port
  await app.listen(process.env.PORT ?? 3000);
}
// Start the bootstrap process
void bootstrap();

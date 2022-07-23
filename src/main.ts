import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cp from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cp())
  app.enableCors({
    credentials: true,
    origin: ["http://localhost:3000"]
  })
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(4200);
}
bootstrap();

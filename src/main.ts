import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ stopAtFirstError: true, whitelist: true }))
  if(process.env.ENV === 'DEV') {
    await app.listen(3002);
  }

  if(process.env.ENV === 'PROD') {
    await app.listen(process.env.PORT);
  }
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  const PORT = app.get(ConfigService).get<string>('PORT') ?? 5000;
  const config = new DocumentBuilder()
    .setTitle('Food App API')
    .setDescription('List APIs Food App')
    .setVersion('1.0')
    .addTag('Auth')
    .addTag('User')
    .addTag('Food')
    .addTag('Restaurant')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(PORT);
  console.log(`Server run at http://localhost:${PORT}`);
  console.log(`Swagger run at http://localhost:${PORT}/api`);
}
bootstrap();

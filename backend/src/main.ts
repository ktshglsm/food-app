import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = process.env.PORT ?? 5000;
  const app = await NestFactory.create(AppModule);
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

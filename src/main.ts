//import { sequelize } from './db/sequelize';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  // sequelize
  //   .sync()
  //   .then(() => {
  //     console.log();
  //   })
  //   .catch((err: { message: string }) => {
  //     console.log({ src: 'DATABASE', msg: err.message });
  //   });

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

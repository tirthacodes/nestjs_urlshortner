import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShortenModule } from './shorten/shorten.module';
import { ExpnadModule } from './expand/expand.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlMapper } from './entities/url-mapper.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'testuser',
      password: 'testuser123',
      database: 'nestjs_urlshortner',
      entities: [UrlMapper],
      synchronize: true,
    }),
    ShortenModule, ExpnadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

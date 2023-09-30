import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShortenModule } from './shorten/shorten.module';
import { ExpnadModule } from './expnad/expnad.module';

@Module({
  imports: [ShortenModule, ExpnadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

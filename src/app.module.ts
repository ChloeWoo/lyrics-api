import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LyricsModule } from './lyrics/lyrics.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [LyricsModule,
  TypeOrmModule.forRoot({
    type:'sqlite',
    database:'./sqlite/db',
    entities:[__dirname + '/**/*.entity{.ts,.js}'],
    synchronize:true,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

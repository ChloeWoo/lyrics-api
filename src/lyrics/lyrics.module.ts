import { Module } from '@nestjs/common';
import { LyricsService } from './lyrics.service';
import { LyricsController } from './lyrics/lyrics.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lyrics } from '../db/entity/lyrics.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Lyrics]),
  ],
  providers: [LyricsService],
  controllers: [LyricsController]
})
export class LyricsModule {}

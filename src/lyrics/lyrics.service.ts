import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Lyrics } from '../db/entity/lyrics.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class LyricsService {
    constructor(
        @InjectRepository(Lyrics)
        private lyricsRepository:Repository<Lyrics>,
    ){}

    async  findAll(): Promise<Lyrics[]> {
        return await this.lyricsRepository.find();
    }

    async  create(contact: Lyrics): Promise<Lyrics> {
        return await this.lyricsRepository.save(contact);
    }

    async update(contact: Lyrics): Promise<UpdateResult> {
        return await this.lyricsRepository.update(contact.id, contact);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.lyricsRepository.delete(id);
    }
}

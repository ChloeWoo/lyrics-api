import { Controller, Get, Post,Put, Delete, Body, Param } from '@nestjs/common';
import { Lyrics } from '../../db/entity/lyrics.entity';
import { LyricsService } from '../lyrics.service';

@Controller('lyrics')
export class LyricsController {
    constructor(private lyricsService: LyricsService){}

    @Get()
    index(): Promise<Lyrics[]> {
        return this.lyricsService.findAll();
    } 

    @Post('create')
    async create(@Body() lyricsData: Lyrics): Promise<any> {
      return this.lyricsService.create(lyricsData);
    } 

    @Put('update/:id')
    async update(@Param('id') id, @Body() lyricsData: Lyrics): Promise<any> {
        lyricsData.id = Number(id);
        console.log('Update #' + lyricsData.id)
        return this.lyricsService.update(lyricsData);
    } 

    @Delete('delete/:id')
    async delete(@Param('id') id): Promise<any> {
      return this.lyricsService.delete(id);
    }  
}

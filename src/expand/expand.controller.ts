import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { ExpandService } from './expand.service';
import { ExpandUrlDto } from './dtos/ExpandUrl.dto';

@Controller('url')
export class ExpandController {
    constructor(
        private readonly expandService: ExpandService
    ){}

    @Get(':shortcode')
    async ExpandURL(@Param('shortcode') details: string){
        const originalURL = await this.expandService.expandUrl(details);

        return {originalURL};
    }
}

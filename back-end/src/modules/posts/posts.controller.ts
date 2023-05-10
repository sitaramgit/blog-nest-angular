import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Request,
  Delete,
  UseInterceptors,
  UploadedFile,
  UseGuards,
  StreamableFile,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';
import { createReadStream } from 'fs';
import { join } from 'path';
import { response } from 'express';
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(
            null,
            `${file.fieldname}-${uniqueSuffix}.${file.originalname
              .split('.')
              .pop()}`,
          );
        },
      }),
    }),
  )
  create(
    @UploadedFile() file,
    @Body() createPostDto: CreatePostDto,
    @Request() req,
  ) {
    if (file) {
      createPostDto.image = file.filename;
    }
    createPostDto.user_id = req.user.payload.id;
    return this.postsService.create(createPostDto);
    // return this.postsService.create(createPostDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Request() req) {
    const host = req.get('host');
    return this.postsService.findAll().then((data) =>
      data.map((itm: any) => {
        itm.imgUrl = `http://${host}/uploads/${itm.image}`;
        return itm;
      }),
    );
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.postsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}

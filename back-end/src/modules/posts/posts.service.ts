import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {  Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(@InjectRepository(Post)
  private postRepository: Repository<Post>){}
  
  async create(blogPost: CreatePostDto): Promise<Post> {
    return this.postRepository.save(blogPost);
  }

  findAll() {
    return `This action returns all posts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { join } from 'path';
import { QueryFailedError, Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async create(blogPost: CreatePostDto): Promise<Post> {
    return this.postRepository
      .save(blogPost)
      .then((data) => data)
      .catch((error) => {
        if (error instanceof QueryFailedError) {
          throw new HttpException(
            error.driverError.sqlMessage,
            HttpStatus.UNPROCESSABLE_ENTITY,
          );
        }
        throw error;
      });
  }

  findAll() {
    // return this.postRepository.createQueryBuilder('posts').innerJoin('users', 'users', 'users.id = posts.user_id').getMany();
    return this.postRepository.find({ where: { is_active: true } });
  }

  findOne(id: number) {
    // return `This action returns a #${id} post`;
    return this.postRepository.findOne({ where: { id } });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}

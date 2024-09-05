import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async create(data: CreateUserDto) {
    data.password = await bcrypt.hash(data.password, 10);
    try {
      const response = await this.usersRepository.save(data);
      if (response) {
        const { password, ...result } = response;
        return result;
      }
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new HttpException(
          'Email address already exists',
          HttpStatus.CONFLICT,
        );
      }
      throw error;
    }
  }
  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.findOne({ email: email });
    // console.log(await bcrypt.hash(pass, 10));
    if (user && bcrypt.compare(user.password, await bcrypt.hash(pass, 10))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    // console.log(user);
    const isUserExisted = await this.usersRepository.findOne({
      where: { email: user.body.email },
    });
    // console.log(user.body, isUserExisted);
    if (!isUserExisted) {
      throw new HttpException('No user found', HttpStatus.NOT_FOUND);
    }
    const isPasswordValid: boolean = this.isPasswordValid(
      user.body.password,
      isUserExisted.password,
    );

    if (!isPasswordValid) {
      throw new HttpException('No user found', HttpStatus.NOT_FOUND);
    }
    const { password, token, ...result } = isUserExisted;
    const newToken = this.generateToken(result);
    this.usersRepository.update(isUserExisted.id, {
      token: newToken.split('.')[1],
    });
    return {
      userData: result,
      token: newToken,
    };
  }
  public generateToken(user): string {
    return this.jwtService.sign({ id: user.id, email: user.email });
  }

  public async refresh(user: User): Promise<string> {
    this.usersRepository.update(user.id, { updated_at: new Date() });

    return this.generateToken(user);
  }
  public isPasswordValid(password: string, userPassword: string) {
    // console.log(password, userPassword);
    return bcrypt.compareSync(password, userPassword);
  }
  async findOne(id: number | any): Promise<User | undefined> {
    return await this.usersRepository.findOne({ where: { id } });
  }
  decodeToken(token): any {
    return this.jwtService.decode(token);
  }
  findAll() {
    return `This action returns all users`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

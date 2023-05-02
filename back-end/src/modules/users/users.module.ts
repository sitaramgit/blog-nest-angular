import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { LocalStrategy } from 'src/authentication/local.strategy';
import { JwtStrategy } from 'src/authentication/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from 'src/config/constants';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PassportModule,
  JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '24h' },
  }),],
  exports: [TypeOrmModule, UsersService],
  controllers: [UsersController],
  providers: [UsersService, LocalStrategy, JwtStrategy]
})
export class UsersModule {}

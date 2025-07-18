import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user';
import { Announcement } from './entities/announcement';
import { Info } from './entities/info';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'mydb',
      entities: [User, Announcement, Info],
      synchronize: true, // Only for development
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

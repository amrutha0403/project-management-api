import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
//import { UserModule } from './user/user.module';
import { UsersController } from './users/users.controller';
import { TaskModule } from './task/task.module';
import { ProjectModule } from './project/project.module';
import { UsersModule } from './users/users.module';
@Module({
  //imports: [AuthModule, TaskModule, UserModule],
  imports: [UsersModule,AuthModule, ProjectModule,TaskModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}

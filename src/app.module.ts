import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProfileModule } from './profile/profile.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [ProfileModule, BlogModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

import { Controller, Get, Query } from '@nestjs/common';
import { ProfileService } from './profile/profile.service';
import { BlogService } from './blog/blog.service';

@Controller()
export class AppController {
  @Get()
  async ping() {
    return 'pong';
  }
}

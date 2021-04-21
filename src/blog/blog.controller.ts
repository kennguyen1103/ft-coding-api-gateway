import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  Delete,
  Put,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './create-blog.dto';
import { UpdateBlogDto } from './update-blog.dto';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  async getBlogs() {
    return this.blogService.getBlogs();
  }

  @Post()
  async createBlog(@Body() createBlogDto: CreateBlogDto) {
    return this.blogService.createBlog(createBlogDto);
  }

  @Put()
  async updateBlog(@Body() updateBlogDto: UpdateBlogDto) {
    return this.blogService.updateBlog(updateBlogDto);
  }

  @Delete(':id')
  async deleteBlog(@Param('id') id: string) {
    return this.blogService.deleteBlog(id);
  }
}

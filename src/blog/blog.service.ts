import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { CreateBlogDto } from './create-blog.dto';
import { UpdateBlogDto } from './update-blog.dto';

@Injectable()
export class BlogService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [
          'amqps://fzpzwsvr:pKByIWCBFy5XIvX59YRx3AdqZPgeolc7@fish.rmq.cloudamqp.com/fzpzwsvr',
        ],
        queue: 'blogs_queue',
        queueOptions: {
          durable: false,
        },
      },
    });
  }

  getBlogs = () => {
    return this.client.send('getBlogs', {});
  };

  createBlog = (createBlogDto: CreateBlogDto) => {
    return this.client.send('createBlog', createBlogDto);
  };

  updateBlog = (updateBlogDto: UpdateBlogDto) => {
    return this.client.send('updateBlog', updateBlogDto);
  };

  deleteBlog = (id) => {
    return this.client.send('deleteBlog', id);
  };
}

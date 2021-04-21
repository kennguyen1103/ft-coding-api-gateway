import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { SignUpDto } from './signup.dto';

@Injectable()
export class ProfileService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [
          'amqps://fzpzwsvr:pKByIWCBFy5XIvX59YRx3AdqZPgeolc7@fish.rmq.cloudamqp.com/fzpzwsvr',
        ],
        queue: 'profile_queue',
        queueOptions: {
          durable: false,
        },
      },
    });
  }

  getProfile = (userId) => {
    return this.client.send('getProfile', userId);
  };

  singup = (signupDto: SignUpDto) => {
    return this.client.send('signup', signupDto);
  };

  makeupAdmin = () => {
    return this.client.send('makeupAdmin', {});
  };
}

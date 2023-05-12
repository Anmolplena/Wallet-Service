import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserEventsSubscriberModule } from './userEventsSubscriber/userEventsSubscriber.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NATS_CLIENT',
        transport: Transport.NATS,
        options: {
          url: 'nats://localhost:4222',
        },
      },
    ]),
    UserEventsSubscriberModule,
  ]
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { UserEventsSubscriberService } from './userEventsSubscriber.service';
import { WalletService } from 'src/wallet/wallet.service';

@Module({
  providers: [UserEventsSubscriberService,WalletService],
})
export class UserEventsSubscriberModule {}

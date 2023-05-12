import { Injectable } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { WalletService } from '../wallet/wallet.service';

@Injectable()
export class UserEventsSubscriberService {
  constructor(private readonly walletService: WalletService) {}

  @MessagePattern('userEvents')
  async handleUserEvent(data: any) {
    console.log('Received user event:', data);

    const wallet = await this.walletService.createWallet(data.userId);
    console.log('Created wallet:', wallet);
  }
}

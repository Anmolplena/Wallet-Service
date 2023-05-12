import { Injectable } from '@nestjs/common';


@Injectable()
export class WalletService {
  async createWallet(userId: string) {
    // Perform the wallet creation logic here
    const wallet = userId;
    return wallet;
  }
}

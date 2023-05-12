import { WalletService } from '../wallet/wallet.service';
export declare class UserEventsSubscriberService {
    private readonly walletService;
    constructor(walletService: WalletService);
    handleUserEvent(data: any): Promise<void>;
}

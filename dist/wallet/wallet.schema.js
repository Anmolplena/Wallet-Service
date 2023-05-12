"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletSchema = void 0;
const mongoose_1 = require("mongoose");
exports.WalletSchema = new mongoose_1.Schema({
    userType: { type: String, default: 'B2C' },
    balance: { type: Number, default: 0 },
    user_id: { type: String, required: true },
});
//# sourceMappingURL=wallet.schema.js.map
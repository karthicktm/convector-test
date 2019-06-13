import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
import { ConvectorController } from '@worldsibu/convector-core';
import { Paymentcompliance } from './paymentcompliance.model';
export declare class PaymentcomplianceController extends ConvectorController<ChaincodeTx> {
    create(paymentcompliance: Paymentcompliance): Promise<void>;
}

import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core';

import { Paymentcompliance } from './paymentcompliance.model';

@Controller('paymentcompliance')
export class PaymentcomplianceController extends ConvectorController<ChaincodeTx> {
  @Invokable()
  public async create(
    @Param(Paymentcompliance)
    paymentcompliance: Paymentcompliance
  ) {
    await paymentcompliance.save();
  }
}
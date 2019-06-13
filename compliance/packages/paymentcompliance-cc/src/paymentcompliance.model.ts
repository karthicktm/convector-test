import * as yup from 'yup';
import {
  ConvectorModel,
  Default,
  ReadOnly,
  Required,
  Validate
} from '@worldsibu/convector-core-model';

export class Paymentcompliance extends ConvectorModel<Paymentcompliance> {
  @ReadOnly()
  @Required()
  public readonly type = 'io.worldsibu.paymentcompliance';

  @Required()
  @Validate(yup.string())
  public challanStatus: string;

  @Required()
  @Validate(yup.string())
  public vendorCodeNo: string;

  @Required()
  @Validate(yup.string())
  public vendorName: string;

  @Required()
  @Validate(yup.string())
  public month: string;

  @Required()
  @Validate(yup.string())
  public challanNo: string;

  @Required()
  @Validate(yup.string())
  public txnNo: string;

  @Required()
  @Validate(yup.string())
  public amountPaid: string;

  @Required()
  @Validate(yup.string())
  public challanDate: string;

 
}

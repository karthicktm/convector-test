// tslint:disable:no-unused-expression
import { join } from 'path';
import { expect } from 'chai';
import * as uuid from 'uuid/v4';
import { MockControllerAdapter } from '@worldsibu/convector-adapter-mock';
import { ClientFactory, ConvectorControllerClient } from '@worldsibu/convector-core';
import 'mocha';

import { Paymentcompliance, PaymentcomplianceController } from '../src';

describe('Paymentcompliance', () => {
  let adapter: MockControllerAdapter;
  let paymentcomplianceCtrl: ConvectorControllerClient<PaymentcomplianceController>;
  
  before(async () => {
    // Mocks the blockchain execution environment
    adapter = new MockControllerAdapter();
    paymentcomplianceCtrl = ClientFactory(PaymentcomplianceController, adapter);

    await adapter.init([
      {
        version: '*',
        controller: 'PaymentcomplianceController',
        name: join(__dirname, '..')
      }
    ]);
  });
  
  it('should create a default model', async () => {
    const modelSample = new Paymentcompliance({
      id: uuid(),
      name: 'Test',
      created: Date.now(),
      modified: Date.now()
    });

    await paymentcomplianceCtrl.create(modelSample);
  
    const justSavedModel = await adapter.getById<Paymentcompliance>(modelSample.id);
  
    expect(justSavedModel.id).to.exist;
  });
});
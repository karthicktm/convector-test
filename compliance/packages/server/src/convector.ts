import { join, resolve } from "path";
import { keyStore, identityName, channel, chaincode, networkProfile, identityId } from './env';
import * as fs from 'fs';
import { FabricControllerAdapter } from '@worldsibu/convector-adapter-fabric';
import { ClientFactory } from '@worldsibu/convector-core';

import { PaymentcomplianceController, Paymentcompliance } from 'paymentcompliance-cc';

const adapter = new FabricControllerAdapter({
    txTimeout: 300000,
    user: identityName,
    channel,
    chaincode,
    keyStore: resolve(__dirname, keyStore),
    networkProfile: resolve(__dirname, networkProfile)
    // userMspPath: keyStore
});

export const initAdapter = adapter.init();
export const PaymentcomplianceControllerBackEnd = ClientFactory(PaymentcomplianceController, adapter);

//#region Optional

/**
 * Check if the identity has been initialized in the chaincode.
 */
export async function InitServerIdentity() {
    await initAdapter;
    // const res = await PaymentcomplianceControllerBackEnd.get(identityId);
    // try {
    //     const serverIdentity = new Paymentcompliance(res).toJSON();

    //     if (!serverIdentity || !serverIdentity.id) {
    //         throw new Error('Server identity does not exists, make sure to enroll it or seed data');
    //     } else {
    //         console.log('Server identity exists');
    //     }
    // } catch (ex) {
    //     console.log(JSON.stringify(ex));
    //     throw new Error('Server identity does not exists, make sure to enroll it or seed data');
    // }
}

const contextPath = join(keyStore + '/' + identityName);
fs.readFile(contextPath, 'utf8', async function (err, data) {
    if (err) {
        throw new Error(`Context in ${contextPath} doesn't exist. Make sure that path resolves to your key stores folder`);
    } else {
        console.log('Context path with cryptographic materials exists');
    }
});

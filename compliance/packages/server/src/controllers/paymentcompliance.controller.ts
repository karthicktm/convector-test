import { Router, Request, Response } from 'express';
import { PaymentcomplianceControllerBackEnd, InitServerIdentity } from '../convector';

const router: Router = Router();

// Check if the server identity has been enrolled successfully
InitServerIdentity();


router.post('/upload', async (req: Request, res: Response) => {

  let { id, challanStatus, vendorCodeNo, vendorName, month, challanNo, txnNo, amountPaid, challanDate } = req.body;

  try{
	let uploadData = new Paymentcompliance({id, challanStatus, vendorCodeNo, vendorName, month, challanNo, txnNo, amountPaid, challanDate});
	await PaymentcomplianceControllerBackEnd.create(uploadData)
	res.status(201).send("uploaded successfully");
    }catch(err)
   {
	console.log(err);
	res.status(500).send(err);
   }
}
});
export const PaymentcomplianceExpressController: Router = router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var convector_core_1 = require("@worldsibu/convector-core");
var paymentcompliance_model_1 = require("./paymentcompliance.model");
var PaymentcomplianceController = (function (_super) {
    tslib_1.__extends(PaymentcomplianceController, _super);
    function PaymentcomplianceController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaymentcomplianceController.prototype.create = function (paymentcompliance) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, paymentcompliance.save()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(paymentcompliance_model_1.Paymentcompliance))
    ], PaymentcomplianceController.prototype, "create", null);
    PaymentcomplianceController = tslib_1.__decorate([
        convector_core_1.Controller('paymentcompliance')
    ], PaymentcomplianceController);
    return PaymentcomplianceController;
}(convector_core_1.ConvectorController));
exports.PaymentcomplianceController = PaymentcomplianceController;
//# sourceMappingURL=paymentcompliance.controller.js.map
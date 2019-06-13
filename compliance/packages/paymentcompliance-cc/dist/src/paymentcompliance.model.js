"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yup = require("yup");
var convector_core_model_1 = require("@worldsibu/convector-core-model");
var Paymentcompliance = (function (_super) {
    tslib_1.__extends(Paymentcompliance, _super);
    function Paymentcompliance() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'io.worldsibu.paymentcompliance';
        return _this;
    }
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(),
        convector_core_model_1.Required()
    ], Paymentcompliance.prototype, "type", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Paymentcompliance.prototype, "challanStatus", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Paymentcompliance.prototype, "vendorCodeNo", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Paymentcompliance.prototype, "vendorName", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Paymentcompliance.prototype, "month", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Paymentcompliance.prototype, "challanNo", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Paymentcompliance.prototype, "txnNo", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Paymentcompliance.prototype, "amountPaid", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Paymentcompliance.prototype, "challanDate", void 0);
    return Paymentcompliance;
}(convector_core_model_1.ConvectorModel));
exports.Paymentcompliance = Paymentcompliance;
//# sourceMappingURL=paymentcompliance.model.js.map
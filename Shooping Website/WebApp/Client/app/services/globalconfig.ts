
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalConfig {
    apiAddress = 'http://localhost:1200/api';
    webBaseAddress = 'http://localhost:1210';

    paymentGatewayUrl = 'https://test.payu.in/_payment';
    paymentGatewaykey = 'gtKFFx';
    paymentGatewaysalt = 'eCwWELxi';
    cartName = 'MyCart';
}

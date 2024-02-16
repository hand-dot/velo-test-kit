/**
 * [Read more](https://www.wix.com/corvid/reference/wix-ecom.v2.html#)
 */
declare module 'wix-ecom.v2' {
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-ecom-v2.html#currencies)
     */
    const currencies: Currencies;
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-ecom-v2.Currencies.html#)
     */
    interface Currencies {
        /**
         * Returns an array of amounts converted from the original (`from`) currency to the target (`to`) currency and the timestamp for the conversion rate used.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-ecom-v2.Currencies.html#convertCurrency)
         */
        convertCurrency(identifiers: Currencies.ConvertCurrencyIdentifiers, amounts: Array<Currencies.DecimalValue>): Promise<Currencies.ConvertCurrencyResponse>;
        /**
         * Returns the conversion rate between 2 currencies.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-ecom-v2.Currencies.html#getConversionRate)
         */
        getConversionRate(identifiers: Currencies.GetConversionRateIdentifiers): Promise<Currencies.ConversionRateResponse>;
        /**
         * Returns an array of currencies. The array lists all currencies for which Wix supports conversion and their symbols.
         * 	[Read more](https://www.wix.com/corvid/reference/wix-ecom-v2.Currencies.html#listCurrencies)
         */
        listCurrencies(): Promise<Currencies.ListCurrenciesResponse>;
    }
    /**
     * [Read more](https://www.wix.com/corvid/reference/wix-ecom-v2.Currencies.html#)
     */
    namespace Currencies {
        type ConversionRateRequest = {
            /**
             * Original currency to get the rate for as a 3-letter [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) code. The `from` currency code must exist in the array returned by the [`listCurrencies()`](#listcurrencies) function.
             */
            from: string;
            /**
             * Target currency to get the rate for as a 3-letter [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) code. The `to` currency code must exist in the array returned by the [`listCurrencies()`](#listcurrencies) function.
             */
            to: string;
        };
        type ConversionRateResponse = {
            /**
             * Conversion rate between 2 currencies.
             */
            rate?: Currencies.DecimalValue;
            /**
             * Date and time the conversion rate was last updated.
             */
            rateTimestamp?: Date;
        };
        type ConvertCurrencyIdentifiers = {
            /**
             * Original currency to convert from as a 3-letter [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) code. The `from` currency code must exist in the array returned by the [`listCurrencies()`](#listcurrencies) function.
             */
            from: string;
            /**
             * Target currency to convert to as a 3-letter [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) code.  The `to` currency code must exist in the array returned by the [`listCurrencies()`](#listcurrencies) function.
             */
            to: string;
        };
        type ConvertCurrencyRequest = {
            /**
             * Amounts to convert.
             */
            amounts?: Array<Currencies.DecimalValue>;
            /**
             * Original currency to convert from as a 3-letter [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) code. The `from` currency code must exist in the array returned by the [`listCurrencies()`](#listcurrencies) function.
             */
            from: string;
            /**
             * Target currency to convert to as a 3-letter [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) code. The `to` currency code must exist in the array returned by the [`listCurrencies()`](#listcurrencies) function.
             */
            to: string;
        };
        type ConvertCurrencyResponse = {
            /**
             * Converted amounts.
             */
            amounts?: Array<Currencies.DecimalValue>;
            /**
             * Date and time the conversion rate was last updated.
             */
            rateTimestamp?: Date;
        };
        type Currency = {
            /**
             * A 3-letter [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) currency code.
             */
            code?: string;
            /**
             * Currency symbol.
             */
            symbol?: string;
        };
        type CurrencyRate = {};
        type DecimalValue = {
            /**
             * Decimal places to apply. For example, the number of decimal places for `10.95`  is `2`.
             */
            decimalPlaces?: number;
            /**
             * The value without decimal points. For example, the number `10.95` becomes `1095`.
             */
            value?: string;
        };
        type GetConversionRateIdentifiers = {
            /**
             * Original currency to get the rate for as a 3-letter [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) code. The `from` currency code must exist in the array returned by the [`listCurrencies()`](#listcurrencies) function.
             */
            from: string;
            /**
             * Target currency to get the rate for as a 3-letter [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) code. The `to` currency code must exist in the array returned by the [`listCurrencies()`](#listcurrencies) function.
             */
            to: string;
        };
        type ListCurrenciesRequest = {};
        type ListCurrenciesResponse = {
            /**
             * Supported currencies.
             */
            currencies?: Array<Currencies.Currency>;
        };
    }
}

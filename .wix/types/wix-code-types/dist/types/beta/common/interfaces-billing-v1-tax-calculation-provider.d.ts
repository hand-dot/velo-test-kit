declare module "interfaces-billing-v1-tax-calculation-provider" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  /** CalculateTaxRequest includes all the details required to calculate tax for a list of items. */
  interface CalculateTaxRequest {
      /**
       * The tax calculation three-character ISO 4217 currency code that was used for the line item prices.
       * If a different currency is returned on the response, the response will be considered invalid.
       */
      currency?: string;
      /** All the relevant addresses for this calculation should be listed here. Line items will hold only reference to them. */
      addresses?: Address[];
      /** A list of line items to be taxed. */
      lineItems?: LineItem[];
  }
  /** Wix common address format for physical address to use if you plan to store addresses in your service. */
  interface Address {
      /** Country code - 2 letters ISO-3166-1. */
      country?: string | null;
      /** Subdivision. Usually a state, region, prefecture, or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
      subdivision?: string | null;
      /** City name. */
      city?: string | null;
      /** Zip/postal code. */
      postalCode?: string | null;
      /** Main address line, usually street and number as free text. */
      addressLine1?: string | null;
      /** Free text providing more detailed address info. Usually contains Apt, Suite, and Floor. */
      addressLine2?: string | null;
  }
  /** LineItem represents information about a line item. */
  interface LineItem {
      /** The ID of the line item. */
      _id?: string;
      /** Free text description for this line item. */
      itemName?: string | null;
      /** The number of items. */
      quantity?: number;
      /** The price of the line. This is the price of all items in the line together. */
      price?: string;
      /** The known SKU (item code) for this line item. */
      itemCode?: string | null;
      /** The tax group ID this item is related to. If not provided, the default tax rate will be applied. */
      taxGroupId?: string | null;
      /** Indicates whether the price already includes tax. */
      taxIncluded?: boolean;
      /** The address of this line, which can be either from and to locations, or a single location. */
      addressIndex?: AddressIndex;
      /** The tax region ID representing this item address model */
      taxRegionId?: string | null;
  }
  /** AddressIndex represents the addresses used for tax calculation of a specific line item. Indices are Zero-based. */
  interface AddressIndex extends AddressIndexAddressIndexOptionsOneOf {
      /**
       * single address is used for example for tax calculation of a store location.
       * It is a zero-based index of the transaction location in the addresses_info list.
       */
      singleAddress?: number;
      /** this is used for example for tax calculation of items shipped from store warehouse to a shipping address. */
      multipleAddresses?: MultipleAddresses;
  }
  /** @oneof */
  interface AddressIndexAddressIndexOptionsOneOf {
      /**
       * single address is used for example for tax calculation of a store location.
       * It is a zero-based index of the transaction location in the addresses_info list.
       */
      singleAddress?: number;
      /** this is used for example for tax calculation of items shipped from store warehouse to a shipping address. */
      multipleAddresses?: MultipleAddresses;
  }
  /**
   * MultipleAddresses are used for example for tax calculation of items shipped from store warehouse to a shipping address.
   * In this case origin is the warehouse address and destination is the shipping address.
   */
  interface MultipleAddresses {
      /** The index of the origin address, where the specific line item came from. */
      origin?: number;
      /** The index of the destination address, where the specific line item is sent to. */
      destination?: number;
  }
  /** CalculateTaxResponse includes the tax calculation results. */
  interface CalculateTaxResponse {
      /** The tax calculation three-character ISO 4217 currency code that was used for payment for this transaction. */
      currency?: string;
      /** Summary of the tax calculation. */
      taxSummary?: TaxSummary;
      /** The tax details for each line item. */
      lineItemTaxDetails?: LineItemTaxDetails[];
      /** The errors that occurred during the tax calculation. */
      errors?: ApplicationError[];
  }
  interface TaxSummary {
      /** The actual amount of money that exchanged hands. */
      totalAmount?: string;
      /**
       * The total amount of tax calculated for all lines in this calculation.
       * This is the sum of all the tax amounts in the line items before rounding.
       * Because of rounding, this may not be equal to the sum of the tax amounts in the line items.
       */
      totalTax?: string;
      /** The portion of the total amount of this calculation that was taxable. totalTaxable <= totalAmount. */
      totalTaxableAmount?: string;
      /** The sum of the tax_amount for all the line items with tax included in price. */
      totalTaxIncludedInPrice?: string | null;
  }
  /** lineItemTaxDetails represents all the relevant tax details for a specific line item. */
  interface LineItemTaxDetails {
      /** The ID of the line item. */
      _id?: string;
      /** Item description. */
      itemName?: string | null;
      /** The number of items. */
      quantity?: number;
      /** A detailed description of all the tax authorities applied on this item. */
      taxBreakdown?: TaxBreakdown[];
      /** Summary of the tax calculation for this line. */
      taxSummary?: LineItemTaxSummary;
  }
  /**
   * TaxBreakdown represents tax information for a line item.
   * It holds the tax amount and the tax rate for each tax authority that apply on the line item.
   */
  interface TaxBreakdown {
      /** The name of the jurisdiction to which this tax detail applies. For example, "New York" or "Quebec". */
      jurisdiction?: string | null;
      /** The amount of this line item price that was considered nontaxable. (Decimal value) */
      nonTaxableAmount?: string | null;
      /** The rate at which this tax detail was calculated, e.g 0.1000 signifies 10% tax and 2.0000 signifies 200% tax. (Decimal value) */
      rate?: string | null;
      /** The amount of tax estimated for this line item. (Decimal value) */
      taxAmount?: string | null;
      /** The taxable amount of this line item. (Decimal value) */
      taxableAmount?: string | null;
      /** The type of tax that was calculated. Depends on the jurisdiction's tax laws. For example, "Sales Tax", "Income Tax", "Value Added Tax", etc. */
      taxType?: string | null;
      /**
       * The name of the tax against which this tax amount was calculated. For example, "NY State Sales Tax", "Quebec GST", etc.
       * This name should be explicit enough to allow the merchant to understand what tax was calculated.
       */
      taxName?: string | null;
      /** The type of the jurisdiction in which this tax detail applies. */
      jurisdictionType?: JurisdictionType;
  }
  /** JurisdictionType represents the type of the jurisdiction in which this tax detail applies (e.g. Country,State,County,City,Special). */
  enum JurisdictionType {
      UNDEFINED = "UNDEFINED",
      COUNTRY = "COUNTRY",
      STATE = "STATE",
      COUNTY = "COUNTY",
      CITY = "CITY",
      SPECIAL = "SPECIAL"
  }
  interface LineItemTaxSummary {
      /**
       * The full price of the line, total price for all items.
       * To determine the individual item price, divide this by quantity.
       */
      fullPrice?: string | null;
      /** The total amount of tax calculated for all lines in this estimate. This is the sum of all the tax amounts in the line items. */
      taxAmount?: string;
      /** The portion of the total amount of this estimate that was taxable. */
      taxableAmount?: string;
  }
  interface ApplicationError {
      /** Error code. */
      code?: string;
      /** Description of the error. */
      description?: string;
      /** Data related to the error. */
      data?: Record<string, any> | null;
  }
  interface TaxCalculationConfig {
      /** URI where the SPI Implementer is deployed */
      deploymentUri?: SpiBaseUri;
      /** User-friendly name of the tax calculator */
      calculatorDisplayName?: string;
      /** List of countries that are not supported by this tax calculator. Two-letter country code in [ISO-3166 alpha-2](https://www.iso.org/obp/ui/#search/code/) format. */
      unsupportedCountries?: string[];
  }
  interface SpiBaseUri {
      /** URI that will be used by the host to call the implementer. The path-suffix defined on the method will be appended to it */
      baseUri?: string;
      /** override method mappings per method */
      alternativeUris?: AlternativeUri[];
  }
  interface AlternativeUri {
      /** name of the method as it appears in the proto */
      methodName?: string;
      /** absolute uri that will be used by the host to call that method. The path-suffix mapped from the method http option will NOT be appended to this URI. For TPAs. it must be https */
      absoluteUri?: string;
  }
  /**
   * this message is not directly used by any service,
   * it exists to describe the expected parameters that SHOULD be provided to invoked Velo methods as part of open-platform.
   * e.g. SPIs, event-handlers, etc..
   * NOTE: this context object MUST be provided as the last argument in each Velo method signature.
   *
   * Example:
   * ```typescript
   * export function wixStores_onOrderCanceled(event: OrderCanceledEvent, context: Context) {
   * ...
   * }
   * ```
   */
  interface Context {
      /** A unique identifier for each request. Can be used for logging / troubleshooting */
      requestId?: string | null;
      /** 3 capital letters string representing a currency according to ISO-4217 */
      currency?: string | null;
      /** The identification type and identity data */
      identity?: IdentificationData;
      /** A string representing a language and region in the format of "xx-XX". First 2 letters represent the language code according to ISO 639-1. This is followed by a dash "-", and then a by 2 capital letters representing the region according to ISO 3166-2 */
      languages?: string[];
      /** App instance ID of SPI in context */
      instanceId?: string | null;
  }
  enum IdentityType {
      UNKNOWN = "UNKNOWN",
      ANONYMOUS_VISITOR = "ANONYMOUS_VISITOR",
      MEMBER = "MEMBER",
      WIX_USER = "WIX_USER",
      APP = "APP"
  }
  interface IdentificationData extends IdentificationDataIdOneOf {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
      /** @readonly */
      identityType?: IdentityType;
  }
  /** @oneof */
  interface IdentificationDataIdOneOf {
      /** ID of a site visitor that has not logged in to the site. */
      anonymousVisitorId?: string;
      /** ID of a site visitor that has logged in to the site. */
      memberId?: string;
      /** ID of a Wix user (site owner, contributor, etc.). */
      wixUserId?: string;
      /** ID of an app. */
      appId?: string;
  }
  interface CalculateTaxOptions {
      /**
       * The tax calculation three-character ISO 4217 currency code that was used for the line item prices.
       * If a different currency is returned on the response, the response will be considered invalid.
       */
      currency?: string;
      /** All the relevant addresses for this calculation should be listed here. Line items will hold only reference to them. */
      addresses?: Address[];
      /** A list of line items to be taxed. */
      lineItems?: LineItem[];
  }
  
  export { Address, AddressIndex, AddressIndexAddressIndexOptionsOneOf, AlternativeUri, ApplicationError, BusinessError, CalculateTaxOptions, CalculateTaxRequest, CalculateTaxResponse, Context, IdentificationData, IdentificationDataIdOneOf, IdentityType, JurisdictionType, LineItem, LineItemTaxDetails, LineItemTaxSummary, MultipleAddresses, SpiBaseUri, TaxBreakdown, TaxCalculationConfig, TaxSummary };
}

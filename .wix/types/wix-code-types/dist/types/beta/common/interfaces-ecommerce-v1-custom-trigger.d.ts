declare module "interfaces-ecommerce-v1-custom-trigger" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface CustomTrigger {
      /** Custom trigger ID. */
      _id?: string;
      /**
       * Optional - additional data in key:value form
       * This data will be passed to `GetEligibleTriggers` SPI
       * i.e weather trigger - be eligible if temp is above 30 degrees, params will have  { "minTemp": 30 }
       * @internal
       */
      params?: Record<string, any> | null;
  }
  interface ListTriggersRequest {
  }
  interface ListTriggersResponse {
      /** Custom triggers. */
      customTriggers?: ListTriggersResponseCustomTrigger[];
  }
  interface ListTriggersResponseCustomTrigger {
      /** Custom trigger ID. */
      _id?: string;
      /** Custom trigger name to display in the dashboard. */
      name?: string;
  }
  interface GetEligibleTriggersRequest {
      /** List of line items in the cart/checkout. */
      lineItems?: LineItem[];
      /** List of triggers to be checked for discount eligibility. */
      triggers?: TriggerToFilterBy[];
  }
  interface LineItem {
      /** Line item ID. */
      _id?: string;
      /** Item quantity in this line item. */
      quantity?: number | null;
      /**
       * Catalog and item reference. Holds IDs for the item and the catalog it came from, as well as further optional info.
       * This field is empty in the case of a custom line item.
       */
      catalogReference?: CatalogReference;
      /** Price of a single item. */
      price?: string;
  }
  /** Used for grouping line items and is sent on add to cart */
  interface CatalogReference {
      /** ID of the item within its Wix or 3rd-party catalog. For example, `productId` for Wix Stores or `bookingId` for Wix Bookings. */
      catalogItemId?: string;
      /**
       * ID of the app providing the catalog. For items from Wix apps, the following values always apply:
       * + Wix Stores: `"215238eb-22a5-4c36-9e7b-e7c08025e04e"`
       * + Wix Bookings: `"13d21c63-b5ec-5912-8397-c3a5ddb27a97"`
       */
      appId?: string;
      /**
       * Additional info in key:value pairs. For example, to specify Wix Stores product options or variants:
       * + `{"options": {"options": {"Size": "M", "Color": "Red"}}}`
       * + `{"options": {"variantId": "<VARIANT_ID>"}}`
       */
      options?: Record<string, any> | null;
  }
  interface TriggerToFilterBy {
      /** Custom trigger info. */
      customTrigger?: CustomTrigger;
      /** Unique trigger identifier. The same value must be returned in `eligibleTriggers[i].identifier`. */
      identifier?: string | null;
  }
  interface GetEligibleTriggersResponse {
      /** List of eligible triggers. These are used by the Discount Rules API and Wix eCommerce to apply the relevant discount. */
      eligibleTriggers?: EligibleTrigger[];
  }
  interface EligibleTrigger {
      /** Custom trigger ID. Must be passed with relevant `identifier`. */
      customTriggerId?: string;
      /** Unique trigger identifier. The value must be the same as its equivalent in `triggers[i].identifier` in the request payload. */
      identifier?: string | null;
  }
  interface CustomTriggerConfig {
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
  interface GetEligibleTriggersOptions {
      /** List of line items in the cart/checkout. */
      lineItems?: LineItem[];
      /** List of triggers to be checked for discount eligibility. */
      triggers?: TriggerToFilterBy[];
  }
  
  export { BusinessError, CatalogReference, Context, CustomTrigger, CustomTriggerConfig, EligibleTrigger, GetEligibleTriggersOptions, GetEligibleTriggersRequest, GetEligibleTriggersResponse, IdentificationData, IdentificationDataIdOneOf, IdentityType, LineItem, ListTriggersRequest, ListTriggersResponse, ListTriggersResponseCustomTrigger, TriggerToFilterBy };
}

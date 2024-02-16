declare module "wix-app-market-backend" {
  const __debug$1: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface SendBIEventResponse {
  }
  interface SendBIEventRequest {
      /**
       * - `APP_DASHBOARD_LOADED` - should be fired when your app's dashboard is loaded by a site owner or contributor.
       * - `APP_FINISHED_CONFIGURATION` - should be fired when the site owner is completely onboarded and has completed all required configurations for the app to function properly.
       * - `APP_UPGRADED` - should be fired when a site owner upgrades the app to a higher plan (when the upgrade and checkout flow is done on the app side and not via Wix).
       * - `PRIMARY_ACTION_PERFORMED` - should be fired every time a site owner, contributor or visitor triggers the primary action in the app (for example, “review written” for a product reviews app).
       * - `CHARGE` - should be fired when you charge money from the site owner (for example, new purchases or subscription renewal). Make sure to also send `eventData` and a key of `sum`.
       * - `FUNDS_RETURNED` - should be fired when you send money back to a site owner (for example, refunds or chargebacks). Make sure to also send `eventData` and a key of `sum`.
       * - `CUSTOM` - should be fired for any other event which is not supported by the above. Make sure to also send `customEventName`.
       * - `APP_DEPLOYED` - should be fired when the app’s internal code implementation was changed and might affect user flows or cause a regression.
       * - `APP_FINISH_BUSINESS_SETUP` - **Deprecation Notice:** This enum will be removed on March 30, 2023. Use `APP_SETUP_FINISHED` instead;.
       * - `APP_SETUP_FINISHED` - should be fired when the site owner has completed the required business setup.
       */
      eventName?: EventName;
      /** Custom event name. Required when eventName = `CUSTOM`. */
      customEventName?: string | null;
      /**
       * Additional data about the event.
       * Supported keys: `cycle_name`, `currency`, `sum`, `reason`, `app_plan_id`.
       * You can submit your own keys as well.
       * - `cycle_name` - should be one of : `monthly`, `yearly`, `2 years`, `one time`.
       * - `currency` - ISO 4217 currency code.
       * - `sum` - required when eventName = `CHARGE` or `FUNDS_RETURNED`.
       * - `reason` - why the event was triggered.
       * - `app_plan_id` - plan ID as displayed in the Developers Center (returned as `vendorProductId` in the paid plan purchased webhook).
       */
      eventData?: Record<string, string>;
  }
  enum EventName {
      UNKNOWN = "UNKNOWN",
      APP_DASHBOARD_LOADED = "APP_DASHBOARD_LOADED",
      APP_FINISHED_CONFIGURATION = "APP_FINISHED_CONFIGURATION",
      APP_UPGRADED = "APP_UPGRADED",
      PRIMARY_ACTION_PERFORMED = "PRIMARY_ACTION_PERFORMED",
      CUSTOM = "CUSTOM",
      CHARGE = "CHARGE",
      FUNDS_RETURNED = "FUNDS_RETURNED",
      APP_FINISH_BUSINESS_SETUP = "APP_FINISH_BUSINESS_SETUP",
      APP_DEPLOYED = "APP_DEPLOYED",
      APP_SETUP_FINISHED = "APP_SETUP_FINISHED"
  }
  /**
   * Submit a BI event to Wix.
   *
   * This function is not a universal function and runs only on the backend.
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function sendBiEvent(options?: SendBiEventOptions): Promise<void>;
  interface SendBiEventOptions {
      /**
       * - `APP_DASHBOARD_LOADED` - should be fired when your app's dashboard is loaded by a site owner or contributor.
       * - `APP_FINISHED_CONFIGURATION` - should be fired when the site owner is completely onboarded and has completed all required configurations for the app to function properly.
       * - `APP_UPGRADED` - should be fired when a site owner upgrades the app to a higher plan (when the upgrade and checkout flow is done on the app side and not via Wix).
       * - `PRIMARY_ACTION_PERFORMED` - should be fired every time a site owner, contributor or visitor triggers the primary action in the app (for example, “review written” for a product reviews app).
       * - `CHARGE` - should be fired when you charge money from the site owner (for example, new purchases or subscription renewal). Make sure to also send `eventData` and a key of `sum`.
       * - `FUNDS_RETURNED` - should be fired when you send money back to a site owner (for example, refunds or chargebacks). Make sure to also send `eventData` and a key of `sum`.
       * - `CUSTOM` - should be fired for any other event which is not supported by the above. Make sure to also send `customEventName`.
       * - `APP_DEPLOYED` - should be fired when the app’s internal code implementation was changed and might affect user flows or cause a regression.
       * - `APP_FINISH_BUSINESS_SETUP` - **Deprecation Notice:** This enum will be removed on March 30, 2023. Use `APP_SETUP_FINISHED` instead;.
       * - `APP_SETUP_FINISHED` - should be fired when the site owner has completed the required business setup.
       */
      eventName?: EventName;
      /** Custom event name. Required when eventName = `CUSTOM`. */
      customEventName?: string | null;
      /**
       * Additional data about the event.
       * Supported keys: `cycle_name`, `currency`, `sum`, `reason`, `app_plan_id`.
       * You can submit your own keys as well.
       * - `cycle_name` - should be one of : `monthly`, `yearly`, `2 years`, `one time`.
       * - `currency` - ISO 4217 currency code.
       * - `sum` - required when eventName = `CHARGE` or `FUNDS_RETURNED`.
       * - `reason` - why the event was triggered.
       * - `app_plan_id` - plan ID as displayed in the Developers Center (returned as `vendorProductId` in the paid plan purchased webhook).
       */
      eventData?: Record<string, string>;
  }
  
  type devcenterBiEventsV1SendBiEventResponse_universal_d_SendBIEventResponse = SendBIEventResponse;
  type devcenterBiEventsV1SendBiEventResponse_universal_d_SendBIEventRequest = SendBIEventRequest;
  type devcenterBiEventsV1SendBiEventResponse_universal_d_EventName = EventName;
  const devcenterBiEventsV1SendBiEventResponse_universal_d_EventName: typeof EventName;
  const devcenterBiEventsV1SendBiEventResponse_universal_d_sendBiEvent: typeof sendBiEvent;
  type devcenterBiEventsV1SendBiEventResponse_universal_d_SendBiEventOptions = SendBiEventOptions;
  namespace devcenterBiEventsV1SendBiEventResponse_universal_d {
    export {
      __debug$1 as __debug,
      devcenterBiEventsV1SendBiEventResponse_universal_d_SendBIEventResponse as SendBIEventResponse,
      devcenterBiEventsV1SendBiEventResponse_universal_d_SendBIEventRequest as SendBIEventRequest,
      devcenterBiEventsV1SendBiEventResponse_universal_d_EventName as EventName,
      devcenterBiEventsV1SendBiEventResponse_universal_d_sendBiEvent as sendBiEvent,
      devcenterBiEventsV1SendBiEventResponse_universal_d_SendBiEventOptions as SendBiEventOptions,
    };
  }
  
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface PurchasedItem {
      /** Product ID. */
      productId?: string;
      /** Product price. */
      price?: string;
      /** Payment currency. */
      currency?: string;
      /** The billing cycle of the purchased plan. */
      billingCycle?: PaymentCycle;
      /** Order date. */
      dateCreated?: Date;
  }
  enum PaymentCycle {
      NO_CYCLE = "NO_CYCLE",
      MONTHLY = "MONTHLY",
      YEARLY = "YEARLY",
      ONE_TIME = "ONE_TIME",
      TWO_YEARS = "TWO_YEARS",
      THREE_YEARS = "THREE_YEARS",
      FOUR_YEARS = "FOUR_YEARS",
      FIVE_YEARS = "FIVE_YEARS"
  }
  interface InvoiceStatusUpdate {
      /** Invoice payment status. */
      status?: InvoiceStatus;
      /** Wix Premium invoice ID. */
      invoiceId?: string;
      /** App instance ID - a unique ID assigned to each app in each site. */
      instanceId?: string | null;
      /** Whether the invoice is for a single payment or for multiple, recurring payments. */
      recurring?: boolean;
  }
  enum InvoiceStatus {
      UNKNOWN_INVOICE_STATUS = "UNKNOWN_INVOICE_STATUS",
      PAYMENT_FAILED = "PAYMENT_FAILED",
      PAID = "PAID",
      REFUNDED = "REFUNDED",
      VOIDED = "VOIDED",
      CHARGEDBACK = "CHARGEDBACK"
  }
  interface GetUrlRequest {
      /** Product to bill the user for (details taken from Developers Center). */
      productId: string;
      /** URL to redirect user to after a successful purchase. */
      successUrl?: string | null;
      /** Whether this checkout is for testing purposes only (relevant only for in-app purchases). When true, the price charged will be 0.00. */
      testCheckout?: boolean;
      /** Billing cycle (MONTHLY/YEARLY/ONE_TIME). */
      billingCycle?: PaymentCycle;
      /** ISO-3166-1 alpha-2. Defaults to "US". */
      countryCode?: string | null;
      /** ISO-639-1. Defaults to "en". */
      languageCode?: string | null;
      /**
       * Price and currency to charge instead of the default values set in the app's pricing plan in the Wix Developers Center. Optional, pass only when the default pricing plan should not be used. To use the override, billingCycle must be set to `ONE_TIME`.
       * @internal
       */
      chargeOverride?: ChargeOverride;
      /** Coupon Code if there is a discount for this product */
      couponCode?: string | null;
  }
  interface ChargeOverride {
      /** Price to use with the override. Leave empty to use the app's default pricing plan from the Wix Developers Center. */
      price?: number;
      /** Currency to use, ISO-4217. */
      currency?: string;
  }
  interface GetUrlResponse {
      /** Wix checkout URL based on the parameters in the request. */
      checkoutUrl?: string;
      /** The token holds all the data about the order you want to create the checkout for.  It is signed, so you could verify that it came from Wix. */
      token?: string | null;
  }
  interface GetPurchaseHistoryRequest {
  }
  interface GetPurchaseHistoryResponse {
      purchases?: PurchasedItem[];
  }
  interface GetSitePaymentMethodsStatusRequest {
  }
  interface GetSitePaymentMethodsStatusResponse {
      /** Whether there are any online payment providers enabled. This includes things like Wix Payments, Stripe, PayPal, Credit Card providers and more. */
      onlineProviderEnabled?: boolean;
      /** Whether there are any offline payment providers enabled - specifically, whether the site accepts cash payments on premises. */
      offlineProviderEnabled?: boolean;
      /** Whether the Wix point-of-sale provider is enabled, allowing customers to make electronic payments in person. */
      wixPosProviderEnabled?: boolean;
      /** Whether there are any third-party point-of-sale providers enabled, allowing customers to make electronic payments in person. */
      thirdPartyPosProviderEnabled?: boolean;
  }
  interface GetMeteredBillingChargesRequest {
      /** Currency of the charges */
      currency?: string | null;
      /** Start period of the purchase */
      startDate?: Date;
      /** End period of the purchase */
      endDate?: Date;
  }
  interface GetMeteredBillingChargesResponse {
      charges?: Charge[];
  }
  interface Charge {
      /** Unique id with 64 characters */
      _id?: string | null;
      /** Description of the charge */
      description?: string;
      /** Amount to charge the user */
      amount?: string;
  }
  /**
   * The Wix Billing API enables your app to lead customers seamlessly into Wix's checkout process from your platform (e.g., hosting your app's pricing page independently and redirecting to Wix checkout for purchase).
   * The returned checkout link is valid for 48 hours.
   * Note: Use of this functionality is dependent on [setup in the Wix Developers Center](https://devforum.wix.com/en/article/setting-up-an-external-pricing-page).
   *
   * This function is not a universal function and runs only on the backend.
   * @param productId - Product to bill the user for (details taken from Developers Center).
   * @public
   * @documentationMaturity preview
   * @requiredField productId
   * @adminMethod
   */
  function getUrl(productId: string, options?: GetUrlOptions): Promise<GetUrlResponse>;
  interface GetUrlOptions {
      /** URL to redirect user to after a successful purchase. */
      successUrl?: string | null;
      /** Whether this checkout is for testing purposes only (relevant only for in-app purchases). When true, the price charged will be 0.00. */
      testCheckout?: boolean;
      /** Billing cycle (MONTHLY/YEARLY/ONE_TIME). */
      billingCycle?: PaymentCycle;
      /** ISO-3166-1 alpha-2. Defaults to "US". */
      countryCode?: string | null;
      /** ISO-639-1. Defaults to "en". */
      languageCode?: string | null;
      /**
       * Price and currency to charge instead of the default values set in the app's pricing plan in the Wix Developers Center. Optional, pass only when the default pricing plan should not be used. To use the override, billingCycle must be set to `ONE_TIME`.
       * @internal
       */
      chargeOverride?: ChargeOverride;
      /** Coupon Code if there is a discount for this product */
      couponCode?: string | null;
  }
  /**
   * The Purchase History API provides a list of your user's purchase history for your app (particularly relevant for one-time purchases).
   * Note: Cancellations of recurring plans are not included.
   *
   * This function is not a universal function and runs only on the backend.
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function getPurchaseHistory(): Promise<GetPurchaseHistoryResponse>;
  /**
   * The Site Payments Methods Status API is a simple way to check if a site has a payment method setup and can accept payments.
   * It differentiates between 4 different types of payment methods.
   *
   * This function is not a universal function and runs only on the backend.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function getSitePaymentMethodsStatus(): Promise<GetSitePaymentMethodsStatusResponse>;
  /**
   * The Metered Billing Charges is an API endpoint that calls an external developer's SPI to retrieve charges based on metered billing.
   * This API serves as a testing tool for external developers to ensure that their SPI is working as expected.
   *
   * This function is not a universal function and runs only on the backend.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function getMeteredBillingCharges(options?: GetMeteredBillingChargesOptions): Promise<GetMeteredBillingChargesResponse>;
  interface GetMeteredBillingChargesOptions {
      /** Currency of the charges */
      currency?: string | null;
      /** Start period of the purchase */
      startDate?: Date;
      /** End period of the purchase */
      endDate?: Date;
  }
  
  const devcenterCheckoutV1PurchasedItem_universal_d___debug: typeof __debug;
  type devcenterCheckoutV1PurchasedItem_universal_d_PurchasedItem = PurchasedItem;
  type devcenterCheckoutV1PurchasedItem_universal_d_PaymentCycle = PaymentCycle;
  const devcenterCheckoutV1PurchasedItem_universal_d_PaymentCycle: typeof PaymentCycle;
  type devcenterCheckoutV1PurchasedItem_universal_d_InvoiceStatusUpdate = InvoiceStatusUpdate;
  type devcenterCheckoutV1PurchasedItem_universal_d_InvoiceStatus = InvoiceStatus;
  const devcenterCheckoutV1PurchasedItem_universal_d_InvoiceStatus: typeof InvoiceStatus;
  type devcenterCheckoutV1PurchasedItem_universal_d_GetUrlRequest = GetUrlRequest;
  type devcenterCheckoutV1PurchasedItem_universal_d_ChargeOverride = ChargeOverride;
  type devcenterCheckoutV1PurchasedItem_universal_d_GetUrlResponse = GetUrlResponse;
  type devcenterCheckoutV1PurchasedItem_universal_d_GetPurchaseHistoryRequest = GetPurchaseHistoryRequest;
  type devcenterCheckoutV1PurchasedItem_universal_d_GetPurchaseHistoryResponse = GetPurchaseHistoryResponse;
  type devcenterCheckoutV1PurchasedItem_universal_d_GetSitePaymentMethodsStatusRequest = GetSitePaymentMethodsStatusRequest;
  type devcenterCheckoutV1PurchasedItem_universal_d_GetSitePaymentMethodsStatusResponse = GetSitePaymentMethodsStatusResponse;
  type devcenterCheckoutV1PurchasedItem_universal_d_GetMeteredBillingChargesRequest = GetMeteredBillingChargesRequest;
  type devcenterCheckoutV1PurchasedItem_universal_d_GetMeteredBillingChargesResponse = GetMeteredBillingChargesResponse;
  type devcenterCheckoutV1PurchasedItem_universal_d_Charge = Charge;
  const devcenterCheckoutV1PurchasedItem_universal_d_getUrl: typeof getUrl;
  type devcenterCheckoutV1PurchasedItem_universal_d_GetUrlOptions = GetUrlOptions;
  const devcenterCheckoutV1PurchasedItem_universal_d_getPurchaseHistory: typeof getPurchaseHistory;
  const devcenterCheckoutV1PurchasedItem_universal_d_getSitePaymentMethodsStatus: typeof getSitePaymentMethodsStatus;
  const devcenterCheckoutV1PurchasedItem_universal_d_getMeteredBillingCharges: typeof getMeteredBillingCharges;
  type devcenterCheckoutV1PurchasedItem_universal_d_GetMeteredBillingChargesOptions = GetMeteredBillingChargesOptions;
  namespace devcenterCheckoutV1PurchasedItem_universal_d {
    export {
      devcenterCheckoutV1PurchasedItem_universal_d___debug as __debug,
      devcenterCheckoutV1PurchasedItem_universal_d_PurchasedItem as PurchasedItem,
      devcenterCheckoutV1PurchasedItem_universal_d_PaymentCycle as PaymentCycle,
      devcenterCheckoutV1PurchasedItem_universal_d_InvoiceStatusUpdate as InvoiceStatusUpdate,
      devcenterCheckoutV1PurchasedItem_universal_d_InvoiceStatus as InvoiceStatus,
      devcenterCheckoutV1PurchasedItem_universal_d_GetUrlRequest as GetUrlRequest,
      devcenterCheckoutV1PurchasedItem_universal_d_ChargeOverride as ChargeOverride,
      devcenterCheckoutV1PurchasedItem_universal_d_GetUrlResponse as GetUrlResponse,
      devcenterCheckoutV1PurchasedItem_universal_d_GetPurchaseHistoryRequest as GetPurchaseHistoryRequest,
      devcenterCheckoutV1PurchasedItem_universal_d_GetPurchaseHistoryResponse as GetPurchaseHistoryResponse,
      devcenterCheckoutV1PurchasedItem_universal_d_GetSitePaymentMethodsStatusRequest as GetSitePaymentMethodsStatusRequest,
      devcenterCheckoutV1PurchasedItem_universal_d_GetSitePaymentMethodsStatusResponse as GetSitePaymentMethodsStatusResponse,
      devcenterCheckoutV1PurchasedItem_universal_d_GetMeteredBillingChargesRequest as GetMeteredBillingChargesRequest,
      devcenterCheckoutV1PurchasedItem_universal_d_GetMeteredBillingChargesResponse as GetMeteredBillingChargesResponse,
      devcenterCheckoutV1PurchasedItem_universal_d_Charge as Charge,
      devcenterCheckoutV1PurchasedItem_universal_d_getUrl as getUrl,
      devcenterCheckoutV1PurchasedItem_universal_d_GetUrlOptions as GetUrlOptions,
      devcenterCheckoutV1PurchasedItem_universal_d_getPurchaseHistory as getPurchaseHistory,
      devcenterCheckoutV1PurchasedItem_universal_d_getSitePaymentMethodsStatus as getSitePaymentMethodsStatus,
      devcenterCheckoutV1PurchasedItem_universal_d_getMeteredBillingCharges as getMeteredBillingCharges,
      devcenterCheckoutV1PurchasedItem_universal_d_GetMeteredBillingChargesOptions as GetMeteredBillingChargesOptions,
    };
  }
  
  export { devcenterBiEventsV1SendBiEventResponse_universal_d as biEvents, devcenterCheckoutV1PurchasedItem_universal_d as checkout };
}

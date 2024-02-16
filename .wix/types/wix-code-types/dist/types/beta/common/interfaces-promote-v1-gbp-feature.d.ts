declare module "interfaces-promote-v1-gbp-feature" {
  type BusinessError<T = unknown> = {
      __tag: 'BusinessError';
      httpCode: string;
      errorDescription: string;
      applicationCode: string;
      messageSchema: string;
      data: T;
  };
  
  interface GetFeedDataRequest extends GetFeedDataRequestGbpFeatureRequestDataOneOf {
      /** Reserve with google request data */
      reserveWithGoogleData?: ReserveWithGoogleRequestData;
      /** Order with google request data */
      orderWithGoogleData?: OrderWithGoogleRequestData;
  }
  /** @oneof */
  interface GetFeedDataRequestGbpFeatureRequestDataOneOf {
      /** Reserve with google request data */
      reserveWithGoogleData?: ReserveWithGoogleRequestData;
      /** Order with google request data */
      orderWithGoogleData?: OrderWithGoogleRequestData;
  }
  interface ReserveWithGoogleRequestData {
      /** List of service ids to get the details for */
      serviceIds?: string[];
  }
  interface OrderWithGoogleRequestData {
      /** List of menu ids to be listed on google */
      menuIds?: string[];
      /** List of fulfillment methods to be listed on google */
      fulfillmentMethodIds?: string[];
  }
  interface GetFeedDataResponse extends GetFeedDataResponseGbpFeatureResponseDataOneOf {
      /** Services data for reserve with google feature */
      reserveWithGoogleData?: ReserveWithGoogleResponseData;
      /** Order with google response data */
      orderWithGoogleData?: OrderWithGoogleResponseData;
  }
  /** @oneof */
  interface GetFeedDataResponseGbpFeatureResponseDataOneOf {
      /** Services data for reserve with google feature */
      reserveWithGoogleData?: ReserveWithGoogleResponseData;
      /** Order with google response data */
      orderWithGoogleData?: OrderWithGoogleResponseData;
  }
  interface ReserveWithGoogleResponseData {
      /** The main reserve link, when the UoU clicks "Book Now" on google, he will be directed to this link */
      mainReserveUrl?: string;
      /** The list of offered services which will appear on google */
      services?: ReserveWithGoogleService[];
  }
  interface ReserveWithGoogleService extends ReserveWithGoogleServicePriceOneOf, ReserveWithGoogleServiceDurationOneOf {
      /** When the service has a fixed price */
      fixedPrice?: Money;
      /** When the service starts at price */
      priceStartsAt?: Money;
      /** When the service has a price range, should be used for service with a minimum and maximum price */
      priceRange?: PriceRange;
      /** When the service has a fixed duration */
      fixedDuration?: string;
      /** When the service starts at duration */
      durationStartsAt?: string;
      /** When the service has a duration range, should be used for service with a minimum and maximum duration */
      durationRange?: DurationRange;
      /** A unique service ID */
      _id?: string;
      /** The service name */
      name?: string;
      /** The service category */
      category?: string;
      /** The service description */
      description?: string;
      /** The service reserve url */
      serviceReserveUrl?: string;
  }
  /** @oneof */
  interface ReserveWithGoogleServicePriceOneOf {
      /** When the service has a fixed price */
      fixedPrice?: Money;
      /** When the service starts at price */
      priceStartsAt?: Money;
      /** When the service has a price range, should be used for service with a minimum and maximum price */
      priceRange?: PriceRange;
  }
  /** @oneof */
  interface ReserveWithGoogleServiceDurationOneOf {
      /** When the service has a fixed duration */
      fixedDuration?: string;
      /** When the service starts at duration */
      durationStartsAt?: string;
      /** When the service has a duration range, should be used for service with a minimum and maximum duration */
      durationRange?: DurationRange;
  }
  /**
   * Money.
   * Default format to use. Sufficiently compliant with majority of standards: w3c, ISO 4217, ISO 20022, ISO 8583:2003.
   */
  interface Money {
      /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
      value?: string;
      /** Currency code. Must be valid ISO 4217 currency code (e.g., USD). */
      currency?: string;
      /** Monetary amount. Decimal string in local format (e.g., 1 000,30). Optionally, a single (-), to indicate that the amount is negative. */
      formattedValue?: string | null;
  }
  interface PriceRange {
      /** The minimum service price */
      minPrice?: Money;
      /** The maximum service price */
      maxPrice?: Money;
  }
  interface DurationRange {
      /** The minimum service duration */
      minDuration?: string;
      /** The maximum service duration */
      maxDuration?: string;
  }
  interface OrderWithGoogleResponseData {
      /**
       * The main order link, when the UoU clicks "Order Now" on google, he will be directed to this link
       * @readonly
       */
      mainOrderUrl?: string;
      /** The list of fulfillment methods which will appear on google */
      fulfillmentMethods?: FulfillmentMethod[];
      /** The list of service Fees */
      serviceFees?: ServiceFee[];
      /** The list of menus */
      menus?: Menu[];
  }
  interface FulfillmentMethod {
      /** The fulfillment method id */
      _id?: string;
      /** The fulfillment method name */
      name?: string;
      /** The fulfillment method type */
      type?: FulfillmentMethodType;
      /** The fee for the fulfillment method if aplicable */
      fee?: string;
      /** If the fulfillment method is enabled */
      enabled?: boolean;
  }
  enum FulfillmentMethodType {
      FULFILLMENT_METHOD_TYPE_UNKNOWN = "FULFILLMENT_METHOD_TYPE_UNKNOWN",
      DELIVERY = "DELIVERY",
      TAKEOUT = "TAKEOUT"
  }
  interface ServiceFee extends ServiceFeeAmountOneOf {
      /** A fixed amount of fees to be collected. */
      fixedAmount?: Money;
      /** Fees in terms of amount percentage */
      percentage?: string;
      /** A unique fee ID */
      _id?: string;
      /** The Fee Type */
      type?: FeeType;
  }
  /** @oneof */
  interface ServiceFeeAmountOneOf {
      /** A fixed amount of fees to be collected. */
      fixedAmount?: Money;
      /** Fees in terms of amount percentage */
      percentage?: string;
  }
  enum FeeType {
      FEE_TYPE_UNKNOWN = "FEE_TYPE_UNKNOWN",
      DELIVERY = "DELIVERY",
      SERVICE = "SERVICE"
  }
  interface Menu {
      /** The menu id */
      menuId?: string;
      /** The menu name */
      name?: string;
      /** The section item ids on the first level of the menu */
      menuSections?: MenuSection[];
  }
  interface MenuSection {
      /** The menu section id */
      menuSectionId?: string;
      /** The menu section name */
      name?: string;
      /** The section description */
      description?: string;
      /** The section images */
      images?: string[];
      /** The menu item ids inside the section */
      menuItems?: MenuItem[];
      /** The menu sub-sections */
      menuSections?: MenuSection[];
  }
  interface MenuItem extends MenuItemPricingOneOf {
      /** The menu item price */
      price?: Money;
      /** Available variants for the menu item */
      priceVariants?: PriceVariants;
      /** The menu item id */
      menuItemId?: string;
      /** The menu item name */
      name?: string;
      /** The menu item description */
      description?: string;
      /** The menu item images */
      images?: string[];
  }
  /** @oneof */
  interface MenuItemPricingOneOf {
      /** The menu item price */
      price?: Money;
      /** Available variants for the menu item */
      priceVariants?: PriceVariants;
  }
  interface PriceVariants {
      /** The price variants */
      variants?: MenuItemModifier[];
  }
  interface MenuItemModifier {
      /** The menu item modifier id */
      menuItemModifierId?: string;
      /** The menu item modifier name */
      name?: string;
      /** The menu item modifier type. */
      type?: MenuItemModifierType;
      /** The menu item modifier price */
      price?: Money;
  }
  enum MenuItemModifierType {
      MENU_ITEM_MODIFIER_TYPE_UNKNOWN = "MENU_ITEM_MODIFIER_TYPE_UNKNOWN",
      VARIANT = "VARIANT",
      MODIFIER = "MODIFIER"
  }
  interface GbpFeatureConfig {
      /** The URL of the SPI implementation */
      baseUri?: SpiBaseUri;
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
  interface GetFeedDataOptions extends GetFeedDataRequestGbpFeatureRequestDataOneOf {
      /** Reserve with google request data */
      reserveWithGoogleData?: ReserveWithGoogleRequestData;
      /** Order with google request data */
      orderWithGoogleData?: OrderWithGoogleRequestData;
  }
  
  export { AlternativeUri, BusinessError, Context, DurationRange, FeeType, FulfillmentMethod, FulfillmentMethodType, GbpFeatureConfig, GetFeedDataOptions, GetFeedDataRequest, GetFeedDataRequestGbpFeatureRequestDataOneOf, GetFeedDataResponse, GetFeedDataResponseGbpFeatureResponseDataOneOf, IdentificationData, IdentificationDataIdOneOf, IdentityType, Menu, MenuItem, MenuItemModifier, MenuItemModifierType, MenuItemPricingOneOf, MenuSection, Money, OrderWithGoogleRequestData, OrderWithGoogleResponseData, PriceRange, PriceVariants, ReserveWithGoogleRequestData, ReserveWithGoogleResponseData, ReserveWithGoogleService, ReserveWithGoogleServiceDurationOneOf, ReserveWithGoogleServicePriceOneOf, ServiceFee, ServiceFeeAmountOneOf, SpiBaseUri };
}

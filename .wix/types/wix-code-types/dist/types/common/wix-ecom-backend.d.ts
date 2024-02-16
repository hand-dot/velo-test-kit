declare module "wix-ecom-backend" {
    const __debug$9: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface AbandonedCart {
        /** Original cart ID */
        _id?: string;
        /** Cart status */
        status?: Status$1;
        /**
         * Time the cart was abandoned
         * @readonly
         */
        abandonTime?: Date;
        /** Buyer information */
        buyerInfo?: BuyerInfo$6;
        /** Cart total including currency symbol */
        total?: string | null;
        /**
         * History activities
         * @readonly
         */
        activities?: Activity$2[];
    }
    enum Status$1 {
        ABANDONED = "ABANDONED",
        RECOVERED = "RECOVERED"
    }
    interface BuyerInfo$6 {
        /** Wix customer ID */
        _id?: string;
        /** Customer information */
        identityType?: Identity;
        /** Customer's email address */
        email?: string | null;
        /** Customer's phone number */
        phone?: string | null;
        /** Customer's first name */
        firstName?: string | null;
        /** Customer's last name */
        lastName?: string | null;
    }
    enum Identity {
        /** Customer is the site owner */
        ADMIN = "ADMIN",
        /** Customer is logged in */
        MEMBER = "MEMBER",
        /** Customer is not logged in */
        VISITOR = "VISITOR",
        /** Contact was created for the customer */
        CONTACT = "CONTACT"
    }
    interface Activity$2 {
        /**
         * Log item type
         * @readonly
         */
        activityType?: ActivityType$2;
        /**
         * Comment added to Log item
         * @readonly
         */
        message?: string | null;
        /**
         * Log item occurrence timestamp
         * @readonly
         */
        timestamp?: Date;
        /** Custom data for un-typed activities */
        customData?: CustomData;
    }
    enum ActivityType$2 {
        UNRECOGNIZED_TYPE = "UNRECOGNIZED_TYPE",
        SCHEDULED = "SCHEDULED",
        EMAIL_SENT = "EMAIL_SENT",
        EMAIL_NOT_SENT = "EMAIL_NOT_SENT",
        NOTIFICATION_SENT = "NOTIFICATION_SENT",
        TASK_CREATED = "TASK_CREATED",
        CUSTOM_ACTIVITY = "CUSTOM_ACTIVITY"
    }
    interface CustomData {
        /** Activity unique namespace */
        namespace?: string | null;
        /** Custom json field for any desired data */
        customValue?: Record<string, any> | null;
    }
    interface CartAbandonedEvent {
        cartId?: string;
        /**
         * Time the cart was created
         * @readonly
         */
        creationTime?: Date;
        /**
         * Time the cart was abandoned
         * @readonly
         */
        abandonTime?: Date;
        /** Buyer information */
        buyerInfo?: BuyerInfo$6;
        /** Amount of items in cart */
        itemsCount?: number;
        /** Coupon ID (if relevant) */
        couponId?: string;
        /** Subtotal of all line items in cart, not before shipping and taxes */
        totals?: Totals$4;
        /** Checkout URL - checkout with the abandoned cart details */
        checkoutUrl?: string;
        /**
         * checkout id for buy now flow
         * @internal
         * @readonly
         */
        checkoutId?: string | null;
    }
    interface Totals$4 {
        /** Subtotal of all line items in cart, without shipping and taxes */
        subtotal?: number | null;
        /** Total cart price */
        total?: number | null;
        /** Formatted total cart price includes currency symbol */
        formattedTotal?: string;
    }
    interface CartRecoveredEvent {
        cartId?: string;
        /**
         * Time the cart was recovered
         * @readonly
         */
        recoveredTime?: Date;
        /**
         * Time the cart was created
         * @readonly
         */
        creationTime?: Date;
        /**
         * Time the cart was abandoned
         * @readonly
         */
        abandonedTime?: Date;
        /**
         * Checkout id
         * @internal
         * @readonly
         */
        checkoutId?: string | null;
    }
    interface GetAbandonedCartRequest {
        /** Cart ID */
        _id: string;
    }
    interface GetAbandonedCartResponse {
        /** Cart details */
        abandonedCart?: AbandonedCart;
    }
    interface QueryAbandonedCartsRequest {
        /** Query details */
        query?: Query;
    }
    interface Query {
        paging?: Paging;
        /** A filter string, for more information see the intro section */
        filter?: string | null;
        /** Sort string, for more information see the intro section */
        sort?: string | null;
    }
    interface Paging {
        /** The number of items to load */
        limit?: number | null;
        /** The offset since the beginning of the collection */
        offset?: number | null;
    }
    interface QueryAbandonedCartsResponse {
        /** Abandoned carts list */
        abandonedCarts?: AbandonedCart[];
        /** Total number of carts */
        totalResults?: number;
    }
    interface DeleteCartRequest$2 {
        /** Cart ID */
        _id: string;
    }
    interface DeleteCartResponse$2 {
    }
    interface RedirectToCheckoutRequest {
        /** abandoned cart id */
        _id: string;
        /** Identifier of the metaSite this cart uses */
        metaSiteId?: string;
        /** The currency code to create the redirection link with */
        currency?: string | null;
    }
    interface RawHttpResponse {
        body?: Uint8Array;
        statusCode?: number | null;
        headers?: HeadersEntry[];
    }
    interface HeadersEntry {
        key?: string;
        value?: string;
    }
    /**
     * Returns abandoned carts based on the cart ID
     * @param _id - Cart ID
     * @documentationMaturity preview
     * @requiredField _id
     * @returns Cart details
     */
    function getAbandonedCart(_id: string): Promise<AbandonedCart>;
    /**
     * Returns abandoned carts based on the requested query parameters
     * @documentationMaturity preview */
    function queryAbandonedCarts(options?: QueryAbandonedCartsOptions): Promise<QueryAbandonedCartsResponse>;
    interface QueryAbandonedCartsOptions {
        /** Query details */
        query?: Query;
    }
    /**
     * Delete a cart by cart ID
     * @param _id - Cart ID
     * @documentationMaturity preview
     * @requiredField _id
     */
    function deleteCart$1(_id: string): Promise<void>;
    /**
     * Search abandonment cart/checkout by id and redirect to checkout page.
     * @param _id - abandoned cart id
     * @documentationMaturity preview
     * @requiredField _id
     */
    function redirectToCheckout(_id: string, options?: RedirectToCheckoutOptions): Promise<RawHttpResponse>;
    interface RedirectToCheckoutOptions {
        /** Identifier of the metaSite this cart uses */
        metaSiteId?: string;
        /** The currency code to create the redirection link with */
        currency?: string | null;
    }
    type storesV1AbandonedCart_universal_d_AbandonedCart = AbandonedCart;
    type storesV1AbandonedCart_universal_d_Identity = Identity;
    const storesV1AbandonedCart_universal_d_Identity: typeof Identity;
    type storesV1AbandonedCart_universal_d_CustomData = CustomData;
    type storesV1AbandonedCart_universal_d_CartAbandonedEvent = CartAbandonedEvent;
    type storesV1AbandonedCart_universal_d_CartRecoveredEvent = CartRecoveredEvent;
    type storesV1AbandonedCart_universal_d_GetAbandonedCartRequest = GetAbandonedCartRequest;
    type storesV1AbandonedCart_universal_d_GetAbandonedCartResponse = GetAbandonedCartResponse;
    type storesV1AbandonedCart_universal_d_QueryAbandonedCartsRequest = QueryAbandonedCartsRequest;
    type storesV1AbandonedCart_universal_d_Query = Query;
    type storesV1AbandonedCart_universal_d_Paging = Paging;
    type storesV1AbandonedCart_universal_d_QueryAbandonedCartsResponse = QueryAbandonedCartsResponse;
    type storesV1AbandonedCart_universal_d_RedirectToCheckoutRequest = RedirectToCheckoutRequest;
    type storesV1AbandonedCart_universal_d_RawHttpResponse = RawHttpResponse;
    type storesV1AbandonedCart_universal_d_HeadersEntry = HeadersEntry;
    const storesV1AbandonedCart_universal_d_getAbandonedCart: typeof getAbandonedCart;
    const storesV1AbandonedCart_universal_d_queryAbandonedCarts: typeof queryAbandonedCarts;
    type storesV1AbandonedCart_universal_d_QueryAbandonedCartsOptions = QueryAbandonedCartsOptions;
    const storesV1AbandonedCart_universal_d_redirectToCheckout: typeof redirectToCheckout;
    type storesV1AbandonedCart_universal_d_RedirectToCheckoutOptions = RedirectToCheckoutOptions;
    namespace storesV1AbandonedCart_universal_d {
        export { __debug$9 as __debug, storesV1AbandonedCart_universal_d_AbandonedCart as AbandonedCart, Status$1 as Status, BuyerInfo$6 as BuyerInfo, storesV1AbandonedCart_universal_d_Identity as Identity, Activity$2 as Activity, ActivityType$2 as ActivityType, storesV1AbandonedCart_universal_d_CustomData as CustomData, storesV1AbandonedCart_universal_d_CartAbandonedEvent as CartAbandonedEvent, Totals$4 as Totals, storesV1AbandonedCart_universal_d_CartRecoveredEvent as CartRecoveredEvent, storesV1AbandonedCart_universal_d_GetAbandonedCartRequest as GetAbandonedCartRequest, storesV1AbandonedCart_universal_d_GetAbandonedCartResponse as GetAbandonedCartResponse, storesV1AbandonedCart_universal_d_QueryAbandonedCartsRequest as QueryAbandonedCartsRequest, storesV1AbandonedCart_universal_d_Query as Query, storesV1AbandonedCart_universal_d_Paging as Paging, storesV1AbandonedCart_universal_d_QueryAbandonedCartsResponse as QueryAbandonedCartsResponse, DeleteCartRequest$2 as DeleteCartRequest, DeleteCartResponse$2 as DeleteCartResponse, storesV1AbandonedCart_universal_d_RedirectToCheckoutRequest as RedirectToCheckoutRequest, storesV1AbandonedCart_universal_d_RawHttpResponse as RawHttpResponse, storesV1AbandonedCart_universal_d_HeadersEntry as HeadersEntry, storesV1AbandonedCart_universal_d_getAbandonedCart as getAbandonedCart, storesV1AbandonedCart_universal_d_queryAbandonedCarts as queryAbandonedCarts, storesV1AbandonedCart_universal_d_QueryAbandonedCartsOptions as QueryAbandonedCartsOptions, deleteCart$1 as deleteCart, storesV1AbandonedCart_universal_d_redirectToCheckout as redirectToCheckout, storesV1AbandonedCart_universal_d_RedirectToCheckoutOptions as RedirectToCheckoutOptions, };
    }
    const __debug$8: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface DiscountRule$5 {
        /**
         * Discount rule ID.
         * @readonly
         */
        _id?: string | null;
        /**
         * Revision number, which increments by 1 each time the discount rule is updated.
         * To prevent conflicting changes, the existing `revision` must be used when updating a discount rule.
         */
        revision?: string | null;
        /**
         * Date and time the discount rule was created.
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Date and time the discount rule was last updated.
         * @readonly
         */
        _updatedDate?: Date;
        /** Whether the discount rule is active. */
        active?: boolean | null;
        /** Discount rule name. */
        name?: string | null;
        /**
         * Discount rule trigger. Description of a set of conditions that must be fulfilled to perform pre-defined discounts (see `discounts` field).
         * Not providing a trigger means the discount rule will always be applied (if possible).
         */
        trigger?: DiscountTrigger;
        /** Time frame when the discount rule is active. */
        activeTimeInfo?: ActiveTimeInfo;
        /**
         * Description of a set of discounts that can be performed, if the trigger/s is met.
         * Currently only a single discount is supported.
         */
        discounts?: Discounts;
        /**
         * Discount rule status.
         * @readonly
         */
        status?: Status;
        /**
         * Number of times the discount rule was used.
         * @readonly
         */
        usageCount?: number;
        /**
         * calculated string which describe the discount rule   //WHAT CAN BE THE MAXIMAL VAL?
         * @readonly
         */
        offer?: string | null;
        /**
         * Discount advance settings.
         * @internal
         */
        settings?: DiscountSettings;
    }
    /** DiscountTrigger - description of a set of conditions, that if met, will trigger the associated rule actions */
    interface DiscountTrigger extends DiscountTriggerTriggerOneOf {
        /**
         * Trigger Type
         * @readonly
         */
        triggerType?: TriggerType;
        /** Chain multiple triggers with AND operator. */
        and?: And;
        /** Custom trigger. */
        custom?: Custom;
        /** Subtotal trigger */
        subtotalRange?: SubtotalRange;
        /** Item quantity trigger. */
        itemQuantityRange?: ItemQuantityRange;
    }
    /** @oneof */
    interface DiscountTriggerTriggerOneOf {
        /** Chain multiple triggers with AND operator. */
        and?: And;
        /** Custom trigger. */
        custom?: Custom;
        /** Subtotal trigger */
        subtotalRange?: SubtotalRange;
        /** Item quantity trigger. */
        itemQuantityRange?: ItemQuantityRange;
    }
    /**
     * This object represents a scope of catalog items. Examples:
     * 1. All catalog items of a specific app - type = CATALOG_ITEM, CatalogItemFilter with `catalog_app_id`
     * 2. Specific catalog item - type = CATALOG_ITEM, CatalogItemFilter with `catalog_app_id` + `catalog_item_ids`
     * 3. External catalog filter - type = CUSTOM_FILTER, CustomFilter with 'app_id' + 'params'
     * 4. All items - type = ALL_ITEMS, without ScopeItems
     */
    interface Scope$4 extends ScopeScopeItemsOneOf {
        /** Scope ID. */
        _id?: string;
        /**
         * Scope type.
         * @readonly
         */
        type?: ScopeType;
        /** Catalog item filter. Must be passed with `type."CATALOG_ITEM"`. */
        catalogItemFilter?: CatalogItemFilter;
        /** Custom filter. Must be passed with `type."CATALOG_ITEM"`. */
        customFilter?: CustomFilter;
    }
    /** @oneof */
    interface ScopeScopeItemsOneOf {
        /** Catalog item filter. Must be passed with `type."CATALOG_ITEM"`. */
        catalogItemFilter?: CatalogItemFilter;
        /** Custom filter. Must be passed with `type."CATALOG_ITEM"`. */
        customFilter?: CustomFilter;
    }
    enum ScopeType {
        UNDEFINED_SCOPE = "UNDEFINED_SCOPE",
        /** Items from all sources */
        ALL_ITEMS = "ALL_ITEMS",
        /** Specific catalog items */
        CATALOG_ITEM = "CATALOG_ITEM",
        /** Specific items by custom filters */
        CUSTOM_FILTER = "CUSTOM_FILTER"
    }
    interface CatalogItemFilter {
        /** Catalog App ID. For example, the Wix Stores `appId`, or the 3rd-party `appId`. */
        catalogAppId?: string;
        /** ID of the item within its Wix or 3rd-party catalog. For example, `productId` for Wix Stores. */
        catalogItemIds?: string[];
    }
    interface CustomFilter {
        /** Custom filter app ID. */
        appId?: string;
        /**
         * Custom-filter related data in key:value form.
         * For example, an array of collectionIDs: `{ ["collectionId": "12345"], ["collectionId": "67890"] }`.
         */
        params?: Record<string, any> | null;
    }
    interface And {
        /** Array of triggers. Currently chaining up to 2 triggers is supported. */
        triggers?: DiscountTrigger[];
    }
    interface Custom {
        /** Trigger ID. */
        _id?: string;
        /** App ID of the trigger creator. */
        appId?: string;
        /**
         * Optional - additional data in key:value form.
         * + This data will be passed to the Custom Triggers Service SPI.
         * + For example, for a weather trigger that would be eligible if temperature is above 30 degrees, params would be: `{ "minTemp": 30 }`.
         */
        params?: Record<string, any> | null;
    }
    interface SubtotalRange {
        /**
         * All associated scopes for `SPECIFIC_ITEMS` target type.
         * The trigger will be eligible if the line item is contained in one of the scopes.
         */
        scopes?: Scope$4[];
        /** Price range - from (inclusive). */
        from?: string | null;
        /** Price range - to (inclusive). */
        to?: string | null;
    }
    interface ItemQuantityRange {
        /** All associated scopes for `SPECIFIC_ITEMS` target type. */
        scopes?: Scope$4[];
        /** Quantity range - from (inclusive). */
        from?: number | null;
        /** Quantity range - to (inclusive). */
        to?: number | null;
    }
    enum TriggerType {
        UNDEFINED = "UNDEFINED",
        /** Chain multiple triggers with AND operator */
        AND = "AND",
        /** Subtotal range trigger */
        SUBTOTAL_RANGE = "SUBTOTAL_RANGE",
        /** Item quantity range trigger */
        ITEM_QUANTITY_RANGE = "ITEM_QUANTITY_RANGE",
        /** Custom trigger, see Custom Triggers SPI for more details */
        CUSTOM = "CUSTOM"
    }
    interface ActiveTimeInfo {
        /** Discount rule active start date and time in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format. */
        start?: Date;
        /** Discount rule active end date and time in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format. */
        end?: Date;
    }
    interface Discounts {
        /** Discounts. */
        values?: Discount$3[];
    }
    interface Discount$3 extends DiscountDiscountOneOf {
        /** Type of the target this discount is applied to. */
        targetType?: Type;
        /** Data related to `SPECIFIC_ITEMS` target type. */
        specificItemsInfo?: SpecificItemsInfo;
        /** Discount type. */
        discountType?: DiscountType$5;
        /** Percentage to be discounted from original price. */
        percentage?: number;
        /** Amount to be discounted from original price. */
        fixedAmount?: string;
        /** Fixed price. Line item will be fixed to this price. */
        fixedPrice?: string;
    }
    /** @oneof */
    interface DiscountDiscountOneOf {
        /** Percentage to be discounted from original price. */
        percentage?: number;
        /** Amount to be discounted from original price. */
        fixedAmount?: string;
        /** Fixed price. Line item will be fixed to this price. */
        fixedPrice?: string;
    }
    enum Type {
        /** Target type is not defined */
        UNDEFINED = "UNDEFINED",
        /** Target type is a set of specific items */
        SPECIFIC_ITEMS = "SPECIFIC_ITEMS"
    }
    interface SpecificItemsInfo {
        /** All associated scopes for `SPECIFIC_ITEMS` target type. */
        scopes?: Scope$4[];
        /**
         * limit number of items the discount can be applied to
         * @internal
         */
        limit?: number | null;
    }
    enum DiscountType$5 {
        UNDEFINED = "UNDEFINED",
        /** Percentage discount */
        PERCENTAGE = "PERCENTAGE",
        /** Fixed amount discount */
        FIXED_AMOUNT = "FIXED_AMOUNT",
        /** Fixed price discount */
        FIXED_PRICE = "FIXED_PRICE"
    }
    enum Status {
        /** Rule status is not defined */
        UNDEFINED = "UNDEFINED",
        /** Rule status is live */
        LIVE = "LIVE",
        /** Rule status is expired, it might have been live in the past */
        EXPIRED = "EXPIRED",
        /** Rule status is pending, it might be live in the future */
        PENDING = "PENDING"
    }
    /** The discount settings */
    interface DiscountSettings {
        /** Apply the discount to all items or to the lowest-priced item. */
        appliesTo?: AppliedSubjectType;
        /** Whether the discount is applied on subscription, default value is false. */
        includeSubscription?: boolean | null;
        /** The total usage limit per discount. */
        usageLimit?: number | null;
        /** The usage limit per user per discount. When not provided - this setting does not apply */
        usageLimitPerUser?: number | null;
        /**
         * Opt in to indexing this discount rule by an offline pipeline.
         * Default value is false (rules are not indexed by default).
         * The purpose of indexing discount rules is to allow fast reads of potential discounts on given catalog items,
         * without having to do heavy calculations like in `GetAppliedDiscounts` API.
         * One can read this data from [Discounts Cache Reader Service](https://todo-add-working-link)
         * This can be used for example, to display potential discounts on the storefront.
         * @internal
         */
        indexOptIn?: boolean | null;
        /**
         * limit the number of times the discount rule can be applied per request.
         * for example: in a buy 2 x get y rule, limit of 2 means the discount will be applied to all items in a request containing 4 x items,
         * but in a request containing 6 x and 3 y items, only 2 y items will be discounted since the discount cannot be applied more than twice.
         * @internal
         */
        usageLimitPerRequest?: number | null;
    }
    /** TODO: check if can be removed */
    enum AppliedSubjectType {
        UNDEFINED = "UNDEFINED",
        /** Discount applies to all items at checkout. */
        ALL_ITEMS = "ALL_ITEMS",
        /** Discount applies to the lowest priced item at checkout. */
        LOWEST_PRICED_ITEM = "LOWEST_PRICED_ITEM"
    }
    interface CreateDiscountRuleRequest {
        /** Discount rule info. */
        discountRule: DiscountRule$5;
    }
    interface CreateDiscountRuleResponse {
        /** Discount rule. */
        discountRule?: DiscountRule$5;
    }
    interface GetDiscountRuleRequest {
        /** ID of the discount rule to retrieve. */
        discountRuleId: string;
    }
    interface GetDiscountRuleResponse {
        /** The requested discount rule. */
        discountRule?: DiscountRule$5;
    }
    interface UpdateDiscountRuleRequest {
        /** Discount rule info. */
        discountRule: DiscountRule$5;
        /**
         * Explicit list of fields to update.
         * @internal
         */
        mask?: string[];
    }
    interface UpdateDiscountRuleResponse {
        /** Updated discount rule. */
        discountRule?: DiscountRule$5;
    }
    interface DeleteDiscountRuleRequest {
        /** ID of the discount rule to delete. */
        discountRuleId: string;
    }
    interface DeleteDiscountRuleResponse {
    }
    interface QueryDiscountRulesRequest {
        /** Query options. */
        query: PlatformQuery$1;
    }
    interface PlatformQuery$1 extends PlatformQueryPagingMethodOneOf$1 {
        /** Filter object. */
        filter?: Record<string, any> | null;
        /** Sorting options. For example, `[{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]`. */
        sort?: Sorting$1[];
        /** Pointer to page of results using offset. Cannot be used together with `cursorPaging`. */
        paging?: PlatformPaging$1;
        /** Cursor pointing to page of results. Cannot be used together with `paging`. `cursorPaging.cursor` can not be used together with `filter` or `sort`. */
        cursorPaging?: CursorPaging$1;
    }
    /** @oneof */
    interface PlatformQueryPagingMethodOneOf$1 {
        /** Pointer to page of results using offset. Cannot be used together with `cursorPaging`. */
        paging?: PlatformPaging$1;
        /** Cursor pointing to page of results. Cannot be used together with `paging`. `cursorPaging.cursor` can not be used together with `filter` or `sort`. */
        cursorPaging?: CursorPaging$1;
    }
    interface Sorting$1 {
        /** Name of the field to sort by. */
        fieldName?: string;
        /** Sort order. */
        order?: SortOrder$1;
    }
    enum SortOrder$1 {
        ASC = "ASC",
        DESC = "DESC"
    }
    interface PlatformPaging$1 {
        /** Number of items to load. */
        limit?: number | null;
        /** Number of items to skip in the current sort order. */
        offset?: number | null;
    }
    interface CursorPaging$1 {
        /** Number of items to load. */
        limit?: number | null;
        /**
         * Pointer to the next or previous page in the list of results.
         *
         * You can get the relevant cursor token
         * from the `pagingMetadata` object in the previous call's response.
         * Not relevant for the first request.
         */
        cursor?: string | null;
    }
    interface QueryDiscountRulesResponse {
        /** List of discount rules. */
        discountRules?: DiscountRule$5[];
        /** Details on the paged set of results returned. */
        pagingMetadata?: PlatformPagingMetadata$1;
    }
    interface PlatformPagingMetadata$1 {
        /** The number of items returned in this response. */
        count?: number | null;
        /** The offset which was requested. Returned if offset paging was used. */
        offset?: number | null;
        /** The total number of items that match the query. Returned if offset paging was used. */
        total?: number | null;
        /** Cursors to navigate through result pages. Returned if cursor paging was used. */
        cursors?: Cursors$1;
    }
    interface Cursors$1 {
        /** Cursor pointing to next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to previous page in the list of results. */
        prev?: string | null;
    }
    interface GetAppliedDiscountsRequest {
        /** Line items for which to check for discount rules. */
        lineItems?: LineItem$6[];
    }
    interface LineItem$6 {
        /** Line item ID. */
        _id?: string;
        /** Quantity. */
        quantity?: number | null;
        /**
         * Optional - Catalog and item reference info. See [Catalog SPI](https://bo.wix.com/wix-docs/rest/ecommerce/catalog-spi/introduction) for more details.
         * Empty in the case of a custom line item.
         */
        catalogReference?: CatalogReference$6;
        /** Price. */
        price?: string;
    }
    /** Used for grouping line items and is sent on add to cart */
    interface CatalogReference$6 {
        /** ID of the item within its Wix or 3rd-party catalog. For example, `productId` for Wix Stores or `eventId` for Wix Events. */
        catalogItemId?: string;
        /** ID of the catalog app. For example, the Wix Stores `appId`, or the 3rd-party `appId`. */
        appId?: string;
        /** Additional info in key:value form. For example, `{"options":{"Size": "M", "Color": "Red"}}` or `{"variantId": "<VARIANT_ID>"}`. */
        options?: Record<string, any> | null;
    }
    interface GetAppliedDiscountsResponse {
        /** All eligible discounts. */
        appliedDiscounts?: AppliedDiscount$5[];
    }
    interface AppliedDiscount$5 {
        /** Discount type. */
        discountType?: Type;
        /** IDs of line items the discount applies to. */
        lineItemIds?: string[];
        /** Applied discount rule. */
        appliedDiscountRule?: AppliedDiscountRule;
    }
    interface AppliedDiscountRule {
        /** Discount rule ID. */
        _id?: string;
        /** Discount rule name. */
        name?: DiscountRuleName$5;
        /** Total discount amount from all line items the discount applied to. */
        amount?: MultiCurrencyPrice$4;
        /** Discount rule type. */
        discountRuleType?: DiscountType$5;
    }
    interface DiscountRuleName$5 {
        /** Original discount rule name (in site's default language). */
        original?: string;
        /** Translated discount rule name according to buyer language. Defaults to `original` when not provided. */
        translated?: string | null;
    }
    interface MultiCurrencyPrice$4 {
        /** Amount. */
        amount?: string;
        /**
         * Converted amount.
         * @readonly
         */
        convertedAmount?: string;
        /**
         * Amount formatted with currency symbol.
         * @readonly
         */
        formattedAmount?: string;
        /**
         * Converted amount formatted with currency symbol.
         * @readonly
         */
        formattedConvertedAmount?: string;
    }
    interface DomainEvent$4 extends DomainEventBodyOneOf$4 {
        /** random GUID so clients can tell if event was already handled */
        _id?: string;
        /**
         * Assumes actions are also always typed to an entity_type
         * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
         */
        entityFqdn?: string;
        /**
         * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
         * This is although the created/updated/deleted notion is duplication of the oneof types
         * Example: created/updated/deleted/started/completed/email_opened
         */
        slug?: string;
        /**
         * Assuming that all messages including Actions have id
         * Example: The id of the specific order, the id of a specific campaign
         */
        entityId?: string;
        /** The time of the event. Useful if there was a delay in dispatching */
        eventTime?: Date;
        /**
         * A field that should be set if this event was triggered by an anonymize request.
         * For example you must set it to true when sending an event as a result of a GDPR right to be forgotten request.
         * NOTE: This field is not relevant for `EntityCreatedEvent` but is located here for better ergonomics of consumers.
         */
        triggeredByAnonymizeRequest?: boolean | null;
        /** If present, indicates the action that triggered the event. */
        originatedFrom?: string | null;
        /**
         * A sequence number defining the order of updates to the underlying entity.
         * For example, given that some entity was updated at 16:00 and than again at 16:01,
         * it is guaranteed that the sequence number of the second update is strictly higher than the first.
         * As the consumer, you can use this value to ensure that you handle messages in the correct order.
         * To do so, you will need to persist this number on your end, and compare the sequence number from the
         * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
         */
        entityEventSequence?: string | null;
        createdEvent?: EntityCreatedEvent$4;
        updatedEvent?: EntityUpdatedEvent$4;
        deletedEvent?: EntityDeletedEvent$4;
        actionEvent?: ActionEvent$4;
        extendedFieldsUpdatedEvent?: ExtendedFieldsUpdatedEvent$4;
    }
    /** @oneof */
    interface DomainEventBodyOneOf$4 {
        createdEvent?: EntityCreatedEvent$4;
        updatedEvent?: EntityUpdatedEvent$4;
        deletedEvent?: EntityDeletedEvent$4;
        actionEvent?: ActionEvent$4;
        extendedFieldsUpdatedEvent?: ExtendedFieldsUpdatedEvent$4;
    }
    interface EntityCreatedEvent$4 {
        entityAsJson?: string;
        /**
         * Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity
         * @internal
         */
        triggeredByUndelete?: boolean | null;
    }
    interface EntityUpdatedEvent$4 {
        /**
         * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
         * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
         * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
         */
        currentEntityAsJson?: string;
        /**
         * This field is currently part of the of the EntityUpdatedEvent msg, but scala/node libraries which implements the domain events standard
         * wont populate it / have any reference to it in the API.
         * The main reason for it is that fetching the old entity from the DB will have a performance hit on an update operation so unless truly needed,
         * the developer should send only the new (current) entity.
         * An additional reason is not wanting to send this additional entity over the wire (kafka) since in some cases it can be really big
         * Developers that must reflect the old entity will have to implement their own domain event sender mechanism which will follow the DomainEvent proto message.
         * @internal
         */
        previousEntityAsJson?: string | null;
    }
    interface EntityDeletedEvent$4 {
        /**
         * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
         * @internal
         */
        movedToTrash?: boolean | null;
    }
    interface ActionEvent$4 {
        bodyAsJson?: string;
    }
    interface ExtendedFieldsUpdatedEvent$4 {
        currentEntityAsJson?: string;
    }
    interface Empty$4 {
    }
    /**
     * Creates a new discount rule.
     * @param discountRule - Discount rule info.
     * @internal
     * @documentationMaturity preview
     * @requiredField discountRule
     * @requiredField discountRule.discounts
     * @requiredField discountRule.name
     */
    function createDiscountRule(discountRule: DiscountRule$5): Promise<CreateDiscountRuleResponse>;
    /**
     * Retrieves a discount rule.
     * @param discountRuleId - ID of the discount rule to retrieve.
     * @internal
     * @documentationMaturity preview
     * @requiredField discountRuleId
     */
    function getDiscountRule(discountRuleId: string): Promise<GetDiscountRuleResponse>;
    /**
     * Updates a discount rule.
     *
     * Each time the discount rule is updated, `revision` increments by 1.
     * The existing `revision` must be included when updating the discount rule.
     * This ensures you're working with the latest discount rule information, and it prevents unintended overwrites.
     * @param _id - Discount rule ID.
     * @internal
     * @documentationMaturity preview
     * @requiredField _id
     * @requiredField discountRule
     * @requiredField discountRule.revision
     */
    function updateDiscountRule(_id: string | null, discountRule: UpdateDiscountRule, options?: UpdateDiscountRuleOptions): Promise<UpdateDiscountRuleResponse>;
    interface UpdateDiscountRule {
        /**
         * Discount rule ID.
         * @readonly
         */
        _id?: string | null;
        /**
         * Revision number, which increments by 1 each time the discount rule is updated.
         * To prevent conflicting changes, the existing `revision` must be used when updating a discount rule.
         */
        revision?: string | null;
        /**
         * Date and time the discount rule was created.
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Date and time the discount rule was last updated.
         * @readonly
         */
        _updatedDate?: Date;
        /** Whether the discount rule is active. */
        active?: boolean | null;
        /** Discount rule name. */
        name?: string | null;
        /**
         * Discount rule trigger. Description of a set of conditions that must be fulfilled to perform pre-defined discounts (see `discounts` field).
         * Not providing a trigger means the discount rule will always be applied (if possible).
         */
        trigger?: DiscountTrigger;
        /** Time frame when the discount rule is active. */
        activeTimeInfo?: ActiveTimeInfo;
        /**
         * Description of a set of discounts that can be performed, if the trigger/s is met.
         * Currently only a single discount is supported.
         */
        discounts?: Discounts;
        /**
         * Discount rule status.
         * @readonly
         */
        status?: Status;
        /**
         * Number of times the discount rule was used.
         * @readonly
         */
        usageCount?: number;
        /**
         * calculated string which describe the discount rule   //WHAT CAN BE THE MAXIMAL VAL?
         * @readonly
         */
        offer?: string | null;
        /**
         * Discount advance settings.
         * @internal
         */
        settings?: DiscountSettings;
    }
    interface UpdateDiscountRuleOptions {
        /**
         * Explicit list of fields to update.
         * @internal
         */
        mask?: string[];
    }
    /**
     * Deletes a discount rule.
     * @param discountRuleId - ID of the discount rule to delete.
     * @internal
     * @documentationMaturity preview
     * @requiredField discountRuleId
     */
    function deleteDiscountRule(discountRuleId: string): Promise<void>;
    /**
     * Query discount rules using [WQL (Wix Query Language)](https://dev.wix.com/api/rest/getting-started/api-query-language).
     * Total entries (`pagingMetadata.total`) will be returned only for the first page.
     *
     * > **Note:** `discountRule.status` can't be used for querying.
     * @param query - Query options.
     * @internal
     * @documentationMaturity preview
     * @requiredField query
     */
    function queryDiscountRules(query: PlatformQuery$1): Promise<QueryDiscountRulesResponse>;
    /**
     * Retrieve all discounts that can be applied to the given line items.
     * @internal
     * @documentationMaturity preview
     */
    function getAppliedDiscounts(options?: GetAppliedDiscountsOptions): Promise<GetAppliedDiscountsResponse>;
    interface GetAppliedDiscountsOptions {
        /** Line items for which to check for discount rules. */
        lineItems?: LineItem$6[];
    }
    type ecomDiscountsV1DiscountRule_universal_d_DiscountTrigger = DiscountTrigger;
    type ecomDiscountsV1DiscountRule_universal_d_DiscountTriggerTriggerOneOf = DiscountTriggerTriggerOneOf;
    type ecomDiscountsV1DiscountRule_universal_d_ScopeScopeItemsOneOf = ScopeScopeItemsOneOf;
    type ecomDiscountsV1DiscountRule_universal_d_ScopeType = ScopeType;
    const ecomDiscountsV1DiscountRule_universal_d_ScopeType: typeof ScopeType;
    type ecomDiscountsV1DiscountRule_universal_d_CatalogItemFilter = CatalogItemFilter;
    type ecomDiscountsV1DiscountRule_universal_d_CustomFilter = CustomFilter;
    type ecomDiscountsV1DiscountRule_universal_d_And = And;
    type ecomDiscountsV1DiscountRule_universal_d_Custom = Custom;
    type ecomDiscountsV1DiscountRule_universal_d_SubtotalRange = SubtotalRange;
    type ecomDiscountsV1DiscountRule_universal_d_ItemQuantityRange = ItemQuantityRange;
    type ecomDiscountsV1DiscountRule_universal_d_TriggerType = TriggerType;
    const ecomDiscountsV1DiscountRule_universal_d_TriggerType: typeof TriggerType;
    type ecomDiscountsV1DiscountRule_universal_d_ActiveTimeInfo = ActiveTimeInfo;
    type ecomDiscountsV1DiscountRule_universal_d_Discounts = Discounts;
    type ecomDiscountsV1DiscountRule_universal_d_DiscountDiscountOneOf = DiscountDiscountOneOf;
    type ecomDiscountsV1DiscountRule_universal_d_Type = Type;
    const ecomDiscountsV1DiscountRule_universal_d_Type: typeof Type;
    type ecomDiscountsV1DiscountRule_universal_d_SpecificItemsInfo = SpecificItemsInfo;
    type ecomDiscountsV1DiscountRule_universal_d_Status = Status;
    const ecomDiscountsV1DiscountRule_universal_d_Status: typeof Status;
    type ecomDiscountsV1DiscountRule_universal_d_DiscountSettings = DiscountSettings;
    type ecomDiscountsV1DiscountRule_universal_d_AppliedSubjectType = AppliedSubjectType;
    const ecomDiscountsV1DiscountRule_universal_d_AppliedSubjectType: typeof AppliedSubjectType;
    type ecomDiscountsV1DiscountRule_universal_d_CreateDiscountRuleRequest = CreateDiscountRuleRequest;
    type ecomDiscountsV1DiscountRule_universal_d_CreateDiscountRuleResponse = CreateDiscountRuleResponse;
    type ecomDiscountsV1DiscountRule_universal_d_GetDiscountRuleRequest = GetDiscountRuleRequest;
    type ecomDiscountsV1DiscountRule_universal_d_GetDiscountRuleResponse = GetDiscountRuleResponse;
    type ecomDiscountsV1DiscountRule_universal_d_UpdateDiscountRuleRequest = UpdateDiscountRuleRequest;
    type ecomDiscountsV1DiscountRule_universal_d_UpdateDiscountRuleResponse = UpdateDiscountRuleResponse;
    type ecomDiscountsV1DiscountRule_universal_d_DeleteDiscountRuleRequest = DeleteDiscountRuleRequest;
    type ecomDiscountsV1DiscountRule_universal_d_DeleteDiscountRuleResponse = DeleteDiscountRuleResponse;
    type ecomDiscountsV1DiscountRule_universal_d_QueryDiscountRulesRequest = QueryDiscountRulesRequest;
    type ecomDiscountsV1DiscountRule_universal_d_QueryDiscountRulesResponse = QueryDiscountRulesResponse;
    type ecomDiscountsV1DiscountRule_universal_d_GetAppliedDiscountsRequest = GetAppliedDiscountsRequest;
    type ecomDiscountsV1DiscountRule_universal_d_GetAppliedDiscountsResponse = GetAppliedDiscountsResponse;
    type ecomDiscountsV1DiscountRule_universal_d_AppliedDiscountRule = AppliedDiscountRule;
    const ecomDiscountsV1DiscountRule_universal_d_createDiscountRule: typeof createDiscountRule;
    const ecomDiscountsV1DiscountRule_universal_d_getDiscountRule: typeof getDiscountRule;
    const ecomDiscountsV1DiscountRule_universal_d_updateDiscountRule: typeof updateDiscountRule;
    type ecomDiscountsV1DiscountRule_universal_d_UpdateDiscountRule = UpdateDiscountRule;
    type ecomDiscountsV1DiscountRule_universal_d_UpdateDiscountRuleOptions = UpdateDiscountRuleOptions;
    const ecomDiscountsV1DiscountRule_universal_d_deleteDiscountRule: typeof deleteDiscountRule;
    const ecomDiscountsV1DiscountRule_universal_d_queryDiscountRules: typeof queryDiscountRules;
    const ecomDiscountsV1DiscountRule_universal_d_getAppliedDiscounts: typeof getAppliedDiscounts;
    type ecomDiscountsV1DiscountRule_universal_d_GetAppliedDiscountsOptions = GetAppliedDiscountsOptions;
    namespace ecomDiscountsV1DiscountRule_universal_d {
        export { __debug$8 as __debug, DiscountRule$5 as DiscountRule, ecomDiscountsV1DiscountRule_universal_d_DiscountTrigger as DiscountTrigger, ecomDiscountsV1DiscountRule_universal_d_DiscountTriggerTriggerOneOf as DiscountTriggerTriggerOneOf, Scope$4 as Scope, ecomDiscountsV1DiscountRule_universal_d_ScopeScopeItemsOneOf as ScopeScopeItemsOneOf, ecomDiscountsV1DiscountRule_universal_d_ScopeType as ScopeType, ecomDiscountsV1DiscountRule_universal_d_CatalogItemFilter as CatalogItemFilter, ecomDiscountsV1DiscountRule_universal_d_CustomFilter as CustomFilter, ecomDiscountsV1DiscountRule_universal_d_And as And, ecomDiscountsV1DiscountRule_universal_d_Custom as Custom, ecomDiscountsV1DiscountRule_universal_d_SubtotalRange as SubtotalRange, ecomDiscountsV1DiscountRule_universal_d_ItemQuantityRange as ItemQuantityRange, ecomDiscountsV1DiscountRule_universal_d_TriggerType as TriggerType, ecomDiscountsV1DiscountRule_universal_d_ActiveTimeInfo as ActiveTimeInfo, ecomDiscountsV1DiscountRule_universal_d_Discounts as Discounts, Discount$3 as Discount, ecomDiscountsV1DiscountRule_universal_d_DiscountDiscountOneOf as DiscountDiscountOneOf, ecomDiscountsV1DiscountRule_universal_d_Type as Type, ecomDiscountsV1DiscountRule_universal_d_SpecificItemsInfo as SpecificItemsInfo, DiscountType$5 as DiscountType, ecomDiscountsV1DiscountRule_universal_d_Status as Status, ecomDiscountsV1DiscountRule_universal_d_DiscountSettings as DiscountSettings, ecomDiscountsV1DiscountRule_universal_d_AppliedSubjectType as AppliedSubjectType, ecomDiscountsV1DiscountRule_universal_d_CreateDiscountRuleRequest as CreateDiscountRuleRequest, ecomDiscountsV1DiscountRule_universal_d_CreateDiscountRuleResponse as CreateDiscountRuleResponse, ecomDiscountsV1DiscountRule_universal_d_GetDiscountRuleRequest as GetDiscountRuleRequest, ecomDiscountsV1DiscountRule_universal_d_GetDiscountRuleResponse as GetDiscountRuleResponse, ecomDiscountsV1DiscountRule_universal_d_UpdateDiscountRuleRequest as UpdateDiscountRuleRequest, ecomDiscountsV1DiscountRule_universal_d_UpdateDiscountRuleResponse as UpdateDiscountRuleResponse, ecomDiscountsV1DiscountRule_universal_d_DeleteDiscountRuleRequest as DeleteDiscountRuleRequest, ecomDiscountsV1DiscountRule_universal_d_DeleteDiscountRuleResponse as DeleteDiscountRuleResponse, ecomDiscountsV1DiscountRule_universal_d_QueryDiscountRulesRequest as QueryDiscountRulesRequest, PlatformQuery$1 as PlatformQuery, PlatformQueryPagingMethodOneOf$1 as PlatformQueryPagingMethodOneOf, Sorting$1 as Sorting, SortOrder$1 as SortOrder, PlatformPaging$1 as PlatformPaging, CursorPaging$1 as CursorPaging, ecomDiscountsV1DiscountRule_universal_d_QueryDiscountRulesResponse as QueryDiscountRulesResponse, PlatformPagingMetadata$1 as PlatformPagingMetadata, Cursors$1 as Cursors, ecomDiscountsV1DiscountRule_universal_d_GetAppliedDiscountsRequest as GetAppliedDiscountsRequest, LineItem$6 as LineItem, CatalogReference$6 as CatalogReference, ecomDiscountsV1DiscountRule_universal_d_GetAppliedDiscountsResponse as GetAppliedDiscountsResponse, AppliedDiscount$5 as AppliedDiscount, ecomDiscountsV1DiscountRule_universal_d_AppliedDiscountRule as AppliedDiscountRule, DiscountRuleName$5 as DiscountRuleName, MultiCurrencyPrice$4 as MultiCurrencyPrice, DomainEvent$4 as DomainEvent, DomainEventBodyOneOf$4 as DomainEventBodyOneOf, EntityCreatedEvent$4 as EntityCreatedEvent, EntityUpdatedEvent$4 as EntityUpdatedEvent, EntityDeletedEvent$4 as EntityDeletedEvent, ActionEvent$4 as ActionEvent, ExtendedFieldsUpdatedEvent$4 as ExtendedFieldsUpdatedEvent, Empty$4 as Empty, ecomDiscountsV1DiscountRule_universal_d_createDiscountRule as createDiscountRule, ecomDiscountsV1DiscountRule_universal_d_getDiscountRule as getDiscountRule, ecomDiscountsV1DiscountRule_universal_d_updateDiscountRule as updateDiscountRule, ecomDiscountsV1DiscountRule_universal_d_UpdateDiscountRule as UpdateDiscountRule, ecomDiscountsV1DiscountRule_universal_d_UpdateDiscountRuleOptions as UpdateDiscountRuleOptions, ecomDiscountsV1DiscountRule_universal_d_deleteDiscountRule as deleteDiscountRule, ecomDiscountsV1DiscountRule_universal_d_queryDiscountRules as queryDiscountRules, ecomDiscountsV1DiscountRule_universal_d_getAppliedDiscounts as getAppliedDiscounts, ecomDiscountsV1DiscountRule_universal_d_GetAppliedDiscountsOptions as GetAppliedDiscountsOptions, };
    }
    const __debug$7: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface Recommendation {
        /** recommended items */
        items?: CatalogReference$5[];
        /** algorithm that was used to define recommendation */
        algorithm?: Algorithm;
    }
    /** Used for grouping line items and is sent on add to cart */
    interface CatalogReference$5 {
        /** ID of the item within its Wix or 3rd-party catalog. For example, `productId` for Wix Stores or `eventId` for Wix Events. */
        catalogItemId?: string;
        /** ID of the catalog app. For example, the Wix Stores `appId`, or the 3rd-party `appId`. */
        appId?: string;
        /** Additional info in key:value form. For example, `{"options":{"Size": "M", "Color": "Red"}}` or `{"variantId": "<VARIANT_ID>"}`. */
        options?: Record<string, any> | null;
    }
    interface Algorithm {
        /** algorithm id defined by provider */
        _id?: string;
        /** app id as defined in dev center for algorithm provider */
        appId?: string;
    }
    interface ListAvailableAlgorithmsRequest {
    }
    interface ListAvailableAlgorithmsResponse {
        /** Algorithms available on current site. Depends on installed app. Algorithm will be returned if both algorithm provider and supported catalog app are installed on site. */
        availableAlgorithms?: AlgorithmInfo[];
    }
    interface AlgorithmInfo {
        /** Algorithm's config with data which can be used to display algorithm or get recommendations by it. */
        config?: AlgorithmConfig;
        /** app id as defined in dev center for algorithm provider */
        appId?: string;
        /** app ids of catalogs for which algorithm can be applied */
        catalogAppIds?: string[];
    }
    interface AlgorithmConfig {
        /** Algorithm id sent in requests. Unique per recommendations provider. */
        _id?: string;
        /** Name of algorithm in list of algorithms available for site. For example "Best sellers", "Frequently watched together". This value is not translatable. */
        name?: string;
        /** Description of algorithm in list of algorithms available for site. This value is not translatable. Describes how algorithm works, if it has any limitations regarding site content, number of items, site traffic and so on. */
        description?: string;
        /** This field can be used when `description ` field is not enough to describe algorithm and you want to have separate section with additional info. It can be used to not overload user with too much information on main page. Depending on frontend implementation it can be displayed as tooltip or as additional section which is collapsed by default. */
        additionalInfo?: string | null;
        /**
         * `RELATED_ITEMS` - algorithm provides recommendations based on some other items interested for user/user of user. For example once one item added to cart algorithm can suggest other items frequently bought together with given one.
         * `GLOBAL` - algorithm provides generic recommendations for given site. For example, best sellers items or new arrivals
         */
        algorithmType?: AlgorithmType;
    }
    enum AlgorithmType {
        UNSPECIFIED = "UNSPECIFIED",
        RELATED_ITEMS = "RELATED_ITEMS",
        GLOBAL = "GLOBAL"
    }
    interface GetRecommendationRequest {
        /** items for which related items will be found */
        items?: CatalogReference$5[];
        /**
         * List of algorithms to find recommended items. Sorted by priority.
         * Items found by first algorithm will be returned in response only if number of items greater than `minimum_recommended_items`. Otherwise number of items returned by second algorithm will be checked and so on until one of algorithms returns required number of items.
         * If last algorithm will return not enough items then nothing will be returned in response.
         */
        algorithms?: Algorithm[];
        /** how many items should be returned by algorithm, if less or equal number of items returned then fallback algorithm (next in list) will be used. */
        minimumRecommendedItems?: number;
    }
    interface GetRecommendationResponse {
        /** Related items recommendation. None if any requested algorithms didn't return enough items for response according to request settings. */
        recommendation?: Recommendation;
    }
    interface ItemAppIdNotSupportedByProvider {
        /** Items with appId not supported by provider. Supported appIds can be found in provider config in dev center. */
        items?: CatalogReference$5[];
        /** Algorithms which don't support requested items. */
        algorithms?: Algorithm[];
    }
    interface RecommendationAlgorithmNotSupported {
        /** Algorithms not supported by provider. */
        unsupportedAlgorithms?: Algorithm[];
    }
    /**
     * Returns recommendation algorithms which can used on this site.
     * @internal
     * @documentationMaturity preview
     */
    function listAvailableAlgorithms(): Promise<ListAvailableAlgorithmsResponse>;
    /**
     * Returns recommended items. If algorithm type is `RELATED_ITEMS` then `items` field is required in request.
     * Calls RecommendationsProvider SPI implementors installed on give site one by one.
     * Each implementor called at most once with all algorithm that have `app_id` of implementor.
     * When algorithm with enough recommended items found (configured by `minimum_recommended_items`) we stop calling other implementors related to next `algorithms` in array.
     * @internal
     * @documentationMaturity preview
     */
    function getRecommendation(options?: GetRecommendationOptions): Promise<GetRecommendationResponse>;
    interface GetRecommendationOptions {
        /** items for which related items will be found */
        items?: CatalogReference$5[];
        /**
         * List of algorithms to find recommended items. Sorted by priority.
         * Items found by first algorithm will be returned in response only if number of items greater than `minimum_recommended_items`. Otherwise number of items returned by second algorithm will be checked and so on until one of algorithms returns required number of items.
         * If last algorithm will return not enough items then nothing will be returned in response.
         */
        algorithms?: Algorithm[];
        /** how many items should be returned by algorithm, if less or equal number of items returned then fallback algorithm (next in list) will be used. */
        minimumRecommendedItems?: number;
    }
    type ecomRecommendationsV1Recommendation_universal_d_Recommendation = Recommendation;
    type ecomRecommendationsV1Recommendation_universal_d_Algorithm = Algorithm;
    type ecomRecommendationsV1Recommendation_universal_d_ListAvailableAlgorithmsRequest = ListAvailableAlgorithmsRequest;
    type ecomRecommendationsV1Recommendation_universal_d_ListAvailableAlgorithmsResponse = ListAvailableAlgorithmsResponse;
    type ecomRecommendationsV1Recommendation_universal_d_AlgorithmInfo = AlgorithmInfo;
    type ecomRecommendationsV1Recommendation_universal_d_AlgorithmConfig = AlgorithmConfig;
    type ecomRecommendationsV1Recommendation_universal_d_AlgorithmType = AlgorithmType;
    const ecomRecommendationsV1Recommendation_universal_d_AlgorithmType: typeof AlgorithmType;
    type ecomRecommendationsV1Recommendation_universal_d_GetRecommendationRequest = GetRecommendationRequest;
    type ecomRecommendationsV1Recommendation_universal_d_GetRecommendationResponse = GetRecommendationResponse;
    type ecomRecommendationsV1Recommendation_universal_d_ItemAppIdNotSupportedByProvider = ItemAppIdNotSupportedByProvider;
    type ecomRecommendationsV1Recommendation_universal_d_RecommendationAlgorithmNotSupported = RecommendationAlgorithmNotSupported;
    const ecomRecommendationsV1Recommendation_universal_d_listAvailableAlgorithms: typeof listAvailableAlgorithms;
    const ecomRecommendationsV1Recommendation_universal_d_getRecommendation: typeof getRecommendation;
    type ecomRecommendationsV1Recommendation_universal_d_GetRecommendationOptions = GetRecommendationOptions;
    namespace ecomRecommendationsV1Recommendation_universal_d {
        export { __debug$7 as __debug, ecomRecommendationsV1Recommendation_universal_d_Recommendation as Recommendation, CatalogReference$5 as CatalogReference, ecomRecommendationsV1Recommendation_universal_d_Algorithm as Algorithm, ecomRecommendationsV1Recommendation_universal_d_ListAvailableAlgorithmsRequest as ListAvailableAlgorithmsRequest, ecomRecommendationsV1Recommendation_universal_d_ListAvailableAlgorithmsResponse as ListAvailableAlgorithmsResponse, ecomRecommendationsV1Recommendation_universal_d_AlgorithmInfo as AlgorithmInfo, ecomRecommendationsV1Recommendation_universal_d_AlgorithmConfig as AlgorithmConfig, ecomRecommendationsV1Recommendation_universal_d_AlgorithmType as AlgorithmType, ecomRecommendationsV1Recommendation_universal_d_GetRecommendationRequest as GetRecommendationRequest, ecomRecommendationsV1Recommendation_universal_d_GetRecommendationResponse as GetRecommendationResponse, ecomRecommendationsV1Recommendation_universal_d_ItemAppIdNotSupportedByProvider as ItemAppIdNotSupportedByProvider, ecomRecommendationsV1Recommendation_universal_d_RecommendationAlgorithmNotSupported as RecommendationAlgorithmNotSupported, ecomRecommendationsV1Recommendation_universal_d_listAvailableAlgorithms as listAvailableAlgorithms, ecomRecommendationsV1Recommendation_universal_d_getRecommendation as getRecommendation, ecomRecommendationsV1Recommendation_universal_d_GetRecommendationOptions as GetRecommendationOptions, };
    }
    const __debug$6: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface Cart$1 {
        /** Cart ID. */
        _id?: string | null;
        /**
         * Line items.
         * @readonly
         */
        lineItems?: LineItem$5[];
        /** [Buyer note](https://support.wix.com/en/article/wix-stores-viewing-buyer-notes) left by the customer. */
        buyerNote?: string | null;
        /** Buyer information. */
        buyerInfo?: BuyerInfo$5;
        /**
         * Currency used for pricing.
         * @readonly
         */
        currency?: string;
        /**
         * Currency code used for all the converted prices that are returned.
         * For a site that supports multiple currencies, this is the currency the buyer selected.
         * @readonly
         */
        conversionCurrency?: string;
        /**
         * Language for communication with the buyer. Defaults to the site language.
         * For a site that supports multiple languages, this is the language the buyer selected.
         * @readonly
         */
        buyerLanguage?: string | null;
        /**
         * Site language in which original values are displayed.
         * @readonly
         */
        siteLanguage?: string | null;
        /**
         * Whether tax is included in line item prices.
         * @readonly
         */
        taxIncludedInPrices?: boolean | null;
        /**
         * Weight measurement unit - defaults to site's weight unit. Supported values:
         * + `"KG"`
         * + `"LB"`
         * @readonly
         */
        weightUnit?: WeightUnit$5;
        /**
         * Combined price of all line items before discounts. Subtotal includes tax if `cart.tax_included_in_prices` is set to `true`.
         * @internal
         * @readonly
         */
        subtotal?: MultiCurrencyPrice$3;
        /**
         * ID of the checkout that originated from this cart.
         * @readonly
         */
        checkoutId?: string | null;
        /**
         * Cart discounts.
         * @readonly
         */
        appliedDiscounts?: CartDiscount$1[];
        /**
         * this field is needed for smooth rollout only
         * @internal
         */
        inSync?: boolean | null;
        /**
         * Date and time the cart was created.
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Date and time the cart was updated.
         * @readonly
         */
        _updatedDate?: Date;
        /** Contact info. */
        contactInfo?: AddressWithContact$3;
    }
    interface LineItem$5 {
        /**
         * Line item ID.
         * @readonly
         */
        _id?: string | null;
        /** Item quantity. */
        quantity?: number;
        /** Catalog and item reference. Holds IDs for the item and the catalog it came from, as well as further optional info. */
        catalogReference?: CatalogReference$4;
        /**
         * Item name.
         * + Stores - `product.name`
         * + Bookings - `service.info.name`
         * + Events - `ticket.name`
         * @readonly
         */
        productName?: ProductName$3;
        /**
         * URL to the item's page on the site.
         * @readonly
         */
        url?: string;
        /**
         * Item price **after** catalog-defined discount and line item discounts.
         * @readonly
         */
        price?: MultiCurrencyPrice$3;
        /**
         * Item price **before** catalog-defined discount. Defaults to `price` when not provided.
         * @readonly
         */
        fullPrice?: MultiCurrencyPrice$3;
        /**
         * Item price **before** line item discounts and **after** catalog-defined discount. Defaults to `price` when not provided.
         * @readonly
         */
        priceBeforeDiscounts?: MultiCurrencyPrice$3;
        /**
         * Line item description lines. Used for displaying the cart, checkout and order.
         * @readonly
         */
        descriptionLines?: DescriptionLine$3[];
        /**
         * Line item image details.
         * @readonly
         */
        image?: string;
        /**
         * Item availability details.
         * @readonly
         */
        availability?: ItemAvailabilityInfo$2;
        /**
         * Physical properties of the item. When relevant, contains information such as SKU, item weight, and shippability.
         * @readonly
         */
        physicalProperties?: PhysicalProperties$4;
        /**
         * Coupon scopes - which app and items a coupon applies to.
         * This field is internal to Wix, and should be used by Bookings, Stores and Events as used by the current [Coupons API](https://bo.wix.com/wix-docs/rest/stores/coupons/valid-scope-values).
         * @internal
         * @readonly
         */
        couponScopes?: Scope$3[];
        /**
         * Item type. Either a preset type or custom.
         * @readonly
         */
        itemType?: ItemType$3;
        /**
         * Subscription option information.
         * @internal
         * @readonly
         */
        subscriptionOptionInfo?: SubscriptionOptionInfo$3;
        /**
         * Digital file identifier, relevant only for items with type DIGITAL.
         * @internal
         * @readonly
         */
        digitalFile?: SecuredMedia$2;
        /**
         * Type of selected payment option for current item. Defaults to `"FULL_PAYMENT_ONLINE"`.
         * + `"FULL_PAYMENT_ONLINE"` - The entire payment for this item happens as part of the checkout.
         * + `"FULL_PAYMENT_OFFLINE"` - The entire payment for this item happens after the checkout. For example, when using cash, check, or other offline payment methods.
         * + `"MEMBERSHIP"` - Payment for this item is done by charging a membership. When this option is used, `lineItem.price.amount` will be 0.
         * @readonly
         */
        paymentOption?: PaymentOptionType$4;
        /**
         * Service properties. When relevant, this contains information such as date and number of participants.
         * @readonly
         */
        serviceProperties?: ServiceProperties$3;
        /**
         * In cases where `catalogReference.catalogItemId` is NOT the actual catalog item ID, this field will return the true item's ID.
         * + For example, for Wix Bookings, `catalogReference.catalogItemId` is the booking ID. Therefore this value is set to the service ID.
         * + in most cases, this field is the name as `catalogReference.catalogItemId`.
         * + Used in membership validation.
         * @readonly
         */
        rootCatalogItemId?: string | null;
        /**
         * Additional description for the price. For example, when price is 0 but additional details about the actual price are needed - "Starts at $67".
         * @readonly
         */
        priceDescription?: PriceDescription$3;
        /**
         * Partial payment to be paid upfront during the checkout. Eligible for catalog items with `lineItem.paymentOption` type `DEPOSIT_ONLINE` only.
         * @readonly
         */
        depositAmount?: MultiCurrencyPrice$3;
        /** Selected membership to be used as payment for this item. Must be used with `lineItem.paymentOption` set to `MEMBERSHIP` or `MEMBERSHIP_OFFLINE`. This field can be empty when `lineItem.paymentOption` is set to `MEMBERSHIP_OFFLINE`. */
        selectedMembership?: V1SelectedMembership$1;
    }
    /** Used for grouping line items and is sent on add to cart */
    interface CatalogReference$4 {
        /** ID of the item within its catalog. For example, `productId` for Wix Stores. */
        catalogItemId?: string;
        /** App ID of the catalog the item comes from. For example, the Wix Stores `appId` is `"1380b703-ce81-ff05-f115-39571d94dfcd"`. */
        appId?: string;
        /**
         * Additional info in key:value form. For example, for a product variant from Wix Stores Catalog, `options` field would hold something like one of the following:
         * + `{"Size": "M", "Color": "Red"}`
         * + `{"variantId": "<VARIANT_ID>"}`.
         */
        options?: Record<string, any> | null;
    }
    interface ProductName$3 {
        /** **Required** - Original product name (in site's default language). */
        original?: string;
        /** Description product name translated into buyer's language. Defaults to `original` when not defined. */
        translated?: string | null;
    }
    interface MultiCurrencyPrice$3 {
        /** Amount. */
        amount?: string;
        /**
         * Converted amount.
         * @readonly
         */
        convertedAmount?: string;
        /**
         * Amount formatted with currency symbol.
         * @readonly
         */
        formattedAmount?: string;
        /**
         * Converted amount formatted with currency symbol.
         * @readonly
         */
        formattedConvertedAmount?: string;
    }
    interface DescriptionLine$3 extends DescriptionLineValueOneOf$3, DescriptionLineDescriptionLineValueOneOf$3 {
        /** Description line name. */
        name?: DescriptionLineName$3;
        /**
         * Description line type.
         * @internal
         */
        lineType?: DescriptionLineType$3;
        /** Description line plain text value. */
        plainText?: PlainTextValue$3;
        /** Description line color value. */
        colorInfo?: Color$3;
        /**
         * Description line plain text value.
         * @internal
         */
        plainTextValue?: PlainTextValue$3;
        /**
         * Description line color.
         * @internal
         */
        color?: string;
    }
    /** @oneof */
    interface DescriptionLineValueOneOf$3 {
        /** Description line plain text value. */
        plainText?: PlainTextValue$3;
        /** Description line color value. */
        colorInfo?: Color$3;
    }
    /** @oneof */
    interface DescriptionLineDescriptionLineValueOneOf$3 {
        /**
         * Description line plain text value.
         * @internal
         */
        plainTextValue?: PlainTextValue$3;
        /**
         * Description line color.
         * @internal
         */
        color?: string;
    }
    interface DescriptionLineName$3 {
        /** Description line name in site's default language. */
        original?: string;
        /** Description line name translated into buyer's language. Defaults to `original` when not defined. */
        translated?: string | null;
    }
    interface PlainTextValue$3 {
        /** Description line plain text value in site's default language. */
        original?: string;
        /** Description line plain text value translated into buyer's language. Defaults to `original` when not defined. */
        translated?: string | null;
    }
    interface Color$3 {
        /** Description line color name in site's default language. */
        original?: string;
        /** Description line color name translated into buyer's language. Defaults to `original` when not defined. */
        translated?: string | null;
        /**
         * HEX or RGB color code for display.
         *
         */
        code?: string | null;
    }
    enum DescriptionLineType$3 {
        UNRECOGNISED = "UNRECOGNISED",
        PLAIN_TEXT = "PLAIN_TEXT",
        COLOR = "COLOR"
    }
    interface ItemAvailabilityInfo$2 {
        /**
         * Item availability status.
         *
         * NOT_FOUND - Item does not exist.
         * NOT_AVAILABLE - Not in stock.
         * PARTIALLY_AVAILABLE - Available quantity is less than requested.
         */
        status?: ItemAvailabilityStatus$2;
        /** Quantity available. */
        quantityAvailable?: number | null;
    }
    enum ItemAvailabilityStatus$2 {
        AVAILABLE = "AVAILABLE",
        NOT_FOUND = "NOT_FOUND",
        /** Not in stock */
        NOT_AVAILABLE = "NOT_AVAILABLE",
        /** Available quantity is less than requested */
        PARTIALLY_AVAILABLE = "PARTIALLY_AVAILABLE"
    }
    interface PhysicalProperties$4 {
        /**
         * Line item weight. Measurement unit is taken from `order.weightUnit`. Supported values:
         * + `"KG"`
         * + `"LB"`
         */
        weight?: number | null;
        /** Stock-keeping unit. Learn more about [SKUs](https://www.wix.com/encyclopedia/definition/stock-keeping-unit-sku). */
        sku?: string | null;
        /** Whether this line item is shippable. */
        shippable?: boolean;
    }
    interface Scope$3 {
        /** Scope namespace (Wix Stores, Wix Bookings, Wix Events) */
        namespace?: string;
        /** Coupon scope's applied group (e.g., event or ticket in Wix Events) */
        group?: Group$3;
    }
    interface Group$3 {
        /** Coupon scope's group (e.g., product or collection in Wix Stores). See [valid scope values](https://dev.wix.com/api/rest/coupons/coupons/valid-scope-values). */
        name?: string;
        /** Item ID (when the coupon scope is limited to just one item). */
        entityId?: string | null;
    }
    interface ItemType$3 extends ItemTypeItemTypeDataOneOf$3 {
        /** Preset item type. */
        preset?: ItemTypeItemType$3;
        /** Custom item type. */
        custom?: string;
    }
    /** @oneof */
    interface ItemTypeItemTypeDataOneOf$3 {
        /** Preset item type. */
        preset?: ItemTypeItemType$3;
        /** Custom item type. */
        custom?: string;
    }
    enum ItemTypeItemType$3 {
        UNRECOGNISED = "UNRECOGNISED",
        PHYSICAL = "PHYSICAL",
        DIGITAL = "DIGITAL",
        GIFT_CARD = "GIFT_CARD",
        SERVICE = "SERVICE"
    }
    interface SubscriptionOptionInfo$3 {
        /** Subscription option settings. */
        subscriptionSettings?: SubscriptionSettings$5;
        /** Subscription option title. */
        title?: Title$2;
        /** Subscription option description. */
        description?: Description$2;
    }
    interface SubscriptionSettings$5 {
        /** Frequency of recurring payment. */
        frequency?: SubscriptionFrequency$5;
        /**
         * Interval of recurring payment (optional: default value 1 will be used if not provided)
         * @internal
         */
        interval?: number | null;
        /** Whether subscription is renewed automatically at the end of each period. */
        autoRenewal?: boolean;
        /** Number of billing cycles before subscription ends. Ignored if `autoRenewal: true`. */
        billingCycles?: number | null;
    }
    /** Frequency unit of recurring payment */
    enum SubscriptionFrequency$5 {
        UNDEFINED = "UNDEFINED",
        DAY = "DAY",
        WEEK = "WEEK",
        MONTH = "MONTH",
        YEAR = "YEAR"
    }
    interface Title$2 {
        /** Subscription option name. */
        original?: string;
        /** Translated subscription option name. */
        translated?: string | null;
    }
    interface Description$2 {
        /** Subscription option description. */
        original?: string;
        /** Translated subscription option name. */
        translated?: string | null;
    }
    interface SecuredMedia$2 {
        /** Media ID in media manager. */
        _id?: string;
        /** Original file name. */
        fileName?: string;
        /** File type. */
        fileType?: FileType$2;
    }
    enum FileType$2 {
        UNSPECIFIED = "UNSPECIFIED",
        SECURE_PICTURE = "SECURE_PICTURE",
        SECURE_VIDEO = "SECURE_VIDEO",
        SECURE_DOCUMENT = "SECURE_DOCUMENT",
        SECURE_MUSIC = "SECURE_MUSIC",
        SECURE_ARCHIVE = "SECURE_ARCHIVE"
    }
    /** Type of selected payment option for catalog item */
    enum PaymentOptionType$4 {
        /** The entire payment for given item will happen as part of the checkout. */
        FULL_PAYMENT_ONLINE = "FULL_PAYMENT_ONLINE",
        /** The entire payment for given item will happen after the checkout. */
        FULL_PAYMENT_OFFLINE = "FULL_PAYMENT_OFFLINE",
        /** Given item cannot be paid via monetary payment options, only via membership. When this option is used, price will always be 0. */
        MEMBERSHIP = "MEMBERSHIP",
        /**
         * Partial payment for the given item to be paid upfront during the checkout.
         * Amount to be paid is defined by `deposit_amount` field on per-item basis.
         */
        DEPOSIT_ONLINE = "DEPOSIT_ONLINE",
        /**
         * Payment for this item can only be done using a membership and must be manually redeemed in the dashboard by the site owner.
         * Note: when this option is used, price will be 0.
         */
        MEMBERSHIP_OFFLINE = "MEMBERSHIP_OFFLINE"
    }
    interface ServiceProperties$3 {
        /** The date and time for which the service is supposed to be provided. For example, the time of the class. */
        scheduledDate?: Date;
        /** The number of people participating in this service. For example, the number of people attending the class or the number of people per hotel room. */
        numberOfParticipants?: number | null;
    }
    interface PriceDescription$3 {
        /**
         * **Required** - Original price description (in site's default language).
         *
         */
        original?: string;
        /** Product name translated into buyer's language. Defaults to `original` when not defined. */
        translated?: string | null;
    }
    /** Selected Membership */
    interface V1SelectedMembership$1 {
        /** Membership ID. */
        _id?: string;
        /** ID of the app providing this payment option. */
        appId?: string;
    }
    /** Buyer Info */
    interface BuyerInfo$5 extends BuyerInfoIdOneOf$3 {
        /**
         * Contact ID. Auto-created if one does not yet exist. For more information, see the [Contacts API](https://www.wix.com/velo/reference/wix-crm-backend/contacts/introduction).
         * @readonly
         */
        contactId?: string | null;
        /** Buyer email address. */
        email?: string | null;
        /**
         * Visitor ID - if the buyer is **not** a site member.
         * @readonly
         */
        visitorId?: string;
        /**
         * Member ID - if the buyer is a site member.
         * @readonly
         */
        memberId?: string;
        /**
         * User ID - if the cart owner is a Wix user.
         * @readonly
         */
        userId?: string;
    }
    /** @oneof */
    interface BuyerInfoIdOneOf$3 {
        /**
         * Visitor ID - if the buyer is **not** a site member.
         * @readonly
         */
        visitorId?: string;
        /**
         * Member ID - if the buyer is a site member.
         * @readonly
         */
        memberId?: string;
        /**
         * User ID - if the cart owner is a Wix user.
         * @readonly
         */
        userId?: string;
    }
    enum WeightUnit$5 {
        /** Weight unit can't be classified, due to an error */
        UNSPECIFIED_WEIGHT_UNIT = "UNSPECIFIED_WEIGHT_UNIT",
        /** Kilograms */
        KG = "KG",
        /** Pounds */
        LB = "LB"
    }
    interface CartDiscount$1 extends CartDiscountDiscountSourceOneOf$1 {
        /** Coupon details. */
        coupon?: Coupon$4;
        /** Merchant discount. */
        merchantDiscount?: MerchantDiscount$4;
    }
    /** @oneof */
    interface CartDiscountDiscountSourceOneOf$1 {
        /** Coupon details. */
        coupon?: Coupon$4;
        /** Merchant discount. */
        merchantDiscount?: MerchantDiscount$4;
    }
    interface Coupon$4 {
        /** Coupon ID. */
        _id?: string;
        /** Coupon code. */
        code?: string;
    }
    interface MerchantDiscount$4 {
        /** Discount value. */
        amount?: MultiCurrencyPrice$3;
    }
    /** Billing Info and shipping details */
    interface AddressWithContact$3 {
        /** Address. */
        address?: Address$5;
        /** Contact details. */
        contactDetails?: ApiFullAddressContactDetails$1;
    }
    /** Physical address */
    interface Address$5 {
        /** Two-letter country code in [ISO-3166 alpha-2](https://www.iso.org/obp/ui/#search/code/) format. */
        country?: string | null;
        /** Code for a subdivision (such as state, prefecture, or province) in [ISO 3166-2](https://www.iso.org/standard/72483.html) format. */
        subdivision?: string | null;
        /** City name. */
        city?: string | null;
        /** Postal or zip code. */
        postalCode?: string | null;
        /** Street address. */
        streetAddress?: StreetAddress$4;
        /** Main address line (usually street name and number). */
        addressLine1?: string | null;
        /** Free text providing more detailed address info. Usually contains apt, suite, floor. */
        addressLine2?: string | null;
    }
    interface StreetAddress$4 {
        /** Street number. */
        number?: string;
        /** Street name. */
        name?: string;
        /**
         * Apartment number.
         * @internal
         */
        apt?: string;
        /**
         * Optional address line 1
         * @internal
         */
        formattedAddressLine?: string | null;
    }
    /** Full contact details for an address */
    interface ApiFullAddressContactDetails$1 {
        /** First name. */
        firstName?: string | null;
        /** Last name. */
        lastName?: string | null;
        /** Phone number. */
        phone?: string | null;
        /** Company name. */
        company?: string | null;
        /** Tax information (for Brazil only). If ID is provided, `vatId.type` must also be set, `UNSPECIFIED` is not allowed. */
        vatId?: VatId$4;
    }
    interface VatId$4 {
        /** Customer's tax ID. */
        _id?: string;
        /**
         * Tax type.
         *
         * Supported values:
         * + `CPF`: for individual tax payers
         * + `CNPJ`: for corporations
         */
        type?: VatType$4;
    }
    /** tax info types */
    enum VatType$4 {
        UNSPECIFIED = "UNSPECIFIED",
        /** CPF - for individual tax payers. */
        CPF = "CPF",
        /** CNPJ - for corporations */
        CNPJ = "CNPJ"
    }
    interface AddToCurrentCartAndEstimateTotalsRequest$1 {
        /** Catalog line items. */
        lineItems?: LineItem$5[];
        /** Selected shipping option. */
        selectedShippingOption?: SelectedShippingOption$2;
        /** Shipping address. Used for calculating tax and shipping (when applicable). */
        shippingAddress?: Address$5;
        /** Billing address. Used for calculating tax if all the items in the cart are not shippable. */
        billingAddress?: Address$5;
        /** The selected membership payment options and which line items they apply to. */
        selectedMemberships?: SelectedMemberships$3;
        /**
         * Whether to calculate tax in the calculation request. If not passed, tax is being calculated.
         * @internal
         */
        calculateTax?: boolean | null;
        /**
         * Whether to calculate shipping in the calculation request. If not passed, shipping is being calculated.
         * @internal
         */
        calculateShipping?: boolean | null;
    }
    interface SelectedShippingOption$2 {
        /** Carrier ID. */
        carrierId?: string | null;
        /** Selected shipping option code. For example, "usps_std_overnight". */
        code?: string;
    }
    interface SelectedMemberships$3 {
        /** Selected memberships. */
        memberships?: SelectedMembership$3[];
    }
    interface SelectedMembership$3 {
        /** Membership ID. */
        _id?: string;
        /** ID of the app providing this payment option. */
        appId?: string;
        /** IDs of the line items this membership applies to. */
        lineItemIds?: string[];
    }
    interface EstimateTotalsResponse$1 {
        /** Cart. */
        cart?: Cart$1;
        /** Calculated line items. */
        calculatedLineItems?: CalculatedLineItem$2[];
        /** Price summary. */
        priceSummary?: PriceSummary$4;
        /** Applied gift card. */
        giftCard?: GiftCard$4;
        /** Tax summary. */
        taxSummary?: TaxSummary$4;
        /** Shipping information. */
        shippingInfo?: ShippingInformation$3;
        /** Applied discounts. */
        appliedDiscounts?: AppliedDiscount$4[];
        /** Calculation errors. */
        calculationErrors?: CalculationErrors$3;
        /**
         * Weight measurement unit - defaults to site's weight unit. Supported values:
         * + `"KG"`
         * + `"LB"`
         */
        weightUnit?: WeightUnit$5;
        /** Currency used for pricing in this store. */
        currency?: string;
        /**
         * Minimal amount to pay in order to place the order.
         * @readonly
         */
        payNow?: PriceSummary$4;
        /**
         * Remaining amount for the order to be fully paid.
         * @readonly
         */
        payLater?: PriceSummary$4;
        /** Information about valid and invalid memberships, and which ones are selected for usage. */
        membershipOptions?: MembershipOptions$3;
        /** Additional fees */
        additionalFees?: AdditionalFee$4[];
    }
    interface CalculatedLineItem$2 {
        /** Line item ID. */
        lineItemId?: string;
        /** Price breakdown for this line item. */
        pricesBreakdown?: LineItemPricesData$2;
        /**
         * Type of selected payment option for current item. Defaults to `"FULL_PAYMENT_ONLINE"`.
         * + `"FULL_PAYMENT_ONLINE"` - The entire payment for this item happens as part of the checkout.
         * + `"FULL_PAYMENT_OFFLINE"` - The entire payment for this item happens after the checkout. For example, when using cash, check, or other offline payment methods.
         * + `"MEMBERSHIP"` - Payment for this item is done by charging a membership. When this option is used, `lineItem.price.amount` will be 0.
         */
        paymentOption?: PaymentOptionType$4;
    }
    interface LineItemPricesData$2 {
        /** Total price after discounts and after tax. */
        totalPriceAfterTax?: MultiCurrencyPrice$3;
        /** Deprecated - use `total_price_after_tax` minus `tax_details.total_tax` instead. */
        totalPriceBeforeTax?: MultiCurrencyPrice$3;
        /** Tax details. */
        taxDetails?: ItemTaxFullDetails$4;
        /** Total discount for all line items. */
        totalDiscount?: MultiCurrencyPrice$3;
        /** Catalog price after catalog discount and automatic discounts. */
        price?: MultiCurrencyPrice$3;
        /** Item price **before** line item discounts and **after** catalog-defined discount. Defaults to `price` when not provided. */
        priceBeforeDiscounts?: MultiCurrencyPrice$3;
        /** Total price **after** catalog-defined discount and line item discounts. */
        lineItemPrice?: MultiCurrencyPrice$3;
        /** Item price **before** line item discounts and **before** catalog-defined discount. Defaults to `price` when not provided. */
        fullPrice?: MultiCurrencyPrice$3;
    }
    interface ItemTaxFullDetails$4 {
        /** Amount for which tax is calculated. */
        taxableAmount?: MultiCurrencyPrice$3;
        /**
         * Tax group ID, if specified.
         * @internal
         */
        taxGroupId?: string | null;
        /** Tax rate %, as a decimal point between 0 and 1. */
        taxRate?: string;
        /** Calculated tax, based on `taxable_amount` and `tax_rate`. */
        totalTax?: MultiCurrencyPrice$3;
        /**
         * If breakdown exists, the sum of rates in the breakdown must equal `tax_rate`.
         * @readonly
         */
        rateBreakdown?: TaxRateBreakdown$3[];
    }
    interface TaxRateBreakdown$3 {
        /** Type of tax against which the calculation was performed. */
        name?: string;
        /** Rate at which this tax detail was calculated. */
        rate?: string;
        /** Amount of tax for this tax detail. */
        tax?: MultiCurrencyPrice$3;
    }
    interface PriceSummary$4 {
        /** Subtotal of all line items, before discounts and before tax. */
        subtotal?: MultiCurrencyPrice$3;
        /** Total shipping price, before discounts and before tax. */
        shipping?: MultiCurrencyPrice$3;
        /** Total tax. */
        tax?: MultiCurrencyPrice$3;
        /** Total calculated discount value. */
        discount?: MultiCurrencyPrice$3;
        /** Total price after discounts, gift cards, and tax. */
        total?: MultiCurrencyPrice$3;
        /** Total additional fees price before tax. */
        additionalFees?: MultiCurrencyPrice$3;
    }
    interface GiftCard$4 {
        /** Gift Card ID. */
        _id?: string;
        /** Gift card obfuscated code. */
        obfuscatedCode?: string;
        /** Gift card value. */
        amount?: MultiCurrencyPrice$3;
        /** App ID of the gift card provider. */
        appId?: string;
    }
    interface TaxSummary$4 {
        /**
         * Amount for which tax is calculated, added from line items.
         * @readonly
         */
        taxableAmount?: MultiCurrencyPrice$3;
        /**
         * Calculated tax, added from line items.
         * @readonly
         */
        totalTax?: MultiCurrencyPrice$3;
        /**
         * manual tax rate
         * @internal
         * @readonly
         */
        manualTaxRate?: string;
        /** Tax calculator that was active when the order was created. */
        calculationDetails?: TaxCalculationDetails$3;
    }
    interface TaxCalculationDetails$3 extends TaxCalculationDetailsCalculationDetailsOneOf$3 {
        /**
         * Rate calculation type. Supported values:
         * + `"AUTO_RATE"`
         * + `"FALLBACK_RATE"`
         * + `"MANUAL_RATE"`
         * + `"NO_TAX_COLLECTED"`
         */
        rateType?: RateType$3;
        /** Reason the manual calculation was used. */
        manualRateReason?: ManualCalculationReason$3;
        /** Error details and reason for tax rate fallback. */
        autoTaxFallbackDetails?: AutoTaxFallbackCalculationDetails$3;
    }
    /** @oneof */
    interface TaxCalculationDetailsCalculationDetailsOneOf$3 {
        /** Reason the manual calculation was used. */
        manualRateReason?: ManualCalculationReason$3;
        /** Details of the fallback rate calculation. */
        autoTaxFallbackDetails?: AutoTaxFallbackCalculationDetails$3;
    }
    enum RateType$3 {
        /** no tax being collected for this request due to location of purchase */
        NO_TAX_COLLECTED = "NO_TAX_COLLECTED",
        /** manual rate used for calculation */
        MANUAL_RATE = "MANUAL_RATE",
        /** autotax rate used for calculation */
        AUTO_RATE = "AUTO_RATE",
        /** fallback rate used for calculation */
        FALLBACK_RATE = "FALLBACK_RATE"
    }
    enum ManualCalculationReason$3 {
        /** user set calculator in Business Manager to be Manual */
        GLOBAL_SETTING_TO_MANUAL = "GLOBAL_SETTING_TO_MANUAL",
        /** specific region is on manual even though Global setting is Auto-tax */
        REGION_SETTING_TO_MANUAL = "REGION_SETTING_TO_MANUAL"
    }
    interface AutoTaxFallbackCalculationDetails$3 {
        /**
         * Reason for fallback. Supported values:
         * + `"AUTO_TAX_FAILED"`
         * + `"AUTO_TAX_DEACTIVATED"`
         */
        fallbackReason?: FallbackReason$3;
        /** invalid request (i.e. address), timeout, internal error, license error, and others will be encoded here */
        error?: ApplicationError$6;
    }
    enum FallbackReason$3 {
        /** auto-tax failed to be calculated */
        AUTO_TAX_FAILED = "AUTO_TAX_FAILED",
        /** auto-tax was temporarily deactivated on a system-level */
        AUTO_TAX_DEACTIVATED = "AUTO_TAX_DEACTIVATED"
    }
    interface ApplicationError$6 {
        /** Error code. */
        code?: string;
        /** Description of the error. */
        description?: string;
        /** Data related to the error. */
        data?: Record<string, any> | null;
    }
    interface ShippingInformation$3 {
        /** Shipping region. */
        region?: ShippingRegion$4;
        /** Selected shipping option. */
        selectedCarrierServiceOption?: SelectedCarrierServiceOption$3;
        /** All shipping options. */
        carrierServiceOptions?: CarrierServiceOption$3[];
    }
    interface ShippingRegion$4 {
        /**
         * Shipping region ID.
         * @readonly
         */
        _id?: string;
        /** Shipping region name. */
        name?: string;
    }
    interface SelectedCarrierServiceOption$3 {
        /** Unique identifier of selected option. For example, "usps_std_overnight". */
        code?: string;
        /**
         * Title of the option, such as USPS Standard Overnight Delivery (in the requested locale).
         * For example, "Standard" or "First-Class Package International".
         * @readonly
         */
        title?: string;
        /**
         * Delivery logistics.
         * @readonly
         */
        logistics?: DeliveryLogistics$4;
        /**
         * Shipping costs.
         * @readonly
         */
        cost?: SelectedCarrierServiceOptionPrices$3;
        /**
         * Were we able to find the requested shipping option, or otherwise we fallback to the default one (the first)
         * @readonly
         */
        requestedShippingOption?: boolean;
        /** Other charges */
        otherCharges?: SelectedCarrierServiceOptionOtherCharge$3[];
        /** This carrier's unique ID */
        carrierId?: string | null;
    }
    interface DeliveryLogistics$4 {
        /** Expected delivery time, in free text. For example, "3-5 business days". */
        deliveryTime?: string | null;
        /** Instructions for caller, e.g for pickup: "Please deliver during opening hours, and please don't park in disabled parking spot". */
        instructions?: string | null;
        /** Pickup details. */
        pickupDetails?: PickupDetails$5;
    }
    interface PickupDetails$5 {
        /** Pickup address. */
        address?: Address$5;
        /** Whether the pickup address is that of a business - this may effect tax calculation. */
        businessLocation?: boolean;
        /** Pickup method */
        pickupMethod?: PickupMethod$4;
    }
    enum PickupMethod$4 {
        UNKNOWN_METHOD = "UNKNOWN_METHOD",
        STORE_PICKUP = "STORE_PICKUP",
        PICKUP_POINT = "PICKUP_POINT"
    }
    interface SelectedCarrierServiceOptionPrices$3 {
        /** Total shipping price, after discount and after tax. */
        totalPriceAfterTax?: MultiCurrencyPrice$3;
        /** Deprecated - use `total_price_after_tax` minus `tax_details.total_tax` instead. */
        totalPriceBeforeTax?: MultiCurrencyPrice$3;
        /** Tax details. */
        taxDetails?: ItemTaxFullDetails$4;
        /** Shipping discount before tax. */
        totalDiscount?: MultiCurrencyPrice$3;
        /** Shipping price before discount and before tax. */
        price?: MultiCurrencyPrice$3;
    }
    interface SelectedCarrierServiceOptionOtherCharge$3 {
        /** Type of additional cost. */
        type?: ChargeType$3;
        /** Details of the charge, such as 'Full Coverage Insurance of up to 80% of value of shipment'. */
        details?: string | null;
        /** Price of added charge. */
        cost?: SelectedCarrierServiceOptionPrices$3;
    }
    enum ChargeType$3 {
        HANDLING_FEE = "HANDLING_FEE",
        INSURANCE = "INSURANCE"
    }
    interface CarrierServiceOption$3 {
        /** Carrier ID. */
        carrierId?: string;
        /** Shipping options offered by this carrier for this request. */
        shippingOptions?: ShippingOption$3[];
    }
    interface ShippingOption$3 {
        /**
         * Unique code of provided shipping option like "usps_std_overnight".
         * For legacy calculators this would be the UUID of the option.
         */
        code?: string;
        /**
         * Title of the option, such as USPS Standard Overnight Delivery (in the requested locale).
         * For example, "Standard" or "First-Class Package International".
         */
        title?: string;
        /** Delivery logistics. */
        logistics?: DeliveryLogistics$4;
        /** Sipping price information. */
        cost?: ShippingPrice$4;
    }
    interface ShippingPrice$4 {
        /** Shipping price. */
        price?: MultiCurrencyPrice$3;
        /** Other costs such as insurance, handling & packaging for fragile items, etc. */
        otherCharges?: OtherCharge$3[];
    }
    interface OtherCharge$3 {
        /** Type of additional cost. */
        type?: ChargeType$3;
        /** Price of added cost. */
        price?: MultiCurrencyPrice$3;
    }
    interface AppliedDiscount$4 extends AppliedDiscountDiscountSourceOneOf$4 {
        /** Discount type. */
        discountType?: DiscountType$4;
        /** IDs of the line items the discount applies to. */
        lineItemIds?: string[];
        /** Coupon details. */
        coupon?: V1Coupon$1;
        /** Merchant discount. */
        merchantDiscount?: V1MerchantDiscount$1;
        /** Discount rule */
        discountRule?: DiscountRule$4;
    }
    /** @oneof */
    interface AppliedDiscountDiscountSourceOneOf$4 {
        /** Coupon details. */
        coupon?: V1Coupon$1;
        /** Merchant discount. */
        merchantDiscount?: V1MerchantDiscount$1;
        /** Discount rule */
        discountRule?: DiscountRule$4;
    }
    enum DiscountType$4 {
        GLOBAL = "GLOBAL",
        SPECIFIC_ITEMS = "SPECIFIC_ITEMS",
        SHIPPING = "SHIPPING"
    }
    /** Coupon */
    interface V1Coupon$1 {
        /** Coupon ID. */
        _id?: string;
        /** Coupon code. */
        code?: string;
        /** Coupon value. */
        amount?: MultiCurrencyPrice$3;
        /** Coupon name. */
        name?: string;
        /**
         * Coupon type: We want it to be an enum and not a string but currently we have no time to do it so we leave it as is to be aligned with cart summary.
         * @internal
         */
        couponType?: string;
    }
    interface V1MerchantDiscount$1 {
        /** Discount value. */
        amount?: MultiCurrencyPrice$3;
    }
    interface DiscountRule$4 {
        /** Discount rule ID */
        _id?: string;
        /** Discount rule name */
        name?: DiscountRuleName$4;
        /** Discount value. */
        amount?: MultiCurrencyPrice$3;
    }
    interface DiscountRuleName$4 {
        /** Original discount rule name (in site's default language). */
        original?: string;
        /** Discount rule name translated into buyer's language. Defaults to `original` when not defined. */
        translated?: string | null;
    }
    interface CalculationErrors$3 extends CalculationErrorsShippingCalculationErrorOneOf$3 {
        /** Tax calculation error. */
        taxCalculationError?: Details$3;
        /** Coupon calculation error. */
        couponCalculationError?: Details$3;
        /** Gift card calculation error. */
        giftCardCalculationError?: Details$3;
        /** Order validation errors. */
        orderValidationErrors?: ApplicationError$6[];
        /**
         * Membership payment methods calculation errors
         * For example, will indicate that a line item that must be paid with membership payment doesn't have one or selected memberships are invalid
         */
        membershipError?: Details$3;
        /** Discount Rule calculation error. */
        discountsCalculationError?: Details$3;
        /** General shipping calculation error. */
        generalShippingCalculationError?: Details$3;
        /** Carrier errors. */
        carrierErrors?: CarrierErrors$3;
    }
    /** @oneof */
    interface CalculationErrorsShippingCalculationErrorOneOf$3 {
        /** General shipping calculation error. */
        generalShippingCalculationError?: Details$3;
        /** Carrier errors. */
        carrierErrors?: CarrierErrors$3;
    }
    interface Details$3 extends DetailsKindOneOf$3 {
        /** Deprecated in APIs. Used to enable migration from rendering arbitrary tracing to rest response. */
        tracing?: Record<string, string>;
        applicationError?: ApplicationError$6;
        validationError?: ValidationError$3;
    }
    /** @oneof */
    interface DetailsKindOneOf$3 {
        applicationError?: ApplicationError$6;
        validationError?: ValidationError$3;
    }
    /**
     * example result:
     * {
     * "fieldViolations": [
     * {
     * "field": "fieldA",
     * "description": "invalid music note. supported notes: [do,re,mi,fa,sol,la,ti]",
     * "violatedRule": "OTHER",
     * "ruleName": "INVALID_NOTE",
     * "data": {
     * "value": "FI"
     * }
     * },
     * {
     * "field": "fieldB",
     * "description": "field value out of range. supported range: [0-20]",
     * "violatedRule": "MAX",
     * "data": {
     * "threshold": 20
     * }
     * },
     * {
     * "field": "fieldC",
     * "description": "invalid phone number. provide a valid phone number of size: [7-12], supported characters: [0-9, +, -, (, )]",
     * "violatedRule": "FORMAT",
     * "data": {
     * "type": "PHONE"
     * }
     * }
     * ]
     * }
     */
    interface ValidationError$3 {
        fieldViolations?: FieldViolation$3[];
    }
    enum RuleType$3 {
        VALIDATION = "VALIDATION",
        OTHER = "OTHER",
        MAX = "MAX",
        MIN = "MIN",
        MAX_LENGTH = "MAX_LENGTH",
        MIN_LENGTH = "MIN_LENGTH",
        MAX_SIZE = "MAX_SIZE",
        MIN_SIZE = "MIN_SIZE",
        FORMAT = "FORMAT",
        DECIMAL_LTE = "DECIMAL_LTE",
        DECIMAL_GTE = "DECIMAL_GTE",
        DECIMAL_LT = "DECIMAL_LT",
        DECIMAL_GT = "DECIMAL_GT",
        DECIMAL_MAX_SCALE = "DECIMAL_MAX_SCALE",
        INVALID_ENUM_VALUE = "INVALID_ENUM_VALUE",
        REQUIRED_FIELD = "REQUIRED_FIELD",
        FIELD_NOT_ALLOWED = "FIELD_NOT_ALLOWED",
        ONE_OF_ALIGNMENT = "ONE_OF_ALIGNMENT"
    }
    interface FieldViolation$3 {
        field?: string;
        description?: string;
        violatedRule?: RuleType$3;
        /** applicable when violated_rule=OTHER */
        ruleName?: string | null;
        data?: Record<string, any> | null;
    }
    interface CarrierErrors$3 {
        /** Carrier errors. */
        errors?: CarrierError$3[];
    }
    interface CarrierError$3 {
        /** Carrier ID. */
        carrierId?: string;
        /** Error details. */
        error?: Details$3;
    }
    interface MembershipOptions$3 {
        /** List of payment options that can be used. */
        eligibleMemberships?: Membership$3[];
        /** List of payment options that are owned by the member, but cannot be used due to reason provided. */
        invalidMemberships?: InvalidMembership$3[];
        /** The selected membership payment options and which line items they apply to. */
        selectedMemberships?: SelectedMembership$3[];
    }
    interface Membership$3 {
        /** Membership ID. */
        _id?: string;
        /** ID of the application providing this payment option. */
        appId?: string;
        /** The name of this membership. */
        name?: MembershipName$4;
        /** Line item IDs which are "paid" for by this membership. */
        lineItemIds?: string[];
        /** Optional - For a membership that has limited credits, information about credit usage. */
        credits?: MembershipPaymentCredits$3;
        /** Optional - TMembership expiry date. */
        expirationDate?: Date;
        /** Additional data about this membership. */
        additionalData?: Record<string, any> | null;
    }
    interface MembershipName$4 {
        /** The name of this membership */
        original?: string;
        /** Membership name translated into buyer's language. Defaults to `original` when not defined. */
        translated?: string | null;
    }
    interface MembershipPaymentCredits$3 {
        /** How much credit this membership has in total */
        total?: number;
        /** How much credit remained for this membership */
        remaining?: number;
    }
    interface InvalidMembership$3 {
        /** Membership details. */
        membership?: Membership$3;
        /** Reason why this membership is invalid and cannot be used. */
        reason?: string;
    }
    interface AdditionalFee$4 {
        /** Additional fee's unique code (or ID) for future processing */
        code?: string | null;
        /** Translated additional fee's name */
        name?: string;
        /** Additional fee's price */
        price?: MultiCurrencyPrice$3;
        /** Tax details */
        taxDetails?: ItemTaxFullDetails$4;
        /** Provider's app id */
        providerAppId?: string | null;
        /** Additional fee's price before tax */
        priceBeforeTax?: MultiCurrencyPrice$3;
    }
    interface GetCurrentCartRequest$1 {
    }
    interface GetCurrentCartResponse$1 {
        /** Current session's active cart. */
        cart?: Cart$1;
    }
    interface UpdateCartRequest$1 {
        /** Cart info. */
        cartInfo?: Cart$1;
        /** The code of an existing coupon to apply to the cart. For more information, see the [Coupons API](https://www.wix.com/velo/reference/wix-marketing-backend/coupons). */
        couponCode?: string | null;
        /** Merchant discounts to apply to specific line items. If no `lineItemIds` are passed, the discount will be applied to the whole cart. */
        merchantDiscounts?: MerchantDiscountInput$3[];
        /** Catalog line items. */
        lineItems?: LineItem$5[];
        /**
         * Custom line items.
         * @internal
         */
        customLineItems?: CustomLineItem$2[];
        /**
         * List of field names to determine which of cartInfo's fields will be updated
         * @internal
         */
        cartFieldmask?: string[];
    }
    interface MerchantDiscountInput$3 {
        /** Discount amount. */
        amount?: string;
        /** IDs of the line items the discount applies to. */
        lineItemIds?: string[];
    }
    interface CustomLineItem$2 {
        /**
         * Custom line item quantity.
         *
         * Min: `1`
         *
         * Max: `100000`
         */
        quantity?: number;
        /** Custom line item name. */
        name?: string | null;
        /**
         * Custom line item price.
         * Must be a number or a decimal without symbols.
         */
        price?: string;
        /** Custom line item description lines. Used for displaying the cart, checkout and order. */
        descriptionLines?: DescriptionLine$3[];
        /**
         * Custom line item media. Supported formats:
         * + Link to an image/video from the [Wix Media Manager](https://support.wix.com/en/article/wix-media-about-the-media-manager) - `"wix:image://v1/3c76e2_c53...4ea4~mv2.jpg#originWidth=1000&originHeight=1000"`.
         * + An image from the web - `"http(s)://<image url>"`.
         */
        media?: string;
        /**
         * Custom line item ID. If passed, `id` must be unique.
         * Default: auto-generated ID.
         */
        _id?: string | null;
    }
    interface UpdateCartResponse$1 {
        /** Updated Cart. */
        cart?: Cart$1;
    }
    interface AddToCurrentCartRequest$1 {
        /** Catalog line items. */
        lineItems?: LineItem$5[];
    }
    interface AddToCartResponse$1 {
        /** Updated cart. */
        cart?: Cart$1;
    }
    interface RemoveLineItemsFromCurrentCartRequest$1 {
        /** IDs of the line items to remove from the cart. */
        lineItemIds: string[];
    }
    interface RemoveLineItemsResponse$2 {
        /** Updated cart. */
        cart?: Cart$1;
    }
    interface CreateCheckoutFromCurrentCartRequest$1 {
        /**
         * Sales channel type. Supported values:
         * + `"AMAZON"`
         * + `"BACKOFFICE_MERCHANT"`
         * + `"EBAY"`
         * + `"OTHER_PLATFORM"`
         * + `"POS"`
         * + `"WEB"`
         * + `"WISH"`
         * + `"WIX_APP_STORE"`
         * + `"WIX_INVOICES"`
         */
        channelType?: ChannelType$4;
        /** Shipping address. Used for calculating tax and shipping (when applicable). */
        shippingAddress?: Address$5;
        /** Billing address. Used for calculating tax if all the items in the cart are not shippable. */
        billingAddress?: Address$5;
        /** Selected shipping option. */
        selectedShippingOption?: SelectedShippingOption$2;
        /** Mandatory when setting a billing or shipping address if the site visitor isn't logged in. */
        email?: string | null;
    }
    enum ChannelType$4 {
        UNSPECIFIED = "UNSPECIFIED",
        WEB = "WEB",
        POS = "POS",
        EBAY = "EBAY",
        AMAZON = "AMAZON",
        OTHER_PLATFORM = "OTHER_PLATFORM",
        WIX_APP_STORE = "WIX_APP_STORE",
        WIX_INVOICES = "WIX_INVOICES",
        BACKOFFICE_MERCHANT = "BACKOFFICE_MERCHANT",
        WISH = "WISH"
    }
    interface CreateCheckoutResponse$2 {
        /** The newly created checkout's ID. */
        checkoutId?: string;
    }
    interface RemoveCouponFromCurrentCartRequest$1 {
    }
    interface RemoveCouponResponse$2 {
        /** Updated cart. */
        cart?: Cart$1;
    }
    interface UpdateCurrentCartLineItemQuantityRequest$1 {
        /** Line item IDs and their new quantity. */
        lineItems: LineItemQuantityUpdate$1[];
    }
    interface LineItemQuantityUpdate$1 {
        /** Line item ID. Required. */
        _id?: string;
        /** New quantity. Number must be 1 or higher. Required. */
        quantity?: number;
    }
    interface UpdateLineItemsQuantityResponse$1 {
        /** Updated cart. */
        cart?: Cart$1;
    }
    interface EstimateCurrentCartTotalsRequest$1 {
        /** Selected shipping option. */
        selectedShippingOption?: SelectedShippingOption$2;
        /** Shipping address. Used for calculating tax and shipping (when applicable). */
        shippingAddress?: Address$5;
        /** Billing address. Used for calculating tax if all the items in the cart are not shippable. */
        billingAddress?: Address$5;
        /** The selected membership payment options and which line items they apply to. */
        selectedMemberships?: SelectedMemberships$3;
        /**
         * Whether to calculate tax in the calculation request. If not passed, tax is being calculated.
         * @internal
         */
        calculateTax?: boolean | null;
        /**
         * Whether to calculate shipping in the calculation request. If not passed, shipping is being calculated.
         * @internal
         */
        calculateShipping?: boolean | null;
    }
    interface DeleteCurrentCartRequest$1 {
    }
    interface DeleteCartResponse$1 {
    }
    interface CreateCartRequest$1 {
        /** Cart info. */
        cartInfo?: Cart$1;
        /** The code of an existing coupon to apply to the cart. For more information, see the [Coupons API](https://www.wix.com/velo/reference/wix-marketing-backend/coupons). */
        couponCode?: string | null;
        /** Merchant discounts to apply to specific line items. If no `lineItemIds` are passed, the discount will apply to the whole cart. */
        merchantDiscounts?: MerchantDiscountInput$3[];
        /** Catalog line items. */
        lineItems?: LineItem$5[];
        /**
         * Custom line items.
         * @internal
         */
        customLineItems?: CustomLineItem$2[];
    }
    interface CreateCartResponse$1 {
        /** Cart. */
        cart?: Cart$1;
    }
    interface GetCartRequest$1 {
        /** ID of the cart to retrieve. */
        _id: string;
    }
    interface GetCartResponse$1 {
        /** The requested cart. */
        cart?: Cart$1;
    }
    interface GetCartByCheckoutIdRequest$1 {
        /** Checkout ID. */
        _id: string;
    }
    interface GetCartByCheckoutIdResponse$1 {
        /** The requested cart. */
        cart?: Cart$1;
    }
    interface AddToCartRequest$1 {
        /** Cart ID. */
        _id: string;
        /** Catalog line items. */
        lineItems?: LineItem$5[];
        /**
         * Custom line items.
         * @internal
         */
        customLineItems?: CustomLineItem$2[];
    }
    interface RemoveLineItemsRequest$2 {
        /** Cart ID. */
        _id: string;
        /** IDs of the line items to remove from the cart. */
        lineItemIds: string[];
    }
    interface CreateCheckoutRequest$2 {
        /** Cart ID. */
        _id: string;
        /**
         * Sales channel type. Supported values:
         * + `"AMAZON"`
         * + `"BACKOFFICE_MERCHANT"`
         * + `"EBAY"`
         * + `"OTHER_PLATFORM"`
         * + `"POS"`
         * + `"WEB"`
         * + `"WISH"`
         * + `"WIX_APP_STORE"`
         * + `"WIX_INVOICES"`
         */
        channelType?: ChannelType$4;
        /** Shipping address. Used for calculating tax and shipping (when applicable). */
        shippingAddress?: Address$5;
        /** Billing address. Used for calculating tax if all the items in the cart are not shippable. */
        billingAddress?: Address$5;
        /** Selected shipping option. */
        selectedShippingOption?: SelectedShippingOption$2;
        /** Mandatory when setting a billing or shipping address if the site visitor isn't logged in. */
        email?: string | null;
    }
    interface RemoveCouponRequest$2 {
        /** Cart ID. */
        _id: string;
    }
    interface UpdateLineItemsQuantityRequest$1 {
        /** Cart ID. */
        _id: string;
        /** Line item IDs and their new quantity. */
        lineItems: LineItemQuantityUpdate$1[];
    }
    interface EstimateTotalsRequest$1 {
        /** Cart ID. */
        _id: string;
        /** Selected shipping option. */
        selectedShippingOption?: SelectedShippingOption$2;
        /** Shipping address. Used for calculating tax and shipping (when applicable). */
        shippingAddress?: Address$5;
        /** Billing address. Used for calculating tax if all the items in the cart are not shippable. */
        billingAddress?: Address$5;
        /** The selected membership payment options and which line items they apply to. */
        selectedMemberships?: SelectedMemberships$3;
        /**
         * Whether to calculate tax in the calculation request. If not passed, tax is being calculated.
         * @internal
         */
        calculateTax?: boolean | null;
        /**
         * Whether to calculate shipping in the calculation request. If not passed, shipping is being calculated.
         * @internal
         */
        calculateShipping?: boolean | null;
    }
    interface DeleteCartRequest$1 {
        /** ID of the cart to delete. */
        _id: string;
    }
    interface DomainEvent$3 extends DomainEventBodyOneOf$3 {
        /** random GUID so clients can tell if event was already handled */
        _id?: string;
        /**
         * Assumes actions are also always typed to an entity_type
         * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
         */
        entityFqdn?: string;
        /**
         * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
         * This is although the created/updated/deleted notion is duplication of the oneof types
         * Example: created/updated/deleted/started/completed/email_opened
         */
        slug?: string;
        /**
         * Assuming that all messages including Actions have id
         * Example: The id of the specific order, the id of a specific campaign
         */
        entityId?: string;
        /** The time of the event. Useful if there was a delay in dispatching */
        eventTime?: Date;
        /**
         * A field that should be set if this event was triggered by an anonymize request.
         * For example you must set it to true when sending an event as a result of a GDPR right to be forgotten request.
         * NOTE: This field is not relevant for `EntityCreatedEvent` but is located here for better ergonomics of consumers.
         */
        triggeredByAnonymizeRequest?: boolean | null;
        /** If present, indicates the action that triggered the event. */
        originatedFrom?: string | null;
        /**
         * A sequence number defining the order of updates to the underlying entity.
         * For example, given that some entity was updated at 16:00 and than again at 16:01,
         * it is guaranteed that the sequence number of the second update is strictly higher than the first.
         * As the consumer, you can use this value to ensure that you handle messages in the correct order.
         * To do so, you will need to persist this number on your end, and compare the sequence number from the
         * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
         */
        entityEventSequence?: string | null;
        createdEvent?: EntityCreatedEvent$3;
        updatedEvent?: EntityUpdatedEvent$3;
        deletedEvent?: EntityDeletedEvent$3;
        actionEvent?: ActionEvent$3;
        extendedFieldsUpdatedEvent?: ExtendedFieldsUpdatedEvent$3;
    }
    /** @oneof */
    interface DomainEventBodyOneOf$3 {
        createdEvent?: EntityCreatedEvent$3;
        updatedEvent?: EntityUpdatedEvent$3;
        deletedEvent?: EntityDeletedEvent$3;
        actionEvent?: ActionEvent$3;
        extendedFieldsUpdatedEvent?: ExtendedFieldsUpdatedEvent$3;
    }
    interface EntityCreatedEvent$3 {
        entityAsJson?: string;
        /**
         * Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity
         * @internal
         */
        triggeredByUndelete?: boolean | null;
    }
    interface EntityUpdatedEvent$3 {
        /**
         * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
         * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
         * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
         */
        currentEntityAsJson?: string;
        /**
         * This field is currently part of the of the EntityUpdatedEvent msg, but scala/node libraries which implements the domain events standard
         * wont populate it / have any reference to it in the API.
         * The main reason for it is that fetching the old entity from the DB will have a performance hit on an update operation so unless truly needed,
         * the developer should send only the new (current) entity.
         * An additional reason is not wanting to send this additional entity over the wire (kafka) since in some cases it can be really big
         * Developers that must reflect the old entity will have to implement their own domain event sender mechanism which will follow the DomainEvent proto message.
         * @internal
         */
        previousEntityAsJson?: string | null;
    }
    interface EntityDeletedEvent$3 {
        /**
         * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
         * @internal
         */
        movedToTrash?: boolean | null;
    }
    interface ActionEvent$3 {
        bodyAsJson?: string;
    }
    interface ExtendedFieldsUpdatedEvent$3 {
        currentEntityAsJson?: string;
    }
    interface Empty$3 {
    }
    /** This webhook is triggered when a customer has completed their checkout. In most cases, an order will be created immediately and an Order Event webhook will also be triggered. In some cases, the payment provider may list the order as "pending" - and the order will not be created until the payment is listed as "approved." */
    interface CartCompletedEvent$1 {
        cartId?: string;
        /**
         * Time the cart was created
         * @readonly
         */
        completedTime?: Date;
        /** Customer's Wix ID */
        buyerInfo?: V1BuyerInfo$2;
        /**
         * Weight measurement unit - defaults to site's weight unit. Supported values:
         * + `"KG"`
         * + `"LB"`
         */
        weightUnit?: V1WeightUnit$1;
        /** Message from the customer */
        buyerNote?: string | null;
        /** Customer's billing address */
        billingAddress?: CartAddress$1;
        /** Currency used for pricing in this store */
        currency?: Currency$1;
        /** Coupon applied to this cart */
        appliedCoupon?: AppliedCoupon$3;
        /** Totals for order's line items */
        totals?: Totals$3;
        /** Cart shipping information */
        shippingInfo?: ShippingInfo$3;
    }
    /** This might expand and add additional data */
    interface V1BuyerInfo$2 {
        /** Customer details */
        _id?: string;
        /** Customer's relationship to the website */
        identityType?: IdentityType$4;
        /** Customer's email address */
        email?: string | null;
        /** Customer's phone number */
        phone?: string | null;
        /** Customer's first name */
        firstName?: string | null;
        /** Customer's last name */
        lastName?: string | null;
    }
    enum IdentityType$4 {
        /** Customer is the site owner */
        ADMIN = "ADMIN",
        /** Customer is logged in */
        MEMBER = "MEMBER",
        /** Customer is not logged in */
        VISITOR = "VISITOR",
        /** Contact was created for the customer */
        CONTACT = "CONTACT"
    }
    enum V1WeightUnit$1 {
        /** Weight unit can't be classified, due to an error */
        UNSPECIFIED_WEIGHT_UNIT = "UNSPECIFIED_WEIGHT_UNIT",
        /** Kilograms */
        KG = "KG",
        /** Pounds */
        LB = "LB"
    }
    interface CartAddress$1 {
        /** Address */
        address?: CommonAddress$2;
        /** Contact details */
        contactDetails?: FullAddressContactDetails$3;
    }
    /** Physical address */
    interface CommonAddress$2 extends CommonAddressStreetOneOf$2 {
        /** Country code. */
        country?: string | null;
        /** Subdivision. Usually a state, region, prefecture, or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
        subdivision?: string | null;
        /** City name. */
        city?: string | null;
        /** Zip/postal code. */
        postalCode?: string | null;
        /** Free text providing more detailed address info. Usually contains Apt, Suite, and Floor. */
        addressLine2?: string | null;
        /** Street name and number. */
        streetAddress?: StreetAddress$4;
        /** Main address line, usually street and number as free text. */
        addressLine1?: string | null;
    }
    /** @oneof */
    interface CommonAddressStreetOneOf$2 {
        /** Street name and number. */
        streetAddress?: StreetAddress$4;
        /** Main address line, usually street and number as free text. */
        addressLine?: string | null;
    }
    interface AddressLocation$2 {
        /** Address latitude. */
        latitude?: number | null;
        /** Address longitude. */
        longitude?: number | null;
    }
    interface Subdivision$2 {
        /** Short subdivision code. */
        code?: string;
        /** Subdivision full name. */
        name?: string;
        /**
         * Subdivision level
         * @internal
         */
        type?: SubdivisionType$2;
        /**
         * Free text description of subdivision type.
         * @internal
         */
        typeInfo?: string | null;
    }
    enum SubdivisionType$2 {
        UNKNOWN_SUBDIVISION_TYPE = "UNKNOWN_SUBDIVISION_TYPE",
        /** State */
        ADMINISTRATIVE_AREA_LEVEL_1 = "ADMINISTRATIVE_AREA_LEVEL_1",
        /** County */
        ADMINISTRATIVE_AREA_LEVEL_2 = "ADMINISTRATIVE_AREA_LEVEL_2",
        /** City/town */
        ADMINISTRATIVE_AREA_LEVEL_3 = "ADMINISTRATIVE_AREA_LEVEL_3",
        /** Neighborhood/quarter */
        ADMINISTRATIVE_AREA_LEVEL_4 = "ADMINISTRATIVE_AREA_LEVEL_4",
        /** Street/block */
        ADMINISTRATIVE_AREA_LEVEL_5 = "ADMINISTRATIVE_AREA_LEVEL_5",
        /** ADMINISTRATIVE_AREA_LEVEL_0. Indicates the national political entity, and is typically the highest order type returned by the Geocoder. */
        COUNTRY = "COUNTRY"
    }
    /** Full contact details for an address */
    interface FullAddressContactDetails$3 {
        /** Contact's first name. */
        firstName?: string | null;
        /** Contact's last name. */
        lastName?: string | null;
        /**
         * Contact's full name.
         * @internal
         */
        fullName?: string | null;
        /** Contact's phone number. */
        phone?: string | null;
        /** Contact's company name. */
        company?: string | null;
        /** Email associated with the address. */
        email?: string | null;
        /** Tax info. Currently usable only in Brazil. */
        vatId?: VatId$4;
    }
    interface Currency$1 {
        /** Currency code */
        code?: string;
        /** Currency symbol */
        symbol?: string;
    }
    interface AppliedCoupon$3 {
        /** Coupon internal ID */
        couponId?: string;
        /** Coupon name */
        name?: string;
        /** Coupon code */
        code?: string;
        /** Discount value */
        discountValue?: string | null;
        /** Converted discount value */
        convertedDiscountValue?: string | null;
        /** Type (e.g., moneyOff, percentOff) */
        couponType?: string;
    }
    interface Totals$3 {
        /** Subtotal of all line items, before tax */
        subtotal?: number;
        /** Total shipping price, including tax */
        shipping?: number;
        /** Total tax */
        tax?: number;
        /** Total calculated discount value, according to order.discount */
        discount?: number | null;
        /** Total price */
        total?: number;
        /** Total items weight */
        weight?: number;
        /** Total line items quantity */
        quantity?: number;
    }
    interface ShippingInfo$3 extends ShippingInfoDetailsOneOf$2 {
        /** Selected shipping rule details */
        shippingRuleDetails?: ShippingRuleDetails$1;
        /** Pickup details when this object describes pickup */
        pickupDetails?: V1PickupDetails$2;
        /** Shipment details when this object describes shipment */
        shippingAddress?: CartAddress$1;
    }
    /** @oneof */
    interface ShippingInfoDetailsOneOf$2 {
        /** Pickup details when this object describes pickup */
        pickupDetails?: V1PickupDetails$2;
        /** Shipment details when this object describes shipment */
        shippingAddress?: CartAddress$1;
    }
    interface ShippingRuleDetails$1 {
        /** Selected shipping rule ID */
        ruleId?: string;
        /** Selected option ID */
        optionId?: string;
        /** Rule title (as provided by the store owner) */
        deliveryOption?: string;
        /** Shipping option delivery time */
        estimatedDeliveryTime?: string | null;
    }
    interface V1PickupDetails$2 {
        /** Pickup address */
        pickupAddress?: CommonAddress$2;
        /** Customer details */
        buyerDetails?: BuyerDetails$2;
        /** Store owner's pickup instructions */
        pickupInstructions?: string | null;
    }
    interface BuyerDetails$2 {
        /** Customer's first name */
        firstName?: string | null;
        /** Customer's last name */
        lastName?: string | null;
        /** Email address */
        email?: string;
        /** Phone number */
        phone?: string;
    }
    /**
     * Creates a new cart.
     *
     *
     * The `createCart()` function returns a Promise that resolves to the new cart when it's created.
     *
     * > **Note:** When adding catalog items, `options.lineItems.catalogReference` is required.
     * @public
     * @requiredField options.lineItems.catalogReference
     * @requiredField options.lineItems.selectedMembership._id
     * @requiredField options.lineItems.selectedMembership.appId
     * @param options - Cart creation options.
     * @returns Fulfilled - Cart.
     */
    function createCart(options?: CreateCartOptions): Promise<Cart$1>;
    interface CreateCartOptions {
        /** Cart info. */
        cartInfo?: Cart$1;
        /** The code of an existing coupon to apply to the cart. For more information, see the [Coupons API](https://www.wix.com/velo/reference/wix-marketing-backend/coupons). */
        couponCode?: string | null;
        /** Merchant discounts to apply to specific line items. If no `lineItemIds` are passed, the discount will apply to the whole cart. */
        merchantDiscounts?: MerchantDiscountInput$3[];
        /** Catalog line items. */
        lineItems?: LineItem$5[];
        /**
         * Custom line items.
         * @internal
         */
        customLineItems?: CustomLineItem$2[];
    }
    /**
     * Updates a specified cart's properties.
     *
     *
     * The `updateCart()` function returns a Promise that resolves when the specified cart's properties are updated.
     *
     * > **Note:** When updating catalog items, `options.lineItems.catalogReference` is required.
     * @public
     * @requiredField _id
     * @requiredField options.lineItems.catalogReference
     * @param options - Available options to use when updating a cart.
     * @param _id - ID of the cart to be updated.
     * @returns Fulfilled - Updated cart.
     */
    function updateCart(_id: string | null, options?: UpdateCartOptions): Promise<Cart$1>;
    interface UpdateCartOptions {
        /** The information for the cart being updated. */
        cartInfo: {
            /** ID of the cart to be updated. */
            _id?: string | null;
            /**
             * Line items.
             * @readonly
             */
            lineItems?: LineItem$5[];
            /** [Buyer note](https://support.wix.com/en/article/wix-stores-viewing-buyer-notes) left by the customer. */
            buyerNote?: string | null;
            /** Buyer information. */
            buyerInfo?: BuyerInfo$5;
            /**
             * Currency used for pricing.
             * @readonly
             */
            currency?: string;
            /**
             * Currency code used for all the converted prices that are returned.
             * For a site that supports multiple currencies, this is the currency the buyer selected.
             * @readonly
             */
            conversionCurrency?: string;
            /**
             * Language for communication with the buyer. Defaults to the site language.
             * For a site that supports multiple languages, this is the language the buyer selected.
             * @readonly
             */
            buyerLanguage?: string | null;
            /**
             * Site language in which original values are displayed.
             * @readonly
             */
            siteLanguage?: string | null;
            /**
             * Whether tax is included in line item prices.
             * @readonly
             */
            taxIncludedInPrices?: boolean | null;
            /**
             * Weight measurement unit - defaults to site's weight unit. Supported values:
             * + `"KG"`
             * + `"LB"`
             * @readonly
             */
            weightUnit?: WeightUnit$5;
            /**
             * Combined price of all line items before discounts. Subtotal includes tax if `cart.tax_included_in_prices` is set to `true`.
             * @internal
             * @readonly
             */
            subtotal?: MultiCurrencyPrice$3;
            /**
             * ID of the checkout that originated from this cart.
             * @readonly
             */
            checkoutId?: string | null;
            /**
             * Cart discounts.
             * @readonly
             */
            appliedDiscounts?: CartDiscount$1[];
            /**
             * this field is needed for smooth rollout only
             * @internal
             */
            inSync?: boolean | null;
            /**
             * Date and time the cart was created.
             * @readonly
             */
            _createdDate?: Date;
            /**
             * Date and time the cart was updated.
             * @readonly
             */
            _updatedDate?: Date;
            /** Contact info. */
            contactInfo?: AddressWithContact$3;
        };
        /** The code of an existing coupon to apply to the cart. For more information, see the [Coupons API](https://www.wix.com/velo/reference/wix-marketing-backend/coupons). */
        couponCode?: string | null;
        /** Merchant discounts to apply to specific line items. If no `lineItemIds` are passed, the discount will be applied to the whole cart. */
        merchantDiscounts?: MerchantDiscountInput$3[];
        /** Catalog line items. */
        lineItems?: LineItem$5[];
        /**
         * Custom line items.
         * @internal
         */
        customLineItems?: CustomLineItem$2[];
        /**
         * List of field names to determine which of cartInfo's fields will be updated
         * @internal
         */
        cartFieldmask?: string[];
    }
    /**
     * Retrieves a cart.
     *
     *
     * The `getCart()` function returns a Promise that resolves when the specified cart is retrieved.
     * @param _id - ID of the cart to retrieve.
     * @public
     * @requiredField _id
     * @returns Fulfilled - The specified cart.
     */
    function getCart(_id: string): Promise<Cart$1>;
    /**
     * Retrieves the cart associated with a specified checkout.
     * @param _id - Checkout ID.
     * @internal
     * @documentationMaturity preview
     * @requiredField _id
     */
    function getCartByCheckoutId(_id: string): Promise<GetCartByCheckoutIdResponse$1>;
    /**
     * INTERNAL - Retrieves the current session's active cart.
     * @internal
     * @documentationMaturity preview
     */
    function internalGetCurrentCart(): Promise<GetCurrentCartResponse$1>;
    /**
     * Adds catalog line items to a cart.
     *
     *
     * The `addToCart()` function returns a Promise that resolves to the updated cart when the specified items have been added.
     *
     * > **Note:** When adding catalog items, `options.lineItems.catalogReference` is required.
     * @param _id - Cart ID.
     * @public
     * @requiredField _id
     * @requiredField options.lineItems.catalogReference
     * @requiredField options.lineItems.selectedMembership._id
     * @requiredField options.lineItems.selectedMembership.appId
     * @param options - Items to be added to cart.
     * @returns Fulfilled - Cart.
     */
    function addToCart(_id: string, options?: AddToCartOptions): Promise<AddToCartResponse$1>;
    interface AddToCartOptions {
        /** Catalog line items. */
        lineItems?: LineItem$5[];
        /**
         * Custom line items.
         * @internal
         */
        customLineItems?: CustomLineItem$2[];
    }
    /**
     * Removes line items from the specified cart.
     *
     *
     * The `removeLineItems()` function returns a Promise that resolves to the updated cart when the line items are removed from the specified cart.
     * @public
     * @requiredField _id
     * @requiredField lineItemIds
     * @param lineItemIds - IDs of the line items to remove from the cart.
     * @param _id - ID of the cart to remove line items from.
     * @returns Fulfilled - Updated cart.
     */
    function removeLineItems$1(_id: string, lineItemIds: string[]): Promise<RemoveLineItemsResponse$2>;
    /**
     * Creates a checkout from the current site visitor’s cart.
     *
     *
     * The `createCheckout()` function returns a Promise that resolves to the new checkout's ID when it's created.
     *
     * If a checkout was already created from the specified cart, that checkout will be
     * updated with any new information from the cart.
     * @param _id - Cart ID.
     * @public
     * @requiredField _id
     * @param options - Checkout creation options.
     * @returns Fulfilled - ID of the newly created checkout.
     */
    function createCheckout$1(_id: string, options?: CreateCheckoutOptions$1): Promise<CreateCheckoutResponse$2>;
    interface CreateCheckoutOptions$1 {
        /**
         * Sales channel type. Supported values:
         * + `"AMAZON"`
         * + `"BACKOFFICE_MERCHANT"`
         * + `"EBAY"`
         * + `"OTHER_PLATFORM"`
         * + `"POS"`
         * + `"WEB"`
         * + `"WISH"`
         * + `"WIX_APP_STORE"`
         * + `"WIX_INVOICES"`
         */
        channelType?: ChannelType$4;
        /** Shipping address. Used for calculating tax and shipping (when applicable). */
        shippingAddress?: Address$5;
        /** Billing address. Used for calculating tax if all the items in the cart are not shippable. */
        billingAddress?: Address$5;
        /** Selected shipping option. */
        selectedShippingOption?: SelectedShippingOption$2;
        /** Mandatory when setting a billing or shipping address if the site visitor isn't logged in. */
        email?: string | null;
    }
    /**
     * Removes the coupon from a specified cart.
     *
     *
     * The `removeCoupon()` function returns a Promise that resolves to the updated cart when the coupon is removed from the specified cart.
     * @param _id - Cart ID.
     * @public
     * @requiredField _id
     * @returns Fulfilled - Updated cart.
     */
    function removeCoupon$1(_id: string): Promise<RemoveCouponResponse$2>;
    /**
     * Updates the quantity of one or more line items in a specified cart.
     *
     *
     * The `updateLineItemsQuantity()` function returns a Promise that resolves when the quantities of the specified cart's line items are updated.
     * @param _id - Cart ID.
     * @param lineItems - Line item IDs and their new quantity.
     * @public
     * @requiredField _id
     * @requiredField lineItems
     * @returns Fulfilled - Updated cart.
     */
    function updateLineItemsQuantity(_id: string, lineItems: LineItemQuantityUpdate$1[]): Promise<UpdateLineItemsQuantityResponse$1>;
    /**
     * Estimates the subtotal and total for current site visitor’s cart. Totals include tax and are based on the selected carrier service, shipping address, and billing information.
     *
     *
     * The `estimateTotals()` function returns a Promise that resolves when the estimated totals are generated.
     *
     * > **Note:** Not passing any `options` properties will only estimate the cart items price totals.
     * @param _id - Cart ID.
     * @public
     * @requiredField _id
     * @param options - Total estimation options.
     * @returns Fulfilled - Cart's estimated totals.
     */
    function estimateTotals(_id: string, options?: EstimateTotalsOptions): Promise<EstimateTotalsResponse$1>;
    interface EstimateTotalsOptions {
        /** Selected shipping option. */
        selectedShippingOption?: SelectedShippingOption$2;
        /** Shipping address. Used for calculating tax and shipping (when applicable). */
        shippingAddress?: Address$5;
        /** Billing address. Used for calculating tax if all the items in the cart are not shippable. */
        billingAddress?: Address$5;
        /** The selected membership payment options and which line items they apply to. */
        selectedMemberships?: SelectedMemberships$3;
        /**
         * Whether to calculate tax in the calculation request. If not passed, tax is being calculated.
         * @internal
         */
        calculateTax?: boolean | null;
        /**
         * Whether to calculate shipping in the calculation request. If not passed, shipping is being calculated.
         * @internal
         */
        calculateShipping?: boolean | null;
    }
    /**
     * Deletes a cart.
     *
     *
     * The `deleteCart()` function returns a Promise that resolves when the specified cart is deleted.
     * @public
     * @requiredField _id
     * @param _id - ID of the cart to delete.
     * @returns Fulfilled - When the cart is deleted. Rejected - Error message.
     */
    function deleteCart(_id: string): Promise<void>;
    const ecomV1CartCart_universal_d_createCart: typeof createCart;
    type ecomV1CartCart_universal_d_CreateCartOptions = CreateCartOptions;
    const ecomV1CartCart_universal_d_updateCart: typeof updateCart;
    type ecomV1CartCart_universal_d_UpdateCartOptions = UpdateCartOptions;
    const ecomV1CartCart_universal_d_getCart: typeof getCart;
    const ecomV1CartCart_universal_d_getCartByCheckoutId: typeof getCartByCheckoutId;
    const ecomV1CartCart_universal_d_internalGetCurrentCart: typeof internalGetCurrentCart;
    const ecomV1CartCart_universal_d_addToCart: typeof addToCart;
    type ecomV1CartCart_universal_d_AddToCartOptions = AddToCartOptions;
    const ecomV1CartCart_universal_d_updateLineItemsQuantity: typeof updateLineItemsQuantity;
    const ecomV1CartCart_universal_d_estimateTotals: typeof estimateTotals;
    type ecomV1CartCart_universal_d_EstimateTotalsOptions = EstimateTotalsOptions;
    const ecomV1CartCart_universal_d_deleteCart: typeof deleteCart;
    namespace ecomV1CartCart_universal_d {
        export { __debug$6 as __debug, Cart$1 as Cart, LineItem$5 as LineItem, CatalogReference$4 as CatalogReference, ProductName$3 as ProductName, MultiCurrencyPrice$3 as MultiCurrencyPrice, DescriptionLine$3 as DescriptionLine, DescriptionLineValueOneOf$3 as DescriptionLineValueOneOf, DescriptionLineDescriptionLineValueOneOf$3 as DescriptionLineDescriptionLineValueOneOf, DescriptionLineName$3 as DescriptionLineName, PlainTextValue$3 as PlainTextValue, Color$3 as Color, DescriptionLineType$3 as DescriptionLineType, ItemAvailabilityInfo$2 as ItemAvailabilityInfo, ItemAvailabilityStatus$2 as ItemAvailabilityStatus, PhysicalProperties$4 as PhysicalProperties, Scope$3 as Scope, Group$3 as Group, ItemType$3 as ItemType, ItemTypeItemTypeDataOneOf$3 as ItemTypeItemTypeDataOneOf, ItemTypeItemType$3 as ItemTypeItemType, SubscriptionOptionInfo$3 as SubscriptionOptionInfo, SubscriptionSettings$5 as SubscriptionSettings, SubscriptionFrequency$5 as SubscriptionFrequency, Title$2 as Title, Description$2 as Description, SecuredMedia$2 as SecuredMedia, FileType$2 as FileType, PaymentOptionType$4 as PaymentOptionType, ServiceProperties$3 as ServiceProperties, PriceDescription$3 as PriceDescription, V1SelectedMembership$1 as V1SelectedMembership, BuyerInfo$5 as BuyerInfo, BuyerInfoIdOneOf$3 as BuyerInfoIdOneOf, WeightUnit$5 as WeightUnit, CartDiscount$1 as CartDiscount, CartDiscountDiscountSourceOneOf$1 as CartDiscountDiscountSourceOneOf, Coupon$4 as Coupon, MerchantDiscount$4 as MerchantDiscount, AddressWithContact$3 as AddressWithContact, Address$5 as Address, StreetAddress$4 as StreetAddress, ApiFullAddressContactDetails$1 as ApiFullAddressContactDetails, VatId$4 as VatId, VatType$4 as VatType, AddToCurrentCartAndEstimateTotalsRequest$1 as AddToCurrentCartAndEstimateTotalsRequest, SelectedShippingOption$2 as SelectedShippingOption, SelectedMemberships$3 as SelectedMemberships, SelectedMembership$3 as SelectedMembership, EstimateTotalsResponse$1 as EstimateTotalsResponse, CalculatedLineItem$2 as CalculatedLineItem, LineItemPricesData$2 as LineItemPricesData, ItemTaxFullDetails$4 as ItemTaxFullDetails, TaxRateBreakdown$3 as TaxRateBreakdown, PriceSummary$4 as PriceSummary, GiftCard$4 as GiftCard, TaxSummary$4 as TaxSummary, TaxCalculationDetails$3 as TaxCalculationDetails, TaxCalculationDetailsCalculationDetailsOneOf$3 as TaxCalculationDetailsCalculationDetailsOneOf, RateType$3 as RateType, ManualCalculationReason$3 as ManualCalculationReason, AutoTaxFallbackCalculationDetails$3 as AutoTaxFallbackCalculationDetails, FallbackReason$3 as FallbackReason, ApplicationError$6 as ApplicationError, ShippingInformation$3 as ShippingInformation, ShippingRegion$4 as ShippingRegion, SelectedCarrierServiceOption$3 as SelectedCarrierServiceOption, DeliveryLogistics$4 as DeliveryLogistics, PickupDetails$5 as PickupDetails, PickupMethod$4 as PickupMethod, SelectedCarrierServiceOptionPrices$3 as SelectedCarrierServiceOptionPrices, SelectedCarrierServiceOptionOtherCharge$3 as SelectedCarrierServiceOptionOtherCharge, ChargeType$3 as ChargeType, CarrierServiceOption$3 as CarrierServiceOption, ShippingOption$3 as ShippingOption, ShippingPrice$4 as ShippingPrice, OtherCharge$3 as OtherCharge, AppliedDiscount$4 as AppliedDiscount, AppliedDiscountDiscountSourceOneOf$4 as AppliedDiscountDiscountSourceOneOf, DiscountType$4 as DiscountType, V1Coupon$1 as V1Coupon, V1MerchantDiscount$1 as V1MerchantDiscount, DiscountRule$4 as DiscountRule, DiscountRuleName$4 as DiscountRuleName, CalculationErrors$3 as CalculationErrors, CalculationErrorsShippingCalculationErrorOneOf$3 as CalculationErrorsShippingCalculationErrorOneOf, Details$3 as Details, DetailsKindOneOf$3 as DetailsKindOneOf, ValidationError$3 as ValidationError, RuleType$3 as RuleType, FieldViolation$3 as FieldViolation, CarrierErrors$3 as CarrierErrors, CarrierError$3 as CarrierError, MembershipOptions$3 as MembershipOptions, Membership$3 as Membership, MembershipName$4 as MembershipName, MembershipPaymentCredits$3 as MembershipPaymentCredits, InvalidMembership$3 as InvalidMembership, AdditionalFee$4 as AdditionalFee, GetCurrentCartRequest$1 as GetCurrentCartRequest, GetCurrentCartResponse$1 as GetCurrentCartResponse, UpdateCartRequest$1 as UpdateCartRequest, MerchantDiscountInput$3 as MerchantDiscountInput, CustomLineItem$2 as CustomLineItem, UpdateCartResponse$1 as UpdateCartResponse, AddToCurrentCartRequest$1 as AddToCurrentCartRequest, AddToCartResponse$1 as AddToCartResponse, RemoveLineItemsFromCurrentCartRequest$1 as RemoveLineItemsFromCurrentCartRequest, RemoveLineItemsResponse$2 as RemoveLineItemsResponse, CreateCheckoutFromCurrentCartRequest$1 as CreateCheckoutFromCurrentCartRequest, ChannelType$4 as ChannelType, CreateCheckoutResponse$2 as CreateCheckoutResponse, RemoveCouponFromCurrentCartRequest$1 as RemoveCouponFromCurrentCartRequest, RemoveCouponResponse$2 as RemoveCouponResponse, UpdateCurrentCartLineItemQuantityRequest$1 as UpdateCurrentCartLineItemQuantityRequest, LineItemQuantityUpdate$1 as LineItemQuantityUpdate, UpdateLineItemsQuantityResponse$1 as UpdateLineItemsQuantityResponse, EstimateCurrentCartTotalsRequest$1 as EstimateCurrentCartTotalsRequest, DeleteCurrentCartRequest$1 as DeleteCurrentCartRequest, DeleteCartResponse$1 as DeleteCartResponse, CreateCartRequest$1 as CreateCartRequest, CreateCartResponse$1 as CreateCartResponse, GetCartRequest$1 as GetCartRequest, GetCartResponse$1 as GetCartResponse, GetCartByCheckoutIdRequest$1 as GetCartByCheckoutIdRequest, GetCartByCheckoutIdResponse$1 as GetCartByCheckoutIdResponse, AddToCartRequest$1 as AddToCartRequest, RemoveLineItemsRequest$2 as RemoveLineItemsRequest, CreateCheckoutRequest$2 as CreateCheckoutRequest, RemoveCouponRequest$2 as RemoveCouponRequest, UpdateLineItemsQuantityRequest$1 as UpdateLineItemsQuantityRequest, EstimateTotalsRequest$1 as EstimateTotalsRequest, DeleteCartRequest$1 as DeleteCartRequest, DomainEvent$3 as DomainEvent, DomainEventBodyOneOf$3 as DomainEventBodyOneOf, EntityCreatedEvent$3 as EntityCreatedEvent, EntityUpdatedEvent$3 as EntityUpdatedEvent, EntityDeletedEvent$3 as EntityDeletedEvent, ActionEvent$3 as ActionEvent, ExtendedFieldsUpdatedEvent$3 as ExtendedFieldsUpdatedEvent, Empty$3 as Empty, CartCompletedEvent$1 as CartCompletedEvent, V1BuyerInfo$2 as V1BuyerInfo, IdentityType$4 as IdentityType, V1WeightUnit$1 as V1WeightUnit, CartAddress$1 as CartAddress, CommonAddress$2 as CommonAddress, CommonAddressStreetOneOf$2 as CommonAddressStreetOneOf, AddressLocation$2 as AddressLocation, Subdivision$2 as Subdivision, SubdivisionType$2 as SubdivisionType, FullAddressContactDetails$3 as FullAddressContactDetails, Currency$1 as Currency, AppliedCoupon$3 as AppliedCoupon, Totals$3 as Totals, ShippingInfo$3 as ShippingInfo, ShippingInfoDetailsOneOf$2 as ShippingInfoDetailsOneOf, ShippingRuleDetails$1 as ShippingRuleDetails, V1PickupDetails$2 as V1PickupDetails, BuyerDetails$2 as BuyerDetails, ecomV1CartCart_universal_d_createCart as createCart, ecomV1CartCart_universal_d_CreateCartOptions as CreateCartOptions, ecomV1CartCart_universal_d_updateCart as updateCart, ecomV1CartCart_universal_d_UpdateCartOptions as UpdateCartOptions, ecomV1CartCart_universal_d_getCart as getCart, ecomV1CartCart_universal_d_getCartByCheckoutId as getCartByCheckoutId, ecomV1CartCart_universal_d_internalGetCurrentCart as internalGetCurrentCart, ecomV1CartCart_universal_d_addToCart as addToCart, ecomV1CartCart_universal_d_AddToCartOptions as AddToCartOptions, removeLineItems$1 as removeLineItems, createCheckout$1 as createCheckout, CreateCheckoutOptions$1 as CreateCheckoutOptions, removeCoupon$1 as removeCoupon, ecomV1CartCart_universal_d_updateLineItemsQuantity as updateLineItemsQuantity, ecomV1CartCart_universal_d_estimateTotals as estimateTotals, ecomV1CartCart_universal_d_EstimateTotalsOptions as EstimateTotalsOptions, ecomV1CartCart_universal_d_deleteCart as deleteCart, };
    }
    const __debug$5: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface Cart {
        /** Cart ID. */
        _id?: string | null;
        /**
         * Line items.
         * @readonly
         */
        lineItems?: LineItem$4[];
        /** [Buyer note](https://support.wix.com/en/article/wix-stores-viewing-buyer-notes) left by the customer. */
        buyerNote?: string | null;
        /** Buyer information. */
        buyerInfo?: BuyerInfo$4;
        /**
         * Currency used for pricing.
         * @readonly
         */
        currency?: string;
        /**
         * Currency code used for all the converted prices that are returned.
         * For a site that supports multiple currencies, this is the currency the buyer selected.
         * @readonly
         */
        conversionCurrency?: string;
        /**
         * Language for communication with the buyer. Defaults to the site language.
         * For a site that supports multiple languages, this is the language the buyer selected.
         * @readonly
         */
        buyerLanguage?: string | null;
        /**
         * Site language in which original values are displayed.
         * @readonly
         */
        siteLanguage?: string | null;
        /**
         * Whether tax is included in line item prices.
         * @readonly
         */
        taxIncludedInPrices?: boolean | null;
        /**
         * Weight measurement unit - defaults to site's weight unit. Supported values:
         * + `"KG"`
         * + `"LB"`
         * @readonly
         */
        weightUnit?: WeightUnit$4;
        /**
         * Combined price of all line items before discounts. Subtotal includes tax if `cart.tax_included_in_prices` is set to `true`.
         * @internal
         * @readonly
         */
        subtotal?: MultiCurrencyPrice$2;
        /**
         * ID of the checkout that originated from this cart.
         * @readonly
         */
        checkoutId?: string | null;
        /**
         * Cart discounts.
         * @readonly
         */
        appliedDiscounts?: CartDiscount[];
        /**
         * this field is needed for smooth rollout only
         * @internal
         */
        inSync?: boolean | null;
        /**
         * Date and time the cart was created.
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Date and time the cart was updated.
         * @readonly
         */
        _updatedDate?: Date;
        /** Contact info. */
        contactInfo?: AddressWithContact$2;
    }
    interface LineItem$4 {
        /**
         * Line item ID.
         * @readonly
         */
        _id?: string | null;
        /** Item quantity. */
        quantity?: number;
        /** Catalog and item reference. Holds IDs for the item and the catalog it came from, as well as further optional info. */
        catalogReference?: CatalogReference$3;
        /**
         * Item name.
         * + Stores - `product.name`
         * + Bookings - `service.info.name`
         * + Events - `ticket.name`
         * @readonly
         */
        productName?: ProductName$2;
        /**
         * URL to the item's page on the site.
         * @readonly
         */
        url?: string;
        /**
         * Item price **after** catalog-defined discount and line item discounts.
         * @readonly
         */
        price?: MultiCurrencyPrice$2;
        /**
         * Item price **before** catalog-defined discount. Defaults to `price` when not provided.
         * @readonly
         */
        fullPrice?: MultiCurrencyPrice$2;
        /**
         * Item price **before** line item discounts and **after** catalog-defined discount. Defaults to `price` when not provided.
         * @readonly
         */
        priceBeforeDiscounts?: MultiCurrencyPrice$2;
        /**
         * Line item description lines. Used for displaying the cart, checkout and order.
         * @readonly
         */
        descriptionLines?: DescriptionLine$2[];
        /**
         * Line item image details.
         * @readonly
         */
        image?: string;
        /**
         * Item availability details.
         * @readonly
         */
        availability?: ItemAvailabilityInfo$1;
        /**
         * Physical properties of the item. When relevant, contains information such as SKU, item weight, and shippability.
         * @readonly
         */
        physicalProperties?: PhysicalProperties$3;
        /**
         * Coupon scopes - which app and items a coupon applies to.
         * This field is internal to Wix, and should be used by Bookings, Stores and Events as used by the current [Coupons API](https://bo.wix.com/wix-docs/rest/stores/coupons/valid-scope-values).
         * @internal
         * @readonly
         */
        couponScopes?: Scope$2[];
        /**
         * Item type. Either a preset type or custom.
         * @readonly
         */
        itemType?: ItemType$2;
        /**
         * Subscription option information.
         * @internal
         * @readonly
         */
        subscriptionOptionInfo?: SubscriptionOptionInfo$2;
        /**
         * Digital file identifier, relevant only for items with type DIGITAL.
         * @internal
         * @readonly
         */
        digitalFile?: SecuredMedia$1;
        /**
         * Type of selected payment option for current item. Defaults to `"FULL_PAYMENT_ONLINE"`.
         * + `"FULL_PAYMENT_ONLINE"` - The entire payment for this item happens as part of the checkout.
         * + `"FULL_PAYMENT_OFFLINE"` - The entire payment for this item happens after the checkout. For example, when using cash, check, or other offline payment methods.
         * + `"MEMBERSHIP"` - Payment for this item is done by charging a membership. When this option is used, `lineItem.price.amount` will be 0.
         * @readonly
         */
        paymentOption?: PaymentOptionType$3;
        /**
         * Service properties. When relevant, this contains information such as date and number of participants.
         * @readonly
         */
        serviceProperties?: ServiceProperties$2;
        /**
         * In cases where `catalogReference.catalogItemId` is NOT the actual catalog item ID, this field will return the true item's ID.
         * + For example, for Wix Bookings, `catalogReference.catalogItemId` is the booking ID. Therefore this value is set to the service ID.
         * + in most cases, this field is the name as `catalogReference.catalogItemId`.
         * + Used in membership validation.
         * @readonly
         */
        rootCatalogItemId?: string | null;
        /**
         * Additional description for the price. For example, when price is 0 but additional details about the actual price are needed - "Starts at $67".
         * @readonly
         */
        priceDescription?: PriceDescription$2;
        /**
         * Partial payment to be paid upfront during the checkout. Eligible for catalog items with `lineItem.paymentOption` type `DEPOSIT_ONLINE` only.
         * @readonly
         */
        depositAmount?: MultiCurrencyPrice$2;
        /** Selected membership to be used as payment for this item. Must be used with `lineItem.paymentOption` set to `MEMBERSHIP` or `MEMBERSHIP_OFFLINE`. This field can be empty when `lineItem.paymentOption` is set to `MEMBERSHIP_OFFLINE`. */
        selectedMembership?: V1SelectedMembership;
    }
    /** Used for grouping line items and is sent on add to cart */
    interface CatalogReference$3 {
        /** ID of the item within its catalog. For example, `productId` for Wix Stores. */
        catalogItemId?: string;
        /** App ID of the catalog the item comes from. For example, the Wix Stores `appId` is `"1380b703-ce81-ff05-f115-39571d94dfcd"`. */
        appId?: string;
        /**
         * Additional info in key:value form. For example, for a product variant from Wix Stores Catalog, `options` field would hold something like one of the following:
         * + `{"Size": "M", "Color": "Red"}`
         * + `{"variantId": "<VARIANT_ID>"}`.
         */
        options?: Record<string, any> | null;
    }
    interface ProductName$2 {
        /** **Required** - Original product name (in site's default language). */
        original?: string;
        /** Description product name translated into buyer's language. Defaults to `original` when not defined. */
        translated?: string | null;
    }
    interface MultiCurrencyPrice$2 {
        /** Amount. */
        amount?: string;
        /**
         * Converted amount.
         * @readonly
         */
        convertedAmount?: string;
        /**
         * Amount formatted with currency symbol.
         * @readonly
         */
        formattedAmount?: string;
        /**
         * Converted amount formatted with currency symbol.
         * @readonly
         */
        formattedConvertedAmount?: string;
    }
    interface DescriptionLine$2 extends DescriptionLineValueOneOf$2, DescriptionLineDescriptionLineValueOneOf$2 {
        /** Description line name. */
        name?: DescriptionLineName$2;
        /**
         * Description line type.
         * @internal
         */
        lineType?: DescriptionLineType$2;
        /** Description line plain text value. */
        plainText?: PlainTextValue$2;
        /** Description line color value. */
        colorInfo?: Color$2;
        /**
         * Description line plain text value.
         * @internal
         */
        plainTextValue?: PlainTextValue$2;
        /**
         * Description line color.
         * @internal
         */
        color?: string;
    }
    /** @oneof */
    interface DescriptionLineValueOneOf$2 {
        /** Description line plain text value. */
        plainText?: PlainTextValue$2;
        /** Description line color value. */
        colorInfo?: Color$2;
    }
    /** @oneof */
    interface DescriptionLineDescriptionLineValueOneOf$2 {
        /**
         * Description line plain text value.
         * @internal
         */
        plainTextValue?: PlainTextValue$2;
        /**
         * Description line color.
         * @internal
         */
        color?: string;
    }
    interface DescriptionLineName$2 {
        /** Description line name in site's default language. */
        original?: string;
        /** Description line name translated into buyer's language. Defaults to `original` when not defined. */
        translated?: string | null;
    }
    interface PlainTextValue$2 {
        /** Description line plain text value in site's default language. */
        original?: string;
        /** Description line plain text value translated into buyer's language. Defaults to `original` when not defined. */
        translated?: string | null;
    }
    interface Color$2 {
        /** Description line color name in site's default language. */
        original?: string;
        /** Description line color name translated into buyer's language. Defaults to `original` when not defined. */
        translated?: string | null;
        /**
         * HEX or RGB color code for display.
         *
         */
        code?: string | null;
    }
    enum DescriptionLineType$2 {
        UNRECOGNISED = "UNRECOGNISED",
        PLAIN_TEXT = "PLAIN_TEXT",
        COLOR = "COLOR"
    }
    interface ItemAvailabilityInfo$1 {
        /**
         * Item availability status.
         *
         * NOT_FOUND - Item does not exist.
         * NOT_AVAILABLE - Not in stock.
         * PARTIALLY_AVAILABLE - Available quantity is less than requested.
         */
        status?: ItemAvailabilityStatus$1;
        /** Quantity available. */
        quantityAvailable?: number | null;
    }
    enum ItemAvailabilityStatus$1 {
        AVAILABLE = "AVAILABLE",
        NOT_FOUND = "NOT_FOUND",
        /** Not in stock */
        NOT_AVAILABLE = "NOT_AVAILABLE",
        /** Available quantity is less than requested */
        PARTIALLY_AVAILABLE = "PARTIALLY_AVAILABLE"
    }
    interface PhysicalProperties$3 {
        /**
         * Line item weight. Measurement unit is taken from `order.weightUnit`. Supported values:
         * + `"KG"`
         * + `"LB"`
         */
        weight?: number | null;
        /** Stock-keeping unit. Learn more about [SKUs](https://www.wix.com/encyclopedia/definition/stock-keeping-unit-sku). */
        sku?: string | null;
        /** Whether this line item is shippable. */
        shippable?: boolean;
    }
    interface Scope$2 {
        /** Scope namespace (Wix Stores, Wix Bookings, Wix Events) */
        namespace?: string;
        /** Coupon scope's applied group (e.g., event or ticket in Wix Events) */
        group?: Group$2;
    }
    interface Group$2 {
        /** Coupon scope's group (e.g., product or collection in Wix Stores). See [valid scope values](https://dev.wix.com/api/rest/coupons/coupons/valid-scope-values). */
        name?: string;
        /** Item ID (when the coupon scope is limited to just one item). */
        entityId?: string | null;
    }
    interface ItemType$2 extends ItemTypeItemTypeDataOneOf$2 {
        /** Preset item type. */
        preset?: ItemTypeItemType$2;
        /** Custom item type. */
        custom?: string;
    }
    /** @oneof */
    interface ItemTypeItemTypeDataOneOf$2 {
        /** Preset item type. */
        preset?: ItemTypeItemType$2;
        /** Custom item type. */
        custom?: string;
    }
    enum ItemTypeItemType$2 {
        UNRECOGNISED = "UNRECOGNISED",
        PHYSICAL = "PHYSICAL",
        DIGITAL = "DIGITAL",
        GIFT_CARD = "GIFT_CARD",
        SERVICE = "SERVICE"
    }
    interface SubscriptionOptionInfo$2 {
        /** Subscription option settings. */
        subscriptionSettings?: SubscriptionSettings$4;
        /** Subscription option title. */
        title?: Title$1;
        /** Subscription option description. */
        description?: Description$1;
    }
    interface SubscriptionSettings$4 {
        /** Frequency of recurring payment. */
        frequency?: SubscriptionFrequency$4;
        /**
         * Interval of recurring payment (optional: default value 1 will be used if not provided)
         * @internal
         */
        interval?: number | null;
        /** Whether subscription is renewed automatically at the end of each period. */
        autoRenewal?: boolean;
        /** Number of billing cycles before subscription ends. Ignored if `autoRenewal: true`. */
        billingCycles?: number | null;
    }
    /** Frequency unit of recurring payment */
    enum SubscriptionFrequency$4 {
        UNDEFINED = "UNDEFINED",
        DAY = "DAY",
        WEEK = "WEEK",
        MONTH = "MONTH",
        YEAR = "YEAR"
    }
    interface Title$1 {
        /** Subscription option name. */
        original?: string;
        /** Translated subscription option name. */
        translated?: string | null;
    }
    interface Description$1 {
        /** Subscription option description. */
        original?: string;
        /** Translated subscription option name. */
        translated?: string | null;
    }
    interface SecuredMedia$1 {
        /** Media ID in media manager. */
        _id?: string;
        /** Original file name. */
        fileName?: string;
        /** File type. */
        fileType?: FileType$1;
    }
    enum FileType$1 {
        UNSPECIFIED = "UNSPECIFIED",
        SECURE_PICTURE = "SECURE_PICTURE",
        SECURE_VIDEO = "SECURE_VIDEO",
        SECURE_DOCUMENT = "SECURE_DOCUMENT",
        SECURE_MUSIC = "SECURE_MUSIC",
        SECURE_ARCHIVE = "SECURE_ARCHIVE"
    }
    /** Type of selected payment option for catalog item */
    enum PaymentOptionType$3 {
        /** The entire payment for given item will happen as part of the checkout. */
        FULL_PAYMENT_ONLINE = "FULL_PAYMENT_ONLINE",
        /** The entire payment for given item will happen after the checkout. */
        FULL_PAYMENT_OFFLINE = "FULL_PAYMENT_OFFLINE",
        /** Given item cannot be paid via monetary payment options, only via membership. When this option is used, price will always be 0. */
        MEMBERSHIP = "MEMBERSHIP",
        /**
         * Partial payment for the given item to be paid upfront during the checkout.
         * Amount to be paid is defined by `deposit_amount` field on per-item basis.
         */
        DEPOSIT_ONLINE = "DEPOSIT_ONLINE",
        /**
         * Payment for this item can only be done using a membership and must be manually redeemed in the dashboard by the site owner.
         * Note: when this option is used, price will be 0.
         */
        MEMBERSHIP_OFFLINE = "MEMBERSHIP_OFFLINE"
    }
    interface ServiceProperties$2 {
        /** The date and time for which the service is supposed to be provided. For example, the time of the class. */
        scheduledDate?: Date;
        /** The number of people participating in this service. For example, the number of people attending the class or the number of people per hotel room. */
        numberOfParticipants?: number | null;
    }
    interface PriceDescription$2 {
        /**
         * **Required** - Original price description (in site's default language).
         *
         */
        original?: string;
        /** Product name translated into buyer's language. Defaults to `original` when not defined. */
        translated?: string | null;
    }
    /** Selected Membership */
    interface V1SelectedMembership {
        /** Membership ID. */
        _id?: string;
        /** ID of the app providing this payment option. */
        appId?: string;
    }
    /** Buyer Info */
    interface BuyerInfo$4 extends BuyerInfoIdOneOf$2 {
        /**
         * Contact ID. Auto-created if one does not yet exist. For more information, see the [Contacts API](https://www.wix.com/velo/reference/wix-crm-backend/contacts/introduction).
         * @readonly
         */
        contactId?: string | null;
        /** Buyer email address. */
        email?: string | null;
        /**
         * Visitor ID - if the buyer is **not** a site member.
         * @readonly
         */
        visitorId?: string;
        /**
         * Member ID - if the buyer is a site member.
         * @readonly
         */
        memberId?: string;
        /**
         * User ID - if the cart owner is a Wix user.
         * @readonly
         */
        userId?: string;
    }
    /** @oneof */
    interface BuyerInfoIdOneOf$2 {
        /**
         * Visitor ID - if the buyer is **not** a site member.
         * @readonly
         */
        visitorId?: string;
        /**
         * Member ID - if the buyer is a site member.
         * @readonly
         */
        memberId?: string;
        /**
         * User ID - if the cart owner is a Wix user.
         * @readonly
         */
        userId?: string;
    }
    enum WeightUnit$4 {
        /** Weight unit can't be classified, due to an error */
        UNSPECIFIED_WEIGHT_UNIT = "UNSPECIFIED_WEIGHT_UNIT",
        /** Kilograms */
        KG = "KG",
        /** Pounds */
        LB = "LB"
    }
    interface CartDiscount extends CartDiscountDiscountSourceOneOf {
        /** Coupon details. */
        coupon?: Coupon$3;
        /** Merchant discount. */
        merchantDiscount?: MerchantDiscount$3;
    }
    /** @oneof */
    interface CartDiscountDiscountSourceOneOf {
        /** Coupon details. */
        coupon?: Coupon$3;
        /** Merchant discount. */
        merchantDiscount?: MerchantDiscount$3;
    }
    interface Coupon$3 {
        /** Coupon ID. */
        _id?: string;
        /** Coupon code. */
        code?: string;
    }
    interface MerchantDiscount$3 {
        /** Discount value. */
        amount?: MultiCurrencyPrice$2;
    }
    /** Billing Info and shipping details */
    interface AddressWithContact$2 {
        /** Address. */
        address?: Address$4;
        /** Contact details. */
        contactDetails?: ApiFullAddressContactDetails;
    }
    /** Physical address */
    interface Address$4 {
        /** Two-letter country code in [ISO-3166 alpha-2](https://www.iso.org/obp/ui/#search/code/) format. */
        country?: string | null;
        /** Code for a subdivision (such as state, prefecture, or province) in [ISO 3166-2](https://www.iso.org/standard/72483.html) format. */
        subdivision?: string | null;
        /** City name. */
        city?: string | null;
        /** Postal or zip code. */
        postalCode?: string | null;
        /** Street address. */
        streetAddress?: StreetAddress$3;
        /** Main address line (usually street name and number). */
        addressLine1?: string | null;
        /** Free text providing more detailed address info. Usually contains apt, suite, floor. */
        addressLine2?: string | null;
    }
    interface StreetAddress$3 {
        /** Street number. */
        number?: string;
        /** Street name. */
        name?: string;
        /**
         * Apartment number.
         * @internal
         */
        apt?: string;
        /**
         * Optional address line 1
         * @internal
         */
        formattedAddressLine?: string | null;
    }
    /** Full contact details for an address */
    interface ApiFullAddressContactDetails {
        /** First name. */
        firstName?: string | null;
        /** Last name. */
        lastName?: string | null;
        /** Phone number. */
        phone?: string | null;
        /** Company name. */
        company?: string | null;
        /** Tax information (for Brazil only). If ID is provided, `vatId.type` must also be set, `UNSPECIFIED` is not allowed. */
        vatId?: VatId$3;
    }
    interface VatId$3 {
        /** Customer's tax ID. */
        _id?: string;
        /**
         * Tax type.
         *
         * Supported values:
         * + `CPF`: for individual tax payers
         * + `CNPJ`: for corporations
         */
        type?: VatType$3;
    }
    /** tax info types */
    enum VatType$3 {
        UNSPECIFIED = "UNSPECIFIED",
        /** CPF - for individual tax payers. */
        CPF = "CPF",
        /** CNPJ - for corporations */
        CNPJ = "CNPJ"
    }
    interface AddToCurrentCartAndEstimateTotalsRequest {
        /** Catalog line items. */
        lineItems?: LineItem$4[];
        /** Selected shipping option. */
        selectedShippingOption?: SelectedShippingOption$1;
        /** Shipping address. Used for calculating tax and shipping (when applicable). */
        shippingAddress?: Address$4;
        /** Billing address. Used for calculating tax if all the items in the cart are not shippable. */
        billingAddress?: Address$4;
        /** The selected membership payment options and which line items they apply to. */
        selectedMemberships?: SelectedMemberships$2;
        /**
         * Whether to calculate tax in the calculation request. If not passed, tax is being calculated.
         * @internal
         */
        calculateTax?: boolean | null;
        /**
         * Whether to calculate shipping in the calculation request. If not passed, shipping is being calculated.
         * @internal
         */
        calculateShipping?: boolean | null;
    }
    interface SelectedShippingOption$1 {
        /** Carrier ID. */
        carrierId?: string | null;
        /** Selected shipping option code. For example, "usps_std_overnight". */
        code?: string;
    }
    interface SelectedMemberships$2 {
        /** Selected memberships. */
        memberships?: SelectedMembership$2[];
    }
    interface SelectedMembership$2 {
        /** Membership ID. */
        _id?: string;
        /** ID of the app providing this payment option. */
        appId?: string;
        /** IDs of the line items this membership applies to. */
        lineItemIds?: string[];
    }
    interface EstimateTotalsResponse {
        /** Cart. */
        cart?: Cart;
        /** Calculated line items. */
        calculatedLineItems?: CalculatedLineItem$1[];
        /** Price summary. */
        priceSummary?: PriceSummary$3;
        /** Applied gift card. */
        giftCard?: GiftCard$3;
        /** Tax summary. */
        taxSummary?: TaxSummary$3;
        /** Shipping information. */
        shippingInfo?: ShippingInformation$2;
        /** Applied discounts. */
        appliedDiscounts?: AppliedDiscount$3[];
        /** Calculation errors. */
        calculationErrors?: CalculationErrors$2;
        /**
         * Weight measurement unit - defaults to site's weight unit. Supported values:
         * + `"KG"`
         * + `"LB"`
         */
        weightUnit?: WeightUnit$4;
        /** Currency used for pricing in this store. */
        currency?: string;
        /**
         * Minimal amount to pay in order to place the order.
         * @readonly
         */
        payNow?: PriceSummary$3;
        /**
         * Remaining amount for the order to be fully paid.
         * @readonly
         */
        payLater?: PriceSummary$3;
        /** Information about valid and invalid memberships, and which ones are selected for usage. */
        membershipOptions?: MembershipOptions$2;
        /** Additional fees */
        additionalFees?: AdditionalFee$3[];
    }
    interface CalculatedLineItem$1 {
        /** Line item ID. */
        lineItemId?: string;
        /** Price breakdown for this line item. */
        pricesBreakdown?: LineItemPricesData$1;
        /**
         * Type of selected payment option for current item. Defaults to `"FULL_PAYMENT_ONLINE"`.
         * + `"FULL_PAYMENT_ONLINE"` - The entire payment for this item happens as part of the checkout.
         * + `"FULL_PAYMENT_OFFLINE"` - The entire payment for this item happens after the checkout. For example, when using cash, check, or other offline payment methods.
         * + `"MEMBERSHIP"` - Payment for this item is done by charging a membership. When this option is used, `lineItem.price.amount` will be 0.
         */
        paymentOption?: PaymentOptionType$3;
    }
    interface LineItemPricesData$1 {
        /** Total price after discounts and after tax. */
        totalPriceAfterTax?: MultiCurrencyPrice$2;
        /** Deprecated - use `total_price_after_tax` minus `tax_details.total_tax` instead. */
        totalPriceBeforeTax?: MultiCurrencyPrice$2;
        /** Tax details. */
        taxDetails?: ItemTaxFullDetails$3;
        /** Total discount for all line items. */
        totalDiscount?: MultiCurrencyPrice$2;
        /** Catalog price after catalog discount and automatic discounts. */
        price?: MultiCurrencyPrice$2;
        /** Item price **before** line item discounts and **after** catalog-defined discount. Defaults to `price` when not provided. */
        priceBeforeDiscounts?: MultiCurrencyPrice$2;
        /** Total price **after** catalog-defined discount and line item discounts. */
        lineItemPrice?: MultiCurrencyPrice$2;
        /** Item price **before** line item discounts and **before** catalog-defined discount. Defaults to `price` when not provided. */
        fullPrice?: MultiCurrencyPrice$2;
    }
    interface ItemTaxFullDetails$3 {
        /** Amount for which tax is calculated. */
        taxableAmount?: MultiCurrencyPrice$2;
        /**
         * Tax group ID, if specified.
         * @internal
         */
        taxGroupId?: string | null;
        /** Tax rate %, as a decimal point between 0 and 1. */
        taxRate?: string;
        /** Calculated tax, based on `taxable_amount` and `tax_rate`. */
        totalTax?: MultiCurrencyPrice$2;
        /**
         * If breakdown exists, the sum of rates in the breakdown must equal `tax_rate`.
         * @readonly
         */
        rateBreakdown?: TaxRateBreakdown$2[];
    }
    interface TaxRateBreakdown$2 {
        /** Type of tax against which the calculation was performed. */
        name?: string;
        /** Rate at which this tax detail was calculated. */
        rate?: string;
        /** Amount of tax for this tax detail. */
        tax?: MultiCurrencyPrice$2;
    }
    interface PriceSummary$3 {
        /** Subtotal of all line items, before discounts and before tax. */
        subtotal?: MultiCurrencyPrice$2;
        /** Total shipping price, before discounts and before tax. */
        shipping?: MultiCurrencyPrice$2;
        /** Total tax. */
        tax?: MultiCurrencyPrice$2;
        /** Total calculated discount value. */
        discount?: MultiCurrencyPrice$2;
        /** Total price after discounts, gift cards, and tax. */
        total?: MultiCurrencyPrice$2;
        /** Total additional fees price before tax. */
        additionalFees?: MultiCurrencyPrice$2;
    }
    interface GiftCard$3 {
        /** Gift Card ID. */
        _id?: string;
        /** Gift card obfuscated code. */
        obfuscatedCode?: string;
        /** Gift card value. */
        amount?: MultiCurrencyPrice$2;
        /** App ID of the gift card provider. */
        appId?: string;
    }
    interface TaxSummary$3 {
        /**
         * Amount for which tax is calculated, added from line items.
         * @readonly
         */
        taxableAmount?: MultiCurrencyPrice$2;
        /**
         * Calculated tax, added from line items.
         * @readonly
         */
        totalTax?: MultiCurrencyPrice$2;
        /**
         * manual tax rate
         * @internal
         * @readonly
         */
        manualTaxRate?: string;
        /** Tax calculator that was active when the order was created. */
        calculationDetails?: TaxCalculationDetails$2;
    }
    interface TaxCalculationDetails$2 extends TaxCalculationDetailsCalculationDetailsOneOf$2 {
        /**
         * Rate calculation type. Supported values:
         * + `"AUTO_RATE"`
         * + `"FALLBACK_RATE"`
         * + `"MANUAL_RATE"`
         * + `"NO_TAX_COLLECTED"`
         */
        rateType?: RateType$2;
        /** Reason the manual calculation was used. */
        manualRateReason?: ManualCalculationReason$2;
        /** Error details and reason for tax rate fallback. */
        autoTaxFallbackDetails?: AutoTaxFallbackCalculationDetails$2;
    }
    /** @oneof */
    interface TaxCalculationDetailsCalculationDetailsOneOf$2 {
        /** Reason the manual calculation was used. */
        manualRateReason?: ManualCalculationReason$2;
        /** Details of the fallback rate calculation. */
        autoTaxFallbackDetails?: AutoTaxFallbackCalculationDetails$2;
    }
    enum RateType$2 {
        /** no tax being collected for this request due to location of purchase */
        NO_TAX_COLLECTED = "NO_TAX_COLLECTED",
        /** manual rate used for calculation */
        MANUAL_RATE = "MANUAL_RATE",
        /** autotax rate used for calculation */
        AUTO_RATE = "AUTO_RATE",
        /** fallback rate used for calculation */
        FALLBACK_RATE = "FALLBACK_RATE"
    }
    enum ManualCalculationReason$2 {
        /** user set calculator in Business Manager to be Manual */
        GLOBAL_SETTING_TO_MANUAL = "GLOBAL_SETTING_TO_MANUAL",
        /** specific region is on manual even though Global setting is Auto-tax */
        REGION_SETTING_TO_MANUAL = "REGION_SETTING_TO_MANUAL"
    }
    interface AutoTaxFallbackCalculationDetails$2 {
        /**
         * Reason for fallback. Supported values:
         * + `"AUTO_TAX_FAILED"`
         * + `"AUTO_TAX_DEACTIVATED"`
         */
        fallbackReason?: FallbackReason$2;
        /** invalid request (i.e. address), timeout, internal error, license error, and others will be encoded here */
        error?: ApplicationError$5;
    }
    enum FallbackReason$2 {
        /** auto-tax failed to be calculated */
        AUTO_TAX_FAILED = "AUTO_TAX_FAILED",
        /** auto-tax was temporarily deactivated on a system-level */
        AUTO_TAX_DEACTIVATED = "AUTO_TAX_DEACTIVATED"
    }
    interface ApplicationError$5 {
        /** Error code. */
        code?: string;
        /** Description of the error. */
        description?: string;
        /** Data related to the error. */
        data?: Record<string, any> | null;
    }
    interface ShippingInformation$2 {
        /** Shipping region. */
        region?: ShippingRegion$3;
        /** Selected shipping option. */
        selectedCarrierServiceOption?: SelectedCarrierServiceOption$2;
        /** All shipping options. */
        carrierServiceOptions?: CarrierServiceOption$2[];
    }
    interface ShippingRegion$3 {
        /**
         * Shipping region ID.
         * @readonly
         */
        _id?: string;
        /** Shipping region name. */
        name?: string;
    }
    interface SelectedCarrierServiceOption$2 {
        /** Unique identifier of selected option. For example, "usps_std_overnight". */
        code?: string;
        /**
         * Title of the option, such as USPS Standard Overnight Delivery (in the requested locale).
         * For example, "Standard" or "First-Class Package International".
         * @readonly
         */
        title?: string;
        /**
         * Delivery logistics.
         * @readonly
         */
        logistics?: DeliveryLogistics$3;
        /**
         * Shipping costs.
         * @readonly
         */
        cost?: SelectedCarrierServiceOptionPrices$2;
        /**
         * Were we able to find the requested shipping option, or otherwise we fallback to the default one (the first)
         * @readonly
         */
        requestedShippingOption?: boolean;
        /** Other charges */
        otherCharges?: SelectedCarrierServiceOptionOtherCharge$2[];
        /** This carrier's unique ID */
        carrierId?: string | null;
    }
    interface DeliveryLogistics$3 {
        /** Expected delivery time, in free text. For example, "3-5 business days". */
        deliveryTime?: string | null;
        /** Instructions for caller, e.g for pickup: "Please deliver during opening hours, and please don't park in disabled parking spot". */
        instructions?: string | null;
        /** Pickup details. */
        pickupDetails?: PickupDetails$4;
    }
    interface PickupDetails$4 {
        /** Pickup address. */
        address?: Address$4;
        /** Whether the pickup address is that of a business - this may effect tax calculation. */
        businessLocation?: boolean;
        /** Pickup method */
        pickupMethod?: PickupMethod$3;
    }
    enum PickupMethod$3 {
        UNKNOWN_METHOD = "UNKNOWN_METHOD",
        STORE_PICKUP = "STORE_PICKUP",
        PICKUP_POINT = "PICKUP_POINT"
    }
    interface SelectedCarrierServiceOptionPrices$2 {
        /** Total shipping price, after discount and after tax. */
        totalPriceAfterTax?: MultiCurrencyPrice$2;
        /** Deprecated - use `total_price_after_tax` minus `tax_details.total_tax` instead. */
        totalPriceBeforeTax?: MultiCurrencyPrice$2;
        /** Tax details. */
        taxDetails?: ItemTaxFullDetails$3;
        /** Shipping discount before tax. */
        totalDiscount?: MultiCurrencyPrice$2;
        /** Shipping price before discount and before tax. */
        price?: MultiCurrencyPrice$2;
    }
    interface SelectedCarrierServiceOptionOtherCharge$2 {
        /** Type of additional cost. */
        type?: ChargeType$2;
        /** Details of the charge, such as 'Full Coverage Insurance of up to 80% of value of shipment'. */
        details?: string | null;
        /** Price of added charge. */
        cost?: SelectedCarrierServiceOptionPrices$2;
    }
    enum ChargeType$2 {
        HANDLING_FEE = "HANDLING_FEE",
        INSURANCE = "INSURANCE"
    }
    interface CarrierServiceOption$2 {
        /** Carrier ID. */
        carrierId?: string;
        /** Shipping options offered by this carrier for this request. */
        shippingOptions?: ShippingOption$2[];
    }
    interface ShippingOption$2 {
        /**
         * Unique code of provided shipping option like "usps_std_overnight".
         * For legacy calculators this would be the UUID of the option.
         */
        code?: string;
        /**
         * Title of the option, such as USPS Standard Overnight Delivery (in the requested locale).
         * For example, "Standard" or "First-Class Package International".
         */
        title?: string;
        /** Delivery logistics. */
        logistics?: DeliveryLogistics$3;
        /** Sipping price information. */
        cost?: ShippingPrice$3;
    }
    interface ShippingPrice$3 {
        /** Shipping price. */
        price?: MultiCurrencyPrice$2;
        /** Other costs such as insurance, handling & packaging for fragile items, etc. */
        otherCharges?: OtherCharge$2[];
    }
    interface OtherCharge$2 {
        /** Type of additional cost. */
        type?: ChargeType$2;
        /** Price of added cost. */
        price?: MultiCurrencyPrice$2;
    }
    interface AppliedDiscount$3 extends AppliedDiscountDiscountSourceOneOf$3 {
        /** Discount type. */
        discountType?: DiscountType$3;
        /** IDs of the line items the discount applies to. */
        lineItemIds?: string[];
        /** Coupon details. */
        coupon?: V1Coupon;
        /** Merchant discount. */
        merchantDiscount?: V1MerchantDiscount;
        /** Discount rule */
        discountRule?: DiscountRule$3;
    }
    /** @oneof */
    interface AppliedDiscountDiscountSourceOneOf$3 {
        /** Coupon details. */
        coupon?: V1Coupon;
        /** Merchant discount. */
        merchantDiscount?: V1MerchantDiscount;
        /** Discount rule */
        discountRule?: DiscountRule$3;
    }
    enum DiscountType$3 {
        GLOBAL = "GLOBAL",
        SPECIFIC_ITEMS = "SPECIFIC_ITEMS",
        SHIPPING = "SHIPPING"
    }
    /** Coupon */
    interface V1Coupon {
        /** Coupon ID. */
        _id?: string;
        /** Coupon code. */
        code?: string;
        /** Coupon value. */
        amount?: MultiCurrencyPrice$2;
        /** Coupon name. */
        name?: string;
        /**
         * Coupon type: We want it to be an enum and not a string but currently we have no time to do it so we leave it as is to be aligned with cart summary.
         * @internal
         */
        couponType?: string;
    }
    interface V1MerchantDiscount {
        /** Discount value. */
        amount?: MultiCurrencyPrice$2;
    }
    interface DiscountRule$3 {
        /** Discount rule ID */
        _id?: string;
        /** Discount rule name */
        name?: DiscountRuleName$3;
        /** Discount value. */
        amount?: MultiCurrencyPrice$2;
    }
    interface DiscountRuleName$3 {
        /** Original discount rule name (in site's default language). */
        original?: string;
        /** Discount rule name translated into buyer's language. Defaults to `original` when not defined. */
        translated?: string | null;
    }
    interface CalculationErrors$2 extends CalculationErrorsShippingCalculationErrorOneOf$2 {
        /** Tax calculation error. */
        taxCalculationError?: Details$2;
        /** Coupon calculation error. */
        couponCalculationError?: Details$2;
        /** Gift card calculation error. */
        giftCardCalculationError?: Details$2;
        /** Order validation errors. */
        orderValidationErrors?: ApplicationError$5[];
        /**
         * Membership payment methods calculation errors
         * For example, will indicate that a line item that must be paid with membership payment doesn't have one or selected memberships are invalid
         */
        membershipError?: Details$2;
        /** Discount Rule calculation error. */
        discountsCalculationError?: Details$2;
        /** General shipping calculation error. */
        generalShippingCalculationError?: Details$2;
        /** Carrier errors. */
        carrierErrors?: CarrierErrors$2;
    }
    /** @oneof */
    interface CalculationErrorsShippingCalculationErrorOneOf$2 {
        /** General shipping calculation error. */
        generalShippingCalculationError?: Details$2;
        /** Carrier errors. */
        carrierErrors?: CarrierErrors$2;
    }
    interface Details$2 extends DetailsKindOneOf$2 {
        /** Deprecated in APIs. Used to enable migration from rendering arbitrary tracing to rest response. */
        tracing?: Record<string, string>;
        applicationError?: ApplicationError$5;
        validationError?: ValidationError$2;
    }
    /** @oneof */
    interface DetailsKindOneOf$2 {
        applicationError?: ApplicationError$5;
        validationError?: ValidationError$2;
    }
    /**
     * example result:
     * {
     * "fieldViolations": [
     * {
     * "field": "fieldA",
     * "description": "invalid music note. supported notes: [do,re,mi,fa,sol,la,ti]",
     * "violatedRule": "OTHER",
     * "ruleName": "INVALID_NOTE",
     * "data": {
     * "value": "FI"
     * }
     * },
     * {
     * "field": "fieldB",
     * "description": "field value out of range. supported range: [0-20]",
     * "violatedRule": "MAX",
     * "data": {
     * "threshold": 20
     * }
     * },
     * {
     * "field": "fieldC",
     * "description": "invalid phone number. provide a valid phone number of size: [7-12], supported characters: [0-9, +, -, (, )]",
     * "violatedRule": "FORMAT",
     * "data": {
     * "type": "PHONE"
     * }
     * }
     * ]
     * }
     */
    interface ValidationError$2 {
        fieldViolations?: FieldViolation$2[];
    }
    enum RuleType$2 {
        VALIDATION = "VALIDATION",
        OTHER = "OTHER",
        MAX = "MAX",
        MIN = "MIN",
        MAX_LENGTH = "MAX_LENGTH",
        MIN_LENGTH = "MIN_LENGTH",
        MAX_SIZE = "MAX_SIZE",
        MIN_SIZE = "MIN_SIZE",
        FORMAT = "FORMAT",
        DECIMAL_LTE = "DECIMAL_LTE",
        DECIMAL_GTE = "DECIMAL_GTE",
        DECIMAL_LT = "DECIMAL_LT",
        DECIMAL_GT = "DECIMAL_GT",
        DECIMAL_MAX_SCALE = "DECIMAL_MAX_SCALE",
        INVALID_ENUM_VALUE = "INVALID_ENUM_VALUE",
        REQUIRED_FIELD = "REQUIRED_FIELD",
        FIELD_NOT_ALLOWED = "FIELD_NOT_ALLOWED",
        ONE_OF_ALIGNMENT = "ONE_OF_ALIGNMENT"
    }
    interface FieldViolation$2 {
        field?: string;
        description?: string;
        violatedRule?: RuleType$2;
        /** applicable when violated_rule=OTHER */
        ruleName?: string | null;
        data?: Record<string, any> | null;
    }
    interface CarrierErrors$2 {
        /** Carrier errors. */
        errors?: CarrierError$2[];
    }
    interface CarrierError$2 {
        /** Carrier ID. */
        carrierId?: string;
        /** Error details. */
        error?: Details$2;
    }
    interface MembershipOptions$2 {
        /** List of payment options that can be used. */
        eligibleMemberships?: Membership$2[];
        /** List of payment options that are owned by the member, but cannot be used due to reason provided. */
        invalidMemberships?: InvalidMembership$2[];
        /** The selected membership payment options and which line items they apply to. */
        selectedMemberships?: SelectedMembership$2[];
    }
    interface Membership$2 {
        /** Membership ID. */
        _id?: string;
        /** ID of the application providing this payment option. */
        appId?: string;
        /** The name of this membership. */
        name?: MembershipName$3;
        /** Line item IDs which are "paid" for by this membership. */
        lineItemIds?: string[];
        /** Optional - For a membership that has limited credits, information about credit usage. */
        credits?: MembershipPaymentCredits$2;
        /** Optional - TMembership expiry date. */
        expirationDate?: Date;
        /** Additional data about this membership. */
        additionalData?: Record<string, any> | null;
    }
    interface MembershipName$3 {
        /** The name of this membership */
        original?: string;
        /** Membership name translated into buyer's language. Defaults to `original` when not defined. */
        translated?: string | null;
    }
    interface MembershipPaymentCredits$2 {
        /** How much credit this membership has in total */
        total?: number;
        /** How much credit remained for this membership */
        remaining?: number;
    }
    interface InvalidMembership$2 {
        /** Membership details. */
        membership?: Membership$2;
        /** Reason why this membership is invalid and cannot be used. */
        reason?: string;
    }
    interface AdditionalFee$3 {
        /** Additional fee's unique code (or ID) for future processing */
        code?: string | null;
        /** Translated additional fee's name */
        name?: string;
        /** Additional fee's price */
        price?: MultiCurrencyPrice$2;
        /** Tax details */
        taxDetails?: ItemTaxFullDetails$3;
        /** Provider's app id */
        providerAppId?: string | null;
        /** Additional fee's price before tax */
        priceBeforeTax?: MultiCurrencyPrice$2;
    }
    interface GetCurrentCartRequest {
    }
    interface GetCurrentCartResponse {
        /** Current session's active cart. */
        cart?: Cart;
    }
    interface UpdateCartRequest {
        /** Cart info. */
        cartInfo?: Cart;
        /** The code of an existing coupon to apply to the cart. For more information, see the [Coupons API](https://www.wix.com/velo/reference/wix-marketing-backend/coupons). */
        couponCode?: string | null;
        /** Merchant discounts to apply to specific line items. If no `lineItemIds` are passed, the discount will be applied to the whole cart. */
        merchantDiscounts?: MerchantDiscountInput$2[];
        /** Catalog line items. */
        lineItems?: LineItem$4[];
        /**
         * Custom line items.
         * @internal
         */
        customLineItems?: CustomLineItem$1[];
        /**
         * List of field names to determine which of cartInfo's fields will be updated
         * @internal
         */
        cartFieldmask?: string[];
    }
    interface MerchantDiscountInput$2 {
        /** Discount amount. */
        amount?: string;
        /** IDs of the line items the discount applies to. */
        lineItemIds?: string[];
    }
    interface CustomLineItem$1 {
        /**
         * Custom line item quantity.
         *
         * Min: `1`
         *
         * Max: `100000`
         */
        quantity?: number;
        /** Custom line item name. */
        name?: string | null;
        /**
         * Custom line item price.
         * Must be a number or a decimal without symbols.
         */
        price?: string;
        /** Custom line item description lines. Used for displaying the cart, checkout and order. */
        descriptionLines?: DescriptionLine$2[];
        /**
         * Custom line item media. Supported formats:
         * + Link to an image/video from the [Wix Media Manager](https://support.wix.com/en/article/wix-media-about-the-media-manager) - `"wix:image://v1/3c76e2_c53...4ea4~mv2.jpg#originWidth=1000&originHeight=1000"`.
         * + An image from the web - `"http(s)://<image url>"`.
         */
        media?: string;
        /**
         * Custom line item ID. If passed, `id` must be unique.
         * Default: auto-generated ID.
         */
        _id?: string | null;
    }
    interface UpdateCartResponse {
        /** Updated Cart. */
        cart?: Cart;
    }
    interface AddToCurrentCartRequest {
        /** Catalog line items. */
        lineItems?: LineItem$4[];
    }
    interface AddToCartResponse {
        /** Updated cart. */
        cart?: Cart;
    }
    interface RemoveLineItemsFromCurrentCartRequest {
        /** IDs of the line items to remove from the cart. */
        lineItemIds: string[];
    }
    interface RemoveLineItemsResponse$1 {
        /** Updated cart. */
        cart?: Cart;
    }
    interface CreateCheckoutFromCurrentCartRequest {
        /**
         * Sales channel type. Supported values:
         * + `"AMAZON"`
         * + `"BACKOFFICE_MERCHANT"`
         * + `"EBAY"`
         * + `"OTHER_PLATFORM"`
         * + `"POS"`
         * + `"WEB"`
         * + `"WISH"`
         * + `"WIX_APP_STORE"`
         * + `"WIX_INVOICES"`
         */
        channelType?: ChannelType$3;
        /** Shipping address. Used for calculating tax and shipping (when applicable). */
        shippingAddress?: Address$4;
        /** Billing address. Used for calculating tax if all the items in the cart are not shippable. */
        billingAddress?: Address$4;
        /** Selected shipping option. */
        selectedShippingOption?: SelectedShippingOption$1;
        /** Mandatory when setting a billing or shipping address if the site visitor isn't logged in. */
        email?: string | null;
    }
    enum ChannelType$3 {
        UNSPECIFIED = "UNSPECIFIED",
        WEB = "WEB",
        POS = "POS",
        EBAY = "EBAY",
        AMAZON = "AMAZON",
        OTHER_PLATFORM = "OTHER_PLATFORM",
        WIX_APP_STORE = "WIX_APP_STORE",
        WIX_INVOICES = "WIX_INVOICES",
        BACKOFFICE_MERCHANT = "BACKOFFICE_MERCHANT",
        WISH = "WISH"
    }
    interface CreateCheckoutResponse$1 {
        /** The newly created checkout's ID. */
        checkoutId?: string;
    }
    interface RemoveCouponFromCurrentCartRequest {
    }
    interface RemoveCouponResponse$1 {
        /** Updated cart. */
        cart?: Cart;
    }
    interface UpdateCurrentCartLineItemQuantityRequest {
        /** Line item IDs and their new quantity. */
        lineItems: LineItemQuantityUpdate[];
    }
    interface LineItemQuantityUpdate {
        /** Line item ID. Required. */
        _id?: string;
        /** New quantity. Number must be 1 or higher. Required. */
        quantity?: number;
    }
    interface UpdateLineItemsQuantityResponse {
        /** Updated cart. */
        cart?: Cart;
    }
    interface EstimateCurrentCartTotalsRequest {
        /** Selected shipping option. */
        selectedShippingOption?: SelectedShippingOption$1;
        /** Shipping address. Used for calculating tax and shipping (when applicable). */
        shippingAddress?: Address$4;
        /** Billing address. Used for calculating tax if all the items in the cart are not shippable. */
        billingAddress?: Address$4;
        /** The selected membership payment options and which line items they apply to. */
        selectedMemberships?: SelectedMemberships$2;
        /**
         * Whether to calculate tax in the calculation request. If not passed, tax is being calculated.
         * @internal
         */
        calculateTax?: boolean | null;
        /**
         * Whether to calculate shipping in the calculation request. If not passed, shipping is being calculated.
         * @internal
         */
        calculateShipping?: boolean | null;
    }
    interface DeleteCurrentCartRequest {
    }
    interface DeleteCartResponse {
    }
    interface CreateCartRequest {
        /** Cart info. */
        cartInfo?: Cart;
        /** The code of an existing coupon to apply to the cart. For more information, see the [Coupons API](https://www.wix.com/velo/reference/wix-marketing-backend/coupons). */
        couponCode?: string | null;
        /** Merchant discounts to apply to specific line items. If no `lineItemIds` are passed, the discount will apply to the whole cart. */
        merchantDiscounts?: MerchantDiscountInput$2[];
        /** Catalog line items. */
        lineItems?: LineItem$4[];
        /**
         * Custom line items.
         * @internal
         */
        customLineItems?: CustomLineItem$1[];
    }
    interface CreateCartResponse {
        /** Cart. */
        cart?: Cart;
    }
    interface GetCartRequest {
        /** ID of the cart to retrieve. */
        _id: string;
    }
    interface GetCartResponse {
        /** The requested cart. */
        cart?: Cart;
    }
    interface GetCartByCheckoutIdRequest {
        /** Checkout ID. */
        _id: string;
    }
    interface GetCartByCheckoutIdResponse {
        /** The requested cart. */
        cart?: Cart;
    }
    interface AddToCartRequest {
        /** Cart ID. */
        _id: string;
        /** Catalog line items. */
        lineItems?: LineItem$4[];
        /**
         * Custom line items.
         * @internal
         */
        customLineItems?: CustomLineItem$1[];
    }
    interface RemoveLineItemsRequest$1 {
        /** Cart ID. */
        _id: string;
        /** IDs of the line items to remove from the cart. */
        lineItemIds: string[];
    }
    interface CreateCheckoutRequest$1 {
        /** Cart ID. */
        _id: string;
        /**
         * Sales channel type. Supported values:
         * + `"AMAZON"`
         * + `"BACKOFFICE_MERCHANT"`
         * + `"EBAY"`
         * + `"OTHER_PLATFORM"`
         * + `"POS"`
         * + `"WEB"`
         * + `"WISH"`
         * + `"WIX_APP_STORE"`
         * + `"WIX_INVOICES"`
         */
        channelType?: ChannelType$3;
        /** Shipping address. Used for calculating tax and shipping (when applicable). */
        shippingAddress?: Address$4;
        /** Billing address. Used for calculating tax if all the items in the cart are not shippable. */
        billingAddress?: Address$4;
        /** Selected shipping option. */
        selectedShippingOption?: SelectedShippingOption$1;
        /** Mandatory when setting a billing or shipping address if the site visitor isn't logged in. */
        email?: string | null;
    }
    interface RemoveCouponRequest$1 {
        /** Cart ID. */
        _id: string;
    }
    interface UpdateLineItemsQuantityRequest {
        /** Cart ID. */
        _id: string;
        /** Line item IDs and their new quantity. */
        lineItems: LineItemQuantityUpdate[];
    }
    interface EstimateTotalsRequest {
        /** Cart ID. */
        _id: string;
        /** Selected shipping option. */
        selectedShippingOption?: SelectedShippingOption$1;
        /** Shipping address. Used for calculating tax and shipping (when applicable). */
        shippingAddress?: Address$4;
        /** Billing address. Used for calculating tax if all the items in the cart are not shippable. */
        billingAddress?: Address$4;
        /** The selected membership payment options and which line items they apply to. */
        selectedMemberships?: SelectedMemberships$2;
        /**
         * Whether to calculate tax in the calculation request. If not passed, tax is being calculated.
         * @internal
         */
        calculateTax?: boolean | null;
        /**
         * Whether to calculate shipping in the calculation request. If not passed, shipping is being calculated.
         * @internal
         */
        calculateShipping?: boolean | null;
    }
    interface DeleteCartRequest {
        /** ID of the cart to delete. */
        _id: string;
    }
    interface DomainEvent$2 extends DomainEventBodyOneOf$2 {
        /** random GUID so clients can tell if event was already handled */
        _id?: string;
        /**
         * Assumes actions are also always typed to an entity_type
         * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
         */
        entityFqdn?: string;
        /**
         * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
         * This is although the created/updated/deleted notion is duplication of the oneof types
         * Example: created/updated/deleted/started/completed/email_opened
         */
        slug?: string;
        /**
         * Assuming that all messages including Actions have id
         * Example: The id of the specific order, the id of a specific campaign
         */
        entityId?: string;
        /** The time of the event. Useful if there was a delay in dispatching */
        eventTime?: Date;
        /**
         * A field that should be set if this event was triggered by an anonymize request.
         * For example you must set it to true when sending an event as a result of a GDPR right to be forgotten request.
         * NOTE: This field is not relevant for `EntityCreatedEvent` but is located here for better ergonomics of consumers.
         */
        triggeredByAnonymizeRequest?: boolean | null;
        /** If present, indicates the action that triggered the event. */
        originatedFrom?: string | null;
        /**
         * A sequence number defining the order of updates to the underlying entity.
         * For example, given that some entity was updated at 16:00 and than again at 16:01,
         * it is guaranteed that the sequence number of the second update is strictly higher than the first.
         * As the consumer, you can use this value to ensure that you handle messages in the correct order.
         * To do so, you will need to persist this number on your end, and compare the sequence number from the
         * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
         */
        entityEventSequence?: string | null;
        createdEvent?: EntityCreatedEvent$2;
        updatedEvent?: EntityUpdatedEvent$2;
        deletedEvent?: EntityDeletedEvent$2;
        actionEvent?: ActionEvent$2;
        extendedFieldsUpdatedEvent?: ExtendedFieldsUpdatedEvent$2;
    }
    /** @oneof */
    interface DomainEventBodyOneOf$2 {
        createdEvent?: EntityCreatedEvent$2;
        updatedEvent?: EntityUpdatedEvent$2;
        deletedEvent?: EntityDeletedEvent$2;
        actionEvent?: ActionEvent$2;
        extendedFieldsUpdatedEvent?: ExtendedFieldsUpdatedEvent$2;
    }
    interface EntityCreatedEvent$2 {
        entityAsJson?: string;
        /**
         * Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity
         * @internal
         */
        triggeredByUndelete?: boolean | null;
    }
    interface EntityUpdatedEvent$2 {
        /**
         * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
         * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
         * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
         */
        currentEntityAsJson?: string;
        /**
         * This field is currently part of the of the EntityUpdatedEvent msg, but scala/node libraries which implements the domain events standard
         * wont populate it / have any reference to it in the API.
         * The main reason for it is that fetching the old entity from the DB will have a performance hit on an update operation so unless truly needed,
         * the developer should send only the new (current) entity.
         * An additional reason is not wanting to send this additional entity over the wire (kafka) since in some cases it can be really big
         * Developers that must reflect the old entity will have to implement their own domain event sender mechanism which will follow the DomainEvent proto message.
         * @internal
         */
        previousEntityAsJson?: string | null;
    }
    interface EntityDeletedEvent$2 {
        /**
         * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
         * @internal
         */
        movedToTrash?: boolean | null;
    }
    interface ActionEvent$2 {
        bodyAsJson?: string;
    }
    interface ExtendedFieldsUpdatedEvent$2 {
        currentEntityAsJson?: string;
    }
    interface Empty$2 {
    }
    /** This webhook is triggered when a customer has completed their checkout. In most cases, an order will be created immediately and an Order Event webhook will also be triggered. In some cases, the payment provider may list the order as "pending" - and the order will not be created until the payment is listed as "approved." */
    interface CartCompletedEvent {
        cartId?: string;
        /**
         * Time the cart was created
         * @readonly
         */
        completedTime?: Date;
        /** Customer's Wix ID */
        buyerInfo?: V1BuyerInfo$1;
        /**
         * Weight measurement unit - defaults to site's weight unit. Supported values:
         * + `"KG"`
         * + `"LB"`
         */
        weightUnit?: V1WeightUnit;
        /** Message from the customer */
        buyerNote?: string | null;
        /** Customer's billing address */
        billingAddress?: CartAddress;
        /** Currency used for pricing in this store */
        currency?: Currency;
        /** Coupon applied to this cart */
        appliedCoupon?: AppliedCoupon$2;
        /** Totals for order's line items */
        totals?: Totals$2;
        /** Cart shipping information */
        shippingInfo?: ShippingInfo$2;
    }
    /** This might expand and add additional data */
    interface V1BuyerInfo$1 {
        /** Customer details */
        _id?: string;
        /** Customer's relationship to the website */
        identityType?: IdentityType$3;
        /** Customer's email address */
        email?: string | null;
        /** Customer's phone number */
        phone?: string | null;
        /** Customer's first name */
        firstName?: string | null;
        /** Customer's last name */
        lastName?: string | null;
    }
    enum IdentityType$3 {
        /** Customer is the site owner */
        ADMIN = "ADMIN",
        /** Customer is logged in */
        MEMBER = "MEMBER",
        /** Customer is not logged in */
        VISITOR = "VISITOR",
        /** Contact was created for the customer */
        CONTACT = "CONTACT"
    }
    enum V1WeightUnit {
        /** Weight unit can't be classified, due to an error */
        UNSPECIFIED_WEIGHT_UNIT = "UNSPECIFIED_WEIGHT_UNIT",
        /** Kilograms */
        KG = "KG",
        /** Pounds */
        LB = "LB"
    }
    interface CartAddress {
        /** Address */
        address?: CommonAddress$1;
        /** Contact details */
        contactDetails?: FullAddressContactDetails$2;
    }
    /** Physical address */
    interface CommonAddress$1 extends CommonAddressStreetOneOf$1 {
        /** Country code. */
        country?: string | null;
        /** Subdivision. Usually a state, region, prefecture, or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
        subdivision?: string | null;
        /** City name. */
        city?: string | null;
        /** Zip/postal code. */
        postalCode?: string | null;
        /** Free text providing more detailed address info. Usually contains Apt, Suite, and Floor. */
        addressLine2?: string | null;
        /** Street name and number. */
        streetAddress?: StreetAddress$3;
        /** Main address line, usually street and number as free text. */
        addressLine1?: string | null;
    }
    /** @oneof */
    interface CommonAddressStreetOneOf$1 {
        /** Street name and number. */
        streetAddress?: StreetAddress$3;
        /** Main address line, usually street and number as free text. */
        addressLine?: string | null;
    }
    interface AddressLocation$1 {
        /** Address latitude. */
        latitude?: number | null;
        /** Address longitude. */
        longitude?: number | null;
    }
    interface Subdivision$1 {
        /** Short subdivision code. */
        code?: string;
        /** Subdivision full name. */
        name?: string;
        /**
         * Subdivision level
         * @internal
         */
        type?: SubdivisionType$1;
        /**
         * Free text description of subdivision type.
         * @internal
         */
        typeInfo?: string | null;
    }
    enum SubdivisionType$1 {
        UNKNOWN_SUBDIVISION_TYPE = "UNKNOWN_SUBDIVISION_TYPE",
        /** State */
        ADMINISTRATIVE_AREA_LEVEL_1 = "ADMINISTRATIVE_AREA_LEVEL_1",
        /** County */
        ADMINISTRATIVE_AREA_LEVEL_2 = "ADMINISTRATIVE_AREA_LEVEL_2",
        /** City/town */
        ADMINISTRATIVE_AREA_LEVEL_3 = "ADMINISTRATIVE_AREA_LEVEL_3",
        /** Neighborhood/quarter */
        ADMINISTRATIVE_AREA_LEVEL_4 = "ADMINISTRATIVE_AREA_LEVEL_4",
        /** Street/block */
        ADMINISTRATIVE_AREA_LEVEL_5 = "ADMINISTRATIVE_AREA_LEVEL_5",
        /** ADMINISTRATIVE_AREA_LEVEL_0. Indicates the national political entity, and is typically the highest order type returned by the Geocoder. */
        COUNTRY = "COUNTRY"
    }
    /** Full contact details for an address */
    interface FullAddressContactDetails$2 {
        /** Contact's first name. */
        firstName?: string | null;
        /** Contact's last name. */
        lastName?: string | null;
        /**
         * Contact's full name.
         * @internal
         */
        fullName?: string | null;
        /** Contact's phone number. */
        phone?: string | null;
        /** Contact's company name. */
        company?: string | null;
        /** Email associated with the address. */
        email?: string | null;
        /** Tax info. Currently usable only in Brazil. */
        vatId?: VatId$3;
    }
    interface Currency {
        /** Currency code */
        code?: string;
        /** Currency symbol */
        symbol?: string;
    }
    interface AppliedCoupon$2 {
        /** Coupon internal ID */
        couponId?: string;
        /** Coupon name */
        name?: string;
        /** Coupon code */
        code?: string;
        /** Discount value */
        discountValue?: string | null;
        /** Converted discount value */
        convertedDiscountValue?: string | null;
        /** Type (e.g., moneyOff, percentOff) */
        couponType?: string;
    }
    interface Totals$2 {
        /** Subtotal of all line items, before tax */
        subtotal?: number;
        /** Total shipping price, including tax */
        shipping?: number;
        /** Total tax */
        tax?: number;
        /** Total calculated discount value, according to order.discount */
        discount?: number | null;
        /** Total price */
        total?: number;
        /** Total items weight */
        weight?: number;
        /** Total line items quantity */
        quantity?: number;
    }
    interface ShippingInfo$2 extends ShippingInfoDetailsOneOf$1 {
        /** Selected shipping rule details */
        shippingRuleDetails?: ShippingRuleDetails;
        /** Pickup details when this object describes pickup */
        pickupDetails?: V1PickupDetails$1;
        /** Shipment details when this object describes shipment */
        shippingAddress?: CartAddress;
    }
    /** @oneof */
    interface ShippingInfoDetailsOneOf$1 {
        /** Pickup details when this object describes pickup */
        pickupDetails?: V1PickupDetails$1;
        /** Shipment details when this object describes shipment */
        shippingAddress?: CartAddress;
    }
    interface ShippingRuleDetails {
        /** Selected shipping rule ID */
        ruleId?: string;
        /** Selected option ID */
        optionId?: string;
        /** Rule title (as provided by the store owner) */
        deliveryOption?: string;
        /** Shipping option delivery time */
        estimatedDeliveryTime?: string | null;
    }
    interface V1PickupDetails$1 {
        /** Pickup address */
        pickupAddress?: CommonAddress$1;
        /** Customer details */
        buyerDetails?: BuyerDetails$1;
        /** Store owner's pickup instructions */
        pickupInstructions?: string | null;
    }
    interface BuyerDetails$1 {
        /** Customer's first name */
        firstName?: string | null;
        /** Customer's last name */
        lastName?: string | null;
        /** Email address */
        email?: string;
        /** Phone number */
        phone?: string;
    }
    /**
     * Retrieves the current site visitor's cart.
     *
     *
     * The `getCurrentCart()` function returns a Promise that resolves when the current cart is retrieved.
     * @public
     * @returns Current session's active cart.
     */
    function getCurrentCart(): Promise<Cart>;
    /**
     * Updates the current site visitor's cart.
     *
     *
     * The `updateCurrentCart()` function returns a Promise that resolves when the current cart's properties are updated.
     *
     * > **Note:** When updating catalog items, `options.lineItems.catalogReference` is required.
     * @public
     * @requiredField options.lineItems.catalogReference
     * @param options - Current cart update options.
     * @returns Fulfilled - The updated current cart.
     */
    function updateCurrentCart(options?: UpdateCurrentCartOptions): Promise<Cart>;
    interface UpdateCurrentCartOptions {
        /** Cart info. */
        cartInfo?: Cart;
        /** The code of an existing coupon to apply to the cart. For more information, see the [Coupons API](https://www.wix.com/velo/reference/wix-marketing-backend/coupons). */
        couponCode?: string | null;
        /** Merchant discounts to apply to specific line items. If no `lineItemIds` are passed, the discount will be applied to the whole cart. */
        merchantDiscounts?: MerchantDiscountInput$2[];
        /** Catalog line items. */
        lineItems?: LineItem$4[];
        /**
         * Custom line items.
         * @internal
         */
        customLineItems?: CustomLineItem$1[];
        /**
         * List of field names to determine which of cartInfo's fields will be updated
         * @internal
         */
        cartFieldmask?: string[];
    }
    /**
     * Adds line items to the current site visitor's cart. Both catalog line items and custom line items are supported.
     *
     *
     * The `addToCurrentCart()` function returns a Promise that resolves to the updated current cart when the specified items have been added.
     *
     * > **Note:** When adding catalog items, `options.lineItems.catalogReference` is required.
     * @public
     * @requiredField options.lineItems.catalogReference
     * @param options - Items to be added to the current cart.
     */
    function addToCurrentCart(options?: AddToCurrentCartOptions): Promise<AddToCartResponse>;
    interface AddToCurrentCartOptions {
        /** Catalog line items. */
        lineItems?: LineItem$4[];
    }
    /**
     * Removes line items from the current site visitor's cart.
     *
     *
     * The `removeLineItemsFromCurrentCart()` function returns a Promise that resolves to the updated current cart when the line items are removed.
     * @public
     * @requiredField lineItemIds
     * @param lineItemIds - IDs of the line items to remove from the cart.
     */
    function removeLineItemsFromCurrentCart(lineItemIds: string[]): Promise<RemoveLineItemsResponse$1>;
    /**
     * Creates a checkout from the current cart.
     *
     *
     * The `createCheckoutFromCurrentCart()` function returns a Promise that resolves to the new checkout's ID when it's created.
     *
     * If a checkout was already created from the current cart, that checkout will be updated with any new information from the cart.
     * @public
     * @param options - Checkout creation options.
     */
    function createCheckoutFromCurrentCart(options?: CreateCheckoutFromCurrentCartOptions): Promise<CreateCheckoutResponse$1>;
    interface CreateCheckoutFromCurrentCartOptions {
        /**
         * Sales channel type. Supported values:
         * + `"AMAZON"`
         * + `"BACKOFFICE_MERCHANT"`
         * + `"EBAY"`
         * + `"OTHER_PLATFORM"`
         * + `"POS"`
         * + `"WEB"`
         * + `"WISH"`
         * + `"WIX_APP_STORE"`
         * + `"WIX_INVOICES"`
         */
        channelType?: ChannelType$3;
        /** Shipping address. Used for calculating tax and shipping (when applicable). */
        shippingAddress?: Address$4;
        /** Billing address. Used for calculating tax if all the items in the cart are not shippable. */
        billingAddress?: Address$4;
        /** Selected shipping option. */
        selectedShippingOption?: SelectedShippingOption$1;
        /** Mandatory when setting a billing or shipping address if the site visitor isn't logged in. */
        email?: string | null;
    }
    /**
     * Removes the coupon from the current site visitor's cart.
     *
     *
     * The `removeCouponFromCurrentCart()` function returns a Promise that resolves to the updated current cart when the coupon is removed.
     * @public
     * @returns Fulfilled - Updated current cart.
     */
    function removeCouponFromCurrentCart(): Promise<RemoveCouponResponse$1>;
    /**
     * Updates the quantity of one or more line items in the current site visitor's cart.
     *
     *
     * The `updateCurrentCartLineItemQuantity()` function returns a Promise that resolves when the quantities of the current cart's line items are updated.
     * @param lineItems - Line item IDs and their new quantity.
     * @public
     * @requiredField lineItems
     * @returns Fulfilled - The updated current cart.
     */
    function updateCurrentCartLineItemQuantity(lineItems: LineItemQuantityUpdate[]): Promise<UpdateLineItemsQuantityResponse>;
    /**
     * Estimates the current cart's price totals (including tax), based on a selected carrier service, shipping address, and billing information.
     *
     *
     * The `estimateCurrentCartTotals()` function returns a Promise that resolves when the estimated totals are generated.
     *
     * > **Note:** Not passing any `options` properties will only estimate the cart items price totals.
     * @public
     * @param options - Total estimation options.
     */
    function estimateCurrentCartTotals(options?: EstimateCurrentCartTotalsOptions): Promise<EstimateTotalsResponse>;
    interface EstimateCurrentCartTotalsOptions {
        /** Selected shipping option. */
        selectedShippingOption?: SelectedShippingOption$1;
        /** Shipping address. Used for calculating tax and shipping (when applicable). */
        shippingAddress?: Address$4;
        /** Billing address. Used for calculating tax if all the items in the cart are not shippable. */
        billingAddress?: Address$4;
        /** The selected membership payment options and which line items they apply to. */
        selectedMemberships?: SelectedMemberships$2;
        /**
         * Whether to calculate tax in the calculation request. If not passed, tax is being calculated.
         * @internal
         */
        calculateTax?: boolean | null;
        /**
         * Whether to calculate shipping in the calculation request. If not passed, shipping is being calculated.
         * @internal
         */
        calculateShipping?: boolean | null;
    }
    /**
     * Deletes the current site visitor's cart.
     *
     *
     * The `deleteCurrentCart()` function returns a Promise that resolves when the current cart is deleted.
     * @public
     * @returns Fulfilled - When the current cart is deleted. Rejected - Error message.
     */
    function deleteCurrentCart(): Promise<void>;
    type ecomV1CartCurrentCart_universal_d_Cart = Cart;
    type ecomV1CartCurrentCart_universal_d_V1SelectedMembership = V1SelectedMembership;
    type ecomV1CartCurrentCart_universal_d_CartDiscount = CartDiscount;
    type ecomV1CartCurrentCart_universal_d_CartDiscountDiscountSourceOneOf = CartDiscountDiscountSourceOneOf;
    type ecomV1CartCurrentCart_universal_d_ApiFullAddressContactDetails = ApiFullAddressContactDetails;
    type ecomV1CartCurrentCart_universal_d_AddToCurrentCartAndEstimateTotalsRequest = AddToCurrentCartAndEstimateTotalsRequest;
    type ecomV1CartCurrentCart_universal_d_EstimateTotalsResponse = EstimateTotalsResponse;
    type ecomV1CartCurrentCart_universal_d_V1Coupon = V1Coupon;
    type ecomV1CartCurrentCart_universal_d_V1MerchantDiscount = V1MerchantDiscount;
    type ecomV1CartCurrentCart_universal_d_GetCurrentCartRequest = GetCurrentCartRequest;
    type ecomV1CartCurrentCart_universal_d_GetCurrentCartResponse = GetCurrentCartResponse;
    type ecomV1CartCurrentCart_universal_d_UpdateCartRequest = UpdateCartRequest;
    type ecomV1CartCurrentCart_universal_d_UpdateCartResponse = UpdateCartResponse;
    type ecomV1CartCurrentCart_universal_d_AddToCurrentCartRequest = AddToCurrentCartRequest;
    type ecomV1CartCurrentCart_universal_d_AddToCartResponse = AddToCartResponse;
    type ecomV1CartCurrentCart_universal_d_RemoveLineItemsFromCurrentCartRequest = RemoveLineItemsFromCurrentCartRequest;
    type ecomV1CartCurrentCart_universal_d_CreateCheckoutFromCurrentCartRequest = CreateCheckoutFromCurrentCartRequest;
    type ecomV1CartCurrentCart_universal_d_RemoveCouponFromCurrentCartRequest = RemoveCouponFromCurrentCartRequest;
    type ecomV1CartCurrentCart_universal_d_UpdateCurrentCartLineItemQuantityRequest = UpdateCurrentCartLineItemQuantityRequest;
    type ecomV1CartCurrentCart_universal_d_LineItemQuantityUpdate = LineItemQuantityUpdate;
    type ecomV1CartCurrentCart_universal_d_UpdateLineItemsQuantityResponse = UpdateLineItemsQuantityResponse;
    type ecomV1CartCurrentCart_universal_d_EstimateCurrentCartTotalsRequest = EstimateCurrentCartTotalsRequest;
    type ecomV1CartCurrentCart_universal_d_DeleteCurrentCartRequest = DeleteCurrentCartRequest;
    type ecomV1CartCurrentCart_universal_d_DeleteCartResponse = DeleteCartResponse;
    type ecomV1CartCurrentCart_universal_d_CreateCartRequest = CreateCartRequest;
    type ecomV1CartCurrentCart_universal_d_CreateCartResponse = CreateCartResponse;
    type ecomV1CartCurrentCart_universal_d_GetCartRequest = GetCartRequest;
    type ecomV1CartCurrentCart_universal_d_GetCartResponse = GetCartResponse;
    type ecomV1CartCurrentCart_universal_d_GetCartByCheckoutIdRequest = GetCartByCheckoutIdRequest;
    type ecomV1CartCurrentCart_universal_d_GetCartByCheckoutIdResponse = GetCartByCheckoutIdResponse;
    type ecomV1CartCurrentCart_universal_d_AddToCartRequest = AddToCartRequest;
    type ecomV1CartCurrentCart_universal_d_UpdateLineItemsQuantityRequest = UpdateLineItemsQuantityRequest;
    type ecomV1CartCurrentCart_universal_d_EstimateTotalsRequest = EstimateTotalsRequest;
    type ecomV1CartCurrentCart_universal_d_DeleteCartRequest = DeleteCartRequest;
    type ecomV1CartCurrentCart_universal_d_CartCompletedEvent = CartCompletedEvent;
    type ecomV1CartCurrentCart_universal_d_V1WeightUnit = V1WeightUnit;
    const ecomV1CartCurrentCart_universal_d_V1WeightUnit: typeof V1WeightUnit;
    type ecomV1CartCurrentCart_universal_d_CartAddress = CartAddress;
    type ecomV1CartCurrentCart_universal_d_Currency = Currency;
    type ecomV1CartCurrentCart_universal_d_ShippingRuleDetails = ShippingRuleDetails;
    const ecomV1CartCurrentCart_universal_d_getCurrentCart: typeof getCurrentCart;
    const ecomV1CartCurrentCart_universal_d_updateCurrentCart: typeof updateCurrentCart;
    type ecomV1CartCurrentCart_universal_d_UpdateCurrentCartOptions = UpdateCurrentCartOptions;
    const ecomV1CartCurrentCart_universal_d_addToCurrentCart: typeof addToCurrentCart;
    type ecomV1CartCurrentCart_universal_d_AddToCurrentCartOptions = AddToCurrentCartOptions;
    const ecomV1CartCurrentCart_universal_d_removeLineItemsFromCurrentCart: typeof removeLineItemsFromCurrentCart;
    const ecomV1CartCurrentCart_universal_d_createCheckoutFromCurrentCart: typeof createCheckoutFromCurrentCart;
    type ecomV1CartCurrentCart_universal_d_CreateCheckoutFromCurrentCartOptions = CreateCheckoutFromCurrentCartOptions;
    const ecomV1CartCurrentCart_universal_d_removeCouponFromCurrentCart: typeof removeCouponFromCurrentCart;
    const ecomV1CartCurrentCart_universal_d_updateCurrentCartLineItemQuantity: typeof updateCurrentCartLineItemQuantity;
    const ecomV1CartCurrentCart_universal_d_estimateCurrentCartTotals: typeof estimateCurrentCartTotals;
    type ecomV1CartCurrentCart_universal_d_EstimateCurrentCartTotalsOptions = EstimateCurrentCartTotalsOptions;
    const ecomV1CartCurrentCart_universal_d_deleteCurrentCart: typeof deleteCurrentCart;
    namespace ecomV1CartCurrentCart_universal_d {
        export { __debug$5 as __debug, ecomV1CartCurrentCart_universal_d_Cart as Cart, LineItem$4 as LineItem, CatalogReference$3 as CatalogReference, ProductName$2 as ProductName, MultiCurrencyPrice$2 as MultiCurrencyPrice, DescriptionLine$2 as DescriptionLine, DescriptionLineValueOneOf$2 as DescriptionLineValueOneOf, DescriptionLineDescriptionLineValueOneOf$2 as DescriptionLineDescriptionLineValueOneOf, DescriptionLineName$2 as DescriptionLineName, PlainTextValue$2 as PlainTextValue, Color$2 as Color, DescriptionLineType$2 as DescriptionLineType, ItemAvailabilityInfo$1 as ItemAvailabilityInfo, ItemAvailabilityStatus$1 as ItemAvailabilityStatus, PhysicalProperties$3 as PhysicalProperties, Scope$2 as Scope, Group$2 as Group, ItemType$2 as ItemType, ItemTypeItemTypeDataOneOf$2 as ItemTypeItemTypeDataOneOf, ItemTypeItemType$2 as ItemTypeItemType, SubscriptionOptionInfo$2 as SubscriptionOptionInfo, SubscriptionSettings$4 as SubscriptionSettings, SubscriptionFrequency$4 as SubscriptionFrequency, Title$1 as Title, Description$1 as Description, SecuredMedia$1 as SecuredMedia, FileType$1 as FileType, PaymentOptionType$3 as PaymentOptionType, ServiceProperties$2 as ServiceProperties, PriceDescription$2 as PriceDescription, ecomV1CartCurrentCart_universal_d_V1SelectedMembership as V1SelectedMembership, BuyerInfo$4 as BuyerInfo, BuyerInfoIdOneOf$2 as BuyerInfoIdOneOf, WeightUnit$4 as WeightUnit, ecomV1CartCurrentCart_universal_d_CartDiscount as CartDiscount, ecomV1CartCurrentCart_universal_d_CartDiscountDiscountSourceOneOf as CartDiscountDiscountSourceOneOf, Coupon$3 as Coupon, MerchantDiscount$3 as MerchantDiscount, AddressWithContact$2 as AddressWithContact, Address$4 as Address, StreetAddress$3 as StreetAddress, ecomV1CartCurrentCart_universal_d_ApiFullAddressContactDetails as ApiFullAddressContactDetails, VatId$3 as VatId, VatType$3 as VatType, ecomV1CartCurrentCart_universal_d_AddToCurrentCartAndEstimateTotalsRequest as AddToCurrentCartAndEstimateTotalsRequest, SelectedShippingOption$1 as SelectedShippingOption, SelectedMemberships$2 as SelectedMemberships, SelectedMembership$2 as SelectedMembership, ecomV1CartCurrentCart_universal_d_EstimateTotalsResponse as EstimateTotalsResponse, CalculatedLineItem$1 as CalculatedLineItem, LineItemPricesData$1 as LineItemPricesData, ItemTaxFullDetails$3 as ItemTaxFullDetails, TaxRateBreakdown$2 as TaxRateBreakdown, PriceSummary$3 as PriceSummary, GiftCard$3 as GiftCard, TaxSummary$3 as TaxSummary, TaxCalculationDetails$2 as TaxCalculationDetails, TaxCalculationDetailsCalculationDetailsOneOf$2 as TaxCalculationDetailsCalculationDetailsOneOf, RateType$2 as RateType, ManualCalculationReason$2 as ManualCalculationReason, AutoTaxFallbackCalculationDetails$2 as AutoTaxFallbackCalculationDetails, FallbackReason$2 as FallbackReason, ApplicationError$5 as ApplicationError, ShippingInformation$2 as ShippingInformation, ShippingRegion$3 as ShippingRegion, SelectedCarrierServiceOption$2 as SelectedCarrierServiceOption, DeliveryLogistics$3 as DeliveryLogistics, PickupDetails$4 as PickupDetails, PickupMethod$3 as PickupMethod, SelectedCarrierServiceOptionPrices$2 as SelectedCarrierServiceOptionPrices, SelectedCarrierServiceOptionOtherCharge$2 as SelectedCarrierServiceOptionOtherCharge, ChargeType$2 as ChargeType, CarrierServiceOption$2 as CarrierServiceOption, ShippingOption$2 as ShippingOption, ShippingPrice$3 as ShippingPrice, OtherCharge$2 as OtherCharge, AppliedDiscount$3 as AppliedDiscount, AppliedDiscountDiscountSourceOneOf$3 as AppliedDiscountDiscountSourceOneOf, DiscountType$3 as DiscountType, ecomV1CartCurrentCart_universal_d_V1Coupon as V1Coupon, ecomV1CartCurrentCart_universal_d_V1MerchantDiscount as V1MerchantDiscount, DiscountRule$3 as DiscountRule, DiscountRuleName$3 as DiscountRuleName, CalculationErrors$2 as CalculationErrors, CalculationErrorsShippingCalculationErrorOneOf$2 as CalculationErrorsShippingCalculationErrorOneOf, Details$2 as Details, DetailsKindOneOf$2 as DetailsKindOneOf, ValidationError$2 as ValidationError, RuleType$2 as RuleType, FieldViolation$2 as FieldViolation, CarrierErrors$2 as CarrierErrors, CarrierError$2 as CarrierError, MembershipOptions$2 as MembershipOptions, Membership$2 as Membership, MembershipName$3 as MembershipName, MembershipPaymentCredits$2 as MembershipPaymentCredits, InvalidMembership$2 as InvalidMembership, AdditionalFee$3 as AdditionalFee, ecomV1CartCurrentCart_universal_d_GetCurrentCartRequest as GetCurrentCartRequest, ecomV1CartCurrentCart_universal_d_GetCurrentCartResponse as GetCurrentCartResponse, ecomV1CartCurrentCart_universal_d_UpdateCartRequest as UpdateCartRequest, MerchantDiscountInput$2 as MerchantDiscountInput, CustomLineItem$1 as CustomLineItem, ecomV1CartCurrentCart_universal_d_UpdateCartResponse as UpdateCartResponse, ecomV1CartCurrentCart_universal_d_AddToCurrentCartRequest as AddToCurrentCartRequest, ecomV1CartCurrentCart_universal_d_AddToCartResponse as AddToCartResponse, ecomV1CartCurrentCart_universal_d_RemoveLineItemsFromCurrentCartRequest as RemoveLineItemsFromCurrentCartRequest, RemoveLineItemsResponse$1 as RemoveLineItemsResponse, ecomV1CartCurrentCart_universal_d_CreateCheckoutFromCurrentCartRequest as CreateCheckoutFromCurrentCartRequest, ChannelType$3 as ChannelType, CreateCheckoutResponse$1 as CreateCheckoutResponse, ecomV1CartCurrentCart_universal_d_RemoveCouponFromCurrentCartRequest as RemoveCouponFromCurrentCartRequest, RemoveCouponResponse$1 as RemoveCouponResponse, ecomV1CartCurrentCart_universal_d_UpdateCurrentCartLineItemQuantityRequest as UpdateCurrentCartLineItemQuantityRequest, ecomV1CartCurrentCart_universal_d_LineItemQuantityUpdate as LineItemQuantityUpdate, ecomV1CartCurrentCart_universal_d_UpdateLineItemsQuantityResponse as UpdateLineItemsQuantityResponse, ecomV1CartCurrentCart_universal_d_EstimateCurrentCartTotalsRequest as EstimateCurrentCartTotalsRequest, ecomV1CartCurrentCart_universal_d_DeleteCurrentCartRequest as DeleteCurrentCartRequest, ecomV1CartCurrentCart_universal_d_DeleteCartResponse as DeleteCartResponse, ecomV1CartCurrentCart_universal_d_CreateCartRequest as CreateCartRequest, ecomV1CartCurrentCart_universal_d_CreateCartResponse as CreateCartResponse, ecomV1CartCurrentCart_universal_d_GetCartRequest as GetCartRequest, ecomV1CartCurrentCart_universal_d_GetCartResponse as GetCartResponse, ecomV1CartCurrentCart_universal_d_GetCartByCheckoutIdRequest as GetCartByCheckoutIdRequest, ecomV1CartCurrentCart_universal_d_GetCartByCheckoutIdResponse as GetCartByCheckoutIdResponse, ecomV1CartCurrentCart_universal_d_AddToCartRequest as AddToCartRequest, RemoveLineItemsRequest$1 as RemoveLineItemsRequest, CreateCheckoutRequest$1 as CreateCheckoutRequest, RemoveCouponRequest$1 as RemoveCouponRequest, ecomV1CartCurrentCart_universal_d_UpdateLineItemsQuantityRequest as UpdateLineItemsQuantityRequest, ecomV1CartCurrentCart_universal_d_EstimateTotalsRequest as EstimateTotalsRequest, ecomV1CartCurrentCart_universal_d_DeleteCartRequest as DeleteCartRequest, DomainEvent$2 as DomainEvent, DomainEventBodyOneOf$2 as DomainEventBodyOneOf, EntityCreatedEvent$2 as EntityCreatedEvent, EntityUpdatedEvent$2 as EntityUpdatedEvent, EntityDeletedEvent$2 as EntityDeletedEvent, ActionEvent$2 as ActionEvent, ExtendedFieldsUpdatedEvent$2 as ExtendedFieldsUpdatedEvent, Empty$2 as Empty, ecomV1CartCurrentCart_universal_d_CartCompletedEvent as CartCompletedEvent, V1BuyerInfo$1 as V1BuyerInfo, IdentityType$3 as IdentityType, ecomV1CartCurrentCart_universal_d_V1WeightUnit as V1WeightUnit, ecomV1CartCurrentCart_universal_d_CartAddress as CartAddress, CommonAddress$1 as CommonAddress, CommonAddressStreetOneOf$1 as CommonAddressStreetOneOf, AddressLocation$1 as AddressLocation, Subdivision$1 as Subdivision, SubdivisionType$1 as SubdivisionType, FullAddressContactDetails$2 as FullAddressContactDetails, ecomV1CartCurrentCart_universal_d_Currency as Currency, AppliedCoupon$2 as AppliedCoupon, Totals$2 as Totals, ShippingInfo$2 as ShippingInfo, ShippingInfoDetailsOneOf$1 as ShippingInfoDetailsOneOf, ecomV1CartCurrentCart_universal_d_ShippingRuleDetails as ShippingRuleDetails, V1PickupDetails$1 as V1PickupDetails, BuyerDetails$1 as BuyerDetails, ecomV1CartCurrentCart_universal_d_getCurrentCart as getCurrentCart, ecomV1CartCurrentCart_universal_d_updateCurrentCart as updateCurrentCart, ecomV1CartCurrentCart_universal_d_UpdateCurrentCartOptions as UpdateCurrentCartOptions, ecomV1CartCurrentCart_universal_d_addToCurrentCart as addToCurrentCart, ecomV1CartCurrentCart_universal_d_AddToCurrentCartOptions as AddToCurrentCartOptions, ecomV1CartCurrentCart_universal_d_removeLineItemsFromCurrentCart as removeLineItemsFromCurrentCart, ecomV1CartCurrentCart_universal_d_createCheckoutFromCurrentCart as createCheckoutFromCurrentCart, ecomV1CartCurrentCart_universal_d_CreateCheckoutFromCurrentCartOptions as CreateCheckoutFromCurrentCartOptions, ecomV1CartCurrentCart_universal_d_removeCouponFromCurrentCart as removeCouponFromCurrentCart, ecomV1CartCurrentCart_universal_d_updateCurrentCartLineItemQuantity as updateCurrentCartLineItemQuantity, ecomV1CartCurrentCart_universal_d_estimateCurrentCartTotals as estimateCurrentCartTotals, ecomV1CartCurrentCart_universal_d_EstimateCurrentCartTotalsOptions as EstimateCurrentCartTotalsOptions, ecomV1CartCurrentCart_universal_d_deleteCurrentCart as deleteCurrentCart, };
    }
    const __debug$4: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface Checkout {
        /** Checkout ID. */
        _id?: string | null;
        /**
         * Line items.
         *
         * Max: 300 items
         * @readonly
         */
        lineItems?: LineItem$3[];
        /** Billing information. */
        billingInfo?: AddressWithContact$1;
        /** Shipping information. */
        shippingInfo?: ShippingInfo$1;
        /** [Buyer note](https://support.wix.com/en/article/wix-stores-viewing-buyer-notes) left by the customer. */
        buyerNote?: string | null;
        /** Buyer information. */
        buyerInfo?: BuyerInfo$3;
        /**
         * All converted prices are displayed in this currency in three-letter [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format.
         * @readonly
         */
        conversionCurrency?: string;
        /**
         * Calculated price summary for the checkout.
         * @readonly
         */
        priceSummary?: PriceSummary$2;
        /**
         * Errors when calculating totals.
         * @readonly
         */
        calculationErrors?: CalculationErrors$1;
        /**
         * Applied gift card details.
         *
         * >**Note:** Gift cards are supported through the Wix UI, though the SPI is not currently available. Learn more about [Wix Gift Cards](https://support.wix.com/en/article/wix-stores-setting-up-wix-gift-cards).
         * @readonly
         */
        giftCard?: GiftCard$2;
        /**
         * Applied discounts.
         * @readonly
         */
        appliedDiscounts?: AppliedDiscount$2[];
        /** Custom fields. */
        customFields?: CustomField$2[];
        /**
         * Weight measurement unit - defaults to site's weight unit. Supported values:
         * + `"KG"`
         * + `"LB"`
         * @readonly
         */
        weightUnit?: WeightUnit$3;
        /**
         * Tax summary.
         * @readonly
         */
        taxSummary?: TaxSummary$2;
        /**
         * The currency used when submitting the order.
         * @readonly
         */
        currency?: string;
        /**
         * Sales channel that created the checkout. Supported values:
         * + `"WEB"`, `"POS"`, `"EBAY"`, `"AMAZON"`, `"WIX_APP_STORE"`, `"WIX_INVOICES"`, `"BACKOFFICE_MERCHANT"`, `"WISH"`, `"OTHER_PLATFORM"`.
         * @readonly
         */
        channelType?: ChannelType$2;
        /**
         * Site language in which original values are shown.
         * @readonly
         */
        siteLanguage?: string;
        /**
         * Language for communication with the buyer. Defaults to the site language.
         * For a site that supports multiple languages, this is the language the buyer selected.
         * @readonly
         */
        buyerLanguage?: string;
        /**
         * Whether an order was successfully created from this checkout.
         * For an order to be successful, it must be successfully paid for (unless the total is 0).
         * @readonly
         */
        completed?: boolean;
        /**
         * Whether tax is included in line item prices.
         * @readonly
         */
        taxIncludedInPrice?: boolean;
        /**
         * ID of the checkout's initiator.
         * @readonly
         */
        createdBy?: CreatedBy$1;
        /**
         * Date and time the checkout was created.
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Date and time the checkout was updated.
         * @readonly
         */
        _updatedDate?: Date;
        /**
         * Minimal amount to pay in order to place the order.
         * @readonly
         */
        payNow?: PriceSummary$2;
        /**
         * Remaining amount for the order to be fully paid.
         * @readonly
         */
        payLater?: PriceSummary$2;
        /** Information about valid and invalid memberships, and which ones are selected for usage */
        membershipOptions?: MembershipOptions$1;
        /** Additional Fees. */
        additionalFees?: AdditionalFee$2[];
        /** Cart ID that this checkout was created from. Empty if this checkout wasn't created out of a cart. */
        cartId?: string | null;
        /**
         * Information about the currency conversion that took place if at all. Empty if no conversion took place.
         * @internal
         */
        conversionInfo?: ConversionInfo;
        /** The pay now total amount after gift card reduction */
        payNowTotalAfterGiftCard?: MultiCurrencyPrice$1;
    }
    interface LineItem$3 {
        /**
         * Line item ID.
         * @readonly
         */
        _id?: string | null;
        /**
         * Item quantity.
         *
         * Min: `"1"`
         * Max: `"100000"`
         */
        quantity?: number;
        /** Catalog and item reference. Holds IDs for the item and the catalog it came from, as well as further optional info. */
        catalogReference?: CatalogReference$2;
        /**
         * Item name.
         * + Stores - `product.name`
         * + Bookings - `service.info.name`
         * + Events - `ticket.name`
         * @readonly
         */
        productName?: ProductName$1;
        /**
         * URL to the item's page on the site.
         * @readonly
         */
        url?: string;
        /**
         * Item price **after** catalog-defined discount and line item discounts.
         * @readonly
         */
        price?: MultiCurrencyPrice$1;
        /**
         * Total line item price **after** catalog-defined discount and line item discounts.
         * @readonly
         */
        lineItemPrice?: MultiCurrencyPrice$1;
        /**
         * Item price **before** catalog-defined discount. Defaults to `price` when not provided.
         * @readonly
         */
        fullPrice?: MultiCurrencyPrice$1;
        /**
         * Item price **before** line item discounts and **after** catalog-defined discount. Defaults to `price` when not provided.
         * @readonly
         */
        priceBeforeDiscounts?: MultiCurrencyPrice$1;
        /**
         * Total price after all discounts and tax.
         * @readonly
         */
        totalPriceAfterTax?: MultiCurrencyPrice$1;
        /**
         * __Deprecated.__ Use `totalPriceAfterTax` minus `taxDetails.totalTax` instead.
         * @readonly
         */
        totalPriceBeforeTax?: MultiCurrencyPrice$1;
        /**
         * Tax details for this line item.
         * @readonly
         */
        taxDetails?: ItemTaxFullDetails$2;
        /**
         * Discount for this line item's entire quantity.
         * @readonly
         */
        discount?: MultiCurrencyPrice$1;
        /**
         * Line item description lines. Used for displaying the cart, checkout and order.
         * @readonly
         */
        descriptionLines?: DescriptionLine$1[];
        /**
         * Line item image details.
         * @readonly
         */
        media?: string;
        /**
         * Item availability details.
         * @readonly
         */
        availability?: ItemAvailabilityInfo;
        /**
         * Physical properties of the item. When relevant, contains information such as SKU, item weight, and shippability.
         * @readonly
         */
        physicalProperties?: PhysicalProperties$2;
        /**
         * Coupon scopes - which app and items a coupon applies to.
         * This field is internal to Wix, and should be used by Bookings, Stores and Events as used by the current [Coupons API](https://bo.wix.com/wix-docs/rest/stores/coupons/valid-scope-values).
         * @internal
         * @readonly
         */
        couponScopes?: Scope$1[];
        /**
         * Item type. Either a preset type or custom.
         * @readonly
         */
        itemType?: ItemType$1;
        /**
         * Subscription option information.
         * @internal
         * @readonly
         */
        subscriptionOptionInfo?: SubscriptionOptionInfo$1;
        /**
         * Fulfiller ID for this item. Field is empty when the item is self-fulfilled.
         * @internal
         * @readonly
         */
        fulfillerId?: string | null;
        /**
         * Shipping group ID.
         * @internal
         * @readonly
         */
        shippingGroupId?: string | null;
        /**
         * Digital file identifier, relevant only for items with type DIGITAL.
         * @internal
         * @readonly
         */
        digitalFile?: SecuredMedia;
        /**
         * Type of selected payment option for current item. Defaults to `"FULL_PAYMENT_ONLINE"`.
         * + `"FULL_PAYMENT_ONLINE"`: The entire payment for this item happens as part of the checkout.
         * + `"FULL_PAYMENT_OFFLINE"`: The entire payment for this item happens after the checkout. For example, when using cash, check, or other offline payment methods.
         * + `"MEMBERSHIP"`: Payment for this item is done by charging a membership. When this option is used, `lineItem.price.amount` is 0.
         * + `"DEPOSIT_ONLINE"`: Partial payment for the given item to be paid upfront during the checkout. Amount to be paid is defined by deposit_amount field.
         * @readonly
         */
        paymentOption?: PaymentOptionType$2;
        /**
         * Service properties. When relevant, this contains information such as date and number of participants.
         * @readonly
         */
        serviceProperties?: ServiceProperties$1;
        /**
         * In cases where `catalogReference.catalogItemId` is NOT the actual catalog item ID, this field will return the true item's ID.
         * + For example, for Wix Bookings, `catalogReference.catalogItemId` is the booking ID. Therefore this value is set to the service ID.
         * + In most cases, this field has the same value as `catalogReference.catalogItemId`.
         * + Used in membership validation.
         * @readonly
         */
        rootCatalogItemId?: string | null;
        /**
         * Additional description for the price. For example, when price is 0 but additional details about the actual price are needed - "Starts at $67".
         * @readonly
         */
        priceDescription?: PriceDescription$1;
        /**
         * Partial payment to be paid upfront during the checkout. Eligible for catalog items with `lineItem.paymentOption` type `DEPOSIT_ONLINE` only.
         * @readonly
         */
        depositAmount?: MultiCurrencyPrice$1;
    }
    /** Used for grouping line items and is sent on add to cart */
    interface CatalogReference$2 {
        /** ID of the item within its catalog. For example, `productId` for Wix Stores. */
        catalogItemId?: string;
        /** App ID of the catalog the item comes from. For example, the Wix Stores `appId` is `"1380b703-ce81-ff05-f115-39571d94dfcd"`. */
        appId?: string;
        /**
         * Additional info in key:value form. For example, for a product variant from Wix Stores Catalog, `options` field would hold something like one of the following:
         * + `{"Size": "M", "Color": "Red"}`
         * + `{"variantId": "<VARIANT_ID>"}`.
         */
        options?: Record<string, any> | null;
    }
    interface ProductName$1 {
        /**
         * __Required.__ Original item name in site's default language.
         * Min: 1 character
         * Max: 80 characters
         */
        original?: string;
        /**
         * Optional. Translated item name according to buyer language. Defaults to `original` when not provided.
         * Min: 1 character
         * Max: 200 characters
         */
        translated?: string | null;
    }
    interface MultiCurrencyPrice$1 {
        /** Amount. */
        amount?: string;
        /**
         * Converted amount.
         * @readonly
         */
        convertedAmount?: string;
        /**
         * Amount formatted with currency symbol.
         * @readonly
         */
        formattedAmount?: string;
        /**
         * Converted amount formatted with currency symbol.
         * @readonly
         */
        formattedConvertedAmount?: string;
    }
    interface ItemTaxFullDetails$2 {
        /** Amount for which tax is calculated. */
        taxableAmount?: MultiCurrencyPrice$1;
        /**
         * Tax group ID, if specified.
         * @internal
         */
        taxGroupId?: string | null;
        /** Tax rate %, as a decimal point between 0 and 1. */
        taxRate?: string;
        /** Calculated tax, based on `taxable_amount` and `tax_rate`. */
        totalTax?: MultiCurrencyPrice$1;
        /**
         * If breakdown exists, the sum of rates in the breakdown must equal `tax_rate`.
         * @readonly
         */
        rateBreakdown?: TaxRateBreakdown$1[];
    }
    interface TaxRateBreakdown$1 {
        /** Type of tax against which the calculation was performed. */
        name?: string;
        /** Rate at which this tax detail was calculated. */
        rate?: string;
        /** Amount of tax for this tax detail. */
        tax?: MultiCurrencyPrice$1;
    }
    interface DescriptionLine$1 extends DescriptionLineValueOneOf$1, DescriptionLineDescriptionLineValueOneOf$1 {
        /** Description line name. */
        name?: DescriptionLineName$1;
        /**
         * Description line type.
         * @internal
         */
        lineType?: DescriptionLineType$1;
        /** Description line plain text value. */
        plainText?: PlainTextValue$1;
        /** Description line color value. */
        colorInfo?: Color$1;
        /**
         * Description line plain text value.
         * @internal
         */
        plainTextValue?: PlainTextValue$1;
        /**
         * Description line color.
         * @internal
         */
        color?: string;
    }
    /** @oneof */
    interface DescriptionLineValueOneOf$1 {
        /** Description line plain text value. */
        plainText?: PlainTextValue$1;
        /** Description line color value. */
        colorInfo?: Color$1;
    }
    /** @oneof */
    interface DescriptionLineDescriptionLineValueOneOf$1 {
        /**
         * Description line plain text value.
         * @internal
         */
        plainTextValue?: PlainTextValue$1;
        /**
         * Description line color.
         * @internal
         */
        color?: string;
    }
    interface DescriptionLineName$1 {
        /** Description line name in site's default language. */
        original?: string;
        /** Translated description line item according to buyer language. Defaults to `original` when not provided. */
        translated?: string | null;
    }
    interface PlainTextValue$1 {
        /** Description line plain text value in site's default language. */
        original?: string;
        /** Translated description line plain text value according to buyer language. Defaults to `original` when not provided. */
        translated?: string | null;
    }
    interface Color$1 {
        /** Description line color name in site's default language. */
        original?: string;
        /** Translated description line color name according to buyer language. Defaults to `original` when not provided. */
        translated?: string | null;
        /** HEX or RGB color code for display. */
        code?: string | null;
    }
    enum DescriptionLineType$1 {
        UNRECOGNISED = "UNRECOGNISED",
        PLAIN_TEXT = "PLAIN_TEXT",
        COLOR = "COLOR"
    }
    interface ItemAvailabilityInfo {
        /**
         * Item availability status.
         * + `"NOT_FOUND"`: Item does not exist
         * + `"NOT_AVAILABLE"`: Item not in stock
         * + `"PARTIALLY_AVAILABLE"`: Available quantity is less than requested
         */
        status?: ItemAvailabilityStatus;
        /** Quantity available. */
        quantityAvailable?: number | null;
    }
    enum ItemAvailabilityStatus {
        AVAILABLE = "AVAILABLE",
        NOT_FOUND = "NOT_FOUND",
        /** Not in stock */
        NOT_AVAILABLE = "NOT_AVAILABLE",
        /** Available quantity is less than requested */
        PARTIALLY_AVAILABLE = "PARTIALLY_AVAILABLE"
    }
    interface PhysicalProperties$2 {
        /** Line item weight. Measurement unit (`"KG"` or `"LB"`) is taken from `order.weightUnit`. */
        weight?: number | null;
        /** Stock-keeping unit. Learn more about [SKUs](https://www.wix.com/encyclopedia/definition/stock-keeping-unit-sku). */
        sku?: string | null;
        /** Whether this line item is shippable. */
        shippable?: boolean;
    }
    interface Scope$1 {
        /** Scope namespace (Wix Stores, Wix Bookings, Wix Events) */
        namespace?: string;
        /** Coupon scope's applied group (e.g., event or ticket in Wix Events) */
        group?: Group$1;
    }
    interface Group$1 {
        /** Coupon scope's group (e.g., product or collection in Wix Stores). See [valid scope values](https://dev.wix.com/api/rest/coupons/coupons/valid-scope-values). */
        name?: string;
        /** Item ID (when the coupon scope is limited to just one item). */
        entityId?: string | null;
    }
    interface ItemType$1 extends ItemTypeItemTypeDataOneOf$1 {
        /** Preset item type. */
        preset?: ItemTypeItemType$1;
        /** Custom item type. */
        custom?: string;
    }
    /** @oneof */
    interface ItemTypeItemTypeDataOneOf$1 {
        /** Preset item type. */
        preset?: ItemTypeItemType$1;
        /** Custom item type. */
        custom?: string;
    }
    enum ItemTypeItemType$1 {
        UNRECOGNISED = "UNRECOGNISED",
        PHYSICAL = "PHYSICAL",
        DIGITAL = "DIGITAL",
        GIFT_CARD = "GIFT_CARD",
        SERVICE = "SERVICE"
    }
    interface SubscriptionOptionInfo$1 {
        /** Subscription option settings. */
        subscriptionSettings?: SubscriptionSettings$3;
        /** Subscription option title. */
        title?: Title;
        /** Subscription option description. */
        description?: Description;
    }
    interface SubscriptionSettings$3 {
        /** Frequency of recurring payment. */
        frequency?: SubscriptionFrequency$3;
        /**
         * Interval of recurring payment (optional: default value 1 will be used if not provided)
         * @internal
         */
        interval?: number | null;
        /** Whether subscription is renewed automatically at the end of each period. */
        autoRenewal?: boolean;
        /** Number of billing cycles before subscription ends. Ignored if `autoRenewal: true`. */
        billingCycles?: number | null;
    }
    /** Frequency unit of recurring payment */
    enum SubscriptionFrequency$3 {
        UNDEFINED = "UNDEFINED",
        DAY = "DAY",
        WEEK = "WEEK",
        MONTH = "MONTH",
        YEAR = "YEAR"
    }
    interface Title {
        /** Subscription option name. */
        original?: string;
        /** Translated subscription option name. */
        translated?: string | null;
    }
    interface Description {
        /** Subscription option description. */
        original?: string;
        /** Translated subscription option name. */
        translated?: string | null;
    }
    interface SecuredMedia {
        /** Media ID in media manager. */
        _id?: string;
        /** Original file name. */
        fileName?: string;
        /** File type. */
        fileType?: FileType;
    }
    enum FileType {
        UNSPECIFIED = "UNSPECIFIED",
        SECURE_PICTURE = "SECURE_PICTURE",
        SECURE_VIDEO = "SECURE_VIDEO",
        SECURE_DOCUMENT = "SECURE_DOCUMENT",
        SECURE_MUSIC = "SECURE_MUSIC",
        SECURE_ARCHIVE = "SECURE_ARCHIVE"
    }
    /** Type of selected payment option for catalog item */
    enum PaymentOptionType$2 {
        /** The entire payment for given item will happen as part of the checkout. */
        FULL_PAYMENT_ONLINE = "FULL_PAYMENT_ONLINE",
        /** The entire payment for given item will happen after the checkout. */
        FULL_PAYMENT_OFFLINE = "FULL_PAYMENT_OFFLINE",
        /** Given item cannot be paid via monetary payment options, only via membership. When this option is used, price will always be 0. */
        MEMBERSHIP = "MEMBERSHIP",
        /**
         * Partial payment for the given item to be paid upfront during the checkout.
         * Amount to be paid is defined by `deposit_amount` field on per-item basis.
         */
        DEPOSIT_ONLINE = "DEPOSIT_ONLINE",
        /**
         * Payment for this item can only be done using a membership and must be manually redeemed in the dashboard by the site owner.
         * Note: when this option is used, price will be 0.
         */
        MEMBERSHIP_OFFLINE = "MEMBERSHIP_OFFLINE"
    }
    interface ServiceProperties$1 {
        /** Date and time the service is supposed to be provided in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format. For example, the time of the class. */
        scheduledDate?: Date;
        /** The number of people participating in this service. For example, the number of people attending the class or the number of people per hotel room. */
        numberOfParticipants?: number | null;
    }
    interface PriceDescription$1 {
        /** *Required.** Original price description in site's default language. */
        original?: string;
        /** Translated price description according to buyer language. Defaults to `original` when not provided. */
        translated?: string | null;
    }
    /** Billing Info and shipping details */
    interface AddressWithContact$1 {
        /** Address. */
        address?: ApiAddress;
        /** Contact details. */
        contactDetails?: FullAddressContactDetails$1;
        /**
         * Reference to address service.
         * @internal
         */
        addressesServiceId?: string | null;
    }
    /** Physical address */
    interface ApiAddress {
        /** Two-letter country code in [ISO-3166 alpha-2](https://www.iso.org/obp/ui/#search/code/) format. */
        country?: string | null;
        /** Code for a subdivision (such as state, prefecture, or province) in [ISO 3166-2](https://www.iso.org/standard/72483.html) format. */
        subdivision?: string | null;
        /** City name. */
        city?: string | null;
        /** Postal or zip code. */
        postalCode?: string | null;
        /** Street address. */
        streetAddress?: StreetAddress$2;
        /** Main address line (usually street name and number). */
        addressLine1?: string | null;
        /** Free text providing more detailed address info. Usually contains apt, suite, floor. */
        addressLine2?: string | null;
    }
    interface StreetAddress$2 {
        /** Street number. */
        number?: string;
        /** Street name. */
        name?: string;
        /**
         * Apartment number.
         * @internal
         */
        apt?: string;
        /**
         * Optional address line 1
         * @internal
         */
        formattedAddressLine?: string | null;
    }
    /** Full contact details for an address */
    interface FullAddressContactDetails$1 {
        /** First name. */
        firstName?: string | null;
        /** Last name. */
        lastName?: string | null;
        /** Phone number. */
        phone?: string | null;
        /** Company name. */
        company?: string | null;
        /** Tax information (for Brazil only). If ID is provided, `vatId.type` must also be set, `UNSPECIFIED` is not allowed. */
        vatId?: CommonVatId;
    }
    interface CommonVatId {
        /** Customer's tax ID. */
        _id?: string;
        /**
         * Tax type.
         *
         * Supported values:
         * + `CPF`: for individual tax payers
         * + `CNPJ`: for corporations
         */
        type?: CommonVatType;
    }
    /** tax info types */
    enum CommonVatType {
        UNSPECIFIED = "UNSPECIFIED",
        /** CPF - for individual tax payers. */
        CPF = "CPF",
        /** CNPJ - for corporations */
        CNPJ = "CNPJ"
    }
    interface ShippingInfo$1 {
        /** Shipping address and contact details. */
        shippingDestination?: AddressWithContact$1;
        /** Selected option out of the options allowed for the `region`. */
        selectedCarrierServiceOption?: SelectedCarrierServiceOption$1;
        /**
         * Shipping region. Based on the address provided.
         * @readonly
         */
        region?: ShippingRegion$2;
        /**
         * All carrier options for this shipping rule.
         * @readonly
         */
        carrierServiceOptions?: CarrierServiceOption$1[];
    }
    interface SelectedCarrierServiceOption$1 {
        /** Unique identifier of selected option. For example, "usps_std_overnight". */
        code?: string;
        /**
         * Title of the option, such as USPS Standard Overnight Delivery (in the requested locale).
         * For example, "Standard" or "First-Class Package International".
         * @readonly
         */
        title?: string;
        /**
         * Delivery logistics.
         * @readonly
         */
        logistics?: DeliveryLogistics$2;
        /**
         * Shipping costs.
         * @readonly
         */
        cost?: SelectedCarrierServiceOptionPrices$1;
        /**
         * Were we able to find the requested shipping option, or otherwise we fallback to the default one (the first)
         * @readonly
         */
        requestedShippingOption?: boolean;
        /** Other charges */
        otherCharges?: SelectedCarrierServiceOptionOtherCharge$1[];
        /** This carrier's unique ID */
        carrierId?: string | null;
    }
    interface DeliveryLogistics$2 {
        /** Expected delivery time, in free text. For example, "3-5 business days". */
        deliveryTime?: string | null;
        /** Instructions for caller, e.g for pickup: "Please deliver during opening hours, and please don't park in disabled parking spot". */
        instructions?: string | null;
        /** Pickup details. */
        pickupDetails?: PickupDetails$3;
    }
    interface PickupDetails$3 {
        /** Pickup address. */
        address?: ApiAddress;
        /** Whether the pickup address is that of a business - this may effect tax calculation. */
        businessLocation?: boolean;
        /** Pickup method */
        pickupMethod?: PickupMethod$2;
    }
    enum PickupMethod$2 {
        UNKNOWN_METHOD = "UNKNOWN_METHOD",
        STORE_PICKUP = "STORE_PICKUP",
        PICKUP_POINT = "PICKUP_POINT"
    }
    interface SelectedCarrierServiceOptionPrices$1 {
        /** Total shipping price, after discount and after tax. */
        totalPriceAfterTax?: MultiCurrencyPrice$1;
        /** Deprecated - use `total_price_after_tax` minus `tax_details.total_tax` instead. */
        totalPriceBeforeTax?: MultiCurrencyPrice$1;
        /** Tax details. */
        taxDetails?: ItemTaxFullDetails$2;
        /** Shipping discount before tax. */
        totalDiscount?: MultiCurrencyPrice$1;
        /** Shipping price before discount and before tax. */
        price?: MultiCurrencyPrice$1;
    }
    interface SelectedCarrierServiceOptionOtherCharge$1 {
        /** Type of additional cost. */
        type?: ChargeType$1;
        /** Details of the charge, such as 'Full Coverage Insurance of up to 80% of value of shipment'. */
        details?: string | null;
        /** Price of added charge. */
        cost?: SelectedCarrierServiceOptionPrices$1;
    }
    enum ChargeType$1 {
        HANDLING_FEE = "HANDLING_FEE",
        INSURANCE = "INSURANCE"
    }
    interface ShippingRegion$2 {
        /**
         * Shipping region ID.
         * @readonly
         */
        _id?: string;
        /** Shipping region name. */
        name?: string;
    }
    interface CarrierServiceOption$1 {
        /** Carrier ID. */
        carrierId?: string;
        /** Shipping options offered by this carrier for this request. */
        shippingOptions?: ShippingOption$1[];
    }
    interface ShippingOption$1 {
        /**
         * Unique code of provided shipping option like "usps_std_overnight".
         * For legacy calculators this would be the UUID of the option.
         */
        code?: string;
        /**
         * Title of the option, such as USPS Standard Overnight Delivery (in the requested locale).
         * For example, "Standard" or "First-Class Package International".
         */
        title?: string;
        /** Delivery logistics. */
        logistics?: DeliveryLogistics$2;
        /** Sipping price information. */
        cost?: ShippingPrice$2;
    }
    interface ShippingPrice$2 {
        /** Shipping price. */
        price?: MultiCurrencyPrice$1;
        /** Other costs such as insurance, handling & packaging for fragile items, etc. */
        otherCharges?: OtherCharge$1[];
    }
    interface OtherCharge$1 {
        /** Type of additional cost. */
        type?: ChargeType$1;
        /** Price of added cost. */
        price?: MultiCurrencyPrice$1;
    }
    interface BuyerInfo$3 extends BuyerInfoIdOneOf$1 {
        /**
         * Contact ID. Auto-created if one does not yet exist. For more information, see [Contacts API](https://www.wix.com/velo/reference/wix-crm-backend/contacts/introduction).
         * @readonly
         */
        contactId?: string | null;
        /** Buyer email address. */
        email?: string | null;
        /** Visitor ID - if the buyer is **not** a site member. */
        visitorId?: string;
        /** Member ID - If the buyer is a site member. */
        memberId?: string;
        /**
         * + If `true`, the checkout doesn't have an owner yet and anyone can access it. The first to access it will be the new owner.
         * + If `false`, the value in `checkout.createdBy` is the owner.
         */
        openAccess?: boolean;
    }
    /** @oneof */
    interface BuyerInfoIdOneOf$1 {
        /** Visitor ID - if the buyer is **not** a site member. */
        visitorId?: string;
        /** Member ID - If the buyer is a site member. */
        memberId?: string;
        /**
         * + If `true`, the checkout doesn't have an owner yet and anyone can access it. The first to access it will be the new owner.
         * + If `false`, the value in `checkout.createdBy` is the owner.
         */
        openAccess?: boolean;
    }
    interface PriceSummary$2 {
        /** Subtotal of all line items, before discounts and before tax. */
        subtotal?: MultiCurrencyPrice$1;
        /** Total shipping price, before discounts and before tax. */
        shipping?: MultiCurrencyPrice$1;
        /** Total tax. */
        tax?: MultiCurrencyPrice$1;
        /** Total calculated discount value. */
        discount?: MultiCurrencyPrice$1;
        /** Total price after discounts, gift cards, and tax. */
        total?: MultiCurrencyPrice$1;
        /** Total additional fees price before tax. */
        additionalFees?: MultiCurrencyPrice$1;
    }
    interface CalculationErrors$1 extends CalculationErrorsShippingCalculationErrorOneOf$1 {
        /** Tax calculation error. */
        taxCalculationError?: Details$1;
        /** Coupon calculation error. */
        couponCalculationError?: Details$1;
        /** Gift card calculation error. */
        giftCardCalculationError?: Details$1;
        /** Order validation errors. */
        orderValidationErrors?: ApplicationError$4[];
        /**
         * Membership payment methods calculation errors
         * For example, will indicate that a line item that must be paid with membership payment doesn't have one or selected memberships are invalid
         */
        membershipError?: Details$1;
        /** Discount Rule calculation error. */
        discountsCalculationError?: Details$1;
        /** General shipping calculation error. */
        generalShippingCalculationError?: Details$1;
        /** Carrier errors. */
        carrierErrors?: CarrierErrors$1;
    }
    /** @oneof */
    interface CalculationErrorsShippingCalculationErrorOneOf$1 {
        /** General shipping calculation error. */
        generalShippingCalculationError?: Details$1;
        /** Carrier errors. */
        carrierErrors?: CarrierErrors$1;
    }
    interface Details$1 extends DetailsKindOneOf$1 {
        /** deprecated in API's - to enable migration from rendering arbitrary tracing to rest response */
        tracing?: Record<string, string>;
        applicationError?: ApplicationError$4;
        validationError?: ValidationError$1;
    }
    /** @oneof */
    interface DetailsKindOneOf$1 {
        applicationError?: ApplicationError$4;
        validationError?: ValidationError$1;
    }
    interface ApplicationError$4 {
        /** Error code. */
        code?: string;
        /** Description of the error. */
        description?: string;
        /** Data related to the error. */
        data?: Record<string, any> | null;
    }
    /**
     * example result:
     * {
     * "fieldViolations": [
     * {
     * "field": "fieldA",
     * "description": "invalid music note. supported notes: [do,re,mi,fa,sol,la,ti]",
     * "violatedRule": "OTHER",
     * "ruleName": "INVALID_NOTE",
     * "data": {
     * "value": "FI"
     * }
     * },
     * {
     * "field": "fieldB",
     * "description": "field value out of range. supported range: [0-20]",
     * "violatedRule": "MAX",
     * "data": {
     * "threshold": 20
     * }
     * },
     * {
     * "field": "fieldC",
     * "description": "invalid phone number. provide a valid phone number of size: [7-12], supported characters: [0-9, +, -, (, )]",
     * "violatedRule": "FORMAT",
     * "data": {
     * "type": "PHONE"
     * }
     * }
     * ]
     * }
     */
    interface ValidationError$1 {
        fieldViolations?: FieldViolation$1[];
    }
    enum RuleType$1 {
        VALIDATION = "VALIDATION",
        OTHER = "OTHER",
        MAX = "MAX",
        MIN = "MIN",
        MAX_LENGTH = "MAX_LENGTH",
        MIN_LENGTH = "MIN_LENGTH",
        MAX_SIZE = "MAX_SIZE",
        MIN_SIZE = "MIN_SIZE",
        FORMAT = "FORMAT",
        DECIMAL_LTE = "DECIMAL_LTE",
        DECIMAL_GTE = "DECIMAL_GTE",
        DECIMAL_LT = "DECIMAL_LT",
        DECIMAL_GT = "DECIMAL_GT",
        DECIMAL_MAX_SCALE = "DECIMAL_MAX_SCALE",
        INVALID_ENUM_VALUE = "INVALID_ENUM_VALUE",
        REQUIRED_FIELD = "REQUIRED_FIELD",
        FIELD_NOT_ALLOWED = "FIELD_NOT_ALLOWED",
        ONE_OF_ALIGNMENT = "ONE_OF_ALIGNMENT"
    }
    interface FieldViolation$1 {
        field?: string;
        description?: string;
        violatedRule?: RuleType$1;
        /** applicable when violated_rule=OTHER */
        ruleName?: string | null;
        data?: Record<string, any> | null;
    }
    interface CarrierErrors$1 {
        /** Carrier errors. */
        errors?: CarrierError$1[];
    }
    interface CarrierError$1 {
        /** Carrier ID. */
        carrierId?: string;
        /** Error details. */
        error?: Details$1;
    }
    interface GiftCard$2 {
        /** Gift Card ID. */
        _id?: string;
        /** Gift card obfuscated code. */
        obfuscatedCode?: string;
        /** Gift card value. */
        amount?: MultiCurrencyPrice$1;
        /** App ID of the gift card provider. */
        appId?: string;
    }
    interface AppliedDiscount$2 extends AppliedDiscountDiscountSourceOneOf$2 {
        /** Discount type. */
        discountType?: DiscountType$2;
        /** IDs of the line items the discount applies to. */
        lineItemIds?: string[];
        /** Coupon details. */
        coupon?: Coupon$2;
        /** Merchant discount. */
        merchantDiscount?: MerchantDiscount$2;
        /** Discount rule */
        discountRule?: DiscountRule$2;
    }
    /** @oneof */
    interface AppliedDiscountDiscountSourceOneOf$2 {
        /** Coupon details. */
        coupon?: Coupon$2;
        /** Merchant discount. */
        merchantDiscount?: MerchantDiscount$2;
        /** Discount rule */
        discountRule?: DiscountRule$2;
    }
    enum DiscountType$2 {
        GLOBAL = "GLOBAL",
        SPECIFIC_ITEMS = "SPECIFIC_ITEMS",
        SHIPPING = "SHIPPING"
    }
    /** Coupon */
    interface Coupon$2 {
        /** Coupon ID. */
        _id?: string;
        /** Coupon code. */
        code?: string;
        /** Coupon value. */
        amount?: MultiCurrencyPrice$1;
        /** Coupon name. */
        name?: string;
        /**
         * Coupon type: We want it to be an enum and not a string but currently we have no time to do it so we leave it as is to be aligned with cart summary.
         * @internal
         */
        couponType?: string;
    }
    interface MerchantDiscount$2 {
        /** Discount value. */
        amount?: MultiCurrencyPrice$1;
    }
    interface DiscountRule$2 {
        /** Discount rule ID */
        _id?: string;
        /** Discount rule name */
        name?: DiscountRuleName$2;
        /** Discount value. */
        amount?: MultiCurrencyPrice$1;
    }
    interface DiscountRuleName$2 {
        /** Original discount rule name (in site's default language). */
        original?: string;
        /** Translated discount rule name according to buyer language. Defaults to `original` when not provided. */
        translated?: string | null;
    }
    interface CustomField$2 {
        /** Custom field value. */
        value?: any;
        /** Custom field title. */
        title?: string;
        /** Translated custom field title. */
        translatedTitle?: string | null;
    }
    enum WeightUnit$3 {
        /** Weight unit can't be classified, due to an error */
        UNSPECIFIED_WEIGHT_UNIT = "UNSPECIFIED_WEIGHT_UNIT",
        /** Kilograms */
        KG = "KG",
        /** Pounds */
        LB = "LB"
    }
    interface TaxSummary$2 {
        /**
         * Amount for which tax is calculated, added from line items.
         * @readonly
         */
        taxableAmount?: MultiCurrencyPrice$1;
        /**
         * Calculated tax, added from line items.
         * @readonly
         */
        totalTax?: MultiCurrencyPrice$1;
        /**
         * manual tax rate
         * @internal
         * @readonly
         */
        manualTaxRate?: string;
        /** Tax calculator that was active when the order was created. */
        calculationDetails?: TaxCalculationDetails$1;
    }
    interface TaxCalculationDetails$1 extends TaxCalculationDetailsCalculationDetailsOneOf$1 {
        /** Rate calculation type. */
        rateType?: RateType$1;
        /** Reason the manual calculation was used. */
        manualRateReason?: ManualCalculationReason$1;
        /** Details of the fallback rate calculation. */
        autoTaxFallbackDetails?: AutoTaxFallbackCalculationDetails$1;
    }
    /** @oneof */
    interface TaxCalculationDetailsCalculationDetailsOneOf$1 {
        /** Reason the manual calculation was used. */
        manualRateReason?: ManualCalculationReason$1;
        /** Details of the fallback rate calculation. */
        autoTaxFallbackDetails?: AutoTaxFallbackCalculationDetails$1;
    }
    enum RateType$1 {
        /** no tax being collected for this request due to location of purchase */
        NO_TAX_COLLECTED = "NO_TAX_COLLECTED",
        /** manual rate used for calculation */
        MANUAL_RATE = "MANUAL_RATE",
        /** autotax rate used for calculation */
        AUTO_RATE = "AUTO_RATE",
        /** fallback rate used for calculation */
        FALLBACK_RATE = "FALLBACK_RATE"
    }
    enum ManualCalculationReason$1 {
        /** user set calculator in Business Manager to be Manual */
        GLOBAL_SETTING_TO_MANUAL = "GLOBAL_SETTING_TO_MANUAL",
        /** specific region is on manual even though Global setting is Auto-tax */
        REGION_SETTING_TO_MANUAL = "REGION_SETTING_TO_MANUAL"
    }
    interface AutoTaxFallbackCalculationDetails$1 {
        /** reason for fallback */
        fallbackReason?: FallbackReason$1;
        /** invalid request (i.e. address), timeout, internal error, license error, and others will be encoded here */
        error?: ApplicationError$4;
    }
    enum FallbackReason$1 {
        /** auto-tax failed to be calculated */
        AUTO_TAX_FAILED = "AUTO_TAX_FAILED",
        /** auto-tax was temporarily deactivated on a system-level */
        AUTO_TAX_DEACTIVATED = "AUTO_TAX_DEACTIVATED"
    }
    enum ChannelType$2 {
        UNSPECIFIED = "UNSPECIFIED",
        WEB = "WEB",
        POS = "POS",
        EBAY = "EBAY",
        AMAZON = "AMAZON",
        OTHER_PLATFORM = "OTHER_PLATFORM",
        WIX_APP_STORE = "WIX_APP_STORE",
        WIX_INVOICES = "WIX_INVOICES",
        BACKOFFICE_MERCHANT = "BACKOFFICE_MERCHANT",
        WISH = "WISH"
    }
    interface CreatedBy$1 extends CreatedByIdOneOf {
        /**
         * User ID - when the order was created by a Wix user on behalf of a buyer.
         * For example, via POS (point of service).
         */
        userId?: string;
        /** Member ID - when the order was created by a **logged in** site visitor. */
        memberId?: string;
        /** Visitor ID - when the order was created by a site visitor that was **not** logged in. */
        visitorId?: string;
        /** App ID - when the order was created by an external application or Wix service. */
        appId?: string;
    }
    /** @oneof */
    interface CreatedByIdOneOf {
        /**
         * User ID - when the order was created by a Wix user on behalf of a buyer.
         * For example, via POS (point of service).
         */
        userId?: string;
        /** Member ID - when the order was created by a **logged in** site visitor. */
        memberId?: string;
        /** Visitor ID - when the order was created by a site visitor that was **not** logged in. */
        visitorId?: string;
        /** App ID - when the order was created by an external application or Wix service. */
        appId?: string;
    }
    interface MembershipOptions$1 {
        /**
         * List of payment options that can be used
         * @readonly
         */
        eligibleMemberships?: Membership$1[];
        /**
         * List of payment options that are owned by the member, but cannot be used due to reason provided
         * @readonly
         */
        invalidMemberships?: InvalidMembership$1[];
        /** The selected payment options and which line items they apply to */
        selectedMemberships?: SelectedMemberships$1;
    }
    interface Membership$1 {
        /** Membership ID. */
        _id?: string;
        /** ID of the application providing this payment option. */
        appId?: string;
        /** The name of this membership. */
        name?: MembershipName$2;
        /** Line item IDs which are "paid for" by this membership. */
        lineItemIds?: string[];
        /** Optional - For a membership that has limited credits, information about credit usage. */
        credits?: MembershipPaymentCredits$1;
        /** Optional - TMembership expiry date. */
        expirationDate?: Date;
        /** Additional data about this membership. */
        additionalData?: Record<string, any> | null;
    }
    interface MembershipName$2 {
        /** The name of this membership */
        original?: string;
        /** Optional - Translated name of this membership. Defaults to `original` when not provided. */
        translated?: string | null;
    }
    interface MembershipPaymentCredits$1 {
        /** How much credit this membership has in total */
        total?: number;
        /** How much credit remained for this membership */
        remaining?: number;
    }
    interface InvalidMembership$1 {
        /** Membership details. */
        membership?: Membership$1;
        /** Reason why this membership is invalid and cannot be used. */
        reason?: string;
    }
    interface SelectedMemberships$1 {
        /** Selected memberships. */
        memberships?: SelectedMembership$1[];
    }
    interface SelectedMembership$1 {
        /** Membership ID. */
        _id?: string;
        /** ID of the app providing this payment option. */
        appId?: string;
        /** IDs of the line items this membership applies to. */
        lineItemIds?: string[];
    }
    interface AdditionalFee$2 {
        /** Additional fee's unique code (or ID) for future processing */
        code?: string | null;
        /** Translated additional fee's name */
        name?: string;
        /** Additional fee's price */
        price?: MultiCurrencyPrice$1;
        /** Tax details */
        taxDetails?: ItemTaxFullDetails$2;
        /** Provider's app id */
        providerAppId?: string | null;
        /** Additional fee's price before tax */
        priceBeforeTax?: MultiCurrencyPrice$1;
    }
    interface ConversionInfo {
        /**
         * The site currency.
         * @readonly
         */
        siteCurrency?: string;
        /**
         * The rate used when converting from the site currency to the checkout currency.
         * @readonly
         */
        conversionRate?: string;
    }
    interface UpdatedCheckoutMessage {
        /** Previous checkout. */
        oldCheckout?: Checkout;
        /** Updated checkout. */
        updatedCheckout?: Checkout;
    }
    interface CreateCheckoutRequest {
        /** Checkout information. */
        checkoutInfo?: Checkout;
        /** The code of an existing coupon to apply to checkout. For more information, see the [Coupons API](https://www.wix.com/velo/reference/wix-marketing-backend/coupons). */
        couponCode?: string | null;
        /** Line items to be added to checkout. */
        lineItems?: LineItem$3[];
        /**
         * Custom line items to be added to checkout.
         * @internal
         */
        customLineItems?: CustomLineItem[];
        /**
         * Sales channel that created the checkout. Supported values:
         * + `"WEB"`, `"POS"`, `"EBAY"`, `"AMAZON"`, `"WIX_APP_STORE"`, `"WIX_INVOICES"`, `"BACKOFFICE_MERCHANT"`, `"WISH"`, `"OTHER_PLATFORM"`.
         */
        channelType: ChannelType$2;
        /**
         * Gift card code.
         *
         * >**Note:** Gift cards are supported through the Wix UI, though the SPI is not currently available. Learn more about [Wix Gift Cards](https://support.wix.com/en/article/wix-stores-setting-up-wix-gift-cards).
         */
        giftCardCode?: string | null;
        /**
         * Merchant discounts to apply to specific line items.
         * If no `lineItemIds` are passed, the discount will be applied to the whole checkout.
         *
         * >**Note:** The Manage Stores [permission scope](https://devforum.wix.com/en/article/available-permissions) is required to apply merchant discounts.
         */
        merchantDiscounts?: MerchantDiscountInput$1[];
    }
    interface CustomLineItem {
        /**
         * Custom line item quantity.
         *
         * Min: `1`
         *
         * Max: `100000`
         */
        quantity?: number;
        /** Custom line item name. */
        name?: string | null;
        /** Custom line item price. For security reasons, the `price` field should come from backend Velo code, and not be passed from the frontend. */
        price?: string;
        /** Custom line item description lines. Used for displaying the cart, checkout and order. */
        descriptionLines?: DescriptionLine$1[];
        /**
         * Custom line item media.
         * + Link to an image/video from the [Wix Media Manager](https://support.wix.com/en/article/wix-media-about-the-media-manager) - `"wix:image://v1/3c76e2_c53...4ea4~mv2.jpg#originWidth=1000&originHeight=1000"`.
         * + An image from the web - `"http(s)://<image url>"`.
         */
        media?: string;
        /**
         * Custom line item ID. If passed, `id` must be unique.
         * Default: auto-generated ID.
         */
        _id?: string | null;
    }
    interface MerchantDiscountInput$1 {
        /** Discount amount. */
        amount?: string;
        /** IDs of the line items the discount applies to. */
        lineItemIds?: string[];
    }
    interface CreateCheckoutResponse {
        /** Newly created checkout. */
        checkout?: Checkout;
    }
    interface ShippingCalculationErrorData extends ShippingCalculationErrorDataShippingCalculationErrorOneOf {
        generalShippingCalculationError?: Details$1;
        carrierErrors?: CarrierErrors$1;
    }
    /** @oneof */
    interface ShippingCalculationErrorDataShippingCalculationErrorOneOf {
        generalShippingCalculationError?: Details$1;
        carrierErrors?: CarrierErrors$1;
    }
    interface GetCheckoutRequest {
        /** Checkout ID. */
        _id: string;
        /** Whether to refresh the checkout from external sources. Defaults to true. */
        refresh?: boolean | null;
    }
    interface GetCheckoutResponse {
        /** The requested checkout. */
        checkout?: Checkout;
    }
    interface GetCheckoutByCartIdRequest {
        /** Cart ID. */
        _id: string;
    }
    interface GetCheckoutByCartIdResponse {
        /** The requested checkout. */
        checkout?: Checkout;
    }
    interface GetWixCheckoutURLRequest {
        /** Checkout ID. */
        _id: string;
        /**
         * cart id to compare with for migration period
         * @internal
         */
        cartId?: string | null;
        /**
         * checkout currency parameter to append
         * @internal
         */
        currencyCode?: string | null;
    }
    interface GetWixCheckoutURLResponse {
        /** Checkout URL. */
        checkoutUrl?: string;
    }
    interface UpdateCheckoutRequest {
        /** Checkout information. */
        checkout: Checkout;
        /** The code of an existing coupon to apply to checkout. For more information, see the [Coupons API](https://www.wix.com/velo/reference/wix-marketing-backend/coupons). */
        couponCode?: string | null;
        /** Gift card code. */
        giftCardCode?: string | null;
        /**
         * Set of fields to update. Fields are inferred.
         * @internal
         */
        fieldMask?: string[];
        /**
         * Merchant discounts to apply to specific line items.
         * If no `lineItemIds` are passed, the discount will be applied to the whole checkout.
         *
         * >**Note:** The Manage Stores [permission scope](https://devforum.wix.com/en/article/available-permissions) is required to apply merchant discounts.
         */
        merchantDiscounts?: MerchantDiscountInput$1[];
        /**
         * When true, calculation errors won't fail the update request. When empty or false, the update won't happen and relevant error will return
         * @internal
         */
        ignoreCalculationErrors?: boolean | null;
    }
    interface UpdateCheckoutResponse {
        /** Updated checkout. */
        checkout?: Checkout;
    }
    interface RemoveCouponRequest {
        /** ID of the checkout to remove the coupon from. */
        _id: string;
    }
    interface RemoveCouponResponse {
        /** Updated checkout after removal of coupon. */
        checkout?: Checkout;
    }
    interface RemoveGiftCardRequest {
        /** ID of the checkout to remove the gift card from. */
        _id: string;
    }
    interface RemoveGiftCardResponse {
        /** Updated checkout after removal of gift card. */
        checkout?: Checkout;
    }
    interface AddToCheckoutRequest {
        /** Checkout ID. */
        _id: string;
        /** Catalog line items. */
        lineItems?: LineItem$3[];
        /**
         * Custom line items.
         * @internal
         */
        customLineItems?: CustomLineItem[];
    }
    interface AddToCheckoutResponse {
        /** Updated checkout. */
        checkout?: Checkout;
    }
    interface RemoveLineItemsRequest {
        /** ID of the checkout to remove line items from. */
        _id: string;
        /** IDs of the line items to remove from the checkout. */
        lineItemIds: string[];
    }
    interface RemoveLineItemsResponse {
        /** Updated checkout after removal of line items. */
        checkout?: Checkout;
    }
    interface CreateOrderRequest$1 {
        /** Checkout ID. */
        _id: string;
        /**
         * Custom URL params to be added to redirect URLs.
         * @internal
         */
        urlParams?: Record<string, string>;
    }
    interface CreateOrderResponse$1 extends CreateOrderResponseIdOneOf {
        /**
         * `paymentGatewayOrderId` will be returned if money needs to be charged.
         * For online orders, send this value as a parameter to the Wix Pay startPayment() function to enable your buyer to pay for the order.
         *
         * In some cases, money should not be charged:
         * + If the total price is 0. For example, in the case of a free item or an item with 100% discount.
         * + If the total price is not 0, but the payment is covered by alternative payment methods, such as a gift card.
         */
        paymentGatewayOrderId?: string | null;
        /** ID of newly created order. */
        orderId?: string;
        /** ID of newly created subscription. Learn more about your site's [Subscriptions](https://support.wix.com/en/article/wix-stores-managing-product-subscriptions). */
        subscriptionId?: string;
    }
    /** @oneof */
    interface CreateOrderResponseIdOneOf {
        /** ID of newly created order. */
        orderId?: string;
        /** ID of newly created subscription. Learn more about your site's [Subscriptions](https://support.wix.com/en/article/wix-stores-managing-product-subscriptions). */
        subscriptionId?: string;
    }
    interface PaymentErrorResponseData {
        paymentResponseToken?: string | null;
        transactionStatus?: string;
        failureDetails?: string | null;
    }
    interface DoublePaymentErrorData extends DoublePaymentErrorDataIdOneOf {
        orderId?: string;
        subscriptionId?: string;
    }
    /** @oneof */
    interface DoublePaymentErrorDataIdOneOf {
        orderId?: string;
        subscriptionId?: string;
    }
    interface RedeemErrorData {
        reason?: string;
    }
    interface CreateOrderAndChargeRequest {
        /** Checkout ID. */
        _id: string;
        /** Payment token. */
        paymentToken?: string | null;
        /**
         * Custom URL params to be added to redirect URLs.
         * @internal
         */
        urlParams?: Record<string, string>;
    }
    interface CreateOrderAndChargeResponse extends CreateOrderAndChargeResponseIdOneOf {
        /** Payment response token. */
        paymentResponseToken?: string | null;
        /**
         * For online orders, send this value as a parameter to the Wix Pay [`startPayment()`](https://www.wix.com/velo/reference/wix-pay/startpayment) function to enable your buyer to pay for the order.
         * `paymentGatewayOrderId` will be returned if money needs to be charged.
         *
         * In some cases, money should not be charged:
         * + If the total price is 0. For example, in the case of a free item or an item with 100% discount.
         * + If the total price is not 0, but the payment is covered by alternative payment methods, such as a gift card.
         */
        paymentGatewayOrderId?: string | null;
        /** ID of newly created order. */
        orderId?: string;
        /** ID of newly created subscription. */
        subscriptionId?: string;
    }
    /** @oneof */
    interface CreateOrderAndChargeResponseIdOneOf {
        /** ID of newly created order. */
        orderId?: string;
        /** ID of newly created subscription. */
        subscriptionId?: string;
    }
    interface MarkCheckoutAsCompletedRequest {
        /** Checkout ID. */
        _id: string;
    }
    interface MarkCheckoutAsCompletedResponse {
    }
    /** Triggered when buyer successfully completed checkout flow */
    interface CheckoutMarkedAsCompleted {
        checkout?: Checkout;
    }
    interface SubscriptionCreated {
        subscription?: Subscription;
    }
    interface Subscription {
        /**
         * Subscription id (auto-generated upon subscription creation)
         * @readonly
         */
        _id?: string;
        /** id of subscription in external system */
        externalId?: string | null;
        /**
         * Subscription creation date
         * @readonly
         */
        dateCreated?: Date;
        /** The id of the cart this order was created from */
        cartId?: string | null;
        /** The id of the checkout this subscriptions was created from */
        checkoutId?: string | null;
        /** member or contact */
        buyerInfo?: V1BuyerInfo;
        /** Line items ordered */
        lineItems?: V1LineItem[];
        /** Totals for subscription's line items */
        totals?: V1Totals;
        /** site settings at the moment when subscription created */
        storeSettings?: StoreSettings;
        /** Full billing address */
        billingAddress?: Address$3;
        /** Delivery information */
        shippingInfo?: V1ShippingInfo;
        /** Coupon that was applied to subscription */
        appliedCoupon?: V1AppliedCoupon;
        /** Message from the customer (e.g., customization request) */
        buyerNote?: string | null;
        /** Custom field */
        customField?: V1CustomField;
        /** Information about subscription option from which subscription was created */
        subscriptionOptionInfo?: V1SubscriptionOptionInfo;
        /** Sales channel that submitted this subscription */
        channelInfo?: ChannelInfo$2;
        /** defines when subscriber will be charged: for frequency=MONTH, billingCycles=6, interval=2 payment will be done every 2 month during one year */
        subscriptionSettings?: V1SubscriptionSettings;
        /**
         * information about first subscription payment
         * @readonly
         */
        billingInfo?: V1BillingInfo;
    }
    /** Buyer Info */
    interface V1BuyerInfo {
        /** Wix customer ID */
        _id?: string;
        /** Customer type */
        identityType?: V1IdentityType;
        /** @internal */
        visitorId?: string | null;
    }
    enum V1IdentityType {
        UNSPECIFIED_IDENTITY_TYPE = "UNSPECIFIED_IDENTITY_TYPE",
        /** Site member */
        MEMBER = "MEMBER",
        /** Contact */
        CONTACT = "CONTACT"
    }
    interface V1LineItem {
        /** Line item ID (auto-generated) */
        index?: number;
        /** Line item quantity */
        quantity?: number;
        /** Line item variantId (from Stores Catalog) */
        variantId?: string | null;
        /** Line item options ordered */
        options?: OptionSelection$1[];
        /** Line item custom text field selections */
        customTextFields?: CustomTextFieldSelection$1[];
        /** Charges details */
        chargeDetails?: ChargeDetails;
        /** Product details */
        productDetails?: ProductDetails;
    }
    interface OptionSelection$1 {
        /** Option name */
        option?: string;
        /** Selected choice for this option */
        selection?: string;
    }
    interface CustomTextFieldSelection$1 {
        /** Custom text field name */
        title?: string;
        /** Custom text field value */
        value?: string;
    }
    interface ChargeDetails {
        /** price of line item (depends on subscription option) */
        price?: number;
        /** Total price charged to the customer (for this line items) after computation of quantity and discount */
        totalPrice?: number | null;
        /** Discount applied for this line item */
        discount?: number | null;
        /** Tax applied for this line item */
        tax?: number | null;
        /** Is tax applied for this line item */
        taxIncludedInPrice?: boolean;
    }
    interface ProductDetails {
        /** Line item product ID (optional for POS orders) */
        productId?: string | null;
        /** Line item name */
        name?: string;
        /** Line item name translated to buyer's language */
        translatedName?: string | null;
        /** Line item type (may be extended) */
        lineItemType?: LineItemType$1;
        /** Line item primary media for preview */
        mediaItem?: MediaItem$1;
        /** Line item SKU */
        sku?: string | null;
        /** Line item weight */
        weight?: number | null;
        /** Line item notes */
        notes?: string | null;
        /** Line item fulfillerId from stores fulfillers. No value means self fulfilled */
        fulfillerId?: string | null;
        /** Tax group id */
        taxGroupId?: string | null;
    }
    enum LineItemType$1 {
        /** Line item type can't be classified, due to an error */
        UNSPECIFIED_LINE_ITEM_TYPE = "UNSPECIFIED_LINE_ITEM_TYPE",
        /** Physical item type */
        PHYSICAL = "PHYSICAL",
        /** Digital item type */
        DIGITAL = "DIGITAL",
        /** Custom item price */
        CUSTOM_AMOUNT_ITEM = "CUSTOM_AMOUNT_ITEM"
    }
    interface MediaItem$1 {
        /**
         * Media type
         * @readonly
         */
        mediaType?: MediaItemType$1;
        /**
         * Media URL
         * @readonly
         */
        url?: string;
        /**
         * Media item width
         * @readonly
         */
        width?: number;
        /**
         * Media item height
         * @readonly
         */
        height?: number;
        /** Media ID (for media items previously saved in Wix Media) */
        _id?: string | null;
        /** Media external URL */
        externalImageUrl?: string | null;
        /** Alternative text for presentation when media cannot be displayed */
        altText?: string | null;
    }
    enum MediaItemType$1 {
        /** Media item type can't be classified, due to an error */
        UNSPECIFIED_MEDIA_TYPE_ITEM = "UNSPECIFIED_MEDIA_TYPE_ITEM",
        /** Image item type */
        IMAGE = "IMAGE"
    }
    interface V1Totals {
        /** Subtotal of all line items, before tax */
        subtotal?: number;
        /** Total shipping price, including tax */
        shipping?: number;
        /**
         * Total shipping price, after tax (identical to shipping)
         * @internal
         */
        shippingAfterTax?: number;
        /**
         * Total shipping price, before tax
         * @internal
         */
        shippingBeforeTax?: number;
        /** Total tax */
        tax?: number;
        /** Total calculated discount value */
        discount?: number;
        /** Total price */
        total?: number;
        /** Total weight */
        weight?: number | null;
        /**
         * Total line items quantity
         * @readonly
         */
        quantity?: number;
    }
    interface StoreSettings {
        /** Currency used for pricing in this store */
        currency?: string | null;
        /**
         * Weight measurement unit used in this store. Supported values:
         * + `"KG"`
         * + `"LB"`
         */
        weightUnit?: WeightUnit$3;
        /**
         * The language to be used when communicating with the buyer
         * For a site that support multiple languages, this would be the language the buyer selected
         * Otherwise this would be the site language
         */
        buyerLanguage?: string | null;
    }
    interface Address$3 extends AddressAddressLine1OptionsOneOf$1 {
        /** Addressee name */
        fullName?: FullName$1;
        /** Country code (2 letters) */
        country?: string | null;
        /** State or district */
        subdivision?: string | null;
        /** City name */
        city?: string | null;
        /** ZIP/postal code */
        zipCode?: string | null;
        /** Phone number */
        phone?: string | null;
        /** Company name */
        company?: string | null;
        /** Email address */
        email?: string | null;
        /** address line */
        addressLine2?: string | null;
        /** Tax information (for Brazil only) */
        vatId?: VatId$2;
        /** Address line 1 (free text) */
        addressLine1?: string;
        /** Address line 1 (street) */
        street?: Street$1;
    }
    /** @oneof */
    interface AddressAddressLine1OptionsOneOf$1 {
        /** Address line 1 (free text) */
        addressLine1?: string;
        /** Address line 1 (street) */
        street?: Street$1;
    }
    interface FullName$1 {
        /** Customer's first name */
        firstName?: string;
        /** Customer's last name */
        lastName?: string;
    }
    interface Street$1 {
        /** Street number */
        number?: string;
        /** Street name */
        name?: string;
    }
    interface VatId$2 {
        /** Customer's tax ID. */
        number?: string;
        /**
         * Tax type.
         * + `CPF`: For individual tax payers.
         * + `CNPJ`: For corporations.
         */
        type?: VatType$2;
    }
    /** Brazilian tax info types */
    enum VatType$2 {
        /** When the tax info type can't be classified, due to an error */
        UNSPECIFIED_TAX_TYPE = "UNSPECIFIED_TAX_TYPE",
        /** CPF - for individual tax payers */
        CPF = "CPF",
        /** CNPJ - for corporations */
        CNPJ = "CNPJ"
    }
    interface V1ShippingInfo extends V1ShippingInfoDetailsOneOf {
        /** Delivery option name */
        deliveryOption?: string;
        /** Delivery option delivery time */
        estimatedDeliveryTime?: string | null;
        /** Shipment details (when this object describes shipment) */
        shipmentDetails?: ShipmentDetails$1;
        /** Pickup details (when this object describes pickup) */
        pickupDetails?: V1PickupDetails;
    }
    /** @oneof */
    interface V1ShippingInfoDetailsOneOf {
        /** Shipment details (when this object describes shipment) */
        shipmentDetails?: ShipmentDetails$1;
        /** Pickup details (when this object describes pickup) */
        pickupDetails?: V1PickupDetails;
    }
    interface ShipmentDetails$1 {
        /** Shipping destination address */
        address?: Address$3;
        /** Discount applied for shipping */
        discount?: number | null;
        /** Tax applied for shipping */
        tax?: number | null;
        /** Whether tax is included in the price */
        taxIncludedInPrice?: boolean;
    }
    interface V1PickupDetails {
        /** Pickup address */
        address?: PickupAddress$2;
        /** Store owner's pickup instructions */
        pickupInstructions?: string | null;
    }
    interface PickupAddress$2 {
        /** Country code (2 letters) */
        country?: string;
        /** State/District */
        subdivision?: string | null;
        /** Address */
        addressLine?: string;
        /** City */
        city?: string;
        /** ZIP/postal code */
        zipCode?: string;
    }
    interface V1AppliedCoupon {
        /** Coupon ID */
        couponId?: string;
        /** Coupon name */
        name?: string;
        /** Coupon code */
        code?: string;
    }
    /** Custom field */
    interface V1CustomField {
        /** Free text that the customer entered in the custom field during the checkout process */
        value?: string;
        /** Title for the custom field */
        title?: string;
        /** The title translated according to the buyer language */
        translatedTitle?: string;
    }
    interface V1SubscriptionOptionInfo {
        _id?: string | null;
        title?: string;
        description?: string | null;
        discount?: Discount$2;
    }
    interface Discount$2 {
        /** Discount type. */
        type?: DiscountDiscountType;
        /** Discount value. */
        value?: number;
    }
    enum DiscountDiscountType {
        UNDEFINED = "UNDEFINED",
        /** No discount */
        AMOUNT = "AMOUNT",
        PERCENT = "PERCENT"
    }
    interface ChannelInfo$2 {
        /** Sales channel that submitted the subscription */
        type?: ChannelInfoChannelType;
    }
    enum ChannelInfoChannelType {
        UNSPECIFIED = "UNSPECIFIED",
        WEB = "WEB",
        OTHER_PLATFORM = "OTHER_PLATFORM",
        WIX_APP_STORE = "WIX_APP_STORE"
    }
    interface V1SubscriptionSettings {
        /** Frequency of recurring payment. */
        frequency?: SubscriptionFrequency$3;
        /**
         * Interval of recurring payment (optional: default value 1 will be used if not provided)
         * @internal
         */
        interval?: number | null;
        /** Whether subscription is renewed automatically at the end of each period. */
        autoRenewal?: boolean;
        /** Number of billing cycles before subscription ends. Ignored if `autoRenewal: true`. */
        billingCycles?: number | null;
    }
    interface V1BillingInfo {
        /** Payment method used for this order */
        paymentMethod?: string | null;
        /** Transaction ID from payment gateway (e.g., Wix Payments) */
        paymentGatewayTransactionId?: string | null;
        /** Order ID from payment gateway (e.g., Wix Payments) */
        paymentGatewayOrderId?: string | null;
    }
    interface Empty$1 {
    }
    interface OrderCreated {
        /** Order ID (auto generated upon order creation) */
        orderId?: string;
        /** ID displayed in the owner's store (auto generated) */
        number?: string;
        /** Order creation date */
        dateCreated?: Date;
        /** Customer information */
        buyerInfo?: V2BuyerInfo;
        /** Currency used for pricing in this store */
        currency?: string;
        /**
         * Weight measurement unit used in this store. Supported values:
         * + `"KG"`
         * + `"LB"`
         */
        weightUnit?: WeightUnit$3;
        /** Totals for order's line items */
        totals?: Totals$1;
        /** Whether the order was read by the store owner */
        read?: boolean;
        /** Order archive status */
        archived?: boolean;
        /** Order payment status */
        paymentStatus?: PaymentStatus$2;
        /** Order fulfillment status */
        fulfillmentStatus?: FulfillmentStatus$3;
        /** @internal */
        ordersExperiments?: OrdersExperiments$1;
        /**
         * Checkout id
         * @internal
         */
        checkoutId?: string | null;
        /**
         * Applied coupon
         * @internal
         */
        appliedCoupon?: AppliedCoupon$1;
        /**
         * Subscription information
         * @internal
         */
        subscriptionInfo?: SubscriptionInfo$2;
        /** @internal */
        cartId?: string | null;
        /**
         * Billing information.
         * @internal
         */
        billingInfo?: BillingInfo$1;
    }
    /** Buyer Info */
    interface V2BuyerInfo {
        /** Wix customer ID */
        _id?: string | null;
        /**
         * Deprecated (use identityType instead)
         * @readonly
         */
        type?: IdentityType$2;
        /** Customer type */
        identityType?: IdentityType$2;
        /**
         * Customer's first name
         * @readonly
         */
        firstName?: string;
        /**
         * Customer's last name
         * @readonly
         */
        lastName?: string;
        /**
         * Customer's phone number
         * @readonly
         */
        phone?: string | null;
        /**
         * Customer's email address
         * @readonly
         */
        email?: string;
        /**
         * Contact Id. needed for cases where the user is the buyer and so it doesn't exist on the buyer info
         * @internal
         * @readonly
         */
        contactId?: string | null;
    }
    enum IdentityType$2 {
        UNSPECIFIED_IDENTITY_TYPE = "UNSPECIFIED_IDENTITY_TYPE",
        /** Site member */
        MEMBER = "MEMBER",
        /** Contact */
        CONTACT = "CONTACT"
    }
    interface Totals$1 {
        /** Subtotal of all the line items, before tax. */
        subtotal?: string;
        /** Total shipping price, before tax. */
        shipping?: string | null;
        /** Total tax. */
        tax?: string | null;
        /** Total calculated discount value. */
        discount?: string | null;
        /** Total price charged. */
        total?: string;
        /**
         * Total items weight.
         * @readonly
         */
        weight?: string;
        /**
         * Total number of line items.
         * @readonly
         */
        quantity?: number;
        /**
         * Total refund.
         * @readonly
         */
        refund?: string | null;
        /** Total calculated gift card value. */
        giftCard?: string | null;
    }
    /** This might be extended in the future with pending orders statuses */
    enum PaymentStatus$2 {
        /** Payment status can't be classified, due to an error */
        UNSPECIFIED_PAYMENT_STATUS = "UNSPECIFIED_PAYMENT_STATUS",
        /** Order is pending response from the payment provider */
        PENDING = "PENDING",
        /** Order is marked as not paid, and can be marked as paid later on. This is relevant for POS and offline orders */
        NOT_PAID = "NOT_PAID",
        /** The order is marked as paid */
        PAID = "PAID",
        /** Order was refunded, refund amount less than order total price */
        PARTIALLY_REFUNDED = "PARTIALLY_REFUNDED",
        /** Full order total price was refunded */
        FULLY_REFUNDED = "FULLY_REFUNDED",
        /** At least one payment was received and approved, covering less than total price amount */
        PARTIALLY_PAID = "PARTIALLY_PAID"
    }
    enum FulfillmentStatus$3 {
        /** None of the order items are fulfilled */
        NOT_FULFILLED = "NOT_FULFILLED",
        /**
         * All of the order items are fulfilled
         * Orders without shipping info are fulfilled automatically
         */
        FULFILLED = "FULFILLED",
        /** Order is canceled */
        CANCELED = "CANCELED",
        /** Some, but not all of the order items are fulfilled */
        PARTIALLY_FULFILLED = "PARTIALLY_FULFILLED"
    }
    interface OrdersExperiments$1 {
        epCommitTax?: boolean;
        moveMerchantEmailToEp?: boolean;
        moveBuyerOrderConfirmationEmailToEp?: boolean;
        producedByEpBridge?: boolean;
    }
    interface AppliedCoupon$1 {
        /** Coupon ID */
        couponId?: string;
        /** Coupon name */
        name?: string;
        /** Coupon code */
        code?: string;
    }
    interface SubscriptionInfo$2 {
        /** Subscription ID. */
        _id?: string | null;
        /** Current cycle number. For example, if the subscription is in the 3rd month of a 4-month subscription, the value will be `3`. */
        cycleNumber?: number;
        /** Subscription settings. */
        subscriptionSettings?: V1SubscriptionSettings;
        /** Subscription options info. */
        subscriptionOptionInfo?: V2SubscriptionOptionInfo;
    }
    interface V2SubscriptionOptionInfo {
        /**
         * Subscription option ID.
         * @internal
         */
        _id?: string | null;
        /** Subscription option title. */
        title?: string;
        /** Subscription option description. */
        description?: string | null;
    }
    interface BillingInfo$1 {
        /** Payment method used for this order */
        paymentMethod?: string | null;
        /**
         * Deprecated (use paymentProviderTransactionId instead)
         * @readonly
         */
        externalTransactionId?: string | null;
        /** Transaction ID from payment provider (e.g., PayPal, Square, Stripe) transaction ID */
        paymentProviderTransactionId?: string | null;
        /** Transaction ID from payment gateway (e.g., Wix Payments) */
        paymentGatewayTransactionId?: string | null;
        /** Full billing address */
        address?: Address$3;
        /**
         * Payment date
         * @readonly
         */
        paidDate?: Date;
        /** Whether order can be refunded by payment provider (manually or automatic) */
        refundableByPaymentProvider?: boolean | null;
    }
    interface DomainEvent$1 extends DomainEventBodyOneOf$1 {
        /** random GUID so clients can tell if event was already handled */
        _id?: string;
        /**
         * Assumes actions are also always typed to an entity_type
         * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
         */
        entityFqdn?: string;
        /**
         * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
         * This is although the created/updated/deleted notion is duplication of the oneof types
         * Example: created/updated/deleted/started/completed/email_opened
         */
        slug?: string;
        /**
         * Assuming that all messages including Actions have id
         * Example: The id of the specific order, the id of a specific campaign
         */
        entityId?: string;
        /** The time of the event. Useful if there was a delay in dispatching */
        eventTime?: Date;
        /**
         * A field that should be set if this event was triggered by an anonymize request.
         * For example you must set it to true when sending an event as a result of a GDPR right to be forgotten request.
         * NOTE: This field is not relevant for `EntityCreatedEvent` but is located here for better ergonomics of consumers.
         */
        triggeredByAnonymizeRequest?: boolean | null;
        /** If present, indicates the action that triggered the event. */
        originatedFrom?: string | null;
        /**
         * A sequence number defining the order of updates to the underlying entity.
         * For example, given that some entity was updated at 16:00 and than again at 16:01,
         * it is guaranteed that the sequence number of the second update is strictly higher than the first.
         * As the consumer, you can use this value to ensure that you handle messages in the correct order.
         * To do so, you will need to persist this number on your end, and compare the sequence number from the
         * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
         */
        entityEventSequence?: string | null;
        createdEvent?: EntityCreatedEvent$1;
        updatedEvent?: EntityUpdatedEvent$1;
        deletedEvent?: EntityDeletedEvent$1;
        actionEvent?: ActionEvent$1;
        extendedFieldsUpdatedEvent?: ExtendedFieldsUpdatedEvent$1;
    }
    /** @oneof */
    interface DomainEventBodyOneOf$1 {
        createdEvent?: EntityCreatedEvent$1;
        updatedEvent?: EntityUpdatedEvent$1;
        deletedEvent?: EntityDeletedEvent$1;
        actionEvent?: ActionEvent$1;
        extendedFieldsUpdatedEvent?: ExtendedFieldsUpdatedEvent$1;
    }
    interface EntityCreatedEvent$1 {
        entityAsJson?: string;
        /**
         * Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity
         * @internal
         */
        triggeredByUndelete?: boolean | null;
    }
    interface EntityUpdatedEvent$1 {
        /**
         * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
         * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
         * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
         */
        currentEntityAsJson?: string;
        /**
         * This field is currently part of the of the EntityUpdatedEvent msg, but scala/node libraries which implements the domain events standard
         * wont populate it / have any reference to it in the API.
         * The main reason for it is that fetching the old entity from the DB will have a performance hit on an update operation so unless truly needed,
         * the developer should send only the new (current) entity.
         * An additional reason is not wanting to send this additional entity over the wire (kafka) since in some cases it can be really big
         * Developers that must reflect the old entity will have to implement their own domain event sender mechanism which will follow the DomainEvent proto message.
         * @internal
         */
        previousEntityAsJson?: string | null;
    }
    interface EntityDeletedEvent$1 {
        /**
         * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
         * @internal
         */
        movedToTrash?: boolean | null;
    }
    interface ActionEvent$1 {
        bodyAsJson?: string;
    }
    interface ExtendedFieldsUpdatedEvent$1 {
        currentEntityAsJson?: string;
    }
    /**
     * Creates a checkout.
     *
     *
     * The `createCheckout()` function returns a Promise that resolves to the new checkout when it's created.
     *
     * > **Notes:**
     * > + Checkout must include at least 1 item in the `options.lineItems` array.
     * > + `options.channelType` is required.
     * > + If `_id` for `options.lineItems` is added, make sure that each `_id` is unique.
     * > + If `options.checkoutInfo.customFields` are added, then `options.checkoutInfo.customFields.value` is required.
     * @public
     * @requiredField options.channelType
     * @requiredField options.checkoutInfo.customFields.value
     * @requiredField options.checkoutInfo.membershipOptions.selectedMemberships.memberships._id
     * @requiredField options.checkoutInfo.membershipOptions.selectedMemberships.memberships.appId
     * @requiredField options.checkoutInfo.membershipOptions.selectedMemberships.memberships.lineItemIds
     * @requiredField options.lineItems.catalogReference
     * @requiredField options.lineItems.catalogReference.appId
     * @requiredField options.lineItems.catalogReference.catalogItemId
     * @param options - Checkout creation options.
     * @returns Fulfilled - the newly created checkout.
     */
    function createCheckout(options?: CreateCheckoutOptions): Promise<Checkout>;
    interface CreateCheckoutOptions {
        /** Checkout information. */
        checkoutInfo?: Checkout;
        /** The code of an existing coupon to apply to checkout. For more information, see the [Coupons API](https://www.wix.com/velo/reference/wix-marketing-backend/coupons). */
        couponCode?: string | null;
        /** Line items to be added to checkout. */
        lineItems?: LineItem$3[];
        /**
         * Custom line items to be added to checkout.
         * @internal
         */
        customLineItems?: CustomLineItem[];
        /**
         * Sales channel that created the checkout. Supported values:
         * + `"WEB"`, `"POS"`, `"EBAY"`, `"AMAZON"`, `"WIX_APP_STORE"`, `"WIX_INVOICES"`, `"BACKOFFICE_MERCHANT"`, `"WISH"`, `"OTHER_PLATFORM"`.
         */
        channelType: ChannelType$2;
        /**
         * Gift card code.
         *
         * >**Note:** Gift cards are supported through the Wix UI, though the SPI is not currently available. Learn more about [Wix Gift Cards](https://support.wix.com/en/article/wix-stores-setting-up-wix-gift-cards).
         */
        giftCardCode?: string | null;
        /**
         * Merchant discounts to apply to specific line items.
         * If no `lineItemIds` are passed, the discount will be applied to the whole checkout.
         *
         * >**Note:** The Manage Stores [permission scope](https://devforum.wix.com/en/article/available-permissions) is required to apply merchant discounts.
         */
        merchantDiscounts?: MerchantDiscountInput$1[];
    }
    /**
     * Retrieves a checkout.
     *
     *
     * The `getCheckout()` function returns a Promise that resolves when the specified checkout is retrieved.
     * @param _id - Checkout ID.
     * @public
     * @requiredField _id
     * @returns Fulfilled - the requested checkout.
     */
    function getCheckout(_id: string, options?: GetCheckoutOptions): Promise<Checkout>;
    interface GetCheckoutOptions {
        /** Whether to refresh the checkout from external sources. Defaults to true. */
        refresh?: boolean | null;
    }
    /**
     * Retrieves the checkout associated with a specified cart.
     * @param _id - Cart ID.
     * @internal
     * @documentationMaturity preview
     * @requiredField _id
     */
    function getCheckoutByCartId(_id: string): Promise<GetCheckoutByCartIdResponse>;
    /** @param _id - Checkout ID.
     * @internal
     * @documentationMaturity preview
     * @requiredField _id
     */
    function getWixCheckoutUrl(_id: string, options?: GetWixCheckoutUrlOptions): Promise<GetWixCheckoutURLResponse>;
    interface GetWixCheckoutUrlOptions {
        /**
         * cart id to compare with for migration period
         * @internal
         */
        cartId?: string | null;
        /**
         * checkout currency parameter to append
         * @internal
         */
        currencyCode?: string | null;
    }
    /**
     * Updates a checkout.
     *
     *
     * The `updateCheckout()` function returns a Promise that resolves to the updated checkout when the specified properties are updated.
     *
     * >**Notes:**
     * > + If nothing is passed in the request, the call will fail.
     * > + The `checkout.buyerInfo.email` may not be removed once it is set.
     * @param _id - Checkout ID.
     * @public
     * @requiredField _id
     * @requiredField checkout
     * @requiredField checkout.customFields.value
     * @requiredField checkout.membershipOptions.selectedMemberships.memberships._id
     * @requiredField checkout.membershipOptions.selectedMemberships.memberships.appId
     * @requiredField checkout.membershipOptions.selectedMemberships.memberships.lineItemIds
     * @param options - Checkout update options.
     * @returns Updated checkout.
     */
    function updateCheckout(_id: string | null, checkout: UpdateCheckout, options?: UpdateCheckoutOptions): Promise<Checkout>;
    interface UpdateCheckout {
        /** Checkout ID. */
        _id?: string | null;
        /**
         * Line items.
         *
         * Max: 300 items
         * @readonly
         */
        lineItems?: LineItem$3[];
        /** Billing information. */
        billingInfo?: AddressWithContact$1;
        /** Shipping information. */
        shippingInfo?: ShippingInfo$1;
        /** [Buyer note](https://support.wix.com/en/article/wix-stores-viewing-buyer-notes) left by the customer. */
        buyerNote?: string | null;
        /** Buyer information. */
        buyerInfo?: BuyerInfo$3;
        /**
         * All converted prices are displayed in this currency in three-letter [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format.
         * @readonly
         */
        conversionCurrency?: string;
        /**
         * Calculated price summary for the checkout.
         * @readonly
         */
        priceSummary?: PriceSummary$2;
        /**
         * Errors when calculating totals.
         * @readonly
         */
        calculationErrors?: CalculationErrors$1;
        /**
         * Applied gift card details.
         *
         * >**Note:** Gift cards are supported through the Wix UI, though the SPI is not currently available. Learn more about [Wix Gift Cards](https://support.wix.com/en/article/wix-stores-setting-up-wix-gift-cards).
         * @readonly
         */
        giftCard?: GiftCard$2;
        /**
         * Applied discounts.
         * @readonly
         */
        appliedDiscounts?: AppliedDiscount$2[];
        /** Custom fields. */
        customFields?: CustomField$2[];
        /**
         * Weight measurement unit - defaults to site's weight unit. Supported values:
         * + `"KG"`
         * + `"LB"`
         * @readonly
         */
        weightUnit?: WeightUnit$3;
        /**
         * Tax summary.
         * @readonly
         */
        taxSummary?: TaxSummary$2;
        /**
         * The currency used when submitting the order.
         * @readonly
         */
        currency?: string;
        /**
         * Sales channel that created the checkout. Supported values:
         * + `"WEB"`, `"POS"`, `"EBAY"`, `"AMAZON"`, `"WIX_APP_STORE"`, `"WIX_INVOICES"`, `"BACKOFFICE_MERCHANT"`, `"WISH"`, `"OTHER_PLATFORM"`.
         * @readonly
         */
        channelType?: ChannelType$2;
        /**
         * Site language in which original values are shown.
         * @readonly
         */
        siteLanguage?: string;
        /**
         * Language for communication with the buyer. Defaults to the site language.
         * For a site that supports multiple languages, this is the language the buyer selected.
         * @readonly
         */
        buyerLanguage?: string;
        /**
         * Whether an order was successfully created from this checkout.
         * For an order to be successful, it must be successfully paid for (unless the total is 0).
         * @readonly
         */
        completed?: boolean;
        /**
         * Whether tax is included in line item prices.
         * @readonly
         */
        taxIncludedInPrice?: boolean;
        /**
         * ID of the checkout's initiator.
         * @readonly
         */
        createdBy?: CreatedBy$1;
        /**
         * Date and time the checkout was created.
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Date and time the checkout was updated.
         * @readonly
         */
        _updatedDate?: Date;
        /**
         * Minimal amount to pay in order to place the order.
         * @readonly
         */
        payNow?: PriceSummary$2;
        /**
         * Remaining amount for the order to be fully paid.
         * @readonly
         */
        payLater?: PriceSummary$2;
        /** Information about valid and invalid memberships, and which ones are selected for usage */
        membershipOptions?: MembershipOptions$1;
        /** Additional Fees. */
        additionalFees?: AdditionalFee$2[];
        /** Cart ID that this checkout was created from. Empty if this checkout wasn't created out of a cart. */
        cartId?: string | null;
        /**
         * Information about the currency conversion that took place if at all. Empty if no conversion took place.
         * @internal
         */
        conversionInfo?: ConversionInfo;
        /** The pay now total amount after gift card reduction */
        payNowTotalAfterGiftCard?: MultiCurrencyPrice$1;
    }
    interface UpdateCheckoutOptions {
        /** The code of an existing coupon to apply to checkout. For more information, see the [Coupons API](https://www.wix.com/velo/reference/wix-marketing-backend/coupons). */
        couponCode?: string | null;
        /** Gift card code. */
        giftCardCode?: string | null;
        /**
         * Set of fields to update. Fields are inferred.
         * @internal
         */
        fieldMask?: string[];
        /**
         * Merchant discounts to apply to specific line items.
         * If no `lineItemIds` are passed, the discount will be applied to the whole checkout.
         *
         * >**Note:** The Manage Stores [permission scope](https://devforum.wix.com/en/article/available-permissions) is required to apply merchant discounts.
         */
        merchantDiscounts?: MerchantDiscountInput$1[];
        /**
         * When true, calculation errors won't fail the update request. When empty or false, the update won't happen and relevant error will return
         * @internal
         */
        ignoreCalculationErrors?: boolean | null;
    }
    /**
     * Removes the coupon from a specified checkout.
     *
     *
     * The `removeCoupon()` function returns a Promise that resolves to the updated checkout when the coupon is removed from the specified checkout.
     *
     * >**Note:** A checkout can only hold 1 coupon.
     * @param _id - ID of the checkout to remove the coupon from.
     * @public
     * @requiredField _id
     */
    function removeCoupon(_id: string): Promise<RemoveCouponResponse>;
    /**
     * Removes the gift card from a specified checkout.
     *
     *
     * The `removeGiftCard()` function returns a Promise that resolves to the updated checkout when the gift card is removed from the specified checkout.
     *
     * >**Note:** A checkout can only hold 1 gift card.
     * @param _id - ID of the checkout to remove the gift card from.
     * @public
     * @requiredField _id
     */
    function removeGiftCard(_id: string): Promise<RemoveGiftCardResponse>;
    /**
     * Adds catalog line items and/or custom line items to a checkout.
     *
     *
     * The `addToCheckout()` function returns a Promise that resolves to the updated checkout when the specified items have been added.
     * > **Note:** When adding catalog items, `options.lineItems.catalogReference` is required.
     * @param _id - Checkout ID.
     * @public
     * @requiredField _id
     * @requiredField options.lineItems.catalogReference
     * @requiredField options.lineItems.catalogReference.appId
     * @requiredField options.lineItems.catalogReference.catalogItemId
     * @param options - Items to be added to checkout.
     */
    function addToCheckout(_id: string, options?: AddToCheckoutOptions): Promise<AddToCheckoutResponse>;
    interface AddToCheckoutOptions {
        /** Catalog line items. */
        lineItems?: LineItem$3[];
        /**
         * Custom line items.
         * @internal
         */
        customLineItems?: CustomLineItem[];
    }
    /**
     * Removes line items from the specified checkout.
     *
     *
     * The `removeLineItems()` function returns a Promise that resolves to the updated checkout when the line items are removed from the specified checkout.
     * @param _id - ID of the checkout to remove line items from.
     * @public
     * @requiredField _id
     * @requiredField lineItemIds
     * @param lineItemIds - IDs of the line items to be removed.
     * To find the IDs of the checkout line items you'd like to remove, pass the `checkout._id` to [getCheckout()](https://www.wix.com/velo/reference/wix-ecom-backend/checkout/getcheckout) and look for the IDs under `lineItems` and/or `customLineItems`.
     */
    function removeLineItems(_id: string, lineItemIds: string[]): Promise<RemoveLineItemsResponse>;
    /**
     * Creates an order from a specified checkout. To see the order after it's created, pass the `orderId` to [getOrder()](https://www.wix.com/velo/reference/wix-ecom-backend/orders/getorder).
     *
     *
     * The `createOrder()` function returns a Promise that resolves to the new order's ID and `paymentGatewayOrderID` when the order is created.
     * Some properties are marked as required. Note these further requirements:
     *
     * + To create an order, `checkout.calculationErrors` must be empty. Pass the checkout ID to [getCheckout()](https://www.wix.com/velo/reference/wix-ecom-backend/checkout/getcheckout) to check for errors.
     * + The `checkout.billingInfo.address` property is required if there is a payment to be made OR checkout has any shippable line items (`checkout.lineItems.physicalProperties.shippable: true`). This does not apply when `checkout.channelType` value is `"POS"`.
     * + If checkout has changed since last update (for example, item prices have changed or the coupon has expired), order will not be created.
     *
     * Line item requirements:
     * + Order can only be created if all of the `checkout.lineItems` have an `availability.status` of `"AVAILABLE"` or `"PARTIALLY_AVAILABLE"`.
     * + Before creating the order, remove line items with `availability.status` of `"NOT_AVAILABLE"` and `"NOT_FOUND"` using [removeLineItems()](https://www.wix.com/velo/reference/wix-ecom-backend/checkout/remove-line-items).
     * + If a line item is digital ( `checkout.lineItems[n].itemType.preset: DIGITAL` ), then `checkout.lineItems[n].digitalFile` must be provided.
     *
     * When checkout has any shippable line items (`checkout.lineItems.physicalProperties.shippable: true`), the following rules apply:
     * + `checkout.shippingInfo.shippingDestination.address` must have value. This does not apply when `checkout.channelType` value is `"POS"` or when order is for pickup.
     * + `checkout.shippingInfo.selectedCarrierServiceOption` must have value. This does not apply when `checkout.channelType` value is `"POS"` or when order is for pickup.
     * @param _id - Checkout ID.
     * @internal
     * @documentationMaturity preview
     * @requiredField _id
     * @param options - Further order creation options.
     */
    function createOrder$1(_id: string, options?: CreateOrderOptions): Promise<CreateOrderResponse$1>;
    interface CreateOrderOptions {
        /**
         * Custom URL params to be added to redirect URLs.
         * @internal
         */
        urlParams?: Record<string, string>;
    }
    /**
     * Deprecated (use createOrder instead)
     * @param _id - Checkout ID.
     * @internal
     * @documentationMaturity preview
     * @requiredField _id
     */
    function createOrderAndCharge(_id: string, options?: CreateOrderAndChargeOptions): Promise<CreateOrderAndChargeResponse>;
    interface CreateOrderAndChargeOptions {
        /** Payment token. */
        paymentToken?: string | null;
        /**
         * Custom URL params to be added to redirect URLs.
         * @internal
         */
        urlParams?: Record<string, string>;
    }
    /**
     * Marks a checkout as completed - `checkout.complete` boolean is set to `true`.
     *
     *
     * The `markCheckoutAsCompleted()` function returns a Promise that resolves when the specified checkout is marked as completed.
     * @param _id - Checkout ID.
     * @public
     * @requiredField _id
     */
    function markCheckoutAsCompleted(_id: string): Promise<void>;
    type ecomV1CheckoutCheckout_universal_d_Checkout = Checkout;
    type ecomV1CheckoutCheckout_universal_d_ItemAvailabilityInfo = ItemAvailabilityInfo;
    type ecomV1CheckoutCheckout_universal_d_ItemAvailabilityStatus = ItemAvailabilityStatus;
    const ecomV1CheckoutCheckout_universal_d_ItemAvailabilityStatus: typeof ItemAvailabilityStatus;
    type ecomV1CheckoutCheckout_universal_d_Title = Title;
    type ecomV1CheckoutCheckout_universal_d_Description = Description;
    type ecomV1CheckoutCheckout_universal_d_SecuredMedia = SecuredMedia;
    type ecomV1CheckoutCheckout_universal_d_FileType = FileType;
    const ecomV1CheckoutCheckout_universal_d_FileType: typeof FileType;
    type ecomV1CheckoutCheckout_universal_d_ApiAddress = ApiAddress;
    type ecomV1CheckoutCheckout_universal_d_CommonVatId = CommonVatId;
    type ecomV1CheckoutCheckout_universal_d_CommonVatType = CommonVatType;
    const ecomV1CheckoutCheckout_universal_d_CommonVatType: typeof CommonVatType;
    type ecomV1CheckoutCheckout_universal_d_CreatedByIdOneOf = CreatedByIdOneOf;
    type ecomV1CheckoutCheckout_universal_d_ConversionInfo = ConversionInfo;
    type ecomV1CheckoutCheckout_universal_d_UpdatedCheckoutMessage = UpdatedCheckoutMessage;
    type ecomV1CheckoutCheckout_universal_d_CreateCheckoutRequest = CreateCheckoutRequest;
    type ecomV1CheckoutCheckout_universal_d_CustomLineItem = CustomLineItem;
    type ecomV1CheckoutCheckout_universal_d_CreateCheckoutResponse = CreateCheckoutResponse;
    type ecomV1CheckoutCheckout_universal_d_ShippingCalculationErrorData = ShippingCalculationErrorData;
    type ecomV1CheckoutCheckout_universal_d_ShippingCalculationErrorDataShippingCalculationErrorOneOf = ShippingCalculationErrorDataShippingCalculationErrorOneOf;
    type ecomV1CheckoutCheckout_universal_d_GetCheckoutRequest = GetCheckoutRequest;
    type ecomV1CheckoutCheckout_universal_d_GetCheckoutResponse = GetCheckoutResponse;
    type ecomV1CheckoutCheckout_universal_d_GetCheckoutByCartIdRequest = GetCheckoutByCartIdRequest;
    type ecomV1CheckoutCheckout_universal_d_GetCheckoutByCartIdResponse = GetCheckoutByCartIdResponse;
    type ecomV1CheckoutCheckout_universal_d_GetWixCheckoutURLRequest = GetWixCheckoutURLRequest;
    type ecomV1CheckoutCheckout_universal_d_GetWixCheckoutURLResponse = GetWixCheckoutURLResponse;
    type ecomV1CheckoutCheckout_universal_d_UpdateCheckoutRequest = UpdateCheckoutRequest;
    type ecomV1CheckoutCheckout_universal_d_UpdateCheckoutResponse = UpdateCheckoutResponse;
    type ecomV1CheckoutCheckout_universal_d_RemoveCouponRequest = RemoveCouponRequest;
    type ecomV1CheckoutCheckout_universal_d_RemoveCouponResponse = RemoveCouponResponse;
    type ecomV1CheckoutCheckout_universal_d_RemoveGiftCardRequest = RemoveGiftCardRequest;
    type ecomV1CheckoutCheckout_universal_d_RemoveGiftCardResponse = RemoveGiftCardResponse;
    type ecomV1CheckoutCheckout_universal_d_AddToCheckoutRequest = AddToCheckoutRequest;
    type ecomV1CheckoutCheckout_universal_d_AddToCheckoutResponse = AddToCheckoutResponse;
    type ecomV1CheckoutCheckout_universal_d_RemoveLineItemsRequest = RemoveLineItemsRequest;
    type ecomV1CheckoutCheckout_universal_d_RemoveLineItemsResponse = RemoveLineItemsResponse;
    type ecomV1CheckoutCheckout_universal_d_CreateOrderResponseIdOneOf = CreateOrderResponseIdOneOf;
    type ecomV1CheckoutCheckout_universal_d_PaymentErrorResponseData = PaymentErrorResponseData;
    type ecomV1CheckoutCheckout_universal_d_DoublePaymentErrorData = DoublePaymentErrorData;
    type ecomV1CheckoutCheckout_universal_d_DoublePaymentErrorDataIdOneOf = DoublePaymentErrorDataIdOneOf;
    type ecomV1CheckoutCheckout_universal_d_RedeemErrorData = RedeemErrorData;
    type ecomV1CheckoutCheckout_universal_d_CreateOrderAndChargeRequest = CreateOrderAndChargeRequest;
    type ecomV1CheckoutCheckout_universal_d_CreateOrderAndChargeResponse = CreateOrderAndChargeResponse;
    type ecomV1CheckoutCheckout_universal_d_CreateOrderAndChargeResponseIdOneOf = CreateOrderAndChargeResponseIdOneOf;
    type ecomV1CheckoutCheckout_universal_d_MarkCheckoutAsCompletedRequest = MarkCheckoutAsCompletedRequest;
    type ecomV1CheckoutCheckout_universal_d_MarkCheckoutAsCompletedResponse = MarkCheckoutAsCompletedResponse;
    type ecomV1CheckoutCheckout_universal_d_CheckoutMarkedAsCompleted = CheckoutMarkedAsCompleted;
    type ecomV1CheckoutCheckout_universal_d_SubscriptionCreated = SubscriptionCreated;
    type ecomV1CheckoutCheckout_universal_d_Subscription = Subscription;
    type ecomV1CheckoutCheckout_universal_d_V1BuyerInfo = V1BuyerInfo;
    type ecomV1CheckoutCheckout_universal_d_V1IdentityType = V1IdentityType;
    const ecomV1CheckoutCheckout_universal_d_V1IdentityType: typeof V1IdentityType;
    type ecomV1CheckoutCheckout_universal_d_V1LineItem = V1LineItem;
    type ecomV1CheckoutCheckout_universal_d_ChargeDetails = ChargeDetails;
    type ecomV1CheckoutCheckout_universal_d_ProductDetails = ProductDetails;
    type ecomV1CheckoutCheckout_universal_d_V1Totals = V1Totals;
    type ecomV1CheckoutCheckout_universal_d_StoreSettings = StoreSettings;
    type ecomV1CheckoutCheckout_universal_d_V1ShippingInfo = V1ShippingInfo;
    type ecomV1CheckoutCheckout_universal_d_V1ShippingInfoDetailsOneOf = V1ShippingInfoDetailsOneOf;
    type ecomV1CheckoutCheckout_universal_d_V1PickupDetails = V1PickupDetails;
    type ecomV1CheckoutCheckout_universal_d_V1AppliedCoupon = V1AppliedCoupon;
    type ecomV1CheckoutCheckout_universal_d_V1CustomField = V1CustomField;
    type ecomV1CheckoutCheckout_universal_d_V1SubscriptionOptionInfo = V1SubscriptionOptionInfo;
    type ecomV1CheckoutCheckout_universal_d_DiscountDiscountType = DiscountDiscountType;
    const ecomV1CheckoutCheckout_universal_d_DiscountDiscountType: typeof DiscountDiscountType;
    type ecomV1CheckoutCheckout_universal_d_ChannelInfoChannelType = ChannelInfoChannelType;
    const ecomV1CheckoutCheckout_universal_d_ChannelInfoChannelType: typeof ChannelInfoChannelType;
    type ecomV1CheckoutCheckout_universal_d_V1SubscriptionSettings = V1SubscriptionSettings;
    type ecomV1CheckoutCheckout_universal_d_V1BillingInfo = V1BillingInfo;
    type ecomV1CheckoutCheckout_universal_d_OrderCreated = OrderCreated;
    type ecomV1CheckoutCheckout_universal_d_V2BuyerInfo = V2BuyerInfo;
    type ecomV1CheckoutCheckout_universal_d_V2SubscriptionOptionInfo = V2SubscriptionOptionInfo;
    const ecomV1CheckoutCheckout_universal_d_createCheckout: typeof createCheckout;
    type ecomV1CheckoutCheckout_universal_d_CreateCheckoutOptions = CreateCheckoutOptions;
    const ecomV1CheckoutCheckout_universal_d_getCheckout: typeof getCheckout;
    type ecomV1CheckoutCheckout_universal_d_GetCheckoutOptions = GetCheckoutOptions;
    const ecomV1CheckoutCheckout_universal_d_getCheckoutByCartId: typeof getCheckoutByCartId;
    const ecomV1CheckoutCheckout_universal_d_getWixCheckoutUrl: typeof getWixCheckoutUrl;
    type ecomV1CheckoutCheckout_universal_d_GetWixCheckoutUrlOptions = GetWixCheckoutUrlOptions;
    const ecomV1CheckoutCheckout_universal_d_updateCheckout: typeof updateCheckout;
    type ecomV1CheckoutCheckout_universal_d_UpdateCheckout = UpdateCheckout;
    type ecomV1CheckoutCheckout_universal_d_UpdateCheckoutOptions = UpdateCheckoutOptions;
    const ecomV1CheckoutCheckout_universal_d_removeCoupon: typeof removeCoupon;
    const ecomV1CheckoutCheckout_universal_d_removeGiftCard: typeof removeGiftCard;
    const ecomV1CheckoutCheckout_universal_d_addToCheckout: typeof addToCheckout;
    type ecomV1CheckoutCheckout_universal_d_AddToCheckoutOptions = AddToCheckoutOptions;
    const ecomV1CheckoutCheckout_universal_d_removeLineItems: typeof removeLineItems;
    type ecomV1CheckoutCheckout_universal_d_CreateOrderOptions = CreateOrderOptions;
    const ecomV1CheckoutCheckout_universal_d_createOrderAndCharge: typeof createOrderAndCharge;
    type ecomV1CheckoutCheckout_universal_d_CreateOrderAndChargeOptions = CreateOrderAndChargeOptions;
    const ecomV1CheckoutCheckout_universal_d_markCheckoutAsCompleted: typeof markCheckoutAsCompleted;
    namespace ecomV1CheckoutCheckout_universal_d {
        export { __debug$4 as __debug, ecomV1CheckoutCheckout_universal_d_Checkout as Checkout, LineItem$3 as LineItem, CatalogReference$2 as CatalogReference, ProductName$1 as ProductName, MultiCurrencyPrice$1 as MultiCurrencyPrice, ItemTaxFullDetails$2 as ItemTaxFullDetails, TaxRateBreakdown$1 as TaxRateBreakdown, DescriptionLine$1 as DescriptionLine, DescriptionLineValueOneOf$1 as DescriptionLineValueOneOf, DescriptionLineDescriptionLineValueOneOf$1 as DescriptionLineDescriptionLineValueOneOf, DescriptionLineName$1 as DescriptionLineName, PlainTextValue$1 as PlainTextValue, Color$1 as Color, DescriptionLineType$1 as DescriptionLineType, ecomV1CheckoutCheckout_universal_d_ItemAvailabilityInfo as ItemAvailabilityInfo, ecomV1CheckoutCheckout_universal_d_ItemAvailabilityStatus as ItemAvailabilityStatus, PhysicalProperties$2 as PhysicalProperties, Scope$1 as Scope, Group$1 as Group, ItemType$1 as ItemType, ItemTypeItemTypeDataOneOf$1 as ItemTypeItemTypeDataOneOf, ItemTypeItemType$1 as ItemTypeItemType, SubscriptionOptionInfo$1 as SubscriptionOptionInfo, SubscriptionSettings$3 as SubscriptionSettings, SubscriptionFrequency$3 as SubscriptionFrequency, ecomV1CheckoutCheckout_universal_d_Title as Title, ecomV1CheckoutCheckout_universal_d_Description as Description, ecomV1CheckoutCheckout_universal_d_SecuredMedia as SecuredMedia, ecomV1CheckoutCheckout_universal_d_FileType as FileType, PaymentOptionType$2 as PaymentOptionType, ServiceProperties$1 as ServiceProperties, PriceDescription$1 as PriceDescription, AddressWithContact$1 as AddressWithContact, ecomV1CheckoutCheckout_universal_d_ApiAddress as ApiAddress, StreetAddress$2 as StreetAddress, FullAddressContactDetails$1 as FullAddressContactDetails, ecomV1CheckoutCheckout_universal_d_CommonVatId as CommonVatId, ecomV1CheckoutCheckout_universal_d_CommonVatType as CommonVatType, ShippingInfo$1 as ShippingInfo, SelectedCarrierServiceOption$1 as SelectedCarrierServiceOption, DeliveryLogistics$2 as DeliveryLogistics, PickupDetails$3 as PickupDetails, PickupMethod$2 as PickupMethod, SelectedCarrierServiceOptionPrices$1 as SelectedCarrierServiceOptionPrices, SelectedCarrierServiceOptionOtherCharge$1 as SelectedCarrierServiceOptionOtherCharge, ChargeType$1 as ChargeType, ShippingRegion$2 as ShippingRegion, CarrierServiceOption$1 as CarrierServiceOption, ShippingOption$1 as ShippingOption, ShippingPrice$2 as ShippingPrice, OtherCharge$1 as OtherCharge, BuyerInfo$3 as BuyerInfo, BuyerInfoIdOneOf$1 as BuyerInfoIdOneOf, PriceSummary$2 as PriceSummary, CalculationErrors$1 as CalculationErrors, CalculationErrorsShippingCalculationErrorOneOf$1 as CalculationErrorsShippingCalculationErrorOneOf, Details$1 as Details, DetailsKindOneOf$1 as DetailsKindOneOf, ApplicationError$4 as ApplicationError, ValidationError$1 as ValidationError, RuleType$1 as RuleType, FieldViolation$1 as FieldViolation, CarrierErrors$1 as CarrierErrors, CarrierError$1 as CarrierError, GiftCard$2 as GiftCard, AppliedDiscount$2 as AppliedDiscount, AppliedDiscountDiscountSourceOneOf$2 as AppliedDiscountDiscountSourceOneOf, DiscountType$2 as DiscountType, Coupon$2 as Coupon, MerchantDiscount$2 as MerchantDiscount, DiscountRule$2 as DiscountRule, DiscountRuleName$2 as DiscountRuleName, CustomField$2 as CustomField, WeightUnit$3 as WeightUnit, TaxSummary$2 as TaxSummary, TaxCalculationDetails$1 as TaxCalculationDetails, TaxCalculationDetailsCalculationDetailsOneOf$1 as TaxCalculationDetailsCalculationDetailsOneOf, RateType$1 as RateType, ManualCalculationReason$1 as ManualCalculationReason, AutoTaxFallbackCalculationDetails$1 as AutoTaxFallbackCalculationDetails, FallbackReason$1 as FallbackReason, ChannelType$2 as ChannelType, CreatedBy$1 as CreatedBy, ecomV1CheckoutCheckout_universal_d_CreatedByIdOneOf as CreatedByIdOneOf, MembershipOptions$1 as MembershipOptions, Membership$1 as Membership, MembershipName$2 as MembershipName, MembershipPaymentCredits$1 as MembershipPaymentCredits, InvalidMembership$1 as InvalidMembership, SelectedMemberships$1 as SelectedMemberships, SelectedMembership$1 as SelectedMembership, AdditionalFee$2 as AdditionalFee, ecomV1CheckoutCheckout_universal_d_ConversionInfo as ConversionInfo, ecomV1CheckoutCheckout_universal_d_UpdatedCheckoutMessage as UpdatedCheckoutMessage, ecomV1CheckoutCheckout_universal_d_CreateCheckoutRequest as CreateCheckoutRequest, ecomV1CheckoutCheckout_universal_d_CustomLineItem as CustomLineItem, MerchantDiscountInput$1 as MerchantDiscountInput, ecomV1CheckoutCheckout_universal_d_CreateCheckoutResponse as CreateCheckoutResponse, ecomV1CheckoutCheckout_universal_d_ShippingCalculationErrorData as ShippingCalculationErrorData, ecomV1CheckoutCheckout_universal_d_ShippingCalculationErrorDataShippingCalculationErrorOneOf as ShippingCalculationErrorDataShippingCalculationErrorOneOf, ecomV1CheckoutCheckout_universal_d_GetCheckoutRequest as GetCheckoutRequest, ecomV1CheckoutCheckout_universal_d_GetCheckoutResponse as GetCheckoutResponse, ecomV1CheckoutCheckout_universal_d_GetCheckoutByCartIdRequest as GetCheckoutByCartIdRequest, ecomV1CheckoutCheckout_universal_d_GetCheckoutByCartIdResponse as GetCheckoutByCartIdResponse, ecomV1CheckoutCheckout_universal_d_GetWixCheckoutURLRequest as GetWixCheckoutURLRequest, ecomV1CheckoutCheckout_universal_d_GetWixCheckoutURLResponse as GetWixCheckoutURLResponse, ecomV1CheckoutCheckout_universal_d_UpdateCheckoutRequest as UpdateCheckoutRequest, ecomV1CheckoutCheckout_universal_d_UpdateCheckoutResponse as UpdateCheckoutResponse, ecomV1CheckoutCheckout_universal_d_RemoveCouponRequest as RemoveCouponRequest, ecomV1CheckoutCheckout_universal_d_RemoveCouponResponse as RemoveCouponResponse, ecomV1CheckoutCheckout_universal_d_RemoveGiftCardRequest as RemoveGiftCardRequest, ecomV1CheckoutCheckout_universal_d_RemoveGiftCardResponse as RemoveGiftCardResponse, ecomV1CheckoutCheckout_universal_d_AddToCheckoutRequest as AddToCheckoutRequest, ecomV1CheckoutCheckout_universal_d_AddToCheckoutResponse as AddToCheckoutResponse, ecomV1CheckoutCheckout_universal_d_RemoveLineItemsRequest as RemoveLineItemsRequest, ecomV1CheckoutCheckout_universal_d_RemoveLineItemsResponse as RemoveLineItemsResponse, CreateOrderRequest$1 as CreateOrderRequest, CreateOrderResponse$1 as CreateOrderResponse, ecomV1CheckoutCheckout_universal_d_CreateOrderResponseIdOneOf as CreateOrderResponseIdOneOf, ecomV1CheckoutCheckout_universal_d_PaymentErrorResponseData as PaymentErrorResponseData, ecomV1CheckoutCheckout_universal_d_DoublePaymentErrorData as DoublePaymentErrorData, ecomV1CheckoutCheckout_universal_d_DoublePaymentErrorDataIdOneOf as DoublePaymentErrorDataIdOneOf, ecomV1CheckoutCheckout_universal_d_RedeemErrorData as RedeemErrorData, ecomV1CheckoutCheckout_universal_d_CreateOrderAndChargeRequest as CreateOrderAndChargeRequest, ecomV1CheckoutCheckout_universal_d_CreateOrderAndChargeResponse as CreateOrderAndChargeResponse, ecomV1CheckoutCheckout_universal_d_CreateOrderAndChargeResponseIdOneOf as CreateOrderAndChargeResponseIdOneOf, ecomV1CheckoutCheckout_universal_d_MarkCheckoutAsCompletedRequest as MarkCheckoutAsCompletedRequest, ecomV1CheckoutCheckout_universal_d_MarkCheckoutAsCompletedResponse as MarkCheckoutAsCompletedResponse, ecomV1CheckoutCheckout_universal_d_CheckoutMarkedAsCompleted as CheckoutMarkedAsCompleted, ecomV1CheckoutCheckout_universal_d_SubscriptionCreated as SubscriptionCreated, ecomV1CheckoutCheckout_universal_d_Subscription as Subscription, ecomV1CheckoutCheckout_universal_d_V1BuyerInfo as V1BuyerInfo, ecomV1CheckoutCheckout_universal_d_V1IdentityType as V1IdentityType, ecomV1CheckoutCheckout_universal_d_V1LineItem as V1LineItem, OptionSelection$1 as OptionSelection, CustomTextFieldSelection$1 as CustomTextFieldSelection, ecomV1CheckoutCheckout_universal_d_ChargeDetails as ChargeDetails, ecomV1CheckoutCheckout_universal_d_ProductDetails as ProductDetails, LineItemType$1 as LineItemType, MediaItem$1 as MediaItem, MediaItemType$1 as MediaItemType, ecomV1CheckoutCheckout_universal_d_V1Totals as V1Totals, ecomV1CheckoutCheckout_universal_d_StoreSettings as StoreSettings, Address$3 as Address, AddressAddressLine1OptionsOneOf$1 as AddressAddressLine1OptionsOneOf, FullName$1 as FullName, Street$1 as Street, VatId$2 as VatId, VatType$2 as VatType, ecomV1CheckoutCheckout_universal_d_V1ShippingInfo as V1ShippingInfo, ecomV1CheckoutCheckout_universal_d_V1ShippingInfoDetailsOneOf as V1ShippingInfoDetailsOneOf, ShipmentDetails$1 as ShipmentDetails, ecomV1CheckoutCheckout_universal_d_V1PickupDetails as V1PickupDetails, PickupAddress$2 as PickupAddress, ecomV1CheckoutCheckout_universal_d_V1AppliedCoupon as V1AppliedCoupon, ecomV1CheckoutCheckout_universal_d_V1CustomField as V1CustomField, ecomV1CheckoutCheckout_universal_d_V1SubscriptionOptionInfo as V1SubscriptionOptionInfo, Discount$2 as Discount, ecomV1CheckoutCheckout_universal_d_DiscountDiscountType as DiscountDiscountType, ChannelInfo$2 as ChannelInfo, ecomV1CheckoutCheckout_universal_d_ChannelInfoChannelType as ChannelInfoChannelType, ecomV1CheckoutCheckout_universal_d_V1SubscriptionSettings as V1SubscriptionSettings, ecomV1CheckoutCheckout_universal_d_V1BillingInfo as V1BillingInfo, Empty$1 as Empty, ecomV1CheckoutCheckout_universal_d_OrderCreated as OrderCreated, ecomV1CheckoutCheckout_universal_d_V2BuyerInfo as V2BuyerInfo, IdentityType$2 as IdentityType, Totals$1 as Totals, PaymentStatus$2 as PaymentStatus, FulfillmentStatus$3 as FulfillmentStatus, OrdersExperiments$1 as OrdersExperiments, AppliedCoupon$1 as AppliedCoupon, SubscriptionInfo$2 as SubscriptionInfo, ecomV1CheckoutCheckout_universal_d_V2SubscriptionOptionInfo as V2SubscriptionOptionInfo, BillingInfo$1 as BillingInfo, DomainEvent$1 as DomainEvent, DomainEventBodyOneOf$1 as DomainEventBodyOneOf, EntityCreatedEvent$1 as EntityCreatedEvent, EntityUpdatedEvent$1 as EntityUpdatedEvent, EntityDeletedEvent$1 as EntityDeletedEvent, ActionEvent$1 as ActionEvent, ExtendedFieldsUpdatedEvent$1 as ExtendedFieldsUpdatedEvent, ecomV1CheckoutCheckout_universal_d_createCheckout as createCheckout, ecomV1CheckoutCheckout_universal_d_CreateCheckoutOptions as CreateCheckoutOptions, ecomV1CheckoutCheckout_universal_d_getCheckout as getCheckout, ecomV1CheckoutCheckout_universal_d_GetCheckoutOptions as GetCheckoutOptions, ecomV1CheckoutCheckout_universal_d_getCheckoutByCartId as getCheckoutByCartId, ecomV1CheckoutCheckout_universal_d_getWixCheckoutUrl as getWixCheckoutUrl, ecomV1CheckoutCheckout_universal_d_GetWixCheckoutUrlOptions as GetWixCheckoutUrlOptions, ecomV1CheckoutCheckout_universal_d_updateCheckout as updateCheckout, ecomV1CheckoutCheckout_universal_d_UpdateCheckout as UpdateCheckout, ecomV1CheckoutCheckout_universal_d_UpdateCheckoutOptions as UpdateCheckoutOptions, ecomV1CheckoutCheckout_universal_d_removeCoupon as removeCoupon, ecomV1CheckoutCheckout_universal_d_removeGiftCard as removeGiftCard, ecomV1CheckoutCheckout_universal_d_addToCheckout as addToCheckout, ecomV1CheckoutCheckout_universal_d_AddToCheckoutOptions as AddToCheckoutOptions, ecomV1CheckoutCheckout_universal_d_removeLineItems as removeLineItems, createOrder$1 as createOrder, ecomV1CheckoutCheckout_universal_d_CreateOrderOptions as CreateOrderOptions, ecomV1CheckoutCheckout_universal_d_createOrderAndCharge as createOrderAndCharge, ecomV1CheckoutCheckout_universal_d_CreateOrderAndChargeOptions as CreateOrderAndChargeOptions, ecomV1CheckoutCheckout_universal_d_markCheckoutAsCompleted as markCheckoutAsCompleted, };
    }
    const __debug$3: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface OrderWithFulfillments {
        /** Order ID. */
        orderId?: string;
        /** Fulfillments associated with the order. */
        fulfillments?: Fulfillment$1[];
    }
    /** for now, this is a sub-object of Orders, so can refer to order line items by id. */
    interface Fulfillment$1 {
        /**
         * Fulfillment ID.
         * @readonly
         */
        _id?: string | null;
        /**
         * Fulfillment creation date and time in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format.
         * @readonly
         */
        _createdDate?: Date;
        /** Line items being fulfilled. */
        lineItems?: FulfillmentLineItem$1[];
        /** Fulfillment tracking info. */
        trackingInfo?: FulfillmentTrackingInfo$1;
    }
    interface FulfillmentLineItem$1 {
        /** Line item ID (mirrors the ID of the order line item). */
        _id?: string;
        /**
         * Line item quantity.
         * * On creation, if this parameter isn't passed, the new fulfillment will automatically include all items of this line item that have not already been linked to a fulfillment.
         * * If the order does not have the requested quantity of line items available to add to this fulfillment, the fulfillment will not be created and an error will be returned.
         * * This property will always have a value when returned.
         */
        quantity?: number | null;
    }
    interface FulfillmentTrackingInfo$1 {
        /** Tracking number. */
        trackingNumber?: string | null;
        /**
         * Shipping provider. Using the following shipping providers will allow for auto-filling the tracking link:
         * * `fedex`
         * * `ups`
         * * `usps`
         * * `dhl`
         * * `canadaPost`
         */
        shippingProvider?: string | null;
        /** Tracking link - auto-filled if using a predefined shipping provider, otherwise provided on creation. */
        trackingLink?: string | null;
    }
    interface DiffmatokyPayload$2 {
        left?: string;
        right?: string;
        compareChannel?: string;
        entityId?: string;
        errorInformation?: ErrorInformation$2;
        tags?: string[];
    }
    interface ErrorInformation$2 {
        stackTrace?: string;
    }
    interface SnapshotMessage$2 {
        _id?: string;
        opType?: number;
    }
    interface IndexingMessage$2 {
        _id?: string;
        opType?: number;
        requiredVersions?: string[];
    }
    interface FulfillmentCreated {
        /** Order ID (auto generated upon order creation). */
        orderId?: string;
        /** ID of the newly created fulfillment. */
        fulfillmentId?: string;
        /** Fulfillment creation date and time. */
        dateCreated?: Date;
        /** Buyer information. */
        buyerInfo?: BuyerInfo$2;
        /** Order fulfillment status. */
        fulfillmentStatus?: FulfillmentStatus$2;
        /** Fulfillment tracking information. */
        trackingInfo?: V2FulfillmentTrackingInfo;
    }
    /** Buyer Info */
    interface BuyerInfo$2 {
        /** Wix customer ID */
        _id?: string | null;
        /**
         * Deprecated (use identityType instead)
         * @readonly
         */
        type?: IdentityType$1;
        /** Customer type */
        identityType?: IdentityType$1;
        /**
         * Customer's first name
         * @readonly
         */
        firstName?: string;
        /**
         * Customer's last name
         * @readonly
         */
        lastName?: string;
        /**
         * Customer's phone number
         * @readonly
         */
        phone?: string | null;
        /**
         * Customer's email address
         * @readonly
         */
        email?: string;
        /**
         * Contact Id. needed for cases where the user is the buyer and so it doesn't exist on the buyer info
         * @internal
         * @readonly
         */
        contactId?: string | null;
    }
    enum IdentityType$1 {
        UNSPECIFIED_IDENTITY_TYPE = "UNSPECIFIED_IDENTITY_TYPE",
        /** Site member */
        MEMBER = "MEMBER",
        /** Contact */
        CONTACT = "CONTACT"
    }
    enum FulfillmentStatus$2 {
        /** None of the order items are fulfilled */
        NOT_FULFILLED = "NOT_FULFILLED",
        /**
         * All of the order items are fulfilled
         * Orders without shipping info are fulfilled automatically
         */
        FULFILLED = "FULFILLED",
        /** Order is canceled */
        CANCELED = "CANCELED",
        /** Some, but not all of the order items are fulfilled */
        PARTIALLY_FULFILLED = "PARTIALLY_FULFILLED"
    }
    interface V2FulfillmentTrackingInfo {
        /** Tracking number. */
        trackingNumber?: string;
        /**
         * Shipping provider. Using the following shipping providers will allow for autofilling the tracking link:
         * * `fedex`
         * * `ups`
         * * `usps`
         * * `dhl`
         * * `canadaPost`
         */
        shippingProvider?: string;
        /** Tracking link - autofilled if using a predefined shipping provider, otherwise provided on creation. */
        trackingLink?: string | null;
    }
    interface FulfillmentUpdated {
        /** Order ID (auto generated upon order creation). */
        orderId?: string;
        /** ID of the updated fulfillment. */
        fulfillmentId?: string;
        /** Fulfillment tracking information. */
        trackingInfo?: V2FulfillmentTrackingInfo;
    }
    interface FulfillmentDeleted {
        /** Order ID (auto generated upon order creation). */
        orderId?: string;
        /** ID of the deleted fulfillment. */
        fulfillmentId?: string;
        /** Order fulfillment status. */
        fulfillmentStatus?: FulfillmentStatus$2;
    }
    interface ListFulfillmentsForSingleOrderRequest {
        /** Order ID for which to retrieve fulfillments. */
        orderId: string;
    }
    interface ListFulfillmentsForSingleOrderResponse {
        /** List of fulfillments associated with the order. */
        orderWithFulfillments?: OrderWithFulfillments;
    }
    interface ListFulfillmentsForMultipleOrdersRequest {
        /** Order IDs for which to retrieve fulfillments. */
        orderIds: string[];
    }
    interface ListFulfillmentsForMultipleOrdersResponse {
        /** List of order IDs and their associated fulfillments. */
        ordersWithFulfillments?: OrderWithFulfillments[];
    }
    interface CreateFulfillmentRequest {
        /** Order ID. */
        orderId: string;
        /** Fulfillment info. */
        fulfillment: Fulfillment$1;
    }
    interface CreateFulfillmentResponse {
        /** Order ID and the orders' fulfillments. */
        orderWithFulfillments?: OrderWithFulfillments;
        /** ID of created fulfillment. */
        fulfillmentId?: string;
    }
    interface UpdateFulfillmentRequest {
        /** Order ID. */
        orderId: string;
        /** Fulfillment info to update. */
        fulfillment?: Fulfillment$1;
        /** Set of fields to update. Fields that aren't included in `fieldMask.paths` are ignored. */
        fieldMask?: string[];
    }
    interface UpdateFulfillmentResponse {
        /** Order ID and the orders' associated fulfillments after update. */
        orderWithFulfillments?: OrderWithFulfillments;
    }
    interface DeleteFulfillmentRequest {
        /** Order ID. */
        orderId: string;
        /** IDs of fulfillments to delete. */
        fulfillmentId: string;
    }
    interface DeleteFulfillmentResponse {
        /** Order ID and the orders' associated fulfillments after deletion. */
        orderWithFulfillments?: OrderWithFulfillments;
    }
    interface BulkCreateFulfillmentRequest {
        ordersWithFulfillments: BulkCreateOrderWithFulfillments[];
    }
    interface BulkCreateOrderWithFulfillments {
        /** Order ID. */
        orderId?: string;
        /** Fulfillments associated with the order. */
        fulfillments?: Fulfillment$1[];
    }
    interface BulkCreateFulfillmentResponse {
        /** Items updated by bulk action. */
        results?: BulkOrderFulfillmentsResult[];
        /** Bulk action metadata. */
        bulkActionMetadata?: BulkActionMetadata$2;
    }
    interface BulkOrderFulfillmentsResult {
        /** Item metadata. */
        itemMetadata?: ItemMetadata$2;
        ordersWithFulfillments?: OrderWithFulfillments;
    }
    interface ItemMetadata$2 {
        /** Item ID. Should always be available, unless it's impossible (for example, when failing to create an item). */
        _id?: string | null;
        /** Index of the item within the request array. Allows for correlation between request and response items. */
        originalIndex?: number;
        /** Whether the requested action was successful for this item. When `false`, the `error` field is populated. */
        success?: boolean;
        /** Details about the error in case of failure. */
        error?: ApplicationError$3;
    }
    interface ApplicationError$3 {
        /** Error code. */
        code?: string;
        /** Description of the error. */
        description?: string;
        /** Data related to the error. */
        data?: Record<string, any> | null;
    }
    interface BulkActionMetadata$2 {
        /** Number of items that were successfully processed. */
        totalSuccesses?: number;
        /** Number of items that couldn't be processed. */
        totalFailures?: number;
        /** Number of failures without details because detailed failure threshold was exceeded. */
        undetailedFailures?: number;
    }
    /**
     * Retrieves fulfillments associated with a specified order.
     * @param orderId - Order ID for which to retrieve fulfillments.
     * @internal
     * @documentationMaturity preview
     * @requiredField orderId
     */
    function listFulfillmentsForSingleOrder(orderId: string): Promise<ListFulfillmentsForSingleOrderResponse>;
    /**
     * Retrieves fulfillments associated with all specified orders.
     * @param orderIds - Order IDs for which to retrieve fulfillments.
     * @internal
     * @documentationMaturity preview
     * @requiredField orderIds
     */
    function listFulfillmentsForMultipleOrders(orderIds: string[]): Promise<ListFulfillmentsForMultipleOrdersResponse>;
    /**
     * Creates an order fulfillment.
     * @param orderId - Order ID.
     * @param fulfillment - Fulfillment info.
     * @internal
     * @documentationMaturity preview
     * @requiredField fulfillment
     * @requiredField fulfillment.lineItems
     * @requiredField fulfillment.lineItems._id
     * @requiredField fulfillment.trackingInfo.shippingProvider
     * @requiredField fulfillment.trackingInfo.trackingNumber
     * @requiredField orderId
     */
    function createFulfillment(orderId: string, fulfillment: Fulfillment$1): Promise<CreateFulfillmentResponse>;
    /**
     * Updates a fulfillment's specified properties.
     * To update a field's value, include the new value in the `fulfillment` field in the body params.
     * To remove a field's value, pass `null` or `[]`, depending on the field's value.
     * **Note:** line items should not be updated in this call.
     * @internal
     * @documentationMaturity preview
     * @requiredField identifiers
     * @requiredField identifiers.fulfillmentId
     * @requiredField identifiers.orderId
     */
    function updateFulfillment(identifiers: UpdateFulfillmentIdentifiers, options?: UpdateFulfillmentOptions): Promise<UpdateFulfillmentResponse>;
    interface UpdateFulfillmentOptions {
        fulfillment: {
            /**
             * Fulfillment ID.
             * @readonly
             */
            _id?: string | null;
            /**
             * Fulfillment creation date and time in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format.
             * @readonly
             */
            _createdDate?: Date;
            /** Line items being fulfilled. */
            lineItems?: FulfillmentLineItem$1[];
            /** Fulfillment tracking info. */
            trackingInfo?: FulfillmentTrackingInfo$1;
        };
        /** Set of fields to update. Fields that aren't included in `fieldMask.paths` are ignored. */
        fieldMask?: string[];
    }
    interface UpdateFulfillmentIdentifiers {
        /**
         * Fulfillment ID.
         * @readonly
         */
        fulfillmentId?: string | null;
        /** Order ID. */
        orderId: string;
    }
    /**
     * Deletes an existing order fulfillment.
     * @internal
     * @documentationMaturity preview
     * @requiredField identifiers
     * @requiredField identifiers.fulfillmentId
     * @requiredField identifiers.orderId
     */
    function deleteFulfillment(identifiers: DeleteFulfillmentIdentifiers): Promise<DeleteFulfillmentResponse>;
    interface DeleteFulfillmentIdentifiers {
        /** IDs of fulfillments to delete. */
        fulfillmentId: string;
        /** Order ID. */
        orderId: string;
    }
    /**
     * Creates an order fulfillment.
     * @internal
     * @documentationMaturity preview
     * @requiredField ordersWithFulfillments
     * @requiredField ordersWithFulfillments.fulfillments
     * @requiredField ordersWithFulfillments.fulfillments.lineItems
     * @requiredField ordersWithFulfillments.fulfillments.lineItems._id
     * @requiredField ordersWithFulfillments.fulfillments.trackingInfo.shippingProvider
     * @requiredField ordersWithFulfillments.fulfillments.trackingInfo.trackingNumber
     * @requiredField ordersWithFulfillments.orderId
     */
    function bulkCreateFulfillment(ordersWithFulfillments: BulkCreateOrderWithFulfillments[]): Promise<BulkCreateFulfillmentResponse>;
    type ecomV1Fulfillments_universal_d_OrderWithFulfillments = OrderWithFulfillments;
    type ecomV1Fulfillments_universal_d_FulfillmentCreated = FulfillmentCreated;
    type ecomV1Fulfillments_universal_d_V2FulfillmentTrackingInfo = V2FulfillmentTrackingInfo;
    type ecomV1Fulfillments_universal_d_FulfillmentUpdated = FulfillmentUpdated;
    type ecomV1Fulfillments_universal_d_FulfillmentDeleted = FulfillmentDeleted;
    type ecomV1Fulfillments_universal_d_ListFulfillmentsForSingleOrderRequest = ListFulfillmentsForSingleOrderRequest;
    type ecomV1Fulfillments_universal_d_ListFulfillmentsForSingleOrderResponse = ListFulfillmentsForSingleOrderResponse;
    type ecomV1Fulfillments_universal_d_ListFulfillmentsForMultipleOrdersRequest = ListFulfillmentsForMultipleOrdersRequest;
    type ecomV1Fulfillments_universal_d_ListFulfillmentsForMultipleOrdersResponse = ListFulfillmentsForMultipleOrdersResponse;
    type ecomV1Fulfillments_universal_d_CreateFulfillmentRequest = CreateFulfillmentRequest;
    type ecomV1Fulfillments_universal_d_CreateFulfillmentResponse = CreateFulfillmentResponse;
    type ecomV1Fulfillments_universal_d_UpdateFulfillmentRequest = UpdateFulfillmentRequest;
    type ecomV1Fulfillments_universal_d_UpdateFulfillmentResponse = UpdateFulfillmentResponse;
    type ecomV1Fulfillments_universal_d_DeleteFulfillmentRequest = DeleteFulfillmentRequest;
    type ecomV1Fulfillments_universal_d_DeleteFulfillmentResponse = DeleteFulfillmentResponse;
    type ecomV1Fulfillments_universal_d_BulkCreateFulfillmentRequest = BulkCreateFulfillmentRequest;
    type ecomV1Fulfillments_universal_d_BulkCreateOrderWithFulfillments = BulkCreateOrderWithFulfillments;
    type ecomV1Fulfillments_universal_d_BulkCreateFulfillmentResponse = BulkCreateFulfillmentResponse;
    type ecomV1Fulfillments_universal_d_BulkOrderFulfillmentsResult = BulkOrderFulfillmentsResult;
    const ecomV1Fulfillments_universal_d_listFulfillmentsForSingleOrder: typeof listFulfillmentsForSingleOrder;
    const ecomV1Fulfillments_universal_d_listFulfillmentsForMultipleOrders: typeof listFulfillmentsForMultipleOrders;
    const ecomV1Fulfillments_universal_d_createFulfillment: typeof createFulfillment;
    const ecomV1Fulfillments_universal_d_updateFulfillment: typeof updateFulfillment;
    type ecomV1Fulfillments_universal_d_UpdateFulfillmentOptions = UpdateFulfillmentOptions;
    type ecomV1Fulfillments_universal_d_UpdateFulfillmentIdentifiers = UpdateFulfillmentIdentifiers;
    const ecomV1Fulfillments_universal_d_deleteFulfillment: typeof deleteFulfillment;
    type ecomV1Fulfillments_universal_d_DeleteFulfillmentIdentifiers = DeleteFulfillmentIdentifiers;
    const ecomV1Fulfillments_universal_d_bulkCreateFulfillment: typeof bulkCreateFulfillment;
    namespace ecomV1Fulfillments_universal_d {
        export { __debug$3 as __debug, ecomV1Fulfillments_universal_d_OrderWithFulfillments as OrderWithFulfillments, Fulfillment$1 as Fulfillment, FulfillmentLineItem$1 as FulfillmentLineItem, FulfillmentTrackingInfo$1 as FulfillmentTrackingInfo, DiffmatokyPayload$2 as DiffmatokyPayload, ErrorInformation$2 as ErrorInformation, SnapshotMessage$2 as SnapshotMessage, IndexingMessage$2 as IndexingMessage, ecomV1Fulfillments_universal_d_FulfillmentCreated as FulfillmentCreated, BuyerInfo$2 as BuyerInfo, IdentityType$1 as IdentityType, FulfillmentStatus$2 as FulfillmentStatus, ecomV1Fulfillments_universal_d_V2FulfillmentTrackingInfo as V2FulfillmentTrackingInfo, ecomV1Fulfillments_universal_d_FulfillmentUpdated as FulfillmentUpdated, ecomV1Fulfillments_universal_d_FulfillmentDeleted as FulfillmentDeleted, ecomV1Fulfillments_universal_d_ListFulfillmentsForSingleOrderRequest as ListFulfillmentsForSingleOrderRequest, ecomV1Fulfillments_universal_d_ListFulfillmentsForSingleOrderResponse as ListFulfillmentsForSingleOrderResponse, ecomV1Fulfillments_universal_d_ListFulfillmentsForMultipleOrdersRequest as ListFulfillmentsForMultipleOrdersRequest, ecomV1Fulfillments_universal_d_ListFulfillmentsForMultipleOrdersResponse as ListFulfillmentsForMultipleOrdersResponse, ecomV1Fulfillments_universal_d_CreateFulfillmentRequest as CreateFulfillmentRequest, ecomV1Fulfillments_universal_d_CreateFulfillmentResponse as CreateFulfillmentResponse, ecomV1Fulfillments_universal_d_UpdateFulfillmentRequest as UpdateFulfillmentRequest, ecomV1Fulfillments_universal_d_UpdateFulfillmentResponse as UpdateFulfillmentResponse, ecomV1Fulfillments_universal_d_DeleteFulfillmentRequest as DeleteFulfillmentRequest, ecomV1Fulfillments_universal_d_DeleteFulfillmentResponse as DeleteFulfillmentResponse, ecomV1Fulfillments_universal_d_BulkCreateFulfillmentRequest as BulkCreateFulfillmentRequest, ecomV1Fulfillments_universal_d_BulkCreateOrderWithFulfillments as BulkCreateOrderWithFulfillments, ecomV1Fulfillments_universal_d_BulkCreateFulfillmentResponse as BulkCreateFulfillmentResponse, ecomV1Fulfillments_universal_d_BulkOrderFulfillmentsResult as BulkOrderFulfillmentsResult, ItemMetadata$2 as ItemMetadata, ApplicationError$3 as ApplicationError, BulkActionMetadata$2 as BulkActionMetadata, ecomV1Fulfillments_universal_d_listFulfillmentsForSingleOrder as listFulfillmentsForSingleOrder, ecomV1Fulfillments_universal_d_listFulfillmentsForMultipleOrders as listFulfillmentsForMultipleOrders, ecomV1Fulfillments_universal_d_createFulfillment as createFulfillment, ecomV1Fulfillments_universal_d_updateFulfillment as updateFulfillment, ecomV1Fulfillments_universal_d_UpdateFulfillmentOptions as UpdateFulfillmentOptions, ecomV1Fulfillments_universal_d_UpdateFulfillmentIdentifiers as UpdateFulfillmentIdentifiers, ecomV1Fulfillments_universal_d_deleteFulfillment as deleteFulfillment, ecomV1Fulfillments_universal_d_DeleteFulfillmentIdentifiers as DeleteFulfillmentIdentifiers, ecomV1Fulfillments_universal_d_bulkCreateFulfillment as bulkCreateFulfillment, };
    }
    const __debug$2: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface Order$1 {
        /**
         * Order ID.
         * @readonly
         */
        _id?: string | null;
        /**
         * Order number displayed in the site owner's business manager (auto-generated).
         * @readonly
         */
        number?: string;
        /** Date and time the order was created. */
        _createdDate?: Date;
        /**
         * Date and time the order was last updated in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format.
         * @readonly
         */
        _updatedDate?: Date;
        /** Order line items. */
        lineItems?: OrderLineItem[];
        /** Buyer information. */
        buyerInfo?: BuyerInfo$1;
        /**
         * Order payment status.
         * + `NOT_PAID` - This can be an order made online, but not yet paid. In such cases `order.status` will be `INITIALIZED`.
         * + This status also applies when an offline order needs to be manually marked as paid. In such cases `order.status` will be `APPROVED`.
         * + `PAID` - All payments associated with this order are paid. For online payments: [`payment.regularPaymentDetails.status: APPROVED`](https://bo.wix.com/wix-docs/rest/ecommerce/order-payments/order-transactions-object). For gift cards: [`payment.giftCardPaymentDetails.voided: false`](https://bo.wix.com/wix-docs/rest/ecommerce/order-payments/order-transactions-object).
         * + `PARTIALLY_REFUNDED` - Order was refunded, but refund amount is less than order total price.
         * + `FULLY_REFUNDED` - Order fully refunded. Refund amount equals total price.
         * + `PENDING` - Payments received but not yet confirmed by the payment provider.
         * + `PARTIALLY_PAID` -  At least one payment was received and approved, covering less than total price amount.
         * @readonly
         */
        paymentStatus?: PaymentStatus$1;
        /**
         * Order fulfillment status.
         * @readonly
         */
        fulfillmentStatus?: FulfillmentStatus$1;
        /**
         * Language for communication with the buyer. Defaults to the site language.
         * For a site that supports multiple languages, this is the language the buyer selected.
         */
        buyerLanguage?: string | null;
        /** Weight measurement unit - defaults to site's weight unit. */
        weightUnit?: WeightUnit$2;
        /** Currency used for the pricing of this order in [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes) format. */
        currency?: string | null;
        /** Whether tax is included in line item prices. */
        taxIncludedInPrices?: boolean;
        /**
         * Site language in which original values are shown.
         * @readonly
         */
        siteLanguage?: string | null;
        /**
         * Order price summary.
         * @readonly
         */
        priceSummary?: PriceSummary$1;
        /** Billing address and contact details. */
        billingInfo?: AddressWithContact;
        /** Shipping info and selected shipping option details. */
        shippingInfo?: ShippingInformation$1;
        /** [Buyer note](https://support.wix.com/en/article/wix-stores-viewing-buyer-notes) left by the customer. */
        buyerNote?: string | null;
        /**
         * Order status.
         * + `INITIALIZED` - Order was created, but not yet approved or declined.
         * + `APPROVED` - Order was approved. This happens when either the online payment succeeded or the order is an offline order.
         * + Once an order is approved, many side effects are triggered. For example, holding of stock in the inventory and sending of notification emails.
         * + `CANCELED` - Order was canceled by the user.
         */
        status?: OrderStatus;
        /**
         * Whether order is archived.
         * @readonly
         */
        archived?: boolean | null;
        /** Tax summary. */
        taxSummary?: TaxSummary$1;
        /** Applied discounts. */
        appliedDiscounts?: AppliedDiscount$1[];
        /**
         * Order activities.
         * @readonly
         */
        activities?: Activity$1[];
        /** Order attribution source. */
        attributionSource?: AttributionSource;
        /**
         * ID of the order's initiator.
         * @readonly
         */
        createdBy?: CreatedBy;
        /** Information about the sales channel that submitted this order. */
        channelInfo?: ChannelInfo$1;
        /**
         * Whether a human has seen the order. Set when an order is clicked on in the Business Manager.
         * @readonly
         */
        seenByAHuman?: boolean | null;
        /** Checkout ID. */
        checkoutId?: string | null;
        /** Custom fields. */
        customFields?: CustomField$1[];
        /**
         * Cart ID - required by TYP OOI for legacy orders.
         * @internal
         */
        cartId?: string | null;
        /**
         * Private API flag that allows using read-only "id" during order creation.
         * @internal
         */
        isInternalOrderCreate?: boolean;
        /**
         * Pay now price summary. Part of price_summary that must be payed at checkout
         * @internal
         * @readonly
         */
        payNow?: PriceSummary$1;
        /**
         * Order balance summary.
         * @internal
         * @readonly
         */
        balanceSummary?: BalanceSummary;
        /** Additional fees applied to the order. */
        additionalFees?: AdditionalFee$1[];
    }
    interface OrderLineItem {
        /**
         * Line item ID.
         * @readonly
         */
        _id?: string;
        /**
         * Item name.
         * + Stores - `product.name`
         * + Bookings - `service.info.name`
         * + Events - `ticket.name`
         */
        productName?: ProductName;
        /** Catalog and item reference. Holds IDs for the item and the catalog it came from, as well as further optional info. */
        catalogReference?: CatalogReference$1;
        /** Line item quantity. */
        quantity?: number;
        /**
         * Total discount for this line item's entire quantity.
         * @readonly
         */
        totalDiscount?: Price$1;
        /** Line item description lines. Used for display purposes for the cart, checkout and order. */
        descriptionLines?: DescriptionLine[];
        /** Line item image. */
        image?: string;
        /** Physical properties of the item. When relevant, contains information such as SKU and item weight. */
        physicalProperties?: PhysicalProperties$1;
        /** Item type. Either a preset type or custom. */
        itemType?: ItemType;
        /**
         * Fulfiller ID. Field is empty when the line item is self-fulfilled.
         * To get fulfillment information, pass this order's ID to [List Fulfillments For Single Order](https://bo.wix.com/wix-docs/rest/ecommerce/order-fulfillments/list-fulfillments-for-single-order).
         */
        fulfillerId?: string | null;
        /**
         * this field will be calculated dynamically from the information in Order.refunds
         * @internal
         * @readonly
         */
        refundQuantity?: number | null;
        /**
         * quantity of inventory requested to be returned. Whether to restock or ignore the request is up the vertical.
         * @readonly
         */
        restockQuantity?: number | null;
        /** Line item price after line item discounts for display purposes. */
        price?: Price$1;
        /**
         * Line item price before line item discounts for display purposes. Defaults to `price` when not provided.
         * @readonly
         */
        priceBeforeDiscounts?: Price$1;
        /**
         * Deprecated - use `total_price_after_tax` minus `tax_details.total_tax` instead.
         * @readonly
         */
        totalPriceBeforeTax?: Price$1;
        /**
         * Total price after all discounts and tax.
         * @readonly
         */
        totalPriceAfterTax?: Price$1;
        /**
         * Type of selected payment option for current item. Defaults to `FULL_PAYMENT_ONLINE`.
         * + `FULL_PAYMENT_ONLINE` - The entire payment for this item happens as part of the checkout.
         * + `FULL_PAYMENT_OFFLINE` - The entire payment for this item happens after the checkout. For example, when using cash, check, or other offline payment methods.
         * + `MEMBERSHIP` - Payment for this item is done by charging a membership. When this option is used, `lineItem.price.amount` is 0.
         * + `DEPOSIT_ONLINE` - Partial payment for the given item to be paid upfront during the checkout. Eligible for catalog items with type `DEPOSIT_ONLINE` only.
         */
        paymentOption?: PaymentOptionType$1;
        /** Tax details for this line item. */
        taxDetails?: ItemTaxFullDetails$1;
        /**
         * Digital file identifier, relevant only for items with type DIGITAL.
         * @internal
         */
        digitalFile?: DigitalFile$1;
        /** Subscription info. */
        subscriptionInfo?: SubscriptionInfo$1;
        /** Additional description for the price. For example, when price is 0 but additional details about the actual price are needed - "Starts at $67". */
        priceDescription?: PriceDescription;
        /**
         * Item's price amount to be charged during checkout, relevant for items with payment option DEPOSIT_ONLINE
         * @readonly
         */
        depositAmount?: Price$1;
    }
    interface ProductName {
        /**
         * __Required.__ Original item name in site's default language.
         * Min: 1 character
         * Max: 80 characters
         */
        original?: string;
        /**
         * Optional. Translated item name according to buyer language. Defaults to `original` when not provided.
         * Min: 1 character
         * Max: 200 characters
         */
        translated?: string | null;
    }
    /** Used for grouping line items and is sent on add to cart */
    interface CatalogReference$1 {
        /** ID of the item within its catalog. For example, `productId` for Wix Stores. */
        catalogItemId?: string;
        /** App ID of the catalog the item comes from. For example, the Wix Stores `appId` is `"1380b703-ce81-ff05-f115-39571d94dfcd"`. */
        appId?: string;
        /**
         * Additional info in key:value form. For example, for a product variant from Wix Stores Catalog, `options` field would hold something like one of the following:
         * + `{"Size": "M", "Color": "Red"}`
         * + `{"variantId": "<VARIANT_ID>"}`.
         */
        options?: Record<string, any> | null;
    }
    interface Price$1 {
        /** Amount. */
        amount?: string;
        /**
         * Amount formatted with currency symbol.
         * @readonly
         */
        formattedAmount?: string;
    }
    interface DescriptionLine extends DescriptionLineValueOneOf, DescriptionLineDescriptionLineValueOneOf {
        /** Description line name. */
        name?: DescriptionLineName;
        /**
         * Description line type.
         * @internal
         */
        lineType?: DescriptionLineType;
        /** Description line plain text value. */
        plainText?: PlainTextValue;
        /** Description line color value. */
        colorInfo?: Color;
        /**
         * Description line plain text value.
         * @internal
         */
        plainTextValue?: PlainTextValue;
        /**
         * Description line color.
         * @internal
         */
        color?: string;
    }
    /** @oneof */
    interface DescriptionLineValueOneOf {
        /** Description line plain text value. */
        plainText?: PlainTextValue;
        /** Description line color value. */
        colorInfo?: Color;
    }
    /** @oneof */
    interface DescriptionLineDescriptionLineValueOneOf {
        /**
         * Description line plain text value.
         * @internal
         */
        plainTextValue?: PlainTextValue;
        /**
         * Description line color.
         * @internal
         */
        color?: string;
    }
    interface DescriptionLineName {
        /** Description line name in site's default language. */
        original?: string;
        /** Translated description line item according to buyer language. Defaults to `original` when not provided. */
        translated?: string | null;
    }
    interface PlainTextValue {
        /** Description line plain text value in site's default language. */
        original?: string;
        /** Translated description line plain text value according to buyer language. Defaults to `original` when not provided. */
        translated?: string | null;
    }
    interface Color {
        /** Description line color name in site's default language. */
        original?: string;
        /** Translated description line color name according to buyer language. Defaults to `original` when not provided. */
        translated?: string | null;
        /** HEX or RGB color code for display. */
        code?: string | null;
    }
    enum DescriptionLineType {
        UNRECOGNISED = "UNRECOGNISED",
        PLAIN_TEXT = "PLAIN_TEXT",
        COLOR = "COLOR"
    }
    interface PhysicalProperties$1 {
        /** Line item weight. Measurement unit (KG or LB) is taken from `order.weightUnit`. */
        weight?: number | null;
        /** Stock-keeping unit. Learn more about [SKUs](https://www.wix.com/encyclopedia/definition/stock-keeping-unit-sku). */
        sku?: string | null;
        /** Whether this line item is shippable. */
        shippable?: boolean;
    }
    interface ItemType extends ItemTypeItemTypeDataOneOf {
        /** Preset item type. */
        preset?: ItemTypeItemType;
        /** Custom item type. */
        custom?: string;
    }
    /** @oneof */
    interface ItemTypeItemTypeDataOneOf {
        /** Preset item type. */
        preset?: ItemTypeItemType;
        /** Custom item type. */
        custom?: string;
    }
    enum ItemTypeItemType {
        UNRECOGNISED = "UNRECOGNISED",
        PHYSICAL = "PHYSICAL",
        DIGITAL = "DIGITAL",
        GIFT_CARD = "GIFT_CARD",
        SERVICE = "SERVICE"
    }
    /** Type of selected payment option for catalog item */
    enum PaymentOptionType$1 {
        /** The entire payment for given item will happen as part of the checkout. */
        FULL_PAYMENT_ONLINE = "FULL_PAYMENT_ONLINE",
        /** The entire payment for given item will happen after the checkout. */
        FULL_PAYMENT_OFFLINE = "FULL_PAYMENT_OFFLINE",
        /** Given item cannot be paid via monetary payment options, only via membership. When this option is used, price will always be 0. */
        MEMBERSHIP = "MEMBERSHIP",
        /**
         * Partial payment for the given item to be paid upfront during the checkout.
         * Amount to be paid is defined by `deposit_amount` field on per-item basis.
         */
        DEPOSIT_ONLINE = "DEPOSIT_ONLINE",
        /**
         * Payment for this item can only be done using a membership and must be manually redeemed in the dashboard by the site owner.
         * Note: when this option is used, price will be 0.
         */
        MEMBERSHIP_OFFLINE = "MEMBERSHIP_OFFLINE"
    }
    interface ItemTaxFullDetails$1 {
        /** Taxable amount of this line item. */
        taxableAmount?: Price$1;
        /**
         * ID of the item's tax group, if specified.
         * @internal
         */
        taxGroupId?: string | null;
        /** Tax rate percentage, as a decimal numeral between 0 and 1. For example, `"0.13"`. */
        taxRate?: string;
        /** The calculated tax, based on the `taxableAmount` and `taxRate`. */
        totalTax?: Price$1;
    }
    interface DigitalFile$1 {
        /** ID of the secure file in media. */
        fileId?: string;
        /**
         * Link will exist after the digital links have been generated on the order.
         * @readonly
         */
        link?: string | null;
        /**
         * Link expiration time and date.
         * @readonly
         */
        expirationDate?: Date;
    }
    interface SubscriptionInfo$1 {
        /** Subscription ID. */
        _id?: string | null;
        /** Subscription cycle. For example, if this order is for the 3rd cycle of a subscription, value will be `3`. */
        cycleNumber?: number;
        /** Subscription option title. For example, `"Monthly coffee Subscription"`. */
        subscriptionOptionTitle?: string;
        /** Subscription option description. For example, `"1kg of selected coffee, once a month"`. */
        subscriptionOptionDescription?: string | null;
        /** Subscription detailed information. */
        subscriptionSettings?: SubscriptionSettings$2;
    }
    interface SubscriptionSettings$2 {
        /** Frequency of recurring payment. */
        frequency?: SubscriptionFrequency$2;
        /**
         * Interval of recurring payment
         * @internal
         */
        interval?: number | null;
        /** Whether subscription is renewed automatically at the end of each period. */
        autoRenewal?: boolean;
        /** Number of billing cycles before subscription ends. Ignored if `autoRenewal: true`. */
        billingCycles?: number | null;
    }
    /** Frequency unit of recurring payment */
    enum SubscriptionFrequency$2 {
        UNDEFINED = "UNDEFINED",
        DAY = "DAY",
        WEEK = "WEEK",
        MONTH = "MONTH",
        YEAR = "YEAR"
    }
    interface PriceDescription {
        /** *Required.** Original price description in site's default language. */
        original?: string;
        /** Translated price description according to buyer language. Defaults to `original` when not provided. */
        translated?: string | null;
    }
    /** Buyer Info */
    interface BuyerInfo$1 extends BuyerInfoIdOneOf {
        /** Contact ID. Auto-created if one does not yet exist. For more information, see [Contacts API](https://dev.wix.com/api/rest/contacts/contacts/introduction). */
        contactId?: string | null;
        /** Buyer email address. */
        email?: string | null;
        /** Visitor ID (if site visitor is not a member). */
        visitorId?: string;
        /** Member ID (if site visitor is a site member). */
        memberId?: string;
    }
    /** @oneof */
    interface BuyerInfoIdOneOf {
        /** Visitor ID (if site visitor is not a member). */
        visitorId?: string;
        /** Member ID (if site visitor is a site member). */
        memberId?: string;
    }
    enum PaymentStatus$1 {
        UNSPECIFIED = "UNSPECIFIED",
        /** Order is not paid */
        NOT_PAID = "NOT_PAID",
        /** Order is paid */
        PAID = "PAID",
        /** Order was refunded, refund amount less than order total price */
        PARTIALLY_REFUNDED = "PARTIALLY_REFUNDED",
        /** Full order total price was refunded */
        FULLY_REFUNDED = "FULLY_REFUNDED",
        /** Payments received but not yet confirmed by the payment provider */
        PENDING = "PENDING",
        /** At least one payment was received and approved, covering less than total price amount */
        PARTIALLY_PAID = "PARTIALLY_PAID"
    }
    enum FulfillmentStatus$1 {
        /** none of the order items are fulfilled or order was manually marked as unfulfilled */
        NOT_FULFILLED = "NOT_FULFILLED",
        /**
         * All of the order items are fulfilled or order was manually marked as fulfilled
         * Orders without shipping info are fulfilled automatically
         */
        FULFILLED = "FULFILLED",
        /** Some, but not all of the order items are fulfilled */
        PARTIALLY_FULFILLED = "PARTIALLY_FULFILLED"
    }
    enum WeightUnit$2 {
        /** Weight unit can't be classified, due to an error */
        UNSPECIFIED_WEIGHT_UNIT = "UNSPECIFIED_WEIGHT_UNIT",
        /** Kilograms */
        KG = "KG",
        /** Pounds */
        LB = "LB"
    }
    interface PriceSummary$1 {
        /** Subtotal of all the line items, before discounts and before tax. */
        subtotal?: Price$1;
        /** Total shipping price, before discounts and before tax. */
        shipping?: Price$1;
        /** Total tax on this order. */
        tax?: Price$1;
        /** Total calculated discount value. */
        discount?: Price$1;
        /** Deprecated - use `total` instead. */
        totalPrice?: Price$1;
        /** Order’s total price after discounts and tax. */
        total?: Price$1;
        /**
         * Order's total price including gift card.
         * @internal
         */
        totalWithGiftCard?: Price$1;
        /**
         * Order's total price after without gift card.
         * @internal
         */
        totalWithoutGiftCard?: Price$1;
        /** Total price of additional fees before tax. */
        totalAdditionalFees?: Price$1;
    }
    /** Billing Info and shipping details */
    interface AddressWithContact {
        /** Address. */
        address?: Address$2;
        /** Contact details. */
        contactDetails?: FullAddressContactDetails;
    }
    /** Physical address */
    interface Address$2 {
        /** Two-letter country code in [ISO-3166 alpha-2](https://www.iso.org/obp/ui/#search/code/) format. */
        country?: string | null;
        /** Code for a subdivision (such as state, prefecture, or province) in [ISO 3166-2](https://www.iso.org/standard/72483.html) format. */
        subdivision?: string | null;
        /** City name. */
        city?: string | null;
        /** Postal or zip code. */
        postalCode?: string | null;
        /** Street address. */
        streetAddress?: StreetAddress$1;
        /** Main address line (usually street name and number). */
        addressLine1?: string | null;
        /** Free text providing more detailed address info. Usually contains apt, suite, floor. */
        addressLine2?: string | null;
    }
    interface StreetAddress$1 {
        /** Street number. */
        number?: string;
        /** Street name. */
        name?: string;
        /**
         * Apartment number.
         * @internal
         */
        apt?: string;
        /**
         * Optional address line 1
         * @internal
         */
        formattedAddressLine?: string | null;
    }
    /** Full contact details for an address */
    interface FullAddressContactDetails {
        /** First name. */
        firstName?: string | null;
        /** Last name. */
        lastName?: string | null;
        /** Phone number. */
        phone?: string | null;
        /** Company name. */
        company?: string | null;
        /** Tax information (for Brazil only). If ID is provided, `vatId.type` must also be set, `UNSPECIFIED` is not allowed. */
        vatId?: VatId$1;
    }
    interface VatId$1 {
        /** Customer's tax ID. */
        _id?: string;
        /**
         * Tax type.
         *
         * Supported values:
         * + `CPF`: for individual tax payers
         * + `CNPJ`: for corporations
         */
        type?: VatType$1;
    }
    /** tax info types */
    enum VatType$1 {
        UNSPECIFIED = "UNSPECIFIED",
        /** CPF - for individual tax payers. */
        CPF = "CPF",
        /** CNPJ - for corporations */
        CNPJ = "CNPJ"
    }
    interface ShippingInformation$1 {
        /** App Def Id of external provider which was a source of shipping info */
        carrierId?: string | null;
        /** Unique code (or ID) of selected shipping option. For example, `"usps_std_overnight"``. */
        code?: string | null;
        /**
         * Shipping option title.
         * For example, `"USPS Standard Overnight Delivery"`, `"Standard"` or `"First-Class Package International"`.
         */
        title?: string;
        /** Shipping logistics. */
        logistics?: DeliveryLogistics$1;
        /** Shipping costs. */
        cost?: ShippingPrice$1;
        /** Shipping region. */
        region?: ShippingRegion$1;
    }
    interface DeliveryLogistics$1 extends DeliveryLogisticsAddressOneOf {
        /** Expected delivery time in free text. For example, `"3-5 business days"`. */
        deliveryTime?: string | null;
        /** Instructions for carrier. For example, `"Please knock on the door. If unanswered, please call contact number. Thanks."`. */
        instructions?: string | null;
        /** Latest expected delivery date and time in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format. */
        deliverByDate?: Date;
        /** Shipping address and contact details. */
        shippingDestination?: AddressWithContact;
        /** Pickup details. */
        pickupDetails?: PickupDetails$2;
    }
    /** @oneof */
    interface DeliveryLogisticsAddressOneOf {
        /** Shipping address and contact details. */
        shippingDestination?: AddressWithContact;
        /** Pickup details. */
        pickupDetails?: PickupDetails$2;
    }
    interface PickupDetails$2 {
        /** Pickup address. */
        address?: PickupAddress$1;
        /** Pickup method */
        pickupMethod?: PickupMethod$1;
    }
    /** Physical address */
    interface PickupAddress$1 {
        /** Two-letter country code in [ISO-3166 alpha-2](https://www.iso.org/obp/ui/#search/code/) format. */
        country?: string | null;
        /** Code for a subdivision (such as state, prefecture, or province) in [ISO 3166-2](https://www.iso.org/standard/72483.html) format. */
        subdivision?: string | null;
        /** City name. */
        city?: string | null;
        /** Postal or zip code. */
        postalCode?: string | null;
        /** Street address object, with number, name, and apartment number in separate fields. */
        streetAddress?: StreetAddress$1;
        /** Main address line (usually street name and number). */
        addressLine1?: string | null;
        /** Free text providing more detailed address info. Usually contains apt, suite, floor. */
        addressLine2?: string | null;
    }
    enum PickupMethod$1 {
        UNKNOWN_METHOD = "UNKNOWN_METHOD",
        STORE_PICKUP = "STORE_PICKUP",
        PICKUP_POINT = "PICKUP_POINT"
    }
    interface ShippingPrice$1 {
        /** Shipping price for display purposes. */
        price?: Price$1;
        /**
         * Deprecated - use `total_price_after_tax` minus `tax_details.total_tax` instead.
         * @readonly
         */
        totalPriceBeforeTax?: Price$1;
        /**
         * Shipping price after all discounts (if any exist), and after tax.
         * @readonly
         */
        totalPriceAfterTax?: Price$1;
        /** Tax details. */
        taxDetails?: ItemTaxFullDetails$1;
        /**
         * Shipping discount before tax.
         * @readonly
         */
        discount?: Price$1;
    }
    interface ShippingRegion$1 {
        /** Name of shipping region. For example, `"Metropolitan London"`, or `"Outer Melbourne suburbs"`. */
        name?: string | null;
    }
    enum OrderStatus {
        INITIALIZED = "INITIALIZED",
        APPROVED = "APPROVED",
        CANCELED = "CANCELED"
    }
    interface TaxSummary$1 {
        /**
         * Total tax.
         * @readonly
         */
        totalTax?: Price$1;
        /**
         * manual tax rate
         * @internal
         * @readonly
         */
        manualTaxRate?: string | null;
    }
    interface AppliedDiscount$1 extends AppliedDiscountDiscountSourceOneOf$1 {
        /**
         * Discount type.
         * * `"GLOBAL"` - discount applies to entire order.
         * * `"SPECIFIC-ITEMS"` - discount applies to specific items.
         * * `"SHIPPING"` - discount applies to shipping. For example, free shipping.
         */
        discountType?: DiscountType$1;
        /** IDs of line items discount applies to. */
        lineItemIds?: string[];
        /** Applied coupon info. */
        coupon?: Coupon$1;
        /** Merchant discount. */
        merchantDiscount?: MerchantDiscount$1;
        /** Automatic Discount */
        discountRule?: DiscountRule$1;
    }
    /** @oneof */
    interface AppliedDiscountDiscountSourceOneOf$1 {
        /** Applied coupon info. */
        coupon?: Coupon$1;
        /** Merchant discount. */
        merchantDiscount?: MerchantDiscount$1;
        /** Automatic Discount */
        discountRule?: DiscountRule$1;
    }
    enum DiscountType$1 {
        GLOBAL = "GLOBAL",
        SPECIFIC_ITEMS = "SPECIFIC_ITEMS",
        SHIPPING = "SHIPPING"
    }
    /** Coupon */
    interface Coupon$1 {
        /** Coupon ID. */
        _id?: string;
        /** Coupon code. */
        code?: string;
        /** Coupon name. */
        name?: string;
        /** Coupon value. */
        amount?: Price$1;
    }
    interface MerchantDiscount$1 extends MerchantDiscountMerchantDiscountReasonOneOf {
        /** Discount amount. */
        amount?: Price$1;
        /**
         * Pre-defined discount reason (optional).
         * * `"ITEMS_EXCHANGE"` - exchange balance acquired as a result of items exchange.
         */
        discountReason?: DiscountReason;
        /** Discount description as free text (optional). */
        description?: string | null;
    }
    /** @oneof */
    interface MerchantDiscountMerchantDiscountReasonOneOf {
        /**
         * Pre-defined discount reason (optional).
         * * `"ITEMS_EXCHANGE"` - exchange balance acquired as a result of items exchange.
         */
        discountReason?: DiscountReason;
        /** Discount description as free text (optional). */
        description?: string | null;
    }
    enum DiscountReason {
        UNSPECIFIED = "UNSPECIFIED",
        EXCHANGED_ITEMS = "EXCHANGED_ITEMS"
    }
    interface DiscountRule$1 {
        /** Discount rule ID */
        _id?: string;
        /** Discount rule name */
        name?: DiscountRuleName$1;
        /** Discount value. */
        amount?: Price$1;
    }
    interface DiscountRuleName$1 {
        /** Original discount rule name (in site's default language). */
        original?: string;
        /** Translated discount rule name according to buyer language. Defaults to `original` when not provided. */
        translated?: string | null;
    }
    interface Activity$1 extends ActivityContentOneOf {
        /**
         * Activity ID.
         * @readonly
         */
        _id?: string | null;
        /**
         * Activity author's email.
         * @readonly
         */
        authorEmail?: string | null;
        /**
         * Activity creation date and time.
         * @readonly
         */
        _createdDate?: Date;
        /** Activity type. */
        type?: ActivityType$1;
        /** Custom activity details (optional). `activity.type` must be `CUSTOM_ACTIVITY`. */
        customActivity?: CustomActivity;
        /** Merchant comment details (optional). `activity.type` must be `MERCHANT_COMMENT`. */
        merchantComment?: MerchantComment;
        /** Additional info about order refunded activity (optional). `activity.type` must be `ORDER_REFUNDED`. */
        orderRefunded?: OrderRefunded$1;
        /**
         * Details of the original order for this exchange order. `activity.type` must be `ORDER_CREATED_FROM_EXCHANGE`.
         * @internal
         */
        orderCreatedFromExchange?: OrderCreatedFromExchange;
        /**
         * Details of an order that was created as a result of an exchange of items in this order. `activity.type` must be `NEW_EXCHANGE_ORDER_CREATED`.
         * @internal
         */
        newExchangeOrderCreated?: NewExchangeOrderCreated;
    }
    /** @oneof */
    interface ActivityContentOneOf {
        /** Custom activity details (optional). `activity.type` must be `CUSTOM_ACTIVITY`. */
        customActivity?: CustomActivity;
        /** Merchant comment details (optional). `activity.type` must be `MERCHANT_COMMENT`. */
        merchantComment?: MerchantComment;
        /** Additional info about order refunded activity (optional). `activity.type` must be `ORDER_REFUNDED`. */
        orderRefunded?: OrderRefunded$1;
        /**
         * Details of the original order for this exchange order. `activity.type` must be `ORDER_CREATED_FROM_EXCHANGE`.
         * @internal
         */
        orderCreatedFromExchange?: OrderCreatedFromExchange;
        /**
         * Details of an order that was created as a result of an exchange of items in this order. `activity.type` must be `NEW_EXCHANGE_ORDER_CREATED`.
         * @internal
         */
        newExchangeOrderCreated?: NewExchangeOrderCreated;
    }
    interface CustomActivity {
        /** ID of the app that created the custom activity. */
        appId?: string;
        /** Custom activity type. For example, `"Ticket number set"`. */
        type?: string;
        /** Additional data in key-value form. For example, `{ "Ticket number": "123456" }`. */
        additionalData?: Record<string, string>;
    }
    /** Store owner added a comment */
    interface MerchantComment {
        /** Merchant comment message. */
        message?: string;
    }
    interface OrderRefunded$1 {
        /** Whether order was refunded manually. For example, via payment provider or using cash. */
        manual?: boolean;
        /** Refund amount. */
        amount?: Price$1;
        /** Reason for refund. */
        reason?: string;
    }
    interface OrderCreatedFromExchange {
        /** ID of the original order for which the exchange happened. */
        originalOrderId?: string;
    }
    interface NewExchangeOrderCreated {
        /** ID of the new order created as a result of an exchange of items. */
        exchangeOrderId?: string;
        /** IDs of the items that were exchanged. */
        lineItems?: LineItemExchangeData[];
    }
    interface LineItemExchangeData {
        /** ID of the exchanged line item. */
        lineItemId?: string;
        /** Line item quantity being exchanged. */
        quantity?: number;
    }
    enum ActivityType$1 {
        ORDER_REFUNDED = "ORDER_REFUNDED",
        ORDER_PLACED = "ORDER_PLACED",
        ORDER_PAID = "ORDER_PAID",
        ORDER_FULFILLED = "ORDER_FULFILLED",
        ORDER_NOT_FULFILLED = "ORDER_NOT_FULFILLED",
        ORDER_CANCELED = "ORDER_CANCELED",
        DOWNLOAD_LINK_SENT = "DOWNLOAD_LINK_SENT",
        TRACKING_NUMBER_ADDED = "TRACKING_NUMBER_ADDED",
        TRACKING_NUMBER_EDITED = "TRACKING_NUMBER_EDITED",
        TRACKING_LINK_ADDED = "TRACKING_LINK_ADDED",
        SHIPPING_CONFIRMATION_EMAIL_SENT = "SHIPPING_CONFIRMATION_EMAIL_SENT",
        INVOICE_ADDED = "INVOICE_ADDED",
        INVOICE_REMOVED = "INVOICE_REMOVED",
        INVOICE_SENT = "INVOICE_SENT",
        FULFILLER_EMAIL_SENT = "FULFILLER_EMAIL_SENT",
        SHIPPING_ADDRESS_EDITED = "SHIPPING_ADDRESS_EDITED",
        EMAIL_EDITED = "EMAIL_EDITED",
        PICKUP_READY_EMAIL_SENT = "PICKUP_READY_EMAIL_SENT",
        CUSTOM_ACTIVITY = "CUSTOM_ACTIVITY",
        MERCHANT_COMMENT = "MERCHANT_COMMENT",
        ORDER_CREATED_FROM_EXCHANGE = "ORDER_CREATED_FROM_EXCHANGE",
        NEW_EXCHANGE_ORDER_CREATED = "NEW_EXCHANGE_ORDER_CREATED",
        ORDER_PARTIALLY_PAID = "ORDER_PARTIALLY_PAID"
    }
    enum AttributionSource {
        UNSPECIFIED = "UNSPECIFIED",
        FACEBOOK_ADS = "FACEBOOK_ADS"
    }
    interface CreatedBy extends CreatedByStringOneOf {
        /**
         * User ID - when the order was created by a Wix user on behalf of a buyer.
         * For example, via POS (point of service).
         */
        userId?: string;
        /** Member ID - when the order was created by a **logged in** site visitor. */
        memberId?: string;
        /** Visitor ID - when the order was created by a site visitor that was **not** logged in. */
        visitorId?: string;
        /** App ID - when the order was created by an external application. */
        appId?: string;
    }
    /** @oneof */
    interface CreatedByStringOneOf {
        /**
         * User ID - when the order was created by a Wix user on behalf of a buyer.
         * For example, via POS (point of service).
         */
        userId?: string;
        /** Member ID - when the order was created by a **logged in** site visitor. */
        memberId?: string;
        /** Visitor ID - when the order was created by a site visitor that was **not** logged in. */
        visitorId?: string;
        /** App ID - when the order was created by an external application. */
        appId?: string;
    }
    interface ChannelInfo$1 {
        /** Sales channel that submitted the order. */
        type?: ChannelType$1;
        /** Reference to an order ID from an external system. */
        externalOrderId?: string | null;
        /** URL to the order in the external system. */
        externalOrderUrl?: string | null;
    }
    enum ChannelType$1 {
        UNSPECIFIED = "UNSPECIFIED",
        WEB = "WEB",
        POS = "POS",
        EBAY = "EBAY",
        AMAZON = "AMAZON",
        OTHER_PLATFORM = "OTHER_PLATFORM",
        WIX_APP_STORE = "WIX_APP_STORE",
        WIX_INVOICES = "WIX_INVOICES",
        BACKOFFICE_MERCHANT = "BACKOFFICE_MERCHANT",
        WISH = "WISH"
    }
    interface CustomField$1 {
        /** Custom field value. */
        value?: any;
        /** Custom field title. */
        title?: string;
        /** Translated custom field title. */
        translatedTitle?: string | null;
    }
    interface BalanceSummary {
        /** @readonly */
        balance?: Balance;
    }
    /**
     * Order balance. Reflects amount left to be paid on order and is calculated dynamically. Can be negative per balance definition.
     * `amount` field depends on order payment status:
     * + UNSPECIFIED, NOT_PAID: price_summary.total_price
     * + PARTIALLY_PAID : price_summary.total_price - pay_now.total_price
     * + PENDING, REFUNDED, PARTIALLY_REFUNDED, PAID : 0
     */
    interface Balance {
        /**
         * Balance amount, can be negative. Negative value signifies amount to be refunded
         * and can happen due to possible overcharge or modified manual order.
         * @readonly
         */
        amount?: string;
        /**
         * Amount formatted with currency symbol.
         * @readonly
         */
        formattedAmount?: string;
    }
    interface AdditionalFee$1 {
        /** Additional fee's unique code for future processing. */
        code?: string | null;
        /** Name of additional fee. */
        name?: string;
        /** Additional fee's price. */
        price?: Price$1;
        /** Tax details. */
        taxDetails?: ItemTaxFullDetails$1;
        /** SPI implementer's `appId`. */
        providerAppId?: string | null;
        /** Additional fee's price before tax. */
        priceBeforeTax?: Price$1;
    }
    interface SendOrderPaymentReceivedEmail {
        storeId?: string;
        orderId?: string;
        /** @internal */
        ordersExperiments?: OrdersExperiments;
    }
    interface OrdersExperiments {
        epCommitTax?: boolean;
        moveMerchantEmailToEp?: boolean;
        moveBuyerOrderConfirmationEmailToEp?: boolean;
        producedByEpBridge?: boolean;
    }
    interface SendBuyerConfirmationEmailRequest {
        orderId: string;
    }
    interface SendBuyerConfirmationEmailResponse {
    }
    interface SendBuyerPaymentsReceivedEmailRequest {
        orderId: string;
    }
    interface SendBuyerPaymentsReceivedEmailResponse {
    }
    interface SendBuyerPickupConfirmationEmailRequest {
        orderId: string;
    }
    interface SendBuyerPickupConfirmationEmailResponse {
    }
    interface SendBuyerShippingConfirmationEmailRequest {
        orderId: string;
    }
    interface SendBuyerShippingConfirmationEmailResponse {
    }
    interface SendMerchantOrderReceivedNotificationRequest {
        orderId: string;
    }
    interface SendMerchantOrderReceivedNotificationResponse {
    }
    interface SendCancelRefundEmailRequest {
        /** The ID of order that is canceled/refunded */
        orderId: string;
        /** Personal note added to the email (optional) */
        customMessage?: string | null;
        /** Refund amount */
        refundAmount: Price$1;
    }
    interface SendCancelRefundEmailResponse {
    }
    interface PreviewEmailByTypeRequest {
        emailType: PreviewEmailType;
    }
    enum PreviewEmailType {
        ORDER_PLACED = "ORDER_PLACED",
        DOWNLOAD_LINKS = "DOWNLOAD_LINKS",
        ORDER_SHIPPED = "ORDER_SHIPPED",
        ORDER_READY_FOR_PICKUP = "ORDER_READY_FOR_PICKUP"
    }
    interface PreviewEmailByTypeResponse {
        emailPreview?: string;
    }
    interface PreviewRefundEmailRequest {
        orderId: string;
        /** Refund amount */
        refundAmount: Price$1;
        /** Refund business details */
        details?: RefundDetails$1;
        /** Personal note added to the email (optional) */
        customMessage?: string | null;
    }
    /** Business model of a refund request */
    interface RefundDetails$1 {
        /** Refunded line items and quantities. */
        items?: RefundItem$1[];
        /** Whether shipping rate is also refunded. */
        shippingIncluded?: boolean;
        /** Reason for refund, given by user (optional). */
        reason?: string | null;
    }
    interface RefundItem$1 {
        /** ID of the line item being refunded. */
        lineItemId?: string;
        /** Line item quantity being refunded. */
        quantity?: number;
    }
    interface PreviewRefundEmailResponse {
        emailPreview?: string;
    }
    interface PreviewCancelEmailRequest {
        orderId: string;
        /** Personal note added to the email (optional) */
        customMessage?: string | null;
    }
    interface PreviewCancelEmailResponse {
        emailPreview?: string;
    }
    interface PreviewCancelRefundEmailRequest {
        orderId: string;
        /** Personal note added to the email (optional) */
        customMessage?: string | null;
        /** Refund amount */
        refundAmount?: Price$1;
    }
    interface PreviewCancelRefundEmailResponse {
        emailPreview?: string;
    }
    interface PreviewBuyerPaymentsReceivedEmailRequest {
    }
    interface PreviewBuyerPaymentsReceivedEmailResponse {
        emailPreview?: string;
    }
    interface PreviewBuyerConfirmationEmailRequest {
    }
    interface PreviewBuyerConfirmationEmailResponse {
        emailPreview?: string;
    }
    interface PreviewBuyerPickupConfirmationEmailRequest {
    }
    interface PreviewBuyerPickupConfirmationEmailResponse {
        emailPreview?: string;
    }
    interface PreviewShippingConfirmationEmailRequest {
    }
    interface PreviewShippingConfirmationEmailResponse {
        emailPreview?: string;
    }
    interface PreviewResendDownloadLinksEmailRequest {
    }
    interface PreviewResendDownloadLinksEmailResponse {
        emailPreview?: string;
    }
    interface DomainEvent extends DomainEventBodyOneOf {
        /** random GUID so clients can tell if event was already handled */
        _id?: string;
        /**
         * Assumes actions are also always typed to an entity_type
         * Example: wix.stores.catalog.product, wix.bookings.session, wix.payments.transaction
         */
        entityFqdn?: string;
        /**
         * This is top level to ease client code dispatching of messages (switch on entity_fqdn+slug)
         * This is although the created/updated/deleted notion is duplication of the oneof types
         * Example: created/updated/deleted/started/completed/email_opened
         */
        slug?: string;
        /**
         * Assuming that all messages including Actions have id
         * Example: The id of the specific order, the id of a specific campaign
         */
        entityId?: string;
        /** The time of the event. Useful if there was a delay in dispatching */
        eventTime?: Date;
        /**
         * A field that should be set if this event was triggered by an anonymize request.
         * For example you must set it to true when sending an event as a result of a GDPR right to be forgotten request.
         * NOTE: This field is not relevant for `EntityCreatedEvent` but is located here for better ergonomics of consumers.
         */
        triggeredByAnonymizeRequest?: boolean | null;
        /** If present, indicates the action that triggered the event. */
        originatedFrom?: string | null;
        /**
         * A sequence number defining the order of updates to the underlying entity.
         * For example, given that some entity was updated at 16:00 and than again at 16:01,
         * it is guaranteed that the sequence number of the second update is strictly higher than the first.
         * As the consumer, you can use this value to ensure that you handle messages in the correct order.
         * To do so, you will need to persist this number on your end, and compare the sequence number from the
         * message against the one you have stored. Given that the stored number is higher, you should ignore the message.
         */
        entityEventSequence?: string | null;
        createdEvent?: EntityCreatedEvent;
        updatedEvent?: EntityUpdatedEvent;
        deletedEvent?: EntityDeletedEvent;
        actionEvent?: ActionEvent;
        extendedFieldsUpdatedEvent?: ExtendedFieldsUpdatedEvent;
    }
    /** @oneof */
    interface DomainEventBodyOneOf {
        createdEvent?: EntityCreatedEvent;
        updatedEvent?: EntityUpdatedEvent;
        deletedEvent?: EntityDeletedEvent;
        actionEvent?: ActionEvent;
        extendedFieldsUpdatedEvent?: ExtendedFieldsUpdatedEvent;
    }
    interface EntityCreatedEvent {
        entityAsJson?: string;
        /**
         * Indicates the event was triggered by a restore-from-trashbin operation for a previously deleted entity
         * @internal
         */
        triggeredByUndelete?: boolean | null;
    }
    interface EntityUpdatedEvent {
        /**
         * Since platformized APIs only expose PATCH and not PUT we can't assume that the fields sent from the client are the actual diff.
         * This means that to generate a list of changed fields (as opposed to sent fields) one needs to traverse both objects.
         * We don't want to impose this on all developers and so we leave this traversal to the notification recipients which need it.
         */
        currentEntityAsJson?: string;
        /**
         * This field is currently part of the of the EntityUpdatedEvent msg, but scala/node libraries which implements the domain events standard
         * wont populate it / have any reference to it in the API.
         * The main reason for it is that fetching the old entity from the DB will have a performance hit on an update operation so unless truly needed,
         * the developer should send only the new (current) entity.
         * An additional reason is not wanting to send this additional entity over the wire (kafka) since in some cases it can be really big
         * Developers that must reflect the old entity will have to implement their own domain event sender mechanism which will follow the DomainEvent proto message.
         * @internal
         */
        previousEntityAsJson?: string | null;
    }
    interface EntityDeletedEvent {
        /**
         * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
         * @internal
         */
        movedToTrash?: boolean | null;
    }
    interface ActionEvent {
        bodyAsJson?: string;
    }
    interface ExtendedFieldsUpdatedEvent {
        currentEntityAsJson?: string;
    }
    interface Empty {
    }
    interface PreparePaymentCollectionRequest {
        /** Ecom order ID. */
        ecomOrderId: string;
        /** Amount to collect */
        amount: Price$1;
        /**
         * Optional parameter. When present, payment collection will be performed using given payment gateway order.
         * Existing payment gateway order will be updated with a new amount.
         * When parameter is absent, new payment gateway order will be created and used for payment collection.
         */
        paymentGatewayOrderId?: string | null;
    }
    interface PreparePaymentCollectionResponse {
        /** Payment gateway order id which is associated with given payment */
        paymentGatewayOrderId?: string;
    }
    interface GetPaymentCollectabilityStatusRequest {
        /** Ecom order ID. */
        ecomOrderId: string;
    }
    interface GetPaymentCollectabilityStatusResponse {
        /** Payment collectability status */
        status?: PaymentCollectabilityStatus;
        /** Collectable order amount */
        amount?: Price$1;
    }
    enum PaymentCollectabilityStatus {
        UNKNOWN = "UNKNOWN",
        COLLECTABLE = "COLLECTABLE",
        NONCOLLECTABLE_ORDER_IS_CANCELLED = "NONCOLLECTABLE_ORDER_IS_CANCELLED",
        NONCOLLECTABLE_ORDER_IS_PAID = "NONCOLLECTABLE_ORDER_IS_PAID",
        NONCOLLECTABLE_MISSING_PAYMENT_METHOD = "NONCOLLECTABLE_MISSING_PAYMENT_METHOD"
    }
    interface RecordManuallyCollectedPaymentRequest {
        /** Order ID. */
        orderId: string;
        /** Amount to be recorded as approved manual payment for given order */
        amount: Price$1;
    }
    interface RecordManuallyCollectedPaymentResponse {
    }
    interface V1MarkOrderAsPaidRequest {
        /** Ecom order ID. */
        ecomOrderId: string;
    }
    interface V1MarkOrderAsPaidResponse {
        /** Updated order. */
        order?: Order$1;
    }
    /** Triggered when the payment status of an order is updated */
    interface PaymentStatusUpdated {
        /** The order that was updated */
        order?: Order$1;
        /** The previous status (before the update) */
        previousPaymentStatus?: PaymentStatus$1;
    }
    interface V1BulkMarkOrdersAsPaidRequest {
        /** IDs of orders to mark as paid. */
        ecomOrderIds: string[];
    }
    interface V1BulkMarkOrdersAsPaidResponse {
        /**
         * Items updated by the bulk action.
         * The Order entity within the results optimistically changes its payment status to paid, however this process is async.
         */
        results?: BulkOrderResult[];
        /** Bulk action metadata. */
        bulkActionMetadata?: BulkActionMetadata$1;
    }
    interface BulkOrderResult {
        /** Item metadata. */
        itemMetadata?: ItemMetadata$1;
        /** Updated item. Optional - returned only if requested with `return_full_entity` set to `true`. */
        item?: Order$1;
    }
    interface ItemMetadata$1 {
        /** Item ID. Should always be available, unless it's impossible (for example, when failing to create an item). */
        _id?: string | null;
        /** Index of the item within the request array. Allows for correlation between request and response items. */
        originalIndex?: number;
        /** Whether the requested action was successful for this item. When `false`, the `error` field is populated. */
        success?: boolean;
        /** Details about the error in case of failure. */
        error?: ApplicationError$2;
    }
    interface ApplicationError$2 {
        /** Error code. */
        code?: string;
        /** Description of the error. */
        description?: string;
        /** Data related to the error. */
        data?: Record<string, any> | null;
    }
    interface BulkActionMetadata$1 {
        /** Number of items that were successfully processed. */
        totalSuccesses?: number;
        /** Number of items that couldn't be processed. */
        totalFailures?: number;
        /** Number of failures without details because detailed failure threshold was exceeded. */
        undetailedFailures?: number;
    }
    interface DiffmatokyPayload$1 {
        left?: string;
        right?: string;
        compareChannel?: string;
        entityId?: string;
        errorInformation?: ErrorInformation$1;
        tags?: string[];
    }
    interface ErrorInformation$1 {
        stackTrace?: string;
    }
    interface ContinueSideEffectsFlowInLegacyData {
        storeId?: string;
        orderId?: string;
        ordersExperiments?: OrdersExperiments;
    }
    interface SnapshotMessage$1 {
        _id?: string;
        opType?: number;
    }
    interface IndexingMessage$1 {
        _id?: string;
        opType?: number;
        requiredVersions?: string[];
    }
    interface GetOrderRequest {
        /** ID of the order to retrieve. */
        _id: string;
    }
    interface GetOrderResponse {
        /** The requested order. */
        order?: Order$1;
    }
    interface QueryOrderRequest {
        /** Query options. */
        query?: PlatformQuery;
    }
    interface PlatformQuery extends PlatformQueryPagingMethodOneOf {
        /** Filter object. */
        filter?: Record<string, any> | null;
        /** Sorting options. For example, `[{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]`. */
        sort?: Sorting[];
        /** Pointer to page of results using offset. Cannot be used together with `cursorPaging`. */
        paging?: PlatformPaging;
        /** Cursor pointing to page of results. Cannot be used together with `paging`. `cursorPaging.cursor` can not be used together with `filter` or `sort`. */
        cursorPaging?: CursorPaging;
    }
    /** @oneof */
    interface PlatformQueryPagingMethodOneOf {
        /** Pointer to page of results using offset. Cannot be used together with `cursorPaging`. */
        paging?: PlatformPaging;
        /** Cursor pointing to page of results. Cannot be used together with `paging`. `cursorPaging.cursor` can not be used together with `filter` or `sort`. */
        cursorPaging?: CursorPaging;
    }
    interface Sorting {
        /** Name of the field to sort by. */
        fieldName?: string;
        /** Sort order. */
        order?: SortOrder;
    }
    enum SortOrder {
        ASC = "ASC",
        DESC = "DESC"
    }
    interface PlatformPaging {
        /** Number of items to load. */
        limit?: number | null;
        /** Number of items to skip in the current sort order. */
        offset?: number | null;
    }
    interface CursorPaging {
        /** Number of items to load. */
        limit?: number | null;
        /**
         * Pointer to the next or previous page in the list of results.
         *
         * You can get the relevant cursor token
         * from the `pagingMetadata` object in the previous call's response.
         * Not relevant for the first request.
         */
        cursor?: string | null;
    }
    interface QueryOrderResponse {
        /** List of orders. */
        orders?: Order$1[];
        /** Details on the paged set of results returned. */
        metadata?: PlatformPagingMetadata;
    }
    interface PlatformPagingMetadata {
        /** The number of items returned in this response. */
        count?: number | null;
        /** The offset which was requested. Returned if offset paging was used. */
        offset?: number | null;
        /** The total number of items that match the query. Returned if offset paging was used. */
        total?: number | null;
        /** Cursors to navigate through result pages. Returned if cursor paging was used. */
        cursors?: Cursors;
    }
    interface Cursors {
        /** Cursor pointing to next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to previous page in the list of results. */
        prev?: string | null;
    }
    interface CreateOrderRequest {
        /** Order info. */
        order: Order$1;
    }
    interface CreateOrderResponse {
        /** Newly created order. */
        order?: Order$1;
    }
    interface ArchiveOrderRequest {
        /** Order ID. */
        _id: string;
    }
    interface ArchiveOrderResponse {
        /** Archived order. */
        order?: Order$1;
    }
    interface BulkArchiveOrdersRequest {
        /** IDs of orders to archive. */
        ids: string[];
        /** Whether to return the full updated order entities in the response. */
        returnFullEntity?: boolean;
    }
    interface BulkArchiveOrdersResponse {
        /** Items updated by bulk action. */
        results?: BulkOrderResult[];
        /** Bulk action metadata. */
        bulkActionMetadata?: BulkActionMetadata$1;
    }
    interface BulkArchiveOrdersByFilterRequest {
        /** Filter object. Learn more about supported filters [here](https://bo.wix.com/wix-docs/rest/ecommerce/orders/filter-and-sort). */
        filter: Record<string, any> | null;
    }
    interface BulkArchiveOrdersByFilterResponse {
        /** Items updated by bulk action. */
        results?: BulkOrderResult[];
        /** Bulk action metadata. */
        bulkActionMetadata?: BulkActionMetadata$1;
    }
    interface UnArchiveOrderRequest {
        /** Order ID. */
        _id: string;
    }
    interface UnArchiveOrderResponse {
        /** Unarchived order. */
        order?: Order$1;
    }
    interface BulkUnArchiveOrdersRequest {
        /** IDs or orders to unarchive. */
        ids: string[];
        /** Whether to return the full updated order entities in the response. */
        returnFullEntity?: boolean;
    }
    interface BulkUnArchiveOrdersResponse {
        /** Items updated by bulk action. */
        results?: BulkOrderResult[];
        /** Bulk action metadata. */
        bulkActionMetadata?: BulkActionMetadata$1;
    }
    interface BulkUnArchiveOrdersByFilterRequest {
        /** Filter object. Learn more about supported filters [here](https://bo.wix.com/wix-docs/rest/ecommerce/orders/filter-and-sort). */
        filter: Record<string, any> | null;
    }
    interface BulkUnArchiveOrdersByFilterResponse {
        /** Items updated by bulk action. */
        results?: BulkOrderResult[];
        /** Bulk action metadata. */
        bulkActionMetadata?: BulkActionMetadata$1;
    }
    interface UpdateBuyerInfoRequest {
        /**
         * Order ID.
         * @readonly
         */
        _id: string;
        /**
         * Field mask of buyerInfo fields to update.
         * @internal
         */
        fieldMask?: string[];
        /** Buyer info. */
        buyerInfo?: BuyerInfoUpdate;
    }
    interface BuyerInfoUpdate {
        /** Contact ID. */
        contactId?: string | null;
        /** Email associated with the buyer. */
        email?: string | null;
    }
    interface UpdateBuyerInfoResponse {
        /** Updated order. */
        order?: Order$1;
    }
    interface UpdateOrderShippingAddressRequest {
        /** Order ID. */
        _id: string;
        /**
         * mask of shipping address fields to update
         * @internal
         */
        fieldMask?: string[];
        /** Shipping address and contact details to be updated. */
        shippingAddress: AddressWithContact;
    }
    interface UpdateOrderShippingAddressResponse {
        /** Updated order. */
        order?: Order$1;
    }
    interface UpdateBillingContactDetailsRequest {
        /**
         * Order ID.
         * @readonly
         */
        _id: string;
        /**
         * mask of contact details fields to update
         * @internal
         */
        fieldMask?: string[];
        /** Contact details. */
        addressContactDetails?: FullAddressContactDetails;
    }
    interface UpdateBillingContactDetailsResponse {
        /** Updated order. */
        order?: Order$1;
    }
    interface AddInternalActivityRequest {
        /** Order ID. */
        _id: string;
        /** Activity info. */
        activity: InternalActivity;
    }
    interface InternalActivity extends InternalActivityContentOneOf {
        /**
         * Internal activity ID.
         * @readonly
         */
        _id?: string | null;
        /**
         * Internal activity author's email.
         * @readonly
         */
        authorEmail?: string | null;
        /**
         * Internal activity creation date and time.
         * @readonly
         */
        _createdDate?: Date;
        /** Order refunded. */
        orderRefunded?: OrderRefunded$1;
        /** Order placed. */
        orderPlaced?: OrderPlaced;
        /** Order paid. Either by the store owner (for offline orders), or when an online transaction was confirmed. */
        orderPaid?: OrderPaid;
        /** Order shipping status set as fulfilled. */
        orderFulfilled?: OrderFulfilled;
        /** Order shipping status set as not fulfilled. */
        orderNotFulfilled?: OrderNotFulfilled;
        /** Order canceled. */
        orderCanceled?: OrderCanceled;
        /** Download link was sent (relevant for orders with digital line items). */
        downloadLinkSent?: DownloadLinkSent;
        /** Shipping tracking number added to order. */
        trackingNumberAdded?: TrackingNumberAdded;
        /** Shipping tracking number was edited. */
        trackingNumberEdited?: TrackingNumberEdited;
        /** Shipping tracking link added to order. */
        trackingLinkAdded?: TrackingLinkAdded;
        /** An email confirmation of order shipment was sent. */
        shippingConfirmationEmailSent?: ShippingConfirmationEmailSent;
        /** Invoice was added to order. */
        invoiceAdded?: InvoiceAdded;
        /** Invoice sent to customer via email. */
        invoiceSent?: InvoiceSent;
        /** Email sent to fulfiller. */
        fulfillerEmailSent?: FulfillerEmailSent;
        /** Shipping address was updated. */
        shippingAddressEdited?: ShippingAddressEdited;
        /** Order email was updated. */
        emailEdited?: EmailEdited;
        /** Email notification for pickup sent. */
        pickupReadyEmailSent?: PickupReadyEmailSent;
        /** Order created as a result of items exchange. */
        orderCreatedFromExchange?: OrderCreatedFromExchange;
        /** New exchange order created. */
        newExchangeOrderCreated?: NewExchangeOrderCreated;
        /** Order partially paid. During the checkout for orders with deposit items. */
        orderPartiallyPaid?: OrderPartiallyPaid;
    }
    /** @oneof */
    interface InternalActivityContentOneOf {
        /** Order refunded. */
        orderRefunded?: OrderRefunded$1;
        /** Order placed. */
        orderPlaced?: OrderPlaced;
        /** Order paid. Either by the store owner (for offline orders), or when an online transaction was confirmed. */
        orderPaid?: OrderPaid;
        /** Order shipping status set as fulfilled. */
        orderFulfilled?: OrderFulfilled;
        /** Order shipping status set as not fulfilled. */
        orderNotFulfilled?: OrderNotFulfilled;
        /** Order canceled. */
        orderCanceled?: OrderCanceled;
        /** Download link was sent (relevant for orders with digital line items). */
        downloadLinkSent?: DownloadLinkSent;
        /** Shipping tracking number added to order. */
        trackingNumberAdded?: TrackingNumberAdded;
        /** Shipping tracking number was edited. */
        trackingNumberEdited?: TrackingNumberEdited;
        /** Shipping tracking link added to order. */
        trackingLinkAdded?: TrackingLinkAdded;
        /** An email confirmation of order shipment was sent. */
        shippingConfirmationEmailSent?: ShippingConfirmationEmailSent;
        /** Invoice was added to order. */
        invoiceAdded?: InvoiceAdded;
        /** Invoice sent to customer via email. */
        invoiceSent?: InvoiceSent;
        /** Email sent to fulfiller. */
        fulfillerEmailSent?: FulfillerEmailSent;
        /** Shipping address was updated. */
        shippingAddressEdited?: ShippingAddressEdited;
        /** Order email was updated. */
        emailEdited?: EmailEdited;
        /** Email notification for pickup sent. */
        pickupReadyEmailSent?: PickupReadyEmailSent;
        /** Order created as a result of items exchange. */
        orderCreatedFromExchange?: OrderCreatedFromExchange;
        /** New exchange order created. */
        newExchangeOrderCreated?: NewExchangeOrderCreated;
        /** Order partially paid. During the checkout for orders with deposit items. */
        orderPartiallyPaid?: OrderPartiallyPaid;
    }
    /** Order placed */
    interface OrderPlaced {
    }
    /** Order marked as paid, either by the store owner (for offline orders), or when an online transaction was confirmed */
    interface OrderPaid {
    }
    /** Order shipping status set as fulfilled */
    interface OrderFulfilled {
    }
    /** Order shipping status set as not fulfilled */
    interface OrderNotFulfilled {
    }
    /** Order canceled */
    interface OrderCanceled {
    }
    /** A download link was sent (relevant for orders with digital line items) */
    interface DownloadLinkSent {
    }
    /** Shipping tracking number was set */
    interface TrackingNumberAdded {
    }
    /** Shipping tracking number was edited */
    interface TrackingNumberEdited {
    }
    /** Shipping tracking link was set */
    interface TrackingLinkAdded {
    }
    /** An email confirmation of order shipment was sent */
    interface ShippingConfirmationEmailSent {
    }
    /** Invoice was set in the order */
    interface InvoiceAdded {
    }
    /** Invoice sent to customer via email */
    interface InvoiceSent {
    }
    /** Email was sent to fulfiller */
    interface FulfillerEmailSent {
    }
    /** Shipping address was updated */
    interface ShippingAddressEdited {
    }
    /** Order email was updated */
    interface EmailEdited {
    }
    /** An email notification for pickup was sent */
    interface PickupReadyEmailSent {
    }
    /** Order marked as partially paid when an online transaction was confirmed with partial minimal required amount of total sum */
    interface OrderPartiallyPaid {
    }
    interface AddInternalActivityResponse {
        /** Updated order. */
        order?: Order$1;
        /**
         * ID of the added internal activity.
         * Use this ID to either [update](https://bo.wix.com/wix-docs/rest/ecommerce/orders/update-activity) or [delete](https://bo.wix.com/wix-docs/rest/ecommerce/orders/delete-activity) the activity.
         */
        activityId?: string;
    }
    interface AddActivityRequest {
        /** Order ID. */
        _id: string;
        /** Activity info. */
        activity: PublicActivity;
    }
    interface PublicActivity extends PublicActivityContentOneOf {
        /** Custom activity details. */
        customActivity?: CustomActivity;
        /** Merchant commment. */
        merchantComment?: MerchantComment;
    }
    /** @oneof */
    interface PublicActivityContentOneOf {
        /** Custom activity details. */
        customActivity?: CustomActivity;
        /** Merchant commment. */
        merchantComment?: MerchantComment;
    }
    interface AddActivityResponse {
        /** Updated order. */
        order?: Order$1;
        /**
         * ID of the added activity.
         * Use this ID to either [update](https://bo.wix.com/wix-docs/rest/ecommerce/orders/update-activity) or [delete](https://bo.wix.com/wix-docs/rest/ecommerce/orders/delete-activity) the activity.
         */
        activityId?: string;
    }
    interface UpdateActivityRequest {
        /** Order ID. */
        _id: string;
        /** ID of the activity to update. */
        activityId: string;
        /** Activity info. */
        activity: PublicActivity;
    }
    interface UpdateActivityResponse {
        /** Updated order. */
        order?: Order$1;
    }
    interface DeleteActivityRequest {
        /** Order ID. */
        _id: string;
        /** ID of the activity to delete. */
        activityId: string;
    }
    interface DeleteActivityResponse {
        /** Updated order. */
        order?: Order$1;
    }
    interface UpdateLineItemsDescriptionLinesRequest {
        /** Order ID. */
        _id: string;
        /** Line items. */
        lineItems: LineItemUpdate[];
    }
    interface LineItemUpdate {
        /** Line item ID. */
        lineItemId?: string;
        /**
         * Description lines' info.
         * If description line already exists for this name, it will be replaced.
         */
        descriptionLines?: DescriptionLine[];
    }
    interface UpdateLineItemsDescriptionLinesResponse {
        /** Updated order. */
        order?: Order$1;
    }
    interface MarkOrderAsSeenByHumanRequest {
        /** Order ID. */
        _id: string;
    }
    interface MarkOrderAsSeenByHumanResponse {
        /** Updated order. */
        order?: Order$1;
    }
    interface CancelOrderRequest {
        /** Order ID. */
        _id: string;
        /** Whether to send an order canceled email to the buyer. */
        sendOrderCanceledEmail?: boolean;
        /** Custom note to be added to the email (optional). */
        customMessage?: string | null;
        /** Whether to restock all items in the order. */
        restockAllItems?: boolean;
    }
    interface CancelOrderResponse {
        /** Canceled order. */
        order?: Order$1;
    }
    interface OrderCanceledEventOrderCanceled {
        /** The order that was cancelled */
        order?: Order$1;
        /** Should restock all items on that order */
        restockAllItems?: boolean;
        /** Should send a confirmation mail to the customer */
        sendOrderCanceledEmail?: boolean;
        /** Personal note added to the email */
        customMessage?: string | null;
    }
    interface MarkAsFulfilledRequest {
        /** Order ID. */
        _id: string;
    }
    interface MarkAsFulfilledResponse {
        /** Updated order. */
        order?: Order$1;
    }
    /** Triggered when the fulfillment status of an order is updated */
    interface FulfillmentStatusUpdated {
        /** The order that was updated */
        order?: Order$1;
        /** The previous status (before the update) */
        previousFulfillmentStatus?: FulfillmentStatus$1;
        /** the new status (after the update) */
        newFulfillmentStatus?: FulfillmentStatus$1;
        /** the action that caused this update */
        action?: string;
    }
    interface BulkMarkAsFulfilledRequest {
        /** IDs of orders to be marked as fulfilled. */
        ids: string[];
        /** Whether to return the full updated order entities in the response. */
        returnFullEntity?: boolean;
    }
    interface BulkMarkAsFulfilledResponse {
        /** Items updated by bulk action. */
        results?: BulkOrderResult[];
        /** Bulk action metadata. */
        bulkActionMetadata?: BulkActionMetadata$1;
    }
    interface BulkMarkAsFulfilledByFilterRequest {
        /** Filter object. Learn more about supported filters [here](https://bo.wix.com/wix-docs/rest/ecommerce/orders/filter-and-sort). */
        filter: Record<string, any> | null;
    }
    interface BulkMarkAsFulfilledByFilterResponse {
        /** Items updated by bulk action. */
        results?: BulkOrderResult[];
        /** Bulk action metadata. */
        bulkActionMetadata?: BulkActionMetadata$1;
    }
    interface MarkAsUnfulfilledRequest {
        /** Order ID. */
        _id: string;
    }
    interface MarkAsUnfulfilledResponse {
        /** Updated order. */
        order?: Order$1;
    }
    interface BulkMarkAsUnfulfilledRequest {
        /** IDs of orders to be marked as not fulfilled. */
        ids: string[];
        /** Whether to return the full updated order entities in the response. */
        returnFullEntity?: boolean;
    }
    interface BulkMarkAsUnfulfilledResponse {
        /** Items updated by bulk action. */
        results?: BulkOrderResult[];
        /** Bulk action metadata. */
        bulkActionMetadata?: BulkActionMetadata$1;
    }
    interface BulkMarkAsUnfulfilledByFilterRequest {
        /** Filter object. Learn more about supported filters [here](https://bo.wix.com/wix-docs/rest/ecommerce/orders/filter-and-sort). */
        filter: Record<string, any> | null;
    }
    interface BulkMarkAsUnfulfilledByFilterResponse {
        /** Items updated by bulk action. */
        results?: BulkOrderResult[];
        /** Bulk action metadata. */
        bulkActionMetadata?: BulkActionMetadata$1;
    }
    interface MarkOrderAsPaidRequest {
        /** Order ID. */
        _id: string;
    }
    interface MarkOrderAsPaidResponse {
        /** Updated order. */
        order?: Order$1;
    }
    interface BulkMarkOrdersAsPaidRequest {
        /** IDs of orders to mark as paid. */
        ids: string[];
    }
    interface BulkMarkOrdersAsPaidResponse {
        /**
         * Items updated by the bulk action.
         * The Order entity within the results optimistically changes its payment status to paid, however this process is async.
         */
        results?: BulkOrderResult[];
        /** Bulk action metadata. */
        bulkActionMetadata?: BulkActionMetadata$1;
    }
    interface CreatePaymentGatewayOrderRequest {
        /** eCom Order ID */
        ecomOrderId: string;
    }
    interface CreatePaymentGatewayOrderResponse {
        /** ID of the order created in the payment gateway */
        paymentGatewayOrderId?: string;
    }
    interface GetShipmentsRequest {
        _id: string;
    }
    interface GetShipmentsResponse {
        shipmentIds?: string[];
    }
    interface AggregateOrdersRequest {
        /** Filter applied to original data */
        filter?: Record<string, any> | null;
        /** This is an object defining aggregation itself */
        aggregation: Record<string, any> | null;
    }
    interface AggregateOrdersResponse {
        aggregates?: Record<string, any> | null;
    }
    interface DecrementItemsQuantityRequest {
        /** Order ID */
        _id: string;
        /** Which items to decrement, and how much to decrement from each one */
        decrementData: DecrementData[];
    }
    interface DecrementData {
        /** ID of the line item being decremented. */
        lineItemId?: string;
        /** Line item quantity being decremented. */
        decrementBy?: number;
        /** Whether to restock the line item (triggers inventory update). */
        restock?: boolean;
    }
    interface DecrementItemsQuantityResponse {
        /** Updated order data */
        order?: Order$1;
    }
    /** Triggered when order items are marked as restocked */
    interface OrderItemsRestocked {
        /** The order which items were restocked */
        order?: Order$1;
        /** Restocked items and quantities */
        restockItems?: RestockItem$1[];
    }
    interface RestockItem$1 {
        /** ID of the line item being restocked. */
        lineItemId?: string;
        /** Line item quantity being restocked. */
        quantity?: number;
    }
    /** Triggered when the the order status changes to approved */
    interface OrderApproved {
        /** The order that was updated */
        order?: Order$1;
    }
    interface Task {
        key?: TaskKey;
        executeAt?: Date;
        payload?: string | null;
    }
    interface TaskKey {
        appId?: string;
        instanceId?: string;
        subjectId?: string | null;
    }
    interface TaskAction extends TaskActionActionOneOf {
        complete?: Complete;
        cancel?: Cancel;
        reschedule?: Reschedule;
    }
    /** @oneof */
    interface TaskActionActionOneOf {
        complete?: Complete;
        cancel?: Cancel;
        reschedule?: Reschedule;
    }
    interface Complete {
    }
    interface Cancel {
    }
    interface Reschedule {
        executeAt?: Date;
        payload?: string | null;
    }
    interface InvoiceSentEvent {
        _id?: IdAndVersion;
        /** @readonly */
        data?: InvoiceFields;
        /** @readonly */
        status?: InvoiceStatus;
    }
    interface IdAndVersion {
        _id?: string | null;
        version?: number | null;
    }
    interface InvoiceFields {
        /** The invoice number allocated the invoice by the server. The number is limited to at most 11 digits. */
        number?: string | null;
        /** The invoice 3-letter currency code in [ISO-4217 alphabetic](https://www.iso.org/iso-4217-currency-codes.html) format. */
        currencyCode?: string | null;
        /** The invoice customer. The customer must be a contact of the site, with an email. */
        customer?: Customer;
        /**
         * Invoice dates: issue date and due date are mandatory and provided when the invoice is created.
         * Last seen date is the optional date when the invoice was last seen be UoU.
         */
        dates?: InvoiceDates;
        /**
         * Line items containing the details of the products or services relevant to the invoice, with their name, prices,
         * and quantity. There must be at least one line item on the invoice.
         */
        lineItems?: LineItems;
        /**
         * Locale of the invoice, containing the language.
         * This field is not mandatory but is used for display purposes, to determine the appearance of numbers and dates
         * on the invoice.
         */
        locale?: Locale;
        /**
         * The totals on the invoice.
         * The totals.subtotal, totals.total and totals.taxed_amount are calculated by the server based on the line items.
         * Alternatively, these fields can be provided in the invoice creation request, in this case, these values are fixed.
         * The totals contain fees and a discount, that apply to the invoice.
         */
        totals?: TotalPrice;
        /** An optional discount on the invoice. */
        discount?: Discount$1;
        /** The taxes of the invoice. */
        taxes?: CalculatedTaxes;
        /** The payments on the invoice. The invoice has status paid if its payments cover the invoice total. */
        payments?: Payments;
        /** Invoice metadata */
        metaData?: MetaData;
        /** Not used */
        creationAdditionalBiInformation?: string | null;
        /**
         * The balance and amount paid on the invoice.
         * This read-only field is calculated based on the invoice totals and payments.
         * @readonly
         */
        dynamicTotals?: InvoiceDynamicPriceTotals;
        /** The invoice title */
        title?: string | null;
        /** Invoice custom fields */
        customFields?: CustomFieldValue[];
        /** Not used */
        designTemplateId?: string | null;
        /** Not used */
        createOrder?: boolean | null;
        /** The optional deposit of the invoice */
        deposit?: Deposit;
        /** associated checkout for this invoice */
        ecomCheckoutId?: string | null;
    }
    interface Customer {
        contactId?: string | null;
        name?: string | null;
        email?: Email;
        address?: QuotesAddress;
        phone?: Phone;
        company?: Company;
        firstName?: string | null;
        lastName?: string | null;
        billingAddress?: CommonAddress;
        shippingAddress?: CommonAddress;
    }
    interface Email {
        address?: string;
    }
    interface QuotesAddress {
        street?: string | null;
        city?: string | null;
        zip?: string | null;
        state?: string | null;
        country?: string | null;
        /** @readonly */
        description?: AddressDescription;
    }
    interface AddressDescription {
        content?: string;
        placement?: Placement;
    }
    enum Placement {
        Unknown = "Unknown",
        Replace = "Replace",
        Before = "Before",
        After = "After"
    }
    interface Phone {
        number?: string;
    }
    interface Company {
        name?: string;
        _id?: string | null;
    }
    /** Physical address */
    interface CommonAddress extends CommonAddressStreetOneOf {
        /** Country code. */
        country?: string | null;
        /** Subdivision. Usually a state, region, prefecture, or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
        subdivision?: string | null;
        /** City name. */
        city?: string | null;
        /** Zip/postal code. */
        postalCode?: string | null;
        /** Free text providing more detailed address info. Usually contains Apt, Suite, and Floor. */
        addressLine2?: string | null;
        /** Street name and number. */
        streetAddress?: StreetAddress$1;
        /** Main address line, usually street and number as free text. */
        addressLine1?: string | null;
    }
    /** @oneof */
    interface CommonAddressStreetOneOf {
        /** Street name and number. */
        streetAddress?: StreetAddress$1;
        /** Main address line, usually street and number as free text. */
        addressLine?: string | null;
    }
    interface AddressLocation {
        /** Address latitude. */
        latitude?: number | null;
        /** Address longitude. */
        longitude?: number | null;
    }
    interface Subdivision {
        /** Short subdivision code. */
        code?: string;
        /** Subdivision full name. */
        name?: string;
        /**
         * Subdivision level
         * @internal
         */
        type?: SubdivisionType;
        /**
         * Free text description of subdivision type.
         * @internal
         */
        typeInfo?: string | null;
    }
    enum SubdivisionType {
        UNKNOWN_SUBDIVISION_TYPE = "UNKNOWN_SUBDIVISION_TYPE",
        /** State */
        ADMINISTRATIVE_AREA_LEVEL_1 = "ADMINISTRATIVE_AREA_LEVEL_1",
        /** County */
        ADMINISTRATIVE_AREA_LEVEL_2 = "ADMINISTRATIVE_AREA_LEVEL_2",
        /** City/town */
        ADMINISTRATIVE_AREA_LEVEL_3 = "ADMINISTRATIVE_AREA_LEVEL_3",
        /** Neighborhood/quarter */
        ADMINISTRATIVE_AREA_LEVEL_4 = "ADMINISTRATIVE_AREA_LEVEL_4",
        /** Street/block */
        ADMINISTRATIVE_AREA_LEVEL_5 = "ADMINISTRATIVE_AREA_LEVEL_5",
        /** ADMINISTRATIVE_AREA_LEVEL_0. Indicates the national political entity, and is typically the highest order type returned by the Geocoder. */
        COUNTRY = "COUNTRY"
    }
    interface InvoiceDates {
        /** use UTC midnight date to set the issue date according to the site time zone */
        issueDate?: Date;
        /** use UTC midnight date to set the due date according to the site time zone */
        dueDate?: Date;
        /** <a href="http://joda-time.sourceforge.net/timezones.html">Valid time zones</a> */
        timeZoneCode?: string | null;
        /**
         * ignored in request use in response to get the site time zone
         * @readonly
         */
        lastSeenDate?: Date;
    }
    interface LineItems {
        lineItems?: LineItem$2[];
    }
    interface LineItem$2 {
        _id?: string;
        name?: string;
        description?: string | null;
        price?: BigDecimalWrapper;
        taxedTotal?: BigDecimalWrapper;
        quantity?: BigDecimalWrapper;
        taxes?: LineItemTax[];
        /** The source of the line item */
        source?: Source;
        /** The line-item level metadata. */
        metadata?: LineItemMetaData;
    }
    interface BigDecimalWrapper {
        serializedValue?: number;
    }
    interface LineItemTax {
        name?: string;
        rate?: BigDecimalWrapper;
        code?: string | null;
    }
    interface Source {
        /**
         * Source app or service ID.
         * @readonly
         */
        sourceId?: string;
        /**
         * App or service type.
         * @readonly
         */
        sourceType?: SourceType;
    }
    enum SourceType {
        UNKNOWN_SOURCE_TYPE = "UNKNOWN_SOURCE_TYPE",
        WIX_APP = "WIX_APP",
        EXTERNAL = "EXTERNAL",
        ADMIN = "ADMIN",
        OTHER = "OTHER"
    }
    interface LineItemMetaData {
        metadata?: Record<string, string>;
    }
    interface Locale {
        /** ISO 639 alpha-2 or alpha-3 language code, or a language subtag */
        language?: string;
        /** An ISO 3166 alpha-2 country code or a UN M.49 numeric-3 area code. */
        country?: string | null;
        invariant?: string | null;
    }
    interface TotalPrice {
        /** the subtotal of the line items without the tax reduction */
        subtotal?: BigDecimalWrapper;
        /** the total price taking into account the itemized fees and the taxes */
        total?: BigDecimalWrapper;
        fees?: ItemizedFee[];
        discountAmount?: BigDecimalWrapper;
        taxedAmount?: BigDecimalWrapper;
    }
    interface ItemizedFee {
        name?: string;
        price?: BigDecimalWrapper;
    }
    interface Discount$1 extends DiscountOneDiscountTypeOneOf {
        /**
         * Discount as fixed value. Currently only for internal use.
         * @internal
         */
        fixed?: BigDecimalWrapper;
        /** Discount as percentage value. */
        percentage?: BigDecimalWrapper;
    }
    /** @oneof */
    interface DiscountOneDiscountTypeOneOf {
        /**
         * Discount as fixed value. Currently only for internal use.
         * @internal
         */
        fixed?: BigDecimalWrapper;
        /** Discount as percentage value. */
        percentage?: BigDecimalWrapper;
    }
    interface CalculatedTaxes {
        /** consider calculated or not - cannot enforce set */
        taxes?: CalculatedTax[];
    }
    interface CalculatedTax {
        name?: string;
        rate?: BigDecimalWrapper;
        /** the costs on which the taxes are applied */
        taxable?: BigDecimalWrapper;
        /** the taxes as a result of the */
        taxed?: BigDecimalWrapper;
        code?: string | null;
    }
    interface Payments {
        payments?: Payment$1[];
    }
    interface Payment$1 {
        /** document */
        _id?: string;
        type?: string;
        amount?: BigDecimalWrapper;
        date?: Date;
        /**
         * The orderId of the order in cashier associated with the payment.
         * This field is populated for external payments that are charged by invoices via AddPayment endpoint.
         */
        orderId?: string | null;
        /**
         * The transactionId corresponding to the orderId of the payment which are returned by cashier.
         * This field is populated for external payments that are charged by invoices via AddPayment endpoint as well.
         */
        transactionId?: string | null;
    }
    interface MetaData {
        notes?: string | null;
        legalTerms?: string | null;
        sourceUrl?: string | null;
        sourceProperties?: Record<string, string>;
        source?: string | null;
        sourceRefId?: string | null;
        /** Optional indicator whether to allow editing of the invoice by other applications other than the source. Default is true. */
        allowEditByOthers?: boolean | null;
    }
    interface InvoiceDynamicPriceTotals {
        paidAmount?: BigDecimalWrapper;
        balance?: BigDecimalWrapper;
    }
    /**
     * A custom field value is used to add additional data to a financial document or to a financial document template.
     * The custom field value may be based on a custom field definition.
     */
    interface CustomFieldValue {
        /**
         * The unique id of the custom field value
         * @readonly
         */
        _id?: string | null;
        /** The display name of the custom field value */
        displayName?: string;
        /** The optional namespace of the custom field value. This field may be used to indicate intended usage or source. */
        namespace?: string | null;
        /** The group of the custom field indicates its intended placement in the financial document */
        group?: CustomFieldGroup;
        /** The value of the custom field */
        value?: Value;
        /** The optional key of the custom field definition on which the custom field value is based */
        originCustomFieldKey?: string | null;
    }
    enum CustomFieldGroup {
        UNKNOWN_CUSTOM_FIELD_GROUP = "UNKNOWN_CUSTOM_FIELD_GROUP",
        BUSINESS_DETAILS = "BUSINESS_DETAILS",
        CUSTOMER_DETAILS = "CUSTOMER_DETAILS",
        DOCUMENT = "DOCUMENT",
        FOOTER = "FOOTER",
        OTHER = "OTHER"
    }
    interface Value {
        value?: string;
        valueType?: ValueType;
    }
    enum ValueType {
        UNKNOWN_VALUE_TYPE = "UNKNOWN_VALUE_TYPE",
        STRING = "STRING",
        DATE = "DATE",
        BOOLEAN = "BOOLEAN",
        NUMBER = "NUMBER"
    }
    interface Deposit {
        /** The flat amount of the deposit. The flat amount of the deposit must be less than the invoice total. */
        flatAmount?: string;
        /**
         * The read-only percentage value of the deposit.
         * It is computed according to the flat_amount and the invoice total and is rounded to 2 digits precision.
         * @readonly
         */
        percentage?: string;
        /** The type of the deposit. The default is FLAT. */
        type?: DepositType;
    }
    enum DepositType {
        UNKNOWN = "UNKNOWN",
        FLAT = "FLAT",
        PERCENTAGE = "PERCENTAGE"
    }
    /**
     * InvoiceStatus allowed transitions based on current status:
     * Draft -> Deleted, Paid, Partially Paid, Sent
     * Sent -> Draft, Deleted, Void, Paid, Partially Paid, Processing, (Overdue)
     * Processing -> PartiallyPaid, Paid, Sent
     * Paid -> Void
     * PartiallyPaid -> Void, (PartialAndOverdue)
     * Void -> Deleted
     * Deleted
     */
    enum InvoiceStatus {
        Draft = "Draft",
        Sent = "Sent",
        Processing = "Processing",
        Paid = "Paid",
        Overdue = "Overdue",
        Void = "Void",
        Deleted = "Deleted",
        PartiallyPaid = "PartiallyPaid",
        PartialAndOverdue = "PartialAndOverdue"
    }
    interface TriggerSideEffectsFromLegacyData {
        storeId?: string;
        orderId?: string;
        ordersExperiments?: OrdersExperiments;
    }
    /** @internal
     * @documentationMaturity preview
     * @requiredField orderId
     */
    function sendBuyerConfirmationEmail(orderId: string): Promise<void>;
    /** @internal
     * @documentationMaturity preview
     * @requiredField orderId
     */
    function sendBuyerPaymentsReceivedEmail(orderId: string): Promise<void>;
    /** @internal
     * @documentationMaturity preview
     * @requiredField orderId
     */
    function sendBuyerPickupConfirmationEmail(orderId: string): Promise<void>;
    /** @internal
     * @documentationMaturity preview
     * @requiredField orderId
     */
    function sendBuyerShippingConfirmationEmail(orderId: string): Promise<void>;
    /**
     * this will send notification to merchant via both email and via Notification Hub
     * @internal
     * @documentationMaturity preview
     * @requiredField orderId
     */
    function sendMerchantOrderReceivedNotification(orderId: string): Promise<void>;
    /** @param orderId - The ID of order that is canceled/refunded
     * @internal
     * @documentationMaturity preview
     * @requiredField options.refundAmount
     * @requiredField options.refundAmount.amount
     * @requiredField orderId
     */
    function sendCancelRefundEmail(orderId: string, options?: SendCancelRefundEmailOptions): Promise<void>;
    interface SendCancelRefundEmailOptions {
        /** Personal note added to the email (optional) */
        customMessage?: string | null;
        /** Refund amount */
        refundAmount: Price$1;
    }
    /** @internal
     * @documentationMaturity preview
     * @requiredField emailType
     */
    function previewEmailByType(emailType: PreviewEmailType): Promise<PreviewEmailByTypeResponse>;
    /** @internal
     * @documentationMaturity preview
     * @requiredField options.refundAmount
     * @requiredField options.refundAmount.amount
     * @requiredField orderId
     */
    function previewRefundEmail(orderId: string, options?: PreviewRefundEmailOptions): Promise<PreviewRefundEmailResponse>;
    interface PreviewRefundEmailOptions {
        /** Refund amount */
        refundAmount: Price$1;
        /** Refund business details */
        details?: RefundDetails$1;
        /** Personal note added to the email (optional) */
        customMessage?: string | null;
    }
    /** @internal
     * @documentationMaturity preview
     * @requiredField orderId
     */
    function previewCancelEmail(orderId: string, options?: PreviewCancelEmailOptions): Promise<PreviewCancelEmailResponse>;
    interface PreviewCancelEmailOptions {
        /** Personal note added to the email (optional) */
        customMessage?: string | null;
    }
    /** @internal
     * @documentationMaturity preview
     * @requiredField orderId
     */
    function previewCancelRefundEmail(orderId: string, options?: PreviewCancelRefundEmailOptions): Promise<PreviewCancelRefundEmailResponse>;
    interface PreviewCancelRefundEmailOptions {
        /** Personal note added to the email (optional) */
        customMessage?: string | null;
        /** Refund amount */
        refundAmount?: Price$1;
    }
    /** @internal
     * @documentationMaturity preview
     */
    function previewBuyerPaymentsReceivedEmail(): Promise<PreviewBuyerPaymentsReceivedEmailResponse>;
    /**
     * Deprecated, use PreviewEmailByType with ORDER_PLACED type instead
     * @internal
     * @documentationMaturity preview
     */
    function previewBuyerConfirmationEmail(): Promise<PreviewBuyerConfirmationEmailResponse>;
    /**
     * Deprecated, use PreviewEmailByType with ORDER_READY_FOR_PICKUP type instead
     * @internal
     * @documentationMaturity preview
     */
    function previewBuyerPickupConfirmationEmail(): Promise<PreviewBuyerPickupConfirmationEmailResponse>;
    /**
     * Deprecated, use PreviewEmailByType with ORDER_SHIPPED type instead
     * @internal
     * @documentationMaturity preview
     */
    function previewShippingConfirmationEmail(): Promise<PreviewShippingConfirmationEmailResponse>;
    /**
     * Deprecated, use PreviewEmailByType with DOWNLOAD_LINKS type instead
     * @internal
     * @documentationMaturity preview
     */
    function previewResendDownloadLinksEmail(): Promise<PreviewResendDownloadLinksEmailResponse>;
    /**
     * Prepares payment collection for given ecom order. This is the first of 2-step process of payment collection.
     * Here we ensure that payment collection is possible for given order and store and prepare payment gateway order for future charge.
     * 2nd step is an actual charge of prepared payment gateway order. This could be done either
     * via Wix-Cashier's API (https://bo.wix.com/wix-docs/rest/wix-cashier/pay/charge/charge-for-order)
     * or using Cashier Payments Widget (https://github.com/wix-private/cashier-client/tree/master/packages/cashier-payments-widget)
     * @param ecomOrderId - Ecom order ID.
     * @param amount - Amount to collect
     * @internal
     * @documentationMaturity preview
     * @requiredField amount
     * @requiredField ecomOrderId
     */
    function preparePaymentCollection(ecomOrderId: string, amount: Price$1, options?: PreparePaymentCollectionOptions): Promise<PreparePaymentCollectionResponse>;
    interface PreparePaymentCollectionOptions {
        /**
         * Optional parameter. When present, payment collection will be performed using given payment gateway order.
         * Existing payment gateway order will be updated with a new amount.
         * When parameter is absent, new payment gateway order will be created and used for payment collection.
         */
        paymentGatewayOrderId?: string | null;
    }
    /**
     * Provides payment collectability status for given order. If payment collection is possible
     * response will contain collectable amount for given ecom order. If not - response will contain
     * reason why payment collection is not possible.
     * @param ecomOrderId - Ecom order ID.
     * @internal
     * @documentationMaturity preview
     * @requiredField ecomOrderId
     */
    function getPaymentCollectabilityStatus(ecomOrderId: string): Promise<GetPaymentCollectabilityStatusResponse>;
    /**
     * Records and approves new manual payment with provided custom amount on given order.
     * Existing pending payments are ignored.
     * Custom amount is expected to be less or equal remaining amount to be paid on order (affected by approved payments, refunds and gift card payments)
     * @param orderId - Order ID.
     * @param amount - Amount to be recorded as approved manual payment for given order
     * @internal
     * @documentationMaturity preview
     * @requiredField amount
     * @requiredField orderId
     */
    function recordManuallyCollectedPayment(orderId: string, amount: Price$1): Promise<void>;
    /**
     * Marks the order as paid. `order.paymentStatus` field *eventually* changes to `PAID`.
     * In case the order already has an offline payment transaction associated with it
     * (usually when manual payment method is chosen at checkout) - This transaction will become approved.
     * In case the order has no payment transactions associated with it
     * (usually when the item is set to be paid offline after checkout or when an order is created from the backoffice) - A payment transaction
     * will be created and approved.
     * @param ecomOrderId - Ecom order ID.
     * @internal
     * @documentationMaturity preview
     * @requiredField ecomOrderId
     */
    function paymentCollectionMarkOrderAsPaid(ecomOrderId: string): Promise<V1MarkOrderAsPaidResponse>;
    /**
     * Marks multiple orders as paid. `order.paymentStatus` field *eventually* changes to `PAID`.
     * @param ecomOrderIds - IDs of orders to mark as paid.
     * @internal
     * @documentationMaturity preview
     * @requiredField ecomOrderIds
     */
    function paymentCollectionBulkMarkOrdersAsPaid(ecomOrderIds: string[]): Promise<V1BulkMarkOrdersAsPaidResponse>;
    /**
     * Retrieves an order.
     *
     *
     * The `getOrder()` function returns a Promise that resolves when the specified order is retrieved.
     * @param _id - ID of the order to retrieve.
     * @public
     * @requiredField _id
     * @returns Fulfilled - The requested order.
     */
    function getOrder(_id: string): Promise<Order$1>;
    /**
     * <!--ONLY:REST-->
     * Returns a list of up to 300 orders, given the provided paging, filtering and sorting.
     *
     * To learn how to query orders, see
     * [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
     * For a detailed list of supported filters and sorting options,
     * see [Field Support for Filtering and Sorting](https://bo.wix.com/wix-docs/rest/ecommerce/orders/filter-and-sort#ecommerce_orders_filter-and-sort_field-support-for-filtering-and-sorting).
     * <!--END:ONLY:REST-->
     * @internal
     * @documentationMaturity preview
     */
    function queryOrders(): OrdersQueryBuilder;
    interface QueryCursorResult {
        hasNext: () => boolean;
        hasPrev: () => boolean;
        length: number;
        pageSize: number;
    }
    interface OrdersQueryResult extends QueryCursorResult {
        items: Order$1[];
        query: OrdersQueryBuilder;
        next: () => Promise<OrdersQueryResult>;
        prev: () => Promise<OrdersQueryResult>;
    }
    interface OrdersQueryBuilder {
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        eq: (propertyName: string, value: any) => OrdersQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        ne: (propertyName: string, value: any) => OrdersQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        ge: (propertyName: string, value: any) => OrdersQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        gt: (propertyName: string, value: any) => OrdersQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        le: (propertyName: string, value: any) => OrdersQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        lt: (propertyName: string, value: any) => OrdersQueryBuilder;
        /** @param propertyName - Property whose value is compared with `string`.
         * @param string - String to compare against. Case-insensitive.
         * @documentationMaturity preview
         */
        startsWith: (propertyName: string, value: string) => OrdersQueryBuilder;
        /** @param propertyName - Property whose value is compared with `values`.
         * @param values - List of values to compare against.
         * @documentationMaturity preview
         */
        hasSome: (propertyName: string, value: any[]) => OrdersQueryBuilder;
        /** @documentationMaturity preview */
        in: (propertyName: string, value: any) => OrdersQueryBuilder;
        /** @documentationMaturity preview */
        exists: (propertyName: string, value: boolean) => OrdersQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        ascending: (...propertyNames: string[]) => OrdersQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        descending: (...propertyNames: string[]) => OrdersQueryBuilder;
        /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
         * @documentationMaturity preview
         */
        limit: (limit: number) => OrdersQueryBuilder;
        /** @documentationMaturity preview */
        find: () => Promise<OrdersQueryResult>;
    }
    /**
     * Creates a new order.
     *
     * Some fields are marked as required. Note these further requirements:
     *
     * The `order.shippingInfo.logistics.shippingDestination.address` field must be provided, **unless**:
     * + The order is for pickup - `order.shippingInfo.logistics.pickupDetails.address` is defined
     * + There are no shippable items in the order - `order.lineItems[n].physicalProperties.shippable` boolean is `false`
     * + This is a POS (point of sale) order - `order.channelInfo.type` value is `POS`
     *
     * The `order.billingInfo.address` field must be provided **unless**:
     * + There are no shippable items in the order - `order.lineItems[n].physicalProperties.shippable` boolean is `false`
     * + This is a POS (point of sale) order - `order.channelInfo.type` value is `POS`
     *
     * When catalog items are added - `order.lineItems.catalogReference` is defined - the following rules apply:
     * + When providing description lines - `order.lineItem.descriptionLines.plainText/colorInfo` must have value
     * + If the product is digital ( `order.lineItems.itemType.preset: DIGITAL` ), then `order.lineItem.digitalFile` must be provided
     *
     * When custom line items are added - `order.lineItems.catalogReference` is **not** defined - the following rules apply:
     * + `order.lineItem.physicalProperties` cannot be set
     * + `order.lineItem.fulfillerId` cannot be set
     * + `order.lineItem.totalDiscount` cannot be set
     * + Applied discounts cannot be set for a custom line item - `order.appliedDiscounts.lineItemIds` cannot contain the custom line item ID.
     * @param order - Order info.
     * @internal
     * @documentationMaturity preview
     * @requiredField order
     * @requiredField order.billingInfo.address.country
     * @requiredField order.billingInfo.contactDetails
     * @requiredField order.billingInfo.contactDetails.firstName
     * @requiredField order.channelInfo
     * @requiredField order.lineItems
     * @requiredField order.lineItems.catalogReference.appId
     * @requiredField order.lineItems.catalogReference.catalogItemId
     * @requiredField order.lineItems.descriptionLines.name
     * @requiredField order.lineItems.itemType
     * @requiredField order.lineItems.price
     * @requiredField order.lineItems.productName
     * @requiredField order.lineItems.productName.original
     * @requiredField order.lineItems.subscriptionInfo.subscriptionSettings.interval
     * @requiredField order.lineItems.taxDetails
     * @returns Newly created order.
     */
    function createOrder(order: Order$1): Promise<Order$1>;
    /**
     * Archives an order. `order.archived` field changes to `true`.
     * @param _id - Order ID.
     * @internal
     * @documentationMaturity preview
     * @requiredField _id
     */
    function archiveOrder(_id: string): Promise<ArchiveOrderResponse>;
    /**
     * Archives multiple orders. `order.archived` field changes to `true`.
     * @param ids - IDs of orders to archive.
     * @internal
     * @documentationMaturity preview
     * @requiredField ids
     */
    function bulkArchiveOrders(ids: string[], options?: BulkArchiveOrdersOptions): Promise<BulkArchiveOrdersResponse>;
    interface BulkArchiveOrdersOptions {
        /** Whether to return the full updated order entities in the response. */
        returnFullEntity?: boolean;
    }
    /**
     * Archives multiple orders, selected by filter. `order.archived` field changes to `true`.
     * @param filter - Filter object. Learn more about supported filters [here](https://bo.wix.com/wix-docs/rest/ecommerce/orders/filter-and-sort).
     * @internal
     * @documentationMaturity preview
     * @requiredField filter
     */
    function bulkArchiveOrdersByFilter(filter: Record<string, any> | null): Promise<BulkArchiveOrdersByFilterResponse>;
    /**
     * Unarchives an order. `order.archived` field changes to `false`.
     * @param _id - Order ID.
     * @internal
     * @documentationMaturity preview
     * @requiredField _id
     */
    function unArchiveOrder(_id: string): Promise<UnArchiveOrderResponse>;
    /**
     * Unarchives multiple orders. `order.archived` field changes to `false`.
     * @param ids - IDs or orders to unarchive.
     * @internal
     * @documentationMaturity preview
     * @requiredField ids
     */
    function bulkUnArchiveOrders(ids: string[], options?: BulkUnArchiveOrdersOptions): Promise<BulkUnArchiveOrdersResponse>;
    interface BulkUnArchiveOrdersOptions {
        /** Whether to return the full updated order entities in the response. */
        returnFullEntity?: boolean;
    }
    /**
     * Unarchives multiple orders, selected by filter. `order.archived` field changes to `false`.
     * @param filter - Filter object. Learn more about supported filters [here](https://bo.wix.com/wix-docs/rest/ecommerce/orders/filter-and-sort).
     * @internal
     * @documentationMaturity preview
     * @requiredField filter
     */
    function bulkUnArchiveOrdersByFilter(filter: Record<string, any> | null): Promise<BulkUnArchiveOrdersByFilterResponse>;
    /**
     * Updates an order's contact ID and/or email.
     * > **Note:** Neither `email`, nor `contactId` can be removed, only updated.
     * @param _id - Order ID.
     * @internal
     * @documentationMaturity preview
     * @requiredField _id
     */
    function updateBuyerInfo(_id: string, options?: UpdateBuyerInfoOptions): Promise<UpdateBuyerInfoResponse>;
    interface UpdateBuyerInfoOptions {
        /**
         * Field mask of buyerInfo fields to update.
         * @internal
         */
        fieldMask?: string[];
        /** Buyer info. */
        buyerInfo?: BuyerInfoUpdate;
    }
    /**
     * Updates an order's shipping address and/or contact details.
     * > **Notes:**
     * > + Original order must have existing address to update - `order.shippingInfo.logistics.shippingDestination.address` must have existing value.
     * > + Neither `address`, nor `contactDetails` can be removed, only updated.
     * @param _id - Order ID.
     * @internal
     * @documentationMaturity preview
     * @requiredField _id
     * @requiredField options.shippingAddress
     */
    function updateOrderShippingAddress(_id: string, options?: UpdateOrderShippingAddressOptions): Promise<UpdateOrderShippingAddressResponse>;
    interface UpdateOrderShippingAddressOptions {
        /**
         * mask of shipping address fields to update
         * @internal
         */
        fieldMask?: string[];
        /** Shipping address and contact details to be updated. */
        shippingAddress: AddressWithContact;
    }
    /**
     * Updates an order's billing contact details.
     * @param _id - Order ID.
     * @internal
     * @documentationMaturity preview
     * @requiredField _id
     */
    function updateBillingContactDetails(_id: string, options?: UpdateBillingContactDetailsOptions): Promise<UpdateBillingContactDetailsResponse>;
    interface UpdateBillingContactDetailsOptions {
        /**
         * mask of contact details fields to update
         * @internal
         */
        fieldMask?: string[];
        /** Contact details. */
        addressContactDetails?: FullAddressContactDetails;
    }
    /** @param _id - Order ID.
     * @param activity - Activity info.
     * @internal
     * @documentationMaturity preview
     * @requiredField _id
     * @requiredField activity
     */
    function addInternalActivity(_id: string, activity: InternalActivity): Promise<AddInternalActivityResponse>;
    /**
     * Add's a custom activity or a merchant comment to an order.
     *
     * Examples of custom activities:
     * + Platform - notifications, payments
     * + Stores - digital link sent, pickup read, tracking link updated
     * + Bookings - checked-in, no-show, rescheduled, cancellation mail sent, reminders sent
     * + Events - attendee check-in, reminder mail sent, Zoom link set
     * @param _id - Order ID.
     * @param activity - Activity info.
     * @internal
     * @documentationMaturity preview
     * @requiredField _id
     * @requiredField activity
     */
    function addActivity(_id: string, activity: PublicActivity): Promise<AddActivityResponse>;
    /**
     * Updates an order's activity.
     * @param activity - Activity info.
     * @internal
     * @documentationMaturity preview
     * @requiredField activity
     * @requiredField identifiers
     * @requiredField identifiers.activityId
     * @requiredField identifiers.id
     */
    function updateActivity(identifiers: UpdateActivityIdentifiers, activity: PublicActivity): Promise<UpdateActivityResponse>;
    interface UpdateActivityIdentifiers {
        /** Order ID. */
        _id: string;
        /** ID of the activity to update. */
        activityId: string;
    }
    /**
     * Delete's an order's activity.
     *
     * Only custom activities and merchant comments can be deleted.
     * @internal
     * @documentationMaturity preview
     * @requiredField identifiers
     * @requiredField identifiers.activityId
     * @requiredField identifiers.id
     */
    function deleteActivity(identifiers: DeleteActivityIdentifiers): Promise<DeleteActivityResponse>;
    interface DeleteActivityIdentifiers {
        /** Order ID. */
        _id: string;
        /** ID of the activity to delete. */
        activityId: string;
    }
    /**
     * Updates an order's line item descriptions.
     * @param _id - Order ID.
     * @param lineItems - Line items.
     * @internal
     * @documentationMaturity preview
     * @requiredField _id
     * @requiredField lineItems
     * @requiredField lineItems.descriptionLines.name
     * @requiredField lineItems.descriptionLines.plainTextValue.original
     * @requiredField lineItems.descriptionLines.plainTextValue.translated
     * @requiredField lineItems.lineItemId
     */
    function updateLineItemsDescriptionLines(_id: string, lineItems: LineItemUpdate[]): Promise<UpdateLineItemsDescriptionLinesResponse>;
    /**
     * Marks an order as read in the dashboard. `order.seenByAHuman` field changes to `true`.
     * @param _id - Order ID.
     * @internal
     * @documentationMaturity preview
     * @requiredField _id
     */
    function markOrderAsSeenByHuman(_id: string): Promise<MarkOrderAsSeenByHumanResponse>;
    /**
     * Cancels an order. `order.status` field changes to `CANCELED`.
     * @param _id - Order ID.
     * @internal
     * @documentationMaturity preview
     * @requiredField _id
     */
    function cancelOrder(_id: string, options?: CancelOrderOptions): Promise<CancelOrderResponse>;
    interface CancelOrderOptions {
        /** Whether to send an order canceled email to the buyer. */
        sendOrderCanceledEmail?: boolean;
        /** Custom note to be added to the email (optional). */
        customMessage?: string | null;
        /** Whether to restock all items in the order. */
        restockAllItems?: boolean;
    }
    /**
     * Marks an order as fulfilled. `order.fulfillmentStatus` field changes to `FULFILLED`.
     * @param _id - Order ID.
     * @internal
     * @documentationMaturity preview
     * @requiredField _id
     */
    function markAsFulfilled(_id: string): Promise<MarkAsFulfilledResponse>;
    /**
     * Marks multiple orders as fulfilled. `order.fulfillmentStatus` field changes to `FULFILLED`.
     * @param ids - IDs of orders to be marked as fulfilled.
     * @internal
     * @documentationMaturity preview
     * @requiredField ids
     */
    function bulkMarkAsFulfilled(ids: string[], options?: BulkMarkAsFulfilledOptions): Promise<BulkMarkAsFulfilledResponse>;
    interface BulkMarkAsFulfilledOptions {
        /** Whether to return the full updated order entities in the response. */
        returnFullEntity?: boolean;
    }
    /**
     * Marks multiple orders as fulfilled, selected by filter. `order.fulfillmentStatus` field changes to `FULFILLED`.
     * @param filter - Filter object. Learn more about supported filters [here](https://bo.wix.com/wix-docs/rest/ecommerce/orders/filter-and-sort).
     * @internal
     * @documentationMaturity preview
     * @requiredField filter
     */
    function bulkMarkAsFulfilledByFilter(filter: Record<string, any> | null): Promise<BulkMarkAsFulfilledByFilterResponse>;
    /**
     * Marks an order as not fulfilled. `order.fulfillmentStatus` field changes to `NOT_FULFILLED`.
     * @param _id - Order ID.
     * @internal
     * @documentationMaturity preview
     * @requiredField _id
     */
    function markAsUnfulfilled(_id: string): Promise<MarkAsUnfulfilledResponse>;
    /**
     * Marks multiple orders as not fulfilled. `order.fulfillmentStatus` field changes to `NOT_FULFILLED`.
     * @param ids - IDs of orders to be marked as not fulfilled.
     * @internal
     * @documentationMaturity preview
     * @requiredField ids
     */
    function bulkMarkAsUnfulfilled(ids: string[], options?: BulkMarkAsUnfulfilledOptions): Promise<BulkMarkAsUnfulfilledResponse>;
    interface BulkMarkAsUnfulfilledOptions {
        /** Whether to return the full updated order entities in the response. */
        returnFullEntity?: boolean;
    }
    /**
     * Marks multiple orders as not fulfilled, selected by filter. `order.fulfillmentStatus` field changes to `NOT_FULFILLED`.
     * @param filter - Filter object. Learn more about supported filters [here](https://bo.wix.com/wix-docs/rest/ecommerce/orders/filter-and-sort).
     * @internal
     * @documentationMaturity preview
     * @requiredField filter
     */
    function bulkMarkAsUnfulfilledByFilter(filter: Record<string, any> | null): Promise<BulkMarkAsUnfulfilledByFilterResponse>;
    /**
     * Marks the order as paid. `order.paymentStatus` field *eventually* changes to `PAID`.
     * In case the order already has an offline payment transaction associated with it (usually when manual payment method is chosen at checkout) - This transaction will become approved.
     * In case the order has no payment transactions associated with it (usually when the item is set to be paid offline after checkout or when an order is created from the backoffice) - A payment transaction will be created and approved.
     * @param _id - Order ID.
     * @internal
     * @documentationMaturity preview
     * @requiredField _id
     */
    function markOrderAsPaid(_id: string): Promise<MarkOrderAsPaidResponse>;
    /**
     * Marks multiple orders as paid. `order.paymentStatus` field *eventually* changes to `PAID`.
     * @param ids - IDs of orders to mark as paid.
     * @internal
     * @documentationMaturity preview
     * @requiredField ids
     */
    function bulkMarkOrdersAsPaid(ids: string[]): Promise<BulkMarkOrdersAsPaidResponse>;
    /**
     * Call this endpoint to create an order in the payment gateway system. The amount of the order would be either:
     * 1. An explicit amount provided in the request, or;
     * 2. If an explicit amount is not provided - the remaining amount to complete the payment of that eCom order.
     * As a result, an ID of the created payment gateway order would be returned.
     * You can then use Wix Payments APIs to approve that order or collect payment, which will eventually change the eCom order state (e.g mark it as paid).
     * @param ecomOrderId - eCom Order ID
     * @internal
     * @documentationMaturity preview
     * @requiredField ecomOrderId
     */
    function createPaymentGatewayOrder(ecomOrderId: string): Promise<CreatePaymentGatewayOrderResponse>;
    /**
     * returns shipping label ids - temporarily until fully modeled in fulfillments service
     * @internal
     * @documentationMaturity preview
     * @requiredField _id
     */
    function getShipments(_id: string): Promise<GetShipmentsResponse>;
    /** @internal
     * @documentationMaturity preview
     * @requiredField options.aggregation
     */
    function aggregateOrders(options?: AggregateOrdersOptions): Promise<AggregateOrdersResponse>;
    interface AggregateOrdersOptions {
        /** Filter applied to original data */
        filter?: Record<string, any> | null;
        /** This is an object defining aggregation itself */
        aggregation: Record<string, any> | null;
    }
    /**
     * Restock items on order - temporary solution for POS
     * @param _id - Order ID
     * @param decrementData - Which items to decrement, and how much to decrement from each one
     * @internal
     * @documentationMaturity preview
     * @requiredField _id
     * @requiredField decrementData
     */
    function decrementItemsQuantity(_id: string, decrementData: DecrementData[]): Promise<DecrementItemsQuantityResponse>;
    type ecomV1Order_universal_d_OrderLineItem = OrderLineItem;
    type ecomV1Order_universal_d_ProductName = ProductName;
    type ecomV1Order_universal_d_DescriptionLine = DescriptionLine;
    type ecomV1Order_universal_d_DescriptionLineValueOneOf = DescriptionLineValueOneOf;
    type ecomV1Order_universal_d_DescriptionLineDescriptionLineValueOneOf = DescriptionLineDescriptionLineValueOneOf;
    type ecomV1Order_universal_d_DescriptionLineName = DescriptionLineName;
    type ecomV1Order_universal_d_PlainTextValue = PlainTextValue;
    type ecomV1Order_universal_d_Color = Color;
    type ecomV1Order_universal_d_DescriptionLineType = DescriptionLineType;
    const ecomV1Order_universal_d_DescriptionLineType: typeof DescriptionLineType;
    type ecomV1Order_universal_d_ItemType = ItemType;
    type ecomV1Order_universal_d_ItemTypeItemTypeDataOneOf = ItemTypeItemTypeDataOneOf;
    type ecomV1Order_universal_d_ItemTypeItemType = ItemTypeItemType;
    const ecomV1Order_universal_d_ItemTypeItemType: typeof ItemTypeItemType;
    type ecomV1Order_universal_d_PriceDescription = PriceDescription;
    type ecomV1Order_universal_d_BuyerInfoIdOneOf = BuyerInfoIdOneOf;
    type ecomV1Order_universal_d_AddressWithContact = AddressWithContact;
    type ecomV1Order_universal_d_FullAddressContactDetails = FullAddressContactDetails;
    type ecomV1Order_universal_d_DeliveryLogisticsAddressOneOf = DeliveryLogisticsAddressOneOf;
    type ecomV1Order_universal_d_OrderStatus = OrderStatus;
    const ecomV1Order_universal_d_OrderStatus: typeof OrderStatus;
    type ecomV1Order_universal_d_MerchantDiscountMerchantDiscountReasonOneOf = MerchantDiscountMerchantDiscountReasonOneOf;
    type ecomV1Order_universal_d_DiscountReason = DiscountReason;
    const ecomV1Order_universal_d_DiscountReason: typeof DiscountReason;
    type ecomV1Order_universal_d_ActivityContentOneOf = ActivityContentOneOf;
    type ecomV1Order_universal_d_CustomActivity = CustomActivity;
    type ecomV1Order_universal_d_MerchantComment = MerchantComment;
    type ecomV1Order_universal_d_OrderCreatedFromExchange = OrderCreatedFromExchange;
    type ecomV1Order_universal_d_NewExchangeOrderCreated = NewExchangeOrderCreated;
    type ecomV1Order_universal_d_LineItemExchangeData = LineItemExchangeData;
    type ecomV1Order_universal_d_AttributionSource = AttributionSource;
    const ecomV1Order_universal_d_AttributionSource: typeof AttributionSource;
    type ecomV1Order_universal_d_CreatedBy = CreatedBy;
    type ecomV1Order_universal_d_CreatedByStringOneOf = CreatedByStringOneOf;
    type ecomV1Order_universal_d_BalanceSummary = BalanceSummary;
    type ecomV1Order_universal_d_Balance = Balance;
    type ecomV1Order_universal_d_SendOrderPaymentReceivedEmail = SendOrderPaymentReceivedEmail;
    type ecomV1Order_universal_d_OrdersExperiments = OrdersExperiments;
    type ecomV1Order_universal_d_SendBuyerConfirmationEmailRequest = SendBuyerConfirmationEmailRequest;
    type ecomV1Order_universal_d_SendBuyerConfirmationEmailResponse = SendBuyerConfirmationEmailResponse;
    type ecomV1Order_universal_d_SendBuyerPaymentsReceivedEmailRequest = SendBuyerPaymentsReceivedEmailRequest;
    type ecomV1Order_universal_d_SendBuyerPaymentsReceivedEmailResponse = SendBuyerPaymentsReceivedEmailResponse;
    type ecomV1Order_universal_d_SendBuyerPickupConfirmationEmailRequest = SendBuyerPickupConfirmationEmailRequest;
    type ecomV1Order_universal_d_SendBuyerPickupConfirmationEmailResponse = SendBuyerPickupConfirmationEmailResponse;
    type ecomV1Order_universal_d_SendBuyerShippingConfirmationEmailRequest = SendBuyerShippingConfirmationEmailRequest;
    type ecomV1Order_universal_d_SendBuyerShippingConfirmationEmailResponse = SendBuyerShippingConfirmationEmailResponse;
    type ecomV1Order_universal_d_SendMerchantOrderReceivedNotificationRequest = SendMerchantOrderReceivedNotificationRequest;
    type ecomV1Order_universal_d_SendMerchantOrderReceivedNotificationResponse = SendMerchantOrderReceivedNotificationResponse;
    type ecomV1Order_universal_d_SendCancelRefundEmailRequest = SendCancelRefundEmailRequest;
    type ecomV1Order_universal_d_SendCancelRefundEmailResponse = SendCancelRefundEmailResponse;
    type ecomV1Order_universal_d_PreviewEmailByTypeRequest = PreviewEmailByTypeRequest;
    type ecomV1Order_universal_d_PreviewEmailType = PreviewEmailType;
    const ecomV1Order_universal_d_PreviewEmailType: typeof PreviewEmailType;
    type ecomV1Order_universal_d_PreviewEmailByTypeResponse = PreviewEmailByTypeResponse;
    type ecomV1Order_universal_d_PreviewRefundEmailRequest = PreviewRefundEmailRequest;
    type ecomV1Order_universal_d_PreviewRefundEmailResponse = PreviewRefundEmailResponse;
    type ecomV1Order_universal_d_PreviewCancelEmailRequest = PreviewCancelEmailRequest;
    type ecomV1Order_universal_d_PreviewCancelEmailResponse = PreviewCancelEmailResponse;
    type ecomV1Order_universal_d_PreviewCancelRefundEmailRequest = PreviewCancelRefundEmailRequest;
    type ecomV1Order_universal_d_PreviewCancelRefundEmailResponse = PreviewCancelRefundEmailResponse;
    type ecomV1Order_universal_d_PreviewBuyerPaymentsReceivedEmailRequest = PreviewBuyerPaymentsReceivedEmailRequest;
    type ecomV1Order_universal_d_PreviewBuyerPaymentsReceivedEmailResponse = PreviewBuyerPaymentsReceivedEmailResponse;
    type ecomV1Order_universal_d_PreviewBuyerConfirmationEmailRequest = PreviewBuyerConfirmationEmailRequest;
    type ecomV1Order_universal_d_PreviewBuyerConfirmationEmailResponse = PreviewBuyerConfirmationEmailResponse;
    type ecomV1Order_universal_d_PreviewBuyerPickupConfirmationEmailRequest = PreviewBuyerPickupConfirmationEmailRequest;
    type ecomV1Order_universal_d_PreviewBuyerPickupConfirmationEmailResponse = PreviewBuyerPickupConfirmationEmailResponse;
    type ecomV1Order_universal_d_PreviewShippingConfirmationEmailRequest = PreviewShippingConfirmationEmailRequest;
    type ecomV1Order_universal_d_PreviewShippingConfirmationEmailResponse = PreviewShippingConfirmationEmailResponse;
    type ecomV1Order_universal_d_PreviewResendDownloadLinksEmailRequest = PreviewResendDownloadLinksEmailRequest;
    type ecomV1Order_universal_d_PreviewResendDownloadLinksEmailResponse = PreviewResendDownloadLinksEmailResponse;
    type ecomV1Order_universal_d_DomainEvent = DomainEvent;
    type ecomV1Order_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
    type ecomV1Order_universal_d_EntityCreatedEvent = EntityCreatedEvent;
    type ecomV1Order_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
    type ecomV1Order_universal_d_EntityDeletedEvent = EntityDeletedEvent;
    type ecomV1Order_universal_d_ActionEvent = ActionEvent;
    type ecomV1Order_universal_d_ExtendedFieldsUpdatedEvent = ExtendedFieldsUpdatedEvent;
    type ecomV1Order_universal_d_Empty = Empty;
    type ecomV1Order_universal_d_PreparePaymentCollectionRequest = PreparePaymentCollectionRequest;
    type ecomV1Order_universal_d_PreparePaymentCollectionResponse = PreparePaymentCollectionResponse;
    type ecomV1Order_universal_d_GetPaymentCollectabilityStatusRequest = GetPaymentCollectabilityStatusRequest;
    type ecomV1Order_universal_d_GetPaymentCollectabilityStatusResponse = GetPaymentCollectabilityStatusResponse;
    type ecomV1Order_universal_d_PaymentCollectabilityStatus = PaymentCollectabilityStatus;
    const ecomV1Order_universal_d_PaymentCollectabilityStatus: typeof PaymentCollectabilityStatus;
    type ecomV1Order_universal_d_RecordManuallyCollectedPaymentRequest = RecordManuallyCollectedPaymentRequest;
    type ecomV1Order_universal_d_RecordManuallyCollectedPaymentResponse = RecordManuallyCollectedPaymentResponse;
    type ecomV1Order_universal_d_V1MarkOrderAsPaidRequest = V1MarkOrderAsPaidRequest;
    type ecomV1Order_universal_d_V1MarkOrderAsPaidResponse = V1MarkOrderAsPaidResponse;
    type ecomV1Order_universal_d_PaymentStatusUpdated = PaymentStatusUpdated;
    type ecomV1Order_universal_d_V1BulkMarkOrdersAsPaidRequest = V1BulkMarkOrdersAsPaidRequest;
    type ecomV1Order_universal_d_V1BulkMarkOrdersAsPaidResponse = V1BulkMarkOrdersAsPaidResponse;
    type ecomV1Order_universal_d_BulkOrderResult = BulkOrderResult;
    type ecomV1Order_universal_d_ContinueSideEffectsFlowInLegacyData = ContinueSideEffectsFlowInLegacyData;
    type ecomV1Order_universal_d_GetOrderRequest = GetOrderRequest;
    type ecomV1Order_universal_d_GetOrderResponse = GetOrderResponse;
    type ecomV1Order_universal_d_QueryOrderRequest = QueryOrderRequest;
    type ecomV1Order_universal_d_PlatformQuery = PlatformQuery;
    type ecomV1Order_universal_d_PlatformQueryPagingMethodOneOf = PlatformQueryPagingMethodOneOf;
    type ecomV1Order_universal_d_Sorting = Sorting;
    type ecomV1Order_universal_d_SortOrder = SortOrder;
    const ecomV1Order_universal_d_SortOrder: typeof SortOrder;
    type ecomV1Order_universal_d_PlatformPaging = PlatformPaging;
    type ecomV1Order_universal_d_CursorPaging = CursorPaging;
    type ecomV1Order_universal_d_QueryOrderResponse = QueryOrderResponse;
    type ecomV1Order_universal_d_PlatformPagingMetadata = PlatformPagingMetadata;
    type ecomV1Order_universal_d_Cursors = Cursors;
    type ecomV1Order_universal_d_CreateOrderRequest = CreateOrderRequest;
    type ecomV1Order_universal_d_CreateOrderResponse = CreateOrderResponse;
    type ecomV1Order_universal_d_ArchiveOrderRequest = ArchiveOrderRequest;
    type ecomV1Order_universal_d_ArchiveOrderResponse = ArchiveOrderResponse;
    type ecomV1Order_universal_d_BulkArchiveOrdersRequest = BulkArchiveOrdersRequest;
    type ecomV1Order_universal_d_BulkArchiveOrdersResponse = BulkArchiveOrdersResponse;
    type ecomV1Order_universal_d_BulkArchiveOrdersByFilterRequest = BulkArchiveOrdersByFilterRequest;
    type ecomV1Order_universal_d_BulkArchiveOrdersByFilterResponse = BulkArchiveOrdersByFilterResponse;
    type ecomV1Order_universal_d_UnArchiveOrderRequest = UnArchiveOrderRequest;
    type ecomV1Order_universal_d_UnArchiveOrderResponse = UnArchiveOrderResponse;
    type ecomV1Order_universal_d_BulkUnArchiveOrdersRequest = BulkUnArchiveOrdersRequest;
    type ecomV1Order_universal_d_BulkUnArchiveOrdersResponse = BulkUnArchiveOrdersResponse;
    type ecomV1Order_universal_d_BulkUnArchiveOrdersByFilterRequest = BulkUnArchiveOrdersByFilterRequest;
    type ecomV1Order_universal_d_BulkUnArchiveOrdersByFilterResponse = BulkUnArchiveOrdersByFilterResponse;
    type ecomV1Order_universal_d_UpdateBuyerInfoRequest = UpdateBuyerInfoRequest;
    type ecomV1Order_universal_d_BuyerInfoUpdate = BuyerInfoUpdate;
    type ecomV1Order_universal_d_UpdateBuyerInfoResponse = UpdateBuyerInfoResponse;
    type ecomV1Order_universal_d_UpdateOrderShippingAddressRequest = UpdateOrderShippingAddressRequest;
    type ecomV1Order_universal_d_UpdateOrderShippingAddressResponse = UpdateOrderShippingAddressResponse;
    type ecomV1Order_universal_d_UpdateBillingContactDetailsRequest = UpdateBillingContactDetailsRequest;
    type ecomV1Order_universal_d_UpdateBillingContactDetailsResponse = UpdateBillingContactDetailsResponse;
    type ecomV1Order_universal_d_AddInternalActivityRequest = AddInternalActivityRequest;
    type ecomV1Order_universal_d_InternalActivity = InternalActivity;
    type ecomV1Order_universal_d_InternalActivityContentOneOf = InternalActivityContentOneOf;
    type ecomV1Order_universal_d_OrderPlaced = OrderPlaced;
    type ecomV1Order_universal_d_OrderPaid = OrderPaid;
    type ecomV1Order_universal_d_OrderFulfilled = OrderFulfilled;
    type ecomV1Order_universal_d_OrderNotFulfilled = OrderNotFulfilled;
    type ecomV1Order_universal_d_OrderCanceled = OrderCanceled;
    type ecomV1Order_universal_d_DownloadLinkSent = DownloadLinkSent;
    type ecomV1Order_universal_d_TrackingNumberAdded = TrackingNumberAdded;
    type ecomV1Order_universal_d_TrackingNumberEdited = TrackingNumberEdited;
    type ecomV1Order_universal_d_TrackingLinkAdded = TrackingLinkAdded;
    type ecomV1Order_universal_d_ShippingConfirmationEmailSent = ShippingConfirmationEmailSent;
    type ecomV1Order_universal_d_InvoiceAdded = InvoiceAdded;
    type ecomV1Order_universal_d_InvoiceSent = InvoiceSent;
    type ecomV1Order_universal_d_FulfillerEmailSent = FulfillerEmailSent;
    type ecomV1Order_universal_d_ShippingAddressEdited = ShippingAddressEdited;
    type ecomV1Order_universal_d_EmailEdited = EmailEdited;
    type ecomV1Order_universal_d_PickupReadyEmailSent = PickupReadyEmailSent;
    type ecomV1Order_universal_d_OrderPartiallyPaid = OrderPartiallyPaid;
    type ecomV1Order_universal_d_AddInternalActivityResponse = AddInternalActivityResponse;
    type ecomV1Order_universal_d_AddActivityRequest = AddActivityRequest;
    type ecomV1Order_universal_d_PublicActivity = PublicActivity;
    type ecomV1Order_universal_d_PublicActivityContentOneOf = PublicActivityContentOneOf;
    type ecomV1Order_universal_d_AddActivityResponse = AddActivityResponse;
    type ecomV1Order_universal_d_UpdateActivityRequest = UpdateActivityRequest;
    type ecomV1Order_universal_d_UpdateActivityResponse = UpdateActivityResponse;
    type ecomV1Order_universal_d_DeleteActivityRequest = DeleteActivityRequest;
    type ecomV1Order_universal_d_DeleteActivityResponse = DeleteActivityResponse;
    type ecomV1Order_universal_d_UpdateLineItemsDescriptionLinesRequest = UpdateLineItemsDescriptionLinesRequest;
    type ecomV1Order_universal_d_LineItemUpdate = LineItemUpdate;
    type ecomV1Order_universal_d_UpdateLineItemsDescriptionLinesResponse = UpdateLineItemsDescriptionLinesResponse;
    type ecomV1Order_universal_d_MarkOrderAsSeenByHumanRequest = MarkOrderAsSeenByHumanRequest;
    type ecomV1Order_universal_d_MarkOrderAsSeenByHumanResponse = MarkOrderAsSeenByHumanResponse;
    type ecomV1Order_universal_d_CancelOrderRequest = CancelOrderRequest;
    type ecomV1Order_universal_d_CancelOrderResponse = CancelOrderResponse;
    type ecomV1Order_universal_d_OrderCanceledEventOrderCanceled = OrderCanceledEventOrderCanceled;
    type ecomV1Order_universal_d_MarkAsFulfilledRequest = MarkAsFulfilledRequest;
    type ecomV1Order_universal_d_MarkAsFulfilledResponse = MarkAsFulfilledResponse;
    type ecomV1Order_universal_d_FulfillmentStatusUpdated = FulfillmentStatusUpdated;
    type ecomV1Order_universal_d_BulkMarkAsFulfilledRequest = BulkMarkAsFulfilledRequest;
    type ecomV1Order_universal_d_BulkMarkAsFulfilledResponse = BulkMarkAsFulfilledResponse;
    type ecomV1Order_universal_d_BulkMarkAsFulfilledByFilterRequest = BulkMarkAsFulfilledByFilterRequest;
    type ecomV1Order_universal_d_BulkMarkAsFulfilledByFilterResponse = BulkMarkAsFulfilledByFilterResponse;
    type ecomV1Order_universal_d_MarkAsUnfulfilledRequest = MarkAsUnfulfilledRequest;
    type ecomV1Order_universal_d_MarkAsUnfulfilledResponse = MarkAsUnfulfilledResponse;
    type ecomV1Order_universal_d_BulkMarkAsUnfulfilledRequest = BulkMarkAsUnfulfilledRequest;
    type ecomV1Order_universal_d_BulkMarkAsUnfulfilledResponse = BulkMarkAsUnfulfilledResponse;
    type ecomV1Order_universal_d_BulkMarkAsUnfulfilledByFilterRequest = BulkMarkAsUnfulfilledByFilterRequest;
    type ecomV1Order_universal_d_BulkMarkAsUnfulfilledByFilterResponse = BulkMarkAsUnfulfilledByFilterResponse;
    type ecomV1Order_universal_d_MarkOrderAsPaidRequest = MarkOrderAsPaidRequest;
    type ecomV1Order_universal_d_MarkOrderAsPaidResponse = MarkOrderAsPaidResponse;
    type ecomV1Order_universal_d_BulkMarkOrdersAsPaidRequest = BulkMarkOrdersAsPaidRequest;
    type ecomV1Order_universal_d_BulkMarkOrdersAsPaidResponse = BulkMarkOrdersAsPaidResponse;
    type ecomV1Order_universal_d_CreatePaymentGatewayOrderRequest = CreatePaymentGatewayOrderRequest;
    type ecomV1Order_universal_d_CreatePaymentGatewayOrderResponse = CreatePaymentGatewayOrderResponse;
    type ecomV1Order_universal_d_GetShipmentsRequest = GetShipmentsRequest;
    type ecomV1Order_universal_d_GetShipmentsResponse = GetShipmentsResponse;
    type ecomV1Order_universal_d_AggregateOrdersRequest = AggregateOrdersRequest;
    type ecomV1Order_universal_d_AggregateOrdersResponse = AggregateOrdersResponse;
    type ecomV1Order_universal_d_DecrementItemsQuantityRequest = DecrementItemsQuantityRequest;
    type ecomV1Order_universal_d_DecrementData = DecrementData;
    type ecomV1Order_universal_d_DecrementItemsQuantityResponse = DecrementItemsQuantityResponse;
    type ecomV1Order_universal_d_OrderItemsRestocked = OrderItemsRestocked;
    type ecomV1Order_universal_d_OrderApproved = OrderApproved;
    type ecomV1Order_universal_d_Task = Task;
    type ecomV1Order_universal_d_TaskKey = TaskKey;
    type ecomV1Order_universal_d_TaskAction = TaskAction;
    type ecomV1Order_universal_d_TaskActionActionOneOf = TaskActionActionOneOf;
    type ecomV1Order_universal_d_Complete = Complete;
    type ecomV1Order_universal_d_Cancel = Cancel;
    type ecomV1Order_universal_d_Reschedule = Reschedule;
    type ecomV1Order_universal_d_InvoiceSentEvent = InvoiceSentEvent;
    type ecomV1Order_universal_d_IdAndVersion = IdAndVersion;
    type ecomV1Order_universal_d_InvoiceFields = InvoiceFields;
    type ecomV1Order_universal_d_Customer = Customer;
    type ecomV1Order_universal_d_Email = Email;
    type ecomV1Order_universal_d_QuotesAddress = QuotesAddress;
    type ecomV1Order_universal_d_AddressDescription = AddressDescription;
    type ecomV1Order_universal_d_Placement = Placement;
    const ecomV1Order_universal_d_Placement: typeof Placement;
    type ecomV1Order_universal_d_Phone = Phone;
    type ecomV1Order_universal_d_Company = Company;
    type ecomV1Order_universal_d_CommonAddress = CommonAddress;
    type ecomV1Order_universal_d_CommonAddressStreetOneOf = CommonAddressStreetOneOf;
    type ecomV1Order_universal_d_AddressLocation = AddressLocation;
    type ecomV1Order_universal_d_Subdivision = Subdivision;
    type ecomV1Order_universal_d_SubdivisionType = SubdivisionType;
    const ecomV1Order_universal_d_SubdivisionType: typeof SubdivisionType;
    type ecomV1Order_universal_d_InvoiceDates = InvoiceDates;
    type ecomV1Order_universal_d_LineItems = LineItems;
    type ecomV1Order_universal_d_BigDecimalWrapper = BigDecimalWrapper;
    type ecomV1Order_universal_d_LineItemTax = LineItemTax;
    type ecomV1Order_universal_d_Source = Source;
    type ecomV1Order_universal_d_SourceType = SourceType;
    const ecomV1Order_universal_d_SourceType: typeof SourceType;
    type ecomV1Order_universal_d_LineItemMetaData = LineItemMetaData;
    type ecomV1Order_universal_d_Locale = Locale;
    type ecomV1Order_universal_d_TotalPrice = TotalPrice;
    type ecomV1Order_universal_d_ItemizedFee = ItemizedFee;
    type ecomV1Order_universal_d_DiscountOneDiscountTypeOneOf = DiscountOneDiscountTypeOneOf;
    type ecomV1Order_universal_d_CalculatedTaxes = CalculatedTaxes;
    type ecomV1Order_universal_d_CalculatedTax = CalculatedTax;
    type ecomV1Order_universal_d_Payments = Payments;
    type ecomV1Order_universal_d_MetaData = MetaData;
    type ecomV1Order_universal_d_InvoiceDynamicPriceTotals = InvoiceDynamicPriceTotals;
    type ecomV1Order_universal_d_CustomFieldValue = CustomFieldValue;
    type ecomV1Order_universal_d_CustomFieldGroup = CustomFieldGroup;
    const ecomV1Order_universal_d_CustomFieldGroup: typeof CustomFieldGroup;
    type ecomV1Order_universal_d_Value = Value;
    type ecomV1Order_universal_d_ValueType = ValueType;
    const ecomV1Order_universal_d_ValueType: typeof ValueType;
    type ecomV1Order_universal_d_Deposit = Deposit;
    type ecomV1Order_universal_d_DepositType = DepositType;
    const ecomV1Order_universal_d_DepositType: typeof DepositType;
    type ecomV1Order_universal_d_InvoiceStatus = InvoiceStatus;
    const ecomV1Order_universal_d_InvoiceStatus: typeof InvoiceStatus;
    type ecomV1Order_universal_d_TriggerSideEffectsFromLegacyData = TriggerSideEffectsFromLegacyData;
    const ecomV1Order_universal_d_sendBuyerConfirmationEmail: typeof sendBuyerConfirmationEmail;
    const ecomV1Order_universal_d_sendBuyerPaymentsReceivedEmail: typeof sendBuyerPaymentsReceivedEmail;
    const ecomV1Order_universal_d_sendBuyerPickupConfirmationEmail: typeof sendBuyerPickupConfirmationEmail;
    const ecomV1Order_universal_d_sendBuyerShippingConfirmationEmail: typeof sendBuyerShippingConfirmationEmail;
    const ecomV1Order_universal_d_sendMerchantOrderReceivedNotification: typeof sendMerchantOrderReceivedNotification;
    const ecomV1Order_universal_d_sendCancelRefundEmail: typeof sendCancelRefundEmail;
    type ecomV1Order_universal_d_SendCancelRefundEmailOptions = SendCancelRefundEmailOptions;
    const ecomV1Order_universal_d_previewEmailByType: typeof previewEmailByType;
    const ecomV1Order_universal_d_previewRefundEmail: typeof previewRefundEmail;
    type ecomV1Order_universal_d_PreviewRefundEmailOptions = PreviewRefundEmailOptions;
    const ecomV1Order_universal_d_previewCancelEmail: typeof previewCancelEmail;
    type ecomV1Order_universal_d_PreviewCancelEmailOptions = PreviewCancelEmailOptions;
    const ecomV1Order_universal_d_previewCancelRefundEmail: typeof previewCancelRefundEmail;
    type ecomV1Order_universal_d_PreviewCancelRefundEmailOptions = PreviewCancelRefundEmailOptions;
    const ecomV1Order_universal_d_previewBuyerPaymentsReceivedEmail: typeof previewBuyerPaymentsReceivedEmail;
    const ecomV1Order_universal_d_previewBuyerConfirmationEmail: typeof previewBuyerConfirmationEmail;
    const ecomV1Order_universal_d_previewBuyerPickupConfirmationEmail: typeof previewBuyerPickupConfirmationEmail;
    const ecomV1Order_universal_d_previewShippingConfirmationEmail: typeof previewShippingConfirmationEmail;
    const ecomV1Order_universal_d_previewResendDownloadLinksEmail: typeof previewResendDownloadLinksEmail;
    const ecomV1Order_universal_d_preparePaymentCollection: typeof preparePaymentCollection;
    type ecomV1Order_universal_d_PreparePaymentCollectionOptions = PreparePaymentCollectionOptions;
    const ecomV1Order_universal_d_getPaymentCollectabilityStatus: typeof getPaymentCollectabilityStatus;
    const ecomV1Order_universal_d_recordManuallyCollectedPayment: typeof recordManuallyCollectedPayment;
    const ecomV1Order_universal_d_paymentCollectionMarkOrderAsPaid: typeof paymentCollectionMarkOrderAsPaid;
    const ecomV1Order_universal_d_paymentCollectionBulkMarkOrdersAsPaid: typeof paymentCollectionBulkMarkOrdersAsPaid;
    const ecomV1Order_universal_d_getOrder: typeof getOrder;
    const ecomV1Order_universal_d_queryOrders: typeof queryOrders;
    type ecomV1Order_universal_d_OrdersQueryResult = OrdersQueryResult;
    type ecomV1Order_universal_d_OrdersQueryBuilder = OrdersQueryBuilder;
    const ecomV1Order_universal_d_createOrder: typeof createOrder;
    const ecomV1Order_universal_d_archiveOrder: typeof archiveOrder;
    const ecomV1Order_universal_d_bulkArchiveOrders: typeof bulkArchiveOrders;
    type ecomV1Order_universal_d_BulkArchiveOrdersOptions = BulkArchiveOrdersOptions;
    const ecomV1Order_universal_d_bulkArchiveOrdersByFilter: typeof bulkArchiveOrdersByFilter;
    const ecomV1Order_universal_d_unArchiveOrder: typeof unArchiveOrder;
    const ecomV1Order_universal_d_bulkUnArchiveOrders: typeof bulkUnArchiveOrders;
    type ecomV1Order_universal_d_BulkUnArchiveOrdersOptions = BulkUnArchiveOrdersOptions;
    const ecomV1Order_universal_d_bulkUnArchiveOrdersByFilter: typeof bulkUnArchiveOrdersByFilter;
    const ecomV1Order_universal_d_updateBuyerInfo: typeof updateBuyerInfo;
    type ecomV1Order_universal_d_UpdateBuyerInfoOptions = UpdateBuyerInfoOptions;
    const ecomV1Order_universal_d_updateOrderShippingAddress: typeof updateOrderShippingAddress;
    type ecomV1Order_universal_d_UpdateOrderShippingAddressOptions = UpdateOrderShippingAddressOptions;
    const ecomV1Order_universal_d_updateBillingContactDetails: typeof updateBillingContactDetails;
    type ecomV1Order_universal_d_UpdateBillingContactDetailsOptions = UpdateBillingContactDetailsOptions;
    const ecomV1Order_universal_d_addInternalActivity: typeof addInternalActivity;
    const ecomV1Order_universal_d_addActivity: typeof addActivity;
    const ecomV1Order_universal_d_updateActivity: typeof updateActivity;
    type ecomV1Order_universal_d_UpdateActivityIdentifiers = UpdateActivityIdentifiers;
    const ecomV1Order_universal_d_deleteActivity: typeof deleteActivity;
    type ecomV1Order_universal_d_DeleteActivityIdentifiers = DeleteActivityIdentifiers;
    const ecomV1Order_universal_d_updateLineItemsDescriptionLines: typeof updateLineItemsDescriptionLines;
    const ecomV1Order_universal_d_markOrderAsSeenByHuman: typeof markOrderAsSeenByHuman;
    const ecomV1Order_universal_d_cancelOrder: typeof cancelOrder;
    type ecomV1Order_universal_d_CancelOrderOptions = CancelOrderOptions;
    const ecomV1Order_universal_d_markAsFulfilled: typeof markAsFulfilled;
    const ecomV1Order_universal_d_bulkMarkAsFulfilled: typeof bulkMarkAsFulfilled;
    type ecomV1Order_universal_d_BulkMarkAsFulfilledOptions = BulkMarkAsFulfilledOptions;
    const ecomV1Order_universal_d_bulkMarkAsFulfilledByFilter: typeof bulkMarkAsFulfilledByFilter;
    const ecomV1Order_universal_d_markAsUnfulfilled: typeof markAsUnfulfilled;
    const ecomV1Order_universal_d_bulkMarkAsUnfulfilled: typeof bulkMarkAsUnfulfilled;
    type ecomV1Order_universal_d_BulkMarkAsUnfulfilledOptions = BulkMarkAsUnfulfilledOptions;
    const ecomV1Order_universal_d_bulkMarkAsUnfulfilledByFilter: typeof bulkMarkAsUnfulfilledByFilter;
    const ecomV1Order_universal_d_markOrderAsPaid: typeof markOrderAsPaid;
    const ecomV1Order_universal_d_bulkMarkOrdersAsPaid: typeof bulkMarkOrdersAsPaid;
    const ecomV1Order_universal_d_createPaymentGatewayOrder: typeof createPaymentGatewayOrder;
    const ecomV1Order_universal_d_getShipments: typeof getShipments;
    const ecomV1Order_universal_d_aggregateOrders: typeof aggregateOrders;
    type ecomV1Order_universal_d_AggregateOrdersOptions = AggregateOrdersOptions;
    const ecomV1Order_universal_d_decrementItemsQuantity: typeof decrementItemsQuantity;
    namespace ecomV1Order_universal_d {
        export { __debug$2 as __debug, Order$1 as Order, ecomV1Order_universal_d_OrderLineItem as OrderLineItem, ecomV1Order_universal_d_ProductName as ProductName, CatalogReference$1 as CatalogReference, Price$1 as Price, ecomV1Order_universal_d_DescriptionLine as DescriptionLine, ecomV1Order_universal_d_DescriptionLineValueOneOf as DescriptionLineValueOneOf, ecomV1Order_universal_d_DescriptionLineDescriptionLineValueOneOf as DescriptionLineDescriptionLineValueOneOf, ecomV1Order_universal_d_DescriptionLineName as DescriptionLineName, ecomV1Order_universal_d_PlainTextValue as PlainTextValue, ecomV1Order_universal_d_Color as Color, ecomV1Order_universal_d_DescriptionLineType as DescriptionLineType, PhysicalProperties$1 as PhysicalProperties, ecomV1Order_universal_d_ItemType as ItemType, ecomV1Order_universal_d_ItemTypeItemTypeDataOneOf as ItemTypeItemTypeDataOneOf, ecomV1Order_universal_d_ItemTypeItemType as ItemTypeItemType, PaymentOptionType$1 as PaymentOptionType, ItemTaxFullDetails$1 as ItemTaxFullDetails, DigitalFile$1 as DigitalFile, SubscriptionInfo$1 as SubscriptionInfo, SubscriptionSettings$2 as SubscriptionSettings, SubscriptionFrequency$2 as SubscriptionFrequency, ecomV1Order_universal_d_PriceDescription as PriceDescription, BuyerInfo$1 as BuyerInfo, ecomV1Order_universal_d_BuyerInfoIdOneOf as BuyerInfoIdOneOf, PaymentStatus$1 as PaymentStatus, FulfillmentStatus$1 as FulfillmentStatus, WeightUnit$2 as WeightUnit, PriceSummary$1 as PriceSummary, ecomV1Order_universal_d_AddressWithContact as AddressWithContact, Address$2 as Address, StreetAddress$1 as StreetAddress, ecomV1Order_universal_d_FullAddressContactDetails as FullAddressContactDetails, VatId$1 as VatId, VatType$1 as VatType, ShippingInformation$1 as ShippingInformation, DeliveryLogistics$1 as DeliveryLogistics, ecomV1Order_universal_d_DeliveryLogisticsAddressOneOf as DeliveryLogisticsAddressOneOf, PickupDetails$2 as PickupDetails, PickupAddress$1 as PickupAddress, PickupMethod$1 as PickupMethod, ShippingPrice$1 as ShippingPrice, ShippingRegion$1 as ShippingRegion, ecomV1Order_universal_d_OrderStatus as OrderStatus, TaxSummary$1 as TaxSummary, AppliedDiscount$1 as AppliedDiscount, AppliedDiscountDiscountSourceOneOf$1 as AppliedDiscountDiscountSourceOneOf, DiscountType$1 as DiscountType, Coupon$1 as Coupon, MerchantDiscount$1 as MerchantDiscount, ecomV1Order_universal_d_MerchantDiscountMerchantDiscountReasonOneOf as MerchantDiscountMerchantDiscountReasonOneOf, ecomV1Order_universal_d_DiscountReason as DiscountReason, DiscountRule$1 as DiscountRule, DiscountRuleName$1 as DiscountRuleName, Activity$1 as Activity, ecomV1Order_universal_d_ActivityContentOneOf as ActivityContentOneOf, ecomV1Order_universal_d_CustomActivity as CustomActivity, ecomV1Order_universal_d_MerchantComment as MerchantComment, OrderRefunded$1 as OrderRefunded, ecomV1Order_universal_d_OrderCreatedFromExchange as OrderCreatedFromExchange, ecomV1Order_universal_d_NewExchangeOrderCreated as NewExchangeOrderCreated, ecomV1Order_universal_d_LineItemExchangeData as LineItemExchangeData, ActivityType$1 as ActivityType, ecomV1Order_universal_d_AttributionSource as AttributionSource, ecomV1Order_universal_d_CreatedBy as CreatedBy, ecomV1Order_universal_d_CreatedByStringOneOf as CreatedByStringOneOf, ChannelInfo$1 as ChannelInfo, ChannelType$1 as ChannelType, CustomField$1 as CustomField, ecomV1Order_universal_d_BalanceSummary as BalanceSummary, ecomV1Order_universal_d_Balance as Balance, AdditionalFee$1 as AdditionalFee, ecomV1Order_universal_d_SendOrderPaymentReceivedEmail as SendOrderPaymentReceivedEmail, ecomV1Order_universal_d_OrdersExperiments as OrdersExperiments, ecomV1Order_universal_d_SendBuyerConfirmationEmailRequest as SendBuyerConfirmationEmailRequest, ecomV1Order_universal_d_SendBuyerConfirmationEmailResponse as SendBuyerConfirmationEmailResponse, ecomV1Order_universal_d_SendBuyerPaymentsReceivedEmailRequest as SendBuyerPaymentsReceivedEmailRequest, ecomV1Order_universal_d_SendBuyerPaymentsReceivedEmailResponse as SendBuyerPaymentsReceivedEmailResponse, ecomV1Order_universal_d_SendBuyerPickupConfirmationEmailRequest as SendBuyerPickupConfirmationEmailRequest, ecomV1Order_universal_d_SendBuyerPickupConfirmationEmailResponse as SendBuyerPickupConfirmationEmailResponse, ecomV1Order_universal_d_SendBuyerShippingConfirmationEmailRequest as SendBuyerShippingConfirmationEmailRequest, ecomV1Order_universal_d_SendBuyerShippingConfirmationEmailResponse as SendBuyerShippingConfirmationEmailResponse, ecomV1Order_universal_d_SendMerchantOrderReceivedNotificationRequest as SendMerchantOrderReceivedNotificationRequest, ecomV1Order_universal_d_SendMerchantOrderReceivedNotificationResponse as SendMerchantOrderReceivedNotificationResponse, ecomV1Order_universal_d_SendCancelRefundEmailRequest as SendCancelRefundEmailRequest, ecomV1Order_universal_d_SendCancelRefundEmailResponse as SendCancelRefundEmailResponse, ecomV1Order_universal_d_PreviewEmailByTypeRequest as PreviewEmailByTypeRequest, ecomV1Order_universal_d_PreviewEmailType as PreviewEmailType, ecomV1Order_universal_d_PreviewEmailByTypeResponse as PreviewEmailByTypeResponse, ecomV1Order_universal_d_PreviewRefundEmailRequest as PreviewRefundEmailRequest, RefundDetails$1 as RefundDetails, RefundItem$1 as RefundItem, ecomV1Order_universal_d_PreviewRefundEmailResponse as PreviewRefundEmailResponse, ecomV1Order_universal_d_PreviewCancelEmailRequest as PreviewCancelEmailRequest, ecomV1Order_universal_d_PreviewCancelEmailResponse as PreviewCancelEmailResponse, ecomV1Order_universal_d_PreviewCancelRefundEmailRequest as PreviewCancelRefundEmailRequest, ecomV1Order_universal_d_PreviewCancelRefundEmailResponse as PreviewCancelRefundEmailResponse, ecomV1Order_universal_d_PreviewBuyerPaymentsReceivedEmailRequest as PreviewBuyerPaymentsReceivedEmailRequest, ecomV1Order_universal_d_PreviewBuyerPaymentsReceivedEmailResponse as PreviewBuyerPaymentsReceivedEmailResponse, ecomV1Order_universal_d_PreviewBuyerConfirmationEmailRequest as PreviewBuyerConfirmationEmailRequest, ecomV1Order_universal_d_PreviewBuyerConfirmationEmailResponse as PreviewBuyerConfirmationEmailResponse, ecomV1Order_universal_d_PreviewBuyerPickupConfirmationEmailRequest as PreviewBuyerPickupConfirmationEmailRequest, ecomV1Order_universal_d_PreviewBuyerPickupConfirmationEmailResponse as PreviewBuyerPickupConfirmationEmailResponse, ecomV1Order_universal_d_PreviewShippingConfirmationEmailRequest as PreviewShippingConfirmationEmailRequest, ecomV1Order_universal_d_PreviewShippingConfirmationEmailResponse as PreviewShippingConfirmationEmailResponse, ecomV1Order_universal_d_PreviewResendDownloadLinksEmailRequest as PreviewResendDownloadLinksEmailRequest, ecomV1Order_universal_d_PreviewResendDownloadLinksEmailResponse as PreviewResendDownloadLinksEmailResponse, ecomV1Order_universal_d_DomainEvent as DomainEvent, ecomV1Order_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf, ecomV1Order_universal_d_EntityCreatedEvent as EntityCreatedEvent, ecomV1Order_universal_d_EntityUpdatedEvent as EntityUpdatedEvent, ecomV1Order_universal_d_EntityDeletedEvent as EntityDeletedEvent, ecomV1Order_universal_d_ActionEvent as ActionEvent, ecomV1Order_universal_d_ExtendedFieldsUpdatedEvent as ExtendedFieldsUpdatedEvent, ecomV1Order_universal_d_Empty as Empty, ecomV1Order_universal_d_PreparePaymentCollectionRequest as PreparePaymentCollectionRequest, ecomV1Order_universal_d_PreparePaymentCollectionResponse as PreparePaymentCollectionResponse, ecomV1Order_universal_d_GetPaymentCollectabilityStatusRequest as GetPaymentCollectabilityStatusRequest, ecomV1Order_universal_d_GetPaymentCollectabilityStatusResponse as GetPaymentCollectabilityStatusResponse, ecomV1Order_universal_d_PaymentCollectabilityStatus as PaymentCollectabilityStatus, ecomV1Order_universal_d_RecordManuallyCollectedPaymentRequest as RecordManuallyCollectedPaymentRequest, ecomV1Order_universal_d_RecordManuallyCollectedPaymentResponse as RecordManuallyCollectedPaymentResponse, ecomV1Order_universal_d_V1MarkOrderAsPaidRequest as V1MarkOrderAsPaidRequest, ecomV1Order_universal_d_V1MarkOrderAsPaidResponse as V1MarkOrderAsPaidResponse, ecomV1Order_universal_d_PaymentStatusUpdated as PaymentStatusUpdated, ecomV1Order_universal_d_V1BulkMarkOrdersAsPaidRequest as V1BulkMarkOrdersAsPaidRequest, ecomV1Order_universal_d_V1BulkMarkOrdersAsPaidResponse as V1BulkMarkOrdersAsPaidResponse, ecomV1Order_universal_d_BulkOrderResult as BulkOrderResult, ItemMetadata$1 as ItemMetadata, ApplicationError$2 as ApplicationError, BulkActionMetadata$1 as BulkActionMetadata, DiffmatokyPayload$1 as DiffmatokyPayload, ErrorInformation$1 as ErrorInformation, ecomV1Order_universal_d_ContinueSideEffectsFlowInLegacyData as ContinueSideEffectsFlowInLegacyData, SnapshotMessage$1 as SnapshotMessage, IndexingMessage$1 as IndexingMessage, ecomV1Order_universal_d_GetOrderRequest as GetOrderRequest, ecomV1Order_universal_d_GetOrderResponse as GetOrderResponse, ecomV1Order_universal_d_QueryOrderRequest as QueryOrderRequest, ecomV1Order_universal_d_PlatformQuery as PlatformQuery, ecomV1Order_universal_d_PlatformQueryPagingMethodOneOf as PlatformQueryPagingMethodOneOf, ecomV1Order_universal_d_Sorting as Sorting, ecomV1Order_universal_d_SortOrder as SortOrder, ecomV1Order_universal_d_PlatformPaging as PlatformPaging, ecomV1Order_universal_d_CursorPaging as CursorPaging, ecomV1Order_universal_d_QueryOrderResponse as QueryOrderResponse, ecomV1Order_universal_d_PlatformPagingMetadata as PlatformPagingMetadata, ecomV1Order_universal_d_Cursors as Cursors, ecomV1Order_universal_d_CreateOrderRequest as CreateOrderRequest, ecomV1Order_universal_d_CreateOrderResponse as CreateOrderResponse, ecomV1Order_universal_d_ArchiveOrderRequest as ArchiveOrderRequest, ecomV1Order_universal_d_ArchiveOrderResponse as ArchiveOrderResponse, ecomV1Order_universal_d_BulkArchiveOrdersRequest as BulkArchiveOrdersRequest, ecomV1Order_universal_d_BulkArchiveOrdersResponse as BulkArchiveOrdersResponse, ecomV1Order_universal_d_BulkArchiveOrdersByFilterRequest as BulkArchiveOrdersByFilterRequest, ecomV1Order_universal_d_BulkArchiveOrdersByFilterResponse as BulkArchiveOrdersByFilterResponse, ecomV1Order_universal_d_UnArchiveOrderRequest as UnArchiveOrderRequest, ecomV1Order_universal_d_UnArchiveOrderResponse as UnArchiveOrderResponse, ecomV1Order_universal_d_BulkUnArchiveOrdersRequest as BulkUnArchiveOrdersRequest, ecomV1Order_universal_d_BulkUnArchiveOrdersResponse as BulkUnArchiveOrdersResponse, ecomV1Order_universal_d_BulkUnArchiveOrdersByFilterRequest as BulkUnArchiveOrdersByFilterRequest, ecomV1Order_universal_d_BulkUnArchiveOrdersByFilterResponse as BulkUnArchiveOrdersByFilterResponse, ecomV1Order_universal_d_UpdateBuyerInfoRequest as UpdateBuyerInfoRequest, ecomV1Order_universal_d_BuyerInfoUpdate as BuyerInfoUpdate, ecomV1Order_universal_d_UpdateBuyerInfoResponse as UpdateBuyerInfoResponse, ecomV1Order_universal_d_UpdateOrderShippingAddressRequest as UpdateOrderShippingAddressRequest, ecomV1Order_universal_d_UpdateOrderShippingAddressResponse as UpdateOrderShippingAddressResponse, ecomV1Order_universal_d_UpdateBillingContactDetailsRequest as UpdateBillingContactDetailsRequest, ecomV1Order_universal_d_UpdateBillingContactDetailsResponse as UpdateBillingContactDetailsResponse, ecomV1Order_universal_d_AddInternalActivityRequest as AddInternalActivityRequest, ecomV1Order_universal_d_InternalActivity as InternalActivity, ecomV1Order_universal_d_InternalActivityContentOneOf as InternalActivityContentOneOf, ecomV1Order_universal_d_OrderPlaced as OrderPlaced, ecomV1Order_universal_d_OrderPaid as OrderPaid, ecomV1Order_universal_d_OrderFulfilled as OrderFulfilled, ecomV1Order_universal_d_OrderNotFulfilled as OrderNotFulfilled, ecomV1Order_universal_d_OrderCanceled as OrderCanceled, ecomV1Order_universal_d_DownloadLinkSent as DownloadLinkSent, ecomV1Order_universal_d_TrackingNumberAdded as TrackingNumberAdded, ecomV1Order_universal_d_TrackingNumberEdited as TrackingNumberEdited, ecomV1Order_universal_d_TrackingLinkAdded as TrackingLinkAdded, ecomV1Order_universal_d_ShippingConfirmationEmailSent as ShippingConfirmationEmailSent, ecomV1Order_universal_d_InvoiceAdded as InvoiceAdded, ecomV1Order_universal_d_InvoiceSent as InvoiceSent, ecomV1Order_universal_d_FulfillerEmailSent as FulfillerEmailSent, ecomV1Order_universal_d_ShippingAddressEdited as ShippingAddressEdited, ecomV1Order_universal_d_EmailEdited as EmailEdited, ecomV1Order_universal_d_PickupReadyEmailSent as PickupReadyEmailSent, ecomV1Order_universal_d_OrderPartiallyPaid as OrderPartiallyPaid, ecomV1Order_universal_d_AddInternalActivityResponse as AddInternalActivityResponse, ecomV1Order_universal_d_AddActivityRequest as AddActivityRequest, ecomV1Order_universal_d_PublicActivity as PublicActivity, ecomV1Order_universal_d_PublicActivityContentOneOf as PublicActivityContentOneOf, ecomV1Order_universal_d_AddActivityResponse as AddActivityResponse, ecomV1Order_universal_d_UpdateActivityRequest as UpdateActivityRequest, ecomV1Order_universal_d_UpdateActivityResponse as UpdateActivityResponse, ecomV1Order_universal_d_DeleteActivityRequest as DeleteActivityRequest, ecomV1Order_universal_d_DeleteActivityResponse as DeleteActivityResponse, ecomV1Order_universal_d_UpdateLineItemsDescriptionLinesRequest as UpdateLineItemsDescriptionLinesRequest, ecomV1Order_universal_d_LineItemUpdate as LineItemUpdate, ecomV1Order_universal_d_UpdateLineItemsDescriptionLinesResponse as UpdateLineItemsDescriptionLinesResponse, ecomV1Order_universal_d_MarkOrderAsSeenByHumanRequest as MarkOrderAsSeenByHumanRequest, ecomV1Order_universal_d_MarkOrderAsSeenByHumanResponse as MarkOrderAsSeenByHumanResponse, ecomV1Order_universal_d_CancelOrderRequest as CancelOrderRequest, ecomV1Order_universal_d_CancelOrderResponse as CancelOrderResponse, ecomV1Order_universal_d_OrderCanceledEventOrderCanceled as OrderCanceledEventOrderCanceled, ecomV1Order_universal_d_MarkAsFulfilledRequest as MarkAsFulfilledRequest, ecomV1Order_universal_d_MarkAsFulfilledResponse as MarkAsFulfilledResponse, ecomV1Order_universal_d_FulfillmentStatusUpdated as FulfillmentStatusUpdated, ecomV1Order_universal_d_BulkMarkAsFulfilledRequest as BulkMarkAsFulfilledRequest, ecomV1Order_universal_d_BulkMarkAsFulfilledResponse as BulkMarkAsFulfilledResponse, ecomV1Order_universal_d_BulkMarkAsFulfilledByFilterRequest as BulkMarkAsFulfilledByFilterRequest, ecomV1Order_universal_d_BulkMarkAsFulfilledByFilterResponse as BulkMarkAsFulfilledByFilterResponse, ecomV1Order_universal_d_MarkAsUnfulfilledRequest as MarkAsUnfulfilledRequest, ecomV1Order_universal_d_MarkAsUnfulfilledResponse as MarkAsUnfulfilledResponse, ecomV1Order_universal_d_BulkMarkAsUnfulfilledRequest as BulkMarkAsUnfulfilledRequest, ecomV1Order_universal_d_BulkMarkAsUnfulfilledResponse as BulkMarkAsUnfulfilledResponse, ecomV1Order_universal_d_BulkMarkAsUnfulfilledByFilterRequest as BulkMarkAsUnfulfilledByFilterRequest, ecomV1Order_universal_d_BulkMarkAsUnfulfilledByFilterResponse as BulkMarkAsUnfulfilledByFilterResponse, ecomV1Order_universal_d_MarkOrderAsPaidRequest as MarkOrderAsPaidRequest, ecomV1Order_universal_d_MarkOrderAsPaidResponse as MarkOrderAsPaidResponse, ecomV1Order_universal_d_BulkMarkOrdersAsPaidRequest as BulkMarkOrdersAsPaidRequest, ecomV1Order_universal_d_BulkMarkOrdersAsPaidResponse as BulkMarkOrdersAsPaidResponse, ecomV1Order_universal_d_CreatePaymentGatewayOrderRequest as CreatePaymentGatewayOrderRequest, ecomV1Order_universal_d_CreatePaymentGatewayOrderResponse as CreatePaymentGatewayOrderResponse, ecomV1Order_universal_d_GetShipmentsRequest as GetShipmentsRequest, ecomV1Order_universal_d_GetShipmentsResponse as GetShipmentsResponse, ecomV1Order_universal_d_AggregateOrdersRequest as AggregateOrdersRequest, ecomV1Order_universal_d_AggregateOrdersResponse as AggregateOrdersResponse, ecomV1Order_universal_d_DecrementItemsQuantityRequest as DecrementItemsQuantityRequest, ecomV1Order_universal_d_DecrementData as DecrementData, ecomV1Order_universal_d_DecrementItemsQuantityResponse as DecrementItemsQuantityResponse, ecomV1Order_universal_d_OrderItemsRestocked as OrderItemsRestocked, RestockItem$1 as RestockItem, ecomV1Order_universal_d_OrderApproved as OrderApproved, ecomV1Order_universal_d_Task as Task, ecomV1Order_universal_d_TaskKey as TaskKey, ecomV1Order_universal_d_TaskAction as TaskAction, ecomV1Order_universal_d_TaskActionActionOneOf as TaskActionActionOneOf, ecomV1Order_universal_d_Complete as Complete, ecomV1Order_universal_d_Cancel as Cancel, ecomV1Order_universal_d_Reschedule as Reschedule, ecomV1Order_universal_d_InvoiceSentEvent as InvoiceSentEvent, ecomV1Order_universal_d_IdAndVersion as IdAndVersion, ecomV1Order_universal_d_InvoiceFields as InvoiceFields, ecomV1Order_universal_d_Customer as Customer, ecomV1Order_universal_d_Email as Email, ecomV1Order_universal_d_QuotesAddress as QuotesAddress, ecomV1Order_universal_d_AddressDescription as AddressDescription, ecomV1Order_universal_d_Placement as Placement, ecomV1Order_universal_d_Phone as Phone, ecomV1Order_universal_d_Company as Company, ecomV1Order_universal_d_CommonAddress as CommonAddress, ecomV1Order_universal_d_CommonAddressStreetOneOf as CommonAddressStreetOneOf, ecomV1Order_universal_d_AddressLocation as AddressLocation, ecomV1Order_universal_d_Subdivision as Subdivision, ecomV1Order_universal_d_SubdivisionType as SubdivisionType, ecomV1Order_universal_d_InvoiceDates as InvoiceDates, ecomV1Order_universal_d_LineItems as LineItems, LineItem$2 as LineItem, ecomV1Order_universal_d_BigDecimalWrapper as BigDecimalWrapper, ecomV1Order_universal_d_LineItemTax as LineItemTax, ecomV1Order_universal_d_Source as Source, ecomV1Order_universal_d_SourceType as SourceType, ecomV1Order_universal_d_LineItemMetaData as LineItemMetaData, ecomV1Order_universal_d_Locale as Locale, ecomV1Order_universal_d_TotalPrice as TotalPrice, ecomV1Order_universal_d_ItemizedFee as ItemizedFee, Discount$1 as Discount, ecomV1Order_universal_d_DiscountOneDiscountTypeOneOf as DiscountOneDiscountTypeOneOf, ecomV1Order_universal_d_CalculatedTaxes as CalculatedTaxes, ecomV1Order_universal_d_CalculatedTax as CalculatedTax, ecomV1Order_universal_d_Payments as Payments, Payment$1 as Payment, ecomV1Order_universal_d_MetaData as MetaData, ecomV1Order_universal_d_InvoiceDynamicPriceTotals as InvoiceDynamicPriceTotals, ecomV1Order_universal_d_CustomFieldValue as CustomFieldValue, ecomV1Order_universal_d_CustomFieldGroup as CustomFieldGroup, ecomV1Order_universal_d_Value as Value, ecomV1Order_universal_d_ValueType as ValueType, ecomV1Order_universal_d_Deposit as Deposit, ecomV1Order_universal_d_DepositType as DepositType, ecomV1Order_universal_d_InvoiceStatus as InvoiceStatus, ecomV1Order_universal_d_TriggerSideEffectsFromLegacyData as TriggerSideEffectsFromLegacyData, ecomV1Order_universal_d_sendBuyerConfirmationEmail as sendBuyerConfirmationEmail, ecomV1Order_universal_d_sendBuyerPaymentsReceivedEmail as sendBuyerPaymentsReceivedEmail, ecomV1Order_universal_d_sendBuyerPickupConfirmationEmail as sendBuyerPickupConfirmationEmail, ecomV1Order_universal_d_sendBuyerShippingConfirmationEmail as sendBuyerShippingConfirmationEmail, ecomV1Order_universal_d_sendMerchantOrderReceivedNotification as sendMerchantOrderReceivedNotification, ecomV1Order_universal_d_sendCancelRefundEmail as sendCancelRefundEmail, ecomV1Order_universal_d_SendCancelRefundEmailOptions as SendCancelRefundEmailOptions, ecomV1Order_universal_d_previewEmailByType as previewEmailByType, ecomV1Order_universal_d_previewRefundEmail as previewRefundEmail, ecomV1Order_universal_d_PreviewRefundEmailOptions as PreviewRefundEmailOptions, ecomV1Order_universal_d_previewCancelEmail as previewCancelEmail, ecomV1Order_universal_d_PreviewCancelEmailOptions as PreviewCancelEmailOptions, ecomV1Order_universal_d_previewCancelRefundEmail as previewCancelRefundEmail, ecomV1Order_universal_d_PreviewCancelRefundEmailOptions as PreviewCancelRefundEmailOptions, ecomV1Order_universal_d_previewBuyerPaymentsReceivedEmail as previewBuyerPaymentsReceivedEmail, ecomV1Order_universal_d_previewBuyerConfirmationEmail as previewBuyerConfirmationEmail, ecomV1Order_universal_d_previewBuyerPickupConfirmationEmail as previewBuyerPickupConfirmationEmail, ecomV1Order_universal_d_previewShippingConfirmationEmail as previewShippingConfirmationEmail, ecomV1Order_universal_d_previewResendDownloadLinksEmail as previewResendDownloadLinksEmail, ecomV1Order_universal_d_preparePaymentCollection as preparePaymentCollection, ecomV1Order_universal_d_PreparePaymentCollectionOptions as PreparePaymentCollectionOptions, ecomV1Order_universal_d_getPaymentCollectabilityStatus as getPaymentCollectabilityStatus, ecomV1Order_universal_d_recordManuallyCollectedPayment as recordManuallyCollectedPayment, ecomV1Order_universal_d_paymentCollectionMarkOrderAsPaid as paymentCollectionMarkOrderAsPaid, ecomV1Order_universal_d_paymentCollectionBulkMarkOrdersAsPaid as paymentCollectionBulkMarkOrdersAsPaid, ecomV1Order_universal_d_getOrder as getOrder, ecomV1Order_universal_d_queryOrders as queryOrders, ecomV1Order_universal_d_OrdersQueryResult as OrdersQueryResult, ecomV1Order_universal_d_OrdersQueryBuilder as OrdersQueryBuilder, ecomV1Order_universal_d_createOrder as createOrder, ecomV1Order_universal_d_archiveOrder as archiveOrder, ecomV1Order_universal_d_bulkArchiveOrders as bulkArchiveOrders, ecomV1Order_universal_d_BulkArchiveOrdersOptions as BulkArchiveOrdersOptions, ecomV1Order_universal_d_bulkArchiveOrdersByFilter as bulkArchiveOrdersByFilter, ecomV1Order_universal_d_unArchiveOrder as unArchiveOrder, ecomV1Order_universal_d_bulkUnArchiveOrders as bulkUnArchiveOrders, ecomV1Order_universal_d_BulkUnArchiveOrdersOptions as BulkUnArchiveOrdersOptions, ecomV1Order_universal_d_bulkUnArchiveOrdersByFilter as bulkUnArchiveOrdersByFilter, ecomV1Order_universal_d_updateBuyerInfo as updateBuyerInfo, ecomV1Order_universal_d_UpdateBuyerInfoOptions as UpdateBuyerInfoOptions, ecomV1Order_universal_d_updateOrderShippingAddress as updateOrderShippingAddress, ecomV1Order_universal_d_UpdateOrderShippingAddressOptions as UpdateOrderShippingAddressOptions, ecomV1Order_universal_d_updateBillingContactDetails as updateBillingContactDetails, ecomV1Order_universal_d_UpdateBillingContactDetailsOptions as UpdateBillingContactDetailsOptions, ecomV1Order_universal_d_addInternalActivity as addInternalActivity, ecomV1Order_universal_d_addActivity as addActivity, ecomV1Order_universal_d_updateActivity as updateActivity, ecomV1Order_universal_d_UpdateActivityIdentifiers as UpdateActivityIdentifiers, ecomV1Order_universal_d_deleteActivity as deleteActivity, ecomV1Order_universal_d_DeleteActivityIdentifiers as DeleteActivityIdentifiers, ecomV1Order_universal_d_updateLineItemsDescriptionLines as updateLineItemsDescriptionLines, ecomV1Order_universal_d_markOrderAsSeenByHuman as markOrderAsSeenByHuman, ecomV1Order_universal_d_cancelOrder as cancelOrder, ecomV1Order_universal_d_CancelOrderOptions as CancelOrderOptions, ecomV1Order_universal_d_markAsFulfilled as markAsFulfilled, ecomV1Order_universal_d_bulkMarkAsFulfilled as bulkMarkAsFulfilled, ecomV1Order_universal_d_BulkMarkAsFulfilledOptions as BulkMarkAsFulfilledOptions, ecomV1Order_universal_d_bulkMarkAsFulfilledByFilter as bulkMarkAsFulfilledByFilter, ecomV1Order_universal_d_markAsUnfulfilled as markAsUnfulfilled, ecomV1Order_universal_d_bulkMarkAsUnfulfilled as bulkMarkAsUnfulfilled, ecomV1Order_universal_d_BulkMarkAsUnfulfilledOptions as BulkMarkAsUnfulfilledOptions, ecomV1Order_universal_d_bulkMarkAsUnfulfilledByFilter as bulkMarkAsUnfulfilledByFilter, ecomV1Order_universal_d_markOrderAsPaid as markOrderAsPaid, ecomV1Order_universal_d_bulkMarkOrdersAsPaid as bulkMarkOrdersAsPaid, ecomV1Order_universal_d_createPaymentGatewayOrder as createPaymentGatewayOrder, ecomV1Order_universal_d_getShipments as getShipments, ecomV1Order_universal_d_aggregateOrders as aggregateOrders, ecomV1Order_universal_d_AggregateOrdersOptions as AggregateOrdersOptions, ecomV1Order_universal_d_decrementItemsQuantity as decrementItemsQuantity, };
    }
    const __debug$1: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface OrderTransactions {
        /** Order ID. */
        orderId?: string;
        /** Payments to the merchant. */
        payments?: Payment[];
        /** Refunds to the buyer. */
        refunds?: Refund[];
    }
    interface Payment extends PaymentPaymentDetailsOneOf {
        /**
         * Payment ID (auto-generated upon payment creation).
         * @readonly
         */
        _id?: string | null;
        /** Payment creation date and time in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format. Defaults to current time when not provided. */
        _createdDate?: Date;
        /**
         * Payment modification date and time.
         * @readonly
         */
        _updatedDate?: Date;
        /** Payment amount. */
        amount?: Price;
        /**
         * Whether refunds are explicitly disabled.
         * True means this payment is not refundable.
         * False means this payment might be refunded (depending on the payment provider).
         */
        refundDisabled?: boolean;
        /** Regular payment details. */
        regularPaymentDetails?: RegularPaymentDetails;
        /** Gift card payment details. */
        giftcardPaymentDetails?: GiftCardPaymentDetails;
        /**
         * Membership payment details
         * @internal
         */
        membershipPaymentDetails?: MembershipPaymentDetails;
    }
    /** @oneof */
    interface PaymentPaymentDetailsOneOf {
        /** Regular payment details. */
        regularPaymentDetails?: RegularPaymentDetails;
        /** Gift card payment details. */
        giftcardPaymentDetails?: GiftCardPaymentDetails;
        /**
         * Membership payment details
         * @internal
         */
        membershipPaymentDetails?: MembershipPaymentDetails;
    }
    interface RegularPaymentDetails {
        /** Wix Payment's order id */
        paymentOrderId?: string | null;
        /** Transaction ID from payment gateway (e.g., Wix Payments, chargeId), what we used to call payment_gateway_transaction_id */
        gatewayTransactionId?: string | null;
        /**
         * Payment method. Non-exhaustive list of supported values:
         * CreditCard, Alipay, AstropayCash, AstropayDBT, AstropayMBT, Bitcoin, BitPay, Cash, ConvenienceStore, EPay, Fake, Giropay, IDeal, InPerson,
         * Klarna, MercadoPago, Netpay, NordeaSolo, Offline, PagSeguro, PayEasy, PayPal, Paysafecard, Paysafecash, PointOfSale, Poli,
         * Privat24, Przelewy24, RapidTransfer, Sepa, Skrill, Sofort, Trustly,Neteller, Unionpay, UniPay, Yandex.
         */
        paymentMethod?: string | null;
        /** Transaction ID in the payment provider's system (for example, PayPal, Square, Stripe). Does not exist for offline payments. */
        providerTransactionId?: string | null;
        /** Whether the payment is/was made offline. For example, when using cash or when marked as paid in the Business Manager. */
        offlinePayment?: boolean;
        /** Payment status. */
        status?: TransactionStatus;
    }
    enum TransactionStatus {
        UNDEFINED = "UNDEFINED",
        APPROVED = "APPROVED",
        PENDING = "PENDING",
        PENDING_MERCHANT = "PENDING_MERCHANT",
        CANCELED = "CANCELED",
        DECLINED = "DECLINED",
        REFUNDED = "REFUNDED",
        PARTIALLY_REFUNDED = "PARTIALLY_REFUNDED",
        AUTHORIZED = "AUTHORIZED",
        VOIDED = "VOIDED"
    }
    interface GiftCardPaymentDetails {
        /** Gift card payment ID. */
        giftCardPaymentId?: string;
        /** Gift card ID. */
        giftCardId?: string;
        /** ID of the app that created the gift card. */
        appId?: string;
        /**
         * Whether the gift card is voided.
         * @readonly
         */
        voided?: boolean;
    }
    interface MembershipPaymentDetails {
        /** The membership id */
        membershipId?: string;
        /** ID of the line item this membership applies to. */
        lineItemId?: string;
        /** Payment status */
        status?: MembershipPaymentStatus;
        /** Membership name */
        name?: MembershipName$1;
        /** The transaction id under the membership system. Can be used to void it */
        externalTransactionId?: string | null;
        /**
         * Whether the membership is voided.
         * @readonly
         */
        voided?: boolean;
        /** ID of the application providing this payment option */
        providerAppId?: string;
    }
    enum MembershipPaymentStatus {
        /** CHARGED - Payment was charged */
        CHARGED = "CHARGED",
        /** CHARGE_FAILED - The attempt to charge that payment have failed, for example due to lack of credits */
        CHARGE_FAILED = "CHARGE_FAILED"
    }
    interface MembershipName$1 {
        /** The name of this membership */
        original?: string;
        /** Optional - Translated name of this membership. Defaults to `original` when not provided. */
        translated?: string | null;
    }
    interface Price {
        /** Amount. */
        amount?: string;
        /**
         * Amount formatted with currency symbol.
         * @readonly
         */
        formattedAmount?: string;
    }
    interface Refund {
        /**
         * Refund ID (auto-generated upon refund creation).
         * @readonly
         */
        _id?: string;
        /** Transaction refund details. */
        transactions?: RefundTransaction[];
        /** Business details. */
        details?: RefundDetails;
        /** Refund creation date and time in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format. Defaults to current time when not provided. */
        _createdDate?: Date;
    }
    interface RefundTransaction {
        /** ID of the payment associated with this refund. */
        paymentId?: string;
        /** Refund amount. */
        amount?: Price;
        /** Refund status. */
        refundStatus?: RefundStatus;
        /** ID of the payment gateway refund. */
        gatewayRefundId?: string | null;
        /** ID of the refund in the payment provider's system. */
        providerRefundId?: string | null;
        /** Whether refund was made externally and manually (on the payment provider's side). */
        externalRefund?: boolean;
    }
    enum RefundStatus {
        PENDING = "PENDING",
        SUCCEEDED = "SUCCEEDED",
        FAILED = "FAILED"
    }
    /** Business model of a refund request */
    interface RefundDetails {
        /** Refunded line items and quantities. */
        items?: RefundItem[];
        /** Whether shipping rate is also refunded. */
        shippingIncluded?: boolean;
        /** Reason for refund, given by user (optional). */
        reason?: string | null;
    }
    interface RefundItem {
        /** ID of the line item being refunded. */
        lineItemId?: string;
        /** Line item quantity being refunded. */
        quantity?: number;
    }
    interface SnapshotMessage {
        _id?: string;
        opType?: number;
    }
    interface IndexingMessage {
        _id?: string;
        opType?: number;
        requiredVersions?: string[];
    }
    interface DiffmatokyPayload {
        left?: string;
        right?: string;
        compareChannel?: string;
        entityId?: string;
        errorInformation?: ErrorInformation;
        tags?: string[];
    }
    interface ErrorInformation {
        stackTrace?: string;
    }
    interface OrderRefunded {
        /**
         * Refund ID.
         * @readonly
         */
        refundId?: string;
        /**
         * Refunded order data.
         * @readonly
         */
        order?: Order;
    }
    interface Order {
        /**
         * Order ID (auto-generated upon order creation).
         * @readonly
         */
        _id?: string | null;
        /**
         * Order number displayed in the owner's store (auto-generated).
         * @readonly
         */
        number?: number;
        /**
         * Order creation date and time.
         * @readonly
         */
        dateCreated?: Date;
        /** Buyer information. */
        buyerInfo?: BuyerInfo;
        /** Currency used for the pricing of this order in [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes) format. */
        currency?: string | null;
        /** Weight unit used in this store. */
        weightUnit?: WeightUnit$1;
        /** Totals for order's line items. */
        totals?: Totals;
        /** Billing information. */
        billingInfo?: BillingInfo;
        /** Shipping information. */
        shippingInfo?: ShippingInfo;
        /** A note added by the buyer. */
        buyerNote?: string | null;
        /**
         * Deprecated.
         * @readonly
         */
        read?: boolean;
        /**
         * Whether or not the order was archived.
         * @readonly
         */
        archived?: boolean;
        /** Current status of the payment. */
        paymentStatus?: PaymentStatus;
        /**
         * Order's current fulfillment status (whether the order received a tracking number or was delivered/picked up).
         * @readonly
         */
        fulfillmentStatus?: FulfillmentStatus;
        /** Line items ordered. */
        lineItems?: LineItem$1[];
        /**
         * Log of updates related to the order.
         * @readonly
         */
        activities?: Activity[];
        /** Invoice information. */
        invoiceInfo?: V2InvoiceInfo;
        /**
         * Order fulfillment information.
         * @readonly
         */
        fulfillments?: Fulfillment[];
        /** Discount information. */
        discount?: Discount;
        /** Custom field information. */
        customField?: CustomField;
        /** Shopping cart ID. */
        cartId?: string | null;
        /**
         * Language for communication with the buyer. Defaults to the site language.
         * For a site that supports multiple languages, this is the language the buyer selected.
         */
        buyerLanguage?: string | null;
        /** Information about the sales channel that submitted this order. */
        channelInfo?: ChannelInfo;
        /**
         * Identity of the order's initiator.
         * @readonly
         */
        enteredBy?: EnteredBy;
        /**
         * Date and time of latest update.
         * @readonly
         */
        lastUpdated?: Date;
        /** Subscription information. */
        subscriptionInfo?: SubscriptionInfo;
        /**
         * Order’s unique numeric ID.
         * Primarily used for sorting and filtering when crawling all orders.
         * @readonly
         */
        numericId?: string;
        /**
         * Refund information.
         * @readonly
         */
        refunds?: V2Refund[];
        /**
         * Gift card information.
         * @internal
         */
        giftCard?: GiftCard$1;
        /**
         * ID of the checkout associated with this order.
         * @internal
         */
        checkoutId?: string | null;
        /**
         * Private API flag that allows using read-only "id" during order creation
         * @internal
         */
        isInternalOrderCreate?: boolean;
    }
    /** Buyer Info */
    interface BuyerInfo {
        /** Wix customer ID */
        _id?: string | null;
        /**
         * Deprecated (use identityType instead)
         * @readonly
         */
        type?: IdentityType;
        /** Customer type */
        identityType?: IdentityType;
        /**
         * Customer's first name
         * @readonly
         */
        firstName?: string;
        /**
         * Customer's last name
         * @readonly
         */
        lastName?: string;
        /**
         * Customer's phone number
         * @readonly
         */
        phone?: string | null;
        /**
         * Customer's email address
         * @readonly
         */
        email?: string;
        /**
         * Contact Id. needed for cases where the user is the buyer and so it doesn't exist on the buyer info
         * @internal
         * @readonly
         */
        contactId?: string | null;
    }
    enum IdentityType {
        UNSPECIFIED_IDENTITY_TYPE = "UNSPECIFIED_IDENTITY_TYPE",
        /** Site member */
        MEMBER = "MEMBER",
        /** Contact */
        CONTACT = "CONTACT"
    }
    enum WeightUnit$1 {
        /** Weight unit can't be classified, due to an error */
        UNSPECIFIED_WEIGHT_UNIT = "UNSPECIFIED_WEIGHT_UNIT",
        /** Kilograms */
        KG = "KG",
        /** Pounds */
        LB = "LB"
    }
    interface Totals {
        /** Subtotal of all the line items, before tax. */
        subtotal?: string;
        /** Total shipping price, before tax. */
        shipping?: string | null;
        /** Total tax. */
        tax?: string | null;
        /** Total calculated discount value. */
        discount?: string | null;
        /** Total price charged. */
        total?: string;
        /**
         * Total items weight.
         * @readonly
         */
        weight?: string;
        /**
         * Total number of line items.
         * @readonly
         */
        quantity?: number;
        /**
         * Total refund.
         * @readonly
         */
        refund?: string | null;
        /** Total calculated gift card value. */
        giftCard?: string | null;
    }
    interface BillingInfo {
        /** Payment method used for this order */
        paymentMethod?: string | null;
        /**
         * Deprecated (use paymentProviderTransactionId instead)
         * @readonly
         */
        externalTransactionId?: string | null;
        /** Transaction ID from payment provider (e.g., PayPal, Square, Stripe) transaction ID */
        paymentProviderTransactionId?: string | null;
        /** Transaction ID from payment gateway (e.g., Wix Payments) */
        paymentGatewayTransactionId?: string | null;
        /** Full billing address */
        address?: Address$1;
        /**
         * Payment date
         * @readonly
         */
        paidDate?: Date;
        /** Whether order can be refunded by payment provider (manually or automatic) */
        refundableByPaymentProvider?: boolean | null;
    }
    interface Address$1 extends AddressAddressLine1OptionsOneOf {
        /** Addressee name */
        fullName?: FullName;
        /** Country code (2 letters) */
        country?: string | null;
        /** State or district */
        subdivision?: string | null;
        /** City name */
        city?: string | null;
        /** ZIP/postal code */
        zipCode?: string | null;
        /** Phone number */
        phone?: string | null;
        /** Company name */
        company?: string | null;
        /** Email address */
        email?: string | null;
        /** address line */
        addressLine2?: string | null;
        /** Tax information (for Brazil only) */
        vatId?: VatId;
        /** Address line 1 (free text) */
        addressLine1?: string;
        /** Address line 1 (street) */
        street?: Street;
    }
    /** @oneof */
    interface AddressAddressLine1OptionsOneOf {
        /** Address line 1 (free text) */
        addressLine1?: string;
        /** Address line 1 (street) */
        street?: Street;
    }
    interface FullName {
        /** Customer's first name */
        firstName?: string;
        /** Customer's last name */
        lastName?: string;
    }
    interface Street {
        /** Street number */
        number?: string;
        /** Street name */
        name?: string;
    }
    interface VatId {
        /** Customer's tax ID. */
        number?: string;
        /**
         * Tax type.
         * + `CPF`: For individual tax payers.
         * + `CNPJ`: For corporations.
         */
        type?: VatType;
    }
    /** Brazilian tax info types */
    enum VatType {
        /** When the tax info type can't be classified, due to an error */
        UNSPECIFIED_TAX_TYPE = "UNSPECIFIED_TAX_TYPE",
        /** CPF - for individual tax payers */
        CPF = "CPF",
        /** CNPJ - for corporations */
        CNPJ = "CNPJ"
    }
    interface ShippingInfo extends ShippingInfoDetailsOneOf {
        /** Shipping option name. */
        deliveryOption?: string;
        /** Shipping option delivery time. */
        estimatedDeliveryTime?: string | null;
        /** Latest expected delivery date. */
        deliverByDate?: Date;
        /** Shipping region. */
        shippingRegion?: string | null;
        /**
         * Unique code of provided shipping option. For example, `"usps_std_overnight"`.
         * @readonly
         */
        code?: string | null;
        /** Shipment details (when this object describes shipment). */
        shipmentDetails?: ShipmentDetails;
        /** Pickup details (when this object describes pickup). */
        pickupDetails?: PickupDetails$1;
    }
    /** @oneof */
    interface ShippingInfoDetailsOneOf {
        /** Shipment details (when this object describes shipment). */
        shipmentDetails?: ShipmentDetails;
        /** Pickup details (when this object describes pickup). */
        pickupDetails?: PickupDetails$1;
    }
    interface ShipmentDetails {
        /** Shipping destination address. */
        address?: Address$1;
        /**
         * Deprecated (use fulfillments instead).
         * @readonly
         */
        trackingInfo?: TrackingInfo;
        /** Discount applied for shipping. */
        discount?: string | null;
        /** Tax applied for shipping. */
        tax?: string | null;
        /** Price data. */
        priceData?: ShippingPriceData;
    }
    interface TrackingInfo {
        /**
         * Tracking number
         * @readonly
         */
        trackingNumber?: string | null;
        /**
         * Shipping provider
         * @readonly
         */
        shippingProvider?: string | null;
        /**
         * Tracking link
         * @readonly
         */
        trackingLink?: string | null;
    }
    interface ShippingPriceData {
        /** Whether tax is included in the price. */
        taxIncludedInPrice?: boolean;
        /** Shipping price. */
        price?: string | null;
    }
    interface PickupDetails$1 {
        /** Pickup address. */
        pickupAddress?: PickupAddress;
        /**
         * Deprecated (use billingInfo instead).
         * @readonly
         */
        buyerDetails?: BuyerDetails;
        /** Store owner's pickup instructions. */
        pickupInstructions?: string | null;
    }
    interface PickupAddress {
        /** Country code (3 letters) */
        country?: string;
        /** State/District */
        subdivision?: string | null;
        /** Address */
        addressLine1?: string;
        /** City */
        city?: string;
        /** ZIP/postal code */
        zipCode?: string;
    }
    interface BuyerDetails {
        /** Addressee name */
        fullName?: FullName;
        /** Email address */
        email?: string;
        /** Phone number */
        phone?: string;
    }
    /** This might be extended in the future with pending orders statuses */
    enum PaymentStatus {
        /** Payment status can't be classified, due to an error */
        UNSPECIFIED_PAYMENT_STATUS = "UNSPECIFIED_PAYMENT_STATUS",
        /** Order is pending response from the payment provider */
        PENDING = "PENDING",
        /** Order is marked as not paid, and can be marked as paid later on. This is relevant for POS and offline orders */
        NOT_PAID = "NOT_PAID",
        /** The order is marked as paid */
        PAID = "PAID",
        /** Order was refunded, refund amount less than order total price */
        PARTIALLY_REFUNDED = "PARTIALLY_REFUNDED",
        /** Full order total price was refunded */
        FULLY_REFUNDED = "FULLY_REFUNDED",
        /** At least one payment was received and approved, covering less than total price amount */
        PARTIALLY_PAID = "PARTIALLY_PAID"
    }
    enum FulfillmentStatus {
        /** None of the order items are fulfilled */
        NOT_FULFILLED = "NOT_FULFILLED",
        /**
         * All of the order items are fulfilled
         * Orders without shipping info are fulfilled automatically
         */
        FULFILLED = "FULFILLED",
        /** Order is canceled */
        CANCELED = "CANCELED",
        /** Some, but not all of the order items are fulfilled */
        PARTIALLY_FULFILLED = "PARTIALLY_FULFILLED"
    }
    interface LineItem$1 {
        /**
         * Line item ID (auto-generated, stable within this order only)
         * @readonly
         */
        index?: number | null;
        /** Line item quantity */
        quantity?: number;
        /**
         * Deprecated (use priceData instead)
         * @readonly
         */
        price?: string | null;
        /** Line item name */
        name?: string | null;
        /** Product name, translated into the customer's language */
        translatedName?: string | null;
        /** Line item product ID (optional for POS orders) */
        productId?: string | null;
        /**
         * Deprecated (use priceData instead)
         * @readonly
         */
        totalPrice?: string | null;
        /** Line item type (may be extended) */
        lineItemType?: LineItemType;
        /** Line item options ordered */
        options?: OptionSelection[];
        /** Line item custom text field entry */
        customTextFields?: CustomTextFieldSelection[];
        /** Line item weight */
        weight?: string | null;
        /** Primary media for preview of the line item */
        mediaItem?: MediaItem;
        /** Line item SKU */
        sku?: string | null;
        /** Line item notes */
        notes?: string | null;
        /** Line item variantId (from Stores Catalog) */
        variantId?: string | null;
        /** Line item fulfillerId from stores fulfillers. No value equals self fulfilled */
        fulfillerId?: string | null;
        /** Discount applied for this line item */
        discount?: string | null;
        /** Tax applied for this line item */
        tax?: string | null;
        /**
         * Deprecated (use priceData instead)
         * @readonly
         */
        taxIncludedInPrice?: boolean;
        /** Tax group ID */
        taxGroupId?: string | null;
        /** Price data */
        priceData?: LineItemPriceData;
        /**
         * Line item refundedQuantity (from refund). No value means not refunded. Shows the number of line items that were refunded
         * @internal
         * @readonly
         */
        refundedQuantity?: number | null;
        /**
         * Digital file identifier, relevant only for items with type DIGITAL
         * @internal
         */
        digitalFile?: DigitalFile;
    }
    enum LineItemType {
        /** Line item type can't be classified, due to an error */
        UNSPECIFIED_LINE_ITEM_TYPE = "UNSPECIFIED_LINE_ITEM_TYPE",
        /** Physical item type */
        PHYSICAL = "PHYSICAL",
        /** Digital item type */
        DIGITAL = "DIGITAL",
        /** Custom item price */
        CUSTOM_AMOUNT_ITEM = "CUSTOM_AMOUNT_ITEM"
    }
    interface OptionSelection {
        /** Option name */
        option?: string;
        /** Selected choice for this option */
        selection?: string;
    }
    interface CustomTextFieldSelection {
        /** Custom text field name */
        title?: string;
        /** Custom text field value */
        value?: string;
    }
    interface MediaItem {
        /**
         * Media type
         * @readonly
         */
        mediaType?: MediaItemType;
        /**
         * Media URL
         * @readonly
         */
        url?: string;
        /**
         * Media item width
         * @readonly
         */
        width?: number;
        /**
         * Media item height
         * @readonly
         */
        height?: number;
        /** Deprecated */
        mediaId?: string | null;
        /** Media ID (for media items previously saved in Wix Media) */
        _id?: string | null;
        /** Media external URL */
        externalImageUrl?: string | null;
        /** Alternative text for presentation when media cannot be displayed */
        altText?: string | null;
    }
    enum MediaItemType {
        /** Media item type can't be classified, due to an error */
        UNSPECIFIED_MEDIA_TYPE_ITEM = "UNSPECIFIED_MEDIA_TYPE_ITEM",
        /** Image item type */
        IMAGE = "IMAGE"
    }
    interface LineItemPriceData {
        /** Whether tax is included in the price set for this line item */
        taxIncludedInPrice?: boolean;
        /** Line item price */
        price?: string;
        /**
         * Total price charged to the customer (per line item) after computation of quantity and discount
         * @readonly
         */
        totalPrice?: string | null;
    }
    interface DigitalFile {
        /** id of the secure file in media */
        fileId?: string;
    }
    interface Activity {
        /**
         * Activity item type
         * @readonly
         */
        type?: ActivityType;
        /**
         * Activity item author
         * @readonly
         */
        author?: string | null;
        /**
         * Comment added to activity item
         * @readonly
         */
        message?: string | null;
        /**
         * Activity item timestamp
         * @readonly
         */
        timestamp?: Date;
    }
    enum ActivityType {
        /** Activity item type can't be classified, due to an error */
        UNSPECIFIED_ORDER_HISTORY_ITEM_TYPE = "UNSPECIFIED_ORDER_HISTORY_ITEM_TYPE",
        /** Store owner added a comment */
        MERCHANT_COMMENT = "MERCHANT_COMMENT",
        /** Order placed */
        ORDER_PLACED = "ORDER_PLACED",
        /** Order marked as paid, either by the store owner (for offline orders), or when an online transaction was confirmed */
        ORDER_PAID = "ORDER_PAID",
        /** Order shipping status set as fulfilled */
        ORDER_FULFILLED = "ORDER_FULFILLED",
        /** Order shipping status set as not fulfilled */
        ORDER_NOT_FULFILLED = "ORDER_NOT_FULFILLED",
        /** A download link was sent (relevant for orders with digital line items) */
        DOWNLOAD_LINK_SENT = "DOWNLOAD_LINK_SENT",
        /** An email notification for pickup was sent */
        PICKUP_READY_EMAIL_SENT = "PICKUP_READY_EMAIL_SENT",
        /** Shipping tracking number was set */
        TRACKING_NUMBER_ADDED = "TRACKING_NUMBER_ADDED",
        /** Shipping tracking number was edited */
        TRACKING_NUMBER_EDITED = "TRACKING_NUMBER_EDITED",
        /** Shipping tracking link was set */
        TRACKING_LINK_WAS_SET = "TRACKING_LINK_WAS_SET",
        /** An email confirmation of order shipment was sent */
        SHIPPING_CONFIRMATION_EMAIL_SENT = "SHIPPING_CONFIRMATION_EMAIL_SENT",
        /** Invoice was set in the order */
        INVOICE_WAS_SET = "INVOICE_WAS_SET",
        /** Invoice was removed from the order */
        INVOICE_WAS_REMOVED = "INVOICE_WAS_REMOVED",
        /** Invoice was sent to customer via email */
        INVOICE_WAS_SENT = "INVOICE_WAS_SENT",
        /** Email was sent to fulfiller */
        FULFILLER_EMAIL_SENT = "FULFILLER_EMAIL_SENT",
        /** Shipping address was updated */
        SHIPPING_ADDRESS_EDITED = "SHIPPING_ADDRESS_EDITED",
        /** Order email was updated */
        EMAIL_EDITED = "EMAIL_EDITED",
        /** Order partially paid. During the checkout for orders with deposit items. */
        ORDER_PARTIALLY_PAID = "ORDER_PARTIALLY_PAID"
    }
    interface V2InvoiceInfo {
        /** Invoice ID */
        _id?: string;
        /** Invoice source */
        source?: InvoiceSource;
    }
    enum InvoiceSource {
        /** Invoice source can't be classified, due to an error */
        UNSPECIFIED_INVOICE_SOURCE = "UNSPECIFIED_INVOICE_SOURCE",
        /** Invoice created using the Invoices API */
        WIX = "WIX"
    }
    interface Fulfillment {
        /**
         * Fulfillment ID (auto generated upon fulfillment creation).
         * @readonly
         */
        _id?: string | null;
        /**
         * Fulfillment creation date and time.
         * @readonly
         */
        dateCreated?: Date;
        /** Information about the line items in the fulfilled order. */
        lineItems?: FulfillmentLineItem[];
        /** Tracking information. */
        trackingInfo?: FulfillmentTrackingInfo;
    }
    interface FulfillmentLineItem {
        /** Line item ID (mirrors the line item index of the order). */
        index?: number;
        /**
         * Line item quantity.
         * On creation, if this parameter isn't passed, the new fulfillment will automatically include all items of this line item that have not already been linked to a fulfillment.
         * If the order does not have the requested quantity of line items available to add to this fulfillment, the fulfillment will not be created and an error will be returned.
         * This property will always have a value when returned.
         */
        quantity?: number | null;
    }
    interface FulfillmentTrackingInfo {
        /** Tracking number. */
        trackingNumber?: string;
        /**
         * Shipping provider. Using the following shipping providers will allow for autofilling the tracking link:
         * * `fedex`
         * * `ups`
         * * `usps`
         * * `dhl`
         * * `canadaPost`
         */
        shippingProvider?: string;
        /** Tracking link - autofilled if using a predefined shipping provider, otherwise provided on creation. */
        trackingLink?: string | null;
    }
    interface Discount {
        /**
         * Deprecated (use Totals.discount instead)
         * @readonly
         */
        value?: string;
        /** Applied coupon */
        appliedCoupon?: AppliedCoupon;
    }
    interface AppliedCoupon {
        /** Coupon ID */
        couponId?: string;
        /** Coupon name */
        name?: string;
        /** Coupon code */
        code?: string;
    }
    /** Custom field */
    interface CustomField {
        /** Free text that the customer entered in the custom field during the checkout process */
        value?: string;
        /** Title for the custom field */
        title?: string;
        /** The title translated according to the buyer language */
        translatedTitle?: string;
    }
    interface ChannelInfo {
        /** Sales channel that submitted the order */
        type?: ChannelType;
        /** Reference to an order ID from an external system, as defined in channelInfo (e.g., eBay or Amazon) */
        externalOrderId?: string | null;
        /** URL to the order in the external system, as defined in channelInfo (e.g., eBay or Amazon) */
        externalOrderUrl?: string | null;
    }
    enum ChannelType {
        UNSPECIFIED = "UNSPECIFIED",
        WEB = "WEB",
        POS = "POS",
        EBAY = "EBAY",
        AMAZON = "AMAZON",
        OTHER_PLATFORM = "OTHER_PLATFORM",
        WIX_APP_STORE = "WIX_APP_STORE",
        WIX_INVOICES = "WIX_INVOICES",
        BACKOFFICE_MERCHANT = "BACKOFFICE_MERCHANT",
        WISH = "WISH"
    }
    interface EnteredBy {
        _id?: string;
        identityType?: EnteredByIdentityType;
    }
    enum EnteredByIdentityType {
        USER = "USER",
        MEMBER = "MEMBER",
        CONTACT = "CONTACT",
        APP = "APP"
    }
    interface SubscriptionInfo {
        /** Subscription ID. */
        _id?: string | null;
        /** Current cycle number. For example, if the subscription is in the 3rd month of a 4-month subscription, the value will be `3`. */
        cycleNumber?: number;
        /** Subscription settings. */
        subscriptionSettings?: SubscriptionSettings$1;
        /** Subscription options info. */
        subscriptionOptionInfo?: SubscriptionOptionInfo;
    }
    interface SubscriptionSettings$1 {
        /** Frequency of recurring payment. */
        frequency?: SubscriptionFrequency$1;
        /**
         * Interval of recurring payment (optional: default value 1 will be used if not provided)
         * @internal
         */
        interval?: number | null;
        /** Whether subscription is renewed automatically at the end of each period. */
        autoRenewal?: boolean;
        /** Number of billing cycles before subscription ends. Ignored if `autoRenewal: true`. */
        billingCycles?: number | null;
    }
    /** Frequency unit of recurring payment */
    enum SubscriptionFrequency$1 {
        UNDEFINED = "UNDEFINED",
        DAY = "DAY",
        WEEK = "WEEK",
        MONTH = "MONTH",
        YEAR = "YEAR"
    }
    interface SubscriptionOptionInfo {
        /**
         * Subscription option ID.
         * @internal
         */
        _id?: string | null;
        /** Subscription option title. */
        title?: string;
        /** Subscription option description. */
        description?: string | null;
    }
    interface V2Refund {
        /** Refund created timestamp. */
        dateCreated?: Date;
        /** Refund amount. */
        amount?: string;
        /** Reason for refund, given by user (optional). */
        reason?: string | null;
        /**
         * Deprecated. Use externalRefund.
         * @internal
         */
        isManual?: boolean;
        /**
         * Deprecated. Use payment_provider_transaction_id.
         * @internal
         */
        providerTransactionId?: string | null;
        /**
         * Deprecated. Use id.
         * @internal
         */
        refundId?: string;
        /** Payment provider transaction ID. Used to find refund transaction info on the payment provider's side. */
        paymentProviderTransactionId?: string | null;
        /** Refund ID. */
        _id?: string;
        /** Whether refund was made externally (on the payment provider's side). */
        externalRefund?: boolean;
    }
    interface GiftCard$1 {
        transactionId?: string;
        /** giftcard internal ID */
        _id?: string;
        /** giftcard provider appid */
        providerId?: string;
        /** giftcard amount */
        amount?: string;
    }
    interface ListTransactionsForSingleOrderRequest {
        /** Order ID. */
        orderId: string;
    }
    interface ListTransactionsForSingleOrderResponse {
        /** Order ID and its associated transactions. */
        orderTransactions?: OrderTransactions;
    }
    interface ListTransactionsForMultipleOrdersRequest {
        /** Order IDs for which to retrieve transactions. */
        orderIds: string[];
    }
    interface ListTransactionsForMultipleOrdersResponse {
        /** List of order IDs and their associated transactions. */
        orderTransactions?: OrderTransactions[];
    }
    interface AddPaymentsRequest {
        /** Order ID. */
        orderId: string;
        /** Payments to be added to order. */
        payments: Payment[];
    }
    interface AddPaymentsResponse {
        /** Order ID and its associated transactions. */
        orderTransactions?: OrderTransactions;
        /** IDs of added order payments. */
        paymentsIds?: string[];
    }
    /** Triggered when a payment is updated. */
    interface PaymentsUpdated {
        /** Updated order transactions. */
        orderTransactions?: OrderTransactions;
        /** IDs of the updated payments. */
        paymentIds?: string[];
    }
    interface UpdatePaymentStatusRequest {
        /** Order ID. */
        orderId: string;
        /** Payment ID. */
        paymentId: string;
        /** Payment status. */
        status?: TransactionStatus;
        /**
         * *TBD** NOT IMPLEMENTED
         * Status update date
         * When defined -> the update will be applied only if it's newer than existing one, otherwise will throw 409
         * Not defined -> apply the update without any verification.
         * @internal
         */
        statusUpdatedDate?: Date;
    }
    interface UpdatePaymentStatusResponse {
        /** Order ID and its associated transactions after update. */
        orderTransactions?: OrderTransactions;
    }
    interface BulkUpdatePaymentStatusesRequest {
        /** Order and payment IDs for which to update payment status. */
        paymentAndOrderIds: PaymentAndOrderId[];
        /** Whether to return the full payment entity (`results.item`) in the response. */
        returnFullEntity?: boolean;
        /** Payment status. */
        status?: TransactionStatus;
        /**
         * *TBD** NOT IMPLEMENTED
         * Status update date
         * When defined -> the update will be applied only if it's newer than existing one, otherwise will throw 409
         * Not defined -> apply the update without any verification.
         * @internal
         */
        statusUpdatedDate?: Date;
    }
    interface PaymentAndOrderId {
        /** Order ID. */
        orderId?: string;
        /** Payment ID. */
        paymentId?: string;
    }
    interface BulkUpdatePaymentStatusesResponse {
        /** Bulk operation results. */
        results?: BulkPaymentResult[];
        /** Bulk operation metadata. */
        bulkActionMetadata?: BulkActionMetadata;
    }
    interface BulkPaymentResult {
        /** Item metadata. */
        itemMetadata?: ItemMetadata;
        /** Updated payment. Returned if `return_full_entity` set to `true`. */
        item?: Payment;
    }
    interface ItemMetadata {
        /** Item ID. Should always be available, unless it's impossible (for example, when failing to create an item). */
        _id?: string | null;
        /** Index of the item within the request array. Allows for correlation between request and response items. */
        originalIndex?: number;
        /** Whether the requested action was successful for this item. When `false`, the `error` field is populated. */
        success?: boolean;
        /** Details about the error in case of failure. */
        error?: ApplicationError$1;
    }
    interface ApplicationError$1 {
        /** Error code. */
        code?: string;
        /** Description of the error. */
        description?: string;
        /** Data related to the error. */
        data?: Record<string, any> | null;
    }
    interface BulkActionMetadata {
        /** Number of items that were successfully processed. */
        totalSuccesses?: number;
        /** Number of items that couldn't be processed. */
        totalFailures?: number;
        /** Number of failures without details because detailed failure threshold was exceeded. */
        undetailedFailures?: number;
    }
    interface TriggerRefundRequest {
        /** The order this refund related to */
        orderId: string;
        /**
         * Refund operations information
         * Currently, only *one* payment refund is supported per request
         */
        payments: PaymentRefund[];
        /** Business model of a refund */
        details?: RefundDetails;
        /** How to restock items as part of this refund */
        restockInfo?: RestockInfo;
        /** Should send a confirmation mail to the customer */
        sendOrderRefundedEmail?: boolean;
        /** Personal note added to the email */
        customMessage?: string | null;
    }
    interface PaymentRefund {
        /** Specific payment within the order to refund */
        paymentId?: string;
        /** Refund amount. Not relevant for membership refunds. */
        amount?: Price;
        /**
         * Whether refund is made externally and manually (on the payment provider's side)
         * When false (default), the payment gateway will be called in order to make an actual refund, and then the payment will be marked as refunded.
         * When true, the payment will only be *marked* as refunded, and no actual refund will be performed.
         */
        externalRefund?: boolean;
    }
    interface RestockInfo {
        /** Restock policy type. */
        type?: RestockType;
        /**
         * Deprecated, use items instead
         * @internal
         */
        lineItemIds?: string[];
        /** Restocked line items and quantities, only relevant for `SOME_ITEMS` type. */
        items?: RestockItem[];
    }
    enum RestockType {
        NO_ITEMS = "NO_ITEMS",
        ALL_ITEMS = "ALL_ITEMS",
        SOME_ITEMS = "SOME_ITEMS"
    }
    interface RestockItem {
        /** ID of the line item being restocked. */
        lineItemId?: string;
        /** Line item quantity being restocked. */
        quantity?: number;
    }
    interface TriggerRefundResponse {
        /** All order's transactions after the refunds were added */
        orderTransactions?: OrderTransactions;
        /** Created refund ID */
        refundId?: string;
        /**
         * Payment ID's that the refund execution had failed for
         * @internal
         */
        failedPaymentIds?: string[];
    }
    /** Triggered when a refund is created. */
    interface RefundCreated {
        /** Updated order transactions. */
        orderTransactions?: OrderTransactions;
        /** ID of the created refund. */
        refundId?: string;
        /** How to restock items as part of this refund. */
        restockInfo?: RestockInfo;
        /** Should send a confirmation mail to the customer */
        sendOrderRefundedEmail?: boolean;
        /** Personal note added to the email */
        customMessage?: string | null;
        /** Refunded line items and quantities that are part of the created refund. */
        refundItems?: RefundItem[];
    }
    interface CalculateRefundRequest {
        /** Order ID */
        orderId: string;
        /** Refunded line items and quantity */
        refundItems?: CalculateRefundItemRequest[];
        /** Should include shipping in refund calculation */
        refundShipping?: boolean;
    }
    interface CalculateRefundItemRequest {
        /** ID of the line item being refunded */
        lineItemId?: string;
        /** How much of that line item is being refunded */
        quantity?: number;
        /** Should this item be restocked (used for validation purposes) */
        restock?: boolean;
    }
    interface CalculateRefundResponse {
        /** Total refundable amount */
        total?: string;
        /** Tax cost of the order */
        tax?: string;
        /** Discount given for this order */
        discount?: string;
        /** Total cost of the order (without tax) */
        subtotal?: string;
        /** Previous refund given on that order */
        previouslyRefundedAmount?: string | null;
        /** The refundable items of that order */
        items?: CalculateRefundItemResponse[];
    }
    interface CalculateRefundItemResponse {
        /** Line item ID */
        lineItemId?: string;
        /** The line item's price */
        lineItemPrice?: number;
    }
    interface GetRefundabilityStatusRequest {
        /** Order ID. */
        orderId: string;
    }
    interface GetRefundabilityStatusResponse {
        /** Refundability details. */
        refundabilities?: Refundability[];
        /** Whether the order supports refunding per item. */
        refundablePerItem?: boolean;
    }
    interface Refundability extends RefundabilityAdditionalRefundabilityInfoOneOf {
        /** Payment ID. */
        paymentId?: string;
        /** Payment refundability status. */
        refundabilityStatus?: RefundableStatus;
        /** Link to payment provider dashboard. */
        providerLink?: string | null;
        /** Reason why payment is not refundable. */
        nonRefundableReason?: NonRefundableReason;
        /** Reason why payment is only refundable manually. */
        manuallyRefundableReason?: ManuallyRefundableReason;
    }
    /** @oneof */
    interface RefundabilityAdditionalRefundabilityInfoOneOf {
        /** Reason why payment is not refundable. */
        nonRefundableReason?: NonRefundableReason;
        /** Reason why payment is only refundable manually. */
        manuallyRefundableReason?: ManuallyRefundableReason;
    }
    enum RefundableStatus {
        NOT_REFUNDABLE = "NOT_REFUNDABLE",
        MANUAL = "MANUAL",
        REFUNDABLE = "REFUNDABLE"
    }
    enum NonRefundableReason {
        NONE = "NONE",
        ALREADY_REFUNDED = "ALREADY_REFUNDED",
        PROVIDER_IS_DOWN = "PROVIDER_IS_DOWN",
        INTERNAL_ERROR = "INTERNAL_ERROR",
        NOT_PAID = "NOT_PAID",
        ACCESS_DENIED = "ACCESS_DENIED",
        ZERO_PRICE = "ZERO_PRICE",
        DISABLED_BY_PROVIDER = "DISABLED_BY_PROVIDER",
        PARTIALLY_PAID = "PARTIALLY_PAID",
        DEPOSIT_ONLINE_ITEM = "DEPOSIT_ONLINE_ITEM",
        PENDING_REFUND = "PENDING_REFUND",
        FORBIDDEN = "FORBIDDEN"
    }
    enum ManuallyRefundableReason {
        EXPIRED = "EXPIRED",
        NOT_SUPPORTED = "NOT_SUPPORTED",
        NOT_FOUND = "NOT_FOUND",
        OFFLINE = "OFFLINE"
    }
    interface ListInvoicesForSingleOrderRequest {
        /** Order ID. */
        orderId: string;
    }
    interface ListInvoicesForSingleOrderResponse {
        /** List of invoices. */
        invoices?: InvoiceInfo[];
    }
    interface InvoiceInfo {
        /** Invoice ID. */
        _id?: string;
        /** ID of the app that set the invoice. */
        appId?: string;
        /** Invoice URL. */
        url?: string | null;
        /** Invoice creation date and time. */
        _createdDate?: Date;
    }
    interface ListInvoicesForMultipleOrdersRequest {
        /** Order IDs for which to retrieve invoices. */
        orderIds: string[];
    }
    interface ListInvoicesForMultipleOrdersResponse {
        /** List of order IDs and their associated invoices. */
        invoicesForOrder?: InvoicesForOrder[];
    }
    interface InvoicesForOrder {
        /** Order ID. */
        orderId?: string;
        /** Invoices info. */
        invoicesInfo?: InvoiceInfo[];
    }
    interface GenerateInvoiceRequest {
        /** Order ID. */
        orderId: string;
    }
    interface GenerateInvoiceResponse {
        /** Invoice ID. */
        invoiceId?: string;
    }
    interface BulkGenerateInvoicesRequest {
        /** Order IDs. */
        orderIds: string[];
    }
    interface BulkGenerateInvoicesResponse {
        results?: BulkInvoiceResult[];
        bulkActionMetadata?: BulkActionMetadata;
    }
    interface BulkInvoiceResult {
        itemMetadata?: ItemMetadata;
        item?: InvoiceForOrder;
    }
    interface InvoiceForOrder {
        /** Order ID. */
        orderId?: string;
        /** Invoice ID. */
        invoiceId?: string;
    }
    interface AddInvoiceToOrderRequest {
        /** Order ID. */
        orderId: string;
        /** Invoice info. */
        invoiceInfo: InvoiceInfo;
    }
    interface AddInvoiceToOrderResponse {
        /** List of order invoices. */
        orderInvoices?: InvoiceInfo[];
    }
    /**
     * Retrieves transactions associated with a specified order.
     * @param orderId - Order ID.
     * @internal
     * @documentationMaturity preview
     * @requiredField orderId
     */
    function listTransactionsForSingleOrder(orderId: string): Promise<ListTransactionsForSingleOrderResponse>;
    /**
     * Retrieves transactions associated with all specified orders.
     * @param orderIds - Order IDs for which to retrieve transactions.
     * @internal
     * @documentationMaturity preview
     * @requiredField orderIds
     */
    function listTransactionsForMultipleOrders(orderIds: string[]): Promise<ListTransactionsForMultipleOrdersResponse>;
    /**
     * Add payment records to an order.
     * > **Note:** This does **NOT** perform the actual charging - the order is only updated with records of the payments.
     * @param orderId - Order ID.
     * @param payments - Payments to be added to order.
     * @internal
     * @documentationMaturity preview
     * @requiredField orderId
     * @requiredField payments
     * @requiredField payments.amount
     * @requiredField payments.giftcardPaymentDetails.giftCardId
     * @requiredField payments.giftcardPaymentDetails.giftCardPaymentId
     * @requiredField payments.membershipPaymentDetails.lineItemId
     * @requiredField payments.membershipPaymentDetails.membershipId
     * @requiredField payments.membershipPaymentDetails.name
     * @requiredField payments.membershipPaymentDetails.name.original
     * @requiredField payments.membershipPaymentDetails.providerAppId
     */
    function addPayments(orderId: string, payments: Payment[]): Promise<AddPaymentsResponse>;
    /**
     * Updates the payment status of an order transaction.
     * @internal
     * @documentationMaturity preview
     * @requiredField identifiers
     * @requiredField identifiers.orderId
     * @requiredField identifiers.paymentId
     */
    function updatePaymentStatus(identifiers: UpdatePaymentStatusIdentifiers, options?: UpdatePaymentStatusOptions): Promise<UpdatePaymentStatusResponse>;
    interface UpdatePaymentStatusIdentifiers {
        /** Payment ID. */
        paymentId: string;
        /** Order ID. */
        orderId: string;
    }
    interface UpdatePaymentStatusOptions {
        /** Payment status. */
        status?: TransactionStatus;
        /**
         * *TBD** NOT IMPLEMENTED
         * Status update date
         * When defined -> the update will be applied only if it's newer than existing one, otherwise will throw 409
         * Not defined -> apply the update without any verification.
         * @internal
         */
        statusUpdatedDate?: Date;
    }
    /**
     * Updates the status of multiple orders' payments.
     * @param paymentAndOrderIds - Order and payment IDs for which to update payment status.
     * @internal
     * @documentationMaturity preview
     * @requiredField paymentAndOrderIds
     */
    function bulkUpdatePaymentStatuses(paymentAndOrderIds: PaymentAndOrderId[], options?: BulkUpdatePaymentStatusesOptions): Promise<BulkUpdatePaymentStatusesResponse>;
    interface BulkUpdatePaymentStatusesOptions {
        /** Whether to return the full payment entity (`results.item`) in the response. */
        returnFullEntity?: boolean;
        /** Payment status. */
        status?: TransactionStatus;
        /**
         * *TBD** NOT IMPLEMENTED
         * Status update date
         * When defined -> the update will be applied only if it's newer than existing one, otherwise will throw 409
         * Not defined -> apply the update without any verification.
         * @internal
         */
        statusUpdatedDate?: Date;
    }
    /**
     * Triggers one or more refunds on an order and updates the order's transactions record.
     * @param orderId - The order this refund related to
     * @param payments - Refund operations information
     * Currently, only *one* payment refund is supported per request
     * @internal
     * @documentationMaturity preview
     * @requiredField orderId
     * @requiredField payments
     * @requiredField payments.paymentId
     */
    function triggerRefund(orderId: string, payments: PaymentRefund[], options?: TriggerRefundOptions): Promise<TriggerRefundResponse>;
    interface TriggerRefundOptions {
        /** Business model of a refund */
        details?: RefundDetails;
        /** How to restock items as part of this refund */
        restockInfo?: RestockInfo;
        /** Should send a confirmation mail to the customer */
        sendOrderRefundedEmail?: boolean;
        /** Personal note added to the email */
        customMessage?: string | null;
    }
    /**
     * Calculates what amount can still be refunded on this order.
     * @param orderId - Order ID
     * @internal
     * @documentationMaturity preview
     * @requiredField orderId
     */
    function calculateRefund(orderId: string, options?: CalculateRefundOptions): Promise<CalculateRefundResponse>;
    interface CalculateRefundOptions {
        /** Refunded line items and quantity */
        refundItems?: CalculateRefundItemRequest[];
        /** Should include shipping in refund calculation */
        refundShipping?: boolean;
    }
    /**
     * Checks whether this order can be refunded.
     * @param orderId - Order ID.
     * @internal
     * @documentationMaturity preview
     * @requiredField orderId
     */
    function getRefundabilityStatus(orderId: string): Promise<GetRefundabilityStatusResponse>;
    /**
     * Retrieves invoices associated with a specified order.
     * @param orderId - Order ID.
     * @internal
     * @documentationMaturity preview
     * @requiredField orderId
     */
    function listInvoicesForSingleOrder(orderId: string): Promise<ListInvoicesForSingleOrderResponse>;
    /**
     * Retrieves invoices associated with all specified orders.
     * @param orderIds - Order IDs for which to retrieve invoices.
     * @internal
     * @documentationMaturity preview
     * @requiredField orderIds
     */
    function listInvoicesForMultipleOrders(orderIds: string[]): Promise<ListInvoicesForMultipleOrdersResponse>;
    /**
     * Generates and adds an invoice to a specified order.
     * @param orderId - Order ID.
     * @internal
     * @documentationMaturity preview
     * @requiredField orderId
     */
    function generateInvoice(orderId: string): Promise<GenerateInvoiceResponse>;
    /**
     * Generates and adds invoices to all specified orders.
     * @param orderIds - Order IDs.
     * @internal
     * @documentationMaturity preview
     * @requiredField orderIds
     */
    function bulkGenerateInvoices(orderIds: string[]): Promise<BulkGenerateInvoicesResponse>;
    /**
     * Adds an invoice to a specified order.
     * @param orderId - Order ID.
     * @param invoiceInfo - Invoice info.
     * @internal
     * @documentationMaturity preview
     * @requiredField invoiceInfo
     * @requiredField invoiceInfo._id
     * @requiredField invoiceInfo.appId
     * @requiredField orderId
     */
    function addInvoiceToOrder(orderId: string, invoiceInfo: InvoiceInfo): Promise<AddInvoiceToOrderResponse>;
    type ecomV1OrderTransactions_universal_d_OrderTransactions = OrderTransactions;
    type ecomV1OrderTransactions_universal_d_Payment = Payment;
    type ecomV1OrderTransactions_universal_d_PaymentPaymentDetailsOneOf = PaymentPaymentDetailsOneOf;
    type ecomV1OrderTransactions_universal_d_RegularPaymentDetails = RegularPaymentDetails;
    type ecomV1OrderTransactions_universal_d_TransactionStatus = TransactionStatus;
    const ecomV1OrderTransactions_universal_d_TransactionStatus: typeof TransactionStatus;
    type ecomV1OrderTransactions_universal_d_GiftCardPaymentDetails = GiftCardPaymentDetails;
    type ecomV1OrderTransactions_universal_d_MembershipPaymentDetails = MembershipPaymentDetails;
    type ecomV1OrderTransactions_universal_d_MembershipPaymentStatus = MembershipPaymentStatus;
    const ecomV1OrderTransactions_universal_d_MembershipPaymentStatus: typeof MembershipPaymentStatus;
    type ecomV1OrderTransactions_universal_d_Price = Price;
    type ecomV1OrderTransactions_universal_d_Refund = Refund;
    type ecomV1OrderTransactions_universal_d_RefundTransaction = RefundTransaction;
    type ecomV1OrderTransactions_universal_d_RefundStatus = RefundStatus;
    const ecomV1OrderTransactions_universal_d_RefundStatus: typeof RefundStatus;
    type ecomV1OrderTransactions_universal_d_RefundDetails = RefundDetails;
    type ecomV1OrderTransactions_universal_d_RefundItem = RefundItem;
    type ecomV1OrderTransactions_universal_d_SnapshotMessage = SnapshotMessage;
    type ecomV1OrderTransactions_universal_d_IndexingMessage = IndexingMessage;
    type ecomV1OrderTransactions_universal_d_DiffmatokyPayload = DiffmatokyPayload;
    type ecomV1OrderTransactions_universal_d_ErrorInformation = ErrorInformation;
    type ecomV1OrderTransactions_universal_d_OrderRefunded = OrderRefunded;
    type ecomV1OrderTransactions_universal_d_Order = Order;
    type ecomV1OrderTransactions_universal_d_BuyerInfo = BuyerInfo;
    type ecomV1OrderTransactions_universal_d_IdentityType = IdentityType;
    const ecomV1OrderTransactions_universal_d_IdentityType: typeof IdentityType;
    type ecomV1OrderTransactions_universal_d_Totals = Totals;
    type ecomV1OrderTransactions_universal_d_BillingInfo = BillingInfo;
    type ecomV1OrderTransactions_universal_d_AddressAddressLine1OptionsOneOf = AddressAddressLine1OptionsOneOf;
    type ecomV1OrderTransactions_universal_d_FullName = FullName;
    type ecomV1OrderTransactions_universal_d_Street = Street;
    type ecomV1OrderTransactions_universal_d_VatId = VatId;
    type ecomV1OrderTransactions_universal_d_VatType = VatType;
    const ecomV1OrderTransactions_universal_d_VatType: typeof VatType;
    type ecomV1OrderTransactions_universal_d_ShippingInfo = ShippingInfo;
    type ecomV1OrderTransactions_universal_d_ShippingInfoDetailsOneOf = ShippingInfoDetailsOneOf;
    type ecomV1OrderTransactions_universal_d_ShipmentDetails = ShipmentDetails;
    type ecomV1OrderTransactions_universal_d_TrackingInfo = TrackingInfo;
    type ecomV1OrderTransactions_universal_d_ShippingPriceData = ShippingPriceData;
    type ecomV1OrderTransactions_universal_d_PickupAddress = PickupAddress;
    type ecomV1OrderTransactions_universal_d_BuyerDetails = BuyerDetails;
    type ecomV1OrderTransactions_universal_d_PaymentStatus = PaymentStatus;
    const ecomV1OrderTransactions_universal_d_PaymentStatus: typeof PaymentStatus;
    type ecomV1OrderTransactions_universal_d_FulfillmentStatus = FulfillmentStatus;
    const ecomV1OrderTransactions_universal_d_FulfillmentStatus: typeof FulfillmentStatus;
    type ecomV1OrderTransactions_universal_d_LineItemType = LineItemType;
    const ecomV1OrderTransactions_universal_d_LineItemType: typeof LineItemType;
    type ecomV1OrderTransactions_universal_d_OptionSelection = OptionSelection;
    type ecomV1OrderTransactions_universal_d_CustomTextFieldSelection = CustomTextFieldSelection;
    type ecomV1OrderTransactions_universal_d_MediaItem = MediaItem;
    type ecomV1OrderTransactions_universal_d_MediaItemType = MediaItemType;
    const ecomV1OrderTransactions_universal_d_MediaItemType: typeof MediaItemType;
    type ecomV1OrderTransactions_universal_d_LineItemPriceData = LineItemPriceData;
    type ecomV1OrderTransactions_universal_d_DigitalFile = DigitalFile;
    type ecomV1OrderTransactions_universal_d_Activity = Activity;
    type ecomV1OrderTransactions_universal_d_ActivityType = ActivityType;
    const ecomV1OrderTransactions_universal_d_ActivityType: typeof ActivityType;
    type ecomV1OrderTransactions_universal_d_V2InvoiceInfo = V2InvoiceInfo;
    type ecomV1OrderTransactions_universal_d_InvoiceSource = InvoiceSource;
    const ecomV1OrderTransactions_universal_d_InvoiceSource: typeof InvoiceSource;
    type ecomV1OrderTransactions_universal_d_Fulfillment = Fulfillment;
    type ecomV1OrderTransactions_universal_d_FulfillmentLineItem = FulfillmentLineItem;
    type ecomV1OrderTransactions_universal_d_FulfillmentTrackingInfo = FulfillmentTrackingInfo;
    type ecomV1OrderTransactions_universal_d_Discount = Discount;
    type ecomV1OrderTransactions_universal_d_AppliedCoupon = AppliedCoupon;
    type ecomV1OrderTransactions_universal_d_CustomField = CustomField;
    type ecomV1OrderTransactions_universal_d_ChannelInfo = ChannelInfo;
    type ecomV1OrderTransactions_universal_d_ChannelType = ChannelType;
    const ecomV1OrderTransactions_universal_d_ChannelType: typeof ChannelType;
    type ecomV1OrderTransactions_universal_d_EnteredBy = EnteredBy;
    type ecomV1OrderTransactions_universal_d_EnteredByIdentityType = EnteredByIdentityType;
    const ecomV1OrderTransactions_universal_d_EnteredByIdentityType: typeof EnteredByIdentityType;
    type ecomV1OrderTransactions_universal_d_SubscriptionInfo = SubscriptionInfo;
    type ecomV1OrderTransactions_universal_d_SubscriptionOptionInfo = SubscriptionOptionInfo;
    type ecomV1OrderTransactions_universal_d_V2Refund = V2Refund;
    type ecomV1OrderTransactions_universal_d_ListTransactionsForSingleOrderRequest = ListTransactionsForSingleOrderRequest;
    type ecomV1OrderTransactions_universal_d_ListTransactionsForSingleOrderResponse = ListTransactionsForSingleOrderResponse;
    type ecomV1OrderTransactions_universal_d_ListTransactionsForMultipleOrdersRequest = ListTransactionsForMultipleOrdersRequest;
    type ecomV1OrderTransactions_universal_d_ListTransactionsForMultipleOrdersResponse = ListTransactionsForMultipleOrdersResponse;
    type ecomV1OrderTransactions_universal_d_AddPaymentsRequest = AddPaymentsRequest;
    type ecomV1OrderTransactions_universal_d_AddPaymentsResponse = AddPaymentsResponse;
    type ecomV1OrderTransactions_universal_d_PaymentsUpdated = PaymentsUpdated;
    type ecomV1OrderTransactions_universal_d_UpdatePaymentStatusRequest = UpdatePaymentStatusRequest;
    type ecomV1OrderTransactions_universal_d_UpdatePaymentStatusResponse = UpdatePaymentStatusResponse;
    type ecomV1OrderTransactions_universal_d_BulkUpdatePaymentStatusesRequest = BulkUpdatePaymentStatusesRequest;
    type ecomV1OrderTransactions_universal_d_PaymentAndOrderId = PaymentAndOrderId;
    type ecomV1OrderTransactions_universal_d_BulkUpdatePaymentStatusesResponse = BulkUpdatePaymentStatusesResponse;
    type ecomV1OrderTransactions_universal_d_BulkPaymentResult = BulkPaymentResult;
    type ecomV1OrderTransactions_universal_d_ItemMetadata = ItemMetadata;
    type ecomV1OrderTransactions_universal_d_BulkActionMetadata = BulkActionMetadata;
    type ecomV1OrderTransactions_universal_d_TriggerRefundRequest = TriggerRefundRequest;
    type ecomV1OrderTransactions_universal_d_PaymentRefund = PaymentRefund;
    type ecomV1OrderTransactions_universal_d_RestockInfo = RestockInfo;
    type ecomV1OrderTransactions_universal_d_RestockType = RestockType;
    const ecomV1OrderTransactions_universal_d_RestockType: typeof RestockType;
    type ecomV1OrderTransactions_universal_d_RestockItem = RestockItem;
    type ecomV1OrderTransactions_universal_d_TriggerRefundResponse = TriggerRefundResponse;
    type ecomV1OrderTransactions_universal_d_RefundCreated = RefundCreated;
    type ecomV1OrderTransactions_universal_d_CalculateRefundRequest = CalculateRefundRequest;
    type ecomV1OrderTransactions_universal_d_CalculateRefundItemRequest = CalculateRefundItemRequest;
    type ecomV1OrderTransactions_universal_d_CalculateRefundResponse = CalculateRefundResponse;
    type ecomV1OrderTransactions_universal_d_CalculateRefundItemResponse = CalculateRefundItemResponse;
    type ecomV1OrderTransactions_universal_d_GetRefundabilityStatusRequest = GetRefundabilityStatusRequest;
    type ecomV1OrderTransactions_universal_d_GetRefundabilityStatusResponse = GetRefundabilityStatusResponse;
    type ecomV1OrderTransactions_universal_d_Refundability = Refundability;
    type ecomV1OrderTransactions_universal_d_RefundabilityAdditionalRefundabilityInfoOneOf = RefundabilityAdditionalRefundabilityInfoOneOf;
    type ecomV1OrderTransactions_universal_d_RefundableStatus = RefundableStatus;
    const ecomV1OrderTransactions_universal_d_RefundableStatus: typeof RefundableStatus;
    type ecomV1OrderTransactions_universal_d_NonRefundableReason = NonRefundableReason;
    const ecomV1OrderTransactions_universal_d_NonRefundableReason: typeof NonRefundableReason;
    type ecomV1OrderTransactions_universal_d_ManuallyRefundableReason = ManuallyRefundableReason;
    const ecomV1OrderTransactions_universal_d_ManuallyRefundableReason: typeof ManuallyRefundableReason;
    type ecomV1OrderTransactions_universal_d_ListInvoicesForSingleOrderRequest = ListInvoicesForSingleOrderRequest;
    type ecomV1OrderTransactions_universal_d_ListInvoicesForSingleOrderResponse = ListInvoicesForSingleOrderResponse;
    type ecomV1OrderTransactions_universal_d_InvoiceInfo = InvoiceInfo;
    type ecomV1OrderTransactions_universal_d_ListInvoicesForMultipleOrdersRequest = ListInvoicesForMultipleOrdersRequest;
    type ecomV1OrderTransactions_universal_d_ListInvoicesForMultipleOrdersResponse = ListInvoicesForMultipleOrdersResponse;
    type ecomV1OrderTransactions_universal_d_InvoicesForOrder = InvoicesForOrder;
    type ecomV1OrderTransactions_universal_d_GenerateInvoiceRequest = GenerateInvoiceRequest;
    type ecomV1OrderTransactions_universal_d_GenerateInvoiceResponse = GenerateInvoiceResponse;
    type ecomV1OrderTransactions_universal_d_BulkGenerateInvoicesRequest = BulkGenerateInvoicesRequest;
    type ecomV1OrderTransactions_universal_d_BulkGenerateInvoicesResponse = BulkGenerateInvoicesResponse;
    type ecomV1OrderTransactions_universal_d_BulkInvoiceResult = BulkInvoiceResult;
    type ecomV1OrderTransactions_universal_d_InvoiceForOrder = InvoiceForOrder;
    type ecomV1OrderTransactions_universal_d_AddInvoiceToOrderRequest = AddInvoiceToOrderRequest;
    type ecomV1OrderTransactions_universal_d_AddInvoiceToOrderResponse = AddInvoiceToOrderResponse;
    const ecomV1OrderTransactions_universal_d_listTransactionsForSingleOrder: typeof listTransactionsForSingleOrder;
    const ecomV1OrderTransactions_universal_d_listTransactionsForMultipleOrders: typeof listTransactionsForMultipleOrders;
    const ecomV1OrderTransactions_universal_d_addPayments: typeof addPayments;
    const ecomV1OrderTransactions_universal_d_updatePaymentStatus: typeof updatePaymentStatus;
    type ecomV1OrderTransactions_universal_d_UpdatePaymentStatusIdentifiers = UpdatePaymentStatusIdentifiers;
    type ecomV1OrderTransactions_universal_d_UpdatePaymentStatusOptions = UpdatePaymentStatusOptions;
    const ecomV1OrderTransactions_universal_d_bulkUpdatePaymentStatuses: typeof bulkUpdatePaymentStatuses;
    type ecomV1OrderTransactions_universal_d_BulkUpdatePaymentStatusesOptions = BulkUpdatePaymentStatusesOptions;
    const ecomV1OrderTransactions_universal_d_triggerRefund: typeof triggerRefund;
    type ecomV1OrderTransactions_universal_d_TriggerRefundOptions = TriggerRefundOptions;
    const ecomV1OrderTransactions_universal_d_calculateRefund: typeof calculateRefund;
    type ecomV1OrderTransactions_universal_d_CalculateRefundOptions = CalculateRefundOptions;
    const ecomV1OrderTransactions_universal_d_getRefundabilityStatus: typeof getRefundabilityStatus;
    const ecomV1OrderTransactions_universal_d_listInvoicesForSingleOrder: typeof listInvoicesForSingleOrder;
    const ecomV1OrderTransactions_universal_d_listInvoicesForMultipleOrders: typeof listInvoicesForMultipleOrders;
    const ecomV1OrderTransactions_universal_d_generateInvoice: typeof generateInvoice;
    const ecomV1OrderTransactions_universal_d_bulkGenerateInvoices: typeof bulkGenerateInvoices;
    const ecomV1OrderTransactions_universal_d_addInvoiceToOrder: typeof addInvoiceToOrder;
    namespace ecomV1OrderTransactions_universal_d {
        export { __debug$1 as __debug, ecomV1OrderTransactions_universal_d_OrderTransactions as OrderTransactions, ecomV1OrderTransactions_universal_d_Payment as Payment, ecomV1OrderTransactions_universal_d_PaymentPaymentDetailsOneOf as PaymentPaymentDetailsOneOf, ecomV1OrderTransactions_universal_d_RegularPaymentDetails as RegularPaymentDetails, ecomV1OrderTransactions_universal_d_TransactionStatus as TransactionStatus, ecomV1OrderTransactions_universal_d_GiftCardPaymentDetails as GiftCardPaymentDetails, ecomV1OrderTransactions_universal_d_MembershipPaymentDetails as MembershipPaymentDetails, ecomV1OrderTransactions_universal_d_MembershipPaymentStatus as MembershipPaymentStatus, MembershipName$1 as MembershipName, ecomV1OrderTransactions_universal_d_Price as Price, ecomV1OrderTransactions_universal_d_Refund as Refund, ecomV1OrderTransactions_universal_d_RefundTransaction as RefundTransaction, ecomV1OrderTransactions_universal_d_RefundStatus as RefundStatus, ecomV1OrderTransactions_universal_d_RefundDetails as RefundDetails, ecomV1OrderTransactions_universal_d_RefundItem as RefundItem, ecomV1OrderTransactions_universal_d_SnapshotMessage as SnapshotMessage, ecomV1OrderTransactions_universal_d_IndexingMessage as IndexingMessage, ecomV1OrderTransactions_universal_d_DiffmatokyPayload as DiffmatokyPayload, ecomV1OrderTransactions_universal_d_ErrorInformation as ErrorInformation, ecomV1OrderTransactions_universal_d_OrderRefunded as OrderRefunded, ecomV1OrderTransactions_universal_d_Order as Order, ecomV1OrderTransactions_universal_d_BuyerInfo as BuyerInfo, ecomV1OrderTransactions_universal_d_IdentityType as IdentityType, WeightUnit$1 as WeightUnit, ecomV1OrderTransactions_universal_d_Totals as Totals, ecomV1OrderTransactions_universal_d_BillingInfo as BillingInfo, Address$1 as Address, ecomV1OrderTransactions_universal_d_AddressAddressLine1OptionsOneOf as AddressAddressLine1OptionsOneOf, ecomV1OrderTransactions_universal_d_FullName as FullName, ecomV1OrderTransactions_universal_d_Street as Street, ecomV1OrderTransactions_universal_d_VatId as VatId, ecomV1OrderTransactions_universal_d_VatType as VatType, ecomV1OrderTransactions_universal_d_ShippingInfo as ShippingInfo, ecomV1OrderTransactions_universal_d_ShippingInfoDetailsOneOf as ShippingInfoDetailsOneOf, ecomV1OrderTransactions_universal_d_ShipmentDetails as ShipmentDetails, ecomV1OrderTransactions_universal_d_TrackingInfo as TrackingInfo, ecomV1OrderTransactions_universal_d_ShippingPriceData as ShippingPriceData, PickupDetails$1 as PickupDetails, ecomV1OrderTransactions_universal_d_PickupAddress as PickupAddress, ecomV1OrderTransactions_universal_d_BuyerDetails as BuyerDetails, ecomV1OrderTransactions_universal_d_PaymentStatus as PaymentStatus, ecomV1OrderTransactions_universal_d_FulfillmentStatus as FulfillmentStatus, LineItem$1 as LineItem, ecomV1OrderTransactions_universal_d_LineItemType as LineItemType, ecomV1OrderTransactions_universal_d_OptionSelection as OptionSelection, ecomV1OrderTransactions_universal_d_CustomTextFieldSelection as CustomTextFieldSelection, ecomV1OrderTransactions_universal_d_MediaItem as MediaItem, ecomV1OrderTransactions_universal_d_MediaItemType as MediaItemType, ecomV1OrderTransactions_universal_d_LineItemPriceData as LineItemPriceData, ecomV1OrderTransactions_universal_d_DigitalFile as DigitalFile, ecomV1OrderTransactions_universal_d_Activity as Activity, ecomV1OrderTransactions_universal_d_ActivityType as ActivityType, ecomV1OrderTransactions_universal_d_V2InvoiceInfo as V2InvoiceInfo, ecomV1OrderTransactions_universal_d_InvoiceSource as InvoiceSource, ecomV1OrderTransactions_universal_d_Fulfillment as Fulfillment, ecomV1OrderTransactions_universal_d_FulfillmentLineItem as FulfillmentLineItem, ecomV1OrderTransactions_universal_d_FulfillmentTrackingInfo as FulfillmentTrackingInfo, ecomV1OrderTransactions_universal_d_Discount as Discount, ecomV1OrderTransactions_universal_d_AppliedCoupon as AppliedCoupon, ecomV1OrderTransactions_universal_d_CustomField as CustomField, ecomV1OrderTransactions_universal_d_ChannelInfo as ChannelInfo, ecomV1OrderTransactions_universal_d_ChannelType as ChannelType, ecomV1OrderTransactions_universal_d_EnteredBy as EnteredBy, ecomV1OrderTransactions_universal_d_EnteredByIdentityType as EnteredByIdentityType, ecomV1OrderTransactions_universal_d_SubscriptionInfo as SubscriptionInfo, SubscriptionSettings$1 as SubscriptionSettings, SubscriptionFrequency$1 as SubscriptionFrequency, ecomV1OrderTransactions_universal_d_SubscriptionOptionInfo as SubscriptionOptionInfo, ecomV1OrderTransactions_universal_d_V2Refund as V2Refund, GiftCard$1 as GiftCard, ecomV1OrderTransactions_universal_d_ListTransactionsForSingleOrderRequest as ListTransactionsForSingleOrderRequest, ecomV1OrderTransactions_universal_d_ListTransactionsForSingleOrderResponse as ListTransactionsForSingleOrderResponse, ecomV1OrderTransactions_universal_d_ListTransactionsForMultipleOrdersRequest as ListTransactionsForMultipleOrdersRequest, ecomV1OrderTransactions_universal_d_ListTransactionsForMultipleOrdersResponse as ListTransactionsForMultipleOrdersResponse, ecomV1OrderTransactions_universal_d_AddPaymentsRequest as AddPaymentsRequest, ecomV1OrderTransactions_universal_d_AddPaymentsResponse as AddPaymentsResponse, ecomV1OrderTransactions_universal_d_PaymentsUpdated as PaymentsUpdated, ecomV1OrderTransactions_universal_d_UpdatePaymentStatusRequest as UpdatePaymentStatusRequest, ecomV1OrderTransactions_universal_d_UpdatePaymentStatusResponse as UpdatePaymentStatusResponse, ecomV1OrderTransactions_universal_d_BulkUpdatePaymentStatusesRequest as BulkUpdatePaymentStatusesRequest, ecomV1OrderTransactions_universal_d_PaymentAndOrderId as PaymentAndOrderId, ecomV1OrderTransactions_universal_d_BulkUpdatePaymentStatusesResponse as BulkUpdatePaymentStatusesResponse, ecomV1OrderTransactions_universal_d_BulkPaymentResult as BulkPaymentResult, ecomV1OrderTransactions_universal_d_ItemMetadata as ItemMetadata, ApplicationError$1 as ApplicationError, ecomV1OrderTransactions_universal_d_BulkActionMetadata as BulkActionMetadata, ecomV1OrderTransactions_universal_d_TriggerRefundRequest as TriggerRefundRequest, ecomV1OrderTransactions_universal_d_PaymentRefund as PaymentRefund, ecomV1OrderTransactions_universal_d_RestockInfo as RestockInfo, ecomV1OrderTransactions_universal_d_RestockType as RestockType, ecomV1OrderTransactions_universal_d_RestockItem as RestockItem, ecomV1OrderTransactions_universal_d_TriggerRefundResponse as TriggerRefundResponse, ecomV1OrderTransactions_universal_d_RefundCreated as RefundCreated, ecomV1OrderTransactions_universal_d_CalculateRefundRequest as CalculateRefundRequest, ecomV1OrderTransactions_universal_d_CalculateRefundItemRequest as CalculateRefundItemRequest, ecomV1OrderTransactions_universal_d_CalculateRefundResponse as CalculateRefundResponse, ecomV1OrderTransactions_universal_d_CalculateRefundItemResponse as CalculateRefundItemResponse, ecomV1OrderTransactions_universal_d_GetRefundabilityStatusRequest as GetRefundabilityStatusRequest, ecomV1OrderTransactions_universal_d_GetRefundabilityStatusResponse as GetRefundabilityStatusResponse, ecomV1OrderTransactions_universal_d_Refundability as Refundability, ecomV1OrderTransactions_universal_d_RefundabilityAdditionalRefundabilityInfoOneOf as RefundabilityAdditionalRefundabilityInfoOneOf, ecomV1OrderTransactions_universal_d_RefundableStatus as RefundableStatus, ecomV1OrderTransactions_universal_d_NonRefundableReason as NonRefundableReason, ecomV1OrderTransactions_universal_d_ManuallyRefundableReason as ManuallyRefundableReason, ecomV1OrderTransactions_universal_d_ListInvoicesForSingleOrderRequest as ListInvoicesForSingleOrderRequest, ecomV1OrderTransactions_universal_d_ListInvoicesForSingleOrderResponse as ListInvoicesForSingleOrderResponse, ecomV1OrderTransactions_universal_d_InvoiceInfo as InvoiceInfo, ecomV1OrderTransactions_universal_d_ListInvoicesForMultipleOrdersRequest as ListInvoicesForMultipleOrdersRequest, ecomV1OrderTransactions_universal_d_ListInvoicesForMultipleOrdersResponse as ListInvoicesForMultipleOrdersResponse, ecomV1OrderTransactions_universal_d_InvoicesForOrder as InvoicesForOrder, ecomV1OrderTransactions_universal_d_GenerateInvoiceRequest as GenerateInvoiceRequest, ecomV1OrderTransactions_universal_d_GenerateInvoiceResponse as GenerateInvoiceResponse, ecomV1OrderTransactions_universal_d_BulkGenerateInvoicesRequest as BulkGenerateInvoicesRequest, ecomV1OrderTransactions_universal_d_BulkGenerateInvoicesResponse as BulkGenerateInvoicesResponse, ecomV1OrderTransactions_universal_d_BulkInvoiceResult as BulkInvoiceResult, ecomV1OrderTransactions_universal_d_InvoiceForOrder as InvoiceForOrder, ecomV1OrderTransactions_universal_d_AddInvoiceToOrderRequest as AddInvoiceToOrderRequest, ecomV1OrderTransactions_universal_d_AddInvoiceToOrderResponse as AddInvoiceToOrderResponse, ecomV1OrderTransactions_universal_d_listTransactionsForSingleOrder as listTransactionsForSingleOrder, ecomV1OrderTransactions_universal_d_listTransactionsForMultipleOrders as listTransactionsForMultipleOrders, ecomV1OrderTransactions_universal_d_addPayments as addPayments, ecomV1OrderTransactions_universal_d_updatePaymentStatus as updatePaymentStatus, ecomV1OrderTransactions_universal_d_UpdatePaymentStatusIdentifiers as UpdatePaymentStatusIdentifiers, ecomV1OrderTransactions_universal_d_UpdatePaymentStatusOptions as UpdatePaymentStatusOptions, ecomV1OrderTransactions_universal_d_bulkUpdatePaymentStatuses as bulkUpdatePaymentStatuses, ecomV1OrderTransactions_universal_d_BulkUpdatePaymentStatusesOptions as BulkUpdatePaymentStatusesOptions, ecomV1OrderTransactions_universal_d_triggerRefund as triggerRefund, ecomV1OrderTransactions_universal_d_TriggerRefundOptions as TriggerRefundOptions, ecomV1OrderTransactions_universal_d_calculateRefund as calculateRefund, ecomV1OrderTransactions_universal_d_CalculateRefundOptions as CalculateRefundOptions, ecomV1OrderTransactions_universal_d_getRefundabilityStatus as getRefundabilityStatus, ecomV1OrderTransactions_universal_d_listInvoicesForSingleOrder as listInvoicesForSingleOrder, ecomV1OrderTransactions_universal_d_listInvoicesForMultipleOrders as listInvoicesForMultipleOrders, ecomV1OrderTransactions_universal_d_generateInvoice as generateInvoice, ecomV1OrderTransactions_universal_d_bulkGenerateInvoices as bulkGenerateInvoices, ecomV1OrderTransactions_universal_d_addInvoiceToOrder as addInvoiceToOrder, };
    }
    const __debug: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface TotalsCalculationEntity {
    }
    interface CalculateTotalsRequest extends CalculateTotalsRequestCouponOneOf, CalculateTotalsRequestGiftCardOneOf {
        /**
         * Calculation ID. An identifier of the entity that you are calculating totals for, for example, cart ID or checkout ID.
         * This value will be used in order to optimise calculations by caching.
         * If not passed, calculation might be slower in some cases.
         */
        calculationId?: string | null;
        /** Line items for calculation. */
        lineItems?: LineItem[];
        /** Shipping address for tax and shipping calculation (if applicable). */
        shippingAddress?: Address;
        /** Billing address. Used for calculating tax if all the items in the cart are not shippable. */
        billingAddress?: Address;
        /** Details about selected shipping option. */
        selectedShippingOption?: SelectedShippingOption;
        /** Merchant discounts to apply to specific line items. If no `lineItemIds` are passed, the discount will be applied to the whole cart/checkout. */
        merchantDiscounts?: MerchantDiscountInput[];
        /** Buyer email. Used to enforce coupon [single-use per customer](https://support.wix.com/en/article/wix-stores-limiting-coupon-usage). If not passed, single coupon usage per customer will not be enforced. */
        buyerEmail?: string | null;
        /**
         * Whether to calculate tax in the calculation request. If not passed, tax is being calculated.
         * @internal
         */
        calculateTax?: boolean | null;
        /**
         * Member id to use for this calculation
         * When not provided, given that the caller is a member, its member id will be used
         * Providing this require elevated permissions - ECOM.ADMIN_CALCULATE_TOTALS
         */
        memberId?: string | null;
        /**
         * The selected memberships and which line items they apply to
         * When not provided, default selection will be returned
         * You can also set it to empty selection
         */
        selectedMemberships?: SelectedMemberships;
        /**
         * Whether to calculate shipping in the calculation request. If not passed, shipping is being calculated.
         * @internal
         */
        calculateShipping?: boolean | null;
        /** Buyer phone number. Used to get shipping rates. */
        buyerPhone?: string | null;
        /**
         * Whether to calculate discount rules in the calculation request. If not passed, discount rules are being calculated.
         * @internal
         */
        calculateDiscountRules?: boolean | null;
        /** Coupon ID. */
        couponId?: string | null;
        /** Coupon code. */
        couponCode?: string | null;
        /** Gift card ID. */
        giftCardId?: string | null;
        /** Gift card code. */
        giftCardCode?: string | null;
    }
    /** @oneof */
    interface CalculateTotalsRequestCouponOneOf {
        /** Coupon ID. */
        couponId?: string | null;
        /** Coupon code. */
        couponCode?: string | null;
    }
    /** @oneof */
    interface CalculateTotalsRequestGiftCardOneOf {
        /** Gift card ID. */
        giftCardId?: string | null;
        /** Gift card code. */
        giftCardCode?: string | null;
    }
    interface LineItem {
        /** Line item ID. */
        _id?: string;
        /** Quantity. */
        quantity?: number | null;
        /**
         * Optional references to the line item's origin catalog.
         * See [Catalog SPI](https://bo.wix.com/wix-docs/rest/ecommerce/catalog-spi/introduction) for more details.
         * This field is empty in the case of a custom line item.
         * currently we only use the catalog app id to set tax=0 for specific apps.
         */
        catalogReference?: CatalogReference;
        /** Product/booking/event name. */
        productName?: string | null;
        /** Price. */
        price?: string;
        /** Physical properties (if applicable). */
        physicalProperties?: PhysicalProperties;
        /**
         * Coupon scopes - which app and items a coupon applies to.
         * This field is internal to Wix, and should be used by Bookings, Stores and Events as used by the current [Coupons API](https://bo.wix.com/wix-docs/rest/stores/coupons/valid-scope-values).
         * @internal
         */
        couponScopes?: Scope[];
        /**
         * Tax group ID.
         * @internal
         */
        taxGroupId?: string | null;
        /**
         * Shipping group ID.
         * @internal
         */
        shippingGroupId?: string | null;
        /** Subscription settings. */
        subscriptionSettings?: SubscriptionSettings;
        /**
         * Type of selected payment option for current item. Defaults to `FULL_PAYMENT_ONLINE`.
         * + `FULL_PAYMENT_ONLINE` - The entire payment for this item happens as part of the checkout.
         * + `FULL_PAYMENT_OFFLINE` - The entire payment for this item happens after the checkout. For example, when using cash, check, or other offline payment methods.
         * + `MEMBERSHIP` - Payment for this item is done by charging a membership. When this option is used, `lineItem.price.amount` is 0.
         * + `DEPOSIT_ONLINE` -  Partial payment for the given item to be paid upfront during the checkout. Amount to be paid is defined by deposit_amount field.
         */
        paymentOption?: PaymentOptionType;
        /** Service properties. When relevant, this contains information such as date and number of participants. */
        serviceProperties?: ServiceProperties;
        /**
         * In cases where `catalogReference.catalogItemId` is NOT the actual catalog item ID, this field will return the true item's ID.
         * + For example, for Wix Bookings, `catalogReference.catalogItemId` is the booking ID. Therefore this value is set to the service ID.
         * + In most cases, this field has the same value as `catalogReference.catalogItemId`.
         * + Used in membership validation.
         */
        rootCatalogItemId?: string | null;
        /**
         * Optional - partial amount of item's price to be paid now for checkout cases with DEPOSIT_ONLINE payment option
         * If omitted - item's price will not be split and is expected to be paid in single installment
         */
        depositAmount?: string | null;
        /** full price of the item before all the discounts */
        fullPrice?: string | null;
    }
    /** Used for grouping line items and is sent on add to cart */
    interface CatalogReference {
        /** ID of the item within its Wix or 3rd-party catalog. For example, `productId` for Wix Stores or `eventId` for Wix Events. */
        catalogItemId?: string;
        /** ID of the catalog app. For example, the Wix Stores `appId`, or the 3rd-party `appId`. */
        appId?: string;
        /** Additional info in key:value form. For example, `{"options":{"Size": "M", "Color": "Red"}}` or `{"variantId": "<VARIANT_ID>"}`. */
        options?: Record<string, any> | null;
    }
    interface PhysicalProperties {
        /** Line item weight. Measurement unit (KG or LB) is taken from `order.weightUnit`. */
        weight?: number | null;
        /** Stock-keeping unit. Learn more about [SKUs](https://www.wix.com/encyclopedia/definition/stock-keeping-unit-sku). */
        sku?: string | null;
        /** Whether this line item is shippable. */
        shippable?: boolean;
    }
    interface Scope {
        /** Scope namespace (Wix Stores, Wix Bookings, Wix Events) */
        namespace?: string;
        /** Coupon scope's applied group (e.g., event or ticket in Wix Events) */
        group?: Group;
    }
    interface Group {
        /** Coupon scope's group (e.g., product or collection in Wix Stores). See [valid scope values](https://dev.wix.com/api/rest/coupons/coupons/valid-scope-values). */
        name?: string;
        /** Item ID (when the coupon scope is limited to just one item). */
        entityId?: string | null;
    }
    interface SubscriptionSettings {
        /** Frequency of recurring payment. Every day/week/month/year. */
        frequency?: SubscriptionFrequency;
        /**
         * *Optional** - Interval of recurring payment. Defaults to 1 if not provided.
         * @internal
         */
        interval?: number | null;
    }
    /** Frequency unit of recurring payment */
    enum SubscriptionFrequency {
        UNDEFINED = "UNDEFINED",
        DAY = "DAY",
        WEEK = "WEEK",
        MONTH = "MONTH",
        YEAR = "YEAR"
    }
    /** Type of selected payment option for catalog item */
    enum PaymentOptionType {
        /** The entire payment for given item will happen as part of the checkout. */
        FULL_PAYMENT_ONLINE = "FULL_PAYMENT_ONLINE",
        /** The entire payment for given item will happen after the checkout. */
        FULL_PAYMENT_OFFLINE = "FULL_PAYMENT_OFFLINE",
        /** Given item cannot be paid via monetary payment options, only via membership. When this option is used, price will always be 0. */
        MEMBERSHIP = "MEMBERSHIP",
        /**
         * Partial payment for the given item to be paid upfront during the checkout.
         * Amount to be paid is defined by `deposit_amount` field on per-item basis.
         */
        DEPOSIT_ONLINE = "DEPOSIT_ONLINE",
        /**
         * Payment for this item can only be done using a membership and must be manually redeemed in the dashboard by the site owner.
         * Note: when this option is used, price will be 0.
         */
        MEMBERSHIP_OFFLINE = "MEMBERSHIP_OFFLINE"
    }
    interface ServiceProperties {
        /** Date and time the service is supposed to be provided in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) format. For example, the time of the class. */
        scheduledDate?: Date;
        /** The number of people participating in this service. For example, the number of people attending the class or the number of people per hotel room. */
        numberOfParticipants?: number | null;
    }
    /** Physical address */
    interface Address {
        /** Two-letter country code in [ISO-3166 alpha-2](https://www.iso.org/obp/ui/#search/code/) format. */
        country?: string | null;
        /** Code for a subdivision (such as state, prefecture, or province) in [ISO 3166-2](https://www.iso.org/standard/72483.html) format. */
        subdivision?: string | null;
        /** City name. */
        city?: string | null;
        /** Postal or zip code. */
        postalCode?: string | null;
        /** Street address. */
        streetAddress?: StreetAddress;
        /** Main address line (usually street name and number). */
        addressLine1?: string | null;
        /** Free text providing more detailed address info. Usually contains apt, suite, floor. */
        addressLine2?: string | null;
    }
    interface StreetAddress {
        /** Street number. */
        number?: string;
        /** Street name. */
        name?: string;
        /**
         * Apartment number.
         * @internal
         */
        apt?: string;
        /**
         * Optional address line 1
         * @internal
         */
        formattedAddressLine?: string | null;
    }
    interface SelectedShippingOption {
        /** Carrier ID. */
        carrierId?: string | null;
        /** Selected shipping option code. For example, "usps_std_overnight". */
        code?: string;
    }
    interface MerchantDiscountInput {
        /** Discount amount. */
        amount?: string;
        /** IDs of line items the discount applies to. */
        lineItemIds?: string[];
    }
    interface SelectedMemberships {
        /** Selected memberships. */
        memberships?: SelectedMembership[];
    }
    interface SelectedMembership {
        /** Membership ID. */
        _id?: string;
        /** ID of the app providing this payment option. */
        appId?: string;
        /** IDs of the line items this membership applies to. */
        lineItemIds?: string[];
    }
    interface CalculateTotalsResponse {
        /** Calculate line items. */
        calculatedLineItems?: CalculatedLineItem[];
        /** Price summary. */
        priceSummary?: PriceSummary;
        /** Details of applied gift card. */
        giftCard?: GiftCard;
        /** Tax summary. */
        taxSummary?: TaxSummary;
        /** Shipping information. */
        shippingInfo?: ShippingInformation;
        /** Applied discounts. */
        appliedDiscounts?: AppliedDiscount[];
        /** Calculation errors. */
        calculationErrors?: CalculationErrors;
        /** Weight unit. */
        weightUnit?: WeightUnit;
        /** Currency. */
        currency?: string;
        /**
         * This is the display currency. Converted prices are presented in this currency.
         * @readonly
         */
        conversionCurrency?: string;
        /** Whether tax is included in price. */
        taxIncludedInPrice?: boolean;
        /**
         * Minimal amount to pay in order to place the order.
         * @readonly
         */
        payNow?: PriceSummary;
        /**
         * Remaining amount for the order to be fully paid.
         * @readonly
         */
        payLater?: PriceSummary;
        /** Information about valid and invalid memberships, and which ones are selected for usage. */
        membershipOptions?: MembershipOptions;
        /** Additional Fees */
        additionalFees?: AdditionalFee[];
        /**
         * The site currency.
         * @readonly
         */
        siteCurrency?: string;
        /**
         * The rate used when converting from the site currency to the checkout currency.
         * @readonly
         */
        checkoutConversionRate?: string | null;
        /** The amount of total after the gift card is applied. */
        payNowTotalAfterGiftCard?: MultiCurrencyPrice;
    }
    interface CalculatedLineItem {
        /** Line item ID. */
        lineItemId?: string;
        /** Price breakdown for this line item. */
        pricesBreakdown?: LineItemPricesData;
        /**
         * Type of selected payment option for current item. Supported values:
         * + `"FULL_PAYMENT_ONLINE"` - The entire payment for this item will happen as part of the checkout
         * + `"FULL_PAYMENT_OFFLINE"` - The entire payment for this item will happen after the checkout
         * + `"MEMBERSHIP"` - This item cannot be paid via monetary payment options, only via non monetary option such membership. When this option is used, price must be set to 0
         * + `"DEPOSIT_ONLINE"` -  Partial payment of the given item will happen as part of the checkout. Amount to be paid is defined by deposit_amount field.
         */
        paymentOption?: PaymentOptionType;
    }
    interface LineItemPricesData {
        /** Total price after discounts and after tax. */
        totalPriceAfterTax?: MultiCurrencyPrice;
        /** Deprecated - use `total_price_after_tax` minus `tax_details.total_tax` instead. */
        totalPriceBeforeTax?: MultiCurrencyPrice;
        /** Tax details. */
        taxDetails?: ItemTaxFullDetails;
        /** Total discount for all line items. */
        totalDiscount?: MultiCurrencyPrice;
        /** Catalog price after catalog discount and automatic discounts. */
        price?: MultiCurrencyPrice;
        /** Item price **before** line item discounts and **after** catalog-defined discount. Defaults to `price` when not provided. */
        priceBeforeDiscounts?: MultiCurrencyPrice;
        /** Total price **after** catalog-defined discount and line item discounts. */
        lineItemPrice?: MultiCurrencyPrice;
        /** Item price **before** line item discounts and **before** catalog-defined discount. Defaults to `price` when not provided. */
        fullPrice?: MultiCurrencyPrice;
    }
    interface MultiCurrencyPrice {
        /** Amount. */
        amount?: string;
        /**
         * Converted amount.
         * @readonly
         */
        convertedAmount?: string;
        /**
         * Amount formatted with currency symbol.
         * @readonly
         */
        formattedAmount?: string;
        /**
         * Converted amount formatted with currency symbol.
         * @readonly
         */
        formattedConvertedAmount?: string;
    }
    interface ItemTaxFullDetails {
        /** Amount for which tax is calculated. */
        taxableAmount?: MultiCurrencyPrice;
        /**
         * Tax group ID, if specified.
         * @internal
         */
        taxGroupId?: string | null;
        /** Tax rate %, as a decimal point between 0 and 1. */
        taxRate?: string;
        /** Calculated tax, based on `taxable_amount` and `tax_rate`. */
        totalTax?: MultiCurrencyPrice;
        /**
         * If breakdown exists, the sum of rates in the breakdown must equal `tax_rate`.
         * @readonly
         */
        rateBreakdown?: TaxRateBreakdown[];
    }
    interface TaxRateBreakdown {
        /** Type of tax against which the calculation was performed. */
        name?: string;
        /** Rate at which this tax detail was calculated. */
        rate?: string;
        /** Amount of tax for this tax detail. */
        tax?: MultiCurrencyPrice;
    }
    interface PriceSummary {
        /** Subtotal of all line items, before discounts and before tax. */
        subtotal?: MultiCurrencyPrice;
        /** Total shipping price, before discounts and before tax. */
        shipping?: MultiCurrencyPrice;
        /** Total tax. */
        tax?: MultiCurrencyPrice;
        /** Total calculated discount value. */
        discount?: MultiCurrencyPrice;
        /** Total price after discounts, gift cards, and tax. */
        total?: MultiCurrencyPrice;
        /** Total additional fees price before tax. */
        additionalFees?: MultiCurrencyPrice;
    }
    interface GiftCard {
        /** Gift Card ID. */
        _id?: string;
        /** Gift card obfuscated code. */
        obfuscatedCode?: string;
        /** Gift card value. */
        amount?: MultiCurrencyPrice;
        /** App ID of the gift card provider. */
        appId?: string;
    }
    interface TaxSummary {
        /**
         * Amount for which tax is calculated, added from line items.
         * @readonly
         */
        taxableAmount?: MultiCurrencyPrice;
        /**
         * Calculated tax, added from line items.
         * @readonly
         */
        totalTax?: MultiCurrencyPrice;
        /**
         * manual tax rate
         * @internal
         * @readonly
         */
        manualTaxRate?: string;
        /** Tax calculator that was active when the order was created. */
        calculationDetails?: TaxCalculationDetails;
    }
    interface TaxCalculationDetails extends TaxCalculationDetailsCalculationDetailsOneOf {
        /** Rate calculation type. */
        rateType?: RateType;
        /** Reason the manual calculation was used. */
        manualRateReason?: ManualCalculationReason;
        /** Details of the fallback rate calculation. */
        autoTaxFallbackDetails?: AutoTaxFallbackCalculationDetails;
    }
    /** @oneof */
    interface TaxCalculationDetailsCalculationDetailsOneOf {
        /** Reason the manual calculation was used. */
        manualRateReason?: ManualCalculationReason;
        /** Details of the fallback rate calculation. */
        autoTaxFallbackDetails?: AutoTaxFallbackCalculationDetails;
    }
    enum RateType {
        /** no tax being collected for this request due to location of purchase */
        NO_TAX_COLLECTED = "NO_TAX_COLLECTED",
        /** manual rate used for calculation */
        MANUAL_RATE = "MANUAL_RATE",
        /** autotax rate used for calculation */
        AUTO_RATE = "AUTO_RATE",
        /** fallback rate used for calculation */
        FALLBACK_RATE = "FALLBACK_RATE"
    }
    enum ManualCalculationReason {
        /** user set calculator in Business Manager to be Manual */
        GLOBAL_SETTING_TO_MANUAL = "GLOBAL_SETTING_TO_MANUAL",
        /** specific region is on manual even though Global setting is Auto-tax */
        REGION_SETTING_TO_MANUAL = "REGION_SETTING_TO_MANUAL"
    }
    interface AutoTaxFallbackCalculationDetails {
        /** reason for fallback */
        fallbackReason?: FallbackReason;
        /** invalid request (i.e. address), timeout, internal error, license error, and others will be encoded here */
        error?: ApplicationError;
    }
    enum FallbackReason {
        /** auto-tax failed to be calculated */
        AUTO_TAX_FAILED = "AUTO_TAX_FAILED",
        /** auto-tax was temporarily deactivated on a system-level */
        AUTO_TAX_DEACTIVATED = "AUTO_TAX_DEACTIVATED"
    }
    interface ApplicationError {
        /** Error code. */
        code?: string;
        /** Description of the error. */
        description?: string;
        /** Data related to the error. */
        data?: Record<string, any> | null;
    }
    interface ShippingInformation {
        /** Shipping region. */
        region?: ShippingRegion;
        /** Selected shipping option. */
        selectedCarrierServiceOption?: SelectedCarrierServiceOption;
        /** All shipping options. */
        carrierServiceOptions?: CarrierServiceOption[];
    }
    interface ShippingRegion {
        /**
         * Shipping region ID.
         * @readonly
         */
        _id?: string;
        /** Shipping region name. */
        name?: string;
    }
    interface SelectedCarrierServiceOption {
        /** Unique identifier of selected option. For example, "usps_std_overnight". */
        code?: string;
        /**
         * Title of the option, such as USPS Standard Overnight Delivery (in the requested locale).
         * For example, "Standard" or "First-Class Package International".
         * @readonly
         */
        title?: string;
        /**
         * Delivery logistics.
         * @readonly
         */
        logistics?: DeliveryLogistics;
        /**
         * Shipping costs.
         * @readonly
         */
        cost?: SelectedCarrierServiceOptionPrices;
        /**
         * Were we able to find the requested shipping option, or otherwise we fallback to the default one (the first)
         * @readonly
         */
        requestedShippingOption?: boolean;
        /** Other charges */
        otherCharges?: SelectedCarrierServiceOptionOtherCharge[];
        /** This carrier's unique ID */
        carrierId?: string | null;
    }
    interface DeliveryLogistics {
        /** Expected delivery time, in free text. For example, "3-5 business days". */
        deliveryTime?: string | null;
        /** Instructions for caller, e.g for pickup: "Please deliver during opening hours, and please don't park in disabled parking spot". */
        instructions?: string | null;
        /** Pickup details. */
        pickupDetails?: PickupDetails;
    }
    interface PickupDetails {
        /** Pickup address. */
        address?: Address;
        /** Whether the pickup address is that of a business - this may effect tax calculation. */
        businessLocation?: boolean;
        /** Pickup method */
        pickupMethod?: PickupMethod;
    }
    enum PickupMethod {
        UNKNOWN_METHOD = "UNKNOWN_METHOD",
        STORE_PICKUP = "STORE_PICKUP",
        PICKUP_POINT = "PICKUP_POINT"
    }
    interface SelectedCarrierServiceOptionPrices {
        /** Total shipping price, after discount and after tax. */
        totalPriceAfterTax?: MultiCurrencyPrice;
        /** Deprecated - use `total_price_after_tax` minus `tax_details.total_tax` instead. */
        totalPriceBeforeTax?: MultiCurrencyPrice;
        /** Tax details. */
        taxDetails?: ItemTaxFullDetails;
        /** Shipping discount before tax. */
        totalDiscount?: MultiCurrencyPrice;
        /** Shipping price before discount and before tax. */
        price?: MultiCurrencyPrice;
    }
    interface SelectedCarrierServiceOptionOtherCharge {
        /** Type of additional cost. */
        type?: ChargeType;
        /** Details of the charge, such as 'Full Coverage Insurance of up to 80% of value of shipment'. */
        details?: string | null;
        /** Price of added charge. */
        cost?: SelectedCarrierServiceOptionPrices;
    }
    enum ChargeType {
        HANDLING_FEE = "HANDLING_FEE",
        INSURANCE = "INSURANCE"
    }
    interface CarrierServiceOption {
        /** Carrier ID. */
        carrierId?: string;
        /** Shipping options offered by this carrier for this request. */
        shippingOptions?: ShippingOption[];
    }
    interface ShippingOption {
        /**
         * Unique code of provided shipping option like "usps_std_overnight".
         * For legacy calculators this would be the UUID of the option.
         */
        code?: string;
        /**
         * Title of the option, such as USPS Standard Overnight Delivery (in the requested locale).
         * For example, "Standard" or "First-Class Package International".
         */
        title?: string;
        /** Delivery logistics. */
        logistics?: DeliveryLogistics;
        /** Sipping price information. */
        cost?: ShippingPrice;
    }
    interface ShippingPrice {
        /** Shipping price. */
        price?: MultiCurrencyPrice;
        /** Other costs such as insurance, handling & packaging for fragile items, etc. */
        otherCharges?: OtherCharge[];
    }
    interface OtherCharge {
        /** Type of additional cost. */
        type?: ChargeType;
        /** Price of added cost. */
        price?: MultiCurrencyPrice;
    }
    interface AppliedDiscount extends AppliedDiscountDiscountSourceOneOf {
        /** Discount type. */
        discountType?: DiscountType;
        /** IDs of line items the discount applies to. */
        lineItemIds?: string[];
        /** Coupon details. */
        coupon?: Coupon;
        /** Merchant discount. */
        merchantDiscount?: MerchantDiscount;
        /** Discount rule */
        discountRule?: DiscountRule;
    }
    /** @oneof */
    interface AppliedDiscountDiscountSourceOneOf {
        /** Coupon details. */
        coupon?: Coupon;
        /** Merchant discount. */
        merchantDiscount?: MerchantDiscount;
        /** Discount rule */
        discountRule?: DiscountRule;
    }
    enum DiscountType {
        GLOBAL = "GLOBAL",
        SPECIFIC_ITEMS = "SPECIFIC_ITEMS",
        SHIPPING = "SHIPPING"
    }
    /** Coupon */
    interface Coupon {
        /** Coupon ID. */
        _id?: string;
        /** Coupon code. */
        code?: string;
        /** Coupon value. */
        amount?: MultiCurrencyPrice;
        /** Coupon name. */
        name?: string;
        /**
         * Coupon type: We want it to be an enum and not a string but currently we have no time to do it so we leave it as is to be aligned with cart summary.
         * @internal
         */
        couponType?: string;
    }
    interface MerchantDiscount {
        /** Discount value. */
        amount?: MultiCurrencyPrice;
    }
    interface DiscountRule {
        /** Discount rule ID */
        _id?: string;
        /** Discount rule name */
        name?: DiscountRuleName;
        /** Discount value. */
        amount?: MultiCurrencyPrice;
    }
    interface DiscountRuleName {
        /** Original discount rule name (in site's default language). */
        original?: string;
        /** Translated discount rule name according to buyer language. Defaults to `original` when not provided. */
        translated?: string | null;
    }
    interface CalculationErrors extends CalculationErrorsShippingCalculationErrorOneOf {
        /** Tax calculation error. */
        taxCalculationError?: Details;
        /** Coupon calculation error. */
        couponCalculationError?: Details;
        /** Gift card calculation error. */
        giftCardCalculationError?: Details;
        /** Order validation errors. */
        orderValidationErrors?: ApplicationError[];
        /**
         * Membership payment methods calculation errors
         * For example, will indicate that a line item that must be paid with membership payment doesn't have one or selected memberships are invalid
         */
        membershipError?: Details;
        /** Discount Rule calculation error. */
        discountsCalculationError?: Details;
        /** General shipping calculation error. */
        generalShippingCalculationError?: Details;
        /** Carrier errors. */
        carrierErrors?: CarrierErrors;
    }
    /** @oneof */
    interface CalculationErrorsShippingCalculationErrorOneOf {
        /** General shipping calculation error. */
        generalShippingCalculationError?: Details;
        /** Carrier errors. */
        carrierErrors?: CarrierErrors;
    }
    interface Details extends DetailsKindOneOf {
        /** deprecated in API's - to enable migration from rendering arbitrary tracing to rest response */
        tracing?: Record<string, string>;
        applicationError?: ApplicationError;
        validationError?: ValidationError;
    }
    /** @oneof */
    interface DetailsKindOneOf {
        applicationError?: ApplicationError;
        validationError?: ValidationError;
    }
    /**
     * example result:
     * {
     * "fieldViolations": [
     * {
     * "field": "fieldA",
     * "description": "invalid music note. supported notes: [do,re,mi,fa,sol,la,ti]",
     * "violatedRule": "OTHER",
     * "ruleName": "INVALID_NOTE",
     * "data": {
     * "value": "FI"
     * }
     * },
     * {
     * "field": "fieldB",
     * "description": "field value out of range. supported range: [0-20]",
     * "violatedRule": "MAX",
     * "data": {
     * "threshold": 20
     * }
     * },
     * {
     * "field": "fieldC",
     * "description": "invalid phone number. provide a valid phone number of size: [7-12], supported characters: [0-9, +, -, (, )]",
     * "violatedRule": "FORMAT",
     * "data": {
     * "type": "PHONE"
     * }
     * }
     * ]
     * }
     */
    interface ValidationError {
        fieldViolations?: FieldViolation[];
    }
    enum RuleType {
        VALIDATION = "VALIDATION",
        OTHER = "OTHER",
        MAX = "MAX",
        MIN = "MIN",
        MAX_LENGTH = "MAX_LENGTH",
        MIN_LENGTH = "MIN_LENGTH",
        MAX_SIZE = "MAX_SIZE",
        MIN_SIZE = "MIN_SIZE",
        FORMAT = "FORMAT",
        DECIMAL_LTE = "DECIMAL_LTE",
        DECIMAL_GTE = "DECIMAL_GTE",
        DECIMAL_LT = "DECIMAL_LT",
        DECIMAL_GT = "DECIMAL_GT",
        DECIMAL_MAX_SCALE = "DECIMAL_MAX_SCALE",
        INVALID_ENUM_VALUE = "INVALID_ENUM_VALUE",
        REQUIRED_FIELD = "REQUIRED_FIELD",
        FIELD_NOT_ALLOWED = "FIELD_NOT_ALLOWED",
        ONE_OF_ALIGNMENT = "ONE_OF_ALIGNMENT"
    }
    interface FieldViolation {
        field?: string;
        description?: string;
        violatedRule?: RuleType;
        /** applicable when violated_rule=OTHER */
        ruleName?: string | null;
        data?: Record<string, any> | null;
    }
    interface CarrierErrors {
        /** Carrier errors. */
        errors?: CarrierError[];
    }
    interface CarrierError {
        /** Carrier ID. */
        carrierId?: string;
        /** Error details. */
        error?: Details;
    }
    enum WeightUnit {
        /** Weight unit can't be classified, due to an error */
        UNSPECIFIED_WEIGHT_UNIT = "UNSPECIFIED_WEIGHT_UNIT",
        /** Kilograms */
        KG = "KG",
        /** Pounds */
        LB = "LB"
    }
    interface MembershipOptions {
        /** List of payment options that can be used. */
        eligibleMemberships?: Membership[];
        /** List of payment options that are owned by the member, but cannot be used due to reason provided. */
        invalidMemberships?: InvalidMembership[];
        /** The selected membership payment options and which line items they apply to. */
        selectedMemberships?: SelectedMembership[];
    }
    interface Membership {
        /** Membership ID. */
        _id?: string;
        /** ID of the application providing this payment option. */
        appId?: string;
        /** The name of this membership. */
        name?: MembershipName;
        /** Line item IDs which are "paid" for by this membership. */
        lineItemIds?: string[];
        /** Optional - For a membership that has limited credits, information about credit usage. */
        credits?: MembershipPaymentCredits;
        /** Optional - TMembership expiry date. */
        expirationDate?: Date;
        /** Additional data about this membership. */
        additionalData?: Record<string, any> | null;
    }
    interface MembershipName {
        /** The name of this membership */
        original?: string;
        /** Optional - Translated name of this membership. Defaults to `original` when not provided. */
        translated?: string | null;
    }
    interface MembershipPaymentCredits {
        /** How much credit this membership has in total */
        total?: number;
        /** How much credit remained for this membership */
        remaining?: number;
    }
    interface InvalidMembership {
        /** Membership details. */
        membership?: Membership;
        /** Reason why this membership is invalid and cannot be used. */
        reason?: string;
    }
    interface AdditionalFee {
        /** Additional fee's unique code (or ID) for future processing */
        code?: string | null;
        /** Translated additional fee's name */
        name?: string;
        /** Additional fee's price */
        price?: MultiCurrencyPrice;
        /** Tax details */
        taxDetails?: ItemTaxFullDetails;
        /** Provider's app id */
        providerAppId?: string | null;
        /** Additional fee's price before tax */
        priceBeforeTax?: MultiCurrencyPrice;
    }
    /**
     * Returns a totals calculation for specified line items.
     * @internal
     * @documentationMaturity preview
     * @requiredField options.lineItems._id
     * @requiredField options.lineItems.price
     * @requiredField options.lineItems.quantity
     * @requiredField options.merchantDiscounts.amount
     * @requiredField options.selectedMemberships.memberships._id
     * @requiredField options.selectedMemberships.memberships.appId
     * @requiredField options.selectedMemberships.memberships.lineItemIds
     * @requiredField options.selectedShippingOption.code
     */
    function calculateTotals(options?: CalculateTotalsOptions): Promise<CalculateTotalsResponse>;
    interface CalculateTotalsOptions {
        /**
         * Calculation ID. An identifier of the entity that you are calculating totals for, for example, cart ID or checkout ID.
         * This value will be used in order to optimise calculations by caching.
         * If not passed, calculation might be slower in some cases.
         */
        calculationId?: string | null;
        /** Line items for calculation. */
        lineItems?: LineItem[];
        /** Shipping address for tax and shipping calculation (if applicable). */
        shippingAddress?: Address;
        /** Billing address. Used for calculating tax if all the items in the cart are not shippable. */
        billingAddress?: Address;
        /** Details about selected shipping option. */
        selectedShippingOption?: SelectedShippingOption;
        /** Coupon ID. */
        couponId?: string | null;
        /** Coupon code. */
        couponCode?: string | null;
        /** Gift card ID. */
        giftCardId?: string | null;
        /** Gift card code. */
        giftCardCode?: string | null;
        /** Merchant discounts to apply to specific line items. If no `lineItemIds` are passed, the discount will be applied to the whole cart/checkout. */
        merchantDiscounts?: MerchantDiscountInput[];
        /** Buyer email. Used to enforce coupon [single-use per customer](https://support.wix.com/en/article/wix-stores-limiting-coupon-usage). If not passed, single coupon usage per customer will not be enforced. */
        buyerEmail?: string | null;
        /**
         * Whether to calculate tax in the calculation request. If not passed, tax is being calculated.
         * @internal
         */
        calculateTax?: boolean | null;
        /**
         * Member id to use for this calculation
         * When not provided, given that the caller is a member, its member id will be used
         * Providing this require elevated permissions - ECOM.ADMIN_CALCULATE_TOTALS
         */
        memberId?: string | null;
        /**
         * The selected memberships and which line items they apply to
         * When not provided, default selection will be returned
         * You can also set it to empty selection
         */
        selectedMemberships?: SelectedMemberships;
        /**
         * Whether to calculate shipping in the calculation request. If not passed, shipping is being calculated.
         * @internal
         */
        calculateShipping?: boolean | null;
        /** Buyer phone number. Used to get shipping rates. */
        buyerPhone?: string | null;
        /**
         * Whether to calculate discount rules in the calculation request. If not passed, discount rules are being calculated.
         * @internal
         */
        calculateDiscountRules?: boolean | null;
    }
    const ecomV1TotalsCalculation_universal_d___debug: typeof __debug;
    type ecomV1TotalsCalculation_universal_d_TotalsCalculationEntity = TotalsCalculationEntity;
    type ecomV1TotalsCalculation_universal_d_CalculateTotalsRequest = CalculateTotalsRequest;
    type ecomV1TotalsCalculation_universal_d_CalculateTotalsRequestCouponOneOf = CalculateTotalsRequestCouponOneOf;
    type ecomV1TotalsCalculation_universal_d_CalculateTotalsRequestGiftCardOneOf = CalculateTotalsRequestGiftCardOneOf;
    type ecomV1TotalsCalculation_universal_d_LineItem = LineItem;
    type ecomV1TotalsCalculation_universal_d_CatalogReference = CatalogReference;
    type ecomV1TotalsCalculation_universal_d_PhysicalProperties = PhysicalProperties;
    type ecomV1TotalsCalculation_universal_d_Scope = Scope;
    type ecomV1TotalsCalculation_universal_d_Group = Group;
    type ecomV1TotalsCalculation_universal_d_SubscriptionSettings = SubscriptionSettings;
    type ecomV1TotalsCalculation_universal_d_SubscriptionFrequency = SubscriptionFrequency;
    const ecomV1TotalsCalculation_universal_d_SubscriptionFrequency: typeof SubscriptionFrequency;
    type ecomV1TotalsCalculation_universal_d_PaymentOptionType = PaymentOptionType;
    const ecomV1TotalsCalculation_universal_d_PaymentOptionType: typeof PaymentOptionType;
    type ecomV1TotalsCalculation_universal_d_ServiceProperties = ServiceProperties;
    type ecomV1TotalsCalculation_universal_d_Address = Address;
    type ecomV1TotalsCalculation_universal_d_StreetAddress = StreetAddress;
    type ecomV1TotalsCalculation_universal_d_SelectedShippingOption = SelectedShippingOption;
    type ecomV1TotalsCalculation_universal_d_MerchantDiscountInput = MerchantDiscountInput;
    type ecomV1TotalsCalculation_universal_d_SelectedMemberships = SelectedMemberships;
    type ecomV1TotalsCalculation_universal_d_SelectedMembership = SelectedMembership;
    type ecomV1TotalsCalculation_universal_d_CalculateTotalsResponse = CalculateTotalsResponse;
    type ecomV1TotalsCalculation_universal_d_CalculatedLineItem = CalculatedLineItem;
    type ecomV1TotalsCalculation_universal_d_LineItemPricesData = LineItemPricesData;
    type ecomV1TotalsCalculation_universal_d_MultiCurrencyPrice = MultiCurrencyPrice;
    type ecomV1TotalsCalculation_universal_d_ItemTaxFullDetails = ItemTaxFullDetails;
    type ecomV1TotalsCalculation_universal_d_TaxRateBreakdown = TaxRateBreakdown;
    type ecomV1TotalsCalculation_universal_d_PriceSummary = PriceSummary;
    type ecomV1TotalsCalculation_universal_d_GiftCard = GiftCard;
    type ecomV1TotalsCalculation_universal_d_TaxSummary = TaxSummary;
    type ecomV1TotalsCalculation_universal_d_TaxCalculationDetails = TaxCalculationDetails;
    type ecomV1TotalsCalculation_universal_d_TaxCalculationDetailsCalculationDetailsOneOf = TaxCalculationDetailsCalculationDetailsOneOf;
    type ecomV1TotalsCalculation_universal_d_RateType = RateType;
    const ecomV1TotalsCalculation_universal_d_RateType: typeof RateType;
    type ecomV1TotalsCalculation_universal_d_ManualCalculationReason = ManualCalculationReason;
    const ecomV1TotalsCalculation_universal_d_ManualCalculationReason: typeof ManualCalculationReason;
    type ecomV1TotalsCalculation_universal_d_AutoTaxFallbackCalculationDetails = AutoTaxFallbackCalculationDetails;
    type ecomV1TotalsCalculation_universal_d_FallbackReason = FallbackReason;
    const ecomV1TotalsCalculation_universal_d_FallbackReason: typeof FallbackReason;
    type ecomV1TotalsCalculation_universal_d_ApplicationError = ApplicationError;
    type ecomV1TotalsCalculation_universal_d_ShippingInformation = ShippingInformation;
    type ecomV1TotalsCalculation_universal_d_ShippingRegion = ShippingRegion;
    type ecomV1TotalsCalculation_universal_d_SelectedCarrierServiceOption = SelectedCarrierServiceOption;
    type ecomV1TotalsCalculation_universal_d_DeliveryLogistics = DeliveryLogistics;
    type ecomV1TotalsCalculation_universal_d_PickupDetails = PickupDetails;
    type ecomV1TotalsCalculation_universal_d_PickupMethod = PickupMethod;
    const ecomV1TotalsCalculation_universal_d_PickupMethod: typeof PickupMethod;
    type ecomV1TotalsCalculation_universal_d_SelectedCarrierServiceOptionPrices = SelectedCarrierServiceOptionPrices;
    type ecomV1TotalsCalculation_universal_d_SelectedCarrierServiceOptionOtherCharge = SelectedCarrierServiceOptionOtherCharge;
    type ecomV1TotalsCalculation_universal_d_ChargeType = ChargeType;
    const ecomV1TotalsCalculation_universal_d_ChargeType: typeof ChargeType;
    type ecomV1TotalsCalculation_universal_d_CarrierServiceOption = CarrierServiceOption;
    type ecomV1TotalsCalculation_universal_d_ShippingOption = ShippingOption;
    type ecomV1TotalsCalculation_universal_d_ShippingPrice = ShippingPrice;
    type ecomV1TotalsCalculation_universal_d_OtherCharge = OtherCharge;
    type ecomV1TotalsCalculation_universal_d_AppliedDiscount = AppliedDiscount;
    type ecomV1TotalsCalculation_universal_d_AppliedDiscountDiscountSourceOneOf = AppliedDiscountDiscountSourceOneOf;
    type ecomV1TotalsCalculation_universal_d_DiscountType = DiscountType;
    const ecomV1TotalsCalculation_universal_d_DiscountType: typeof DiscountType;
    type ecomV1TotalsCalculation_universal_d_Coupon = Coupon;
    type ecomV1TotalsCalculation_universal_d_MerchantDiscount = MerchantDiscount;
    type ecomV1TotalsCalculation_universal_d_DiscountRule = DiscountRule;
    type ecomV1TotalsCalculation_universal_d_DiscountRuleName = DiscountRuleName;
    type ecomV1TotalsCalculation_universal_d_CalculationErrors = CalculationErrors;
    type ecomV1TotalsCalculation_universal_d_CalculationErrorsShippingCalculationErrorOneOf = CalculationErrorsShippingCalculationErrorOneOf;
    type ecomV1TotalsCalculation_universal_d_Details = Details;
    type ecomV1TotalsCalculation_universal_d_DetailsKindOneOf = DetailsKindOneOf;
    type ecomV1TotalsCalculation_universal_d_ValidationError = ValidationError;
    type ecomV1TotalsCalculation_universal_d_RuleType = RuleType;
    const ecomV1TotalsCalculation_universal_d_RuleType: typeof RuleType;
    type ecomV1TotalsCalculation_universal_d_FieldViolation = FieldViolation;
    type ecomV1TotalsCalculation_universal_d_CarrierErrors = CarrierErrors;
    type ecomV1TotalsCalculation_universal_d_CarrierError = CarrierError;
    type ecomV1TotalsCalculation_universal_d_WeightUnit = WeightUnit;
    const ecomV1TotalsCalculation_universal_d_WeightUnit: typeof WeightUnit;
    type ecomV1TotalsCalculation_universal_d_MembershipOptions = MembershipOptions;
    type ecomV1TotalsCalculation_universal_d_Membership = Membership;
    type ecomV1TotalsCalculation_universal_d_MembershipName = MembershipName;
    type ecomV1TotalsCalculation_universal_d_MembershipPaymentCredits = MembershipPaymentCredits;
    type ecomV1TotalsCalculation_universal_d_InvalidMembership = InvalidMembership;
    type ecomV1TotalsCalculation_universal_d_AdditionalFee = AdditionalFee;
    const ecomV1TotalsCalculation_universal_d_calculateTotals: typeof calculateTotals;
    type ecomV1TotalsCalculation_universal_d_CalculateTotalsOptions = CalculateTotalsOptions;
    namespace ecomV1TotalsCalculation_universal_d {
        export { ecomV1TotalsCalculation_universal_d___debug as __debug, ecomV1TotalsCalculation_universal_d_TotalsCalculationEntity as TotalsCalculationEntity, ecomV1TotalsCalculation_universal_d_CalculateTotalsRequest as CalculateTotalsRequest, ecomV1TotalsCalculation_universal_d_CalculateTotalsRequestCouponOneOf as CalculateTotalsRequestCouponOneOf, ecomV1TotalsCalculation_universal_d_CalculateTotalsRequestGiftCardOneOf as CalculateTotalsRequestGiftCardOneOf, ecomV1TotalsCalculation_universal_d_LineItem as LineItem, ecomV1TotalsCalculation_universal_d_CatalogReference as CatalogReference, ecomV1TotalsCalculation_universal_d_PhysicalProperties as PhysicalProperties, ecomV1TotalsCalculation_universal_d_Scope as Scope, ecomV1TotalsCalculation_universal_d_Group as Group, ecomV1TotalsCalculation_universal_d_SubscriptionSettings as SubscriptionSettings, ecomV1TotalsCalculation_universal_d_SubscriptionFrequency as SubscriptionFrequency, ecomV1TotalsCalculation_universal_d_PaymentOptionType as PaymentOptionType, ecomV1TotalsCalculation_universal_d_ServiceProperties as ServiceProperties, ecomV1TotalsCalculation_universal_d_Address as Address, ecomV1TotalsCalculation_universal_d_StreetAddress as StreetAddress, ecomV1TotalsCalculation_universal_d_SelectedShippingOption as SelectedShippingOption, ecomV1TotalsCalculation_universal_d_MerchantDiscountInput as MerchantDiscountInput, ecomV1TotalsCalculation_universal_d_SelectedMemberships as SelectedMemberships, ecomV1TotalsCalculation_universal_d_SelectedMembership as SelectedMembership, ecomV1TotalsCalculation_universal_d_CalculateTotalsResponse as CalculateTotalsResponse, ecomV1TotalsCalculation_universal_d_CalculatedLineItem as CalculatedLineItem, ecomV1TotalsCalculation_universal_d_LineItemPricesData as LineItemPricesData, ecomV1TotalsCalculation_universal_d_MultiCurrencyPrice as MultiCurrencyPrice, ecomV1TotalsCalculation_universal_d_ItemTaxFullDetails as ItemTaxFullDetails, ecomV1TotalsCalculation_universal_d_TaxRateBreakdown as TaxRateBreakdown, ecomV1TotalsCalculation_universal_d_PriceSummary as PriceSummary, ecomV1TotalsCalculation_universal_d_GiftCard as GiftCard, ecomV1TotalsCalculation_universal_d_TaxSummary as TaxSummary, ecomV1TotalsCalculation_universal_d_TaxCalculationDetails as TaxCalculationDetails, ecomV1TotalsCalculation_universal_d_TaxCalculationDetailsCalculationDetailsOneOf as TaxCalculationDetailsCalculationDetailsOneOf, ecomV1TotalsCalculation_universal_d_RateType as RateType, ecomV1TotalsCalculation_universal_d_ManualCalculationReason as ManualCalculationReason, ecomV1TotalsCalculation_universal_d_AutoTaxFallbackCalculationDetails as AutoTaxFallbackCalculationDetails, ecomV1TotalsCalculation_universal_d_FallbackReason as FallbackReason, ecomV1TotalsCalculation_universal_d_ApplicationError as ApplicationError, ecomV1TotalsCalculation_universal_d_ShippingInformation as ShippingInformation, ecomV1TotalsCalculation_universal_d_ShippingRegion as ShippingRegion, ecomV1TotalsCalculation_universal_d_SelectedCarrierServiceOption as SelectedCarrierServiceOption, ecomV1TotalsCalculation_universal_d_DeliveryLogistics as DeliveryLogistics, ecomV1TotalsCalculation_universal_d_PickupDetails as PickupDetails, ecomV1TotalsCalculation_universal_d_PickupMethod as PickupMethod, ecomV1TotalsCalculation_universal_d_SelectedCarrierServiceOptionPrices as SelectedCarrierServiceOptionPrices, ecomV1TotalsCalculation_universal_d_SelectedCarrierServiceOptionOtherCharge as SelectedCarrierServiceOptionOtherCharge, ecomV1TotalsCalculation_universal_d_ChargeType as ChargeType, ecomV1TotalsCalculation_universal_d_CarrierServiceOption as CarrierServiceOption, ecomV1TotalsCalculation_universal_d_ShippingOption as ShippingOption, ecomV1TotalsCalculation_universal_d_ShippingPrice as ShippingPrice, ecomV1TotalsCalculation_universal_d_OtherCharge as OtherCharge, ecomV1TotalsCalculation_universal_d_AppliedDiscount as AppliedDiscount, ecomV1TotalsCalculation_universal_d_AppliedDiscountDiscountSourceOneOf as AppliedDiscountDiscountSourceOneOf, ecomV1TotalsCalculation_universal_d_DiscountType as DiscountType, ecomV1TotalsCalculation_universal_d_Coupon as Coupon, ecomV1TotalsCalculation_universal_d_MerchantDiscount as MerchantDiscount, ecomV1TotalsCalculation_universal_d_DiscountRule as DiscountRule, ecomV1TotalsCalculation_universal_d_DiscountRuleName as DiscountRuleName, ecomV1TotalsCalculation_universal_d_CalculationErrors as CalculationErrors, ecomV1TotalsCalculation_universal_d_CalculationErrorsShippingCalculationErrorOneOf as CalculationErrorsShippingCalculationErrorOneOf, ecomV1TotalsCalculation_universal_d_Details as Details, ecomV1TotalsCalculation_universal_d_DetailsKindOneOf as DetailsKindOneOf, ecomV1TotalsCalculation_universal_d_ValidationError as ValidationError, ecomV1TotalsCalculation_universal_d_RuleType as RuleType, ecomV1TotalsCalculation_universal_d_FieldViolation as FieldViolation, ecomV1TotalsCalculation_universal_d_CarrierErrors as CarrierErrors, ecomV1TotalsCalculation_universal_d_CarrierError as CarrierError, ecomV1TotalsCalculation_universal_d_WeightUnit as WeightUnit, ecomV1TotalsCalculation_universal_d_MembershipOptions as MembershipOptions, ecomV1TotalsCalculation_universal_d_Membership as Membership, ecomV1TotalsCalculation_universal_d_MembershipName as MembershipName, ecomV1TotalsCalculation_universal_d_MembershipPaymentCredits as MembershipPaymentCredits, ecomV1TotalsCalculation_universal_d_InvalidMembership as InvalidMembership, ecomV1TotalsCalculation_universal_d_AdditionalFee as AdditionalFee, ecomV1TotalsCalculation_universal_d_calculateTotals as calculateTotals, ecomV1TotalsCalculation_universal_d_CalculateTotalsOptions as CalculateTotalsOptions, };
    }
    export { storesV1AbandonedCart_universal_d as abandonedCarts, ecomV1CartCart_universal_d as cart, ecomV1CheckoutCheckout_universal_d as checkout, ecomV1CartCurrentCart_universal_d as currentCart, ecomDiscountsV1DiscountRule_universal_d as discounts, ecomV1Fulfillments_universal_d as fulfillments, ecomV1Order_universal_d as orders, ecomV1OrderTransactions_universal_d as payments, ecomRecommendationsV1Recommendation_universal_d as recommendations, ecomV1TotalsCalculation_universal_d as totalsCalculator };
}

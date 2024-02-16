declare module "wix-restaurants.v2" {
  const __debug$5: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** Item is the main entity of RestaurantsMenusItem that represents the item (dish) of the restaurant menu. */
  interface Item extends ItemPricingOneOf {
      price?: string;
      priceVariants?: PriceVariants;
      /**
       * Item ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Item was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Item was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Item name. */
      name?: string;
      /** Item description. */
      description?: string | null;
      /** Item primary image. */
      image?: string;
      /** Item additional images. */
      additionalImages?: string[];
      /** Item labels. */
      labels?: Label[];
      /** Is visible. */
      visible?: boolean | null;
      /** Online order settings. */
      orderSettings?: OrderSettings;
      /** Modifier Groups. */
      modifierGroups?: ModifierGroup[];
      /** Extended fields. */
      extendedFields?: ExtendedFields$1;
  }
  /** @oneof */
  interface ItemPricingOneOf {
      price?: string;
      priceVariants?: PriceVariants;
  }
  interface PriceVariants {
      /** A list of price variants. */
      priceVariants?: PriceVariant[];
      /**
       * A list of variants.
       * @readonly
       */
      variants?: PriceVariant[];
  }
  interface PriceVariant {
      /** Price variant modifier ID. */
      modifierId?: string;
      /**
       * Price variant ID.
       * @readonly
       */
      variantId?: string | null;
      /** Price of a variant. */
      price?: string;
  }
  interface Label {
      /** Label ID. */
      _id?: string;
  }
  interface OrderSettings {
      /** Whether the item is out of stock. */
      outOfStock?: boolean | null;
      /**
       * Whether the item is in stock. Default to `true`
       * @readonly
       */
      inStock?: boolean | null;
      /** Whether a customer can add a special request when ordering this item. Defaults to `true`. */
      acceptSpecialRequests?: boolean | null;
      /**
       * E-com defined tax group for the product.
       * @internal
       */
      taxGroupId?: string | null;
  }
  interface ModifierGroup {
      /** Modifier Group ID. */
      _id?: string | null;
  }
  interface ExtendedFields$1 {
      /**
       * Extended field data. Each key corresponds to the namespace of the app that created the extended fields.
       * The value of each key is structured according to the schema defined when the extended fields were configured.
       *
       * You can only access fields for which you have the appropriate permissions.
       *
       * Learn more about [extended fields](https://dev.wix.com/docs/rest/articles/getting-started/extended-fields).
       */
      namespaces?: Record<string, Record<string, any>>;
  }
  interface InvalidateCache$4 extends InvalidateCacheGetByOneOf$4 {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App$4;
      /** Invalidate by page id */
      page?: Page$4;
      /** Invalidate by URI path */
      uri?: URI$4;
      /** tell us why you're invalidating the cache. You don't need to add your app name */
      reason?: string | null;
      /** Is local DS */
      localDc?: boolean;
  }
  /** @oneof */
  interface InvalidateCacheGetByOneOf$4 {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App$4;
      /** Invalidate by page id */
      page?: Page$4;
      /** Invalidate by URI path */
      uri?: URI$4;
  }
  interface App$4 {
      /** The AppDefId */
      appDefId?: string;
      /** The instance Id */
      instanceId?: string;
  }
  interface Page$4 {
      /** the msid the page is on */
      metaSiteId?: string;
      /** Invalidate by Page ID */
      pageId?: string;
  }
  interface URI$4 {
      /** the msid the URI is on */
      metaSiteId?: string;
      /** URI path to invalidate (e.g. page/my/path) - without leading/trailing slashes */
      uriPath?: string;
  }
  interface CreateItemRequest {
      /** Item to be created. */
      item: Item;
      /** The source of this request. */
      source?: string | null;
  }
  interface CreateItemResponse {
      /** The created item. */
      item?: Item;
  }
  interface BulkCreateItemsRequest {
      /** Items to be created. */
      items: Item[];
      /** set to `true` if you wish to receive back the created items in the response. */
      returnEntity?: boolean;
      /** The source of this request. */
      source?: string | null;
  }
  interface BulkCreateItemsResponse {
      /** Results of bulk item create. */
      results?: BulkCreateItemResult[];
      /** Information about successful action or error for failure. */
      bulkActionMetadata?: BulkActionMetadata$3;
  }
  interface BulkCreateItemResult {
      /** Information about successful action or error for failure. */
      itemMetadata?: ItemMetadata$3;
      /** Created item. */
      item?: Item;
  }
  interface ItemMetadata$3 {
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
  interface BulkActionMetadata$3 {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
  }
  interface GetItemRequest {
      /** ID of the Item to retrieve. */
      itemId: string;
  }
  interface GetItemResponse {
      /** The retrieved Item. */
      item?: Item;
  }
  interface ListItemsRequest {
      /** IDs of the items to be listed. */
      itemIds?: string[];
      /** The metadata of the paginated results. */
      paging?: CursorPaging$4;
  }
  interface CursorPaging$4 {
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
  interface ListItemsResponse {
      /** The retrieved items. */
      items?: Item[];
      /** The metadata of the paginated results. */
      pagingMetadata?: CursorPagingMetadata$4;
  }
  interface CursorPagingMetadata$4 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      cursors?: Cursors$4;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors$4 {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface QueryItemsRequest {
      /** The query by which to select items. */
      query?: CursorQuery$5;
  }
  interface CursorQuery$5 extends CursorQueryPagingMethodOneOf$5 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$4;
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting$5[];
  }
  /** @oneof */
  interface CursorQueryPagingMethodOneOf$5 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$4;
  }
  interface Sorting$5 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder$5;
  }
  enum SortOrder$5 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface QueryItemsResponse {
      /** The retrieved items. */
      items?: Item[];
      /** The metadata of the paginated results. */
      pagingMetadata?: CursorPagingMetadata$4;
  }
  interface CountItemsRequest {
      /** Filter criteria for counting items. */
      filter?: Record<string, any> | null;
  }
  interface CountItemsResponse {
      /** The count of items. */
      count?: number;
  }
  interface UpdateItemRequest {
      /** Item to be updated, may be partial. */
      item: Item;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
      /** The source of this request. */
      source?: string | null;
  }
  interface UpdateItemResponse {
      /** The updated Item. */
      item?: Item;
  }
  interface BulkUpdateItemRequest {
      /** Items to be updated. */
      items: MaskedItem[];
      /** set to `true` if you wish to receive back the created items in the response. */
      returnEntity?: boolean;
      /** The source of this request. */
      source?: string | null;
  }
  interface MaskedItem {
      /** Item to be updated, may be partial. */
      item?: Item;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  interface BulkUpdateItemResponse {
      /** Results of bulk item update. */
      results?: BulkItemResult[];
      /** Information about successful action or error for failure. */
      bulkActionMetadata?: BulkActionMetadata$3;
  }
  interface BulkItemResult {
      /** Information about successful action or error for failure. */
      itemMetadata?: ItemMetadata$3;
      /** Only exists if `returnEntity` was set to true in the request. */
      item?: Item;
  }
  interface DeleteItemRequest {
      /** ID of the Item to delete. */
      itemId: string;
      /** The source of this request. */
      source?: string | null;
  }
  interface DeleteItemResponse {
  }
  interface BulkDeleteItemsRequest {
      /** Item IDs to be deleted. */
      ids: string[];
      /** The source of this request. */
      source?: string | null;
  }
  interface BulkDeleteItemsResponse {
      /** Results of bulk item delete. */
      results?: BulkDeleteItemResult[];
      /** Information about successful action or error for failure. */
      bulkActionMetadata?: BulkActionMetadata$3;
  }
  interface BulkDeleteItemResult {
      /** Information about successful action or error for failure. */
      itemMetadata?: ItemMetadata$3;
  }
  interface CloneItemsRequest {
      /** The MetaSiteId to clone from. */
      metaSiteId: string;
  }
  interface CloneItemsResponse {
  }
  interface DomainEvent$4 extends DomainEventBodyOneOf$4 {
      createdEvent?: EntityCreatedEvent$4;
      updatedEvent?: EntityUpdatedEvent$4;
      deletedEvent?: EntityDeletedEvent$4;
      actionEvent?: ActionEvent$4;
      /**
       * Unique event ID.
       * Allows clients to ignore duplicate webhooks.
       */
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
      /** ID of the entity associated with the event. */
      entityId?: string;
      /** Event timestamp. */
      eventTime?: Date;
      /**
       * Whether the event was triggered as a result of a privacy regulation application
       * (for example, GDPR).
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
  }
  /** @oneof */
  interface DomainEventBodyOneOf$4 {
      createdEvent?: EntityCreatedEvent$4;
      updatedEvent?: EntityUpdatedEvent$4;
      deletedEvent?: EntityDeletedEvent$4;
      actionEvent?: ActionEvent$4;
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
      /**
       * WIP - This property will hold both names and values of the updated fields of the entity.
       * For more details please see [adr](https://docs.google.com/document/d/1PdqsOM20Ph2HAkmx8zvUnzzk3Sekp3BR9h34wSvsRnI/edit#heading=h.phlw87mh2imx) or [issue](https://github.com/wix-private/nile-tracker/issues/363)
       * @internal
       */
      modifiedFields?: Record<string, any>;
  }
  interface EntityDeletedEvent$4 {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
      /** Entity that was deleted */
      deletedEntityAsJson?: string | null;
  }
  interface ActionEvent$4 {
      bodyAsJson?: string;
  }
  interface Empty$4 {
  }
  /**
   * Creates a new menu item.
   * @param item - Item to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField item
   * @adminMethod
   * @returns The created item.
   */
  function createItem(item: Item, options?: CreateItemOptions): Promise<Item>;
  interface CreateItemOptions {
      /** The source of this request. */
      source?: string | null;
  }
  /**
   * Bulk create new menu items.
   * @param items - Items to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField items
   * @adminMethod
   */
  function bulkCreateItems(items: Item[], options?: BulkCreateItemsOptions): Promise<BulkCreateItemsResponse>;
  interface BulkCreateItemsOptions {
      /** set to `true` if you wish to receive back the created items in the response. */
      returnEntity?: boolean;
      /** The source of this request. */
      source?: string | null;
  }
  /**
   * Get an Item by id.
   * @param itemId - ID of the Item to retrieve.
   * @internal
   * @documentationMaturity preview
   * @requiredField itemId
   * @returns The retrieved Item.
   */
  function getItem(itemId: string): Promise<Item>;
  /**
   * Retrieves a list of items.
   *
   * Up to 500 items can be returned.
   * @internal
   * @documentationMaturity preview
   */
  function listItems(options?: ListItemsOptions): Promise<ListItemsResponse>;
  interface ListItemsOptions {
      /** IDs of the items to be listed. */
      itemIds?: string[];
      /** The metadata of the paginated results. */
      paging?: CursorPaging$4;
  }
  /**
   * Retrieves a list of items by a given query.
   *
   * To learn how to query items, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
   *
   * Up to 500 items can be returned per request.
   * @internal
   * @documentationMaturity preview
   */
  function queryItems(): ItemsQueryBuilder;
  interface QueryCursorResult$5 {
      cursors: Cursors$4;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface ItemsQueryResult extends QueryCursorResult$5 {
      items: Item[];
      query: ItemsQueryBuilder;
      next: () => Promise<ItemsQueryResult>;
      prev: () => Promise<ItemsQueryResult>;
  }
  interface ItemsQueryBuilder {
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => ItemsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => ItemsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<ItemsQueryResult>;
  }
  /**
   * retrieves the number of items based on a specified filter that match the criteria specified by the provided filter.
   *
   * If no filter is provided, it will return the count of all items.
   * @internal
   * @documentationMaturity preview
   */
  function countItems(options?: CountItemsOptions): Promise<CountItemsResponse>;
  interface CountItemsOptions {
      /** Filter criteria for counting items. */
      filter?: Record<string, any> | null;
  }
  /**
   * Update an Item, supports partial update.
   *
   * Each time an item is updated, revision increments by 1. The existing revision must be included when updating the menu item. This ensures you're working with the latest menu item information, and it prevents unintended overwrites.
   * @param _id - Item ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField item
   * @requiredField item.revision
   * @adminMethod
   * @returns The updated Item.
   */
  function updateItem(_id: string | null, item: UpdateItem, options?: UpdateItemOptions): Promise<Item>;
  interface UpdateItem {
      price?: string;
      priceVariants?: PriceVariants;
      /**
       * Item ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Item was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Item was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Item name. */
      name?: string;
      /** Item description. */
      description?: string | null;
      /** Item primary image. */
      image?: string;
      /** Item additional images. */
      additionalImages?: string[];
      /** Item labels. */
      labels?: Label[];
      /** Is visible. */
      visible?: boolean | null;
      /** Online order settings. */
      orderSettings?: OrderSettings;
      /** Modifier Groups. */
      modifierGroups?: ModifierGroup[];
      /** Extended fields. */
      extendedFields?: ExtendedFields$1;
  }
  interface UpdateItemOptions {
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
      /** The source of this request. */
      source?: string | null;
  }
  /**
   * Bulk update an Item, supports partial update.
   *
   * Each time a menu item is updated, revision increments by 1. The existing revision must be included when updating menu item. This ensures you're working with the latest item information, and it prevents unintended overwrites.
   *
   * Up to 100 items can be returned per request.
   * @param items - Items to be updated.
   * @internal
   * @documentationMaturity preview
   * @requiredField items
   * @requiredField items.item._id
   * @requiredField items.item.revision
   * @adminMethod
   */
  function bulkUpdateItem(items: MaskedItem[], options?: BulkUpdateItemOptions): Promise<BulkUpdateItemResponse>;
  interface BulkUpdateItemOptions {
      /** set to `true` if you wish to receive back the created items in the response. */
      returnEntity?: boolean;
      /** The source of this request. */
      source?: string | null;
  }
  /**
   * Deletes an Item.
   * @param itemId - ID of the Item to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField itemId
   * @adminMethod
   */
  function deleteItem(itemId: string, options?: DeleteItemOptions): Promise<void>;
  interface DeleteItemOptions {
      /** The source of this request. */
      source?: string | null;
  }
  /**
   * Bulk delete Items.
   * @param ids - Item IDs to be deleted.
   * @internal
   * @documentationMaturity preview
   * @requiredField ids
   * @adminMethod
   */
  function bulkDeleteItems(ids: string[], options?: BulkDeleteItemsOptions): Promise<BulkDeleteItemsResponse>;
  interface BulkDeleteItemsOptions {
      /** The source of this request. */
      source?: string | null;
  }
  /**
   * Clone items from a different metasite.
   * @param metaSiteId - The MetaSiteId to clone from.
   * @internal
   * @documentationMaturity preview
   * @requiredField metaSiteId
   * @adminMethod
   */
  function cloneItems(metaSiteId: string): Promise<void>;
  
  type restaurantsMenusV1Item_universal_d_Item = Item;
  type restaurantsMenusV1Item_universal_d_ItemPricingOneOf = ItemPricingOneOf;
  type restaurantsMenusV1Item_universal_d_PriceVariants = PriceVariants;
  type restaurantsMenusV1Item_universal_d_PriceVariant = PriceVariant;
  type restaurantsMenusV1Item_universal_d_Label = Label;
  type restaurantsMenusV1Item_universal_d_OrderSettings = OrderSettings;
  type restaurantsMenusV1Item_universal_d_ModifierGroup = ModifierGroup;
  type restaurantsMenusV1Item_universal_d_CreateItemRequest = CreateItemRequest;
  type restaurantsMenusV1Item_universal_d_CreateItemResponse = CreateItemResponse;
  type restaurantsMenusV1Item_universal_d_BulkCreateItemsRequest = BulkCreateItemsRequest;
  type restaurantsMenusV1Item_universal_d_BulkCreateItemsResponse = BulkCreateItemsResponse;
  type restaurantsMenusV1Item_universal_d_BulkCreateItemResult = BulkCreateItemResult;
  type restaurantsMenusV1Item_universal_d_GetItemRequest = GetItemRequest;
  type restaurantsMenusV1Item_universal_d_GetItemResponse = GetItemResponse;
  type restaurantsMenusV1Item_universal_d_ListItemsRequest = ListItemsRequest;
  type restaurantsMenusV1Item_universal_d_ListItemsResponse = ListItemsResponse;
  type restaurantsMenusV1Item_universal_d_QueryItemsRequest = QueryItemsRequest;
  type restaurantsMenusV1Item_universal_d_QueryItemsResponse = QueryItemsResponse;
  type restaurantsMenusV1Item_universal_d_CountItemsRequest = CountItemsRequest;
  type restaurantsMenusV1Item_universal_d_CountItemsResponse = CountItemsResponse;
  type restaurantsMenusV1Item_universal_d_UpdateItemRequest = UpdateItemRequest;
  type restaurantsMenusV1Item_universal_d_UpdateItemResponse = UpdateItemResponse;
  type restaurantsMenusV1Item_universal_d_BulkUpdateItemRequest = BulkUpdateItemRequest;
  type restaurantsMenusV1Item_universal_d_MaskedItem = MaskedItem;
  type restaurantsMenusV1Item_universal_d_BulkUpdateItemResponse = BulkUpdateItemResponse;
  type restaurantsMenusV1Item_universal_d_BulkItemResult = BulkItemResult;
  type restaurantsMenusV1Item_universal_d_DeleteItemRequest = DeleteItemRequest;
  type restaurantsMenusV1Item_universal_d_DeleteItemResponse = DeleteItemResponse;
  type restaurantsMenusV1Item_universal_d_BulkDeleteItemsRequest = BulkDeleteItemsRequest;
  type restaurantsMenusV1Item_universal_d_BulkDeleteItemsResponse = BulkDeleteItemsResponse;
  type restaurantsMenusV1Item_universal_d_BulkDeleteItemResult = BulkDeleteItemResult;
  type restaurantsMenusV1Item_universal_d_CloneItemsRequest = CloneItemsRequest;
  type restaurantsMenusV1Item_universal_d_CloneItemsResponse = CloneItemsResponse;
  const restaurantsMenusV1Item_universal_d_createItem: typeof createItem;
  type restaurantsMenusV1Item_universal_d_CreateItemOptions = CreateItemOptions;
  const restaurantsMenusV1Item_universal_d_bulkCreateItems: typeof bulkCreateItems;
  type restaurantsMenusV1Item_universal_d_BulkCreateItemsOptions = BulkCreateItemsOptions;
  const restaurantsMenusV1Item_universal_d_getItem: typeof getItem;
  const restaurantsMenusV1Item_universal_d_listItems: typeof listItems;
  type restaurantsMenusV1Item_universal_d_ListItemsOptions = ListItemsOptions;
  const restaurantsMenusV1Item_universal_d_queryItems: typeof queryItems;
  type restaurantsMenusV1Item_universal_d_ItemsQueryResult = ItemsQueryResult;
  type restaurantsMenusV1Item_universal_d_ItemsQueryBuilder = ItemsQueryBuilder;
  const restaurantsMenusV1Item_universal_d_countItems: typeof countItems;
  type restaurantsMenusV1Item_universal_d_CountItemsOptions = CountItemsOptions;
  const restaurantsMenusV1Item_universal_d_updateItem: typeof updateItem;
  type restaurantsMenusV1Item_universal_d_UpdateItem = UpdateItem;
  type restaurantsMenusV1Item_universal_d_UpdateItemOptions = UpdateItemOptions;
  const restaurantsMenusV1Item_universal_d_bulkUpdateItem: typeof bulkUpdateItem;
  type restaurantsMenusV1Item_universal_d_BulkUpdateItemOptions = BulkUpdateItemOptions;
  const restaurantsMenusV1Item_universal_d_deleteItem: typeof deleteItem;
  type restaurantsMenusV1Item_universal_d_DeleteItemOptions = DeleteItemOptions;
  const restaurantsMenusV1Item_universal_d_bulkDeleteItems: typeof bulkDeleteItems;
  type restaurantsMenusV1Item_universal_d_BulkDeleteItemsOptions = BulkDeleteItemsOptions;
  const restaurantsMenusV1Item_universal_d_cloneItems: typeof cloneItems;
  namespace restaurantsMenusV1Item_universal_d {
    export {
      __debug$5 as __debug,
      restaurantsMenusV1Item_universal_d_Item as Item,
      restaurantsMenusV1Item_universal_d_ItemPricingOneOf as ItemPricingOneOf,
      restaurantsMenusV1Item_universal_d_PriceVariants as PriceVariants,
      restaurantsMenusV1Item_universal_d_PriceVariant as PriceVariant,
      restaurantsMenusV1Item_universal_d_Label as Label,
      restaurantsMenusV1Item_universal_d_OrderSettings as OrderSettings,
      restaurantsMenusV1Item_universal_d_ModifierGroup as ModifierGroup,
      ExtendedFields$1 as ExtendedFields,
      InvalidateCache$4 as InvalidateCache,
      InvalidateCacheGetByOneOf$4 as InvalidateCacheGetByOneOf,
      App$4 as App,
      Page$4 as Page,
      URI$4 as URI,
      restaurantsMenusV1Item_universal_d_CreateItemRequest as CreateItemRequest,
      restaurantsMenusV1Item_universal_d_CreateItemResponse as CreateItemResponse,
      restaurantsMenusV1Item_universal_d_BulkCreateItemsRequest as BulkCreateItemsRequest,
      restaurantsMenusV1Item_universal_d_BulkCreateItemsResponse as BulkCreateItemsResponse,
      restaurantsMenusV1Item_universal_d_BulkCreateItemResult as BulkCreateItemResult,
      ItemMetadata$3 as ItemMetadata,
      ApplicationError$3 as ApplicationError,
      BulkActionMetadata$3 as BulkActionMetadata,
      restaurantsMenusV1Item_universal_d_GetItemRequest as GetItemRequest,
      restaurantsMenusV1Item_universal_d_GetItemResponse as GetItemResponse,
      restaurantsMenusV1Item_universal_d_ListItemsRequest as ListItemsRequest,
      CursorPaging$4 as CursorPaging,
      restaurantsMenusV1Item_universal_d_ListItemsResponse as ListItemsResponse,
      CursorPagingMetadata$4 as CursorPagingMetadata,
      Cursors$4 as Cursors,
      restaurantsMenusV1Item_universal_d_QueryItemsRequest as QueryItemsRequest,
      CursorQuery$5 as CursorQuery,
      CursorQueryPagingMethodOneOf$5 as CursorQueryPagingMethodOneOf,
      Sorting$5 as Sorting,
      SortOrder$5 as SortOrder,
      restaurantsMenusV1Item_universal_d_QueryItemsResponse as QueryItemsResponse,
      restaurantsMenusV1Item_universal_d_CountItemsRequest as CountItemsRequest,
      restaurantsMenusV1Item_universal_d_CountItemsResponse as CountItemsResponse,
      restaurantsMenusV1Item_universal_d_UpdateItemRequest as UpdateItemRequest,
      restaurantsMenusV1Item_universal_d_UpdateItemResponse as UpdateItemResponse,
      restaurantsMenusV1Item_universal_d_BulkUpdateItemRequest as BulkUpdateItemRequest,
      restaurantsMenusV1Item_universal_d_MaskedItem as MaskedItem,
      restaurantsMenusV1Item_universal_d_BulkUpdateItemResponse as BulkUpdateItemResponse,
      restaurantsMenusV1Item_universal_d_BulkItemResult as BulkItemResult,
      restaurantsMenusV1Item_universal_d_DeleteItemRequest as DeleteItemRequest,
      restaurantsMenusV1Item_universal_d_DeleteItemResponse as DeleteItemResponse,
      restaurantsMenusV1Item_universal_d_BulkDeleteItemsRequest as BulkDeleteItemsRequest,
      restaurantsMenusV1Item_universal_d_BulkDeleteItemsResponse as BulkDeleteItemsResponse,
      restaurantsMenusV1Item_universal_d_BulkDeleteItemResult as BulkDeleteItemResult,
      restaurantsMenusV1Item_universal_d_CloneItemsRequest as CloneItemsRequest,
      restaurantsMenusV1Item_universal_d_CloneItemsResponse as CloneItemsResponse,
      DomainEvent$4 as DomainEvent,
      DomainEventBodyOneOf$4 as DomainEventBodyOneOf,
      EntityCreatedEvent$4 as EntityCreatedEvent,
      EntityUpdatedEvent$4 as EntityUpdatedEvent,
      EntityDeletedEvent$4 as EntityDeletedEvent,
      ActionEvent$4 as ActionEvent,
      Empty$4 as Empty,
      restaurantsMenusV1Item_universal_d_createItem as createItem,
      restaurantsMenusV1Item_universal_d_CreateItemOptions as CreateItemOptions,
      restaurantsMenusV1Item_universal_d_bulkCreateItems as bulkCreateItems,
      restaurantsMenusV1Item_universal_d_BulkCreateItemsOptions as BulkCreateItemsOptions,
      restaurantsMenusV1Item_universal_d_getItem as getItem,
      restaurantsMenusV1Item_universal_d_listItems as listItems,
      restaurantsMenusV1Item_universal_d_ListItemsOptions as ListItemsOptions,
      restaurantsMenusV1Item_universal_d_queryItems as queryItems,
      restaurantsMenusV1Item_universal_d_ItemsQueryResult as ItemsQueryResult,
      restaurantsMenusV1Item_universal_d_ItemsQueryBuilder as ItemsQueryBuilder,
      restaurantsMenusV1Item_universal_d_countItems as countItems,
      restaurantsMenusV1Item_universal_d_CountItemsOptions as CountItemsOptions,
      restaurantsMenusV1Item_universal_d_updateItem as updateItem,
      restaurantsMenusV1Item_universal_d_UpdateItem as UpdateItem,
      restaurantsMenusV1Item_universal_d_UpdateItemOptions as UpdateItemOptions,
      restaurantsMenusV1Item_universal_d_bulkUpdateItem as bulkUpdateItem,
      restaurantsMenusV1Item_universal_d_BulkUpdateItemOptions as BulkUpdateItemOptions,
      restaurantsMenusV1Item_universal_d_deleteItem as deleteItem,
      restaurantsMenusV1Item_universal_d_DeleteItemOptions as DeleteItemOptions,
      restaurantsMenusV1Item_universal_d_bulkDeleteItems as bulkDeleteItems,
      restaurantsMenusV1Item_universal_d_BulkDeleteItemsOptions as BulkDeleteItemsOptions,
      restaurantsMenusV1Item_universal_d_cloneItems as cloneItems,
    };
  }
  
  const __debug$4: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** Menu is the main entity of RestaurantsMenusMenu that represents a menu of a restaurant. */
  interface Menu {
      /**
       * Menu ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of a menu. Each time the menu is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Menu was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Menu was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Menu name. */
      name?: string;
      /** Menu description. */
      description?: string | null;
      /** Is visible. */
      visible?: boolean | null;
      /** Section ids. */
      sectionIds?: string[];
      /** Data extension. */
      extendedFields?: ExtendedFields;
      /** URL query param for displaying the menu in the livesite. */
      urlQueryParam?: string | null;
  }
  interface ExtendedFields {
      /**
       * Extended field data. Each key corresponds to the namespace of the app that created the extended fields.
       * The value of each key is structured according to the schema defined when the extended fields were configured.
       *
       * You can only access fields for which you have the appropriate permissions.
       *
       * Learn more about [extended fields](https://dev.wix.com/docs/rest/articles/getting-started/extended-fields).
       */
      namespaces?: Record<string, Record<string, any>>;
  }
  interface GetMenuSiteUrlRequest {
      /**
       * Menu ID.
       * @readonly
       */
      _id: string | null;
      /** Whether the full Menu entity is returned. Defaults to `false`. */
      returnFullEntity?: boolean;
  }
  interface GetMenuSiteUrlResponse {
      /** Retrieved menuInfo with path url. */
      menuSiteUrl?: MenuSiteUrl;
  }
  interface MenuSiteUrl extends MenuSiteUrlMenuInfoOneOf {
      /** The retrieved menu. */
      menu?: Menu;
      /** Menu ID. */
      menuId?: string;
      /** Path URL. */
      path?: string;
  }
  /** @oneof */
  interface MenuSiteUrlMenuInfoOneOf {
      /** The retrieved menu. */
      menu?: Menu;
      /** Menu ID. */
      menuId?: string;
  }
  interface ListMenusSiteUrlRequest {
      /** The query by which to select menus. */
      paging?: CursorPaging$3;
      /** Whether the full Menu entity is returned. Defaults to `false`. */
      returnFullEntity?: boolean;
  }
  interface CursorPaging$3 {
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
  interface ListMenusSiteUrlResponse {
      /** The retrieved menu site info. */
      menusSiteUrls?: MenuSiteUrl[];
      /** The metadata of the paginated results. */
      pagingMetadata?: CursorPagingMetadata$3;
  }
  interface CursorPagingMetadata$3 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      cursors?: Cursors$3;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors$3 {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface InvalidateCache$3 extends InvalidateCacheGetByOneOf$3 {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App$3;
      /** Invalidate by page id */
      page?: Page$3;
      /** Invalidate by URI path */
      uri?: URI$3;
      /** tell us why you're invalidating the cache. You don't need to add your app name */
      reason?: string | null;
      /** Is local DS */
      localDc?: boolean;
  }
  /** @oneof */
  interface InvalidateCacheGetByOneOf$3 {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App$3;
      /** Invalidate by page id */
      page?: Page$3;
      /** Invalidate by URI path */
      uri?: URI$3;
  }
  interface App$3 {
      /** The AppDefId */
      appDefId?: string;
      /** The instance Id */
      instanceId?: string;
  }
  interface Page$3 {
      /** the msid the page is on */
      metaSiteId?: string;
      /** Invalidate by Page ID */
      pageId?: string;
  }
  interface URI$3 {
      /** the msid the URI is on */
      metaSiteId?: string;
      /** URI path to invalidate (e.g. page/my/path) - without leading/trailing slashes */
      uriPath?: string;
  }
  interface DeleteOrphanSections {
      /** Menu id */
      menuId?: string;
  }
  interface CreateMenuRequest {
      /** Menu to be created. */
      menu: Menu;
  }
  interface CreateMenuResponse {
      /** The created Menu. */
      menu?: Menu;
  }
  interface BulkCreateMenusRequest {
      /** Items to be created. */
      menus: Menu[];
      /** Set to `true` if you wish to receive back the created menus in the response */
      returnEntity?: boolean;
  }
  interface BulkCreateMenusResponse {
      /** Results of bulk menu create. */
      results?: BulkCreateMenuResult[];
      /** Information about successful action or error for failure. */
      bulkActionMetadata?: BulkActionMetadata$2;
  }
  interface BulkCreateMenuResult {
      /** Set to `true` if you wish to receive back the created menus in the response. */
      menuMetadata?: ItemMetadata$2;
      /** The created Menu. */
      menu?: Menu;
  }
  interface ItemMetadata$2 {
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
  interface BulkActionMetadata$2 {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
  }
  interface GetMenuRequest {
      /** ID of the menu to retrieve. */
      menuId: string;
  }
  interface GetMenuResponse {
      /** The retrieved menu. */
      menu?: Menu;
  }
  interface ListMenusRequest {
      /** IDs of the menus to be listed. */
      menuIds?: string[];
      /** The metadata of the paginated results. */
      paging?: CursorPaging$3;
  }
  interface ListMenusResponse {
      /** The retrieved menus. */
      menus?: Menu[];
      /** The metadata of the paginated results. */
      pagingMetadata?: CursorPagingMetadata$3;
  }
  interface QueryMenusRequest {
      /** The query by which to select menus. */
      query?: CursorQuery$4;
  }
  interface CursorQuery$4 extends CursorQueryPagingMethodOneOf$4 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$3;
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting$4[];
  }
  /** @oneof */
  interface CursorQueryPagingMethodOneOf$4 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$3;
  }
  interface Sorting$4 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder$4;
  }
  enum SortOrder$4 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface QueryMenusResponse {
      /** The retrieved menus. */
      menus?: Menu[];
      /** The metadata of the paginated results. */
      pagingMetadata?: CursorPagingMetadata$3;
  }
  interface UpdateMenuRequest {
      /** Menu to be updated, may be partial. */
      menu: Menu;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  interface UpdateMenuResponse {
      /** The updated menu. */
      menu?: Menu;
  }
  interface BulkUpdateMenuRequest {
      /** Menus to be updated. */
      menus: MaskedMenu[];
      /** Set to `true` if you wish to receive back the created menus in the response. */
      returnEntity?: boolean;
  }
  interface MaskedMenu {
      /** Menu to be updated, may be partial. */
      menu?: Menu;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  interface BulkUpdateMenuResponse {
      /** Results of bulk menu update. */
      results?: BulkMenuResult[];
      /** Information about successful action or error for failure. */
      bulkActionMetadata?: BulkActionMetadata$2;
  }
  interface BulkMenuResult {
      /** Set to `true` if you wish to receive back the updated menus in the response. */
      menuMetadata?: ItemMetadata$2;
      /** The Updated menu. */
      menu?: Menu;
  }
  interface UpdateExtendedFieldsRequest {
      /** ID of the entity to update. */
      _id: string;
      /** Identifier for the app whose extended fields are being updated. */
      namespace: string;
      /** Data to update. Structured according to the [schema](https://dev.wix.com/docs/rest/articles/getting-started/extended-fields#json-schema-for-extended-fields) defined when the extended fields were configured. */
      namespaceData: Record<string, any> | null;
  }
  interface UpdateExtendedFieldsResponse {
      /** Namespace of data-extensions. */
      namespace?: string;
      /** Only data from UpdateExtendedFieldsRequest namespace_data. */
      namespaceData?: Record<string, any> | null;
  }
  interface DeleteMenuRequest {
      /** ID of the menu to delete. */
      menuId: string;
  }
  interface DeleteMenuResponse {
  }
  interface CloneMenusRequest {
      /** The MetaSiteId to clone from. */
      metaSiteId: string;
  }
  interface CloneMenusResponse {
  }
  interface DomainEvent$3 extends DomainEventBodyOneOf$3 {
      createdEvent?: EntityCreatedEvent$3;
      updatedEvent?: EntityUpdatedEvent$3;
      deletedEvent?: EntityDeletedEvent$3;
      actionEvent?: ActionEvent$3;
      /**
       * Unique event ID.
       * Allows clients to ignore duplicate webhooks.
       */
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
      /** ID of the entity associated with the event. */
      entityId?: string;
      /** Event timestamp. */
      eventTime?: Date;
      /**
       * Whether the event was triggered as a result of a privacy regulation application
       * (for example, GDPR).
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
  }
  /** @oneof */
  interface DomainEventBodyOneOf$3 {
      createdEvent?: EntityCreatedEvent$3;
      updatedEvent?: EntityUpdatedEvent$3;
      deletedEvent?: EntityDeletedEvent$3;
      actionEvent?: ActionEvent$3;
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
      /**
       * WIP - This property will hold both names and values of the updated fields of the entity.
       * For more details please see [adr](https://docs.google.com/document/d/1PdqsOM20Ph2HAkmx8zvUnzzk3Sekp3BR9h34wSvsRnI/edit#heading=h.phlw87mh2imx) or [issue](https://github.com/wix-private/nile-tracker/issues/363)
       * @internal
       */
      modifiedFields?: Record<string, any>;
  }
  interface EntityDeletedEvent$3 {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
      /** Entity that was deleted */
      deletedEntityAsJson?: string | null;
  }
  interface ActionEvent$3 {
      bodyAsJson?: string;
  }
  interface Empty$3 {
  }
  /**
   * Get menu details and path URL by menu ID.
   * @param _id - Menu ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   */
  function getMenuSiteUrl(_id: string | null, options?: GetMenuSiteUrlOptions): Promise<GetMenuSiteUrlResponse>;
  interface GetMenuSiteUrlOptions {
      /** Whether the full Menu entity is returned. Defaults to `false`. */
      returnFullEntity?: boolean;
  }
  /**
   * Retrieve a list of menu details along with their corresponding path URLs.
   * @internal
   * @documentationMaturity preview
   */
  function listMenusSiteUrl(options?: ListMenusSiteUrlOptions): Promise<ListMenusSiteUrlResponse>;
  interface ListMenusSiteUrlOptions {
      /** The query by which to select menus. */
      paging?: CursorPaging$3;
      /** Whether the full Menu entity is returned. Defaults to `false`. */
      returnFullEntity?: boolean;
  }
  /**
   * Creates a new Menu.
   * @param menu - Menu to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField menu
   * @adminMethod
   * @returns The created Menu.
   */
  function createMenu(menu: Menu): Promise<Menu>;
  /**
   * Bulk create new menus.
   * @param menus - Items to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField menus
   * @adminMethod
   */
  function bulkCreateMenus(menus: Menu[], options?: BulkCreateMenusOptions): Promise<BulkCreateMenusResponse>;
  interface BulkCreateMenusOptions {
      /** Set to `true` if you wish to receive back the created menus in the response */
      returnEntity?: boolean;
  }
  /**
   * Get a menu by id.
   * @param menuId - ID of the menu to retrieve.
   * @internal
   * @documentationMaturity preview
   * @requiredField menuId
   * @returns The retrieved menu.
   */
  function getMenu(menuId: string): Promise<Menu>;
  /**
   * Retrieves a list of menus.
   *
   * Up to 500 menus can be returned.
   * @internal
   * @documentationMaturity preview
   */
  function listMenus(options?: ListMenusOptions): Promise<ListMenusResponse>;
  interface ListMenusOptions {
      /** IDs of the menus to be listed. */
      menuIds?: string[];
      /** The metadata of the paginated results. */
      paging?: CursorPaging$3;
  }
  /**
   * Retrieves a list of menus by a given query.
   *
   * To learn how to query menus, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
   *
   * Up to 500 menus can be returned per request.
   * @internal
   * @documentationMaturity preview
   */
  function queryMenus(): MenusQueryBuilder;
  interface QueryCursorResult$4 {
      cursors: Cursors$3;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface MenusQueryResult extends QueryCursorResult$4 {
      items: Menu[];
      query: MenusQueryBuilder;
      next: () => Promise<MenusQueryResult>;
      prev: () => Promise<MenusQueryResult>;
  }
  interface MenusQueryBuilder {
      /** @documentationMaturity preview */
      in: (propertyName: 'sectionIds', value: any) => MenusQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => MenusQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => MenusQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<MenusQueryResult>;
  }
  /**
   * Update a menu, supports partial update.
   *
   * Each time a menu is updated, revision increments by 1. The existing revision must be included when updating a menu. This ensures you're working with the latest menu information, and it prevents unintended overwrites.
   * @param _id - Menu ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField menu
   * @requiredField menu.revision
   * @adminMethod
   * @returns The updated menu.
   */
  function updateMenu(_id: string | null, menu: UpdateMenu, options?: UpdateMenuOptions): Promise<Menu>;
  interface UpdateMenu {
      /**
       * Menu ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of a menu. Each time the menu is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Menu was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Menu was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Menu name. */
      name?: string;
      /** Menu description. */
      description?: string | null;
      /** Is visible. */
      visible?: boolean | null;
      /** Section ids. */
      sectionIds?: string[];
      /** Data extension. */
      extendedFields?: ExtendedFields;
      /** URL query param for displaying the menu in the livesite. */
      urlQueryParam?: string | null;
  }
  interface UpdateMenuOptions {
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  /**
   * Bulk update a menu, supports partial update.
   *
   * Each time a menu is updated, revision increments by 1. The existing revision must be included when updating the menu. This ensures you're working with the latest menu information, and it prevents unintended overwrites.
   *
   * Up to 500 menus can be returned per request.
   * @param menus - Menus to be updated.
   * @internal
   * @documentationMaturity preview
   * @requiredField menus
   * @requiredField menus.menu._id
   * @requiredField menus.menu.revision
   * @adminMethod
   */
  function bulkUpdateMenu(menus: MaskedMenu[], options?: BulkUpdateMenuOptions): Promise<BulkUpdateMenuResponse>;
  interface BulkUpdateMenuOptions {
      /** Set to `true` if you wish to receive back the created menus in the response. */
      returnEntity?: boolean;
  }
  /**
   * Update Extended Fields of the Menu.
   * @param _id - ID of the entity to update.
   * @param namespace - Identifier for the app whose extended fields are being updated.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField namespace
   * @requiredField options
   * @requiredField options.namespaceData
   * @adminMethod
   */
  function updateExtendedFields(_id: string, namespace: string, options: UpdateExtendedFieldsOptions): Promise<UpdateExtendedFieldsResponse>;
  interface UpdateExtendedFieldsOptions {
      /** Data to update. Structured according to the [schema](https://dev.wix.com/docs/rest/articles/getting-started/extended-fields#json-schema-for-extended-fields) defined when the extended fields were configured. */
      namespaceData: Record<string, any> | null;
  }
  /**
   * Delete a Menu.
   * @param menuId - ID of the menu to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField menuId
   * @adminMethod
   */
  function deleteMenu(menuId: string): Promise<void>;
  /**
   * Clone menus from a different metasite
   * @param metaSiteId - The MetaSiteId to clone from.
   * @internal
   * @documentationMaturity preview
   * @requiredField metaSiteId
   * @adminMethod
   */
  function cloneMenus(metaSiteId: string): Promise<void>;
  
  type restaurantsMenusV1Menu_universal_d_Menu = Menu;
  type restaurantsMenusV1Menu_universal_d_ExtendedFields = ExtendedFields;
  type restaurantsMenusV1Menu_universal_d_GetMenuSiteUrlRequest = GetMenuSiteUrlRequest;
  type restaurantsMenusV1Menu_universal_d_GetMenuSiteUrlResponse = GetMenuSiteUrlResponse;
  type restaurantsMenusV1Menu_universal_d_MenuSiteUrl = MenuSiteUrl;
  type restaurantsMenusV1Menu_universal_d_MenuSiteUrlMenuInfoOneOf = MenuSiteUrlMenuInfoOneOf;
  type restaurantsMenusV1Menu_universal_d_ListMenusSiteUrlRequest = ListMenusSiteUrlRequest;
  type restaurantsMenusV1Menu_universal_d_ListMenusSiteUrlResponse = ListMenusSiteUrlResponse;
  type restaurantsMenusV1Menu_universal_d_DeleteOrphanSections = DeleteOrphanSections;
  type restaurantsMenusV1Menu_universal_d_CreateMenuRequest = CreateMenuRequest;
  type restaurantsMenusV1Menu_universal_d_CreateMenuResponse = CreateMenuResponse;
  type restaurantsMenusV1Menu_universal_d_BulkCreateMenusRequest = BulkCreateMenusRequest;
  type restaurantsMenusV1Menu_universal_d_BulkCreateMenusResponse = BulkCreateMenusResponse;
  type restaurantsMenusV1Menu_universal_d_BulkCreateMenuResult = BulkCreateMenuResult;
  type restaurantsMenusV1Menu_universal_d_GetMenuRequest = GetMenuRequest;
  type restaurantsMenusV1Menu_universal_d_GetMenuResponse = GetMenuResponse;
  type restaurantsMenusV1Menu_universal_d_ListMenusRequest = ListMenusRequest;
  type restaurantsMenusV1Menu_universal_d_ListMenusResponse = ListMenusResponse;
  type restaurantsMenusV1Menu_universal_d_QueryMenusRequest = QueryMenusRequest;
  type restaurantsMenusV1Menu_universal_d_QueryMenusResponse = QueryMenusResponse;
  type restaurantsMenusV1Menu_universal_d_UpdateMenuRequest = UpdateMenuRequest;
  type restaurantsMenusV1Menu_universal_d_UpdateMenuResponse = UpdateMenuResponse;
  type restaurantsMenusV1Menu_universal_d_BulkUpdateMenuRequest = BulkUpdateMenuRequest;
  type restaurantsMenusV1Menu_universal_d_MaskedMenu = MaskedMenu;
  type restaurantsMenusV1Menu_universal_d_BulkUpdateMenuResponse = BulkUpdateMenuResponse;
  type restaurantsMenusV1Menu_universal_d_BulkMenuResult = BulkMenuResult;
  type restaurantsMenusV1Menu_universal_d_UpdateExtendedFieldsRequest = UpdateExtendedFieldsRequest;
  type restaurantsMenusV1Menu_universal_d_UpdateExtendedFieldsResponse = UpdateExtendedFieldsResponse;
  type restaurantsMenusV1Menu_universal_d_DeleteMenuRequest = DeleteMenuRequest;
  type restaurantsMenusV1Menu_universal_d_DeleteMenuResponse = DeleteMenuResponse;
  type restaurantsMenusV1Menu_universal_d_CloneMenusRequest = CloneMenusRequest;
  type restaurantsMenusV1Menu_universal_d_CloneMenusResponse = CloneMenusResponse;
  const restaurantsMenusV1Menu_universal_d_getMenuSiteUrl: typeof getMenuSiteUrl;
  type restaurantsMenusV1Menu_universal_d_GetMenuSiteUrlOptions = GetMenuSiteUrlOptions;
  const restaurantsMenusV1Menu_universal_d_listMenusSiteUrl: typeof listMenusSiteUrl;
  type restaurantsMenusV1Menu_universal_d_ListMenusSiteUrlOptions = ListMenusSiteUrlOptions;
  const restaurantsMenusV1Menu_universal_d_createMenu: typeof createMenu;
  const restaurantsMenusV1Menu_universal_d_bulkCreateMenus: typeof bulkCreateMenus;
  type restaurantsMenusV1Menu_universal_d_BulkCreateMenusOptions = BulkCreateMenusOptions;
  const restaurantsMenusV1Menu_universal_d_getMenu: typeof getMenu;
  const restaurantsMenusV1Menu_universal_d_listMenus: typeof listMenus;
  type restaurantsMenusV1Menu_universal_d_ListMenusOptions = ListMenusOptions;
  const restaurantsMenusV1Menu_universal_d_queryMenus: typeof queryMenus;
  type restaurantsMenusV1Menu_universal_d_MenusQueryResult = MenusQueryResult;
  type restaurantsMenusV1Menu_universal_d_MenusQueryBuilder = MenusQueryBuilder;
  const restaurantsMenusV1Menu_universal_d_updateMenu: typeof updateMenu;
  type restaurantsMenusV1Menu_universal_d_UpdateMenu = UpdateMenu;
  type restaurantsMenusV1Menu_universal_d_UpdateMenuOptions = UpdateMenuOptions;
  const restaurantsMenusV1Menu_universal_d_bulkUpdateMenu: typeof bulkUpdateMenu;
  type restaurantsMenusV1Menu_universal_d_BulkUpdateMenuOptions = BulkUpdateMenuOptions;
  const restaurantsMenusV1Menu_universal_d_updateExtendedFields: typeof updateExtendedFields;
  type restaurantsMenusV1Menu_universal_d_UpdateExtendedFieldsOptions = UpdateExtendedFieldsOptions;
  const restaurantsMenusV1Menu_universal_d_deleteMenu: typeof deleteMenu;
  const restaurantsMenusV1Menu_universal_d_cloneMenus: typeof cloneMenus;
  namespace restaurantsMenusV1Menu_universal_d {
    export {
      __debug$4 as __debug,
      restaurantsMenusV1Menu_universal_d_Menu as Menu,
      restaurantsMenusV1Menu_universal_d_ExtendedFields as ExtendedFields,
      restaurantsMenusV1Menu_universal_d_GetMenuSiteUrlRequest as GetMenuSiteUrlRequest,
      restaurantsMenusV1Menu_universal_d_GetMenuSiteUrlResponse as GetMenuSiteUrlResponse,
      restaurantsMenusV1Menu_universal_d_MenuSiteUrl as MenuSiteUrl,
      restaurantsMenusV1Menu_universal_d_MenuSiteUrlMenuInfoOneOf as MenuSiteUrlMenuInfoOneOf,
      restaurantsMenusV1Menu_universal_d_ListMenusSiteUrlRequest as ListMenusSiteUrlRequest,
      CursorPaging$3 as CursorPaging,
      restaurantsMenusV1Menu_universal_d_ListMenusSiteUrlResponse as ListMenusSiteUrlResponse,
      CursorPagingMetadata$3 as CursorPagingMetadata,
      Cursors$3 as Cursors,
      InvalidateCache$3 as InvalidateCache,
      InvalidateCacheGetByOneOf$3 as InvalidateCacheGetByOneOf,
      App$3 as App,
      Page$3 as Page,
      URI$3 as URI,
      restaurantsMenusV1Menu_universal_d_DeleteOrphanSections as DeleteOrphanSections,
      restaurantsMenusV1Menu_universal_d_CreateMenuRequest as CreateMenuRequest,
      restaurantsMenusV1Menu_universal_d_CreateMenuResponse as CreateMenuResponse,
      restaurantsMenusV1Menu_universal_d_BulkCreateMenusRequest as BulkCreateMenusRequest,
      restaurantsMenusV1Menu_universal_d_BulkCreateMenusResponse as BulkCreateMenusResponse,
      restaurantsMenusV1Menu_universal_d_BulkCreateMenuResult as BulkCreateMenuResult,
      ItemMetadata$2 as ItemMetadata,
      ApplicationError$2 as ApplicationError,
      BulkActionMetadata$2 as BulkActionMetadata,
      restaurantsMenusV1Menu_universal_d_GetMenuRequest as GetMenuRequest,
      restaurantsMenusV1Menu_universal_d_GetMenuResponse as GetMenuResponse,
      restaurantsMenusV1Menu_universal_d_ListMenusRequest as ListMenusRequest,
      restaurantsMenusV1Menu_universal_d_ListMenusResponse as ListMenusResponse,
      restaurantsMenusV1Menu_universal_d_QueryMenusRequest as QueryMenusRequest,
      CursorQuery$4 as CursorQuery,
      CursorQueryPagingMethodOneOf$4 as CursorQueryPagingMethodOneOf,
      Sorting$4 as Sorting,
      SortOrder$4 as SortOrder,
      restaurantsMenusV1Menu_universal_d_QueryMenusResponse as QueryMenusResponse,
      restaurantsMenusV1Menu_universal_d_UpdateMenuRequest as UpdateMenuRequest,
      restaurantsMenusV1Menu_universal_d_UpdateMenuResponse as UpdateMenuResponse,
      restaurantsMenusV1Menu_universal_d_BulkUpdateMenuRequest as BulkUpdateMenuRequest,
      restaurantsMenusV1Menu_universal_d_MaskedMenu as MaskedMenu,
      restaurantsMenusV1Menu_universal_d_BulkUpdateMenuResponse as BulkUpdateMenuResponse,
      restaurantsMenusV1Menu_universal_d_BulkMenuResult as BulkMenuResult,
      restaurantsMenusV1Menu_universal_d_UpdateExtendedFieldsRequest as UpdateExtendedFieldsRequest,
      restaurantsMenusV1Menu_universal_d_UpdateExtendedFieldsResponse as UpdateExtendedFieldsResponse,
      restaurantsMenusV1Menu_universal_d_DeleteMenuRequest as DeleteMenuRequest,
      restaurantsMenusV1Menu_universal_d_DeleteMenuResponse as DeleteMenuResponse,
      restaurantsMenusV1Menu_universal_d_CloneMenusRequest as CloneMenusRequest,
      restaurantsMenusV1Menu_universal_d_CloneMenusResponse as CloneMenusResponse,
      DomainEvent$3 as DomainEvent,
      DomainEventBodyOneOf$3 as DomainEventBodyOneOf,
      EntityCreatedEvent$3 as EntityCreatedEvent,
      EntityUpdatedEvent$3 as EntityUpdatedEvent,
      EntityDeletedEvent$3 as EntityDeletedEvent,
      ActionEvent$3 as ActionEvent,
      Empty$3 as Empty,
      restaurantsMenusV1Menu_universal_d_getMenuSiteUrl as getMenuSiteUrl,
      restaurantsMenusV1Menu_universal_d_GetMenuSiteUrlOptions as GetMenuSiteUrlOptions,
      restaurantsMenusV1Menu_universal_d_listMenusSiteUrl as listMenusSiteUrl,
      restaurantsMenusV1Menu_universal_d_ListMenusSiteUrlOptions as ListMenusSiteUrlOptions,
      restaurantsMenusV1Menu_universal_d_createMenu as createMenu,
      restaurantsMenusV1Menu_universal_d_bulkCreateMenus as bulkCreateMenus,
      restaurantsMenusV1Menu_universal_d_BulkCreateMenusOptions as BulkCreateMenusOptions,
      restaurantsMenusV1Menu_universal_d_getMenu as getMenu,
      restaurantsMenusV1Menu_universal_d_listMenus as listMenus,
      restaurantsMenusV1Menu_universal_d_ListMenusOptions as ListMenusOptions,
      restaurantsMenusV1Menu_universal_d_queryMenus as queryMenus,
      restaurantsMenusV1Menu_universal_d_MenusQueryResult as MenusQueryResult,
      restaurantsMenusV1Menu_universal_d_MenusQueryBuilder as MenusQueryBuilder,
      restaurantsMenusV1Menu_universal_d_updateMenu as updateMenu,
      restaurantsMenusV1Menu_universal_d_UpdateMenu as UpdateMenu,
      restaurantsMenusV1Menu_universal_d_UpdateMenuOptions as UpdateMenuOptions,
      restaurantsMenusV1Menu_universal_d_bulkUpdateMenu as bulkUpdateMenu,
      restaurantsMenusV1Menu_universal_d_BulkUpdateMenuOptions as BulkUpdateMenuOptions,
      restaurantsMenusV1Menu_universal_d_updateExtendedFields as updateExtendedFields,
      restaurantsMenusV1Menu_universal_d_UpdateExtendedFieldsOptions as UpdateExtendedFieldsOptions,
      restaurantsMenusV1Menu_universal_d_deleteMenu as deleteMenu,
      restaurantsMenusV1Menu_universal_d_cloneMenus as cloneMenus,
    };
  }
  
  const __debug$3: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** Section is the main entity of RestaurantsMenusSection that represents a section inside a restaurant menu. */
  interface Section {
      /**
       * Section ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of a section. Each time the section is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Section was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Section was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Section name. */
      name?: string;
      /** Section description. */
      description?: string | null;
      /** Section primary image. */
      image?: string;
      /** Section additional images. */
      additionalImages?: string[];
      /** Item ids. */
      itemIds?: string[];
  }
  interface InvalidateCache$2 extends InvalidateCacheGetByOneOf$2 {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App$2;
      /** Invalidate by page id */
      page?: Page$2;
      /** Invalidate by URI path */
      uri?: URI$2;
      /** tell us why you're invalidating the cache. You don't need to add your app name */
      reason?: string | null;
      /** Is local DS */
      localDc?: boolean;
  }
  /** @oneof */
  interface InvalidateCacheGetByOneOf$2 {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App$2;
      /** Invalidate by page id */
      page?: Page$2;
      /** Invalidate by URI path */
      uri?: URI$2;
  }
  interface App$2 {
      /** The AppDefId */
      appDefId?: string;
      /** The instance Id */
      instanceId?: string;
  }
  interface Page$2 {
      /** the msid the page is on */
      metaSiteId?: string;
      /** Invalidate by Page ID */
      pageId?: string;
  }
  interface URI$2 {
      /** the msid the URI is on */
      metaSiteId?: string;
      /** URI path to invalidate (e.g. page/my/path) - without leading/trailing slashes */
      uriPath?: string;
  }
  interface CreateSectionRequest {
      /** Section to be created. */
      section: Section;
  }
  interface CreateSectionResponse {
      /** The created Section. */
      section?: Section;
  }
  interface BulkCreateSectionsRequest {
      /** Sections to be created. */
      sections: Section[];
      /** Set to `true` if you wish to receive back the created sections in the response. */
      returnEntity?: boolean;
  }
  interface BulkCreateSectionsResponse {
      /** Results of bulk sections create. */
      results?: BulkCreateSectionResult[];
      /** Information about successful action or error for failure. */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface BulkCreateSectionResult {
      /** Set to `true` if you wish to receive back the created section in the response. */
      itemMetadata?: ItemMetadata$1;
      /** The created section. */
      item?: Section;
  }
  interface ItemMetadata$1 {
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
  interface BulkActionMetadata$1 {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
  }
  interface GetSectionRequest {
      /** ID of the Section to retrieve. */
      sectionId: string;
  }
  interface GetSectionResponse {
      /** The retrieved Section. */
      section?: Section;
  }
  interface ListSectionsRequest {
      /** IDs of the sections to be listed. */
      sectionIds?: string[];
      /** The metadata of the paginated results. */
      paging?: CursorPaging$2;
  }
  interface CursorPaging$2 {
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
  interface ListSectionsResponse {
      /** The retrieved sections. */
      sections?: Section[];
      /** The metadata of the paginated results. */
      pagingMetadata?: CursorPagingMetadata$2;
  }
  interface CursorPagingMetadata$2 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      cursors?: Cursors$2;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors$2 {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface QuerySectionsRequest {
      /** The query by which to select sections. */
      query?: CursorQuery$3;
  }
  interface CursorQuery$3 extends CursorQueryPagingMethodOneOf$3 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$2;
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting$3[];
  }
  /** @oneof */
  interface CursorQueryPagingMethodOneOf$3 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$2;
  }
  interface Sorting$3 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder$3;
  }
  enum SortOrder$3 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface QuerySectionsResponse {
      /** The retrieved sections. */
      sections?: Section[];
      /** The metadata of the paginated results. */
      pagingMetadata?: CursorPagingMetadata$2;
  }
  interface UpdateSectionRequest {
      /** Section to be updated, may be partial. */
      section: Section;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  interface UpdateSectionResponse {
      /** The updated Section. */
      section?: Section;
  }
  interface BulkUpdateSectionRequest {
      /** Sections to be updated. */
      sections: MaskedSection[];
      /** set to `true` if you wish to receive back the created sections in the response. */
      returnEntity?: boolean;
  }
  interface MaskedSection {
      /** Section to be updated, may be partial. */
      section?: Section;
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  interface BulkUpdateSectionResponse {
      /** Results of bulk sections update. */
      results?: BulkSectionResult[];
      /** Information about successful action or error for failure. */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface BulkSectionResult {
      /** set to `true` if you wish to receive back the updated sections in the response. */
      sectionMetadata?: ItemMetadata$1;
      /** Only exists if `returnEntity` was set to true in the request. */
      section?: Section;
  }
  interface DeleteSectionRequest {
      /** ID of the Section to delete. */
      sectionId: string;
  }
  interface DeleteSectionResponse {
  }
  interface BulkDeleteSectionsRequest {
      /** IDs of the sections to be listed. */
      ids: string[];
  }
  interface BulkDeleteSectionsResponse {
      /** Results of bulk sections delete. */
      results?: BulkDeleteSectionResult[];
      /** Information about successful action or error for failure. */
      bulkActionMetadata?: BulkActionMetadata$1;
  }
  interface BulkDeleteSectionResult {
      /** Information about successful action or error for failure. */
      itemMetadata?: ItemMetadata$1;
  }
  interface CloneSectionsRequest {
      /** The MetaSiteId to clone from. */
      metaSiteId: string;
  }
  interface CloneSectionsResponse {
  }
  interface DomainEvent$2 extends DomainEventBodyOneOf$2 {
      createdEvent?: EntityCreatedEvent$2;
      updatedEvent?: EntityUpdatedEvent$2;
      deletedEvent?: EntityDeletedEvent$2;
      actionEvent?: ActionEvent$2;
      /**
       * Unique event ID.
       * Allows clients to ignore duplicate webhooks.
       */
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
      /** ID of the entity associated with the event. */
      entityId?: string;
      /** Event timestamp. */
      eventTime?: Date;
      /**
       * Whether the event was triggered as a result of a privacy regulation application
       * (for example, GDPR).
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
  }
  /** @oneof */
  interface DomainEventBodyOneOf$2 {
      createdEvent?: EntityCreatedEvent$2;
      updatedEvent?: EntityUpdatedEvent$2;
      deletedEvent?: EntityDeletedEvent$2;
      actionEvent?: ActionEvent$2;
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
      /**
       * WIP - This property will hold both names and values of the updated fields of the entity.
       * For more details please see [adr](https://docs.google.com/document/d/1PdqsOM20Ph2HAkmx8zvUnzzk3Sekp3BR9h34wSvsRnI/edit#heading=h.phlw87mh2imx) or [issue](https://github.com/wix-private/nile-tracker/issues/363)
       * @internal
       */
      modifiedFields?: Record<string, any>;
  }
  interface EntityDeletedEvent$2 {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
      /** Entity that was deleted */
      deletedEntityAsJson?: string | null;
  }
  interface ActionEvent$2 {
      bodyAsJson?: string;
  }
  interface Empty$2 {
  }
  /**
   * Creates a new Section.
   * @param section - Section to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField section
   * @adminMethod
   * @returns The created Section.
   */
  function createSection(section: Section): Promise<Section>;
  /**
   * Bulk create new Sections.
   * @param sections - Sections to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField sections
   * @adminMethod
   */
  function bulkCreateSections(sections: Section[], options?: BulkCreateSectionsOptions): Promise<BulkCreateSectionsResponse>;
  interface BulkCreateSectionsOptions {
      /** Set to `true` if you wish to receive back the created sections in the response. */
      returnEntity?: boolean;
  }
  /**
   * Get a Section by id.
   * @param sectionId - ID of the Section to retrieve.
   * @internal
   * @documentationMaturity preview
   * @requiredField sectionId
   * @returns The retrieved Section.
   */
  function getSection(sectionId: string): Promise<Section>;
  /**
   * Retrieves a list of sections.
   *
   * Up to 500 sections can be returned.
   * @internal
   * @documentationMaturity preview
   */
  function listSections(options?: ListSectionsOptions): Promise<ListSectionsResponse>;
  interface ListSectionsOptions {
      /** IDs of the sections to be listed. */
      sectionIds?: string[];
      /** The metadata of the paginated results. */
      paging?: CursorPaging$2;
  }
  /**
   * Retrieves a list of sections by a given query.
   *
   * To learn how to query sections, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
   *
   * Up to 500 sections can be returned per request.
   * @internal
   * @documentationMaturity preview
   */
  function querySections(): SectionsQueryBuilder;
  interface QueryCursorResult$3 {
      cursors: Cursors$2;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface SectionsQueryResult extends QueryCursorResult$3 {
      items: Section[];
      query: SectionsQueryBuilder;
      next: () => Promise<SectionsQueryResult>;
      prev: () => Promise<SectionsQueryResult>;
  }
  interface SectionsQueryBuilder {
      /** @documentationMaturity preview */
      in: (propertyName: 'itemIds', value: any) => SectionsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => SectionsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => SectionsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<SectionsQueryResult>;
  }
  /**
   * Update a Section, supports partial update.
   *
   * Each time a section is updated, revision increments by 1. The existing revision must be included when updating a section. This ensures you're working with the latest section information, and it prevents unintended overwrites.
   * @param _id - Section ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField section
   * @requiredField section.revision
   * @adminMethod
   * @returns The updated Section.
   */
  function updateSection(_id: string | null, section: UpdateSection, options?: UpdateSectionOptions): Promise<Section>;
  interface UpdateSection {
      /**
       * Section ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * Represents the current state of a section. Each time the section is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Represents the time this Section was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Section was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Section name. */
      name?: string;
      /** Section description. */
      description?: string | null;
      /** Section primary image. */
      image?: string;
      /** Section additional images. */
      additionalImages?: string[];
      /** Item ids. */
      itemIds?: string[];
  }
  interface UpdateSectionOptions {
      /**
       * Explicit list of fields to update.
       * @internal
       */
      mask?: string[];
  }
  /**
   * Bulk update a Section, supports partial update.
   *
   * Each time a section is updated, revision increments by 1. The existing revision must be included when updating a section. This ensures you're working with the latest section information, and it prevents unintended overwrites.
   * @param sections - Sections to be updated.
   * @internal
   * @documentationMaturity preview
   * @requiredField sections
   * @requiredField sections.section._id
   * @requiredField sections.section.revision
   * @adminMethod
   */
  function bulkUpdateSection(sections: MaskedSection[], options?: BulkUpdateSectionOptions): Promise<BulkUpdateSectionResponse>;
  interface BulkUpdateSectionOptions {
      /** set to `true` if you wish to receive back the created sections in the response. */
      returnEntity?: boolean;
  }
  /**
   * Delete a Section.
   * @param sectionId - ID of the Section to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField sectionId
   * @adminMethod
   */
  function deleteSection(sectionId: string): Promise<void>;
  /**
   * Bulk delete Sections.
   * @param ids - IDs of the sections to be listed.
   * @internal
   * @documentationMaturity preview
   * @requiredField ids
   * @adminMethod
   */
  function bulkDeleteSections(ids: string[]): Promise<BulkDeleteSectionsResponse>;
  /**
   * Clone sections from a different metasite
   * @param metaSiteId - The MetaSiteId to clone from.
   * @internal
   * @documentationMaturity preview
   * @requiredField metaSiteId
   * @adminMethod
   */
  function cloneSections(metaSiteId: string): Promise<void>;
  
  type restaurantsMenusV1Section_universal_d_Section = Section;
  type restaurantsMenusV1Section_universal_d_CreateSectionRequest = CreateSectionRequest;
  type restaurantsMenusV1Section_universal_d_CreateSectionResponse = CreateSectionResponse;
  type restaurantsMenusV1Section_universal_d_BulkCreateSectionsRequest = BulkCreateSectionsRequest;
  type restaurantsMenusV1Section_universal_d_BulkCreateSectionsResponse = BulkCreateSectionsResponse;
  type restaurantsMenusV1Section_universal_d_BulkCreateSectionResult = BulkCreateSectionResult;
  type restaurantsMenusV1Section_universal_d_GetSectionRequest = GetSectionRequest;
  type restaurantsMenusV1Section_universal_d_GetSectionResponse = GetSectionResponse;
  type restaurantsMenusV1Section_universal_d_ListSectionsRequest = ListSectionsRequest;
  type restaurantsMenusV1Section_universal_d_ListSectionsResponse = ListSectionsResponse;
  type restaurantsMenusV1Section_universal_d_QuerySectionsRequest = QuerySectionsRequest;
  type restaurantsMenusV1Section_universal_d_QuerySectionsResponse = QuerySectionsResponse;
  type restaurantsMenusV1Section_universal_d_UpdateSectionRequest = UpdateSectionRequest;
  type restaurantsMenusV1Section_universal_d_UpdateSectionResponse = UpdateSectionResponse;
  type restaurantsMenusV1Section_universal_d_BulkUpdateSectionRequest = BulkUpdateSectionRequest;
  type restaurantsMenusV1Section_universal_d_MaskedSection = MaskedSection;
  type restaurantsMenusV1Section_universal_d_BulkUpdateSectionResponse = BulkUpdateSectionResponse;
  type restaurantsMenusV1Section_universal_d_BulkSectionResult = BulkSectionResult;
  type restaurantsMenusV1Section_universal_d_DeleteSectionRequest = DeleteSectionRequest;
  type restaurantsMenusV1Section_universal_d_DeleteSectionResponse = DeleteSectionResponse;
  type restaurantsMenusV1Section_universal_d_BulkDeleteSectionsRequest = BulkDeleteSectionsRequest;
  type restaurantsMenusV1Section_universal_d_BulkDeleteSectionsResponse = BulkDeleteSectionsResponse;
  type restaurantsMenusV1Section_universal_d_BulkDeleteSectionResult = BulkDeleteSectionResult;
  type restaurantsMenusV1Section_universal_d_CloneSectionsRequest = CloneSectionsRequest;
  type restaurantsMenusV1Section_universal_d_CloneSectionsResponse = CloneSectionsResponse;
  const restaurantsMenusV1Section_universal_d_createSection: typeof createSection;
  const restaurantsMenusV1Section_universal_d_bulkCreateSections: typeof bulkCreateSections;
  type restaurantsMenusV1Section_universal_d_BulkCreateSectionsOptions = BulkCreateSectionsOptions;
  const restaurantsMenusV1Section_universal_d_getSection: typeof getSection;
  const restaurantsMenusV1Section_universal_d_listSections: typeof listSections;
  type restaurantsMenusV1Section_universal_d_ListSectionsOptions = ListSectionsOptions;
  const restaurantsMenusV1Section_universal_d_querySections: typeof querySections;
  type restaurantsMenusV1Section_universal_d_SectionsQueryResult = SectionsQueryResult;
  type restaurantsMenusV1Section_universal_d_SectionsQueryBuilder = SectionsQueryBuilder;
  const restaurantsMenusV1Section_universal_d_updateSection: typeof updateSection;
  type restaurantsMenusV1Section_universal_d_UpdateSection = UpdateSection;
  type restaurantsMenusV1Section_universal_d_UpdateSectionOptions = UpdateSectionOptions;
  const restaurantsMenusV1Section_universal_d_bulkUpdateSection: typeof bulkUpdateSection;
  type restaurantsMenusV1Section_universal_d_BulkUpdateSectionOptions = BulkUpdateSectionOptions;
  const restaurantsMenusV1Section_universal_d_deleteSection: typeof deleteSection;
  const restaurantsMenusV1Section_universal_d_bulkDeleteSections: typeof bulkDeleteSections;
  const restaurantsMenusV1Section_universal_d_cloneSections: typeof cloneSections;
  namespace restaurantsMenusV1Section_universal_d {
    export {
      __debug$3 as __debug,
      restaurantsMenusV1Section_universal_d_Section as Section,
      InvalidateCache$2 as InvalidateCache,
      InvalidateCacheGetByOneOf$2 as InvalidateCacheGetByOneOf,
      App$2 as App,
      Page$2 as Page,
      URI$2 as URI,
      restaurantsMenusV1Section_universal_d_CreateSectionRequest as CreateSectionRequest,
      restaurantsMenusV1Section_universal_d_CreateSectionResponse as CreateSectionResponse,
      restaurantsMenusV1Section_universal_d_BulkCreateSectionsRequest as BulkCreateSectionsRequest,
      restaurantsMenusV1Section_universal_d_BulkCreateSectionsResponse as BulkCreateSectionsResponse,
      restaurantsMenusV1Section_universal_d_BulkCreateSectionResult as BulkCreateSectionResult,
      ItemMetadata$1 as ItemMetadata,
      ApplicationError$1 as ApplicationError,
      BulkActionMetadata$1 as BulkActionMetadata,
      restaurantsMenusV1Section_universal_d_GetSectionRequest as GetSectionRequest,
      restaurantsMenusV1Section_universal_d_GetSectionResponse as GetSectionResponse,
      restaurantsMenusV1Section_universal_d_ListSectionsRequest as ListSectionsRequest,
      CursorPaging$2 as CursorPaging,
      restaurantsMenusV1Section_universal_d_ListSectionsResponse as ListSectionsResponse,
      CursorPagingMetadata$2 as CursorPagingMetadata,
      Cursors$2 as Cursors,
      restaurantsMenusV1Section_universal_d_QuerySectionsRequest as QuerySectionsRequest,
      CursorQuery$3 as CursorQuery,
      CursorQueryPagingMethodOneOf$3 as CursorQueryPagingMethodOneOf,
      Sorting$3 as Sorting,
      SortOrder$3 as SortOrder,
      restaurantsMenusV1Section_universal_d_QuerySectionsResponse as QuerySectionsResponse,
      restaurantsMenusV1Section_universal_d_UpdateSectionRequest as UpdateSectionRequest,
      restaurantsMenusV1Section_universal_d_UpdateSectionResponse as UpdateSectionResponse,
      restaurantsMenusV1Section_universal_d_BulkUpdateSectionRequest as BulkUpdateSectionRequest,
      restaurantsMenusV1Section_universal_d_MaskedSection as MaskedSection,
      restaurantsMenusV1Section_universal_d_BulkUpdateSectionResponse as BulkUpdateSectionResponse,
      restaurantsMenusV1Section_universal_d_BulkSectionResult as BulkSectionResult,
      restaurantsMenusV1Section_universal_d_DeleteSectionRequest as DeleteSectionRequest,
      restaurantsMenusV1Section_universal_d_DeleteSectionResponse as DeleteSectionResponse,
      restaurantsMenusV1Section_universal_d_BulkDeleteSectionsRequest as BulkDeleteSectionsRequest,
      restaurantsMenusV1Section_universal_d_BulkDeleteSectionsResponse as BulkDeleteSectionsResponse,
      restaurantsMenusV1Section_universal_d_BulkDeleteSectionResult as BulkDeleteSectionResult,
      restaurantsMenusV1Section_universal_d_CloneSectionsRequest as CloneSectionsRequest,
      restaurantsMenusV1Section_universal_d_CloneSectionsResponse as CloneSectionsResponse,
      DomainEvent$2 as DomainEvent,
      DomainEventBodyOneOf$2 as DomainEventBodyOneOf,
      EntityCreatedEvent$2 as EntityCreatedEvent,
      EntityUpdatedEvent$2 as EntityUpdatedEvent,
      EntityDeletedEvent$2 as EntityDeletedEvent,
      ActionEvent$2 as ActionEvent,
      Empty$2 as Empty,
      restaurantsMenusV1Section_universal_d_createSection as createSection,
      restaurantsMenusV1Section_universal_d_bulkCreateSections as bulkCreateSections,
      restaurantsMenusV1Section_universal_d_BulkCreateSectionsOptions as BulkCreateSectionsOptions,
      restaurantsMenusV1Section_universal_d_getSection as getSection,
      restaurantsMenusV1Section_universal_d_listSections as listSections,
      restaurantsMenusV1Section_universal_d_ListSectionsOptions as ListSectionsOptions,
      restaurantsMenusV1Section_universal_d_querySections as querySections,
      restaurantsMenusV1Section_universal_d_SectionsQueryResult as SectionsQueryResult,
      restaurantsMenusV1Section_universal_d_SectionsQueryBuilder as SectionsQueryBuilder,
      restaurantsMenusV1Section_universal_d_updateSection as updateSection,
      restaurantsMenusV1Section_universal_d_UpdateSection as UpdateSection,
      restaurantsMenusV1Section_universal_d_UpdateSectionOptions as UpdateSectionOptions,
      restaurantsMenusV1Section_universal_d_bulkUpdateSection as bulkUpdateSection,
      restaurantsMenusV1Section_universal_d_BulkUpdateSectionOptions as BulkUpdateSectionOptions,
      restaurantsMenusV1Section_universal_d_deleteSection as deleteSection,
      restaurantsMenusV1Section_universal_d_bulkDeleteSections as bulkDeleteSections,
      restaurantsMenusV1Section_universal_d_cloneSections as cloneSections,
    };
  }
  
  const __debug$2: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /**
   * `Operation` is the main entity of `OperationsService`.
   * It represents a restaurant operation and encompasses various aspects of its online ordering.
   */
  interface Operation$1 extends OperationOnlineOrderingStatusOptionsOneOf {
      /** Data related to the `PAUSED_UNTIL` status. */
      pausedUntilOptions?: OnlineOrderingPausedUntilOptions;
      /**
       * The ID of the operation.
       * @readonly
       */
      _id?: string | null;
      /**
       * The current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Timestamp at which the operation was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Timestamp at which the operation was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** The operation name. */
      name?: string | null;
      /** An indication of whether the operation is enabled or not. */
      enabled?: boolean | null;
      /**
       * The scheduling data for this operation.
       * Scheduling specifies the time-related aspects of order placement.
       */
      scheduling?: Scheduling;
      /**
       * The profile ID associated with this operation.
       * TODO: talk with the tech writer to understand how best to document this field..
       */
      profileId?: string | null;
      /** An indication of whether this operation is the default one. */
      default?: boolean | null;
      /** The ids of the fulfillment methods associated with this operation. */
      fulfillmentIds?: string[] | null;
      /** The ids of the service fee rules associated with this operation. */
      serviceFeeRulesIds?: string[] | null;
      /** The online ordering status of this operation. */
      onlineOrderingStatus?: OnlineOrderingStatusType;
      /** The ids of the service fee rules associated with this operation. */
      serviceFeeRuleIds?: string[] | null;
      /** The default fulfillment type of this operation. */
      defaultFulfillmentType?: FulfillmentType;
      /**
       * A list of availability exception.
       * An availability exception is some availability for a specific time, that is different from the usual availability defined in `available_times`. The availability exception overrides the availability defined in `available_times`.
       * For example, a restaurants may decide to disable the availability for a specific time range, or to enable the availability for a specific time range that is not available in the usual availability.
       */
      availabilityExceptions?: V1AvailabilityException[];
      /**
       * The order scheduling data for this operation.
       * Order scheduling specifies the time-related aspects of order placement.
       */
      orderScheduling?: OrderScheduling;
  }
  /** @oneof */
  interface OperationOnlineOrderingStatusOptionsOneOf {
      /** Data related to the `PAUSED_UNTIL` status. */
      pausedUntilOptions?: OnlineOrderingPausedUntilOptions;
  }
  /** Represents the time-related aspects of order placement. */
  interface Scheduling extends SchedulingSchedulingOptionsOneOf {
      /** Data related to the `ASAP` scheduling type. */
      asapOptions?: AsapScheduling;
      /** Data related to the `PREORDER` scheduling type. */
      preorderOptions?: PreorderScheduling;
      /** The scheduling type. */
      type?: SchedulingType;
  }
  /** @oneof */
  interface SchedulingSchedulingOptionsOneOf {
      /** Data related to the `ASAP` scheduling type. */
      asapOptions?: AsapScheduling;
      /** Data related to the `PREORDER` scheduling type. */
      preorderOptions?: PreorderScheduling;
  }
  /** Scheduling type enum. */
  enum SchedulingType {
      /** Unknown scheduling type. */
      UNKNOWN_SCHEDULING = "UNKNOWN_SCHEDULING",
      /**
       * Asap scheduling type.
       * Refers to scheduling orders for as soon as possible handling or for a future time.
       */
      ASAP = "ASAP",
      /**
       * Preorder scheduling type.
       * Refers to scheduling orders for a future time only.
       */
      PREORDER = "PREORDER"
  }
  /** Data related to `ASAP` scheduling type. */
  interface AsapScheduling extends AsapSchedulingPreparationTimeOneOf, AsapSchedulingAsapPreorderOneOf {
      /**
       * Data related to the `MAX` preparation time type.
       * The preparation time is bounded by a maximum time duration.
       */
      maxOptions?: TimeDuration;
      /**
       * Data related to the `RANGE` preparation time type.
       * The preparation time is bounded by a range of time durations.
       */
      rangeOptions?: TimeDurationRange;
      /** Data related to the `BUSINESS_DAYS_PREORDER` asap preorder type. */
      businessDaysPreorderOptions?: BusinessDaysPreorder;
      /** The type of the preparation time. */
      type?: PreparationTimeType;
      /** An indication of whether it is possible to place an order for a later time on the same day. */
      allowSameDayPreorder?: boolean | null;
      /** The type of preorder allowed for the ASAP scheduling. */
      asapPreorderType?: AsapPreorderType;
  }
  /** @oneof */
  interface AsapSchedulingPreparationTimeOneOf {
      /**
       * Data related to the `MAX` preparation time type.
       * The preparation time is bounded by a maximum time duration.
       */
      maxOptions?: TimeDuration;
      /**
       * Data related to the `RANGE` preparation time type.
       * The preparation time is bounded by a range of time durations.
       */
      rangeOptions?: TimeDurationRange;
  }
  /** @oneof */
  interface AsapSchedulingAsapPreorderOneOf {
      /** Data related to the `BUSINESS_DAYS_PREORDER` asap preorder type. */
      businessDaysPreorderOptions?: BusinessDaysPreorder;
  }
  /** Preparation time type enum. */
  enum PreparationTimeType {
      /** Unknown preparation time type. */
      UNKNOWN_PREPARATION_TIME = "UNKNOWN_PREPARATION_TIME",
      /**
       * Max preparation time type.
       * Refers to a preparation time that is bounded by a maximum time.
       */
      MAX = "MAX",
      /**
       * Range preparation time type.
       * Refers to a preparation time that is bounded by a range of times.
       */
      RANGE = "RANGE"
  }
  /** Represents a time duration. */
  interface TimeDuration {
      /** The time unit for the duration. */
      timeUnit?: TimeUnit;
      /**
       * The duration value.
       * Specified in the unit given in the `time_unit` field.
       */
      duration?: number | null;
  }
  /** Time unit enum. */
  enum TimeUnit {
      /** Unknown time unit. */
      UNKNOWN_TIME_UNIT = "UNKNOWN_TIME_UNIT",
      /** Minutes time unit. */
      MINUTES = "MINUTES",
      /** Hours time unit. */
      HOURS = "HOURS",
      /** Days time unit. */
      DAYS = "DAYS"
  }
  /** Represents a time duration range. */
  interface TimeDurationRange {
      /** The time unit for the duration range. */
      timeUnit?: TimeUnit;
      /** Starting time value for the scheduling option. */
      rangeMinimumDuration?: number | null;
      /** Ending time value for the scheduling option. */
      rangeMaximumDuration?: number | null;
      /**
       * The minimum duration value for the duration range.
       * Specified in the unit given in the `time_unit` field.
       */
      minDuration?: number | null;
      /**
       * The maximum duration value for the duration range.
       * Specified in the unit given in the `time_unit` field.
       */
      maxDuration?: number | null;
  }
  /** Asap preorder type enum. */
  enum AsapPreorderType {
      /** Unknown asap preorder type. */
      UNKNOWN_ASAP_PREORDER = "UNKNOWN_ASAP_PREORDER",
      /**
       * No preorder type.
       * Refers to not allowing to preorder.
       */
      NO_PREORDER = "NO_PREORDER",
      /**
       * Business days preorder type.
       * Refers to allowing to preorder for a maximum number of business days in advance.
       */
      BUSINESS_DAYS_PREORDER = "BUSINESS_DAYS_PREORDER"
  }
  /** Represents data related to the `BUSINESS_DAYS_PREORDER` asap preorder type. */
  interface BusinessDaysPreorder {
      /**
       * The maximum number of business days in advance an order can be scheduled.
       * When the given value is 0, it means that an order can be scheduled until the end of the current business day.
       * for any other value, the order can be scheduled until the end of the given number of business days.
       */
      businessDays?: number | null;
  }
  /** Data related to `PREORDER` scheduling type. */
  interface PreorderScheduling {
      /** The preorder method is the way by which preorders can be made. */
      method?: PreorderMethod;
      /** Configuration of how the fulfillment times should be displayed. */
      fulfillmentTimesDisplayConfig?: FulfillmentTimesDisplayConfig;
      /** Configuration of how the fulfillment times should be displayed. */
      fulfillmentTimesDisplay?: FulfillmentTimesDisplayConfig;
  }
  /** Represents the preorder method for `PREORDER` scheduling type. */
  interface PreorderMethod extends PreorderMethodMethodOptionsOneOf {
      /** Data related to the `TIME_BOUNDED` method type. */
      timeBoundedOptions?: TimeBounded;
      /** Data related to the `WEEKLY_SCHEDULE` method type. */
      weeklyScheduleOptions?: WeeklySchedule;
      /**
       * The type of preorder method.
       * Represents the way by which the preorders can be made.
       */
      type?: MethodType;
  }
  /** @oneof */
  interface PreorderMethodMethodOptionsOneOf {
      /** Data related to the `TIME_BOUNDED` method type. */
      timeBoundedOptions?: TimeBounded;
      /** Data related to the `WEEKLY_SCHEDULE` method type. */
      weeklyScheduleOptions?: WeeklySchedule;
  }
  /** Represents a day of week and a time of day. */
  interface DayAndTime {
      /** The day of week. */
      dayOfWeek?: EntitiesDayOfWeek$1;
      /** The time of day. */
      timeOfDay?: TimeOfDay$1;
  }
  enum EntitiesDayOfWeek$1 {
      /** Monday. */
      MON = "MON",
      /** Tuesday. */
      TUE = "TUE",
      /** Wednesday. */
      WED = "WED",
      /** Thursday. */
      THU = "THU",
      /** Friday. */
      FRI = "FRI",
      /** Saturday. */
      SAT = "SAT",
      /** Sunday. */
      SUN = "SUN"
  }
  interface TimeOfDay$1 {
      /** Hours (0-23) */
      hours?: number;
      /** Minutes (0-59) */
      minutes?: number;
  }
  /** The preorder method type enum. */
  enum MethodType {
      /** Unknown preorder method type. */
      UNKNOWN_TYPE = "UNKNOWN_TYPE",
      /**
       * Time bounded preorder method type.
       * Refers to allowing to preorder for a time bounded by a minimum and maximum time in advance.
       */
      TIME_BOUNDED = "TIME_BOUNDED",
      /**
       * Weekly schedule preorder method type.
       * Refers to allowing to preorder by a weekly schedule given a cutoff time.
       */
      WEEKLY_SCHEDULE = "WEEKLY_SCHEDULE"
  }
  /** Represents data related to `TIME_BOUNDED` preorder method type. */
  interface TimeBounded {
      /** The minimum advance time required for scheduling the order. */
      minimumInAdvanceTime?: TimeDuration;
      /** The maximum advance time allowed for scheduling the order. */
      maximumInAdvanceTime?: TimeDuration;
      /** The minimum advance time required for scheduling the order. */
      minTimeInAdvance?: TimeDuration;
      /** The maximum advance time allowed for scheduling the order. */
      maxTimeInAdvance?: TimeDuration;
  }
  /** Represents data related to `WEEKLY_SCHEDULE` preorder method type. */
  interface WeeklySchedule {
      /**
       * The weekly schedule cutoff time.
       * Orders placed before the cutoff time will be scheduled for the current week.
       * Orders placed after the cutoff time will be scheduled for the next week.
       */
      cutOffTime?: DayAndTime;
  }
  /** Represents the way by which the fulfillment times should be displayed. */
  interface FulfillmentTimesDisplayConfig extends FulfillmentTimesDisplayConfigFulfillmentTimesDisplayOptionsOneOf {
      /** Data related to the `TIME_WINDOWS` fulfillment times type. */
      timeWindowsOptions?: TimeDuration;
      /** The type of the fulfillment times. */
      fulfillmentTimesType?: FulfillmentTimesType;
      /** The type of the fulfillment times. */
      type?: FulfillmentTimesType;
  }
  /** @oneof */
  interface FulfillmentTimesDisplayConfigFulfillmentTimesDisplayOptionsOneOf {
      /** Data related to the `TIME_WINDOWS` fulfillment times type. */
      timeWindowsOptions?: TimeDuration;
  }
  /** The fulfillment times type enum. */
  enum FulfillmentTimesType {
      /** Unknown fulfillment times type. */
      UNKNOWN_TYPE = "UNKNOWN_TYPE",
      /**
       * Time windows fulfillment times type.
       * Refers to displaying fulfillment times as time windows.
       */
      TIME_WINDOWS = "TIME_WINDOWS"
  }
  /** Online ordering status enum. */
  enum OnlineOrderingStatusType {
      /** Online ordering status is undefined. */
      UNDEFINED_ONLINE_ORDERING_STATUS = "UNDEFINED_ONLINE_ORDERING_STATUS",
      /** Online ordering is enabled. */
      ENABLED = "ENABLED",
      /** Online ordering is disabled. */
      DISABLED = "DISABLED",
      /** Online ordering is paused until some timestamp. */
      PAUSED_UNTIL = "PAUSED_UNTIL"
  }
  /** Data related to the `PAUSED_UNTIL` status in the `online_ordering_status` field. */
  interface OnlineOrderingPausedUntilOptions {
      /** Timestamp until which online ordering is paused. */
      onlineOrderingPausedUntil?: Date;
  }
  /** The fulfillment type enum. */
  enum FulfillmentType {
      /** Undefined fulfillment type. */
      UNDEFINED_FULFILLMENT_TYPE = "UNDEFINED_FULFILLMENT_TYPE",
      /** Pickup fulfillment. */
      PICKUP = "PICKUP",
      /** Delivery fulfillment. */
      DELIVERY = "DELIVERY"
  }
  /** The availability exceptions for an operation. */
  interface V1AvailabilityException {
      /** The start time of the availability exception. */
      startTime?: Date;
      /** The end time of the availability exception. */
      endTime?: Date;
      /**
       * An indication whether the exception makes the [`start_time`, `end_time`] range available.
       * If `true`, the exception makes the range available. If `false`, the exception makes the range unavailable.
       * Currently, only `false` is supported.
       */
      available?: boolean | null;
      /** The reason for the exception. */
      reason?: string | null;
      /** The fulfillment methods for which this exception is relevant. */
      affectedFulfillmentMethods?: AffectedFulfillmentMethods;
  }
  interface AffectedFulfillmentMethods extends AffectedFulfillmentMethodsImpactScopeOptionsOneOf {
      /** The fulfillment methods for which this exception is relevant. */
      specificFulfillmentMethodsOptions?: SpecificFulfillmentMethodsImpactScope;
      /** The type of the fulfillment methods for which this exception is relevant. */
      impactScope?: ImpactScope;
  }
  /** @oneof */
  interface AffectedFulfillmentMethodsImpactScopeOptionsOneOf {
      /** The fulfillment methods for which this exception is relevant. */
      specificFulfillmentMethodsOptions?: SpecificFulfillmentMethodsImpactScope;
  }
  /** The scope the exception applied. */
  enum ImpactScope {
      /** All the fulfillment methods of this operations applied for this exception. */
      ALL_FULFILLMENT_METHODS = "ALL_FULFILLMENT_METHODS",
      /** Specifics fulfillment methods applied for this exception. */
      SPECIFIC_FULFILLMENT_METHODS = "SPECIFIC_FULFILLMENT_METHODS"
  }
  /** The options for specific fulfillment methods of the exception. */
  interface SpecificFulfillmentMethodsImpactScope {
      /** The fulfillment methods for which this exception is relevant. */
      fulfillmentMethodIds?: string[] | null;
  }
  /** Represents the time-related aspects of order placement. */
  interface OrderScheduling extends OrderSchedulingOrderSchedulingOptionsOneOf {
      /** Data related to the `ASAP` order scheduling type. */
      asapOptions?: AsapOrderScheduling;
      /** Data related to the `PREORDER` order scheduling type. */
      preorderOptions?: PreorderScheduling;
      /** The type of the order scheduling. */
      type?: SchedulingType;
  }
  /** @oneof */
  interface OrderSchedulingOrderSchedulingOptionsOneOf {
      /** Data related to the `ASAP` order scheduling type. */
      asapOptions?: AsapOrderScheduling;
      /** Data related to the `PREORDER` order scheduling type. */
      preorderOptions?: PreorderScheduling;
  }
  interface AsapOrderScheduling extends AsapOrderSchedulingAsapFutureHandlingOptionsOneOf {
      /** Data related to the `BUSINESS_DAYS_AHEAD_HANDLING` asap future handling type. */
      businessDaysAheadHandlingOptions?: BusinessDaysAheadHandling;
      /** The preparation time. */
      preparationTime?: PreparationTime;
      /** The type of the future handling. */
      asapFutureHandlingType?: AsapFutureHandlingType;
  }
  /** @oneof */
  interface AsapOrderSchedulingAsapFutureHandlingOptionsOneOf {
      /** Data related to the `BUSINESS_DAYS_AHEAD_HANDLING` asap future handling type. */
      businessDaysAheadHandlingOptions?: BusinessDaysAheadHandling;
  }
  interface PreparationTime extends PreparationTimeTimeSpecificationOneOf {
      /** The preparation time is bounded by a maximum time duration. */
      maxTimeOptions?: TimeDuration;
      /** The preparation time is bounded by a range of time durations. */
      timeRangeOptions?: TimeDurationRange;
      /** The preparation time type. */
      type?: PreparationTimePreparationTimeType;
  }
  /** @oneof */
  interface PreparationTimeTimeSpecificationOneOf {
      /** The preparation time is bounded by a maximum time duration. */
      maxTimeOptions?: TimeDuration;
      /** The preparation time is bounded by a range of time durations. */
      timeRangeOptions?: TimeDurationRange;
  }
  /** Preparation time type enum. */
  enum PreparationTimePreparationTimeType {
      /** Unknown preparation time type. */
      UNKNOWN_PREPARATION_TIME = "UNKNOWN_PREPARATION_TIME",
      /**
       * Max preparation time type.
       * Refers to a preparation time that is bounded by a maximum time.
       */
      MAX_TIME = "MAX_TIME",
      /**
       * Range preparation time type.
       * Refers to a preparation time that is bounded by a range of times.
       */
      TIME_RANGE = "TIME_RANGE"
  }
  enum AsapFutureHandlingType {
      /** Unknown asap future handling type. */
      UNKNOWN_ASAP_FUTURE_HANDLING = "UNKNOWN_ASAP_FUTURE_HANDLING",
      /** No future handling. */
      NO_FUTURE_HANDLING = "NO_FUTURE_HANDLING",
      /**
       * Business days ahead handling type.
       * Refers to allowing to place an order to some number of business days ahead.
       */
      BUSINESS_DAYS_AHEAD_HANDLING = "BUSINESS_DAYS_AHEAD_HANDLING"
  }
  interface BusinessDaysAheadHandling {
      /**
       * The number of business days ahead that scheduling orders is allowed.
       * Setting the `days_count` to 0 means that order scheduling is allowed until the end of the current business day.
       */
      daysCount?: number | null;
  }
  interface InvalidateCache$1 extends InvalidateCacheGetByOneOf$1 {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App$1;
      /** Invalidate by page id */
      page?: Page$1;
      /** Invalidate by URI path */
      uri?: URI$1;
      /** tell us why you're invalidating the cache. You don't need to add your app name */
      reason?: string | null;
      /** Is local DS */
      localDc?: boolean;
  }
  /** @oneof */
  interface InvalidateCacheGetByOneOf$1 {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App$1;
      /** Invalidate by page id */
      page?: Page$1;
      /** Invalidate by URI path */
      uri?: URI$1;
  }
  interface App$1 {
      /** The AppDefId */
      appDefId?: string;
      /** The instance Id */
      instanceId?: string;
  }
  interface Page$1 {
      /** the msid the page is on */
      metaSiteId?: string;
      /** Invalidate by Page ID */
      pageId?: string;
  }
  interface URI$1 {
      /** the msid the URI is on */
      metaSiteId?: string;
      /** URI path to invalidate (e.g. page/my/path) - without leading/trailing slashes */
      uriPath?: string;
  }
  interface CreateOperationRequest {
      /** Operation to create. */
      operation: Operation$1;
  }
  interface CreateOperationResponse {
      /** The created operation. */
      operation?: Operation$1;
  }
  interface GetOperationRequest {
      /** The ID of the operation to retrieve. */
      operationId: string;
  }
  interface GetOperationResponse {
      /** The retrieved operation. */
      operation?: Operation$1;
  }
  interface UpdateOperationRequest {
      /**
       * Operation to update.
       * The operation update may be partial with the use of `field_mask`.
       */
      operation: Operation$1;
      /**
       * Field mask of the fields to update.
       * @internal
       */
      mask?: string[];
  }
  interface UpdateOperationResponse {
      /** The updated operation. */
      operation?: Operation$1;
  }
  interface DeleteOperationRequest {
      /** The ID of the operation to delete. */
      operationId: string;
  }
  interface DeleteOperationResponse {
  }
  interface QueryOperationRequest {
      /** The query by which to select operations. */
      query: CursorQuery$2;
  }
  interface CursorQuery$2 extends CursorQueryPagingMethodOneOf$2 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$1;
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting$2[];
  }
  /** @oneof */
  interface CursorQueryPagingMethodOneOf$2 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging$1;
  }
  interface Sorting$2 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder$2;
  }
  enum SortOrder$2 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface CursorPaging$1 {
      /** Maximum number of items to return in the results. */
      limit?: number | null;
      /**
       * Pointer to the next or previous page in the list of results.
       *
       * Pass the relevant cursor token from the `pagingMetadata` object in the previous call's response.
       * Not relevant for the first request.
       */
      cursor?: string | null;
  }
  interface QueryOperationResponse {
      /** The retrieved operations. */
      operations?: Operation$1[];
      /** The metadata of the paginated results. */
      pagingMetadata?: CursorPagingMetadata$1;
  }
  interface CursorPagingMetadata$1 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Cursor strings that point to the next page, previous page, or both. */
      cursors?: Cursors$1;
      /**
       * Whether there are more pages to retrieve following the current page.
       *
       * + `true`: Another page of results can be retrieved.
       * + `false`: This is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors$1 {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface ListOperationsRequest {
  }
  interface ListOperationsResponse {
      /** The retrieved operations. */
      operations?: Operation$1[];
  }
  interface ListAvailableFulfillmentOptionsRequest {
      /**
       * The ID of the operation.
       * The returned fulfillment options will belong to this operation.
       */
      operationId: string;
      /**
       * A delivery address. This parameter is optional.
       * If provided, the returned delivery fulfillment options will be able to deliver to this address.
       */
      deliveryAddress?: CommonAddress$1;
  }
  /** Physical address */
  interface CommonAddress$1 extends CommonAddressStreetOneOf$1 {
      /** Street name and number. */
      streetAddress?: StreetAddress$1;
      /** Main address line, usually street and number as free text. */
      addressLine1?: string | null;
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
      /**
       * A string containing the full address of this location.
       * @internal
       */
      formatted?: string | null;
      /**
       * Coordinates of the physical address.
       * @internal
       */
      location?: AddressLocation$1;
  }
  /** @oneof */
  interface CommonAddressStreetOneOf$1 {
      /** Street name and number. */
      streetAddress?: StreetAddress$1;
      /** Main address line, usually street and number as free text. */
      addressLine?: string | null;
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
  interface ListAvailableFulfillmentOptionsResponse {
      /** An indication of whether pickup fulfillment method is configured for the requested operation. */
      pickupConfigured?: boolean;
      /** An indication of whether delivery fulfillment method is configured for the requested operation. */
      deliveryConfigured?: boolean;
      /** A list of the available fulfillment options. */
      fulfillmentOptions?: FulfillmentOption[];
  }
  /** Represents a fulfillment method that given its availability and the operation's scheduling configurations, is currently available for fulfilling orders. */
  interface FulfillmentOption extends FulfillmentOptionFulfillmentTimeOptionsOneOf, FulfillmentOptionFulfillmentTimesDisplayOptionsOneOf, FulfillmentOptionFulfillmentTypeOptionsOneOf {
      /** The fulfillment time is bounded by a maximum time. */
      maxTimeOptions?: number;
      /** The fulfillment time is bounded by a duration range. */
      durationRangeOptions?: DurationRange;
      /** Data related to the `TIME_WINDOWS` fulfillment times display type. */
      timeWindowsOptions?: TimeWindowDisplayConfig;
      /** Data related  to the `PICKUP` fulfillment type. */
      pickupOptions?: PickupDetails;
      /**
       * The ID of the fulfillment option.
       * This is the ID of the fulfillment method.
       */
      _id?: string | null;
      /** The fulfillment option type. */
      type?: FulfillmentType;
      /** The minimum order price to qualify for using this fulfillment option. */
      minOrderPrice?: string | null;
      /** The fee for using this fulfillment option. */
      fee?: string | null;
      /** The availability of this fulfillment option. */
      availability?: FulfillmentOptionAvailability;
      /**
       * The fulfillment time type.
       * This field will only be relevant to ASAP operations
       */
      fulfillmentTimeType?: FulfillmentTimeType;
      /**
       * The fulfillment times display type.
       * This field will only be relevant to Preorder operations.
       */
      fulfillmentTimesDisplayType?: FulfillmentTimesDisplayType;
      /**
       * Threshold for offering free fulfillment.
       * If order price exceeds this threshold, the given `fee` is waived.
       */
      freeFulfillmentPriceThreshold?: string | null;
      /** The instructions for the fulfillment. */
      instructions?: string | null;
  }
  /** @oneof */
  interface FulfillmentOptionFulfillmentTimeOptionsOneOf {
      /** The fulfillment time is bounded by a maximum time. */
      maxTimeOptions?: number;
      /** The fulfillment time is bounded by a duration range. */
      durationRangeOptions?: DurationRange;
  }
  /** @oneof */
  interface FulfillmentOptionFulfillmentTimesDisplayOptionsOneOf {
      /** Data related to the `TIME_WINDOWS` fulfillment times display type. */
      timeWindowsOptions?: TimeWindowDisplayConfig;
  }
  /** @oneof */
  interface FulfillmentOptionFulfillmentTypeOptionsOneOf {
      /** Data related  to the `PICKUP` fulfillment type. */
      pickupOptions?: PickupDetails;
  }
  /** Represents the availability of the fulfillment option. */
  interface FulfillmentOptionAvailability {
      /** An indication of whether it is possible to submit an order for as soon as possible handling. */
      canSubmitOrderForNow?: boolean;
      /** Timestamp at which the fulfillment option's availability starts. */
      startTime?: Date;
      /** Timestamp at which the fulfillment option's availability ends. */
      endTime?: Date;
      /**
       * A list of availability times for the days of the week.
       * All the given times will be within the range defined by [`start_time`, `end_time`].
       */
      availableTimes?: DayOfWeekAvailability$1[];
      /**
       * A list of availability exception.
       * An availability exception is some availability for a specific time, that is different from the usual availability defined in `available_times`.
       * The availability exception overrides the availability defined in `available_times`.
       * All the given times will be within the range defined by [`start_time`, `end_time`].
       */
      exceptions?: AvailabilityException$1[];
      /** The timezone in which the availability times are given. */
      timeZone?: string | null;
      /** An indication of whether it is possible to submit an order for as soon as possible handling. */
      asapHandlingAvailable?: boolean;
  }
  interface DayOfWeekAvailability$1 {
      /** The day of week this availability relates to. */
      dayOfWeek?: EntitiesDayOfWeek$1;
      /** A list of time ranges during which the fulfillment should be available. */
      timeRanges?: TimeOfDayRange$1[];
  }
  interface TimeOfDayRange$1 {
      /** The start time in time of day representation. */
      startTime?: TimeOfDay$1;
      /** The end time in time of day representation. */
      endTime?: TimeOfDay$1;
  }
  interface AvailabilityException$1 {
      /** The start time of the availability exception. */
      startTime?: Date;
      /** The end time of the availability exception. */
      endTime?: Date;
      /** An indication whether the exception makes the [`start_time`, `end_time`] range available. */
      available?: boolean;
      /** The reason for the exception. */
      reason?: string | null;
  }
  /** The fulfillment time type enum. */
  enum FulfillmentTimeType {
      /** Undefined fulfillment time type. */
      UNDEFINED_FULFILLMENT_TIME = "UNDEFINED_FULFILLMENT_TIME",
      /** The fulfillment time is bounded by a maximum time. */
      MAX_TIME = "MAX_TIME",
      /** The fulfillment time is bounded by a range of times. */
      DURATION_RANGE = "DURATION_RANGE"
  }
  /** Represents a duration range. */
  interface DurationRange {
      /** Minimum duration in minutes. */
      minDuration?: number;
      /** Maximum duration in minutes. */
      maxDuration?: number;
  }
  /** The fulfillment times display type enum. */
  enum FulfillmentTimesDisplayType {
      /** Undefined fulfillment times display type. */
      UNDEFINED_FULFILLMENT_TIMES_DISPLAY = "UNDEFINED_FULFILLMENT_TIMES_DISPLAY",
      /** The fulfillment times will be displayed as a list of time windows. */
      TIME_WINDOWS = "TIME_WINDOWS"
  }
  /** Represents a time window. */
  interface TimeWindowDisplayConfig {
      /** The time window duration in minutes. */
      durationInMinutes?: number;
  }
  /** Represents data related to the `PICKUP` fulfillment type. */
  interface PickupDetails {
      /**
       * The pickup address.
       * The address of the restaurant will be used.
       */
      address?: CommonAddress$1;
  }
  interface ListFirstAvailableTimeSlotForFulfillmentTypesRequest {
      /**
       * The ID of the operation.
       * The returned fulfillment options will belong to this operation.
       */
      operationId: string;
      /**
       * A delivery address. This parameter is optional.
       * If provided, the returned delivery fulfillment options will be able to deliver to this address.
       */
      deliveryAddress?: CommonAddress$1;
  }
  interface ListFirstAvailableTimeSlotForFulfillmentTypesResponse {
      /**
       * A list of available time slots for each fulfillment type.
       * Each time slot will be the first available time slot for the given fulfillment type.
       * A fulfillment type of Delivery will only be returned if the delivery address is provided
       */
      timeSlots?: FulfillmentTimeSlot[];
  }
  interface FulfillmentTimeSlot {
      /** The start time of the time slot. */
      startTime?: Date;
      /** The end time of the time slot. */
      endTime?: Date;
      /** The type of the fulfillment. */
      fulfilmentType?: FulfillmentType;
      /** Indication of whether the time slot starts now. */
      startsNow?: boolean;
      /** The details for each fulfillment option of the time slot. */
      fulfillmentDetails?: FulfillmentDetails[];
  }
  /** Details about the fulfillment option */
  interface FulfillmentDetails extends FulfillmentDetailsFulfillmentTimeOptionsOneOf {
      /** The fulfillment time is bounded by a maximum time. */
      maxTimeOptions?: number;
      /** The fulfillment time is bounded by a duration range. */
      durationRangeOptions?: DurationRange;
      /** The fee for using this fulfillment. */
      fee?: string | null;
      /** The minimum order price to qualify for using this fulfillment. */
      minOrderPrice?: string | null;
      /**
       * The fulfillment time type.
       * This field will only be relevant to ASAP operations
       */
      fulfillmentTimeType?: FulfillmentTimeType;
      /**
       * Threshold for offering free fulfillment.
       * If order price exceeds this threshold, the given `fee` is waived.
       */
      freeFulfillmentPriceThreshold?: string | null;
  }
  /** @oneof */
  interface FulfillmentDetailsFulfillmentTimeOptionsOneOf {
      /** The fulfillment time is bounded by a maximum time. */
      maxTimeOptions?: number;
      /** The fulfillment time is bounded by a duration range. */
      durationRangeOptions?: DurationRange;
  }
  interface ListAvailableTimeSlotsForDateRequest {
      /**
       * The ID of the operation.
       * The returned fulfillment options will belong to this operation.
       */
      operationId: string;
      /**
       * A delivery address. This parameter is optional.
       * If provided, the returned delivery fulfillment options will be able to deliver to this address.
       */
      deliveryAddress?: CommonAddress$1;
      /** The date to get the available time slots for. */
      date: _Date;
  }
  interface _Date {
      /** The day of the month. */
      day?: number;
      /** The month of the year. */
      month?: number;
      /** The year of the date. */
      year?: number;
  }
  interface ListAvailableTimeSlotsForDateResponse {
      /** A list of the available time slots in the requested date. */
      timeSlots?: FulfillmentTimeSlot[];
  }
  interface ListAvailableDatesInRangeRequest {
      /**
       * The ID of the operation.
       * The returned fulfillment options will belong to this operation.
       */
      operationId: string;
      /**
       * A delivery address. This parameter is optional.
       * If provided, the returned delivery fulfillment options will be able to deliver to this address.
       */
      deliveryAddress?: CommonAddress$1;
      /** The start date of the range. */
      from: _Date;
      /** The end date of the range. */
      until: _Date;
  }
  interface ListAvailableDatesInRangeResponse {
      /** A list of the available dates in descending order for each fulfillment type. */
      availableDates?: FulfillmentTypeAvailableDates[];
  }
  /** Available dates for a given fulfillment type. */
  interface FulfillmentTypeAvailableDates {
      /** The type of the fulfillment. */
      fulfilmentType?: FulfillmentType;
      /** A list of the available dates in descending order. */
      dates?: _Date[];
  }
  interface GetExpectedFulfillmentSelectionRequest {
      /** The id of the operation. The returned fulfillment will belong to this operation. */
      operationId: string;
      /**
       * A delivery address. This parameter is optional.
       * If provided, the returned delivery fulfillment will be able to deliver to this address.
       */
      deliveryAddress?: CommonAddress$1;
      /** The start time of the time slot. */
      timeslotStartTime?: Date;
      /** The end time of the time slot. */
      timeslotEndTime?: Date;
      /** The type of the fulfillment. */
      fulfilmentType: FulfillmentType;
      /** An indication whether it is possible to submit an order for now. */
      canSubmitOrderForNow?: boolean | null;
  }
  interface GetExpectedFulfillmentSelectionResponse {
      /** The expected fulfilment option to be selected. */
      expectedFulfillmentSelections?: FulfillmentOption[];
  }
  interface DomainEvent$1 extends DomainEventBodyOneOf$1 {
      createdEvent?: EntityCreatedEvent$1;
      updatedEvent?: EntityUpdatedEvent$1;
      deletedEvent?: EntityDeletedEvent$1;
      actionEvent?: ActionEvent$1;
      /**
       * Unique event ID.
       * Allows clients to ignore duplicate webhooks.
       */
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
      /** ID of the entity associated with the event. */
      entityId?: string;
      /** Event timestamp. */
      eventTime?: Date;
      /**
       * Whether the event was triggered as a result of a privacy regulation application
       * (for example, GDPR).
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
  }
  /** @oneof */
  interface DomainEventBodyOneOf$1 {
      createdEvent?: EntityCreatedEvent$1;
      updatedEvent?: EntityUpdatedEvent$1;
      deletedEvent?: EntityDeletedEvent$1;
      actionEvent?: ActionEvent$1;
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
      /**
       * WIP - This property will hold both names and values of the updated fields of the entity.
       * For more details please see [adr](https://docs.google.com/document/d/1PdqsOM20Ph2HAkmx8zvUnzzk3Sekp3BR9h34wSvsRnI/edit#heading=h.phlw87mh2imx) or [issue](https://github.com/wix-private/nile-tracker/issues/363)
       * @internal
       */
      modifiedFields?: Record<string, any>;
  }
  interface EntityDeletedEvent$1 {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
      /** Entity that was deleted */
      deletedEntityAsJson?: string | null;
  }
  interface ActionEvent$1 {
      bodyAsJson?: string;
  }
  interface Empty$1 {
  }
  /** Encapsulates all details written to the Greyhound topic when a site's properties are updated. */
  interface SitePropertiesNotification$1 {
      /** The site ID for which this update notification applies. */
      metasiteId?: string;
      /** The actual update event. */
      event?: SitePropertiesEvent$1;
      /** A convenience set of mappings from the MetaSite ID to its constituent services. */
      translations?: Translation$1[];
      /** Context of the notification */
      changeContext?: ChangeContext$1;
  }
  /** The actual update event for a particular notification. */
  interface SitePropertiesEvent$1 {
      /** Version of the site's properties represented by this update. */
      version?: number;
      /**
       * Set of properties that were updated - corresponds to the fields in "properties".
       * @internal
       */
      fields?: string[];
      /** Updated properties. */
      properties?: Properties$1;
  }
  interface Properties$1 {
      /** Site categories. */
      categories?: Categories$1;
      /** Site locale. */
      locale?: Locale$2;
      /**
       * Site language.
       *
       * Two-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       */
      language?: string | null;
      /**
       * Site currency format used to bill customers.
       *
       * Three-letter currency code in [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format.
       */
      paymentCurrency?: string | null;
      /** Timezone in `America/New_York` format. */
      timeZone?: string | null;
      /** Email address. */
      email?: string | null;
      /** Phone number. */
      phone?: string | null;
      /** Fax number. */
      fax?: string | null;
      /** Address. */
      address?: Address$1;
      /** Site display name. */
      siteDisplayName?: string | null;
      /** Business name. */
      businessName?: string | null;
      /** Path to the site's logo in Wix Media (without Wix Media base URL). */
      logo?: string | null;
      /** Site description. */
      description?: string | null;
      /**
       * Business schedule. Regular and exceptional time periods when the business is open or the service is available.
       *
       * __Note:__ Not supported by Wix Bookings.
       */
      businessSchedule?: BusinessSchedule$1;
      /** Supported languages of a site and the primary language. */
      multilingual?: Multilingual$1;
      /** Cookie policy the site owner defined for their site (before the users interacts with/limits it). */
      consentPolicy?: ConsentPolicy$1;
      /**
       * Supported values: `FITNESS SERVICE`, `RESTAURANT`, `BLOG`, `STORE`, `EVENT`, `UNKNOWN`.
       *
       * Site business type.
       */
      businessConfig?: string | null;
      /** External site url that uses Wix as its headless business solution */
      externalSiteUrl?: string | null;
      /** Track clicks analytics */
      trackClicksAnalytics?: boolean;
  }
  interface Categories$1 {
      /** Primary site category. */
      primary?: string;
      /** Secondary site category. */
      secondary?: string[];
      /** Business Term Id */
      businessTermId?: string | null;
  }
  interface Locale$2 {
      /** Two-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format. */
      languageCode?: string;
      /** Two-letter country code in [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) format. */
      country?: string;
  }
  interface Address$1 {
      /** Street name. */
      street?: string;
      /** City name. */
      city?: string;
      /** Two-letter country code in an [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. */
      country?: string;
      /** State. */
      state?: string;
      /** Zip or postal code. */
      zip?: string;
      /** Extra information to be displayed in the address. */
      hint?: AddressHint$1;
      /** Whether this address represents a physical location. */
      isPhysical?: boolean;
      /** Google-formatted version of this address. */
      googleFormattedAddress?: string;
      /** Street number. */
      streetNumber?: string;
      /** Apartment number. */
      apartmentNumber?: string;
      /** Geographic coordinates of location. */
      coordinates?: GeoCoordinates$1;
  }
  /**
   * Extra information on displayed addresses.
   * This is used for display purposes. Used to add additional data about the address, such as "In the passage".
   * Free text. In addition the user can state where he wants that additional description - before, after, or instead
   * the address string.
   */
  interface AddressHint$1 {
      /** Extra text displayed next to, or instead of, the actual address. */
      text?: string;
      /** Where the extra text should be displayed. */
      placement?: PlacementType$1;
  }
  /** Where the extra text should be displayed: before, after or instead of the actual address. */
  enum PlacementType$1 {
      BEFORE = "BEFORE",
      AFTER = "AFTER",
      REPLACE = "REPLACE"
  }
  /** Geocoordinates for a particular address. */
  interface GeoCoordinates$1 {
      /** Latitude of the location. Must be between -90 and 90. */
      latitude?: number;
      /** Longitude of the location. Must be between -180 and 180. */
      longitude?: number;
  }
  /** Business schedule. Regular and exceptional time periods when the business is open or the service is available. */
  interface BusinessSchedule$1 {
      /** Weekly recurring time periods when the business is regularly open or the service is available. Limited to 100 time periods. */
      periods?: TimePeriod$1[];
      /** Exceptions to the business's regular hours. The business can be open or closed during the exception. */
      specialHourPeriod?: SpecialHourPeriod$1[];
  }
  /** Weekly recurring time periods when the business is regularly open or the service is available. */
  interface TimePeriod$1 {
      /** Day of the week the period starts on. */
      openDay?: DayOfWeek$1;
      /**
       * Time the period starts in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are `00:00` to `24:00`, where `24:00` represents
       * midnight at the end of the specified day.
       */
      openTime?: string;
      /** Day of the week the period ends on. */
      closeDay?: DayOfWeek$1;
      /**
       * Time the period ends in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are `00:00` to `24:00`, where `24:00` represents
       * midnight at the end of the specified day.
       *
       * __Note:__ If `openDay` and `closeDay` specify the same day of the week `closeTime` must be later than `openTime`.
       */
      closeTime?: string;
  }
  /** Enumerates the days of the week. */
  enum DayOfWeek$1 {
      MONDAY = "MONDAY",
      TUESDAY = "TUESDAY",
      WEDNESDAY = "WEDNESDAY",
      THURSDAY = "THURSDAY",
      FRIDAY = "FRIDAY",
      SATURDAY = "SATURDAY",
      SUNDAY = "SUNDAY"
  }
  /** Exception to the business's regular hours. The business can be open or closed during the exception. */
  interface SpecialHourPeriod$1 {
      /** Start date and time of the exception in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format and [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). */
      startDate?: string;
      /** End date and time of the exception in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format and [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). */
      endDate?: string;
      /**
       * Whether the business is closed (or the service is not available) during the exception.
       *
       * Default: `true`.
       */
      isClosed?: boolean;
      /** Additional info about the exception. For example, "We close earlier on New Year's Eve." */
      comment?: string;
  }
  interface Multilingual$1 {
      /** Supported languages list. */
      supportedLanguages?: SupportedLanguage$1[];
      /** Whether to redirect to user language. */
      autoRedirect?: boolean;
  }
  interface SupportedLanguage$1 {
      /** Two-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format. */
      languageCode?: string;
      /** Locale. */
      locale?: Locale$2;
      /** Whether the supported language is the primary language for the site. */
      isPrimary?: boolean;
      /** Language icon. */
      countryCode?: string;
      /** How the language will be resolved. For internal use. */
      resolutionMethod?: ResolutionMethod$1;
  }
  enum ResolutionMethod$1 {
      QUERY_PARAM = "QUERY_PARAM",
      SUBDOMAIN = "SUBDOMAIN",
      SUBDIRECTORY = "SUBDIRECTORY"
  }
  interface ConsentPolicy$1 {
      /** Whether the site uses cookies that are essential to site operation. */
      essential?: boolean | null;
      /** Whether the site uses cookies that affect site performance and other functional measurements. */
      functional?: boolean | null;
      /** Whether the site uses cookies that collect analytics about how the site is used (in order to improve it). */
      analytics?: boolean | null;
      /** Whether the site uses cookies that collect information allowing better customization of the experience for a current visitor. */
      advertising?: boolean | null;
      /** CCPA compliance flag. */
      dataToThirdParty?: boolean | null;
  }
  /** A single mapping from the MetaSite ID to a particular service. */
  interface Translation$1 {
      /** The service type. */
      serviceType?: string;
      /** The application definition ID; this only applies to services of type ThirdPartyApps. */
      appDefId?: string;
      /** The instance ID of the service. */
      instanceId?: string;
  }
  interface ChangeContext$1 extends ChangeContextPayloadOneOf$1 {
      /** Properties were updated. */
      propertiesChange?: PropertiesChange$1;
      /** Default properties were created on site creation. */
      siteCreated?: SiteCreated$1;
      /** Properties were cloned on site cloning. */
      siteCloned?: SiteCloned$1;
  }
  /** @oneof */
  interface ChangeContextPayloadOneOf$1 {
      /** Properties were updated. */
      propertiesChange?: PropertiesChange$1;
      /** Default properties were created on site creation. */
      siteCreated?: SiteCreated$1;
      /** Properties were cloned on site cloning. */
      siteCloned?: SiteCloned$1;
  }
  interface PropertiesChange$1 {
  }
  interface SiteCreated$1 {
      /** Origin template site id. */
      originTemplateId?: string | null;
  }
  interface SiteCloned$1 {
      /** Origin site id. */
      originMetaSiteId?: string;
  }
  /**
   * Creates a new operation.
   * @param operation - Operation to create.
   * @internal
   * @documentationMaturity preview
   * @requiredField operation
   * @adminMethod
   * @returns The created operation.
   */
  function createOperation(operation: Operation$1): Promise<Operation$1>;
  /**
   * Retrieves an operation.
   * @param operationId - The ID of the operation to retrieve.
   * @internal
   * @documentationMaturity preview
   * @requiredField operationId
   * @returns The retrieved operation.
   */
  function getOperation(operationId: string): Promise<Operation$1>;
  /**
   * Updates an operation.
   * Partial updates are supported, except for the scheduling field.
   * Each time the operation is updated, the `revision` increments by 1.
   * The existing `revision` must be included in the request when updating the operation.
   * This ensures you're updating the latest version of the operation and it prevents unintended overwrites.
   * @param _id - The ID of the operation.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField operation
   * @requiredField operation.revision
   * @adminMethod
   * @returns The updated operation.
   */
  function updateOperation(_id: string | null, operation: UpdateOperation, options?: UpdateOperationOptions): Promise<Operation$1>;
  interface UpdateOperation {
      /** Data related to the `PAUSED_UNTIL` status. */
      pausedUntilOptions?: OnlineOrderingPausedUntilOptions;
      /**
       * The ID of the operation.
       * @readonly
       */
      _id?: string | null;
      /**
       * The current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Timestamp at which the operation was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Timestamp at which the operation was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** The operation name. */
      name?: string | null;
      /** An indication of whether the operation is enabled or not. */
      enabled?: boolean | null;
      /**
       * The scheduling data for this operation.
       * Scheduling specifies the time-related aspects of order placement.
       */
      scheduling?: Scheduling;
      /**
       * The profile ID associated with this operation.
       * TODO: talk with the tech writer to understand how best to document this field..
       */
      profileId?: string | null;
      /** An indication of whether this operation is the default one. */
      default?: boolean | null;
      /** The ids of the fulfillment methods associated with this operation. */
      fulfillmentIds?: string[] | null;
      /** The ids of the service fee rules associated with this operation. */
      serviceFeeRulesIds?: string[] | null;
      /** The online ordering status of this operation. */
      onlineOrderingStatus?: OnlineOrderingStatusType;
      /** The ids of the service fee rules associated with this operation. */
      serviceFeeRuleIds?: string[] | null;
      /** The default fulfillment type of this operation. */
      defaultFulfillmentType?: FulfillmentType;
      /**
       * A list of availability exception.
       * An availability exception is some availability for a specific time, that is different from the usual availability defined in `available_times`. The availability exception overrides the availability defined in `available_times`.
       * For example, a restaurants may decide to disable the availability for a specific time range, or to enable the availability for a specific time range that is not available in the usual availability.
       */
      availabilityExceptions?: V1AvailabilityException[];
      /**
       * The order scheduling data for this operation.
       * Order scheduling specifies the time-related aspects of order placement.
       */
      orderScheduling?: OrderScheduling;
  }
  interface UpdateOperationOptions {
      /**
       * Field mask of the fields to update.
       * @internal
       */
      mask?: string[];
  }
  /**
   * Deletes an operation.
   * @param operationId - The ID of the operation to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField operationId
   * @adminMethod
   */
  function deleteOperation(operationId: string): Promise<void>;
  /**
   * Retrieves a list of operations by a given query.
   * To learn how to query operations, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
   * Up to 100 operations can be returned per request.
   * @internal
   * @documentationMaturity preview
   */
  function queryOperation(): OperationsQueryBuilder;
  interface QueryCursorResult$2 {
      cursors: Cursors$1;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface OperationsQueryResult extends QueryCursorResult$2 {
      items: Operation$1[];
      query: OperationsQueryBuilder;
      next: () => Promise<OperationsQueryResult>;
      prev: () => Promise<OperationsQueryResult>;
  }
  interface OperationsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id', value: any) => OperationsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id', value: any) => OperationsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: '_id', value: string) => OperationsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: '_id', value: any[]) => OperationsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id', value: any) => OperationsQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: '_id', value: boolean) => OperationsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id'>) => OperationsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_id'>) => OperationsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => OperationsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => OperationsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<OperationsQueryResult>;
  }
  /**
   * Retrieves a list of operations.
   * Up to 100 operations can be returned per request.
   * TODO: support pagination
   * @internal
   * @documentationMaturity preview
   */
  function listOperations(): Promise<ListOperationsResponse>;
  /**
   * Retrieves a list of available fulfillment options.
   * What makes a fulfillment option available is whether it's possible to submit an order given the scheduling configurations and the fulfillment method's availability.
   * When a `delivery_address` is not provided in the input, our system retrieves a list encompassing all types of fulfillment methods.
   * Conversely, if a `delivery_address` is given, the response may includes non-delivery fulfillment options along with delivery fulfillment methods that are applicable to the given address, ensuring the address falls within the defined delivery area of these methods.
   * @param operationId - The ID of the operation.
   * The returned fulfillment options will belong to this operation.
   * @internal
   * @documentationMaturity preview
   * @requiredField operationId
   */
  function listAvailableFulfillmentOptions(operationId: string, options?: ListAvailableFulfillmentOptions): Promise<ListAvailableFulfillmentOptionsResponse>;
  interface ListAvailableFulfillmentOptions {
      /**
       * A delivery address. This parameter is optional.
       * If provided, the returned delivery fulfillment options will be able to deliver to this address.
       */
      deliveryAddress?: CommonAddress$1;
  }
  /**
   * Retrieves a list of available time slots for each fulfillment type.
   * Each time slot will be the first available time slot for the given fulfillment type.
   * @param operationId - The ID of the operation.
   * The returned fulfillment options will belong to this operation.
   * @internal
   * @documentationMaturity preview
   * @requiredField operationId
   */
  function listFirstAvailableTimeSlotForFulfillmentTypes(operationId: string, options?: ListFirstAvailableTimeSlotForFulfillmentTypesOptions): Promise<ListFirstAvailableTimeSlotForFulfillmentTypesResponse>;
  interface ListFirstAvailableTimeSlotForFulfillmentTypesOptions {
      /**
       * A delivery address. This parameter is optional.
       * If provided, the returned delivery fulfillment options will be able to deliver to this address.
       */
      deliveryAddress?: CommonAddress$1;
  }
  /**
   * Retrieves a list of the available time slots for a given date.
   * @param operationId - The ID of the operation.
   * The returned fulfillment options will belong to this operation.
   * @internal
   * @documentationMaturity preview
   * @requiredField operationId
   * @requiredField options.date
   * @requiredField options.date.day
   * @requiredField options.date.month
   * @requiredField options.date.year
   */
  function listAvailableTimeSlotsForDate(operationId: string, options?: ListAvailableTimeSlotsForDateOptions): Promise<ListAvailableTimeSlotsForDateResponse>;
  interface ListAvailableTimeSlotsForDateOptions {
      /**
       * A delivery address. This parameter is optional.
       * If provided, the returned delivery fulfillment options will be able to deliver to this address.
       */
      deliveryAddress?: CommonAddress$1;
      /** The date to get the available time slots for. */
      date: _Date;
  }
  /**
   * Retrieves a list of the available dates in a given time range.
   * A date is considered available if it has at least one available time slot.
   * @param operationId - The ID of the operation.
   * The returned fulfillment options will belong to this operation.
   * @internal
   * @documentationMaturity preview
   * @requiredField operationId
   * @requiredField options.from
   * @requiredField options.until
   */
  function listAvailableDatesInRange(operationId: string, options?: ListAvailableDatesInRangeOptions): Promise<ListAvailableDatesInRangeResponse>;
  interface ListAvailableDatesInRangeOptions {
      /**
       * A delivery address. This parameter is optional.
       * If provided, the returned delivery fulfillment options will be able to deliver to this address.
       */
      deliveryAddress?: CommonAddress$1;
      /** The start date of the range. */
      from: _Date;
      /** The end date of the range. */
      until: _Date;
  }
  /**
   * Retrieves a list of the fulfillment options that will be available given the provided filters.
   * TODO: probably rename, the implementation took a different direction than the name suggests
   * @param operationId - The id of the operation. The returned fulfillment will belong to this operation.
   * @internal
   * @documentationMaturity preview
   * @requiredField operationId
   * @requiredField options.fulfilmentType
   */
  function getExpectedFulfillmentSelection(operationId: string, options?: GetExpectedFulfillmentSelectionOptions): Promise<GetExpectedFulfillmentSelectionResponse>;
  interface GetExpectedFulfillmentSelectionOptions {
      /**
       * A delivery address. This parameter is optional.
       * If provided, the returned delivery fulfillment will be able to deliver to this address.
       */
      deliveryAddress?: CommonAddress$1;
      /** The start time of the time slot. */
      timeslotStartTime?: Date;
      /** The end time of the time slot. */
      timeslotEndTime?: Date;
      /** The type of the fulfillment. */
      fulfilmentType: FulfillmentType;
      /** An indication whether it is possible to submit an order for now. */
      canSubmitOrderForNow?: boolean | null;
  }
  
  type restaurantsOperationsV1Operation_universal_d_OperationOnlineOrderingStatusOptionsOneOf = OperationOnlineOrderingStatusOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_Scheduling = Scheduling;
  type restaurantsOperationsV1Operation_universal_d_SchedulingSchedulingOptionsOneOf = SchedulingSchedulingOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_SchedulingType = SchedulingType;
  const restaurantsOperationsV1Operation_universal_d_SchedulingType: typeof SchedulingType;
  type restaurantsOperationsV1Operation_universal_d_AsapScheduling = AsapScheduling;
  type restaurantsOperationsV1Operation_universal_d_AsapSchedulingPreparationTimeOneOf = AsapSchedulingPreparationTimeOneOf;
  type restaurantsOperationsV1Operation_universal_d_AsapSchedulingAsapPreorderOneOf = AsapSchedulingAsapPreorderOneOf;
  type restaurantsOperationsV1Operation_universal_d_PreparationTimeType = PreparationTimeType;
  const restaurantsOperationsV1Operation_universal_d_PreparationTimeType: typeof PreparationTimeType;
  type restaurantsOperationsV1Operation_universal_d_TimeDuration = TimeDuration;
  type restaurantsOperationsV1Operation_universal_d_TimeUnit = TimeUnit;
  const restaurantsOperationsV1Operation_universal_d_TimeUnit: typeof TimeUnit;
  type restaurantsOperationsV1Operation_universal_d_TimeDurationRange = TimeDurationRange;
  type restaurantsOperationsV1Operation_universal_d_AsapPreorderType = AsapPreorderType;
  const restaurantsOperationsV1Operation_universal_d_AsapPreorderType: typeof AsapPreorderType;
  type restaurantsOperationsV1Operation_universal_d_BusinessDaysPreorder = BusinessDaysPreorder;
  type restaurantsOperationsV1Operation_universal_d_PreorderScheduling = PreorderScheduling;
  type restaurantsOperationsV1Operation_universal_d_PreorderMethod = PreorderMethod;
  type restaurantsOperationsV1Operation_universal_d_PreorderMethodMethodOptionsOneOf = PreorderMethodMethodOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_DayAndTime = DayAndTime;
  type restaurantsOperationsV1Operation_universal_d_MethodType = MethodType;
  const restaurantsOperationsV1Operation_universal_d_MethodType: typeof MethodType;
  type restaurantsOperationsV1Operation_universal_d_TimeBounded = TimeBounded;
  type restaurantsOperationsV1Operation_universal_d_WeeklySchedule = WeeklySchedule;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentTimesDisplayConfig = FulfillmentTimesDisplayConfig;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentTimesDisplayConfigFulfillmentTimesDisplayOptionsOneOf = FulfillmentTimesDisplayConfigFulfillmentTimesDisplayOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentTimesType = FulfillmentTimesType;
  const restaurantsOperationsV1Operation_universal_d_FulfillmentTimesType: typeof FulfillmentTimesType;
  type restaurantsOperationsV1Operation_universal_d_OnlineOrderingStatusType = OnlineOrderingStatusType;
  const restaurantsOperationsV1Operation_universal_d_OnlineOrderingStatusType: typeof OnlineOrderingStatusType;
  type restaurantsOperationsV1Operation_universal_d_OnlineOrderingPausedUntilOptions = OnlineOrderingPausedUntilOptions;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentType = FulfillmentType;
  const restaurantsOperationsV1Operation_universal_d_FulfillmentType: typeof FulfillmentType;
  type restaurantsOperationsV1Operation_universal_d_V1AvailabilityException = V1AvailabilityException;
  type restaurantsOperationsV1Operation_universal_d_AffectedFulfillmentMethods = AffectedFulfillmentMethods;
  type restaurantsOperationsV1Operation_universal_d_AffectedFulfillmentMethodsImpactScopeOptionsOneOf = AffectedFulfillmentMethodsImpactScopeOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_ImpactScope = ImpactScope;
  const restaurantsOperationsV1Operation_universal_d_ImpactScope: typeof ImpactScope;
  type restaurantsOperationsV1Operation_universal_d_SpecificFulfillmentMethodsImpactScope = SpecificFulfillmentMethodsImpactScope;
  type restaurantsOperationsV1Operation_universal_d_OrderScheduling = OrderScheduling;
  type restaurantsOperationsV1Operation_universal_d_OrderSchedulingOrderSchedulingOptionsOneOf = OrderSchedulingOrderSchedulingOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_AsapOrderScheduling = AsapOrderScheduling;
  type restaurantsOperationsV1Operation_universal_d_AsapOrderSchedulingAsapFutureHandlingOptionsOneOf = AsapOrderSchedulingAsapFutureHandlingOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_PreparationTime = PreparationTime;
  type restaurantsOperationsV1Operation_universal_d_PreparationTimeTimeSpecificationOneOf = PreparationTimeTimeSpecificationOneOf;
  type restaurantsOperationsV1Operation_universal_d_PreparationTimePreparationTimeType = PreparationTimePreparationTimeType;
  const restaurantsOperationsV1Operation_universal_d_PreparationTimePreparationTimeType: typeof PreparationTimePreparationTimeType;
  type restaurantsOperationsV1Operation_universal_d_AsapFutureHandlingType = AsapFutureHandlingType;
  const restaurantsOperationsV1Operation_universal_d_AsapFutureHandlingType: typeof AsapFutureHandlingType;
  type restaurantsOperationsV1Operation_universal_d_BusinessDaysAheadHandling = BusinessDaysAheadHandling;
  type restaurantsOperationsV1Operation_universal_d_CreateOperationRequest = CreateOperationRequest;
  type restaurantsOperationsV1Operation_universal_d_CreateOperationResponse = CreateOperationResponse;
  type restaurantsOperationsV1Operation_universal_d_GetOperationRequest = GetOperationRequest;
  type restaurantsOperationsV1Operation_universal_d_GetOperationResponse = GetOperationResponse;
  type restaurantsOperationsV1Operation_universal_d_UpdateOperationRequest = UpdateOperationRequest;
  type restaurantsOperationsV1Operation_universal_d_UpdateOperationResponse = UpdateOperationResponse;
  type restaurantsOperationsV1Operation_universal_d_DeleteOperationRequest = DeleteOperationRequest;
  type restaurantsOperationsV1Operation_universal_d_DeleteOperationResponse = DeleteOperationResponse;
  type restaurantsOperationsV1Operation_universal_d_QueryOperationRequest = QueryOperationRequest;
  type restaurantsOperationsV1Operation_universal_d_QueryOperationResponse = QueryOperationResponse;
  type restaurantsOperationsV1Operation_universal_d_ListOperationsRequest = ListOperationsRequest;
  type restaurantsOperationsV1Operation_universal_d_ListOperationsResponse = ListOperationsResponse;
  type restaurantsOperationsV1Operation_universal_d_ListAvailableFulfillmentOptionsRequest = ListAvailableFulfillmentOptionsRequest;
  type restaurantsOperationsV1Operation_universal_d_ListAvailableFulfillmentOptionsResponse = ListAvailableFulfillmentOptionsResponse;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentOption = FulfillmentOption;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentOptionFulfillmentTimeOptionsOneOf = FulfillmentOptionFulfillmentTimeOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentOptionFulfillmentTimesDisplayOptionsOneOf = FulfillmentOptionFulfillmentTimesDisplayOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentOptionFulfillmentTypeOptionsOneOf = FulfillmentOptionFulfillmentTypeOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentOptionAvailability = FulfillmentOptionAvailability;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentTimeType = FulfillmentTimeType;
  const restaurantsOperationsV1Operation_universal_d_FulfillmentTimeType: typeof FulfillmentTimeType;
  type restaurantsOperationsV1Operation_universal_d_DurationRange = DurationRange;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentTimesDisplayType = FulfillmentTimesDisplayType;
  const restaurantsOperationsV1Operation_universal_d_FulfillmentTimesDisplayType: typeof FulfillmentTimesDisplayType;
  type restaurantsOperationsV1Operation_universal_d_TimeWindowDisplayConfig = TimeWindowDisplayConfig;
  type restaurantsOperationsV1Operation_universal_d_PickupDetails = PickupDetails;
  type restaurantsOperationsV1Operation_universal_d_ListFirstAvailableTimeSlotForFulfillmentTypesRequest = ListFirstAvailableTimeSlotForFulfillmentTypesRequest;
  type restaurantsOperationsV1Operation_universal_d_ListFirstAvailableTimeSlotForFulfillmentTypesResponse = ListFirstAvailableTimeSlotForFulfillmentTypesResponse;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentTimeSlot = FulfillmentTimeSlot;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentDetails = FulfillmentDetails;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentDetailsFulfillmentTimeOptionsOneOf = FulfillmentDetailsFulfillmentTimeOptionsOneOf;
  type restaurantsOperationsV1Operation_universal_d_ListAvailableTimeSlotsForDateRequest = ListAvailableTimeSlotsForDateRequest;
  type restaurantsOperationsV1Operation_universal_d__Date = _Date;
  type restaurantsOperationsV1Operation_universal_d_ListAvailableTimeSlotsForDateResponse = ListAvailableTimeSlotsForDateResponse;
  type restaurantsOperationsV1Operation_universal_d_ListAvailableDatesInRangeRequest = ListAvailableDatesInRangeRequest;
  type restaurantsOperationsV1Operation_universal_d_ListAvailableDatesInRangeResponse = ListAvailableDatesInRangeResponse;
  type restaurantsOperationsV1Operation_universal_d_FulfillmentTypeAvailableDates = FulfillmentTypeAvailableDates;
  type restaurantsOperationsV1Operation_universal_d_GetExpectedFulfillmentSelectionRequest = GetExpectedFulfillmentSelectionRequest;
  type restaurantsOperationsV1Operation_universal_d_GetExpectedFulfillmentSelectionResponse = GetExpectedFulfillmentSelectionResponse;
  const restaurantsOperationsV1Operation_universal_d_createOperation: typeof createOperation;
  const restaurantsOperationsV1Operation_universal_d_getOperation: typeof getOperation;
  const restaurantsOperationsV1Operation_universal_d_updateOperation: typeof updateOperation;
  type restaurantsOperationsV1Operation_universal_d_UpdateOperation = UpdateOperation;
  type restaurantsOperationsV1Operation_universal_d_UpdateOperationOptions = UpdateOperationOptions;
  const restaurantsOperationsV1Operation_universal_d_deleteOperation: typeof deleteOperation;
  const restaurantsOperationsV1Operation_universal_d_queryOperation: typeof queryOperation;
  type restaurantsOperationsV1Operation_universal_d_OperationsQueryResult = OperationsQueryResult;
  type restaurantsOperationsV1Operation_universal_d_OperationsQueryBuilder = OperationsQueryBuilder;
  const restaurantsOperationsV1Operation_universal_d_listOperations: typeof listOperations;
  const restaurantsOperationsV1Operation_universal_d_listAvailableFulfillmentOptions: typeof listAvailableFulfillmentOptions;
  type restaurantsOperationsV1Operation_universal_d_ListAvailableFulfillmentOptions = ListAvailableFulfillmentOptions;
  const restaurantsOperationsV1Operation_universal_d_listFirstAvailableTimeSlotForFulfillmentTypes: typeof listFirstAvailableTimeSlotForFulfillmentTypes;
  type restaurantsOperationsV1Operation_universal_d_ListFirstAvailableTimeSlotForFulfillmentTypesOptions = ListFirstAvailableTimeSlotForFulfillmentTypesOptions;
  const restaurantsOperationsV1Operation_universal_d_listAvailableTimeSlotsForDate: typeof listAvailableTimeSlotsForDate;
  type restaurantsOperationsV1Operation_universal_d_ListAvailableTimeSlotsForDateOptions = ListAvailableTimeSlotsForDateOptions;
  const restaurantsOperationsV1Operation_universal_d_listAvailableDatesInRange: typeof listAvailableDatesInRange;
  type restaurantsOperationsV1Operation_universal_d_ListAvailableDatesInRangeOptions = ListAvailableDatesInRangeOptions;
  const restaurantsOperationsV1Operation_universal_d_getExpectedFulfillmentSelection: typeof getExpectedFulfillmentSelection;
  type restaurantsOperationsV1Operation_universal_d_GetExpectedFulfillmentSelectionOptions = GetExpectedFulfillmentSelectionOptions;
  namespace restaurantsOperationsV1Operation_universal_d {
    export {
      __debug$2 as __debug,
      Operation$1 as Operation,
      restaurantsOperationsV1Operation_universal_d_OperationOnlineOrderingStatusOptionsOneOf as OperationOnlineOrderingStatusOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_Scheduling as Scheduling,
      restaurantsOperationsV1Operation_universal_d_SchedulingSchedulingOptionsOneOf as SchedulingSchedulingOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_SchedulingType as SchedulingType,
      restaurantsOperationsV1Operation_universal_d_AsapScheduling as AsapScheduling,
      restaurantsOperationsV1Operation_universal_d_AsapSchedulingPreparationTimeOneOf as AsapSchedulingPreparationTimeOneOf,
      restaurantsOperationsV1Operation_universal_d_AsapSchedulingAsapPreorderOneOf as AsapSchedulingAsapPreorderOneOf,
      restaurantsOperationsV1Operation_universal_d_PreparationTimeType as PreparationTimeType,
      restaurantsOperationsV1Operation_universal_d_TimeDuration as TimeDuration,
      restaurantsOperationsV1Operation_universal_d_TimeUnit as TimeUnit,
      restaurantsOperationsV1Operation_universal_d_TimeDurationRange as TimeDurationRange,
      restaurantsOperationsV1Operation_universal_d_AsapPreorderType as AsapPreorderType,
      restaurantsOperationsV1Operation_universal_d_BusinessDaysPreorder as BusinessDaysPreorder,
      restaurantsOperationsV1Operation_universal_d_PreorderScheduling as PreorderScheduling,
      restaurantsOperationsV1Operation_universal_d_PreorderMethod as PreorderMethod,
      restaurantsOperationsV1Operation_universal_d_PreorderMethodMethodOptionsOneOf as PreorderMethodMethodOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_DayAndTime as DayAndTime,
      EntitiesDayOfWeek$1 as EntitiesDayOfWeek,
      TimeOfDay$1 as TimeOfDay,
      restaurantsOperationsV1Operation_universal_d_MethodType as MethodType,
      restaurantsOperationsV1Operation_universal_d_TimeBounded as TimeBounded,
      restaurantsOperationsV1Operation_universal_d_WeeklySchedule as WeeklySchedule,
      restaurantsOperationsV1Operation_universal_d_FulfillmentTimesDisplayConfig as FulfillmentTimesDisplayConfig,
      restaurantsOperationsV1Operation_universal_d_FulfillmentTimesDisplayConfigFulfillmentTimesDisplayOptionsOneOf as FulfillmentTimesDisplayConfigFulfillmentTimesDisplayOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_FulfillmentTimesType as FulfillmentTimesType,
      restaurantsOperationsV1Operation_universal_d_OnlineOrderingStatusType as OnlineOrderingStatusType,
      restaurantsOperationsV1Operation_universal_d_OnlineOrderingPausedUntilOptions as OnlineOrderingPausedUntilOptions,
      restaurantsOperationsV1Operation_universal_d_FulfillmentType as FulfillmentType,
      restaurantsOperationsV1Operation_universal_d_V1AvailabilityException as V1AvailabilityException,
      restaurantsOperationsV1Operation_universal_d_AffectedFulfillmentMethods as AffectedFulfillmentMethods,
      restaurantsOperationsV1Operation_universal_d_AffectedFulfillmentMethodsImpactScopeOptionsOneOf as AffectedFulfillmentMethodsImpactScopeOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_ImpactScope as ImpactScope,
      restaurantsOperationsV1Operation_universal_d_SpecificFulfillmentMethodsImpactScope as SpecificFulfillmentMethodsImpactScope,
      restaurantsOperationsV1Operation_universal_d_OrderScheduling as OrderScheduling,
      restaurantsOperationsV1Operation_universal_d_OrderSchedulingOrderSchedulingOptionsOneOf as OrderSchedulingOrderSchedulingOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_AsapOrderScheduling as AsapOrderScheduling,
      restaurantsOperationsV1Operation_universal_d_AsapOrderSchedulingAsapFutureHandlingOptionsOneOf as AsapOrderSchedulingAsapFutureHandlingOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_PreparationTime as PreparationTime,
      restaurantsOperationsV1Operation_universal_d_PreparationTimeTimeSpecificationOneOf as PreparationTimeTimeSpecificationOneOf,
      restaurantsOperationsV1Operation_universal_d_PreparationTimePreparationTimeType as PreparationTimePreparationTimeType,
      restaurantsOperationsV1Operation_universal_d_AsapFutureHandlingType as AsapFutureHandlingType,
      restaurantsOperationsV1Operation_universal_d_BusinessDaysAheadHandling as BusinessDaysAheadHandling,
      InvalidateCache$1 as InvalidateCache,
      InvalidateCacheGetByOneOf$1 as InvalidateCacheGetByOneOf,
      App$1 as App,
      Page$1 as Page,
      URI$1 as URI,
      restaurantsOperationsV1Operation_universal_d_CreateOperationRequest as CreateOperationRequest,
      restaurantsOperationsV1Operation_universal_d_CreateOperationResponse as CreateOperationResponse,
      restaurantsOperationsV1Operation_universal_d_GetOperationRequest as GetOperationRequest,
      restaurantsOperationsV1Operation_universal_d_GetOperationResponse as GetOperationResponse,
      restaurantsOperationsV1Operation_universal_d_UpdateOperationRequest as UpdateOperationRequest,
      restaurantsOperationsV1Operation_universal_d_UpdateOperationResponse as UpdateOperationResponse,
      restaurantsOperationsV1Operation_universal_d_DeleteOperationRequest as DeleteOperationRequest,
      restaurantsOperationsV1Operation_universal_d_DeleteOperationResponse as DeleteOperationResponse,
      restaurantsOperationsV1Operation_universal_d_QueryOperationRequest as QueryOperationRequest,
      CursorQuery$2 as CursorQuery,
      CursorQueryPagingMethodOneOf$2 as CursorQueryPagingMethodOneOf,
      Sorting$2 as Sorting,
      SortOrder$2 as SortOrder,
      CursorPaging$1 as CursorPaging,
      restaurantsOperationsV1Operation_universal_d_QueryOperationResponse as QueryOperationResponse,
      CursorPagingMetadata$1 as CursorPagingMetadata,
      Cursors$1 as Cursors,
      restaurantsOperationsV1Operation_universal_d_ListOperationsRequest as ListOperationsRequest,
      restaurantsOperationsV1Operation_universal_d_ListOperationsResponse as ListOperationsResponse,
      restaurantsOperationsV1Operation_universal_d_ListAvailableFulfillmentOptionsRequest as ListAvailableFulfillmentOptionsRequest,
      CommonAddress$1 as CommonAddress,
      CommonAddressStreetOneOf$1 as CommonAddressStreetOneOf,
      StreetAddress$1 as StreetAddress,
      AddressLocation$1 as AddressLocation,
      Subdivision$1 as Subdivision,
      SubdivisionType$1 as SubdivisionType,
      restaurantsOperationsV1Operation_universal_d_ListAvailableFulfillmentOptionsResponse as ListAvailableFulfillmentOptionsResponse,
      restaurantsOperationsV1Operation_universal_d_FulfillmentOption as FulfillmentOption,
      restaurantsOperationsV1Operation_universal_d_FulfillmentOptionFulfillmentTimeOptionsOneOf as FulfillmentOptionFulfillmentTimeOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_FulfillmentOptionFulfillmentTimesDisplayOptionsOneOf as FulfillmentOptionFulfillmentTimesDisplayOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_FulfillmentOptionFulfillmentTypeOptionsOneOf as FulfillmentOptionFulfillmentTypeOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_FulfillmentOptionAvailability as FulfillmentOptionAvailability,
      DayOfWeekAvailability$1 as DayOfWeekAvailability,
      TimeOfDayRange$1 as TimeOfDayRange,
      AvailabilityException$1 as AvailabilityException,
      restaurantsOperationsV1Operation_universal_d_FulfillmentTimeType as FulfillmentTimeType,
      restaurantsOperationsV1Operation_universal_d_DurationRange as DurationRange,
      restaurantsOperationsV1Operation_universal_d_FulfillmentTimesDisplayType as FulfillmentTimesDisplayType,
      restaurantsOperationsV1Operation_universal_d_TimeWindowDisplayConfig as TimeWindowDisplayConfig,
      restaurantsOperationsV1Operation_universal_d_PickupDetails as PickupDetails,
      restaurantsOperationsV1Operation_universal_d_ListFirstAvailableTimeSlotForFulfillmentTypesRequest as ListFirstAvailableTimeSlotForFulfillmentTypesRequest,
      restaurantsOperationsV1Operation_universal_d_ListFirstAvailableTimeSlotForFulfillmentTypesResponse as ListFirstAvailableTimeSlotForFulfillmentTypesResponse,
      restaurantsOperationsV1Operation_universal_d_FulfillmentTimeSlot as FulfillmentTimeSlot,
      restaurantsOperationsV1Operation_universal_d_FulfillmentDetails as FulfillmentDetails,
      restaurantsOperationsV1Operation_universal_d_FulfillmentDetailsFulfillmentTimeOptionsOneOf as FulfillmentDetailsFulfillmentTimeOptionsOneOf,
      restaurantsOperationsV1Operation_universal_d_ListAvailableTimeSlotsForDateRequest as ListAvailableTimeSlotsForDateRequest,
      restaurantsOperationsV1Operation_universal_d__Date as _Date,
      restaurantsOperationsV1Operation_universal_d_ListAvailableTimeSlotsForDateResponse as ListAvailableTimeSlotsForDateResponse,
      restaurantsOperationsV1Operation_universal_d_ListAvailableDatesInRangeRequest as ListAvailableDatesInRangeRequest,
      restaurantsOperationsV1Operation_universal_d_ListAvailableDatesInRangeResponse as ListAvailableDatesInRangeResponse,
      restaurantsOperationsV1Operation_universal_d_FulfillmentTypeAvailableDates as FulfillmentTypeAvailableDates,
      restaurantsOperationsV1Operation_universal_d_GetExpectedFulfillmentSelectionRequest as GetExpectedFulfillmentSelectionRequest,
      restaurantsOperationsV1Operation_universal_d_GetExpectedFulfillmentSelectionResponse as GetExpectedFulfillmentSelectionResponse,
      DomainEvent$1 as DomainEvent,
      DomainEventBodyOneOf$1 as DomainEventBodyOneOf,
      EntityCreatedEvent$1 as EntityCreatedEvent,
      EntityUpdatedEvent$1 as EntityUpdatedEvent,
      EntityDeletedEvent$1 as EntityDeletedEvent,
      ActionEvent$1 as ActionEvent,
      Empty$1 as Empty,
      SitePropertiesNotification$1 as SitePropertiesNotification,
      SitePropertiesEvent$1 as SitePropertiesEvent,
      Properties$1 as Properties,
      Categories$1 as Categories,
      Locale$2 as Locale,
      Address$1 as Address,
      AddressHint$1 as AddressHint,
      PlacementType$1 as PlacementType,
      GeoCoordinates$1 as GeoCoordinates,
      BusinessSchedule$1 as BusinessSchedule,
      TimePeriod$1 as TimePeriod,
      DayOfWeek$1 as DayOfWeek,
      SpecialHourPeriod$1 as SpecialHourPeriod,
      Multilingual$1 as Multilingual,
      SupportedLanguage$1 as SupportedLanguage,
      ResolutionMethod$1 as ResolutionMethod,
      ConsentPolicy$1 as ConsentPolicy,
      Translation$1 as Translation,
      ChangeContext$1 as ChangeContext,
      ChangeContextPayloadOneOf$1 as ChangeContextPayloadOneOf,
      PropertiesChange$1 as PropertiesChange,
      SiteCreated$1 as SiteCreated,
      SiteCloned$1 as SiteCloned,
      restaurantsOperationsV1Operation_universal_d_createOperation as createOperation,
      restaurantsOperationsV1Operation_universal_d_getOperation as getOperation,
      restaurantsOperationsV1Operation_universal_d_updateOperation as updateOperation,
      restaurantsOperationsV1Operation_universal_d_UpdateOperation as UpdateOperation,
      restaurantsOperationsV1Operation_universal_d_UpdateOperationOptions as UpdateOperationOptions,
      restaurantsOperationsV1Operation_universal_d_deleteOperation as deleteOperation,
      restaurantsOperationsV1Operation_universal_d_queryOperation as queryOperation,
      restaurantsOperationsV1Operation_universal_d_OperationsQueryResult as OperationsQueryResult,
      restaurantsOperationsV1Operation_universal_d_OperationsQueryBuilder as OperationsQueryBuilder,
      restaurantsOperationsV1Operation_universal_d_listOperations as listOperations,
      restaurantsOperationsV1Operation_universal_d_listAvailableFulfillmentOptions as listAvailableFulfillmentOptions,
      restaurantsOperationsV1Operation_universal_d_ListAvailableFulfillmentOptions as ListAvailableFulfillmentOptions,
      restaurantsOperationsV1Operation_universal_d_listFirstAvailableTimeSlotForFulfillmentTypes as listFirstAvailableTimeSlotForFulfillmentTypes,
      restaurantsOperationsV1Operation_universal_d_ListFirstAvailableTimeSlotForFulfillmentTypesOptions as ListFirstAvailableTimeSlotForFulfillmentTypesOptions,
      restaurantsOperationsV1Operation_universal_d_listAvailableTimeSlotsForDate as listAvailableTimeSlotsForDate,
      restaurantsOperationsV1Operation_universal_d_ListAvailableTimeSlotsForDateOptions as ListAvailableTimeSlotsForDateOptions,
      restaurantsOperationsV1Operation_universal_d_listAvailableDatesInRange as listAvailableDatesInRange,
      restaurantsOperationsV1Operation_universal_d_ListAvailableDatesInRangeOptions as ListAvailableDatesInRangeOptions,
      restaurantsOperationsV1Operation_universal_d_getExpectedFulfillmentSelection as getExpectedFulfillmentSelection,
      restaurantsOperationsV1Operation_universal_d_GetExpectedFulfillmentSelectionOptions as GetExpectedFulfillmentSelectionOptions,
    };
  }
  
  const __debug$1: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** `FulfillmentMethod` is the main entity of `FulfillmentMethodsService' and represents the way of a restaurant to provide orders to its customers. */
  interface FulfillmentMethod extends FulfillmentMethodMethodOptionsOneOf {
      /** Data specific for pickup fulfillment method. */
      pickupOptions?: PickupInfo;
      /** Data specific for delivery fulfillment method. */
      deliveryOptions?: DeliveryInfo;
      /**
       * The ID of the fulfillment method.
       * @readonly
       */
      _id?: string | null;
      /**
       * The current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Timestamp at which the fulfillment method was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Timestamp at which the fulfillment method was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** The fulfillment method type. */
      type?: FulfillmentMethodType;
      /** The minimum order price to qualify for using this fulfillment method. */
      minimumOrderAmount?: string | null;
      /** The fulfillment method name. */
      name?: string | null;
      /** An indication of whether the fulfillment method is enabled or not. */
      enabled?: boolean | null;
      /** The fee for using this fulfillment method. */
      fee?: string | null;
      /** The availability of this fulfillment method. */
      availability?: Availability;
      /** The minimum order price to qualify for using this fulfillment method. */
      minOrderPrice?: string | null;
  }
  /** @oneof */
  interface FulfillmentMethodMethodOptionsOneOf {
      /** Data specific for pickup fulfillment method. */
      pickupOptions?: PickupInfo;
      /** Data specific for delivery fulfillment method. */
      deliveryOptions?: DeliveryInfo;
  }
  enum FulfillmentMethodType {
      /** Missing type due to an error. */
      UNKNOWN_FULFILLMENT_TYPE = "UNKNOWN_FULFILLMENT_TYPE",
      /** Pickup fulfillment method - refers to the customer picking up the order from the restaurant. */
      PICKUP = "PICKUP",
      /** Delivery fulfillment method - refers to the restaurant or someone on behalf of the restaurant delivering the order to the customer. */
      DELIVERY = "DELIVERY"
  }
  interface PickupInfo {
      /** Instructions for the pickup. */
      instructions?: string | null;
      /**
       * Pickup address.
       * The address of the restaurant will be used.
       * @readonly
       */
      address?: CommonAddress;
  }
  /** Physical address */
  interface CommonAddress extends CommonAddressStreetOneOf {
      /** Street name and number. */
      streetAddress?: StreetAddress;
      /** Main address line, usually street and number as free text. */
      addressLine1?: string | null;
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
      /**
       * A string containing the full address of this location.
       * @internal
       */
      formatted?: string | null;
      /**
       * Coordinates of the physical address.
       * @internal
       */
      location?: AddressLocation;
  }
  /** @oneof */
  interface CommonAddressStreetOneOf {
      /** Street name and number. */
      streetAddress?: StreetAddress;
      /** Main address line, usually street and number as free text. */
      addressLine?: string | null;
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
  interface DeliveryInfo {
      /** The estimated delivery time in minutes. */
      deliveryTimeInMinutes?: number | null;
      /**
       * Threshold for offering free delivery.
       * If order price exceeds this threshold, the delivery fee is waived.
       */
      freeDeliveryThreshold?: string | null;
      /** The delivery area that is supported by this delivery fulfillment method. */
      deliveryArea?: DeliveryArea;
  }
  interface DeliveryArea extends DeliveryAreaAreaOptionsOneOf {
      /** Data specific for radius delivery area. */
      radiusOptions?: Radius;
      /** Data specific for postal code delivery area. */
      postalCodeOptions?: PostalCode;
      /** Data specific for custom delivery area. */
      customOptions?: CustomArea;
      /** The type of the delivery area. */
      type?: Type$1;
  }
  /** @oneof */
  interface DeliveryAreaAreaOptionsOneOf {
      /** Data specific for radius delivery area. */
      radiusOptions?: Radius;
      /** Data specific for postal code delivery area. */
      postalCodeOptions?: PostalCode;
      /** Data specific for custom delivery area. */
      customOptions?: CustomArea;
  }
  enum Type$1 {
      /** Unknown delivery area type. */
      UNKNOWN_DELIVERY_AREA = "UNKNOWN_DELIVERY_AREA",
      /**
       * Delivery area that is defined by a radius around an address.
       * The address of the restaurant will be used.
       */
      RADIUS = "RADIUS",
      /** Delivery area that is defined by a list of postal codes. */
      POSTAL_CODE = "POSTAL_CODE",
      /** Delivery area that is defined by a custom polygon. */
      CUSTOM = "CUSTOM"
  }
  interface Radius {
      /**
       * The radius value.
       * The unit of the radius will be given in the `unit` field.
       */
      value?: string | null;
      /**
       * The address of the center of the circle.
       * @readonly
       */
      centerPointAddress?: CommonAddress;
      /** The distance unit of the radius. */
      unit?: Unit;
  }
  enum Unit {
      /** Unknown unit. */
      UNKNOWN_UNIT = "UNKNOWN_UNIT",
      /** Miles. */
      MILES = "MILES",
      /** Kilometers. */
      KILOMETERS = "KILOMETERS"
  }
  interface PostalCode {
      /** The postal code of the delivery area. */
      postalCode?: string | null;
      /**
       * The country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
       * @readonly
       */
      countryCode?: string | null;
      /**
       * A list of postal codes and postal code regexes. List of postal codes and postal code regexes. Examples: 10001, 10002 or 1000*
       * A postal code regex will enable you to define a range of postal codes using an asterisk (*).
       * For example, in order to include the postal codes in the range of 10001-10009, 1000* can be used.
       */
      postalCodes?: string[] | null;
  }
  interface CustomArea {
      /** Geocodes of the polygon that defines the delivery area. */
      geocodes?: AddressLocation[];
  }
  interface Availability {
      /** A list of availability times for the days of the week. */
      availableTimes?: DayOfWeekAvailability[];
      /**
       * A list of availability exception.
       * An availability exception is some availability for a specific time, that is different from the usual availability defined in `available_times`. The availability exception overrides the availability defined in `available_times`.
       * For example, a restaurants may decide to disable the availability for a specific time range, or to enable the availability for a specific time range that is not available in the usual availability.
       * TODO: Remove this field and use the exceptions in the operation.
       */
      exceptions?: AvailabilityException[];
      /**
       * The timezone in which the availability times are given.
       * @readonly
       */
      timeZone?: string | null;
  }
  interface DayOfWeekAvailability {
      /** The day of week this availability relates to. */
      dayOfWeek?: EntitiesDayOfWeek;
      /** A list of time ranges during which the fulfillment should be available. */
      timeRanges?: TimeOfDayRange[];
  }
  enum EntitiesDayOfWeek {
      /** Monday. */
      MON = "MON",
      /** Tuesday. */
      TUE = "TUE",
      /** Wednesday. */
      WED = "WED",
      /** Thursday. */
      THU = "THU",
      /** Friday. */
      FRI = "FRI",
      /** Saturday. */
      SAT = "SAT",
      /** Sunday. */
      SUN = "SUN"
  }
  interface TimeOfDayRange {
      /** The start time in time of day representation. */
      startTime?: TimeOfDay;
      /** The end time in time of day representation. */
      endTime?: TimeOfDay;
  }
  interface TimeOfDay {
      /** Hours (0-23) */
      hours?: number;
      /** Minutes (0-59) */
      minutes?: number;
  }
  interface AvailabilityException {
      /** The start time of the availability exception. */
      startTime?: Date;
      /** The end time of the availability exception. */
      endTime?: Date;
      /** An indication whether the exception makes the [`start_time`, `end_time`] range available. */
      available?: boolean;
      /** The reason for the exception. */
      reason?: string | null;
  }
  interface InvalidateCache extends InvalidateCacheGetByOneOf {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App;
      /** Invalidate by page id */
      page?: Page;
      /** Invalidate by URI path */
      uri?: URI;
      /** tell us why you're invalidating the cache. You don't need to add your app name */
      reason?: string | null;
      /** Is local DS */
      localDc?: boolean;
  }
  /** @oneof */
  interface InvalidateCacheGetByOneOf {
      /** Invalidate by msId. NOT recommended, as this will invalidate the entire site cache! */
      metaSiteId?: string;
      /** Invalidate by Site ID. NOT recommended, as this will invalidate the entire site cache! */
      siteId?: string;
      /** Invalidate by App */
      app?: App;
      /** Invalidate by page id */
      page?: Page;
      /** Invalidate by URI path */
      uri?: URI;
  }
  interface App {
      /** The AppDefId */
      appDefId?: string;
      /** The instance Id */
      instanceId?: string;
  }
  interface Page {
      /** the msid the page is on */
      metaSiteId?: string;
      /** Invalidate by Page ID */
      pageId?: string;
  }
  interface URI {
      /** the msid the URI is on */
      metaSiteId?: string;
      /** URI path to invalidate (e.g. page/my/path) - without leading/trailing slashes */
      uriPath?: string;
  }
  interface CreateFulfillmentMethodRequest {
      /** Fulfillment method to create. */
      fulfillmentMethod: FulfillmentMethod;
  }
  interface CreateFulfillmentMethodResponse {
      /** The created fulfillment method. */
      fulfillmentMethod?: FulfillmentMethod;
  }
  interface GetFulfillmentMethodRequest {
      /** The ID of the fulfillment method to retrieve. */
      fulfillmentMethodId: string;
  }
  interface GetFulfillmentMethodResponse {
      /** The retrieved fulfillment method. */
      fulfillmentMethod?: FulfillmentMethod;
  }
  interface UpdateFulfillmentMethodRequest {
      /**
       * Fulfillment method to update.
       * The fulfillment method update may be partial with the use of `field_mask`.
       */
      fulfillmentMethod: FulfillmentMethod;
      /**
       * Field mask of the fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  interface UpdateFulfillmentMethodResponse {
      /** The updated fulfillment method. */
      fulfillmentMethod?: FulfillmentMethod;
  }
  interface DeleteFulfillmentMethodRequest {
      /** The ID of the fulfillment method to delete. */
      fulfillmentMethodId: string;
  }
  interface DeleteFulfillmentMethodResponse {
  }
  interface QueryFulfillmentMethodsRequest {
      /** The query by which to select fulfillment methods. */
      query?: CursorQuery$1;
      /**
       * Projection mask of the fields to return.
       * @internal
       */
      projectionMask?: string[];
  }
  interface CursorQuery$1 extends CursorQueryPagingMethodOneOf$1 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CommonCursorPaging;
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting$1[];
  }
  /** @oneof */
  interface CursorQueryPagingMethodOneOf$1 {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CommonCursorPaging;
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
  interface CommonCursorPaging {
      /** Maximum number of items to return in the results. */
      limit?: number | null;
      /**
       * Pointer to the next or previous page in the list of results.
       *
       * Pass the relevant cursor token from the `pagingMetadata` object in the previous call's response.
       * Not relevant for the first request.
       */
      cursor?: string | null;
  }
  interface QueryFulfillmentMethodsResponse {
      /** The retrieved fulfillment methods. */
      fulfillmentMethods?: FulfillmentMethod[];
      /** The metadata of the paginated results. */
      pagingMetadata?: CommonCursorPagingMetadata;
  }
  interface CommonCursorPagingMetadata {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Cursor strings that point to the next page, previous page, or both. */
      cursors?: CommonCursors;
      /**
       * Whether there are more pages to retrieve following the current page.
       *
       * + `true`: Another page of results can be retrieved.
       * + `false`: This is the last page.
       */
      hasNext?: boolean | null;
  }
  interface CommonCursors {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface ListFulfillmentMethodsRequest {
      /** The address by which to filter delivery fulfillment methods. */
      address?: CommonAddress;
      /** Cursor paging */
      cursorPaging?: CommonCursorPaging;
  }
  interface ListFulfillmentMethodsResponse {
      /** The retrieved fulfillment methods. */
      fulfillmentMethods?: FulfillmentMethod[];
      /** The metadata of the paginated results. */
      pagingMetadata?: CommonCursorPagingMetadata;
  }
  interface ListAvailableFulfillmentMethodsForAddressRequest {
      /** The address by which to filter delivery fulfillment methods. */
      address?: CommonAddress;
      /** Cursor paging */
      cursorPaging?: CommonCursorPaging;
      /** If provided, only fulfillment methods with the given IDs will be returned. */
      fulfillmentMethodIds?: string[];
  }
  interface ListAvailableFulfillmentMethodsForAddressResponse {
      /** The retrieved fulfillment methods. */
      fulfillmentMethods?: FulfillmentMethod[];
      /** The metadata of the paginated results. */
      pagingMetadata?: CommonCursorPagingMetadata;
  }
  /** Encapsulates all details written to the Greyhound topic when a site's properties are updated. */
  interface SitePropertiesNotification {
      /** The site ID for which this update notification applies. */
      metasiteId?: string;
      /** The actual update event. */
      event?: SitePropertiesEvent;
      /** A convenience set of mappings from the MetaSite ID to its constituent services. */
      translations?: Translation[];
      /** Context of the notification */
      changeContext?: ChangeContext;
  }
  /** The actual update event for a particular notification. */
  interface SitePropertiesEvent {
      /** Version of the site's properties represented by this update. */
      version?: number;
      /**
       * Set of properties that were updated - corresponds to the fields in "properties".
       * @internal
       */
      fields?: string[];
      /** Updated properties. */
      properties?: Properties;
  }
  interface Properties {
      /** Site categories. */
      categories?: Categories;
      /** Site locale. */
      locale?: Locale$1;
      /**
       * Site language.
       *
       * Two-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format.
       */
      language?: string | null;
      /**
       * Site currency format used to bill customers.
       *
       * Three-letter currency code in [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format.
       */
      paymentCurrency?: string | null;
      /** Timezone in `America/New_York` format. */
      timeZone?: string | null;
      /** Email address. */
      email?: string | null;
      /** Phone number. */
      phone?: string | null;
      /** Fax number. */
      fax?: string | null;
      /** Address. */
      address?: Address;
      /** Site display name. */
      siteDisplayName?: string | null;
      /** Business name. */
      businessName?: string | null;
      /** Path to the site's logo in Wix Media (without Wix Media base URL). */
      logo?: string | null;
      /** Site description. */
      description?: string | null;
      /**
       * Business schedule. Regular and exceptional time periods when the business is open or the service is available.
       *
       * __Note:__ Not supported by Wix Bookings.
       */
      businessSchedule?: BusinessSchedule;
      /** Supported languages of a site and the primary language. */
      multilingual?: Multilingual;
      /** Cookie policy the site owner defined for their site (before the users interacts with/limits it). */
      consentPolicy?: ConsentPolicy;
      /**
       * Supported values: `FITNESS SERVICE`, `RESTAURANT`, `BLOG`, `STORE`, `EVENT`, `UNKNOWN`.
       *
       * Site business type.
       */
      businessConfig?: string | null;
      /** External site url that uses Wix as its headless business solution */
      externalSiteUrl?: string | null;
      /** Track clicks analytics */
      trackClicksAnalytics?: boolean;
  }
  interface Categories {
      /** Primary site category. */
      primary?: string;
      /** Secondary site category. */
      secondary?: string[];
      /** Business Term Id */
      businessTermId?: string | null;
  }
  interface Locale$1 {
      /** Two-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format. */
      languageCode?: string;
      /** Two-letter country code in [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) format. */
      country?: string;
  }
  interface Address {
      /** Street name. */
      street?: string;
      /** City name. */
      city?: string;
      /** Two-letter country code in an [ISO-3166 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. */
      country?: string;
      /** State. */
      state?: string;
      /** Zip or postal code. */
      zip?: string;
      /** Extra information to be displayed in the address. */
      hint?: AddressHint;
      /** Whether this address represents a physical location. */
      isPhysical?: boolean;
      /** Google-formatted version of this address. */
      googleFormattedAddress?: string;
      /** Street number. */
      streetNumber?: string;
      /** Apartment number. */
      apartmentNumber?: string;
      /** Geographic coordinates of location. */
      coordinates?: GeoCoordinates;
  }
  /**
   * Extra information on displayed addresses.
   * This is used for display purposes. Used to add additional data about the address, such as "In the passage".
   * Free text. In addition the user can state where he wants that additional description - before, after, or instead
   * the address string.
   */
  interface AddressHint {
      /** Extra text displayed next to, or instead of, the actual address. */
      text?: string;
      /** Where the extra text should be displayed. */
      placement?: PlacementType;
  }
  /** Where the extra text should be displayed: before, after or instead of the actual address. */
  enum PlacementType {
      BEFORE = "BEFORE",
      AFTER = "AFTER",
      REPLACE = "REPLACE"
  }
  /** Geocoordinates for a particular address. */
  interface GeoCoordinates {
      /** Latitude of the location. Must be between -90 and 90. */
      latitude?: number;
      /** Longitude of the location. Must be between -180 and 180. */
      longitude?: number;
  }
  /** Business schedule. Regular and exceptional time periods when the business is open or the service is available. */
  interface BusinessSchedule {
      /** Weekly recurring time periods when the business is regularly open or the service is available. Limited to 100 time periods. */
      periods?: TimePeriod[];
      /** Exceptions to the business's regular hours. The business can be open or closed during the exception. */
      specialHourPeriod?: SpecialHourPeriod[];
  }
  /** Weekly recurring time periods when the business is regularly open or the service is available. */
  interface TimePeriod {
      /** Day of the week the period starts on. */
      openDay?: DayOfWeek;
      /**
       * Time the period starts in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are `00:00` to `24:00`, where `24:00` represents
       * midnight at the end of the specified day.
       */
      openTime?: string;
      /** Day of the week the period ends on. */
      closeDay?: DayOfWeek;
      /**
       * Time the period ends in 24-hour [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) extended format. Valid values are `00:00` to `24:00`, where `24:00` represents
       * midnight at the end of the specified day.
       *
       * __Note:__ If `openDay` and `closeDay` specify the same day of the week `closeTime` must be later than `openTime`.
       */
      closeTime?: string;
  }
  /** Enumerates the days of the week. */
  enum DayOfWeek {
      MONDAY = "MONDAY",
      TUESDAY = "TUESDAY",
      WEDNESDAY = "WEDNESDAY",
      THURSDAY = "THURSDAY",
      FRIDAY = "FRIDAY",
      SATURDAY = "SATURDAY",
      SUNDAY = "SUNDAY"
  }
  /** Exception to the business's regular hours. The business can be open or closed during the exception. */
  interface SpecialHourPeriod {
      /** Start date and time of the exception in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format and [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). */
      startDate?: string;
      /** End date and time of the exception in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format and [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). */
      endDate?: string;
      /**
       * Whether the business is closed (or the service is not available) during the exception.
       *
       * Default: `true`.
       */
      isClosed?: boolean;
      /** Additional info about the exception. For example, "We close earlier on New Year's Eve." */
      comment?: string;
  }
  interface Multilingual {
      /** Supported languages list. */
      supportedLanguages?: SupportedLanguage[];
      /** Whether to redirect to user language. */
      autoRedirect?: boolean;
  }
  interface SupportedLanguage {
      /** Two-letter language code in [ISO 639-1 alpha-2](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format. */
      languageCode?: string;
      /** Locale. */
      locale?: Locale$1;
      /** Whether the supported language is the primary language for the site. */
      isPrimary?: boolean;
      /** Language icon. */
      countryCode?: string;
      /** How the language will be resolved. For internal use. */
      resolutionMethod?: ResolutionMethod;
  }
  enum ResolutionMethod {
      QUERY_PARAM = "QUERY_PARAM",
      SUBDOMAIN = "SUBDOMAIN",
      SUBDIRECTORY = "SUBDIRECTORY"
  }
  interface ConsentPolicy {
      /** Whether the site uses cookies that are essential to site operation. */
      essential?: boolean | null;
      /** Whether the site uses cookies that affect site performance and other functional measurements. */
      functional?: boolean | null;
      /** Whether the site uses cookies that collect analytics about how the site is used (in order to improve it). */
      analytics?: boolean | null;
      /** Whether the site uses cookies that collect information allowing better customization of the experience for a current visitor. */
      advertising?: boolean | null;
      /** CCPA compliance flag. */
      dataToThirdParty?: boolean | null;
  }
  /** A single mapping from the MetaSite ID to a particular service. */
  interface Translation {
      /** The service type. */
      serviceType?: string;
      /** The application definition ID; this only applies to services of type ThirdPartyApps. */
      appDefId?: string;
      /** The instance ID of the service. */
      instanceId?: string;
  }
  interface ChangeContext extends ChangeContextPayloadOneOf {
      /** Properties were updated. */
      propertiesChange?: PropertiesChange;
      /** Default properties were created on site creation. */
      siteCreated?: SiteCreated;
      /** Properties were cloned on site cloning. */
      siteCloned?: SiteCloned;
  }
  /** @oneof */
  interface ChangeContextPayloadOneOf {
      /** Properties were updated. */
      propertiesChange?: PropertiesChange;
      /** Default properties were created on site creation. */
      siteCreated?: SiteCreated;
      /** Properties were cloned on site cloning. */
      siteCloned?: SiteCloned;
  }
  interface PropertiesChange {
  }
  interface SiteCreated {
      /** Origin template site id. */
      originTemplateId?: string | null;
  }
  interface SiteCloned {
      /** Origin site id. */
      originMetaSiteId?: string;
  }
  interface Empty {
  }
  interface DomainEvent extends DomainEventBodyOneOf {
      createdEvent?: EntityCreatedEvent;
      updatedEvent?: EntityUpdatedEvent;
      deletedEvent?: EntityDeletedEvent;
      actionEvent?: ActionEvent;
      /**
       * Unique event ID.
       * Allows clients to ignore duplicate webhooks.
       */
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
      /** ID of the entity associated with the event. */
      entityId?: string;
      /** Event timestamp. */
      eventTime?: Date;
      /**
       * Whether the event was triggered as a result of a privacy regulation application
       * (for example, GDPR).
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
  }
  /** @oneof */
  interface DomainEventBodyOneOf {
      createdEvent?: EntityCreatedEvent;
      updatedEvent?: EntityUpdatedEvent;
      deletedEvent?: EntityDeletedEvent;
      actionEvent?: ActionEvent;
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
      /**
       * WIP - This property will hold both names and values of the updated fields of the entity.
       * For more details please see [adr](https://docs.google.com/document/d/1PdqsOM20Ph2HAkmx8zvUnzzk3Sekp3BR9h34wSvsRnI/edit#heading=h.phlw87mh2imx) or [issue](https://github.com/wix-private/nile-tracker/issues/363)
       * @internal
       */
      modifiedFields?: Record<string, any>;
  }
  interface EntityDeletedEvent {
      /**
       * Indicates if the entity is sent to trash-bin. only available when trash-bin is enabled
       * @internal
       */
      movedToTrash?: boolean | null;
      /** Entity that was deleted */
      deletedEntityAsJson?: string | null;
  }
  interface ActionEvent {
      bodyAsJson?: string;
  }
  /**
   * Creates a new fulfillment method.
   *
   * Regardless of the value specified in `fulfillment_method.availability.time_zone`, the timezone will be derived from the site properties.
   * @param fulfillmentMethod - Fulfillment method to create.
   * @internal
   * @documentationMaturity preview
   * @requiredField fulfillmentMethod
   * @requiredField fulfillmentMethod.availability.timeZone
   * @requiredField fulfillmentMethod.deliveryOptions.deliveryArea
   * @requiredField fulfillmentMethod.deliveryOptions.deliveryArea.postalCodeOptions.countryCode
   * @requiredField fulfillmentMethod.deliveryOptions.deliveryArea.radiusOptions.centerPointAddress
   * @requiredField fulfillmentMethod.deliveryOptions.deliveryArea.radiusOptions.value
   * @requiredField fulfillmentMethod.pickupOptions.address
   * @adminMethod
   * @returns The created fulfillment method.
   */
  function createFulfillmentMethod(fulfillmentMethod: FulfillmentMethod): Promise<FulfillmentMethod>;
  /**
   * Retrieves a fulfillment method.
   * @param fulfillmentMethodId - The ID of the fulfillment method to retrieve.
   * @internal
   * @documentationMaturity preview
   * @requiredField fulfillmentMethodId
   * @returns The retrieved fulfillment method.
   */
  function getFulfillmentMethod(fulfillmentMethodId: string): Promise<FulfillmentMethod>;
  /**
   * Updates a fulfillment method.
   *
   * Each time the fulfillment method is updated, revision increments by 1. The existing revision must be included when updating the fulfillment method. This ensures you're working with the latest fulfillment method information, and it prevents unintended overwrites.
   * @param _id - The ID of the fulfillment method.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField fulfillmentMethod
   * @requiredField fulfillmentMethod.revision
   * @adminMethod
   * @returns The updated fulfillment method.
   */
  function updateFulfillmentMethod(_id: string | null, fulfillmentMethod: UpdateFulfillmentMethod, options?: UpdateFulfillmentMethodOptions): Promise<FulfillmentMethod>;
  interface UpdateFulfillmentMethod {
      /** Data specific for pickup fulfillment method. */
      pickupOptions?: PickupInfo;
      /** Data specific for delivery fulfillment method. */
      deliveryOptions?: DeliveryInfo;
      /**
       * The ID of the fulfillment method.
       * @readonly
       */
      _id?: string | null;
      /**
       * The current state of an item. Each time the item is modified, its `revision` changes by the server. for an update operation to succeed, you MUST pass the latest revision.
       * @readonly
       */
      revision?: string | null;
      /**
       * Timestamp at which the fulfillment method was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Timestamp at which the fulfillment method was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** The fulfillment method type. */
      type?: FulfillmentMethodType;
      /** The minimum order price to qualify for using this fulfillment method. */
      minimumOrderAmount?: string | null;
      /** The fulfillment method name. */
      name?: string | null;
      /** An indication of whether the fulfillment method is enabled or not. */
      enabled?: boolean | null;
      /** The fee for using this fulfillment method. */
      fee?: string | null;
      /** The availability of this fulfillment method. */
      availability?: Availability;
      /** The minimum order price to qualify for using this fulfillment method. */
      minOrderPrice?: string | null;
  }
  interface UpdateFulfillmentMethodOptions {
      /**
       * Field mask of the fields to update.
       * @internal
       */
      fieldMask?: string[];
  }
  /**
   * Deletes a fulfillment method.
   * @param fulfillmentMethodId - The ID of the fulfillment method to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField fulfillmentMethodId
   * @adminMethod
   */
  function deleteFulfillmentMethod(fulfillmentMethodId: string): Promise<void>;
  /**
   * Retrieves a list of fulfillment methods by a given query.
   *
   * To learn how to query fulfillment methods, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language).
   *
   * Up to 100 fulfillment methods can be returned per request.
   * @internal
   * @documentationMaturity preview
   */
  function queryFulfillmentMethods(options?: QueryFulfillmentMethodsOptions): FulfillmentMethodsQueryBuilder;
  interface QueryFulfillmentMethodsOptions {
      /**
       * Projection mask of the fields to return.
       * @internal
       */
      projectionMask?: string[] | undefined;
  }
  interface QueryCursorResult$1 {
      cursors: CommonCursors;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface FulfillmentMethodsQueryResult extends QueryCursorResult$1 {
      items: FulfillmentMethod[];
      query: FulfillmentMethodsQueryBuilder;
      next: () => Promise<FulfillmentMethodsQueryResult>;
      prev: () => Promise<FulfillmentMethodsQueryResult>;
  }
  interface FulfillmentMethodsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id', value: any) => FulfillmentMethodsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id', value: any) => FulfillmentMethodsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: '_id', value: string) => FulfillmentMethodsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: '_id', value: any[]) => FulfillmentMethodsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id', value: any) => FulfillmentMethodsQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: '_id', value: boolean) => FulfillmentMethodsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id'>) => FulfillmentMethodsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_id'>) => FulfillmentMethodsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => FulfillmentMethodsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => FulfillmentMethodsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<FulfillmentMethodsQueryResult>;
  }
  /**
   * Retrieves a list of fulfillment methods.
   *
   * When an address is not provided in the input, our system retrieves a list encompassing all types of fulfillment methods.
   *
   * Conversely, if an address is given, the response includes non-delivery fulfillment methods along with delivery fulfillment methods that are applicable to the given address, ensuring the address falls within the defined delivery area of these methods.
   *
   * Up to 100 fulfillment methods can be returned.
   *
   * TODO: add support for pagination in the request since it's given in the response, and add docs reference regarding how to do the pagination
   * @internal
   * @documentationMaturity preview
   */
  function listFulfillmentMethods(options?: ListFulfillmentMethodsOptions): Promise<ListFulfillmentMethodsResponse>;
  interface ListFulfillmentMethodsOptions {
      /** The address by which to filter delivery fulfillment methods. */
      address?: CommonAddress;
      /** Cursor paging */
      cursorPaging?: CommonCursorPaging;
  }
  /**
   * Retrieves a list of fulfillment methods available for a given address.
   *
   * The response includes non-delivery fulfillment methods along with delivery fulfillment methods that are applicable to the given address, ensuring the address falls within the defined delivery area of these methods.
   *
   * Up to 100 fulfillment methods can be returned per request.
   * @internal
   * @documentationMaturity preview
   */
  function listAvailableFulfillmentMethodsForAddress(options?: ListAvailableFulfillmentMethodsForAddressOptions): Promise<ListAvailableFulfillmentMethodsForAddressResponse>;
  interface ListAvailableFulfillmentMethodsForAddressOptions {
      /** The address by which to filter delivery fulfillment methods. */
      address?: CommonAddress;
      /** Cursor paging */
      cursorPaging?: CommonCursorPaging;
      /** If provided, only fulfillment methods with the given IDs will be returned. */
      fulfillmentMethodIds?: string[];
  }
  
  type restaurantsV1FulfillmentMethod_universal_d_FulfillmentMethod = FulfillmentMethod;
  type restaurantsV1FulfillmentMethod_universal_d_FulfillmentMethodMethodOptionsOneOf = FulfillmentMethodMethodOptionsOneOf;
  type restaurantsV1FulfillmentMethod_universal_d_FulfillmentMethodType = FulfillmentMethodType;
  const restaurantsV1FulfillmentMethod_universal_d_FulfillmentMethodType: typeof FulfillmentMethodType;
  type restaurantsV1FulfillmentMethod_universal_d_PickupInfo = PickupInfo;
  type restaurantsV1FulfillmentMethod_universal_d_CommonAddress = CommonAddress;
  type restaurantsV1FulfillmentMethod_universal_d_CommonAddressStreetOneOf = CommonAddressStreetOneOf;
  type restaurantsV1FulfillmentMethod_universal_d_StreetAddress = StreetAddress;
  type restaurantsV1FulfillmentMethod_universal_d_AddressLocation = AddressLocation;
  type restaurantsV1FulfillmentMethod_universal_d_Subdivision = Subdivision;
  type restaurantsV1FulfillmentMethod_universal_d_SubdivisionType = SubdivisionType;
  const restaurantsV1FulfillmentMethod_universal_d_SubdivisionType: typeof SubdivisionType;
  type restaurantsV1FulfillmentMethod_universal_d_DeliveryInfo = DeliveryInfo;
  type restaurantsV1FulfillmentMethod_universal_d_DeliveryArea = DeliveryArea;
  type restaurantsV1FulfillmentMethod_universal_d_DeliveryAreaAreaOptionsOneOf = DeliveryAreaAreaOptionsOneOf;
  type restaurantsV1FulfillmentMethod_universal_d_Radius = Radius;
  type restaurantsV1FulfillmentMethod_universal_d_Unit = Unit;
  const restaurantsV1FulfillmentMethod_universal_d_Unit: typeof Unit;
  type restaurantsV1FulfillmentMethod_universal_d_PostalCode = PostalCode;
  type restaurantsV1FulfillmentMethod_universal_d_CustomArea = CustomArea;
  type restaurantsV1FulfillmentMethod_universal_d_Availability = Availability;
  type restaurantsV1FulfillmentMethod_universal_d_DayOfWeekAvailability = DayOfWeekAvailability;
  type restaurantsV1FulfillmentMethod_universal_d_EntitiesDayOfWeek = EntitiesDayOfWeek;
  const restaurantsV1FulfillmentMethod_universal_d_EntitiesDayOfWeek: typeof EntitiesDayOfWeek;
  type restaurantsV1FulfillmentMethod_universal_d_TimeOfDayRange = TimeOfDayRange;
  type restaurantsV1FulfillmentMethod_universal_d_TimeOfDay = TimeOfDay;
  type restaurantsV1FulfillmentMethod_universal_d_AvailabilityException = AvailabilityException;
  type restaurantsV1FulfillmentMethod_universal_d_InvalidateCache = InvalidateCache;
  type restaurantsV1FulfillmentMethod_universal_d_InvalidateCacheGetByOneOf = InvalidateCacheGetByOneOf;
  type restaurantsV1FulfillmentMethod_universal_d_App = App;
  type restaurantsV1FulfillmentMethod_universal_d_Page = Page;
  type restaurantsV1FulfillmentMethod_universal_d_URI = URI;
  type restaurantsV1FulfillmentMethod_universal_d_CreateFulfillmentMethodRequest = CreateFulfillmentMethodRequest;
  type restaurantsV1FulfillmentMethod_universal_d_CreateFulfillmentMethodResponse = CreateFulfillmentMethodResponse;
  type restaurantsV1FulfillmentMethod_universal_d_GetFulfillmentMethodRequest = GetFulfillmentMethodRequest;
  type restaurantsV1FulfillmentMethod_universal_d_GetFulfillmentMethodResponse = GetFulfillmentMethodResponse;
  type restaurantsV1FulfillmentMethod_universal_d_UpdateFulfillmentMethodRequest = UpdateFulfillmentMethodRequest;
  type restaurantsV1FulfillmentMethod_universal_d_UpdateFulfillmentMethodResponse = UpdateFulfillmentMethodResponse;
  type restaurantsV1FulfillmentMethod_universal_d_DeleteFulfillmentMethodRequest = DeleteFulfillmentMethodRequest;
  type restaurantsV1FulfillmentMethod_universal_d_DeleteFulfillmentMethodResponse = DeleteFulfillmentMethodResponse;
  type restaurantsV1FulfillmentMethod_universal_d_QueryFulfillmentMethodsRequest = QueryFulfillmentMethodsRequest;
  type restaurantsV1FulfillmentMethod_universal_d_CommonCursorPaging = CommonCursorPaging;
  type restaurantsV1FulfillmentMethod_universal_d_QueryFulfillmentMethodsResponse = QueryFulfillmentMethodsResponse;
  type restaurantsV1FulfillmentMethod_universal_d_CommonCursorPagingMetadata = CommonCursorPagingMetadata;
  type restaurantsV1FulfillmentMethod_universal_d_CommonCursors = CommonCursors;
  type restaurantsV1FulfillmentMethod_universal_d_ListFulfillmentMethodsRequest = ListFulfillmentMethodsRequest;
  type restaurantsV1FulfillmentMethod_universal_d_ListFulfillmentMethodsResponse = ListFulfillmentMethodsResponse;
  type restaurantsV1FulfillmentMethod_universal_d_ListAvailableFulfillmentMethodsForAddressRequest = ListAvailableFulfillmentMethodsForAddressRequest;
  type restaurantsV1FulfillmentMethod_universal_d_ListAvailableFulfillmentMethodsForAddressResponse = ListAvailableFulfillmentMethodsForAddressResponse;
  type restaurantsV1FulfillmentMethod_universal_d_SitePropertiesNotification = SitePropertiesNotification;
  type restaurantsV1FulfillmentMethod_universal_d_SitePropertiesEvent = SitePropertiesEvent;
  type restaurantsV1FulfillmentMethod_universal_d_Properties = Properties;
  type restaurantsV1FulfillmentMethod_universal_d_Categories = Categories;
  type restaurantsV1FulfillmentMethod_universal_d_Address = Address;
  type restaurantsV1FulfillmentMethod_universal_d_AddressHint = AddressHint;
  type restaurantsV1FulfillmentMethod_universal_d_PlacementType = PlacementType;
  const restaurantsV1FulfillmentMethod_universal_d_PlacementType: typeof PlacementType;
  type restaurantsV1FulfillmentMethod_universal_d_GeoCoordinates = GeoCoordinates;
  type restaurantsV1FulfillmentMethod_universal_d_BusinessSchedule = BusinessSchedule;
  type restaurantsV1FulfillmentMethod_universal_d_TimePeriod = TimePeriod;
  type restaurantsV1FulfillmentMethod_universal_d_DayOfWeek = DayOfWeek;
  const restaurantsV1FulfillmentMethod_universal_d_DayOfWeek: typeof DayOfWeek;
  type restaurantsV1FulfillmentMethod_universal_d_SpecialHourPeriod = SpecialHourPeriod;
  type restaurantsV1FulfillmentMethod_universal_d_Multilingual = Multilingual;
  type restaurantsV1FulfillmentMethod_universal_d_SupportedLanguage = SupportedLanguage;
  type restaurantsV1FulfillmentMethod_universal_d_ResolutionMethod = ResolutionMethod;
  const restaurantsV1FulfillmentMethod_universal_d_ResolutionMethod: typeof ResolutionMethod;
  type restaurantsV1FulfillmentMethod_universal_d_ConsentPolicy = ConsentPolicy;
  type restaurantsV1FulfillmentMethod_universal_d_Translation = Translation;
  type restaurantsV1FulfillmentMethod_universal_d_ChangeContext = ChangeContext;
  type restaurantsV1FulfillmentMethod_universal_d_ChangeContextPayloadOneOf = ChangeContextPayloadOneOf;
  type restaurantsV1FulfillmentMethod_universal_d_PropertiesChange = PropertiesChange;
  type restaurantsV1FulfillmentMethod_universal_d_SiteCreated = SiteCreated;
  type restaurantsV1FulfillmentMethod_universal_d_SiteCloned = SiteCloned;
  type restaurantsV1FulfillmentMethod_universal_d_Empty = Empty;
  type restaurantsV1FulfillmentMethod_universal_d_DomainEvent = DomainEvent;
  type restaurantsV1FulfillmentMethod_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type restaurantsV1FulfillmentMethod_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type restaurantsV1FulfillmentMethod_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type restaurantsV1FulfillmentMethod_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type restaurantsV1FulfillmentMethod_universal_d_ActionEvent = ActionEvent;
  const restaurantsV1FulfillmentMethod_universal_d_createFulfillmentMethod: typeof createFulfillmentMethod;
  const restaurantsV1FulfillmentMethod_universal_d_getFulfillmentMethod: typeof getFulfillmentMethod;
  const restaurantsV1FulfillmentMethod_universal_d_updateFulfillmentMethod: typeof updateFulfillmentMethod;
  type restaurantsV1FulfillmentMethod_universal_d_UpdateFulfillmentMethod = UpdateFulfillmentMethod;
  type restaurantsV1FulfillmentMethod_universal_d_UpdateFulfillmentMethodOptions = UpdateFulfillmentMethodOptions;
  const restaurantsV1FulfillmentMethod_universal_d_deleteFulfillmentMethod: typeof deleteFulfillmentMethod;
  const restaurantsV1FulfillmentMethod_universal_d_queryFulfillmentMethods: typeof queryFulfillmentMethods;
  type restaurantsV1FulfillmentMethod_universal_d_QueryFulfillmentMethodsOptions = QueryFulfillmentMethodsOptions;
  type restaurantsV1FulfillmentMethod_universal_d_FulfillmentMethodsQueryResult = FulfillmentMethodsQueryResult;
  type restaurantsV1FulfillmentMethod_universal_d_FulfillmentMethodsQueryBuilder = FulfillmentMethodsQueryBuilder;
  const restaurantsV1FulfillmentMethod_universal_d_listFulfillmentMethods: typeof listFulfillmentMethods;
  type restaurantsV1FulfillmentMethod_universal_d_ListFulfillmentMethodsOptions = ListFulfillmentMethodsOptions;
  const restaurantsV1FulfillmentMethod_universal_d_listAvailableFulfillmentMethodsForAddress: typeof listAvailableFulfillmentMethodsForAddress;
  type restaurantsV1FulfillmentMethod_universal_d_ListAvailableFulfillmentMethodsForAddressOptions = ListAvailableFulfillmentMethodsForAddressOptions;
  namespace restaurantsV1FulfillmentMethod_universal_d {
    export {
      __debug$1 as __debug,
      restaurantsV1FulfillmentMethod_universal_d_FulfillmentMethod as FulfillmentMethod,
      restaurantsV1FulfillmentMethod_universal_d_FulfillmentMethodMethodOptionsOneOf as FulfillmentMethodMethodOptionsOneOf,
      restaurantsV1FulfillmentMethod_universal_d_FulfillmentMethodType as FulfillmentMethodType,
      restaurantsV1FulfillmentMethod_universal_d_PickupInfo as PickupInfo,
      restaurantsV1FulfillmentMethod_universal_d_CommonAddress as CommonAddress,
      restaurantsV1FulfillmentMethod_universal_d_CommonAddressStreetOneOf as CommonAddressStreetOneOf,
      restaurantsV1FulfillmentMethod_universal_d_StreetAddress as StreetAddress,
      restaurantsV1FulfillmentMethod_universal_d_AddressLocation as AddressLocation,
      restaurantsV1FulfillmentMethod_universal_d_Subdivision as Subdivision,
      restaurantsV1FulfillmentMethod_universal_d_SubdivisionType as SubdivisionType,
      restaurantsV1FulfillmentMethod_universal_d_DeliveryInfo as DeliveryInfo,
      restaurantsV1FulfillmentMethod_universal_d_DeliveryArea as DeliveryArea,
      restaurantsV1FulfillmentMethod_universal_d_DeliveryAreaAreaOptionsOneOf as DeliveryAreaAreaOptionsOneOf,
      Type$1 as Type,
      restaurantsV1FulfillmentMethod_universal_d_Radius as Radius,
      restaurantsV1FulfillmentMethod_universal_d_Unit as Unit,
      restaurantsV1FulfillmentMethod_universal_d_PostalCode as PostalCode,
      restaurantsV1FulfillmentMethod_universal_d_CustomArea as CustomArea,
      restaurantsV1FulfillmentMethod_universal_d_Availability as Availability,
      restaurantsV1FulfillmentMethod_universal_d_DayOfWeekAvailability as DayOfWeekAvailability,
      restaurantsV1FulfillmentMethod_universal_d_EntitiesDayOfWeek as EntitiesDayOfWeek,
      restaurantsV1FulfillmentMethod_universal_d_TimeOfDayRange as TimeOfDayRange,
      restaurantsV1FulfillmentMethod_universal_d_TimeOfDay as TimeOfDay,
      restaurantsV1FulfillmentMethod_universal_d_AvailabilityException as AvailabilityException,
      restaurantsV1FulfillmentMethod_universal_d_InvalidateCache as InvalidateCache,
      restaurantsV1FulfillmentMethod_universal_d_InvalidateCacheGetByOneOf as InvalidateCacheGetByOneOf,
      restaurantsV1FulfillmentMethod_universal_d_App as App,
      restaurantsV1FulfillmentMethod_universal_d_Page as Page,
      restaurantsV1FulfillmentMethod_universal_d_URI as URI,
      restaurantsV1FulfillmentMethod_universal_d_CreateFulfillmentMethodRequest as CreateFulfillmentMethodRequest,
      restaurantsV1FulfillmentMethod_universal_d_CreateFulfillmentMethodResponse as CreateFulfillmentMethodResponse,
      restaurantsV1FulfillmentMethod_universal_d_GetFulfillmentMethodRequest as GetFulfillmentMethodRequest,
      restaurantsV1FulfillmentMethod_universal_d_GetFulfillmentMethodResponse as GetFulfillmentMethodResponse,
      restaurantsV1FulfillmentMethod_universal_d_UpdateFulfillmentMethodRequest as UpdateFulfillmentMethodRequest,
      restaurantsV1FulfillmentMethod_universal_d_UpdateFulfillmentMethodResponse as UpdateFulfillmentMethodResponse,
      restaurantsV1FulfillmentMethod_universal_d_DeleteFulfillmentMethodRequest as DeleteFulfillmentMethodRequest,
      restaurantsV1FulfillmentMethod_universal_d_DeleteFulfillmentMethodResponse as DeleteFulfillmentMethodResponse,
      restaurantsV1FulfillmentMethod_universal_d_QueryFulfillmentMethodsRequest as QueryFulfillmentMethodsRequest,
      CursorQuery$1 as CursorQuery,
      CursorQueryPagingMethodOneOf$1 as CursorQueryPagingMethodOneOf,
      Sorting$1 as Sorting,
      SortOrder$1 as SortOrder,
      restaurantsV1FulfillmentMethod_universal_d_CommonCursorPaging as CommonCursorPaging,
      restaurantsV1FulfillmentMethod_universal_d_QueryFulfillmentMethodsResponse as QueryFulfillmentMethodsResponse,
      restaurantsV1FulfillmentMethod_universal_d_CommonCursorPagingMetadata as CommonCursorPagingMetadata,
      restaurantsV1FulfillmentMethod_universal_d_CommonCursors as CommonCursors,
      restaurantsV1FulfillmentMethod_universal_d_ListFulfillmentMethodsRequest as ListFulfillmentMethodsRequest,
      restaurantsV1FulfillmentMethod_universal_d_ListFulfillmentMethodsResponse as ListFulfillmentMethodsResponse,
      restaurantsV1FulfillmentMethod_universal_d_ListAvailableFulfillmentMethodsForAddressRequest as ListAvailableFulfillmentMethodsForAddressRequest,
      restaurantsV1FulfillmentMethod_universal_d_ListAvailableFulfillmentMethodsForAddressResponse as ListAvailableFulfillmentMethodsForAddressResponse,
      restaurantsV1FulfillmentMethod_universal_d_SitePropertiesNotification as SitePropertiesNotification,
      restaurantsV1FulfillmentMethod_universal_d_SitePropertiesEvent as SitePropertiesEvent,
      restaurantsV1FulfillmentMethod_universal_d_Properties as Properties,
      restaurantsV1FulfillmentMethod_universal_d_Categories as Categories,
      Locale$1 as Locale,
      restaurantsV1FulfillmentMethod_universal_d_Address as Address,
      restaurantsV1FulfillmentMethod_universal_d_AddressHint as AddressHint,
      restaurantsV1FulfillmentMethod_universal_d_PlacementType as PlacementType,
      restaurantsV1FulfillmentMethod_universal_d_GeoCoordinates as GeoCoordinates,
      restaurantsV1FulfillmentMethod_universal_d_BusinessSchedule as BusinessSchedule,
      restaurantsV1FulfillmentMethod_universal_d_TimePeriod as TimePeriod,
      restaurantsV1FulfillmentMethod_universal_d_DayOfWeek as DayOfWeek,
      restaurantsV1FulfillmentMethod_universal_d_SpecialHourPeriod as SpecialHourPeriod,
      restaurantsV1FulfillmentMethod_universal_d_Multilingual as Multilingual,
      restaurantsV1FulfillmentMethod_universal_d_SupportedLanguage as SupportedLanguage,
      restaurantsV1FulfillmentMethod_universal_d_ResolutionMethod as ResolutionMethod,
      restaurantsV1FulfillmentMethod_universal_d_ConsentPolicy as ConsentPolicy,
      restaurantsV1FulfillmentMethod_universal_d_Translation as Translation,
      restaurantsV1FulfillmentMethod_universal_d_ChangeContext as ChangeContext,
      restaurantsV1FulfillmentMethod_universal_d_ChangeContextPayloadOneOf as ChangeContextPayloadOneOf,
      restaurantsV1FulfillmentMethod_universal_d_PropertiesChange as PropertiesChange,
      restaurantsV1FulfillmentMethod_universal_d_SiteCreated as SiteCreated,
      restaurantsV1FulfillmentMethod_universal_d_SiteCloned as SiteCloned,
      restaurantsV1FulfillmentMethod_universal_d_Empty as Empty,
      restaurantsV1FulfillmentMethod_universal_d_DomainEvent as DomainEvent,
      restaurantsV1FulfillmentMethod_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      restaurantsV1FulfillmentMethod_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      restaurantsV1FulfillmentMethod_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      restaurantsV1FulfillmentMethod_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      restaurantsV1FulfillmentMethod_universal_d_ActionEvent as ActionEvent,
      restaurantsV1FulfillmentMethod_universal_d_createFulfillmentMethod as createFulfillmentMethod,
      restaurantsV1FulfillmentMethod_universal_d_getFulfillmentMethod as getFulfillmentMethod,
      restaurantsV1FulfillmentMethod_universal_d_updateFulfillmentMethod as updateFulfillmentMethod,
      restaurantsV1FulfillmentMethod_universal_d_UpdateFulfillmentMethod as UpdateFulfillmentMethod,
      restaurantsV1FulfillmentMethod_universal_d_UpdateFulfillmentMethodOptions as UpdateFulfillmentMethodOptions,
      restaurantsV1FulfillmentMethod_universal_d_deleteFulfillmentMethod as deleteFulfillmentMethod,
      restaurantsV1FulfillmentMethod_universal_d_queryFulfillmentMethods as queryFulfillmentMethods,
      restaurantsV1FulfillmentMethod_universal_d_QueryFulfillmentMethodsOptions as QueryFulfillmentMethodsOptions,
      restaurantsV1FulfillmentMethod_universal_d_FulfillmentMethodsQueryResult as FulfillmentMethodsQueryResult,
      restaurantsV1FulfillmentMethod_universal_d_FulfillmentMethodsQueryBuilder as FulfillmentMethodsQueryBuilder,
      restaurantsV1FulfillmentMethod_universal_d_listFulfillmentMethods as listFulfillmentMethods,
      restaurantsV1FulfillmentMethod_universal_d_ListFulfillmentMethodsOptions as ListFulfillmentMethodsOptions,
      restaurantsV1FulfillmentMethod_universal_d_listAvailableFulfillmentMethodsForAddress as listAvailableFulfillmentMethodsForAddress,
      restaurantsV1FulfillmentMethod_universal_d_ListAvailableFulfillmentMethodsForAddressOptions as ListAvailableFulfillmentMethodsForAddressOptions,
    };
  }
  
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface Rule extends RuleValueOneOf, RuleRequirementsOneOf, RuleConditionsOneOf, RuleConditionTypeOptionsOneOf, RuleTaxesOneOf {
      /** Fixed fee. Must hold a positive value. */
      amount?: Money;
      /** Percentage fee. Must hold values in the range: [0-100]. */
      percentage?: string | null;
      /** Fixed fee. Must hold a positive value. */
      fixedFee?: Money;
      /** Percentage fee. Must hold values in the range: [0-100]. */
      percentageFee?: string | null;
      /** A single condition that must be met for the rule to be applied tp an order. */
      condition?: Condition;
      /** A binary tree of logical conditions that must be met in order for a service fee rule to be applied to an order. */
      conditionTree?: ConditionTree;
      /** A single condition that must be met for the rule to be applied tp an order. */
      conditionOptions?: Condition;
      /** A binary tree of logical conditions that must be met in order for a service fee rule to be applied to an order. */
      conditionTreeOptions?: ConditionTree;
      /** Percentage of custom tax rate (range of [0-100]) */
      customTaxRate?: string | null;
      /** Tax group id */
      taxGroupId?: string | null;
      /**
       * Rule ID
       * @readonly
       */
      _id?: string | null;
      /** ID of the site’s location */
      locationId?: string | null;
      /** Rule name */
      name?: string | null;
      /**
       * Represents the time this Rule was created, in `yyyy-mm-ddThh:mm:sssZ` format
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Rule was last updated, in `yyyy-mm-ddThh:mm:sssZ` format
       * @readonly
       */
      _updatedDate?: Date;
      /** Rule tax rate of the sale in percentage. Must hold values in the range: [0-100]. */
      taxRate?: string | null;
      /** Specifies the chosen type of the conditions field. */
      conditionsType?: ConditionsType;
      /** Specifies the chosen type of the conditions field. */
      conditionType?: ConditionType;
      /** Represents if rule is enabled by the user */
      enabled?: boolean | null;
      /**
       * Revision number. Increments by 1 each time the rule is updated.
       * To prevent conflicting changes, the existing `revision` must be used when updating a rule.
       * @readonly
       */
      revision?: string | null;
      /** DEPRECATED - for filtering between rules in the same site for different apps (e.g. ecom & restaurants) */
      label?: string | null;
      /** For filtering between rules in the same site from different apps (e.g. ecom & restaurants) */
      appId?: string | null;
      /** Rounding strategy for fees and taxes calculation */
      roundingStrategy?: RoundingStrategy;
  }
  /** @oneof */
  interface RuleValueOneOf {
      /** Fixed fee. Must hold a positive value. */
      amount?: Money;
      /** Percentage fee. Must hold values in the range: [0-100]. */
      percentage?: string | null;
  }
  /** @oneof */
  interface RuleRequirementsOneOf {
      /** Fixed fee. Must hold a positive value. */
      fixedFee?: Money;
      /** Percentage fee. Must hold values in the range: [0-100]. */
      percentageFee?: string | null;
  }
  /** @oneof */
  interface RuleConditionsOneOf {
      /** A single condition that must be met for the rule to be applied tp an order. */
      condition?: Condition;
      /** A binary tree of logical conditions that must be met in order for a service fee rule to be applied to an order. */
      conditionTree?: ConditionTree;
  }
  /** @oneof */
  interface RuleConditionTypeOptionsOneOf {
      /** A single condition that must be met for the rule to be applied tp an order. */
      conditionOptions?: Condition;
      /** A binary tree of logical conditions that must be met in order for a service fee rule to be applied to an order. */
      conditionTreeOptions?: ConditionTree;
  }
  /** @oneof */
  interface RuleTaxesOneOf {
      /** Percentage of custom tax rate (range of [0-100]) */
      customTaxRate?: string | null;
      /** Tax group id */
      taxGroupId?: string | null;
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
  interface Condition extends ConditionValueOneOf {
      /** Contains a numeric value and an operation to perform on the field in the provided path. */
      number?: _Number;
      /** Contains a list of strings to compare to the field in the provided path. */
      list?: List;
      /** The path of the field in the Order entity this condition will evaluate (e.g. priceSummary.subtotal) */
      path?: string;
      /** The path of the field in the Order entity this condition will evaluate (e.g. priceSummary.subtotal) */
      orderFieldPath?: string;
      /** The type of the field in the provided path (e.g. priceSummary.subtotal -> Int) */
      expectedType?: ExpectedType;
      /** The type of the field in the provided path (e.g. priceSummary.subtotal -> Int) */
      expectedFieldType?: ExpectedFieldType;
  }
  /** @oneof */
  interface ConditionValueOneOf {
      /** Contains a numeric value and an operation to perform on the field in the provided path. */
      number?: _Number;
      /** Contains a list of strings to compare to the field in the provided path. */
      list?: List;
  }
  interface ExpectedType {
      /** The type of the field in the provided path. */
      value?: Value;
  }
  enum Value {
      /** Represents a number value. */
      NUMBER = "NUMBER",
      /** Represents a list of strings values - Not supported yet. */
      LIST = "LIST",
      /** Represents a string value. */
      STRING = "STRING"
  }
  enum ExpectedFieldType {
      /** Unknown expected field type */
      UNKNOWN_EXPECTED_FIELD_TYPE = "UNKNOWN_EXPECTED_FIELD_TYPE",
      /** Represents a number value. */
      NUMBER = "NUMBER",
      /** Represents a list of strings values - Not supported yet. */
      LIST = "LIST",
      /** Represents a string value. */
      STRING = "STRING"
  }
  interface _Number {
      /** A numeric value to compare with the specified operation. */
      value?: number;
      /** The operation to perform together with specified value. */
      operation?: Operation;
  }
  enum Operation {
      /** == */
      EQ = "EQ",
      /** < */
      LT = "LT",
      /** <= */
      LE = "LE",
      /** > */
      GT = "GT",
      /** >= */
      GE = "GE"
  }
  interface List {
      /** A list of accepted string values to compare with the field in the provided path. */
      values?: string[];
  }
  /** Used to represent a logical condition in the form of a tree structure. */
  interface ConditionTree extends ConditionTreeLeftConditionNodeOneOf, ConditionTreeRightConditionNodeOneOf {
      /** A single condition that must be met for the rule to be applied tp an order. */
      leftCondition?: Condition;
      /** A binary tree of logical conditions that must be met in order for a service fee rule to be applied to an order. */
      leftConditionsTree?: ConditionTree;
      /** A single condition that must be met for the rule to be applied tp an order. */
      rightCondition?: Condition;
      /** A binary tree of logical conditions that must be met in order for a service fee rule to be applied to an order. */
      rightConditionsTree?: ConditionTree;
      /** Specifies the logical operator to use when combining the evaluation of the left and right conditions. */
      operator?: Operator;
  }
  /** @oneof */
  interface ConditionTreeLeftConditionNodeOneOf {
      /** A single condition that must be met for the rule to be applied tp an order. */
      leftCondition?: Condition;
      /** A binary tree of logical conditions that must be met in order for a service fee rule to be applied to an order. */
      leftConditionsTree?: ConditionTree;
  }
  /** @oneof */
  interface ConditionTreeRightConditionNodeOneOf {
      /** A single condition that must be met for the rule to be applied tp an order. */
      rightCondition?: Condition;
      /** A binary tree of logical conditions that must be met in order for a service fee rule to be applied to an order. */
      rightConditionsTree?: ConditionTree;
  }
  enum Operator {
      /** The condition is true if both the left and right sides are true. */
      AND = "AND",
      /** The condition is true if either the left or right side is true. */
      OR = "OR"
  }
  enum ConditionsType {
      /** Indicates that the Rule has no conditions specified. */
      NO_CONDITIONS = "NO_CONDITIONS",
      /** Indicates that the Rule has a single Condition. */
      CONDITION = "CONDITION",
      /** Indicates that the Rule has a complex condition specified as a ConditionTree. */
      CONDITION_TREE = "CONDITION_TREE"
  }
  enum ConditionType {
      /** Indicates that the Rule has no conditions specified. */
      UNDEFINED_CONDITION_TYPE = "UNDEFINED_CONDITION_TYPE",
      /** Indicates that the Rule has a single Condition. */
      CONDITION = "CONDITION",
      /** Indicates that the Rule has a complex condition specified as a ConditionTree. */
      CONDITION_TREE = "CONDITION_TREE"
  }
  enum RoundingStrategy {
      /** Unknown rounding strategy */
      UNKNOWN_ROUNDING_STRATEGY = "UNKNOWN_ROUNDING_STRATEGY",
      /** Half-up rounding strategy - relevant for fee and percentage fee calculation. */
      HALF_UP = "HALF_UP",
      /** Half-even rounding strategy - relevant for fee and percentage fee calculation. */
      HALF_EVEN = "HALF_EVEN"
  }
  interface CalculateServiceFeesRequest {
      /** Necessary order information for fees evaluation and calculation. */
      order: Order;
      /** DEPRECATED - for filtering between rules in the same site for different apps (e.g. ecom & restaurants) */
      label?: string | null;
      /** For filtering between rules in the same site from different apps (e.g. ecom & restaurants) */
      appId?: string | null;
  }
  interface Order {
      /**
       * Order ID.
       * @readonly
       */
      _id?: string;
      /** ID of the site's location */
      locationId?: string | null;
      /** Currency used for pricing in this site. */
      currency?: string | null;
      /** The order's price information. */
      priceSummary?: PriceSummary;
      /** The order's shipping information. */
      shippingInfo?: ShippingInformation;
      /** The platform from which the order was placed */
      platform?: Platform;
      /** Order's locale */
      locale?: Locale;
  }
  interface PriceSummary {
      /** Subtotal of the order */
      subtotal?: string;
  }
  interface ShippingInformation {
      /** Shipping logistics of the order */
      logistics?: DeliveryLogistics;
  }
  interface DeliveryLogistics {
      /** Delivery fulfillment type of the order (e.g. pickup, delivery, dine-in) */
      type?: Type;
  }
  enum Type {
      /** Missing type due to an error */
      UNSPECIFIED_FULFILLMENT_TYPE = "UNSPECIFIED_FULFILLMENT_TYPE",
      /** Pickup */
      PICKUP = "PICKUP",
      /** Delivery */
      DELIVERY = "DELIVERY",
      /** Dine-in */
      DINE_IN = "DINE_IN",
      /** Curbside-pickup */
      CURBSIDE_PICKUP = "CURBSIDE_PICKUP"
  }
  interface Platform {
      /** The platform from which the order was placed (e.g. site, mobile site, mobile app) */
      value?: PlatformValue;
  }
  enum PlatformValue {
      /** Site */
      SITE = "SITE",
      /** Mobile site */
      MOBILE_SITE = "MOBILE_SITE",
      /** Mobile app */
      MOBILE_APP = "MOBILE_APP"
  }
  interface Locale {
      /** Language code (ISO 639-1). */
      languageCode?: string | null;
      /** Country code (ISO 3166-1). */
      country?: string | null;
  }
  interface CalculateServiceFeesResponse {
      /** A list of calculated fees based on rules evaluation. */
      calculatedFees?: CalculatedFee[];
  }
  interface CalculatedFee {
      /** The rule id that was used to calculate the fee. */
      ruleId?: string;
      /**
       * The rule name.
       * @readonly
       */
      name?: string;
      /** The fee amount. */
      fee?: Money;
      /** The tax amount. */
      tax?: Money;
      /** Tax group id - alternative to calculating the tax amount manually. */
      taxGroupId?: string | null;
  }
  interface CreateRuleRequest {
      /** Rule to be created */
      rule: Rule;
  }
  interface CreateRuleResponse {
      /** The created Rule */
      rule?: Rule;
  }
  interface GetRuleRequest {
      /** Id of the Rule to retrieve */
      ruleId: string;
  }
  interface GetRuleResponse {
      /** The retrieved Rule */
      rule?: Rule;
  }
  interface UpdateRuleRequest {
      /** Rule to be updated */
      rule: Rule;
      /**
       * Explicit list of fields to update
       * @internal
       */
      mask?: string[];
  }
  interface UpdateRuleResponse {
      /** The updated Rule */
      rule?: Rule;
  }
  interface DeleteRuleRequest {
      /** Id of the Rule to delete */
      ruleId: string;
  }
  interface DeleteRuleResponse {
  }
  interface ListRulesRequest {
      /** ID of the restaurant’s location */
      locationId?: string | null;
      /** DEPRECATED - for filtering between rules in the same site for different apps (e.g. ecom & restaurants) */
      label?: string | null;
      /** For filtering between rules in the same site from different apps (e.g. ecom & restaurants) */
      appId?: string | null;
  }
  interface ListRulesResponse {
      /** list of all of the user's rules */
      rules?: Rule[];
  }
  interface QueryRulesRequest {
      /** WQL expression. */
      query: CursorQuery;
  }
  interface CursorQuery extends CursorQueryPagingMethodOneOf {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
      cursorPaging?: CursorPaging;
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting[];
  }
  /** @oneof */
  interface CursorQueryPagingMethodOneOf {
      /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
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
  interface QueryRulesResponse {
      /** The retrieved Rules */
      rules?: Rule[];
      /** Paging metadata */
      pagingMetadata?: CursorPagingMetadata;
  }
  interface CursorPagingMetadata {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      cursors?: Cursors;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       */
      hasNext?: boolean | null;
  }
  interface Cursors {
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface BulkCreateRulesRequest {
      /** Rules to be created */
      rules: Rule[];
      /** Whether the full Rule entity is returned. Defaults to `false`. */
      returnFullEntity?: boolean;
  }
  interface BulkCreateRulesResponse {
      /** Information about the created rule. */
      results?: BulkRuleResult[];
      /** Bulk Create Rule metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkRuleResult {
      /** Metadata of the rule. */
      itemMetadata?: ItemMetadata;
      /** The rule. */
      rule?: Rule;
  }
  interface ItemMetadata {
      /** Item ID. Should always be available, unless it's impossible (for example, when failing to create an item). */
      _id?: string | null;
      /** Index of the item within the request array. Allows for correlation between request and response items. */
      originalIndex?: number;
      /** Whether the requested action was successful for this item. When `false`, the `error` field is populated. */
      success?: boolean;
      /** Details about the error in case of failure. */
      error?: ApplicationError;
  }
  interface ApplicationError {
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
  interface BulkUpdateRulesRequest {
      /** Masked Rules to be updated */
      rules: MaskedRule[];
      /** Whether the full Rule entity is returned. Defaults to `false`. */
      returnFullEntity?: boolean;
  }
  interface MaskedRule {
      /** Rule to be updated */
      rule?: Rule;
      /**
       * Explicit list of fields to update
       * @internal
       */
      mask?: string[];
  }
  interface BulkUpdateRulesResponse {
      /** Information about the updated rule. */
      results?: BulkRuleResult[];
      /** Bulk update Rule metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkDeleteRulesRequest {
      /** Id of the Rule to delete */
      ruleIds: string[];
  }
  interface BulkDeleteRulesResponse {
      /** Information about the deleted rule. */
      results?: BulkRuleResult[];
      /** Bulk delete Rule metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  /**
   * Calculate service fees for an order by evaluating all rules created for the site.
   * @param order - Necessary order information for fees evaluation and calculation.
   * @internal
   * @documentationMaturity preview
   * @requiredField order
   * @requiredField order.currency
   * @requiredField order.priceSummary
   */
  function calculateServiceFees(order: Order, options?: CalculateServiceFeesOptions): Promise<CalculateServiceFeesResponse>;
  interface CalculateServiceFeesOptions {
      /** DEPRECATED - for filtering between rules in the same site for different apps (e.g. ecom & restaurants) */
      label?: string | null;
      /** For filtering between rules in the same site from different apps (e.g. ecom & restaurants) */
      appId?: string | null;
  }
  /**
   * Creates a new Rule
   * @param rule - Rule to be created
   * @internal
   * @documentationMaturity preview
   * @requiredField rule
   * @requiredField rule.enabled
   * @requiredField rule.name
   * @adminMethod
   * @returns The created Rule
   */
  function createRule(rule: Rule): Promise<Rule>;
  /**
   * Get a Rule by id
   * @param ruleId - Id of the Rule to retrieve
   * @internal
   * @documentationMaturity preview
   * @requiredField ruleId
   * @returns The retrieved Rule
   */
  function getRule(ruleId: string): Promise<Rule>;
  /**
   * Update a Rule, supports partial update
   * Pass the latest `revision` for a successful update
   * @param _id - Rule ID
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField rule
   * @requiredField rule.revision
   * @adminMethod
   * @returns The updated Rule
   */
  function updateRule(_id: string | null, rule: UpdateRule, options?: UpdateRuleOptions): Promise<Rule>;
  interface UpdateRule {
      /** Fixed fee. Must hold a positive value. */
      amount?: Money;
      /** Percentage fee. Must hold values in the range: [0-100]. */
      percentage?: string | null;
      /** Fixed fee. Must hold a positive value. */
      fixedFee?: Money;
      /** Percentage fee. Must hold values in the range: [0-100]. */
      percentageFee?: string | null;
      /** A single condition that must be met for the rule to be applied tp an order. */
      condition?: Condition;
      /** A binary tree of logical conditions that must be met in order for a service fee rule to be applied to an order. */
      conditionTree?: ConditionTree;
      /** A single condition that must be met for the rule to be applied tp an order. */
      conditionOptions?: Condition;
      /** A binary tree of logical conditions that must be met in order for a service fee rule to be applied to an order. */
      conditionTreeOptions?: ConditionTree;
      /** Percentage of custom tax rate (range of [0-100]) */
      customTaxRate?: string | null;
      /** Tax group id */
      taxGroupId?: string | null;
      /**
       * Rule ID
       * @readonly
       */
      _id?: string | null;
      /** ID of the site’s location */
      locationId?: string | null;
      /** Rule name */
      name?: string | null;
      /**
       * Represents the time this Rule was created, in `yyyy-mm-ddThh:mm:sssZ` format
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Represents the time this Rule was last updated, in `yyyy-mm-ddThh:mm:sssZ` format
       * @readonly
       */
      _updatedDate?: Date;
      /** Rule tax rate of the sale in percentage. Must hold values in the range: [0-100]. */
      taxRate?: string | null;
      /** Specifies the chosen type of the conditions field. */
      conditionsType?: ConditionsType;
      /** Specifies the chosen type of the conditions field. */
      conditionType?: ConditionType;
      /** Represents if rule is enabled by the user */
      enabled?: boolean | null;
      /**
       * Revision number. Increments by 1 each time the rule is updated.
       * To prevent conflicting changes, the existing `revision` must be used when updating a rule.
       * @readonly
       */
      revision?: string | null;
      /** DEPRECATED - for filtering between rules in the same site for different apps (e.g. ecom & restaurants) */
      label?: string | null;
      /** For filtering between rules in the same site from different apps (e.g. ecom & restaurants) */
      appId?: string | null;
      /** Rounding strategy for fees and taxes calculation */
      roundingStrategy?: RoundingStrategy;
  }
  interface UpdateRuleOptions {
      /**
       * Explicit list of fields to update
       * @internal
       */
      mask?: string[];
  }
  /**
   * Delete a Rule
   * @param ruleId - Id of the Rule to delete
   * @internal
   * @documentationMaturity preview
   * @requiredField ruleId
   * @adminMethod
   */
  function deleteRule(ruleId: string): Promise<void>;
  /**
   * List of all the available rules for the user
   * @internal
   * @documentationMaturity preview
   */
  function listRules(options?: ListRulesOptions): Promise<ListRulesResponse>;
  interface ListRulesOptions {
      /** ID of the restaurant’s location */
      locationId?: string | null;
      /** DEPRECATED - for filtering between rules in the same site for different apps (e.g. ecom & restaurants) */
      label?: string | null;
      /** For filtering between rules in the same site from different apps (e.g. ecom & restaurants) */
      appId?: string | null;
  }
  /**
   * Query Operations using [WQL - Wix Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language)
   * @internal
   * @documentationMaturity preview
   */
  function queryRules(): RulesQueryBuilder;
  interface QueryCursorResult {
      cursors: Cursors;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface RulesQueryResult extends QueryCursorResult {
      items: Rule[];
      query: RulesQueryBuilder;
      next: () => Promise<RulesQueryResult>;
      prev: () => Promise<RulesQueryResult>;
  }
  interface RulesQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id', value: any) => RulesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id', value: any) => RulesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `string`.
       * @param string - String to compare against. Case-insensitive.
       * @documentationMaturity preview
       */
      startsWith: (propertyName: '_id', value: string) => RulesQueryBuilder;
      /** @param propertyName - Property whose value is compared with `values`.
       * @param values - List of values to compare against.
       * @documentationMaturity preview
       */
      hasSome: (propertyName: '_id', value: any[]) => RulesQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id', value: any) => RulesQueryBuilder;
      /** @documentationMaturity preview */
      exists: (propertyName: '_id', value: boolean) => RulesQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id'>) => RulesQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_id'>) => RulesQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => RulesQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => RulesQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<RulesQueryResult>;
  }
  /**
   * Bulk create new Rules
   * @param rules - Rules to be created
   * @internal
   * @documentationMaturity preview
   * @requiredField rules
   * @adminMethod
   */
  function bulkCreateRules(rules: Rule[], options?: BulkCreateRulesOptions): Promise<BulkCreateRulesResponse>;
  interface BulkCreateRulesOptions {
      /** Whether the full Rule entity is returned. Defaults to `false`. */
      returnFullEntity?: boolean;
  }
  /**
   * Bulk update Rules, supports partial update
   * Pass the latest `revision` for a successful update
   * @param rules - Masked Rules to be updated
   * @internal
   * @documentationMaturity preview
   * @requiredField rules
   * @adminMethod
   */
  function bulkUpdateRules(rules: MaskedRule[], options?: BulkUpdateRulesOptions): Promise<BulkUpdateRulesResponse>;
  interface BulkUpdateRulesOptions {
      /** Whether the full Rule entity is returned. Defaults to `false`. */
      returnFullEntity?: boolean;
  }
  /**
   * Bulk delete Rules
   * @param ruleIds - Id of the Rule to delete
   * @internal
   * @documentationMaturity preview
   * @requiredField ruleIds
   * @adminMethod
   */
  function bulkDeleteRules(ruleIds: string[]): Promise<BulkDeleteRulesResponse>;
  
  const serviceFeesV1Rule_universal_d___debug: typeof __debug;
  type serviceFeesV1Rule_universal_d_Rule = Rule;
  type serviceFeesV1Rule_universal_d_RuleValueOneOf = RuleValueOneOf;
  type serviceFeesV1Rule_universal_d_RuleRequirementsOneOf = RuleRequirementsOneOf;
  type serviceFeesV1Rule_universal_d_RuleConditionsOneOf = RuleConditionsOneOf;
  type serviceFeesV1Rule_universal_d_RuleConditionTypeOptionsOneOf = RuleConditionTypeOptionsOneOf;
  type serviceFeesV1Rule_universal_d_RuleTaxesOneOf = RuleTaxesOneOf;
  type serviceFeesV1Rule_universal_d_Money = Money;
  type serviceFeesV1Rule_universal_d_Condition = Condition;
  type serviceFeesV1Rule_universal_d_ConditionValueOneOf = ConditionValueOneOf;
  type serviceFeesV1Rule_universal_d_ExpectedType = ExpectedType;
  type serviceFeesV1Rule_universal_d_Value = Value;
  const serviceFeesV1Rule_universal_d_Value: typeof Value;
  type serviceFeesV1Rule_universal_d_ExpectedFieldType = ExpectedFieldType;
  const serviceFeesV1Rule_universal_d_ExpectedFieldType: typeof ExpectedFieldType;
  type serviceFeesV1Rule_universal_d__Number = _Number;
  type serviceFeesV1Rule_universal_d_Operation = Operation;
  const serviceFeesV1Rule_universal_d_Operation: typeof Operation;
  type serviceFeesV1Rule_universal_d_List = List;
  type serviceFeesV1Rule_universal_d_ConditionTree = ConditionTree;
  type serviceFeesV1Rule_universal_d_ConditionTreeLeftConditionNodeOneOf = ConditionTreeLeftConditionNodeOneOf;
  type serviceFeesV1Rule_universal_d_ConditionTreeRightConditionNodeOneOf = ConditionTreeRightConditionNodeOneOf;
  type serviceFeesV1Rule_universal_d_Operator = Operator;
  const serviceFeesV1Rule_universal_d_Operator: typeof Operator;
  type serviceFeesV1Rule_universal_d_ConditionsType = ConditionsType;
  const serviceFeesV1Rule_universal_d_ConditionsType: typeof ConditionsType;
  type serviceFeesV1Rule_universal_d_ConditionType = ConditionType;
  const serviceFeesV1Rule_universal_d_ConditionType: typeof ConditionType;
  type serviceFeesV1Rule_universal_d_RoundingStrategy = RoundingStrategy;
  const serviceFeesV1Rule_universal_d_RoundingStrategy: typeof RoundingStrategy;
  type serviceFeesV1Rule_universal_d_CalculateServiceFeesRequest = CalculateServiceFeesRequest;
  type serviceFeesV1Rule_universal_d_Order = Order;
  type serviceFeesV1Rule_universal_d_PriceSummary = PriceSummary;
  type serviceFeesV1Rule_universal_d_ShippingInformation = ShippingInformation;
  type serviceFeesV1Rule_universal_d_DeliveryLogistics = DeliveryLogistics;
  type serviceFeesV1Rule_universal_d_Type = Type;
  const serviceFeesV1Rule_universal_d_Type: typeof Type;
  type serviceFeesV1Rule_universal_d_Platform = Platform;
  type serviceFeesV1Rule_universal_d_PlatformValue = PlatformValue;
  const serviceFeesV1Rule_universal_d_PlatformValue: typeof PlatformValue;
  type serviceFeesV1Rule_universal_d_Locale = Locale;
  type serviceFeesV1Rule_universal_d_CalculateServiceFeesResponse = CalculateServiceFeesResponse;
  type serviceFeesV1Rule_universal_d_CalculatedFee = CalculatedFee;
  type serviceFeesV1Rule_universal_d_CreateRuleRequest = CreateRuleRequest;
  type serviceFeesV1Rule_universal_d_CreateRuleResponse = CreateRuleResponse;
  type serviceFeesV1Rule_universal_d_GetRuleRequest = GetRuleRequest;
  type serviceFeesV1Rule_universal_d_GetRuleResponse = GetRuleResponse;
  type serviceFeesV1Rule_universal_d_UpdateRuleRequest = UpdateRuleRequest;
  type serviceFeesV1Rule_universal_d_UpdateRuleResponse = UpdateRuleResponse;
  type serviceFeesV1Rule_universal_d_DeleteRuleRequest = DeleteRuleRequest;
  type serviceFeesV1Rule_universal_d_DeleteRuleResponse = DeleteRuleResponse;
  type serviceFeesV1Rule_universal_d_ListRulesRequest = ListRulesRequest;
  type serviceFeesV1Rule_universal_d_ListRulesResponse = ListRulesResponse;
  type serviceFeesV1Rule_universal_d_QueryRulesRequest = QueryRulesRequest;
  type serviceFeesV1Rule_universal_d_CursorQuery = CursorQuery;
  type serviceFeesV1Rule_universal_d_CursorQueryPagingMethodOneOf = CursorQueryPagingMethodOneOf;
  type serviceFeesV1Rule_universal_d_Sorting = Sorting;
  type serviceFeesV1Rule_universal_d_SortOrder = SortOrder;
  const serviceFeesV1Rule_universal_d_SortOrder: typeof SortOrder;
  type serviceFeesV1Rule_universal_d_CursorPaging = CursorPaging;
  type serviceFeesV1Rule_universal_d_QueryRulesResponse = QueryRulesResponse;
  type serviceFeesV1Rule_universal_d_CursorPagingMetadata = CursorPagingMetadata;
  type serviceFeesV1Rule_universal_d_Cursors = Cursors;
  type serviceFeesV1Rule_universal_d_BulkCreateRulesRequest = BulkCreateRulesRequest;
  type serviceFeesV1Rule_universal_d_BulkCreateRulesResponse = BulkCreateRulesResponse;
  type serviceFeesV1Rule_universal_d_BulkRuleResult = BulkRuleResult;
  type serviceFeesV1Rule_universal_d_ItemMetadata = ItemMetadata;
  type serviceFeesV1Rule_universal_d_ApplicationError = ApplicationError;
  type serviceFeesV1Rule_universal_d_BulkActionMetadata = BulkActionMetadata;
  type serviceFeesV1Rule_universal_d_BulkUpdateRulesRequest = BulkUpdateRulesRequest;
  type serviceFeesV1Rule_universal_d_MaskedRule = MaskedRule;
  type serviceFeesV1Rule_universal_d_BulkUpdateRulesResponse = BulkUpdateRulesResponse;
  type serviceFeesV1Rule_universal_d_BulkDeleteRulesRequest = BulkDeleteRulesRequest;
  type serviceFeesV1Rule_universal_d_BulkDeleteRulesResponse = BulkDeleteRulesResponse;
  const serviceFeesV1Rule_universal_d_calculateServiceFees: typeof calculateServiceFees;
  type serviceFeesV1Rule_universal_d_CalculateServiceFeesOptions = CalculateServiceFeesOptions;
  const serviceFeesV1Rule_universal_d_createRule: typeof createRule;
  const serviceFeesV1Rule_universal_d_getRule: typeof getRule;
  const serviceFeesV1Rule_universal_d_updateRule: typeof updateRule;
  type serviceFeesV1Rule_universal_d_UpdateRule = UpdateRule;
  type serviceFeesV1Rule_universal_d_UpdateRuleOptions = UpdateRuleOptions;
  const serviceFeesV1Rule_universal_d_deleteRule: typeof deleteRule;
  const serviceFeesV1Rule_universal_d_listRules: typeof listRules;
  type serviceFeesV1Rule_universal_d_ListRulesOptions = ListRulesOptions;
  const serviceFeesV1Rule_universal_d_queryRules: typeof queryRules;
  type serviceFeesV1Rule_universal_d_RulesQueryResult = RulesQueryResult;
  type serviceFeesV1Rule_universal_d_RulesQueryBuilder = RulesQueryBuilder;
  const serviceFeesV1Rule_universal_d_bulkCreateRules: typeof bulkCreateRules;
  type serviceFeesV1Rule_universal_d_BulkCreateRulesOptions = BulkCreateRulesOptions;
  const serviceFeesV1Rule_universal_d_bulkUpdateRules: typeof bulkUpdateRules;
  type serviceFeesV1Rule_universal_d_BulkUpdateRulesOptions = BulkUpdateRulesOptions;
  const serviceFeesV1Rule_universal_d_bulkDeleteRules: typeof bulkDeleteRules;
  namespace serviceFeesV1Rule_universal_d {
    export {
      serviceFeesV1Rule_universal_d___debug as __debug,
      serviceFeesV1Rule_universal_d_Rule as Rule,
      serviceFeesV1Rule_universal_d_RuleValueOneOf as RuleValueOneOf,
      serviceFeesV1Rule_universal_d_RuleRequirementsOneOf as RuleRequirementsOneOf,
      serviceFeesV1Rule_universal_d_RuleConditionsOneOf as RuleConditionsOneOf,
      serviceFeesV1Rule_universal_d_RuleConditionTypeOptionsOneOf as RuleConditionTypeOptionsOneOf,
      serviceFeesV1Rule_universal_d_RuleTaxesOneOf as RuleTaxesOneOf,
      serviceFeesV1Rule_universal_d_Money as Money,
      serviceFeesV1Rule_universal_d_Condition as Condition,
      serviceFeesV1Rule_universal_d_ConditionValueOneOf as ConditionValueOneOf,
      serviceFeesV1Rule_universal_d_ExpectedType as ExpectedType,
      serviceFeesV1Rule_universal_d_Value as Value,
      serviceFeesV1Rule_universal_d_ExpectedFieldType as ExpectedFieldType,
      serviceFeesV1Rule_universal_d__Number as _Number,
      serviceFeesV1Rule_universal_d_Operation as Operation,
      serviceFeesV1Rule_universal_d_List as List,
      serviceFeesV1Rule_universal_d_ConditionTree as ConditionTree,
      serviceFeesV1Rule_universal_d_ConditionTreeLeftConditionNodeOneOf as ConditionTreeLeftConditionNodeOneOf,
      serviceFeesV1Rule_universal_d_ConditionTreeRightConditionNodeOneOf as ConditionTreeRightConditionNodeOneOf,
      serviceFeesV1Rule_universal_d_Operator as Operator,
      serviceFeesV1Rule_universal_d_ConditionsType as ConditionsType,
      serviceFeesV1Rule_universal_d_ConditionType as ConditionType,
      serviceFeesV1Rule_universal_d_RoundingStrategy as RoundingStrategy,
      serviceFeesV1Rule_universal_d_CalculateServiceFeesRequest as CalculateServiceFeesRequest,
      serviceFeesV1Rule_universal_d_Order as Order,
      serviceFeesV1Rule_universal_d_PriceSummary as PriceSummary,
      serviceFeesV1Rule_universal_d_ShippingInformation as ShippingInformation,
      serviceFeesV1Rule_universal_d_DeliveryLogistics as DeliveryLogistics,
      serviceFeesV1Rule_universal_d_Type as Type,
      serviceFeesV1Rule_universal_d_Platform as Platform,
      serviceFeesV1Rule_universal_d_PlatformValue as PlatformValue,
      serviceFeesV1Rule_universal_d_Locale as Locale,
      serviceFeesV1Rule_universal_d_CalculateServiceFeesResponse as CalculateServiceFeesResponse,
      serviceFeesV1Rule_universal_d_CalculatedFee as CalculatedFee,
      serviceFeesV1Rule_universal_d_CreateRuleRequest as CreateRuleRequest,
      serviceFeesV1Rule_universal_d_CreateRuleResponse as CreateRuleResponse,
      serviceFeesV1Rule_universal_d_GetRuleRequest as GetRuleRequest,
      serviceFeesV1Rule_universal_d_GetRuleResponse as GetRuleResponse,
      serviceFeesV1Rule_universal_d_UpdateRuleRequest as UpdateRuleRequest,
      serviceFeesV1Rule_universal_d_UpdateRuleResponse as UpdateRuleResponse,
      serviceFeesV1Rule_universal_d_DeleteRuleRequest as DeleteRuleRequest,
      serviceFeesV1Rule_universal_d_DeleteRuleResponse as DeleteRuleResponse,
      serviceFeesV1Rule_universal_d_ListRulesRequest as ListRulesRequest,
      serviceFeesV1Rule_universal_d_ListRulesResponse as ListRulesResponse,
      serviceFeesV1Rule_universal_d_QueryRulesRequest as QueryRulesRequest,
      serviceFeesV1Rule_universal_d_CursorQuery as CursorQuery,
      serviceFeesV1Rule_universal_d_CursorQueryPagingMethodOneOf as CursorQueryPagingMethodOneOf,
      serviceFeesV1Rule_universal_d_Sorting as Sorting,
      serviceFeesV1Rule_universal_d_SortOrder as SortOrder,
      serviceFeesV1Rule_universal_d_CursorPaging as CursorPaging,
      serviceFeesV1Rule_universal_d_QueryRulesResponse as QueryRulesResponse,
      serviceFeesV1Rule_universal_d_CursorPagingMetadata as CursorPagingMetadata,
      serviceFeesV1Rule_universal_d_Cursors as Cursors,
      serviceFeesV1Rule_universal_d_BulkCreateRulesRequest as BulkCreateRulesRequest,
      serviceFeesV1Rule_universal_d_BulkCreateRulesResponse as BulkCreateRulesResponse,
      serviceFeesV1Rule_universal_d_BulkRuleResult as BulkRuleResult,
      serviceFeesV1Rule_universal_d_ItemMetadata as ItemMetadata,
      serviceFeesV1Rule_universal_d_ApplicationError as ApplicationError,
      serviceFeesV1Rule_universal_d_BulkActionMetadata as BulkActionMetadata,
      serviceFeesV1Rule_universal_d_BulkUpdateRulesRequest as BulkUpdateRulesRequest,
      serviceFeesV1Rule_universal_d_MaskedRule as MaskedRule,
      serviceFeesV1Rule_universal_d_BulkUpdateRulesResponse as BulkUpdateRulesResponse,
      serviceFeesV1Rule_universal_d_BulkDeleteRulesRequest as BulkDeleteRulesRequest,
      serviceFeesV1Rule_universal_d_BulkDeleteRulesResponse as BulkDeleteRulesResponse,
      serviceFeesV1Rule_universal_d_calculateServiceFees as calculateServiceFees,
      serviceFeesV1Rule_universal_d_CalculateServiceFeesOptions as CalculateServiceFeesOptions,
      serviceFeesV1Rule_universal_d_createRule as createRule,
      serviceFeesV1Rule_universal_d_getRule as getRule,
      serviceFeesV1Rule_universal_d_updateRule as updateRule,
      serviceFeesV1Rule_universal_d_UpdateRule as UpdateRule,
      serviceFeesV1Rule_universal_d_UpdateRuleOptions as UpdateRuleOptions,
      serviceFeesV1Rule_universal_d_deleteRule as deleteRule,
      serviceFeesV1Rule_universal_d_listRules as listRules,
      serviceFeesV1Rule_universal_d_ListRulesOptions as ListRulesOptions,
      serviceFeesV1Rule_universal_d_queryRules as queryRules,
      serviceFeesV1Rule_universal_d_RulesQueryResult as RulesQueryResult,
      serviceFeesV1Rule_universal_d_RulesQueryBuilder as RulesQueryBuilder,
      serviceFeesV1Rule_universal_d_bulkCreateRules as bulkCreateRules,
      serviceFeesV1Rule_universal_d_BulkCreateRulesOptions as BulkCreateRulesOptions,
      serviceFeesV1Rule_universal_d_bulkUpdateRules as bulkUpdateRules,
      serviceFeesV1Rule_universal_d_BulkUpdateRulesOptions as BulkUpdateRulesOptions,
      serviceFeesV1Rule_universal_d_bulkDeleteRules as bulkDeleteRules,
    };
  }
  
  export { restaurantsV1FulfillmentMethod_universal_d as fulfillmentMethods, restaurantsMenusV1Item_universal_d as menuItems, restaurantsMenusV1Menu_universal_d as menus, restaurantsOperationsV1Operation_universal_d as operations, restaurantsMenusV1Section_universal_d as sections, serviceFeesV1Rule_universal_d as serviceFeesCalculate };
}

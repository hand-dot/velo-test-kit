declare module "wix-custom-fields-schema.v2" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** DataExtensionSchema is the main entity of DataExtensionSchemaService */
  interface DataExtensionSchema {
      /**
       * Unique identifier for a schema
       * @readonly
       */
      _id?: string | null;
      /** FQDN of the entity that this schema extends */
      fqdn?: string | null;
      /**
       * Namespace of this extension. may be:
       * `@company/app1`
       * An app in dev-center that defines this extension for itself.
       * `_user_fields`
       * A user that defines this extension for self usage.
       */
      namespace?: string | null;
      /**
       * Actual schema definition of this extension is JSON-SCHEMA format with the following vocab extension:
       * ```
       * {
       * "$schema": "https://json-schema.org/draft/2020-12/schema",
       * "$id": "https://wixapis.com/v1/json-schema/extensions",
       * "$vocabulary": {
       * "https://wixapis.com/v1/json-schema/extensions/vocab/data-extensions": true
       * },
       * "$dynamicAnchor": "meta",
       * "title": "Wix' data-extensions vocabulary meta schema",
       * "type": [
       * "object",
       * "boolean"
       * ],
       * "properties": {
       * "x-wix-permissions": {
       * "type": "object",
       * "description": "list of identity types that are allowed reading schema properties",
       * "properties": {
       * "read": {
       * "type": "array",
       * "items": {
       * "type": "string",
       * "enum": [
       * "apps",
       * "owning-app",
       * "users",
       * "users-of-users"
       * ]
       * }
       * },
       * "write": {
       * "type": "array",
       * "items": {
       * "type": "string",
       * "enum": [
       * "apps",
       * "owning-app",
       * "users",
       * "users-of-users"
       * ]
       * }
       * }
       * }
       * },
       * "x-wix-display": {
       * "type": "object",
       * "description": "field display properties",
       * "schema": {
       * "properties": {
       * "placeholder": {
       * "type": "string",
       * "maxLength": 255,
       * "description": "placeholder text for input fields"
       * },
       * "label": {
       * "type": "string",
       * "maxLength": 255,
       * "description": "label of the input fields"
       * },
       * "hint": {
       * "type": "string",
       * "maxLength": 255,
       * "description": "a short explanation that appears next to the input field"
       * }
       * }
       * }
       * }
       * }
       * }
       * ```
       */
      jsonSchema?: Record<string, any> | null;
      /**
       * last updated
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * creation date
       * @readonly
       */
      _createdDate?: Date;
      /**
       * revision of data record
       * @readonly
       */
      revision?: string | null;
      /**
       * app def if of the app in the given namespace
       * @internal
       * @readonly
       */
      appDefId?: string | null;
      /**
       * Maximum allowed schema size in bytes
       * @readonly
       */
      maxLimitBytes?: number | null;
      /**
       * Current schema size in bytes
       * @readonly
       */
      currentSizeBytes?: number | null;
  }
  interface CreateDataExtensionSchemaRequest {
      /** the schema to create */
      dataExtensionSchema: DataExtensionSchema;
  }
  interface CreateDataExtensionSchemaResponse {
      /** the created schema */
      dataExtensionSchema?: DataExtensionSchema;
  }
  interface UpdateDataExtensionSchemaRequest {
      /** the schema to update */
      dataExtensionSchema?: DataExtensionSchema;
  }
  interface UpdateDataExtensionSchemaResponse {
      /** the updated schema */
      dataExtensionSchema?: DataExtensionSchema;
  }
  interface ListDataExtensionSchemasRequest {
      /** fqdn */
      fqdn: string;
      /** namespaces */
      namespaces?: string[];
      /** Shows additional requested fields */
      fields?: RequestedField[];
  }
  enum RequestedField {
      /** Doesn't do anything */
      UNKNOWN_REQUESTED_FIELD = "UNKNOWN_REQUESTED_FIELD",
      /** Shows x-wix-archived fields in DataExtensionSchema.json_schema */
      ARCHIVED = "ARCHIVED"
  }
  interface ListDataExtensionSchemasResponse {
      /** resulted schemas */
      dataExtensionSchemas?: DataExtensionSchema[];
  }
  interface UpsertDataExtensionGlobalSchemaRequest {
      /** the upsert to create */
      dataExtensionSchema?: DataExtensionSchema;
  }
  interface UpsertDataExtensionGlobalSchemaResponse {
      /** the upsert schema */
      dataExtensionSchema?: DataExtensionSchema;
  }
  interface DeleteDemoDataExtensionSchemaRequest {
      /** schema id */
      dataExtensionSchemaId?: string;
  }
  interface DeleteDemoDataExtensionSchemaResponse {
  }
  interface DeleteGlobalExtensionSchemaRequest {
      /** fqdn */
      fqdn?: string;
      /** namespace */
      namespace?: string;
  }
  interface EnrichAndSaveDataExtensionSchemaRequest {
      /** schema id */
      dataExtensionSchemaId: string;
      /** tenant id */
      tenantId?: string;
  }
  interface EnrichAndSaveDataExtensionSchemaResponse {
      /** the updated schema */
      dataExtensionSchema?: DataExtensionSchema;
  }
  interface DeleteByWhiteListedMetaSiteRequest {
      metaSiteId: string;
  }
  interface DeleteByWhiteListedMetaSiteResponse {
      hasMore?: boolean;
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
   * Creates a new data extension schema
   * @param dataExtensionSchema - the schema to create
   * @internal
   * @documentationMaturity preview
   * @requiredField dataExtensionSchema
   * @requiredField dataExtensionSchema.fqdn
   * @requiredField dataExtensionSchema.jsonSchema
   * @requiredField dataExtensionSchema.namespace
   * @adminMethod
   * @returns the created schema
   */
  function createDataExtensionSchema(dataExtensionSchema: DataExtensionSchema): Promise<DataExtensionSchema>;
  /**
   * Updates an existing data extension schema
   * @internal
   * @documentationMaturity preview
   * @requiredField options.dataExtensionSchema._id
   * @requiredField options.dataExtensionSchema.jsonSchema
   * @requiredField options.dataExtensionSchema.revision
   * @adminMethod
   */
  function updateDataExtensionSchema(options?: UpdateDataExtensionSchemaOptions): Promise<UpdateDataExtensionSchemaResponse>;
  interface UpdateDataExtensionSchemaOptions {
      /** the schema to update */
      dataExtensionSchema?: DataExtensionSchema;
  }
  /**
   * Lists both global and user defined data extensions schema for the fqdn
   * @param fqdn - fqdn
   * @internal
   * @documentationMaturity preview
   * @requiredField fqdn
   */
  function listDataExtensionSchemas(fqdn: string, options?: ListDataExtensionSchemasOptions): Promise<ListDataExtensionSchemasResponse>;
  interface ListDataExtensionSchemasOptions {
      /** namespaces */
      namespaces?: string[];
      /** Shows additional requested fields */
      fields?: RequestedField[];
  }
  /**
   * Enrich and save existing data extension schema (temporary endpoint for data migration)
   * @param dataExtensionSchemaId - schema id
   * @internal
   * @documentationMaturity preview
   * @requiredField dataExtensionSchemaId
   * @adminMethod
   */
  function enrichAndSaveDataExtensionSchema(dataExtensionSchemaId: string, options?: EnrichAndSaveDataExtensionSchemaOptions): Promise<EnrichAndSaveDataExtensionSchemaResponse>;
  interface EnrichAndSaveDataExtensionSchemaOptions {
      /** tenant id */
      tenantId?: string;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField metaSiteId
   * @adminMethod
   */
  function deleteByWhiteListedMetaSite(metaSiteId: string): Promise<DeleteByWhiteListedMetaSiteResponse>;
  
  const dataExtensionsV1DataExtensionSchema_universal_d___debug: typeof __debug;
  type dataExtensionsV1DataExtensionSchema_universal_d_DataExtensionSchema = DataExtensionSchema;
  type dataExtensionsV1DataExtensionSchema_universal_d_CreateDataExtensionSchemaRequest = CreateDataExtensionSchemaRequest;
  type dataExtensionsV1DataExtensionSchema_universal_d_CreateDataExtensionSchemaResponse = CreateDataExtensionSchemaResponse;
  type dataExtensionsV1DataExtensionSchema_universal_d_UpdateDataExtensionSchemaRequest = UpdateDataExtensionSchemaRequest;
  type dataExtensionsV1DataExtensionSchema_universal_d_UpdateDataExtensionSchemaResponse = UpdateDataExtensionSchemaResponse;
  type dataExtensionsV1DataExtensionSchema_universal_d_ListDataExtensionSchemasRequest = ListDataExtensionSchemasRequest;
  type dataExtensionsV1DataExtensionSchema_universal_d_RequestedField = RequestedField;
  const dataExtensionsV1DataExtensionSchema_universal_d_RequestedField: typeof RequestedField;
  type dataExtensionsV1DataExtensionSchema_universal_d_ListDataExtensionSchemasResponse = ListDataExtensionSchemasResponse;
  type dataExtensionsV1DataExtensionSchema_universal_d_UpsertDataExtensionGlobalSchemaRequest = UpsertDataExtensionGlobalSchemaRequest;
  type dataExtensionsV1DataExtensionSchema_universal_d_UpsertDataExtensionGlobalSchemaResponse = UpsertDataExtensionGlobalSchemaResponse;
  type dataExtensionsV1DataExtensionSchema_universal_d_DeleteDemoDataExtensionSchemaRequest = DeleteDemoDataExtensionSchemaRequest;
  type dataExtensionsV1DataExtensionSchema_universal_d_DeleteDemoDataExtensionSchemaResponse = DeleteDemoDataExtensionSchemaResponse;
  type dataExtensionsV1DataExtensionSchema_universal_d_DeleteGlobalExtensionSchemaRequest = DeleteGlobalExtensionSchemaRequest;
  type dataExtensionsV1DataExtensionSchema_universal_d_EnrichAndSaveDataExtensionSchemaRequest = EnrichAndSaveDataExtensionSchemaRequest;
  type dataExtensionsV1DataExtensionSchema_universal_d_EnrichAndSaveDataExtensionSchemaResponse = EnrichAndSaveDataExtensionSchemaResponse;
  type dataExtensionsV1DataExtensionSchema_universal_d_DeleteByWhiteListedMetaSiteRequest = DeleteByWhiteListedMetaSiteRequest;
  type dataExtensionsV1DataExtensionSchema_universal_d_DeleteByWhiteListedMetaSiteResponse = DeleteByWhiteListedMetaSiteResponse;
  type dataExtensionsV1DataExtensionSchema_universal_d_DomainEvent = DomainEvent;
  type dataExtensionsV1DataExtensionSchema_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type dataExtensionsV1DataExtensionSchema_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type dataExtensionsV1DataExtensionSchema_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type dataExtensionsV1DataExtensionSchema_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type dataExtensionsV1DataExtensionSchema_universal_d_ActionEvent = ActionEvent;
  const dataExtensionsV1DataExtensionSchema_universal_d_createDataExtensionSchema: typeof createDataExtensionSchema;
  const dataExtensionsV1DataExtensionSchema_universal_d_updateDataExtensionSchema: typeof updateDataExtensionSchema;
  type dataExtensionsV1DataExtensionSchema_universal_d_UpdateDataExtensionSchemaOptions = UpdateDataExtensionSchemaOptions;
  const dataExtensionsV1DataExtensionSchema_universal_d_listDataExtensionSchemas: typeof listDataExtensionSchemas;
  type dataExtensionsV1DataExtensionSchema_universal_d_ListDataExtensionSchemasOptions = ListDataExtensionSchemasOptions;
  const dataExtensionsV1DataExtensionSchema_universal_d_enrichAndSaveDataExtensionSchema: typeof enrichAndSaveDataExtensionSchema;
  type dataExtensionsV1DataExtensionSchema_universal_d_EnrichAndSaveDataExtensionSchemaOptions = EnrichAndSaveDataExtensionSchemaOptions;
  const dataExtensionsV1DataExtensionSchema_universal_d_deleteByWhiteListedMetaSite: typeof deleteByWhiteListedMetaSite;
  namespace dataExtensionsV1DataExtensionSchema_universal_d {
    export {
      dataExtensionsV1DataExtensionSchema_universal_d___debug as __debug,
      dataExtensionsV1DataExtensionSchema_universal_d_DataExtensionSchema as DataExtensionSchema,
      dataExtensionsV1DataExtensionSchema_universal_d_CreateDataExtensionSchemaRequest as CreateDataExtensionSchemaRequest,
      dataExtensionsV1DataExtensionSchema_universal_d_CreateDataExtensionSchemaResponse as CreateDataExtensionSchemaResponse,
      dataExtensionsV1DataExtensionSchema_universal_d_UpdateDataExtensionSchemaRequest as UpdateDataExtensionSchemaRequest,
      dataExtensionsV1DataExtensionSchema_universal_d_UpdateDataExtensionSchemaResponse as UpdateDataExtensionSchemaResponse,
      dataExtensionsV1DataExtensionSchema_universal_d_ListDataExtensionSchemasRequest as ListDataExtensionSchemasRequest,
      dataExtensionsV1DataExtensionSchema_universal_d_RequestedField as RequestedField,
      dataExtensionsV1DataExtensionSchema_universal_d_ListDataExtensionSchemasResponse as ListDataExtensionSchemasResponse,
      dataExtensionsV1DataExtensionSchema_universal_d_UpsertDataExtensionGlobalSchemaRequest as UpsertDataExtensionGlobalSchemaRequest,
      dataExtensionsV1DataExtensionSchema_universal_d_UpsertDataExtensionGlobalSchemaResponse as UpsertDataExtensionGlobalSchemaResponse,
      dataExtensionsV1DataExtensionSchema_universal_d_DeleteDemoDataExtensionSchemaRequest as DeleteDemoDataExtensionSchemaRequest,
      dataExtensionsV1DataExtensionSchema_universal_d_DeleteDemoDataExtensionSchemaResponse as DeleteDemoDataExtensionSchemaResponse,
      dataExtensionsV1DataExtensionSchema_universal_d_DeleteGlobalExtensionSchemaRequest as DeleteGlobalExtensionSchemaRequest,
      dataExtensionsV1DataExtensionSchema_universal_d_EnrichAndSaveDataExtensionSchemaRequest as EnrichAndSaveDataExtensionSchemaRequest,
      dataExtensionsV1DataExtensionSchema_universal_d_EnrichAndSaveDataExtensionSchemaResponse as EnrichAndSaveDataExtensionSchemaResponse,
      dataExtensionsV1DataExtensionSchema_universal_d_DeleteByWhiteListedMetaSiteRequest as DeleteByWhiteListedMetaSiteRequest,
      dataExtensionsV1DataExtensionSchema_universal_d_DeleteByWhiteListedMetaSiteResponse as DeleteByWhiteListedMetaSiteResponse,
      dataExtensionsV1DataExtensionSchema_universal_d_DomainEvent as DomainEvent,
      dataExtensionsV1DataExtensionSchema_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      dataExtensionsV1DataExtensionSchema_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      dataExtensionsV1DataExtensionSchema_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      dataExtensionsV1DataExtensionSchema_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      dataExtensionsV1DataExtensionSchema_universal_d_ActionEvent as ActionEvent,
      dataExtensionsV1DataExtensionSchema_universal_d_createDataExtensionSchema as createDataExtensionSchema,
      dataExtensionsV1DataExtensionSchema_universal_d_updateDataExtensionSchema as updateDataExtensionSchema,
      dataExtensionsV1DataExtensionSchema_universal_d_UpdateDataExtensionSchemaOptions as UpdateDataExtensionSchemaOptions,
      dataExtensionsV1DataExtensionSchema_universal_d_listDataExtensionSchemas as listDataExtensionSchemas,
      dataExtensionsV1DataExtensionSchema_universal_d_ListDataExtensionSchemasOptions as ListDataExtensionSchemasOptions,
      dataExtensionsV1DataExtensionSchema_universal_d_enrichAndSaveDataExtensionSchema as enrichAndSaveDataExtensionSchema,
      dataExtensionsV1DataExtensionSchema_universal_d_EnrichAndSaveDataExtensionSchemaOptions as EnrichAndSaveDataExtensionSchemaOptions,
      dataExtensionsV1DataExtensionSchema_universal_d_deleteByWhiteListedMetaSite as deleteByWhiteListedMetaSite,
    };
  }
  
  export { dataExtensionsV1DataExtensionSchema_universal_d as schemas };
}

declare module "wix-online-programs-backend" {
  const __debug$1: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface Program {
      /** @readonly */
      _id?: string | null;
      /** program settings that can be updated by */
      settings?: ProgramsSettings;
      /**
       * current program state
       * @readonly
       */
      state?: StateTransition$1;
      /**
       * sections/steps general info
       * @readonly
       */
      contentSummary?: ContentSummary;
      /**
       * participant stats
       * @readonly
       */
      participationStats?: ParticipationStats;
      /**
       * msid where the program was created
       * @readonly
       */
      msid?: string;
      /** @readonly */
      categoryIds?: string[];
      /**
       * identity of the program creator
       * @readonly
       */
      createdBy?: PersonIdentity;
      /**
       * part of the EXTENDED fieldset -> info about the current person participation in the program.
       * @readonly
       */
      participation?: Participation;
  }
  interface ProgramsSettings {
      /** timeline type -> Self-paced, time-restricted. */
      timeline?: Timeline;
      /** general program info */
      description?: ObjectDescription$1;
      /** participant limitation, step-completion pace and etc. */
      restrictions?: ProgramRestrictions;
      /** single-payment price. */
      pricing?: Money;
      /** seo settings */
      seo?: Seo;
      rewards?: Reward[];
      /** connected social group. */
      socialGroupId?: string | null;
  }
  interface Timeline extends TimelineTimelineOptionsOneOf {
      /** an endless program, owner adds steps "on the fly" */
      ongoing?: Ongoing;
      /** program duration is fixed, every participant has its own start-date. */
      flexible?: Flexible;
      /** program duration is fixed, all participants share the same time range. */
      specific?: Specific;
      /** endless or fixed program where steps are not limited by time. */
      selfPaced?: SelfPaced;
  }
  /** @oneof */
  interface TimelineTimelineOptionsOneOf {
      /** an endless program, owner adds steps "on the fly" */
      ongoing?: Ongoing;
      /** program duration is fixed, every participant has its own start-date. */
      flexible?: Flexible;
      /** program duration is fixed, all participants share the same time range. */
      specific?: Specific;
      /** endless or fixed program where steps are not limited by time. */
      selfPaced?: SelfPaced;
  }
  /** Time duration */
  interface TimeDuration$1 {
      /** DAYS or WEEKS */
      unit?: DurationUnit$1;
      /** number of unit */
      value?: number;
  }
  enum DurationUnit$1 {
      DAYS = "DAYS",
      WEEKS = "WEEKS"
  }
  interface Ongoing {
      /** specific date chosen by owner to start the program */
      startDate?: string;
  }
  interface Flexible {
      /** duration of the program */
      duration?: TimeDuration$1;
  }
  interface Specific {
      /** everyone starts on this day */
      startDate?: string;
      /** program duration */
      duration?: TimeDuration$1;
  }
  interface SelfPaced {
      /** give participants time duration to finish. */
      duration?: TimeDuration$1;
  }
  interface ObjectDescription$1 {
      /** object title */
      title?: string | null;
      /** object details */
      details?: string | null;
      /** media */
      media?: MediaItem$1;
  }
  interface MediaItem$1 extends MediaItemMediaOneOf$1 {
      /** WixMedia image */
      image?: string;
      /** WixMedia video */
      video?: string;
  }
  /** @oneof */
  interface MediaItemMediaOneOf$1 {
      /** WixMedia image */
      image?: string;
      /** WixMedia video */
      video?: string;
  }
  interface VideoResolution {
      /** Video URL. */
      url?: string;
      /** Video height. */
      height?: number;
      /** Video width. */
      width?: number;
      /**
       * Deprecated. Use the `posters` property in the parent entity instead.
       * @internal
       */
      poster?: string;
      /** Video format for example, mp4, hls. */
      format?: string;
      /**
       * Deprecated. Use the `urlExpirationDate` property in the parent entity instead.
       * @internal
       */
      urlExpirationDate?: Date;
      /**
       * Deprecated. Use the `sizeInBytes` property in the parent entity instead. Size cannot be provided per resolution.
       * @internal
       */
      sizeInBytes?: string | null;
      /**
       * Video quality. For example: 480p, 720p.
       * @internal
       */
      quality?: string | null;
      /**
       * Video filename.
       * @internal
       */
      filename?: string | null;
      /**
       * Video duration in seconds.
       * @internal
       * @readonly
       */
      durationInSeconds?: number | null;
      /**
       * Video duration in milliseconds.
       * @internal
       * @readonly
       */
      durationInMilliseconds?: number | null;
      /**
       * When true, this is a protected asset, and calling the URL will return a 403 error.
       * In order to access private assets, make a request to:
       * `GenerateFileDownloadUrl` with the WixMedia id and specify the asset_key in the request
       * @internal
       * @readonly
       */
      private?: boolean | null;
      /**
       * Key to identify the video resolution's relationship to the original media in WixMedia.
       * Can be used to request a download for the specific video resolution.
       * For example: 480p.mp4, 720p.mp4, 1080p.mp4, trailer-720p.mp4, clip-720p.mp4
       * @internal
       * @readonly
       */
      assetKey?: string | null;
  }
  interface ProgramRestrictions {
      /** limit of active participants in the program. */
      maxParticipants?: number | null;
      /** hide steps in the Pending state. */
      hideFutureSteps?: boolean;
      /** allow participants complete steps in the certain order. */
      resolveStepsInOrder?: boolean;
      /** visibility and join access */
      accessType?: AccessType;
      /** allow program participants to share their progress in group */
      shareProgress?: boolean;
  }
  enum AccessType {
      PUBLIC = "PUBLIC",
      PRIVATE = "PRIVATE",
      SECRET = "SECRET"
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
  interface Seo {
      /** challenge slug expression. */
      slug?: string;
      /** schema used by Seo team */
      seoData?: SeoSchema;
      /** program url */
      url?: string;
      /** image url from description media */
      imageUrl?: string | null;
  }
  /**
   * The SEO schema object contains data about different types of meta tags. It makes sure that the information about your page is presented properly to search engines.
   * The search engines use this information for ranking purposes, or to display snippets in the search results.
   * This data will override other sources of tags (for example patterns) and will be included in the <head> section of the HTML document, while not being displayed on the page itself.
   */
  interface SeoSchema {
      /** SEO tag information. */
      tags?: Tag[];
      /** SEO general settings. */
      settings?: Settings$1;
  }
  interface Keyword {
      /** Keyword value. */
      term?: string;
      /** Whether the keyword is the main focus keyword. */
      isMain?: boolean;
  }
  interface Tag {
      /**
       * SEO tag type.
       *
       *
       * Supported values: `title`, `meta`, `script`, `link`.
       */
      type?: string;
      /**
       * A `{'key':'value'}` pair object where each SEO tag property (`'name'`, `'content'`, `'rel'`, `'href'`) contains a value.
       * For example: `{'name': 'description', 'content': 'the description itself'}`.
       */
      props?: Record<string, any> | null;
      /** SEO tag meta data. For example, `{height: 300, width: 240}`. */
      meta?: Record<string, any> | null;
      /** SEO tag inner content. For example, `<title> inner content </title>`. */
      children?: string;
      /** Whether the tag is a custom tag. */
      custom?: boolean;
      /** Whether the tag is disabled. */
      disabled?: boolean;
  }
  interface Settings$1 {
      /**
       * Whether the Auto Redirect feature, which creates `301 redirects` on a slug change, is enabled.
       *
       *
       * Default: `false` (Auto Redirect is enabled.)
       */
      preventAutoRedirect?: boolean;
      /** User-selected keyword terms for a specific page. */
      keywords?: Keyword[];
  }
  interface Reward {
      /** on which action rewards must be assigned. */
      trigger?: Trigger;
      /** badges participant will get on program complete */
      badgeIds?: string[];
      /** certificate for program. Currently is program GUID */
      certificate?: Certificate$1;
  }
  enum Trigger {
      /** member joins the program */
      JOINED_TO_PROGRAM = "JOINED_TO_PROGRAM",
      /** at least one step completed */
      STEP_COMPLETED = "STEP_COMPLETED",
      /** all steps are completed. */
      ALL_STEPS_COMPLETED = "ALL_STEPS_COMPLETED"
  }
  interface Certificate$1 {
      /** Certificate for program completion. Currently is program GUID */
      _id?: string | null;
      /** date it was connected to program */
      connectedDate?: Date;
  }
  interface StateTransition$1 {
      /** program state */
      state?: StateTransitionState;
      /** time when program changed state */
      occurredAt?: Date;
  }
  enum StateTransitionState {
      /** not published program, visible only to site owner */
      DRAFT = "DRAFT",
      /** program visible regarding to restrictions */
      PUBLISHED = "PUBLISHED",
      FINISHED = "FINISHED",
      ARCHIVED = "ARCHIVED"
  }
  interface ContentSummary {
      /** number of steps in the program */
      totalSteps?: number;
      /** number of sections in the program */
      totalSections?: number;
  }
  interface ParticipationStats {
      /** number of active and finished participants. */
      activeCount?: number;
      /** number of pending join requests */
      joinRequestCount?: number;
      /** number of invited members. */
      invitationCount?: number;
      /** number of participants waiting for the owner payment confirmation. */
      paymentWaitingCount?: number;
      /** number of participants who joined, but not started the program */
      notStartedCount?: number;
      /** number of participants who started and not finished the program */
      inProgressCount?: number;
      /** number of participants who finished the program */
      finishedCount?: number;
  }
  interface PersonIdentity {
      /**
       * Wix member
       * @readonly
       */
      memberId?: string;
      /**
       * Wix contact
       * @readonly
       */
      contactId?: string;
      /**
       * Wix user
       * @readonly
       */
      wixUserId?: string | null;
  }
  interface Participation {
      participantId?: string;
      /** current participants state */
      state?: State$1;
      /** number of successfully completed program steps */
      totalCompletedSteps?: number;
  }
  interface State$1 extends StateStateOptionsOneOf {
      /** participant invited to program by owner */
      invited?: Invited;
      /** participant requested to join to private program */
      joinRequested?: JoinRequested;
      /** owner rejected participant join request */
      joinRejected?: JoinRejected;
      /** owner requested member to pay for participation */
      paymentRequested?: PaymentRequested;
      /** member started payment */
      paymentStarted?: PaymentStarted;
      /** owner waits for manual offline payment */
      paymentStartedOffline?: PaymentStartedOffline;
      /** member became participant */
      joined?: Joined;
      /** participant left program */
      left?: Left;
      /** owner removed participant from program */
      removed?: Removed;
      /** participant completed program */
      completed?: Completed$1;
      /** participant did not finished program in timeline */
      failed?: Failed;
      /** program was suspended, so is participant */
      suspended?: Suspended;
  }
  /** @oneof */
  interface StateStateOptionsOneOf {
      /** participant invited to program by owner */
      invited?: Invited;
      /** participant requested to join to private program */
      joinRequested?: JoinRequested;
      /** owner rejected participant join request */
      joinRejected?: JoinRejected;
      /** owner requested member to pay for participation */
      paymentRequested?: PaymentRequested;
      /** member started payment */
      paymentStarted?: PaymentStarted;
      /** owner waits for manual offline payment */
      paymentStartedOffline?: PaymentStartedOffline;
      /** member became participant */
      joined?: Joined;
      /** participant left program */
      left?: Left;
      /** owner removed participant from program */
      removed?: Removed;
      /** participant completed program */
      completed?: Completed$1;
      /** participant did not finished program in timeline */
      failed?: Failed;
      /** program was suspended, so is participant */
      suspended?: Suspended;
  }
  interface DateInterval$1 {
      /** local date start */
      start?: string;
      /** local date finish, inclusive */
      finish?: string | null;
  }
  interface Invited {
  }
  interface JoinRequested {
      /** Approval request regarding to V1 */
      approvalRequestId?: string;
  }
  interface JoinRejected {
  }
  interface PaymentRequested {
  }
  interface PaymentStarted {
  }
  interface PaymentStartedOffline {
      /** Offline transaction id in payments wix.payment.api.pay.v3.Transaction */
      transactionId?: string;
  }
  interface Joined {
      /** TODO: change to start/end pair? */
      dateFrame?: DateInterval$1;
  }
  interface Left {
  }
  interface Removed {
  }
  interface Completed$1 {
  }
  interface Failed {
  }
  interface Suspended {
  }
  interface ListProgramsRequest {
      /** return only programs where current identity is participating. */
      participatingOnly?: boolean;
      /** sort criterion */
      sorting?: SortingCriterion$1;
      /** page (offset-based only at the moment) */
      paging?: Paging$1;
      /** at the moment EXTENDED contains Participation + Stats objects on top of STANDARD. */
      fieldSet?: FieldSet;
  }
  enum SortingCriterion$1 {
      DEFAULT = "DEFAULT",
      ACTIVE_FIRST = "ACTIVE_FIRST",
      LAST_TRANSITION = "LAST_TRANSITION",
      CREATION_TIME = "CREATION_TIME"
  }
  interface Paging$1 {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  enum FieldSet {
      STANDARD = "STANDARD",
      EXTENDED = "EXTENDED"
  }
  interface ListProgramsResponse {
      /** paging metadata */
      metadata?: PagingMetadataV2;
      /** programs */
      programs?: Program[];
  }
  interface PagingMetadataV2 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
      cursors?: Cursors;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  interface Cursors {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface GetProgramRequest {
      /** program to get */
      programId: string;
      /** STANDARD or EXTENDED field set */
      fieldSet?: FieldSet;
  }
  interface GetProgramResponse {
      /** found program */
      program?: Program;
  }
  interface QueryProgramsRequest {
      /** query to get programs */
      query?: Query;
  }
  interface Query {
      /**
       * Filter object in the following format:
       * `"filter" : {
       * "fieldName1": "value1",
       * "fieldName2":{"$operator":"value2"}
       * }`
       * Example of operators: `$eq`, `$ne`, `$lt`, `$lte`, `$gt`, `$gte`, `$in`, `$hasSome`, `$hasAll`, `$startsWith`, `$contains`
       */
      filter?: any;
      /**
       * Sort object in the following format:
       * `[{"fieldName":"sortField1","order":"ASC"},{"fieldName":"sortField2","order":"DESC"}]`
       */
      sort?: Sorting$1[];
      /** Paging options to limit and skip the number of items. */
      paging?: Paging$1;
      /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
      fields?: string[];
      /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
      fieldsets?: string[];
  }
  interface Sorting$1 {
      /** Name of the field to sort by. */
      fieldName?: string;
      /** Sort order. */
      order?: SortOrder;
  }
  enum SortOrder {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface QueryProgramsResponse {
      /** paging metadata */
      metadata?: PagingMetadataV2;
      /** programs */
      programs?: Program[];
  }
  interface CreateProgramRequest extends CreateProgramRequestStrategyOneOf {
      /** to create new program from scratch */
      startFresh?: StartFresh;
      /** to clone existing program */
      duplicate?: Duplicate;
      /** to crate from existing template */
      fromTemplate?: FromTemplate;
  }
  /** @oneof */
  interface CreateProgramRequestStrategyOneOf {
      /** to create new program from scratch */
      startFresh?: StartFresh;
      /** to clone existing program */
      duplicate?: Duplicate;
      /** to crate from existing template */
      fromTemplate?: FromTemplate;
  }
  enum ValidationStrategy {
      FAIL_ON_ERRORS = "FAIL_ON_ERRORS",
      FIX_ERRORS = "FIX_ERRORS"
  }
  /** Creates new draft program by providing new settings */
  interface StartFresh {
      /** settings for new program */
      settings?: ProgramsSettings;
  }
  /** Creates new draft program by cloning existing one */
  interface Duplicate {
      /** existing owners program to duplicate */
      cloneFromId?: string;
      /** fix or fail on errors */
      validation?: ValidationStrategy;
  }
  /** Creates new draft program from existing templates */
  interface FromTemplate {
      /** existing program template */
      cloneFromId?: string;
      /** new settings to override */
      settings?: ProgramsSettings;
  }
  interface CreateProgramResponse {
      /** new program */
      program?: Program;
  }
  interface UpdateProgramSettingsRequest {
      /** program to update */
      programId: string;
      /** fields to change in program settings */
      programSettings?: ProgramsSettings;
      /** fix or fail on errors */
      validation?: ValidationStrategy;
      /**
       * inferred mask on program_settings fields
       * @internal
       */
      mask?: string[];
  }
  interface UpdateProgramSettingsResponse {
      /** updated program */
      program?: Program;
  }
  interface ProgramSettingsUpdated {
      /** updated program */
      program?: Program;
      /** settings before update */
      previousSettings?: ProgramsSettings;
  }
  interface BulkUpdateProgramSettingsRequest {
      programs?: MaskedProgramSettings[];
      /** If true - full entity will be returned. Otherwise - only id. */
      returnFullEntity?: boolean;
  }
  interface MaskedProgramSettings {
      /** program to update */
      programId?: string;
      /** program settings to update */
      programSettings?: ProgramsSettings;
      /**
       * inferred mask on program_settings fields
       * @internal
       */
      mask?: string[];
  }
  interface BulkUpdateProgramSettingsResponse {
      results?: BulkProgramSettingsResult[];
      /** Metadata. */
      bulkActionMetadata?: BulkActionMetadata;
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
  interface BulkProgramSettingsResult {
      /** A metadata. */
      itemMetadata?: ItemMetadata;
      /** updated program */
      program?: Program;
  }
  interface BulkActionMetadata {
      /** Number of items that were successfully processed. */
      totalSuccesses?: number;
      /** Number of items that couldn't be processed. */
      totalFailures?: number;
      /** Number of failures without details because detailed failure threshold was exceeded. */
      undetailedFailures?: number;
  }
  interface ChangeProgramStateRequest {
      /** program to change state */
      programId: string;
      /** state to which change */
      state?: StateTransitionState;
  }
  interface ChangeProgramStateResponse {
      /** program with new state */
      program?: Program;
  }
  interface ProgramStateChanged {
      /** updated program */
      program?: Program;
  }
  interface AssignCategoriesRequest {
      /** program to */
      programId: string;
      categoryIds?: string[];
  }
  interface AssignCategoriesResponse {
      /** Updated program */
      program?: Program;
      idsAdded?: string[];
      idsRemoved?: string[];
  }
  interface DeleteProgramRequest {
      /** program Id to delete */
      programId: string;
  }
  interface DeleteProgramResponse {
      /** deleted program, without PageUrl info */
      program?: Program;
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
   * List programs with paging
   * @internal
   * @documentationMaturity preview
   */
  function listPrograms(options?: ListProgramsOptions): Promise<ListProgramsResponse>;
  interface ListProgramsOptions {
      /** return only programs where current identity is participating. */
      participatingOnly?: boolean;
      /** sort criterion */
      sorting?: SortingCriterion$1;
      /** page (offset-based only at the moment) */
      paging?: Paging$1;
      /** at the moment EXTENDED contains Participation + Stats objects on top of STANDARD. */
      fieldSet?: FieldSet;
  }
  /**
   * Find one program
   * @param programId - program to get
   * @internal
   * @documentationMaturity preview
   * @requiredField programId
   * @returns found program
   */
  function getProgram(programId: string, options?: GetProgramOptions): Promise<Program>;
  interface GetProgramOptions {
      /** STANDARD or EXTENDED field set */
      fieldSet?: FieldSet;
  }
  /**
   * Find programs by platformized query
   * @internal
   * @documentationMaturity preview
   */
  function queryPrograms(): ProgramsQueryBuilder;
  interface QueryCursorResult {
      cursors: Cursors;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface ProgramsQueryResult extends QueryCursorResult {
      items: Program[];
      query: ProgramsQueryBuilder;
      next: () => Promise<ProgramsQueryResult>;
      prev: () => Promise<ProgramsQueryResult>;
  }
  interface ProgramsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | 'state' | 'categoryIds', value: any) => ProgramsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | 'state' | 'categoryIds', value: any) => ProgramsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: '_id' | 'state' | 'categoryIds', value: any) => ProgramsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id'>) => ProgramsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_id'>) => ProgramsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => ProgramsQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => ProgramsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<ProgramsQueryResult>;
  }
  /**
   * Creates new program in draft state by provided fresh settings, duplicate existing prog, or from template
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function createProgram(options?: CreateProgramOptions): Promise<CreateProgramResponse>;
  interface CreateProgramOptions extends CreateProgramRequestStrategyOneOf {
      /** to create new program from scratch */
      startFresh?: StartFresh;
      /** to clone existing program */
      duplicate?: Duplicate;
      /** to crate from existing template */
      fromTemplate?: FromTemplate;
  }
  /**
   * Partial program settings update
   * @param programId - program to update
   * @internal
   * @documentationMaturity preview
   * @requiredField programId
   * @adminMethod
   */
  function updateProgramSettings(programId: string, options?: UpdateProgramSettingsOptions): Promise<UpdateProgramSettingsResponse>;
  interface UpdateProgramSettingsOptions {
      /** fields to change in program settings */
      programSettings?: ProgramsSettings;
      /** fix or fail on errors */
      validation?: ValidationStrategy;
      /**
       * inferred mask on program_settings fields
       * @internal
       */
      mask?: string[];
  }
  /**
   * Bulk partial settings update. Bulk version of UpdateProgramSettings
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function bulkUpdateProgramSettings(options?: BulkUpdateProgramSettingsOptions): Promise<BulkUpdateProgramSettingsResponse>;
  interface BulkUpdateProgramSettingsOptions {
      programs?: MaskedProgramSettings[];
      /** If true - full entity will be returned. Otherwise - only id. */
      returnFullEntity?: boolean;
  }
  /**
   * Changes program state. New program has state DRAFT.
   * It could be PUBLISHED, FINISHED or ARCHIVED.
   * PUBLISHED program could be FINISHED or ARCHIVED. FINISHED -> ARCHIVED.
   * ARCHIVED program could be only deleted or duplicated (to draft state).
   * In case of any other transition, WrongTransition error will be raised.
   * @param programId - program to change state
   * @internal
   * @documentationMaturity preview
   * @requiredField programId
   * @adminMethod
   */
  function changeProgramState(programId: string, options?: ChangeProgramStateOptions): Promise<ChangeProgramStateResponse>;
  interface ChangeProgramStateOptions {
      /** state to which change */
      state?: StateTransitionState;
  }
  /**
   * Assign list of categories to the program. Provided list will replace existing one.
   * @param programId - program to
   * @internal
   * @documentationMaturity preview
   * @requiredField programId
   * @adminMethod
   */
  function assignCategories(programId: string, options?: AssignCategoriesOptions): Promise<AssignCategoriesResponse>;
  interface AssignCategoriesOptions {
      categoryIds?: string[];
  }
  /**
   * Hard delete of existing program
   * @param programId - program Id to delete
   * @internal
   * @documentationMaturity preview
   * @requiredField programId
   * @adminMethod
   */
  function deleteProgram(programId: string): Promise<DeleteProgramResponse>;
  
  type achievementsProgramsV2Program_universal_d_Program = Program;
  type achievementsProgramsV2Program_universal_d_ProgramsSettings = ProgramsSettings;
  type achievementsProgramsV2Program_universal_d_Timeline = Timeline;
  type achievementsProgramsV2Program_universal_d_TimelineTimelineOptionsOneOf = TimelineTimelineOptionsOneOf;
  type achievementsProgramsV2Program_universal_d_Ongoing = Ongoing;
  type achievementsProgramsV2Program_universal_d_Flexible = Flexible;
  type achievementsProgramsV2Program_universal_d_Specific = Specific;
  type achievementsProgramsV2Program_universal_d_SelfPaced = SelfPaced;
  type achievementsProgramsV2Program_universal_d_VideoResolution = VideoResolution;
  type achievementsProgramsV2Program_universal_d_ProgramRestrictions = ProgramRestrictions;
  type achievementsProgramsV2Program_universal_d_AccessType = AccessType;
  const achievementsProgramsV2Program_universal_d_AccessType: typeof AccessType;
  type achievementsProgramsV2Program_universal_d_Money = Money;
  type achievementsProgramsV2Program_universal_d_Seo = Seo;
  type achievementsProgramsV2Program_universal_d_SeoSchema = SeoSchema;
  type achievementsProgramsV2Program_universal_d_Keyword = Keyword;
  type achievementsProgramsV2Program_universal_d_Tag = Tag;
  type achievementsProgramsV2Program_universal_d_Reward = Reward;
  type achievementsProgramsV2Program_universal_d_Trigger = Trigger;
  const achievementsProgramsV2Program_universal_d_Trigger: typeof Trigger;
  type achievementsProgramsV2Program_universal_d_StateTransitionState = StateTransitionState;
  const achievementsProgramsV2Program_universal_d_StateTransitionState: typeof StateTransitionState;
  type achievementsProgramsV2Program_universal_d_ContentSummary = ContentSummary;
  type achievementsProgramsV2Program_universal_d_ParticipationStats = ParticipationStats;
  type achievementsProgramsV2Program_universal_d_PersonIdentity = PersonIdentity;
  type achievementsProgramsV2Program_universal_d_Participation = Participation;
  type achievementsProgramsV2Program_universal_d_StateStateOptionsOneOf = StateStateOptionsOneOf;
  type achievementsProgramsV2Program_universal_d_Invited = Invited;
  type achievementsProgramsV2Program_universal_d_JoinRequested = JoinRequested;
  type achievementsProgramsV2Program_universal_d_JoinRejected = JoinRejected;
  type achievementsProgramsV2Program_universal_d_PaymentRequested = PaymentRequested;
  type achievementsProgramsV2Program_universal_d_PaymentStarted = PaymentStarted;
  type achievementsProgramsV2Program_universal_d_PaymentStartedOffline = PaymentStartedOffline;
  type achievementsProgramsV2Program_universal_d_Joined = Joined;
  type achievementsProgramsV2Program_universal_d_Left = Left;
  type achievementsProgramsV2Program_universal_d_Removed = Removed;
  type achievementsProgramsV2Program_universal_d_Failed = Failed;
  type achievementsProgramsV2Program_universal_d_Suspended = Suspended;
  type achievementsProgramsV2Program_universal_d_ListProgramsRequest = ListProgramsRequest;
  type achievementsProgramsV2Program_universal_d_FieldSet = FieldSet;
  const achievementsProgramsV2Program_universal_d_FieldSet: typeof FieldSet;
  type achievementsProgramsV2Program_universal_d_ListProgramsResponse = ListProgramsResponse;
  type achievementsProgramsV2Program_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type achievementsProgramsV2Program_universal_d_Cursors = Cursors;
  type achievementsProgramsV2Program_universal_d_GetProgramRequest = GetProgramRequest;
  type achievementsProgramsV2Program_universal_d_GetProgramResponse = GetProgramResponse;
  type achievementsProgramsV2Program_universal_d_QueryProgramsRequest = QueryProgramsRequest;
  type achievementsProgramsV2Program_universal_d_Query = Query;
  type achievementsProgramsV2Program_universal_d_SortOrder = SortOrder;
  const achievementsProgramsV2Program_universal_d_SortOrder: typeof SortOrder;
  type achievementsProgramsV2Program_universal_d_QueryProgramsResponse = QueryProgramsResponse;
  type achievementsProgramsV2Program_universal_d_CreateProgramRequest = CreateProgramRequest;
  type achievementsProgramsV2Program_universal_d_CreateProgramRequestStrategyOneOf = CreateProgramRequestStrategyOneOf;
  type achievementsProgramsV2Program_universal_d_ValidationStrategy = ValidationStrategy;
  const achievementsProgramsV2Program_universal_d_ValidationStrategy: typeof ValidationStrategy;
  type achievementsProgramsV2Program_universal_d_StartFresh = StartFresh;
  type achievementsProgramsV2Program_universal_d_Duplicate = Duplicate;
  type achievementsProgramsV2Program_universal_d_FromTemplate = FromTemplate;
  type achievementsProgramsV2Program_universal_d_CreateProgramResponse = CreateProgramResponse;
  type achievementsProgramsV2Program_universal_d_UpdateProgramSettingsRequest = UpdateProgramSettingsRequest;
  type achievementsProgramsV2Program_universal_d_UpdateProgramSettingsResponse = UpdateProgramSettingsResponse;
  type achievementsProgramsV2Program_universal_d_ProgramSettingsUpdated = ProgramSettingsUpdated;
  type achievementsProgramsV2Program_universal_d_BulkUpdateProgramSettingsRequest = BulkUpdateProgramSettingsRequest;
  type achievementsProgramsV2Program_universal_d_MaskedProgramSettings = MaskedProgramSettings;
  type achievementsProgramsV2Program_universal_d_BulkUpdateProgramSettingsResponse = BulkUpdateProgramSettingsResponse;
  type achievementsProgramsV2Program_universal_d_ItemMetadata = ItemMetadata;
  type achievementsProgramsV2Program_universal_d_ApplicationError = ApplicationError;
  type achievementsProgramsV2Program_universal_d_BulkProgramSettingsResult = BulkProgramSettingsResult;
  type achievementsProgramsV2Program_universal_d_BulkActionMetadata = BulkActionMetadata;
  type achievementsProgramsV2Program_universal_d_ChangeProgramStateRequest = ChangeProgramStateRequest;
  type achievementsProgramsV2Program_universal_d_ChangeProgramStateResponse = ChangeProgramStateResponse;
  type achievementsProgramsV2Program_universal_d_ProgramStateChanged = ProgramStateChanged;
  type achievementsProgramsV2Program_universal_d_AssignCategoriesRequest = AssignCategoriesRequest;
  type achievementsProgramsV2Program_universal_d_AssignCategoriesResponse = AssignCategoriesResponse;
  type achievementsProgramsV2Program_universal_d_DeleteProgramRequest = DeleteProgramRequest;
  type achievementsProgramsV2Program_universal_d_DeleteProgramResponse = DeleteProgramResponse;
  type achievementsProgramsV2Program_universal_d_DomainEvent = DomainEvent;
  type achievementsProgramsV2Program_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type achievementsProgramsV2Program_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type achievementsProgramsV2Program_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type achievementsProgramsV2Program_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type achievementsProgramsV2Program_universal_d_ActionEvent = ActionEvent;
  const achievementsProgramsV2Program_universal_d_listPrograms: typeof listPrograms;
  type achievementsProgramsV2Program_universal_d_ListProgramsOptions = ListProgramsOptions;
  const achievementsProgramsV2Program_universal_d_getProgram: typeof getProgram;
  type achievementsProgramsV2Program_universal_d_GetProgramOptions = GetProgramOptions;
  const achievementsProgramsV2Program_universal_d_queryPrograms: typeof queryPrograms;
  type achievementsProgramsV2Program_universal_d_ProgramsQueryResult = ProgramsQueryResult;
  type achievementsProgramsV2Program_universal_d_ProgramsQueryBuilder = ProgramsQueryBuilder;
  const achievementsProgramsV2Program_universal_d_createProgram: typeof createProgram;
  type achievementsProgramsV2Program_universal_d_CreateProgramOptions = CreateProgramOptions;
  const achievementsProgramsV2Program_universal_d_updateProgramSettings: typeof updateProgramSettings;
  type achievementsProgramsV2Program_universal_d_UpdateProgramSettingsOptions = UpdateProgramSettingsOptions;
  const achievementsProgramsV2Program_universal_d_bulkUpdateProgramSettings: typeof bulkUpdateProgramSettings;
  type achievementsProgramsV2Program_universal_d_BulkUpdateProgramSettingsOptions = BulkUpdateProgramSettingsOptions;
  const achievementsProgramsV2Program_universal_d_changeProgramState: typeof changeProgramState;
  type achievementsProgramsV2Program_universal_d_ChangeProgramStateOptions = ChangeProgramStateOptions;
  const achievementsProgramsV2Program_universal_d_assignCategories: typeof assignCategories;
  type achievementsProgramsV2Program_universal_d_AssignCategoriesOptions = AssignCategoriesOptions;
  const achievementsProgramsV2Program_universal_d_deleteProgram: typeof deleteProgram;
  namespace achievementsProgramsV2Program_universal_d {
    export {
      __debug$1 as __debug,
      achievementsProgramsV2Program_universal_d_Program as Program,
      achievementsProgramsV2Program_universal_d_ProgramsSettings as ProgramsSettings,
      achievementsProgramsV2Program_universal_d_Timeline as Timeline,
      achievementsProgramsV2Program_universal_d_TimelineTimelineOptionsOneOf as TimelineTimelineOptionsOneOf,
      TimeDuration$1 as TimeDuration,
      DurationUnit$1 as DurationUnit,
      achievementsProgramsV2Program_universal_d_Ongoing as Ongoing,
      achievementsProgramsV2Program_universal_d_Flexible as Flexible,
      achievementsProgramsV2Program_universal_d_Specific as Specific,
      achievementsProgramsV2Program_universal_d_SelfPaced as SelfPaced,
      ObjectDescription$1 as ObjectDescription,
      MediaItem$1 as MediaItem,
      MediaItemMediaOneOf$1 as MediaItemMediaOneOf,
      achievementsProgramsV2Program_universal_d_VideoResolution as VideoResolution,
      achievementsProgramsV2Program_universal_d_ProgramRestrictions as ProgramRestrictions,
      achievementsProgramsV2Program_universal_d_AccessType as AccessType,
      achievementsProgramsV2Program_universal_d_Money as Money,
      achievementsProgramsV2Program_universal_d_Seo as Seo,
      achievementsProgramsV2Program_universal_d_SeoSchema as SeoSchema,
      achievementsProgramsV2Program_universal_d_Keyword as Keyword,
      achievementsProgramsV2Program_universal_d_Tag as Tag,
      Settings$1 as Settings,
      achievementsProgramsV2Program_universal_d_Reward as Reward,
      achievementsProgramsV2Program_universal_d_Trigger as Trigger,
      Certificate$1 as Certificate,
      StateTransition$1 as StateTransition,
      achievementsProgramsV2Program_universal_d_StateTransitionState as StateTransitionState,
      achievementsProgramsV2Program_universal_d_ContentSummary as ContentSummary,
      achievementsProgramsV2Program_universal_d_ParticipationStats as ParticipationStats,
      achievementsProgramsV2Program_universal_d_PersonIdentity as PersonIdentity,
      achievementsProgramsV2Program_universal_d_Participation as Participation,
      State$1 as State,
      achievementsProgramsV2Program_universal_d_StateStateOptionsOneOf as StateStateOptionsOneOf,
      DateInterval$1 as DateInterval,
      achievementsProgramsV2Program_universal_d_Invited as Invited,
      achievementsProgramsV2Program_universal_d_JoinRequested as JoinRequested,
      achievementsProgramsV2Program_universal_d_JoinRejected as JoinRejected,
      achievementsProgramsV2Program_universal_d_PaymentRequested as PaymentRequested,
      achievementsProgramsV2Program_universal_d_PaymentStarted as PaymentStarted,
      achievementsProgramsV2Program_universal_d_PaymentStartedOffline as PaymentStartedOffline,
      achievementsProgramsV2Program_universal_d_Joined as Joined,
      achievementsProgramsV2Program_universal_d_Left as Left,
      achievementsProgramsV2Program_universal_d_Removed as Removed,
      Completed$1 as Completed,
      achievementsProgramsV2Program_universal_d_Failed as Failed,
      achievementsProgramsV2Program_universal_d_Suspended as Suspended,
      achievementsProgramsV2Program_universal_d_ListProgramsRequest as ListProgramsRequest,
      SortingCriterion$1 as SortingCriterion,
      Paging$1 as Paging,
      achievementsProgramsV2Program_universal_d_FieldSet as FieldSet,
      achievementsProgramsV2Program_universal_d_ListProgramsResponse as ListProgramsResponse,
      achievementsProgramsV2Program_universal_d_PagingMetadataV2 as PagingMetadataV2,
      achievementsProgramsV2Program_universal_d_Cursors as Cursors,
      achievementsProgramsV2Program_universal_d_GetProgramRequest as GetProgramRequest,
      achievementsProgramsV2Program_universal_d_GetProgramResponse as GetProgramResponse,
      achievementsProgramsV2Program_universal_d_QueryProgramsRequest as QueryProgramsRequest,
      achievementsProgramsV2Program_universal_d_Query as Query,
      Sorting$1 as Sorting,
      achievementsProgramsV2Program_universal_d_SortOrder as SortOrder,
      achievementsProgramsV2Program_universal_d_QueryProgramsResponse as QueryProgramsResponse,
      achievementsProgramsV2Program_universal_d_CreateProgramRequest as CreateProgramRequest,
      achievementsProgramsV2Program_universal_d_CreateProgramRequestStrategyOneOf as CreateProgramRequestStrategyOneOf,
      achievementsProgramsV2Program_universal_d_ValidationStrategy as ValidationStrategy,
      achievementsProgramsV2Program_universal_d_StartFresh as StartFresh,
      achievementsProgramsV2Program_universal_d_Duplicate as Duplicate,
      achievementsProgramsV2Program_universal_d_FromTemplate as FromTemplate,
      achievementsProgramsV2Program_universal_d_CreateProgramResponse as CreateProgramResponse,
      achievementsProgramsV2Program_universal_d_UpdateProgramSettingsRequest as UpdateProgramSettingsRequest,
      achievementsProgramsV2Program_universal_d_UpdateProgramSettingsResponse as UpdateProgramSettingsResponse,
      achievementsProgramsV2Program_universal_d_ProgramSettingsUpdated as ProgramSettingsUpdated,
      achievementsProgramsV2Program_universal_d_BulkUpdateProgramSettingsRequest as BulkUpdateProgramSettingsRequest,
      achievementsProgramsV2Program_universal_d_MaskedProgramSettings as MaskedProgramSettings,
      achievementsProgramsV2Program_universal_d_BulkUpdateProgramSettingsResponse as BulkUpdateProgramSettingsResponse,
      achievementsProgramsV2Program_universal_d_ItemMetadata as ItemMetadata,
      achievementsProgramsV2Program_universal_d_ApplicationError as ApplicationError,
      achievementsProgramsV2Program_universal_d_BulkProgramSettingsResult as BulkProgramSettingsResult,
      achievementsProgramsV2Program_universal_d_BulkActionMetadata as BulkActionMetadata,
      achievementsProgramsV2Program_universal_d_ChangeProgramStateRequest as ChangeProgramStateRequest,
      achievementsProgramsV2Program_universal_d_ChangeProgramStateResponse as ChangeProgramStateResponse,
      achievementsProgramsV2Program_universal_d_ProgramStateChanged as ProgramStateChanged,
      achievementsProgramsV2Program_universal_d_AssignCategoriesRequest as AssignCategoriesRequest,
      achievementsProgramsV2Program_universal_d_AssignCategoriesResponse as AssignCategoriesResponse,
      achievementsProgramsV2Program_universal_d_DeleteProgramRequest as DeleteProgramRequest,
      achievementsProgramsV2Program_universal_d_DeleteProgramResponse as DeleteProgramResponse,
      achievementsProgramsV2Program_universal_d_DomainEvent as DomainEvent,
      achievementsProgramsV2Program_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      achievementsProgramsV2Program_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      achievementsProgramsV2Program_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      achievementsProgramsV2Program_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      achievementsProgramsV2Program_universal_d_ActionEvent as ActionEvent,
      achievementsProgramsV2Program_universal_d_listPrograms as listPrograms,
      achievementsProgramsV2Program_universal_d_ListProgramsOptions as ListProgramsOptions,
      achievementsProgramsV2Program_universal_d_getProgram as getProgram,
      achievementsProgramsV2Program_universal_d_GetProgramOptions as GetProgramOptions,
      achievementsProgramsV2Program_universal_d_queryPrograms as queryPrograms,
      achievementsProgramsV2Program_universal_d_ProgramsQueryResult as ProgramsQueryResult,
      achievementsProgramsV2Program_universal_d_ProgramsQueryBuilder as ProgramsQueryBuilder,
      achievementsProgramsV2Program_universal_d_createProgram as createProgram,
      achievementsProgramsV2Program_universal_d_CreateProgramOptions as CreateProgramOptions,
      achievementsProgramsV2Program_universal_d_updateProgramSettings as updateProgramSettings,
      achievementsProgramsV2Program_universal_d_UpdateProgramSettingsOptions as UpdateProgramSettingsOptions,
      achievementsProgramsV2Program_universal_d_bulkUpdateProgramSettings as bulkUpdateProgramSettings,
      achievementsProgramsV2Program_universal_d_BulkUpdateProgramSettingsOptions as BulkUpdateProgramSettingsOptions,
      achievementsProgramsV2Program_universal_d_changeProgramState as changeProgramState,
      achievementsProgramsV2Program_universal_d_ChangeProgramStateOptions as ChangeProgramStateOptions,
      achievementsProgramsV2Program_universal_d_assignCategories as assignCategories,
      achievementsProgramsV2Program_universal_d_AssignCategoriesOptions as AssignCategoriesOptions,
      achievementsProgramsV2Program_universal_d_deleteProgram as deleteProgram,
    };
  }
  
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface Participant {
      _id?: string;
      member?: Member;
      challenge?: EntitySummary;
      timeFrame?: TimeInterval;
      stepsSummary?: StepsSummary;
      orderIds?: string[];
      transitions?: StateTransition[];
      timezone?: string;
      dateFrame?: DateInterval;
      socialGroupId?: string | null;
      performance?: number;
      joinPath?: JoinPath;
      /** Certificate issued to participant on successful program complete */
      certificate?: Certificate;
  }
  interface StepEvent {
      stepId?: string;
      transition?: ParticipantStepStateTransition;
  }
  interface ParticipantStepStateTransition {
      state?: ParticipantStepState;
      occurredAt?: Date;
  }
  enum ParticipantStepState {
      PENDING = "PENDING",
      RUNNING = "RUNNING",
      COMPLETED = "COMPLETED",
      SKIPPED = "SKIPPED",
      CONFIRMED = "CONFIRMED",
      REJECTED = "REJECTED",
      OVERDUE = "OVERDUE",
      FAILED = "FAILED"
  }
  enum State {
      JOIN_REQUESTED = "JOIN_REQUESTED",
      INVITED = "INVITED",
      JOIN_REJECTED = "JOIN_REJECTED",
      PAYMENT_REQUESTED = "PAYMENT_REQUESTED",
      PAYMENT_STARTED = "PAYMENT_STARTED",
      JOINED = "JOINED",
      LEFT = "LEFT",
      REMOVED = "REMOVED",
      RUNNING = "RUNNING",
      COMPLETED = "COMPLETED",
      FAILED = "FAILED",
      PAYMENT_STARTED_OFFLINE = "PAYMENT_STARTED_OFFLINE",
      SUSPENDED = "SUSPENDED"
  }
  interface Free {
  }
  interface Added {
  }
  interface SinglePayment {
      orderId?: string;
  }
  interface PaidPlan {
      planIds?: string[];
  }
  interface FreeCoupon {
      couponId?: string;
  }
  interface Member {
      _id?: string;
      fullName?: string;
      imageUrl?: string | null;
      contactId?: string | null;
      userId?: string | null;
  }
  interface EntitySummary {
      _id?: string;
      title?: string | null;
      media?: MediaItem;
  }
  /** Deprecated - Copy this message into your service, do not reference it */
  interface MediaItem extends MediaItemMediaOneOf {
      /** WixMedia image */
      image?: string;
      /** WixMedia video */
      video?: string;
      /** WixMedia document */
      document?: string;
  }
  /** @oneof */
  interface MediaItemMediaOneOf {
      /** WixMedia image */
      image?: string;
      /** WixMedia video */
      video?: string;
      /** WixMedia document */
      document?: string;
  }
  interface TimeInterval {
      start?: Date;
      finish?: Date;
  }
  interface StepsSummary {
      stepsNumber?: number;
      completedStepsNumber?: number;
      failedStepsNumber?: number;
      postedFeedbacksNumber?: number;
      lastEvent?: StepEvent;
  }
  interface StateTransition {
      state?: State;
      occurredAt?: Date;
      offlineTrxId?: string | null;
  }
  interface DateInterval {
      start?: string;
      finish?: string | null;
  }
  interface JoinPath extends JoinPathPathOneOf {
      free?: Free;
      added?: Added;
      singlePayment?: SinglePayment;
      paidPlan?: PaidPlan;
      freeCoupon?: FreeCoupon;
  }
  /** @oneof */
  interface JoinPathPathOneOf {
      free?: Free;
      added?: Added;
      singlePayment?: SinglePayment;
      paidPlan?: PaidPlan;
      freeCoupon?: FreeCoupon;
  }
  interface Certificate {
      /**
       * when certificate was issued, UTC
       * @readonly
       */
      issuedDate?: Date;
  }
  interface QueryParticipantsRequest {
      paging?: Paging;
      challengeId: string;
      sorting?: QueryParticipantsRequestSorting;
      filter?: ParticipantsFilter;
  }
  interface ParticipantJoinDate {
      start?: string | null;
      end?: string | null;
  }
  enum ParticipationState {
      NotStarted = "NotStarted",
      InProgress = "InProgress",
      Finished = "Finished",
      Suspended = "Suspended"
  }
  interface ParticipantPerformance {
      start?: number | null;
      end?: number | null;
  }
  enum QueryParticipantsRequestJoinPath {
      UNKNOWN_JOIN_PATH = "UNKNOWN_JOIN_PATH",
      FREE = "FREE",
      ADDED = "ADDED",
      SINGLE_PAYMENT = "SINGLE_PAYMENT",
      PAID_PLAN = "PAID_PLAN"
  }
  enum QueryParticipantsRequestSortingCriterion {
      DEFAULT = "DEFAULT",
      JOIN_DATE = "JOIN_DATE",
      NAME = "NAME",
      LAST_EVENT = "LAST_EVENT",
      PERFORMANCE = "PERFORMANCE"
  }
  enum QueryParticipantsRequestSortingOrder {
      ORDER_DEFAULT = "ORDER_DEFAULT",
      ORDER_ASC = "ORDER_ASC",
      ORDER_DESC = "ORDER_DESC"
  }
  interface Paging {
      /** Number of items to load. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface QueryParticipantsRequestSorting {
      criterion?: QueryParticipantsRequestSortingCriterion;
      order?: QueryParticipantsRequestSortingOrder;
  }
  interface ParticipantsFilter {
      memberIds?: string[] | null;
      memberName?: string | null;
      states?: State[];
      joinedAt?: ParticipantJoinDate;
      participationStates?: ParticipationState[];
      performance?: ParticipantPerformance[];
      joinPath?: QueryParticipantsRequestJoinPath;
  }
  interface QueryParticipantsResponse {
      totalCount?: number;
      participants?: Participant[];
  }
  interface ListParticipantsRequest {
      paging?: Paging;
      challengeId: string;
      memberId?: string | null;
      states?: State[];
      memberIds?: string[] | null;
      sortingCriterion?: SortingCriterion;
      memberName?: string | null;
      sorting?: Sorting;
  }
  enum SortingCriterion {
      DEFAULT = "DEFAULT",
      JOIN_DATE = "JOIN_DATE",
      NAME = "NAME",
      LAST_EVENT = "LAST_EVENT",
      PERFORMANCE = "PERFORMANCE"
  }
  enum SortingOrder {
      ORDER_DEFAULT = "ORDER_DEFAULT",
      ORDER_ASC = "ORDER_ASC",
      ORDER_DESC = "ORDER_DESC"
  }
  interface Sorting {
      criterion?: SortingCriterion;
      order?: SortingOrder;
  }
  interface ListParticipantsResponse {
      totalCount?: number;
      participants?: Participant[];
  }
  interface JoinParticipantRequest {
      challengeId: string;
      memberId?: string;
      timeZone?: string;
      actionId?: string;
      startDate?: string | null;
  }
  interface JoinParticipantResponse {
      participantId?: string;
      actionId?: string;
      participant?: Participant;
  }
  interface ParticipantJoined {
      participant?: Participant;
      /** user id for program owner */
      ownerId?: string;
      /** owner's contact id */
      ownerContactId?: string;
  }
  /** Add participant */
  interface AddParticipantRequest {
      challengeId: string;
      memberId?: string;
      actionId?: string;
  }
  interface AddParticipantResponse {
      participant?: Participant;
      actionId?: string;
  }
  /** Add participants */
  interface AddParticipantsRequest {
      challengeId: string;
      memberIds?: string[];
      actionId?: string;
  }
  interface AddParticipantsResponse {
      participants?: Participant[];
      actionId?: string;
  }
  interface AddAllParticipantRequest {
      challengeId: string;
      excludeIds?: string[];
  }
  interface AddAllParticipantResponse {
  }
  interface CreateJoinRequestRequest {
      challengeId: string;
      memberId?: string;
      timeZone?: string;
      actionId?: string;
      startDate?: string | null;
  }
  interface CreateJoinRequestResponse {
      participantId?: string;
      approvalRequestId?: string;
      actionId?: string;
      participant?: Participant;
  }
  interface InviteParticipantsRequest {
      challengeId: string;
      memberIds?: string[];
      actionId?: string;
  }
  interface InviteParticipantsResponse {
      invitations?: InvitationDetails[];
      actionId?: string;
  }
  interface InvitationDetails {
      participantId?: string;
      approvalRequestId?: string;
  }
  interface InviteAllParticipantsRequest {
      challengeId: string;
      excludeIds?: string[];
  }
  interface InviteAllParticipantsResponse {
  }
  interface GetParticipantRequest {
      challengeId: string;
      participantId: string;
  }
  interface GetParticipantResponse {
      participant?: Participant;
  }
  interface UpdateParticipantRequest extends UpdateParticipantRequestUpdateOneOf {
      startDate?: string;
      challengeId: string;
      participantId: string;
      actionId?: string;
  }
  /** @oneof */
  interface UpdateParticipantRequestUpdateOneOf {
      startDate?: string;
  }
  interface UpdateParticipantResponse {
      participant?: Participant;
      actionId?: string;
  }
  interface DeleteParticipantRequest {
      challengeId: string;
      participantId: string;
      actionId?: string;
  }
  interface DeleteParticipantResponse {
      actionId?: string;
  }
  interface ReviveParticipantRequest {
      challengeId: string;
      participantId: string;
      actionId?: string;
  }
  interface ReviveParticipantResponse {
      participant?: Participant;
      actionId?: string;
  }
  interface ResetParticipantProgressRequest {
      challengeId: string;
      participantId: string;
      timeZone?: string;
      startDate?: string | null;
      actionId?: string;
  }
  interface ResetParticipantProgressResponse {
      participant?: Participant;
      actionId?: string;
  }
  interface IssueParticipantCertificateRequest {
      /** Participant to issue manually certificate */
      participantId: string;
      /** Program id. TODO: really bad to have it here, needed for url */
      challengeId: string;
  }
  interface IssueParticipantCertificateResponse {
      /** Updated participant */
      participant?: Participant;
  }
  interface IssueCertificateRequest {
      /** Participant to get certificate */
      participantId: string;
      /** Program id. TODO: really bad to have it here, needed for url */
      challengeId: string;
  }
  interface IssueCertificateResponse {
      /** Updated participant */
      participant?: Participant;
  }
  interface GetCertificateRequest {
      /** Participant to get certificate */
      participantId: string;
      /** Program id. TODO: really bad to have it here, needed for url */
      challengeId: string;
  }
  interface GetCertificateResponse {
      /** URL on media to get certificate */
      certificateUrl?: string;
  }
  interface CreatePaymentOrderRequest {
      challengeId: string;
      participantId: string;
      actionId?: string;
      timeZone?: string | null;
      startDate?: string | null;
      paymentType?: PaymentType;
  }
  enum PaymentType {
      SINGLE_PAYMENT = "SINGLE_PAYMENT",
      PAID_PLANS = "PAID_PLANS"
  }
  interface CreatePaymentOrderResponse {
      orderId?: string;
      actionId?: string;
      participant?: Participant;
  }
  interface ApplyCouponToOrderRequest {
      challengeId: string;
      participantId: string;
      orderId: string;
      couponCode: string;
      actionId?: string;
  }
  interface ApplyCouponToOrderResponse {
      couponId?: string;
      subTotal?: string;
      discount?: string;
      total?: string;
  }
  interface RemoveCouponFromOrderRequest {
      challengeId: string;
      participantId: string;
      orderId: string;
      couponId: string;
      actionId?: string;
  }
  interface RemoveCouponFromOrderResponse {
      total?: string;
  }
  interface ListParticipantStepsRequest {
      challengeId: string;
      participantId: string;
      parentId?: string;
      timeInterval?: TimeInterval;
      dateInterval?: DateInterval;
      descriptionFieldSet?: DescriptionFieldSet;
  }
  enum DescriptionFieldSet {
      /** title and detailed description. */
      EXTENDED = "EXTENDED",
      /** title only. */
      STANDARD = "STANDARD"
  }
  interface ListParticipantStepsResponse {
      steps?: ParticipantStep[];
  }
  interface ParticipantStep {
      _id?: string;
      source?: ChallengeStep;
      timeFrame?: TimeInterval;
      feedback?: Feedback;
      transitions?: ParticipantStepStateTransition[];
      dateFrame?: DateInterval;
      quizSubmission?: QuizSubmission;
  }
  interface FeedbackItem extends FeedbackItemValueOneOf {
      number?: number | null;
      text?: string | null;
      media?: MediaItems;
      choice?: FeedbackItemChoice;
      quantity?: Quantity;
      multiSelect?: Choices;
      feedbackItemSettingsId?: string;
  }
  /** @oneof */
  interface FeedbackItemValueOneOf {
      number?: number | null;
      text?: string | null;
      media?: MediaItems;
      choice?: FeedbackItemChoice;
      quantity?: Quantity;
      multiSelect?: Choices;
  }
  interface MediaItems {
      mediaItems?: MediaItem[];
  }
  interface FeedbackItemChoice {
      choiceId?: string;
  }
  interface Quantity {
      unitName?: string;
      amount?: number;
  }
  interface Choices {
      choiceIds?: string[];
  }
  interface ChallengeStep {
      _id?: string;
      settings?: ChallengeStepSettings;
      recurrenceSourceId?: string | null;
      createdAt?: Date;
      updatedAt?: Date;
      /** @readonly */
      sectionId?: string | null;
  }
  interface GeneralSettings extends GeneralSettingsStepTypeOneOf {
      individual?: IndividualSettings;
      group?: GroupSettings;
      quiz?: QuizSettings;
      /** steps description: title, details, image and etc. */
      description?: ObjectDescription;
      duration?: TimeDuration;
      recurrenceSettings?: RecurrenceSettings;
  }
  /** @oneof */
  interface GeneralSettingsStepTypeOneOf {
      individual?: IndividualSettings;
      group?: GroupSettings;
      quiz?: QuizSettings;
  }
  interface ObjectDescription {
      title?: string | null;
      details?: string | null;
      media?: MediaItem;
  }
  interface IndividualSettings {
      /** should be renamed, it's a flag whether the questionnaire section is enabled. */
      confirmationRequired?: boolean;
      /** feedback list settings. */
      feedbackSettings?: FeedbackItemSettings[];
      /** whether the quiz section in enabled. */
      showQuiz?: boolean;
      /** quiz list settings. */
      quizSettings?: FeedbackItemSettings[];
  }
  interface FeedbackItemSettings {
      _id?: string;
      type?: FeedbackItemType;
      question?: string;
      isRequired?: boolean;
      correctAnswerMessage?: string | null;
      wrongAnswerMessage?: string | null;
  }
  interface NumericFeedbackItem {
      maxValue?: number;
  }
  interface TextFeedbackItem {
  }
  interface MediaFeedbackItem {
  }
  interface MultipleChoiceFeedbackItem {
      choices?: Choice[];
  }
  enum ChoiceRightness {
      NEUTRAL = "NEUTRAL",
      RIGHT = "RIGHT",
      WRONG = "WRONG"
  }
  interface Choice {
      _id?: string;
      description?: ObjectDescription;
      rightness?: ChoiceRightness;
  }
  interface QuantityFeedbackItem {
      unitName?: string | null;
      amount?: number;
  }
  interface FeedbackItemType extends FeedbackItemTypeTypeOneOf {
      numeric?: NumericFeedbackItem;
      text?: TextFeedbackItem;
      media?: MediaFeedbackItem;
      multipleChoice?: MultipleChoiceFeedbackItem;
      quantity?: QuantityFeedbackItem;
      multiSelect?: MultipleChoiceFeedbackItem;
  }
  /** @oneof */
  interface FeedbackItemTypeTypeOneOf {
      numeric?: NumericFeedbackItem;
      text?: TextFeedbackItem;
      media?: MediaFeedbackItem;
      multipleChoice?: MultipleChoiceFeedbackItem;
      quantity?: QuantityFeedbackItem;
      multiSelect?: MultipleChoiceFeedbackItem;
  }
  interface GroupSettings {
      completionCriteria?: CompletionCriteria;
  }
  interface CompletionCriteria {
      completedSteps?: QuantityCriterion;
      completedMilestones?: QuantityCriterion;
      scoredPoints?: MinThreshold;
  }
  interface QuantityCriterion extends QuantityCriterionCriterionOneOf {
      all?: All;
      minThreshold?: MinThreshold;
  }
  /** @oneof */
  interface QuantityCriterionCriterionOneOf {
      all?: All;
      minThreshold?: MinThreshold;
  }
  interface All {
  }
  interface MinThreshold {
      value?: number;
  }
  interface QuizSettings {
      quizId?: string;
      questionCount?: number;
      passingGrade?: number | null;
      migrationDetails?: QuizMigrationDetails;
  }
  enum QuizType {
      QUIZ = "QUIZ",
      QUESTIONNAIRE = "QUESTIONNAIRE"
  }
  interface QuizMigrationDetails {
      sourceStepId?: string;
      show?: boolean;
      quizType?: QuizType;
  }
  interface TimeDuration {
      unit?: DurationUnit;
      value?: number;
  }
  enum DurationUnit {
      WEEKS = "WEEKS",
      DAYS = "DAYS",
      HOURS = "HOURS",
      MINUTES = "MINUTES"
  }
  interface RecurrenceSettings {
      schedules?: RecurrenceSchedule[];
      recurrencesCount?: number | null;
  }
  interface RecurrenceSchedule {
      startDelay?: TimeDuration;
      interval?: TimeDuration;
  }
  interface EmbeddingSettings {
      /** step start delay. */
      startConditions?: StartCondition[];
      isMilestone?: boolean;
      points?: number | null;
  }
  interface StartCondition {
      /** whether the step should start on join. */
      dependency?: StepDependency;
      /** step delay regarding the challenge start. */
      delay?: TimeDuration;
  }
  interface StepDependency extends StepDependencyDependencyTypeOneOf {
      container?: Container;
      step?: Step;
  }
  /** @oneof */
  interface StepDependencyDependencyTypeOneOf {
      container?: Container;
      step?: Step;
  }
  interface Container {
  }
  interface Step {
      stepId?: string;
  }
  interface ChallengeStepSettings {
      general?: GeneralSettings;
      embedding?: EmbeddingSettings;
  }
  interface Feedback {
      items?: FeedbackItem[];
      createdAt?: Date;
      updatedAt?: Date;
      quiz?: FeedbackItem[];
  }
  interface QuizSubmission {
      quizSubmissionId?: string;
      score?: number | null;
      grade?: number | null;
      rightAnswers?: number | null;
      passingGrade?: number | null;
  }
  interface GetParticipantStepRequest {
      challengeId: string;
      participantId: string;
      stepId: string;
      timeInterval?: TimeInterval;
      descriptionFieldSet?: DescriptionFieldSet;
  }
  interface GetParticipantStepResponse {
      step?: ParticipantStep;
      subSteps?: ParticipantStep[];
  }
  interface ResolveParticipantStepRequest {
      challengeId: string;
      participantId: string;
      stepId: string;
      status?: ResolutionStatus;
      feedback?: Feedback;
      actionId?: string;
      quizSubmissionId?: string | null;
  }
  enum ResolutionStatus {
      COMPLETED = "COMPLETED",
      SKIPPED = "SKIPPED",
      UNDO = "UNDO",
      QUIZ_SUBMIT = "QUIZ_SUBMIT"
  }
  interface ResolveParticipantStepResponse {
      step?: ParticipantStep;
      actionId?: string;
  }
  interface StepResolved {
      challengeId?: string;
      participantId?: string;
      memberId?: string;
      stepTitle?: string;
      participantStepId?: string;
      challengeStepId?: string;
      /** TODO why it is repeated? */
      feedback?: Feedback[];
      /** Title of the program. Used in Notifications */
      programName?: string;
      /** user id for program owner */
      ownerId?: string;
      /** owner's contact id */
      ownerContactId?: string;
      /** participants contact */
      participantContactId?: string;
  }
  interface UpdateStepFeedbackRequest {
      challengeId: string;
      participantId: string;
      stepId: string;
      feedback?: Feedback;
      actionId?: string;
  }
  interface UpdateStepFeedbackResponse {
      step?: ParticipantStep;
      actionId?: string;
  }
  interface GetMediaUploadInfoRequest {
      challengeId: string;
      participantId: string;
      fileName?: string;
  }
  interface GetMediaUploadInfoResponse {
      uploadUrl?: string;
      uploadToken?: string;
  }
  interface ListParticipantSectionsRequest {
      challengeId: string;
      participantId: string;
      descriptionFieldSet?: DescriptionFieldSet;
  }
  interface ListParticipantSectionsResponse {
      sections?: ParticipantSection[];
  }
  interface ParticipantSection {
      _id?: string;
      source?: ChallengeSection;
      steps?: ParticipantStep[];
      transitions?: ParticipantSectionStateTransition[];
      progress?: Progress;
  }
  interface WaitingDate {
      startDate?: string;
  }
  interface WaitingDependency {
      sectionId?: string;
  }
  interface Running {
      dateInterval?: DateInterval;
  }
  interface Completed {
  }
  interface Overdue {
  }
  interface ChallengeSection {
      /** challenge section id. */
      _id?: string;
      /** challenge section settings. */
      settings?: Settings;
      createdAt?: Date;
      updatedAt?: Date;
      /** list of challenge steps laying inside the section. */
      steps?: ChallengeStep[];
  }
  interface Settings {
      /** section description(title, details, image...) */
      description?: ObjectDescription;
      /** condition for the section start. */
      startCondition?: StartCondition;
  }
  interface ParticipantSectionStateTransition extends ParticipantSectionStateTransitionStateOneOf {
      waitingDate?: WaitingDate;
      waitingDependency?: WaitingDependency;
      running?: Running;
      completed?: Completed;
      overdue?: Overdue;
      occurredAt?: Date;
  }
  /** @oneof */
  interface ParticipantSectionStateTransitionStateOneOf {
      waitingDate?: WaitingDate;
      waitingDependency?: WaitingDependency;
      running?: Running;
      completed?: Completed;
      overdue?: Overdue;
  }
  interface Progress {
      nTotalSteps?: string;
      nCompletedSteps?: string;
  }
  interface GetParticipantSectionRequest {
      challengeId: string;
      participantId: string;
      sectionId: string;
      descriptionFieldSet?: DescriptionFieldSet;
  }
  interface GetParticipantSectionResponse {
      section?: ParticipantSection;
  }
  interface MyProgramRequest {
      programId: string;
  }
  interface MyProgramResponse {
      participant?: Participant;
  }
  interface MyProgramStepRequest {
      programId: string;
      programStepId: string;
      descriptionFieldSet?: DescriptionFieldSet;
  }
  interface MyProgramStepResponse {
      participantStep?: ParticipantStep;
  }
  interface MyProgramSectionRequest {
      programId: string;
      programSectionId: string;
      descriptionFieldSet?: DescriptionFieldSet;
  }
  interface MyProgramSectionResponse {
      participantSection?: ParticipantSection;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField challengeId
   * @adminMethod
   */
  function queryParticipants(challengeId: string, options?: QueryParticipantsOptions): Promise<QueryParticipantsResponse>;
  interface QueryParticipantsOptions {
      paging?: Paging;
      sorting?: QueryParticipantsRequestSorting;
      filter?: ParticipantsFilter;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField challengeId
   * @adminMethod
   */
  function listParticipants(challengeId: string, options?: ListParticipantsOptions): Promise<ListParticipantsResponse>;
  interface ListParticipantsOptions {
      paging?: Paging;
      memberId?: string | null;
      states?: State[];
      memberIds?: string[] | null;
      sortingCriterion?: SortingCriterion;
      memberName?: string | null;
      sorting?: Sorting;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField challengeId
   * @adminMethod
   */
  function joinParticipant(challengeId: string, options?: JoinParticipantOptions): Promise<JoinParticipantResponse>;
  interface JoinParticipantOptions {
      memberId?: string;
      timeZone?: string;
      actionId?: string;
      startDate?: string | null;
  }
  /**
   * owner adds participant to the challenge
   * @public
   * @documentationMaturity preview
   * @requiredField challengeId
   * @adminMethod
   */
  function addParticipant(challengeId: string, options?: AddParticipantOptions): Promise<AddParticipantResponse>;
  interface AddParticipantOptions {
      memberId?: string;
      actionId?: string;
  }
  /**
   * owner adds participants to the challenge
   * @public
   * @documentationMaturity preview
   * @requiredField challengeId
   * @adminMethod
   */
  function addParticipants(challengeId: string, options?: AddParticipantsOptions): Promise<AddParticipantsResponse>;
  interface AddParticipantsOptions {
      memberIds?: string[];
      actionId?: string;
  }
  /** @public
   * @documentationMaturity preview
   * @requiredField challengeId
   * @adminMethod
   */
  function addAllParticipant(challengeId: string, options?: AddAllParticipantOptions): Promise<void>;
  interface AddAllParticipantOptions {
      excludeIds?: string[];
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField challengeId
   * @adminMethod
   */
  function createJoinRequest(challengeId: string, options?: CreateJoinRequestOptions): Promise<CreateJoinRequestResponse>;
  interface CreateJoinRequestOptions {
      memberId?: string;
      timeZone?: string;
      actionId?: string;
      startDate?: string | null;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField challengeId
   * @adminMethod
   */
  function inviteParticipants(challengeId: string, options?: InviteParticipantsOptions): Promise<InviteParticipantsResponse>;
  interface InviteParticipantsOptions {
      memberIds?: string[];
      actionId?: string;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField challengeId
   * @adminMethod
   */
  function inviteAllParticipants(challengeId: string, options?: InviteAllParticipantsOptions): Promise<void>;
  interface InviteAllParticipantsOptions {
      excludeIds?: string[];
  }
  /**
   * returns participant by id
   * @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.challengeId
   * @requiredField identifiers.participantId
   * @adminMethod
   */
  function getParticipant(identifiers: GetParticipantIdentifiers): Promise<Participant>;
  interface GetParticipantIdentifiers {
      challengeId: string;
      participantId: string;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.challengeId
   * @requiredField identifiers.participantId
   * @adminMethod
   */
  function updateParticipant(identifiers: UpdateParticipantIdentifiers, options?: UpdateParticipantOptions): Promise<UpdateParticipantResponse>;
  interface UpdateParticipantIdentifiers extends UpdateParticipantRequestUpdateOneOf {
      challengeId: string;
      participantId: string;
  }
  interface UpdateParticipantOptions extends UpdateParticipantRequestUpdateOneOf {
      startDate?: string;
      actionId?: string;
  }
  /**
   * by owner - makes participant REMOVED. By participant himself - LEFT.
   * @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.challengeId
   * @requiredField identifiers.participantId
   * @adminMethod
   */
  function deleteParticipant(identifiers: DeleteParticipantIdentifiers, options?: DeleteParticipantOptions): Promise<DeleteParticipantResponse>;
  interface DeleteParticipantIdentifiers {
      challengeId: string;
      participantId: string;
  }
  interface DeleteParticipantOptions {
      actionId?: string;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.challengeId
   * @requiredField identifiers.participantId
   * @adminMethod
   */
  function reviveParticipant(identifiers: ReviveParticipantIdentifiers, options?: ReviveParticipantOptions): Promise<ReviveParticipantResponse>;
  interface ReviveParticipantIdentifiers {
      challengeId: string;
      participantId: string;
  }
  interface ReviveParticipantOptions {
      actionId?: string;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.challengeId
   * @requiredField identifiers.participantId
   * @adminMethod
   */
  function resetParticipantProgress(identifiers: ResetParticipantProgressIdentifiers, options?: ResetParticipantProgressOptions): Promise<ResetParticipantProgressResponse>;
  interface ResetParticipantProgressIdentifiers {
      challengeId: string;
      participantId: string;
  }
  interface ResetParticipantProgressOptions {
      timeZone?: string;
      startDate?: string | null;
      actionId?: string;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.challengeId
   * @requiredField identifiers.participantId
   * @adminMethod
   */
  function issueParticipantCertificate(identifiers: IssueParticipantCertificateIdentifiers): Promise<IssueParticipantCertificateResponse>;
  interface IssueParticipantCertificateIdentifiers {
      /** Program id. TODO: really bad to have it here, needed for url */
      challengeId: string;
      /** Participant to issue manually certificate */
      participantId: string;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.challengeId
   * @requiredField identifiers.participantId
   * @adminMethod
   */
  function issueCertificate(identifiers: IssueCertificateIdentifiers): Promise<IssueCertificateResponse>;
  interface IssueCertificateIdentifiers {
      /** Program id. TODO: really bad to have it here, needed for url */
      challengeId: string;
      /** Participant to get certificate */
      participantId: string;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.challengeId
   * @requiredField identifiers.participantId
   * @adminMethod
   */
  function getCertificate(identifiers: GetCertificateIdentifiers): Promise<GetCertificateResponse>;
  interface GetCertificateIdentifiers {
      /** Program id. TODO: really bad to have it here, needed for url */
      challengeId: string;
      /** Participant to get certificate */
      participantId: string;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.challengeId
   * @requiredField identifiers.participantId
   * @adminMethod
   */
  function createPaymentOrder(identifiers: CreatePaymentOrderIdentifiers, options?: CreatePaymentOrderOptions): Promise<CreatePaymentOrderResponse>;
  interface CreatePaymentOrderIdentifiers {
      challengeId: string;
      participantId: string;
  }
  interface CreatePaymentOrderOptions {
      actionId?: string;
      timeZone?: string | null;
      startDate?: string | null;
      paymentType?: PaymentType;
  }
  /**
   * ---------------------------------------------------- Coupons -----------------------------------------------------
   * @internal
   * @documentationMaturity preview
   * @requiredField couponCode
   * @requiredField identifiers
   * @requiredField identifiers.challengeId
   * @requiredField identifiers.orderId
   * @requiredField identifiers.participantId
   * @adminMethod
   */
  function applyCouponToOrder(identifiers: ApplyCouponToOrderIdentifiers, couponCode: string, options?: ApplyCouponToOrderOptions): Promise<ApplyCouponToOrderResponse>;
  interface ApplyCouponToOrderIdentifiers {
      challengeId: string;
      participantId: string;
      orderId: string;
  }
  interface ApplyCouponToOrderOptions {
      actionId?: string;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.challengeId
   * @requiredField identifiers.couponId
   * @requiredField identifiers.orderId
   * @requiredField identifiers.participantId
   * @adminMethod
   */
  function removeCouponFromOrder(identifiers: RemoveCouponFromOrderIdentifiers, options?: RemoveCouponFromOrderOptions): Promise<RemoveCouponFromOrderResponse>;
  interface RemoveCouponFromOrderIdentifiers {
      challengeId: string;
      participantId: string;
      orderId: string;
      couponId: string;
  }
  interface RemoveCouponFromOrderOptions {
      actionId?: string;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.challengeId
   * @requiredField identifiers.participantId
   * @adminMethod
   */
  function listSteps(identifiers: ListStepsIdentifiers, options?: ListStepsOptions): Promise<ListParticipantStepsResponse>;
  interface ListStepsIdentifiers {
      challengeId: string;
      participantId: string;
  }
  interface ListStepsOptions {
      parentId?: string;
      timeInterval?: TimeInterval;
      dateInterval?: DateInterval;
      descriptionFieldSet?: DescriptionFieldSet;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.challengeId
   * @requiredField identifiers.participantId
   * @requiredField identifiers.stepId
   * @adminMethod
   */
  function getStep(identifiers: GetStepIdentifiers, options?: GetStepOptions): Promise<GetParticipantStepResponse>;
  interface GetStepIdentifiers {
      challengeId: string;
      participantId: string;
      stepId: string;
  }
  interface GetStepOptions {
      timeInterval?: TimeInterval;
      descriptionFieldSet?: DescriptionFieldSet;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.challengeId
   * @requiredField identifiers.participantId
   * @requiredField identifiers.stepId
   * @adminMethod
   */
  function resolveStep(identifiers: ResolveStepIdentifiers, options?: ResolveStepOptions): Promise<ResolveParticipantStepResponse>;
  interface ResolveStepIdentifiers {
      challengeId: string;
      participantId: string;
      stepId: string;
  }
  interface ResolveStepOptions {
      status?: ResolutionStatus;
      feedback?: Feedback;
      actionId?: string;
      quizSubmissionId?: string | null;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.challengeId
   * @requiredField identifiers.participantId
   * @requiredField identifiers.stepId
   * @adminMethod
   */
  function updateStepFeedback(identifiers: UpdateStepFeedbackIdentifiers, options?: UpdateStepFeedbackOptions): Promise<UpdateStepFeedbackResponse>;
  interface UpdateStepFeedbackIdentifiers {
      challengeId: string;
      participantId: string;
      stepId: string;
  }
  interface UpdateStepFeedbackOptions {
      feedback?: Feedback;
      actionId?: string;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.challengeId
   * @requiredField identifiers.participantId
   * @adminMethod
   */
  function getMediaUploadInfo(identifiers: GetMediaUploadInfoIdentifiers, options?: GetMediaUploadInfoOptions): Promise<GetMediaUploadInfoResponse>;
  interface GetMediaUploadInfoIdentifiers {
      challengeId: string;
      participantId: string;
  }
  interface GetMediaUploadInfoOptions {
      fileName?: string;
  }
  /**
   * ---------------------------------------------------- Sections --------------------------------------------------------
   * @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.challengeId
   * @requiredField identifiers.participantId
   * @adminMethod
   */
  function listSections(identifiers: ListSectionsIdentifiers, options?: ListSectionsOptions): Promise<ListParticipantSectionsResponse>;
  interface ListSectionsIdentifiers {
      challengeId: string;
      participantId: string;
  }
  interface ListSectionsOptions {
      descriptionFieldSet?: DescriptionFieldSet;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.challengeId
   * @requiredField identifiers.participantId
   * @requiredField identifiers.sectionId
   * @adminMethod
   */
  function getSection(identifiers: GetSectionIdentifiers, options?: GetSectionOptions): Promise<GetParticipantSectionResponse>;
  interface GetSectionIdentifiers {
      challengeId: string;
      participantId: string;
      sectionId: string;
  }
  interface GetSectionOptions {
      descriptionFieldSet?: DescriptionFieldSet;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField programId
   * @adminMethod
   */
  function myProgram(programId: string): Promise<MyProgramResponse>;
  /** @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.programId
   * @requiredField identifiers.programStepId
   * @adminMethod
   */
  function myProgramStep(identifiers: MyProgramStepIdentifiers, options?: MyProgramStepOptions): Promise<MyProgramStepResponse>;
  interface MyProgramStepIdentifiers {
      programId: string;
      programStepId: string;
  }
  interface MyProgramStepOptions {
      descriptionFieldSet?: DescriptionFieldSet;
  }
  /** @internal
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.programId
   * @requiredField identifiers.programSectionId
   * @adminMethod
   */
  function myProgramSection(identifiers: MyProgramSectionIdentifiers, options?: MyProgramSectionOptions): Promise<MyProgramSectionResponse>;
  interface MyProgramSectionIdentifiers {
      programId: string;
      programSectionId: string;
  }
  interface MyProgramSectionOptions {
      descriptionFieldSet?: DescriptionFieldSet;
  }
  
  export { AddAllParticipantOptions, AddAllParticipantRequest, AddAllParticipantResponse, AddParticipantOptions, AddParticipantRequest, AddParticipantResponse, AddParticipantsOptions, AddParticipantsRequest, AddParticipantsResponse, Added, All, ApplyCouponToOrderIdentifiers, ApplyCouponToOrderOptions, ApplyCouponToOrderRequest, ApplyCouponToOrderResponse, Certificate, ChallengeSection, ChallengeStep, ChallengeStepSettings, Choice, ChoiceRightness, Choices, Completed, CompletionCriteria, Container, CreateJoinRequestOptions, CreateJoinRequestRequest, CreateJoinRequestResponse, CreatePaymentOrderIdentifiers, CreatePaymentOrderOptions, CreatePaymentOrderRequest, CreatePaymentOrderResponse, DateInterval, DeleteParticipantIdentifiers, DeleteParticipantOptions, DeleteParticipantRequest, DeleteParticipantResponse, DescriptionFieldSet, DurationUnit, EmbeddingSettings, EntitySummary, Feedback, FeedbackItem, FeedbackItemChoice, FeedbackItemSettings, FeedbackItemType, FeedbackItemTypeTypeOneOf, FeedbackItemValueOneOf, Free, FreeCoupon, GeneralSettings, GeneralSettingsStepTypeOneOf, GetCertificateIdentifiers, GetCertificateRequest, GetCertificateResponse, GetMediaUploadInfoIdentifiers, GetMediaUploadInfoOptions, GetMediaUploadInfoRequest, GetMediaUploadInfoResponse, GetParticipantIdentifiers, GetParticipantRequest, GetParticipantResponse, GetParticipantSectionRequest, GetParticipantSectionResponse, GetParticipantStepRequest, GetParticipantStepResponse, GetSectionIdentifiers, GetSectionOptions, GetStepIdentifiers, GetStepOptions, GroupSettings, IndividualSettings, InvitationDetails, InviteAllParticipantsOptions, InviteAllParticipantsRequest, InviteAllParticipantsResponse, InviteParticipantsOptions, InviteParticipantsRequest, InviteParticipantsResponse, IssueCertificateIdentifiers, IssueCertificateRequest, IssueCertificateResponse, IssueParticipantCertificateIdentifiers, IssueParticipantCertificateRequest, IssueParticipantCertificateResponse, JoinParticipantOptions, JoinParticipantRequest, JoinParticipantResponse, JoinPath, JoinPathPathOneOf, ListParticipantSectionsRequest, ListParticipantSectionsResponse, ListParticipantStepsRequest, ListParticipantStepsResponse, ListParticipantsOptions, ListParticipantsRequest, ListParticipantsResponse, ListSectionsIdentifiers, ListSectionsOptions, ListStepsIdentifiers, ListStepsOptions, MediaFeedbackItem, MediaItem, MediaItemMediaOneOf, MediaItems, Member, MinThreshold, MultipleChoiceFeedbackItem, MyProgramRequest, MyProgramResponse, MyProgramSectionIdentifiers, MyProgramSectionOptions, MyProgramSectionRequest, MyProgramSectionResponse, MyProgramStepIdentifiers, MyProgramStepOptions, MyProgramStepRequest, MyProgramStepResponse, NumericFeedbackItem, ObjectDescription, Overdue, Paging, PaidPlan, Participant, ParticipantJoinDate, ParticipantJoined, ParticipantPerformance, ParticipantSection, ParticipantSectionStateTransition, ParticipantSectionStateTransitionStateOneOf, ParticipantStep, ParticipantStepState, ParticipantStepStateTransition, ParticipantsFilter, ParticipationState, PaymentType, Progress, Quantity, QuantityCriterion, QuantityCriterionCriterionOneOf, QuantityFeedbackItem, QueryParticipantsOptions, QueryParticipantsRequest, QueryParticipantsRequestJoinPath, QueryParticipantsRequestSorting, QueryParticipantsRequestSortingCriterion, QueryParticipantsRequestSortingOrder, QueryParticipantsResponse, QuizMigrationDetails, QuizSettings, QuizSubmission, QuizType, RecurrenceSchedule, RecurrenceSettings, RemoveCouponFromOrderIdentifiers, RemoveCouponFromOrderOptions, RemoveCouponFromOrderRequest, RemoveCouponFromOrderResponse, ResetParticipantProgressIdentifiers, ResetParticipantProgressOptions, ResetParticipantProgressRequest, ResetParticipantProgressResponse, ResolutionStatus, ResolveParticipantStepRequest, ResolveParticipantStepResponse, ResolveStepIdentifiers, ResolveStepOptions, ReviveParticipantIdentifiers, ReviveParticipantOptions, ReviveParticipantRequest, ReviveParticipantResponse, Running, Settings, SinglePayment, Sorting, SortingCriterion, SortingOrder, StartCondition, State, StateTransition, Step, StepDependency, StepDependencyDependencyTypeOneOf, StepEvent, StepResolved, StepsSummary, TextFeedbackItem, TimeDuration, TimeInterval, UpdateParticipantIdentifiers, UpdateParticipantOptions, UpdateParticipantRequest, UpdateParticipantRequestUpdateOneOf, UpdateParticipantResponse, UpdateStepFeedbackIdentifiers, UpdateStepFeedbackOptions, UpdateStepFeedbackRequest, UpdateStepFeedbackResponse, WaitingDate, WaitingDependency, __debug, addAllParticipant, addParticipant, addParticipants, applyCouponToOrder, createJoinRequest, createPaymentOrder, deleteParticipant, getCertificate, getMediaUploadInfo, getParticipant, getSection, getStep, inviteAllParticipants, inviteParticipants, issueCertificate, issueParticipantCertificate, joinParticipant, listParticipants, listSections, listSteps, myProgram, myProgramSection, myProgramStep, achievementsProgramsV2Program_universal_d as onlinePrograms, queryParticipants, removeCouponFromOrder, resetParticipantProgress, resolveStep, reviveParticipant, updateParticipant, updateStepFeedback };
}

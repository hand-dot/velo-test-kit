declare module "wix-members-followers-backend.v3" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface Follower {
      /** Member ID of the member who performed the action. */
      memberId?: string;
      /** Member ID of the member being followed or unfollowed. */
      affectedMemberId?: string;
  }
  interface FollowMemberRequest {
      /** Member ID. */
      memberId: string;
  }
  interface FollowMemberResponse {
  }
  interface MemberFollowed {
      /** Member who is following the other member. */
      memberConnection?: Follower;
  }
  interface UnfollowMemberRequest {
      /** Member ID. */
      memberId: string;
  }
  interface UnfollowMemberResponse {
  }
  interface MemberUnfollowed {
      /** Member who is unfollowing the other member. */
      memberConnection?: Follower;
  }
  interface ListMyMemberFollowingRequest {
      /** Pagination parameters. */
      paging?: CursorPaging;
  }
  interface CursorPaging {
      /** The number of items to load */
      limit?: number | null;
      /** cursor returned from last query response */
      cursor?: string | null;
  }
  interface ListMyMemberFollowingResponse {
      /** List of site members who are followed by the current member. */
      memberIds?: string[];
      /** Metadata for the paginated results. */
      pagingMetadata?: PagingMetadataV2;
  }
  interface PagingMetadataV2 {
      /** Number of items starting from given cursor. */
      count?: number | null;
      /** Cursors to navigate through the result pages using `next` and `prev`. */
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
      /** Cursor pointing to next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to previous page in the list of results. */
      prev?: string | null;
  }
  interface ListMemberFollowingRequest {
      /** Member ID. */
      memberId: string;
      /** Pagination parameters. */
      paging?: CursorPaging;
  }
  interface ListMemberFollowingResponse {
      /** List of site members who are followed by the requested member. */
      memberIds?: string[];
      /** Metadata for the paginated results. */
      pagingMetadata?: PagingMetadataV2;
  }
  interface ListMyMemberFollowersRequest {
      /** Pagination parameters. */
      paging?: CursorPaging;
  }
  interface ListMyMemberFollowersResponse {
      /** List of members who are following the current member. */
      memberIds?: string[];
      /** Metadata for the paginated results. */
      pagingMetadata?: PagingMetadataV2;
  }
  interface ListMemberFollowersRequest {
      /** Member ID. */
      memberId: string;
      /** Pagination parameters. */
      paging?: CursorPaging;
  }
  interface ListMemberFollowersResponse {
      /** List of members who are following the request member. */
      memberIds?: string[];
      /** Metadata for the paginated results. */
      pagingMetadata?: PagingMetadataV2;
  }
  interface QueryMyMemberConnectionsRequest {
      /**
       * List of member IDs whose connections to the current member
       * will be retrieved.
       */
      connectedMemberIds: string[];
  }
  interface QueryMyMemberConnectionsResponse {
      /** List of site members whose connections to the current member were retrieved. */
      connectedMembers?: ConnectedMembers[];
  }
  interface ConnectedMembers {
      /** Site member ID. */
      connectedMemberId?: string;
      /** Indicates if the listed member is followed by the requested member. */
      followedByMember?: boolean;
      /** Indicates if the listed member is following the requested member. */
      followingMember?: boolean;
  }
  interface QueryMemberConnectionsRequest {
      /**
       * List of member IDs whose connections to the requested member
       * will be retrieved.
       */
      connectedMemberIds: string[];
      /** ID of the requested member. */
      memberId: string;
  }
  interface QueryMemberConnectionsResponse {
      /** List of site members whose connections to the requested member were retrieved. */
      connectedMembers?: ConnectedMembers[];
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
      entityUpdates?: Record<string, any>;
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
  }
  interface ActionEvent {
      bodyAsJson?: string;
  }
  interface Empty {
  }
  /**
   * Sets the current member to follow another member.
   * @param memberId - Member ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField memberId
   */
  function followMember(memberId: string): Promise<void>;
  /**
   * Sets the current member to unfollow another member.
   * @param memberId - Member ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField memberId
   */
  function unfollowMember(memberId: string): Promise<void>;
  /**
   * Returns IDs of members followed by the member making the call
   * @internal
   * @documentationMaturity preview
   */
  function listCurrentMemberFollowing(options?: ListCurrentMemberFollowingOptions): Promise<ListCurrentMemberFollowingResult>;
  interface ListCurrentMemberFollowingOptions {
      /** Pagination parameters. */
      paging?: CursorPaging;
  }
  interface ListCurrentMemberFollowingResult {
      memberIds: string[];
      metadata: PagingMetadataV2;
  }
  /**
   * Lists members who are followed by the requested member.
   * @param memberId - Member ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField memberId
   */
  function listMemberFollowing(memberId: string, options?: ListMemberFollowingOptions): Promise<ListMemberFollowingResult>;
  interface ListMemberFollowingOptions {
      /** Pagination parameters. */
      paging?: CursorPaging;
  }
  interface ListMemberFollowingResult {
      memberIds: string[];
      metadata: PagingMetadataV2;
  }
  /**
   * Returns IDs of members who follow the member making the call
   * @internal
   * @documentationMaturity preview
   */
  function listCurrentMemberFollowers(options?: ListCurrentMemberFollowersOptions): Promise<ListCurrentMemberFollowersResult>;
  interface ListCurrentMemberFollowersOptions {
      /** Pagination parameters. */
      paging?: CursorPaging;
  }
  interface ListCurrentMemberFollowersResult {
      memberIds: string[];
      metadata: PagingMetadataV2;
  }
  /**
   * Lists members who follow the requested member.
   * @param memberId - Member ID.
   * @internal
   * @documentationMaturity preview
   * @requiredField memberId
   */
  function listMemberFollowers(memberId: string, options?: ListMemberFollowersOptions): Promise<ListMemberFollowersResult>;
  interface ListMemberFollowersOptions {
      /** Pagination parameters. */
      paging?: CursorPaging;
  }
  interface ListMemberFollowersResult {
      memberIds: string[];
      metadata: PagingMetadataV2;
  }
  /**
   * Returns information if provided site members are followers or are followed by the member making the call.
   * @param connectedMemberIds - List of member IDs whose connections to the current member
   * will be retrieved.
   * @internal
   * @documentationMaturity preview
   * @requiredField connectedMemberIds
   */
  function queryCurrentMemberConnections(connectedMemberIds: string[]): Promise<QueryMyMemberConnectionsResponse>;
  /**
   * Lists a member's follower or following connections to the other members specified in the request.
   * > Note: If no other members' IDs (`connectedMemberIds`) are passed, the call will return successful, but with no data.
   * @param memberId - ID of the requested member.
   * @param connectedMemberIds - List of member IDs whose connections to the requested member
   * will be retrieved.
   * @internal
   * @documentationMaturity preview
   * @requiredField connectedMemberIds
   * @requiredField memberId
   */
  function queryMemberConnections(memberId: string, connectedMemberIds: string[]): Promise<QueryMemberConnectionsResponse>;
  
  export { ActionEvent, ConnectedMembers, CursorPaging, Cursors, DomainEvent, DomainEventBodyOneOf, Empty, EntityCreatedEvent, EntityDeletedEvent, EntityUpdatedEvent, FollowMemberRequest, FollowMemberResponse, Follower, ListCurrentMemberFollowersOptions, ListCurrentMemberFollowersResult, ListCurrentMemberFollowingOptions, ListCurrentMemberFollowingResult, ListMemberFollowersOptions, ListMemberFollowersRequest, ListMemberFollowersResponse, ListMemberFollowersResult, ListMemberFollowingOptions, ListMemberFollowingRequest, ListMemberFollowingResponse, ListMemberFollowingResult, ListMyMemberFollowersRequest, ListMyMemberFollowersResponse, ListMyMemberFollowingRequest, ListMyMemberFollowingResponse, MemberFollowed, MemberUnfollowed, PagingMetadataV2, QueryMemberConnectionsRequest, QueryMemberConnectionsResponse, QueryMyMemberConnectionsRequest, QueryMyMemberConnectionsResponse, UnfollowMemberRequest, UnfollowMemberResponse, __debug, followMember, listCurrentMemberFollowers, listCurrentMemberFollowing, listMemberFollowers, listMemberFollowing, queryCurrentMemberConnections, queryMemberConnections, unfollowMember };
}

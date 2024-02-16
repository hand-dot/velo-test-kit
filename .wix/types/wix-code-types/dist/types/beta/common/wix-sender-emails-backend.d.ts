declare module "wix-sender-emails-backend" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface SenderEmail {
      /**
       * Unique identifier of the sender email item.
       * @readonly
       */
      _id?: string | null;
      /**
       * The time this sender email was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * The time this sender email was last updated.
       * @readonly
       */
      _updatedDate?: Date;
      /** Email address. */
      emailAddress?: string;
      /**
       * Is this sender email verified or not.
       * @readonly
       */
      verified?: boolean;
      /**
       * Verification code (returned only if asked explicitly on request AND when caller has "PROMOTE.SENDER_EMAILS_READ_VERIFICATION_CODE" permission).
       * @internal
       * @readonly
       */
      verificationCode?: string | null;
      /** Data Extensions */
      extendedFields?: ExtendedFields;
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
  interface GetSenderEmailRequest {
      /** ID of the sender email to retrieve. */
      senderEmailId: string;
      /**
       * Additionally requested fields.
       * @internal
       */
      fields?: RequestedFields[];
  }
  enum RequestedFields {
      UNKNOWN_REQUESTED_FIELD = "UNKNOWN_REQUESTED_FIELD",
      VERIFICATION_CODE = "VERIFICATION_CODE"
  }
  interface GetSenderEmailResponse {
      /** The requested sender email. */
      senderEmail?: SenderEmail;
  }
  interface ListSenderEmailsRequest {
      /** Paging parameters. */
      paging?: CursorPaging;
      /** Email address filter. */
      emailAddress?: string | null;
      /**
       * Additionally requested fields.
       * @internal
       */
      fields?: RequestedFields[];
  }
  interface CursorPaging {
      /** Number of items to load. */
      limit?: number | null;
      /**
       * Pointer to the next or previous page in the list of results.
       * You can get the relevant cursor token from the `pagingMetadata` object in the previous call's response.
       * Not relevant for the first request.
       */
      cursor?: string | null;
  }
  interface ListSenderEmailsResponse {
      /** Paging metadata. */
      pagingMetadata?: CursorPagingMetadata;
      /** List of sender emails. */
      senderEmails?: SenderEmail[];
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
  interface GetOrCreateSenderEmailRequest {
      /** Requested sender email. */
      emailAddress: string;
      /**
       * Additionally requested fields.
       * @internal
       */
      fields?: RequestedFields[];
  }
  interface GetOrCreateSenderEmailResponse {
      /** The returned sender email. */
      senderEmail?: SenderEmail;
  }
  interface CreateSenderEmailRequest {
      /** Sender email to be created. */
      senderEmail: SenderEmail;
      /**
       * Additionally requested fields.
       * @internal
       */
      fields?: RequestedFields[];
  }
  interface CreateSenderEmailResponse {
      /** The created sender email. */
      senderEmail?: SenderEmail;
  }
  interface DeleteSenderEmailRequest {
      /** ID of the sender email to delete. */
      senderEmailId: string;
  }
  interface DeleteSenderEmailResponse {
  }
  interface SendVerificationCodeRequest {
      /** ID of the sender email to send the code for. */
      senderEmailId: string;
  }
  interface SendVerificationCodeResponse {
  }
  interface VerifySenderEmailRequest {
      /** ID of the sender email to verify. */
      senderEmailId: string;
      /** Verification code from received email message. */
      verificationCode: string;
  }
  interface VerifySenderEmailResponse {
  }
  /**
   * Get sender email by id.
   * @param senderEmailId - ID of the sender email to retrieve.
   * @internal
   * @documentationMaturity preview
   * @requiredField senderEmailId
   * @adminMethod
   * @returns The requested sender email.
   */
  function getSenderEmail(senderEmailId: string, options?: GetSenderEmailOptions): Promise<SenderEmail>;
  interface GetSenderEmailOptions {
      /**
       * Additionally requested fields.
       * @internal
       */
      fields?: RequestedFields[];
  }
  /**
   * List sender emails.
   * @internal
   * @documentationMaturity preview
   * @adminMethod
   */
  function listSenderEmails(options?: ListSenderEmailsOptions): Promise<ListSenderEmailsResponse>;
  interface ListSenderEmailsOptions {
      /** Paging parameters. */
      paging?: CursorPaging;
      /** Email address filter. */
      emailAddress?: string | null;
      /**
       * Additionally requested fields.
       * @internal
       */
      fields?: RequestedFields[];
  }
  /**
   * Retrieve existing sender email by email address or create a new one.
   * @param emailAddress - Requested sender email.
   * @internal
   * @documentationMaturity preview
   * @requiredField emailAddress
   * @adminMethod
   */
  function getOrCreateSenderEmail(emailAddress: string, options?: GetOrCreateSenderEmailOptions): Promise<GetOrCreateSenderEmailResponse>;
  interface GetOrCreateSenderEmailOptions {
      /**
       * Additionally requested fields.
       * @internal
       */
      fields?: RequestedFields[];
  }
  /**
   * Create new sender email.
   * @param senderEmail - Sender email to be created.
   * @internal
   * @documentationMaturity preview
   * @requiredField senderEmail
   * @requiredField senderEmail.emailAddress
   * @adminMethod
   * @returns The created sender email.
   */
  function createSenderEmail(senderEmail: SenderEmail, options?: CreateSenderEmailOptions): Promise<SenderEmail>;
  interface CreateSenderEmailOptions {
      /**
       * Additionally requested fields.
       * @internal
       */
      fields?: RequestedFields[];
  }
  /**
   * Delete existing sender email.
   * @param senderEmailId - ID of the sender email to delete.
   * @internal
   * @documentationMaturity preview
   * @requiredField senderEmailId
   * @adminMethod
   */
  function deleteSenderEmail(senderEmailId: string): Promise<void>;
  /**
   * Send the verification code via email.
   * @param senderEmailId - ID of the sender email to send the code for.
   * @internal
   * @documentationMaturity preview
   * @requiredField senderEmailId
   * @adminMethod
   */
  function sendVerificationCode(senderEmailId: string): Promise<void>;
  /**
   * Verify sender email.
   * @param senderEmailId - ID of the sender email to verify.
   * @param verificationCode - Verification code from received email message.
   * @internal
   * @documentationMaturity preview
   * @requiredField senderEmailId
   * @requiredField verificationCode
   * @adminMethod
   */
  function verifySenderEmail(senderEmailId: string, verificationCode: string): Promise<void>;
  
  const promoteV1SenderEmail_universal_d___debug: typeof __debug;
  type promoteV1SenderEmail_universal_d_SenderEmail = SenderEmail;
  type promoteV1SenderEmail_universal_d_ExtendedFields = ExtendedFields;
  type promoteV1SenderEmail_universal_d_GetSenderEmailRequest = GetSenderEmailRequest;
  type promoteV1SenderEmail_universal_d_RequestedFields = RequestedFields;
  const promoteV1SenderEmail_universal_d_RequestedFields: typeof RequestedFields;
  type promoteV1SenderEmail_universal_d_GetSenderEmailResponse = GetSenderEmailResponse;
  type promoteV1SenderEmail_universal_d_ListSenderEmailsRequest = ListSenderEmailsRequest;
  type promoteV1SenderEmail_universal_d_CursorPaging = CursorPaging;
  type promoteV1SenderEmail_universal_d_ListSenderEmailsResponse = ListSenderEmailsResponse;
  type promoteV1SenderEmail_universal_d_CursorPagingMetadata = CursorPagingMetadata;
  type promoteV1SenderEmail_universal_d_Cursors = Cursors;
  type promoteV1SenderEmail_universal_d_GetOrCreateSenderEmailRequest = GetOrCreateSenderEmailRequest;
  type promoteV1SenderEmail_universal_d_GetOrCreateSenderEmailResponse = GetOrCreateSenderEmailResponse;
  type promoteV1SenderEmail_universal_d_CreateSenderEmailRequest = CreateSenderEmailRequest;
  type promoteV1SenderEmail_universal_d_CreateSenderEmailResponse = CreateSenderEmailResponse;
  type promoteV1SenderEmail_universal_d_DeleteSenderEmailRequest = DeleteSenderEmailRequest;
  type promoteV1SenderEmail_universal_d_DeleteSenderEmailResponse = DeleteSenderEmailResponse;
  type promoteV1SenderEmail_universal_d_SendVerificationCodeRequest = SendVerificationCodeRequest;
  type promoteV1SenderEmail_universal_d_SendVerificationCodeResponse = SendVerificationCodeResponse;
  type promoteV1SenderEmail_universal_d_VerifySenderEmailRequest = VerifySenderEmailRequest;
  type promoteV1SenderEmail_universal_d_VerifySenderEmailResponse = VerifySenderEmailResponse;
  const promoteV1SenderEmail_universal_d_getSenderEmail: typeof getSenderEmail;
  type promoteV1SenderEmail_universal_d_GetSenderEmailOptions = GetSenderEmailOptions;
  const promoteV1SenderEmail_universal_d_listSenderEmails: typeof listSenderEmails;
  type promoteV1SenderEmail_universal_d_ListSenderEmailsOptions = ListSenderEmailsOptions;
  const promoteV1SenderEmail_universal_d_getOrCreateSenderEmail: typeof getOrCreateSenderEmail;
  type promoteV1SenderEmail_universal_d_GetOrCreateSenderEmailOptions = GetOrCreateSenderEmailOptions;
  const promoteV1SenderEmail_universal_d_createSenderEmail: typeof createSenderEmail;
  type promoteV1SenderEmail_universal_d_CreateSenderEmailOptions = CreateSenderEmailOptions;
  const promoteV1SenderEmail_universal_d_deleteSenderEmail: typeof deleteSenderEmail;
  const promoteV1SenderEmail_universal_d_sendVerificationCode: typeof sendVerificationCode;
  const promoteV1SenderEmail_universal_d_verifySenderEmail: typeof verifySenderEmail;
  namespace promoteV1SenderEmail_universal_d {
    export {
      promoteV1SenderEmail_universal_d___debug as __debug,
      promoteV1SenderEmail_universal_d_SenderEmail as SenderEmail,
      promoteV1SenderEmail_universal_d_ExtendedFields as ExtendedFields,
      promoteV1SenderEmail_universal_d_GetSenderEmailRequest as GetSenderEmailRequest,
      promoteV1SenderEmail_universal_d_RequestedFields as RequestedFields,
      promoteV1SenderEmail_universal_d_GetSenderEmailResponse as GetSenderEmailResponse,
      promoteV1SenderEmail_universal_d_ListSenderEmailsRequest as ListSenderEmailsRequest,
      promoteV1SenderEmail_universal_d_CursorPaging as CursorPaging,
      promoteV1SenderEmail_universal_d_ListSenderEmailsResponse as ListSenderEmailsResponse,
      promoteV1SenderEmail_universal_d_CursorPagingMetadata as CursorPagingMetadata,
      promoteV1SenderEmail_universal_d_Cursors as Cursors,
      promoteV1SenderEmail_universal_d_GetOrCreateSenderEmailRequest as GetOrCreateSenderEmailRequest,
      promoteV1SenderEmail_universal_d_GetOrCreateSenderEmailResponse as GetOrCreateSenderEmailResponse,
      promoteV1SenderEmail_universal_d_CreateSenderEmailRequest as CreateSenderEmailRequest,
      promoteV1SenderEmail_universal_d_CreateSenderEmailResponse as CreateSenderEmailResponse,
      promoteV1SenderEmail_universal_d_DeleteSenderEmailRequest as DeleteSenderEmailRequest,
      promoteV1SenderEmail_universal_d_DeleteSenderEmailResponse as DeleteSenderEmailResponse,
      promoteV1SenderEmail_universal_d_SendVerificationCodeRequest as SendVerificationCodeRequest,
      promoteV1SenderEmail_universal_d_SendVerificationCodeResponse as SendVerificationCodeResponse,
      promoteV1SenderEmail_universal_d_VerifySenderEmailRequest as VerifySenderEmailRequest,
      promoteV1SenderEmail_universal_d_VerifySenderEmailResponse as VerifySenderEmailResponse,
      promoteV1SenderEmail_universal_d_getSenderEmail as getSenderEmail,
      promoteV1SenderEmail_universal_d_GetSenderEmailOptions as GetSenderEmailOptions,
      promoteV1SenderEmail_universal_d_listSenderEmails as listSenderEmails,
      promoteV1SenderEmail_universal_d_ListSenderEmailsOptions as ListSenderEmailsOptions,
      promoteV1SenderEmail_universal_d_getOrCreateSenderEmail as getOrCreateSenderEmail,
      promoteV1SenderEmail_universal_d_GetOrCreateSenderEmailOptions as GetOrCreateSenderEmailOptions,
      promoteV1SenderEmail_universal_d_createSenderEmail as createSenderEmail,
      promoteV1SenderEmail_universal_d_CreateSenderEmailOptions as CreateSenderEmailOptions,
      promoteV1SenderEmail_universal_d_deleteSenderEmail as deleteSenderEmail,
      promoteV1SenderEmail_universal_d_sendVerificationCode as sendVerificationCode,
      promoteV1SenderEmail_universal_d_verifySenderEmail as verifySenderEmail,
    };
  }
  
  export { promoteV1SenderEmail_universal_d as senderEmails };
}

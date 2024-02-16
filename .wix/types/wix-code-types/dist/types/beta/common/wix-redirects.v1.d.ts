declare module "wix-redirects.v1" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** Information for redirecting a visitor from an external Wix Headless client site to a Wix page for Wix-managed functionality. */
  interface RedirectSession {
      /** ID of the redirect session created. */
      _id?: string;
      /**
       * The full URL of the Wix page to redirect the visitor to. This URL includes query parameters informing Wix where to redirect the visitor back to on the Wix Headless client site.
       * @readonly
       */
      fullUrl?: string;
  }
  interface CreateRedirectSessionRequest extends CreateRedirectSessionRequestIntentOneOf {
      /** Information required for generating a custom URL for a Wix Bookings checkout. */
      bookingsCheckout?: RedirectSessionBookingsCheckoutParams;
      /** Information required for generating a custom URL for a Wix eCommerce checkout. */
      ecomCheckout?: RedirectSessionEcomCheckoutParams;
      /** Information required for generating a custom URL for a Wix Events checkout. */
      eventsCheckout?: RedirectSessionEventsCheckoutParams;
      /** Information required for generating a custom URL for a Wix Paid Plans checkout. */
      paidPlansCheckout?: RedirectSessionPaidPlansCheckoutParams;
      /** Pass an empty object in this parameter to generate a URL for Wix login without first checking whether the visitor is authenticated. */
      login?: RedirectSessionLoginParams;
      /** Information required for generating a custom URL to log out from a Wix account. This process invalidates the visitor or member token and clears cookies associated with the Wix domain from their browser. */
      logout?: RedirectSessionLogoutParams;
      /** Information required for generating a custom URL for Wix authentication. */
      auth?: RedirectSessionAuthParams;
      /**
       * For future use - The parameters used in order to generate the URL into the members account area (AKA my account)
       * @internal
       */
      memberAccountPage?: RedirectSessionMembersAccountParams;
      /**
       * Details of pages to redirect the visitor back to on the Wix Headless client site.
       *
       * **Note**: For an authentication redirect, don't pass a post-flow URL here. Instead, pass one in `options.auth.authRequest.redirectUri`.
       */
      callbacks?: CallbackParams;
      /** Optional preferences for customizing redirection to Wix pages. */
      preferences?: RedirectSessionPreferences;
  }
  /** @oneof */
  interface CreateRedirectSessionRequestIntentOneOf {
      /** Information required for generating a custom URL for a Wix Bookings checkout. */
      bookingsCheckout?: RedirectSessionBookingsCheckoutParams;
      /** Information required for generating a custom URL for a Wix eCommerce checkout. */
      ecomCheckout?: RedirectSessionEcomCheckoutParams;
      /** Information required for generating a custom URL for a Wix Events checkout. */
      eventsCheckout?: RedirectSessionEventsCheckoutParams;
      /** Information required for generating a custom URL for a Wix Paid Plans checkout. */
      paidPlansCheckout?: RedirectSessionPaidPlansCheckoutParams;
      /** Pass an empty object in this parameter to generate a URL for Wix login without first checking whether the visitor is authenticated. */
      login?: RedirectSessionLoginParams;
      /** Information required for generating a custom URL to log out from a Wix account. This process invalidates the visitor or member token and clears cookies associated with the Wix domain from their browser. */
      logout?: RedirectSessionLogoutParams;
      /** Information required for generating a custom URL for Wix authentication. */
      auth?: RedirectSessionAuthParams;
      /**
       * For future use - The parameters used in order to generate the URL into the members account area (AKA my account)
       * @internal
       */
      memberAccountPage?: RedirectSessionMembersAccountParams;
  }
  interface RedirectSessionBookingsCheckoutParams {
      /**
       * The selected calendar slots to checkout (use slot_availability instead)
       * @internal
       */
      slot?: SlotAvailability;
      /**
       * The timezone to use when presenting the selected slot to users, in [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) format. For example, `America/Santiago`.
       *
       * Default: If you don't specify a timezone, the timezone in `slotAvailability.slot.timezone` is used.
       */
      timezone?: string;
      /** __Required.__ The calendar slot to check out. */
      slotAvailability?: SlotAvailability;
  }
  interface SlotAvailability {
      /**
       * The slot for the corresponding session, when the session is either a single session
       * or a specific session generated from a recurring session.
       */
      slot?: Slot;
      /**
       * Whether the slot is bookable. Bookability is determined by checking a
       * session's open slots and booking policies. Locks are not taken into
       * account.
       */
      bookable?: boolean;
      /**
       * Total number of spots for this slot.
       * For example, if a session has a total of 10 spots and 3 spots are booked,
       * `spotsTotal` is 10 and `openSpots` is 7.
       */
      totalSpots?: number | null;
      /** Number of open spots for this slot. */
      openSpots?: number | null;
      /** An object describing the slot's waitlist and its occupancy. */
      waitingList?: WaitingList;
      /** Booking policy violations for the slot. */
      bookingPolicyViolations?: BookingPolicyViolations;
      /**
       * Indicates whether the slot is locked because a waitlist exists.
       * When a slot frees up, the slot is offered to the next customer on the waitlist. Read-only.
       */
      locked?: boolean | null;
      isFromV2?: boolean;
      /** @internal */
      nestedSlots?: NestedTimeSlot[];
  }
  interface Slot {
      /**
       * ID for the slot's corresponding session, when the session is either a single session
       * or a specific session generated from a recurring session.
       */
      sessionId?: string | null;
      /** Service ID. */
      serviceId?: string;
      /** Schedule ID. */
      scheduleId?: string;
      /**
       * The start time of this slot in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339)
       * format.
       *
       * If `timezone` is specified,
       * dates are based on the local date/time. This means that the timezone offset
       * in the `startDate` is ignored.
       */
      startDate?: string | null;
      /**
       * The end time of this slot in
       * [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339) format.
       *
       * If `timezone` is specified,
       * dates are based on the local date/time. This means that the timezone offset
       * in the `endDate` is ignored.
       */
      endDate?: string | null;
      /**
       * The timezone for which slot availability is to be calculated.
       *
       * Learn more about [handling Daylight Savings Time (DST) for local time zones](https://dev.wix.com/api/sdk/bookings/availabilitycalendar/queryavailability#bookings_availabilitycalendar_queryavailability_handling-daylight-savings-time-dst-for-local-time-zones)
       * when calculating availability.
       */
      timezone?: string | null;
      /**
       * The resource required for this slot. Currently, the only supported resource
       * is the relevant staff member for the slot.
       */
      resource?: SlotResource;
      /** Geographic location of the slot. */
      location?: Location;
  }
  interface SlotResource {
      /**
       * Resource ID.
       * @readonly
       */
      _id?: string | null;
      /** Resource name. Read only. */
      name?: string | null;
      /**
       * Schedule ID. Read only.
       * @internal
       */
      scheduleId?: string | null;
  }
  interface Location {
      /**
       * Business location ID. Available only for locations that are business locations,
       * meaning the `location_type` is `"OWNER_BUSINESS"`.
       */
      _id?: string | null;
      /** Location name. */
      name?: string | null;
      /** The full address of this location. */
      formattedAddress?: string | null;
      /**
       * Location type.
       *
       * - `"OWNER_BUSINESS"`: The business address, as set in the site’s general settings.
       * - `"OWNER_CUSTOM"`: The address as set when creating the service.
       * - `"CUSTOM"`: The address as set for the individual session.
       */
      locationType?: LocationType;
  }
  enum LocationType {
      UNDEFINED = "UNDEFINED",
      OWNER_BUSINESS = "OWNER_BUSINESS",
      OWNER_CUSTOM = "OWNER_CUSTOM",
      CUSTOM = "CUSTOM"
  }
  interface WaitingList {
      /**
       * Total number of spots and open spots for this waitlist.
       * For example, a Yoga class with 10 waitlist spots and 3 registered
       * on the waitlist has 10 `total_spots` and 7 `open_spots`.
       */
      totalSpots?: number | null;
      /** Number of open spots for this waitlist. */
      openSpots?: number | null;
  }
  interface BookingPolicyViolations {
      /** Bookings policy violation. Too early to book this slot. */
      tooEarlyToBook?: boolean | null;
      /** Bookings policy violation. Too late to book this slot. */
      tooLateToBook?: boolean | null;
      /** Bookings policy violation. Online booking is disabled for this slot. */
      bookOnlineDisabled?: boolean | null;
  }
  interface NestedTimeSlot {
      serviceId?: string;
      start?: string;
      end?: string;
      resource?: SlotResource;
      /** Schedule ID. */
      scheduleId?: string;
  }
  interface RedirectSessionEcomCheckoutParams {
      /** __Required.__ ID of the checkout to process. Use [`createCheckout()`](https://dev.wix.com/api/sdk/ecom/checkout/createcheckout) or [`createCheckoutFromCurrentCart()`](https://dev.wix.com/api/sdk/ecom/currentcart/createcheckoutfromcurrentcart) to create a checkout and obtain an ID. */
      checkoutId?: string;
  }
  interface RedirectSessionEventsCheckoutParams {
      /** __Required.__ ID of the temporary event reservation. Use [`createReservation()`](https://dev.wix.com/api/sdk/events/checkout/createreservation) to reserve a ticket temporarily and obtain a reservation ID. */
      reservationId?: string;
      /** __Required.__ URL-friendly event slug, generated from the event title of the event. For example, `my-event-4`. Use [`listEvents()`](https://dev.wix.com/api/sdk/events/wixevents/listevents) to obtain an event slug. */
      eventSlug?: string;
  }
  interface RedirectSessionPaidPlansCheckoutParams {
      /** __Required.__ ID of the paid plan selected. Use [`queryPublicPlans()`](https://dev.wix.com/api/sdk/pricing-plans/plans/querypublicplans) to obtain a paid plan ID. */
      planId?: string;
      /**
       * For use when pricing plan selection is part of a checkout flow, only if the paid plan selection page is implemented on an external Wix Headless client site.
       * In this case, a string is received by the external pricing plans page as a `checkoutData` query parameter. Pass this string back here when redirecting back to Wix for checkout.
       */
      checkoutData?: string | null;
  }
  interface RedirectSessionLoginParams {
  }
  interface RedirectSessionLogoutParams {
      /** __Required.__ ID of the OAuth app authorizing the client. */
      clientId?: string;
  }
  interface RedirectSessionAuthParams {
      /** __Required.__ The authorization request to send to the authorization server. */
      authRequest?: AuthorizeRequest;
      prompt?: Prompt;
  }
  /**
   * AuthorizeRequest is sent by the client to the authorization server to initiate
   * the authorization process.
   */
  interface AuthorizeRequest {
      /** ID of the Wix OAuth app requesting authorization. */
      clientId?: string;
      /**
       * Desired authorization [grant type](https://auth0.com/docs/authenticate/protocols/oauth#grant-types).
       *
       * Supported values:
       * + `code`: The endpoint returns an authorization code that can be used to obtain an access token.
       */
      responseType?: string;
      /** URI to redirect the browser to after authentication and authorization. The browser is redirected to this URI whether the authentication and authorization process is successful or not. */
      redirectUri?: string | null;
      /**
       * Desired scope of access. If this field is left empty, only an access token is granted.
       * To received a refresh token, pass `offline_access` as the value of this field.
       */
      scope?: string | null;
      /**
       * A value used to confirm the state of an application before and after it makes an authorization
       * request. If a value for this field is set in the request, it's added to the `redirectUri` when the browser
       * is redirected there.
       * Learn more about [using the state parameter](https://auth0.com/docs/secure/attack-protection/state-parameters).
       */
      state?: string;
      /**
       * esired response format.
       *
       * Supported values:
       * + `query`: The response parameters are encoded as query string parameters and added to the `redirectUri` when redirecting.
       * + `fragment`: The response parameters are encoded as URI fragment parameters and added to the `redirectUri` when redirecting.
       * + `web_message`: The response parameters are encoded as a JSON object and added to the body of a [web message response](https://datatracker.ietf.org/doc/html/draft-sakimura-oauth-wmrm-00).
       *
       * Default value: `query`
       */
      responseMode?: string | null;
      /**
       * Code challenge to use for PKCE verification.
       * This field is only used if `responseType` is set to `code`.
       */
      codeChallenge?: string | null;
      /**
       * Code challenge method to use for PKCE verification.
       * This field is only used if `responseType` is set to `code`.
       *
       * Supported values:
       * + `S256`: The code challenge is transformed using SHA-256 encyption.
       * + `S512`: The code challenge is transformed using SHA-512 encyption.
       */
      codeChallengeMethod?: string | null;
      /** Session token of the site visitor to authorize. */
      sessionToken?: string | null;
      /**
       * Optional fields for errors
       * A short error code that describes the type of error that occurred (e.g. "invalid_request")
       * @internal
       */
      error?: string | null;
      /**
       * A human-readable description of the error that occurred
       * @internal
       */
      errorDescription?: string | null;
  }
  /** Currently only `none` and `login` are supported. */
  enum Prompt {
      login = "login",
      none = "none",
      consent = "consent",
      select_account = "select_account"
  }
  interface RedirectSessionMembersAccountParams {
      /**
       * The member account page to redirect to.
       *
       * Default: `ACCOUNT_INFO`
       */
      section?: MembersAccountSection;
  }
  enum MembersAccountSection {
      /** default - account info section in "my account" */
      ACCOUNT_INFO = "ACCOUNT_INFO",
      /** My Bookings section in "my account" */
      BOOKINGS = "BOOKINGS",
      /** My Orders section in "my account" */
      ORDERS = "ORDERS",
      /** Subscriptions section in "my account" */
      SUBSCRIPTIONS = "SUBSCRIPTIONS",
      /** Events section in "my account" */
      EVENTS = "EVENTS"
  }
  interface CallbackParams {
      /**
       * The URL for a custom thank you page implemented on a site outside of Wix. The visitor is directed to this page after the Wix-managed process is completed.
       * When redirecting to this URL, Wix passes different query parameters depending on the preceding transaction:
       *
       * After a pricing plans checkout:
       * + `planOrderId`: ID of a pricing plan order.
       *
       * After an eCommerce checkout:
       * + `orderId`: ID of an eCommerce order.
       *
       * After an Events checkout
       * + `orderNumber`: Unique order number for the transaction.
       * + `eventId`: ID of the event.
       *
       * If the process is abandoned or interrupted, the visitor is redirected to the URL specified in `postFlowUrl` instead.
       *
       * Default: If you don't pass a URL, the visitor is redirected to a Wix thank you page, and from there to the URL specified in `postFlowUrl`.
       */
      thankYouPageUrl?: string | null;
      /**
       * The URL Wix should redirect the visitor to when the Wix-managed process is completed, abandoned, or interrupted.
       *
       * **Note**: For an authentication redirect, don't pass a URL here. Instead, pass one in `options.auth.authRequest.redirectUri`.
       */
      postFlowUrl?: string | null;
      /**
       * (Deprecated - use planListUrl) An external pricing plans page URL, used in case the checkout allows payment with a paid plans
       * @internal
       */
      plansListUrl?: string | null;
      /**
       * The URL for a custom login page implemented outside of Wix.
       *
       * Default: If you don't pass a URL, a Wix login page is used.
       */
      loginUrl?: string | null;
      /**
       * The URL for a custom bookings services page implemented outside of Wix.
       *
       * Default: If you don't pass a URL, a Wix bookings services page is used.
       */
      bookingsServiceListUrl?: string | null;
      /**
       * The URL for a custom eCommerce cart page implemented outside of Wix.
       *
       * Default: If you don't pass a URL, a Wix cart page is used.
       */
      cartPageUrl?: string | null;
      /**
       * The URL for a custom pricing plans page implemented outside of Wix. When redirecting to this URL, Wix passes the following query parameters:
       * + `planIds`:  IDs of the pricing plans on the custom page.
       * + `checkoutData`: Pass this string back in `options.paidPlansCheckout.checkoutData` when redirecting back to Wix for checkout.
       *
       *  Default: If you don't pass a URL, a Wix pricing plans page is used.
       */
      planListUrl?: string | null;
      /**
       * A state which is passed back to the client when Wix redirects back to the headless site.
       * Will be passed back in the `state` query parameter to any of the callback URLs.
       * If you don't pass the state parameter, the state query parameter will not be passed back.
       *
       * If you wish to include a state only for specific callback URLs, you can pass the state parameter in the relevant callback URL.
       * @internal
       */
      state?: string | null;
  }
  interface RedirectSessionPreferences {
      /**
       * Whether to use a standard Wix template for Wix-managed pages the visitor is redirected to. Set to `false` only if your client site connects with a Wix site that has custom pages.
       *
       * Default: `true`
       */
      useGenericWixPages?: boolean | null;
      /**
       * Custom paths for member pages. Required if `useGenericWixPages` is `false` and the page paths have been changed in the Wix editor.
       * @internal
       */
      customMemberPaths?: CustomMemberPaths;
      /**
       * Whether to maintain the identity used in the redirect to wix (not relevant for "logout" and "auth" intents), or to use a new visitor identity.
       *
       * Default: `true`
       */
      maintainIdentity?: boolean | null;
      /**
       * A map of additional query parameters to pass to the created Wix URL.
       * Global query parameters to be passed to Wix, for example campaign parameters (UTM params).
       */
      additionalQueryParameters?: Record<string, string>;
  }
  interface CustomMemberPaths {
      /** Path of the account page in the site's members area. Required if `useGenericWixPages` is `false` and the account page path has been changed in the Wix editor. */
      accountPagePath?: string | null;
      /** Path of the member profile page in the site's members area. Required if `useGenericWixPages` is `false` and the member profile page path has been changed in the Wix editor. */
      profilePagePath?: string | null;
  }
  interface CreateRedirectSessionResponse {
      /** Details for redirecting the visitor to a Wix page. */
      redirectSession?: RedirectSession;
  }
  interface ValidateCallbackURLRequest {
      /** An external URL to validate */
      callbackUrl: string;
      /** The type of the callback URL */
      callbackType: CallbackType;
      /** The oauth app id used in order to pull the allowed domains from, has to correspond to the same metasite as the site in context */
      clientId: string;
  }
  enum CallbackType {
      /** Invalid value - default */
      UNKNOWN = "UNKNOWN",
      /** The callback URL is used for the logout flow */
      LOGOUT = "LOGOUT",
      /** The callback URL is used for a checkout flow */
      CHECKOUT = "CHECKOUT",
      /** The callback URL is used for the authorize flow */
      AUTHORIZE = "AUTHORIZE"
  }
  interface ValidateCallbackURLResponse {
      /** is the provided url allowed for the given client id */
      isValid?: boolean;
  }
  interface SignInURLRequest {
      /** The oauth app id used in order to pull the allowed domains from, has to correspond to the same metasite as the site in context */
      clientId: string;
  }
  interface SignInURLResponse {
      /** The Wix URL details to redirect into */
      redirectSession?: RedirectSession;
  }
  /**
   * Creates a URL for redirecting a visitor from an external client site to a Wix page for Wix-managed functionality.
   *
   *
   * The `createRedirectSession()` function enables your external Wix Headless client site, built on any platform, to integrate Wix-managed frontend functionality for specific processes.
   * For example, your site can temporarily redirect a visitor to Wix for authentication, or for a checkout process for a bookings, eCommerce, events, or paid plans transaction.
   *
   * To initiate a redirect session:
   *
   * 1. Call `createRedirectSession()` with the details required for Wix to take care of one specific process (for example, authentication or a bookings checkout). Provide one or more callback URLs, so Wix can redirect the user back to your site as appropriate when the process is over.
   * 1. Redirect your visitor to the URL provided in the response. This URL includes query parameters informing Wix where to redirect the visitor back to on your external site.
   * 1. Make sure the pages at the callback URLs you provided take care of the next stages in your visitor flow.
   * @public
   * @documentationMaturity preview
   * @param options - Options for creating a redirect session.
   */
  function createRedirectSession(options?: CreateRedirectSessionOptions): Promise<CreateRedirectSessionResponse>;
  interface CreateRedirectSessionOptions extends CreateRedirectSessionRequestIntentOneOf {
      /** Information required for generating a custom URL for a Wix Bookings checkout. */
      bookingsCheckout?: RedirectSessionBookingsCheckoutParams;
      /** Information required for generating a custom URL for a Wix eCommerce checkout. */
      ecomCheckout?: RedirectSessionEcomCheckoutParams;
      /** Information required for generating a custom URL for a Wix Events checkout. */
      eventsCheckout?: RedirectSessionEventsCheckoutParams;
      /** Information required for generating a custom URL for a Wix Paid Plans checkout. */
      paidPlansCheckout?: RedirectSessionPaidPlansCheckoutParams;
      /** Pass an empty object in this parameter to generate a URL for Wix login without first checking whether the visitor is authenticated. */
      login?: RedirectSessionLoginParams;
      /** Information required for generating a custom URL to log out from a Wix account. This process invalidates the visitor or member token and clears cookies associated with the Wix domain from their browser. */
      logout?: RedirectSessionLogoutParams;
      /** Information required for generating a custom URL for Wix authentication. */
      auth?: RedirectSessionAuthParams;
      /**
       * For future use - The parameters used in order to generate the URL into the members account area (AKA my account)
       * @internal
       */
      memberAccountPage?: RedirectSessionMembersAccountParams;
      /**
       * Details of pages to redirect the visitor back to on the Wix Headless client site.
       *
       * **Note**: For an authentication redirect, don't pass a post-flow URL here. Instead, pass one in `options.auth.authRequest.redirectUri`.
       */
      callbacks?: CallbackParams;
      /** Optional preferences for customizing redirection to Wix pages. */
      preferences?: RedirectSessionPreferences;
  }
  /**
   * Validates a callback url per the allowed domains defined for a given client id
   *
   * This function is not a universal function and runs only on the backend.
   * @param callbackUrl - An external URL to validate
   * @internal
   * @documentationMaturity preview
   * @requiredField callbackUrl
   * @requiredField options
   * @requiredField options.callbackType
   * @requiredField options.clientId
   * @adminMethod
   */
  function validateCallbackUrl(callbackUrl: string, options: ValidateCallbackUrlOptions): Promise<ValidateCallbackURLResponse>;
  interface ValidateCallbackUrlOptions {
      /** The type of the callback URL */
      callbackType: CallbackType;
      /** The oauth app id used in order to pull the allowed domains from, has to correspond to the same metasite as the site in context */
      clientId: string;
  }
  /**
   * (Internal) - get the wix login url (site)
   *
   * This function is not a universal function and runs only on the backend.
   * @param clientId - The oauth app id used in order to pull the allowed domains from, has to correspond to the same metasite as the site in context
   * @internal
   * @documentationMaturity preview
   * @requiredField clientId
   * @adminMethod
   */
  function signInUrl(clientId: string): Promise<SignInURLResponse>;
  
  const headlessV1RedirectSession_universal_d___debug: typeof __debug;
  type headlessV1RedirectSession_universal_d_RedirectSession = RedirectSession;
  type headlessV1RedirectSession_universal_d_CreateRedirectSessionRequest = CreateRedirectSessionRequest;
  type headlessV1RedirectSession_universal_d_CreateRedirectSessionRequestIntentOneOf = CreateRedirectSessionRequestIntentOneOf;
  type headlessV1RedirectSession_universal_d_RedirectSessionBookingsCheckoutParams = RedirectSessionBookingsCheckoutParams;
  type headlessV1RedirectSession_universal_d_SlotAvailability = SlotAvailability;
  type headlessV1RedirectSession_universal_d_Slot = Slot;
  type headlessV1RedirectSession_universal_d_SlotResource = SlotResource;
  type headlessV1RedirectSession_universal_d_Location = Location;
  type headlessV1RedirectSession_universal_d_LocationType = LocationType;
  const headlessV1RedirectSession_universal_d_LocationType: typeof LocationType;
  type headlessV1RedirectSession_universal_d_WaitingList = WaitingList;
  type headlessV1RedirectSession_universal_d_BookingPolicyViolations = BookingPolicyViolations;
  type headlessV1RedirectSession_universal_d_NestedTimeSlot = NestedTimeSlot;
  type headlessV1RedirectSession_universal_d_RedirectSessionEcomCheckoutParams = RedirectSessionEcomCheckoutParams;
  type headlessV1RedirectSession_universal_d_RedirectSessionEventsCheckoutParams = RedirectSessionEventsCheckoutParams;
  type headlessV1RedirectSession_universal_d_RedirectSessionPaidPlansCheckoutParams = RedirectSessionPaidPlansCheckoutParams;
  type headlessV1RedirectSession_universal_d_RedirectSessionLoginParams = RedirectSessionLoginParams;
  type headlessV1RedirectSession_universal_d_RedirectSessionLogoutParams = RedirectSessionLogoutParams;
  type headlessV1RedirectSession_universal_d_RedirectSessionAuthParams = RedirectSessionAuthParams;
  type headlessV1RedirectSession_universal_d_AuthorizeRequest = AuthorizeRequest;
  type headlessV1RedirectSession_universal_d_Prompt = Prompt;
  const headlessV1RedirectSession_universal_d_Prompt: typeof Prompt;
  type headlessV1RedirectSession_universal_d_RedirectSessionMembersAccountParams = RedirectSessionMembersAccountParams;
  type headlessV1RedirectSession_universal_d_MembersAccountSection = MembersAccountSection;
  const headlessV1RedirectSession_universal_d_MembersAccountSection: typeof MembersAccountSection;
  type headlessV1RedirectSession_universal_d_CallbackParams = CallbackParams;
  type headlessV1RedirectSession_universal_d_RedirectSessionPreferences = RedirectSessionPreferences;
  type headlessV1RedirectSession_universal_d_CustomMemberPaths = CustomMemberPaths;
  type headlessV1RedirectSession_universal_d_CreateRedirectSessionResponse = CreateRedirectSessionResponse;
  type headlessV1RedirectSession_universal_d_ValidateCallbackURLRequest = ValidateCallbackURLRequest;
  type headlessV1RedirectSession_universal_d_CallbackType = CallbackType;
  const headlessV1RedirectSession_universal_d_CallbackType: typeof CallbackType;
  type headlessV1RedirectSession_universal_d_ValidateCallbackURLResponse = ValidateCallbackURLResponse;
  type headlessV1RedirectSession_universal_d_SignInURLRequest = SignInURLRequest;
  type headlessV1RedirectSession_universal_d_SignInURLResponse = SignInURLResponse;
  const headlessV1RedirectSession_universal_d_createRedirectSession: typeof createRedirectSession;
  type headlessV1RedirectSession_universal_d_CreateRedirectSessionOptions = CreateRedirectSessionOptions;
  const headlessV1RedirectSession_universal_d_validateCallbackUrl: typeof validateCallbackUrl;
  type headlessV1RedirectSession_universal_d_ValidateCallbackUrlOptions = ValidateCallbackUrlOptions;
  const headlessV1RedirectSession_universal_d_signInUrl: typeof signInUrl;
  namespace headlessV1RedirectSession_universal_d {
    export {
      headlessV1RedirectSession_universal_d___debug as __debug,
      headlessV1RedirectSession_universal_d_RedirectSession as RedirectSession,
      headlessV1RedirectSession_universal_d_CreateRedirectSessionRequest as CreateRedirectSessionRequest,
      headlessV1RedirectSession_universal_d_CreateRedirectSessionRequestIntentOneOf as CreateRedirectSessionRequestIntentOneOf,
      headlessV1RedirectSession_universal_d_RedirectSessionBookingsCheckoutParams as RedirectSessionBookingsCheckoutParams,
      headlessV1RedirectSession_universal_d_SlotAvailability as SlotAvailability,
      headlessV1RedirectSession_universal_d_Slot as Slot,
      headlessV1RedirectSession_universal_d_SlotResource as SlotResource,
      headlessV1RedirectSession_universal_d_Location as Location,
      headlessV1RedirectSession_universal_d_LocationType as LocationType,
      headlessV1RedirectSession_universal_d_WaitingList as WaitingList,
      headlessV1RedirectSession_universal_d_BookingPolicyViolations as BookingPolicyViolations,
      headlessV1RedirectSession_universal_d_NestedTimeSlot as NestedTimeSlot,
      headlessV1RedirectSession_universal_d_RedirectSessionEcomCheckoutParams as RedirectSessionEcomCheckoutParams,
      headlessV1RedirectSession_universal_d_RedirectSessionEventsCheckoutParams as RedirectSessionEventsCheckoutParams,
      headlessV1RedirectSession_universal_d_RedirectSessionPaidPlansCheckoutParams as RedirectSessionPaidPlansCheckoutParams,
      headlessV1RedirectSession_universal_d_RedirectSessionLoginParams as RedirectSessionLoginParams,
      headlessV1RedirectSession_universal_d_RedirectSessionLogoutParams as RedirectSessionLogoutParams,
      headlessV1RedirectSession_universal_d_RedirectSessionAuthParams as RedirectSessionAuthParams,
      headlessV1RedirectSession_universal_d_AuthorizeRequest as AuthorizeRequest,
      headlessV1RedirectSession_universal_d_Prompt as Prompt,
      headlessV1RedirectSession_universal_d_RedirectSessionMembersAccountParams as RedirectSessionMembersAccountParams,
      headlessV1RedirectSession_universal_d_MembersAccountSection as MembersAccountSection,
      headlessV1RedirectSession_universal_d_CallbackParams as CallbackParams,
      headlessV1RedirectSession_universal_d_RedirectSessionPreferences as RedirectSessionPreferences,
      headlessV1RedirectSession_universal_d_CustomMemberPaths as CustomMemberPaths,
      headlessV1RedirectSession_universal_d_CreateRedirectSessionResponse as CreateRedirectSessionResponse,
      headlessV1RedirectSession_universal_d_ValidateCallbackURLRequest as ValidateCallbackURLRequest,
      headlessV1RedirectSession_universal_d_CallbackType as CallbackType,
      headlessV1RedirectSession_universal_d_ValidateCallbackURLResponse as ValidateCallbackURLResponse,
      headlessV1RedirectSession_universal_d_SignInURLRequest as SignInURLRequest,
      headlessV1RedirectSession_universal_d_SignInURLResponse as SignInURLResponse,
      headlessV1RedirectSession_universal_d_createRedirectSession as createRedirectSession,
      headlessV1RedirectSession_universal_d_CreateRedirectSessionOptions as CreateRedirectSessionOptions,
      headlessV1RedirectSession_universal_d_validateCallbackUrl as validateCallbackUrl,
      headlessV1RedirectSession_universal_d_ValidateCallbackUrlOptions as ValidateCallbackUrlOptions,
      headlessV1RedirectSession_universal_d_signInUrl as signInUrl,
    };
  }
  
  export { headlessV1RedirectSession_universal_d as redirects };
}

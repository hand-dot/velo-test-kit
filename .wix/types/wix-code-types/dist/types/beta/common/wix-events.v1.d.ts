declare module "wix-events.v1" {
  const __debug$5: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface Event {
      /**
       * Event ID.
       * @readonly
       */
      _id?: string;
      /** Event location. */
      location?: Location$1;
      /** Event scheduling. */
      scheduling?: Scheduling;
      /** Event title. */
      title?: string;
      /** Event description. */
      description?: string;
      /** Rich-text content displayed in Wix UI - "About Event" section (HTML). */
      about?: string;
      /** Main event image. */
      mainImage?: string;
      /** Event slug URL (generated from event title). */
      slug?: string;
      /** ISO 639-1 language code of the event (used in content translations). */
      language?: string;
      /** Event creation timestamp. */
      created?: Date;
      /** Event modified timestamp. */
      modified?: Date;
      /** Event status. */
      status?: EventStatus;
      /** RSVP or ticketing registration details. */
      registration?: Registration;
      /** "Add to calendar" URLs. */
      calendarLinks?: CalendarLinks$1;
      /** Event page URL components. */
      eventPageUrl?: SiteUrl;
      /** Event registration form. */
      form?: Form$1;
      /** Event dashboard summary of RSVP / ticket sales. */
      dashboard?: Dashboard;
      /** Instance ID of the site where event is hosted. */
      instanceId?: string;
      /** Guest list configuration. */
      guestListConfig?: GuestListConfig;
      /** Event creator user ID. */
      userId?: string;
      /** Event discussion feed. For internal use. */
      feed?: Feed;
      /** Online conferencing details. */
      onlineConferencing?: OnlineConferencing;
      /** SEO settings. */
      seoSettings?: SeoSettings;
      /** Assigned contacts label key. */
      assignedContactsLabel?: string | null;
      /** Agenda details. */
      agenda?: Agenda;
      /** Categories this event is assigned to. */
      categories?: Category$1[];
      /** Visual settings for event. */
      eventDisplaySettings?: EventDisplaySettings;
      /**
       * @internal
       * @readonly
       */
      customizableTickets?: boolean | null;
  }
  interface Location$1 {
      /** Location name. */
      name?: string | null;
      /** Location map coordinates. */
      coordinates?: MapCoordinates$1;
      /** Single line address representation. */
      address?: string | null;
      /** Location type. */
      type?: LocationType$1;
      /**
       * Full address derived from formatted single line `address`.
       * When `full_address` is used to create or update the event, deprecated `address` and `coordinates` are ignored.
       * If provided `full_address` has empty `formatted_address` or `coordinates`, it will be auto-completed using Atlas service.
       *
       * Migration notes:
       * - `full_address.formatted_address` is equivalent to `address`.
       * - `full_address.geocode` is equivalent to `coordinates`.
       */
      fullAddress?: Address$2;
      /**
       * Defines event location as TBD (To Be Determined).
       * When event location is not yet defined, `name` is displayed instead of location address.
       * `coordinates`, `address`, `type` and `full_address` are not required when location is TBD.
       */
      tbd?: boolean | null;
  }
  interface MapCoordinates$1 {
      /** Latitude. */
      lat?: number;
      /** Longitude. */
      lng?: number;
  }
  enum LocationType$1 {
      VENUE = "VENUE",
      ONLINE = "ONLINE"
  }
  /** Physical address */
  interface Address$2 extends AddressStreetOneOf$2 {
      /** a break down of the street to number and street name */
      streetAddress?: StreetAddress$2;
      /** Main address line (usually street and number) as free text */
      addressLine1?: string | null;
      /** country code */
      country?: string | null;
      /** subdivision (usually state or region) code according to ISO 3166-2 */
      subdivision?: string | null;
      /** city name */
      city?: string | null;
      /** zip/postal code */
      postalCode?: string | null;
      /** Free text providing more detailed address info. Usually contains Apt, Suite, Floor */
      addressLine2?: string | null;
      /** A string containing the human-readable address of this location */
      formatted?: string | null;
      /** coordinates of the physical address */
      location?: AddressLocation$2;
  }
  /** @oneof */
  interface AddressStreetOneOf$2 {
      /** a break down of the street to number and street name */
      streetAddress?: StreetAddress$2;
      /** Main address line (usually street and number) as free text */
      addressLine?: string | null;
  }
  interface StreetAddress$2 {
      /** street number */
      number?: string;
      /** street name */
      name?: string;
      /**
       * apartment number
       * @internal
       */
      apt?: string;
  }
  interface AddressLocation$2 {
      /** address latitude coordinates */
      latitude?: number | null;
      /** address longitude coordinates */
      longitude?: number | null;
  }
  interface Subdivision$2 {
      /** subdivision short code */
      code?: string;
      /** subdivision full-name */
      name?: string;
      /**
       * subdivision level
       * @internal
       */
      type?: SubdivisionType$2;
      /**
       * free text description of subdivision type
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
  interface Scheduling {
      /** Schedule configuration. */
      config?: ScheduleConfig$1;
      /** Formatted schedule representation. */
      formatted?: string;
      /** Formatted start date of the event (empty for TBD schedules). */
      startDateFormatted?: string;
      /** Formatted start time of the event (empty for TBD schedules). */
      startTimeFormatted?: string;
      /** Formatted end date of the event (empty for TBD schedules or when end date is hidden). */
      endDateFormatted?: string;
      /** Formatted end time of the event (empty for TBD schedules or when end date is hidden). */
      endTimeFormatted?: string;
  }
  interface ScheduleConfig$1 {
      /**
       * Defines event as TBD (To Be Determined) schedule.
       * When event time is not yet defined, TBD message is displayed instead of event start and end times.
       * `startDate`, `endDate` and `timeZoneId` are not required when schedule is TBD.
       */
      scheduleTbd?: boolean;
      /** TBD message. */
      scheduleTbdMessage?: string | null;
      /** Event start timestamp. */
      startDate?: Date;
      /** Event end timestamp. */
      endDate?: Date;
      /** Event time zone ID in TZ database format, e.g., `EST`, `America/Los_Angeles`. */
      timeZoneId?: string | null;
      /** Whether end date is hidden in the formatted schedule. */
      endDateHidden?: boolean;
      /** Whether time zone is displayed in formatted schedule. */
      showTimeZone?: boolean;
      /** Event recurrences. */
      recurrences?: Recurrences$1;
  }
  interface Recurrences$1 {
      /** Event occurrences. */
      occurrences?: Occurrence$1[];
      /**
       * Recurring event category ID.
       * @readonly
       */
      categoryId?: string | null;
      /**
       * Recurrence status.
       * @readonly
       */
      status?: Status$1;
  }
  interface Occurrence$1 {
      /** Event start timestamp. */
      startDate?: Date;
      /** Event end timestamp. */
      endDate?: Date;
      /** Event time zone ID in TZ database format, e.g., `EST`, `America/Los_Angeles`. */
      timeZoneId?: string | null;
      /** Whether time zone is displayed in formatted schedule. */
      showTimeZone?: boolean;
  }
  enum Status$1 {
      /** Event occurs only once. */
      ONE_TIME = "ONE_TIME",
      /** Event is recurring. */
      RECURRING = "RECURRING",
      /** Marks the next upcoming occurrence of the recurring event. */
      RECURRING_NEXT = "RECURRING_NEXT",
      /** Marks the most recent ended occurrence of the recurring event. */
      RECURRING_LAST_ENDED = "RECURRING_LAST_ENDED",
      /** Marks the most recent canceled occurrence of the recurring event. */
      RECURRING_LAST_CANCELED = "RECURRING_LAST_CANCELED"
  }
  enum EventStatus {
      /** Event is public and scheduled to start */
      SCHEDULED = "SCHEDULED",
      /** Event has started */
      STARTED = "STARTED",
      /** Event has ended */
      ENDED = "ENDED",
      /** Event was canceled */
      CANCELED = "CANCELED",
      /** Event is not public and needs to be published */
      DRAFT = "DRAFT"
  }
  interface Registration {
      /** Event type. */
      type?: EventType;
      /** Event registration status. */
      status?: RegistrationStatus;
      /** RSVP collection details. */
      rsvpCollection?: RsvpCollection;
      /** Ticketing details. */
      ticketing?: Ticketing;
      /** External registration details. */
      external?: ExternalEvent;
      /** Types of users allowed to register. */
      restrictedTo?: VisitorType;
      /** Initial event type which was set when creating an event. */
      initialType?: EventType;
  }
  enum EventType {
      /** Type not available for this request fieldset */
      NA_EVENT_TYPE = "NA_EVENT_TYPE",
      /** Registration via RSVP */
      RSVP = "RSVP",
      /** Registration via ticket purchase */
      TICKETS = "TICKETS",
      /** External registration */
      EXTERNAL = "EXTERNAL",
      /** Registration not available */
      NO_REGISTRATION = "NO_REGISTRATION"
  }
  enum RegistrationStatus {
      /** Registration status is not applicable */
      NA_REGISTRATION_STATUS = "NA_REGISTRATION_STATUS",
      /** Registration to event is closed */
      CLOSED = "CLOSED",
      /** Registration to event is closed manually */
      CLOSED_MANUALLY = "CLOSED_MANUALLY",
      /** Registration is open via RSVP */
      OPEN_RSVP = "OPEN_RSVP",
      /** Registration to event waitlist is open via RSVP */
      OPEN_RSVP_WAITLIST = "OPEN_RSVP_WAITLIST",
      /** Registration is open via ticket purchase */
      OPEN_TICKETS = "OPEN_TICKETS",
      /** Registration is open via external URL */
      OPEN_EXTERNAL = "OPEN_EXTERNAL",
      /** Registration will be open via RSVP */
      SCHEDULED_RSVP = "SCHEDULED_RSVP"
  }
  interface RsvpCollection {
      /** RSVP collection configuration. */
      config?: RsvpCollectionConfig;
  }
  interface RsvpCollectionConfig {
      /** Defines the supported RSVP statuses. */
      rsvpStatusOptions?: RsvpStatusOptions;
      /**
       * Total guest limit available to register to the event.
       * Additional guests per RSVP are counted towards total guests.
       */
      limit?: number | null;
      /** Whether a waitlist is opened when total guest limit is reached, allowing guests to create RSVP with WAITING RSVP status. */
      waitlist?: boolean;
      /** Registration start timestamp. */
      startDate?: Date;
      /** Registration end timestamp. */
      endDate?: Date;
  }
  enum RsvpStatusOptions {
      /** Only YES RSVP status is available for RSVP registration */
      YES_ONLY = "YES_ONLY",
      /** YES and NO RSVP status options are available for the registration */
      YES_AND_NO = "YES_AND_NO"
  }
  interface Ticketing {
      /** Deprecated. */
      lowestPrice?: string | null;
      /** Deprecated. */
      highestPrice?: string | null;
      /** Currency used in event transactions. */
      currency?: string | null;
      /** Ticketing configuration. */
      config?: TicketingConfig;
      /**
       * Price of lowest priced ticket.
       * @readonly
       */
      lowestTicketPrice?: Money;
      /**
       * Price of highest priced ticket.
       * @readonly
       */
      highestTicketPrice?: Money;
      /**
       * Formatted price of lowest priced ticket.
       * @readonly
       */
      lowestTicketPriceFormatted?: string | null;
      /**
       * Formatted price of highest priced ticket.
       * @readonly
       */
      highestTicketPriceFormatted?: string | null;
      /**
       * Whether all tickets are sold for this event.
       * @readonly
       */
      soldOut?: boolean | null;
  }
  interface TicketingConfig {
      /** Whether the form must be filled out separately for each ticket. */
      guestAssignedTickets?: boolean;
      /** Tax configuration. */
      taxConfig?: TaxConfig;
      /** Limit of tickets that can be purchased per order, default 20. */
      ticketLimitPerOrder?: number;
      /**
       * App Id for external ticket stock management.
       * By default tickets stock is defined in TicketDefinition object.
       * If defined then limitation from TicketDefinition is ignored.
       * @internal
       */
      stockManagerAppId?: string | null;
      /** Duration for which the tickets being bought are reserved. */
      reservationDurationInMinutes?: number | null;
  }
  interface TaxConfig {
      /** Tax application settings. */
      type?: TaxType;
      /** Tax name. */
      name?: string | null;
      /** Tax rate (e.g.,`21.55`). */
      rate?: string | null;
      /** Applies taxes for donations, default true. */
      appliesToDonations?: boolean | null;
  }
  enum TaxType {
      /** Tax is included in the ticket price */
      INCLUDED = "INCLUDED",
      /** Tax is added to the order at the checkout */
      ADDED = "ADDED",
      /** Tax is added to the final total at the checkout */
      ADDED_AT_CHECKOUT = "ADDED_AT_CHECKOUT"
  }
  interface Money {
      /** *Deprecated:** Use `value` instead. */
      amount?: string;
      /** ISO 4217 format of the currency i.e. `USD`. */
      currency?: string;
      /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
      value?: string | null;
  }
  interface ExternalEvent {
      /** External event registration URL. */
      registration?: string;
  }
  enum VisitorType {
      /** Site visitor (including member) */
      VISITOR = "VISITOR",
      /** Site member */
      MEMBER = "MEMBER",
      /** Site visitor or member */
      VISITOR_OR_MEMBER = "VISITOR_OR_MEMBER"
  }
  interface CalendarLinks$1 {
      /** "Add to Google calendar" URL. */
      google?: string;
      /** "Download ICS calendar file" URL. */
      ics?: string;
  }
  /** Site URL components */
  interface SiteUrl {
      /**
       * Base URL. For premium sites, this will be the domain.
       * For free sites, this would be site URL (e.g `mysite.wixsite.com/mysite`)
       */
      base?: string;
      /** The path to that page - e.g `/my-events/weekly-meetup-2` */
      path?: string;
  }
  /**
   * The form defines which elements are rendered in the Wix UI during the registration process (RSVP or checkout).
   * It also contains customizable messages and labels.
   *
   *
   * A form is an ordered list of controls (blocks), which accept guest information into a field input.
   *
   * Each control contains one or more nested inputs. For example, `Name` control has two inputs:
   * - First Name
   * - Last Name
   *
   * By default, name and email controls are always required and are pinned to the top of the form.
   */
  interface Form$1 {
      /** Nested fields as an ordered list. */
      controls?: InputControl$1[];
      /** Set of configured form messages. */
      messages?: FormMessages$1;
  }
  /**
   * A block of nested fields.
   * Used to aggregate similar inputs like First Name and Last Name.
   */
  interface InputControl$1 {
      /** Field control type. */
      type?: InputControlType$1;
      /** Whether control is mandatory (such as name & email). When true, only label can be changed. */
      system?: boolean;
      /** Deprecated: Use `id`. */
      name?: string;
      /** Child inputs. */
      inputs?: Input$1[];
      /** Deprecated: use `inputs.label`. */
      label?: string;
      /** Field controls are sorted by this value in ascending order. */
      orderIndex?: number;
      /** Unique control ID. */
      _id?: string;
  }
  enum InputControlType$1 {
      /** Single text value field. */
      INPUT = "INPUT",
      /** Single text value field. */
      TEXTAREA = "TEXTAREA",
      /** Single-choice field of predefined values. */
      DROPDOWN = "DROPDOWN",
      /** Single-choice field of predefined values. */
      RADIO = "RADIO",
      /** Multiple-choice field of predefined values. */
      CHECKBOX = "CHECKBOX",
      /** First and last name fields. */
      NAME = "NAME",
      /** Additional guests and respective guest names fields. */
      GUEST_CONTROL = "GUEST_CONTROL",
      /** Single-line address field. */
      ADDRESS_SHORT = "ADDRESS_SHORT",
      /** Full address field. */
      ADDRESS_FULL = "ADDRESS_FULL",
      /** Year, month and day fields. */
      DATE = "DATE"
  }
  /** An input of one or multiple text values */
  interface Input$1 {
      /** Field name. */
      name?: string;
      /** Deprecated: use `ValueType.TEXT_ARRAY`. */
      array?: boolean;
      /** Main field label */
      label?: string;
      /** Additional labels for multi-valued fields such as address. */
      additionalLabels?: Record<string, string>;
      /** Predefined choice options for fields, such as dropdown. */
      options?: string[];
      /** Whether field is mandatory. */
      mandatory?: boolean;
      /** Maximum number of accepted characters (relevant for text fields). */
      maxLength?: number;
      /**
       * Type which determines field format.
       * Used to validate submitted response.
       */
      type?: ValueType$1;
      /**
       * A maximum accepted values for array input.
       * Only applicable for inputs of valueType: TEXT_ARRAY.
       */
      maxSize?: number | null;
      /**
       * Preselected option.
       * Currently only applicable for dropdown.
       */
      defaultOptionSelection?: OptionSelection$1;
      /**
       * Additional labels for multi-valued fields such as address.
       * @readonly
       */
      labels?: Label$1[];
  }
  enum ValueType$1 {
      TEXT = "TEXT",
      NUMBER = "NUMBER",
      TEXT_ARRAY = "TEXT_ARRAY",
      DATE_TIME = "DATE_TIME",
      ADDRESS = "ADDRESS"
  }
  /**
   * Describes initially selected option when an input has multiple choices.
   * Defaults to first (0th) option if not configured.
   */
  interface OptionSelection$1 extends OptionSelectionSelectedOptionOneOf$1 {
      /** 0-based index from predefined `input.options` which is selected initially. */
      optionIndex?: number;
      /**
       * Placeholder hint describing expected choices (such as "Please select").
       * Considered an empty choice.
       */
      placeholderText?: string;
  }
  /** @oneof */
  interface OptionSelectionSelectedOptionOneOf$1 {
      /** 0-based index from predefined `input.options` which is selected initially. */
      optionIndex?: number;
      /**
       * Placeholder hint describing expected choices (such as "Please select").
       * Considered an empty choice.
       */
      placeholderText?: string;
  }
  interface Label$1 {
      /** Field name. */
      name?: string;
      /** Field label. */
      label?: string;
  }
  /**
   * Defines form messages shown in UI before, during, and after registration flow.
   * It enables configuration of form titles, response labels, "thank you" messages, and call-to-action texts.
   */
  interface FormMessages$1 {
      /** RSVP form messages. */
      rsvp?: RsvpFormMessages$1;
      /** Checkout form messages. */
      checkout?: CheckoutFormMessages$1;
      /** Messages shown when event registration is closed. */
      registrationClosed?: RegistrationClosedMessages$1;
      /** Messages shown when event tickets are unavailable. */
      ticketsUnavailable?: TicketsUnavailableMessages$1;
  }
  interface RsvpFormMessages$1 {
      /** Label text indicating RSVP `YES` response. */
      rsvpYesOption?: string;
      /** Label text indicating RSVP `NO` response. */
      rsvpNoOption?: string;
      /** Messages shown for RSVP = `YES`. */
      positiveMessages?: Positive$1;
      /** Messages shown for RSVP = `WAITING` (when event is full and waitlist is available). */
      waitlistMessages?: Positive$1;
      /** Messages shown for RSVP = `NO`. */
      negativeMessages?: Negative$1;
      /** "Submit form" call-to-action label text. */
      submitActionLabel?: string;
  }
  /** Confirmation messages shown after registration. */
  interface PositiveResponseConfirmation$1 {
      /** Confirmation message title. */
      title?: string;
      /** Confirmation message text. */
      message?: string;
      /** "Add to calendar" call-to-action label text. */
      addToCalendarActionLabel?: string;
      /** "Share event" call-to-action label text. */
      shareActionLabel?: string;
  }
  /** Confirmation messages shown after registration. */
  interface NegativeResponseConfirmation$1 {
      /** Confirmation message title. */
      title?: string;
      /** "Share event" call-to-action label text. */
      shareActionLabel?: string;
  }
  /** Set of messages shown during registration when RSVP response is positive. */
  interface Positive$1 {
      /** Main form title for positive response. */
      title?: string;
      /** Confirmation messages shown after registration. */
      confirmation?: PositiveResponseConfirmation$1;
  }
  /** A set of messages shown during registration with negative response */
  interface Negative$1 {
      /** Main form title for negative response. */
      title?: string;
      /** Confirmation messages shown after registration. */
      confirmation?: NegativeResponseConfirmation$1;
  }
  interface CheckoutFormMessages$1 {
      /** Main form title for response. */
      title?: string;
      /** Submit form call-to-action label text. */
      submitActionLabel?: string;
      /** Confirmation messages shown after checkout. */
      confirmation?: ResponseConfirmation$1;
  }
  /** Confirmation messages shown after checkout. */
  interface ResponseConfirmation$1 {
      /** Confirmation message title. */
      title?: string;
      /** Confirmation message text. */
      message?: string;
      /** "Download tickets" call-to-action label text. */
      downloadTicketsLabel?: string;
      /** "Add to calendar" call-to-action label text. */
      addToCalendarLabel?: string;
      /** "Share event" call-to-action label text. */
      shareEventLabel?: string;
  }
  interface RegistrationClosedMessages$1 {
      /** Message shown when event registration is closed. */
      message?: string;
      /** "Explore other events" call-to-action label text. */
      exploreEventsActionLabel?: string;
  }
  interface TicketsUnavailableMessages$1 {
      /** Message shown when event tickets are unavailable. */
      message?: string;
      /** "Explore other events" call-to-action label text. */
      exploreEventsActionLabel?: string;
  }
  interface Dashboard {
      /** Guest RSVP summary. */
      rsvpSummary?: RsvpSummary;
      /**
       * Summary of revenue and tickets sold.
       * (Archived orders are not included).
       */
      ticketingSummary?: TicketingSummary;
  }
  interface RsvpSummary {
      /** Total number of RSVPs. */
      total?: number;
      /** Number of RSVPs with status `YES`. */
      yes?: number;
      /** Number of RSVPs with status `NO`. */
      no?: number;
      /** Number of RSVPs in waitlist. */
      waitlist?: number;
  }
  interface TicketingSummary {
      /** Number of tickets sold. */
      tickets?: number;
      /**
       * Total revenue, excluding fees.
       * (taxes and payment provider fees are not deducted.)
       */
      revenue?: Money;
      /** Whether currency is locked and cannot be changed (generally occurs after the first order in the specified currency has been created). */
      currencyLocked?: boolean;
      /** Number of orders placed. */
      orders?: number;
      /** Total balance of confirmed transactions. */
      totalSales?: Money;
  }
  interface GuestListConfig {
      /** Whether members can see other members attending the event (defaults to true). */
      publicGuestList?: boolean;
  }
  interface Feed {
      /** Event discussion feed token. */
      token?: string;
  }
  interface OnlineConferencing {
      config?: OnlineConferencingConfig;
      session?: OnlineConferencingSession;
      /**
       * Configured conferencing provider name.
       * @internal
       * @readonly
       */
      providerName?: string;
  }
  interface OnlineConferencingConfig {
      /**
       * Whether online conferencing is enabled (not supported for TBD schedules).
       * When enabled, links to join conferencing are generated and provided to guests.
       */
      enabled?: boolean;
      /** Conferencing provider ID. */
      providerId?: string | null;
      /** Conference type */
      conferenceType?: ConferenceType;
  }
  enum ConferenceType {
      /** Everyone in the meeting can publish and subscribe video and audio. */
      MEETING = "MEETING",
      /** Guests can only subscribe to video and audio. */
      WEBINAR = "WEBINAR"
  }
  interface OnlineConferencingSession {
      /**
       * Link for event host to start the online conference session.
       * @readonly
       */
      hostLink?: string;
      /**
       * Link for guests to join the online conference session.
       * @readonly
       */
      guestLink?: string;
      /**
       * The password required to join online conferencing session (when relevant).
       * @readonly
       */
      password?: string | null;
      /**
       * Indicates that session was created successfully on providers side.
       * @readonly
       */
      sessionCreated?: boolean | null;
      /**
       * Unique session id
       * @readonly
       */
      sessionId?: string | null;
  }
  interface SeoSettings {
      /** URL slug */
      slug?: string;
      /** Advanced SEO data */
      advancedSeoData?: SeoSchema;
      /**
       * Hidden from SEO Site Map
       * @readonly
       */
      hidden?: boolean | null;
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
      settings?: Settings;
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
  interface Settings {
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
  interface Agenda {
      /** Whether the schedule is enabled for the event. */
      enabled?: boolean;
      /**
       * Agenda page URL.
       * @readonly
       */
      pageUrl?: SiteUrl;
  }
  interface Category$1 {
      /**
       * Category ID.
       * @readonly
       */
      _id?: string;
      /** Category name. */
      name?: string;
      /**
       * Category creation timestamp.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Assigned events count. Deleted events are excluded.
       * @readonly
       */
      assignedEventsCount?: number | null;
      /**
       * Assigned and assigned draft event counts.
       * @readonly
       */
      counts?: CategoryCounts$1;
      /**
       * Category state. Default - MANUAL.
       * WIX_EVENTS.MANAGE_AUTO_CATEGORIES permission is required to use other states.
       * Field will be ignored on update requests.
       */
      states?: State$1[];
      /**
       * Optionally client defined external ID.
       * @internal
       */
      externalId?: string | null;
  }
  interface CategoryCounts$1 {
      /** Assigned events count. Deleted events are excluded. */
      assignedEventsCount?: number | null;
      /** Assigned draft events count. */
      assignedDraftEventsCount?: number | null;
  }
  enum State$1 {
      /** Created manually by the user. */
      MANUAL = "MANUAL",
      /** Created automatically. */
      AUTO = "AUTO",
      /** Created when publishing recurring events. */
      RECURRING_EVENT = "RECURRING_EVENT",
      /** Category is hidden. */
      HIDDEN = "HIDDEN",
      /** Category is used to store component events. */
      COMPONENT = "COMPONENT"
  }
  interface EventDisplaySettings {
      /** Whether event details button is hidden. Only available for events with no registration. */
      hideEventDetailsButton?: boolean | null;
  }
  interface EventStarted {
      /** Event start timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
  }
  interface EventReminder {
      /** Reminder timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** Event location. */
      location?: Location$1;
      /** Event schedule configuration. */
      scheduleConfig?: ScheduleConfig$1;
      /** Event title. */
      title?: string;
      /** Event creator user ID. */
      userId?: string | null;
      /** Time until the event starts (currently, reminder is triggered 1 day before event starts). */
      startsIn?: TimeDuration;
  }
  /**
   * A coarse-grained representation of time duration divided into whole constituting components of days, hours, and minutes.
   * For example, 25.5 hours duration is represented as `{ days: 1, hours: 1, minutes: 30 }`.
   */
  interface TimeDuration {
      /** Number of days */
      days?: number;
      /** Number of hours */
      hours?: number;
      /** Number of minutes */
      minutes?: number;
  }
  interface EventEnded {
      /** Event end timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
  }
  interface QueryEventsRequest {
      /** Number of items to skip. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      offset?: number;
      /** Number of items to load per page. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      limit?: number;
      /**
       * Controls which event properties are returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_event-fieldset).
       * Some fields require additional computation that affects latency.
       * Use minimum set of required fieldset for best performance.
       */
      fieldset?: EventFieldset[];
      /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events). */
      filter?: Record<string, any> | null;
      /**
       * Filter facets to include in the response.
       * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
       */
      facet?: string[];
      /** User ID filter, by default any */
      userId?: string[];
      /**
       * Sort order, defaults to `"created:asc"`.
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
       */
      sort?: string;
      /**
       * Whether draft events should be returned in the response.
       * Requires WIX_EVENTS.MANAGE_EVENTS permission.
       */
      includeDrafts?: boolean;
  }
  enum EventFieldset {
      FULL = "FULL",
      /** Include `description`, `mainImage` and `calendarLinks` in the response. */
      DETAILS = "DETAILS",
      /** Include `about` event rich text in the response. */
      TEXTS = "TEXTS",
      /** Include `registration` in the response. */
      REGISTRATION = "REGISTRATION",
      /** Include `eventPageUrl` in the response. */
      URLS = "URLS",
      /** Include `form` in the response. */
      FORM = "FORM",
      /** Include `dashboard` in the response. */
      DASHBOARD = "DASHBOARD",
      /** Include `feed` in the response. */
      FEED = "FEED",
      /** Include `onlineConferencing` in the response. */
      ONLINE_CONFERENCING_SESSION = "ONLINE_CONFERENCING_SESSION",
      /** Include `seoSettings` in the response. */
      SEO_SETTINGS = "SEO_SETTINGS",
      /** Include `agendaSettings` in the response. */
      AGENDA = "AGENDA",
      /** Include `categories` in the response. */
      CATEGORIES = "CATEGORIES",
      CUSTOMIZABLE_TICKETS = "CUSTOMIZABLE_TICKETS"
  }
  interface QueryEventsResponse {
      /** Total number of events that match the given filters. */
      total?: number;
      /** Offset. */
      offset?: number;
      /** Limit. */
      limit?: number;
      /** Events list */
      events?: Event[];
      /** Filter facets. */
      facets?: Record<string, FacetCounts$3>;
  }
  interface FacetCounts$3 {
      /** Facet counts aggregated per value */
      counts?: Record<string, number>;
  }
  interface QueryEventsV2Request {
      query?: QueryV2$3;
      /**
       * Controls which event properties are returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_event-fieldset).
       * Some fields require additional computation that affects latency.
       * Use minimum set of required fieldset for best performance.
       */
      fieldset?: EventFieldset[];
      /**
       * Filter facets to include in the response.
       * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
       */
      facet?: string[];
      /**
       * Whether draft events should be returned in the response.
       * Requires WIX_EVENTS.MANAGE_EVENTS permission.
       */
      includeDrafts?: boolean;
  }
  interface QueryV2$3 extends QueryV2PagingMethodOneOf$3 {
      /**
       * Pointer to page of results using offset.
       * See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: Paging$3;
      /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events). */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the form [{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
       */
      sort?: Sorting$3[];
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf$3 {
      /**
       * Pointer to page of results using offset.
       * See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: Paging$3;
  }
  interface Sorting$3 {
      /** Name of the field to sort by */
      fieldName?: string;
      /** Sort order (ASC/DESC). Defaults to ASC */
      order?: SortOrder$3;
  }
  enum SortOrder$3 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface Paging$3 {
      /** Number of items to load per page. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface QueryEventsV2Response {
      pagingMetadata?: PagingMetadataV2$3;
      /** Events list */
      events?: Event[];
      /** Filter facets. */
      facets?: Record<string, FacetCounts$3>;
  }
  interface PagingMetadataV2$3 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
      cursors?: Cursors$3;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  interface Cursors$3 {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface ListEventsRequest {
      /** Number of items to skip. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      offset?: number;
      /** Number of items to load per page. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      limit?: number;
      /**
       * Controls which event properties are returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_event-fieldset).
       * Some fields require additional computation that affects latency of the service.
       * Use minimum set of required fieldset for best performance.
       */
      fieldset?: EventFieldset[];
      /** Event status. */
      status?: EventStatus[];
      /** Event URL slug. */
      slug?: string;
      /**
       * Wix user filter, by default any.
       * Allows to filter events by user relation to the event (within the site).
       * @internal
       */
      userFilter?: UserFilter;
      /**
       * Filter facets to include in the response.
       * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
       */
      facet?: string[];
      /** User ID filter, by default any */
      userId?: string[];
      /**
       * Sort order, defaults to `"created:asc"`.
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
       */
      sort?: string;
      /** Category filter. */
      categoryFilter?: CategoryFilter;
      /**
       * Whether draft events should be returned in the response.
       * Requires WIX_EVENTS.MANAGE_EVENTS permission.
       */
      includeDrafts?: boolean;
      /** Recurrence status filter. */
      recurrenceStatus?: Status$1[];
      /** Recurring group id filter. */
      recurringGroupId?: string[];
  }
  interface UserFilter {
      /** User who is related to event */
      userId?: string;
      /** Relation of user to event */
      relation?: Relation[];
  }
  enum Relation {
      /**
       * User is attending the event.
       * User has RSVP with status YES or has ordered tickets.
       */
      ATTENDING = "ATTENDING"
  }
  interface CategoryFilter {
      /**
       * If true - only categorised events will be returned.
       * If false - only not categorised events will be returned.
       */
      categorised?: boolean | null;
      /** Category id filter. */
      categoryId?: string[];
      /** Category states filter. Default - any state. */
      states?: State$1[];
  }
  interface ListEventsResponse {
      /** Total number of events that match the given filters. */
      total?: number;
      /** Offset. */
      offset?: number;
      /** Limit. */
      limit?: number;
      /** Events list. */
      events?: Event[];
      /** Filter facets. */
      facets?: Record<string, FacetCounts$3>;
  }
  interface ListUserEventsRequest {
      paging?: Paging$3;
      /**
       * Sort order, defaults to `"created:asc"`.
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
       */
      sort?: Sorting$3[];
      /** Event status. */
      status?: EventStatus[];
      /**
       * Wix user filter, by default any.
       * Allows to filter events by user relation to the event among all wix sites.
       */
      userFilter: UserFilter;
      /**
       * Filter facets to include in the response.
       * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
       */
      facet?: string[];
  }
  interface ListUserEventsResponse {
      pagingMetadata?: PagingMetadataV2$3;
      /** Events list. */
      events?: Event[];
      /** Filter facets. */
      facets?: Record<string, FacetCounts$3>;
  }
  interface ListCategoryEventsRequest {
      /** Category ID */
      categoryId: string;
      paging?: Paging$3;
      /**
       * Controls which event properties are returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_event-fieldset).
       * Some fields require additional computation that affects latency of the service.
       * Use minimum set of required fieldset for best performance.
       */
      fieldset?: EventFieldset[];
  }
  interface ListCategoryEventsResponse {
      pagingMetadata?: PagingMetadataV2$3;
      /** Events list. */
      events?: Event[];
  }
  interface GetEventRequest extends GetEventRequestGetByOneOf {
      /** Event ID. */
      _id?: string | null;
      /** URL slug. */
      slug?: string | null;
      /**
       * Controls which event properties are returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_event-fieldset).
       * Some fields require additional computation that affects latency.
       * Use minimum set of required fieldset for best performance.
       */
      fieldset?: EventFieldset[];
      /**
       * indicates whether full_address should be resolved
       * @internal
       */
      resolveFullAddress?: boolean;
  }
  /** @oneof */
  interface GetEventRequestGetByOneOf {
      /** Event ID. */
      _id?: string | null;
      /** URL slug. */
      slug?: string | null;
  }
  interface GetEventResponse {
      /** Event. */
      event?: Event;
  }
  interface FindEventRequest extends FindEventRequestFindByOneOf {
      /** Event ID. */
      _id?: string | null;
      /** URL slug. */
      slug?: string | null;
      /**
       * Controls which event properties are returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_event-fieldset).
       * Some fields require additional computation that affects latency.
       * Use minimum set of required fieldset for best performance.
       */
      fieldset?: EventFieldset[];
  }
  /** @oneof */
  interface FindEventRequestFindByOneOf {
      /** Event ID. */
      _id?: string | null;
      /** URL slug. */
      slug?: string | null;
  }
  interface FindEventResponse {
      /** Event. */
      event?: Event;
  }
  interface CreateEventV2Request {
      /** Event data. */
      event: EventData;
      /**
       * Content language code in ISO 639-1 format.
       * Used for translating ticket PDF labels, registration form, automatic emails, etc.
       * Supported languages: ar, bg, cs, da, de, el, en, es, fi, fr, he, hi, hu, id, it, ja, ko, ms, nl, no, pl, pt, ro, ru, sv, th, tl, tr, uk, zh.
       * Defaults to en.
       */
      language?: string | null;
      /** Whether event should be created as draft. Draft events are hidden from site visitors. */
      draft?: boolean;
  }
  interface EventData {
      /** Event title. */
      title?: string | null;
      /** Event description. */
      description?: string | null;
      /**
       * Event location.
       * Address is required for non TBD event.
       * Location name is required for TBD event.
       */
      location?: Location$1;
      /** Event schedule configuration */
      scheduleConfig?: ScheduleConfig$1;
      /**
       * Main event image. Printed in ticket PDF.
       * Currently, only images previously saved in Wix Media are supported.
       */
      mainImage?: string;
      /** RSVP collection configuration. Can be used to set limits. */
      rsvpCollectionConfig?: RsvpCollectionConfig;
      /** Guest list configuration */
      guestListConfig?: GuestListConfig;
      /** Rich-text content for About Event section (HTML). */
      about?: string | null;
      /** Registration configuration */
      registrationConfig?: RegistrationConfig;
      /** Online conferencing configuration */
      onlineConferencingConfig?: OnlineConferencingConfig;
      /** SEO settings */
      seoSettings?: SeoSettings;
      /** Agenda configuration */
      agenda?: Agenda;
      /** Visual settings for event. */
      eventDisplaySettings?: EventDisplaySettings;
      /** @internal */
      customizableTickets?: boolean | null;
  }
  interface RegistrationConfig {
      /** External event registration URL (for external events only). */
      externalRegistrationUrl?: string | null;
      /** Whether registration is closed. */
      pausedRegistration?: boolean;
      /** Ticketing configuration. */
      ticketingConfig?: TicketingConfig;
      /** Types of users allowed to register. */
      restrictedTo?: VisitorType;
      /** Whether registration is disabled. */
      disabledRegistration?: boolean;
      /**
       * Initial event type. Only RSVP and TICKETS are allowed when creating an event.
       * Updating this field is not allowed.
       */
      initialType?: EventType;
  }
  interface CreateEventV2Response {
      /** Created event. */
      event?: Event;
  }
  interface EventCreated {
      /** Event created timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** Event location. */
      location?: Location$1;
      /** Event schedule configuration. */
      scheduleConfig?: ScheduleConfig$1;
      /** Event title. */
      title?: string;
      /** Event creator user ID. */
      userId?: string | null;
      /** Event status. */
      status?: EventStatus;
      /** Instance ID. Indicates the original app instance which current event was derived from. */
      derivedFromInstanceId?: string | null;
      /** Event ID. Indicates the original event which current event was derived from. */
      derivedFromEventId?: string | null;
  }
  interface EventPublished {
      /** Event publish timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** Event status. */
      status?: EventStatus;
      /**
       * Event ID. Indicates the original event which current event was derived from.
       * Can be used to track the original event and add missing information.
       */
      derivedFromEventId?: string | null;
  }
  interface CopyEventRequest {
      /** Event ID. */
      eventId: string;
      /**
       * If true, event will be copied as draft.
       * Otherwise copied event will be published, unless it is draft.
       */
      draft?: boolean;
  }
  interface CopyEventResponse {
      /** Copied event. */
      event?: Event;
  }
  interface EventCopied {
      /** Event created timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** Event location. */
      location?: Location$1;
      /** Event schedule configuration. */
      scheduleConfig?: ScheduleConfig$1;
      /** Event title. */
      title?: string;
      /** Event creator user ID. */
      userId?: string | null;
      /** Event status. */
      status?: EventStatus;
      /** Instance ID. Indicates the original app instance which current event was derived from. */
      derivedFromInstanceId?: string | null;
      /** Event ID. Indicates the original event which current event was derived from. */
      derivedFromEventId?: string | null;
      /**
       * Map of copied ticket definitions from original event.
       * Key represents ticket def id in the original event.
       * Value represents ticket def id in the newly created event.
       */
      ticketDefinitions?: Record<string, string>;
  }
  interface CopyEventV2Request {
      /** Event ID. */
      _id: string;
      /** Event data to update (partial) */
      event?: EventData;
      /**
       * Set of field paths to update.
       * <!--ONLY:REST-->
       * Fields will be auto-populated from the `event` entity unless added to the request explicitly.
       * <!--END:ONLY:REST-->
       * Behavior follows [google.protobuf.FieldMask](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask) semantics.
       * @internal
       */
      fields?: string[];
      /**
       * If true, event will be copied as draft.
       * Otherwise copied event will be published, unless it is draft.
       */
      draft?: boolean;
  }
  interface CopyEventV2Response {
      /** Copied event. */
      event?: Event;
  }
  interface UpdateEventRequest {
      /** Event ID. */
      _id: string;
      /** Event data to update (partial) */
      event?: EventData;
      /**
       * Set of field paths to update.
       * <!--ONLY:REST-->
       * Fields will be auto-populated from the `event` entity unless added to the request explicitly.
       * <!--END:ONLY:REST-->
       * Behavior follows [google.protobuf.FieldMask](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask) semantics.
       * @internal
       */
      fields?: string[];
      /**
       * Content language code in ISO 639-1 format.
       * Used for translating ticket PDF labels, registration form, automatic emails, etc.
       * Supported languages: ar, bg, cs, da, de, el, en, es, fi, fr, he, hi, hu, id, it, ja, ko, ms, nl, no, pl, pt, ro, ru, sv, th, tl, tr, uk, zh.
       * Defaults to en.
       */
      language?: string | null;
  }
  interface UpdateEventResponse {
      /** Updated event. */
      event?: Event;
  }
  interface EventUpdated$1 {
      /** Event update timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** Event location. */
      location?: Location$1;
      /** Event schedule configuration. */
      scheduleConfig?: ScheduleConfig$1;
      /** Event title. */
      title?: string;
      /** Whether schedule configuration was updated. */
      scheduleConfigUpdated?: boolean;
      /**
       * The set of properties which were updated. For example 'title' or 'location'
       * @internal
       */
      fields?: string[];
      /**
       * Whether event has opened new spots with this update.
       * @internal
       */
      newSpotsOpened?: boolean | null;
  }
  interface PublishDraftEventRequest {
      /** Event ID. */
      _id: string;
  }
  interface PublishDraftEventResponse {
      /** Published event. */
      event?: Event;
  }
  interface CancelEventRequest {
      /** Event ID. */
      _id: string;
  }
  interface CancelEventResponse {
      /** Canceled event. */
      event?: Event;
  }
  interface EventCanceled {
      /** Event canceled timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** Event title */
      title?: string;
      /** Event creator user ID. */
      userId?: string | null;
  }
  interface BulkCancelEventsRequest {
      /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events). */
      filter: Record<string, any> | null;
  }
  interface BulkCancelEventsResponse {
  }
  interface DeleteEventRequest {
      /** Event ID. */
      _id: string;
  }
  interface DeleteEventResponse {
      /** Deleted event ID. */
      _id?: string;
  }
  interface EventDeleted {
      /** Event deleted timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** Event title. */
      title?: string;
      /** Event creator user ID. */
      userId?: string | null;
      /**
       * Event categories.
       * @internal
       */
      categories?: string[];
  }
  interface BulkDeleteEventsRequest {
      /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events). */
      filter: Record<string, any> | null;
  }
  interface BulkDeleteEventsResponse {
  }
  interface GetRecurringEventStateRequest {
      /** Recurring event category id. */
      categoryId?: string;
  }
  interface GetRecurringEventStateResponse {
      /** Recurring event category id. */
      categoryId?: string | null;
      inconsistentState?: boolean;
      actual?: RecurringEventState;
      desired?: RecurringEventState;
  }
  interface RecurringEventState {
      recurringNext?: RecurringEventDetails;
      recurringLastEnded?: RecurringEventDetails;
      recurringLastCanceled?: RecurringEventDetails;
  }
  interface RecurringEventDetails {
      eventId?: string | null;
      /** Event slug */
      slug?: string | null;
      /** Event start timestamp. */
      startDate?: Date;
      /** Event end timestamp. */
      endDate?: Date;
      recurrenceStatus?: Status$1;
  }
  interface UpdateRecurringStatusRequest {
      /** Recurring event category id. */
      categoryId?: string;
  }
  interface UpdateRecurringStatusResponse {
  }
  interface GetTicketingSummaryRequest {
      eventId?: string | null;
  }
  interface GetTicketingSummaryResponse {
      summary?: Ticketing;
  }
  /**
   * Retrieves a list of up to 1,000 events, given the provided [paging](https://dev.wix.com/api/rest/getting-started/pagination), [filtering and sorting](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
   * @public
   * @documentationMaturity preview
   */
  function query(options?: QueryOptions): Promise<QueryEventsResponse>;
  interface QueryOptions {
      /** Number of items to skip. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      offset?: number;
      /** Number of items to load per page. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      limit?: number;
      /**
       * Controls which event properties are returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_event-fieldset).
       * Some fields require additional computation that affects latency.
       * Use minimum set of required fieldset for best performance.
       */
      fieldset?: EventFieldset[];
      /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events). */
      filter?: Record<string, any> | null;
      /**
       * Filter facets to include in the response.
       * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
       */
      facet?: string[];
      /** User ID filter, by default any */
      userId?: string[];
      /**
       * Sort order, defaults to `"created:asc"`.
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
       */
      sort?: string;
      /**
       * Whether draft events should be returned in the response.
       * Requires WIX_EVENTS.MANAGE_EVENTS permission.
       */
      includeDrafts?: boolean;
  }
  /**
   * Retrieves a list of up to 1,000 events, given the provided paging, filtering and sorting.
   *
   * ** Important **:
   * - All results are for one specific business, resolved from the request context.
   *
   * Query object support:
   * - `filter` - supported, see [filtering and sorting](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
   * - `sort` - supported, see [filtering and sorting](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
   * - `paging` - supported, see [paging](https://dev.wix.com/api/rest/getting-started/pagination).
   * - `fields` - not supported.
   * - `fieldsets` - not supported, use request-level `fieldset` instead.
   * - `cursorPaging` - not supported, use offset pagination instead.
   *
   * Defaults:
   * - When filter is not specified, returns all events that caller is authorized to read.
   * - When sorting is not specified, defaults to `created` in `DESC` order.
   * @public
   * @documentationMaturity preview
   */
  function queryEventsV2(options?: QueryEventsV2Options): EventsQueryBuilder;
  interface QueryEventsV2Options {
      /**
       * Controls which event properties are returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_event-fieldset).
       * Some fields require additional computation that affects latency.
       * Use minimum set of required fieldset for best performance.
       */
      fieldset?: EventFieldset[] | undefined;
      /**
       * Filter facets to include in the response.
       * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
       */
      facet?: string[] | undefined;
      /**
       * Whether draft events should be returned in the response.
       * Requires WIX_EVENTS.MANAGE_EVENTS permission.
       */
      includeDrafts?: boolean | undefined;
  }
  interface QueryOffsetResult {
      currentPage: number | undefined;
      totalPages: number | undefined;
      totalCount: number | undefined;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface EventsQueryResult extends QueryOffsetResult {
      items: Event[];
      query: EventsQueryBuilder;
      next: () => Promise<EventsQueryResult>;
      prev: () => Promise<EventsQueryResult>;
  }
  interface EventsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: 'title' | 'slug' | 'created' | 'modified' | 'status' | 'userId', value: any) => EventsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: 'title' | 'slug' | 'created' | 'modified' | 'status' | 'userId', value: any) => EventsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ge: (propertyName: 'created' | 'modified', value: any) => EventsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      gt: (propertyName: 'created' | 'modified', value: any) => EventsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      le: (propertyName: 'created' | 'modified', value: any) => EventsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      lt: (propertyName: 'created' | 'modified', value: any) => EventsQueryBuilder;
      /** @documentationMaturity preview */
      in: (propertyName: 'title' | 'slug' | 'created' | 'modified' | 'status' | 'userId', value: any) => EventsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'title' | 'slug' | 'created' | 'modified'>) => EventsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'title' | 'slug' | 'created' | 'modified'>) => EventsQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => EventsQueryBuilder;
      /** @param skip - Number of items to skip in the query results before returning the results.
       * @documentationMaturity preview
       */
      skip: (skip: number) => EventsQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<EventsQueryResult>;
  }
  /**
   * Retrieves a list of up to 100 events, given the provided [paging](https://dev.wix.com/api/rest/getting-started/pagination), [filtering & sorting](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
   *
   * > **Note:**
   * > This endpoint is relevant only for [Headless](https://dev.wix.com/docs/go-headless/getting-started/about-headless/about-wix-headless) projects.
   * @public
   * @documentationMaturity preview
   */
  function listEvents(options?: ListEventsOptions): Promise<ListEventsResponse>;
  interface ListEventsOptions {
      /** Number of items to skip. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      offset?: number;
      /** Number of items to load per page. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      limit?: number;
      /**
       * Controls which event properties are returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_event-fieldset).
       * Some fields require additional computation that affects latency of the service.
       * Use minimum set of required fieldset for best performance.
       */
      fieldset?: EventFieldset[];
      /** Event status. */
      status?: EventStatus[];
      /** Event URL slug. */
      slug?: string;
      /**
       * Wix user filter, by default any.
       * Allows to filter events by user relation to the event (within the site).
       * @internal
       */
      userFilter?: UserFilter;
      /**
       * Filter facets to include in the response.
       * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
       */
      facet?: string[];
      /** User ID filter, by default any */
      userId?: string[];
      /**
       * Sort order, defaults to `"created:asc"`.
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
       */
      sort?: string;
      /** Category filter. */
      categoryFilter?: CategoryFilter;
      /**
       * Whether draft events should be returned in the response.
       * Requires WIX_EVENTS.MANAGE_EVENTS permission.
       */
      includeDrafts?: boolean;
      /** Recurrence status filter. */
      recurrenceStatus?: Status$1[];
      /** Recurring group id filter. */
      recurringGroupId?: string[];
  }
  /**
   * Retrieves a list of up to 100 events, given the provided [paging](https://dev.wix.com/api/rest/getting-started/pagination) and category_id.
   * Events are sorted by the sort index defined by CategoryManagement.
   * @param categoryId - Category ID
   * @public
   * @documentationMaturity preview
   * @requiredField categoryId
   */
  function listCategoryEvents(categoryId: string, options?: ListCategoryEventsOptions): Promise<ListCategoryEventsResponse>;
  interface ListCategoryEventsOptions {
      paging?: Paging$3;
      /**
       * Controls which event properties are returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_event-fieldset).
       * Some fields require additional computation that affects latency of the service.
       * Use minimum set of required fieldset for best performance.
       */
      fieldset?: EventFieldset[];
  }
  /**
   * Retrieves an event by ID or URL slug.
   * @public
   * @documentationMaturity preview
   */
  function getEvent(options?: GetEventOptions): Promise<GetEventResponse>;
  interface GetEventOptions extends GetEventRequestGetByOneOf {
      /** Event ID. */
      _id?: string | null;
      /** URL slug. */
      slug?: string | null;
      /**
       * Controls which event properties are returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_event-fieldset).
       * Some fields require additional computation that affects latency.
       * Use minimum set of required fieldset for best performance.
       */
      fieldset?: EventFieldset[];
      /**
       * indicates whether full_address should be resolved
       * @internal
       */
      resolveFullAddress?: boolean;
  }
  /**
   * Finds an event by ID or URL slug. In contrast to Get Event endpoint which returns not found error,
   * Find Event returns empty response when an event is not found.
   *
   * > **Note:**
   * > This endpoint is relevant only for [Headless](https://dev.wix.com/docs/go-headless/getting-started/about-headless/about-wix-headless) projects.
   * @public
   * @documentationMaturity preview
   */
  function findEvent(options?: FindEventOptions): Promise<FindEventResponse>;
  interface FindEventOptions extends FindEventRequestFindByOneOf {
      /** Event ID. */
      _id?: string | null;
      /** URL slug. */
      slug?: string | null;
      /**
       * Controls which event properties are returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_event-fieldset).
       * Some fields require additional computation that affects latency.
       * Use minimum set of required fieldset for best performance.
       */
      fieldset?: EventFieldset[];
  }
  /**
   * Creates a new event, with a default registration form in the given language.
   * Default registration form includes first name, last name, and email inputs.
   * To learn more about registration form and customize it, see [Registration Form](https://dev.wix.com/api/rest/wix-events/wix-events/registration-form/about-the-registration-form-api).
   * The event is automatically configured to send daily summary reports of new registrations to site business email.
   * RegistrationConfig.initialType is required - allowed value when creating is RSVP or TICKETS.
   * @param event - Event data.
   * @public
   * @documentationMaturity preview
   * @requiredField event
   * @requiredField event.location
   * @requiredField event.scheduleConfig
   * @requiredField event.title
   * @adminMethod
   */
  function createEventV2(event: EventData, options?: CreateEventV2Options): Promise<CreateEventV2Response>;
  interface CreateEventV2Options {
      /**
       * Content language code in ISO 639-1 format.
       * Used for translating ticket PDF labels, registration form, automatic emails, etc.
       * Supported languages: ar, bg, cs, da, de, el, en, es, fi, fr, he, hi, hu, id, it, ja, ko, ms, nl, no, pl, pt, ro, ru, sv, th, tl, tr, uk, zh.
       * Defaults to en.
       */
      language?: string | null;
      /** Whether event should be created as draft. Draft events are hidden from site visitors. */
      draft?: boolean;
  }
  /**
   * Copies an event, including its registration form, notifications and tickets configuration - scheduled two weeks from the original event.
   * Multilingual translations are also copied to the new event.
   *
   * When an event with same title already exists, appends (1), (2), ... to it. For example, copying an event titled "My Event" creates "My Event (1)".
   * Very long event titles are cropped: "Daily stand-up ev... (2)".
   * @param eventId - Event ID.
   * @public
   * @documentationMaturity preview
   * @requiredField eventId
   * @adminMethod
   */
  function copy(eventId: string, options?: CopyOptions): Promise<CopyEventResponse>;
  interface CopyOptions {
      /**
       * If true, event will be copied as draft.
       * Otherwise copied event will be published, unless it is draft.
       */
      draft?: boolean;
  }
  /**
   * Copies an event, including its registration form, notifications and tickets configuration - scheduled two weeks from the original event.
   * Multilingual translations are also copied to the new event.
   * Supports partial update of the original event fields. See [Partial Updates](https://dev.wix.com/api/rest/wix-events/wix-events/partial-updates) for more information.
   *
   * When an event with same title already exists, appends (1), (2), ... to it. For example, copying an event titled "My Event" creates "My Event (1)".
   * Very long event titles are cropped: "Daily stand-up ev... (2)".
   * @param _id - Event ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   */
  function copyEventV2(_id: string, options?: CopyEventV2Options): Promise<CopyEventV2Response>;
  interface CopyEventV2Options {
      /** Event data to update (partial) */
      event?: EventData;
      /**
       * Set of field paths to update.
       * <!--ONLY:REST-->
       * Fields will be auto-populated from the `event` entity unless added to the request explicitly.
       * <!--END:ONLY:REST-->
       * Behavior follows [google.protobuf.FieldMask](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask) semantics.
       * @internal
       */
      fields?: string[];
      /**
       * If true, event will be copied as draft.
       * Otherwise copied event will be published, unless it is draft.
       */
      draft?: boolean;
  }
  /**
   * Updates an event's parameters. See [Partial Updates](https://dev.wix.com/api/rest/wix-events/wix-events/partial-updates) for more information.
   * @param _id - Event ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   */
  function updateEvent(_id: string, options?: UpdateEventOptions): Promise<UpdateEventResponse>;
  interface UpdateEventOptions {
      /** Event data to update (partial) */
      event?: EventData;
      /**
       * Set of field paths to update.
       * <!--ONLY:REST-->
       * Fields will be auto-populated from the `event` entity unless added to the request explicitly.
       * <!--END:ONLY:REST-->
       * Behavior follows [google.protobuf.FieldMask](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask) semantics.
       * @internal
       */
      fields?: string[];
      /**
       * Content language code in ISO 639-1 format.
       * Used for translating ticket PDF labels, registration form, automatic emails, etc.
       * Supported languages: ar, bg, cs, da, de, el, en, es, fi, fr, he, hi, hu, id, it, ja, ko, ms, nl, no, pl, pt, ro, ru, sv, th, tl, tr, uk, zh.
       * Defaults to en.
       */
      language?: string | null;
  }
  /**
   * Publishes draft event so that it becomes available to site visitors.
   * If recurring events are set, category with state RECURRING_EVENT will be created.
   * All recurring events will be assigned to this category.
   *
   * > **Note:**
   * > This endpoint is relevant only for [Headless](https://dev.wix.com/docs/go-headless/getting-started/about-headless/about-wix-headless) projects.
   * @param _id - Event ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   */
  function publishDraftEvent(_id: string): Promise<PublishDraftEventResponse>;
  /**
   * Cancels an event and closes registration.
   * If event cancellation notifications are enabled, canceling an event automatically sends cancellation emails and/or push notifications to registered guests.
   * @param _id - Event ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   */
  function cancelEvent(_id: string): Promise<CancelEventResponse>;
  /**
   * Cancels events by filter.
   * If event cancellation notifications are enabled, canceling an event automatically sends cancellation emails and/or push notifications to registered guests.
   *
   * > **Note:**
   * > This endpoint is relevant only for [Headless](https://dev.wix.com/docs/go-headless/getting-started/about-headless/about-wix-headless) projects.
   * @param filter - Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
   * @public
   * @documentationMaturity preview
   * @requiredField filter
   * @adminMethod
   */
  function bulkCancelEvents(filter: Record<string, any> | null): Promise<void>;
  /**
   * Deletes an event.
   * Deleted events are not returned via API. The only way to retrieve them is via GDPR access request.
   * @param _id - Event ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @adminMethod
   */
  function deleteEvent(_id: string): Promise<DeleteEventResponse>;
  /**
   * Deletes events by filter.
   * Deleted events are not returned via API. The only way to retrieve them is via GDPR access request.
   *
   * > **Note:**
   * > This endpoint is relevant only for [Headless](https://dev.wix.com/docs/go-headless/getting-started/about-headless/about-wix-headless) projects.
   * @param filter - Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
   * @public
   * @documentationMaturity preview
   * @requiredField filter
   * @adminMethod
   */
  function bulkDeleteEvents(filter: Record<string, any> | null): Promise<void>;
  
  type eventsV1Event_universal_d_Event = Event;
  type eventsV1Event_universal_d_Scheduling = Scheduling;
  type eventsV1Event_universal_d_EventStatus = EventStatus;
  const eventsV1Event_universal_d_EventStatus: typeof EventStatus;
  type eventsV1Event_universal_d_Registration = Registration;
  type eventsV1Event_universal_d_EventType = EventType;
  const eventsV1Event_universal_d_EventType: typeof EventType;
  type eventsV1Event_universal_d_RegistrationStatus = RegistrationStatus;
  const eventsV1Event_universal_d_RegistrationStatus: typeof RegistrationStatus;
  type eventsV1Event_universal_d_RsvpCollection = RsvpCollection;
  type eventsV1Event_universal_d_RsvpCollectionConfig = RsvpCollectionConfig;
  type eventsV1Event_universal_d_RsvpStatusOptions = RsvpStatusOptions;
  const eventsV1Event_universal_d_RsvpStatusOptions: typeof RsvpStatusOptions;
  type eventsV1Event_universal_d_Ticketing = Ticketing;
  type eventsV1Event_universal_d_TicketingConfig = TicketingConfig;
  type eventsV1Event_universal_d_TaxConfig = TaxConfig;
  type eventsV1Event_universal_d_TaxType = TaxType;
  const eventsV1Event_universal_d_TaxType: typeof TaxType;
  type eventsV1Event_universal_d_Money = Money;
  type eventsV1Event_universal_d_ExternalEvent = ExternalEvent;
  type eventsV1Event_universal_d_VisitorType = VisitorType;
  const eventsV1Event_universal_d_VisitorType: typeof VisitorType;
  type eventsV1Event_universal_d_SiteUrl = SiteUrl;
  type eventsV1Event_universal_d_Dashboard = Dashboard;
  type eventsV1Event_universal_d_RsvpSummary = RsvpSummary;
  type eventsV1Event_universal_d_TicketingSummary = TicketingSummary;
  type eventsV1Event_universal_d_GuestListConfig = GuestListConfig;
  type eventsV1Event_universal_d_Feed = Feed;
  type eventsV1Event_universal_d_OnlineConferencing = OnlineConferencing;
  type eventsV1Event_universal_d_OnlineConferencingConfig = OnlineConferencingConfig;
  type eventsV1Event_universal_d_ConferenceType = ConferenceType;
  const eventsV1Event_universal_d_ConferenceType: typeof ConferenceType;
  type eventsV1Event_universal_d_OnlineConferencingSession = OnlineConferencingSession;
  type eventsV1Event_universal_d_SeoSettings = SeoSettings;
  type eventsV1Event_universal_d_SeoSchema = SeoSchema;
  type eventsV1Event_universal_d_Keyword = Keyword;
  type eventsV1Event_universal_d_Tag = Tag;
  type eventsV1Event_universal_d_Settings = Settings;
  type eventsV1Event_universal_d_Agenda = Agenda;
  type eventsV1Event_universal_d_EventDisplaySettings = EventDisplaySettings;
  type eventsV1Event_universal_d_EventStarted = EventStarted;
  type eventsV1Event_universal_d_EventReminder = EventReminder;
  type eventsV1Event_universal_d_TimeDuration = TimeDuration;
  type eventsV1Event_universal_d_EventEnded = EventEnded;
  type eventsV1Event_universal_d_QueryEventsRequest = QueryEventsRequest;
  type eventsV1Event_universal_d_EventFieldset = EventFieldset;
  const eventsV1Event_universal_d_EventFieldset: typeof EventFieldset;
  type eventsV1Event_universal_d_QueryEventsResponse = QueryEventsResponse;
  type eventsV1Event_universal_d_QueryEventsV2Request = QueryEventsV2Request;
  type eventsV1Event_universal_d_QueryEventsV2Response = QueryEventsV2Response;
  type eventsV1Event_universal_d_ListEventsRequest = ListEventsRequest;
  type eventsV1Event_universal_d_UserFilter = UserFilter;
  type eventsV1Event_universal_d_Relation = Relation;
  const eventsV1Event_universal_d_Relation: typeof Relation;
  type eventsV1Event_universal_d_CategoryFilter = CategoryFilter;
  type eventsV1Event_universal_d_ListEventsResponse = ListEventsResponse;
  type eventsV1Event_universal_d_ListUserEventsRequest = ListUserEventsRequest;
  type eventsV1Event_universal_d_ListUserEventsResponse = ListUserEventsResponse;
  type eventsV1Event_universal_d_ListCategoryEventsRequest = ListCategoryEventsRequest;
  type eventsV1Event_universal_d_ListCategoryEventsResponse = ListCategoryEventsResponse;
  type eventsV1Event_universal_d_GetEventRequest = GetEventRequest;
  type eventsV1Event_universal_d_GetEventRequestGetByOneOf = GetEventRequestGetByOneOf;
  type eventsV1Event_universal_d_GetEventResponse = GetEventResponse;
  type eventsV1Event_universal_d_FindEventRequest = FindEventRequest;
  type eventsV1Event_universal_d_FindEventRequestFindByOneOf = FindEventRequestFindByOneOf;
  type eventsV1Event_universal_d_FindEventResponse = FindEventResponse;
  type eventsV1Event_universal_d_CreateEventV2Request = CreateEventV2Request;
  type eventsV1Event_universal_d_EventData = EventData;
  type eventsV1Event_universal_d_RegistrationConfig = RegistrationConfig;
  type eventsV1Event_universal_d_CreateEventV2Response = CreateEventV2Response;
  type eventsV1Event_universal_d_EventCreated = EventCreated;
  type eventsV1Event_universal_d_EventPublished = EventPublished;
  type eventsV1Event_universal_d_CopyEventRequest = CopyEventRequest;
  type eventsV1Event_universal_d_CopyEventResponse = CopyEventResponse;
  type eventsV1Event_universal_d_EventCopied = EventCopied;
  type eventsV1Event_universal_d_CopyEventV2Request = CopyEventV2Request;
  type eventsV1Event_universal_d_CopyEventV2Response = CopyEventV2Response;
  type eventsV1Event_universal_d_UpdateEventRequest = UpdateEventRequest;
  type eventsV1Event_universal_d_UpdateEventResponse = UpdateEventResponse;
  type eventsV1Event_universal_d_PublishDraftEventRequest = PublishDraftEventRequest;
  type eventsV1Event_universal_d_PublishDraftEventResponse = PublishDraftEventResponse;
  type eventsV1Event_universal_d_CancelEventRequest = CancelEventRequest;
  type eventsV1Event_universal_d_CancelEventResponse = CancelEventResponse;
  type eventsV1Event_universal_d_EventCanceled = EventCanceled;
  type eventsV1Event_universal_d_BulkCancelEventsRequest = BulkCancelEventsRequest;
  type eventsV1Event_universal_d_BulkCancelEventsResponse = BulkCancelEventsResponse;
  type eventsV1Event_universal_d_DeleteEventRequest = DeleteEventRequest;
  type eventsV1Event_universal_d_DeleteEventResponse = DeleteEventResponse;
  type eventsV1Event_universal_d_EventDeleted = EventDeleted;
  type eventsV1Event_universal_d_BulkDeleteEventsRequest = BulkDeleteEventsRequest;
  type eventsV1Event_universal_d_BulkDeleteEventsResponse = BulkDeleteEventsResponse;
  type eventsV1Event_universal_d_GetRecurringEventStateRequest = GetRecurringEventStateRequest;
  type eventsV1Event_universal_d_GetRecurringEventStateResponse = GetRecurringEventStateResponse;
  type eventsV1Event_universal_d_RecurringEventState = RecurringEventState;
  type eventsV1Event_universal_d_RecurringEventDetails = RecurringEventDetails;
  type eventsV1Event_universal_d_UpdateRecurringStatusRequest = UpdateRecurringStatusRequest;
  type eventsV1Event_universal_d_UpdateRecurringStatusResponse = UpdateRecurringStatusResponse;
  type eventsV1Event_universal_d_GetTicketingSummaryRequest = GetTicketingSummaryRequest;
  type eventsV1Event_universal_d_GetTicketingSummaryResponse = GetTicketingSummaryResponse;
  const eventsV1Event_universal_d_query: typeof query;
  type eventsV1Event_universal_d_QueryOptions = QueryOptions;
  const eventsV1Event_universal_d_queryEventsV2: typeof queryEventsV2;
  type eventsV1Event_universal_d_QueryEventsV2Options = QueryEventsV2Options;
  type eventsV1Event_universal_d_EventsQueryResult = EventsQueryResult;
  type eventsV1Event_universal_d_EventsQueryBuilder = EventsQueryBuilder;
  const eventsV1Event_universal_d_listEvents: typeof listEvents;
  type eventsV1Event_universal_d_ListEventsOptions = ListEventsOptions;
  const eventsV1Event_universal_d_listCategoryEvents: typeof listCategoryEvents;
  type eventsV1Event_universal_d_ListCategoryEventsOptions = ListCategoryEventsOptions;
  const eventsV1Event_universal_d_getEvent: typeof getEvent;
  type eventsV1Event_universal_d_GetEventOptions = GetEventOptions;
  const eventsV1Event_universal_d_findEvent: typeof findEvent;
  type eventsV1Event_universal_d_FindEventOptions = FindEventOptions;
  const eventsV1Event_universal_d_createEventV2: typeof createEventV2;
  type eventsV1Event_universal_d_CreateEventV2Options = CreateEventV2Options;
  const eventsV1Event_universal_d_copy: typeof copy;
  type eventsV1Event_universal_d_CopyOptions = CopyOptions;
  const eventsV1Event_universal_d_copyEventV2: typeof copyEventV2;
  type eventsV1Event_universal_d_CopyEventV2Options = CopyEventV2Options;
  const eventsV1Event_universal_d_updateEvent: typeof updateEvent;
  type eventsV1Event_universal_d_UpdateEventOptions = UpdateEventOptions;
  const eventsV1Event_universal_d_publishDraftEvent: typeof publishDraftEvent;
  const eventsV1Event_universal_d_cancelEvent: typeof cancelEvent;
  const eventsV1Event_universal_d_bulkCancelEvents: typeof bulkCancelEvents;
  const eventsV1Event_universal_d_deleteEvent: typeof deleteEvent;
  const eventsV1Event_universal_d_bulkDeleteEvents: typeof bulkDeleteEvents;
  namespace eventsV1Event_universal_d {
    export {
      __debug$5 as __debug,
      eventsV1Event_universal_d_Event as Event,
      Location$1 as Location,
      MapCoordinates$1 as MapCoordinates,
      LocationType$1 as LocationType,
      Address$2 as Address,
      AddressStreetOneOf$2 as AddressStreetOneOf,
      StreetAddress$2 as StreetAddress,
      AddressLocation$2 as AddressLocation,
      Subdivision$2 as Subdivision,
      SubdivisionType$2 as SubdivisionType,
      eventsV1Event_universal_d_Scheduling as Scheduling,
      ScheduleConfig$1 as ScheduleConfig,
      Recurrences$1 as Recurrences,
      Occurrence$1 as Occurrence,
      Status$1 as Status,
      eventsV1Event_universal_d_EventStatus as EventStatus,
      eventsV1Event_universal_d_Registration as Registration,
      eventsV1Event_universal_d_EventType as EventType,
      eventsV1Event_universal_d_RegistrationStatus as RegistrationStatus,
      eventsV1Event_universal_d_RsvpCollection as RsvpCollection,
      eventsV1Event_universal_d_RsvpCollectionConfig as RsvpCollectionConfig,
      eventsV1Event_universal_d_RsvpStatusOptions as RsvpStatusOptions,
      eventsV1Event_universal_d_Ticketing as Ticketing,
      eventsV1Event_universal_d_TicketingConfig as TicketingConfig,
      eventsV1Event_universal_d_TaxConfig as TaxConfig,
      eventsV1Event_universal_d_TaxType as TaxType,
      eventsV1Event_universal_d_Money as Money,
      eventsV1Event_universal_d_ExternalEvent as ExternalEvent,
      eventsV1Event_universal_d_VisitorType as VisitorType,
      CalendarLinks$1 as CalendarLinks,
      eventsV1Event_universal_d_SiteUrl as SiteUrl,
      Form$1 as Form,
      InputControl$1 as InputControl,
      InputControlType$1 as InputControlType,
      Input$1 as Input,
      ValueType$1 as ValueType,
      OptionSelection$1 as OptionSelection,
      OptionSelectionSelectedOptionOneOf$1 as OptionSelectionSelectedOptionOneOf,
      Label$1 as Label,
      FormMessages$1 as FormMessages,
      RsvpFormMessages$1 as RsvpFormMessages,
      PositiveResponseConfirmation$1 as PositiveResponseConfirmation,
      NegativeResponseConfirmation$1 as NegativeResponseConfirmation,
      Positive$1 as Positive,
      Negative$1 as Negative,
      CheckoutFormMessages$1 as CheckoutFormMessages,
      ResponseConfirmation$1 as ResponseConfirmation,
      RegistrationClosedMessages$1 as RegistrationClosedMessages,
      TicketsUnavailableMessages$1 as TicketsUnavailableMessages,
      eventsV1Event_universal_d_Dashboard as Dashboard,
      eventsV1Event_universal_d_RsvpSummary as RsvpSummary,
      eventsV1Event_universal_d_TicketingSummary as TicketingSummary,
      eventsV1Event_universal_d_GuestListConfig as GuestListConfig,
      eventsV1Event_universal_d_Feed as Feed,
      eventsV1Event_universal_d_OnlineConferencing as OnlineConferencing,
      eventsV1Event_universal_d_OnlineConferencingConfig as OnlineConferencingConfig,
      eventsV1Event_universal_d_ConferenceType as ConferenceType,
      eventsV1Event_universal_d_OnlineConferencingSession as OnlineConferencingSession,
      eventsV1Event_universal_d_SeoSettings as SeoSettings,
      eventsV1Event_universal_d_SeoSchema as SeoSchema,
      eventsV1Event_universal_d_Keyword as Keyword,
      eventsV1Event_universal_d_Tag as Tag,
      eventsV1Event_universal_d_Settings as Settings,
      eventsV1Event_universal_d_Agenda as Agenda,
      Category$1 as Category,
      CategoryCounts$1 as CategoryCounts,
      State$1 as State,
      eventsV1Event_universal_d_EventDisplaySettings as EventDisplaySettings,
      eventsV1Event_universal_d_EventStarted as EventStarted,
      eventsV1Event_universal_d_EventReminder as EventReminder,
      eventsV1Event_universal_d_TimeDuration as TimeDuration,
      eventsV1Event_universal_d_EventEnded as EventEnded,
      eventsV1Event_universal_d_QueryEventsRequest as QueryEventsRequest,
      eventsV1Event_universal_d_EventFieldset as EventFieldset,
      eventsV1Event_universal_d_QueryEventsResponse as QueryEventsResponse,
      FacetCounts$3 as FacetCounts,
      eventsV1Event_universal_d_QueryEventsV2Request as QueryEventsV2Request,
      QueryV2$3 as QueryV2,
      QueryV2PagingMethodOneOf$3 as QueryV2PagingMethodOneOf,
      Sorting$3 as Sorting,
      SortOrder$3 as SortOrder,
      Paging$3 as Paging,
      eventsV1Event_universal_d_QueryEventsV2Response as QueryEventsV2Response,
      PagingMetadataV2$3 as PagingMetadataV2,
      Cursors$3 as Cursors,
      eventsV1Event_universal_d_ListEventsRequest as ListEventsRequest,
      eventsV1Event_universal_d_UserFilter as UserFilter,
      eventsV1Event_universal_d_Relation as Relation,
      eventsV1Event_universal_d_CategoryFilter as CategoryFilter,
      eventsV1Event_universal_d_ListEventsResponse as ListEventsResponse,
      eventsV1Event_universal_d_ListUserEventsRequest as ListUserEventsRequest,
      eventsV1Event_universal_d_ListUserEventsResponse as ListUserEventsResponse,
      eventsV1Event_universal_d_ListCategoryEventsRequest as ListCategoryEventsRequest,
      eventsV1Event_universal_d_ListCategoryEventsResponse as ListCategoryEventsResponse,
      eventsV1Event_universal_d_GetEventRequest as GetEventRequest,
      eventsV1Event_universal_d_GetEventRequestGetByOneOf as GetEventRequestGetByOneOf,
      eventsV1Event_universal_d_GetEventResponse as GetEventResponse,
      eventsV1Event_universal_d_FindEventRequest as FindEventRequest,
      eventsV1Event_universal_d_FindEventRequestFindByOneOf as FindEventRequestFindByOneOf,
      eventsV1Event_universal_d_FindEventResponse as FindEventResponse,
      eventsV1Event_universal_d_CreateEventV2Request as CreateEventV2Request,
      eventsV1Event_universal_d_EventData as EventData,
      eventsV1Event_universal_d_RegistrationConfig as RegistrationConfig,
      eventsV1Event_universal_d_CreateEventV2Response as CreateEventV2Response,
      eventsV1Event_universal_d_EventCreated as EventCreated,
      eventsV1Event_universal_d_EventPublished as EventPublished,
      eventsV1Event_universal_d_CopyEventRequest as CopyEventRequest,
      eventsV1Event_universal_d_CopyEventResponse as CopyEventResponse,
      eventsV1Event_universal_d_EventCopied as EventCopied,
      eventsV1Event_universal_d_CopyEventV2Request as CopyEventV2Request,
      eventsV1Event_universal_d_CopyEventV2Response as CopyEventV2Response,
      eventsV1Event_universal_d_UpdateEventRequest as UpdateEventRequest,
      eventsV1Event_universal_d_UpdateEventResponse as UpdateEventResponse,
      EventUpdated$1 as EventUpdated,
      eventsV1Event_universal_d_PublishDraftEventRequest as PublishDraftEventRequest,
      eventsV1Event_universal_d_PublishDraftEventResponse as PublishDraftEventResponse,
      eventsV1Event_universal_d_CancelEventRequest as CancelEventRequest,
      eventsV1Event_universal_d_CancelEventResponse as CancelEventResponse,
      eventsV1Event_universal_d_EventCanceled as EventCanceled,
      eventsV1Event_universal_d_BulkCancelEventsRequest as BulkCancelEventsRequest,
      eventsV1Event_universal_d_BulkCancelEventsResponse as BulkCancelEventsResponse,
      eventsV1Event_universal_d_DeleteEventRequest as DeleteEventRequest,
      eventsV1Event_universal_d_DeleteEventResponse as DeleteEventResponse,
      eventsV1Event_universal_d_EventDeleted as EventDeleted,
      eventsV1Event_universal_d_BulkDeleteEventsRequest as BulkDeleteEventsRequest,
      eventsV1Event_universal_d_BulkDeleteEventsResponse as BulkDeleteEventsResponse,
      eventsV1Event_universal_d_GetRecurringEventStateRequest as GetRecurringEventStateRequest,
      eventsV1Event_universal_d_GetRecurringEventStateResponse as GetRecurringEventStateResponse,
      eventsV1Event_universal_d_RecurringEventState as RecurringEventState,
      eventsV1Event_universal_d_RecurringEventDetails as RecurringEventDetails,
      eventsV1Event_universal_d_UpdateRecurringStatusRequest as UpdateRecurringStatusRequest,
      eventsV1Event_universal_d_UpdateRecurringStatusResponse as UpdateRecurringStatusResponse,
      eventsV1Event_universal_d_GetTicketingSummaryRequest as GetTicketingSummaryRequest,
      eventsV1Event_universal_d_GetTicketingSummaryResponse as GetTicketingSummaryResponse,
      eventsV1Event_universal_d_query as query,
      eventsV1Event_universal_d_QueryOptions as QueryOptions,
      eventsV1Event_universal_d_queryEventsV2 as queryEventsV2,
      eventsV1Event_universal_d_QueryEventsV2Options as QueryEventsV2Options,
      eventsV1Event_universal_d_EventsQueryResult as EventsQueryResult,
      eventsV1Event_universal_d_EventsQueryBuilder as EventsQueryBuilder,
      eventsV1Event_universal_d_listEvents as listEvents,
      eventsV1Event_universal_d_ListEventsOptions as ListEventsOptions,
      eventsV1Event_universal_d_listCategoryEvents as listCategoryEvents,
      eventsV1Event_universal_d_ListCategoryEventsOptions as ListCategoryEventsOptions,
      eventsV1Event_universal_d_getEvent as getEvent,
      eventsV1Event_universal_d_GetEventOptions as GetEventOptions,
      eventsV1Event_universal_d_findEvent as findEvent,
      eventsV1Event_universal_d_FindEventOptions as FindEventOptions,
      eventsV1Event_universal_d_createEventV2 as createEventV2,
      eventsV1Event_universal_d_CreateEventV2Options as CreateEventV2Options,
      eventsV1Event_universal_d_copy as copy,
      eventsV1Event_universal_d_CopyOptions as CopyOptions,
      eventsV1Event_universal_d_copyEventV2 as copyEventV2,
      eventsV1Event_universal_d_CopyEventV2Options as CopyEventV2Options,
      eventsV1Event_universal_d_updateEvent as updateEvent,
      eventsV1Event_universal_d_UpdateEventOptions as UpdateEventOptions,
      eventsV1Event_universal_d_publishDraftEvent as publishDraftEvent,
      eventsV1Event_universal_d_cancelEvent as cancelEvent,
      eventsV1Event_universal_d_bulkCancelEvents as bulkCancelEvents,
      eventsV1Event_universal_d_deleteEvent as deleteEvent,
      eventsV1Event_universal_d_bulkDeleteEvents as bulkDeleteEvents,
    };
  }
  
  const __debug$4: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** Schedule item describes the schedule within an event. Each event may contain multiple schedule items. */
  interface ScheduleItem$1 {
      /**
       * Schedule item ID.
       * @readonly
       */
      _id?: string;
      /** Whether schedule item is hidden from guests. */
      hidden?: boolean;
      /** Schedule item name. */
      name?: string;
      /** Time slot of an schedule item. */
      timeSlot?: TimeInterval$1;
      /** Rich-text content displayed in Wix UI when viewing schedule item details (HTML). */
      description?: string;
      /** Stage or room name in which session takes place. */
      stageName?: string;
      /** Tags are used to organize schedule items by assigning them to a general theme or field of study. */
      tags?: string[];
      /** Schedule item status. */
      status?: ScheduleStatus$1;
      /**
       * Schedule item created timestamp.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Schedule item modified timestamp.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Event ID.
       * @readonly
       */
      eventId?: string;
      /**
       * Whether schedule item is draft.
       * @readonly
       */
      draft?: boolean;
  }
  /** Time interval on the timeline between two points in time. */
  interface TimeInterval$1 {
      /** Start of the interval. Inclusive. */
      start?: Date;
      /** End of the interval. Non-inclusive. */
      end?: Date;
      /**
       * Time zone ID in TZ database format, e.g., `EST`, `America/Los_Angeles`.
       * Defaults to `Etc/UTC` when not set.
       */
      timeZoneId?: string | null;
  }
  enum ScheduleStatus$1 {
      /** Item is scheduled for a future date */
      SCHEDULED = "SCHEDULED",
      /** Item was canceled */
      CANCELED = "CANCELED"
  }
  interface ListScheduleItemsRequest$1 {
      /** Event ID. */
      eventId?: string[];
      /**
       * Schedule item state filter.
       * Defaults to `[PUBLISHED, VISIBLE]` when no filters are specified.
       * If neither `PUBLISHED` nor `DRAFT` are specified, assumes `PUBLISHED`, for example: `[HIDDEN]` becomes `[HIDDEN, PUBLISHED]`.
       * If neither `VISIBLE` nor `HIDDEN` are specified, assumes `VISIBLE`, for example: `[DRAFT]` becomes `[DRAFT, VISIBLE]`.
       */
      state?: StateFilter$1[];
      /** Filters schedule items starting on or after specified point in time. Inclusive. */
      startingFrom?: Date;
      /** Filters schedule items starting before specified point in time. Non-inclusive. */
      startingBefore?: Date;
      /**
       * Deprecated, use `paging`.
       * Number of items to skip. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      offset?: number;
      /**
       * Deprecated, use `paging`.
       * Number of items to load per page. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      limit?: number;
      /**
       * Filter facets.
       * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-schedule-items).
       */
      facet?: string[];
      /** Item IDs filter. */
      itemId?: string[];
      /** Tags filter. */
      tag?: string[];
      /** Stage names filter. */
      stageName?: string[];
      /**
       * Pointer to page of results using offset.
       * See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: Paging$2;
  }
  enum StateFilter$1 {
      /** Schedule item is published. */
      PUBLISHED = "PUBLISHED",
      /** Opposite of `PUBLISHED`. Requires `WIX_EVENTS.MANAGE_AGENDA` permission. */
      DRAFT = "DRAFT",
      /** Schedule item is visible to the public. */
      VISIBLE = "VISIBLE",
      /** Opposite of `VISIBLE`. Requires `WIX_EVENTS.MANAGE_AGENDA` permission. */
      HIDDEN = "HIDDEN"
  }
  interface Paging$2 {
      /** Number of items to load per page. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface ListScheduleItemsResponse$1 {
      /**
       * Deprecated, use `paging_metadata.total`.
       * Total schedule items matching the given filters.
       * @readonly
       */
      total?: number;
      /**
       * Deprecated.
       * Limit.
       */
      limit?: number;
      /**
       * Deprecated, use `paging_metadata.offset`.
       * Offset.
       */
      offset?: number;
      /** Schedule items. */
      items?: ScheduleItem$1[];
      /**
       * Facets.
       * @readonly
       */
      facets?: Record<string, FacetCounts$2>;
      /**
       * Whether there are draft changes which have not been published yet.
       * Returned only when filtering by single `event_id` with `WIX_EVENTS.MANAGE_AGENDA` permission.
       * @readonly
       */
      draftNotPublished?: boolean | null;
      pagingMetadata?: PagingMetadataV2$2;
  }
  interface FacetCounts$2 {
      /** Facet counts aggregated per value */
      counts?: Record<string, number>;
  }
  interface PagingMetadataV2$2 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
      cursors?: Cursors$2;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  interface Cursors$2 {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface QueryScheduleItemsRequest$1 {
      query?: QueryV2$2;
  }
  interface QueryV2$2 extends QueryV2PagingMethodOneOf$2 {
      /**
       * Pointer to page of results using offset.
       * See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: Paging$2;
      /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events). */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the form [{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
       */
      sort?: Sorting$2[];
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf$2 {
      /**
       * Pointer to page of results using offset.
       * See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: Paging$2;
  }
  interface Sorting$2 {
      /** Name of the field to sort by */
      fieldName?: string;
      /** Sort order (ASC/DESC). Defaults to ASC */
      order?: SortOrder$2;
  }
  enum SortOrder$2 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface QueryScheduleItemsResponse$1 {
      pagingMetadata?: PagingMetadataV2$2;
      /** Schedule items. */
      items?: ScheduleItem$1[];
  }
  interface GetScheduleItemRequest$1 {
      /** Event ID. */
      eventId?: string;
      /** Schedule item ID. */
      itemId: string;
      includeDraft?: boolean;
  }
  interface GetScheduleItemResponse$1 {
      /** Schedule item. */
      item?: ScheduleItem$1;
      /** Draft of the Schedule item. */
      draft?: ScheduleItem$1;
  }
  interface AddScheduleItemRequest$1 {
      /** Event ID. */
      eventId: string;
      /** Schedule item. */
      item?: ScheduleItemData$1;
  }
  /** Schedule item describes the schedule within an event. Each event may contain multiple schedule items. */
  interface ScheduleItemData$1 {
      /** Whether schedule item is hidden from guests. */
      hidden?: boolean;
      /** Schedule item name. */
      name?: string;
      timeSlot?: TimeInterval$1;
      /** Rich-text content displayed in Wix UI when viewing schedule item details (HTML). */
      description?: string;
      /** Stage or room name in which session takes place. */
      stageName?: string;
      /** Tags are used to organize schedule items by assigning them to a general theme or field of study. */
      tags?: string[];
      /** Schedule item status. */
      status?: ScheduleStatus$1;
  }
  interface AddScheduleItemResponse$1 {
      /** Schedule item. */
      item?: ScheduleItem$1;
  }
  interface UpdateScheduleItemRequest$1 {
      /** Event ID. */
      eventId: string;
      /** Schedule item ID. */
      itemId: string;
      /** Schedule item. */
      item?: ScheduleItemData$1;
      /**
       * Set of field paths to update.
       * When fields are empty, request is interpreted as full update.
       * Behavior follows [google.protobuf.FieldMask](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask) semantics.
       * @internal
       */
      fields?: string[];
  }
  interface UpdateScheduleItemResponse$1 {
      /** Schedule item. */
      item?: ScheduleItem$1;
  }
  interface DeleteScheduleItemRequest$1 {
      /** Event ID. */
      eventId: string;
      /** Schedule items to delete. */
      itemIds?: string[];
  }
  interface DeleteScheduleItemResponse$1 {
  }
  interface DiscardDraftRequest$2 {
      /** Event ID. */
      eventId: string;
  }
  interface DiscardDraftResponse$2 {
  }
  interface PublishDraftRequest$2 {
      /** Event ID. */
      eventId: string;
  }
  interface PublishDraftResponse$2 {
  }
  interface RescheduleDraftRequest$1 {
      /** Event ID. */
      eventId: string;
      /** Time zone ID in TZ database format, e.g., `EST`, `America/Los_Angeles`. */
      timeZoneId: string;
      /** Offset added or subtracted from schedule item start & end times. */
      timeSlotOffset?: GoogleProtoDuration$1;
  }
  interface RescheduleDraftResponse$1 {
  }
  interface ListBookmarksRequest$1 {
      /** Event ID. */
      eventId: string;
  }
  interface ListBookmarksResponse$1 {
      /** Schedule items. */
      items?: ScheduleItem$1[];
  }
  interface CreateBookmarkRequest$1 {
      /** Event ID. */
      eventId: string;
      /** Schedule item ID. */
      itemId: string;
  }
  interface CreateBookmarkResponse$1 {
  }
  interface DeleteBookmarkRequest$1 {
      /** Event ID. */
      eventId: string;
      /** Schedule item ID. */
      itemId: string;
  }
  interface DeleteBookmarkResponse$1 {
  }
  type GoogleProtoDuration$1 = any;
  /**
   * Retrieves a list of bookmarked schedule items for current member.
   *
   * > **Note:**
   * > This endpoint is relevant only for the [Headless](https://dev.wix.com/docs/go-headless/getting-started/about-headless/about-wix-headless) projects.
   * @param eventId - Event ID.
   * @public
   * @documentationMaturity preview
   * @requiredField eventId
   */
  function listBookmarks(eventId: string): Promise<ListBookmarksResponse$1>;
  /**
   * Bookmarks schedule item for current member.
   *
   * > **Note:**
   * > This endpoint is relevant only for [Headless](https://dev.wix.com/docs/go-headless/getting-started/about-headless/about-wix-headless) projects.
   * @param itemId - Schedule item ID.
   * @param eventId - Event ID.
   * @public
   * @documentationMaturity preview
   * @requiredField eventId
   * @requiredField itemId
   */
  function createBookmark(itemId: string, eventId: string): Promise<void>;
  /**
   * Removes schedule item bookmark from current member.
   * @param itemId - Schedule item ID.
   * @param eventId - Event ID.
   * @public
   * @documentationMaturity preview
   * @requiredField eventId
   * @requiredField itemId
   */
  function deleteBookmark(itemId: string, eventId: string): Promise<void>;
  
  const eventsScheduleV1ScheduleItemScheduleBookmarks_universal_d_listBookmarks: typeof listBookmarks;
  const eventsScheduleV1ScheduleItemScheduleBookmarks_universal_d_createBookmark: typeof createBookmark;
  const eventsScheduleV1ScheduleItemScheduleBookmarks_universal_d_deleteBookmark: typeof deleteBookmark;
  namespace eventsScheduleV1ScheduleItemScheduleBookmarks_universal_d {
    export {
      __debug$4 as __debug,
      ScheduleItem$1 as ScheduleItem,
      TimeInterval$1 as TimeInterval,
      ScheduleStatus$1 as ScheduleStatus,
      ListScheduleItemsRequest$1 as ListScheduleItemsRequest,
      StateFilter$1 as StateFilter,
      Paging$2 as Paging,
      ListScheduleItemsResponse$1 as ListScheduleItemsResponse,
      FacetCounts$2 as FacetCounts,
      PagingMetadataV2$2 as PagingMetadataV2,
      Cursors$2 as Cursors,
      QueryScheduleItemsRequest$1 as QueryScheduleItemsRequest,
      QueryV2$2 as QueryV2,
      QueryV2PagingMethodOneOf$2 as QueryV2PagingMethodOneOf,
      Sorting$2 as Sorting,
      SortOrder$2 as SortOrder,
      QueryScheduleItemsResponse$1 as QueryScheduleItemsResponse,
      GetScheduleItemRequest$1 as GetScheduleItemRequest,
      GetScheduleItemResponse$1 as GetScheduleItemResponse,
      AddScheduleItemRequest$1 as AddScheduleItemRequest,
      ScheduleItemData$1 as ScheduleItemData,
      AddScheduleItemResponse$1 as AddScheduleItemResponse,
      UpdateScheduleItemRequest$1 as UpdateScheduleItemRequest,
      UpdateScheduleItemResponse$1 as UpdateScheduleItemResponse,
      DeleteScheduleItemRequest$1 as DeleteScheduleItemRequest,
      DeleteScheduleItemResponse$1 as DeleteScheduleItemResponse,
      DiscardDraftRequest$2 as DiscardDraftRequest,
      DiscardDraftResponse$2 as DiscardDraftResponse,
      PublishDraftRequest$2 as PublishDraftRequest,
      PublishDraftResponse$2 as PublishDraftResponse,
      RescheduleDraftRequest$1 as RescheduleDraftRequest,
      RescheduleDraftResponse$1 as RescheduleDraftResponse,
      ListBookmarksRequest$1 as ListBookmarksRequest,
      ListBookmarksResponse$1 as ListBookmarksResponse,
      CreateBookmarkRequest$1 as CreateBookmarkRequest,
      CreateBookmarkResponse$1 as CreateBookmarkResponse,
      DeleteBookmarkRequest$1 as DeleteBookmarkRequest,
      DeleteBookmarkResponse$1 as DeleteBookmarkResponse,
      eventsScheduleV1ScheduleItemScheduleBookmarks_universal_d_listBookmarks as listBookmarks,
      eventsScheduleV1ScheduleItemScheduleBookmarks_universal_d_createBookmark as createBookmark,
      eventsScheduleV1ScheduleItemScheduleBookmarks_universal_d_deleteBookmark as deleteBookmark,
    };
  }
  
  const __debug$3: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /** Schedule item describes the schedule within an event. Each event may contain multiple schedule items. */
  interface ScheduleItem {
      /**
       * Schedule item ID.
       * @readonly
       */
      _id?: string;
      /** Whether schedule item is hidden from guests. */
      hidden?: boolean;
      /** Schedule item name. */
      name?: string;
      /** Time slot of an schedule item. */
      timeSlot?: TimeInterval;
      /** Rich-text content displayed in Wix UI when viewing schedule item details (HTML). */
      description?: string;
      /** Stage or room name in which session takes place. */
      stageName?: string;
      /** Tags are used to organize schedule items by assigning them to a general theme or field of study. */
      tags?: string[];
      /** Schedule item status. */
      status?: ScheduleStatus;
      /**
       * Schedule item created timestamp.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Schedule item modified timestamp.
       * @readonly
       */
      _updatedDate?: Date;
      /**
       * Event ID.
       * @readonly
       */
      eventId?: string;
      /**
       * Whether schedule item is draft.
       * @readonly
       */
      draft?: boolean;
  }
  /** Time interval on the timeline between two points in time. */
  interface TimeInterval {
      /** Start of the interval. Inclusive. */
      start?: Date;
      /** End of the interval. Non-inclusive. */
      end?: Date;
      /**
       * Time zone ID in TZ database format, e.g., `EST`, `America/Los_Angeles`.
       * Defaults to `Etc/UTC` when not set.
       */
      timeZoneId?: string | null;
  }
  enum ScheduleStatus {
      /** Item is scheduled for a future date */
      SCHEDULED = "SCHEDULED",
      /** Item was canceled */
      CANCELED = "CANCELED"
  }
  interface ListScheduleItemsRequest {
      /** Event ID. */
      eventId?: string[];
      /**
       * Schedule item state filter.
       * Defaults to `[PUBLISHED, VISIBLE]` when no filters are specified.
       * If neither `PUBLISHED` nor `DRAFT` are specified, assumes `PUBLISHED`, for example: `[HIDDEN]` becomes `[HIDDEN, PUBLISHED]`.
       * If neither `VISIBLE` nor `HIDDEN` are specified, assumes `VISIBLE`, for example: `[DRAFT]` becomes `[DRAFT, VISIBLE]`.
       */
      state?: StateFilter[];
      /** Filters schedule items starting on or after specified point in time. Inclusive. */
      startingFrom?: Date;
      /** Filters schedule items starting before specified point in time. Non-inclusive. */
      startingBefore?: Date;
      /**
       * Deprecated, use `paging`.
       * Number of items to skip. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      offset?: number;
      /**
       * Deprecated, use `paging`.
       * Number of items to load per page. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      limit?: number;
      /**
       * Filter facets.
       * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-schedule-items).
       */
      facet?: string[];
      /** Item IDs filter. */
      itemId?: string[];
      /** Tags filter. */
      tag?: string[];
      /** Stage names filter. */
      stageName?: string[];
      /**
       * Pointer to page of results using offset.
       * See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: Paging$1;
  }
  enum StateFilter {
      /** Schedule item is published. */
      PUBLISHED = "PUBLISHED",
      /** Opposite of `PUBLISHED`. Requires `WIX_EVENTS.MANAGE_AGENDA` permission. */
      DRAFT = "DRAFT",
      /** Schedule item is visible to the public. */
      VISIBLE = "VISIBLE",
      /** Opposite of `VISIBLE`. Requires `WIX_EVENTS.MANAGE_AGENDA` permission. */
      HIDDEN = "HIDDEN"
  }
  interface Paging$1 {
      /** Number of items to load per page. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  interface ListScheduleItemsResponse {
      /**
       * Deprecated, use `paging_metadata.total`.
       * Total schedule items matching the given filters.
       * @readonly
       */
      total?: number;
      /**
       * Deprecated.
       * Limit.
       */
      limit?: number;
      /**
       * Deprecated, use `paging_metadata.offset`.
       * Offset.
       */
      offset?: number;
      /** Schedule items. */
      items?: ScheduleItem[];
      /**
       * Facets.
       * @readonly
       */
      facets?: Record<string, FacetCounts$1>;
      /**
       * Whether there are draft changes which have not been published yet.
       * Returned only when filtering by single `event_id` with `WIX_EVENTS.MANAGE_AGENDA` permission.
       * @readonly
       */
      draftNotPublished?: boolean | null;
      pagingMetadata?: PagingMetadataV2$1;
  }
  interface FacetCounts$1 {
      /** Facet counts aggregated per value */
      counts?: Record<string, number>;
  }
  interface PagingMetadataV2$1 {
      /** Number of items returned in the response. */
      count?: number | null;
      /** Offset that was requested. */
      offset?: number | null;
      /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
      total?: number | null;
      /** Flag that indicates the server failed to calculate the `total` field. */
      tooManyToCount?: boolean | null;
      /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
      cursors?: Cursors$1;
      /**
       * Indicates if there are more results after the current page.
       * If `true`, another page of results can be retrieved.
       * If `false`, this is the last page.
       * @internal
       */
      hasNext?: boolean | null;
  }
  interface Cursors$1 {
      /** Cursor string pointing to the next page in the list of results. */
      next?: string | null;
      /** Cursor pointing to the previous page in the list of results. */
      prev?: string | null;
  }
  interface QueryScheduleItemsRequest {
      query?: QueryV2$1;
  }
  interface QueryV2$1 extends QueryV2PagingMethodOneOf$1 {
      /**
       * Pointer to page of results using offset.
       * See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: Paging$1;
      /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events). */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the form [{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
       */
      sort?: Sorting$1[];
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf$1 {
      /**
       * Pointer to page of results using offset.
       * See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: Paging$1;
  }
  interface Sorting$1 {
      /** Name of the field to sort by */
      fieldName?: string;
      /** Sort order (ASC/DESC). Defaults to ASC */
      order?: SortOrder$1;
  }
  enum SortOrder$1 {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface QueryScheduleItemsResponse {
      pagingMetadata?: PagingMetadataV2$1;
      /** Schedule items. */
      items?: ScheduleItem[];
  }
  interface GetScheduleItemRequest {
      /** Event ID. */
      eventId?: string;
      /** Schedule item ID. */
      itemId: string;
      includeDraft?: boolean;
  }
  interface GetScheduleItemResponse {
      /** Schedule item. */
      item?: ScheduleItem;
      /** Draft of the Schedule item. */
      draft?: ScheduleItem;
  }
  interface AddScheduleItemRequest {
      /** Event ID. */
      eventId: string;
      /** Schedule item. */
      item?: ScheduleItemData;
  }
  /** Schedule item describes the schedule within an event. Each event may contain multiple schedule items. */
  interface ScheduleItemData {
      /** Whether schedule item is hidden from guests. */
      hidden?: boolean;
      /** Schedule item name. */
      name?: string;
      timeSlot?: TimeInterval;
      /** Rich-text content displayed in Wix UI when viewing schedule item details (HTML). */
      description?: string;
      /** Stage or room name in which session takes place. */
      stageName?: string;
      /** Tags are used to organize schedule items by assigning them to a general theme or field of study. */
      tags?: string[];
      /** Schedule item status. */
      status?: ScheduleStatus;
  }
  interface AddScheduleItemResponse {
      /** Schedule item. */
      item?: ScheduleItem;
  }
  interface UpdateScheduleItemRequest {
      /** Event ID. */
      eventId: string;
      /** Schedule item ID. */
      itemId: string;
      /** Schedule item. */
      item?: ScheduleItemData;
      /**
       * Set of field paths to update.
       * When fields are empty, request is interpreted as full update.
       * Behavior follows [google.protobuf.FieldMask](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask) semantics.
       * @internal
       */
      fields?: string[];
  }
  interface UpdateScheduleItemResponse {
      /** Schedule item. */
      item?: ScheduleItem;
  }
  interface DeleteScheduleItemRequest {
      /** Event ID. */
      eventId: string;
      /** Schedule items to delete. */
      itemIds?: string[];
  }
  interface DeleteScheduleItemResponse {
  }
  interface DiscardDraftRequest$1 {
      /** Event ID. */
      eventId: string;
  }
  interface DiscardDraftResponse$1 {
  }
  interface PublishDraftRequest$1 {
      /** Event ID. */
      eventId: string;
  }
  interface PublishDraftResponse$1 {
  }
  interface RescheduleDraftRequest {
      /** Event ID. */
      eventId: string;
      /** Time zone ID in TZ database format, e.g., `EST`, `America/Los_Angeles`. */
      timeZoneId: string;
      /** Offset added or subtracted from schedule item start & end times. */
      timeSlotOffset?: GoogleProtoDuration;
  }
  interface RescheduleDraftResponse {
  }
  interface ListBookmarksRequest {
      /** Event ID. */
      eventId: string;
  }
  interface ListBookmarksResponse {
      /** Schedule items. */
      items?: ScheduleItem[];
  }
  interface CreateBookmarkRequest {
      /** Event ID. */
      eventId: string;
      /** Schedule item ID. */
      itemId: string;
  }
  interface CreateBookmarkResponse {
  }
  interface DeleteBookmarkRequest {
      /** Event ID. */
      eventId: string;
      /** Schedule item ID. */
      itemId: string;
  }
  interface DeleteBookmarkResponse {
  }
  type GoogleProtoDuration = any;
  /**
   * Retrieves a list of up to 100 schedule items, with basic filter support.
   *
   * > **Note:**
   * > This endpoint is relevant only for [Headless](https://dev.wix.com/docs/go-headless/getting-started/about-headless/about-wix-headless) projects.
   * @public
   * @documentationMaturity preview
   */
  function listScheduleItems(options?: ListScheduleItemsOptions): Promise<ListScheduleItemsResponse>;
  interface ListScheduleItemsOptions {
      /** Event ID. */
      eventId?: string[];
      /**
       * Schedule item state filter.
       * Defaults to `[PUBLISHED, VISIBLE]` when no filters are specified.
       * If neither `PUBLISHED` nor `DRAFT` are specified, assumes `PUBLISHED`, for example: `[HIDDEN]` becomes `[HIDDEN, PUBLISHED]`.
       * If neither `VISIBLE` nor `HIDDEN` are specified, assumes `VISIBLE`, for example: `[DRAFT]` becomes `[DRAFT, VISIBLE]`.
       */
      state?: StateFilter[];
      /** Filters schedule items starting on or after specified point in time. Inclusive. */
      startingFrom?: Date;
      /** Filters schedule items starting before specified point in time. Non-inclusive. */
      startingBefore?: Date;
      /**
       * Deprecated, use `paging`.
       * Number of items to skip. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      offset?: number;
      /**
       * Deprecated, use `paging`.
       * Number of items to load per page. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      limit?: number;
      /**
       * Filter facets.
       * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-schedule-items).
       */
      facet?: string[];
      /** Item IDs filter. */
      itemId?: string[];
      /** Tags filter. */
      tag?: string[];
      /** Stage names filter. */
      stageName?: string[];
      /**
       * Pointer to page of results using offset.
       * See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: Paging$1;
  }
  /**
   * Retrieves a list of up to 100 schedule items, given the provided [paging](https://dev.wix.com/api/rest/getting-started/pagination), [filtering](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-schedule-items).
   *
   * * Important **:
   * - All results are for one specific business, resolved from the request context.
   *
   * Query object support:
   * - `filter` - supported, see [filtering and sorting](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-schedule-items).
   * - `sort` - supported, see [filtering and sorting](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-schedule-items).
   * - `paging` - supported, see [paging](https://dev.wix.com/api/rest/getting-started/pagination).
   * - `fields` - not supported.
   * - `fieldsets` - not supported.
   * - `cursorPaging` - not supported, use offset pagination instead.
   *
   * Defaults:
   * - When filter is not specified, returns all schedule items that caller is authorized to read.
   * - When sorting is not specified, defaults to `time_slot.start` and `time_slot.end` in `ASC` order.
   *
   * > **Note:**
   * > This endpoint is relevant only for [Headless](https://dev.wix.com/docs/go-headless/getting-started/about-headless/about-wix-headless) projects.
   * @public
   * @documentationMaturity preview
   */
  function queryScheduleItems(): ItemsQueryBuilder;
  interface QueryCursorResult$1 {
      cursors: Cursors$1;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface ItemsQueryResult extends QueryCursorResult$1 {
      items: ScheduleItem[];
      query: ItemsQueryBuilder;
      next: () => Promise<ItemsQueryResult>;
      prev: () => Promise<ItemsQueryResult>;
  }
  interface ItemsQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | 'name' | 'description' | 'stageName' | '_createdDate' | '_updatedDate' | 'eventId', value: any) => ItemsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ne: (propertyName: '_id' | 'name' | 'description' | 'stageName' | '_createdDate' | '_updatedDate' | 'eventId', value: any) => ItemsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      ge: (propertyName: '_createdDate' | '_updatedDate', value: any) => ItemsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      gt: (propertyName: '_createdDate' | '_updatedDate', value: any) => ItemsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      le: (propertyName: '_createdDate' | '_updatedDate', value: any) => ItemsQueryBuilder;
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      lt: (propertyName: '_createdDate' | '_updatedDate', value: any) => ItemsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      ascending: (...propertyNames: Array<'_id' | 'name' | 'description' | 'stageName' | '_createdDate' | '_updatedDate' | 'eventId'>) => ItemsQueryBuilder;
      /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
       * @documentationMaturity preview
       */
      descending: (...propertyNames: Array<'_id' | 'name' | 'description' | 'stageName' | '_createdDate' | '_updatedDate' | 'eventId'>) => ItemsQueryBuilder;
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
   * Retrieves schedule item by ID.
   *
   * > **Note:**
   * > This endpoint is relevant only for [Headless](https://dev.wix.com/docs/go-headless/getting-started/about-headless/about-wix-headless) projects.
   * @param itemId - Schedule item ID.
   * @public
   * @documentationMaturity preview
   * @requiredField itemId
   * @returns Schedule item.
   */
  function getScheduleItem(itemId: string, options?: GetScheduleItemOptions): Promise<ScheduleItem>;
  interface GetScheduleItemOptions {
      /** Event ID. */
      eventId?: string;
      includeDraft?: boolean;
  }
  /**
   * Adds schedule item to the draft schedule. Draft items are not publicly available unless published.
   *
   * > **Note:**
   * > This endpoint is relevant only for [Headless](https://dev.wix.com/docs/go-headless/getting-started/about-headless/about-wix-headless) projects.
   * @param eventId - Event ID.
   * @public
   * @documentationMaturity preview
   * @requiredField eventId
   * @requiredField options.item.name
   * @requiredField options.item.timeSlot
   * @requiredField options.item.timeSlot.end
   * @requiredField options.item.timeSlot.start
   * @adminMethod
   */
  function addScheduleItem(eventId: string, options?: AddScheduleItemOptions): Promise<AddScheduleItemResponse>;
  interface AddScheduleItemOptions {
      /** Schedule item. */
      item?: ScheduleItemData;
  }
  /**
   * Updates existing schedule item.
   * All modifications are performed on a draft schedule, even if schedule item has already been published.
   *
   * > **Note:**
   * > This endpoint is relevant only for [Headless](https://dev.wix.com/docs/go-headless/getting-started/about-headless/about-wix-headless) projects.
   * @param itemId - Schedule item ID.
   * @param eventId - Event ID.
   * @public
   * @documentationMaturity preview
   * @requiredField eventId
   * @requiredField itemId
   * @adminMethod
   */
  function updateScheduleItem(itemId: string, eventId: string, options?: UpdateScheduleItemOptions): Promise<UpdateScheduleItemResponse>;
  interface UpdateScheduleItemOptions {
      /** Schedule item. */
      item?: ScheduleItemData;
      /**
       * Set of field paths to update.
       * When fields are empty, request is interpreted as full update.
       * Behavior follows [google.protobuf.FieldMask](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask) semantics.
       * @internal
       */
      fields?: string[];
  }
  /**
   * Deletes schedule item from draft schedule.
   *
   * > **Note:**
   * > This endpoint is relevant only for the [Headless](https://dev.wix.com/docs/go-headless/getting-started/about-headless/about-wix-headless) projects.
   * @param eventId - Event ID.
   * @public
   * @documentationMaturity preview
   * @requiredField eventId
   * @adminMethod
   */
  function deleteScheduleItem(eventId: string, options?: DeleteScheduleItemOptions): Promise<void>;
  interface DeleteScheduleItemOptions {
      /** Schedule items to delete. */
      itemIds?: string[];
  }
  /**
   * Clears all changes to the draft schedule. (Does not affect the published schedule.)
   *
   * > **Note:**
   * > This endpoint is relevant only for [Headless](https://dev.wix.com/docs/go-headless/getting-started/about-headless/about-wix-headless) projects.
   * @param eventId - Event ID.
   * @public
   * @documentationMaturity preview
   * @requiredField eventId
   * @adminMethod
   */
  function discardDraft$1(eventId: string): Promise<void>;
  /**
   * Publishes the draft schedule.
   *
   * > **Note:**
   * > This endpoint is relevant only for the [Headless](https://dev.wix.com/docs/go-headless/getting-started/about-headless/about-wix-headless) projects.
   * @param eventId - Event ID.
   * @public
   * @documentationMaturity preview
   * @requiredField eventId
   * @adminMethod
   */
  function publishDraft$1(eventId: string): Promise<void>;
  /**
   * Adjusts time of all draft schedule items (per event).
   *
   * > **Note:**
   * > This endpoint is relevant only for [Headless](https://dev.wix.com/docs/go-headless/getting-started/about-headless/about-wix-headless) projects.
   * @param eventId - Event ID.
   * @public
   * @documentationMaturity preview
   * @requiredField eventId
   * @requiredField options.timeZoneId
   * @adminMethod
   */
  function rescheduleDraft(eventId: string, options?: RescheduleDraftOptions): Promise<void>;
  interface RescheduleDraftOptions {
      /** Time zone ID in TZ database format, e.g., `EST`, `America/Los_Angeles`. */
      timeZoneId: string;
      /** Offset added or subtracted from schedule item start & end times. */
      timeSlotOffset?: GoogleProtoDuration;
  }
  
  type eventsScheduleV1ScheduleItemSchedule_universal_d_ScheduleItem = ScheduleItem;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_TimeInterval = TimeInterval;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_ScheduleStatus = ScheduleStatus;
  const eventsScheduleV1ScheduleItemSchedule_universal_d_ScheduleStatus: typeof ScheduleStatus;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_ListScheduleItemsRequest = ListScheduleItemsRequest;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_StateFilter = StateFilter;
  const eventsScheduleV1ScheduleItemSchedule_universal_d_StateFilter: typeof StateFilter;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_ListScheduleItemsResponse = ListScheduleItemsResponse;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_QueryScheduleItemsRequest = QueryScheduleItemsRequest;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_QueryScheduleItemsResponse = QueryScheduleItemsResponse;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_GetScheduleItemRequest = GetScheduleItemRequest;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_GetScheduleItemResponse = GetScheduleItemResponse;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_AddScheduleItemRequest = AddScheduleItemRequest;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_ScheduleItemData = ScheduleItemData;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_AddScheduleItemResponse = AddScheduleItemResponse;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_UpdateScheduleItemRequest = UpdateScheduleItemRequest;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_UpdateScheduleItemResponse = UpdateScheduleItemResponse;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_DeleteScheduleItemRequest = DeleteScheduleItemRequest;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_DeleteScheduleItemResponse = DeleteScheduleItemResponse;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_RescheduleDraftRequest = RescheduleDraftRequest;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_RescheduleDraftResponse = RescheduleDraftResponse;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_ListBookmarksRequest = ListBookmarksRequest;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_ListBookmarksResponse = ListBookmarksResponse;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_CreateBookmarkRequest = CreateBookmarkRequest;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_CreateBookmarkResponse = CreateBookmarkResponse;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_DeleteBookmarkRequest = DeleteBookmarkRequest;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_DeleteBookmarkResponse = DeleteBookmarkResponse;
  const eventsScheduleV1ScheduleItemSchedule_universal_d_listScheduleItems: typeof listScheduleItems;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_ListScheduleItemsOptions = ListScheduleItemsOptions;
  const eventsScheduleV1ScheduleItemSchedule_universal_d_queryScheduleItems: typeof queryScheduleItems;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_ItemsQueryResult = ItemsQueryResult;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_ItemsQueryBuilder = ItemsQueryBuilder;
  const eventsScheduleV1ScheduleItemSchedule_universal_d_getScheduleItem: typeof getScheduleItem;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_GetScheduleItemOptions = GetScheduleItemOptions;
  const eventsScheduleV1ScheduleItemSchedule_universal_d_addScheduleItem: typeof addScheduleItem;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_AddScheduleItemOptions = AddScheduleItemOptions;
  const eventsScheduleV1ScheduleItemSchedule_universal_d_updateScheduleItem: typeof updateScheduleItem;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_UpdateScheduleItemOptions = UpdateScheduleItemOptions;
  const eventsScheduleV1ScheduleItemSchedule_universal_d_deleteScheduleItem: typeof deleteScheduleItem;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_DeleteScheduleItemOptions = DeleteScheduleItemOptions;
  const eventsScheduleV1ScheduleItemSchedule_universal_d_rescheduleDraft: typeof rescheduleDraft;
  type eventsScheduleV1ScheduleItemSchedule_universal_d_RescheduleDraftOptions = RescheduleDraftOptions;
  namespace eventsScheduleV1ScheduleItemSchedule_universal_d {
    export {
      __debug$3 as __debug,
      eventsScheduleV1ScheduleItemSchedule_universal_d_ScheduleItem as ScheduleItem,
      eventsScheduleV1ScheduleItemSchedule_universal_d_TimeInterval as TimeInterval,
      eventsScheduleV1ScheduleItemSchedule_universal_d_ScheduleStatus as ScheduleStatus,
      eventsScheduleV1ScheduleItemSchedule_universal_d_ListScheduleItemsRequest as ListScheduleItemsRequest,
      eventsScheduleV1ScheduleItemSchedule_universal_d_StateFilter as StateFilter,
      Paging$1 as Paging,
      eventsScheduleV1ScheduleItemSchedule_universal_d_ListScheduleItemsResponse as ListScheduleItemsResponse,
      FacetCounts$1 as FacetCounts,
      PagingMetadataV2$1 as PagingMetadataV2,
      Cursors$1 as Cursors,
      eventsScheduleV1ScheduleItemSchedule_universal_d_QueryScheduleItemsRequest as QueryScheduleItemsRequest,
      QueryV2$1 as QueryV2,
      QueryV2PagingMethodOneOf$1 as QueryV2PagingMethodOneOf,
      Sorting$1 as Sorting,
      SortOrder$1 as SortOrder,
      eventsScheduleV1ScheduleItemSchedule_universal_d_QueryScheduleItemsResponse as QueryScheduleItemsResponse,
      eventsScheduleV1ScheduleItemSchedule_universal_d_GetScheduleItemRequest as GetScheduleItemRequest,
      eventsScheduleV1ScheduleItemSchedule_universal_d_GetScheduleItemResponse as GetScheduleItemResponse,
      eventsScheduleV1ScheduleItemSchedule_universal_d_AddScheduleItemRequest as AddScheduleItemRequest,
      eventsScheduleV1ScheduleItemSchedule_universal_d_ScheduleItemData as ScheduleItemData,
      eventsScheduleV1ScheduleItemSchedule_universal_d_AddScheduleItemResponse as AddScheduleItemResponse,
      eventsScheduleV1ScheduleItemSchedule_universal_d_UpdateScheduleItemRequest as UpdateScheduleItemRequest,
      eventsScheduleV1ScheduleItemSchedule_universal_d_UpdateScheduleItemResponse as UpdateScheduleItemResponse,
      eventsScheduleV1ScheduleItemSchedule_universal_d_DeleteScheduleItemRequest as DeleteScheduleItemRequest,
      eventsScheduleV1ScheduleItemSchedule_universal_d_DeleteScheduleItemResponse as DeleteScheduleItemResponse,
      DiscardDraftRequest$1 as DiscardDraftRequest,
      DiscardDraftResponse$1 as DiscardDraftResponse,
      PublishDraftRequest$1 as PublishDraftRequest,
      PublishDraftResponse$1 as PublishDraftResponse,
      eventsScheduleV1ScheduleItemSchedule_universal_d_RescheduleDraftRequest as RescheduleDraftRequest,
      eventsScheduleV1ScheduleItemSchedule_universal_d_RescheduleDraftResponse as RescheduleDraftResponse,
      eventsScheduleV1ScheduleItemSchedule_universal_d_ListBookmarksRequest as ListBookmarksRequest,
      eventsScheduleV1ScheduleItemSchedule_universal_d_ListBookmarksResponse as ListBookmarksResponse,
      eventsScheduleV1ScheduleItemSchedule_universal_d_CreateBookmarkRequest as CreateBookmarkRequest,
      eventsScheduleV1ScheduleItemSchedule_universal_d_CreateBookmarkResponse as CreateBookmarkResponse,
      eventsScheduleV1ScheduleItemSchedule_universal_d_DeleteBookmarkRequest as DeleteBookmarkRequest,
      eventsScheduleV1ScheduleItemSchedule_universal_d_DeleteBookmarkResponse as DeleteBookmarkResponse,
      eventsScheduleV1ScheduleItemSchedule_universal_d_listScheduleItems as listScheduleItems,
      eventsScheduleV1ScheduleItemSchedule_universal_d_ListScheduleItemsOptions as ListScheduleItemsOptions,
      eventsScheduleV1ScheduleItemSchedule_universal_d_queryScheduleItems as queryScheduleItems,
      eventsScheduleV1ScheduleItemSchedule_universal_d_ItemsQueryResult as ItemsQueryResult,
      eventsScheduleV1ScheduleItemSchedule_universal_d_ItemsQueryBuilder as ItemsQueryBuilder,
      eventsScheduleV1ScheduleItemSchedule_universal_d_getScheduleItem as getScheduleItem,
      eventsScheduleV1ScheduleItemSchedule_universal_d_GetScheduleItemOptions as GetScheduleItemOptions,
      eventsScheduleV1ScheduleItemSchedule_universal_d_addScheduleItem as addScheduleItem,
      eventsScheduleV1ScheduleItemSchedule_universal_d_AddScheduleItemOptions as AddScheduleItemOptions,
      eventsScheduleV1ScheduleItemSchedule_universal_d_updateScheduleItem as updateScheduleItem,
      eventsScheduleV1ScheduleItemSchedule_universal_d_UpdateScheduleItemOptions as UpdateScheduleItemOptions,
      eventsScheduleV1ScheduleItemSchedule_universal_d_deleteScheduleItem as deleteScheduleItem,
      eventsScheduleV1ScheduleItemSchedule_universal_d_DeleteScheduleItemOptions as DeleteScheduleItemOptions,
      discardDraft$1 as discardDraft,
      publishDraft$1 as publishDraft,
      eventsScheduleV1ScheduleItemSchedule_universal_d_rescheduleDraft as rescheduleDraft,
      eventsScheduleV1ScheduleItemSchedule_universal_d_RescheduleDraftOptions as RescheduleDraftOptions,
    };
  }
  
  const __debug$2: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface Category {
      /**
       * Category ID.
       * @readonly
       */
      _id?: string;
      /** Category name. */
      name?: string;
      /**
       * Category creation timestamp.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Assigned events count. Deleted events are excluded.
       * @readonly
       */
      assignedEventsCount?: number | null;
      /**
       * Assigned and assigned draft event counts.
       * @readonly
       */
      counts?: CategoryCounts;
      /**
       * Category state. Default - MANUAL.
       * WIX_EVENTS.MANAGE_AUTO_CATEGORIES permission is required to use other states.
       * Field will be ignored on update requests.
       */
      states?: State[];
      /**
       * Optionally client defined external ID.
       * @internal
       */
      externalId?: string | null;
  }
  interface CategoryCounts {
      /** Assigned events count. Deleted events are excluded. */
      assignedEventsCount?: number | null;
      /** Assigned draft events count. */
      assignedDraftEventsCount?: number | null;
  }
  enum State {
      /** Created manually by the user. */
      MANUAL = "MANUAL",
      /** Created automatically. */
      AUTO = "AUTO",
      /** Created when publishing recurring events. */
      RECURRING_EVENT = "RECURRING_EVENT",
      /** Category is hidden. */
      HIDDEN = "HIDDEN",
      /** Category is used to store component events. */
      COMPONENT = "COMPONENT"
  }
  interface CreateCategoryRequest {
      /** Category to be created. */
      category: Category;
  }
  interface CreateCategoryResponse {
      /** Created category. */
      category?: Category;
  }
  interface BulkCreateCategoryRequest {
      /** Categories to be created. */
      categories: Category[];
  }
  interface BulkCreateCategoryResponse {
      /** Bulk create results. */
      results?: BulkCategoryResult[];
      /** Bulk create metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkCategoryResult {
      /** Metadata. */
      itemMetadata?: ItemMetadata;
      /** Category. */
      item?: Category;
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
  interface UpdateCategoryRequest {
      /** Category update. */
      category: Category;
  }
  interface UpdateCategoryResponse {
      /** Updated category. */
      category?: Category;
  }
  interface DeleteCategoryRequest {
      /** ID of category to be deleted. */
      categoryId: string;
  }
  interface DeleteCategoryResponse {
  }
  interface QueryCategoriesRequest {
      /** Query options. See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language) for more details. */
      query: QueryV2;
      /**
       * Predefined sets of fields to return.
       * - `COUNTS`: Returns `assignedEventsCount`.
       */
      fieldset?: CategoryFieldset[];
  }
  interface QueryV2 extends QueryV2PagingMethodOneOf {
      /**
       * Pointer to page of results using offset.
       * See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: Paging;
      /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events). */
      filter?: Record<string, any> | null;
      /**
       * Sort object in the form [{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
       */
      sort?: Sorting[];
  }
  /** @oneof */
  interface QueryV2PagingMethodOneOf {
      /**
       * Pointer to page of results using offset.
       * See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
       */
      paging?: Paging;
  }
  interface Sorting {
      /** Name of the field to sort by */
      fieldName?: string;
      /** Sort order (ASC/DESC). Defaults to ASC */
      order?: SortOrder;
  }
  enum SortOrder {
      ASC = "ASC",
      DESC = "DESC"
  }
  interface Paging {
      /** Number of items to load per page. */
      limit?: number | null;
      /** Number of items to skip in the current sort order. */
      offset?: number | null;
  }
  enum CategoryFieldset {
      /** Include `assignedEventsCount` in the response. */
      COUNTS = "COUNTS"
  }
  interface QueryCategoriesResponse {
      /** List of categories. */
      categories?: Category[];
      /** Metadata for the paginated results. */
      metaData?: PagingMetadataV2;
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
  interface AssignEventsRequest {
      /** ID of category to which events should be assigned. */
      categoryId: string;
      /** A list of events IDs. */
      eventId: string[];
  }
  interface AssignEventsResponse {
  }
  interface BulkAssignEventsRequest {
      /** A list of category ids to which events should be assigned. */
      categoryId: string[];
      /** A list of events IDs. */
      eventId: string[];
  }
  interface BulkAssignEventsResponse {
      /** Results. */
      results?: BulkCategoryResult[];
      /** Metadata of results. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkAssignEventsAsyncRequest {
      /** Category IDs. */
      categoryId: string[];
      /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events). */
      filter: Record<string, any> | null;
  }
  interface BulkAssignEventsAsyncResponse {
  }
  interface UnassignEventsRequest {
      /** Category ID. */
      categoryId: string;
      /** A list of events IDs. */
      eventId: string[];
  }
  interface UnassignEventsResponse {
  }
  interface BulkUnassignEventsRequest {
      /** A list of category IDs. */
      categoryId: string[];
      /** A list of events IDs. */
      eventId?: string[];
  }
  interface BulkUnassignEventsResponse {
      /** Results. */
      results?: BulkCategoryResult[];
      /** Metadata. */
      bulkActionMetadata?: BulkActionMetadata;
  }
  interface BulkUnassignEventsAsyncRequest {
      /** Category ID. */
      categoryId: string[];
      /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events). */
      filter: Record<string, any> | null;
  }
  interface BulkUnassignEventsAsyncResponse {
  }
  interface ListEventCategoriesRequest {
      /** Event ID. */
      eventId: string;
  }
  interface ListEventCategoriesResponse {
      /** A list of categories. */
      categories?: Category[];
  }
  interface ReorderCategoryEventsRequest extends ReorderCategoryEventsRequestReferenceEventOneOf {
      /** Move the Category Event ID before this Event ID */
      beforeEventId?: string;
      /** Move the Category Event ID after this Event ID */
      afterEventId?: string;
      /** Category ID */
      categoryId: string;
      /** Event ID */
      eventId?: string;
  }
  /** @oneof */
  interface ReorderCategoryEventsRequestReferenceEventOneOf {
      /** Move the Category Event ID before this Event ID */
      beforeEventId?: string;
      /** Move the Category Event ID after this Event ID */
      afterEventId?: string;
  }
  interface ReorderCategoryEventsResponse {
  }
  /**
   * Creates a new category.
   * @param category - Category to be created.
   * @public
   * @documentationMaturity preview
   * @requiredField category
   * @adminMethod
   * @returns Created category.
   */
  function createCategory(category: Category): Promise<Category>;
  /**
   * Creates new categories.
   * @param categories - Categories to be created.
   * @public
   * @documentationMaturity preview
   * @requiredField categories
   * @adminMethod
   */
  function bulkCreateCategory(categories: Category[]): Promise<BulkCreateCategoryResponse>;
  /**
   * Updates an existing category.
   * @param _id - Category ID.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField category
   * @adminMethod
   * @returns Updated category.
   */
  function updateCategory(_id: string, category: UpdateCategory): Promise<Category>;
  interface UpdateCategory {
      /**
       * Category ID.
       * @readonly
       */
      _id?: string;
      /** Category name. */
      name?: string;
      /**
       * Category creation timestamp.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * Assigned events count. Deleted events are excluded.
       * @readonly
       */
      assignedEventsCount?: number | null;
      /**
       * Assigned and assigned draft event counts.
       * @readonly
       */
      counts?: CategoryCounts;
      /**
       * Category state. Default - MANUAL.
       * WIX_EVENTS.MANAGE_AUTO_CATEGORIES permission is required to use other states.
       * Field will be ignored on update requests.
       */
      states?: State[];
      /**
       * Optionally client defined external ID.
       * @internal
       */
      externalId?: string | null;
  }
  /**
   * Deletes existing category.
   * @param categoryId - ID of category to be deleted.
   * @public
   * @documentationMaturity preview
   * @requiredField categoryId
   * @adminMethod
   */
  function deleteCategory(categoryId: string): Promise<void>;
  /**
   * - `filter` - supported for `name`, `id` and `states` fields.
   * - `sort` - supported for `created` and `name` fields.
   * - `paging` - supported, see [paging](https://dev.wix.com/api/rest/getting-started/pagination).
   * - `fields` - not supported.
   * - `fieldsets` - not supported.
   * - `cursorPaging` - not supported, use offset pagination instead.
   * @public
   * @documentationMaturity preview
   */
  function queryCategories(options?: QueryCategoriesOptions): CategoriesQueryBuilder;
  interface QueryCategoriesOptions {
      /**
       * Predefined sets of fields to return.
       * - `COUNTS`: Returns `assignedEventsCount`.
       */
      fieldset?: CategoryFieldset[] | undefined;
  }
  interface QueryCursorResult {
      cursors: Cursors;
      hasNext: () => boolean;
      hasPrev: () => boolean;
      length: number;
      pageSize: number;
  }
  interface CategoriesQueryResult extends QueryCursorResult {
      items: Category[];
      query: CategoriesQueryBuilder;
      next: () => Promise<CategoriesQueryResult>;
      prev: () => Promise<CategoriesQueryResult>;
  }
  interface CategoriesQueryBuilder {
      /** @param propertyName - Property whose value is compared with `value`.
       * @param value - Value to compare against.
       * @documentationMaturity preview
       */
      eq: (propertyName: '_id' | 'name', value: any) => CategoriesQueryBuilder;
      /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
       * @documentationMaturity preview
       */
      limit: (limit: number) => CategoriesQueryBuilder;
      /** @param cursor - A pointer to specific record
       * @documentationMaturity preview
       */
      skipTo: (cursor: string) => CategoriesQueryBuilder;
      /** @documentationMaturity preview */
      find: () => Promise<CategoriesQueryResult>;
  }
  /**
   * Assigns events to a single category.
   * @param categoryId - ID of category to which events should be assigned.
   * @param eventId - A list of events IDs.
   * @public
   * @documentationMaturity preview
   * @requiredField categoryId
   * @requiredField eventId
   * @adminMethod
   */
  function assignEvents(categoryId: string, eventId: string[]): Promise<void>;
  /**
   * Assigns events to multiple categories.
   * @param categoryId - A list of category ids to which events should be assigned.
   * @public
   * @documentationMaturity preview
   * @requiredField categoryId
   * @requiredField options
   * @requiredField options.eventId
   * @adminMethod
   */
  function bulkAssignEvents(categoryId: string[], options: BulkAssignEventsOptions): Promise<BulkAssignEventsResponse>;
  interface BulkAssignEventsOptions {
      /** A list of events IDs. */
      eventId: string[];
  }
  /**
   * Assigns filtered events to multiple categories.
   * @param categoryId - Category IDs.
   * @public
   * @documentationMaturity preview
   * @requiredField categoryId
   * @requiredField options
   * @requiredField options.filter
   * @adminMethod
   */
  function bulkAssignEventsAsync(categoryId: string[], options: BulkAssignEventsAsyncOptions): Promise<void>;
  interface BulkAssignEventsAsyncOptions {
      /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events). */
      filter: Record<string, any> | null;
  }
  /**
   * Unassigns events from a single category.
   * @param categoryId - Category ID.
   * @param eventId - A list of events IDs.
   * @public
   * @documentationMaturity preview
   * @requiredField categoryId
   * @requiredField eventId
   * @adminMethod
   */
  function unassignEvents(categoryId: string, eventId: string[]): Promise<void>;
  /**
   * Unassigns events from multiple categories.
   * @param categoryId - A list of category IDs.
   * @public
   * @documentationMaturity preview
   * @requiredField categoryId
   * @adminMethod
   */
  function bulkUnassignEvents(categoryId: string[], options?: BulkUnassignEventsOptions): Promise<BulkUnassignEventsResponse>;
  interface BulkUnassignEventsOptions {
      /** A list of events IDs. */
      eventId?: string[];
  }
  /**
   * Unassigns filtered events from multiple categories.
   * @param categoryId - Category ID.
   * @public
   * @documentationMaturity preview
   * @requiredField categoryId
   * @requiredField options
   * @requiredField options.filter
   * @adminMethod
   */
  function bulkUnassignEventsAsync(categoryId: string[], options: BulkUnassignEventsAsyncOptions): Promise<void>;
  interface BulkUnassignEventsAsyncOptions {
      /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events). */
      filter: Record<string, any> | null;
  }
  /**
   * Lists visible event categories.
   * @param eventId - Event ID.
   * @public
   * @documentationMaturity preview
   * @requiredField eventId
   */
  function listEventCategories(eventId: string): Promise<ListEventCategoriesResponse>;
  /**
   * Change the order of category events.
   * @param categoryId - Category ID
   * @public
   * @documentationMaturity preview
   * @requiredField categoryId
   * @adminMethod
   */
  function reorderCategoryEvents(categoryId: string, options?: ReorderCategoryEventsOptions): Promise<void>;
  interface ReorderCategoryEventsOptions extends ReorderCategoryEventsRequestReferenceEventOneOf {
      /** Event ID */
      eventId?: string;
      /** Move the Category Event ID before this Event ID */
      beforeEventId?: string;
      /** Move the Category Event ID after this Event ID */
      afterEventId?: string;
  }
  
  type eventsV1Category_universal_d_Category = Category;
  type eventsV1Category_universal_d_CategoryCounts = CategoryCounts;
  type eventsV1Category_universal_d_State = State;
  const eventsV1Category_universal_d_State: typeof State;
  type eventsV1Category_universal_d_CreateCategoryRequest = CreateCategoryRequest;
  type eventsV1Category_universal_d_CreateCategoryResponse = CreateCategoryResponse;
  type eventsV1Category_universal_d_BulkCreateCategoryRequest = BulkCreateCategoryRequest;
  type eventsV1Category_universal_d_BulkCreateCategoryResponse = BulkCreateCategoryResponse;
  type eventsV1Category_universal_d_BulkCategoryResult = BulkCategoryResult;
  type eventsV1Category_universal_d_ItemMetadata = ItemMetadata;
  type eventsV1Category_universal_d_ApplicationError = ApplicationError;
  type eventsV1Category_universal_d_BulkActionMetadata = BulkActionMetadata;
  type eventsV1Category_universal_d_UpdateCategoryRequest = UpdateCategoryRequest;
  type eventsV1Category_universal_d_UpdateCategoryResponse = UpdateCategoryResponse;
  type eventsV1Category_universal_d_DeleteCategoryRequest = DeleteCategoryRequest;
  type eventsV1Category_universal_d_DeleteCategoryResponse = DeleteCategoryResponse;
  type eventsV1Category_universal_d_QueryCategoriesRequest = QueryCategoriesRequest;
  type eventsV1Category_universal_d_QueryV2 = QueryV2;
  type eventsV1Category_universal_d_QueryV2PagingMethodOneOf = QueryV2PagingMethodOneOf;
  type eventsV1Category_universal_d_Sorting = Sorting;
  type eventsV1Category_universal_d_SortOrder = SortOrder;
  const eventsV1Category_universal_d_SortOrder: typeof SortOrder;
  type eventsV1Category_universal_d_Paging = Paging;
  type eventsV1Category_universal_d_CategoryFieldset = CategoryFieldset;
  const eventsV1Category_universal_d_CategoryFieldset: typeof CategoryFieldset;
  type eventsV1Category_universal_d_QueryCategoriesResponse = QueryCategoriesResponse;
  type eventsV1Category_universal_d_PagingMetadataV2 = PagingMetadataV2;
  type eventsV1Category_universal_d_Cursors = Cursors;
  type eventsV1Category_universal_d_AssignEventsRequest = AssignEventsRequest;
  type eventsV1Category_universal_d_AssignEventsResponse = AssignEventsResponse;
  type eventsV1Category_universal_d_BulkAssignEventsRequest = BulkAssignEventsRequest;
  type eventsV1Category_universal_d_BulkAssignEventsResponse = BulkAssignEventsResponse;
  type eventsV1Category_universal_d_BulkAssignEventsAsyncRequest = BulkAssignEventsAsyncRequest;
  type eventsV1Category_universal_d_BulkAssignEventsAsyncResponse = BulkAssignEventsAsyncResponse;
  type eventsV1Category_universal_d_UnassignEventsRequest = UnassignEventsRequest;
  type eventsV1Category_universal_d_UnassignEventsResponse = UnassignEventsResponse;
  type eventsV1Category_universal_d_BulkUnassignEventsRequest = BulkUnassignEventsRequest;
  type eventsV1Category_universal_d_BulkUnassignEventsResponse = BulkUnassignEventsResponse;
  type eventsV1Category_universal_d_BulkUnassignEventsAsyncRequest = BulkUnassignEventsAsyncRequest;
  type eventsV1Category_universal_d_BulkUnassignEventsAsyncResponse = BulkUnassignEventsAsyncResponse;
  type eventsV1Category_universal_d_ListEventCategoriesRequest = ListEventCategoriesRequest;
  type eventsV1Category_universal_d_ListEventCategoriesResponse = ListEventCategoriesResponse;
  type eventsV1Category_universal_d_ReorderCategoryEventsRequest = ReorderCategoryEventsRequest;
  type eventsV1Category_universal_d_ReorderCategoryEventsRequestReferenceEventOneOf = ReorderCategoryEventsRequestReferenceEventOneOf;
  type eventsV1Category_universal_d_ReorderCategoryEventsResponse = ReorderCategoryEventsResponse;
  const eventsV1Category_universal_d_createCategory: typeof createCategory;
  const eventsV1Category_universal_d_bulkCreateCategory: typeof bulkCreateCategory;
  const eventsV1Category_universal_d_updateCategory: typeof updateCategory;
  type eventsV1Category_universal_d_UpdateCategory = UpdateCategory;
  const eventsV1Category_universal_d_deleteCategory: typeof deleteCategory;
  const eventsV1Category_universal_d_queryCategories: typeof queryCategories;
  type eventsV1Category_universal_d_QueryCategoriesOptions = QueryCategoriesOptions;
  type eventsV1Category_universal_d_CategoriesQueryResult = CategoriesQueryResult;
  type eventsV1Category_universal_d_CategoriesQueryBuilder = CategoriesQueryBuilder;
  const eventsV1Category_universal_d_assignEvents: typeof assignEvents;
  const eventsV1Category_universal_d_bulkAssignEvents: typeof bulkAssignEvents;
  type eventsV1Category_universal_d_BulkAssignEventsOptions = BulkAssignEventsOptions;
  const eventsV1Category_universal_d_bulkAssignEventsAsync: typeof bulkAssignEventsAsync;
  type eventsV1Category_universal_d_BulkAssignEventsAsyncOptions = BulkAssignEventsAsyncOptions;
  const eventsV1Category_universal_d_unassignEvents: typeof unassignEvents;
  const eventsV1Category_universal_d_bulkUnassignEvents: typeof bulkUnassignEvents;
  type eventsV1Category_universal_d_BulkUnassignEventsOptions = BulkUnassignEventsOptions;
  const eventsV1Category_universal_d_bulkUnassignEventsAsync: typeof bulkUnassignEventsAsync;
  type eventsV1Category_universal_d_BulkUnassignEventsAsyncOptions = BulkUnassignEventsAsyncOptions;
  const eventsV1Category_universal_d_listEventCategories: typeof listEventCategories;
  const eventsV1Category_universal_d_reorderCategoryEvents: typeof reorderCategoryEvents;
  type eventsV1Category_universal_d_ReorderCategoryEventsOptions = ReorderCategoryEventsOptions;
  namespace eventsV1Category_universal_d {
    export {
      __debug$2 as __debug,
      eventsV1Category_universal_d_Category as Category,
      eventsV1Category_universal_d_CategoryCounts as CategoryCounts,
      eventsV1Category_universal_d_State as State,
      eventsV1Category_universal_d_CreateCategoryRequest as CreateCategoryRequest,
      eventsV1Category_universal_d_CreateCategoryResponse as CreateCategoryResponse,
      eventsV1Category_universal_d_BulkCreateCategoryRequest as BulkCreateCategoryRequest,
      eventsV1Category_universal_d_BulkCreateCategoryResponse as BulkCreateCategoryResponse,
      eventsV1Category_universal_d_BulkCategoryResult as BulkCategoryResult,
      eventsV1Category_universal_d_ItemMetadata as ItemMetadata,
      eventsV1Category_universal_d_ApplicationError as ApplicationError,
      eventsV1Category_universal_d_BulkActionMetadata as BulkActionMetadata,
      eventsV1Category_universal_d_UpdateCategoryRequest as UpdateCategoryRequest,
      eventsV1Category_universal_d_UpdateCategoryResponse as UpdateCategoryResponse,
      eventsV1Category_universal_d_DeleteCategoryRequest as DeleteCategoryRequest,
      eventsV1Category_universal_d_DeleteCategoryResponse as DeleteCategoryResponse,
      eventsV1Category_universal_d_QueryCategoriesRequest as QueryCategoriesRequest,
      eventsV1Category_universal_d_QueryV2 as QueryV2,
      eventsV1Category_universal_d_QueryV2PagingMethodOneOf as QueryV2PagingMethodOneOf,
      eventsV1Category_universal_d_Sorting as Sorting,
      eventsV1Category_universal_d_SortOrder as SortOrder,
      eventsV1Category_universal_d_Paging as Paging,
      eventsV1Category_universal_d_CategoryFieldset as CategoryFieldset,
      eventsV1Category_universal_d_QueryCategoriesResponse as QueryCategoriesResponse,
      eventsV1Category_universal_d_PagingMetadataV2 as PagingMetadataV2,
      eventsV1Category_universal_d_Cursors as Cursors,
      eventsV1Category_universal_d_AssignEventsRequest as AssignEventsRequest,
      eventsV1Category_universal_d_AssignEventsResponse as AssignEventsResponse,
      eventsV1Category_universal_d_BulkAssignEventsRequest as BulkAssignEventsRequest,
      eventsV1Category_universal_d_BulkAssignEventsResponse as BulkAssignEventsResponse,
      eventsV1Category_universal_d_BulkAssignEventsAsyncRequest as BulkAssignEventsAsyncRequest,
      eventsV1Category_universal_d_BulkAssignEventsAsyncResponse as BulkAssignEventsAsyncResponse,
      eventsV1Category_universal_d_UnassignEventsRequest as UnassignEventsRequest,
      eventsV1Category_universal_d_UnassignEventsResponse as UnassignEventsResponse,
      eventsV1Category_universal_d_BulkUnassignEventsRequest as BulkUnassignEventsRequest,
      eventsV1Category_universal_d_BulkUnassignEventsResponse as BulkUnassignEventsResponse,
      eventsV1Category_universal_d_BulkUnassignEventsAsyncRequest as BulkUnassignEventsAsyncRequest,
      eventsV1Category_universal_d_BulkUnassignEventsAsyncResponse as BulkUnassignEventsAsyncResponse,
      eventsV1Category_universal_d_ListEventCategoriesRequest as ListEventCategoriesRequest,
      eventsV1Category_universal_d_ListEventCategoriesResponse as ListEventCategoriesResponse,
      eventsV1Category_universal_d_ReorderCategoryEventsRequest as ReorderCategoryEventsRequest,
      eventsV1Category_universal_d_ReorderCategoryEventsRequestReferenceEventOneOf as ReorderCategoryEventsRequestReferenceEventOneOf,
      eventsV1Category_universal_d_ReorderCategoryEventsResponse as ReorderCategoryEventsResponse,
      eventsV1Category_universal_d_createCategory as createCategory,
      eventsV1Category_universal_d_bulkCreateCategory as bulkCreateCategory,
      eventsV1Category_universal_d_updateCategory as updateCategory,
      eventsV1Category_universal_d_UpdateCategory as UpdateCategory,
      eventsV1Category_universal_d_deleteCategory as deleteCategory,
      eventsV1Category_universal_d_queryCategories as queryCategories,
      eventsV1Category_universal_d_QueryCategoriesOptions as QueryCategoriesOptions,
      eventsV1Category_universal_d_CategoriesQueryResult as CategoriesQueryResult,
      eventsV1Category_universal_d_CategoriesQueryBuilder as CategoriesQueryBuilder,
      eventsV1Category_universal_d_assignEvents as assignEvents,
      eventsV1Category_universal_d_bulkAssignEvents as bulkAssignEvents,
      eventsV1Category_universal_d_BulkAssignEventsOptions as BulkAssignEventsOptions,
      eventsV1Category_universal_d_bulkAssignEventsAsync as bulkAssignEventsAsync,
      eventsV1Category_universal_d_BulkAssignEventsAsyncOptions as BulkAssignEventsAsyncOptions,
      eventsV1Category_universal_d_unassignEvents as unassignEvents,
      eventsV1Category_universal_d_bulkUnassignEvents as bulkUnassignEvents,
      eventsV1Category_universal_d_BulkUnassignEventsOptions as BulkUnassignEventsOptions,
      eventsV1Category_universal_d_bulkUnassignEventsAsync as bulkUnassignEventsAsync,
      eventsV1Category_universal_d_BulkUnassignEventsAsyncOptions as BulkUnassignEventsAsyncOptions,
      eventsV1Category_universal_d_listEventCategories as listEventCategories,
      eventsV1Category_universal_d_reorderCategoryEvents as reorderCategoryEvents,
      eventsV1Category_universal_d_ReorderCategoryEventsOptions as ReorderCategoryEventsOptions,
    };
  }
  
  const __debug$1: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  /**
   * The form defines which elements are rendered in the Wix UI during the registration process (RSVP or checkout).
   * It also contains customizable messages and labels.
   *
   *
   * A form is an ordered list of controls (blocks), which accept guest information into a field input.
   *
   * Each control contains one or more nested inputs. For example, `Name` control has two inputs:
   * - First Name
   * - Last Name
   *
   * By default, name and email controls are always required and are pinned to the top of the form.
   */
  interface Form {
      /** Nested fields as an ordered list. */
      controls?: InputControl[];
      /** Set of configured form messages. */
      messages?: FormMessages;
  }
  /**
   * A block of nested fields.
   * Used to aggregate similar inputs like First Name and Last Name.
   */
  interface InputControl {
      /** Field control type. */
      type?: InputControlType;
      /** Whether control is mandatory (such as name & email). When true, only label can be changed. */
      system?: boolean;
      /** Deprecated: Use `id`. */
      name?: string;
      /** Child inputs. */
      inputs?: Input[];
      /** Deprecated: use `inputs.label`. */
      label?: string;
      /** Field controls are sorted by this value in ascending order. */
      orderIndex?: number;
      /** Unique control ID. */
      _id?: string;
  }
  enum InputControlType {
      /** Single text value field. */
      INPUT = "INPUT",
      /** Single text value field. */
      TEXTAREA = "TEXTAREA",
      /** Single-choice field of predefined values. */
      DROPDOWN = "DROPDOWN",
      /** Single-choice field of predefined values. */
      RADIO = "RADIO",
      /** Multiple-choice field of predefined values. */
      CHECKBOX = "CHECKBOX",
      /** First and last name fields. */
      NAME = "NAME",
      /** Additional guests and respective guest names fields. */
      GUEST_CONTROL = "GUEST_CONTROL",
      /** Single-line address field. */
      ADDRESS_SHORT = "ADDRESS_SHORT",
      /** Full address field. */
      ADDRESS_FULL = "ADDRESS_FULL",
      /** Year, month and day fields. */
      DATE = "DATE"
  }
  /** An input of one or multiple text values */
  interface Input {
      /** Field name. */
      name?: string;
      /** Deprecated: use `ValueType.TEXT_ARRAY`. */
      array?: boolean;
      /** Main field label */
      label?: string;
      /** Additional labels for multi-valued fields such as address. */
      additionalLabels?: Record<string, string>;
      /** Predefined choice options for fields, such as dropdown. */
      options?: string[];
      /** Whether field is mandatory. */
      mandatory?: boolean;
      /** Maximum number of accepted characters (relevant for text fields). */
      maxLength?: number;
      /**
       * Type which determines field format.
       * Used to validate submitted response.
       */
      type?: ValueType;
      /**
       * A maximum accepted values for array input.
       * Only applicable for inputs of valueType: TEXT_ARRAY.
       */
      maxSize?: number | null;
      /**
       * Preselected option.
       * Currently only applicable for dropdown.
       */
      defaultOptionSelection?: OptionSelection;
      /**
       * Additional labels for multi-valued fields such as address.
       * @readonly
       */
      labels?: Label[];
  }
  enum ValueType {
      TEXT = "TEXT",
      NUMBER = "NUMBER",
      TEXT_ARRAY = "TEXT_ARRAY",
      DATE_TIME = "DATE_TIME",
      ADDRESS = "ADDRESS"
  }
  /**
   * Describes initially selected option when an input has multiple choices.
   * Defaults to first (0th) option if not configured.
   */
  interface OptionSelection extends OptionSelectionSelectedOptionOneOf {
      /** 0-based index from predefined `input.options` which is selected initially. */
      optionIndex?: number;
      /**
       * Placeholder hint describing expected choices (such as "Please select").
       * Considered an empty choice.
       */
      placeholderText?: string;
  }
  /** @oneof */
  interface OptionSelectionSelectedOptionOneOf {
      /** 0-based index from predefined `input.options` which is selected initially. */
      optionIndex?: number;
      /**
       * Placeholder hint describing expected choices (such as "Please select").
       * Considered an empty choice.
       */
      placeholderText?: string;
  }
  interface Label {
      /** Field name. */
      name?: string;
      /** Field label. */
      label?: string;
  }
  /**
   * Defines form messages shown in UI before, during, and after registration flow.
   * It enables configuration of form titles, response labels, "thank you" messages, and call-to-action texts.
   */
  interface FormMessages {
      /** RSVP form messages. */
      rsvp?: RsvpFormMessages;
      /** Checkout form messages. */
      checkout?: CheckoutFormMessages;
      /** Messages shown when event registration is closed. */
      registrationClosed?: RegistrationClosedMessages;
      /** Messages shown when event tickets are unavailable. */
      ticketsUnavailable?: TicketsUnavailableMessages;
  }
  interface RsvpFormMessages {
      /** Label text indicating RSVP `YES` response. */
      rsvpYesOption?: string;
      /** Label text indicating RSVP `NO` response. */
      rsvpNoOption?: string;
      /** Messages shown for RSVP = `YES`. */
      positiveMessages?: Positive;
      /** Messages shown for RSVP = `WAITING` (when event is full and waitlist is available). */
      waitlistMessages?: Positive;
      /** Messages shown for RSVP = `NO`. */
      negativeMessages?: Negative;
      /** "Submit form" call-to-action label text. */
      submitActionLabel?: string;
  }
  /** Confirmation messages shown after registration. */
  interface PositiveResponseConfirmation {
      /** Confirmation message title. */
      title?: string;
      /** Confirmation message text. */
      message?: string;
      /** "Add to calendar" call-to-action label text. */
      addToCalendarActionLabel?: string;
      /** "Share event" call-to-action label text. */
      shareActionLabel?: string;
  }
  /** Confirmation messages shown after registration. */
  interface NegativeResponseConfirmation {
      /** Confirmation message title. */
      title?: string;
      /** "Share event" call-to-action label text. */
      shareActionLabel?: string;
  }
  /** Set of messages shown during registration when RSVP response is positive. */
  interface Positive {
      /** Main form title for positive response. */
      title?: string;
      /** Confirmation messages shown after registration. */
      confirmation?: PositiveResponseConfirmation;
  }
  /** A set of messages shown during registration with negative response */
  interface Negative {
      /** Main form title for negative response. */
      title?: string;
      /** Confirmation messages shown after registration. */
      confirmation?: NegativeResponseConfirmation;
  }
  interface CheckoutFormMessages {
      /** Main form title for response. */
      title?: string;
      /** Submit form call-to-action label text. */
      submitActionLabel?: string;
      /** Confirmation messages shown after checkout. */
      confirmation?: ResponseConfirmation;
  }
  /** Confirmation messages shown after checkout. */
  interface ResponseConfirmation {
      /** Confirmation message title. */
      title?: string;
      /** Confirmation message text. */
      message?: string;
      /** "Download tickets" call-to-action label text. */
      downloadTicketsLabel?: string;
      /** "Add to calendar" call-to-action label text. */
      addToCalendarLabel?: string;
      /** "Share event" call-to-action label text. */
      shareEventLabel?: string;
  }
  interface RegistrationClosedMessages {
      /** Message shown when event registration is closed. */
      message?: string;
      /** "Explore other events" call-to-action label text. */
      exploreEventsActionLabel?: string;
  }
  interface TicketsUnavailableMessages {
      /** Message shown when event tickets are unavailable. */
      message?: string;
      /** "Explore other events" call-to-action label text. */
      exploreEventsActionLabel?: string;
  }
  interface FormInputControlAdded {
      /** Event ID. */
      eventId?: string;
      /** Input control. */
      inputControl?: InputControl;
  }
  interface FormInputControlUpdated {
      /** Event ID. */
      eventId?: string;
      /** Input control. */
      updatedInputControl?: InputControl;
  }
  interface FormInputControlDeleted {
      /** Event ID. */
      eventId?: string;
      /** Input control. */
      deletedInputControl?: InputControl;
  }
  interface GetFormRequest {
      /** Event ID. */
      eventId: string;
  }
  interface GetFormResponse {
      /**
       * Currently published event form.
       * Published form is visible to site visitors.
       */
      form?: Form;
      /**
       * Draft event form.
       * Not available to visitors unless published.
       */
      draftForm?: Form;
  }
  interface AddControlRequest extends AddControlRequestControlOneOf {
      /** Phone number input control. */
      phone?: PhoneControl;
      /** Single-line or full address input control. */
      address?: AddressControl;
      /** Day, month, year date input control. */
      date?: DateControl;
      /** Additional guests input control. */
      additionalGuests?: AdditionalGuestsControl;
      /** Single-choice dropdown style input control. */
      dropdown?: DropdownControl;
      /**
       * Deprecated. Use radioButton.
       * @internal
       */
      radio?: RadioButtonControl;
      /** Multiple-choice checkbox style input control. */
      checkbox?: CheckboxControl;
      /** Free-form text input control. */
      text?: TextControl;
      /** Single-choice radio button style input control. */
      radioButton?: RadioButtonControl;
      /** Event ID. */
      eventId: string;
  }
  /** @oneof */
  interface AddControlRequestControlOneOf {
      /** Phone number input control. */
      phone?: PhoneControl;
      /** Single-line or full address input control. */
      address?: AddressControl;
      /** Day, month, year date input control. */
      date?: DateControl;
      /** Additional guests input control. */
      additionalGuests?: AdditionalGuestsControl;
      /** Single-choice dropdown style input control. */
      dropdown?: DropdownControl;
      /**
       * Deprecated. Use radioButton.
       * @internal
       */
      radio?: RadioButtonControl;
      /** Multiple-choice checkbox style input control. */
      checkbox?: CheckboxControl;
      /** Free-form text input control. */
      text?: TextControl;
      /** Single-choice radio button style input control. */
      radioButton?: RadioButtonControl;
  }
  interface PhoneControl {
      /** Phone input label. */
      label?: string;
      /** Whether phone input is required. */
      mandatory?: boolean;
  }
  interface AddressControl {
      /** Address control labels for each input. */
      labels?: AddressControlLabels;
      /** Whether address is multi-line (consisting of multiple fields such as country, city, postal code). When false, address is single-line. */
      full?: boolean;
      /** Whether address input is required. */
      mandatory?: boolean;
  }
  interface AddressControlLabels {
      /** Single-line address input label. */
      addressLine?: string;
      /** Country input label. */
      country?: string;
      /** Subdivision input label. */
      subdivision?: string;
      /** City input label. */
      city?: string;
      /** Postal code input label. */
      postalCode?: string;
      /** Street address input label. */
      streetAddress?: string;
  }
  interface DateControl {
      /** Input control label. */
      label?: string;
      /** Whether date input is required */
      mandatory?: boolean;
  }
  interface AdditionalGuestsControl {
      /** Additional guests control labels for each input. */
      labels?: Labels;
      /** Whether individual guest names are required. */
      namesMandatory?: boolean;
      /** Maximum number of additional guests. */
      maxGuests?: number;
  }
  interface Labels {
      /** Input label for a single guest. */
      single?: string;
      /** Input label for multiple guests. */
      multiple?: string;
  }
  interface DropdownControl {
      /** Input control label. */
      label?: string;
      /** Predefined options guests can choose from. */
      options?: string[];
      /** Whether choice is required. */
      mandatory?: boolean;
      /** Preselected option. */
      defaultOptionSelection?: OptionSelection;
  }
  interface RadioButtonControl {
      /** Input control label. */
      label?: string;
      /** Predefined options guests can choose from. */
      options?: string[];
  }
  interface CheckboxControl {
      /** Input control label. */
      label?: string;
      /** Whether at least one checkbox is required. */
      mandatory?: boolean;
      /** Predefined options guests can choose from. */
      options?: string[];
  }
  interface TextControl {
      /** Input control label. */
      label?: string;
      /** Whether text input is required. */
      mandatory?: boolean;
      /** Maximum number of characters allowed. */
      maxLength?: number;
      /** Whether input control should allow multiple lines in text. */
      multiLine?: boolean;
      /** Whether input control should be displayed as a comment. */
      comment?: boolean;
  }
  interface AddControlResponse {
      /** Generated unique input control ID. */
      _id?: string;
      /** Modified draft event form. */
      form?: Form;
  }
  interface UpdateControlRequest extends UpdateControlRequestControlOneOf {
      /** Phone number input control. */
      phone?: PhoneControl;
      /** Single-line or full address input control. */
      address?: AddressControl;
      /** Day, month, year date input control. */
      date?: DateControl;
      /** Additional guests input control. */
      additionalGuests?: AdditionalGuestsControl;
      /** Single-choice dropdown style input control. */
      dropdown?: DropdownControl;
      /**
       * Single-choice radio style input control.
       * @internal
       */
      radio?: RadioButtonControl;
      /** Multiple-choice checkbox style input control. */
      checkbox?: CheckboxControl;
      /** Free-form text input control. */
      text?: TextControl;
      /** Main guest name input control. */
      name?: NameControl;
      /** Main guest email input control. */
      email?: EmailControl;
      /** Single-choice radio style input control. */
      radioButton?: RadioButtonControl;
      /** Event ID. */
      eventId: string;
      /** Unique input control ID. */
      _id: string;
      /** Index used to sort input controls in ascending order. */
      orderIndex?: number;
  }
  /** @oneof */
  interface UpdateControlRequestControlOneOf {
      /** Phone number input control. */
      phone?: PhoneControl;
      /** Single-line or full address input control. */
      address?: AddressControl;
      /** Day, month, year date input control. */
      date?: DateControl;
      /** Additional guests input control. */
      additionalGuests?: AdditionalGuestsControl;
      /** Single-choice dropdown style input control. */
      dropdown?: DropdownControl;
      /**
       * Single-choice radio style input control.
       * @internal
       */
      radio?: RadioButtonControl;
      /** Multiple-choice checkbox style input control. */
      checkbox?: CheckboxControl;
      /** Free-form text input control. */
      text?: TextControl;
      /** Main guest name input control. */
      name?: NameControl;
      /** Main guest email input control. */
      email?: EmailControl;
      /** Single-choice radio style input control. */
      radioButton?: RadioButtonControl;
  }
  interface NameControl {
      /** Name control labels of each input */
      labels?: NameControlLabels;
  }
  interface NameControlLabels {
      /** First name input label */
      firstName?: string;
      /** Last name input label */
      lastName?: string;
  }
  interface EmailControl {
      /** Email input label. */
      label?: string;
  }
  interface UpdateControlResponse {
      /** Modified draft event form. */
      form?: Form;
  }
  interface DeleteControlRequest {
      /** Event ID. */
      eventId: string;
      /** Unique input control ID. */
      _id: string;
  }
  interface DeleteControlResponse {
      /** Modified draft event form */
      form?: Form;
  }
  interface UpdateMessagesRequest {
      /** Event ID. */
      eventId: string;
      /**
       * Set of field paths, specifying which parts of this resource to update.
       * When fields are empty, request is interpreted as full update.
       * Behavior follows [google.protobuf.FieldMask](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask) semantics.
       * @internal
       */
      fields: string[];
      /** Set of configured form messages. */
      messages?: FormMessages;
  }
  interface UpdateMessagesResponse {
      /** Modified draft event form. */
      form?: Form;
  }
  interface PublishDraftRequest {
      /** Event ID. */
      eventId: string;
  }
  interface PublishDraftResponse {
      /** Published event form. */
      form?: Form;
  }
  interface EventUpdated {
      /** Event update timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** Event location. */
      location?: Location;
      /** Event schedule configuration. */
      scheduleConfig?: ScheduleConfig;
      /** Event title. */
      title?: string;
      /** Whether schedule configuration was updated. */
      scheduleConfigUpdated?: boolean;
      /**
       * The set of properties which were updated. For example 'title' or 'location'
       * @internal
       */
      fields?: string[];
      /**
       * Whether event has opened new spots with this update.
       * @internal
       */
      newSpotsOpened?: boolean | null;
  }
  interface Location {
      /** Location name. */
      name?: string | null;
      /** Location map coordinates. */
      coordinates?: MapCoordinates;
      /** Single line address representation. */
      address?: string | null;
      /** Location type. */
      type?: LocationType;
      /**
       * Full address derived from formatted single line `address`.
       * When `full_address` is used to create or update the event, deprecated `address` and `coordinates` are ignored.
       * If provided `full_address` has empty `formatted_address` or `coordinates`, it will be auto-completed using Atlas service.
       *
       * Migration notes:
       * - `full_address.formatted_address` is equivalent to `address`.
       * - `full_address.geocode` is equivalent to `coordinates`.
       */
      fullAddress?: Address$1;
      /**
       * Defines event location as TBD (To Be Determined).
       * When event location is not yet defined, `name` is displayed instead of location address.
       * `coordinates`, `address`, `type` and `full_address` are not required when location is TBD.
       */
      tbd?: boolean | null;
  }
  interface MapCoordinates {
      /** Latitude. */
      lat?: number;
      /** Longitude. */
      lng?: number;
  }
  enum LocationType {
      VENUE = "VENUE",
      ONLINE = "ONLINE"
  }
  /** Physical address */
  interface Address$1 extends AddressStreetOneOf$1 {
      /** a break down of the street to number and street name */
      streetAddress?: StreetAddress$1;
      /** Main address line (usually street and number) as free text */
      addressLine1?: string | null;
      /** country code */
      country?: string | null;
      /** subdivision (usually state or region) code according to ISO 3166-2 */
      subdivision?: string | null;
      /** city name */
      city?: string | null;
      /** zip/postal code */
      postalCode?: string | null;
      /** Free text providing more detailed address info. Usually contains Apt, Suite, Floor */
      addressLine2?: string | null;
      /** A string containing the human-readable address of this location */
      formatted?: string | null;
      /** coordinates of the physical address */
      location?: AddressLocation$1;
  }
  /** @oneof */
  interface AddressStreetOneOf$1 {
      /** a break down of the street to number and street name */
      streetAddress?: StreetAddress$1;
      /** Main address line (usually street and number) as free text */
      addressLine?: string | null;
  }
  interface StreetAddress$1 {
      /** street number */
      number?: string;
      /** street name */
      name?: string;
      /**
       * apartment number
       * @internal
       */
      apt?: string;
  }
  interface AddressLocation$1 {
      /** address latitude coordinates */
      latitude?: number | null;
      /** address longitude coordinates */
      longitude?: number | null;
  }
  interface Subdivision$1 {
      /** subdivision short code */
      code?: string;
      /** subdivision full-name */
      name?: string;
      /**
       * subdivision level
       * @internal
       */
      type?: SubdivisionType$1;
      /**
       * free text description of subdivision type
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
  interface ScheduleConfig {
      /**
       * Defines event as TBD (To Be Determined) schedule.
       * When event time is not yet defined, TBD message is displayed instead of event start and end times.
       * `startDate`, `endDate` and `timeZoneId` are not required when schedule is TBD.
       */
      scheduleTbd?: boolean;
      /** TBD message. */
      scheduleTbdMessage?: string | null;
      /** Event start timestamp. */
      startDate?: Date;
      /** Event end timestamp. */
      endDate?: Date;
      /** Event time zone ID in TZ database format, e.g., `EST`, `America/Los_Angeles`. */
      timeZoneId?: string | null;
      /** Whether end date is hidden in the formatted schedule. */
      endDateHidden?: boolean;
      /** Whether time zone is displayed in formatted schedule. */
      showTimeZone?: boolean;
      /** Event recurrences. */
      recurrences?: Recurrences;
  }
  interface Recurrences {
      /** Event occurrences. */
      occurrences?: Occurrence[];
      /**
       * Recurring event category ID.
       * @readonly
       */
      categoryId?: string | null;
      /**
       * Recurrence status.
       * @readonly
       */
      status?: Status;
  }
  interface Occurrence {
      /** Event start timestamp. */
      startDate?: Date;
      /** Event end timestamp. */
      endDate?: Date;
      /** Event time zone ID in TZ database format, e.g., `EST`, `America/Los_Angeles`. */
      timeZoneId?: string | null;
      /** Whether time zone is displayed in formatted schedule. */
      showTimeZone?: boolean;
  }
  enum Status {
      /** Event occurs only once. */
      ONE_TIME = "ONE_TIME",
      /** Event is recurring. */
      RECURRING = "RECURRING",
      /** Marks the next upcoming occurrence of the recurring event. */
      RECURRING_NEXT = "RECURRING_NEXT",
      /** Marks the most recent ended occurrence of the recurring event. */
      RECURRING_LAST_ENDED = "RECURRING_LAST_ENDED",
      /** Marks the most recent canceled occurrence of the recurring event. */
      RECURRING_LAST_CANCELED = "RECURRING_LAST_CANCELED"
  }
  interface DiscardDraftRequest {
      /** Event ID. */
      eventId: string;
  }
  interface DiscardDraftResponse {
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
   * Retrieves an event registration form (both the draft and published versions).
   * @param eventId - Event ID.
   * @public
   * @documentationMaturity preview
   * @requiredField eventId
   * @returns Currently published event form.
   * Published form is visible to site visitors.
   */
  function getForm(eventId: string): Promise<Form>;
  /**
   * Adds an input control to the draft form.
   * @param eventId - Event ID.
   * @public
   * @documentationMaturity preview
   * @requiredField eventId
   * @adminMethod
   */
  function addControl(eventId: string, options?: AddControlOptions): Promise<AddControlResponse>;
  interface AddControlOptions extends AddControlRequestControlOneOf {
      /** Phone number input control. */
      phone?: PhoneControl;
      /** Single-line or full address input control. */
      address?: AddressControl;
      /** Day, month, year date input control. */
      date?: DateControl;
      /** Additional guests input control. */
      additionalGuests?: AdditionalGuestsControl;
      /** Single-choice dropdown style input control. */
      dropdown?: DropdownControl;
      /**
       * Deprecated. Use radioButton.
       * @internal
       */
      radio?: RadioButtonControl;
      /** Multiple-choice checkbox style input control. */
      checkbox?: CheckboxControl;
      /** Free-form text input control. */
      text?: TextControl;
      /** Single-choice radio button style input control. */
      radioButton?: RadioButtonControl;
  }
  /**
   * Updates an existing input control in the draft form.
   * @public
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.eventId
   * @requiredField identifiers.id
   * @adminMethod
   */
  function updateControl(identifiers: UpdateControlIdentifiers, options?: UpdateControlOptions): Promise<UpdateControlResponse>;
  interface UpdateControlIdentifiers extends UpdateControlRequestControlOneOf {
      /** Event ID. */
      eventId: string;
      /** Unique input control ID. */
      _id: string;
  }
  interface UpdateControlOptions extends UpdateControlRequestControlOneOf {
      /** Index used to sort input controls in ascending order. */
      orderIndex?: number;
      /** Phone number input control. */
      phone?: PhoneControl;
      /** Single-line or full address input control. */
      address?: AddressControl;
      /** Day, month, year date input control. */
      date?: DateControl;
      /** Additional guests input control. */
      additionalGuests?: AdditionalGuestsControl;
      /** Single-choice dropdown style input control. */
      dropdown?: DropdownControl;
      /**
       * Single-choice radio style input control.
       * @internal
       */
      radio?: RadioButtonControl;
      /** Multiple-choice checkbox style input control. */
      checkbox?: CheckboxControl;
      /** Free-form text input control. */
      text?: TextControl;
      /** Main guest name input control. */
      name?: NameControl;
      /** Main guest email input control. */
      email?: EmailControl;
      /** Single-choice radio style input control. */
      radioButton?: RadioButtonControl;
  }
  /**
   * Deletes an input control from the draft form.
   * @public
   * @documentationMaturity preview
   * @requiredField identifiers
   * @requiredField identifiers.eventId
   * @requiredField identifiers.id
   * @adminMethod
   */
  function deleteControl(identifiers: DeleteControlIdentifiers): Promise<DeleteControlResponse>;
  interface DeleteControlIdentifiers {
      /** Event ID. */
      eventId: string;
      /** Unique input control ID. */
      _id: string;
  }
  /**
   * Updates draft form messages, as displayed in the Wix UI before, during, and after the registration flow.
   * Configurable messages include form titles, response labels, "thank you" messages, and call-to-action texts.
   * @param eventId - Event ID.
   * @param fields - Set of field paths, specifying which parts of this resource to update.
   * When fields are empty, request is interpreted as full update.
   * Behavior follows [google.protobuf.FieldMask](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask) semantics.
   * @public
   * @documentationMaturity preview
   * @requiredField eventId
   * @requiredField fields
   * @adminMethod
   */
  function updateMessages(eventId: string, fields: string[], options?: UpdateMessagesOptions): Promise<UpdateMessagesResponse>;
  interface UpdateMessagesOptions {
      /** Set of configured form messages. */
      messages?: FormMessages;
  }
  /**
   * Publishes the draft form.
   * Sets event registration form equal to contents of draft form.
   * @param eventId - Event ID.
   * @public
   * @documentationMaturity preview
   * @requiredField eventId
   * @adminMethod
   */
  function publishDraft(eventId: string): Promise<PublishDraftResponse>;
  /**
   * Clears all changes to the draft form.
   * (Does not affect the published form.)
   * @param eventId - Event ID.
   * @public
   * @documentationMaturity preview
   * @requiredField eventId
   * @adminMethod
   */
  function discardDraft(eventId: string): Promise<void>;
  
  type eventsV1Form_universal_d_Form = Form;
  type eventsV1Form_universal_d_InputControl = InputControl;
  type eventsV1Form_universal_d_InputControlType = InputControlType;
  const eventsV1Form_universal_d_InputControlType: typeof InputControlType;
  type eventsV1Form_universal_d_Input = Input;
  type eventsV1Form_universal_d_ValueType = ValueType;
  const eventsV1Form_universal_d_ValueType: typeof ValueType;
  type eventsV1Form_universal_d_OptionSelection = OptionSelection;
  type eventsV1Form_universal_d_OptionSelectionSelectedOptionOneOf = OptionSelectionSelectedOptionOneOf;
  type eventsV1Form_universal_d_Label = Label;
  type eventsV1Form_universal_d_FormMessages = FormMessages;
  type eventsV1Form_universal_d_RsvpFormMessages = RsvpFormMessages;
  type eventsV1Form_universal_d_PositiveResponseConfirmation = PositiveResponseConfirmation;
  type eventsV1Form_universal_d_NegativeResponseConfirmation = NegativeResponseConfirmation;
  type eventsV1Form_universal_d_Positive = Positive;
  type eventsV1Form_universal_d_Negative = Negative;
  type eventsV1Form_universal_d_CheckoutFormMessages = CheckoutFormMessages;
  type eventsV1Form_universal_d_ResponseConfirmation = ResponseConfirmation;
  type eventsV1Form_universal_d_RegistrationClosedMessages = RegistrationClosedMessages;
  type eventsV1Form_universal_d_TicketsUnavailableMessages = TicketsUnavailableMessages;
  type eventsV1Form_universal_d_FormInputControlAdded = FormInputControlAdded;
  type eventsV1Form_universal_d_FormInputControlUpdated = FormInputControlUpdated;
  type eventsV1Form_universal_d_FormInputControlDeleted = FormInputControlDeleted;
  type eventsV1Form_universal_d_GetFormRequest = GetFormRequest;
  type eventsV1Form_universal_d_GetFormResponse = GetFormResponse;
  type eventsV1Form_universal_d_AddControlRequest = AddControlRequest;
  type eventsV1Form_universal_d_AddControlRequestControlOneOf = AddControlRequestControlOneOf;
  type eventsV1Form_universal_d_PhoneControl = PhoneControl;
  type eventsV1Form_universal_d_AddressControl = AddressControl;
  type eventsV1Form_universal_d_AddressControlLabels = AddressControlLabels;
  type eventsV1Form_universal_d_DateControl = DateControl;
  type eventsV1Form_universal_d_AdditionalGuestsControl = AdditionalGuestsControl;
  type eventsV1Form_universal_d_Labels = Labels;
  type eventsV1Form_universal_d_DropdownControl = DropdownControl;
  type eventsV1Form_universal_d_RadioButtonControl = RadioButtonControl;
  type eventsV1Form_universal_d_CheckboxControl = CheckboxControl;
  type eventsV1Form_universal_d_TextControl = TextControl;
  type eventsV1Form_universal_d_AddControlResponse = AddControlResponse;
  type eventsV1Form_universal_d_UpdateControlRequest = UpdateControlRequest;
  type eventsV1Form_universal_d_UpdateControlRequestControlOneOf = UpdateControlRequestControlOneOf;
  type eventsV1Form_universal_d_NameControl = NameControl;
  type eventsV1Form_universal_d_NameControlLabels = NameControlLabels;
  type eventsV1Form_universal_d_EmailControl = EmailControl;
  type eventsV1Form_universal_d_UpdateControlResponse = UpdateControlResponse;
  type eventsV1Form_universal_d_DeleteControlRequest = DeleteControlRequest;
  type eventsV1Form_universal_d_DeleteControlResponse = DeleteControlResponse;
  type eventsV1Form_universal_d_UpdateMessagesRequest = UpdateMessagesRequest;
  type eventsV1Form_universal_d_UpdateMessagesResponse = UpdateMessagesResponse;
  type eventsV1Form_universal_d_PublishDraftRequest = PublishDraftRequest;
  type eventsV1Form_universal_d_PublishDraftResponse = PublishDraftResponse;
  type eventsV1Form_universal_d_EventUpdated = EventUpdated;
  type eventsV1Form_universal_d_Location = Location;
  type eventsV1Form_universal_d_MapCoordinates = MapCoordinates;
  type eventsV1Form_universal_d_LocationType = LocationType;
  const eventsV1Form_universal_d_LocationType: typeof LocationType;
  type eventsV1Form_universal_d_ScheduleConfig = ScheduleConfig;
  type eventsV1Form_universal_d_Recurrences = Recurrences;
  type eventsV1Form_universal_d_Occurrence = Occurrence;
  type eventsV1Form_universal_d_Status = Status;
  const eventsV1Form_universal_d_Status: typeof Status;
  type eventsV1Form_universal_d_DiscardDraftRequest = DiscardDraftRequest;
  type eventsV1Form_universal_d_DiscardDraftResponse = DiscardDraftResponse;
  type eventsV1Form_universal_d_DomainEvent = DomainEvent;
  type eventsV1Form_universal_d_DomainEventBodyOneOf = DomainEventBodyOneOf;
  type eventsV1Form_universal_d_EntityCreatedEvent = EntityCreatedEvent;
  type eventsV1Form_universal_d_EntityUpdatedEvent = EntityUpdatedEvent;
  type eventsV1Form_universal_d_EntityDeletedEvent = EntityDeletedEvent;
  type eventsV1Form_universal_d_ActionEvent = ActionEvent;
  const eventsV1Form_universal_d_getForm: typeof getForm;
  const eventsV1Form_universal_d_addControl: typeof addControl;
  type eventsV1Form_universal_d_AddControlOptions = AddControlOptions;
  const eventsV1Form_universal_d_updateControl: typeof updateControl;
  type eventsV1Form_universal_d_UpdateControlIdentifiers = UpdateControlIdentifiers;
  type eventsV1Form_universal_d_UpdateControlOptions = UpdateControlOptions;
  const eventsV1Form_universal_d_deleteControl: typeof deleteControl;
  type eventsV1Form_universal_d_DeleteControlIdentifiers = DeleteControlIdentifiers;
  const eventsV1Form_universal_d_updateMessages: typeof updateMessages;
  type eventsV1Form_universal_d_UpdateMessagesOptions = UpdateMessagesOptions;
  const eventsV1Form_universal_d_publishDraft: typeof publishDraft;
  const eventsV1Form_universal_d_discardDraft: typeof discardDraft;
  namespace eventsV1Form_universal_d {
    export {
      __debug$1 as __debug,
      eventsV1Form_universal_d_Form as Form,
      eventsV1Form_universal_d_InputControl as InputControl,
      eventsV1Form_universal_d_InputControlType as InputControlType,
      eventsV1Form_universal_d_Input as Input,
      eventsV1Form_universal_d_ValueType as ValueType,
      eventsV1Form_universal_d_OptionSelection as OptionSelection,
      eventsV1Form_universal_d_OptionSelectionSelectedOptionOneOf as OptionSelectionSelectedOptionOneOf,
      eventsV1Form_universal_d_Label as Label,
      eventsV1Form_universal_d_FormMessages as FormMessages,
      eventsV1Form_universal_d_RsvpFormMessages as RsvpFormMessages,
      eventsV1Form_universal_d_PositiveResponseConfirmation as PositiveResponseConfirmation,
      eventsV1Form_universal_d_NegativeResponseConfirmation as NegativeResponseConfirmation,
      eventsV1Form_universal_d_Positive as Positive,
      eventsV1Form_universal_d_Negative as Negative,
      eventsV1Form_universal_d_CheckoutFormMessages as CheckoutFormMessages,
      eventsV1Form_universal_d_ResponseConfirmation as ResponseConfirmation,
      eventsV1Form_universal_d_RegistrationClosedMessages as RegistrationClosedMessages,
      eventsV1Form_universal_d_TicketsUnavailableMessages as TicketsUnavailableMessages,
      eventsV1Form_universal_d_FormInputControlAdded as FormInputControlAdded,
      eventsV1Form_universal_d_FormInputControlUpdated as FormInputControlUpdated,
      eventsV1Form_universal_d_FormInputControlDeleted as FormInputControlDeleted,
      eventsV1Form_universal_d_GetFormRequest as GetFormRequest,
      eventsV1Form_universal_d_GetFormResponse as GetFormResponse,
      eventsV1Form_universal_d_AddControlRequest as AddControlRequest,
      eventsV1Form_universal_d_AddControlRequestControlOneOf as AddControlRequestControlOneOf,
      eventsV1Form_universal_d_PhoneControl as PhoneControl,
      eventsV1Form_universal_d_AddressControl as AddressControl,
      eventsV1Form_universal_d_AddressControlLabels as AddressControlLabels,
      eventsV1Form_universal_d_DateControl as DateControl,
      eventsV1Form_universal_d_AdditionalGuestsControl as AdditionalGuestsControl,
      eventsV1Form_universal_d_Labels as Labels,
      eventsV1Form_universal_d_DropdownControl as DropdownControl,
      eventsV1Form_universal_d_RadioButtonControl as RadioButtonControl,
      eventsV1Form_universal_d_CheckboxControl as CheckboxControl,
      eventsV1Form_universal_d_TextControl as TextControl,
      eventsV1Form_universal_d_AddControlResponse as AddControlResponse,
      eventsV1Form_universal_d_UpdateControlRequest as UpdateControlRequest,
      eventsV1Form_universal_d_UpdateControlRequestControlOneOf as UpdateControlRequestControlOneOf,
      eventsV1Form_universal_d_NameControl as NameControl,
      eventsV1Form_universal_d_NameControlLabels as NameControlLabels,
      eventsV1Form_universal_d_EmailControl as EmailControl,
      eventsV1Form_universal_d_UpdateControlResponse as UpdateControlResponse,
      eventsV1Form_universal_d_DeleteControlRequest as DeleteControlRequest,
      eventsV1Form_universal_d_DeleteControlResponse as DeleteControlResponse,
      eventsV1Form_universal_d_UpdateMessagesRequest as UpdateMessagesRequest,
      eventsV1Form_universal_d_UpdateMessagesResponse as UpdateMessagesResponse,
      eventsV1Form_universal_d_PublishDraftRequest as PublishDraftRequest,
      eventsV1Form_universal_d_PublishDraftResponse as PublishDraftResponse,
      eventsV1Form_universal_d_EventUpdated as EventUpdated,
      eventsV1Form_universal_d_Location as Location,
      eventsV1Form_universal_d_MapCoordinates as MapCoordinates,
      eventsV1Form_universal_d_LocationType as LocationType,
      Address$1 as Address,
      AddressStreetOneOf$1 as AddressStreetOneOf,
      StreetAddress$1 as StreetAddress,
      AddressLocation$1 as AddressLocation,
      Subdivision$1 as Subdivision,
      SubdivisionType$1 as SubdivisionType,
      eventsV1Form_universal_d_ScheduleConfig as ScheduleConfig,
      eventsV1Form_universal_d_Recurrences as Recurrences,
      eventsV1Form_universal_d_Occurrence as Occurrence,
      eventsV1Form_universal_d_Status as Status,
      eventsV1Form_universal_d_DiscardDraftRequest as DiscardDraftRequest,
      eventsV1Form_universal_d_DiscardDraftResponse as DiscardDraftResponse,
      eventsV1Form_universal_d_DomainEvent as DomainEvent,
      eventsV1Form_universal_d_DomainEventBodyOneOf as DomainEventBodyOneOf,
      eventsV1Form_universal_d_EntityCreatedEvent as EntityCreatedEvent,
      eventsV1Form_universal_d_EntityUpdatedEvent as EntityUpdatedEvent,
      eventsV1Form_universal_d_EntityDeletedEvent as EntityDeletedEvent,
      eventsV1Form_universal_d_ActionEvent as ActionEvent,
      eventsV1Form_universal_d_getForm as getForm,
      eventsV1Form_universal_d_addControl as addControl,
      eventsV1Form_universal_d_AddControlOptions as AddControlOptions,
      eventsV1Form_universal_d_updateControl as updateControl,
      eventsV1Form_universal_d_UpdateControlIdentifiers as UpdateControlIdentifiers,
      eventsV1Form_universal_d_UpdateControlOptions as UpdateControlOptions,
      eventsV1Form_universal_d_deleteControl as deleteControl,
      eventsV1Form_universal_d_DeleteControlIdentifiers as DeleteControlIdentifiers,
      eventsV1Form_universal_d_updateMessages as updateMessages,
      eventsV1Form_universal_d_UpdateMessagesOptions as UpdateMessagesOptions,
      eventsV1Form_universal_d_publishDraft as publishDraft,
      eventsV1Form_universal_d_discardDraft as discardDraft,
    };
  }
  
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface Rsvp {
      /** RSVP ID. */
      _id?: string;
      /** Event ID. */
      eventId?: string;
      /** Contact ID associated with this RSVP. */
      contactId?: string;
      /** Member ID associated with this RSVP. */
      memberId?: string;
      /** RSVP created timestamp. */
      created?: Date;
      /** RSVP modified timestamp. */
      modified?: Date;
      /** First name. */
      firstName?: string;
      /** Last name. */
      lastName?: string;
      /** Guest email. */
      email?: string;
      /** RSVP form response. */
      rsvpForm?: FormResponse;
      /** RSVP response status. */
      status?: RsvpStatus;
      /** Total number of attendees. */
      totalGuests?: number;
      /** List of guests. */
      guests?: Guest[];
      /** Whether RSVP is anonymized by GDPR delete. */
      anonymized?: boolean;
      /**
       * Language in which Rsvp was created.
       * @internal
       * @readonly
       */
      language?: string | null;
      /**
       * Locale in which Rsvp was created.
       * @internal
       * @readonly
       */
      locale?: string | null;
  }
  interface FormResponse {
      inputValues?: InputValue[];
  }
  interface InputValue {
      inputName?: string;
      value?: string;
      values?: string[];
      /**
       * Int or floating point number value.
       * @internal
       */
      number?: number | null;
      /**
       * Date/time value.
       * @internal
       */
      dateTime?: Date;
      /**
       * Address type value.
       * @internal
       */
      address?: FormattedAddress;
  }
  interface FormattedAddress {
      /** One line address representation. */
      formatted?: string;
      /** Address components (optional). */
      address?: Address;
  }
  /** Physical address */
  interface Address extends AddressStreetOneOf {
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
  interface AddressStreetOneOf {
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
  enum RsvpStatus {
      YES = "YES",
      NO = "NO",
      WAITING = "WAITING"
  }
  interface Guest {
      /** Index in the RSVP guest list. */
      index?: number;
      /** Guest full name. */
      fullName?: string;
      /** Guest check-in. */
      checkIn?: CheckIn;
      /** Unique guest ID per RSVP. */
      _id?: number;
  }
  interface CheckIn {
      /** Time of check-in */
      created?: Date;
  }
  interface ListRsvpRequest {
      /** Number of items to skip. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      offset?: number;
      /** Number of items to load. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      limit?: number;
      /** Controls which data is returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_rsvp-fieldset). */
      fieldset?: RsvpFieldset[];
      /** Event ID. */
      eventId?: string[];
      /** RSVP ID. */
      rsvpId?: string[];
      /** RSVP status. */
      status?: RsvpStatus[];
      /** Site member ID. */
      memberId?: string[];
      /**
       * Deprecated: use tag = MEMBER
       * @internal
       */
      membersOnly?: boolean;
      /**
       * Facet counts to include in the response.
       * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-rsvps).
       */
      facet?: string[];
      /** Textual search filter - search is performed on "full_name" and "email". */
      searchPhrase?: string;
      /** Event creator id filter, by default any. */
      eventCreatorId?: string[];
      /**
       * Sort order, defaults to `"created:asc"`.
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-rsvps).
       */
      sort?: string;
      /** Contact ID. */
      contactId?: string[];
      /** RSVP tag */
      tag?: RsvpTag[];
  }
  enum RsvpFieldset {
      /** Include RSVP details: created, modified, first_name, last_name, etc. */
      DETAILS = "DETAILS",
      /** Include rsvp_form. */
      FORM = "FORM",
      /** Include RSVP email. */
      CONTACT_DETAILS = "CONTACT_DETAILS"
  }
  enum RsvpTag {
      /** Return only rsvps with all guests checked-in */
      FULLY_CHECKED_IN = "FULLY_CHECKED_IN",
      /** Return only rsvps with not all guests checked-in */
      NOT_FULLY_CHECKED_IN = "NOT_FULLY_CHECKED_IN",
      /** Return only member rsvp */
      MEMBER = "MEMBER"
  }
  interface ListRsvpResponse {
      /** Total RSVPs matching the given filters. */
      total?: number;
      /** Offset. */
      offset?: number;
      /** Limit. */
      limit?: number;
      /** RSVP list. */
      rsvps?: Rsvp[];
      /** Facet query result. */
      facets?: Record<string, FacetCounts>;
      /** Rsvp data enriched facets. */
      rsvpFacets?: RsvpFacets;
  }
  interface FacetCounts {
      /** Facet counts aggregated per value */
      counts?: Record<string, number>;
  }
  interface RsvpFacets {
      /** Filter facets. */
      facets?: Record<string, RsvpFacetCounts>;
  }
  interface RsvpFacetCounts {
      /** Facet totals, aggregated per filter. */
      counts?: Record<string, Counts>;
  }
  interface Counts {
      /** Number of RSVPs. */
      count?: number;
      /** Number of guests within RSVPs. */
      guests?: number;
      /** Number of guests who have checked-in. */
      guestsCheckIn?: number;
  }
  interface QueryRsvpRequest {
      /** Offset. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      offset?: number;
      /** Limit. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      limit?: number;
      /** Control which data is returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_rsvp-fieldset). */
      fieldset?: RsvpFieldset[];
      /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-rsvps). */
      filter?: Record<string, any> | null;
      /** Site member ID. */
      memberId?: string[];
      /**
       * Deprecated: use tag = MEMBER
       * @internal
       */
      membersOnly?: boolean;
      /**
       * Filter facets to include in the response.
       * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-rsvps).
       */
      facet?: string[];
      /** Textual search filter - search is performed on "guests.full_name". */
      searchPhrase?: string;
      /** Event creator ID. */
      eventCreatorId?: string[];
      /**
       * Sort order, defaults to `"created:asc"`.
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-rsvps).
       */
      sort?: string;
      /** Contact ID. */
      contactId?: string[];
      /** RSVP tag */
      tag?: RsvpTag[];
  }
  interface QueryRsvpResponse {
      /** Total RSVPs matching the given filters. */
      total?: number;
      /** Offset. */
      offset?: number;
      /** Limit. */
      limit?: number;
      /** RSVP list. */
      rsvps?: Rsvp[];
      /** Facet query result. */
      facets?: Record<string, FacetCounts>;
      /** Rsvp data enriched facets. */
      rsvpFacets?: RsvpFacets;
  }
  interface GetRsvpRequest {
      /** Event ID. */
      eventId?: string;
      /** RSVP ID. */
      rsvpId: string;
      /** Controls which data is returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_rsvp-fieldset). */
      fieldset?: RsvpFieldset[];
  }
  interface GetRsvpResponse {
      /** RSVP. */
      rsvp?: Rsvp;
  }
  interface CreateRsvpRequest {
      /** Event ID. */
      eventId?: string;
      /** RSVP form response. */
      form?: FormResponse;
      /** RSVP status. */
      status?: RsvpStatus;
      /** Member ID of the RSVP. */
      memberId?: string | null;
      /**
       * Create RSVP options.
       * WIX_EVENTS.MANAGE_RSVP permission is required.
       */
      options?: ModificationOptions;
  }
  interface ModificationOptions {
      /** Whether to ignore notification settings (when hen true, no notifications to contact or user are sent). */
      silent?: boolean;
      /** Whether to create/update regardless of event guest limit. */
      ignoreLimits?: boolean;
      /** Whether to ignore the form validation. */
      ignoreFormValidation?: boolean;
  }
  interface CreateRsvpResponse {
      /** Created RSVP. */
      rsvp?: Rsvp;
      /** "Add to calendar" links. */
      calendarLinks?: CalendarLinks;
  }
  interface CalendarLinks {
      /** "Add to Google calendar" URL. */
      google?: string;
      /** "Download ICS calendar file" URL. */
      ics?: string;
  }
  interface RsvpCreated {
      /** RSVP created timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Site language when RSVP created */
      language?: string | null;
      /** Notifications silenced for this domain event. */
      silent?: boolean | null;
      /**
       * Locale in which Rsvp was created.
       * @internal
       */
      locale?: string | null;
      /** Event ID. */
      eventId?: string;
      /** RSVP ID. */
      rsvpId?: string;
      /** Contact ID associated with this RSVP. */
      contactId?: string;
      /** Member ID associated with this RSVP. */
      memberId?: string | null;
      /** Guest first name. */
      firstName?: string;
      /** Guest last name. */
      lastName?: string;
      /** Guest email. */
      email?: string;
      /** RSVP form response. */
      rsvpForm?: FormResponse;
      /** RSVP response status. */
      status?: RsvpStatus;
      /** List of all guests. */
      guests?: Guest[];
      /** URL and password to online conference */
      onlineConferencingLogin?: OnlineConferencingLogin;
  }
  interface OnlineConferencingLogin {
      /**
       * Link URL to the online conference.
       * @readonly
       */
      link?: string;
      /**
       * Password for the online conference.
       * @readonly
       */
      password?: string | null;
  }
  interface UpdateRsvpRequest {
      /** Event ID. */
      eventId: string;
      /** RSVP ID. */
      rsvpId: string;
      /**
       * Set of field paths, specifying which parts of RSVP to update.
       * @internal
       */
      fields: string[];
      /** RSVP form response. */
      rsvpForm?: FormResponse;
      /** RSVP response status. */
      status?: RsvpStatus;
      /**
       * Update RSVP options.
       * WIX_EVENTS.MANAGE_RSVP permission is required.
       */
      options?: ModificationOptions;
  }
  interface UpdateRsvpResponse {
      /** Updated RSVP. */
      rsvp?: Rsvp;
  }
  interface RsvpUpdated {
      /** RSVP updated timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Site language when RSVP created */
      language?: string | null;
      /** Locale in which Rsvp was created. */
      locale?: string | null;
      /** Event ID. */
      eventId?: string;
      /** RSVP ID. */
      rsvpId?: string;
      /** Contact ID associated with this RSVP. */
      contactId?: string;
      /** Member ID associated with this RSVP. */
      memberId?: string | null;
      /** RSVP created timestamp. */
      created?: Date;
      /** Guest first name. */
      firstName?: string;
      /** Guest last name. */
      lastName?: string;
      /** Guest email. */
      email?: string;
      /** RSVP form response. */
      rsvpForm?: FormResponse;
      /** RSVP response status. */
      status?: RsvpStatus;
      /** List of the guests. */
      guests?: Guest[];
      /** URL and password to online conference */
      onlineConferencingLogin?: OnlineConferencingLogin;
      /** Notifications silenced for this domain event. */
      silent?: boolean | null;
  }
  interface BulkUpdateRsvpRequest {
      /** Event ID. */
      eventId: string;
      /** RSVPs to update. */
      rsvpId?: string[];
      /**
       * Set of fields to update.
       * @internal
       */
      fields?: string[];
      /** New RSVP status. */
      status?: RsvpStatus;
  }
  interface BulkUpdateRsvpResponse {
      /** Updated RSVPs. */
      rsvps?: Rsvp[];
  }
  interface DeleteRsvpRequest {
      /** Event ID. */
      eventId: string;
      /** RSVPs to delete. When not returned, all RSVPs associated with this event are deleted. */
      rsvps?: string[];
  }
  interface DeleteRsvpResponse {
  }
  interface RsvpDeleted {
      /** RSVP deleted timestamp in ISO UTC format. */
      timestamp?: Date;
      /** Event ID. */
      eventId?: string;
      /** RSVP ID. */
      rsvpId?: string;
      /** Contact ID associated with this RSVP. */
      contactId?: string;
      /** Member ID associated with this RSVP. */
      memberId?: string | null;
      /** Whether RSVP was anonymized by GDPR delete. */
      anonymized?: boolean;
  }
  interface CheckInRsvpRequest {
      /** Event ID. */
      eventId: string;
      /** RSVP ID to check-in. */
      rsvpId: string;
      /** Guest IDs to check-in. */
      guestId?: number[];
  }
  interface CheckInRsvpResponse {
      /** Updated RSVP. */
      rsvp?: Rsvp;
  }
  interface DeleteRsvpCheckInRequest {
      /** Event ID. */
      eventId: string;
      /** RSVP ID to delete check-in. */
      rsvpId: string;
      /** Guest IDs to delete check-in. */
      guestId?: number[];
  }
  interface DeleteRsvpCheckInResponse {
      /** Updated RSVP. */
      rsvp?: Rsvp;
  }
  /**
   * Retrieves a list of up to 100 RSVPs, given the provided [paging](https://dev.wix.com/api/rest/getting-started/pagination), [filtering & sorting](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-rsvps).
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function listRsvp(options?: ListRsvpOptions): Promise<ListRsvpResponse>;
  interface ListRsvpOptions {
      /** Number of items to skip. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      offset?: number;
      /** Number of items to load. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      limit?: number;
      /** Controls which data is returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_rsvp-fieldset). */
      fieldset?: RsvpFieldset[];
      /** Event ID. */
      eventId?: string[];
      /** RSVP ID. */
      rsvpId?: string[];
      /** RSVP status. */
      status?: RsvpStatus[];
      /** Site member ID. */
      memberId?: string[];
      /**
       * Deprecated: use tag = MEMBER
       * @internal
       */
      membersOnly?: boolean;
      /**
       * Facet counts to include in the response.
       * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-rsvps).
       */
      facet?: string[];
      /** Textual search filter - search is performed on "full_name" and "email". */
      searchPhrase?: string;
      /** Event creator id filter, by default any. */
      eventCreatorId?: string[];
      /**
       * Sort order, defaults to `"created:asc"`.
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-rsvps).
       */
      sort?: string;
      /** Contact ID. */
      contactId?: string[];
      /** RSVP tag */
      tag?: RsvpTag[];
  }
  /**
   * Retrieves a list of up to 100 RSVPs, supporting [structurized queries](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-rsvps).
   * @public
   * @documentationMaturity preview
   * @adminMethod
   */
  function queryRsvp(options?: QueryRsvpOptions): Promise<QueryRsvpResponse>;
  interface QueryRsvpOptions {
      /** Offset. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      offset?: number;
      /** Limit. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
      limit?: number;
      /** Control which data is returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_rsvp-fieldset). */
      fieldset?: RsvpFieldset[];
      /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-rsvps). */
      filter?: Record<string, any> | null;
      /** Site member ID. */
      memberId?: string[];
      /**
       * Deprecated: use tag = MEMBER
       * @internal
       */
      membersOnly?: boolean;
      /**
       * Filter facets to include in the response.
       * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-rsvps).
       */
      facet?: string[];
      /** Textual search filter - search is performed on "guests.full_name". */
      searchPhrase?: string;
      /** Event creator ID. */
      eventCreatorId?: string[];
      /**
       * Sort order, defaults to `"created:asc"`.
       * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-rsvps).
       */
      sort?: string;
      /** Contact ID. */
      contactId?: string[];
      /** RSVP tag */
      tag?: RsvpTag[];
  }
  /**
   * Retrieves an RSVP.
   * @param rsvpId - RSVP ID.
   * @public
   * @documentationMaturity preview
   * @requiredField rsvpId
   * @adminMethod
   * @returns RSVP.
   */
  function getRsvp(rsvpId: string, options?: GetRsvpOptions): Promise<Rsvp>;
  interface GetRsvpOptions {
      /** Event ID. */
      eventId?: string;
      /** Controls which data is returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_rsvp-fieldset). */
      fieldset?: RsvpFieldset[];
  }
  /**
   * Creates an RSVP, associated with a contact of the site.
   * @public
   * @documentationMaturity preview
   */
  function createRsvp(options?: CreateRsvpOptions): Promise<CreateRsvpResponse>;
  interface CreateRsvpOptions {
      /** Event ID. */
      eventId?: string;
      /** RSVP form response. */
      form?: FormResponse;
      /** RSVP status. */
      status?: RsvpStatus;
      /** Member ID of the RSVP. */
      memberId?: string | null;
      /**
       * Create RSVP options.
       * WIX_EVENTS.MANAGE_RSVP permission is required.
       */
      options?: ModificationOptions;
  }
  /**
   * Updates an RSVP. See [partial updates](https://dev.wix.com/api/wix-events/partial-updates).
   * @param rsvpId - RSVP ID.
   * @param eventId - Event ID.
   * @public
   * @documentationMaturity preview
   * @requiredField eventId
   * @requiredField rsvpId
   * @adminMethod
   */
  function updateRsvp(rsvpId: string, eventId: string, options?: UpdateRsvpOptions): Promise<UpdateRsvpResponse>;
  interface UpdateRsvpOptions {
      /**
       * Set of field paths, specifying which parts of RSVP to update.
       * @internal
       */
      fields: string[];
      /** RSVP form response. */
      rsvpForm?: FormResponse;
      /** RSVP response status. */
      status?: RsvpStatus;
      /**
       * Update RSVP options.
       * WIX_EVENTS.MANAGE_RSVP permission is required.
       */
      options?: ModificationOptions;
  }
  /**
   * Updates multiple RSVPs - status only.
   * @param eventId - Event ID.
   * @public
   * @documentationMaturity preview
   * @requiredField eventId
   * @adminMethod
   */
  function bulkUpdateRsvp(eventId: string, options?: BulkUpdateRsvpOptions): Promise<BulkUpdateRsvpResponse>;
  interface BulkUpdateRsvpOptions {
      /** RSVPs to update. */
      rsvpId?: string[];
      /**
       * Set of fields to update.
       * @internal
       */
      fields?: string[];
      /** New RSVP status. */
      status?: RsvpStatus;
  }
  /**
   * Deletes an RSVP.
   * @param eventId - Event ID.
   * @public
   * @documentationMaturity preview
   * @requiredField eventId
   * @adminMethod
   */
  function deleteRsvp(eventId: string, options?: DeleteRsvpOptions): Promise<void>;
  interface DeleteRsvpOptions {
      /** RSVPs to delete. When not returned, all RSVPs associated with this event are deleted. */
      rsvps?: string[];
  }
  /**
   * Checks-in an RSVP.
   * @param eventId - Event ID.
   * @public
   * @documentationMaturity preview
   * @requiredField eventId
   * @requiredField options.rsvpId
   * @adminMethod
   */
  function checkInRsvp(eventId: string, options?: CheckInRsvpOptions): Promise<CheckInRsvpResponse>;
  interface CheckInRsvpOptions {
      /** RSVP ID to check-in. */
      rsvpId: string;
      /** Guest IDs to check-in. */
      guestId?: number[];
  }
  /**
   * Deletes an RSVP check-in.
   * @param eventId - Event ID.
   * @public
   * @documentationMaturity preview
   * @requiredField eventId
   * @requiredField options.rsvpId
   * @adminMethod
   */
  function deleteRsvpCheckIn(eventId: string, options?: DeleteRsvpCheckInOptions): Promise<DeleteRsvpCheckInResponse>;
  interface DeleteRsvpCheckInOptions {
      /** RSVP ID to delete check-in. */
      rsvpId: string;
      /** Guest IDs to delete check-in. */
      guestId?: number[];
  }
  
  const eventsV1Rsvp_universal_d___debug: typeof __debug;
  type eventsV1Rsvp_universal_d_Rsvp = Rsvp;
  type eventsV1Rsvp_universal_d_FormResponse = FormResponse;
  type eventsV1Rsvp_universal_d_InputValue = InputValue;
  type eventsV1Rsvp_universal_d_FormattedAddress = FormattedAddress;
  type eventsV1Rsvp_universal_d_Address = Address;
  type eventsV1Rsvp_universal_d_AddressStreetOneOf = AddressStreetOneOf;
  type eventsV1Rsvp_universal_d_StreetAddress = StreetAddress;
  type eventsV1Rsvp_universal_d_AddressLocation = AddressLocation;
  type eventsV1Rsvp_universal_d_Subdivision = Subdivision;
  type eventsV1Rsvp_universal_d_SubdivisionType = SubdivisionType;
  const eventsV1Rsvp_universal_d_SubdivisionType: typeof SubdivisionType;
  type eventsV1Rsvp_universal_d_RsvpStatus = RsvpStatus;
  const eventsV1Rsvp_universal_d_RsvpStatus: typeof RsvpStatus;
  type eventsV1Rsvp_universal_d_Guest = Guest;
  type eventsV1Rsvp_universal_d_CheckIn = CheckIn;
  type eventsV1Rsvp_universal_d_ListRsvpRequest = ListRsvpRequest;
  type eventsV1Rsvp_universal_d_RsvpFieldset = RsvpFieldset;
  const eventsV1Rsvp_universal_d_RsvpFieldset: typeof RsvpFieldset;
  type eventsV1Rsvp_universal_d_RsvpTag = RsvpTag;
  const eventsV1Rsvp_universal_d_RsvpTag: typeof RsvpTag;
  type eventsV1Rsvp_universal_d_ListRsvpResponse = ListRsvpResponse;
  type eventsV1Rsvp_universal_d_FacetCounts = FacetCounts;
  type eventsV1Rsvp_universal_d_RsvpFacets = RsvpFacets;
  type eventsV1Rsvp_universal_d_RsvpFacetCounts = RsvpFacetCounts;
  type eventsV1Rsvp_universal_d_Counts = Counts;
  type eventsV1Rsvp_universal_d_QueryRsvpRequest = QueryRsvpRequest;
  type eventsV1Rsvp_universal_d_QueryRsvpResponse = QueryRsvpResponse;
  type eventsV1Rsvp_universal_d_GetRsvpRequest = GetRsvpRequest;
  type eventsV1Rsvp_universal_d_GetRsvpResponse = GetRsvpResponse;
  type eventsV1Rsvp_universal_d_CreateRsvpRequest = CreateRsvpRequest;
  type eventsV1Rsvp_universal_d_ModificationOptions = ModificationOptions;
  type eventsV1Rsvp_universal_d_CreateRsvpResponse = CreateRsvpResponse;
  type eventsV1Rsvp_universal_d_CalendarLinks = CalendarLinks;
  type eventsV1Rsvp_universal_d_RsvpCreated = RsvpCreated;
  type eventsV1Rsvp_universal_d_OnlineConferencingLogin = OnlineConferencingLogin;
  type eventsV1Rsvp_universal_d_UpdateRsvpRequest = UpdateRsvpRequest;
  type eventsV1Rsvp_universal_d_UpdateRsvpResponse = UpdateRsvpResponse;
  type eventsV1Rsvp_universal_d_RsvpUpdated = RsvpUpdated;
  type eventsV1Rsvp_universal_d_BulkUpdateRsvpRequest = BulkUpdateRsvpRequest;
  type eventsV1Rsvp_universal_d_BulkUpdateRsvpResponse = BulkUpdateRsvpResponse;
  type eventsV1Rsvp_universal_d_DeleteRsvpRequest = DeleteRsvpRequest;
  type eventsV1Rsvp_universal_d_DeleteRsvpResponse = DeleteRsvpResponse;
  type eventsV1Rsvp_universal_d_RsvpDeleted = RsvpDeleted;
  type eventsV1Rsvp_universal_d_CheckInRsvpRequest = CheckInRsvpRequest;
  type eventsV1Rsvp_universal_d_CheckInRsvpResponse = CheckInRsvpResponse;
  type eventsV1Rsvp_universal_d_DeleteRsvpCheckInRequest = DeleteRsvpCheckInRequest;
  type eventsV1Rsvp_universal_d_DeleteRsvpCheckInResponse = DeleteRsvpCheckInResponse;
  const eventsV1Rsvp_universal_d_listRsvp: typeof listRsvp;
  type eventsV1Rsvp_universal_d_ListRsvpOptions = ListRsvpOptions;
  const eventsV1Rsvp_universal_d_queryRsvp: typeof queryRsvp;
  type eventsV1Rsvp_universal_d_QueryRsvpOptions = QueryRsvpOptions;
  const eventsV1Rsvp_universal_d_getRsvp: typeof getRsvp;
  type eventsV1Rsvp_universal_d_GetRsvpOptions = GetRsvpOptions;
  const eventsV1Rsvp_universal_d_createRsvp: typeof createRsvp;
  type eventsV1Rsvp_universal_d_CreateRsvpOptions = CreateRsvpOptions;
  const eventsV1Rsvp_universal_d_updateRsvp: typeof updateRsvp;
  type eventsV1Rsvp_universal_d_UpdateRsvpOptions = UpdateRsvpOptions;
  const eventsV1Rsvp_universal_d_bulkUpdateRsvp: typeof bulkUpdateRsvp;
  type eventsV1Rsvp_universal_d_BulkUpdateRsvpOptions = BulkUpdateRsvpOptions;
  const eventsV1Rsvp_universal_d_deleteRsvp: typeof deleteRsvp;
  type eventsV1Rsvp_universal_d_DeleteRsvpOptions = DeleteRsvpOptions;
  const eventsV1Rsvp_universal_d_checkInRsvp: typeof checkInRsvp;
  type eventsV1Rsvp_universal_d_CheckInRsvpOptions = CheckInRsvpOptions;
  const eventsV1Rsvp_universal_d_deleteRsvpCheckIn: typeof deleteRsvpCheckIn;
  type eventsV1Rsvp_universal_d_DeleteRsvpCheckInOptions = DeleteRsvpCheckInOptions;
  namespace eventsV1Rsvp_universal_d {
    export {
      eventsV1Rsvp_universal_d___debug as __debug,
      eventsV1Rsvp_universal_d_Rsvp as Rsvp,
      eventsV1Rsvp_universal_d_FormResponse as FormResponse,
      eventsV1Rsvp_universal_d_InputValue as InputValue,
      eventsV1Rsvp_universal_d_FormattedAddress as FormattedAddress,
      eventsV1Rsvp_universal_d_Address as Address,
      eventsV1Rsvp_universal_d_AddressStreetOneOf as AddressStreetOneOf,
      eventsV1Rsvp_universal_d_StreetAddress as StreetAddress,
      eventsV1Rsvp_universal_d_AddressLocation as AddressLocation,
      eventsV1Rsvp_universal_d_Subdivision as Subdivision,
      eventsV1Rsvp_universal_d_SubdivisionType as SubdivisionType,
      eventsV1Rsvp_universal_d_RsvpStatus as RsvpStatus,
      eventsV1Rsvp_universal_d_Guest as Guest,
      eventsV1Rsvp_universal_d_CheckIn as CheckIn,
      eventsV1Rsvp_universal_d_ListRsvpRequest as ListRsvpRequest,
      eventsV1Rsvp_universal_d_RsvpFieldset as RsvpFieldset,
      eventsV1Rsvp_universal_d_RsvpTag as RsvpTag,
      eventsV1Rsvp_universal_d_ListRsvpResponse as ListRsvpResponse,
      eventsV1Rsvp_universal_d_FacetCounts as FacetCounts,
      eventsV1Rsvp_universal_d_RsvpFacets as RsvpFacets,
      eventsV1Rsvp_universal_d_RsvpFacetCounts as RsvpFacetCounts,
      eventsV1Rsvp_universal_d_Counts as Counts,
      eventsV1Rsvp_universal_d_QueryRsvpRequest as QueryRsvpRequest,
      eventsV1Rsvp_universal_d_QueryRsvpResponse as QueryRsvpResponse,
      eventsV1Rsvp_universal_d_GetRsvpRequest as GetRsvpRequest,
      eventsV1Rsvp_universal_d_GetRsvpResponse as GetRsvpResponse,
      eventsV1Rsvp_universal_d_CreateRsvpRequest as CreateRsvpRequest,
      eventsV1Rsvp_universal_d_ModificationOptions as ModificationOptions,
      eventsV1Rsvp_universal_d_CreateRsvpResponse as CreateRsvpResponse,
      eventsV1Rsvp_universal_d_CalendarLinks as CalendarLinks,
      eventsV1Rsvp_universal_d_RsvpCreated as RsvpCreated,
      eventsV1Rsvp_universal_d_OnlineConferencingLogin as OnlineConferencingLogin,
      eventsV1Rsvp_universal_d_UpdateRsvpRequest as UpdateRsvpRequest,
      eventsV1Rsvp_universal_d_UpdateRsvpResponse as UpdateRsvpResponse,
      eventsV1Rsvp_universal_d_RsvpUpdated as RsvpUpdated,
      eventsV1Rsvp_universal_d_BulkUpdateRsvpRequest as BulkUpdateRsvpRequest,
      eventsV1Rsvp_universal_d_BulkUpdateRsvpResponse as BulkUpdateRsvpResponse,
      eventsV1Rsvp_universal_d_DeleteRsvpRequest as DeleteRsvpRequest,
      eventsV1Rsvp_universal_d_DeleteRsvpResponse as DeleteRsvpResponse,
      eventsV1Rsvp_universal_d_RsvpDeleted as RsvpDeleted,
      eventsV1Rsvp_universal_d_CheckInRsvpRequest as CheckInRsvpRequest,
      eventsV1Rsvp_universal_d_CheckInRsvpResponse as CheckInRsvpResponse,
      eventsV1Rsvp_universal_d_DeleteRsvpCheckInRequest as DeleteRsvpCheckInRequest,
      eventsV1Rsvp_universal_d_DeleteRsvpCheckInResponse as DeleteRsvpCheckInResponse,
      eventsV1Rsvp_universal_d_listRsvp as listRsvp,
      eventsV1Rsvp_universal_d_ListRsvpOptions as ListRsvpOptions,
      eventsV1Rsvp_universal_d_queryRsvp as queryRsvp,
      eventsV1Rsvp_universal_d_QueryRsvpOptions as QueryRsvpOptions,
      eventsV1Rsvp_universal_d_getRsvp as getRsvp,
      eventsV1Rsvp_universal_d_GetRsvpOptions as GetRsvpOptions,
      eventsV1Rsvp_universal_d_createRsvp as createRsvp,
      eventsV1Rsvp_universal_d_CreateRsvpOptions as CreateRsvpOptions,
      eventsV1Rsvp_universal_d_updateRsvp as updateRsvp,
      eventsV1Rsvp_universal_d_UpdateRsvpOptions as UpdateRsvpOptions,
      eventsV1Rsvp_universal_d_bulkUpdateRsvp as bulkUpdateRsvp,
      eventsV1Rsvp_universal_d_BulkUpdateRsvpOptions as BulkUpdateRsvpOptions,
      eventsV1Rsvp_universal_d_deleteRsvp as deleteRsvp,
      eventsV1Rsvp_universal_d_DeleteRsvpOptions as DeleteRsvpOptions,
      eventsV1Rsvp_universal_d_checkInRsvp as checkInRsvp,
      eventsV1Rsvp_universal_d_CheckInRsvpOptions as CheckInRsvpOptions,
      eventsV1Rsvp_universal_d_deleteRsvpCheckIn as deleteRsvpCheckIn,
      eventsV1Rsvp_universal_d_DeleteRsvpCheckInOptions as DeleteRsvpCheckInOptions,
    };
  }
  
  export { eventsV1Category_universal_d as categories, eventsV1Form_universal_d as forms, eventsV1Rsvp_universal_d as rsvp, eventsScheduleV1ScheduleItemSchedule_universal_d as schedule, eventsScheduleV1ScheduleItemScheduleBookmarks_universal_d as scheduleBookmarks, eventsV1Event_universal_d as wixEvents };
}
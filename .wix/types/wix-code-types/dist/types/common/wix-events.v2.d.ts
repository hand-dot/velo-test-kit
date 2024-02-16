declare module "wix-events.v2" {
    const __debug$c: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface Event$1 {
        /**
         * Event ID.
         * @readonly
         */
        _id?: string;
        /** Event location. */
        location?: Location$3;
        /** Event time management. */
        scheduling?: Scheduling$1;
        title?: string | null;
        description?: string | null;
        about?: string | null;
        /** Main event image. */
        mainImage?: string;
        /**
         * Unique identifier of the event page. The naming is the same as the event title written in kebab case. For example, if your event title is "Leather Crafting 101", then the slug is "leather-crafting-101".
         * @readonly
         */
        slug?: string;
        /** Language code in [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format. Used when the event ticket should be translated into another language. Default value is `en`. */
        languageCode?: string;
        /**
         * Date and time when the event was created in `yyyy-mm-ddThh:mm:sssZ` format.
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Date and time when the event was updated in `yyyy-mm-ddThh:mm:sssZ` format.
         * @readonly
         */
        modifiedDate?: Date;
        /**
         * Event status.
         * @readonly
         */
        status?: EventStatus$2;
        /** RSVP or ticketing registration details. */
        registration?: Registration$1;
        /** URLs that allow you to add an event to the Google calendar, or to download an [ICS calendar](https://icscalendar.com/) file. */
        calendarLinks?: CalendarLinks$4;
        /** Event page URL components. */
        eventPageUrl?: string;
        /** Event registration form. */
        form?: Form$2;
        /** Summary of RSVP or ticket sales. */
        dashboard?: Dashboard$4;
        /**
         * Instance ID of the site where event is hosted.
         * @readonly
         */
        instanceId?: string;
        /** Guest list configuration. */
        guestListConfig?: GuestListConfig$1;
        /**
         * ID of the user who created the event.
         * @readonly
         */
        userId?: string;
        /**
         * Event discussion feed. For internal use.
         * @internal
         */
        feed?: Feed$1;
        /** Online conferencing details. */
        onlineConferencing?: OnlineConferencing$1;
        /** SEO settings. */
        seoSettings?: SeoSettings$1;
        /** Assigned contacts label key. */
        assignedContactLabel?: string | null;
        /** Event schedule details. */
        agenda?: Agenda$1;
        /** Event categories. */
        categories?: Category$2[];
    }
    interface Location$3 {
        name?: string | null;
        /** Whether the event is online or on-site. */
        type?: LocationType$3;
        /** Exact location address. */
        address?: CommonAddress;
        /** Whether the event location is TBD. */
        locationTbd?: boolean | null;
    }
    enum LocationType$3 {
        VENUE = "VENUE",
        ONLINE = "ONLINE"
    }
    /** Physical address */
    interface CommonAddress extends CommonAddressStreetOneOf {
        /** Street name and number. */
        streetAddress?: CommonStreetAddress;
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
    }
    /** @oneof */
    interface CommonAddressStreetOneOf {
        /** Street name and number. */
        streetAddress?: CommonStreetAddress;
        /** Main address line, usually street and number as free text. */
        addressLine?: string | null;
    }
    interface CommonStreetAddress {
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
    interface CommonAddressLocation {
        /** Address latitude. */
        latitude?: number | null;
        /** Address longitude. */
        longitude?: number | null;
    }
    interface CommonSubdivision {
        /** Short subdivision code. */
        code?: string;
        /** Subdivision full name. */
        name?: string;
        /**
         * Subdivision level
         * @internal
         */
        type?: SubdivisionSubdivisionType;
        /**
         * Free text description of subdivision type.
         * @internal
         */
        typeInfo?: string | null;
    }
    enum SubdivisionSubdivisionType {
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
    interface Scheduling$1 {
        /** Schedule configuration. */
        config?: ScheduleConfig$3;
        /**
         * Formatted schedule representation.
         * @readonly
         */
        formatted?: string;
        /**
         * Formatted start date of the event. Empty for TBD schedules.
         * @readonly
         */
        startDateFormatted?: string;
        /**
         * Formatted start time of the event. Empty for TBD schedules.
         * @readonly
         */
        startTimeFormatted?: string;
    }
    interface ScheduleConfig$3 {
        /** Whether the event date and time is TBD. */
        scheduleTbd?: boolean;
        scheduleTbdMessage?: string | null;
        /** Event start date in `yyyy-mm-ddThh:mm:sssZ` format. */
        startDate?: Date;
        /** Event end date in `yyyy-mm-ddThh:mm:sssZ` format. */
        endDate?: Date;
        /** Event time zone ID in the [TZ database](https://www.iana.org/time-zones) format. */
        timeZoneId?: string | null;
        /** Whether end date is hidden in the formatted schedule. */
        hideEndDate?: boolean;
        /** Whether time zone is displayed in the formatted schedule. */
        showTimeZone?: boolean;
        /**
         * Repeating event status.
         * @readonly
         */
        recurrenceStatus?: Status$3;
        /** Event repetitions. */
        recurringEvents?: Recurrences$3;
    }
    enum Status$3 {
        /** Default value. This value is unused. */
        UNKNOWN_STATUS = "UNKNOWN_STATUS",
        /** Event occurs only once. */
        ONE_TIME = "ONE_TIME",
        /** Event is repeating and has a list of scheduled repetitions. */
        RECURRING = "RECURRING",
        /** An upcoming event from the list of repetitions. */
        RECURRING_UPCOMING = "RECURRING_UPCOMING",
        /** Latest ended event from the list of repetitions. */
        RECURRING_LAST_ENDED = "RECURRING_LAST_ENDED",
        /** Latest cancelled event from the list of repetitions. */
        RECURRING_LAST_CANCELED = "RECURRING_LAST_CANCELED"
    }
    interface Recurrences$3 {
        individualEventDates?: Occurrence$3[];
        /**
         * Recurring event category ID.
         * @readonly
         */
        categoryId?: string | null;
    }
    interface Occurrence$3 {
        /** Event start date in `yyyy-mm-ddThh:mm:sssZ` format. */
        startDate?: Date;
        /** Event end date in `yyyy-mm-ddThh:mm:sssZ` format. */
        endDate?: Date;
        /** Event time zone ID in the [TZ database](https://www.iana.org/time-zones) format. */
        timeZoneId?: string | null;
        /** Whether the time zone is displayed in a formatted schedule. */
        showTimeZone?: boolean;
    }
    enum EventStatus$2 {
        /** Default value. This value is unused */
        UNKNOWN_EVENT_STATUS = "UNKNOWN_EVENT_STATUS",
        /** Event is public and scheduled to start */
        SCHEDULED = "SCHEDULED",
        /** Event has started */
        STARTED = "STARTED",
        /** Event has ended */
        ENDED = "ENDED",
        /** Event is canceled */
        CANCELED = "CANCELED",
        /** Event is not public */
        DRAFT = "DRAFT"
    }
    interface Registration$1 {
        /**
         * Registration type.
         * @readonly
         */
        type?: RegistrationType;
        /**
         * Registration status.
         * @readonly
         */
        status?: RegistrationStatus$1;
        /** RSVP registration details. */
        rsvpRegistration?: RsvpRegistration;
        /** Ticketing registration details. */
        ticketingRegistration?: TicketingRegistration;
        /** External registration details. */
        externalRegistration?: ExternalRegistration;
        /** Types of guests allowed to register. */
        allowedGuestTypes?: GuestType$1;
        /** Initial event type which was set when creating an event. */
        initialType?: RegistrationType;
        /** Whether the registration is paused. */
        pausedRegistration?: boolean;
        /** Whether the registration is disabled. */
        disabledRegistration?: boolean;
    }
    enum RegistrationType {
        /** Type not available for this request fieldset */
        UNKNOWN_REGISTRATION_TYPE = "UNKNOWN_REGISTRATION_TYPE",
        /** Registration via RSVP */
        RSVP = "RSVP",
        /** Registration via ticket purchase */
        TICKETING = "TICKETING",
        /** External registration */
        EXTERNAL = "EXTERNAL",
        /** Registration not available */
        NONE = "NONE"
    }
    enum RegistrationStatus$1 {
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
    interface RsvpRegistration {
        /** Available answers for registration to an event. */
        responseType?: ResponseType;
        /** How many guests can RSVP to an event. */
        limit?: number | null;
        /** Whether a waitlist is opened when the total guest limit is reached. Guests can RSVP to an event and they'll be put in the waitlist with the `WAITING RSVP` status. */
        waitlistEnabled?: boolean;
        /** Registration start date in `yyyy-mm-ddThh:mm:sssZ` format. */
        startDate?: Date;
        /** Registration end date in `yyyy-mm-ddThh:mm:sssZ` format. */
        endDate?: Date;
    }
    enum ResponseType {
        /** Only **Yes** answer is available for the registration. */
        YES_ONLY = "YES_ONLY",
        /** *Yes** and **No** answers are available for the registration. */
        YES_AND_NO = "YES_AND_NO"
    }
    interface TicketingRegistration {
        /** Whether the registration form must be filled out separately for each ticket. */
        guestsAssignedSeparately?: boolean;
        ticketLimitPerOrder?: number;
        /**
         * App Id for external ticket stock management.
         * By default tickets stock is defined in TicketDefinition object.
         * If defined then limitation from TicketDefinition is ignored.
         * @internal
         */
        stockManagerAppId?: string | null;
        /** Ticket price currency. */
        currency?: string | null;
        /**
         * Lowest ticket price.
         * @readonly
         */
        lowestPrice?: Money$6;
        /**
         * Highest ticket price.
         * @readonly
         */
        highestPrice?: Money$6;
        /**
         * Whether all tickets are sold for the event.
         * @readonly
         */
        soldOut?: boolean | null;
        /** Tax application settings. */
        taxConfig?: TaxConfig$1;
    }
    /**
     * Money.
     * Default format to use. Sufficiently compliant with majority of standards: w3c, ISO 4217, ISO 20022, ISO 8583:2003.
     */
    interface Money$6 {
        /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
        value?: string;
        /** Currency code. Must be valid ISO 4217 currency code (e.g., USD). */
        currency?: string;
        /**
         * Monetary amount. Decimal string in local format (e.g., 1 000,30). Optionally, a single (-), to indicate that the amount is negative.
         * @readonly
         */
        formattedValue?: string | null;
    }
    interface TaxConfig$1 {
        /** Tax application settings. */
        type?: TaxType$4;
        name?: string | null;
        rate?: string | null;
        /** Apply tax to donations. */
        applyToDonations?: boolean | null;
    }
    enum TaxType$4 {
        /** Tax is included in the ticket price */
        INCLUDED = "INCLUDED",
        /** Tax is added to the order at the checkout */
        ADDED = "ADDED",
        /** Tax is added to the final total at the checkout */
        ADDED_AT_CHECKOUT = "ADDED_AT_CHECKOUT"
    }
    interface ExternalRegistration {
        /** External event registration URL. */
        externalRegistrationUrl?: string | null;
    }
    enum GuestType$1 {
        /** Site visitor or member */
        VISITOR_OR_MEMBER = "VISITOR_OR_MEMBER",
        /** Site member */
        MEMBER = "MEMBER"
    }
    interface CalendarLinks$4 {
        /**
         * "Add to Google calendar" URL.
         * @readonly
         */
        google?: string;
        /**
         * "Download ICS calendar file" URL.
         * @readonly
         */
        ics?: string;
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
    interface Form$2 {
        /** Nested fields as an ordered list. */
        controls?: InputControl$2[];
        /** Set of configured form messages. */
        messages?: FormMessages$2;
    }
    /**
     * A block of nested fields.
     * Used to aggregate similar inputs like First Name and Last Name.
     */
    interface InputControl$2 {
        /** Field control type. */
        type?: InputControlType$2;
        /** Whether control is mandatory (such as name & email). When true, only label can be changed. */
        system?: boolean;
        /** Deprecated: Use `id`. */
        name?: string;
        /** Child inputs. */
        inputs?: Input$2[];
        /** Deprecated: use `inputs.label`. */
        label?: string;
        /** Field controls are sorted by this value in ascending order. */
        orderIndex?: number;
        /** Unique control ID. */
        _id?: string;
    }
    enum InputControlType$2 {
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
    interface Input$2 {
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
        type?: ValueType$2;
        /**
         * A maximum accepted values for array input.
         * Only applicable for inputs of valueType: TEXT_ARRAY.
         */
        maxSize?: number | null;
        /**
         * Preselected option.
         * Currently only applicable for dropdown.
         */
        defaultOptionSelection?: OptionSelection$2;
        /**
         * Additional labels for multi-valued fields such as address.
         * @readonly
         */
        labels?: Label$2[];
    }
    enum ValueType$2 {
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
    interface OptionSelection$2 extends OptionSelectionSelectedOptionOneOf$2 {
        /** 0-based index from predefined `input.options` which is selected initially. */
        optionIndex?: number;
        /**
         * Placeholder hint describing expected choices (such as "Please select").
         * Considered an empty choice.
         */
        placeholderText?: string;
    }
    /** @oneof */
    interface OptionSelectionSelectedOptionOneOf$2 {
        /** 0-based index from predefined `input.options` which is selected initially. */
        optionIndex?: number;
        /**
         * Placeholder hint describing expected choices (such as "Please select").
         * Considered an empty choice.
         */
        placeholderText?: string;
    }
    interface Label$2 {
        /** Field name. */
        name?: string;
        /** Field label. */
        label?: string;
    }
    /**
     * Defines form messages shown in UI before, during, and after registration flow.
     * It enables configuration of form titles, response labels, "thank you" messages, and call-to-action texts.
     */
    interface FormMessages$2 {
        /** RSVP form messages. */
        rsvp?: RsvpFormMessages$2;
        /** Checkout form messages. */
        checkout?: CheckoutFormMessages$2;
        /** Messages shown when event registration is closed. */
        registrationClosed?: RegistrationClosedMessages$2;
        /** Messages shown when event tickets are unavailable. */
        ticketsUnavailable?: TicketsUnavailableMessages$2;
    }
    interface RsvpFormMessages$2 {
        /** Label text indicating RSVP `YES` response. */
        rsvpYesOption?: string;
        /** Label text indicating RSVP `NO` response. */
        rsvpNoOption?: string;
        /** Messages shown for RSVP = `YES`. */
        positiveMessages?: Positive$2;
        /** Messages shown for RSVP = `WAITING` (when event is full and waitlist is available). */
        waitlistMessages?: Positive$2;
        /** Messages shown for RSVP = `NO`. */
        negativeMessages?: Negative$2;
        /** "Submit form" call-to-action label text. */
        submitActionLabel?: string;
    }
    /** Confirmation messages shown after registration. */
    interface PositiveResponseConfirmation$2 {
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
    interface ResponseConfirmation$2 {
        /** Confirmation message title. */
        title?: string;
        /** "Share event" call-to-action label text. */
        shareActionLabel?: string;
    }
    /** Set of messages shown during registration when RSVP response is positive. */
    interface Positive$2 {
        /** Main form title for positive response. */
        title?: string;
        /** Confirmation messages shown after registration. */
        confirmation?: PositiveResponseConfirmation$2;
    }
    /** A set of messages shown during registration with negative response */
    interface Negative$2 {
        /** Main form title for negative response. */
        title?: string;
        /** Confirmation messages shown after registration. */
        confirmation?: ResponseConfirmation$2;
    }
    interface CheckoutFormMessages$2 {
        /** Main form title for response. */
        title?: string;
        /** Submit form call-to-action label text. */
        submitActionLabel?: string;
    }
    interface RegistrationClosedMessages$2 {
        /** Message shown when event registration is closed. */
        message?: string;
        /** "Explore other events" call-to-action label text. */
        exploreEventsActionLabel?: string;
    }
    interface TicketsUnavailableMessages$2 {
        /** Message shown when event tickets are unavailable. */
        message?: string;
        /** "Explore other events" call-to-action label text. */
        exploreEventsActionLabel?: string;
    }
    interface Dashboard$4 {
        /** RSVP summary of guests. */
        rsvpSummary?: RsvpSummary$1;
        /** Summary of revenue and sold tickets. Archived orders are not included. */
        ticketSummary?: TicketSummary;
    }
    interface EventsMoney {
        /** *Deprecated:** Use `value` instead. */
        amount?: string;
        /** ISO 4217 format of the currency i.e. `USD`. */
        currency?: string;
        /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
        value?: string | null;
    }
    interface RsvpSummary$1 {
        /**
         * Total number of RSVPs.
         * @readonly
         */
        totalCount?: number;
        /**
         * Number of RSVPs with status `YES`.
         * @readonly
         */
        yesCount?: number;
        /**
         * Number of RSVPs with status `NO`.
         * @readonly
         */
        noCount?: number;
        /**
         * Number of RSVPs in a waitlist.
         * @readonly
         */
        waitlistCount?: number;
    }
    interface TicketSummary {
        /**
         * Number of sold tickets.
         * @readonly
         */
        soldTickets?: number;
        /**
         * Total revenue. Taxes and payment provider fees are not deducted.
         * @readonly
         */
        revenue?: EventsMoney;
        /**
         * Whether currency is locked and cannot be changed.
         * @readonly
         */
        currencyLocked?: boolean;
        /**
         * Number of orders placed.
         * @readonly
         */
        totalOrders?: number;
        /**
         * Total balance of confirmed transactions.
         * @readonly
         */
        totalSales?: EventsMoney;
    }
    interface GuestListConfig$1 {
        /** Whether guest list is public for all guests. */
        displayPublicly?: boolean;
    }
    interface Feed$1 {
        /** Event discussion feed token. */
        token?: string;
    }
    interface OnlineConferencing$1 {
        /** Whether online conferencing is enabled. Not applicable for events, where date and time is TBD. When enabled, links to join the conference are generated and provided to guests. */
        enabled?: boolean;
        /** Conference host ID. */
        providerId?: string | null;
        /**
         * Configured conferencing provider name.
         * @internal
         * @readonly
         */
        providerName?: string;
        /** Conference type. */
        conferenceType?: ConferenceType$1;
        /** Online conferencing session information. */
        session?: OnlineConferencingSession$1;
    }
    enum ConferenceType$1 {
        /** Guests can publish and subscribe to video and audio. */
        MEETING = "MEETING",
        /** Guests can only subscribe to video and audio. */
        WEBINAR = "WEBINAR"
    }
    interface OnlineConferencingSession$1 {
        /**
         * Link for the event host to start the online conference session.
         * @readonly
         */
        hostLink?: string;
        /**
         * Link for guests to join the online conference session.
         * @readonly
         */
        guestLink?: string;
        /**
         * Password required to join online conferencing session (when relevant).
         * @readonly
         */
        password?: string | null;
        /**
         * Whether the session was created successfully on the event host side.
         * @readonly
         */
        sessionCreated?: boolean | null;
        /**
         * Unique session ID.
         * @readonly
         */
        sessionId?: string | null;
    }
    interface SeoSettings$1 {
        /** URL slug. */
        slug?: string;
        /** Advanced SEO data. */
        advancedSeoData?: SeoSchema$1;
        /**
         * Whether the slug is hidden from the SEO Site Map.
         * @readonly
         */
        hidden?: boolean | null;
    }
    /**
     * The SEO schema object contains data about different types of meta tags. It makes sure that the information about your page is presented properly to search engines.
     * The search engines use this information for ranking purposes, or to display snippets in the search results.
     * This data will override other sources of tags (for example patterns) and will be included in the <head> section of the HTML document, while not being displayed on the page itself.
     */
    interface SeoSchema$1 {
        /** SEO tag information. */
        tags?: Tag$1[];
        /** SEO general settings. */
        settings?: Settings$1;
    }
    interface Keyword$1 {
        /** Keyword value. */
        term?: string;
        /** Whether the keyword is the main focus keyword. */
        isMain?: boolean;
    }
    interface Tag$1 {
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
        keywords?: Keyword$1[];
    }
    interface Agenda$1 {
        /** Whether the schedule is enabled for the event. */
        enabled?: boolean;
        /**
         * Schedule page URL.
         * @readonly
         */
        pageUrl?: string;
    }
    interface Category$2 {
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
        /** @readonly */
        counts?: CategoryCounts$2;
        /**
         * Category state. Default - MANUAL.
         * WIX_EVENTS.MANAGE_AUTO_CATEGORIES permission is required to use other states.
         * Field will be ignored on update requests.
         */
        states?: State$6[];
        /**
         * Optionally client defined external ID.
         * @internal
         */
        externalId?: string | null;
    }
    interface CategoryCounts$2 {
        /** Assigned events count. Deleted events are excluded. */
        assignedEventsCount?: number | null;
        /** Assigned draft events count. */
        assignedDraftEventsCount?: number | null;
    }
    enum State$6 {
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
    interface V3EventStarted {
        /** Event start timestamp in ISO UTC format. */
        timestamp?: Date;
        /** Event ID. */
        eventId?: string;
    }
    interface V3EventReminder {
        /** Reminder timestamp in ISO UTC format. */
        timestamp?: Date;
        /** Event ID. */
        eventId?: string;
        /** Event location. */
        location?: Location$3;
        /** Event schedule configuration. */
        scheduleConfig?: ScheduleConfig$3;
        /** Event title. */
        title?: string;
        /** Event creator user ID. */
        userId?: string | null;
        /** Time until the event starts (currently, reminder is triggered 1 day before event starts). */
        startsIn?: TimeDuration$1;
    }
    /**
     * A coarse-grained representation of time duration divided into whole constituting components of days, hours, and minutes.
     * For example, 25.5 hours duration is represented as `{ days: 1, hours: 1, minutes: 30 }`.
     */
    interface TimeDuration$1 {
        /** Number of days */
        days?: number;
        /** Number of hours */
        hours?: number;
        /** Number of minutes */
        minutes?: number;
    }
    interface V3EventEnded {
        /** Event end timestamp in ISO UTC format. */
        timestamp?: Date;
        /** Event ID. */
        eventId?: string;
    }
    interface CreateEventRequest {
        /** Event data. */
        event: Event$1;
        /** Whether event should be created as draft. Draft events are hidden from site visitors. */
        draft?: boolean;
    }
    interface CreateEventResponse {
        /** Created event. */
        event?: Event$1;
    }
    interface V3EventPublished {
        /** Event publish timestamp in ISO UTC format. */
        timestamp?: Date;
        /** Event ID. */
        eventId?: string;
        /** Event status. */
        status?: EventStatus$2;
        /**
         * Event ID. Indicates the original event which current event was derived from.
         * Can be used to track the original event and add missing information.
         */
        derivedFromEventId?: string | null;
    }
    interface CloneEventRequest {
        /** Event ID. */
        eventId: string;
        /** Event data to update (partial) */
        event?: Event$1;
        /**
         * Set of field paths to update.
         * <!--ONLY:REST-->
         * Fields will be auto-populated from the `event` entity unless added to the request explicitly.
         * <!--END:ONLY:REST-->
         * Behavior follows [google.protobuf.FieldMask](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask) semantics.
         * @internal
         */
        fieldmask?: string[];
        /**
         * If true, event will be copied as draft.
         * Otherwise copied event will be published, unless it is draft.
         */
        draft?: boolean;
    }
    interface CloneEventResponse {
        /** Cloned event. */
        event?: Event$1;
    }
    interface EventCloned {
        /** Event created timestamp in ISO UTC format. */
        timestamp?: Date;
        /** Event ID. */
        eventId?: string;
        /** Event location. */
        location?: Location$3;
        /** Event schedule configuration. */
        scheduleConfig?: ScheduleConfig$3;
        /** Event title. */
        title?: string;
        /** Event creator user ID. */
        userId?: string | null;
        /** Event status. */
        status?: EventStatus$2;
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
    interface UpdateEventRequest$1 {
        /** Event data to update (partial) */
        event?: Event$1;
        /**
         * Set of field paths to update.
         * <!--ONLY:REST-->
         * Fields will be auto-populated from the `event` entity unless added to the request explicitly.
         * <!--END:ONLY:REST-->
         * Behavior follows [google.protobuf.FieldMask](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask) semantics.
         * @internal
         */
        fieldmask?: string[];
    }
    interface UpdateEventResponse$1 {
        /** Updated event. */
        event?: Event$1;
    }
    interface PublishDraftEventRequest$1 {
        /** Event ID. */
        eventId: string;
    }
    interface PublishDraftEventResponse$1 {
        /** Published event. */
        event?: Event$1;
    }
    interface CancelEventRequest$1 {
        /** Event ID. */
        eventId: string;
    }
    interface CancelEventResponse$1 {
        /** Canceled event. */
        event?: Event$1;
    }
    interface EventCanceled$1 {
        /** Event canceled timestamp in ISO UTC format. */
        timestamp?: Date;
        /** Event ID. */
        eventId?: string;
        /** Event title */
        title?: string;
        /** Event creator user ID. */
        userId?: string | null;
    }
    interface V3EventCanceled {
        /** Event canceled timestamp in ISO UTC format. */
        timestamp?: Date;
        /** Event ID. */
        eventId?: string;
        /** Event title */
        title?: string;
        /** Event creator user ID. */
        userId?: string | null;
    }
    interface BulkCancelEventsByFilterRequest {
        /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events). */
        filter?: QueryV2$6;
    }
    interface QueryV2$6 extends QueryV2PagingMethodOneOf$6 {
        /** Paging options to limit and skip the number of items. */
        paging?: Paging$6;
        /** Filter object in the following format: <br/> `"filter" : { "fieldName1": "value1", "fieldName2":{"$operator":"value2"} }`. <br/> <br/> **Example:** <br/> `"filter" : { "location.name": "Golden Valley", "title": {"$begins": "Hike"} }` <br/> <br/> See [supported fields and operators]() for more information. */
        filter?: Record<string, any> | null;
        /** Sort object in the following format: <br/> `[{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]` <br/> <br/> **Example:** <br/> `[{"fieldName":"createdDate","direction":"DESC"}]` <br/> <br/> See [supported fields]() for more information. */
        sort?: Sorting$6[];
    }
    /** @oneof */
    interface QueryV2PagingMethodOneOf$6 {
        /** Paging options to limit and skip the number of items. */
        paging?: Paging$6;
    }
    interface Sorting$6 {
        /** Name of the field to sort by. */
        fieldName?: string;
        /** Sort order (ASC/DESC). Defaults to ASC. */
        order?: SortOrder$7;
    }
    enum SortOrder$7 {
        ASC = "ASC",
        DESC = "DESC"
    }
    interface Paging$6 {
        /** Number of items to load. */
        limit?: number | null;
        /** Number of items to skip in the current sort order. */
        offset?: number | null;
    }
    interface BulkCancelEventsByFilterResponse {
    }
    interface DeleteEventRequest$1 {
        /** Event ID. */
        eventId: string;
    }
    interface DeleteEventResponse$1 {
        /** Deleted event ID. */
        eventId?: string;
    }
    interface BulkDeleteEventsByFilterRequest {
        /** Query options. See [API Query Langauge](https://dev.wix.com/api/rest/getting-started/api-query-language) for more details. */
        filter?: QueryV2$6;
    }
    interface BulkDeleteEventsByFilterResponse {
    }
    interface GetRecurringEventStateRequest$1 {
        /** Recurring event category id. */
        categoryId?: string;
    }
    interface GetRecurringEventStateResponse$1 {
        /** Recurring event category id. */
        categoryId?: string | null;
        inconsistentState?: boolean;
        actual?: RecurringEventState$1;
        desired?: RecurringEventState$1;
    }
    interface RecurringEventState$1 {
        recurringNext?: RecurringEventDetails$1;
        recurringLastEnded?: RecurringEventDetails$1;
        recurringLastCanceled?: RecurringEventDetails$1;
    }
    interface RecurringEventDetails$1 {
        eventId?: string | null;
        /** Event slug */
        slug?: string | null;
        /** Event start timestamp. */
        startDate?: Date;
        /** Event end timestamp. */
        endDate?: Date;
        recurrenceStatus?: Status$3;
    }
    interface UpdateRecurringStatusRequest$1 {
        /** Recurring event category id. */
        categoryId?: string;
    }
    interface UpdateRecurringStatusResponse$1 {
    }
    interface QueryEventsRequest$1 {
        /** Query options. See [API Query Langauge](https://dev.wix.com/api/rest/getting-started/api-query-language) for more details. */
        query?: QueryV2$6;
        /**
         * Controls which event properties are returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_event-fieldset).
         * Some fields require additional computation that affects latency.
         * Use minimum set of required fieldset for best performance.
         */
        fieldset?: EventFieldset$1[];
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
    enum EventFieldset$1 {
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
        CATEGORIES = "CATEGORIES"
    }
    interface QueryEventsResponse$1 {
        /** Metadata for the paginated results. */
        pagingMetadata?: PagingMetadataV2$6;
        /** Events list */
        events?: Event$1[];
        /** Filter facets. */
        facets?: Record<string, FacetCounts$8>;
    }
    interface PagingMetadataV2$6 {
        /** Number of items returned in the response. */
        count?: number | null;
        /** Offset that was requested. */
        offset?: number | null;
        /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
        total?: number | null;
        /** Flag that indicates the server failed to calculate the `total` field. */
        tooManyToCount?: boolean | null;
        /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
        cursors?: Cursors$6;
        /**
         * Indicates if there are more results after the current page.
         * If `true`, another page of results can be retrieved.
         * If `false`, this is the last page.
         * @internal
         */
        hasNext?: boolean | null;
    }
    interface Cursors$6 {
        /** Cursor pointing to next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to previous page in the list of results. */
        prev?: string | null;
    }
    interface FacetCounts$8 {
        /** Facet counts aggregated per value */
        counts?: Record<string, number>;
    }
    interface ListUserEventsRequest$1 {
        /** Paging options to limit and skip the number of items. */
        paging?: Paging$6;
        /**
         * Sort order, defaults to `"created:asc"`.
         * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
         */
        sort?: Sorting$6[];
        /** Event status. */
        status?: EventStatus$2[];
        /**
         * Wix user filter, by default any.
         * Allows to filter events by user relation to the event among all wix sites.
         */
        userFilter?: UserFilter$1;
        /**
         * Filter facets to include in the response.
         * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
         */
        facet?: string[];
    }
    interface UserFilter$1 {
        /** User who is related to event */
        userId?: string;
        /** Relation of user to event */
        relation?: Relation$1[];
    }
    enum Relation$1 {
        /**
         * User is attending the event.
         * User has RSVP with status YES or has ordered tickets.
         */
        ATTENDING = "ATTENDING"
    }
    interface ListUserEventsResponse$1 {
        /** Metadata for the paginated results. */
        pagingMetadata?: PagingMetadataV2$6;
        /** Events list. */
        events?: Event$1[];
        /** Filter facets. */
        facets?: Record<string, FacetCounts$8>;
    }
    interface ListEventsByCategoryRequest {
        /** Category ID */
        categoryId: string;
        /** Paging options to limit and skip the number of items. */
        paging?: Paging$6;
        /**
         * Controls which event properties are returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_event-fieldset).
         * Some fields require additional computation that affects latency of the service.
         * Use minimum set of required fieldset for best performance.
         */
        fieldset?: EventFieldset$1[];
    }
    interface ListEventsByCategoryResponse {
        /** Metadata for the paginated results. */
        pagingMetadata?: PagingMetadataV2$6;
        /** Events list. */
        events?: Event$1[];
    }
    interface GetEventRequest$1 {
        /** Event ID. */
        eventId: string | null;
        /**
         * Controls which event properties are returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_event-fieldset).
         * Some fields require additional computation that affects latency.
         * Use minimum set of required fieldset for best performance.
         */
        fieldset?: EventFieldset$1[];
        /**
         * indicates whether full_address should be resolved
         * @internal
         */
        resolveFullAddress?: boolean;
    }
    interface GetEventResponse$1 {
        /** Event. */
        event?: Event$1;
    }
    interface GetEventBySlugRequest {
        /** URL slug. */
        slug: string | null;
        /**
         * Controls which event properties are returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_event-fieldset).
         * Some fields require additional computation that affects latency.
         * Use minimum set of required fieldset for best performance.
         */
        fieldset?: EventFieldset$1[];
        /**
         * indicates whether full_address should be resolved
         * @internal
         */
        resolveFullAddress?: boolean;
    }
    interface GetEventBySlugResponse {
        /** Event. */
        event?: Event$1;
    }
    interface FindEventRequest$1 extends FindEventRequestFindByOneOf$1 {
        /** Event ID. */
        eventId?: string | null;
        /** URL slug. */
        slug?: string | null;
        /**
         * Controls which event properties are returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_event-fieldset).
         * Some fields require additional computation that affects latency.
         * Use minimum set of required fieldset for best performance.
         */
        fieldset?: EventFieldset$1[];
    }
    /** @oneof */
    interface FindEventRequestFindByOneOf$1 {
        /** Event ID. */
        eventId?: string | null;
        /** URL slug. */
        slug?: string | null;
    }
    interface FindEventResponse$1 {
        /** Event. */
        event?: Event$1;
    }
    interface EventDeleted$2 {
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
    interface Empty$2 {
    }
    interface EventCopied$2 {
        /** Event created timestamp in ISO UTC format. */
        timestamp?: Date;
        /** Event ID. */
        eventId?: string;
        /** Event location. */
        location?: EventsLocation;
        /** Event schedule configuration. */
        scheduleConfig?: EventsScheduleConfig;
        /** Event title. */
        title?: string;
        /** Event creator user ID. */
        userId?: string | null;
        /** Event status. */
        status?: EventsEventStatus;
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
    interface EventsLocation {
        /** Location name. */
        name?: string | null;
        /** Location map coordinates. */
        coordinates?: MapCoordinates$3;
        /** Single line address representation. */
        address?: string | null;
        /** Location type. */
        type?: LocationLocationType;
        /**
         * Full address derived from formatted single line `address`.
         * When `full_address` is used to create or update the event, deprecated `address` and `coordinates` are ignored.
         * If provided `full_address` has empty `formatted_address` or `coordinates`, it will be auto-completed using Atlas service.
         *
         * Migration notes:
         * - `full_address.formatted_address` is equivalent to `address`.
         * - `full_address.geocode` is equivalent to `coordinates`.
         */
        fullAddress?: Address$8;
        /**
         * Defines event location as TBD (To Be Determined).
         * When event location is not yet defined, `name` is displayed instead of location address.
         * `coordinates`, `address`, `type` and `full_address` are not required when location is TBD.
         */
        tbd?: boolean | null;
    }
    interface MapCoordinates$3 {
        /** Latitude. */
        lat?: number;
        /** Longitude. */
        lng?: number;
    }
    enum LocationLocationType {
        VENUE = "VENUE",
        ONLINE = "ONLINE"
    }
    /** Physical address */
    interface Address$8 extends AddressStreetOneOf$8 {
        /** a break down of the street to number and street name */
        streetAddress?: StreetAddress$8;
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
    }
    /** @oneof */
    interface AddressStreetOneOf$8 {
        /** a break down of the street to number and street name */
        streetAddress?: StreetAddress$8;
        /** Main address line (usually street and number) as free text */
        addressLine?: string | null;
    }
    interface StreetAddress$8 {
        /** street number */
        number?: string;
        /** street name */
        name?: string;
        /** @internal */
        apt?: string;
    }
    interface AddressLocation$8 {
        latitude?: number | null;
        longitude?: number | null;
    }
    interface Subdivision$8 {
        /** subdivision short code */
        code?: string;
        /** subdivision full-name */
        name?: string;
        /** @internal */
        type?: SubdivisionType$8;
        /** @internal */
        typeInfo?: string | null;
    }
    enum SubdivisionType$8 {
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
    interface EventsScheduleConfig {
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
        recurrences?: EventsRecurrences;
    }
    interface EventsRecurrences {
        /** Event occurrences. */
        occurrences?: EventsOccurrence[];
        /**
         * Recurring event category ID.
         * @readonly
         */
        categoryId?: string | null;
        /**
         * Recurrence status.
         * @readonly
         */
        status?: RecurrenceStatusStatus;
    }
    interface EventsOccurrence {
        /** Event start timestamp. */
        startDate?: Date;
        /** Event end timestamp. */
        endDate?: Date;
        /** Event time zone ID in TZ database format, e.g., `EST`, `America/Los_Angeles`. */
        timeZoneId?: string | null;
        /** Whether time zone is displayed in formatted schedule. */
        showTimeZone?: boolean;
    }
    enum RecurrenceStatusStatus {
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
    enum EventsEventStatus {
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
    interface EventPublished$1 {
        /** Event publish timestamp in ISO UTC format. */
        timestamp?: Date;
        /** Event ID. */
        eventId?: string;
        /** Event status. */
        status?: EventsEventStatus;
        /**
         * Event ID. Indicates the original event which current event was derived from.
         * Can be used to track the original event and add missing information.
         */
        derivedFromEventId?: string | null;
    }
    interface EventStarted$1 {
        /** Event start timestamp in ISO UTC format. */
        timestamp?: Date;
        /** Event ID. */
        eventId?: string;
    }
    interface EventEnded$1 {
        /** Event end timestamp in ISO UTC format. */
        timestamp?: Date;
        /** Event ID. */
        eventId?: string;
    }
    interface EventReminder$1 {
        /** Reminder timestamp in ISO UTC format. */
        timestamp?: Date;
        /** Event ID. */
        eventId?: string;
        /** Event location. */
        location?: EventsLocation;
        /** Event schedule configuration. */
        scheduleConfig?: EventsScheduleConfig;
        /** Event title. */
        title?: string;
        /** Event creator user ID. */
        userId?: string | null;
        /** Time until the event starts (currently, reminder is triggered 1 day before event starts). */
        startsIn?: TimeDuration$1;
    }
    /**
     * Creates a draft version of the event. The draft includes a default registration form in the selected language, which consists of input fields for first name, last name, and email. See [Registration Form](https://dev.wix.com/api/rest/wix-events/wix-events/registration-form/about-the-registration-form-api) for more information.
     * The event is automatically set up to send daily summary reports of new guests to your business email.
     * @param event - Event data.
     * @public
     * @documentationMaturity preview
     * @requiredField event
     * @requiredField event.location
     * @requiredField event.scheduling.config
     * @requiredField event.title
     * @returns Created event.
     */
    function createEvent(event: Event$1, options?: CreateEventOptions): Promise<Event$1>;
    interface CreateEventOptions {
        /** Whether event should be created as draft. Draft events are hidden from site visitors. */
        draft?: boolean;
    }
    /**
     * Clones an event, including the registration form, notifications, multilingual translations and tickets configuration from the original event. The new event's date is automatically set to 14 days from the original event date.
     * If an event with the same title already exists, the title gets a sequence number. For example, if you copy an event named "Leather Crafting 101", the API renames it as "Leather Crafting 101 (1)".
     * You can change the required entity field values while duplicating an event. See [Partial Updates](https://dev.wix.com/api/rest/wix-events/wix-events/partial-updates) for more information.
     * @param eventId - Event ID.
     * @public
     * @documentationMaturity preview
     * @requiredField eventId
     */
    function cloneEvent(eventId: string, options?: CloneEventOptions): Promise<CloneEventResponse>;
    interface CloneEventOptions {
        /** Event data to update (partial) */
        event?: Event$1;
        /**
         * Set of field paths to update.
         * <!--ONLY:REST-->
         * Fields will be auto-populated from the `event` entity unless added to the request explicitly.
         * <!--END:ONLY:REST-->
         * Behavior follows [google.protobuf.FieldMask](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask) semantics.
         * @internal
         */
        fieldmask?: string[];
        /**
         * If true, event will be copied as draft.
         * Otherwise copied event will be published, unless it is draft.
         */
        draft?: boolean;
    }
    /**
     * Updates an event.
     * Each time the event is updated, `revision` increments by 1. The existing `revision` must be included when updating the event. This ensures you're working with the latest event and prevents unintended overwrites.
     * @param _id - Event ID.
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @returns Updated event.
     */
    function updateEvent$1(_id: string, options?: UpdateEventOptions$1): Promise<Event$1>;
    interface UpdateEventOptions$1 {
        event: {
            /**
             * Event ID.
             * @readonly
             */
            _id?: string;
            /** Event location. */
            location?: Location$3;
            /** Event time management. */
            scheduling?: Scheduling$1;
            title?: string | null;
            description?: string | null;
            about?: string | null;
            /** Main event image. */
            mainImage?: string;
            /**
             * Unique identifier of the event page. The naming is the same as the event title written in kebab case. For example, if your event title is "Leather Crafting 101", then the slug is "leather-crafting-101".
             * @readonly
             */
            slug?: string;
            /** Language code in [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format. Used when the event ticket should be translated into another language. Default value is `en`. */
            languageCode?: string;
            /**
             * Date and time when the event was created in `yyyy-mm-ddThh:mm:sssZ` format.
             * @readonly
             */
            _createdDate?: Date;
            /**
             * Date and time when the event was updated in `yyyy-mm-ddThh:mm:sssZ` format.
             * @readonly
             */
            modifiedDate?: Date;
            /**
             * Event status.
             * @readonly
             */
            status?: EventStatus$2;
            /** RSVP or ticketing registration details. */
            registration?: Registration$1;
            /** URLs that allow you to add an event to the Google calendar, or to download an [ICS calendar](https://icscalendar.com/) file. */
            calendarLinks?: CalendarLinks$4;
            /** Event page URL components. */
            eventPageUrl?: string;
            /** Event registration form. */
            form?: Form$2;
            /** Summary of RSVP or ticket sales. */
            dashboard?: Dashboard$4;
            /**
             * Instance ID of the site where event is hosted.
             * @readonly
             */
            instanceId?: string;
            /** Guest list configuration. */
            guestListConfig?: GuestListConfig$1;
            /**
             * ID of the user who created the event.
             * @readonly
             */
            userId?: string;
            /**
             * Event discussion feed. For internal use.
             * @internal
             */
            feed?: Feed$1;
            /** Online conferencing details. */
            onlineConferencing?: OnlineConferencing$1;
            /** SEO settings. */
            seoSettings?: SeoSettings$1;
            /** Assigned contacts label key. */
            assignedContactLabel?: string | null;
            /** Event schedule details. */
            agenda?: Agenda$1;
            /** Event categories. */
            categories?: Category$2[];
        };
        /**
         * Set of field paths to update.
         * <!--ONLY:REST-->
         * Fields will be auto-populated from the `event` entity unless added to the request explicitly.
         * <!--END:ONLY:REST-->
         * Behavior follows [google.protobuf.FieldMask](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask) semantics.
         * @internal
         */
        fieldmask?: string[];
    }
    /**
     * Publishes a draft event to your live site.
     * @param eventId - Event ID.
     * @public
     * @documentationMaturity preview
     * @requiredField eventId
     */
    function publishDraftEvent$1(eventId: string): Promise<PublishDraftEventResponse$1>;
    /**
     * Cancels an event. After cancellation, registration for an event is closed. To reuse the event, you need to [Copy]() it and [Publish]() it again.
     * If event cancellation notifications are enabled, canceling an event automatically triggers the sending of cancellation emails and/or push notifications to registered guests.
     * @param eventId - Event ID.
     * @public
     * @documentationMaturity preview
     * @requiredField eventId
     */
    function cancelEvent$1(eventId: string): Promise<CancelEventResponse$1>;
    /**
     * Cancels multiple events that meet the specified `filter` parameter. After cancellation, registration for an event is closed. To reuse the event, you need to [Clone]() it and [Publish]() it again.
     * If event cancellation notifications are enabled, canceling an event automatically triggers the sending of cancellation emails and/or push notifications to registered guests.
     * @public
     * @documentationMaturity preview
     * @requiredField options.filter.filter
     */
    function bulkCancelEventsByFilter(options?: BulkCancelEventsByFilterOptions): Promise<void>;
    interface BulkCancelEventsByFilterOptions {
        /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events). */
        filter?: QueryV2$6;
    }
    /**
     * Permanently deletes an event.
     * You can retrieve the deleted event through a GDPR access request.
     * @param eventId - Event ID.
     * @public
     * @documentationMaturity preview
     * @requiredField eventId
     */
    function deleteEvent$1(eventId: string): Promise<DeleteEventResponse$1>;
    /**
     * Permanently deletes multiple events that meet the specified `filter` parameter.
     * You can retrieve the deleted events through a GDPR access request.
     * @public
     * @documentationMaturity preview
     * @requiredField options.filter.filter
     */
    function bulkDeleteEventsByFilter(options?: BulkDeleteEventsByFilterOptions): Promise<void>;
    interface BulkDeleteEventsByFilterOptions {
        /** Query options. See [API Query Langauge](https://dev.wix.com/api/rest/getting-started/api-query-language) for more details. */
        filter?: QueryV2$6;
    }
    /**
     * Retrieves a list of ticket definitions, given the provided paging, filtering, and sorting.
     * Query Events runs with these defaults, which you can override:
     * - `createdDate` is sorted in `ASC` order
     * - `paging.limit` is `100`
     * - `paging.offset` is `0`
     * For field support for filters and sorting, see [Events v3: Supported Filters and Sorting](https://dev.wix.com/api/rest/wix-events/ticket-definitions-v3/filter-and-sort).
     * To learn about working with _Query_ endpoints, see [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language), [Sorting and Paging](https://dev.wix.com/api/rest/getting-started/pagination), and [Field Projection](https://dev.wix.com/api/rest/getting-started/field-projection).
     * @public
     * @documentationMaturity preview
     */
    function queryEvents(options?: QueryEventsOptions): EventsQueryBuilder;
    interface QueryEventsOptions {
        /**
         * Controls which event properties are returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_event-fieldset).
         * Some fields require additional computation that affects latency.
         * Use minimum set of required fieldset for best performance.
         */
        fieldset?: EventFieldset$1[] | undefined;
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
        currentPage: number;
        totalPages: number;
        totalCount: number;
        hasNext: () => boolean;
        hasPrev: () => boolean;
        length: number;
        pageSize: number;
    }
    interface EventsQueryResult extends QueryOffsetResult {
        items: Event$1[];
        query: EventsQueryBuilder;
        next: () => Promise<EventsQueryResult>;
        prev: () => Promise<EventsQueryResult>;
    }
    interface EventsQueryBuilder {
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        eq: (propertyName: "_id" | "scheduling.config.startDate" | "scheduling.config.endDate" | "scheduling.config.recurringEvents.categoryId" | "title" | "slug" | "_createdDate" | "modifiedDate" | "status" | "registration.initialType" | "userId", value: any) => EventsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        ne: (propertyName: "_id" | "scheduling.config.startDate" | "scheduling.config.endDate" | "scheduling.config.recurringEvents.categoryId" | "title" | "slug" | "_createdDate" | "modifiedDate" | "status" | "userId", value: any) => EventsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        gt: (propertyName: "scheduling.config.startDate" | "scheduling.config.endDate" | "_createdDate" | "modifiedDate", value: any) => EventsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        le: (propertyName: "scheduling.config.startDate" | "scheduling.config.endDate" | "_createdDate" | "modifiedDate", value: any) => EventsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        lt: (propertyName: "scheduling.config.startDate" | "scheduling.config.endDate" | "_createdDate" | "modifiedDate", value: any) => EventsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `string`.
         * @param string - String to compare against. Case-insensitive.
         * @documentationMaturity preview
         */
        startsWith: (propertyName: "title", value: string) => EventsQueryBuilder;
        /** @documentationMaturity preview */
        in: (propertyName: "_id" | "scheduling.config.startDate" | "scheduling.config.endDate" | "scheduling.config.recurringEvents.categoryId" | "title" | "slug" | "_createdDate" | "modifiedDate" | "status" | "userId", value: any) => EventsQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        ascending: (...propertyNames: Array<"scheduling.config.startDate" | "scheduling.config.endDate" | "title" | "_createdDate" | "modifiedDate" | "status">) => EventsQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        descending: (...propertyNames: Array<"scheduling.config.startDate" | "scheduling.config.endDate" | "title" | "_createdDate" | "modifiedDate" | "status">) => EventsQueryBuilder;
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
     * Retrieves a list of up to 100 events that belong to the same event category.
     * @param categoryId - Category ID
     * @public
     * @documentationMaturity preview
     * @requiredField categoryId
     */
    function listEventsByCategory(categoryId: string, options?: ListEventsByCategoryOptions): Promise<ListEventsByCategoryResponse>;
    interface ListEventsByCategoryOptions {
        /** Paging options to limit and skip the number of items. */
        paging?: Paging$6;
        /**
         * Controls which event properties are returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_event-fieldset).
         * Some fields require additional computation that affects latency of the service.
         * Use minimum set of required fieldset for best performance.
         */
        fieldset?: EventFieldset$1[];
    }
    /**
     * Retrieves an event by the ID.
     * @param eventId - Event ID.
     * @public
     * @documentationMaturity preview
     * @requiredField eventId
     * @returns Event.
     */
    function getEvent$1(eventId: string | null, options?: GetEventOptions$1): Promise<Event$1>;
    interface GetEventOptions$1 {
        /**
         * Controls which event properties are returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_event-fieldset).
         * Some fields require additional computation that affects latency.
         * Use minimum set of required fieldset for best performance.
         */
        fieldset?: EventFieldset$1[];
        /**
         * indicates whether full_address should be resolved
         * @internal
         */
        resolveFullAddress?: boolean;
    }
    /**
     * Retrieves an event by the slug URL.
     * @param slug - URL slug.
     * @public
     * @documentationMaturity preview
     * @requiredField slug
     */
    function getEventBySlug(slug: string | null, options?: GetEventBySlugOptions): Promise<GetEventBySlugResponse>;
    interface GetEventBySlugOptions {
        /**
         * Controls which event properties are returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_event-fieldset).
         * Some fields require additional computation that affects latency.
         * Use minimum set of required fieldset for best performance.
         */
        fieldset?: EventFieldset$1[];
        /**
         * indicates whether full_address should be resolved
         * @internal
         */
        resolveFullAddress?: boolean;
    }
    /**
     * Finds an event by ID or URL slug. In contrast to Get Event endpoint which returns not found error,
     * Find Event returns empty response when an event is not found.
     * @internal
     * @documentationMaturity preview
     * @requiredField FindEventRequest
     */
    function findEvent$1(options?: FindEventOptions$1): Promise<FindEventResponse$1>;
    interface FindEventOptions$1 extends FindEventRequestFindByOneOf$1 {
        /** Event ID. */
        eventId?: string | null;
        /** URL slug. */
        slug?: string | null;
        /**
         * Controls which event properties are returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_event-fieldset).
         * Some fields require additional computation that affects latency.
         * Use minimum set of required fieldset for best performance.
         */
        fieldset?: EventFieldset$1[];
    }
    type eventsEventsV3Event_universal_d_CommonAddress = CommonAddress;
    type eventsEventsV3Event_universal_d_CommonAddressStreetOneOf = CommonAddressStreetOneOf;
    type eventsEventsV3Event_universal_d_CommonStreetAddress = CommonStreetAddress;
    type eventsEventsV3Event_universal_d_CommonAddressLocation = CommonAddressLocation;
    type eventsEventsV3Event_universal_d_CommonSubdivision = CommonSubdivision;
    type eventsEventsV3Event_universal_d_SubdivisionSubdivisionType = SubdivisionSubdivisionType;
    const eventsEventsV3Event_universal_d_SubdivisionSubdivisionType: typeof SubdivisionSubdivisionType;
    type eventsEventsV3Event_universal_d_RegistrationType = RegistrationType;
    const eventsEventsV3Event_universal_d_RegistrationType: typeof RegistrationType;
    type eventsEventsV3Event_universal_d_RsvpRegistration = RsvpRegistration;
    type eventsEventsV3Event_universal_d_ResponseType = ResponseType;
    const eventsEventsV3Event_universal_d_ResponseType: typeof ResponseType;
    type eventsEventsV3Event_universal_d_TicketingRegistration = TicketingRegistration;
    type eventsEventsV3Event_universal_d_ExternalRegistration = ExternalRegistration;
    type eventsEventsV3Event_universal_d_EventsMoney = EventsMoney;
    type eventsEventsV3Event_universal_d_TicketSummary = TicketSummary;
    type eventsEventsV3Event_universal_d_V3EventStarted = V3EventStarted;
    type eventsEventsV3Event_universal_d_V3EventReminder = V3EventReminder;
    type eventsEventsV3Event_universal_d_V3EventEnded = V3EventEnded;
    type eventsEventsV3Event_universal_d_CreateEventRequest = CreateEventRequest;
    type eventsEventsV3Event_universal_d_CreateEventResponse = CreateEventResponse;
    type eventsEventsV3Event_universal_d_V3EventPublished = V3EventPublished;
    type eventsEventsV3Event_universal_d_CloneEventRequest = CloneEventRequest;
    type eventsEventsV3Event_universal_d_CloneEventResponse = CloneEventResponse;
    type eventsEventsV3Event_universal_d_EventCloned = EventCloned;
    type eventsEventsV3Event_universal_d_V3EventCanceled = V3EventCanceled;
    type eventsEventsV3Event_universal_d_BulkCancelEventsByFilterRequest = BulkCancelEventsByFilterRequest;
    type eventsEventsV3Event_universal_d_BulkCancelEventsByFilterResponse = BulkCancelEventsByFilterResponse;
    type eventsEventsV3Event_universal_d_BulkDeleteEventsByFilterRequest = BulkDeleteEventsByFilterRequest;
    type eventsEventsV3Event_universal_d_BulkDeleteEventsByFilterResponse = BulkDeleteEventsByFilterResponse;
    type eventsEventsV3Event_universal_d_ListEventsByCategoryRequest = ListEventsByCategoryRequest;
    type eventsEventsV3Event_universal_d_ListEventsByCategoryResponse = ListEventsByCategoryResponse;
    type eventsEventsV3Event_universal_d_GetEventBySlugRequest = GetEventBySlugRequest;
    type eventsEventsV3Event_universal_d_GetEventBySlugResponse = GetEventBySlugResponse;
    type eventsEventsV3Event_universal_d_EventsLocation = EventsLocation;
    type eventsEventsV3Event_universal_d_LocationLocationType = LocationLocationType;
    const eventsEventsV3Event_universal_d_LocationLocationType: typeof LocationLocationType;
    type eventsEventsV3Event_universal_d_EventsScheduleConfig = EventsScheduleConfig;
    type eventsEventsV3Event_universal_d_EventsRecurrences = EventsRecurrences;
    type eventsEventsV3Event_universal_d_EventsOccurrence = EventsOccurrence;
    type eventsEventsV3Event_universal_d_RecurrenceStatusStatus = RecurrenceStatusStatus;
    const eventsEventsV3Event_universal_d_RecurrenceStatusStatus: typeof RecurrenceStatusStatus;
    type eventsEventsV3Event_universal_d_EventsEventStatus = EventsEventStatus;
    const eventsEventsV3Event_universal_d_EventsEventStatus: typeof EventsEventStatus;
    const eventsEventsV3Event_universal_d_createEvent: typeof createEvent;
    type eventsEventsV3Event_universal_d_CreateEventOptions = CreateEventOptions;
    const eventsEventsV3Event_universal_d_cloneEvent: typeof cloneEvent;
    type eventsEventsV3Event_universal_d_CloneEventOptions = CloneEventOptions;
    const eventsEventsV3Event_universal_d_bulkCancelEventsByFilter: typeof bulkCancelEventsByFilter;
    type eventsEventsV3Event_universal_d_BulkCancelEventsByFilterOptions = BulkCancelEventsByFilterOptions;
    const eventsEventsV3Event_universal_d_bulkDeleteEventsByFilter: typeof bulkDeleteEventsByFilter;
    type eventsEventsV3Event_universal_d_BulkDeleteEventsByFilterOptions = BulkDeleteEventsByFilterOptions;
    const eventsEventsV3Event_universal_d_queryEvents: typeof queryEvents;
    type eventsEventsV3Event_universal_d_QueryEventsOptions = QueryEventsOptions;
    type eventsEventsV3Event_universal_d_EventsQueryResult = EventsQueryResult;
    type eventsEventsV3Event_universal_d_EventsQueryBuilder = EventsQueryBuilder;
    const eventsEventsV3Event_universal_d_listEventsByCategory: typeof listEventsByCategory;
    type eventsEventsV3Event_universal_d_ListEventsByCategoryOptions = ListEventsByCategoryOptions;
    const eventsEventsV3Event_universal_d_getEventBySlug: typeof getEventBySlug;
    type eventsEventsV3Event_universal_d_GetEventBySlugOptions = GetEventBySlugOptions;
    namespace eventsEventsV3Event_universal_d {
        export { __debug$c as __debug, Event$1 as Event, Location$3 as Location, LocationType$3 as LocationType, eventsEventsV3Event_universal_d_CommonAddress as CommonAddress, eventsEventsV3Event_universal_d_CommonAddressStreetOneOf as CommonAddressStreetOneOf, eventsEventsV3Event_universal_d_CommonStreetAddress as CommonStreetAddress, eventsEventsV3Event_universal_d_CommonAddressLocation as CommonAddressLocation, eventsEventsV3Event_universal_d_CommonSubdivision as CommonSubdivision, eventsEventsV3Event_universal_d_SubdivisionSubdivisionType as SubdivisionSubdivisionType, Scheduling$1 as Scheduling, ScheduleConfig$3 as ScheduleConfig, Status$3 as Status, Recurrences$3 as Recurrences, Occurrence$3 as Occurrence, EventStatus$2 as EventStatus, Registration$1 as Registration, eventsEventsV3Event_universal_d_RegistrationType as RegistrationType, RegistrationStatus$1 as RegistrationStatus, eventsEventsV3Event_universal_d_RsvpRegistration as RsvpRegistration, eventsEventsV3Event_universal_d_ResponseType as ResponseType, eventsEventsV3Event_universal_d_TicketingRegistration as TicketingRegistration, Money$6 as Money, TaxConfig$1 as TaxConfig, TaxType$4 as TaxType, eventsEventsV3Event_universal_d_ExternalRegistration as ExternalRegistration, GuestType$1 as GuestType, CalendarLinks$4 as CalendarLinks, Form$2 as Form, InputControl$2 as InputControl, InputControlType$2 as InputControlType, Input$2 as Input, ValueType$2 as ValueType, OptionSelection$2 as OptionSelection, OptionSelectionSelectedOptionOneOf$2 as OptionSelectionSelectedOptionOneOf, Label$2 as Label, FormMessages$2 as FormMessages, RsvpFormMessages$2 as RsvpFormMessages, PositiveResponseConfirmation$2 as PositiveResponseConfirmation, ResponseConfirmation$2 as ResponseConfirmation, Positive$2 as Positive, Negative$2 as Negative, CheckoutFormMessages$2 as CheckoutFormMessages, RegistrationClosedMessages$2 as RegistrationClosedMessages, TicketsUnavailableMessages$2 as TicketsUnavailableMessages, Dashboard$4 as Dashboard, eventsEventsV3Event_universal_d_EventsMoney as EventsMoney, RsvpSummary$1 as RsvpSummary, eventsEventsV3Event_universal_d_TicketSummary as TicketSummary, GuestListConfig$1 as GuestListConfig, Feed$1 as Feed, OnlineConferencing$1 as OnlineConferencing, ConferenceType$1 as ConferenceType, OnlineConferencingSession$1 as OnlineConferencingSession, SeoSettings$1 as SeoSettings, SeoSchema$1 as SeoSchema, Keyword$1 as Keyword, Tag$1 as Tag, Settings$1 as Settings, Agenda$1 as Agenda, Category$2 as Category, CategoryCounts$2 as CategoryCounts, State$6 as State, eventsEventsV3Event_universal_d_V3EventStarted as V3EventStarted, eventsEventsV3Event_universal_d_V3EventReminder as V3EventReminder, TimeDuration$1 as TimeDuration, eventsEventsV3Event_universal_d_V3EventEnded as V3EventEnded, eventsEventsV3Event_universal_d_CreateEventRequest as CreateEventRequest, eventsEventsV3Event_universal_d_CreateEventResponse as CreateEventResponse, eventsEventsV3Event_universal_d_V3EventPublished as V3EventPublished, eventsEventsV3Event_universal_d_CloneEventRequest as CloneEventRequest, eventsEventsV3Event_universal_d_CloneEventResponse as CloneEventResponse, eventsEventsV3Event_universal_d_EventCloned as EventCloned, UpdateEventRequest$1 as UpdateEventRequest, UpdateEventResponse$1 as UpdateEventResponse, PublishDraftEventRequest$1 as PublishDraftEventRequest, PublishDraftEventResponse$1 as PublishDraftEventResponse, CancelEventRequest$1 as CancelEventRequest, CancelEventResponse$1 as CancelEventResponse, EventCanceled$1 as EventCanceled, eventsEventsV3Event_universal_d_V3EventCanceled as V3EventCanceled, eventsEventsV3Event_universal_d_BulkCancelEventsByFilterRequest as BulkCancelEventsByFilterRequest, QueryV2$6 as QueryV2, QueryV2PagingMethodOneOf$6 as QueryV2PagingMethodOneOf, Sorting$6 as Sorting, SortOrder$7 as SortOrder, Paging$6 as Paging, eventsEventsV3Event_universal_d_BulkCancelEventsByFilterResponse as BulkCancelEventsByFilterResponse, DeleteEventRequest$1 as DeleteEventRequest, DeleteEventResponse$1 as DeleteEventResponse, eventsEventsV3Event_universal_d_BulkDeleteEventsByFilterRequest as BulkDeleteEventsByFilterRequest, eventsEventsV3Event_universal_d_BulkDeleteEventsByFilterResponse as BulkDeleteEventsByFilterResponse, GetRecurringEventStateRequest$1 as GetRecurringEventStateRequest, GetRecurringEventStateResponse$1 as GetRecurringEventStateResponse, RecurringEventState$1 as RecurringEventState, RecurringEventDetails$1 as RecurringEventDetails, UpdateRecurringStatusRequest$1 as UpdateRecurringStatusRequest, UpdateRecurringStatusResponse$1 as UpdateRecurringStatusResponse, QueryEventsRequest$1 as QueryEventsRequest, EventFieldset$1 as EventFieldset, QueryEventsResponse$1 as QueryEventsResponse, PagingMetadataV2$6 as PagingMetadataV2, Cursors$6 as Cursors, FacetCounts$8 as FacetCounts, ListUserEventsRequest$1 as ListUserEventsRequest, UserFilter$1 as UserFilter, Relation$1 as Relation, ListUserEventsResponse$1 as ListUserEventsResponse, eventsEventsV3Event_universal_d_ListEventsByCategoryRequest as ListEventsByCategoryRequest, eventsEventsV3Event_universal_d_ListEventsByCategoryResponse as ListEventsByCategoryResponse, GetEventRequest$1 as GetEventRequest, GetEventResponse$1 as GetEventResponse, eventsEventsV3Event_universal_d_GetEventBySlugRequest as GetEventBySlugRequest, eventsEventsV3Event_universal_d_GetEventBySlugResponse as GetEventBySlugResponse, FindEventRequest$1 as FindEventRequest, FindEventRequestFindByOneOf$1 as FindEventRequestFindByOneOf, FindEventResponse$1 as FindEventResponse, EventDeleted$2 as EventDeleted, Empty$2 as Empty, EventCopied$2 as EventCopied, eventsEventsV3Event_universal_d_EventsLocation as EventsLocation, MapCoordinates$3 as MapCoordinates, eventsEventsV3Event_universal_d_LocationLocationType as LocationLocationType, Address$8 as Address, AddressStreetOneOf$8 as AddressStreetOneOf, StreetAddress$8 as StreetAddress, AddressLocation$8 as AddressLocation, Subdivision$8 as Subdivision, SubdivisionType$8 as SubdivisionType, eventsEventsV3Event_universal_d_EventsScheduleConfig as EventsScheduleConfig, eventsEventsV3Event_universal_d_EventsRecurrences as EventsRecurrences, eventsEventsV3Event_universal_d_EventsOccurrence as EventsOccurrence, eventsEventsV3Event_universal_d_RecurrenceStatusStatus as RecurrenceStatusStatus, eventsEventsV3Event_universal_d_EventsEventStatus as EventsEventStatus, EventPublished$1 as EventPublished, EventStarted$1 as EventStarted, EventEnded$1 as EventEnded, EventReminder$1 as EventReminder, eventsEventsV3Event_universal_d_createEvent as createEvent, eventsEventsV3Event_universal_d_CreateEventOptions as CreateEventOptions, eventsEventsV3Event_universal_d_cloneEvent as cloneEvent, eventsEventsV3Event_universal_d_CloneEventOptions as CloneEventOptions, updateEvent$1 as updateEvent, UpdateEventOptions$1 as UpdateEventOptions, publishDraftEvent$1 as publishDraftEvent, cancelEvent$1 as cancelEvent, eventsEventsV3Event_universal_d_bulkCancelEventsByFilter as bulkCancelEventsByFilter, eventsEventsV3Event_universal_d_BulkCancelEventsByFilterOptions as BulkCancelEventsByFilterOptions, deleteEvent$1 as deleteEvent, eventsEventsV3Event_universal_d_bulkDeleteEventsByFilter as bulkDeleteEventsByFilter, eventsEventsV3Event_universal_d_BulkDeleteEventsByFilterOptions as BulkDeleteEventsByFilterOptions, eventsEventsV3Event_universal_d_queryEvents as queryEvents, eventsEventsV3Event_universal_d_QueryEventsOptions as QueryEventsOptions, eventsEventsV3Event_universal_d_EventsQueryResult as EventsQueryResult, eventsEventsV3Event_universal_d_EventsQueryBuilder as EventsQueryBuilder, eventsEventsV3Event_universal_d_listEventsByCategory as listEventsByCategory, eventsEventsV3Event_universal_d_ListEventsByCategoryOptions as ListEventsByCategoryOptions, getEvent$1 as getEvent, GetEventOptions$1 as GetEventOptions, eventsEventsV3Event_universal_d_getEventBySlug as getEventBySlug, eventsEventsV3Event_universal_d_GetEventBySlugOptions as GetEventBySlugOptions, findEvent$1 as findEvent, FindEventOptions$1 as FindEventOptions, };
    }
    const __debug$b: {
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
        paging?: Paging$5;
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
    interface Paging$5 {
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
        facets?: Record<string, FacetCounts$7>;
        /**
         * Whether there are draft changes which have not been published yet.
         * Returned only when filtering by single `event_id` with `WIX_EVENTS.MANAGE_AGENDA` permission.
         * @readonly
         */
        draftNotPublished?: boolean | null;
        pagingMetadata?: PagingMetadataV2$5;
    }
    interface FacetCounts$7 {
        /** Facet counts aggregated per value */
        counts?: Record<string, number>;
    }
    interface PagingMetadataV2$5 {
        /** Number of items returned in the response. */
        count?: number | null;
        /** Offset that was requested. */
        offset?: number | null;
        /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
        total?: number | null;
        /** Flag that indicates the server failed to calculate the `total` field. */
        tooManyToCount?: boolean | null;
        /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
        cursors?: Cursors$5;
        /**
         * Indicates if there are more results after the current page.
         * If `true`, another page of results can be retrieved.
         * If `false`, this is the last page.
         * @internal
         */
        hasNext?: boolean | null;
    }
    interface Cursors$5 {
        /** Cursor pointing to next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to previous page in the list of results. */
        prev?: string | null;
    }
    interface QueryScheduleItemsRequest$1 {
        query?: QueryV2$5;
    }
    interface QueryV2$5 extends QueryV2PagingMethodOneOf$5 {
        /**
         * Pointer to page of results using offset.
         * See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
         */
        paging?: Paging$5;
        /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events). */
        filter?: Record<string, any> | null;
        /**
         * Sort object in the form [{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]
         * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
         */
        sort?: Sorting$5[];
    }
    /** @oneof */
    interface QueryV2PagingMethodOneOf$5 {
        /**
         * Pointer to page of results using offset.
         * See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
         */
        paging?: Paging$5;
    }
    interface Sorting$5 {
        /** Name of the field to sort by */
        fieldName?: string;
        /** Sort order (ASC/DESC). Defaults to ASC */
        order?: SortOrder$6;
    }
    enum SortOrder$6 {
        ASC = "ASC",
        DESC = "DESC"
    }
    interface QueryScheduleItemsResponse$1 {
        pagingMetadata?: PagingMetadataV2$5;
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
     * @param eventId - Event ID.
     * @public
     * @documentationMaturity preview
     * @requiredField eventId
     */
    function listBookmarks(eventId: string): Promise<ListBookmarksResponse$1>;
    /**
     * Bookmarks schedule item for current member.
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
        export { __debug$b as __debug, ScheduleItem$1 as ScheduleItem, TimeInterval$1 as TimeInterval, ScheduleStatus$1 as ScheduleStatus, ListScheduleItemsRequest$1 as ListScheduleItemsRequest, StateFilter$1 as StateFilter, Paging$5 as Paging, ListScheduleItemsResponse$1 as ListScheduleItemsResponse, FacetCounts$7 as FacetCounts, PagingMetadataV2$5 as PagingMetadataV2, Cursors$5 as Cursors, QueryScheduleItemsRequest$1 as QueryScheduleItemsRequest, QueryV2$5 as QueryV2, QueryV2PagingMethodOneOf$5 as QueryV2PagingMethodOneOf, Sorting$5 as Sorting, SortOrder$6 as SortOrder, QueryScheduleItemsResponse$1 as QueryScheduleItemsResponse, GetScheduleItemRequest$1 as GetScheduleItemRequest, GetScheduleItemResponse$1 as GetScheduleItemResponse, AddScheduleItemRequest$1 as AddScheduleItemRequest, ScheduleItemData$1 as ScheduleItemData, AddScheduleItemResponse$1 as AddScheduleItemResponse, UpdateScheduleItemRequest$1 as UpdateScheduleItemRequest, UpdateScheduleItemResponse$1 as UpdateScheduleItemResponse, DeleteScheduleItemRequest$1 as DeleteScheduleItemRequest, DeleteScheduleItemResponse$1 as DeleteScheduleItemResponse, DiscardDraftRequest$2 as DiscardDraftRequest, DiscardDraftResponse$2 as DiscardDraftResponse, PublishDraftRequest$2 as PublishDraftRequest, PublishDraftResponse$2 as PublishDraftResponse, RescheduleDraftRequest$1 as RescheduleDraftRequest, RescheduleDraftResponse$1 as RescheduleDraftResponse, ListBookmarksRequest$1 as ListBookmarksRequest, ListBookmarksResponse$1 as ListBookmarksResponse, CreateBookmarkRequest$1 as CreateBookmarkRequest, CreateBookmarkResponse$1 as CreateBookmarkResponse, DeleteBookmarkRequest$1 as DeleteBookmarkRequest, DeleteBookmarkResponse$1 as DeleteBookmarkResponse, eventsScheduleV1ScheduleItemScheduleBookmarks_universal_d_listBookmarks as listBookmarks, eventsScheduleV1ScheduleItemScheduleBookmarks_universal_d_createBookmark as createBookmark, eventsScheduleV1ScheduleItemScheduleBookmarks_universal_d_deleteBookmark as deleteBookmark, };
    }
    const __debug$a: {
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
        paging?: Paging$4;
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
    interface Paging$4 {
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
        facets?: Record<string, FacetCounts$6>;
        /**
         * Whether there are draft changes which have not been published yet.
         * Returned only when filtering by single `event_id` with `WIX_EVENTS.MANAGE_AGENDA` permission.
         * @readonly
         */
        draftNotPublished?: boolean | null;
        pagingMetadata?: PagingMetadataV2$4;
    }
    interface FacetCounts$6 {
        /** Facet counts aggregated per value */
        counts?: Record<string, number>;
    }
    interface PagingMetadataV2$4 {
        /** Number of items returned in the response. */
        count?: number | null;
        /** Offset that was requested. */
        offset?: number | null;
        /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
        total?: number | null;
        /** Flag that indicates the server failed to calculate the `total` field. */
        tooManyToCount?: boolean | null;
        /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
        cursors?: Cursors$4;
        /**
         * Indicates if there are more results after the current page.
         * If `true`, another page of results can be retrieved.
         * If `false`, this is the last page.
         * @internal
         */
        hasNext?: boolean | null;
    }
    interface Cursors$4 {
        /** Cursor pointing to next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to previous page in the list of results. */
        prev?: string | null;
    }
    interface QueryScheduleItemsRequest {
        query?: QueryV2$4;
    }
    interface QueryV2$4 extends QueryV2PagingMethodOneOf$4 {
        /**
         * Pointer to page of results using offset.
         * See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
         */
        paging?: Paging$4;
        /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events). */
        filter?: Record<string, any> | null;
        /**
         * Sort object in the form [{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]
         * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
         */
        sort?: Sorting$4[];
    }
    /** @oneof */
    interface QueryV2PagingMethodOneOf$4 {
        /**
         * Pointer to page of results using offset.
         * See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination).
         */
        paging?: Paging$4;
    }
    interface Sorting$4 {
        /** Name of the field to sort by */
        fieldName?: string;
        /** Sort order (ASC/DESC). Defaults to ASC */
        order?: SortOrder$5;
    }
    enum SortOrder$5 {
        ASC = "ASC",
        DESC = "DESC"
    }
    interface QueryScheduleItemsResponse {
        pagingMetadata?: PagingMetadataV2$4;
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
        paging?: Paging$4;
    }
    /**
     * Retrieves a list of up to 100 schedule items, given the provided [paging](https://dev.wix.com/api/rest/getting-started/pagination), [filtering](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-schedule-items).
     *
     * ** Important **:
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
     * @public
     * @documentationMaturity preview
     */
    function queryScheduleItems(): ItemsQueryBuilder;
    interface QueryCursorResult$2 {
        cursors: Cursors$4;
        hasNext: () => boolean;
        hasPrev: () => boolean;
        length: number;
        pageSize: number;
    }
    interface ItemsQueryResult extends QueryCursorResult$2 {
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
        eq: (propertyName: "_id" | "name" | "description" | "stageName" | "_createdDate" | "_updatedDate" | "eventId", value: any) => ItemsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        ne: (propertyName: "_id" | "name" | "description" | "stageName" | "_createdDate" | "_updatedDate" | "eventId", value: any) => ItemsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        gt: (propertyName: "_createdDate" | "_updatedDate", value: any) => ItemsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        le: (propertyName: "_createdDate" | "_updatedDate", value: any) => ItemsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        lt: (propertyName: "_createdDate" | "_updatedDate", value: any) => ItemsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `string`.
         * @param string - String to compare against. Case-insensitive.
         * @documentationMaturity preview
         */
        startsWith: (propertyName: "_id" | "name" | "description" | "stageName" | "eventId", value: string) => ItemsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `values`.
         * @param values - List of values to compare against.
         * @documentationMaturity preview
         */
        hasSome: (propertyName: "_id" | "name" | "description" | "stageName" | "_createdDate" | "_updatedDate" | "eventId", value: any[]) => ItemsQueryBuilder;
        /** @documentationMaturity preview */
        in: (propertyName: "_id" | "name" | "description" | "stageName" | "_createdDate" | "_updatedDate" | "eventId", value: any) => ItemsQueryBuilder;
        /** @documentationMaturity preview */
        exists: (propertyName: "_id" | "name" | "description" | "stageName" | "_createdDate" | "_updatedDate" | "eventId", value: boolean) => ItemsQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        ascending: (...propertyNames: Array<"_id" | "name" | "description" | "stageName" | "_createdDate" | "_updatedDate" | "eventId">) => ItemsQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        descending: (...propertyNames: Array<"_id" | "name" | "description" | "stageName" | "_createdDate" | "_updatedDate" | "eventId">) => ItemsQueryBuilder;
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
     * @param itemId - Schedule item ID.
     * @public
     * @documentationMaturity preview
     * @requiredField itemId
     */
    function getScheduleItem(itemId: string, options?: GetScheduleItemOptions): Promise<GetScheduleItemResponse>;
    interface GetScheduleItemOptions {
        /** Event ID. */
        eventId?: string;
        includeDraft?: boolean;
    }
    /**
     * Adds schedule item to the draft schedule. Draft items are not publicly available unless published.
     * @param eventId - Event ID.
     * @public
     * @documentationMaturity preview
     * @requiredField eventId
     * @requiredField options.item.name
     * @requiredField options.item.timeSlot
     * @requiredField options.item.timeSlot.end
     * @requiredField options.item.timeSlot.start
     */
    function addScheduleItem(eventId: string, options?: AddScheduleItemOptions): Promise<AddScheduleItemResponse>;
    interface AddScheduleItemOptions {
        /** Schedule item. */
        item?: ScheduleItemData;
    }
    /**
     * Updates existing schedule item.
     * All modifications are performed on a draft schedule, even if schedule item has already been published.
     * @param itemId - Schedule item ID.
     * @param eventId - Event ID.
     * @public
     * @documentationMaturity preview
     * @requiredField eventId
     * @requiredField itemId
     */
    function updateScheduleItem(itemId: string, eventId: string, options?: UpdateScheduleItemOptions): Promise<UpdateScheduleItemResponse>;
    interface UpdateScheduleItemOptions {
        /** Schedule item. */
        item?: ScheduleItemData;
        /**
         * Set of field paths to update.
         * When fields are empty, request is interpreted as full update.
         * Behavior follows [google.protobuf.FieldMask](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask) semantics.
         */
        fields?: string[];
    }
    /**
     * Deletes schedule item from draft schedule.
     * @param eventId - Event ID.
     * @public
     * @documentationMaturity preview
     * @requiredField eventId
     */
    function deleteScheduleItem(eventId: string, options?: DeleteScheduleItemOptions): Promise<void>;
    interface DeleteScheduleItemOptions {
        /** Schedule items to delete. */
        itemIds?: string[];
    }
    /**
     * Clears all changes to the draft schedule.
     * (Does not affect the published schedule.)
     * @param eventId - Event ID.
     * @public
     * @documentationMaturity preview
     * @requiredField eventId
     */
    function discardDraft$1(eventId: string): Promise<void>;
    /**
     * Publishes the draft schedule.
     * @param eventId - Event ID.
     * @public
     * @documentationMaturity preview
     * @requiredField eventId
     */
    function publishDraft$1(eventId: string): Promise<void>;
    /**
     * Adjusts time of all draft schedule items (per event).
     * @param eventId - Event ID.
     * @public
     * @documentationMaturity preview
     * @requiredField eventId
     * @requiredField options
     * @requiredField options.timeZoneId
     */
    function rescheduleDraft(eventId: string, options: RescheduleDraftOptions): Promise<void>;
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
        export { __debug$a as __debug, eventsScheduleV1ScheduleItemSchedule_universal_d_ScheduleItem as ScheduleItem, eventsScheduleV1ScheduleItemSchedule_universal_d_TimeInterval as TimeInterval, eventsScheduleV1ScheduleItemSchedule_universal_d_ScheduleStatus as ScheduleStatus, eventsScheduleV1ScheduleItemSchedule_universal_d_ListScheduleItemsRequest as ListScheduleItemsRequest, eventsScheduleV1ScheduleItemSchedule_universal_d_StateFilter as StateFilter, Paging$4 as Paging, eventsScheduleV1ScheduleItemSchedule_universal_d_ListScheduleItemsResponse as ListScheduleItemsResponse, FacetCounts$6 as FacetCounts, PagingMetadataV2$4 as PagingMetadataV2, Cursors$4 as Cursors, eventsScheduleV1ScheduleItemSchedule_universal_d_QueryScheduleItemsRequest as QueryScheduleItemsRequest, QueryV2$4 as QueryV2, QueryV2PagingMethodOneOf$4 as QueryV2PagingMethodOneOf, Sorting$4 as Sorting, SortOrder$5 as SortOrder, eventsScheduleV1ScheduleItemSchedule_universal_d_QueryScheduleItemsResponse as QueryScheduleItemsResponse, eventsScheduleV1ScheduleItemSchedule_universal_d_GetScheduleItemRequest as GetScheduleItemRequest, eventsScheduleV1ScheduleItemSchedule_universal_d_GetScheduleItemResponse as GetScheduleItemResponse, eventsScheduleV1ScheduleItemSchedule_universal_d_AddScheduleItemRequest as AddScheduleItemRequest, eventsScheduleV1ScheduleItemSchedule_universal_d_ScheduleItemData as ScheduleItemData, eventsScheduleV1ScheduleItemSchedule_universal_d_AddScheduleItemResponse as AddScheduleItemResponse, eventsScheduleV1ScheduleItemSchedule_universal_d_UpdateScheduleItemRequest as UpdateScheduleItemRequest, eventsScheduleV1ScheduleItemSchedule_universal_d_UpdateScheduleItemResponse as UpdateScheduleItemResponse, eventsScheduleV1ScheduleItemSchedule_universal_d_DeleteScheduleItemRequest as DeleteScheduleItemRequest, eventsScheduleV1ScheduleItemSchedule_universal_d_DeleteScheduleItemResponse as DeleteScheduleItemResponse, DiscardDraftRequest$1 as DiscardDraftRequest, DiscardDraftResponse$1 as DiscardDraftResponse, PublishDraftRequest$1 as PublishDraftRequest, PublishDraftResponse$1 as PublishDraftResponse, eventsScheduleV1ScheduleItemSchedule_universal_d_RescheduleDraftRequest as RescheduleDraftRequest, eventsScheduleV1ScheduleItemSchedule_universal_d_RescheduleDraftResponse as RescheduleDraftResponse, eventsScheduleV1ScheduleItemSchedule_universal_d_ListBookmarksRequest as ListBookmarksRequest, eventsScheduleV1ScheduleItemSchedule_universal_d_ListBookmarksResponse as ListBookmarksResponse, eventsScheduleV1ScheduleItemSchedule_universal_d_CreateBookmarkRequest as CreateBookmarkRequest, eventsScheduleV1ScheduleItemSchedule_universal_d_CreateBookmarkResponse as CreateBookmarkResponse, eventsScheduleV1ScheduleItemSchedule_universal_d_DeleteBookmarkRequest as DeleteBookmarkRequest, eventsScheduleV1ScheduleItemSchedule_universal_d_DeleteBookmarkResponse as DeleteBookmarkResponse, eventsScheduleV1ScheduleItemSchedule_universal_d_listScheduleItems as listScheduleItems, eventsScheduleV1ScheduleItemSchedule_universal_d_ListScheduleItemsOptions as ListScheduleItemsOptions, eventsScheduleV1ScheduleItemSchedule_universal_d_queryScheduleItems as queryScheduleItems, eventsScheduleV1ScheduleItemSchedule_universal_d_ItemsQueryResult as ItemsQueryResult, eventsScheduleV1ScheduleItemSchedule_universal_d_ItemsQueryBuilder as ItemsQueryBuilder, eventsScheduleV1ScheduleItemSchedule_universal_d_getScheduleItem as getScheduleItem, eventsScheduleV1ScheduleItemSchedule_universal_d_GetScheduleItemOptions as GetScheduleItemOptions, eventsScheduleV1ScheduleItemSchedule_universal_d_addScheduleItem as addScheduleItem, eventsScheduleV1ScheduleItemSchedule_universal_d_AddScheduleItemOptions as AddScheduleItemOptions, eventsScheduleV1ScheduleItemSchedule_universal_d_updateScheduleItem as updateScheduleItem, eventsScheduleV1ScheduleItemSchedule_universal_d_UpdateScheduleItemOptions as UpdateScheduleItemOptions, eventsScheduleV1ScheduleItemSchedule_universal_d_deleteScheduleItem as deleteScheduleItem, eventsScheduleV1ScheduleItemSchedule_universal_d_DeleteScheduleItemOptions as DeleteScheduleItemOptions, discardDraft$1 as discardDraft, publishDraft$1 as publishDraft, eventsScheduleV1ScheduleItemSchedule_universal_d_rescheduleDraft as rescheduleDraft, eventsScheduleV1ScheduleItemSchedule_universal_d_RescheduleDraftOptions as RescheduleDraftOptions, };
    }
    const __debug$9: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface Order$1 {
        /** Unique order number. */
        orderNumber?: string;
        /** Reservation ID. */
        reservationId?: string;
        /**
         * Payment snapshot ID.
         * Empty for FREE order.
         * @readonly
         */
        snapshotId?: string;
        /** Event ID. */
        eventId?: string;
        /** Contact ID of buyer (resolved using email address). */
        contactId?: string;
        /** Member ID of buyer (if relevant). */
        memberId?: string;
        /**
         * RSVP created timestamp.
         * @readonly
         */
        created?: Date;
        /** Guest first name. */
        firstName?: string;
        /** Guest last name. */
        lastName?: string;
        /** Guest email. */
        email?: string;
        /** Checkout form response. When each purchased ticket is assigned to a guest, guest forms are returned for each ticket, and buyer info is returned. */
        checkoutForm?: FormResponse$4;
        /** Whether the order is confirmed (triggered once payment gateway processes the payment and funds reach the merchant's account). */
        confirmed?: boolean;
        /** Order status. */
        status?: OrderStatus$3;
        /** Payment method used for purchase, e.g., "payPal", "creditCard", etc. */
        method?: string;
        /** Tickets ordered. */
        ticketsQuantity?: number;
        /** Total order price. */
        totalPrice?: Money$5;
        /** URL to ticket PDF. */
        ticketsPdf?: string;
        /** Tickets (generated after payment). */
        tickets?: TicketingTicket$2[];
        /** Whether the order is archived. */
        archived?: boolean;
        /** Whether the order is anonymized by GDPR delete. */
        anonymized?: boolean;
        /** Guest full name. */
        fullName?: string;
        /** Order invoice. */
        invoice?: Invoice$2;
        /** Whether all tickets in order are checked-in. */
        fullyCheckedIn?: boolean;
        /**
         * Deprecated. Use `payment_details.transaction.transaction_id`.
         * @internal
         * @readonly
         */
        transactionId?: string;
        /** Internal order payment details */
        paymentDetails?: PaymentDetails$1;
        /** Checkout channel type */
        channel?: ChannelType$2;
        /**
         * Language in which Order was created.
         * @internal
         * @readonly
         */
        language?: string | null;
    }
    interface FormResponse$4 {
        inputValues?: InputValue$4[];
    }
    interface InputValue$4 {
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
        address?: FormattedAddress$4;
    }
    interface FormattedAddress$4 {
        /** One line address representation. */
        formatted?: string;
        /** Address components (optional). */
        address?: Address$7;
    }
    /** Physical address */
    interface Address$7 extends AddressStreetOneOf$7 {
        /** Street name and number. */
        streetAddress?: StreetAddress$7;
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
    }
    /** @oneof */
    interface AddressStreetOneOf$7 {
        /** Street name and number. */
        streetAddress?: StreetAddress$7;
        /** Main address line, usually street and number as free text. */
        addressLine?: string | null;
    }
    interface StreetAddress$7 {
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
    interface AddressLocation$7 {
        /** Address latitude. */
        latitude?: number | null;
        /** Address longitude. */
        longitude?: number | null;
    }
    interface Subdivision$7 {
        /** Short subdivision code. */
        code?: string;
        /** Subdivision full name. */
        name?: string;
        /**
         * Subdivision level
         * @internal
         */
        type?: SubdivisionType$7;
        /**
         * Free text description of subdivision type.
         * @internal
         */
        typeInfo?: string | null;
    }
    enum SubdivisionType$7 {
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
    enum OrderStatus$3 {
        /** Order status not available for this request fieldset */
        NA_ORDER_STATUS = "NA_ORDER_STATUS",
        /** Order is confirmed, no payment required */
        FREE = "FREE",
        /** Order was paid but payment gateway suspended the payment. Eventually changes to PAID */
        PENDING = "PENDING",
        /** Order paid via payment gateway */
        PAID = "PAID",
        /** Order confirmed but has to be paid via offline payment and status manually updated to PAID */
        OFFLINE_PENDING = "OFFLINE_PENDING",
        /** Order is awaiting for payment in Cashier */
        INITIATED = "INITIATED",
        /** Order was canceled */
        CANCELED = "CANCELED",
        /** Order payment was declined */
        DECLINED = "DECLINED"
    }
    interface Money$5 {
        /** *Deprecated:** Use `value` instead. */
        amount?: string;
        /** ISO 4217 format of the currency i.e. `USD`. */
        currency?: string;
        /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
        value?: string | null;
    }
    interface TicketingTicket$2 {
        /** Unique ticket number (issued automatically). */
        ticketNumber?: string;
        /** Associated order number. */
        orderNumber?: string;
        /** Ticket definition ID. */
        ticketDefinitionId?: string;
        /** Ticket name. */
        name?: string;
        /** Ticket price. */
        price?: Money$5;
        /**
         * Whether ticket requires payment.
         * @readonly
         */
        free?: boolean;
        /** Ticket policy (as displayed in PDF). */
        policy?: string;
        /** Deprecated, use `check_in_url`. */
        qrCode?: string;
        /** Ticket check-in. */
        checkIn?: CheckIn$4;
        /** Associated order status. */
        orderStatus?: OrderStatus$3;
        /** Whether order and ticket are visible in order list. */
        orderArchived?: boolean;
        /** Buyer full name. */
        orderFullName?: string;
        /** Guest full name. */
        guestFullName?: string | null;
        /** Guest personal details. */
        guestDetails?: GuestDetails$3;
        /** Whether ticket is visible in guest list. */
        archived?: boolean;
        /** Deprecated, use `ticket_pdf_url`. */
        ticketPdf?: string;
        /** Ticket owner member ID. */
        memberId?: string | null;
        /**
         * Whether ticket was anonymized by GDPR delete.
         * Anonymized tickets no longer contain personally identifiable information (PII).
         */
        anonymized?: boolean;
        /**
         * Ticket check-in URL.
         * Shown as QR code image in PDF.
         * Format: `https://www.wixevents.com/check-in/{ticket number},{event id}`
         * Example: `https://www.wixevents.com/check-in/AAAA-AAAA-BB021,00000000-0000-0000-0000-000000000000`
         */
        checkInUrl?: string;
        /** URL for ticket PDF download. */
        ticketPdfUrl?: string;
        /** Associated order checkout channel type */
        channel?: ChannelType$2;
        /**
         * URL to download ticket in .pkpass format for Apple Wallet
         * @readonly
         */
        walletPassUrl?: string;
        /**
         * Additional ticket details.
         * @internal
         * @readonly
         */
        ticketDetails?: TicketDetails$3;
    }
    interface CheckIn$4 {
        /** Time of check-in */
        created?: Date;
    }
    interface GuestDetails$3 {
        /** Whether ticket belongs to assigned guest. */
        guestAssigned?: boolean;
        /** Guest first name. */
        firstName?: string | null;
        /** Guest last name. */
        lastName?: string | null;
        /** Guest email. */
        email?: string | null;
        /** Full form response. */
        form?: FormResponse$4;
        /** Contact ID associated with this guest. */
        contactId?: string | null;
    }
    enum ChannelType$2 {
        /** Buyer created order via one of the online channels (website, mobile app, etc.) */
        ONLINE = "ONLINE",
        /** Order created and money collected by the sales person */
        OFFLINE_POS = "OFFLINE_POS"
    }
    interface TicketDetails$3 {
        /** Unique seat id in the event venue. */
        seatId?: string | null;
        /**
         * Optional sector name.
         * @internal
         * @readonly
         */
        sectorName?: string | null;
        /**
         * Area name.
         * @internal
         * @readonly
         */
        areaName?: string | null;
        /**
         * Table name.
         * @internal
         * @readonly
         */
        tableName?: string | null;
        /**
         * Row label.
         * @internal
         * @readonly
         */
        rowNumber?: string | null;
        /**
         * Seat label in a row or table.
         * @internal
         * @readonly
         */
        seatNumber?: string | null;
        /**
         * Optional sector label.
         * @readonly
         */
        sectionLabel?: string | null;
        /**
         * Area label.
         * @readonly
         */
        areaLabel?: string | null;
        /**
         * Table label.
         * @readonly
         */
        tableLabel?: string | null;
        /**
         * Row label.
         * @readonly
         */
        rowLabel?: string | null;
        /**
         * Seat label in a row or table.
         * @readonly
         */
        seatLabel?: string | null;
        /** Number of places in the spot. If not provided - defaults to 1. */
        capacity?: number | null;
        /** Custom pricing of ticket. */
        priceOverride?: string | null;
        /** Pricing option id. */
        pricingOptionId?: string | null;
        /**
         * Pricing option name.
         * @readonly
         */
        pricingOptionName?: string | null;
    }
    interface Invoice$2 {
        /** Items listed in the invoice. */
        items?: Item$2[];
        /** Total cart amount. */
        total?: Money$5;
        /** Discount applied to cart. */
        discount?: Discount$2;
        /** Tax applied to cart. */
        tax?: Tax$2;
        /** Total cart amount before discount, tax, and fees. */
        subTotal?: Money$5;
        /**
         * Total amount of cart after discount, tax, and fees.
         * Grand total is calculated in the following order:
         * 1. Total prices of all items in the cart are calculated.
         * 2. Discount is subtracted from the cart (if applicable).
         * 3. Tax is added (if applicable).
         * 4. Wix service fee is added.
         */
        grandTotal?: Money$5;
        /**
         * Fees applied to the cart.
         * @readonly
         */
        fees?: Fee$2[];
        /** Total revenue, excluding fees. (Taxes and payment provider fees are not deducted). */
        revenue?: Money$5;
        /** URL to invoice preview. Returned only if order is paid. */
        previewUrl?: string | null;
    }
    interface Item$2 {
        /** Unique line item ID. */
        _id?: string;
        /** Line item quantity. */
        quantity?: number;
        /** Line item mame. */
        name?: string;
        /** Line item price. */
        price?: Money$5;
        /** Total price for line items. Always equal to price * quantity. */
        total?: Money$5;
        /** Discount applied to the line item. */
        discount?: Discount$2;
        /** Tax applied to the item. */
        tax?: Tax$2;
        /**
         * Fees applied to the item.
         * @readonly
         */
        fees?: Fee$2[];
    }
    interface Discount$2 {
        /** Total discount amount. */
        amount?: Money$5;
        /** Total charge after applied discount. */
        afterDiscount?: Money$5;
        /** Discount coupon code. */
        code?: string;
        /** Discount coupon name. */
        name?: string;
        /** Discount coupon ID. */
        couponId?: string;
        /** Discount items. */
        discounts?: DiscountItem$2[];
    }
    interface DiscountItem$2 extends DiscountItemDiscountOneOf$2 {
        /** Coupon discount. */
        coupon?: CouponDiscount$2;
        /** Pricing plan discount. */
        paidPlan?: PaidPlanDiscount$2;
        /** Total discount amount. */
        amount?: Money$5;
    }
    /** @oneof */
    interface DiscountItemDiscountOneOf$2 {
        /** Coupon discount. */
        coupon?: CouponDiscount$2;
        /** Pricing plan discount. */
        paidPlan?: PaidPlanDiscount$2;
    }
    interface CouponDiscount$2 {
        /** Discount coupon name. */
        name?: string;
        /** Discount coupon code. */
        code?: string;
        /** Discount coupon ID. */
        couponId?: string;
    }
    interface PaidPlanDiscount$2 extends PaidPlanDiscountDiscountOneOf$2 {
        /** Discount by percentage applied to tickets. */
        percentDiscount?: PercentDiscount$2;
        /** Name of pricing plan. */
        name?: string;
    }
    /** @oneof */
    interface PaidPlanDiscountDiscountOneOf$2 {
        /** Discount by percentage applied to tickets. */
        percentDiscount?: PercentDiscount$2;
    }
    interface PercentDiscount$2 {
        /** Percent rate. */
        rate?: string;
        /** Number of discounted tickets. */
        quantityDiscounted?: number;
    }
    interface Tax$2 {
        /** Tax type. */
        type?: TaxType$3;
        /**
         * Tax name.
         * @readonly
         */
        name?: string;
        /** Tax rate. */
        rate?: string;
        /** Taxable amount. */
        taxable?: Money$5;
        /** Total tax amount. */
        amount?: Money$5;
    }
    enum TaxType$3 {
        /** Tax is included in the ticket price */
        INCLUDED = "INCLUDED",
        /** Tax is added to the order at the checkout */
        ADDED = "ADDED",
        /** Tax is added to the final total at the checkout */
        ADDED_AT_CHECKOUT = "ADDED_AT_CHECKOUT"
    }
    interface Fee$2 {
        /** Fee identifier. */
        name?: FeeName$2;
        /** How fee is calculated. */
        type?: FeeType$3;
        /**
         * Fee rate.
         * @readonly
         */
        rate?: string;
        /** Total amount of fee charges. */
        amount?: Money$5;
    }
    enum FeeName$2 {
        /** Wix service fee charges applied to the line item. */
        WIX_FEE = "WIX_FEE"
    }
    enum FeeType$3 {
        /** Fee is added to the ticket price at checkout */
        FEE_ADDED = "FEE_ADDED",
        /** Seller absorbs the fee. It is deducted from the ticket price */
        FEE_INCLUDED = "FEE_INCLUDED",
        /** Fee is added to the ticket price at checkout */
        FEE_ADDED_AT_CHECKOUT = "FEE_ADDED_AT_CHECKOUT"
    }
    interface PaymentDetails$1 {
        /** Wix Payments transaction */
        transaction?: PaymentTransaction$1;
    }
    interface PaymentTransaction$1 {
        /**
         * Wix Payments transaction id
         * @readonly
         */
        transactionId?: string;
        /**
         * Transaction Payment method e.g., "payPal", "creditCard", etc.
         * @readonly
         */
        method?: string;
    }
    interface OrderDeleted$2 {
        /** Order deleted timestamp in ISO UTC format. */
        timestamp?: Date;
        /** Event ID. */
        eventId?: string;
        /** Unique order number. */
        orderNumber?: string;
        /** Contact ID associated with this order */
        contactId?: string;
        /** Member ID associated with this order. */
        memberId?: string | null;
        /** Whether order was anonymized by GDPR delete. */
        anonymized?: boolean;
        /** Order type. */
        orderType?: OrderType$2;
        /** Whether event was triggered by GDPR delete request. */
        triggeredByAnonymizeRequest?: boolean;
        /** Tickets generated after payment. */
        tickets?: Ticket$3[];
    }
    enum OrderType$2 {
        /** Buyer form is used for all tickets */
        UNASSIGNED_TICKETS = "UNASSIGNED_TICKETS",
        /** Each order ticket has its own form */
        ASSIGNED_TICKETS = "ASSIGNED_TICKETS"
    }
    interface Ticket$3 {
        /** Unique issued ticket number. */
        ticketNumber?: string;
        /** Ticket definition ID. */
        ticketDefinitionId?: string;
        /** Ticket check-in. */
        checkIn?: CheckIn$4;
        /** Ticket price. */
        price?: Money$5;
        /** Whether ticket is archived. */
        archived?: boolean;
        /** Guest first name. */
        firstName?: string | null;
        /** Guest last name. */
        lastName?: string | null;
        /** Guest email. */
        email?: string | null;
        /** Contact ID associated with this ticket. */
        contactId?: string | null;
        /** Whether ticket is confirmed */
        confirmed?: boolean;
        /** Member ID associated with this ticket. */
        memberId?: string | null;
        /** Ticket form response (only assigned tickets contain separate forms). */
        form?: FormResponse$4;
        /** Ticket name. */
        ticketName?: string;
        /** Anonymized tickets no longer contain personally identifiable information (PII). */
        anonymized?: boolean;
        /** URL and password to online conference */
        onlineConferencingLogin?: OnlineConferencingLogin$4;
    }
    interface OnlineConferencingLogin$4 {
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
    interface ListOrdersRequest$1 {
        /** Offset. */
        offset?: number;
        /** Limit. */
        limit?: number;
        /**
         * Predefined sets of fields to return.
         * - `TICKETS`: Returns `tickets`.
         * - `DETAILS`: Returns `reservationId`, `snapshotId`, `created`, `firstName`, `lastName`, `confirmed`, `status`, `method`, `ticketsQuantity`, `totalPrice`, `ticketsPdf`, `archived`, `fullName`.
         * - `FORM` : Returns `checkoutForm`.
         * - `INVOICE`: Returns `invoice`.
         *
         * Default: If `fieldset` is omitted from the request,  `orderNumber`, `eventId`, `contactId`, `memberId`, `anonymized`, `fullyCheckedIn`.
         *
         */
        fieldset?: OrderFieldset$1[];
        /** Status. */
        status?: OrderStatus$3[];
        /**
         * Deprecated: use tag = CONFIRMED
         * @internal
         */
        confirmed?: boolean | null;
        /** Event ID. */
        eventId?: string[];
        /** Order number. */
        orderNumber?: string[];
        /** Site member ID. */
        memberId?: string[];
        /**
         * Deprecated: use tag = MEMBER
         * @internal
         */
        membersOnly?: boolean;
        /** Field facets, */
        facet?: string[];
        /**
         * Deprecated: use tag = ARCHIVED / NON_ARCHIVED
         * @internal
         */
        archived?: boolean | null;
        /** Textual search filter - search is performed on `"full_name"`, `"email"` and `"order_number"`. */
        searchPhrase?: string;
        /** Event creator ID. */
        eventCreatorId?: string[];
        /**
         * Deprecated: use tag = FULLY_CHECKED_IN / NOT_FULLY_CHECKED_IN
         * @internal
         */
        fullyCheckedIn?: boolean | null;
        /**
         * Sort order. Defaults to "created:asc".
         * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-orders).
         */
        sort?: string;
        /** Order tag. */
        tag?: OrderTag$1[];
    }
    enum OrderFieldset$1 {
        /** Include tickets in response */
        TICKETS = "TICKETS",
        /** Include order details: status, first_name, last_name, email, created, etc. */
        DETAILS = "DETAILS",
        /** Include checkout_form */
        FORM = "FORM",
        /** Include invoice */
        INVOICE = "INVOICE"
    }
    enum OrderTag$1 {
        /** Return only confirmed orders */
        CONFIRMED = "CONFIRMED",
        /** Return only unconfirmed orders */
        UNCONFIRMED = "UNCONFIRMED",
        /** Return only member orders */
        MEMBER = "MEMBER",
        /** Return only archived orders */
        ARCHIVED = "ARCHIVED",
        /** Return only non archived orders */
        NON_ARCHIVED = "NON_ARCHIVED",
        /** Return only orders with all guests checked-in */
        FULLY_CHECKED_IN = "FULLY_CHECKED_IN",
        /** Return only orders with no guests checked-in */
        NOT_FULLY_CHECKED_IN = "NOT_FULLY_CHECKED_IN"
    }
    interface ListOrdersResponse$1 {
        /** Total orders matching the given filters. */
        total?: number;
        /** Offset. */
        offset?: number;
        /** Limit. */
        limit?: number;
        /** Orders. */
        orders?: Order$1[];
        /** Filter facets. */
        facets?: Record<string, FacetCounts$5>;
        /** Meta data of search results. */
        searchMetaData?: SearchMetaData$2;
        /** Order data enriched facets. */
        orderFacets?: OrderFacets$1;
    }
    interface FacetCounts$5 {
        /** Facet counts aggregated per value */
        counts?: Record<string, number>;
    }
    interface SearchMetaData$2 {
        /** Search results */
        results?: Result$2[];
    }
    interface Result$2 {
        /** Entity ID */
        _id?: string;
        /**
         * Entity score.
         * Higher is more relevant to search phrase.
         */
        score?: string;
    }
    interface OrderFacets$1 {
        /** Filter facets. */
        facets?: Record<string, OrderFacetCounts$1>;
    }
    interface OrderFacetCounts$1 {
        /** Facet counts aggregated per value */
        counts?: Record<string, Counts$3>;
    }
    interface Counts$3 {
        /** Number or orders */
        count?: number;
        /** Number of tickets within orders */
        tickets?: number;
        /** Number of tickets with check-in */
        ticketsCheckIn?: number;
    }
    interface GetOrderRequest$1 {
        /** Event ID. */
        eventId: string;
        /** Unique order number. */
        orderNumber: string;
        /**
         * Predefined sets of fields to return.
         * - `TICKETS`: Returns `tickets`.
         * - `DETAILS`: Returns `reservationId`, `snapshotId`, `created`, `firstName`, `lastName`, `confirmed`, `status`, `method`, `ticketsQuantity`, `totalPrice`, `ticketsPdf`, `archived`, `fullName`.
         * - `FORM` : Returns `checkoutForm`.
         * - `INVOICE`: Returns `invoice`.
         *
         * Default: If `fieldset` is omitted from the request,  `orderNumber`, `eventId`, `contactId`, `memberId`, `anonymized`, `fullyCheckedIn`.
         */
        fieldset?: OrderFieldset$1[];
    }
    interface GetOrderResponse$1 {
        /** Requested order. */
        order?: Order$1;
        /** "Add to calendar" links. */
        calendarLinks?: CalendarLinks$3;
    }
    interface CalendarLinks$3 {
        /** "Add to Google calendar" URL. */
        google?: string;
        /** "Download ICS calendar file" URL. */
        ics?: string;
    }
    interface GetOrderByOrderNumberRequest$1 {
        /** Unique order number. */
        orderNumber?: string;
    }
    interface GetOrderByOrderNumberResponse$1 {
        /** Requested order. */
        order?: Order$1;
    }
    interface UpdateOrderRequest$1 {
        /** Event ID. */
        eventId: string;
        /** Unique order number. */
        orderNumber: string;
        /** Set of field paths to update. */
        fields: string[];
        /** Checkout form. */
        checkoutForm?: FormResponse$4;
        /** Whether order is archived. */
        archived?: boolean;
    }
    interface UpdateOrderResponse$1 {
        /** Updated order. */
        order?: Order$1;
    }
    interface OrderUpdated$3 {
        /** Order updated timestamp in ISO UTC format. */
        timestamp?: Date;
        /** Site language when Order initiated */
        language?: string | null;
        /** Event ID. */
        eventId?: string;
        /** Unique order number. */
        orderNumber?: string;
        /** Contact ID associated with this order. */
        contactId?: string;
        /** Member ID associated with this order. */
        memberId?: string | null;
        /**
         * Order created timestamp.
         * @readonly
         */
        created?: Date;
        /** Buyer first name. */
        firstName?: string;
        /** Buyer last name. */
        lastName?: string;
        /** Buyer email. */
        email?: string;
        /** Checkout form response. */
        checkoutForm?: FormResponse$4;
        /** Whether order is confirmed - occurs once payment gateway processes the payment and funds reach merchant's account. */
        confirmed?: boolean;
        /** Order status. */
        status?: OrderStatus$3;
        /** Payment method used for paid tickets purchase, i.e. "payPal", "creditCard", etc. */
        method?: string | null;
        /** Tickets generated after payment. */
        tickets?: Ticket$3[];
        /** Whether order was archived and excluded from results. */
        archived?: boolean;
        /** Whether event was triggered by GDPR delete request. */
        triggeredByAnonymizeRequest?: boolean;
    }
    interface BulkUpdateOrdersRequest$1 {
        /** Event ID. */
        eventId: string;
        orderNumber?: string[];
        /** Set of fields to update. */
        fields?: string[];
        /** Whether to archive the order. */
        archived?: boolean;
    }
    interface BulkUpdateOrdersResponse$1 {
        /** Updated orders. */
        orders?: Order$1[];
    }
    interface ConfirmOrderRequest$1 {
        /** Event ID. */
        eventId: string;
        /** Order numbers. */
        orderNumber?: string[];
    }
    interface ConfirmOrderResponse$1 {
        /** Confirmed orders. */
        orders?: Order$1[];
    }
    interface GetSummaryRequest$1 {
        /** Event ID. */
        eventId?: string | null;
    }
    interface GetSummaryResponse$1 {
        /** Ticket sales grouped by currency. */
        sales?: TicketSales$1[];
    }
    interface TicketSales$1 {
        /** Total balance of confirmed transactions. */
        total?: Money$5;
        /** Total number of confirmed orders. */
        totalOrders?: number;
        /** Total number of tickets purchased. */
        totalTickets?: number;
        /** Total revenue, excluding fees (taxes and payment provider fees are not deducted). */
        revenue?: Money$5;
    }
    interface GetInvoicePreviewRequest$1 {
        /** Event ID. */
        eventId: string;
        /** Order number. */
        orderNumber: string;
    }
    interface RawHttpResponse$1 {
        body?: Uint8Array;
        statusCode?: number | null;
        headers?: HeadersEntry$1[];
    }
    interface HeadersEntry$1 {
        key?: string;
        value?: string;
    }
    interface GetPaymentInfoRequest$1 {
        /** Event ID. */
        eventId?: string;
        /** Order number. */
        orderNumber?: string;
    }
    interface GetPaymentInfoResponse$1 {
        transactions?: PaymentTransactionSummary$1[];
        status?: string | null;
        /** @readonly */
        transactionId?: string | null;
    }
    interface PaymentTransactionSummary$1 {
        /**
         * Wix Payments transaction id
         * @readonly
         */
        transactionId?: string;
        /**
         * Final transaction status
         * @readonly
         */
        finalTransactionStatus?: string;
        /** Transaction events */
        events?: PaymentTransactionEvent$1[];
    }
    interface PaymentTransactionEvent$1 {
        /**
         * Order snapshot id
         * @readonly
         */
        snapshotId?: string;
        /**
         * Transaction status
         * @readonly
         */
        transactionStatus?: string;
        /**
         * Transaction Payment method e.g., "payPal", "creditCard", etc.
         * @readonly
         */
        paymentMethod?: string;
        /**
         * Transaction payment amount
         * @readonly
         */
        paymentAmount?: Money$5;
        /**
         * Crated date
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Reason code
         * @readonly
         */
        reasonCode?: string | null;
        /**
         * Refunded amount
         * @readonly
         */
        refundedAmount?: Money$5;
    }
    interface OrderConfirmed$2 {
        /** Order confirmation timestamp in ISO UTC. */
        timestamp?: Date;
        /** Site language when Order initiated */
        language?: string | null;
        /** Notifications silenced for this domain event. */
        silent?: boolean | null;
        /** Event ID. */
        eventId?: string;
        /** Unique order number. */
        orderNumber?: string;
        /** Contact ID associated with this order. */
        contactId?: string;
        /** Member ID associated with this order. */
        memberId?: string | null;
        /**
         * Order created timestamp
         * @readonly
         */
        created?: Date;
        /** Buyer first name. */
        firstName?: string;
        /** Buyer last name. */
        lastName?: string;
        /** Buyer email address. */
        email?: string;
        /** Checkout form response. */
        checkoutForm?: FormResponse$4;
        /** Order status. */
        status?: OrderStatus$3;
        /** Payment method used for paid tickets purchase, i.e. "payPal", "creditCard", etc. */
        method?: string | null;
        /** Tickets (generated after payment). */
        tickets?: Ticket$3[];
        /** Invoice. */
        invoice?: Invoice$2;
        /** Reservation ID associated with this order. */
        reservationId?: string;
    }
    interface OrderPaid$1 {
        /** Order paid timestamp in ISO UTC. */
        timestamp?: Date;
        /** Event ID. */
        eventId?: string;
        /** Unique order number. */
        orderNumber?: string;
        /** Reservation ID associated with this order. */
        reservationId?: string;
    }
    interface ReservationCreated$1 {
        /** Reservation created timestamp in ISO UTC format. */
        timestamp?: Date;
        /** Event ID. */
        eventId?: string;
        /**
         * Reservation ID.
         * Can be used to retrieve a reservation invoice.
         */
        reservationId?: string;
        /** Reservation expiration timestamp. */
        expires?: Date;
        /** Reservation status. */
        status?: ReservationStatus$1;
        /** Reservation ticket quantities. */
        quantities?: TicketQuantity$1[];
    }
    enum ReservationStatus$1 {
        /**
         * Reservation is pending confirmation.
         * The reservation will expire after the expiration due time.
         */
        RESERVATION_PENDING = "RESERVATION_PENDING",
        /** The reservation was confirmed and will not expire. */
        RESERVATION_CONFIRMED = "RESERVATION_CONFIRMED",
        /** The reservation was canceled because of non payment. */
        RESERVATION_CANCELED = "RESERVATION_CANCELED",
        /** The reservation was canceled manually by the buyer. */
        RESERVATION_CANCELED_MANUALLY = "RESERVATION_CANCELED_MANUALLY",
        /** The reservation has expired. */
        RESERVATION_EXPIRED = "RESERVATION_EXPIRED"
    }
    interface TicketQuantity$1 {
        /** Ticket definition ID. */
        ticketDefinitionId?: string | null;
        /** Quantity. */
        quantity?: number | null;
    }
    interface ReservationUpdated$1 {
        /** Reservation updated timestamp. */
        timestamp?: Date;
        /** Event ID. */
        eventId?: string;
        /**
         * Reservation ID.
         * Can be used to retrieve a reservation invoice.
         */
        reservationId?: string;
        /** Reservation status. */
        status?: ReservationStatus$1;
        /** Reservation expiration timestamp. */
        expires?: Date;
        /** Reservation ticket quantities. */
        quantities?: TicketQuantity$1[];
    }
    interface GetCheckoutOptionsRequest$1 {
    }
    interface GetCheckoutOptionsResponse$1 {
        /** Whether any payment method is configured and available for payment. */
        paymentMethodConfigured?: boolean;
        /** Whether coupons are accepted at checkout. */
        acceptCoupons?: boolean;
        /** Whether premium services are enabled. Enabled for free if site does not sell any paid tickets. Selling tickets for a fee requires a premium feature "events_sell_tickets". */
        premiumServices?: boolean;
        /** Whether there are any paid tickets available for sale. */
        paidTickets?: boolean;
    }
    interface ListAvailableTicketsRequest$1 {
        /** Event ID. If not provided, available tickets for all events in the site will be returned. */
        eventId?: string;
        /** Offset. */
        offset?: number;
        /** Limit. */
        limit?: number;
        /**
         * Sort order, defaults to "created:asc".
         * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-available-tickets).
         */
        sort?: string;
        /**
         * Only used in tests.
         * @internal
         */
        overrideRequestTime?: Date;
        state?: State$5[];
    }
    enum State$5 {
        INCLUDE_HIDDEN_NOT_ON_SALE = "INCLUDE_HIDDEN_NOT_ON_SALE"
    }
    interface ListAvailableTicketsResponse$1 {
        /** Ticket definitions meta data. */
        metaData?: ResponseMetaData$2;
        /** Ticket definitions. */
        definitions?: TicketDefinition$2[];
    }
    interface ResponseMetaData$2 {
        /** Number of items in the response. */
        count?: number;
        /** Offset of items. */
        offset?: number;
        /** Total number of matching items. */
        total?: number;
    }
    interface TicketDefinition$2 {
        /** Ticket definition ID. */
        _id?: string;
        /** Ticket price. */
        price?: Money$5;
        /** Whether the ticket is free (read only). */
        free?: boolean;
        /** Ticket name. */
        name?: string;
        /** Ticket description. */
        description?: string;
        /**
         * Limit of tickets that can be purchased per checkout.
         * Set to 20 for unlimited ticket definition.
         */
        limitPerCheckout?: number;
        /** Custom sort index. */
        orderIndex?: number;
        /** Policy information plain text block, as printed on the ticket. */
        policy?: string;
        /** Sensitive dashboard data. */
        dashboard?: Dashboard$3;
        /** Event ID associated with the ticket. */
        eventId?: string;
        /**
         * Configuration of the fixed-rate Wix service fee that is applied at checkout to each ticket sold.
         * @readonly
         */
        wixFeeConfig?: WixFeeConfig$2;
        /** Ticket sale period. */
        salePeriod?: TicketSalePeriod$2;
        /**
         * Ticket sale status.
         * @readonly
         */
        saleStatus?: TicketSaleStatus$2;
        /** Ticket state. */
        state?: State$5[];
        /** Ticket pricing. */
        pricing?: TicketPricing$2;
    }
    interface Dashboard$3 {
        /** Whether ticket is hidden and cannot be sold. */
        hidden?: boolean;
        /** Number of tickets sold and reserved. */
        sold?: number;
        /** Whether the ticket has limited quantity. */
        limited?: boolean;
        /** Ticket limit. `NULL` for unlimited ticket definitions. */
        quantity?: number | null;
        /** Number of unsold tickets. `NULL` for unlimited ticket definitions. */
        unsold?: number | null;
        /** Number of tickets sold. */
        ticketsSold?: number;
        /** Number of tickets reserved. */
        ticketsReserved?: number;
    }
    interface WixFeeConfig$2 {
        /** Fee calculation method. */
        type?: FeeType$3;
    }
    interface TicketSalePeriod$2 {
        /** Ticket sale start timestamp. */
        startDate?: Date;
        /** Ticket sale end timestamp. */
        endDate?: Date;
        /** Whether to hide this ticket if it's not on sale */
        hideNotOnSale?: boolean;
    }
    enum TicketSaleStatus$2 {
        /** Ticket sale is scheduled to start */
        SALE_SCHEDULED = "SALE_SCHEDULED",
        /** Ticket sale has started */
        SALE_STARTED = "SALE_STARTED",
        /** Ticket sale has ended */
        SALE_ENDED = "SALE_ENDED"
    }
    interface TicketPricing$2 extends TicketPricingPriceOneOf$2 {
        /** Ticket price which is read only. */
        fixedPrice?: Money$5;
        /** Min price per ticket, customizable. */
        minPrice?: Money$5;
        /** Ticket pricing options. */
        pricingOptions?: PricingOptions$2;
        /**
         * Ticket pricing type.
         * @readonly
         */
        pricingType?: Type$2;
    }
    /** @oneof */
    interface TicketPricingPriceOneOf$2 {
        /** Ticket price which is read only. */
        fixedPrice?: Money$5;
        /** Min price per ticket, customizable. */
        minPrice?: Money$5;
        /** Ticket pricing options. */
        pricingOptions?: PricingOptions$2;
    }
    interface PricingOptions$2 {
        /** Multiple ticket pricing options. */
        options?: PricingOption$2[];
    }
    interface PricingOption$2 {
        /** Ticket pricing option ID. */
        _id?: string | null;
        /** Ticket pricing option name. */
        name?: string | null;
        /** Ticket pricing option price. */
        price?: Money$5;
    }
    enum Type$2 {
        STANDARD = "STANDARD",
        DONATION = "DONATION"
    }
    interface QueryAvailableTicketsRequest$1 {
        /** Offset. */
        offset?: number;
        /** Limit. */
        limit?: number;
        /** Ticket definition. */
        filter?: Record<string, any> | null;
        fieldset?: TicketDefinitionFieldset$2[];
        /** Sort order, defaults to "created:asc". */
        sort?: string;
    }
    enum TicketDefinitionFieldset$2 {
        /** Include policy in the response. */
        POLICY = "POLICY",
        /** Include dashboard in the response. */
        DASHBOARD = "DASHBOARD"
    }
    interface QueryAvailableTicketsResponse$1 {
        /** Ticket definitions meta data. */
        metaData?: ResponseMetaData$2;
        /** Ticket definitions. */
        definitions?: TicketDefinition$2[];
    }
    interface CreateReservationRequest$1 {
        /** Event ID. */
        eventId: string;
        /** Tickets to reserve. */
        ticketQuantities?: TicketReservationQuantity$1[];
        /** Whether to ignore the available ticket limits upon reservation. */
        ignoreLimits?: boolean;
        /**
         * Only used in tests.
         * @internal
         */
        overrideRequestTime?: Date;
        /** Whether to allow reservation for hidden tickets. */
        allowHiddenTickets?: boolean;
        /**
         * Whether to exclude Wix fee.
         * @internal
         */
        excludeFee?: boolean;
    }
    interface TicketReservationQuantity$1 {
        /** Ticket definition ID. */
        ticketDefinitionId?: string;
        /** Quantity of tickets to reserve. */
        quantity?: number;
        /** Ticket price to charge - overriding the ticket price. */
        priceOverride?: string | null;
        /** Optional ticket details */
        ticketDetails?: TicketDetails$3[];
    }
    interface CreateReservationResponse$1 {
        /** Reservation ID. */
        _id?: string;
        /** Reservation expiration timestamp. */
        expires?: Date;
        /** Ticket reservations. */
        reservations?: TicketReservation$1[];
        /** Reservation invoice. */
        invoice?: Invoice$2;
    }
    interface TicketReservation$1 {
        /** Quantity of reserved tickets. */
        quantity?: number;
        /** An object containing ticket information. */
        ticket?: TicketDefinition$2;
        /** Optional ticket details. */
        ticketDetails?: TicketDetails$3[];
    }
    interface CancelReservationRequest$1 {
        /** Event ID. */
        eventId: string;
        /** Reservation ID. */
        _id: string;
    }
    interface CancelReservationResponse$1 {
    }
    interface GetInvoiceRequest$1 {
        /** Event ID. */
        eventId: string;
        /** Reservation ID. */
        reservationId: string;
        /** Optional discount to be applied on the returned invoice. */
        withDiscount?: DiscountRequest$1;
        /** Optional benefit granted by the pricing plan to be applied on the returned invoice. */
        paidPlanBenefit?: PaidPlanBenefit$1;
    }
    interface DiscountRequest$1 {
        /** Discount coupon code. */
        couponCode?: string;
    }
    interface PaidPlanBenefit$1 {
        /** Pricing plan ID. */
        planOrderId?: string;
        /** Pricing plan benefit ID. */
        benefitId?: string;
    }
    interface GetInvoiceResponse$1 {
        /** Invoice with applied discount. */
        invoice?: Invoice$2;
        /** Discount errors, if relevant. */
        discountErrors?: DiscountErrors$1;
        /** Time when the reservation expires. */
        expires?: Date;
        /** Reservation status. */
        reservationStatus?: ReservationStatus$1;
        /** Whether this reservation is already used in checkout. */
        reservationOccupied?: boolean;
        /** Ticket reservations. */
        reservations?: TicketReservation$1[];
    }
    interface DiscountErrors$1 {
        /** Object containing error information. */
        error?: Error$1[];
    }
    interface Error$1 {
        /** A code identifying the error type. */
        code?: string;
    }
    interface CheckoutRequest$1 {
        /** Event ID. */
        eventId: string;
        /** Ticket reservation ID. */
        reservationId?: string;
        /** Member ID (if empty - no site member is associated to this order). */
        memberId?: string;
        /** Discount to apply on the invoice. */
        discount?: DiscountRequest$1;
        /**
         * Deprecated.
         * @internal
         */
        silent?: boolean;
        /**
         * Deprecated.
         * @internal
         */
        payInPerson?: boolean;
        /** Buyer details. */
        buyer?: Buyer$1;
        /** Guest details. */
        guests?: Guest$3[];
        /** Benefit granted by the pricing plan. */
        paidPlanBenefit?: PaidPlanBenefit$1;
        /** Options controlling the checkout process. */
        options?: CheckoutOptions$1;
        /**
         * Only used in tests.
         * @internal
         */
        overrideRequestTime?: Date;
    }
    interface Buyer$1 {
        /** Buyer first name. */
        firstName?: string;
        /** Buyer last name. */
        lastName?: string;
        /** Buyer email. */
        email?: string;
    }
    interface Guest$3 {
        /** Specific guest info. */
        form?: FormResponse$4;
    }
    interface CheckoutOptions$1 {
        /** Whether to ignore settings to notify contacts or users. */
        silent?: boolean;
        /** Whether the payment is to be done in person between the buyer and the merchant. When true, the completed order is created with status OFFLINE_PENDING and inPerson payment method. */
        payInPerson?: boolean;
        /** Whether to ignore form validation. */
        ignoreFormValidation?: boolean;
        /**
         * URL which overrides default payment redirect URL.
         * @internal
         */
        paymentRedirectUrl?: string | null;
    }
    interface CheckoutResponse$1 {
        /** Created order. */
        order?: Order$1;
        /** Time when the order expires, applies to orders with status = INITIATED. */
        expires?: Date;
        /** Ticket reservations. */
        reservations?: TicketReservation$1[];
    }
    interface OrderInitiated$1 {
        /** Order initiated timestamp in ISO UTC format. */
        timestamp?: Date;
        /** Site language when Order initiated */
        language?: string | null;
        /** Event ID. */
        eventId?: string;
        /** Unique order number. */
        orderNumber?: string;
        /** Contact ID associated with this order. */
        contactId?: string;
        /** Member ID associated with this order. */
        memberId?: string | null;
        /** Guest first name. */
        firstName?: string;
        /** Guest last name. */
        lastName?: string;
        /** Guest email address. */
        email?: string;
        /** Checkout form response. */
        checkoutForm?: FormResponse$4;
        /** Order status. */
        status?: OrderStatus$3;
        /** Invoice. */
        invoice?: Invoice$2;
        /** Reservation ID associated with this order. */
        reservationId?: string;
    }
    interface UpdateCheckoutRequest$1 {
        /** Event ID. */
        eventId: string;
        /** Unique order number. */
        orderNumber: string;
        /** Buyer details. */
        buyer?: Buyer$1;
        /** Guest details. */
        guests?: Guest$3[];
        /** Member ID (if empty - no site member is associated to this order). */
        memberId?: string | null;
        /** Discount to apply on the invoice. */
        discount?: DiscountRequest$1;
        /** Benefit granted by the pricing plan. */
        paidPlanBenefit?: PaidPlanBenefit$1;
    }
    interface UpdateCheckoutResponse$1 {
        /** Updated order. */
        order?: Order$1;
    }
    interface PosCheckoutRequest$1 {
        /** Event ID. */
        eventId: string;
        /** Ticket reservation ID. */
        reservationId: string;
        /**
         * Payment details ID.
         * Not required if reservation total is 0. In this case the order will be created with status Free and no payment.
         */
        paymentDetailsId?: string | null;
    }
    interface PosCheckoutResponse$1 {
        /** Created order. */
        order?: Order$1;
        /** Time when the order expires, applies to orders with status = INITIATED. */
        expires?: Date;
        /** Ticket reservations. */
        reservations?: TicketReservation$1[];
    }
    /**
     * Returns checkout meta data used in checkout UX.
     * <!--
     * > Note: This function is restricted and only runs if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
     * -->
     * @public
     * @documentationMaturity preview
     */
    function getCheckoutOptions(): Promise<GetCheckoutOptionsResponse$1>;
    /**
     * Returns tickets available to reserve.
     * <!--
     * > Note: This function is restricted and only runs if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
     * -->
     * @public
     * @documentationMaturity preview
     * @param options - An object representing the available options for retrieving a list of tickets available for reservation.
     */
    function listAvailableTickets(options?: ListAvailableTicketsOptions): Promise<ListAvailableTicketsResponse$1>;
    interface ListAvailableTicketsOptions {
        /** Event ID. If not provided, available tickets for all events in the site will be returned. */
        eventId?: string;
        /** Offset. */
        offset?: number;
        /** Limit. */
        limit?: number;
        /** Sort order, defaults to "created:asc". */
        sort?: string;
        /**
         * Only used in tests.
         * @internal
         */
        overrideRequestTime?: Date;
        state?: State$5[];
    }
    /**
     * Returns tickets available to reserve.
     * <!--
     * > Note: The fieldsets in this function are restricted and only run if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
     * -->
     * @public
     * @documentationMaturity preview
     * @param options - An object representing the available options for retrieving a list of tickets available for reservation.
     */
    function queryAvailableTickets(options?: QueryAvailableTicketsOptions): Promise<QueryAvailableTicketsResponse$1>;
    interface QueryAvailableTicketsOptions {
        /** Offset. */
        offset?: number;
        /** Limit. */
        limit?: number;
        /** Ticket definition. */
        filter?: Record<string, any> | null;
        fieldset?: TicketDefinitionFieldset$2[];
        /** Sort order, defaults to "created:asc". */
        sort?: string;
    }
    /**
     * Reserves tickets for 20 minutes.
     * Reserved tickets are deducted from tickets stock and cannot be bought by another party.
     * When the reservation expires, the tickets are added back in the stock.
     * <!--
     * > Note: This function is restricted and only runs if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
     * -->
     * @param eventId - Event ID.
     * @public
     * @documentationMaturity preview
     * @requiredField eventId
     * @param options - An object representing the available options for creating a reservation.
     */
    function createReservation(eventId: string, options?: CreateReservationOptions): Promise<CreateReservationResponse$1>;
    interface CreateReservationOptions {
        /** Tickets to reserve. */
        ticketQuantities?: TicketReservationQuantity$1[];
        /** Whether to ignore the available ticket limits upon reservation. */
        ignoreLimits?: boolean;
        /**
         * Only used in tests.
         * @internal
         */
        overrideRequestTime?: Date;
        /** Whether to allow reservation for hidden tickets. */
        allowHiddenTickets?: boolean;
        /**
         * Whether to exclude Wix fee.
         * @internal
         */
        excludeFee?: boolean;
    }
    /**
     * Cancels ticket reservation and returns tickets to stock.
     * <!--
     * > Note: This function is restricted and only runs if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
     * -->
     * @public
     * @documentationMaturity preview
     * @requiredField identifiers
     * @requiredField identifiers.eventId
     * @requiredField identifiers.id
     * @param identifiers - An object containing identifiers for the reservation to be cancelled.
     */
    function cancelReservation(identifiers: CancelReservationIdentifiers): Promise<void>;
    interface CancelReservationIdentifiers {
        /** Event ID. */
        eventId: string;
        /** Reservation ID. */
        _id: string;
    }
    /**
     * Generates a preview of a reservation invoice, including the given coupon or pricing plan.
     * <!--
     * > Note: This function is restricted and only runs if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
     * -->
     * @public
     * @documentationMaturity preview
     * @requiredField identifiers
     * @requiredField identifiers.eventId
     * @requiredField identifiers.reservationId
     * @param options - An object representing the available options for generating a preview of a reservation invoice.
     * @param identifiers - An object containing identifiers for the reservation invoice preview to be generated.
     */
    function getInvoice(identifiers: GetInvoiceIdentifiers, options?: GetInvoiceOptions): Promise<GetInvoiceResponse$1>;
    interface GetInvoiceIdentifiers {
        /** Event ID. */
        eventId: string;
        /** Reservation ID. */
        reservationId: string;
    }
    interface GetInvoiceOptions {
        /** Optional discount to be applied on the returned invoice. */
        withDiscount?: DiscountRequest$1;
        /** Optional benefit granted by the pricing plan to be applied on the returned invoice. */
        paidPlanBenefit?: PaidPlanBenefit$1;
    }
    /**
     * Checkout of reserved tickets.
     *
     *
     * Creates order and associates it with a site contact.
     * Guest details must be sent according to the Registration Form input fields.
     * (To change an existing "INITIATED, "PENDING", or "OFFLINE_PENDING" order, call the [Update Checkout](https://dev.wix.com/api/rest/wix-events/wix-events/checkout/update-checkout) endpoint).
     *
     * There is a possibility to use a separate ready-made Wix checkout form where the user will be redirected from your non-Wix site or a custom ticket picker created with Velo.
     * To construct the checkout form path, get your event base URL by using the [`getEvent()`](https://www.wix.com/velo/reference/wix-events-backend/wixevents/getevent) function and add the following path:
     * `/{{EVENT_PAGE_SLUG}}/{{SLUG}}/ticket-form?reservationId={{YOUR_RESERVATION_ID}}`
     *
     * Example:  `https://johndoe.wixsite.com/weddings/event-details/doe-wedding/ticket-form?reservationId=2be6d34a-2a1e-459f-897b-b4a66e73f69a`
     *
     * <!--
     * > Note: This function is restricted and only runs if you elevate permissions using the [`wix-auth.elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function.
     * -->
     * @param eventId - Event ID.
     * @public
     * @documentationMaturity preview
     * @requiredField eventId
     * @requiredField options.guests.form
     * @param options - An object representing the available options for checking out a reserved ticket.
     */
    function checkout(eventId: string, options?: CheckoutOptionsForRequest): Promise<CheckoutResponse$1>;
    interface CheckoutOptionsForRequest {
        /** Ticket reservation ID. */
        reservationId?: string;
        /** Member ID (if empty - no site member is associated to this order). */
        memberId?: string;
        /** Discount to apply on the invoice. */
        discount?: DiscountRequest$1;
        /**
         * Deprecated.
         * @internal
         */
        silent?: boolean;
        /**
         * Deprecated.
         * @internal
         */
        payInPerson?: boolean;
        /** Buyer details. */
        buyer?: Buyer$1;
        /** Guest details. */
        guests?: Guest$3[];
        /** Benefit granted by the pricing plan. */
        paidPlanBenefit?: PaidPlanBenefit$1;
        /** Options controlling the checkout process. */
        options?: CheckoutOptions$1;
        /**
         * Only used in tests.
         * @internal
         */
        overrideRequestTime?: Date;
    }
    /**
     * Updates order and tickets (supported only for unconfirmed orders).
     * Guest details must be sent according to Registration Form input fields.
     * <!--
     * > Note: This function is restricted and only runs if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
     * -->
     * @public
     * @documentationMaturity preview
     * @requiredField identifiers
     * @requiredField identifiers.eventId
     * @requiredField identifiers.orderNumber
     * @param options - An object representing the available options for updating an order and tickets.
     * @param identifiers - An object containing identifiers for the order and tickets to be updated.
     */
    function updateCheckout(identifiers: UpdateCheckoutIdentifiers, options?: UpdateCheckoutOptions): Promise<UpdateCheckoutResponse$1>;
    interface UpdateCheckoutIdentifiers {
        /** Event ID. */
        eventId: string;
        /** Unique order number. */
        orderNumber: string;
    }
    interface UpdateCheckoutOptions {
        /** Buyer details. */
        buyer?: Buyer$1;
        /** Guest details. */
        guests?: Guest$3[];
        /** Member ID (if empty - no site member is associated to this order). */
        memberId?: string | null;
        /** Discount to apply on the invoice. */
        discount?: DiscountRequest$1;
        /** Benefit granted by the pricing plan. */
        paidPlanBenefit?: PaidPlanBenefit$1;
    }
    /**
     * Creates order with payment details already initiated via Cashier Pay API.
     * @param eventId - Event ID.
     * @param reservationId - Ticket reservation ID.
     * @internal
     * @documentationMaturity preview
     * @requiredField eventId
     * @requiredField reservationId
     */
    function posCheckout(eventId: string, reservationId: string, options?: PosCheckoutOptions): Promise<PosCheckoutResponse$1>;
    interface PosCheckoutOptions {
        /**
         * Payment details ID.
         * Not required if reservation total is 0. In this case the order will be created with status Free and no payment.
         */
        paymentDetailsId?: string | null;
    }
    const eventsV1OrderCheckout_universal_d_getCheckoutOptions: typeof getCheckoutOptions;
    const eventsV1OrderCheckout_universal_d_listAvailableTickets: typeof listAvailableTickets;
    type eventsV1OrderCheckout_universal_d_ListAvailableTicketsOptions = ListAvailableTicketsOptions;
    const eventsV1OrderCheckout_universal_d_queryAvailableTickets: typeof queryAvailableTickets;
    type eventsV1OrderCheckout_universal_d_QueryAvailableTicketsOptions = QueryAvailableTicketsOptions;
    const eventsV1OrderCheckout_universal_d_createReservation: typeof createReservation;
    type eventsV1OrderCheckout_universal_d_CreateReservationOptions = CreateReservationOptions;
    const eventsV1OrderCheckout_universal_d_cancelReservation: typeof cancelReservation;
    type eventsV1OrderCheckout_universal_d_CancelReservationIdentifiers = CancelReservationIdentifiers;
    const eventsV1OrderCheckout_universal_d_getInvoice: typeof getInvoice;
    type eventsV1OrderCheckout_universal_d_GetInvoiceIdentifiers = GetInvoiceIdentifiers;
    type eventsV1OrderCheckout_universal_d_GetInvoiceOptions = GetInvoiceOptions;
    const eventsV1OrderCheckout_universal_d_checkout: typeof checkout;
    type eventsV1OrderCheckout_universal_d_CheckoutOptionsForRequest = CheckoutOptionsForRequest;
    const eventsV1OrderCheckout_universal_d_updateCheckout: typeof updateCheckout;
    type eventsV1OrderCheckout_universal_d_UpdateCheckoutIdentifiers = UpdateCheckoutIdentifiers;
    type eventsV1OrderCheckout_universal_d_UpdateCheckoutOptions = UpdateCheckoutOptions;
    const eventsV1OrderCheckout_universal_d_posCheckout: typeof posCheckout;
    type eventsV1OrderCheckout_universal_d_PosCheckoutOptions = PosCheckoutOptions;
    namespace eventsV1OrderCheckout_universal_d {
        export { __debug$9 as __debug, Order$1 as Order, FormResponse$4 as FormResponse, InputValue$4 as InputValue, FormattedAddress$4 as FormattedAddress, Address$7 as Address, AddressStreetOneOf$7 as AddressStreetOneOf, StreetAddress$7 as StreetAddress, AddressLocation$7 as AddressLocation, Subdivision$7 as Subdivision, SubdivisionType$7 as SubdivisionType, OrderStatus$3 as OrderStatus, Money$5 as Money, TicketingTicket$2 as TicketingTicket, CheckIn$4 as CheckIn, GuestDetails$3 as GuestDetails, ChannelType$2 as ChannelType, TicketDetails$3 as TicketDetails, Invoice$2 as Invoice, Item$2 as Item, Discount$2 as Discount, DiscountItem$2 as DiscountItem, DiscountItemDiscountOneOf$2 as DiscountItemDiscountOneOf, CouponDiscount$2 as CouponDiscount, PaidPlanDiscount$2 as PaidPlanDiscount, PaidPlanDiscountDiscountOneOf$2 as PaidPlanDiscountDiscountOneOf, PercentDiscount$2 as PercentDiscount, Tax$2 as Tax, TaxType$3 as TaxType, Fee$2 as Fee, FeeName$2 as FeeName, FeeType$3 as FeeType, PaymentDetails$1 as PaymentDetails, PaymentTransaction$1 as PaymentTransaction, OrderDeleted$2 as OrderDeleted, OrderType$2 as OrderType, Ticket$3 as Ticket, OnlineConferencingLogin$4 as OnlineConferencingLogin, ListOrdersRequest$1 as ListOrdersRequest, OrderFieldset$1 as OrderFieldset, OrderTag$1 as OrderTag, ListOrdersResponse$1 as ListOrdersResponse, FacetCounts$5 as FacetCounts, SearchMetaData$2 as SearchMetaData, Result$2 as Result, OrderFacets$1 as OrderFacets, OrderFacetCounts$1 as OrderFacetCounts, Counts$3 as Counts, GetOrderRequest$1 as GetOrderRequest, GetOrderResponse$1 as GetOrderResponse, CalendarLinks$3 as CalendarLinks, GetOrderByOrderNumberRequest$1 as GetOrderByOrderNumberRequest, GetOrderByOrderNumberResponse$1 as GetOrderByOrderNumberResponse, UpdateOrderRequest$1 as UpdateOrderRequest, UpdateOrderResponse$1 as UpdateOrderResponse, OrderUpdated$3 as OrderUpdated, BulkUpdateOrdersRequest$1 as BulkUpdateOrdersRequest, BulkUpdateOrdersResponse$1 as BulkUpdateOrdersResponse, ConfirmOrderRequest$1 as ConfirmOrderRequest, ConfirmOrderResponse$1 as ConfirmOrderResponse, GetSummaryRequest$1 as GetSummaryRequest, GetSummaryResponse$1 as GetSummaryResponse, TicketSales$1 as TicketSales, GetInvoicePreviewRequest$1 as GetInvoicePreviewRequest, RawHttpResponse$1 as RawHttpResponse, HeadersEntry$1 as HeadersEntry, GetPaymentInfoRequest$1 as GetPaymentInfoRequest, GetPaymentInfoResponse$1 as GetPaymentInfoResponse, PaymentTransactionSummary$1 as PaymentTransactionSummary, PaymentTransactionEvent$1 as PaymentTransactionEvent, OrderConfirmed$2 as OrderConfirmed, OrderPaid$1 as OrderPaid, ReservationCreated$1 as ReservationCreated, ReservationStatus$1 as ReservationStatus, TicketQuantity$1 as TicketQuantity, ReservationUpdated$1 as ReservationUpdated, GetCheckoutOptionsRequest$1 as GetCheckoutOptionsRequest, GetCheckoutOptionsResponse$1 as GetCheckoutOptionsResponse, ListAvailableTicketsRequest$1 as ListAvailableTicketsRequest, State$5 as State, ListAvailableTicketsResponse$1 as ListAvailableTicketsResponse, ResponseMetaData$2 as ResponseMetaData, TicketDefinition$2 as TicketDefinition, Dashboard$3 as Dashboard, WixFeeConfig$2 as WixFeeConfig, TicketSalePeriod$2 as TicketSalePeriod, TicketSaleStatus$2 as TicketSaleStatus, TicketPricing$2 as TicketPricing, TicketPricingPriceOneOf$2 as TicketPricingPriceOneOf, PricingOptions$2 as PricingOptions, PricingOption$2 as PricingOption, Type$2 as Type, QueryAvailableTicketsRequest$1 as QueryAvailableTicketsRequest, TicketDefinitionFieldset$2 as TicketDefinitionFieldset, QueryAvailableTicketsResponse$1 as QueryAvailableTicketsResponse, CreateReservationRequest$1 as CreateReservationRequest, TicketReservationQuantity$1 as TicketReservationQuantity, CreateReservationResponse$1 as CreateReservationResponse, TicketReservation$1 as TicketReservation, CancelReservationRequest$1 as CancelReservationRequest, CancelReservationResponse$1 as CancelReservationResponse, GetInvoiceRequest$1 as GetInvoiceRequest, DiscountRequest$1 as DiscountRequest, PaidPlanBenefit$1 as PaidPlanBenefit, GetInvoiceResponse$1 as GetInvoiceResponse, DiscountErrors$1 as DiscountErrors, Error$1 as Error, CheckoutRequest$1 as CheckoutRequest, Buyer$1 as Buyer, Guest$3 as Guest, CheckoutOptions$1 as CheckoutOptions, CheckoutResponse$1 as CheckoutResponse, OrderInitiated$1 as OrderInitiated, UpdateCheckoutRequest$1 as UpdateCheckoutRequest, UpdateCheckoutResponse$1 as UpdateCheckoutResponse, PosCheckoutRequest$1 as PosCheckoutRequest, PosCheckoutResponse$1 as PosCheckoutResponse, eventsV1OrderCheckout_universal_d_getCheckoutOptions as getCheckoutOptions, eventsV1OrderCheckout_universal_d_listAvailableTickets as listAvailableTickets, eventsV1OrderCheckout_universal_d_ListAvailableTicketsOptions as ListAvailableTicketsOptions, eventsV1OrderCheckout_universal_d_queryAvailableTickets as queryAvailableTickets, eventsV1OrderCheckout_universal_d_QueryAvailableTicketsOptions as QueryAvailableTicketsOptions, eventsV1OrderCheckout_universal_d_createReservation as createReservation, eventsV1OrderCheckout_universal_d_CreateReservationOptions as CreateReservationOptions, eventsV1OrderCheckout_universal_d_cancelReservation as cancelReservation, eventsV1OrderCheckout_universal_d_CancelReservationIdentifiers as CancelReservationIdentifiers, eventsV1OrderCheckout_universal_d_getInvoice as getInvoice, eventsV1OrderCheckout_universal_d_GetInvoiceIdentifiers as GetInvoiceIdentifiers, eventsV1OrderCheckout_universal_d_GetInvoiceOptions as GetInvoiceOptions, eventsV1OrderCheckout_universal_d_checkout as checkout, eventsV1OrderCheckout_universal_d_CheckoutOptionsForRequest as CheckoutOptionsForRequest, eventsV1OrderCheckout_universal_d_updateCheckout as updateCheckout, eventsV1OrderCheckout_universal_d_UpdateCheckoutIdentifiers as UpdateCheckoutIdentifiers, eventsV1OrderCheckout_universal_d_UpdateCheckoutOptions as UpdateCheckoutOptions, eventsV1OrderCheckout_universal_d_posCheckout as posCheckout, eventsV1OrderCheckout_universal_d_PosCheckoutOptions as PosCheckoutOptions, };
    }
    const __debug$8: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface Order {
        /** Unique order number. */
        orderNumber?: string;
        /** Reservation ID. */
        reservationId?: string;
        /**
         * Payment snapshot ID.
         * Empty for FREE order.
         * @readonly
         */
        snapshotId?: string;
        /** Event ID. */
        eventId?: string;
        /** Contact ID of buyer (resolved using email address). */
        contactId?: string;
        /** Member ID of buyer (if relevant). */
        memberId?: string;
        /**
         * RSVP created timestamp.
         * @readonly
         */
        created?: Date;
        /** Guest first name. */
        firstName?: string;
        /** Guest last name. */
        lastName?: string;
        /** Guest email. */
        email?: string;
        /** Checkout form response. When each purchased ticket is assigned to a guest, guest forms are returned for each ticket, and buyer info is returned. */
        checkoutForm?: FormResponse$3;
        /** Whether the order is confirmed (triggered once payment gateway processes the payment and funds reach the merchant's account). */
        confirmed?: boolean;
        /** Order status. */
        status?: OrderStatus$2;
        /** Payment method used for purchase, e.g., "payPal", "creditCard", etc. */
        method?: string;
        /** Tickets ordered. */
        ticketsQuantity?: number;
        /** Total order price. */
        totalPrice?: Money$4;
        /** URL to ticket PDF. */
        ticketsPdf?: string;
        /** Tickets (generated after payment). */
        tickets?: TicketingTicket$1[];
        /** Whether the order is archived. */
        archived?: boolean;
        /** Whether the order is anonymized by GDPR delete. */
        anonymized?: boolean;
        /** Guest full name. */
        fullName?: string;
        /** Order invoice. */
        invoice?: Invoice$1;
        /** Whether all tickets in order are checked-in. */
        fullyCheckedIn?: boolean;
        /**
         * Deprecated. Use `payment_details.transaction.transaction_id`.
         * @internal
         * @readonly
         */
        transactionId?: string;
        /** Internal order payment details */
        paymentDetails?: PaymentDetails;
        /** Checkout channel type */
        channel?: ChannelType$1;
        /**
         * Language in which Order was created.
         * @internal
         * @readonly
         */
        language?: string | null;
    }
    interface FormResponse$3 {
        inputValues?: InputValue$3[];
    }
    interface InputValue$3 {
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
        address?: FormattedAddress$3;
    }
    interface FormattedAddress$3 {
        /** One line address representation. */
        formatted?: string;
        /** Address components (optional). */
        address?: Address$6;
    }
    /** Physical address */
    interface Address$6 extends AddressStreetOneOf$6 {
        /** Street name and number. */
        streetAddress?: StreetAddress$6;
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
    }
    /** @oneof */
    interface AddressStreetOneOf$6 {
        /** Street name and number. */
        streetAddress?: StreetAddress$6;
        /** Main address line, usually street and number as free text. */
        addressLine?: string | null;
    }
    interface StreetAddress$6 {
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
    interface AddressLocation$6 {
        /** Address latitude. */
        latitude?: number | null;
        /** Address longitude. */
        longitude?: number | null;
    }
    interface Subdivision$6 {
        /** Short subdivision code. */
        code?: string;
        /** Subdivision full name. */
        name?: string;
        /**
         * Subdivision level
         * @internal
         */
        type?: SubdivisionType$6;
        /**
         * Free text description of subdivision type.
         * @internal
         */
        typeInfo?: string | null;
    }
    enum SubdivisionType$6 {
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
    enum OrderStatus$2 {
        /** Order status not available for this request fieldset */
        NA_ORDER_STATUS = "NA_ORDER_STATUS",
        /** Order is confirmed, no payment required */
        FREE = "FREE",
        /** Order was paid but payment gateway suspended the payment. Eventually changes to PAID */
        PENDING = "PENDING",
        /** Order paid via payment gateway */
        PAID = "PAID",
        /** Order confirmed but has to be paid via offline payment and status manually updated to PAID */
        OFFLINE_PENDING = "OFFLINE_PENDING",
        /** Order is awaiting for payment in Cashier */
        INITIATED = "INITIATED",
        /** Order was canceled */
        CANCELED = "CANCELED",
        /** Order payment was declined */
        DECLINED = "DECLINED"
    }
    interface Money$4 {
        /** *Deprecated:** Use `value` instead. */
        amount?: string;
        /** ISO 4217 format of the currency i.e. `USD`. */
        currency?: string;
        /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
        value?: string | null;
    }
    interface TicketingTicket$1 {
        /** Unique ticket number (issued automatically). */
        ticketNumber?: string;
        /** Associated order number. */
        orderNumber?: string;
        /** Ticket definition ID. */
        ticketDefinitionId?: string;
        /** Ticket name. */
        name?: string;
        /** Ticket price. */
        price?: Money$4;
        /**
         * Whether ticket requires payment.
         * @readonly
         */
        free?: boolean;
        /** Ticket policy (as displayed in PDF). */
        policy?: string;
        /** Deprecated, use `check_in_url`. */
        qrCode?: string;
        /** Ticket check-in. */
        checkIn?: CheckIn$3;
        /** Associated order status. */
        orderStatus?: OrderStatus$2;
        /** Whether order and ticket are visible in order list. */
        orderArchived?: boolean;
        /** Buyer full name. */
        orderFullName?: string;
        /** Guest full name. */
        guestFullName?: string | null;
        /** Guest personal details. */
        guestDetails?: GuestDetails$2;
        /** Whether ticket is visible in guest list. */
        archived?: boolean;
        /** Deprecated, use `ticket_pdf_url`. */
        ticketPdf?: string;
        /** Ticket owner member ID. */
        memberId?: string | null;
        /**
         * Whether ticket was anonymized by GDPR delete.
         * Anonymized tickets no longer contain personally identifiable information (PII).
         */
        anonymized?: boolean;
        /**
         * Ticket check-in URL.
         * Shown as QR code image in PDF.
         * Format: `https://www.wixevents.com/check-in/{ticket number},{event id}`
         * Example: `https://www.wixevents.com/check-in/AAAA-AAAA-BB021,00000000-0000-0000-0000-000000000000`
         */
        checkInUrl?: string;
        /** URL for ticket PDF download. */
        ticketPdfUrl?: string;
        /** Associated order checkout channel type */
        channel?: ChannelType$1;
        /**
         * URL to download ticket in .pkpass format for Apple Wallet
         * @readonly
         */
        walletPassUrl?: string;
        /**
         * Additional ticket details.
         * @internal
         * @readonly
         */
        ticketDetails?: TicketDetails$2;
    }
    interface CheckIn$3 {
        /** Time of check-in */
        created?: Date;
    }
    interface GuestDetails$2 {
        /** Whether ticket belongs to assigned guest. */
        guestAssigned?: boolean;
        /** Guest first name. */
        firstName?: string | null;
        /** Guest last name. */
        lastName?: string | null;
        /** Guest email. */
        email?: string | null;
        /** Full form response. */
        form?: FormResponse$3;
        /** Contact ID associated with this guest. */
        contactId?: string | null;
    }
    enum ChannelType$1 {
        /** Buyer created order via one of the online channels (website, mobile app, etc.) */
        ONLINE = "ONLINE",
        /** Order created and money collected by the sales person */
        OFFLINE_POS = "OFFLINE_POS"
    }
    interface TicketDetails$2 {
        /** Unique seat id in the event venue. */
        seatId?: string | null;
        /**
         * Optional sector name.
         * @internal
         * @readonly
         */
        sectorName?: string | null;
        /**
         * Area name.
         * @internal
         * @readonly
         */
        areaName?: string | null;
        /**
         * Table name.
         * @internal
         * @readonly
         */
        tableName?: string | null;
        /**
         * Row label.
         * @internal
         * @readonly
         */
        rowNumber?: string | null;
        /**
         * Seat label in a row or table.
         * @internal
         * @readonly
         */
        seatNumber?: string | null;
        /**
         * Optional sector label.
         * @readonly
         */
        sectionLabel?: string | null;
        /**
         * Area label.
         * @readonly
         */
        areaLabel?: string | null;
        /**
         * Table label.
         * @readonly
         */
        tableLabel?: string | null;
        /**
         * Row label.
         * @readonly
         */
        rowLabel?: string | null;
        /**
         * Seat label in a row or table.
         * @readonly
         */
        seatLabel?: string | null;
        /** Number of places in the spot. If not provided - defaults to 1. */
        capacity?: number | null;
        /** Custom pricing of ticket. */
        priceOverride?: string | null;
        /** Pricing option id. */
        pricingOptionId?: string | null;
        /**
         * Pricing option name.
         * @readonly
         */
        pricingOptionName?: string | null;
    }
    interface Invoice$1 {
        /** Items listed in the invoice. */
        items?: Item$1[];
        /** Total cart amount. */
        total?: Money$4;
        /** Discount applied to cart. */
        discount?: Discount$1;
        /** Tax applied to cart. */
        tax?: Tax$1;
        /** Total cart amount before discount, tax, and fees. */
        subTotal?: Money$4;
        /**
         * Total amount of cart after discount, tax, and fees.
         * Grand total is calculated in the following order:
         * 1. Total prices of all items in the cart are calculated.
         * 2. Discount is subtracted from the cart (if applicable).
         * 3. Tax is added (if applicable).
         * 4. Wix service fee is added.
         */
        grandTotal?: Money$4;
        /**
         * Fees applied to the cart.
         * @readonly
         */
        fees?: Fee$1[];
        /** Total revenue, excluding fees. (Taxes and payment provider fees are not deducted). */
        revenue?: Money$4;
        /** URL to invoice preview. Returned only if order is paid. */
        previewUrl?: string | null;
    }
    interface Item$1 {
        /** Unique line item ID. */
        _id?: string;
        /** Line item quantity. */
        quantity?: number;
        /** Line item mame. */
        name?: string;
        /** Line item price. */
        price?: Money$4;
        /** Total price for line items. Always equal to price * quantity. */
        total?: Money$4;
        /** Discount applied to the line item. */
        discount?: Discount$1;
        /** Tax applied to the item. */
        tax?: Tax$1;
        /**
         * Fees applied to the item.
         * @readonly
         */
        fees?: Fee$1[];
    }
    interface Discount$1 {
        /** Total discount amount. */
        amount?: Money$4;
        /** Total charge after applied discount. */
        afterDiscount?: Money$4;
        /** Discount coupon code. */
        code?: string;
        /** Discount coupon name. */
        name?: string;
        /** Discount coupon ID. */
        couponId?: string;
        /** Discount items. */
        discounts?: DiscountItem$1[];
    }
    interface DiscountItem$1 extends DiscountItemDiscountOneOf$1 {
        /** Coupon discount. */
        coupon?: CouponDiscount$1;
        /** Pricing plan discount. */
        paidPlan?: PaidPlanDiscount$1;
        /** Total discount amount. */
        amount?: Money$4;
    }
    /** @oneof */
    interface DiscountItemDiscountOneOf$1 {
        /** Coupon discount. */
        coupon?: CouponDiscount$1;
        /** Pricing plan discount. */
        paidPlan?: PaidPlanDiscount$1;
    }
    interface CouponDiscount$1 {
        /** Discount coupon name. */
        name?: string;
        /** Discount coupon code. */
        code?: string;
        /** Discount coupon ID. */
        couponId?: string;
    }
    interface PaidPlanDiscount$1 extends PaidPlanDiscountDiscountOneOf$1 {
        /** Discount by percentage applied to tickets. */
        percentDiscount?: PercentDiscount$1;
        /** Name of pricing plan. */
        name?: string;
    }
    /** @oneof */
    interface PaidPlanDiscountDiscountOneOf$1 {
        /** Discount by percentage applied to tickets. */
        percentDiscount?: PercentDiscount$1;
    }
    interface PercentDiscount$1 {
        /** Percent rate. */
        rate?: string;
        /** Number of discounted tickets. */
        quantityDiscounted?: number;
    }
    interface Tax$1 {
        /** Tax type. */
        type?: TaxType$2;
        /**
         * Tax name.
         * @readonly
         */
        name?: string;
        /** Tax rate. */
        rate?: string;
        /** Taxable amount. */
        taxable?: Money$4;
        /** Total tax amount. */
        amount?: Money$4;
    }
    enum TaxType$2 {
        /** Tax is included in the ticket price */
        INCLUDED = "INCLUDED",
        /** Tax is added to the order at the checkout */
        ADDED = "ADDED",
        /** Tax is added to the final total at the checkout */
        ADDED_AT_CHECKOUT = "ADDED_AT_CHECKOUT"
    }
    interface Fee$1 {
        /** Fee identifier. */
        name?: FeeName$1;
        /** How fee is calculated. */
        type?: FeeType$2;
        /**
         * Fee rate.
         * @readonly
         */
        rate?: string;
        /** Total amount of fee charges. */
        amount?: Money$4;
    }
    enum FeeName$1 {
        /** Wix service fee charges applied to the line item. */
        WIX_FEE = "WIX_FEE"
    }
    enum FeeType$2 {
        /** Fee is added to the ticket price at checkout */
        FEE_ADDED = "FEE_ADDED",
        /** Seller absorbs the fee. It is deducted from the ticket price */
        FEE_INCLUDED = "FEE_INCLUDED",
        /** Fee is added to the ticket price at checkout */
        FEE_ADDED_AT_CHECKOUT = "FEE_ADDED_AT_CHECKOUT"
    }
    interface PaymentDetails {
        /** Wix Payments transaction */
        transaction?: PaymentTransaction;
    }
    interface PaymentTransaction {
        /**
         * Wix Payments transaction id
         * @readonly
         */
        transactionId?: string;
        /**
         * Transaction Payment method e.g., "payPal", "creditCard", etc.
         * @readonly
         */
        method?: string;
    }
    interface OrderDeleted$1 {
        /** Order deleted timestamp in ISO UTC format. */
        timestamp?: Date;
        /** Event ID. */
        eventId?: string;
        /** Unique order number. */
        orderNumber?: string;
        /** Contact ID associated with this order */
        contactId?: string;
        /** Member ID associated with this order. */
        memberId?: string | null;
        /** Whether order was anonymized by GDPR delete. */
        anonymized?: boolean;
        /** Order type. */
        orderType?: OrderType$1;
        /** Whether event was triggered by GDPR delete request. */
        triggeredByAnonymizeRequest?: boolean;
        /** Tickets generated after payment. */
        tickets?: Ticket$2[];
    }
    enum OrderType$1 {
        /** Buyer form is used for all tickets */
        UNASSIGNED_TICKETS = "UNASSIGNED_TICKETS",
        /** Each order ticket has its own form */
        ASSIGNED_TICKETS = "ASSIGNED_TICKETS"
    }
    interface Ticket$2 {
        /** Unique issued ticket number. */
        ticketNumber?: string;
        /** Ticket definition ID. */
        ticketDefinitionId?: string;
        /** Ticket check-in. */
        checkIn?: CheckIn$3;
        /** Ticket price. */
        price?: Money$4;
        /** Whether ticket is archived. */
        archived?: boolean;
        /** Guest first name. */
        firstName?: string | null;
        /** Guest last name. */
        lastName?: string | null;
        /** Guest email. */
        email?: string | null;
        /** Contact ID associated with this ticket. */
        contactId?: string | null;
        /** Whether ticket is confirmed */
        confirmed?: boolean;
        /** Member ID associated with this ticket. */
        memberId?: string | null;
        /** Ticket form response (only assigned tickets contain separate forms). */
        form?: FormResponse$3;
        /** Ticket name. */
        ticketName?: string;
        /** Anonymized tickets no longer contain personally identifiable information (PII). */
        anonymized?: boolean;
        /** URL and password to online conference */
        onlineConferencingLogin?: OnlineConferencingLogin$3;
    }
    interface OnlineConferencingLogin$3 {
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
    interface ListOrdersRequest {
        /** Offset. */
        offset?: number;
        /** Limit. */
        limit?: number;
        /**
         * Predefined sets of fields to return.
         * - `TICKETS`: Returns `tickets`.
         * - `DETAILS`: Returns `reservationId`, `snapshotId`, `created`, `firstName`, `lastName`, `confirmed`, `status`, `method`, `ticketsQuantity`, `totalPrice`, `ticketsPdf`, `archived`, `fullName`.
         * - `FORM` : Returns `checkoutForm`.
         * - `INVOICE`: Returns `invoice`.
         *
         * Default: If `fieldset` is omitted from the request,  `orderNumber`, `eventId`, `contactId`, `memberId`, `anonymized`, `fullyCheckedIn`.
         *
         */
        fieldset?: OrderFieldset[];
        /** Status. */
        status?: OrderStatus$2[];
        /**
         * Deprecated: use tag = CONFIRMED
         * @internal
         */
        confirmed?: boolean | null;
        /** Event ID. */
        eventId?: string[];
        /** Order number. */
        orderNumber?: string[];
        /** Site member ID. */
        memberId?: string[];
        /**
         * Deprecated: use tag = MEMBER
         * @internal
         */
        membersOnly?: boolean;
        /** Field facets, */
        facet?: string[];
        /**
         * Deprecated: use tag = ARCHIVED / NON_ARCHIVED
         * @internal
         */
        archived?: boolean | null;
        /** Textual search filter - search is performed on `"full_name"`, `"email"` and `"order_number"`. */
        searchPhrase?: string;
        /** Event creator ID. */
        eventCreatorId?: string[];
        /**
         * Deprecated: use tag = FULLY_CHECKED_IN / NOT_FULLY_CHECKED_IN
         * @internal
         */
        fullyCheckedIn?: boolean | null;
        /**
         * Sort order. Defaults to "created:asc".
         * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-orders).
         */
        sort?: string;
        /** Order tag. */
        tag?: OrderTag[];
    }
    enum OrderFieldset {
        /** Include tickets in response */
        TICKETS = "TICKETS",
        /** Include order details: status, first_name, last_name, email, created, etc. */
        DETAILS = "DETAILS",
        /** Include checkout_form */
        FORM = "FORM",
        /** Include invoice */
        INVOICE = "INVOICE"
    }
    enum OrderTag {
        /** Return only confirmed orders */
        CONFIRMED = "CONFIRMED",
        /** Return only unconfirmed orders */
        UNCONFIRMED = "UNCONFIRMED",
        /** Return only member orders */
        MEMBER = "MEMBER",
        /** Return only archived orders */
        ARCHIVED = "ARCHIVED",
        /** Return only non archived orders */
        NON_ARCHIVED = "NON_ARCHIVED",
        /** Return only orders with all guests checked-in */
        FULLY_CHECKED_IN = "FULLY_CHECKED_IN",
        /** Return only orders with no guests checked-in */
        NOT_FULLY_CHECKED_IN = "NOT_FULLY_CHECKED_IN"
    }
    interface ListOrdersResponse {
        /** Total orders matching the given filters. */
        total?: number;
        /** Offset. */
        offset?: number;
        /** Limit. */
        limit?: number;
        /** Orders. */
        orders?: Order[];
        /** Filter facets. */
        facets?: Record<string, FacetCounts$4>;
        /** Meta data of search results. */
        searchMetaData?: SearchMetaData$1;
        /** Order data enriched facets. */
        orderFacets?: OrderFacets;
    }
    interface FacetCounts$4 {
        /** Facet counts aggregated per value */
        counts?: Record<string, number>;
    }
    interface SearchMetaData$1 {
        /** Search results */
        results?: Result$1[];
    }
    interface Result$1 {
        /** Entity ID */
        _id?: string;
        /**
         * Entity score.
         * Higher is more relevant to search phrase.
         */
        score?: string;
    }
    interface OrderFacets {
        /** Filter facets. */
        facets?: Record<string, OrderFacetCounts>;
    }
    interface OrderFacetCounts {
        /** Facet counts aggregated per value */
        counts?: Record<string, Counts$2>;
    }
    interface Counts$2 {
        /** Number or orders */
        count?: number;
        /** Number of tickets within orders */
        tickets?: number;
        /** Number of tickets with check-in */
        ticketsCheckIn?: number;
    }
    interface GetOrderRequest {
        /** Event ID. */
        eventId: string;
        /** Unique order number. */
        orderNumber: string;
        /**
         * Predefined sets of fields to return.
         * - `TICKETS`: Returns `tickets`.
         * - `DETAILS`: Returns `reservationId`, `snapshotId`, `created`, `firstName`, `lastName`, `confirmed`, `status`, `method`, `ticketsQuantity`, `totalPrice`, `ticketsPdf`, `archived`, `fullName`.
         * - `FORM` : Returns `checkoutForm`.
         * - `INVOICE`: Returns `invoice`.
         *
         * Default: If `fieldset` is omitted from the request,  `orderNumber`, `eventId`, `contactId`, `memberId`, `anonymized`, `fullyCheckedIn`.
         */
        fieldset?: OrderFieldset[];
    }
    interface GetOrderResponse {
        /** Requested order. */
        order?: Order;
        /** "Add to calendar" links. */
        calendarLinks?: CalendarLinks$2;
    }
    interface CalendarLinks$2 {
        /** "Add to Google calendar" URL. */
        google?: string;
        /** "Download ICS calendar file" URL. */
        ics?: string;
    }
    interface GetOrderByOrderNumberRequest {
        /** Unique order number. */
        orderNumber?: string;
    }
    interface GetOrderByOrderNumberResponse {
        /** Requested order. */
        order?: Order;
    }
    interface UpdateOrderRequest {
        /** Event ID. */
        eventId: string;
        /** Unique order number. */
        orderNumber: string;
        /** Set of field paths to update. */
        fields: string[];
        /** Checkout form. */
        checkoutForm?: FormResponse$3;
        /** Whether order is archived. */
        archived?: boolean;
    }
    interface UpdateOrderResponse {
        /** Updated order. */
        order?: Order;
    }
    interface OrderUpdated$2 {
        /** Order updated timestamp in ISO UTC format. */
        timestamp?: Date;
        /** Site language when Order initiated */
        language?: string | null;
        /** Event ID. */
        eventId?: string;
        /** Unique order number. */
        orderNumber?: string;
        /** Contact ID associated with this order. */
        contactId?: string;
        /** Member ID associated with this order. */
        memberId?: string | null;
        /**
         * Order created timestamp.
         * @readonly
         */
        created?: Date;
        /** Buyer first name. */
        firstName?: string;
        /** Buyer last name. */
        lastName?: string;
        /** Buyer email. */
        email?: string;
        /** Checkout form response. */
        checkoutForm?: FormResponse$3;
        /** Whether order is confirmed - occurs once payment gateway processes the payment and funds reach merchant's account. */
        confirmed?: boolean;
        /** Order status. */
        status?: OrderStatus$2;
        /** Payment method used for paid tickets purchase, i.e. "payPal", "creditCard", etc. */
        method?: string | null;
        /** Tickets generated after payment. */
        tickets?: Ticket$2[];
        /** Whether order was archived and excluded from results. */
        archived?: boolean;
        /** Whether event was triggered by GDPR delete request. */
        triggeredByAnonymizeRequest?: boolean;
    }
    interface BulkUpdateOrdersRequest {
        /** Event ID. */
        eventId: string;
        orderNumber?: string[];
        /** Set of fields to update. */
        fields?: string[];
        /** Whether to archive the order. */
        archived?: boolean;
    }
    interface BulkUpdateOrdersResponse {
        /** Updated orders. */
        orders?: Order[];
    }
    interface ConfirmOrderRequest {
        /** Event ID. */
        eventId: string;
        /** Order numbers. */
        orderNumber?: string[];
    }
    interface ConfirmOrderResponse {
        /** Confirmed orders. */
        orders?: Order[];
    }
    interface GetSummaryRequest {
        /** Event ID. */
        eventId?: string | null;
    }
    interface GetSummaryResponse {
        /** Ticket sales grouped by currency. */
        sales?: TicketSales[];
    }
    interface TicketSales {
        /** Total balance of confirmed transactions. */
        total?: Money$4;
        /** Total number of confirmed orders. */
        totalOrders?: number;
        /** Total number of tickets purchased. */
        totalTickets?: number;
        /** Total revenue, excluding fees (taxes and payment provider fees are not deducted). */
        revenue?: Money$4;
    }
    interface GetInvoicePreviewRequest {
        /** Event ID. */
        eventId: string;
        /** Order number. */
        orderNumber: string;
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
    interface GetPaymentInfoRequest {
        /** Event ID. */
        eventId?: string;
        /** Order number. */
        orderNumber?: string;
    }
    interface GetPaymentInfoResponse {
        transactions?: PaymentTransactionSummary[];
        status?: string | null;
        /** @readonly */
        transactionId?: string | null;
    }
    interface PaymentTransactionSummary {
        /**
         * Wix Payments transaction id
         * @readonly
         */
        transactionId?: string;
        /**
         * Final transaction status
         * @readonly
         */
        finalTransactionStatus?: string;
        /** Transaction events */
        events?: PaymentTransactionEvent[];
    }
    interface PaymentTransactionEvent {
        /**
         * Order snapshot id
         * @readonly
         */
        snapshotId?: string;
        /**
         * Transaction status
         * @readonly
         */
        transactionStatus?: string;
        /**
         * Transaction Payment method e.g., "payPal", "creditCard", etc.
         * @readonly
         */
        paymentMethod?: string;
        /**
         * Transaction payment amount
         * @readonly
         */
        paymentAmount?: Money$4;
        /**
         * Crated date
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Reason code
         * @readonly
         */
        reasonCode?: string | null;
        /**
         * Refunded amount
         * @readonly
         */
        refundedAmount?: Money$4;
    }
    interface OrderConfirmed$1 {
        /** Order confirmation timestamp in ISO UTC. */
        timestamp?: Date;
        /** Site language when Order initiated */
        language?: string | null;
        /** Notifications silenced for this domain event. */
        silent?: boolean | null;
        /** Event ID. */
        eventId?: string;
        /** Unique order number. */
        orderNumber?: string;
        /** Contact ID associated with this order. */
        contactId?: string;
        /** Member ID associated with this order. */
        memberId?: string | null;
        /**
         * Order created timestamp
         * @readonly
         */
        created?: Date;
        /** Buyer first name. */
        firstName?: string;
        /** Buyer last name. */
        lastName?: string;
        /** Buyer email address. */
        email?: string;
        /** Checkout form response. */
        checkoutForm?: FormResponse$3;
        /** Order status. */
        status?: OrderStatus$2;
        /** Payment method used for paid tickets purchase, i.e. "payPal", "creditCard", etc. */
        method?: string | null;
        /** Tickets (generated after payment). */
        tickets?: Ticket$2[];
        /** Invoice. */
        invoice?: Invoice$1;
        /** Reservation ID associated with this order. */
        reservationId?: string;
    }
    interface OrderPaid {
        /** Order paid timestamp in ISO UTC. */
        timestamp?: Date;
        /** Event ID. */
        eventId?: string;
        /** Unique order number. */
        orderNumber?: string;
        /** Reservation ID associated with this order. */
        reservationId?: string;
    }
    interface ReservationCreated {
        /** Reservation created timestamp in ISO UTC format. */
        timestamp?: Date;
        /** Event ID. */
        eventId?: string;
        /**
         * Reservation ID.
         * Can be used to retrieve a reservation invoice.
         */
        reservationId?: string;
        /** Reservation expiration timestamp. */
        expires?: Date;
        /** Reservation status. */
        status?: ReservationStatus;
        /** Reservation ticket quantities. */
        quantities?: TicketQuantity[];
    }
    enum ReservationStatus {
        /**
         * Reservation is pending confirmation.
         * The reservation will expire after the expiration due time.
         */
        RESERVATION_PENDING = "RESERVATION_PENDING",
        /** The reservation was confirmed and will not expire. */
        RESERVATION_CONFIRMED = "RESERVATION_CONFIRMED",
        /** The reservation was canceled because of non payment. */
        RESERVATION_CANCELED = "RESERVATION_CANCELED",
        /** The reservation was canceled manually by the buyer. */
        RESERVATION_CANCELED_MANUALLY = "RESERVATION_CANCELED_MANUALLY",
        /** The reservation has expired. */
        RESERVATION_EXPIRED = "RESERVATION_EXPIRED"
    }
    interface TicketQuantity {
        /** Ticket definition ID. */
        ticketDefinitionId?: string | null;
        /** Quantity. */
        quantity?: number | null;
    }
    interface ReservationUpdated {
        /** Reservation updated timestamp. */
        timestamp?: Date;
        /** Event ID. */
        eventId?: string;
        /**
         * Reservation ID.
         * Can be used to retrieve a reservation invoice.
         */
        reservationId?: string;
        /** Reservation status. */
        status?: ReservationStatus;
        /** Reservation expiration timestamp. */
        expires?: Date;
        /** Reservation ticket quantities. */
        quantities?: TicketQuantity[];
    }
    interface GetCheckoutOptionsRequest {
    }
    interface GetCheckoutOptionsResponse {
        /** Whether any payment method is configured and available for payment. */
        paymentMethodConfigured?: boolean;
        /** Whether coupons are accepted at checkout. */
        acceptCoupons?: boolean;
        /** Whether premium services are enabled. Enabled for free if site does not sell any paid tickets. Selling tickets for a fee requires a premium feature "events_sell_tickets". */
        premiumServices?: boolean;
        /** Whether there are any paid tickets available for sale. */
        paidTickets?: boolean;
    }
    interface ListAvailableTicketsRequest {
        /** Event ID. If not provided, available tickets for all events in the site will be returned. */
        eventId?: string;
        /** Offset. */
        offset?: number;
        /** Limit. */
        limit?: number;
        /**
         * Sort order, defaults to "created:asc".
         * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-available-tickets).
         */
        sort?: string;
        /**
         * Only used in tests.
         * @internal
         */
        overrideRequestTime?: Date;
        state?: State$4[];
    }
    enum State$4 {
        INCLUDE_HIDDEN_NOT_ON_SALE = "INCLUDE_HIDDEN_NOT_ON_SALE"
    }
    interface ListAvailableTicketsResponse {
        /** Ticket definitions meta data. */
        metaData?: ResponseMetaData$1;
        /** Ticket definitions. */
        definitions?: TicketDefinition$1[];
    }
    interface ResponseMetaData$1 {
        /** Number of items in the response. */
        count?: number;
        /** Offset of items. */
        offset?: number;
        /** Total number of matching items. */
        total?: number;
    }
    interface TicketDefinition$1 {
        /** Ticket definition ID. */
        _id?: string;
        /** Ticket price. */
        price?: Money$4;
        /** Whether the ticket is free (read only). */
        free?: boolean;
        /** Ticket name. */
        name?: string;
        /** Ticket description. */
        description?: string;
        /**
         * Limit of tickets that can be purchased per checkout.
         * Set to 20 for unlimited ticket definition.
         */
        limitPerCheckout?: number;
        /** Custom sort index. */
        orderIndex?: number;
        /** Policy information plain text block, as printed on the ticket. */
        policy?: string;
        /** Sensitive dashboard data. */
        dashboard?: Dashboard$2;
        /** Event ID associated with the ticket. */
        eventId?: string;
        /**
         * Configuration of the fixed-rate Wix service fee that is applied at checkout to each ticket sold.
         * @readonly
         */
        wixFeeConfig?: WixFeeConfig$1;
        /** Ticket sale period. */
        salePeriod?: TicketSalePeriod$1;
        /**
         * Ticket sale status.
         * @readonly
         */
        saleStatus?: TicketSaleStatus$1;
        /** Ticket state. */
        state?: State$4[];
        /** Ticket pricing. */
        pricing?: TicketPricing$1;
    }
    interface Dashboard$2 {
        /** Whether ticket is hidden and cannot be sold. */
        hidden?: boolean;
        /** Number of tickets sold and reserved. */
        sold?: number;
        /** Whether the ticket has limited quantity. */
        limited?: boolean;
        /** Ticket limit. `NULL` for unlimited ticket definitions. */
        quantity?: number | null;
        /** Number of unsold tickets. `NULL` for unlimited ticket definitions. */
        unsold?: number | null;
        /** Number of tickets sold. */
        ticketsSold?: number;
        /** Number of tickets reserved. */
        ticketsReserved?: number;
    }
    interface WixFeeConfig$1 {
        /** Fee calculation method. */
        type?: FeeType$2;
    }
    interface TicketSalePeriod$1 {
        /** Ticket sale start timestamp. */
        startDate?: Date;
        /** Ticket sale end timestamp. */
        endDate?: Date;
        /** Whether to hide this ticket if it's not on sale */
        hideNotOnSale?: boolean;
    }
    enum TicketSaleStatus$1 {
        /** Ticket sale is scheduled to start */
        SALE_SCHEDULED = "SALE_SCHEDULED",
        /** Ticket sale has started */
        SALE_STARTED = "SALE_STARTED",
        /** Ticket sale has ended */
        SALE_ENDED = "SALE_ENDED"
    }
    interface TicketPricing$1 extends TicketPricingPriceOneOf$1 {
        /** Ticket price which is read only. */
        fixedPrice?: Money$4;
        /** Min price per ticket, customizable. */
        minPrice?: Money$4;
        /** Ticket pricing options. */
        pricingOptions?: PricingOptions$1;
        /**
         * Ticket pricing type.
         * @readonly
         */
        pricingType?: Type$1;
    }
    /** @oneof */
    interface TicketPricingPriceOneOf$1 {
        /** Ticket price which is read only. */
        fixedPrice?: Money$4;
        /** Min price per ticket, customizable. */
        minPrice?: Money$4;
        /** Ticket pricing options. */
        pricingOptions?: PricingOptions$1;
    }
    interface PricingOptions$1 {
        /** Multiple ticket pricing options. */
        options?: PricingOption$1[];
    }
    interface PricingOption$1 {
        /** Ticket pricing option ID. */
        _id?: string | null;
        /** Ticket pricing option name. */
        name?: string | null;
        /** Ticket pricing option price. */
        price?: Money$4;
    }
    enum Type$1 {
        STANDARD = "STANDARD",
        DONATION = "DONATION"
    }
    interface QueryAvailableTicketsRequest {
        /** Offset. */
        offset?: number;
        /** Limit. */
        limit?: number;
        /** Ticket definition. */
        filter?: Record<string, any> | null;
        fieldset?: TicketDefinitionFieldset$1[];
        /** Sort order, defaults to "created:asc". */
        sort?: string;
    }
    enum TicketDefinitionFieldset$1 {
        /** Include policy in the response. */
        POLICY = "POLICY",
        /** Include dashboard in the response. */
        DASHBOARD = "DASHBOARD"
    }
    interface QueryAvailableTicketsResponse {
        /** Ticket definitions meta data. */
        metaData?: ResponseMetaData$1;
        /** Ticket definitions. */
        definitions?: TicketDefinition$1[];
    }
    interface CreateReservationRequest {
        /** Event ID. */
        eventId: string;
        /** Tickets to reserve. */
        ticketQuantities?: TicketReservationQuantity[];
        /** Whether to ignore the available ticket limits upon reservation. */
        ignoreLimits?: boolean;
        /**
         * Only used in tests.
         * @internal
         */
        overrideRequestTime?: Date;
        /** Whether to allow reservation for hidden tickets. */
        allowHiddenTickets?: boolean;
        /**
         * Whether to exclude Wix fee.
         * @internal
         */
        excludeFee?: boolean;
    }
    interface TicketReservationQuantity {
        /** Ticket definition ID. */
        ticketDefinitionId?: string;
        /** Quantity of tickets to reserve. */
        quantity?: number;
        /** Ticket price to charge - overriding the ticket price. */
        priceOverride?: string | null;
        /** Optional ticket details */
        ticketDetails?: TicketDetails$2[];
    }
    interface CreateReservationResponse {
        /** Reservation ID. */
        _id?: string;
        /** Reservation expiration timestamp. */
        expires?: Date;
        /** Ticket reservations. */
        reservations?: TicketReservation[];
        /** Reservation invoice. */
        invoice?: Invoice$1;
    }
    interface TicketReservation {
        /** Quantity of reserved tickets. */
        quantity?: number;
        /** An object containing ticket information. */
        ticket?: TicketDefinition$1;
        /** Optional ticket details. */
        ticketDetails?: TicketDetails$2[];
    }
    interface CancelReservationRequest {
        /** Event ID. */
        eventId: string;
        /** Reservation ID. */
        _id: string;
    }
    interface CancelReservationResponse {
    }
    interface GetInvoiceRequest {
        /** Event ID. */
        eventId: string;
        /** Reservation ID. */
        reservationId: string;
        /** Optional discount to be applied on the returned invoice. */
        withDiscount?: DiscountRequest;
        /** Optional benefit granted by the pricing plan to be applied on the returned invoice. */
        paidPlanBenefit?: PaidPlanBenefit;
    }
    interface DiscountRequest {
        /** Discount coupon code. */
        couponCode?: string;
    }
    interface PaidPlanBenefit {
        /** Pricing plan ID. */
        planOrderId?: string;
        /** Pricing plan benefit ID. */
        benefitId?: string;
    }
    interface GetInvoiceResponse {
        /** Invoice with applied discount. */
        invoice?: Invoice$1;
        /** Discount errors, if relevant. */
        discountErrors?: DiscountErrors;
        /** Time when the reservation expires. */
        expires?: Date;
        /** Reservation status. */
        reservationStatus?: ReservationStatus;
        /** Whether this reservation is already used in checkout. */
        reservationOccupied?: boolean;
        /** Ticket reservations. */
        reservations?: TicketReservation[];
    }
    interface DiscountErrors {
        /** Object containing error information. */
        error?: Error[];
    }
    interface Error {
        /** A code identifying the error type. */
        code?: string;
    }
    interface CheckoutRequest {
        /** Event ID. */
        eventId: string;
        /** Ticket reservation ID. */
        reservationId?: string;
        /** Member ID (if empty - no site member is associated to this order). */
        memberId?: string;
        /** Discount to apply on the invoice. */
        discount?: DiscountRequest;
        /**
         * Deprecated.
         * @internal
         */
        silent?: boolean;
        /**
         * Deprecated.
         * @internal
         */
        payInPerson?: boolean;
        /** Buyer details. */
        buyer?: Buyer;
        /** Guest details. */
        guests?: Guest$2[];
        /** Benefit granted by the pricing plan. */
        paidPlanBenefit?: PaidPlanBenefit;
        /** Options controlling the checkout process. */
        options?: CheckoutOptions;
        /**
         * Only used in tests.
         * @internal
         */
        overrideRequestTime?: Date;
    }
    interface Buyer {
        /** Buyer first name. */
        firstName?: string;
        /** Buyer last name. */
        lastName?: string;
        /** Buyer email. */
        email?: string;
    }
    interface Guest$2 {
        /** Specific guest info. */
        form?: FormResponse$3;
    }
    interface CheckoutOptions {
        /** Whether to ignore settings to notify contacts or users. */
        silent?: boolean;
        /** Whether the payment is to be done in person between the buyer and the merchant. When true, the completed order is created with status OFFLINE_PENDING and inPerson payment method. */
        payInPerson?: boolean;
        /** Whether to ignore form validation. */
        ignoreFormValidation?: boolean;
        /**
         * URL which overrides default payment redirect URL.
         * @internal
         */
        paymentRedirectUrl?: string | null;
    }
    interface CheckoutResponse {
        /** Created order. */
        order?: Order;
        /** Time when the order expires, applies to orders with status = INITIATED. */
        expires?: Date;
        /** Ticket reservations. */
        reservations?: TicketReservation[];
    }
    interface OrderInitiated {
        /** Order initiated timestamp in ISO UTC format. */
        timestamp?: Date;
        /** Site language when Order initiated */
        language?: string | null;
        /** Event ID. */
        eventId?: string;
        /** Unique order number. */
        orderNumber?: string;
        /** Contact ID associated with this order. */
        contactId?: string;
        /** Member ID associated with this order. */
        memberId?: string | null;
        /** Guest first name. */
        firstName?: string;
        /** Guest last name. */
        lastName?: string;
        /** Guest email address. */
        email?: string;
        /** Checkout form response. */
        checkoutForm?: FormResponse$3;
        /** Order status. */
        status?: OrderStatus$2;
        /** Invoice. */
        invoice?: Invoice$1;
        /** Reservation ID associated with this order. */
        reservationId?: string;
    }
    interface UpdateCheckoutRequest {
        /** Event ID. */
        eventId: string;
        /** Unique order number. */
        orderNumber: string;
        /** Buyer details. */
        buyer?: Buyer;
        /** Guest details. */
        guests?: Guest$2[];
        /** Member ID (if empty - no site member is associated to this order). */
        memberId?: string | null;
        /** Discount to apply on the invoice. */
        discount?: DiscountRequest;
        /** Benefit granted by the pricing plan. */
        paidPlanBenefit?: PaidPlanBenefit;
    }
    interface UpdateCheckoutResponse {
        /** Updated order. */
        order?: Order;
    }
    interface PosCheckoutRequest {
        /** Event ID. */
        eventId: string;
        /** Ticket reservation ID. */
        reservationId: string;
        /**
         * Payment details ID.
         * Not required if reservation total is 0. In this case the order will be created with status Free and no payment.
         */
        paymentDetailsId?: string | null;
    }
    interface PosCheckoutResponse {
        /** Created order. */
        order?: Order;
        /** Time when the order expires, applies to orders with status = INITIATED. */
        expires?: Date;
        /** Ticket reservations. */
        reservations?: TicketReservation[];
    }
    /**
     * Retrieves a list of orders, including ticket data, with basic filter support.
     * <!--
     * > Note: This function is restricted and only runs if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
     * -->
     * @public
     * @documentationMaturity preview
     * @param options - An object representing the available options for retrieving a list of orders.
     */
    function listOrders(options?: ListOrdersOptions): Promise<ListOrdersResponse>;
    interface ListOrdersOptions {
        /** Offset. */
        offset?: number;
        /** Limit. */
        limit?: number;
        /**
         * Predefined sets of fields to return.
         * - `TICKETS`: Returns `tickets`.
         * - `DETAILS`: Returns `reservationId`, `snapshotId`, `created`, `firstName`, `lastName`, `confirmed`, `status`, `method`, `ticketsQuantity`, `totalPrice`, `ticketsPdf`, `archived`, `fullName`.
         * - `FORM` : Returns `checkoutForm`.
         * - `INVOICE`: Returns `invoice`.
         *
         * Default: If `fieldset` is omitted from the request,  `orderNumber`, `eventId`, `contactId`, `memberId`, `anonymized`, `fullyCheckedIn`.
         *
         */
        fieldset?: OrderFieldset[];
        /** Status. */
        status?: OrderStatus$2[];
        /**
         * Deprecated: use tag = CONFIRMED
         * @internal
         */
        confirmed?: boolean | null;
        /** Event ID. */
        eventId?: string[];
        /** Order number. */
        orderNumber?: string[];
        /** Site member ID. */
        memberId?: string[];
        /**
         * Deprecated: use tag = MEMBER
         * @internal
         */
        membersOnly?: boolean;
        /** Field facets. */
        facet?: string[];
        /**
         * Deprecated: use tag = ARCHIVED / NON_ARCHIVED
         * @internal
         */
        archived?: boolean | null;
        /** Textual search filter - search is performed on `"full_name"`, `"email"` and `"order_number"`. */
        searchPhrase?: string;
        /** Event creator ID. */
        eventCreatorId?: string[];
        /**
         * Deprecated: use tag = FULLY_CHECKED_IN / NOT_FULLY_CHECKED_IN
         * @internal
         */
        fullyCheckedIn?: boolean | null;
        /**
         * Sort order.
         *
         * Default: `"created"`:`"asc"`.
         *
         *
         * See [Orders Sort](/wix-events-v2/orders/orders-sort) for more information.
         */
        sort?: string;
        /** Order tag. */
        tag?: OrderTag[];
    }
    /**
     * Retrieves an order, including ticket data.
     * <!--
     * >The fieldsets in this function are restricted and only run if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
     * -->
     * @public
     * @documentationMaturity preview
     * @requiredField identifiers
     * @requiredField identifiers.eventId
     * @requiredField identifiers.orderNumber
     * @param options - An object representing the available options for getting an order.
     * @param identifiers - An object containing identifiers for the order to be retrieved.
     */
    function getOrder(identifiers: GetOrderIdentifiers, options?: GetOrderOptions): Promise<GetOrderResponse>;
    interface GetOrderIdentifiers {
        /** Event ID. */
        eventId: string;
        /** Unique order number. */
        orderNumber: string;
    }
    interface GetOrderOptions {
        /**
         * Predefined sets of fields to return.
         * - `TICKETS`: Returns `tickets`.
         * - `DETAILS`: Returns `reservationId`, `snapshotId`, `created`, `firstName`, `lastName`, `confirmed`, `status`, `method`, `ticketsQuantity`, `totalPrice`, `ticketsPdf`, `archived`, `fullName`.
         * - `FORM` : Returns `checkoutForm`.
         * - `INVOICE`: Returns `invoice`.
         *
         * Default: If `fieldset` is omitted from the request,  `orderNumber`, `eventId`, `contactId`, `memberId`, `anonymized`, `fullyCheckedIn`.
         */
        fieldset?: OrderFieldset[];
    }
    /**
     * Updates an order.
     *
     *
     * See [Partial Updates](/wix-events-v2/partial-updates) for more information.
     * <!--
     * >Note: This function is restricted and only runs if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
     * -->
     * @param fields - Set of field paths to update.
     * @public
     * @documentationMaturity preview
     * @requiredField fields
     * @requiredField identifiers
     * @requiredField identifiers.eventId
     * @requiredField identifiers.orderNumber
     * @param options - An object representing the available options for updating an order.
     * @param identifiers - An object containing identifiers for the order to be updated.
     */
    function updateOrder(identifiers: UpdateOrderIdentifiers, fields: string[], options?: UpdateOrderOptions): Promise<UpdateOrderResponse>;
    interface UpdateOrderIdentifiers {
        /** Event ID. */
        eventId: string;
        /** Unique order number. */
        orderNumber: string;
    }
    interface UpdateOrderOptions {
        /** Checkout form. */
        checkoutForm?: FormResponse$3;
        /** Whether order is archived. */
        archived?: boolean;
    }
    /**
     * Updates multiple orders' `archived` status.
     *
     *
     * See [Partial Updates](/wix-events-v2/partial-updates) for more information.
     * <!--
     * >Note: This function is restricted and only runs if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
     * -->
     * @param eventId - Event ID.
     * @public
     * @documentationMaturity preview
     * @requiredField eventId
     * @param options - An object representing the available options for confirming an order.
     */
    function bulkUpdateOrders(eventId: string, options?: BulkUpdateOrdersOptions): Promise<BulkUpdateOrdersResponse>;
    interface BulkUpdateOrdersOptions {
        /** Unique order number. */
        orderNumber?: string[];
        /** Set of fields to update. */
        fields?: string[];
        /** Whether to archive the order. */
        archived?: boolean;
    }
    /**
     * Changes order status from "INITIATED, "PENDING", or "OFFLINE_PENDING" to "PAID". Previously confirmed orders (with status "PAID" or "FREE") are not changed. Confirming previously "INITIATED" or "PENDING" orders triggers an email with the tickets to the buyer (and to additional guests, if relevant and provided).
     * <!--
     * > Note: This function is restricted and only runs if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
     * -->
     * @param eventId - Event ID.
     * @public
     * @documentationMaturity preview
     * @requiredField eventId
     * @param options - An object representing the available options for confirming an order.
     */
    function confirmOrder(eventId: string, options?: ConfirmOrderOptions): Promise<ConfirmOrderResponse>;
    interface ConfirmOrderOptions {
        /** Order numbers. */
        orderNumber?: string[];
    }
    /**
     * Retrieves a summary of total ticket sales.
     * <!--
     * > Note: This function is restricted and only runs if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
     * -->
     * @public
     * @documentationMaturity preview
     * @param options - An object representing the available options for retrieving a summary of total ticket sales.
     */
    function getSummary(options?: GetSummaryOptions): Promise<GetSummaryResponse>;
    interface GetSummaryOptions {
        /** Event ID. */
        eventId?: string | null;
    }
    /**
     * Returns invoice preview. Works only for PAID orders.
     * @internal
     * @documentationMaturity preview
     * @requiredField identifiers
     * @requiredField identifiers.eventId
     * @requiredField identifiers.orderNumber
     */
    function getInvoicePreview(identifiers: GetInvoicePreviewIdentifiers): Promise<RawHttpResponse>;
    interface GetInvoicePreviewIdentifiers {
        /** Event ID. */
        eventId: string;
        /** Order number. */
        orderNumber: string;
    }
    type eventsV1OrderOrders_universal_d_Order = Order;
    type eventsV1OrderOrders_universal_d_PaymentDetails = PaymentDetails;
    type eventsV1OrderOrders_universal_d_PaymentTransaction = PaymentTransaction;
    type eventsV1OrderOrders_universal_d_ListOrdersRequest = ListOrdersRequest;
    type eventsV1OrderOrders_universal_d_OrderFieldset = OrderFieldset;
    const eventsV1OrderOrders_universal_d_OrderFieldset: typeof OrderFieldset;
    type eventsV1OrderOrders_universal_d_OrderTag = OrderTag;
    const eventsV1OrderOrders_universal_d_OrderTag: typeof OrderTag;
    type eventsV1OrderOrders_universal_d_ListOrdersResponse = ListOrdersResponse;
    type eventsV1OrderOrders_universal_d_OrderFacets = OrderFacets;
    type eventsV1OrderOrders_universal_d_OrderFacetCounts = OrderFacetCounts;
    type eventsV1OrderOrders_universal_d_GetOrderRequest = GetOrderRequest;
    type eventsV1OrderOrders_universal_d_GetOrderResponse = GetOrderResponse;
    type eventsV1OrderOrders_universal_d_GetOrderByOrderNumberRequest = GetOrderByOrderNumberRequest;
    type eventsV1OrderOrders_universal_d_GetOrderByOrderNumberResponse = GetOrderByOrderNumberResponse;
    type eventsV1OrderOrders_universal_d_UpdateOrderRequest = UpdateOrderRequest;
    type eventsV1OrderOrders_universal_d_UpdateOrderResponse = UpdateOrderResponse;
    type eventsV1OrderOrders_universal_d_BulkUpdateOrdersRequest = BulkUpdateOrdersRequest;
    type eventsV1OrderOrders_universal_d_BulkUpdateOrdersResponse = BulkUpdateOrdersResponse;
    type eventsV1OrderOrders_universal_d_ConfirmOrderRequest = ConfirmOrderRequest;
    type eventsV1OrderOrders_universal_d_ConfirmOrderResponse = ConfirmOrderResponse;
    type eventsV1OrderOrders_universal_d_GetSummaryRequest = GetSummaryRequest;
    type eventsV1OrderOrders_universal_d_GetSummaryResponse = GetSummaryResponse;
    type eventsV1OrderOrders_universal_d_TicketSales = TicketSales;
    type eventsV1OrderOrders_universal_d_GetInvoicePreviewRequest = GetInvoicePreviewRequest;
    type eventsV1OrderOrders_universal_d_RawHttpResponse = RawHttpResponse;
    type eventsV1OrderOrders_universal_d_HeadersEntry = HeadersEntry;
    type eventsV1OrderOrders_universal_d_GetPaymentInfoRequest = GetPaymentInfoRequest;
    type eventsV1OrderOrders_universal_d_GetPaymentInfoResponse = GetPaymentInfoResponse;
    type eventsV1OrderOrders_universal_d_PaymentTransactionSummary = PaymentTransactionSummary;
    type eventsV1OrderOrders_universal_d_PaymentTransactionEvent = PaymentTransactionEvent;
    type eventsV1OrderOrders_universal_d_OrderPaid = OrderPaid;
    type eventsV1OrderOrders_universal_d_ReservationCreated = ReservationCreated;
    type eventsV1OrderOrders_universal_d_ReservationStatus = ReservationStatus;
    const eventsV1OrderOrders_universal_d_ReservationStatus: typeof ReservationStatus;
    type eventsV1OrderOrders_universal_d_TicketQuantity = TicketQuantity;
    type eventsV1OrderOrders_universal_d_ReservationUpdated = ReservationUpdated;
    type eventsV1OrderOrders_universal_d_GetCheckoutOptionsRequest = GetCheckoutOptionsRequest;
    type eventsV1OrderOrders_universal_d_GetCheckoutOptionsResponse = GetCheckoutOptionsResponse;
    type eventsV1OrderOrders_universal_d_ListAvailableTicketsRequest = ListAvailableTicketsRequest;
    type eventsV1OrderOrders_universal_d_ListAvailableTicketsResponse = ListAvailableTicketsResponse;
    type eventsV1OrderOrders_universal_d_QueryAvailableTicketsRequest = QueryAvailableTicketsRequest;
    type eventsV1OrderOrders_universal_d_QueryAvailableTicketsResponse = QueryAvailableTicketsResponse;
    type eventsV1OrderOrders_universal_d_CreateReservationRequest = CreateReservationRequest;
    type eventsV1OrderOrders_universal_d_TicketReservationQuantity = TicketReservationQuantity;
    type eventsV1OrderOrders_universal_d_CreateReservationResponse = CreateReservationResponse;
    type eventsV1OrderOrders_universal_d_TicketReservation = TicketReservation;
    type eventsV1OrderOrders_universal_d_CancelReservationRequest = CancelReservationRequest;
    type eventsV1OrderOrders_universal_d_CancelReservationResponse = CancelReservationResponse;
    type eventsV1OrderOrders_universal_d_GetInvoiceRequest = GetInvoiceRequest;
    type eventsV1OrderOrders_universal_d_DiscountRequest = DiscountRequest;
    type eventsV1OrderOrders_universal_d_PaidPlanBenefit = PaidPlanBenefit;
    type eventsV1OrderOrders_universal_d_GetInvoiceResponse = GetInvoiceResponse;
    type eventsV1OrderOrders_universal_d_DiscountErrors = DiscountErrors;
    type eventsV1OrderOrders_universal_d_Error = Error;
    type eventsV1OrderOrders_universal_d_CheckoutRequest = CheckoutRequest;
    type eventsV1OrderOrders_universal_d_Buyer = Buyer;
    type eventsV1OrderOrders_universal_d_CheckoutOptions = CheckoutOptions;
    type eventsV1OrderOrders_universal_d_CheckoutResponse = CheckoutResponse;
    type eventsV1OrderOrders_universal_d_OrderInitiated = OrderInitiated;
    type eventsV1OrderOrders_universal_d_UpdateCheckoutRequest = UpdateCheckoutRequest;
    type eventsV1OrderOrders_universal_d_UpdateCheckoutResponse = UpdateCheckoutResponse;
    type eventsV1OrderOrders_universal_d_PosCheckoutRequest = PosCheckoutRequest;
    type eventsV1OrderOrders_universal_d_PosCheckoutResponse = PosCheckoutResponse;
    const eventsV1OrderOrders_universal_d_listOrders: typeof listOrders;
    type eventsV1OrderOrders_universal_d_ListOrdersOptions = ListOrdersOptions;
    const eventsV1OrderOrders_universal_d_getOrder: typeof getOrder;
    type eventsV1OrderOrders_universal_d_GetOrderIdentifiers = GetOrderIdentifiers;
    type eventsV1OrderOrders_universal_d_GetOrderOptions = GetOrderOptions;
    const eventsV1OrderOrders_universal_d_updateOrder: typeof updateOrder;
    type eventsV1OrderOrders_universal_d_UpdateOrderIdentifiers = UpdateOrderIdentifiers;
    type eventsV1OrderOrders_universal_d_UpdateOrderOptions = UpdateOrderOptions;
    const eventsV1OrderOrders_universal_d_bulkUpdateOrders: typeof bulkUpdateOrders;
    type eventsV1OrderOrders_universal_d_BulkUpdateOrdersOptions = BulkUpdateOrdersOptions;
    const eventsV1OrderOrders_universal_d_confirmOrder: typeof confirmOrder;
    type eventsV1OrderOrders_universal_d_ConfirmOrderOptions = ConfirmOrderOptions;
    const eventsV1OrderOrders_universal_d_getSummary: typeof getSummary;
    type eventsV1OrderOrders_universal_d_GetSummaryOptions = GetSummaryOptions;
    const eventsV1OrderOrders_universal_d_getInvoicePreview: typeof getInvoicePreview;
    type eventsV1OrderOrders_universal_d_GetInvoicePreviewIdentifiers = GetInvoicePreviewIdentifiers;
    namespace eventsV1OrderOrders_universal_d {
        export { __debug$8 as __debug, eventsV1OrderOrders_universal_d_Order as Order, FormResponse$3 as FormResponse, InputValue$3 as InputValue, FormattedAddress$3 as FormattedAddress, Address$6 as Address, AddressStreetOneOf$6 as AddressStreetOneOf, StreetAddress$6 as StreetAddress, AddressLocation$6 as AddressLocation, Subdivision$6 as Subdivision, SubdivisionType$6 as SubdivisionType, OrderStatus$2 as OrderStatus, Money$4 as Money, TicketingTicket$1 as TicketingTicket, CheckIn$3 as CheckIn, GuestDetails$2 as GuestDetails, ChannelType$1 as ChannelType, TicketDetails$2 as TicketDetails, Invoice$1 as Invoice, Item$1 as Item, Discount$1 as Discount, DiscountItem$1 as DiscountItem, DiscountItemDiscountOneOf$1 as DiscountItemDiscountOneOf, CouponDiscount$1 as CouponDiscount, PaidPlanDiscount$1 as PaidPlanDiscount, PaidPlanDiscountDiscountOneOf$1 as PaidPlanDiscountDiscountOneOf, PercentDiscount$1 as PercentDiscount, Tax$1 as Tax, TaxType$2 as TaxType, Fee$1 as Fee, FeeName$1 as FeeName, FeeType$2 as FeeType, eventsV1OrderOrders_universal_d_PaymentDetails as PaymentDetails, eventsV1OrderOrders_universal_d_PaymentTransaction as PaymentTransaction, OrderDeleted$1 as OrderDeleted, OrderType$1 as OrderType, Ticket$2 as Ticket, OnlineConferencingLogin$3 as OnlineConferencingLogin, eventsV1OrderOrders_universal_d_ListOrdersRequest as ListOrdersRequest, eventsV1OrderOrders_universal_d_OrderFieldset as OrderFieldset, eventsV1OrderOrders_universal_d_OrderTag as OrderTag, eventsV1OrderOrders_universal_d_ListOrdersResponse as ListOrdersResponse, FacetCounts$4 as FacetCounts, SearchMetaData$1 as SearchMetaData, Result$1 as Result, eventsV1OrderOrders_universal_d_OrderFacets as OrderFacets, eventsV1OrderOrders_universal_d_OrderFacetCounts as OrderFacetCounts, Counts$2 as Counts, eventsV1OrderOrders_universal_d_GetOrderRequest as GetOrderRequest, eventsV1OrderOrders_universal_d_GetOrderResponse as GetOrderResponse, CalendarLinks$2 as CalendarLinks, eventsV1OrderOrders_universal_d_GetOrderByOrderNumberRequest as GetOrderByOrderNumberRequest, eventsV1OrderOrders_universal_d_GetOrderByOrderNumberResponse as GetOrderByOrderNumberResponse, eventsV1OrderOrders_universal_d_UpdateOrderRequest as UpdateOrderRequest, eventsV1OrderOrders_universal_d_UpdateOrderResponse as UpdateOrderResponse, OrderUpdated$2 as OrderUpdated, eventsV1OrderOrders_universal_d_BulkUpdateOrdersRequest as BulkUpdateOrdersRequest, eventsV1OrderOrders_universal_d_BulkUpdateOrdersResponse as BulkUpdateOrdersResponse, eventsV1OrderOrders_universal_d_ConfirmOrderRequest as ConfirmOrderRequest, eventsV1OrderOrders_universal_d_ConfirmOrderResponse as ConfirmOrderResponse, eventsV1OrderOrders_universal_d_GetSummaryRequest as GetSummaryRequest, eventsV1OrderOrders_universal_d_GetSummaryResponse as GetSummaryResponse, eventsV1OrderOrders_universal_d_TicketSales as TicketSales, eventsV1OrderOrders_universal_d_GetInvoicePreviewRequest as GetInvoicePreviewRequest, eventsV1OrderOrders_universal_d_RawHttpResponse as RawHttpResponse, eventsV1OrderOrders_universal_d_HeadersEntry as HeadersEntry, eventsV1OrderOrders_universal_d_GetPaymentInfoRequest as GetPaymentInfoRequest, eventsV1OrderOrders_universal_d_GetPaymentInfoResponse as GetPaymentInfoResponse, eventsV1OrderOrders_universal_d_PaymentTransactionSummary as PaymentTransactionSummary, eventsV1OrderOrders_universal_d_PaymentTransactionEvent as PaymentTransactionEvent, OrderConfirmed$1 as OrderConfirmed, eventsV1OrderOrders_universal_d_OrderPaid as OrderPaid, eventsV1OrderOrders_universal_d_ReservationCreated as ReservationCreated, eventsV1OrderOrders_universal_d_ReservationStatus as ReservationStatus, eventsV1OrderOrders_universal_d_TicketQuantity as TicketQuantity, eventsV1OrderOrders_universal_d_ReservationUpdated as ReservationUpdated, eventsV1OrderOrders_universal_d_GetCheckoutOptionsRequest as GetCheckoutOptionsRequest, eventsV1OrderOrders_universal_d_GetCheckoutOptionsResponse as GetCheckoutOptionsResponse, eventsV1OrderOrders_universal_d_ListAvailableTicketsRequest as ListAvailableTicketsRequest, State$4 as State, eventsV1OrderOrders_universal_d_ListAvailableTicketsResponse as ListAvailableTicketsResponse, ResponseMetaData$1 as ResponseMetaData, TicketDefinition$1 as TicketDefinition, Dashboard$2 as Dashboard, WixFeeConfig$1 as WixFeeConfig, TicketSalePeriod$1 as TicketSalePeriod, TicketSaleStatus$1 as TicketSaleStatus, TicketPricing$1 as TicketPricing, TicketPricingPriceOneOf$1 as TicketPricingPriceOneOf, PricingOptions$1 as PricingOptions, PricingOption$1 as PricingOption, Type$1 as Type, eventsV1OrderOrders_universal_d_QueryAvailableTicketsRequest as QueryAvailableTicketsRequest, TicketDefinitionFieldset$1 as TicketDefinitionFieldset, eventsV1OrderOrders_universal_d_QueryAvailableTicketsResponse as QueryAvailableTicketsResponse, eventsV1OrderOrders_universal_d_CreateReservationRequest as CreateReservationRequest, eventsV1OrderOrders_universal_d_TicketReservationQuantity as TicketReservationQuantity, eventsV1OrderOrders_universal_d_CreateReservationResponse as CreateReservationResponse, eventsV1OrderOrders_universal_d_TicketReservation as TicketReservation, eventsV1OrderOrders_universal_d_CancelReservationRequest as CancelReservationRequest, eventsV1OrderOrders_universal_d_CancelReservationResponse as CancelReservationResponse, eventsV1OrderOrders_universal_d_GetInvoiceRequest as GetInvoiceRequest, eventsV1OrderOrders_universal_d_DiscountRequest as DiscountRequest, eventsV1OrderOrders_universal_d_PaidPlanBenefit as PaidPlanBenefit, eventsV1OrderOrders_universal_d_GetInvoiceResponse as GetInvoiceResponse, eventsV1OrderOrders_universal_d_DiscountErrors as DiscountErrors, eventsV1OrderOrders_universal_d_Error as Error, eventsV1OrderOrders_universal_d_CheckoutRequest as CheckoutRequest, eventsV1OrderOrders_universal_d_Buyer as Buyer, Guest$2 as Guest, eventsV1OrderOrders_universal_d_CheckoutOptions as CheckoutOptions, eventsV1OrderOrders_universal_d_CheckoutResponse as CheckoutResponse, eventsV1OrderOrders_universal_d_OrderInitiated as OrderInitiated, eventsV1OrderOrders_universal_d_UpdateCheckoutRequest as UpdateCheckoutRequest, eventsV1OrderOrders_universal_d_UpdateCheckoutResponse as UpdateCheckoutResponse, eventsV1OrderOrders_universal_d_PosCheckoutRequest as PosCheckoutRequest, eventsV1OrderOrders_universal_d_PosCheckoutResponse as PosCheckoutResponse, eventsV1OrderOrders_universal_d_listOrders as listOrders, eventsV1OrderOrders_universal_d_ListOrdersOptions as ListOrdersOptions, eventsV1OrderOrders_universal_d_getOrder as getOrder, eventsV1OrderOrders_universal_d_GetOrderIdentifiers as GetOrderIdentifiers, eventsV1OrderOrders_universal_d_GetOrderOptions as GetOrderOptions, eventsV1OrderOrders_universal_d_updateOrder as updateOrder, eventsV1OrderOrders_universal_d_UpdateOrderIdentifiers as UpdateOrderIdentifiers, eventsV1OrderOrders_universal_d_UpdateOrderOptions as UpdateOrderOptions, eventsV1OrderOrders_universal_d_bulkUpdateOrders as bulkUpdateOrders, eventsV1OrderOrders_universal_d_BulkUpdateOrdersOptions as BulkUpdateOrdersOptions, eventsV1OrderOrders_universal_d_confirmOrder as confirmOrder, eventsV1OrderOrders_universal_d_ConfirmOrderOptions as ConfirmOrderOptions, eventsV1OrderOrders_universal_d_getSummary as getSummary, eventsV1OrderOrders_universal_d_GetSummaryOptions as GetSummaryOptions, eventsV1OrderOrders_universal_d_getInvoicePreview as getInvoicePreview, eventsV1OrderOrders_universal_d_GetInvoicePreviewIdentifiers as GetInvoicePreviewIdentifiers, };
    }
    const __debug$7: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface TicketingTicket {
        /** Unique ticket number (issued automatically). */
        ticketNumber?: string;
        /** Associated order number. */
        orderNumber?: string;
        /** Ticket definition ID. */
        ticketDefinitionId?: string;
        /** Ticket name. */
        name?: string;
        /** Ticket price. */
        price?: Money$3;
        /**
         * Whether ticket requires payment.
         * @readonly
         */
        free?: boolean;
        /** Ticket policy (as displayed in PDF). */
        policy?: string;
        /**
         * @internal
         * @internal */
        qrCode?: string;
        /** Ticket check-in. */
        checkIn?: CheckIn$2;
        /**
         * Associated order status.
         * Supported values: `NA_ORDER_STATUS`, `FREE, PENDING`, `PAID`, `OFFLINE_PENDING`, `INITIATED`
         */
        orderStatus?: OrderStatus$1;
        /** Whether order and ticket are visible in order list. */
        orderArchived?: boolean;
        /** Buyer full name. */
        orderFullName?: string;
        /** Guest full name. */
        guestFullName?: string | null;
        /** Guest personal details. */
        guestDetails?: GuestDetails$1;
        /** Whether ticket is visible in guest list. */
        archived?: boolean;
        /**
         * @internal
         * @internal */
        ticketPdf?: string;
        /** Ticket owner member ID. */
        memberId?: string | null;
        /**
         * Whether ticket was anonymized by GDPR delete.
         * Anonymized tickets no longer contain personally identifiable information (PII).
         */
        anonymized?: boolean;
        /**
         * Ticket check-in URL.
         * Shown as QR code image in PDF.
         *
         * Format: `https://www.wixevents.com/check-in/{ticket number},{event id}`
         *
         * Example: `https://www.wixevents.com/check-in/AAAA-AAAA-BB021,00000000-0000-0000-0000-000000000000`
         */
        checkInUrl?: string;
        /** URL for ticket PDF download. */
        ticketPdfUrl?: string;
        /** Associated order checkout channel type. */
        channel?: ChannelType;
        /**
         * URL to download ticket in .pkpass format for Apple Wallet.
         * @readonly
         */
        walletPassUrl?: string;
        /**
         * Additional ticket details.
         * @internal
         * @readonly
         */
        ticketDetails?: TicketDetails$1;
    }
    interface Money$3 {
        /** *Deprecated:** Use `value` instead. */
        amount?: string;
        /** ISO 4217 format of the currency i.e. `USD`. */
        currency?: string;
        /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
        value?: string | null;
    }
    interface CheckIn$2 {
        /** Time of check-in */
        created?: Date;
    }
    enum OrderStatus$1 {
        /** Order status not available for this request fieldset */
        NA_ORDER_STATUS = "NA_ORDER_STATUS",
        /** Order is confirmed, no payment required */
        FREE = "FREE",
        /** Order was paid but payment gateway suspended the payment. Eventually changes to PAID */
        PENDING = "PENDING",
        /** Order paid via payment gateway */
        PAID = "PAID",
        /** Order confirmed but has to be paid via offline payment and status manually updated to PAID */
        OFFLINE_PENDING = "OFFLINE_PENDING",
        /** Order is awaiting for payment in Cashier */
        INITIATED = "INITIATED",
        /** Order was canceled */
        CANCELED = "CANCELED",
        /** Order payment was declined */
        DECLINED = "DECLINED"
    }
    interface GuestDetails$1 {
        /** Whether ticket belongs to assigned guest. */
        guestAssigned?: boolean;
        /** Guest first name. */
        firstName?: string | null;
        /** Guest last name. */
        lastName?: string | null;
        /** Guest email. */
        email?: string | null;
        /** Full form response. */
        form?: FormResponse$2;
        /** Contact ID associated with this guest. */
        contactId?: string | null;
    }
    interface FormResponse$2 {
        inputValues?: InputValue$2[];
    }
    interface InputValue$2 {
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
        address?: FormattedAddress$2;
    }
    interface FormattedAddress$2 {
        /** One line address representation. */
        formatted?: string;
        /** Address components (optional). */
        address?: Address$5;
    }
    /** Physical address */
    interface Address$5 extends AddressStreetOneOf$5 {
        /** Street name and number. */
        streetAddress?: StreetAddress$5;
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
    }
    /** @oneof */
    interface AddressStreetOneOf$5 {
        /** Street name and number. */
        streetAddress?: StreetAddress$5;
        /** Main address line, usually street and number as free text. */
        addressLine?: string | null;
    }
    interface StreetAddress$5 {
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
    interface AddressLocation$5 {
        /** Address latitude. */
        latitude?: number | null;
        /** Address longitude. */
        longitude?: number | null;
    }
    interface Subdivision$5 {
        /** Short subdivision code. */
        code?: string;
        /** Subdivision full name. */
        name?: string;
        /**
         * Subdivision level
         * @internal
         */
        type?: SubdivisionType$5;
        /**
         * Free text description of subdivision type.
         * @internal
         */
        typeInfo?: string | null;
    }
    enum SubdivisionType$5 {
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
    enum ChannelType {
        /** Buyer created order via one of the online channels (website, mobile app, etc.) */
        ONLINE = "ONLINE",
        /** Order created and money collected by the sales person */
        OFFLINE_POS = "OFFLINE_POS"
    }
    interface TicketDetails$1 {
        /** Unique seat id in the event venue. */
        seatId?: string | null;
        /**
         * Optional sector name.
         * @internal
         * @readonly
         */
        sectorName?: string | null;
        /**
         * Area name.
         * @internal
         * @readonly
         */
        areaName?: string | null;
        /**
         * Table name.
         * @internal
         * @readonly
         */
        tableName?: string | null;
        /**
         * Row label.
         * @internal
         * @readonly
         */
        rowNumber?: string | null;
        /**
         * Seat label in a row or table.
         * @internal
         * @readonly
         */
        seatNumber?: string | null;
        /**
         * Optional sector label.
         * @readonly
         */
        sectionLabel?: string | null;
        /**
         * Area label.
         * @readonly
         */
        areaLabel?: string | null;
        /**
         * Table label.
         * @readonly
         */
        tableLabel?: string | null;
        /**
         * Row label.
         * @readonly
         */
        rowLabel?: string | null;
        /**
         * Seat label in a row or table.
         * @readonly
         */
        seatLabel?: string | null;
        /** Number of places in the spot. If not provided - defaults to 1. */
        capacity?: number | null;
        /** Custom pricing of ticket. */
        priceOverride?: string | null;
        /** Pricing option id. */
        pricingOptionId?: string | null;
        /**
         * Pricing option name.
         * @readonly
         */
        pricingOptionName?: string | null;
    }
    interface ListTicketsRequest {
        /** Event IDs. */
        eventId: string[];
        /** Offset. See [Pagination](/wix-events-v2/pagination). */
        offset?: number;
        /** Number of items to load per page. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
        limit?: number;
        /**
         * Deprecated, use `sort` instead.
         * Sort order. Defaults to "ticket_number:asc".
         * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-tickets).
         * @internal
         */
        order?: string;
        /** Order numbers. */
        orderNumber?: string[];
        /** Ticket numbers. */
        ticketNumber?: string[];
        /** Textual search filter - search is performed on "orderFullName", "guestFullName", and "ticketNumber". */
        searchPhrase?: string;
        /** Order statuses. */
        orderStatus?: OrderStatus$1[];
        /**
         * Deprecated, use `ORDER_ARCHIVED` / `ORDER_ACTIVE` state filter instead.
         * @internal
         */
        orderArchived?: boolean | null;
        /**
         * Deprecated, use `CHECKED_IN` / `NON_CHECKED_IN` state filter instead.
         * @internal
         */
        checkedIn?: boolean | null;
        /** Set of fields to return in the response.  */
        fieldset?: TicketFieldset[];
        /** Ticket states. */
        state?: State$3[];
        /** Site member IDs. */
        memberId?: string[];
        /** Filter facets. */
        facet?: string[];
        /** Sort order. Defaults to "ticket_number:asc". */
        sort?: string;
        /** Guest contact IDs. */
        contactId?: string[];
        /** Ticket definition IDs. */
        ticketDefinitionId?: string[];
    }
    enum TicketFieldset {
        /** Include guest details in ticket response */
        GUEST_DETAILS = "GUEST_DETAILS",
        /** Include ticket details in ticket response */
        TICKET_DETAILS = "TICKET_DETAILS",
        /** Include individual guest form in ticket response */
        GUEST_FORM = "GUEST_FORM"
    }
    enum State$3 {
        /** Returns only archived orders' tickets */
        ORDER_ARCHIVED = "ORDER_ARCHIVED",
        /** Returns only non-archived orders' tickets */
        ORDER_ACTIVE = "ORDER_ACTIVE",
        /** Returns only archived tickets */
        TICKET_ARCHIVED = "TICKET_ARCHIVED",
        /** Returns only non-archived tickets */
        TICKET_ACTIVE = "TICKET_ACTIVE",
        /** Returns only checked-in tickets */
        CHECKED_IN = "CHECKED_IN",
        /** Returns only non-checked-in tickets */
        NON_CHECKED_IN = "NON_CHECKED_IN",
        /** Returns only free tickets */
        FREE = "FREE",
        /** Returns only paid tickets */
        PAID = "PAID",
        /** Returns only member tickets */
        MEMBER = "MEMBER"
    }
    interface ListTicketsResponse {
        /** Total tickets matching the given filters. */
        total?: number;
        /** Offset. */
        offset?: number;
        /** Limit. */
        limit?: number;
        /** Tickets. */
        tickets?: TicketingTicket[];
        /** Facets. */
        facets?: Record<string, FacetCounts$3>;
        /**
         * Ticket data enriched facets.
         * @internal
         */
        ticketFacets?: TicketFacets;
    }
    interface FacetCounts$3 {
        /** Facet counts aggregated per value */
        counts?: Record<string, number>;
    }
    interface TicketFacets {
        /** Filter facets. */
        facets?: Record<string, TicketFacetCounts>;
    }
    interface TicketFacetCounts {
        /** Facet totals, aggregated per filter. */
        counts?: Record<string, Counts$1>;
    }
    interface Counts$1 {
        /** Number of tickets. */
        count?: number;
        /** Number of checked in tickets. */
        checkedIn?: number;
    }
    interface GetTicketRequest {
        /** Event ID. */
        eventId: string;
        /** Unique ticket number. */
        ticketNumber: string;
        /**
         * Predefined sets of fields to return.
         * - `TICKET_DETAILS`: Returns `ticketNumber`, `orderNumber`, `ticketDefinitionId`, `name`, `price`, `free`, `policy`, `qrCode`, `checkIn`, `orderStatus`, `orderArchived`, `archived`, `orderFullName`, `ticketPdf`, `checkInUrl` and `ticketPdfUrl`.
         * - `GUEST_DETAILS`: Returns `guestDetails`.
         * - `GUEST_FORM': Returns `guestDetails.form`.
         *
         * Default: If `fieldset` is omitted from the request, `memberId` and `anonymized`.
         */
        fieldset?: TicketFieldset[];
    }
    interface GetTicketResponse {
        /** Ticket. */
        ticket?: TicketingTicket;
    }
    interface CheckInTicketRequest {
        /** Event ID. */
        eventId: string;
        /**
         * Deprecated, use individual ticket numbers.
         * @internal
         */
        orderNumber?: string;
        /** Tickets to check-in. */
        ticketNumber?: string[];
    }
    interface CheckInTicketResponse {
        /** Updated tickets. */
        tickets?: TicketingTicket[];
    }
    interface OrderUpdated$1 {
        /** Order updated timestamp in ISO UTC format. */
        timestamp?: Date;
        /** Site language when Order initiated */
        language?: string | null;
        /** Event ID. */
        eventId?: string;
        /** Unique order number. */
        orderNumber?: string;
        /** Contact ID associated with this order. */
        contactId?: string;
        /** Member ID associated with this order. */
        memberId?: string | null;
        /**
         * Order created timestamp.
         * @readonly
         */
        created?: Date;
        /** Buyer first name. */
        firstName?: string;
        /** Buyer last name. */
        lastName?: string;
        /** Buyer email. */
        email?: string;
        /** Checkout form response. */
        checkoutForm?: FormResponse$2;
        /** Whether order is confirmed - occurs once payment gateway processes the payment and funds reach merchant's account. */
        confirmed?: boolean;
        /** Order status. */
        status?: OrderStatus$1;
        /** Payment method used for paid tickets purchase, i.e. "payPal", "creditCard", etc. */
        method?: string | null;
        /** Tickets generated after payment. */
        tickets?: Ticket$1[];
        /** Whether order was archived and excluded from results. */
        archived?: boolean;
        /** Whether event was triggered by GDPR delete request. */
        triggeredByAnonymizeRequest?: boolean;
    }
    interface Ticket$1 {
        /** Unique issued ticket number. */
        ticketNumber?: string;
        /** Ticket definition ID. */
        ticketDefinitionId?: string;
        /** Ticket check-in. */
        checkIn?: CheckIn$2;
        /** Ticket price. */
        price?: Money$3;
        /** Whether ticket is archived. */
        archived?: boolean;
        /** Guest first name. */
        firstName?: string | null;
        /** Guest last name. */
        lastName?: string | null;
        /** Guest email. */
        email?: string | null;
        /** Contact ID associated with this ticket. */
        contactId?: string | null;
        /** Whether ticket is confirmed */
        confirmed?: boolean;
        /** Member ID associated with this ticket. */
        memberId?: string | null;
        /** Ticket form response (only assigned tickets contain separate forms). */
        form?: FormResponse$2;
        /** Ticket name. */
        ticketName?: string;
        /** Anonymized tickets no longer contain personally identifiable information (PII). */
        anonymized?: boolean;
        /** URL and password to online conference */
        onlineConferencingLogin?: OnlineConferencingLogin$2;
    }
    interface OnlineConferencingLogin$2 {
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
    interface DeleteTicketCheckInRequest {
        /** Event ID. */
        eventId: string;
        /**
         * Deprecated, use individual ticket numbers.
         * @internal
         */
        orderNumber?: string;
        /** Tickets to delete check-ins for. */
        ticketNumber?: string[];
    }
    interface DeleteTicketCheckInResponse {
        /** Updated tickets. */
        tickets?: TicketingTicket[];
    }
    interface UpdateTicketRequest {
        /** Event ID. */
        eventId: string;
        /** Unique ticket number. */
        ticketNumber: string;
        /**
         * Set of field paths, specifying which parts of this resource to update.
         * When `fields` is empty, the request is interpreted as a full update.
         * Behavior follows [google.protobuf.FieldMask](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask) semantics.
         */
        fields: string[];
        /**
         * Deprecated. Use `guestDetails.form`
         * @internal
         */
        checkoutForm?: FormResponse$2;
        /** Whether ticket is archived. */
        archived?: boolean;
        /** Assigned guest details. */
        guestDetails?: GuestDetailsUpdate;
    }
    interface GuestDetailsUpdate {
        /**
         * Assigned guest form.
         * To update non-assigned guest form, use [Update Order](/wix-events-v2/orders/updateorder).
         *
         * Does not support partial updates - entire form object will be replaced when `guestDetails.form` is masked.
         */
        form?: FormResponse$2;
    }
    interface UpdateTicketResponse {
        /** Updated ticket. */
        ticket?: TicketingTicket;
    }
    interface BulkUpdateTicketsRequest {
        /** Event ID. */
        eventId: string;
        /** Unique ticket numbers. */
        ticketNumber?: string[];
        /** Whether tickets are archived. */
        archived?: boolean;
    }
    interface BulkUpdateTicketsResponse {
        /** Updated tickets. */
        tickets?: TicketingTicket[];
    }
    interface GetDemoTicketRequest {
        /** Ticket definition ID. */
        definitionId?: string;
    }
    interface GetDemoTicketResponse {
        /** Ticket. */
        ticket?: TicketingTicket;
    }
    /**
     * Retrieves a list of up to 100 tickets.
     *
     * <!--
     * >**Note:** This function is restricted and only runs if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
     * -->
     * @param eventId - Event IDs.
     * @public
     * @documentationMaturity preview
     * @requiredField eventId
     * @param options - Options for defining the returned list of tickets.
     */
    function listTickets(eventId: string[], options?: ListTicketsOptions): Promise<ListTicketsResponse>;
    interface ListTicketsOptions {
        /**
         *
         * Offset. See [Pagination](/wix-events-v2/pagination).
         */
        offset?: number;
        /** Number of items to load per page. See [Pagination](/wix-events-v2/pagination).   */
        limit?: number;
        /**
         * Deprecated, use `sort` instead.
         * Sort order. Defaults to "ticket_number:asc".
         * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-tickets).
         * @internal
         */
        order?: string;
        /** Order numbers. */
        orderNumber?: string[];
        /** Ticket numbers. */
        ticketNumber?: string[];
        /** Textual search filter - search is performed on `"orderFullName"`, `"guestFullName"`, and `"ticketNumber"`. */
        searchPhrase?: string;
        /** Order statuses. */
        orderStatus?: OrderStatus$1[];
        /**
         * Deprecated, use `ORDER_ARCHIVED` / `ORDER_ACTIVE` state filter instead.
         * @internal
         */
        orderArchived?: boolean | null;
        /**
         * Deprecated, use `CHECKED_IN` / `NON_CHECKED_IN` state filter instead.
         * @internal
         */
        checkedIn?: boolean | null;
        /**
         * Predefined sets of fields to return.
         * - `TICKET_DETAILS`: Returns `ticketNumber`, `orderNumber`, `ticketDefinitionId`, `name`, `price`, `free`, `policy`, `qrCode`, `checkIn`, `orderStatus`, `orderArchived`, `archived`, `orderFullName`, `ticketPdf`, `checkInUrl` and `ticketPdfUrl`.
         * - `GUEST_DETAILS`: Returns `guestDetails`.
         * - `GUEST_FORM`: Returns `guestDetails.form`.
         *
         * Default: If `fieldset` is omitted from the request, `memberId` and `anonymized`.
         */
        fieldset?: TicketFieldset[];
        /** Ticket states. */
        state?: State$3[];
        /** Site member IDs. */
        memberId?: string[];
        /** Filter facets. */
        facet?: string[];
        /**
         * Sort order.
         *
         * Default: `"ticketNumber"`:`"asc"`.
         *
         *
         * See [Tickets Sort](/wix-events-v2/tickets/tickets-sort) for more information.
         */
        sort?: string;
        /** Guest contact IDs. */
        contactId?: string[];
        /** Ticket definition IDs. */
        ticketDefinitionId?: string[];
    }
    /**
     * Retrieves a ticket by unique ticket number.
     *
     * <!--
     * > **Note:** The fieldsets in this function are restricted and only run if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
     * -->
     * @public
     * @documentationMaturity preview
     * @requiredField identifiers
     * @requiredField identifiers.eventId
     * @requiredField identifiers.ticketNumber
     * @param identifiers - Details for the ticket to retrieve.
     * @param options - Options for the returned ticket data.
     */
    function getTicket(identifiers: GetTicketIdentifiers, options?: GetTicketOptions): Promise<GetTicketResponse>;
    interface GetTicketIdentifiers {
        /** Event ID. */
        eventId: string;
        /** Unique ticket number. */
        ticketNumber: string;
    }
    interface GetTicketOptions {
        /**
         * Predefined sets of fields to return.
         * - `TICKET_DETAILS`: Returns `ticketNumber`, `orderNumber`, `ticketDefinitionId`, `name`, `price`, `free`, `policy`, `qrCode`, `checkIn`, `orderStatus`, `orderArchived`, `archived`, `orderFullName`, `ticketPdf`, `checkInUrl` and `ticketPdfUrl`.
         * - `GUEST_DETAILS`: Returns `guestDetails`.
         * - `GUEST_FORM': Returns `guestDetails.form`.
         *
         * Default: If `fieldset` is omitted from the request, `memberId` and `anonymized`.
         */
        fieldset?: TicketFieldset[];
    }
    /**
     * Checks in 1 or more tickets.
     * @param eventId - Event ID.
     * @public
     * @documentationMaturity preview
     * @requiredField eventId
     */
    function checkInTickets(eventId: string, options?: CheckInTicketsOptions): Promise<CheckInTicketResponse>;
    interface CheckInTicketsOptions {
        /**
         * Deprecated, use individual ticket numbers.
         * @internal
         */
        orderNumber?: string;
        /** Tickets to check-in. */
        ticketNumber?: string[];
    }
    /**
     * Deletes check-ins for 1 or more tickets.
     * @param eventId - Event ID.
     * @public
     * @documentationMaturity preview
     * @requiredField eventId
     */
    function deleteTicketCheckIns(eventId: string, options?: DeleteTicketCheckInsOptions): Promise<DeleteTicketCheckInResponse>;
    interface DeleteTicketCheckInsOptions {
        /**
         * Deprecated, use individual ticket numbers.
         * @internal
         */
        orderNumber?: string;
        /** Tickets to delete check-ins for. */
        ticketNumber?: string[];
    }
    /**
     * Updates a ticket.
     *
     *
     * See [Partial Updates](/wix-events-v2/partial-updates) for more information.
     * <!--
     * >**Note:** This function is restricted and only runs if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
     * -->
     *
     *
     * @param fields - Set of field paths, specifying which parts of this resource to update.
     * When `fields` is empty, the request is interpreted as a full update.
     * Behavior follows [google.protobuf.FieldMask](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask) semantics.
     * @public
     * @documentationMaturity preview
     * @requiredField fields
     * @requiredField identifiers
     * @requiredField identifiers.eventId
     * @requiredField identifiers.ticketNumber
     * @param identifiers - Details for the ticket to update.
     * @param options - Ticket details to update.
     */
    function updateTicket(identifiers: UpdateTicketIdentifiers, fields: string[], options?: UpdateTicketOptions): Promise<UpdateTicketResponse>;
    interface UpdateTicketIdentifiers {
        /** Event ID. */
        eventId: string;
        /** Unique ticket number. */
        ticketNumber: string;
    }
    interface UpdateTicketOptions {
        /**
         * Deprecated. Use `guestDetails.form`
         * @internal
         */
        checkoutForm?: FormResponse$2;
        /** Whether ticket is archived. */
        archived?: boolean;
        /** Assigned guest details. */
        guestDetails?: GuestDetailsUpdate;
    }
    /**
     * Updates the `archived` state of multiple tickets.
     *
     *
     * See [Partial Updates](/wix-events-v2/partial-updates) for more information.
     * <!--
     * > **Note:** This function is restricted and only runs if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
     * -->
     * @param eventId - Event ID.
     * @public
     * @documentationMaturity preview
     * @requiredField eventId
     * @param options - Options for updating the tickets.
     */
    function bulkUpdateTickets(eventId: string, options?: BulkUpdateTicketsOptions): Promise<BulkUpdateTicketsResponse>;
    interface BulkUpdateTicketsOptions {
        /** Unique ticket numbers. */
        ticketNumber?: string[];
        /** Whether tickets are archived. */
        archived?: boolean;
    }
    type eventsV1Ticket_universal_d_TicketingTicket = TicketingTicket;
    type eventsV1Ticket_universal_d_ChannelType = ChannelType;
    const eventsV1Ticket_universal_d_ChannelType: typeof ChannelType;
    type eventsV1Ticket_universal_d_ListTicketsRequest = ListTicketsRequest;
    type eventsV1Ticket_universal_d_TicketFieldset = TicketFieldset;
    const eventsV1Ticket_universal_d_TicketFieldset: typeof TicketFieldset;
    type eventsV1Ticket_universal_d_ListTicketsResponse = ListTicketsResponse;
    type eventsV1Ticket_universal_d_TicketFacets = TicketFacets;
    type eventsV1Ticket_universal_d_TicketFacetCounts = TicketFacetCounts;
    type eventsV1Ticket_universal_d_GetTicketRequest = GetTicketRequest;
    type eventsV1Ticket_universal_d_GetTicketResponse = GetTicketResponse;
    type eventsV1Ticket_universal_d_CheckInTicketRequest = CheckInTicketRequest;
    type eventsV1Ticket_universal_d_CheckInTicketResponse = CheckInTicketResponse;
    type eventsV1Ticket_universal_d_DeleteTicketCheckInRequest = DeleteTicketCheckInRequest;
    type eventsV1Ticket_universal_d_DeleteTicketCheckInResponse = DeleteTicketCheckInResponse;
    type eventsV1Ticket_universal_d_UpdateTicketRequest = UpdateTicketRequest;
    type eventsV1Ticket_universal_d_GuestDetailsUpdate = GuestDetailsUpdate;
    type eventsV1Ticket_universal_d_UpdateTicketResponse = UpdateTicketResponse;
    type eventsV1Ticket_universal_d_BulkUpdateTicketsRequest = BulkUpdateTicketsRequest;
    type eventsV1Ticket_universal_d_BulkUpdateTicketsResponse = BulkUpdateTicketsResponse;
    type eventsV1Ticket_universal_d_GetDemoTicketRequest = GetDemoTicketRequest;
    type eventsV1Ticket_universal_d_GetDemoTicketResponse = GetDemoTicketResponse;
    const eventsV1Ticket_universal_d_listTickets: typeof listTickets;
    type eventsV1Ticket_universal_d_ListTicketsOptions = ListTicketsOptions;
    const eventsV1Ticket_universal_d_getTicket: typeof getTicket;
    type eventsV1Ticket_universal_d_GetTicketIdentifiers = GetTicketIdentifiers;
    type eventsV1Ticket_universal_d_GetTicketOptions = GetTicketOptions;
    const eventsV1Ticket_universal_d_checkInTickets: typeof checkInTickets;
    type eventsV1Ticket_universal_d_CheckInTicketsOptions = CheckInTicketsOptions;
    const eventsV1Ticket_universal_d_deleteTicketCheckIns: typeof deleteTicketCheckIns;
    type eventsV1Ticket_universal_d_DeleteTicketCheckInsOptions = DeleteTicketCheckInsOptions;
    const eventsV1Ticket_universal_d_updateTicket: typeof updateTicket;
    type eventsV1Ticket_universal_d_UpdateTicketIdentifiers = UpdateTicketIdentifiers;
    type eventsV1Ticket_universal_d_UpdateTicketOptions = UpdateTicketOptions;
    const eventsV1Ticket_universal_d_bulkUpdateTickets: typeof bulkUpdateTickets;
    type eventsV1Ticket_universal_d_BulkUpdateTicketsOptions = BulkUpdateTicketsOptions;
    namespace eventsV1Ticket_universal_d {
        export { __debug$7 as __debug, eventsV1Ticket_universal_d_TicketingTicket as TicketingTicket, Money$3 as Money, CheckIn$2 as CheckIn, OrderStatus$1 as OrderStatus, GuestDetails$1 as GuestDetails, FormResponse$2 as FormResponse, InputValue$2 as InputValue, FormattedAddress$2 as FormattedAddress, Address$5 as Address, AddressStreetOneOf$5 as AddressStreetOneOf, StreetAddress$5 as StreetAddress, AddressLocation$5 as AddressLocation, Subdivision$5 as Subdivision, SubdivisionType$5 as SubdivisionType, eventsV1Ticket_universal_d_ChannelType as ChannelType, TicketDetails$1 as TicketDetails, eventsV1Ticket_universal_d_ListTicketsRequest as ListTicketsRequest, eventsV1Ticket_universal_d_TicketFieldset as TicketFieldset, State$3 as State, eventsV1Ticket_universal_d_ListTicketsResponse as ListTicketsResponse, FacetCounts$3 as FacetCounts, eventsV1Ticket_universal_d_TicketFacets as TicketFacets, eventsV1Ticket_universal_d_TicketFacetCounts as TicketFacetCounts, Counts$1 as Counts, eventsV1Ticket_universal_d_GetTicketRequest as GetTicketRequest, eventsV1Ticket_universal_d_GetTicketResponse as GetTicketResponse, eventsV1Ticket_universal_d_CheckInTicketRequest as CheckInTicketRequest, eventsV1Ticket_universal_d_CheckInTicketResponse as CheckInTicketResponse, OrderUpdated$1 as OrderUpdated, Ticket$1 as Ticket, OnlineConferencingLogin$2 as OnlineConferencingLogin, eventsV1Ticket_universal_d_DeleteTicketCheckInRequest as DeleteTicketCheckInRequest, eventsV1Ticket_universal_d_DeleteTicketCheckInResponse as DeleteTicketCheckInResponse, eventsV1Ticket_universal_d_UpdateTicketRequest as UpdateTicketRequest, eventsV1Ticket_universal_d_GuestDetailsUpdate as GuestDetailsUpdate, eventsV1Ticket_universal_d_UpdateTicketResponse as UpdateTicketResponse, eventsV1Ticket_universal_d_BulkUpdateTicketsRequest as BulkUpdateTicketsRequest, eventsV1Ticket_universal_d_BulkUpdateTicketsResponse as BulkUpdateTicketsResponse, eventsV1Ticket_universal_d_GetDemoTicketRequest as GetDemoTicketRequest, eventsV1Ticket_universal_d_GetDemoTicketResponse as GetDemoTicketResponse, eventsV1Ticket_universal_d_listTickets as listTickets, eventsV1Ticket_universal_d_ListTicketsOptions as ListTicketsOptions, eventsV1Ticket_universal_d_getTicket as getTicket, eventsV1Ticket_universal_d_GetTicketIdentifiers as GetTicketIdentifiers, eventsV1Ticket_universal_d_GetTicketOptions as GetTicketOptions, eventsV1Ticket_universal_d_checkInTickets as checkInTickets, eventsV1Ticket_universal_d_CheckInTicketsOptions as CheckInTicketsOptions, eventsV1Ticket_universal_d_deleteTicketCheckIns as deleteTicketCheckIns, eventsV1Ticket_universal_d_DeleteTicketCheckInsOptions as DeleteTicketCheckInsOptions, eventsV1Ticket_universal_d_updateTicket as updateTicket, eventsV1Ticket_universal_d_UpdateTicketIdentifiers as UpdateTicketIdentifiers, eventsV1Ticket_universal_d_UpdateTicketOptions as UpdateTicketOptions, eventsV1Ticket_universal_d_bulkUpdateTickets as bulkUpdateTickets, eventsV1Ticket_universal_d_BulkUpdateTicketsOptions as BulkUpdateTicketsOptions, };
    }
    const __debug$6: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface EventGuest {
        /** Guest ID. */
        _id?: string | null;
        /** Event ID. */
        eventId?: string | null;
        /** RSVP ID. <br/> <br/> **Note:** Only applicable when `guestType` is `RSVP`. */
        rsvpId?: string | null;
        /** Order number. <br/> <br/> **Note:** Only applicable when `guestType` is `BUYER` or `TICKET_HOLDER`. */
        orderNumber?: string | null;
        /** Ticket number. <br/> <br/> **Note:** Only applicable when `guestType` is `TICKET_HOLDER`. */
        ticketNumber?: string | null;
        /** List of names, numbers, and definition IDs for each ticket. */
        tickets?: TicketDetails[];
        /** Guest's contact ID. See [Contacts API](https://dev.wix.com/api/rest/contacts/contacts/contacts-v4) for more details. */
        contactId?: string | null;
        /** Guest details. <br/> <br/> Returned only when the `guestDetails` fieldset is sent in the request. */
        guestDetails?: GuestDetails;
        /** Attendance status. <br/> <br/> **Note:** For `guestType` `BUYER` or `TICKET_HOLDER` the `IN_WAITLIST` value is not applicable. */
        attendanceStatus?: AttendanceStatus;
        /** Secondary language code in [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format. Used when the event ticket should be translated into another language. */
        secondaryLanguageCode?: string | null;
        /** Date and time the guest was created in `yyyy-mm-ddThh:mm:sssZ` format. */
        _createdDate?: Date;
        /** Date and time the guest was updated in `yyyy-mm-ddThh:mm:sssZ` format. */
        _updatedDate?: Date;
        /** Date and time of guest's latest attendance status update. */
        attendanceStatusUpdatedDate?: Date;
        /** Site member ID. */
        memberId?: string | null;
        /** Guest type: <br/> <br/> `RSVP`: An invited guest, no ticket necessary. <br/> <br/> `BUYER`: The guest who bought the tickets. <br/> <br/> `TICKET_HOLDER`: The guest for whom the ticket was bought. */
        guestType?: GuestType;
        /** Locale in [IETF BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) format. Used when the event date and time on a ticket should be formatted into another locale. */
        locale?: string | null;
    }
    interface TicketDetails {
        /** Ticket number. */
        number?: string;
        /** Ticket definition ID. */
        definitionId?: string | null;
        /** Ticket name. */
        name?: string | null;
        /**
         * Ticket guest details.
         * @internal
         */
        guestDetails?: TicketGuestDetails;
    }
    interface TicketGuestDetails {
        /** The login details for the guest to access the online conference event. */
        onlineConferencingLogin?: OnlineConferencingLogin$1;
        /** First name. */
        firstName?: string | null;
        /** Last name. */
        lastName?: string | null;
    }
    interface OnlineConferencingLogin$1 {
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
    interface GuestDetails {
        /** Email. */
        email?: string | null;
        /** First name. */
        firstName?: string | null;
        /** Last name. */
        lastName?: string | null;
        /** Form response. */
        formResponse?: FormResponse$1;
        /** Whether the guest has checked into the event. */
        checkedIn?: boolean;
        /** The login details for the guest to access the online conference event. */
        onlineConferencingLogin?: OnlineConferencingLogin$1;
    }
    interface FormResponse$1 {
        inputValues?: InputValue$1[];
    }
    interface InputValue$1 {
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
        address?: FormattedAddress$1;
    }
    interface FormattedAddress$1 {
        /** One line address representation. */
        formatted?: string;
        /** Address components (optional). */
        address?: Address$4;
    }
    /** Physical address */
    interface Address$4 extends AddressStreetOneOf$4 {
        /** Street name and number. */
        streetAddress?: StreetAddress$4;
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
        location?: AddressLocation$4;
    }
    /** @oneof */
    interface AddressStreetOneOf$4 {
        /** Street name and number. */
        streetAddress?: StreetAddress$4;
        /** Main address line, usually street and number as free text. */
        addressLine?: string | null;
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
    interface AddressLocation$4 {
        /** Address latitude. */
        latitude?: number | null;
        /** Address longitude. */
        longitude?: number | null;
    }
    interface Subdivision$4 {
        /** Short subdivision code. */
        code?: string;
        /** Subdivision full name. */
        name?: string;
        /**
         * Subdivision level
         * @internal
         */
        type?: SubdivisionType$4;
        /**
         * Free text description of subdivision type.
         * @internal
         */
        typeInfo?: string | null;
    }
    enum SubdivisionType$4 {
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
    enum AttendanceStatus {
        /** Not attending. */
        NOT_ATTENDING = "NOT_ATTENDING",
        /** Attending. */
        ATTENDING = "ATTENDING",
        /** In a waiting list. */
        IN_WAITLIST = "IN_WAITLIST"
    }
    enum GuestType {
        /** Rsvp guest. */
        RSVP = "RSVP",
        /** Buyer guest. */
        BUYER = "BUYER",
        /** Ticket holder guest. */
        TICKET_HOLDER = "TICKET_HOLDER"
    }
    interface QueryEventGuestsRequest {
        /** Query options. See [API Query Language](https://dev.wix.com/api/rest/getting-started/api-query-language) for more details. */
        query: QueryV2$3;
    }
    interface QueryV2$3 extends QueryV2PagingMethodOneOf$3 {
        /** Paging options to limit and skip the number of items. */
        paging?: Paging$3;
        /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
        cursorPaging?: CursorPaging$1;
        /** Filter object in the following format: <br/> `"filter" : { "fieldName1": "value1", "fieldName2":{"$operator":"value2"} }`. <br/> <br/> **Example:** <br/> `"filter" : { "eventId": "sd3f-jhds-4fs77", "ticketNumber": {"$startsWith":"478"} }` <br/> <br/> See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort) for more information. */
        filter?: Record<string, any> | null;
        /** Sort object in the following format: <br/> `[{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]` <br/> <br/> **Example:** <br/> `[{"fieldName":"createdDate","direction":"DESC"}]` <br/> <br/> See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort) for more information. */
        sort?: Sorting$3[];
        /** Currently the only supported fieldset is `guestDetails`. The `WIX_EVENTS.READ_GUESTS_DETAILS` permission is required to access the guest details. <br/> <br/> See [field projection](https://dev.wix.com/api/rest/getting-started/field-projection) for more information. */
        fieldsets?: string[];
    }
    /** @oneof */
    interface QueryV2PagingMethodOneOf$3 {
        /** Paging options to limit and skip the number of items. */
        paging?: Paging$3;
        /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
        cursorPaging?: CursorPaging$1;
    }
    interface Sorting$3 {
        /** Name of the field to sort by. */
        fieldName?: string;
        /** Sort order (ASC/DESC). Defaults to ASC */
        order?: SortOrder$4;
    }
    enum SortOrder$4 {
        ASC = "ASC",
        DESC = "DESC"
    }
    interface Paging$3 {
        /** Number of items to load per page. */
        limit?: number | null;
        /** Number of items to skip in the current sort order. */
        offset?: number | null;
    }
    interface CursorPaging$1 {
        /** Number of items to load per page. */
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
    interface QueryEventGuestsResponse {
        /** List of guests. */
        guests?: EventGuest[];
        /** Metadata for the paginated results. */
        pagingMetadata?: PagingMetadataV2$3;
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
    }
    interface Cursors$3 {
        /** Cursor pointing to next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to previous page in the list of results. */
        prev?: string | null;
    }
    interface StreamEventGuestsRequest {
        /** Filter. */
        filter?: Record<string, any> | null;
        /** Task context. */
        taskContext?: TaskContext;
    }
    interface TaskContext {
        /** Task id. */
        _id?: string | null;
        /** Notify action type */
        type?: NotifyActionType;
    }
    enum NotifyActionType {
        UNKNOWN = "UNKNOWN",
        EMAIL = "EMAIL",
        AUTOMATION_TRIGGER = "AUTOMATION_TRIGGER",
        PUSH = "PUSH"
    }
    interface Empty$1 {
    }
    interface NotifyGuestAction {
        /** Event guest. */
        guest?: EventGuest;
        /** Task context. */
        taskContext?: TaskContext;
    }
    interface SecondaryLanguagesRequest {
        /** Guest event id. */
        eventId?: string;
    }
    interface SecondaryLanguagesResponse {
        /** Aggregated guests languages. */
        secondaryLanguages?: string[];
    }
    interface RsvpCreated$1 {
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
        rsvpForm?: FormResponse$1;
        /** RSVP response status. */
        status?: RsvpStatus$1;
        /** List of all guests. */
        guests?: Guest$1[];
        /** URL and password to online conference */
        onlineConferencingLogin?: OnlineConferencingLogin$1;
    }
    enum RsvpStatus$1 {
        YES = "YES",
        NO = "NO",
        WAITING = "WAITING"
    }
    interface Guest$1 {
        /** Index in the RSVP guest list. */
        index?: number;
        /** Guest full name. */
        fullName?: string;
        /** Guest check-in. */
        checkIn?: CheckIn$1;
        /** Unique guest ID per RSVP. */
        _id?: number;
    }
    interface CheckIn$1 {
        /** Time of check-in */
        created?: Date;
    }
    interface RsvpUpdated$1 {
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
        rsvpForm?: FormResponse$1;
        /** RSVP response status. */
        status?: RsvpStatus$1;
        /** List of the guests. */
        guests?: Guest$1[];
        /** URL and password to online conference */
        onlineConferencingLogin?: OnlineConferencingLogin$1;
        /** Notifications silenced for this domain event. */
        silent?: boolean | null;
    }
    interface RsvpDeleted$1 {
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
    interface OrderConfirmed {
        /** Order confirmation timestamp in ISO UTC. */
        timestamp?: Date;
        /** Site language when Order initiated */
        language?: string | null;
        /** Notifications silenced for this domain event. */
        silent?: boolean | null;
        /** Locale in which Order was created. */
        locale?: string | null;
        /** Event ID. */
        eventId?: string;
        /** Unique order number. */
        orderNumber?: string;
        /** Contact ID associated with this order. */
        contactId?: string;
        /** Member ID associated with this order. */
        memberId?: string | null;
        /**
         * Order created timestamp
         * @readonly
         */
        created?: Date;
        /** Buyer first name. */
        firstName?: string;
        /** Buyer last name. */
        lastName?: string;
        /** Buyer email address. */
        email?: string;
        /** Checkout form response. */
        checkoutForm?: FormResponse$1;
        /** Order status. */
        status?: OrderStatus;
        /** Payment method used for paid tickets purchase, i.e. "payPal", "creditCard", etc. */
        method?: string | null;
        /** Tickets (generated after payment). */
        tickets?: Ticket[];
        /** Invoice. */
        invoice?: Invoice;
        /** Reservation ID associated with this order. */
        reservationId?: string;
    }
    enum OrderStatus {
        /** Order status not available for this request fieldset */
        NA_ORDER_STATUS = "NA_ORDER_STATUS",
        /** Order is confirmed, no payment required */
        FREE = "FREE",
        /** Order was paid but payment gateway suspended the payment. Eventually changes to PAID */
        PENDING = "PENDING",
        /** Order paid via payment gateway */
        PAID = "PAID",
        /** Order confirmed but has to be paid via offline payment and status manually updated to PAID */
        OFFLINE_PENDING = "OFFLINE_PENDING",
        /** Order is awaiting for payment in Cashier */
        INITIATED = "INITIATED",
        /** Order was canceled */
        CANCELED = "CANCELED",
        /** Order payment was declined */
        DECLINED = "DECLINED"
    }
    interface Ticket {
        /** Unique issued ticket number. */
        ticketNumber?: string;
        /** Ticket definition ID. */
        ticketDefinitionId?: string;
        /** Ticket check-in. */
        checkIn?: CheckIn$1;
        /** Ticket price. */
        price?: Money$2;
        /** Whether ticket is archived. */
        archived?: boolean;
        /** Guest first name. */
        firstName?: string | null;
        /** Guest last name. */
        lastName?: string | null;
        /** Guest email. */
        email?: string | null;
        /** Contact ID associated with this ticket. */
        contactId?: string | null;
        /** Whether ticket is confirmed */
        confirmed?: boolean;
        /** Member ID associated with this ticket. */
        memberId?: string | null;
        /** Ticket form response (only assigned tickets contain separate forms). */
        form?: FormResponse$1;
        /** Ticket name. */
        ticketName?: string;
        /** Anonymized tickets no longer contain personally identifiable information (PII). */
        anonymized?: boolean;
        /** URL and password to online conference */
        onlineConferencingLogin?: OnlineConferencingLogin$1;
    }
    interface Money$2 {
        /** *Deprecated:** Use `value` instead. */
        amount?: string;
        /** ISO 4217 format of the currency i.e. `USD`. */
        currency?: string;
        /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
        value?: string | null;
    }
    interface Invoice {
        items?: Item[];
        /** Total cart amount. */
        total?: Money$2;
        /** Discount applied to cart. */
        discount?: Discount;
        /** Tax applied to cart. */
        tax?: Tax;
        /** Total cart amount before discount, tax, and fees. */
        subTotal?: Money$2;
        /**
         * Total amount of cart after discount, tax, and fees.
         * Grand total is calculated in the following order:
         * 1. Total prices of all items in the cart are calculated.
         * 2. Discount is subtracted from the cart (if applicable).
         * 3. Tax is added (if applicable).
         * 4. Wix service fee is added.
         */
        grandTotal?: Money$2;
        /**
         * Fees applied to the cart.
         * @readonly
         */
        fees?: Fee[];
        /** Total revenue, excluding fees. (Taxes and payment provider fees are not deducted). */
        revenue?: Money$2;
        /** URL to invoice preview. Returned only if order is paid. */
        previewUrl?: string | null;
    }
    interface Item {
        /** Unique line item ID. */
        _id?: string;
        /** Line item quantity. */
        quantity?: number;
        /** Line item mame. */
        name?: string;
        /** Line item price. */
        price?: Money$2;
        /** Total price for line items. Always equal to price * quantity. */
        total?: Money$2;
        /** Discount applied to the line item. */
        discount?: Discount;
        /** Tax applied to the item. */
        tax?: Tax;
        /**
         * Fees applied to the item.
         * @readonly
         */
        fees?: Fee[];
    }
    interface Discount {
        /** Total discount amount. */
        amount?: Money$2;
        /** Total charge after applied discount. */
        afterDiscount?: Money$2;
        /** Discount coupon code. */
        code?: string;
        /** Discount coupon name. */
        name?: string;
        /** Discount coupon ID. */
        couponId?: string;
        /** Discount items. */
        discounts?: DiscountItem[];
    }
    interface DiscountItem extends DiscountItemDiscountOneOf {
        /** Coupon discount. */
        coupon?: CouponDiscount;
        /** Pricing plan discount. */
        paidPlan?: PaidPlanDiscount;
        /** Total discount amount. */
        amount?: Money$2;
    }
    /** @oneof */
    interface DiscountItemDiscountOneOf {
        /** Coupon discount. */
        coupon?: CouponDiscount;
        /** Pricing plan discount. */
        paidPlan?: PaidPlanDiscount;
    }
    interface CouponDiscount {
        /** Discount coupon name. */
        name?: string;
        /** Discount coupon code. */
        code?: string;
        /** Discount coupon ID. */
        couponId?: string;
    }
    interface PaidPlanDiscount extends PaidPlanDiscountDiscountOneOf {
        /** Discount by percentage applied to tickets. */
        percentDiscount?: PercentDiscount;
        /** Name of pricing plan. */
        name?: string;
    }
    /** @oneof */
    interface PaidPlanDiscountDiscountOneOf {
        /** Discount by percentage applied to tickets. */
        percentDiscount?: PercentDiscount;
    }
    interface PercentDiscount {
        /** Percent rate. */
        rate?: string;
        /** Number of discounted tickets. */
        quantityDiscounted?: number;
    }
    interface Tax {
        /** Tax type. */
        type?: TaxType$1;
        /**
         * Tax name.
         * @readonly
         */
        name?: string;
        /** Tax rate. */
        rate?: string;
        /** Taxable amount. */
        taxable?: Money$2;
        /** Total tax amount. */
        amount?: Money$2;
    }
    enum TaxType$1 {
        /** Tax is included in the ticket price */
        INCLUDED = "INCLUDED",
        /** Tax is added to the order at the checkout */
        ADDED = "ADDED",
        /** Tax is added to the final total at the checkout */
        ADDED_AT_CHECKOUT = "ADDED_AT_CHECKOUT"
    }
    interface Fee {
        /** Fee identifier. */
        name?: FeeName;
        /** How fee is calculated. */
        type?: FeeType$1;
        /**
         * Fee rate.
         * @readonly
         */
        rate?: string;
        /** Total amount of fee charges. */
        amount?: Money$2;
    }
    enum FeeName {
        /** Wix service fee charges applied to the line item. */
        WIX_FEE = "WIX_FEE"
    }
    enum FeeType$1 {
        /** Fee is added to the ticket price at checkout */
        FEE_ADDED = "FEE_ADDED",
        /** Seller absorbs the fee. It is deducted from the ticket price */
        FEE_INCLUDED = "FEE_INCLUDED",
        /** Fee is added to the ticket price at checkout */
        FEE_ADDED_AT_CHECKOUT = "FEE_ADDED_AT_CHECKOUT"
    }
    interface OrderUpdated {
        /** Order updated timestamp in ISO UTC format. */
        timestamp?: Date;
        /** Site language when Order initiated */
        language?: string | null;
        /** Locale in which Order was created. */
        locale?: string | null;
        /** Event ID. */
        eventId?: string;
        /** Unique order number. */
        orderNumber?: string;
        /** Contact ID associated with this order. */
        contactId?: string;
        /** Member ID associated with this order. */
        memberId?: string | null;
        /**
         * Order created timestamp.
         * @readonly
         */
        created?: Date;
        /** Buyer first name. */
        firstName?: string;
        /** Buyer last name. */
        lastName?: string;
        /** Buyer email. */
        email?: string;
        /** Checkout form response. */
        checkoutForm?: FormResponse$1;
        /** Whether order is confirmed - occurs once payment gateway processes the payment and funds reach merchant's account. */
        confirmed?: boolean;
        /** Order status. */
        status?: OrderStatus;
        /** Payment method used for paid tickets purchase, i.e. "payPal", "creditCard", etc. */
        method?: string | null;
        /** Tickets generated after payment. */
        tickets?: Ticket[];
        /** Whether order was archived and excluded from results. */
        archived?: boolean;
        /** Whether event was triggered by GDPR delete request. */
        triggeredByAnonymizeRequest?: boolean;
    }
    interface OrderDeleted {
        /** Order deleted timestamp in ISO UTC format. */
        timestamp?: Date;
        /** Event ID. */
        eventId?: string;
        /** Unique order number. */
        orderNumber?: string;
        /** Contact ID associated with this order */
        contactId?: string;
        /** Member ID associated with this order. */
        memberId?: string | null;
        /** Whether order was anonymized by GDPR delete. */
        anonymized?: boolean;
        /** Order type. */
        orderType?: OrderType;
        /** Whether event was triggered by GDPR delete request. */
        triggeredByAnonymizeRequest?: boolean;
        /** Tickets generated after payment. */
        tickets?: Ticket[];
    }
    enum OrderType {
        /** Buyer form is used for all tickets */
        UNASSIGNED_TICKETS = "UNASSIGNED_TICKETS",
        /** Each order ticket has its own form */
        ASSIGNED_TICKETS = "ASSIGNED_TICKETS"
    }
    interface EventDeleted$1 {
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
    interface DeleteTicketGuestRequest {
        /** Guest id. */
        eventId?: string;
        /** Order number. */
        orderNumber?: string;
        /** Ticket number. */
        ticketNumber?: string;
    }
    interface ListGuestListPreviewsRequest {
        eventIds: string[];
        cursorPaging?: CursorPaging$1;
    }
    interface ListGuestListPreviewsResponse {
        /** List of guests. */
        previews?: GuestListPreview[];
        /** Metadata for the paginated results. */
        pagingMetadata?: PagingMetadataV2$3;
    }
    interface GuestListPreview {
        eventId?: string;
        latestAttendingMembers?: EventGuest[];
        totalAttending?: number;
    }
    interface UpdateGuestRequest {
        /** Updated guest */
        guest?: EventGuest;
        /** Guest revision */
        revision?: string | null;
    }
    /**
     * Creates a query to retrieve a list of guests.
     *
     *
     * The `queryGuests()` function builds a query to retrieve a list of guests and returns a [GuestsQueryBuilder](https://www.wix.com/velo/reference/wix-events-v2/guests/guestsquerybuilder) object.
     *
     * The returned object contains the query definition which is typically used to run the query using the `find()` function.
     *
     * You can refine the query by chaining `GuestsQueryBuilder` functions onto the query. `GuestsQueryBuilder` functions enable you to sort, filter, and control the results that `queryGuests.find()` returns.
     *
     * The query runs with the following `GuestsQueryBuilder` defaults that you can override:
     *
     * - [`skip(0)`](https://www.wix.com/velo/reference/wix-events-v2/guests/guestsquerybuilder/skipto)
     * - [`limit(50)`](https://www.wix.com/velo/reference/wix-events-v2/guests/guestsquerybuilder/limit)
     * - [`descending("_createdDate")`](https://www.wix.com/velo/reference/wix-events-v2/guests/guestsquerybuilder/descending)
     *
     * The functions that are chained to `queryGuests()` are applied in the order they are called. For example, if you apply `ascending ('_createdDate')` and then `descending ('_updatedDate')`, the results are sorted first by the created date and then, if there are multiple results with the same date, the items are sorted by the updated date.
     *
     * The table below shows which `GuestsQueryBuilder` functions are supported for `queryGuests()`. You can only use one filter function for each property. Only the first filter will work if a property is used in more than one filter.
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     * @adminMethod
     */
    function queryGuests(): GuestsQueryBuilder;
    interface QueryCursorResult$1 {
        cursors: Cursors$3;
        hasNext: () => boolean;
        hasPrev: () => boolean;
        length: number;
        pageSize: number;
    }
    interface GuestsQueryResult extends QueryCursorResult$1 {
        items: EventGuest[];
        query: GuestsQueryBuilder;
        next: () => Promise<GuestsQueryResult>;
        prev: () => Promise<GuestsQueryResult>;
    }
    interface GuestsQueryBuilder {
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        eq: (propertyName: "_id" | "eventId" | "rsvpId" | "orderNumber" | "ticketNumber" | "contactId" | "guestDetails.checkedIn" | "attendanceStatus" | "secondaryLanguageCode" | "_createdDate" | "_updatedDate" | "attendanceStatusUpdatedDate" | "memberId" | "guestType", value: any) => GuestsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        ne: (propertyName: "_id" | "eventId" | "rsvpId" | "orderNumber" | "ticketNumber" | "contactId" | "guestDetails.checkedIn" | "attendanceStatus" | "secondaryLanguageCode" | "_createdDate" | "_updatedDate" | "attendanceStatusUpdatedDate" | "memberId" | "guestType", value: any) => GuestsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        gt: (propertyName: "_createdDate" | "_updatedDate" | "attendanceStatusUpdatedDate", value: any) => GuestsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        le: (propertyName: "_createdDate" | "_updatedDate" | "attendanceStatusUpdatedDate", value: any) => GuestsQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        lt: (propertyName: "_createdDate" | "_updatedDate" | "attendanceStatusUpdatedDate", value: any) => GuestsQueryBuilder;
        /** @documentationMaturity preview */
        in: (propertyName: "_id" | "eventId" | "rsvpId" | "orderNumber" | "ticketNumber" | "contactId" | "attendanceStatus" | "secondaryLanguageCode" | "_createdDate" | "_updatedDate" | "attendanceStatusUpdatedDate" | "memberId" | "guestType", value: any) => GuestsQueryBuilder;
        /** @documentationMaturity preview */
        exists: (propertyName: "_id" | "eventId" | "rsvpId" | "orderNumber" | "ticketNumber" | "tickets" | "contactId" | "guestDetails.checkedIn" | "attendanceStatus" | "secondaryLanguageCode" | "_createdDate" | "_updatedDate" | "attendanceStatusUpdatedDate" | "memberId" | "guestType", value: boolean) => GuestsQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        ascending: (...propertyNames: Array<"_createdDate" | "_updatedDate" | "attendanceStatusUpdatedDate">) => GuestsQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        descending: (...propertyNames: Array<"_createdDate" | "_updatedDate" | "attendanceStatusUpdatedDate">) => GuestsQueryBuilder;
        /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
         * @documentationMaturity preview
         */
        limit: (limit: number) => GuestsQueryBuilder;
        /** @param cursor - A pointer to specific record
         * @documentationMaturity preview
         */
        skipTo: (cursor: string) => GuestsQueryBuilder;
        /** @documentationMaturity preview */
        find: () => Promise<GuestsQueryResult>;
    }
    /**
     * This function is not a universal function and runs only on the backend.
     * @internal
     * @documentationMaturity preview
     * @requiredField eventIds
     * @adminMethod
     */
    function listGuestListPreviews(eventIds: string[], options?: ListGuestListPreviewsOptions): Promise<ListGuestListPreviewsResponse>;
    interface ListGuestListPreviewsOptions {
        cursorPaging?: CursorPaging$1;
    }
    type eventsGuestsV1Guest_universal_d_EventGuest = EventGuest;
    type eventsGuestsV1Guest_universal_d_TicketDetails = TicketDetails;
    type eventsGuestsV1Guest_universal_d_TicketGuestDetails = TicketGuestDetails;
    type eventsGuestsV1Guest_universal_d_GuestDetails = GuestDetails;
    type eventsGuestsV1Guest_universal_d_AttendanceStatus = AttendanceStatus;
    const eventsGuestsV1Guest_universal_d_AttendanceStatus: typeof AttendanceStatus;
    type eventsGuestsV1Guest_universal_d_GuestType = GuestType;
    const eventsGuestsV1Guest_universal_d_GuestType: typeof GuestType;
    type eventsGuestsV1Guest_universal_d_QueryEventGuestsRequest = QueryEventGuestsRequest;
    type eventsGuestsV1Guest_universal_d_QueryEventGuestsResponse = QueryEventGuestsResponse;
    type eventsGuestsV1Guest_universal_d_StreamEventGuestsRequest = StreamEventGuestsRequest;
    type eventsGuestsV1Guest_universal_d_TaskContext = TaskContext;
    type eventsGuestsV1Guest_universal_d_NotifyActionType = NotifyActionType;
    const eventsGuestsV1Guest_universal_d_NotifyActionType: typeof NotifyActionType;
    type eventsGuestsV1Guest_universal_d_NotifyGuestAction = NotifyGuestAction;
    type eventsGuestsV1Guest_universal_d_SecondaryLanguagesRequest = SecondaryLanguagesRequest;
    type eventsGuestsV1Guest_universal_d_SecondaryLanguagesResponse = SecondaryLanguagesResponse;
    type eventsGuestsV1Guest_universal_d_OrderConfirmed = OrderConfirmed;
    type eventsGuestsV1Guest_universal_d_OrderStatus = OrderStatus;
    const eventsGuestsV1Guest_universal_d_OrderStatus: typeof OrderStatus;
    type eventsGuestsV1Guest_universal_d_Ticket = Ticket;
    type eventsGuestsV1Guest_universal_d_Invoice = Invoice;
    type eventsGuestsV1Guest_universal_d_Item = Item;
    type eventsGuestsV1Guest_universal_d_Discount = Discount;
    type eventsGuestsV1Guest_universal_d_DiscountItem = DiscountItem;
    type eventsGuestsV1Guest_universal_d_DiscountItemDiscountOneOf = DiscountItemDiscountOneOf;
    type eventsGuestsV1Guest_universal_d_CouponDiscount = CouponDiscount;
    type eventsGuestsV1Guest_universal_d_PaidPlanDiscount = PaidPlanDiscount;
    type eventsGuestsV1Guest_universal_d_PaidPlanDiscountDiscountOneOf = PaidPlanDiscountDiscountOneOf;
    type eventsGuestsV1Guest_universal_d_PercentDiscount = PercentDiscount;
    type eventsGuestsV1Guest_universal_d_Tax = Tax;
    type eventsGuestsV1Guest_universal_d_Fee = Fee;
    type eventsGuestsV1Guest_universal_d_FeeName = FeeName;
    const eventsGuestsV1Guest_universal_d_FeeName: typeof FeeName;
    type eventsGuestsV1Guest_universal_d_OrderUpdated = OrderUpdated;
    type eventsGuestsV1Guest_universal_d_OrderDeleted = OrderDeleted;
    type eventsGuestsV1Guest_universal_d_OrderType = OrderType;
    const eventsGuestsV1Guest_universal_d_OrderType: typeof OrderType;
    type eventsGuestsV1Guest_universal_d_Task = Task;
    type eventsGuestsV1Guest_universal_d_TaskKey = TaskKey;
    type eventsGuestsV1Guest_universal_d_DeleteTicketGuestRequest = DeleteTicketGuestRequest;
    type eventsGuestsV1Guest_universal_d_ListGuestListPreviewsRequest = ListGuestListPreviewsRequest;
    type eventsGuestsV1Guest_universal_d_ListGuestListPreviewsResponse = ListGuestListPreviewsResponse;
    type eventsGuestsV1Guest_universal_d_GuestListPreview = GuestListPreview;
    type eventsGuestsV1Guest_universal_d_UpdateGuestRequest = UpdateGuestRequest;
    const eventsGuestsV1Guest_universal_d_queryGuests: typeof queryGuests;
    type eventsGuestsV1Guest_universal_d_GuestsQueryResult = GuestsQueryResult;
    type eventsGuestsV1Guest_universal_d_GuestsQueryBuilder = GuestsQueryBuilder;
    const eventsGuestsV1Guest_universal_d_listGuestListPreviews: typeof listGuestListPreviews;
    type eventsGuestsV1Guest_universal_d_ListGuestListPreviewsOptions = ListGuestListPreviewsOptions;
    namespace eventsGuestsV1Guest_universal_d {
        export { __debug$6 as __debug, eventsGuestsV1Guest_universal_d_EventGuest as EventGuest, eventsGuestsV1Guest_universal_d_TicketDetails as TicketDetails, eventsGuestsV1Guest_universal_d_TicketGuestDetails as TicketGuestDetails, OnlineConferencingLogin$1 as OnlineConferencingLogin, eventsGuestsV1Guest_universal_d_GuestDetails as GuestDetails, FormResponse$1 as FormResponse, InputValue$1 as InputValue, FormattedAddress$1 as FormattedAddress, Address$4 as Address, AddressStreetOneOf$4 as AddressStreetOneOf, StreetAddress$4 as StreetAddress, AddressLocation$4 as AddressLocation, Subdivision$4 as Subdivision, SubdivisionType$4 as SubdivisionType, eventsGuestsV1Guest_universal_d_AttendanceStatus as AttendanceStatus, eventsGuestsV1Guest_universal_d_GuestType as GuestType, eventsGuestsV1Guest_universal_d_QueryEventGuestsRequest as QueryEventGuestsRequest, QueryV2$3 as QueryV2, QueryV2PagingMethodOneOf$3 as QueryV2PagingMethodOneOf, Sorting$3 as Sorting, SortOrder$4 as SortOrder, Paging$3 as Paging, CursorPaging$1 as CursorPaging, eventsGuestsV1Guest_universal_d_QueryEventGuestsResponse as QueryEventGuestsResponse, PagingMetadataV2$3 as PagingMetadataV2, Cursors$3 as Cursors, eventsGuestsV1Guest_universal_d_StreamEventGuestsRequest as StreamEventGuestsRequest, eventsGuestsV1Guest_universal_d_TaskContext as TaskContext, eventsGuestsV1Guest_universal_d_NotifyActionType as NotifyActionType, Empty$1 as Empty, eventsGuestsV1Guest_universal_d_NotifyGuestAction as NotifyGuestAction, eventsGuestsV1Guest_universal_d_SecondaryLanguagesRequest as SecondaryLanguagesRequest, eventsGuestsV1Guest_universal_d_SecondaryLanguagesResponse as SecondaryLanguagesResponse, RsvpCreated$1 as RsvpCreated, RsvpStatus$1 as RsvpStatus, Guest$1 as Guest, CheckIn$1 as CheckIn, RsvpUpdated$1 as RsvpUpdated, RsvpDeleted$1 as RsvpDeleted, eventsGuestsV1Guest_universal_d_OrderConfirmed as OrderConfirmed, eventsGuestsV1Guest_universal_d_OrderStatus as OrderStatus, eventsGuestsV1Guest_universal_d_Ticket as Ticket, Money$2 as Money, eventsGuestsV1Guest_universal_d_Invoice as Invoice, eventsGuestsV1Guest_universal_d_Item as Item, eventsGuestsV1Guest_universal_d_Discount as Discount, eventsGuestsV1Guest_universal_d_DiscountItem as DiscountItem, eventsGuestsV1Guest_universal_d_DiscountItemDiscountOneOf as DiscountItemDiscountOneOf, eventsGuestsV1Guest_universal_d_CouponDiscount as CouponDiscount, eventsGuestsV1Guest_universal_d_PaidPlanDiscount as PaidPlanDiscount, eventsGuestsV1Guest_universal_d_PaidPlanDiscountDiscountOneOf as PaidPlanDiscountDiscountOneOf, eventsGuestsV1Guest_universal_d_PercentDiscount as PercentDiscount, eventsGuestsV1Guest_universal_d_Tax as Tax, TaxType$1 as TaxType, eventsGuestsV1Guest_universal_d_Fee as Fee, eventsGuestsV1Guest_universal_d_FeeName as FeeName, FeeType$1 as FeeType, eventsGuestsV1Guest_universal_d_OrderUpdated as OrderUpdated, eventsGuestsV1Guest_universal_d_OrderDeleted as OrderDeleted, eventsGuestsV1Guest_universal_d_OrderType as OrderType, EventDeleted$1 as EventDeleted, eventsGuestsV1Guest_universal_d_Task as Task, eventsGuestsV1Guest_universal_d_TaskKey as TaskKey, eventsGuestsV1Guest_universal_d_DeleteTicketGuestRequest as DeleteTicketGuestRequest, eventsGuestsV1Guest_universal_d_ListGuestListPreviewsRequest as ListGuestListPreviewsRequest, eventsGuestsV1Guest_universal_d_ListGuestListPreviewsResponse as ListGuestListPreviewsResponse, eventsGuestsV1Guest_universal_d_GuestListPreview as GuestListPreview, eventsGuestsV1Guest_universal_d_UpdateGuestRequest as UpdateGuestRequest, eventsGuestsV1Guest_universal_d_queryGuests as queryGuests, eventsGuestsV1Guest_universal_d_GuestsQueryResult as GuestsQueryResult, eventsGuestsV1Guest_universal_d_GuestsQueryBuilder as GuestsQueryBuilder, eventsGuestsV1Guest_universal_d_listGuestListPreviews as listGuestListPreviews, eventsGuestsV1Guest_universal_d_ListGuestListPreviewsOptions as ListGuestListPreviewsOptions, };
    }
    const __debug$5: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
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
        /** @readonly */
        counts?: CategoryCounts$1;
        /**
         * Category state. Default - MANUAL.
         * WIX_EVENTS.MANAGE_AUTO_CATEGORIES permission is required to use other states.
         * Field will be ignored on update requests.
         */
        states?: State$2[];
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
    enum State$2 {
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
        category: Category$1;
    }
    interface CreateCategoryResponse {
        category?: Category$1;
    }
    interface BulkCreateCategoryRequest {
        categories: Category$1[];
    }
    interface BulkCreateCategoryResponse {
        results?: BulkCategoryResult[];
        bulkActionMetadata?: BulkActionMetadata;
    }
    interface BulkCategoryResult {
        itemMetadata?: ItemMetadata;
        item?: Category$1;
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
        category: Category$1;
    }
    interface UpdateCategoryResponse {
        category?: Category$1;
    }
    interface DeleteCategoryRequest {
        categoryId: string;
    }
    interface DeleteCategoryResponse {
    }
    interface QueryCategoriesRequest {
        query: QueryV2$2;
        fieldset?: CategoryFieldset[];
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
        order?: SortOrder$3;
    }
    enum SortOrder$3 {
        ASC = "ASC",
        DESC = "DESC"
    }
    interface Paging$2 {
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
        categories?: Category$1[];
        metaData?: PagingMetadataV2$2;
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
        /** Cursor pointing to next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to previous page in the list of results. */
        prev?: string | null;
    }
    interface AssignEventsRequest {
        categoryId: string;
        eventId: string[];
    }
    interface AssignEventsResponse {
    }
    interface BulkAssignEventsRequest {
        categoryId: string[];
        eventId: string[];
    }
    interface BulkAssignEventsResponse {
        results?: BulkCategoryResult[];
        bulkActionMetadata?: BulkActionMetadata;
    }
    interface BulkAssignEventsAsyncRequest {
        categoryId: string[];
        /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events). */
        filter: Record<string, any> | null;
    }
    interface BulkAssignEventsAsyncResponse {
    }
    interface UnassignEventsRequest {
        categoryId: string;
        eventId: string[];
    }
    interface UnassignEventsResponse {
    }
    interface BulkUnassignEventsRequest {
        categoryId: string[];
        eventId?: string[];
    }
    interface BulkUnassignEventsResponse {
        results?: BulkCategoryResult[];
        bulkActionMetadata?: BulkActionMetadata;
    }
    interface BulkUnassignEventsAsyncRequest {
        categoryId: string[];
        /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events). */
        filter: Record<string, any> | null;
    }
    interface BulkUnassignEventsAsyncResponse {
    }
    interface ListEventCategoriesRequest {
        eventId: string;
    }
    interface ListEventCategoriesResponse {
        categories?: Category$1[];
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
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     * @requiredField category
     * @adminMethod
     */
    function createCategory(category: Category$1): Promise<CreateCategoryResponse>;
    /**
     * Creates new categories.
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     * @requiredField categories
     * @adminMethod
     */
    function bulkCreateCategory(categories: Category$1[]): Promise<BulkCreateCategoryResponse>;
    /**
     * Updates an existing category.
     *
     * This function is not a universal function and runs only on the backend.
     * @param _id - Category ID.
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @requiredField category
     * @adminMethod
     */
    function updateCategory(_id: string, category: UpdateCategory): Promise<UpdateCategoryResponse>;
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
        /** @readonly */
        counts?: CategoryCounts$1;
        /**
         * Category state. Default - MANUAL.
         * WIX_EVENTS.MANAGE_AUTO_CATEGORIES permission is required to use other states.
         * Field will be ignored on update requests.
         */
        states?: State$2[];
        /**
         * Optionally client defined external ID.
         * @internal
         */
        externalId?: string | null;
    }
    /**
     * Deletes existing category.
     *
     * This function is not a universal function and runs only on the backend.
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
     * @requiredField query
     */
    function queryCategories(query: QueryV2$2, options?: QueryCategoriesOptions): Promise<QueryCategoriesResponse>;
    interface QueryCategoriesOptions {
        fieldset?: CategoryFieldset[];
    }
    /**
     * Assigns events to a single category.
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     * @requiredField categoryId
     * @requiredField eventId
     * @adminMethod
     */
    function assignEvents(categoryId: string, eventId: string[]): Promise<void>;
    /**
     * Assigns events to multiple categories.
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     * @requiredField categoryId
     * @requiredField options
     * @requiredField options.eventId
     * @adminMethod
     */
    function bulkAssignEvents(categoryId: string[], options: BulkAssignEventsOptions): Promise<BulkAssignEventsResponse>;
    interface BulkAssignEventsOptions {
        eventId: string[];
    }
    /**
     * Assigns filtered events to multiple categories.
     *
     * This function is not a universal function and runs only on the backend.
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
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     * @requiredField categoryId
     * @requiredField eventId
     * @adminMethod
     */
    function unassignEvents(categoryId: string, eventId: string[]): Promise<void>;
    /**
     * Unassigns events from multiple categories.
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     * @requiredField categoryId
     * @adminMethod
     */
    function bulkUnassignEvents(categoryId: string[], options?: BulkUnassignEventsOptions): Promise<BulkUnassignEventsResponse>;
    interface BulkUnassignEventsOptions {
        eventId?: string[];
    }
    /**
     * Unassigns filtered events from multiple categories.
     *
     * This function is not a universal function and runs only on the backend.
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
     * @public
     * @documentationMaturity preview
     * @requiredField eventId
     */
    function listEventCategories(eventId: string): Promise<ListEventCategoriesResponse>;
    /**
     * Change the order of category events.
     *
     * This function is not a universal function and runs only on the backend.
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
    type eventsV1Category_universal_d_CategoryFieldset = CategoryFieldset;
    const eventsV1Category_universal_d_CategoryFieldset: typeof CategoryFieldset;
    type eventsV1Category_universal_d_QueryCategoriesResponse = QueryCategoriesResponse;
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
        export { __debug$5 as __debug, Category$1 as Category, CategoryCounts$1 as CategoryCounts, State$2 as State, eventsV1Category_universal_d_CreateCategoryRequest as CreateCategoryRequest, eventsV1Category_universal_d_CreateCategoryResponse as CreateCategoryResponse, eventsV1Category_universal_d_BulkCreateCategoryRequest as BulkCreateCategoryRequest, eventsV1Category_universal_d_BulkCreateCategoryResponse as BulkCreateCategoryResponse, eventsV1Category_universal_d_BulkCategoryResult as BulkCategoryResult, eventsV1Category_universal_d_ItemMetadata as ItemMetadata, eventsV1Category_universal_d_ApplicationError as ApplicationError, eventsV1Category_universal_d_BulkActionMetadata as BulkActionMetadata, eventsV1Category_universal_d_UpdateCategoryRequest as UpdateCategoryRequest, eventsV1Category_universal_d_UpdateCategoryResponse as UpdateCategoryResponse, eventsV1Category_universal_d_DeleteCategoryRequest as DeleteCategoryRequest, eventsV1Category_universal_d_DeleteCategoryResponse as DeleteCategoryResponse, eventsV1Category_universal_d_QueryCategoriesRequest as QueryCategoriesRequest, QueryV2$2 as QueryV2, QueryV2PagingMethodOneOf$2 as QueryV2PagingMethodOneOf, Sorting$2 as Sorting, SortOrder$3 as SortOrder, Paging$2 as Paging, eventsV1Category_universal_d_CategoryFieldset as CategoryFieldset, eventsV1Category_universal_d_QueryCategoriesResponse as QueryCategoriesResponse, PagingMetadataV2$2 as PagingMetadataV2, Cursors$2 as Cursors, eventsV1Category_universal_d_AssignEventsRequest as AssignEventsRequest, eventsV1Category_universal_d_AssignEventsResponse as AssignEventsResponse, eventsV1Category_universal_d_BulkAssignEventsRequest as BulkAssignEventsRequest, eventsV1Category_universal_d_BulkAssignEventsResponse as BulkAssignEventsResponse, eventsV1Category_universal_d_BulkAssignEventsAsyncRequest as BulkAssignEventsAsyncRequest, eventsV1Category_universal_d_BulkAssignEventsAsyncResponse as BulkAssignEventsAsyncResponse, eventsV1Category_universal_d_UnassignEventsRequest as UnassignEventsRequest, eventsV1Category_universal_d_UnassignEventsResponse as UnassignEventsResponse, eventsV1Category_universal_d_BulkUnassignEventsRequest as BulkUnassignEventsRequest, eventsV1Category_universal_d_BulkUnassignEventsResponse as BulkUnassignEventsResponse, eventsV1Category_universal_d_BulkUnassignEventsAsyncRequest as BulkUnassignEventsAsyncRequest, eventsV1Category_universal_d_BulkUnassignEventsAsyncResponse as BulkUnassignEventsAsyncResponse, eventsV1Category_universal_d_ListEventCategoriesRequest as ListEventCategoriesRequest, eventsV1Category_universal_d_ListEventCategoriesResponse as ListEventCategoriesResponse, eventsV1Category_universal_d_ReorderCategoryEventsRequest as ReorderCategoryEventsRequest, eventsV1Category_universal_d_ReorderCategoryEventsRequestReferenceEventOneOf as ReorderCategoryEventsRequestReferenceEventOneOf, eventsV1Category_universal_d_ReorderCategoryEventsResponse as ReorderCategoryEventsResponse, eventsV1Category_universal_d_createCategory as createCategory, eventsV1Category_universal_d_bulkCreateCategory as bulkCreateCategory, eventsV1Category_universal_d_updateCategory as updateCategory, eventsV1Category_universal_d_UpdateCategory as UpdateCategory, eventsV1Category_universal_d_deleteCategory as deleteCategory, eventsV1Category_universal_d_queryCategories as queryCategories, eventsV1Category_universal_d_QueryCategoriesOptions as QueryCategoriesOptions, eventsV1Category_universal_d_assignEvents as assignEvents, eventsV1Category_universal_d_bulkAssignEvents as bulkAssignEvents, eventsV1Category_universal_d_BulkAssignEventsOptions as BulkAssignEventsOptions, eventsV1Category_universal_d_bulkAssignEventsAsync as bulkAssignEventsAsync, eventsV1Category_universal_d_BulkAssignEventsAsyncOptions as BulkAssignEventsAsyncOptions, eventsV1Category_universal_d_unassignEvents as unassignEvents, eventsV1Category_universal_d_bulkUnassignEvents as bulkUnassignEvents, eventsV1Category_universal_d_BulkUnassignEventsOptions as BulkUnassignEventsOptions, eventsV1Category_universal_d_bulkUnassignEventsAsync as bulkUnassignEventsAsync, eventsV1Category_universal_d_BulkUnassignEventsAsyncOptions as BulkUnassignEventsAsyncOptions, eventsV1Category_universal_d_listEventCategories as listEventCategories, eventsV1Category_universal_d_reorderCategoryEvents as reorderCategoryEvents, eventsV1Category_universal_d_ReorderCategoryEventsOptions as ReorderCategoryEventsOptions, };
    }
    const __debug$4: {
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
        location?: Location$2;
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
        status?: EventStatus$1;
        /** RSVP or ticketing registration details. */
        registration?: Registration;
        /** "Add to calendar" URLs. */
        calendarLinks?: CalendarLinks$1;
        /** Event page URL components. */
        eventPageUrl?: SiteUrl;
        /** Event registration form. */
        form?: Form$1;
        /** Event dashboard summary of RSVP / ticket sales. */
        dashboard?: Dashboard$1;
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
        categories?: Category[];
        /** Visual settings for event. */
        eventDisplaySettings?: EventDisplaySettings;
    }
    interface Location$2 {
        /** Location name. */
        name?: string | null;
        /** Location map coordinates. */
        coordinates?: MapCoordinates$2;
        /** Single line address representation. */
        address?: string | null;
        /** Location type. */
        type?: LocationType$2;
        /**
         * Full address derived from formatted single line `address`.
         * When `full_address` is used to create or update the event, deprecated `address` and `coordinates` are ignored.
         * If provided `full_address` has empty `formatted_address` or `coordinates`, it will be auto-completed using Atlas service.
         *
         * Migration notes:
         * - `full_address.formatted_address` is equivalent to `address`.
         * - `full_address.geocode` is equivalent to `coordinates`.
         */
        fullAddress?: Address$3;
        /**
         * Defines event location as TBD (To Be Determined).
         * When event location is not yet defined, `name` is displayed instead of location address.
         * `coordinates`, `address`, `type` and `full_address` are not required when location is TBD.
         */
        tbd?: boolean | null;
    }
    interface MapCoordinates$2 {
        /** Latitude. */
        lat?: number;
        /** Longitude. */
        lng?: number;
    }
    enum LocationType$2 {
        VENUE = "VENUE",
        ONLINE = "ONLINE"
    }
    /** Physical address */
    interface Address$3 extends AddressStreetOneOf$3 {
        /** a break down of the street to number and street name */
        streetAddress?: StreetAddress$3;
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
        location?: AddressLocation$3;
    }
    /** @oneof */
    interface AddressStreetOneOf$3 {
        /** a break down of the street to number and street name */
        streetAddress?: StreetAddress$3;
        /** Main address line (usually street and number) as free text */
        addressLine?: string | null;
    }
    interface StreetAddress$3 {
        /** street number */
        number?: string;
        /** street name */
        name?: string;
        /** @internal */
        apt?: string;
    }
    interface AddressLocation$3 {
        latitude?: number | null;
        longitude?: number | null;
    }
    interface Subdivision$3 {
        /** subdivision short code */
        code?: string;
        /** subdivision full-name */
        name?: string;
        /** @internal */
        type?: SubdivisionType$3;
        /** @internal */
        typeInfo?: string | null;
    }
    enum SubdivisionType$3 {
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
        config?: ScheduleConfig$2;
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
    interface ScheduleConfig$2 {
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
        recurrences?: Recurrences$2;
    }
    interface Recurrences$2 {
        /** Event occurrences. */
        occurrences?: Occurrence$2[];
        /**
         * Recurring event category ID.
         * @readonly
         */
        categoryId?: string | null;
        /**
         * Recurrence status.
         * @readonly
         */
        status?: Status$2;
    }
    interface Occurrence$2 {
        /** Event start timestamp. */
        startDate?: Date;
        /** Event end timestamp. */
        endDate?: Date;
        /** Event time zone ID in TZ database format, e.g., `EST`, `America/Los_Angeles`. */
        timeZoneId?: string | null;
        /** Whether time zone is displayed in formatted schedule. */
        showTimeZone?: boolean;
    }
    enum Status$2 {
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
    enum EventStatus$1 {
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
        lowestTicketPrice?: Money$1;
        /**
         * Price of highest priced ticket.
         * @readonly
         */
        highestTicketPrice?: Money$1;
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
    interface Money$1 {
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
    interface ResponseConfirmation$1 {
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
        confirmation?: ResponseConfirmation$1;
    }
    interface CheckoutFormMessages$1 {
        /** Main form title for response. */
        title?: string;
        /** Submit form call-to-action label text. */
        submitActionLabel?: string;
        /** Confirmation messages shown after checkout. */
        confirmation?: CheckoutFormMessagesResponseConfirmation$1;
    }
    /** Confirmation messages shown after checkout. */
    interface CheckoutFormMessagesResponseConfirmation$1 {
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
    interface Dashboard$1 {
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
        revenue?: Money$1;
        /** Whether currency is locked and cannot be changed (generally occurs after the first order in the specified currency has been created). */
        currencyLocked?: boolean;
        /** Number of orders placed. */
        orders?: number;
        /** Total balance of confirmed transactions. */
        totalSales?: Money$1;
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
        enabled?: boolean;
        /**
         * Agenda page URL.
         * @readonly
         */
        pageUrl?: SiteUrl;
    }
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
        /** @readonly */
        counts?: CategoryCounts;
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
    interface CategoryCounts {
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
        location?: Location$2;
        /** Event schedule configuration. */
        scheduleConfig?: ScheduleConfig$2;
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
        CATEGORIES = "CATEGORIES"
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
        facets?: Record<string, FacetCounts$2>;
    }
    interface FacetCounts$2 {
        /** Facet counts aggregated per value */
        counts?: Record<string, number>;
    }
    interface QueryEventsV2Request {
        query?: QueryV2$1;
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
        order?: SortOrder$2;
    }
    enum SortOrder$2 {
        ASC = "ASC",
        DESC = "DESC"
    }
    interface Paging$1 {
        /** Number of items to load per page. */
        limit?: number | null;
        /** Number of items to skip in the current sort order. */
        offset?: number | null;
    }
    interface QueryEventsV2Response {
        pagingMetadata?: PagingMetadataV2$1;
        /** Events list */
        events?: Event[];
        /** Filter facets. */
        facets?: Record<string, FacetCounts$2>;
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
        /** Cursor pointing to next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to previous page in the list of results. */
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
        status?: EventStatus$1[];
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
        recurrenceStatus?: Status$2[];
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
        facets?: Record<string, FacetCounts$2>;
    }
    interface ListUserEventsRequest {
        paging?: Paging$1;
        /**
         * Sort order, defaults to `"created:asc"`.
         * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
         */
        sort?: Sorting$1[];
        /** Event status. */
        status?: EventStatus$1[];
        /**
         * Wix user filter, by default any.
         * Allows to filter events by user relation to the event among all wix sites.
         */
        userFilter?: UserFilter;
        /**
         * Filter facets to include in the response.
         * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
         */
        facet?: string[];
    }
    interface ListUserEventsResponse {
        pagingMetadata?: PagingMetadataV2$1;
        /** Events list. */
        events?: Event[];
        /** Filter facets. */
        facets?: Record<string, FacetCounts$2>;
    }
    interface ListCategoryEventsRequest {
        /** Category ID */
        categoryId: string;
        paging?: Paging$1;
        /**
         * Controls which event properties are returned. See [Fieldset](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_event-fieldset).
         * Some fields require additional computation that affects latency of the service.
         * Use minimum set of required fieldset for best performance.
         */
        fieldset?: EventFieldset[];
    }
    interface ListCategoryEventsResponse {
        pagingMetadata?: PagingMetadataV2$1;
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
        location?: Location$2;
        /** Event schedule configuration */
        scheduleConfig?: ScheduleConfig$2;
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
        location?: Location$2;
        /** Event schedule configuration. */
        scheduleConfig?: ScheduleConfig$2;
        /** Event title. */
        title?: string;
        /** Event creator user ID. */
        userId?: string | null;
        /** Event status. */
        status?: EventStatus$1;
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
        status?: EventStatus$1;
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
    interface EventCopied$1 {
        /** Event created timestamp in ISO UTC format. */
        timestamp?: Date;
        /** Event ID. */
        eventId?: string;
        /** Event location. */
        location?: Location$2;
        /** Event schedule configuration. */
        scheduleConfig?: ScheduleConfig$2;
        /** Event title. */
        title?: string;
        /** Event creator user ID. */
        userId?: string | null;
        /** Event status. */
        status?: EventStatus$1;
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
        location?: Location$2;
        /** Event schedule configuration. */
        scheduleConfig?: ScheduleConfig$2;
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
        recurrenceStatus?: Status$2;
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
    function queryEventsV2(options?: QueryEventsV2Options): Promise<QueryEventsV2Response>;
    interface QueryEventsV2Options {
        query?: QueryV2$1;
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
    /**
     * Retrieves a list of up to 100 events, given the provided [paging](https://dev.wix.com/api/rest/getting-started/pagination), [filtering & sorting](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
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
        status?: EventStatus$1[];
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
        recurrenceStatus?: Status$2[];
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
        paging?: Paging$1;
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
     *
     * This function is not a universal function and runs only on the backend.
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
     *
     * This function is not a universal function and runs only on the backend.
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
     *
     * This function is not a universal function and runs only on the backend.
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
     *
     * This function is not a universal function and runs only on the backend.
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
     * This function is not a universal function and runs only on the backend.
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
     *
     * This function is not a universal function and runs only on the backend.
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
     * This function is not a universal function and runs only on the backend.
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
     *
     * This function is not a universal function and runs only on the backend.
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
     * This function is not a universal function and runs only on the backend.
     * @param filter - Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_list-query-events).
     * @public
     * @documentationMaturity preview
     * @requiredField filter
     * @adminMethod
     */
    function bulkDeleteEvents(filter: Record<string, any> | null): Promise<void>;
    type eventsV1Event_universal_d_Event = Event;
    type eventsV1Event_universal_d_Scheduling = Scheduling;
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
    type eventsV1Event_universal_d_ExternalEvent = ExternalEvent;
    type eventsV1Event_universal_d_VisitorType = VisitorType;
    const eventsV1Event_universal_d_VisitorType: typeof VisitorType;
    type eventsV1Event_universal_d_SiteUrl = SiteUrl;
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
    type eventsV1Event_universal_d_Category = Category;
    type eventsV1Event_universal_d_CategoryCounts = CategoryCounts;
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
        export { __debug$4 as __debug, eventsV1Event_universal_d_Event as Event, Location$2 as Location, MapCoordinates$2 as MapCoordinates, LocationType$2 as LocationType, Address$3 as Address, AddressStreetOneOf$3 as AddressStreetOneOf, StreetAddress$3 as StreetAddress, AddressLocation$3 as AddressLocation, Subdivision$3 as Subdivision, SubdivisionType$3 as SubdivisionType, eventsV1Event_universal_d_Scheduling as Scheduling, ScheduleConfig$2 as ScheduleConfig, Recurrences$2 as Recurrences, Occurrence$2 as Occurrence, Status$2 as Status, EventStatus$1 as EventStatus, eventsV1Event_universal_d_Registration as Registration, eventsV1Event_universal_d_EventType as EventType, eventsV1Event_universal_d_RegistrationStatus as RegistrationStatus, eventsV1Event_universal_d_RsvpCollection as RsvpCollection, eventsV1Event_universal_d_RsvpCollectionConfig as RsvpCollectionConfig, eventsV1Event_universal_d_RsvpStatusOptions as RsvpStatusOptions, eventsV1Event_universal_d_Ticketing as Ticketing, eventsV1Event_universal_d_TicketingConfig as TicketingConfig, eventsV1Event_universal_d_TaxConfig as TaxConfig, eventsV1Event_universal_d_TaxType as TaxType, Money$1 as Money, eventsV1Event_universal_d_ExternalEvent as ExternalEvent, eventsV1Event_universal_d_VisitorType as VisitorType, CalendarLinks$1 as CalendarLinks, eventsV1Event_universal_d_SiteUrl as SiteUrl, Form$1 as Form, InputControl$1 as InputControl, InputControlType$1 as InputControlType, Input$1 as Input, ValueType$1 as ValueType, OptionSelection$1 as OptionSelection, OptionSelectionSelectedOptionOneOf$1 as OptionSelectionSelectedOptionOneOf, Label$1 as Label, FormMessages$1 as FormMessages, RsvpFormMessages$1 as RsvpFormMessages, PositiveResponseConfirmation$1 as PositiveResponseConfirmation, ResponseConfirmation$1 as ResponseConfirmation, Positive$1 as Positive, Negative$1 as Negative, CheckoutFormMessages$1 as CheckoutFormMessages, CheckoutFormMessagesResponseConfirmation$1 as CheckoutFormMessagesResponseConfirmation, RegistrationClosedMessages$1 as RegistrationClosedMessages, TicketsUnavailableMessages$1 as TicketsUnavailableMessages, Dashboard$1 as Dashboard, eventsV1Event_universal_d_RsvpSummary as RsvpSummary, eventsV1Event_universal_d_TicketingSummary as TicketingSummary, eventsV1Event_universal_d_GuestListConfig as GuestListConfig, eventsV1Event_universal_d_Feed as Feed, eventsV1Event_universal_d_OnlineConferencing as OnlineConferencing, eventsV1Event_universal_d_OnlineConferencingConfig as OnlineConferencingConfig, eventsV1Event_universal_d_ConferenceType as ConferenceType, eventsV1Event_universal_d_OnlineConferencingSession as OnlineConferencingSession, eventsV1Event_universal_d_SeoSettings as SeoSettings, eventsV1Event_universal_d_SeoSchema as SeoSchema, eventsV1Event_universal_d_Keyword as Keyword, eventsV1Event_universal_d_Tag as Tag, eventsV1Event_universal_d_Settings as Settings, eventsV1Event_universal_d_Agenda as Agenda, eventsV1Event_universal_d_Category as Category, eventsV1Event_universal_d_CategoryCounts as CategoryCounts, State$1 as State, eventsV1Event_universal_d_EventDisplaySettings as EventDisplaySettings, eventsV1Event_universal_d_EventStarted as EventStarted, eventsV1Event_universal_d_EventReminder as EventReminder, eventsV1Event_universal_d_TimeDuration as TimeDuration, eventsV1Event_universal_d_EventEnded as EventEnded, eventsV1Event_universal_d_QueryEventsRequest as QueryEventsRequest, eventsV1Event_universal_d_EventFieldset as EventFieldset, eventsV1Event_universal_d_QueryEventsResponse as QueryEventsResponse, FacetCounts$2 as FacetCounts, eventsV1Event_universal_d_QueryEventsV2Request as QueryEventsV2Request, QueryV2$1 as QueryV2, QueryV2PagingMethodOneOf$1 as QueryV2PagingMethodOneOf, Sorting$1 as Sorting, SortOrder$2 as SortOrder, Paging$1 as Paging, eventsV1Event_universal_d_QueryEventsV2Response as QueryEventsV2Response, PagingMetadataV2$1 as PagingMetadataV2, Cursors$1 as Cursors, eventsV1Event_universal_d_ListEventsRequest as ListEventsRequest, eventsV1Event_universal_d_UserFilter as UserFilter, eventsV1Event_universal_d_Relation as Relation, eventsV1Event_universal_d_CategoryFilter as CategoryFilter, eventsV1Event_universal_d_ListEventsResponse as ListEventsResponse, eventsV1Event_universal_d_ListUserEventsRequest as ListUserEventsRequest, eventsV1Event_universal_d_ListUserEventsResponse as ListUserEventsResponse, eventsV1Event_universal_d_ListCategoryEventsRequest as ListCategoryEventsRequest, eventsV1Event_universal_d_ListCategoryEventsResponse as ListCategoryEventsResponse, eventsV1Event_universal_d_GetEventRequest as GetEventRequest, eventsV1Event_universal_d_GetEventRequestGetByOneOf as GetEventRequestGetByOneOf, eventsV1Event_universal_d_GetEventResponse as GetEventResponse, eventsV1Event_universal_d_FindEventRequest as FindEventRequest, eventsV1Event_universal_d_FindEventRequestFindByOneOf as FindEventRequestFindByOneOf, eventsV1Event_universal_d_FindEventResponse as FindEventResponse, eventsV1Event_universal_d_CreateEventV2Request as CreateEventV2Request, eventsV1Event_universal_d_EventData as EventData, eventsV1Event_universal_d_RegistrationConfig as RegistrationConfig, eventsV1Event_universal_d_CreateEventV2Response as CreateEventV2Response, eventsV1Event_universal_d_EventCreated as EventCreated, eventsV1Event_universal_d_EventPublished as EventPublished, eventsV1Event_universal_d_CopyEventRequest as CopyEventRequest, eventsV1Event_universal_d_CopyEventResponse as CopyEventResponse, EventCopied$1 as EventCopied, eventsV1Event_universal_d_CopyEventV2Request as CopyEventV2Request, eventsV1Event_universal_d_CopyEventV2Response as CopyEventV2Response, eventsV1Event_universal_d_UpdateEventRequest as UpdateEventRequest, eventsV1Event_universal_d_UpdateEventResponse as UpdateEventResponse, EventUpdated$1 as EventUpdated, eventsV1Event_universal_d_PublishDraftEventRequest as PublishDraftEventRequest, eventsV1Event_universal_d_PublishDraftEventResponse as PublishDraftEventResponse, eventsV1Event_universal_d_CancelEventRequest as CancelEventRequest, eventsV1Event_universal_d_CancelEventResponse as CancelEventResponse, eventsV1Event_universal_d_EventCanceled as EventCanceled, eventsV1Event_universal_d_BulkCancelEventsRequest as BulkCancelEventsRequest, eventsV1Event_universal_d_BulkCancelEventsResponse as BulkCancelEventsResponse, eventsV1Event_universal_d_DeleteEventRequest as DeleteEventRequest, eventsV1Event_universal_d_DeleteEventResponse as DeleteEventResponse, eventsV1Event_universal_d_EventDeleted as EventDeleted, eventsV1Event_universal_d_BulkDeleteEventsRequest as BulkDeleteEventsRequest, eventsV1Event_universal_d_BulkDeleteEventsResponse as BulkDeleteEventsResponse, eventsV1Event_universal_d_GetRecurringEventStateRequest as GetRecurringEventStateRequest, eventsV1Event_universal_d_GetRecurringEventStateResponse as GetRecurringEventStateResponse, eventsV1Event_universal_d_RecurringEventState as RecurringEventState, eventsV1Event_universal_d_RecurringEventDetails as RecurringEventDetails, eventsV1Event_universal_d_UpdateRecurringStatusRequest as UpdateRecurringStatusRequest, eventsV1Event_universal_d_UpdateRecurringStatusResponse as UpdateRecurringStatusResponse, eventsV1Event_universal_d_GetTicketingSummaryRequest as GetTicketingSummaryRequest, eventsV1Event_universal_d_GetTicketingSummaryResponse as GetTicketingSummaryResponse, eventsV1Event_universal_d_query as query, eventsV1Event_universal_d_QueryOptions as QueryOptions, eventsV1Event_universal_d_queryEventsV2 as queryEventsV2, eventsV1Event_universal_d_QueryEventsV2Options as QueryEventsV2Options, eventsV1Event_universal_d_listEvents as listEvents, eventsV1Event_universal_d_ListEventsOptions as ListEventsOptions, eventsV1Event_universal_d_listCategoryEvents as listCategoryEvents, eventsV1Event_universal_d_ListCategoryEventsOptions as ListCategoryEventsOptions, eventsV1Event_universal_d_getEvent as getEvent, eventsV1Event_universal_d_GetEventOptions as GetEventOptions, eventsV1Event_universal_d_findEvent as findEvent, eventsV1Event_universal_d_FindEventOptions as FindEventOptions, eventsV1Event_universal_d_createEventV2 as createEventV2, eventsV1Event_universal_d_CreateEventV2Options as CreateEventV2Options, eventsV1Event_universal_d_copy as copy, eventsV1Event_universal_d_CopyOptions as CopyOptions, eventsV1Event_universal_d_copyEventV2 as copyEventV2, eventsV1Event_universal_d_CopyEventV2Options as CopyEventV2Options, eventsV1Event_universal_d_updateEvent as updateEvent, eventsV1Event_universal_d_UpdateEventOptions as UpdateEventOptions, eventsV1Event_universal_d_publishDraftEvent as publishDraftEvent, eventsV1Event_universal_d_cancelEvent as cancelEvent, eventsV1Event_universal_d_bulkCancelEvents as bulkCancelEvents, eventsV1Event_universal_d_deleteEvent as deleteEvent, eventsV1Event_universal_d_bulkDeleteEvents as bulkDeleteEvents, };
    }
    const __debug$3: {
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
    interface ResponseConfirmation {
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
        confirmation?: ResponseConfirmation;
    }
    interface CheckoutFormMessages {
        /** Main form title for response. */
        title?: string;
        /** Submit form call-to-action label text. */
        submitActionLabel?: string;
        /** Confirmation messages shown after checkout. */
        confirmation?: CheckoutFormMessagesResponseConfirmation;
    }
    /** Confirmation messages shown after checkout. */
    interface CheckoutFormMessagesResponseConfirmation {
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
        /** @internal */
        apt?: string;
    }
    interface AddressLocation$2 {
        latitude?: number | null;
        longitude?: number | null;
    }
    interface Subdivision$2 {
        /** subdivision short code */
        code?: string;
        /** subdivision full-name */
        name?: string;
        /** @internal */
        type?: SubdivisionType$2;
        /** @internal */
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
    interface DiscardDraftRequest {
        /** Event ID. */
        eventId: string;
    }
    interface DiscardDraftResponse {
    }
    /**
     * Retrieves an event registration form (both the draft and published versions).
     * @param eventId - Event ID.
     * @public
     * @documentationMaturity preview
     * @requiredField eventId
     */
    function getForm(eventId: string): Promise<GetFormResponse>;
    /**
     * Adds an input control to the draft form.
     *
     * This function is not a universal function and runs only on the backend.
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
     *
     * This function is not a universal function and runs only on the backend.
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
     *
     * This function is not a universal function and runs only on the backend.
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
     *
     * This function is not a universal function and runs only on the backend.
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
     *
     * This function is not a universal function and runs only on the backend.
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
     *
     * This function is not a universal function and runs only on the backend.
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
    type eventsV1Form_universal_d_ResponseConfirmation = ResponseConfirmation;
    type eventsV1Form_universal_d_Positive = Positive;
    type eventsV1Form_universal_d_Negative = Negative;
    type eventsV1Form_universal_d_CheckoutFormMessages = CheckoutFormMessages;
    type eventsV1Form_universal_d_CheckoutFormMessagesResponseConfirmation = CheckoutFormMessagesResponseConfirmation;
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
    type eventsV1Form_universal_d_DiscardDraftRequest = DiscardDraftRequest;
    type eventsV1Form_universal_d_DiscardDraftResponse = DiscardDraftResponse;
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
        export { __debug$3 as __debug, eventsV1Form_universal_d_Form as Form, eventsV1Form_universal_d_InputControl as InputControl, eventsV1Form_universal_d_InputControlType as InputControlType, eventsV1Form_universal_d_Input as Input, eventsV1Form_universal_d_ValueType as ValueType, eventsV1Form_universal_d_OptionSelection as OptionSelection, eventsV1Form_universal_d_OptionSelectionSelectedOptionOneOf as OptionSelectionSelectedOptionOneOf, eventsV1Form_universal_d_Label as Label, eventsV1Form_universal_d_FormMessages as FormMessages, eventsV1Form_universal_d_RsvpFormMessages as RsvpFormMessages, eventsV1Form_universal_d_PositiveResponseConfirmation as PositiveResponseConfirmation, eventsV1Form_universal_d_ResponseConfirmation as ResponseConfirmation, eventsV1Form_universal_d_Positive as Positive, eventsV1Form_universal_d_Negative as Negative, eventsV1Form_universal_d_CheckoutFormMessages as CheckoutFormMessages, eventsV1Form_universal_d_CheckoutFormMessagesResponseConfirmation as CheckoutFormMessagesResponseConfirmation, eventsV1Form_universal_d_RegistrationClosedMessages as RegistrationClosedMessages, eventsV1Form_universal_d_TicketsUnavailableMessages as TicketsUnavailableMessages, eventsV1Form_universal_d_FormInputControlAdded as FormInputControlAdded, eventsV1Form_universal_d_FormInputControlUpdated as FormInputControlUpdated, eventsV1Form_universal_d_FormInputControlDeleted as FormInputControlDeleted, eventsV1Form_universal_d_GetFormRequest as GetFormRequest, eventsV1Form_universal_d_GetFormResponse as GetFormResponse, eventsV1Form_universal_d_AddControlRequest as AddControlRequest, eventsV1Form_universal_d_AddControlRequestControlOneOf as AddControlRequestControlOneOf, eventsV1Form_universal_d_PhoneControl as PhoneControl, eventsV1Form_universal_d_AddressControl as AddressControl, eventsV1Form_universal_d_AddressControlLabels as AddressControlLabels, eventsV1Form_universal_d_DateControl as DateControl, eventsV1Form_universal_d_AdditionalGuestsControl as AdditionalGuestsControl, eventsV1Form_universal_d_Labels as Labels, eventsV1Form_universal_d_DropdownControl as DropdownControl, eventsV1Form_universal_d_RadioButtonControl as RadioButtonControl, eventsV1Form_universal_d_CheckboxControl as CheckboxControl, eventsV1Form_universal_d_TextControl as TextControl, eventsV1Form_universal_d_AddControlResponse as AddControlResponse, eventsV1Form_universal_d_UpdateControlRequest as UpdateControlRequest, eventsV1Form_universal_d_UpdateControlRequestControlOneOf as UpdateControlRequestControlOneOf, eventsV1Form_universal_d_NameControl as NameControl, eventsV1Form_universal_d_NameControlLabels as NameControlLabels, eventsV1Form_universal_d_EmailControl as EmailControl, eventsV1Form_universal_d_UpdateControlResponse as UpdateControlResponse, eventsV1Form_universal_d_DeleteControlRequest as DeleteControlRequest, eventsV1Form_universal_d_DeleteControlResponse as DeleteControlResponse, eventsV1Form_universal_d_UpdateMessagesRequest as UpdateMessagesRequest, eventsV1Form_universal_d_UpdateMessagesResponse as UpdateMessagesResponse, eventsV1Form_universal_d_PublishDraftRequest as PublishDraftRequest, eventsV1Form_universal_d_PublishDraftResponse as PublishDraftResponse, eventsV1Form_universal_d_EventUpdated as EventUpdated, Location$1 as Location, MapCoordinates$1 as MapCoordinates, LocationType$1 as LocationType, Address$2 as Address, AddressStreetOneOf$2 as AddressStreetOneOf, StreetAddress$2 as StreetAddress, AddressLocation$2 as AddressLocation, Subdivision$2 as Subdivision, SubdivisionType$2 as SubdivisionType, ScheduleConfig$1 as ScheduleConfig, Recurrences$1 as Recurrences, Occurrence$1 as Occurrence, Status$1 as Status, eventsV1Form_universal_d_DiscardDraftRequest as DiscardDraftRequest, eventsV1Form_universal_d_DiscardDraftResponse as DiscardDraftResponse, eventsV1Form_universal_d_getForm as getForm, eventsV1Form_universal_d_addControl as addControl, eventsV1Form_universal_d_AddControlOptions as AddControlOptions, eventsV1Form_universal_d_updateControl as updateControl, eventsV1Form_universal_d_UpdateControlIdentifiers as UpdateControlIdentifiers, eventsV1Form_universal_d_UpdateControlOptions as UpdateControlOptions, eventsV1Form_universal_d_deleteControl as deleteControl, eventsV1Form_universal_d_DeleteControlIdentifiers as DeleteControlIdentifiers, eventsV1Form_universal_d_updateMessages as updateMessages, eventsV1Form_universal_d_UpdateMessagesOptions as UpdateMessagesOptions, eventsV1Form_universal_d_publishDraft as publishDraft, eventsV1Form_universal_d_discardDraft as discardDraft, };
    }
    const __debug$2: {
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
        address?: Address$1;
    }
    /** Physical address */
    interface Address$1 extends AddressStreetOneOf$1 {
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
    interface AddressStreetOneOf$1 {
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
        facets?: Record<string, FacetCounts$1>;
        /** Meta data of search results. */
        searchMetaData?: SearchMetaData;
        /** Rsvp data enriched facets. */
        rsvpFacets?: RsvpFacets;
    }
    interface FacetCounts$1 {
        /** Facet counts aggregated per value */
        counts?: Record<string, number>;
    }
    interface SearchMetaData {
        /** Search results */
        results?: Result[];
    }
    interface Result {
        /** Entity ID */
        _id?: string;
        /**
         * Entity score.
         * Higher is more relevant to search phrase.
         */
        score?: string;
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
        facets?: Record<string, FacetCounts$1>;
        /** Meta data of search results. */
        searchMetaData?: SearchMetaData;
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
        /** Set of field paths, specifying which parts of RSVP to update. */
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
        /** Set of fields to update. */
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
     *
     * This function is not a universal function and runs only on the backend.
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
     *
     * This function is not a universal function and runs only on the backend.
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
     *
     * This function is not a universal function and runs only on the backend.
     * @param rsvpId - RSVP ID.
     * @public
     * @documentationMaturity preview
     * @requiredField rsvpId
     * @adminMethod
     */
    function getRsvp(rsvpId: string, options?: GetRsvpOptions): Promise<GetRsvpResponse>;
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
     *
     * This function is not a universal function and runs only on the backend.
     * @param rsvpId - RSVP ID.
     * @param eventId - Event ID.
     * @public
     * @documentationMaturity preview
     * @requiredField eventId
     * @requiredField options.fields
     * @requiredField rsvpId
     * @adminMethod
     */
    function updateRsvp(rsvpId: string, eventId: string, options?: UpdateRsvpOptions): Promise<UpdateRsvpResponse>;
    interface UpdateRsvpOptions {
        /** Set of field paths, specifying which parts of RSVP to update. */
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
     *
     * This function is not a universal function and runs only on the backend.
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
        /** Set of fields to update. */
        fields?: string[];
        /** New RSVP status. */
        status?: RsvpStatus;
    }
    /**
     * Deletes an RSVP.
     *
     * This function is not a universal function and runs only on the backend.
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
     *
     * This function is not a universal function and runs only on the backend.
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
     *
     * This function is not a universal function and runs only on the backend.
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
    type eventsV1Rsvp_universal_d_Rsvp = Rsvp;
    type eventsV1Rsvp_universal_d_FormResponse = FormResponse;
    type eventsV1Rsvp_universal_d_InputValue = InputValue;
    type eventsV1Rsvp_universal_d_FormattedAddress = FormattedAddress;
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
    type eventsV1Rsvp_universal_d_SearchMetaData = SearchMetaData;
    type eventsV1Rsvp_universal_d_Result = Result;
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
        export { __debug$2 as __debug, eventsV1Rsvp_universal_d_Rsvp as Rsvp, eventsV1Rsvp_universal_d_FormResponse as FormResponse, eventsV1Rsvp_universal_d_InputValue as InputValue, eventsV1Rsvp_universal_d_FormattedAddress as FormattedAddress, Address$1 as Address, AddressStreetOneOf$1 as AddressStreetOneOf, StreetAddress$1 as StreetAddress, AddressLocation$1 as AddressLocation, Subdivision$1 as Subdivision, SubdivisionType$1 as SubdivisionType, eventsV1Rsvp_universal_d_RsvpStatus as RsvpStatus, eventsV1Rsvp_universal_d_Guest as Guest, eventsV1Rsvp_universal_d_CheckIn as CheckIn, eventsV1Rsvp_universal_d_ListRsvpRequest as ListRsvpRequest, eventsV1Rsvp_universal_d_RsvpFieldset as RsvpFieldset, eventsV1Rsvp_universal_d_RsvpTag as RsvpTag, eventsV1Rsvp_universal_d_ListRsvpResponse as ListRsvpResponse, FacetCounts$1 as FacetCounts, eventsV1Rsvp_universal_d_SearchMetaData as SearchMetaData, eventsV1Rsvp_universal_d_Result as Result, eventsV1Rsvp_universal_d_RsvpFacets as RsvpFacets, eventsV1Rsvp_universal_d_RsvpFacetCounts as RsvpFacetCounts, eventsV1Rsvp_universal_d_Counts as Counts, eventsV1Rsvp_universal_d_QueryRsvpRequest as QueryRsvpRequest, eventsV1Rsvp_universal_d_QueryRsvpResponse as QueryRsvpResponse, eventsV1Rsvp_universal_d_GetRsvpRequest as GetRsvpRequest, eventsV1Rsvp_universal_d_GetRsvpResponse as GetRsvpResponse, eventsV1Rsvp_universal_d_CreateRsvpRequest as CreateRsvpRequest, eventsV1Rsvp_universal_d_ModificationOptions as ModificationOptions, eventsV1Rsvp_universal_d_CreateRsvpResponse as CreateRsvpResponse, eventsV1Rsvp_universal_d_CalendarLinks as CalendarLinks, eventsV1Rsvp_universal_d_RsvpCreated as RsvpCreated, eventsV1Rsvp_universal_d_OnlineConferencingLogin as OnlineConferencingLogin, eventsV1Rsvp_universal_d_UpdateRsvpRequest as UpdateRsvpRequest, eventsV1Rsvp_universal_d_UpdateRsvpResponse as UpdateRsvpResponse, eventsV1Rsvp_universal_d_RsvpUpdated as RsvpUpdated, eventsV1Rsvp_universal_d_BulkUpdateRsvpRequest as BulkUpdateRsvpRequest, eventsV1Rsvp_universal_d_BulkUpdateRsvpResponse as BulkUpdateRsvpResponse, eventsV1Rsvp_universal_d_DeleteRsvpRequest as DeleteRsvpRequest, eventsV1Rsvp_universal_d_DeleteRsvpResponse as DeleteRsvpResponse, eventsV1Rsvp_universal_d_RsvpDeleted as RsvpDeleted, eventsV1Rsvp_universal_d_CheckInRsvpRequest as CheckInRsvpRequest, eventsV1Rsvp_universal_d_CheckInRsvpResponse as CheckInRsvpResponse, eventsV1Rsvp_universal_d_DeleteRsvpCheckInRequest as DeleteRsvpCheckInRequest, eventsV1Rsvp_universal_d_DeleteRsvpCheckInResponse as DeleteRsvpCheckInResponse, eventsV1Rsvp_universal_d_listRsvp as listRsvp, eventsV1Rsvp_universal_d_ListRsvpOptions as ListRsvpOptions, eventsV1Rsvp_universal_d_queryRsvp as queryRsvp, eventsV1Rsvp_universal_d_QueryRsvpOptions as QueryRsvpOptions, eventsV1Rsvp_universal_d_getRsvp as getRsvp, eventsV1Rsvp_universal_d_GetRsvpOptions as GetRsvpOptions, eventsV1Rsvp_universal_d_createRsvp as createRsvp, eventsV1Rsvp_universal_d_CreateRsvpOptions as CreateRsvpOptions, eventsV1Rsvp_universal_d_updateRsvp as updateRsvp, eventsV1Rsvp_universal_d_UpdateRsvpOptions as UpdateRsvpOptions, eventsV1Rsvp_universal_d_bulkUpdateRsvp as bulkUpdateRsvp, eventsV1Rsvp_universal_d_BulkUpdateRsvpOptions as BulkUpdateRsvpOptions, eventsV1Rsvp_universal_d_deleteRsvp as deleteRsvp, eventsV1Rsvp_universal_d_DeleteRsvpOptions as DeleteRsvpOptions, eventsV1Rsvp_universal_d_checkInRsvp as checkInRsvp, eventsV1Rsvp_universal_d_CheckInRsvpOptions as CheckInRsvpOptions, eventsV1Rsvp_universal_d_deleteRsvpCheckIn as deleteRsvpCheckIn, eventsV1Rsvp_universal_d_DeleteRsvpCheckInOptions as DeleteRsvpCheckInOptions, };
    }
    const __debug$1: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface TicketDefinition {
        /** Ticket definition ID. */
        _id?: string;
        /** Ticket price. */
        price?: Money;
        /** Whether the ticket is free (read only). */
        free?: boolean;
        /** Ticket name. */
        name?: string;
        /** Ticket description. */
        description?: string;
        /**
         * Limit of tickets that can be purchased per checkout.
         * Set to 20 for unlimited ticket definition.
         */
        limitPerCheckout?: number;
        /** Custom sort index. */
        orderIndex?: number;
        /** Policy information plain text block, as printed on the ticket. */
        policy?: string;
        /** Sensitive dashboard data. */
        dashboard?: Dashboard;
        /** Event ID associated with the ticket. */
        eventId?: string;
        /**
         * Configuration of the fixed-rate Wix service fee that is applied at checkout to each ticket sold.
         * @readonly
         */
        wixFeeConfig?: WixFeeConfig;
        /** Ticket sale period. */
        salePeriod?: TicketSalePeriod;
        /**
         * Ticket sale status.
         * @readonly
         */
        saleStatus?: TicketSaleStatus;
        /** Ticket state. */
        state?: TicketDefinitionStateEnumState[];
        /** Ticket pricing. */
        pricing?: TicketPricing;
    }
    interface Money {
        /**
         * @internal
         * @internal */
        amount?: string;
        /**
         * Three-letter currency code in
         * [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format.
         */
        currency?: string;
        /** Monetary amount. Decimal string with a period as a decimal separator (e.g., 3.99). Optionally, a single (-), to indicate that the amount is negative. */
        value?: string | null;
    }
    interface Dashboard {
        /** Whether ticket is hidden and cannot be sold. */
        hidden?: boolean;
        /** Number of tickets sold and reserved. */
        sold?: number;
        /** Whether the ticket has limited quantity. */
        limited?: boolean;
        /** Ticket limit. `NULL` for unlimited ticket definitions. */
        quantity?: number | null;
        /** Number of unsold tickets. `NULL` for unlimited ticket definitions. */
        unsold?: number | null;
        /** Number of tickets sold. */
        ticketsSold?: number;
        /** Number of tickets reserved. */
        ticketsReserved?: number;
    }
    interface WixFeeConfig {
        /**
         * Fee calculation method.
         *
         * Supported values: `"FEE_ADDED"`, `"FEE_INCLUDED"`, `"FEE_ADDED_AT_CHECKOUT"`
         *
         * Default: `"FEE_ADDED_AT_CHECKOUT"`
         */
        type?: FeeType;
    }
    enum FeeType {
        /** Fee is added to the ticket price at checkout */
        FEE_ADDED = "FEE_ADDED",
        /** Seller absorbs the fee. It is deducted from the ticket price */
        FEE_INCLUDED = "FEE_INCLUDED",
        /** Fee is added to the ticket price at checkout */
        FEE_ADDED_AT_CHECKOUT = "FEE_ADDED_AT_CHECKOUT"
    }
    interface TicketSalePeriod {
        /** Ticket sale start timestamp. */
        startDate?: Date;
        /** Ticket sale end timestamp. */
        endDate?: Date;
        /** Whether to hide this ticket if it's not on sale */
        hideNotOnSale?: boolean;
    }
    enum TicketSaleStatus {
        /** Ticket sale is scheduled to start */
        SALE_SCHEDULED = "SALE_SCHEDULED",
        /** Ticket sale has started */
        SALE_STARTED = "SALE_STARTED",
        /** Ticket sale has ended */
        SALE_ENDED = "SALE_ENDED"
    }
    enum TicketDefinitionStateEnumState {
        INCLUDE_HIDDEN_NOT_ON_SALE = "INCLUDE_HIDDEN_NOT_ON_SALE"
    }
    interface TicketPricing extends TicketPricingPriceOneOf {
        /** Ticket price which is read only. */
        fixedPrice?: Money;
        /** Min price per ticket, customizable. */
        minPrice?: Money;
        /** Ticket pricing options. */
        pricingOptions?: PricingOptions;
        /**
         * Ticket pricing type.
         * @readonly
         */
        pricingType?: Type;
    }
    /** @oneof */
    interface TicketPricingPriceOneOf {
        /** Ticket price which is read only. */
        fixedPrice?: Money;
        /** Min price per ticket, customizable. */
        minPrice?: Money;
        /** Ticket pricing options. */
        pricingOptions?: PricingOptions;
    }
    interface PricingOptions {
        /** Multiple ticket pricing options. */
        options?: PricingOption[];
    }
    interface PricingOption {
        /** Ticket pricing option ID. */
        _id?: string | null;
        /** Ticket pricing option name. */
        name?: string | null;
        /** Ticket pricing option price. */
        price?: Money;
    }
    enum Type {
        STANDARD = "STANDARD",
        DONATION = "DONATION"
    }
    interface QueryTicketDefinitionsRequest {
        /** Offset. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
        offset?: number;
        /** Limit. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
        limit?: number;
        /** Set of fields to return in the response. See [fieldsets](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_ticket-definition-fieldset). */
        fieldset?: TicketDefinitionFieldset[];
        /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_query-ticket-definitions). */
        filter?: Record<string, any> | null;
        /**
         * Sort order. Defaults to: "created:asc".
         * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_query-ticket-definitions).
         */
        sort?: string;
        /**
         * Filter facets to include in the response.
         * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_query-ticket-definitions).
         */
        facet?: string[];
    }
    enum TicketDefinitionFieldset {
        /** Include policy in the response. */
        POLICY = "POLICY",
        /** Include dashboard in the response. */
        DASHBOARD = "DASHBOARD"
    }
    interface QueryTicketDefinitionsResponse {
        /** Total ticket definitions matching the given filters. */
        total?: number;
        /** Offset. */
        offset?: number;
        /** Limit. */
        limit?: number;
        /** Ticket definitions. */
        definitions?: TicketDefinition[];
        /** Filter facets. */
        facets?: Record<string, FacetCounts>;
    }
    interface FacetCounts {
        /** Facet counts aggregated per value */
        counts?: Record<string, number>;
    }
    interface QueryTicketDefinitionsRequestV2 {
        /** Query request object. */
        query?: QueryV2;
    }
    interface QueryV2 extends QueryV2PagingMethodOneOf {
        /** Paging options to limit and skip the number of items. */
        paging?: Paging;
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
        /** Array of projected fields. A list of specific field names to return. If `fieldsets` are also specified, the union of `fieldsets` and `fields` is returned. */
        fields?: string[];
        /** Array of named, predefined sets of projected fields. A array of predefined named sets of fields to be returned. Specifying multiple `fieldsets` will return the union of fields from all sets. If `fields` are also specified, the union of `fieldsets` and `fields` is returned. */
        fieldsets?: string[];
    }
    /** @oneof */
    interface QueryV2PagingMethodOneOf {
        /** Paging options to limit and skip the number of items. */
        paging?: Paging;
        /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
        cursorPaging?: CursorPaging;
    }
    interface Sorting {
        /** Name of the field to sort by. */
        fieldName?: string;
        /** Sort order. */
        order?: SortOrder$1;
    }
    enum SortOrder$1 {
        ASC = "ASC",
        DESC = "DESC"
    }
    interface Paging {
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
    interface QueryTicketDefinitionsResponseV2 {
        /** Ticket definitions. */
        definitions?: TicketDefinition[];
        /** Paging metadata definitions. */
        metadata?: PagingMetadataV2;
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
        /** Cursor pointing to next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to previous page in the list of results. */
        prev?: string | null;
    }
    interface ListTicketDefinitionsRequest {
        /** Event ID. */
        eventId?: string[];
        /** Offset. */
        offset?: number;
        /** Paging limit. */
        limit?: number;
        /**
         * Predefined sets of fields to return.
         * - `DASHBOARD`: Returns `dashboard`.
         * - `POLICY`: Returns `policy`.
         *
         * Default: If `fieldset` is omitted from the request,  `id`, `price`, `free`, `name`, `limitPerCheckout`, `orderIndex`, `eventId`.
         *
         */
        fieldset?: TicketDefinitionFieldset[];
        /** Event creator ID. */
        eventCreatorId?: string[];
        /**
         * Filter by ticket definition state.
         *
         * Supported values: `"VISIBLE"`, `"HIDDEN"`, `"FREE"`, `"PAID"`
         */
        state?: State[];
        /**
         * Sort order.
         *
         * Default: `"created"`:`"asc"`
         */
        sort?: string;
        /**
         * Ticket sale status.
         *
         * Supported values: `"SALE_SCHEDULED"`, `"SALE_STARTED"`, `"SALE_ENDED"`
         */
        saleStatus?: TicketSaleStatus[];
        /** Filter facets. */
        facet?: string[];
    }
    enum State {
        /** Ticket is available for purchase. */
        VISIBLE = "VISIBLE",
        /** Opposite to VISIBLE. */
        HIDDEN = "HIDDEN",
        /** Ticket price is 0. */
        FREE = "FREE",
        /** Ticket price is greater than 0. */
        PAID = "PAID"
    }
    interface ListTicketDefinitionsResponse {
        /** Meta data. */
        metaData?: ResponseMetaData;
        /** Retrieved ticket definitions. */
        definitions?: TicketDefinition[];
        /** Filter facets. */
        facets?: Record<string, FacetCounts>;
    }
    interface ResponseMetaData {
        /** Number of items in the response. */
        count?: number;
        /** Offset of items. */
        offset?: number;
        /** Total number of matching items. */
        total?: number;
    }
    interface GetTicketDefinitionRequest {
        /** Ticket definition ID. */
        definitionId: string;
        /**
         * Predefined sets of fields to return.
         * - `DASHBOARD`: Returns `dashboard`.
         * - `POLICY`: Returns `policy`.
         *
         * Default: If `fieldset` is omitted from the request,  `id`, `price`, `free`, `name`, `limitPerCheckout`, `orderIndex`, `eventId`.
         */
        fieldset?: TicketDefinitionFieldset[];
    }
    interface GetTicketDefinitionResponse {
        /** Retrieved ticket definition. */
        definition?: TicketDefinition;
    }
    interface CreateTicketDefinitionRequest {
        /** Event ID. */
        eventId: string;
        /** Ticket definition data. */
        definition: TicketDefinitionData;
    }
    interface TicketDefinitionData {
        /** Ticket name. */
        name?: string | null;
        /** Ticket price. */
        price?: Money;
        /** Ticket description. */
        description?: string | null;
        /** Whether this ticket type is limited in quantity. */
        limited?: boolean;
        /**
         * Limit for this ticket type.
         *
         * `NULL` for unlimited.
         */
        quantity?: number | null;
        /** Custom sort index for manual tickets ordering implementation. */
        orderIndex?: number;
        /** Policy information in plain text (as listed on the ticket). */
        policy?: string | null;
        /** Whether this ticket type is hidden to customers and cannot be purchased. */
        hidden?: boolean;
        /** Configuration of the fixed-rate Wix service fee that is applied to each ticket sold. */
        wixFeeConfig?: WixFeeConfig;
        /** Ticket sale period. */
        salePeriod?: TicketSalePeriod;
        /** Ticket pricing. */
        pricing?: TicketPricing;
    }
    interface CreateTicketDefinitionResponse {
        /** Created ticket definition. */
        definition?: TicketDefinition;
    }
    interface TicketDefinitionCreated {
        /** Ticket Definition created timestamp in ISO UTC format. */
        timestamp?: Date;
        /** Ticket Definition ID. */
        ticketDefinitionId?: string;
        /** Event ID. */
        eventId?: string;
        /** Originated from. */
        originatedFrom?: OriginatedFrom;
    }
    interface OriginatedFrom {
        /** Instance ID. Indicates the original app instance which current entity originated from. */
        instanceId?: string;
        /** Event ID. Indicates the original event which current entity originated from. */
        eventId?: string;
        /** Event ID. Indicates the original entity which current entity originated from. */
        entityId?: string;
    }
    interface UpdateTicketDefinitionRequest {
        /** Event ID. */
        eventId: string;
        /** Ticket definition ID. */
        definitionId: string;
        /** Ticket definition data. */
        definition?: TicketDefinitionData;
        /** Set of field paths, specifying which parts of ticket definition to update. */
        fields: string[];
    }
    interface UpdateTicketDefinitionResponse {
        /** Updated ticket definition. */
        definition?: TicketDefinition;
    }
    interface TicketDefinitionUpdated {
        /** Ticket definition updated timestamp in ISO UTC format. */
        timestamp?: Date;
        /** Ticket definition ID. */
        ticketDefinitionId?: string;
        /** Event ID. */
        eventId?: string;
    }
    interface DeleteTicketDefinitionRequest extends DeleteTicketDefinitionRequestDeleteOneOf {
        /** Ticket definitions to delete. */
        byId?: ById;
        /** Whether to delete all event tickets. */
        all?: boolean;
        /** Event ID. */
        eventId: string;
    }
    /** @oneof */
    interface DeleteTicketDefinitionRequestDeleteOneOf {
        /** Ticket definitions to delete. */
        byId?: ById;
        /** Whether to delete all event tickets. */
        all?: boolean;
    }
    interface ById {
        /** Ticket definition IDs. */
        definitionId?: string[];
    }
    interface DeleteTicketDefinitionResponse {
    }
    interface TicketDefinitionDeleted {
        /** Ticket definition deleted timestamp in ISO UTC format. */
        timestamp?: Date;
        /** Ticket definition ID. */
        ticketDefinitionId?: string;
        /** Event ID. */
        eventId?: string;
    }
    interface ChangeCurrencyRequest {
        /** Event ID. */
        eventId?: string;
        /** Event currency, in 3-letter [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. */
        currency: string;
    }
    interface ChangeCurrencyResponse {
    }
    /**
     * Retrieves a list of up to 100 ticket definitions, supporting [structurized queries](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_query-ticket-definitions).
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     * @adminMethod
     */
    function queryTicketDefinitions(options?: QueryTicketDefinitionsOptions): Promise<QueryTicketDefinitionsResponse>;
    interface QueryTicketDefinitionsOptions {
        /** Offset. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
        offset?: number;
        /** Limit. See [Pagination](https://dev.wix.com/api/rest/getting-started/pagination). */
        limit?: number;
        /** Set of fields to return in the response. See [fieldsets](https://dev.wix.com/api/rest/wix-events/wix-events/fieldset#wix-events_wix-events_fieldset_ticket-definition-fieldset). */
        fieldset?: TicketDefinitionFieldset[];
        /** Filter. See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_query-ticket-definitions). */
        filter?: Record<string, any> | null;
        /**
         * Sort order. Defaults to: "created:asc".
         * See [supported fields](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_query-ticket-definitions).
         */
        sort?: string;
        /**
         * Filter facets to include in the response.
         * See [supported facets](https://dev.wix.com/api/rest/wix-events/wix-events/filter-and-sort#wix-events_wix-events_filter-and-sort_query-ticket-definitions).
         */
        facet?: string[];
    }
    /**
     * Retrieves a list of up to 1,000 ticket definitions, given the provided paging and filtering.
     * <!--
     * >**Note:** Only visitors with **Manage Orders** or **Manage Ticket Definitions** [permissions](https://support.wix.com/en/article/roles-permissions-accessing-roles-permissions) can query a list of ticket definitions. You can override the permissions with the `wix-auth` [`elevate()`](wix-auth/elevate) function.
     * -->
     *
     * This function is not a universal function and runs only on the backend.
     * @internal
     * @documentationMaturity preview
     * @requiredField options.query.paging.limit
     * @adminMethod
     */
    function queryTicketDefinitionsV2(options?: QueryTicketDefinitionsV2Options): Promise<QueryTicketDefinitionsResponseV2>;
    interface QueryTicketDefinitionsV2Options {
        /** Query request object. */
        query?: QueryV2;
    }
    /**
     * Retrieves a list of up to 100 ticket definitions, with basic filter support.
     * <!--
     * >**Note:** Only visitors with **Manage Orders** or **Manage Ticket Definitions** [permissions](https://support.wix.com/en/article/roles-permissions-accessing-roles-permissions) can retrieve a list of ticket definitions. You can override the permissions with the `wix-auth` [`elevate()`](wix-auth/elevate) function.
     * -->
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     * @param options - Details for the tickets to retrieve.
     * @adminMethod
     */
    function listTicketDefinitions(options?: ListTicketDefinitionsOptions): Promise<ListTicketDefinitionsResponse>;
    interface ListTicketDefinitionsOptions {
        /** Event ID. */
        eventId?: string[];
        /** Offset. */
        offset?: number;
        /** Paging limit. */
        limit?: number;
        /**
         * Predefined sets of fields to return.
         * - `DASHBOARD`: Returns `dashboard`.
         * - `POLICY`: Returns `policy`.
         *
         * Default: If `fieldset` is omitted from the request,  `id`, `price`, `free`, `name`, `limitPerCheckout`, `orderIndex`, `eventId`.
         */
        fieldset?: TicketDefinitionFieldset[];
        /** Event creator ID. */
        eventCreatorId?: string[];
        /**
         * Filter by ticket definition state.
         *
         * Supported values: `"VISIBLE"`, `"HIDDEN"`, `"FREE"`, `"PAID"`
         */
        state?: State[];
        /**
         * Sort order.
         *
         * Default: `"created"`:`"asc"`.
         *
         * See [Ticket Definitions Sort](/wix-events-v2/ticketdefinitions/ticket-definitions-sort) for more information.
         *
         *
         *
         *
         */
        sort?: string;
        /**
         * Ticket sale status.
         *
         * Supported values: `"SALE_SCHEDULED"`, `"SALE_STARTED"`, `"SALE_ENDED"`
         */
        saleStatus?: TicketSaleStatus[];
        /** Filter facets. */
        facet?: string[];
    }
    /**
     * Retrieves a ticket definition.
     * <!--
     * >**Note:** Only visitors with **Manage Orders** or **Manage Ticket Definitions** [permissions](https://support.wix.com/en/article/roles-permissions-accessing-roles-permissions) can get a ticket definition. You can override the permissions with the `wix-auth` [`elevate()`](wix-auth/elevate) function.
     * -->
     *
     * This function is not a universal function and runs only on the backend.
     * @param definitionId - Ticket definition ID.
     * @public
     * @documentationMaturity preview
     * @requiredField definitionId
     * @param options - Details for the ticket to retrieve.
     * @adminMethod
     */
    function getTicketDefinition(definitionId: string, options?: GetTicketDefinitionOptions): Promise<GetTicketDefinitionResponse>;
    interface GetTicketDefinitionOptions {
        /**
         * Predefined sets of fields to return.
         * - `DASHBOARD`: Returns `dashboard`.
         * - `POLICY`: Returns `policy`.
         *
         * Default: If `fieldset` is omitted from the request,  `id`, `price`, `free`, `name`, `limitPerCheckout`, `orderIndex`, `eventId`.
         */
        fieldset?: TicketDefinitionFieldset[];
    }
    /**
     * Creates a ticket definition (and enables ticket sales).
     * <!--
     * >**Note:** Only visitors with **Manage Ticket Definitions** [permissions](https://support.wix.com/en/article/roles-permissions-accessing-roles-permissions) can create a ticket definition. You can override the permissions with the `wix-auth` [`elevate()`](wix-auth/elevate) function.
     * -->
     *
     * This function is not a universal function and runs only on the backend.
     * @param eventId - Event ID.
     * @public
     * @documentationMaturity preview
     * @requiredField eventId
     * @requiredField options
     * @requiredField options.definition
     * @requiredField options.definition.name
     * @adminMethod
     */
    function createTicketDefinition(eventId: string, options: CreateTicketDefinitionOptions): Promise<CreateTicketDefinitionResponse>;
    interface CreateTicketDefinitionOptions {
        /** Ticket definition data. */
        definition: TicketDefinitionData;
    }
    /**
     * Updates a ticket definition.
     *
     * See [Partial Updates](/wix-events-v2/partial-updates) for more information.
     * <!--
     * >**Note:** Only visitors with **Manage Ticket Definitions** [permissions](https://support.wix.com/en/article/roles-permissions-accessing-roles-permissions) can update a ticket definition. You can override the permissions with the `wix-auth` [`elevate()`](wix-auth/elevate) function.
     * -->
     *
     * This function is not a universal function and runs only on the backend.
     * @param definitionId - Ticket definition ID.
     * @param eventId - Event ID.
     * @public
     * @documentationMaturity preview
     * @requiredField definitionId
     * @requiredField eventId
     * @requiredField options.definition.pricing
     * @requiredField options.fields
     * @param identifiers - Details of the ticket definition to update.
     * @param options - Ticket definition details to update.
     * @adminMethod
     */
    function updateTicketDefinition(definitionId: string, eventId: string, options?: UpdateTicketDefinitionOptions): Promise<UpdateTicketDefinitionResponse>;
    interface UpdateTicketDefinitionOptions {
        /** Ticket definition data. */
        definition?: TicketDefinitionData;
        /** Set of field paths, specifying which parts of ticket definition to update. */
        fields: string[];
    }
    /**
     * Deletes a ticket definition.
     *
     * Does not affect tickets that were already ordered.
     * <!--
     * >**Note:** Only visitors with **Manage Ticket Definitions** [permissions](https://support.wix.com/en/article/roles-permissions-accessing-roles-permissions) can delete a ticket definition. You can override the permissions with the `wix-auth` [`elevate()`](wix-auth/elevate) function.
     * -->
     *
     * This function is not a universal function and runs only on the backend.
     * @param eventId - Event ID.
     * @public
     * @documentationMaturity preview
     * @requiredField eventId
     * @param options - Details of tickets to delete.
     * @adminMethod
     */
    function deleteTicketDefinition(eventId: string, options?: DeleteTicketDefinitionOptions): Promise<void>;
    interface DeleteTicketDefinitionOptions extends DeleteTicketDefinitionRequestDeleteOneOf {
        /** Ticket definitions to delete. */
        byId?: ById;
        /** Whether to delete all event tickets. */
        all?: boolean;
    }
    /**
     * Changes the currency for all tickets per event.
     * <!--
     * >**Note:** Only visitors with **Manage Ticket Definitions** [permissions](https://support.wix.com/en/article/roles-permissions-accessing-roles-permissions) can change the currency for tickets. You can override the permissions with the `wix-auth` [`elevate()`](wix-auth/elevate) function.
     * -->
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     * @requiredField options.currency
     * @adminMethod
     */
    function changeCurrency(options?: ChangeCurrencyOptions): Promise<void>;
    interface ChangeCurrencyOptions {
        /** Event ID. */
        eventId?: string;
        /** Event currency, in 3-letter [ISO-4217 alphabetic](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format. */
        currency: string;
    }
    type eventsV1TicketDefinition_universal_d_TicketDefinition = TicketDefinition;
    type eventsV1TicketDefinition_universal_d_Money = Money;
    type eventsV1TicketDefinition_universal_d_Dashboard = Dashboard;
    type eventsV1TicketDefinition_universal_d_WixFeeConfig = WixFeeConfig;
    type eventsV1TicketDefinition_universal_d_FeeType = FeeType;
    const eventsV1TicketDefinition_universal_d_FeeType: typeof FeeType;
    type eventsV1TicketDefinition_universal_d_TicketSalePeriod = TicketSalePeriod;
    type eventsV1TicketDefinition_universal_d_TicketSaleStatus = TicketSaleStatus;
    const eventsV1TicketDefinition_universal_d_TicketSaleStatus: typeof TicketSaleStatus;
    type eventsV1TicketDefinition_universal_d_TicketDefinitionStateEnumState = TicketDefinitionStateEnumState;
    const eventsV1TicketDefinition_universal_d_TicketDefinitionStateEnumState: typeof TicketDefinitionStateEnumState;
    type eventsV1TicketDefinition_universal_d_TicketPricing = TicketPricing;
    type eventsV1TicketDefinition_universal_d_TicketPricingPriceOneOf = TicketPricingPriceOneOf;
    type eventsV1TicketDefinition_universal_d_PricingOptions = PricingOptions;
    type eventsV1TicketDefinition_universal_d_PricingOption = PricingOption;
    type eventsV1TicketDefinition_universal_d_Type = Type;
    const eventsV1TicketDefinition_universal_d_Type: typeof Type;
    type eventsV1TicketDefinition_universal_d_QueryTicketDefinitionsRequest = QueryTicketDefinitionsRequest;
    type eventsV1TicketDefinition_universal_d_TicketDefinitionFieldset = TicketDefinitionFieldset;
    const eventsV1TicketDefinition_universal_d_TicketDefinitionFieldset: typeof TicketDefinitionFieldset;
    type eventsV1TicketDefinition_universal_d_QueryTicketDefinitionsResponse = QueryTicketDefinitionsResponse;
    type eventsV1TicketDefinition_universal_d_FacetCounts = FacetCounts;
    type eventsV1TicketDefinition_universal_d_QueryTicketDefinitionsRequestV2 = QueryTicketDefinitionsRequestV2;
    type eventsV1TicketDefinition_universal_d_QueryV2 = QueryV2;
    type eventsV1TicketDefinition_universal_d_QueryV2PagingMethodOneOf = QueryV2PagingMethodOneOf;
    type eventsV1TicketDefinition_universal_d_Sorting = Sorting;
    type eventsV1TicketDefinition_universal_d_Paging = Paging;
    type eventsV1TicketDefinition_universal_d_CursorPaging = CursorPaging;
    type eventsV1TicketDefinition_universal_d_QueryTicketDefinitionsResponseV2 = QueryTicketDefinitionsResponseV2;
    type eventsV1TicketDefinition_universal_d_PagingMetadataV2 = PagingMetadataV2;
    type eventsV1TicketDefinition_universal_d_Cursors = Cursors;
    type eventsV1TicketDefinition_universal_d_ListTicketDefinitionsRequest = ListTicketDefinitionsRequest;
    type eventsV1TicketDefinition_universal_d_State = State;
    const eventsV1TicketDefinition_universal_d_State: typeof State;
    type eventsV1TicketDefinition_universal_d_ListTicketDefinitionsResponse = ListTicketDefinitionsResponse;
    type eventsV1TicketDefinition_universal_d_ResponseMetaData = ResponseMetaData;
    type eventsV1TicketDefinition_universal_d_GetTicketDefinitionRequest = GetTicketDefinitionRequest;
    type eventsV1TicketDefinition_universal_d_GetTicketDefinitionResponse = GetTicketDefinitionResponse;
    type eventsV1TicketDefinition_universal_d_CreateTicketDefinitionRequest = CreateTicketDefinitionRequest;
    type eventsV1TicketDefinition_universal_d_TicketDefinitionData = TicketDefinitionData;
    type eventsV1TicketDefinition_universal_d_CreateTicketDefinitionResponse = CreateTicketDefinitionResponse;
    type eventsV1TicketDefinition_universal_d_TicketDefinitionCreated = TicketDefinitionCreated;
    type eventsV1TicketDefinition_universal_d_OriginatedFrom = OriginatedFrom;
    type eventsV1TicketDefinition_universal_d_UpdateTicketDefinitionRequest = UpdateTicketDefinitionRequest;
    type eventsV1TicketDefinition_universal_d_UpdateTicketDefinitionResponse = UpdateTicketDefinitionResponse;
    type eventsV1TicketDefinition_universal_d_TicketDefinitionUpdated = TicketDefinitionUpdated;
    type eventsV1TicketDefinition_universal_d_DeleteTicketDefinitionRequest = DeleteTicketDefinitionRequest;
    type eventsV1TicketDefinition_universal_d_DeleteTicketDefinitionRequestDeleteOneOf = DeleteTicketDefinitionRequestDeleteOneOf;
    type eventsV1TicketDefinition_universal_d_ById = ById;
    type eventsV1TicketDefinition_universal_d_DeleteTicketDefinitionResponse = DeleteTicketDefinitionResponse;
    type eventsV1TicketDefinition_universal_d_TicketDefinitionDeleted = TicketDefinitionDeleted;
    type eventsV1TicketDefinition_universal_d_ChangeCurrencyRequest = ChangeCurrencyRequest;
    type eventsV1TicketDefinition_universal_d_ChangeCurrencyResponse = ChangeCurrencyResponse;
    const eventsV1TicketDefinition_universal_d_queryTicketDefinitions: typeof queryTicketDefinitions;
    type eventsV1TicketDefinition_universal_d_QueryTicketDefinitionsOptions = QueryTicketDefinitionsOptions;
    const eventsV1TicketDefinition_universal_d_queryTicketDefinitionsV2: typeof queryTicketDefinitionsV2;
    type eventsV1TicketDefinition_universal_d_QueryTicketDefinitionsV2Options = QueryTicketDefinitionsV2Options;
    const eventsV1TicketDefinition_universal_d_listTicketDefinitions: typeof listTicketDefinitions;
    type eventsV1TicketDefinition_universal_d_ListTicketDefinitionsOptions = ListTicketDefinitionsOptions;
    const eventsV1TicketDefinition_universal_d_getTicketDefinition: typeof getTicketDefinition;
    type eventsV1TicketDefinition_universal_d_GetTicketDefinitionOptions = GetTicketDefinitionOptions;
    const eventsV1TicketDefinition_universal_d_createTicketDefinition: typeof createTicketDefinition;
    type eventsV1TicketDefinition_universal_d_CreateTicketDefinitionOptions = CreateTicketDefinitionOptions;
    const eventsV1TicketDefinition_universal_d_updateTicketDefinition: typeof updateTicketDefinition;
    type eventsV1TicketDefinition_universal_d_UpdateTicketDefinitionOptions = UpdateTicketDefinitionOptions;
    const eventsV1TicketDefinition_universal_d_deleteTicketDefinition: typeof deleteTicketDefinition;
    type eventsV1TicketDefinition_universal_d_DeleteTicketDefinitionOptions = DeleteTicketDefinitionOptions;
    const eventsV1TicketDefinition_universal_d_changeCurrency: typeof changeCurrency;
    type eventsV1TicketDefinition_universal_d_ChangeCurrencyOptions = ChangeCurrencyOptions;
    namespace eventsV1TicketDefinition_universal_d {
        export { __debug$1 as __debug, eventsV1TicketDefinition_universal_d_TicketDefinition as TicketDefinition, eventsV1TicketDefinition_universal_d_Money as Money, eventsV1TicketDefinition_universal_d_Dashboard as Dashboard, eventsV1TicketDefinition_universal_d_WixFeeConfig as WixFeeConfig, eventsV1TicketDefinition_universal_d_FeeType as FeeType, eventsV1TicketDefinition_universal_d_TicketSalePeriod as TicketSalePeriod, eventsV1TicketDefinition_universal_d_TicketSaleStatus as TicketSaleStatus, eventsV1TicketDefinition_universal_d_TicketDefinitionStateEnumState as TicketDefinitionStateEnumState, eventsV1TicketDefinition_universal_d_TicketPricing as TicketPricing, eventsV1TicketDefinition_universal_d_TicketPricingPriceOneOf as TicketPricingPriceOneOf, eventsV1TicketDefinition_universal_d_PricingOptions as PricingOptions, eventsV1TicketDefinition_universal_d_PricingOption as PricingOption, eventsV1TicketDefinition_universal_d_Type as Type, eventsV1TicketDefinition_universal_d_QueryTicketDefinitionsRequest as QueryTicketDefinitionsRequest, eventsV1TicketDefinition_universal_d_TicketDefinitionFieldset as TicketDefinitionFieldset, eventsV1TicketDefinition_universal_d_QueryTicketDefinitionsResponse as QueryTicketDefinitionsResponse, eventsV1TicketDefinition_universal_d_FacetCounts as FacetCounts, eventsV1TicketDefinition_universal_d_QueryTicketDefinitionsRequestV2 as QueryTicketDefinitionsRequestV2, eventsV1TicketDefinition_universal_d_QueryV2 as QueryV2, eventsV1TicketDefinition_universal_d_QueryV2PagingMethodOneOf as QueryV2PagingMethodOneOf, eventsV1TicketDefinition_universal_d_Sorting as Sorting, SortOrder$1 as SortOrder, eventsV1TicketDefinition_universal_d_Paging as Paging, eventsV1TicketDefinition_universal_d_CursorPaging as CursorPaging, eventsV1TicketDefinition_universal_d_QueryTicketDefinitionsResponseV2 as QueryTicketDefinitionsResponseV2, eventsV1TicketDefinition_universal_d_PagingMetadataV2 as PagingMetadataV2, eventsV1TicketDefinition_universal_d_Cursors as Cursors, eventsV1TicketDefinition_universal_d_ListTicketDefinitionsRequest as ListTicketDefinitionsRequest, eventsV1TicketDefinition_universal_d_State as State, eventsV1TicketDefinition_universal_d_ListTicketDefinitionsResponse as ListTicketDefinitionsResponse, eventsV1TicketDefinition_universal_d_ResponseMetaData as ResponseMetaData, eventsV1TicketDefinition_universal_d_GetTicketDefinitionRequest as GetTicketDefinitionRequest, eventsV1TicketDefinition_universal_d_GetTicketDefinitionResponse as GetTicketDefinitionResponse, eventsV1TicketDefinition_universal_d_CreateTicketDefinitionRequest as CreateTicketDefinitionRequest, eventsV1TicketDefinition_universal_d_TicketDefinitionData as TicketDefinitionData, eventsV1TicketDefinition_universal_d_CreateTicketDefinitionResponse as CreateTicketDefinitionResponse, eventsV1TicketDefinition_universal_d_TicketDefinitionCreated as TicketDefinitionCreated, eventsV1TicketDefinition_universal_d_OriginatedFrom as OriginatedFrom, eventsV1TicketDefinition_universal_d_UpdateTicketDefinitionRequest as UpdateTicketDefinitionRequest, eventsV1TicketDefinition_universal_d_UpdateTicketDefinitionResponse as UpdateTicketDefinitionResponse, eventsV1TicketDefinition_universal_d_TicketDefinitionUpdated as TicketDefinitionUpdated, eventsV1TicketDefinition_universal_d_DeleteTicketDefinitionRequest as DeleteTicketDefinitionRequest, eventsV1TicketDefinition_universal_d_DeleteTicketDefinitionRequestDeleteOneOf as DeleteTicketDefinitionRequestDeleteOneOf, eventsV1TicketDefinition_universal_d_ById as ById, eventsV1TicketDefinition_universal_d_DeleteTicketDefinitionResponse as DeleteTicketDefinitionResponse, eventsV1TicketDefinition_universal_d_TicketDefinitionDeleted as TicketDefinitionDeleted, eventsV1TicketDefinition_universal_d_ChangeCurrencyRequest as ChangeCurrencyRequest, eventsV1TicketDefinition_universal_d_ChangeCurrencyResponse as ChangeCurrencyResponse, eventsV1TicketDefinition_universal_d_queryTicketDefinitions as queryTicketDefinitions, eventsV1TicketDefinition_universal_d_QueryTicketDefinitionsOptions as QueryTicketDefinitionsOptions, eventsV1TicketDefinition_universal_d_queryTicketDefinitionsV2 as queryTicketDefinitionsV2, eventsV1TicketDefinition_universal_d_QueryTicketDefinitionsV2Options as QueryTicketDefinitionsV2Options, eventsV1TicketDefinition_universal_d_listTicketDefinitions as listTicketDefinitions, eventsV1TicketDefinition_universal_d_ListTicketDefinitionsOptions as ListTicketDefinitionsOptions, eventsV1TicketDefinition_universal_d_getTicketDefinition as getTicketDefinition, eventsV1TicketDefinition_universal_d_GetTicketDefinitionOptions as GetTicketDefinitionOptions, eventsV1TicketDefinition_universal_d_createTicketDefinition as createTicketDefinition, eventsV1TicketDefinition_universal_d_CreateTicketDefinitionOptions as CreateTicketDefinitionOptions, eventsV1TicketDefinition_universal_d_updateTicketDefinition as updateTicketDefinition, eventsV1TicketDefinition_universal_d_UpdateTicketDefinitionOptions as UpdateTicketDefinitionOptions, eventsV1TicketDefinition_universal_d_deleteTicketDefinition as deleteTicketDefinition, eventsV1TicketDefinition_universal_d_DeleteTicketDefinitionOptions as DeleteTicketDefinitionOptions, eventsV1TicketDefinition_universal_d_changeCurrency as changeCurrency, eventsV1TicketDefinition_universal_d_ChangeCurrencyOptions as ChangeCurrencyOptions, };
    }
    const __debug: {
        verboseLogging: {
            on: () => boolean;
            off: () => boolean;
        };
    };
    interface Policy {
        /**
         * Policy ID.
         * @readonly
         */
        _id?: string | null;
        /**
         * Revision number, which increments by 1 each time the policy is updated. The existing revision must be used when updating a policy to prevent conflicting changes. You'll get an error if you try to use the previous revision.
         * @readonly
         */
        revision?: string | null;
        /**
         * Date and time when the policy was created.
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Date and time of the policy's latest update in.
         * @readonly
         */
        _updatedDate?: Date;
        /**
         * Policy name that is visible in the dashboard and checkout form.
         *
         * Min: 1 character
         *
         * Max: 40 characters
         */
        name?: string;
        /**
         * Policy body, usually containing various terms and conditions.
         *
         * Min: 1 character
         *
         * Max: 50000 characters.
         *
         * **Note**: You can format text using various HTML tags such as `<p>`, `<b>`, `<ul>`, etc.
         */
        body?: string;
        /** ID of the event to which the policy belongs. */
        eventId?: string;
    }
    interface CreatePolicyRequest {
        /** Policy info. */
        policy: Policy;
    }
    interface CreatePolicyResponse {
        /** Created policy. */
        policy?: Policy;
    }
    interface UpdatePolicyRequest {
        /** Policy to update. */
        policy: Policy;
        /**
         * Explicit list of fields to update.
         * @internal
         */
        mask?: string[];
    }
    interface UpdatePolicyResponse {
        /** The updated policy. */
        policy?: Policy;
    }
    interface UpdatePolicySortIndexRequest {
        /** Policy's ID */
        policyId?: string;
        /** The revision of the event policy. */
        revision?: string;
        /** The sort index of a policy to set. */
        sortIndex?: number;
    }
    interface UpdatePolicySortIndexResponse {
        /** The updated event policy. */
        policy?: Policy;
    }
    interface DeletePolicyRequest {
        /** ID of the policy to delete. */
        policyId: string;
    }
    interface DeletePolicyResponse {
    }
    interface QueryPoliciesRequest {
        /** Query options. See [API Query Langauge](https://dev.wix.com/api/rest/getting-started/api-query-language) for more details. */
        query: CommonQueryV2;
    }
    interface CommonQueryV2 extends CommonQueryV2PagingMethodOneOf {
        /** Pagination options. */
        paging?: CommonPaging;
        /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
        cursorPaging?: CommonCursorPaging;
        /** Filter object in the following format: <br/> `"filter" : { "fieldName1": "value1", "fieldName2":{"$operator":"value2"} }`. <br/> <br/> **Example:** <br/> `"filter" : { "id": "2224a9d1-79e6-4549-a5c5-bf7ce5aac1a5", "revision": {"$ne":"1"} }` <br/> <br/> See [supported fields and operators](https://dev.wix.com/api/rest/wix-events/policy-v2/filter-and-sort) for more information. */
        filter?: Record<string, any> | null;
        /** Sort object in the following format: <br/> `[{"fieldName":"sortField1"},{"fieldName":"sortField2","direction":"DESC"}]` <br/> <br/> **Example:** <br/> `[{"fieldName":"createdDate","direction":"DESC"}]` <br/> <br/> See [supported fields](https://dev.wix.com/api/rest/wix-events/policy-v2/filter-and-sort) for more information. */
        sort?: CommonSorting[];
    }
    /** @oneof */
    interface CommonQueryV2PagingMethodOneOf {
        /** Pagination options. */
        paging?: CommonPaging;
        /** Cursor token pointing to a page of results. Not used in the first request. Following requests use the cursor token and not `filter` or `sort`. */
        cursorPaging?: CommonCursorPaging;
    }
    interface CommonSorting {
        /** Name of the field to sort by. */
        fieldName?: string;
        /** Sort order (ASC/DESC). Defaults to ASC */
        order?: SortOrder;
    }
    enum SortOrder {
        ASC = "ASC",
        DESC = "DESC"
    }
    interface CommonPaging {
        /** Number of items to load per page. */
        limit?: number | null;
        /** Number of items to skip in the current sort order. */
        offset?: number | null;
    }
    interface CommonCursorPaging {
        /** Number of items to load per page. */
        limit?: number | null;
        /**
         * Pointer to the next or previous page in the list of results.
         * You can get the relevant cursor token
         * from the `pagingMetadata` object in the previous call's response.
         * Not relevant for the first request.
         */
        cursor?: string | null;
    }
    interface QueryPoliciesResponse {
        /** Event policies. */
        policies?: Policy[];
        /** Query result's metadata. */
        metadata?: CommonPagingMetadataV2;
    }
    interface CommonPagingMetadataV2 {
        /** Number of items returned in the response. */
        count?: number | null;
        /** Offset that was requested. */
        offset?: number | null;
        /** Total number of items that match the query. Returned if offset paging is used and the `tooManyToCount` flag is not set. */
        total?: number | null;
        /** Flag that indicates the server failed to calculate the `total` field. */
        tooManyToCount?: boolean | null;
        /** Cursors to navigate through the result pages using `next` and `prev`. Returned if cursor paging is used. */
        cursors?: CommonCursors;
    }
    interface CommonCursors {
        /** Cursor pointing to next page in the list of results. */
        next?: string | null;
        /** Cursor pointing to previous page in the list of results. */
        prev?: string | null;
    }
    interface ReorderEventPoliciesRequest extends ReorderEventPoliciesRequestReferencePolicyOneOf {
        /** Move the given `policyId` before the specified policy. */
        beforePolicyId?: string;
        /** Move the given `policyId` after the specified policy. */
        afterPolicyId?: string;
        /** Event ID. */
        eventId: string;
        /** Event policy ID. */
        policyId: string;
    }
    /** @oneof */
    interface ReorderEventPoliciesRequestReferencePolicyOneOf {
        /**   */
        beforePolicyId?: string;
        /** Move the given `policyId` after the specified policy. */
        afterPolicyId?: string;
    }
    interface ReorderEventPoliciesResponse {
        /** Ordered event policies. */
        policies?: Policy[];
    }
    interface GetPolicyRequest {
        /** Policy ID. */
        policyId: string;
    }
    interface GetPolicyResponse {
        /** The requested policy. */
        policy?: Policy;
    }
    interface EventCopied {
        /** Event created timestamp in ISO UTC format. */
        timestamp?: Date;
        /** Event ID. */
        eventId?: string;
        /** Event location. */
        location?: Location;
        /** Event schedule configuration. */
        scheduleConfig?: ScheduleConfig;
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
        fullAddress?: Address;
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
    interface Address extends AddressStreetOneOf {
        /** a break down of the street to number and street name */
        streetAddress?: StreetAddress;
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
        location?: AddressLocation;
    }
    /** @oneof */
    interface AddressStreetOneOf {
        /** a break down of the street to number and street name */
        streetAddress?: StreetAddress;
        /** Main address line (usually street and number) as free text */
        addressLine?: string | null;
    }
    interface StreetAddress {
        /** street number */
        number?: string;
        /** street name */
        name?: string;
        /** @internal */
        apt?: string;
    }
    interface AddressLocation {
        latitude?: number | null;
        longitude?: number | null;
    }
    interface Subdivision {
        /** subdivision short code */
        code?: string;
        /** subdivision full-name */
        name?: string;
        /** @internal */
        type?: SubdivisionType;
        /** @internal */
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
    interface Empty {
    }
    /**
     * Creates a policy.
     *
     *
     * <!--
     * >  Note: This function is restricted and only runs if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
     * -->
     *
     * The `createPolicy()` function returns a Promise that resolves to the newly-created policy.
     *
     * You can create up to 3 policies per event. If you try to create more than 3, you'll get the "Maximum number of policies for the event has been reached" error.
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     * @requiredField policy
     * @requiredField policy.body
     * @requiredField policy.eventId
     * @requiredField policy.name
     * @param policy - Policy info.
     * @adminMethod
     * @returns Created policy.
     */
    function createPolicy(policy: Policy): Promise<Policy>;
    /**
     * Updates a policy.
     *
     * <!--
     * > Note: This function is restricted and only runs if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
     * -->
     *
     * The `updatePolicy()` function returns a Promise that resolves to the newly-updated policy.
     *
     * Each time the policy is updated, `revision` increments by 1. The existing `revision` must be included when updating the policy. This ensures you're working with the latest policy and prevents unintended overwrites.
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     * @requiredField _id
     * @requiredField policy
     * @requiredField policy.body
     * @requiredField policy.eventId
     * @requiredField policy.name
     * @requiredField policy.revision
     * @param policy - Policy to update.
     * @param _id - Policy ID.
     * @adminMethod
     * @returns The updated policy.
     */
    function updatePolicy(_id: string | null, policy: UpdatePolicy, options?: UpdatePolicyOptions): Promise<Policy>;
    interface UpdatePolicy {
        /**
         * Policy ID.
         * @readonly
         */
        _id?: string | null;
        /**
         * Revision number, which increments by 1 each time the policy is updated. The existing revision must be used when updating a policy to prevent conflicting changes. You'll get an error if you try to use the previous revision.
         * @readonly
         */
        revision?: string | null;
        /**
         * Date policy was created.
         * @readonly
         */
        _createdDate?: Date;
        /**
         * Date and time of the policy's latest update in `yyyy-mm-ddThh:mm:sssZ` format.
         * @readonly
         */
        _updatedDate?: Date;
        /**
         * Policy name that is visible in the dashboard and checkout form.
         *
         * Min: 1 character
         *
         * Max: 40 characters
         */
        name?: string;
        /**
         * Policy body. Here you can enter various terms and conditions.
         *
         * Min: 1 character
         *
         * Max: 50000 characters
         *
         * **Note**: You can format text using various HTML tags such as `<p>`, `<b>`, `<ul>`, etc.
         */
        body?: string;
        /** ID of the event to which the policy belongs. */
        eventId?: string;
    }
    interface UpdatePolicyOptions {
        /**
         * Explicit list of fields to update.
         * @internal
         */
        mask?: string[];
    }
    /**
     * Permanently deletes a policy.
     *
     *
     * <!--
     * > Note: This function is restricted and only runs if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
     * -->
     *
     * The `deletePolicy()` function returns a Promise that resolves when the specified policy is deleted.
     *
     * Deleted policies are not returned by the `getPolicy()` or `queryPolicies()` functions.
     *
     * This function is not a universal function and runs only on the backend.
     * @public
     * @documentationMaturity preview
     * @requiredField policyId
     * @param options - Options for Delete Policy function.
     * @param policyId - ID of the policy to delete.
     * @adminMethod
     */
    function deletePolicy(policyId: string): Promise<void>;
    /**
     * Creates a query to retrieve a list of policies, given the provided paging and filter.
     *
     *
     * The `queryPolicies()` function builds a query to retrieve a list of policies and returns a [PoliciesQueryBuilder](https://www.wix.com/velo/reference/wix-events-v2/policies/policiesquerybuilder) object.
     *
     * The returned object contains the query definition which is typically used to run the query using the [`find()`](https://www.wix.com/velo/reference/wix-events-v2/policies/policiesquerybuilder/find) function.
     *
     * You can refine the query by chaining `PoliciesQueryBuilder` functions onto the query. `PoliciesQueryBuilder` functions enable you to sort, filter and control the results that `PoliciesQueryBuilder.find()` returns.
     *
     * The query runs with the following `PoliciesQueryBuilder` defaults that you can override:
     *
     * [`limit`](https://www.wix.com/velo/reference/wix-events-v2/policies/policiesquerybuilder/limit): `50`
     * [`descending`](https://www.wix.com/velo/reference/wix-events-v2/policies/policiesquerybuilder/descending): `_createdDate`
     *
     * The functions that are chained to `queryPolicies()` are applied in the order they are called. For example, if you sort on the `_createdDate` property in ascending order and then on the id property in descending order, the results are sorted by the created date and then, if there are multiple results with the same date, the items are sorted by the id.
     *
     * The table below shows which `PoliciesQueryBuilder` functions are supported for `queryPoliciesGuests()`. You can only use one filter function for each property. If a property is used in more than one filter, only the first filter will work.
     * @public
     * @documentationMaturity preview
     */
    function queryPolicies(): PoliciesQueryBuilder;
    interface QueryCursorResult {
        cursors: CommonCursors;
        hasNext: () => boolean;
        hasPrev: () => boolean;
        length: number;
        pageSize: number;
    }
    interface PoliciesQueryResult extends QueryCursorResult {
        items: Policy[];
        query: PoliciesQueryBuilder;
        next: () => Promise<PoliciesQueryResult>;
        prev: () => Promise<PoliciesQueryResult>;
    }
    interface PoliciesQueryBuilder {
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        eq: (propertyName: "_id" | "revision" | "_createdDate" | "_updatedDate" | "name" | "body" | "eventId", value: any) => PoliciesQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        ne: (propertyName: "_id" | "revision" | "_createdDate" | "_updatedDate" | "name" | "body" | "eventId", value: any) => PoliciesQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        ge: (propertyName: "revision", value: any) => PoliciesQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        gt: (propertyName: "revision" | "_createdDate" | "_updatedDate", value: any) => PoliciesQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        le: (propertyName: "revision" | "_createdDate" | "_updatedDate", value: any) => PoliciesQueryBuilder;
        /** @param propertyName - Property whose value is compared with `value`.
         * @param value - Value to compare against.
         * @documentationMaturity preview
         */
        lt: (propertyName: "revision" | "_createdDate" | "_updatedDate", value: any) => PoliciesQueryBuilder;
        /** @documentationMaturity preview */
        in: (propertyName: "_id" | "revision" | "_createdDate" | "_updatedDate" | "name" | "body" | "eventId", value: any) => PoliciesQueryBuilder;
        /** @documentationMaturity preview */
        exists: (propertyName: "_id" | "revision" | "_createdDate" | "_updatedDate" | "name" | "body" | "eventId", value: boolean) => PoliciesQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        ascending: (...propertyNames: Array<"_id" | "revision" | "_createdDate" | "_updatedDate" | "name" | "body" | "eventId">) => PoliciesQueryBuilder;
        /** @param propertyNames - Properties used in the sort. To sort by multiple properties, pass properties as additional arguments.
         * @documentationMaturity preview
         */
        descending: (...propertyNames: Array<"_id" | "revision" | "_createdDate" | "_updatedDate" | "name" | "body" | "eventId">) => PoliciesQueryBuilder;
        /** @param limit - Number of items to return, which is also the `pageSize` of the results object.
         * @documentationMaturity preview
         */
        limit: (limit: number) => PoliciesQueryBuilder;
        /** @param cursor - A pointer to specific record
         * @documentationMaturity preview
         */
        skipTo: (cursor: string) => PoliciesQueryBuilder;
        /** @documentationMaturity preview */
        find: () => Promise<PoliciesQueryResult>;
    }
    /**
     * Changes policy order in an event dashboard and agreement checkbox on the checkout form.
     * For example, if we have 3 policies in the list, after using this function the 3rd policy will become the 1st, and other policies will move by 1 position. By default, the policies are arranged by the created date in descending order.
     *
     * >  **Note**: it is possible to use both `beforePolicyId` and `afterPolicyId` at the same time but only the last one defined will be executed.
     *
     * <!--
     * >  Note: This function is restricted and only runs if you elevate permissions using the [wix-auth.elevate()](https://www.wix.com/velo/reference/wix-auth/elevate) function.
     * -->
     *
     * The `reorderEventPolicies()` function returns a Promise that resolves to the newly-reordered policy.
     *
     * This function is not a universal function and runs only on the backend.
     * @param policyId - Event policy ID.
     * @param eventId - Event ID.
     * @public
     * @documentationMaturity preview
     * @requiredField eventId
     * @requiredField policyId
     * @param options - Options for Reorder Event Policies function.
     * @adminMethod
     */
    function reorderEventPolicies(policyId: string, eventId: string, options?: ReorderEventPoliciesOptions): Promise<ReorderEventPoliciesResponse>;
    interface ReorderEventPoliciesOptions extends ReorderEventPoliciesRequestReferencePolicyOneOf {
        /** Move the given `policyId` before the specified policy. */
        beforePolicyId?: string;
        /** Move the given `policyId` after the specified policy. */
        afterPolicyId?: string;
    }
    /**
     * Retrieves a policy by ID.
     *
     *
     * The `getPolicy()` function returns a Promise that resolves to a policy whose ID matches the given ID.
     * @public
     * @documentationMaturity preview
     * @requiredField policyId
     * @param policyId - Policy ID.
     * @returns The requested policy.
     */
    function getPolicy(policyId: string): Promise<Policy>;
    const eventsV2Policy_universal_d___debug: typeof __debug;
    type eventsV2Policy_universal_d_Policy = Policy;
    type eventsV2Policy_universal_d_CreatePolicyRequest = CreatePolicyRequest;
    type eventsV2Policy_universal_d_CreatePolicyResponse = CreatePolicyResponse;
    type eventsV2Policy_universal_d_UpdatePolicyRequest = UpdatePolicyRequest;
    type eventsV2Policy_universal_d_UpdatePolicyResponse = UpdatePolicyResponse;
    type eventsV2Policy_universal_d_UpdatePolicySortIndexRequest = UpdatePolicySortIndexRequest;
    type eventsV2Policy_universal_d_UpdatePolicySortIndexResponse = UpdatePolicySortIndexResponse;
    type eventsV2Policy_universal_d_DeletePolicyRequest = DeletePolicyRequest;
    type eventsV2Policy_universal_d_DeletePolicyResponse = DeletePolicyResponse;
    type eventsV2Policy_universal_d_QueryPoliciesRequest = QueryPoliciesRequest;
    type eventsV2Policy_universal_d_CommonQueryV2 = CommonQueryV2;
    type eventsV2Policy_universal_d_CommonQueryV2PagingMethodOneOf = CommonQueryV2PagingMethodOneOf;
    type eventsV2Policy_universal_d_CommonSorting = CommonSorting;
    type eventsV2Policy_universal_d_SortOrder = SortOrder;
    const eventsV2Policy_universal_d_SortOrder: typeof SortOrder;
    type eventsV2Policy_universal_d_CommonPaging = CommonPaging;
    type eventsV2Policy_universal_d_CommonCursorPaging = CommonCursorPaging;
    type eventsV2Policy_universal_d_QueryPoliciesResponse = QueryPoliciesResponse;
    type eventsV2Policy_universal_d_CommonPagingMetadataV2 = CommonPagingMetadataV2;
    type eventsV2Policy_universal_d_CommonCursors = CommonCursors;
    type eventsV2Policy_universal_d_ReorderEventPoliciesRequest = ReorderEventPoliciesRequest;
    type eventsV2Policy_universal_d_ReorderEventPoliciesRequestReferencePolicyOneOf = ReorderEventPoliciesRequestReferencePolicyOneOf;
    type eventsV2Policy_universal_d_ReorderEventPoliciesResponse = ReorderEventPoliciesResponse;
    type eventsV2Policy_universal_d_GetPolicyRequest = GetPolicyRequest;
    type eventsV2Policy_universal_d_GetPolicyResponse = GetPolicyResponse;
    type eventsV2Policy_universal_d_EventCopied = EventCopied;
    type eventsV2Policy_universal_d_Location = Location;
    type eventsV2Policy_universal_d_MapCoordinates = MapCoordinates;
    type eventsV2Policy_universal_d_LocationType = LocationType;
    const eventsV2Policy_universal_d_LocationType: typeof LocationType;
    type eventsV2Policy_universal_d_Address = Address;
    type eventsV2Policy_universal_d_AddressStreetOneOf = AddressStreetOneOf;
    type eventsV2Policy_universal_d_StreetAddress = StreetAddress;
    type eventsV2Policy_universal_d_AddressLocation = AddressLocation;
    type eventsV2Policy_universal_d_Subdivision = Subdivision;
    type eventsV2Policy_universal_d_SubdivisionType = SubdivisionType;
    const eventsV2Policy_universal_d_SubdivisionType: typeof SubdivisionType;
    type eventsV2Policy_universal_d_ScheduleConfig = ScheduleConfig;
    type eventsV2Policy_universal_d_Recurrences = Recurrences;
    type eventsV2Policy_universal_d_Occurrence = Occurrence;
    type eventsV2Policy_universal_d_Status = Status;
    const eventsV2Policy_universal_d_Status: typeof Status;
    type eventsV2Policy_universal_d_EventStatus = EventStatus;
    const eventsV2Policy_universal_d_EventStatus: typeof EventStatus;
    type eventsV2Policy_universal_d_Empty = Empty;
    const eventsV2Policy_universal_d_createPolicy: typeof createPolicy;
    const eventsV2Policy_universal_d_updatePolicy: typeof updatePolicy;
    type eventsV2Policy_universal_d_UpdatePolicy = UpdatePolicy;
    type eventsV2Policy_universal_d_UpdatePolicyOptions = UpdatePolicyOptions;
    const eventsV2Policy_universal_d_deletePolicy: typeof deletePolicy;
    const eventsV2Policy_universal_d_queryPolicies: typeof queryPolicies;
    type eventsV2Policy_universal_d_PoliciesQueryResult = PoliciesQueryResult;
    type eventsV2Policy_universal_d_PoliciesQueryBuilder = PoliciesQueryBuilder;
    const eventsV2Policy_universal_d_reorderEventPolicies: typeof reorderEventPolicies;
    type eventsV2Policy_universal_d_ReorderEventPoliciesOptions = ReorderEventPoliciesOptions;
    const eventsV2Policy_universal_d_getPolicy: typeof getPolicy;
    namespace eventsV2Policy_universal_d {
        export { eventsV2Policy_universal_d___debug as __debug, eventsV2Policy_universal_d_Policy as Policy, eventsV2Policy_universal_d_CreatePolicyRequest as CreatePolicyRequest, eventsV2Policy_universal_d_CreatePolicyResponse as CreatePolicyResponse, eventsV2Policy_universal_d_UpdatePolicyRequest as UpdatePolicyRequest, eventsV2Policy_universal_d_UpdatePolicyResponse as UpdatePolicyResponse, eventsV2Policy_universal_d_UpdatePolicySortIndexRequest as UpdatePolicySortIndexRequest, eventsV2Policy_universal_d_UpdatePolicySortIndexResponse as UpdatePolicySortIndexResponse, eventsV2Policy_universal_d_DeletePolicyRequest as DeletePolicyRequest, eventsV2Policy_universal_d_DeletePolicyResponse as DeletePolicyResponse, eventsV2Policy_universal_d_QueryPoliciesRequest as QueryPoliciesRequest, eventsV2Policy_universal_d_CommonQueryV2 as CommonQueryV2, eventsV2Policy_universal_d_CommonQueryV2PagingMethodOneOf as CommonQueryV2PagingMethodOneOf, eventsV2Policy_universal_d_CommonSorting as CommonSorting, eventsV2Policy_universal_d_SortOrder as SortOrder, eventsV2Policy_universal_d_CommonPaging as CommonPaging, eventsV2Policy_universal_d_CommonCursorPaging as CommonCursorPaging, eventsV2Policy_universal_d_QueryPoliciesResponse as QueryPoliciesResponse, eventsV2Policy_universal_d_CommonPagingMetadataV2 as CommonPagingMetadataV2, eventsV2Policy_universal_d_CommonCursors as CommonCursors, eventsV2Policy_universal_d_ReorderEventPoliciesRequest as ReorderEventPoliciesRequest, eventsV2Policy_universal_d_ReorderEventPoliciesRequestReferencePolicyOneOf as ReorderEventPoliciesRequestReferencePolicyOneOf, eventsV2Policy_universal_d_ReorderEventPoliciesResponse as ReorderEventPoliciesResponse, eventsV2Policy_universal_d_GetPolicyRequest as GetPolicyRequest, eventsV2Policy_universal_d_GetPolicyResponse as GetPolicyResponse, eventsV2Policy_universal_d_EventCopied as EventCopied, eventsV2Policy_universal_d_Location as Location, eventsV2Policy_universal_d_MapCoordinates as MapCoordinates, eventsV2Policy_universal_d_LocationType as LocationType, eventsV2Policy_universal_d_Address as Address, eventsV2Policy_universal_d_AddressStreetOneOf as AddressStreetOneOf, eventsV2Policy_universal_d_StreetAddress as StreetAddress, eventsV2Policy_universal_d_AddressLocation as AddressLocation, eventsV2Policy_universal_d_Subdivision as Subdivision, eventsV2Policy_universal_d_SubdivisionType as SubdivisionType, eventsV2Policy_universal_d_ScheduleConfig as ScheduleConfig, eventsV2Policy_universal_d_Recurrences as Recurrences, eventsV2Policy_universal_d_Occurrence as Occurrence, eventsV2Policy_universal_d_Status as Status, eventsV2Policy_universal_d_EventStatus as EventStatus, eventsV2Policy_universal_d_Empty as Empty, eventsV2Policy_universal_d_createPolicy as createPolicy, eventsV2Policy_universal_d_updatePolicy as updatePolicy, eventsV2Policy_universal_d_UpdatePolicy as UpdatePolicy, eventsV2Policy_universal_d_UpdatePolicyOptions as UpdatePolicyOptions, eventsV2Policy_universal_d_deletePolicy as deletePolicy, eventsV2Policy_universal_d_queryPolicies as queryPolicies, eventsV2Policy_universal_d_PoliciesQueryResult as PoliciesQueryResult, eventsV2Policy_universal_d_PoliciesQueryBuilder as PoliciesQueryBuilder, eventsV2Policy_universal_d_reorderEventPolicies as reorderEventPolicies, eventsV2Policy_universal_d_ReorderEventPoliciesOptions as ReorderEventPoliciesOptions, eventsV2Policy_universal_d_getPolicy as getPolicy, };
    }
    export { eventsV1Category_universal_d as categories, eventsV1OrderCheckout_universal_d as checkout, eventsEventsV3Event_universal_d as events, eventsV1Form_universal_d as forms, eventsGuestsV1Guest_universal_d as guests, eventsV1OrderOrders_universal_d as orders, eventsV2Policy_universal_d as policies, eventsV1Rsvp_universal_d as rsvp, eventsScheduleV1ScheduleItemSchedule_universal_d as schedule, eventsScheduleV1ScheduleItemScheduleBookmarks_universal_d as scheduleBookmarks, eventsV1TicketDefinition_universal_d as ticketDefinitions, eventsV1Ticket_universal_d as tickets, eventsV1Event_universal_d as wixEvents };
}

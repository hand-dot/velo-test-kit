/**
 * The wix-dashboard module contains functionality for interacting with your site's dashboard in the code for dashboard pages.
 * 	[Read more](https://www.wix.com/corvid/reference/wix-dashboard.html#)
 */
declare module 'wix-dashboard' {
    /**
     * Gets the full URL for a dashboard page.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-dashboard.html#getPageUrl)
     */
    function getPageUrl(destination: Destination): Promise<string>;
    /**
     * Navigates the user to another page in the dashboard.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-dashboard.html#navigate)
     */
    function navigate(destination: Destination): void;
    /**
     * Defines a callback function that receives changes to the state of a dashboard page's environment.
     * 	[Read more](https://www.wix.com/corvid/reference/wix-dashboard.html#observeState)
     */
    function observeState(observer: observeStateCallback): void;
    /**
     * Displays a toast notification at the top of a dashboard page.
     *
     * ![Toast notification](/images/toast_example.png "Toast notification")
     * 	[Read more](https://www.wix.com/corvid/reference/wix-dashboard.html#showToast)
     */
    function showToast(config: ToastConfig): ToastReturn;
    /**
     * Destination Object
     */
    type Destination = {
        /**
         * ID of the page to link to. Use the [Dashboard Page IDs](#dashboard-page-ids) table to find the appropriate ID.
         */
        pageId: string;
        /**
         * URL segment to append to the base URL of the selected page. Can include path segments, a query string, and a fragment identifier.
         */
        relativeUrl?: string;
    };
    type EnvironmentState = {
        /**
         * User's locale.
         */
        locale: string;
        /**
         * Information about the currently rendered page location.
         */
        pageLocation: PageLocation;
    };
    /**
     * PageLocation Object
     */
    type PageLocation = {
        /**
         * ID of the rendered page.
         */
        pageId: string;
        /**
         * Any parts of the current URL path appended to the page's full URL.
         */
        pathname: string;
        /**
         * The current URL's query string.
         */
        search?: string;
        /**
         * The current URL's fragment.
         */
        hash?: string;
    };
    /**
     * ToastAction Object
     */
    type ToastAction = {
        /**
         * Text that appears in the call-to-action.
         */
        text: string;
        /**
         * The type of call-to-action.
         *
         * Options: `"button"`, `"link"`
         *
         * Default: `"button"`
         */
        uiType?: string;
        /**
         * Whether to remove the toast after the call-to-action is clicked.
         *
         * Default: `true`
         */
        removeToastOnClick?: boolean;
        /**
         * Callback function to run after the call-to-action is clicked.
         */
        onClick: Function;
    };
    /**
     * ToastConfig Object
     */
    type ToastConfig = {
        /**
         * Text that appears in the toast.
         */
        message: string;
        /**
         * Whether the toast removes itself.
         *
         * Options:
         * - `"normal"`: The toast removes itself after 6 seconds.
         * - `"none"`: The toast doesn't remove itself.
         *
         * Default: `"normal"`
         */
        timeout?: string;
        /**
         * Toast color and message type.
         *
         * Options:
         * - `"standard"`: Blue toast.
         * - `"success"`: Green toast.
         * - `"warning"`: Yellow warning toast.
         * - `"error"`: Red error toast.
         *
         * Default: `"standard"`
         */
        type?: string;
        /**
         * Priority of the toast. If several toasts are triggered at the same time, they're displayed in the order of their priority levels.
         *
         * Options: `"low"`, `"normal"`, `"high"`
         *
         * Default: `"normal"`
         */
        priority?: string;
        /**
         * Object representing a call-to-action that's displayed in the toast.
         */
        action?: ToastAction;
        /**
         * Callback function to run when the toast is closed by clicking its close button.
         */
        onCloseClick?: Function;
        /**
         * Callback function to run when the toast is seen by the user.
         */
        onToastSeen?: Function;
    };
    /**
     * ShowToast Return Object
     */
    type ToastReturn = {
        /**
         * Removes the displayed toast.
         */
        remove: Function;
    };
    type observeStateCallback = (pageParams: any, environmentState: EnvironmentState) => void;
}

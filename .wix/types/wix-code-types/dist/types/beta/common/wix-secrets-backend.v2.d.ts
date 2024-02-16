declare module "wix-secrets-backend.v2" {
  const __debug: {
      verboseLogging: {
          on: () => boolean;
          off: () => boolean;
      };
  };
  interface Secret {
      /**
       * The secret's unique ID.
       * @readonly
       */
      _id?: string | null;
      /**
       * A unique, meaningful name used for retrieving the secret at runtime with the [`getSecretValue()`](#getsecretvalue) function. You can use alphanumeric characters and the following special characters: `_+=-@#$`. Spaces are not supported.
       *
       */
      name?: string | null;
      /** An optional text describing the secret's purpose or any other notes about it. */
      description?: string | null;
      /**
       * @internal
       * @internal */
      value?: string | null;
      /**
       * The date and time the secreted was created.
       * @readonly
       */
      _createdDate?: Date;
      /**
       * The date and time the secret was last updated.
       * @readonly
       */
      _updatedDate?: Date;
  }
  interface GetSecretValueRequest {
      /** The name of the secret to get the value of. */
      name: string;
  }
  interface GetSecretValueResponse {
      /**
       * The plaintext, unencrypted value of the secret.
       *
       */
      value?: string;
  }
  interface ListSecretInfoRequest {
  }
  interface ListSecretInfoResponse {
      /** Object containing information for each secret.  */
      secrets?: Secret[];
  }
  interface CreateSecretRequest {
      /** The object including the fields of a new secret.  */
      secret: Secret;
  }
  interface CreateSecretResponse {
      /**
       * The globally-unique ID assigned to the secret.
       *
       */
      _id?: string;
  }
  interface DeleteSecretRequest {
      /**
       * The unique ID of the secret to be deleted.
       *
       */
      _id: string;
  }
  interface DeleteSecretResponse {
  }
  interface UpdateSecretRequest {
      /** The unique ID of the secret to be updated. */
      _id: string;
      /** The secret fields to update. */
      secret: Secret;
  }
  interface UpdateSecretResponse {
  }
  /**
   * Retrieves the secret value specified by the secret name.
   *
   * The `getSecretValue()` function returns a Promise that resolves to the value of the secret with the specified given name.
   *
   * >**Note:**
   * > Only use a secret's value in the backend code. Returning the secret value in the frontend is a security risk.
   * @public
   * @documentationMaturity preview
   * @requiredField name
   * @param name - The name of the secret to get the value of.
   * @adminMethod
   * @returns Fulfilled - The value of the secret. Rejected - Error message.
   */
  function getSecretValue(name: string): Promise<GetSecretValueResponse>;
  /**
   * Retrieves a list of objects containing information about all secrets.
   *
   * The `listSecretInfo()` function returns a Promise that resolves to a list containing information about all secrets stored on your site.
   *
   * > **Note:**
   * > - The secret's value does not get returned for security reasons. To retrieve a secret's value, use the [`getSecretValue()`](#getSecretValue) function.
   * @public
   * @documentationMaturity preview
   * @adminMethod
   * @returns Fulfilled - A list of objects containing information about your site's secrets. Rejected - Error message.
   */
  function listSecretInfo(): Promise<ListSecretInfoResponse>;
  /**
   * Creates a new secret.
   *
   * The `createSecret()` function returns a Promise that resolves secret ID when the secret is created.
   *
   * >**Notes:**
   * > - The secret's name cannot start with `'wix'` or be identical to an existing secret's name.
   * > - Don't leave private keys in your code. Leaving them in your code is a security risk. Make sure to delete the keys from the code after running `createSecret()`.
   * @public
   * @documentationMaturity preview
   * @requiredField secret
   * @requiredField secret.name
   * @requiredField secret.value
   * @param secret - Fields of a new secret.
   * @adminMethod
   * @returns Fulfilled - The ID of the created secret.
   * Rejected - Error message.
   */
  function createSecret(secret: Secret): Promise<string>;
  /**
   * Deletes an existing secret by ID.
   *
   * The `deleteSecret()` function returns a Promise that resolves when the secret is deleted. You can retrieve the secret `_id` using the [`listSecretInfo()`](#listsecretinfo) function.
   *
   * >**Note:**
   * > Deleting a secret is irreversible and will break all code using the secret.
   *
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @param _id - The unique ID of the secret to be deleted.
   * @adminMethod
   * @returns Fulfilled - When the secret is successfully deleted. Rejected - Error message.
   */
  function deleteSecret(_id: string): Promise<void>;
  /**
   * Updates all the fields of an existing secret at once
   * @param _id - The unique ID of the secret to be updated.
   * @param secret - The secret fields to update.
   * @internal
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField secret
   * @requiredField secret.name
   * @requiredField secret.value
   * @adminMethod
   * @returns Fulfilled - When the secret is updated.
   * Rejected - Error message.
   */
  function internalUpdateSecret(_id: string, secret: Secret): Promise<void>;
  /**
   * Updates the specified fields of an existing secret by ID.
   *
   *
   * The `updateSecret()` function returns a Promise that resolves when the secret is successfully updated. You can update one or more fields. Only fields passed in the `secret` object will be updated. All other properties will remain unchanged.
   *
   * You can retrieve the `_id` parameter from the [`listSecretInfo()`](#listsecretinfo) function. The secret `_id` is different from the secret `name` used by the [`getSecretValue()`](#getsecretvalue) function.
   *
   * > **Notes:**
   * > - Changing a secret's name or value will break all code using the secret.
   * > - You can't rename the secret with a name of an existing secret.
   * > - Don't leave private keys in your code! Leaving them in is a security risk. Make sure to delete the keys from the code after running `updateSecret()`.
   * @param _id - The unique ID of the secret to be updated.
   * @param secret - The secret fields to update.
   * @public
   * @documentationMaturity preview
   * @requiredField _id
   * @requiredField secret
   * @adminMethod
   * @returns Fulfilled - When the secret is updated.
   * Rejected - Error message.
   */
  function updateSecret(_id: string, secret: Secret): Promise<void>;
  
  const veloSecretsVaultV1Secret_universal_d___debug: typeof __debug;
  type veloSecretsVaultV1Secret_universal_d_Secret = Secret;
  type veloSecretsVaultV1Secret_universal_d_GetSecretValueRequest = GetSecretValueRequest;
  type veloSecretsVaultV1Secret_universal_d_GetSecretValueResponse = GetSecretValueResponse;
  type veloSecretsVaultV1Secret_universal_d_ListSecretInfoRequest = ListSecretInfoRequest;
  type veloSecretsVaultV1Secret_universal_d_ListSecretInfoResponse = ListSecretInfoResponse;
  type veloSecretsVaultV1Secret_universal_d_CreateSecretRequest = CreateSecretRequest;
  type veloSecretsVaultV1Secret_universal_d_CreateSecretResponse = CreateSecretResponse;
  type veloSecretsVaultV1Secret_universal_d_DeleteSecretRequest = DeleteSecretRequest;
  type veloSecretsVaultV1Secret_universal_d_DeleteSecretResponse = DeleteSecretResponse;
  type veloSecretsVaultV1Secret_universal_d_UpdateSecretRequest = UpdateSecretRequest;
  type veloSecretsVaultV1Secret_universal_d_UpdateSecretResponse = UpdateSecretResponse;
  const veloSecretsVaultV1Secret_universal_d_getSecretValue: typeof getSecretValue;
  const veloSecretsVaultV1Secret_universal_d_listSecretInfo: typeof listSecretInfo;
  const veloSecretsVaultV1Secret_universal_d_createSecret: typeof createSecret;
  const veloSecretsVaultV1Secret_universal_d_deleteSecret: typeof deleteSecret;
  const veloSecretsVaultV1Secret_universal_d_internalUpdateSecret: typeof internalUpdateSecret;
  const veloSecretsVaultV1Secret_universal_d_updateSecret: typeof updateSecret;
  namespace veloSecretsVaultV1Secret_universal_d {
    export {
      veloSecretsVaultV1Secret_universal_d___debug as __debug,
      veloSecretsVaultV1Secret_universal_d_Secret as Secret,
      veloSecretsVaultV1Secret_universal_d_GetSecretValueRequest as GetSecretValueRequest,
      veloSecretsVaultV1Secret_universal_d_GetSecretValueResponse as GetSecretValueResponse,
      veloSecretsVaultV1Secret_universal_d_ListSecretInfoRequest as ListSecretInfoRequest,
      veloSecretsVaultV1Secret_universal_d_ListSecretInfoResponse as ListSecretInfoResponse,
      veloSecretsVaultV1Secret_universal_d_CreateSecretRequest as CreateSecretRequest,
      veloSecretsVaultV1Secret_universal_d_CreateSecretResponse as CreateSecretResponse,
      veloSecretsVaultV1Secret_universal_d_DeleteSecretRequest as DeleteSecretRequest,
      veloSecretsVaultV1Secret_universal_d_DeleteSecretResponse as DeleteSecretResponse,
      veloSecretsVaultV1Secret_universal_d_UpdateSecretRequest as UpdateSecretRequest,
      veloSecretsVaultV1Secret_universal_d_UpdateSecretResponse as UpdateSecretResponse,
      veloSecretsVaultV1Secret_universal_d_getSecretValue as getSecretValue,
      veloSecretsVaultV1Secret_universal_d_listSecretInfo as listSecretInfo,
      veloSecretsVaultV1Secret_universal_d_createSecret as createSecret,
      veloSecretsVaultV1Secret_universal_d_deleteSecret as deleteSecret,
      veloSecretsVaultV1Secret_universal_d_internalUpdateSecret as internalUpdateSecret,
      veloSecretsVaultV1Secret_universal_d_updateSecret as updateSecret,
    };
  }
  
  export { veloSecretsVaultV1Secret_universal_d as secrets };
}

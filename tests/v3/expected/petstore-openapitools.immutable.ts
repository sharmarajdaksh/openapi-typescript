/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  readonly "/pet": {
    readonly put: operations["updatePet"];
    readonly post: operations["addPet"];
  };
  readonly "/pet/findByStatus": {
    /** Multiple status values can be provided with comma separated strings */
    readonly get: operations["findPetsByStatus"];
  };
  readonly "/pet/findByTags": {
    /** Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing. */
    readonly get: operations["findPetsByTags"];
  };
  readonly "/pet/{petId}": {
    /** Returns a single pet */
    readonly get: operations["getPetById"];
    readonly post: operations["updatePetWithForm"];
    readonly delete: operations["deletePet"];
  };
  readonly "/pet/{petId}/uploadImage": {
    readonly post: operations["uploadFile"];
  };
  readonly "/store/inventory": {
    /** Returns a map of status codes to quantities */
    readonly get: operations["getInventory"];
  };
  readonly "/store/order": {
    readonly post: operations["placeOrder"];
  };
  readonly "/store/order/{orderId}": {
    /** For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions */
    readonly get: operations["getOrderById"];
    /** For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors */
    readonly delete: operations["deleteOrder"];
  };
  readonly "/user": {
    /** This can only be done by the logged in user. */
    readonly post: operations["createUser"];
  };
  readonly "/user/createWithArray": {
    readonly post: operations["createUsersWithArrayInput"];
  };
  readonly "/user/createWithList": {
    readonly post: operations["createUsersWithListInput"];
  };
  readonly "/user/login": {
    readonly get: operations["loginUser"];
  };
  readonly "/user/logout": {
    readonly get: operations["logoutUser"];
  };
  readonly "/user/{username}": {
    readonly get: operations["getUserByName"];
    /** This can only be done by the logged in user. */
    readonly put: operations["updateUser"];
    /** This can only be done by the logged in user. */
    readonly delete: operations["deleteUser"];
  };
}

export interface components {
  readonly schemas: {
    /** An order for a pets from the pet store */
    readonly Order: {
      readonly id?: number;
      readonly petId?: number;
      readonly quantity?: number;
      readonly shipDate?: string;
      /** Order Status */
      readonly status?: "placed" | "approved" | "delivered";
      readonly complete?: boolean;
    } & { readonly [key: string]: any };
    /** A category for a pet */
    readonly Category: {
      readonly id?: number;
      readonly name?: string;
    } & { readonly [key: string]: any };
    /** A User who is purchasing from the pet store */
    readonly User: {
      readonly id?: number;
      readonly username?: string;
      readonly firstName?: string;
      readonly lastName?: string;
      readonly email?: string;
      readonly password?: string;
      readonly phone?: string;
      /** User Status */
      readonly userStatus?: number;
    } & { readonly [key: string]: any };
    /** A tag for a pet */
    readonly Tag: {
      readonly id?: number;
      readonly name?: string;
    } & { readonly [key: string]: any };
    /** A pet for sale in the pet store */
    readonly Pet: {
      readonly id?: number;
      readonly category?: components["schemas"]["Category"];
      readonly name: string;
      readonly photoUrls: readonly string[];
      readonly tags?: readonly components["schemas"]["Tag"][];
      /** pet status in the store */
      readonly status?: "available" | "pending" | "sold";
    } & { readonly [key: string]: any };
    /** Describes the result of uploading an image resource */
    readonly ApiResponse: {
      readonly code?: number;
      readonly type?: string;
      readonly message?: string;
    } & { readonly [key: string]: any };
  };
  readonly requestBodies: {
    /** List of user object */
    UserArray: {
      readonly content: {
        readonly "application/json": readonly components["schemas"]["User"][];
      };
    };
    /** Pet object that needs to be added to the store */
    Pet: {
      readonly content: {
        readonly "application/json": components["schemas"]["Pet"];
        readonly "application/xml": components["schemas"]["Pet"];
      };
    };
  };
}

export interface operations {
  readonly updatePet: {
    readonly responses: {
      /** successful operation */
      readonly 200: {
        readonly content: {
          readonly "application/xml": components["schemas"]["Pet"];
          readonly "application/json": components["schemas"]["Pet"];
        };
      };
      /** Invalid ID supplied */
      readonly 400: unknown;
      /** Pet not found */
      readonly 404: unknown;
      /** Validation exception */
      readonly 405: unknown;
    };
    readonly requestBody: components["requestBodies"]["Pet"];
  };
  readonly addPet: {
    readonly responses: {
      /** successful operation */
      readonly 200: {
        readonly content: {
          readonly "application/xml": components["schemas"]["Pet"];
          readonly "application/json": components["schemas"]["Pet"];
        };
      };
      /** Invalid input */
      readonly 405: unknown;
    };
    readonly requestBody: components["requestBodies"]["Pet"];
  };
  /** Multiple status values can be provided with comma separated strings */
  readonly findPetsByStatus: {
    readonly parameters: {
      readonly query: {
        /** Status values that need to be considered for filter */
        readonly status: readonly ("available" | "pending" | "sold")[];
      };
    };
    readonly responses: {
      /** successful operation */
      readonly 200: {
        readonly content: {
          readonly "application/xml": readonly components["schemas"]["Pet"][];
          readonly "application/json": readonly components["schemas"]["Pet"][];
        };
      };
      /** Invalid status value */
      readonly 400: unknown;
    };
  };
  /** Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing. */
  readonly findPetsByTags: {
    readonly parameters: {
      readonly query: {
        /** Tags to filter by */
        readonly tags: readonly string[];
      };
    };
    readonly responses: {
      /** successful operation */
      readonly 200: {
        readonly content: {
          readonly "application/xml": readonly components["schemas"]["Pet"][];
          readonly "application/json": readonly components["schemas"]["Pet"][];
        };
      };
      /** Invalid tag value */
      readonly 400: unknown;
    };
  };
  /** Returns a single pet */
  readonly getPetById: {
    readonly parameters: {
      readonly path: {
        /** ID of pet to return */
        readonly petId: number;
      };
    };
    readonly responses: {
      /** successful operation */
      readonly 200: {
        readonly content: {
          readonly "application/xml": components["schemas"]["Pet"];
          readonly "application/json": components["schemas"]["Pet"];
        };
      };
      /** Invalid ID supplied */
      readonly 400: unknown;
      /** Pet not found */
      readonly 404: unknown;
    };
  };
  readonly updatePetWithForm: {
    readonly parameters: {
      readonly path: {
        /** ID of pet that needs to be updated */
        readonly petId: number;
      };
    };
    readonly responses: {
      /** Invalid input */
      readonly 405: unknown;
    };
    readonly requestBody: {
      readonly content: {
        readonly "application/x-www-form-urlencoded": {
          /** Updated name of the pet */
          readonly name?: string;
          /** Updated status of the pet */
          readonly status?: string;
        } & { readonly [key: string]: any };
      };
    };
  };
  readonly deletePet: {
    readonly parameters: {
      readonly header: {
        readonly api_key?: string;
      };
      readonly path: {
        /** Pet id to delete */
        readonly petId: number;
      };
    };
    readonly responses: {
      /** Invalid pet value */
      readonly 400: unknown;
    };
  };
  readonly uploadFile: {
    readonly parameters: {
      readonly path: {
        /** ID of pet to update */
        readonly petId: number;
      };
    };
    readonly responses: {
      /** successful operation */
      readonly 200: {
        readonly content: {
          readonly "application/json": components["schemas"]["ApiResponse"];
        };
      };
    };
    readonly requestBody: {
      readonly content: {
        readonly "multipart/form-data": {
          /** Additional data to pass to server */
          readonly additionalMetadata?: string;
          /** file to upload */
          readonly file?: string;
        } & { readonly [key: string]: any };
      };
    };
  };
  /** Returns a map of status codes to quantities */
  readonly getInventory: {
    readonly responses: {
      /** successful operation */
      readonly 200: {
        readonly content: {
          readonly "application/json": { readonly [key: string]: number };
        };
      };
    };
  };
  readonly placeOrder: {
    readonly responses: {
      /** successful operation */
      readonly 200: {
        readonly content: {
          readonly "application/xml": components["schemas"]["Order"];
          readonly "application/json": components["schemas"]["Order"];
        };
      };
      /** Invalid Order */
      readonly 400: unknown;
    };
    /** order placed for purchasing the pet */
    readonly requestBody: {
      readonly content: {
        readonly "application/json": components["schemas"]["Order"];
      };
    };
  };
  /** For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions */
  readonly getOrderById: {
    readonly parameters: {
      readonly path: {
        /** ID of pet that needs to be fetched */
        readonly orderId: number;
      };
    };
    readonly responses: {
      /** successful operation */
      readonly 200: {
        readonly content: {
          readonly "application/xml": components["schemas"]["Order"];
          readonly "application/json": components["schemas"]["Order"];
        };
      };
      /** Invalid ID supplied */
      readonly 400: unknown;
      /** Order not found */
      readonly 404: unknown;
    };
  };
  /** For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors */
  readonly deleteOrder: {
    readonly parameters: {
      readonly path: {
        /** ID of the order that needs to be deleted */
        readonly orderId: string;
      };
    };
    readonly responses: {
      /** Invalid ID supplied */
      readonly 400: unknown;
      /** Order not found */
      readonly 404: unknown;
    };
  };
  /** This can only be done by the logged in user. */
  readonly createUser: {
    readonly responses: {
      /** successful operation */
      readonly default: unknown;
    };
    /** Created user object */
    readonly requestBody: {
      readonly content: {
        readonly "application/json": components["schemas"]["User"];
      };
    };
  };
  readonly createUsersWithArrayInput: {
    readonly responses: {
      /** successful operation */
      readonly default: unknown;
    };
    readonly requestBody: components["requestBodies"]["UserArray"];
  };
  readonly createUsersWithListInput: {
    readonly responses: {
      /** successful operation */
      readonly default: unknown;
    };
    readonly requestBody: components["requestBodies"]["UserArray"];
  };
  readonly loginUser: {
    readonly parameters: {
      readonly query: {
        /** The user name for login */
        readonly username: string;
        /** The password for login in clear text */
        readonly password: string;
      };
    };
    readonly responses: {
      /** successful operation */
      readonly 200: {
        readonly headers: {
          /** Cookie authentication key for use with the `api_key` apiKey authentication. */
          readonly "Set-Cookie"?: string;
          /** calls per hour allowed by the user */
          readonly "X-Rate-Limit"?: number;
          /** date in UTC when toekn expires */
          readonly "X-Expires-After"?: string;
        };
        readonly content: {
          readonly "application/xml": string;
          readonly "application/json": string;
        };
      };
      /** Invalid username/password supplied */
      readonly 400: unknown;
    };
  };
  readonly logoutUser: {
    readonly responses: {
      /** successful operation */
      readonly default: unknown;
    };
  };
  readonly getUserByName: {
    readonly parameters: {
      readonly path: {
        /** The name that needs to be fetched. Use user1 for testing. */
        readonly username: string;
      };
    };
    readonly responses: {
      /** successful operation */
      readonly 200: {
        readonly content: {
          readonly "application/xml": components["schemas"]["User"];
          readonly "application/json": components["schemas"]["User"];
        };
      };
      /** Invalid username supplied */
      readonly 400: unknown;
      /** User not found */
      readonly 404: unknown;
    };
  };
  /** This can only be done by the logged in user. */
  readonly updateUser: {
    readonly parameters: {
      readonly path: {
        /** name that need to be deleted */
        readonly username: string;
      };
    };
    readonly responses: {
      /** Invalid user supplied */
      readonly 400: unknown;
      /** User not found */
      readonly 404: unknown;
    };
    /** Updated user object */
    readonly requestBody: {
      readonly content: {
        readonly "application/json": components["schemas"]["User"];
      };
    };
  };
  /** This can only be done by the logged in user. */
  readonly deleteUser: {
    readonly parameters: {
      readonly path: {
        /** The name that needs to be deleted */
        readonly username: string;
      };
    };
    readonly responses: {
      /** Invalid username supplied */
      readonly 400: unknown;
      /** User not found */
      readonly 404: unknown;
    };
  };
}

/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  readonly "/test": {
    readonly get: {
      readonly responses: {
        /** A list of types. */
        readonly 200: unknown;
      };
    };
  };
}

export interface components {
  readonly schemas: {
    /** Enum with null and nullable */
    readonly MyType: {
      readonly myField?: ("foo" | "bar") | null;
    } & { readonly [key: string]: any };
    /** Enum with null */
    readonly MyTypeNotNullable: {
      readonly myField?: "foo" | "bar" | null;
    } & { readonly [key: string]: any };
    /** Enum with null */
    readonly MyTypeNotNullableNotNull: {
      readonly myField?: "foo" | "bar";
    } & { readonly [key: string]: any };
    /** Enum with null */
    readonly MyTypeMixed: {
      readonly myField?: "foo" | 2 | false | null;
    } & { readonly [key: string]: any };
  };
}

export interface operations {}

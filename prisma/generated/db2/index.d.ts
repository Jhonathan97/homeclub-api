
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ApartmentDetail
 * 
 */
export type ApartmentDetail = $Result.DefaultSelection<Prisma.$ApartmentDetailPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ApartmentDetails
 * const apartmentDetails = await prisma.apartmentDetail.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ApartmentDetails
   * const apartmentDetails = await prisma.apartmentDetail.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.apartmentDetail`: Exposes CRUD operations for the **ApartmentDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApartmentDetails
    * const apartmentDetails = await prisma.apartmentDetail.findMany()
    * ```
    */
  get apartmentDetail(): Prisma.ApartmentDetailDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ApartmentDetail: 'ApartmentDetail'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db2?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "apartmentDetail"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ApartmentDetail: {
        payload: Prisma.$ApartmentDetailPayload<ExtArgs>
        fields: Prisma.ApartmentDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApartmentDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApartmentDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentDetailPayload>
          }
          findFirst: {
            args: Prisma.ApartmentDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApartmentDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentDetailPayload>
          }
          findMany: {
            args: Prisma.ApartmentDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentDetailPayload>[]
          }
          create: {
            args: Prisma.ApartmentDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentDetailPayload>
          }
          createMany: {
            args: Prisma.ApartmentDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ApartmentDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentDetailPayload>
          }
          update: {
            args: Prisma.ApartmentDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentDetailPayload>
          }
          deleteMany: {
            args: Prisma.ApartmentDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApartmentDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ApartmentDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentDetailPayload>
          }
          aggregate: {
            args: Prisma.ApartmentDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApartmentDetail>
          }
          groupBy: {
            args: Prisma.ApartmentDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApartmentDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApartmentDetailCountArgs<ExtArgs>
            result: $Utils.Optional<ApartmentDetailCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    apartmentDetail?: ApartmentDetailOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model ApartmentDetail
   */

  export type AggregateApartmentDetail = {
    _count: ApartmentDetailCountAggregateOutputType | null
    _avg: ApartmentDetailAvgAggregateOutputType | null
    _sum: ApartmentDetailSumAggregateOutputType | null
    _min: ApartmentDetailMinAggregateOutputType | null
    _max: ApartmentDetailMaxAggregateOutputType | null
  }

  export type ApartmentDetailAvgAggregateOutputType = {
    id: number | null
    apartmentId: number | null
  }

  export type ApartmentDetailSumAggregateOutputType = {
    id: number | null
    apartmentId: number | null
  }

  export type ApartmentDetailMinAggregateOutputType = {
    id: number | null
    apartmentId: number | null
    description: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ApartmentDetailMaxAggregateOutputType = {
    id: number | null
    apartmentId: number | null
    description: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ApartmentDetailCountAggregateOutputType = {
    id: number
    apartmentId: number
    description: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ApartmentDetailAvgAggregateInputType = {
    id?: true
    apartmentId?: true
  }

  export type ApartmentDetailSumAggregateInputType = {
    id?: true
    apartmentId?: true
  }

  export type ApartmentDetailMinAggregateInputType = {
    id?: true
    apartmentId?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ApartmentDetailMaxAggregateInputType = {
    id?: true
    apartmentId?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ApartmentDetailCountAggregateInputType = {
    id?: true
    apartmentId?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ApartmentDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApartmentDetail to aggregate.
     */
    where?: ApartmentDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApartmentDetails to fetch.
     */
    orderBy?: ApartmentDetailOrderByWithRelationInput | ApartmentDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApartmentDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApartmentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApartmentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApartmentDetails
    **/
    _count?: true | ApartmentDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApartmentDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApartmentDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApartmentDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApartmentDetailMaxAggregateInputType
  }

  export type GetApartmentDetailAggregateType<T extends ApartmentDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateApartmentDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApartmentDetail[P]>
      : GetScalarType<T[P], AggregateApartmentDetail[P]>
  }




  export type ApartmentDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApartmentDetailWhereInput
    orderBy?: ApartmentDetailOrderByWithAggregationInput | ApartmentDetailOrderByWithAggregationInput[]
    by: ApartmentDetailScalarFieldEnum[] | ApartmentDetailScalarFieldEnum
    having?: ApartmentDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApartmentDetailCountAggregateInputType | true
    _avg?: ApartmentDetailAvgAggregateInputType
    _sum?: ApartmentDetailSumAggregateInputType
    _min?: ApartmentDetailMinAggregateInputType
    _max?: ApartmentDetailMaxAggregateInputType
  }

  export type ApartmentDetailGroupByOutputType = {
    id: number
    apartmentId: number
    description: string
    imageUrl: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ApartmentDetailCountAggregateOutputType | null
    _avg: ApartmentDetailAvgAggregateOutputType | null
    _sum: ApartmentDetailSumAggregateOutputType | null
    _min: ApartmentDetailMinAggregateOutputType | null
    _max: ApartmentDetailMaxAggregateOutputType | null
  }

  type GetApartmentDetailGroupByPayload<T extends ApartmentDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApartmentDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApartmentDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApartmentDetailGroupByOutputType[P]>
            : GetScalarType<T[P], ApartmentDetailGroupByOutputType[P]>
        }
      >
    >


  export type ApartmentDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apartmentId?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["apartmentDetail"]>



  export type ApartmentDetailSelectScalar = {
    id?: boolean
    apartmentId?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ApartmentDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "apartmentId" | "description" | "imageUrl" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["apartmentDetail"]>

  export type $ApartmentDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApartmentDetail"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      apartmentId: number
      description: string
      imageUrl: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["apartmentDetail"]>
    composites: {}
  }

  type ApartmentDetailGetPayload<S extends boolean | null | undefined | ApartmentDetailDefaultArgs> = $Result.GetResult<Prisma.$ApartmentDetailPayload, S>

  type ApartmentDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApartmentDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApartmentDetailCountAggregateInputType | true
    }

  export interface ApartmentDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApartmentDetail'], meta: { name: 'ApartmentDetail' } }
    /**
     * Find zero or one ApartmentDetail that matches the filter.
     * @param {ApartmentDetailFindUniqueArgs} args - Arguments to find a ApartmentDetail
     * @example
     * // Get one ApartmentDetail
     * const apartmentDetail = await prisma.apartmentDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApartmentDetailFindUniqueArgs>(args: SelectSubset<T, ApartmentDetailFindUniqueArgs<ExtArgs>>): Prisma__ApartmentDetailClient<$Result.GetResult<Prisma.$ApartmentDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApartmentDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApartmentDetailFindUniqueOrThrowArgs} args - Arguments to find a ApartmentDetail
     * @example
     * // Get one ApartmentDetail
     * const apartmentDetail = await prisma.apartmentDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApartmentDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, ApartmentDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApartmentDetailClient<$Result.GetResult<Prisma.$ApartmentDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApartmentDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentDetailFindFirstArgs} args - Arguments to find a ApartmentDetail
     * @example
     * // Get one ApartmentDetail
     * const apartmentDetail = await prisma.apartmentDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApartmentDetailFindFirstArgs>(args?: SelectSubset<T, ApartmentDetailFindFirstArgs<ExtArgs>>): Prisma__ApartmentDetailClient<$Result.GetResult<Prisma.$ApartmentDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApartmentDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentDetailFindFirstOrThrowArgs} args - Arguments to find a ApartmentDetail
     * @example
     * // Get one ApartmentDetail
     * const apartmentDetail = await prisma.apartmentDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApartmentDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, ApartmentDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApartmentDetailClient<$Result.GetResult<Prisma.$ApartmentDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApartmentDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApartmentDetails
     * const apartmentDetails = await prisma.apartmentDetail.findMany()
     * 
     * // Get first 10 ApartmentDetails
     * const apartmentDetails = await prisma.apartmentDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apartmentDetailWithIdOnly = await prisma.apartmentDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApartmentDetailFindManyArgs>(args?: SelectSubset<T, ApartmentDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApartmentDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApartmentDetail.
     * @param {ApartmentDetailCreateArgs} args - Arguments to create a ApartmentDetail.
     * @example
     * // Create one ApartmentDetail
     * const ApartmentDetail = await prisma.apartmentDetail.create({
     *   data: {
     *     // ... data to create a ApartmentDetail
     *   }
     * })
     * 
     */
    create<T extends ApartmentDetailCreateArgs>(args: SelectSubset<T, ApartmentDetailCreateArgs<ExtArgs>>): Prisma__ApartmentDetailClient<$Result.GetResult<Prisma.$ApartmentDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApartmentDetails.
     * @param {ApartmentDetailCreateManyArgs} args - Arguments to create many ApartmentDetails.
     * @example
     * // Create many ApartmentDetails
     * const apartmentDetail = await prisma.apartmentDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApartmentDetailCreateManyArgs>(args?: SelectSubset<T, ApartmentDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ApartmentDetail.
     * @param {ApartmentDetailDeleteArgs} args - Arguments to delete one ApartmentDetail.
     * @example
     * // Delete one ApartmentDetail
     * const ApartmentDetail = await prisma.apartmentDetail.delete({
     *   where: {
     *     // ... filter to delete one ApartmentDetail
     *   }
     * })
     * 
     */
    delete<T extends ApartmentDetailDeleteArgs>(args: SelectSubset<T, ApartmentDetailDeleteArgs<ExtArgs>>): Prisma__ApartmentDetailClient<$Result.GetResult<Prisma.$ApartmentDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApartmentDetail.
     * @param {ApartmentDetailUpdateArgs} args - Arguments to update one ApartmentDetail.
     * @example
     * // Update one ApartmentDetail
     * const apartmentDetail = await prisma.apartmentDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApartmentDetailUpdateArgs>(args: SelectSubset<T, ApartmentDetailUpdateArgs<ExtArgs>>): Prisma__ApartmentDetailClient<$Result.GetResult<Prisma.$ApartmentDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApartmentDetails.
     * @param {ApartmentDetailDeleteManyArgs} args - Arguments to filter ApartmentDetails to delete.
     * @example
     * // Delete a few ApartmentDetails
     * const { count } = await prisma.apartmentDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApartmentDetailDeleteManyArgs>(args?: SelectSubset<T, ApartmentDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApartmentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApartmentDetails
     * const apartmentDetail = await prisma.apartmentDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApartmentDetailUpdateManyArgs>(args: SelectSubset<T, ApartmentDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ApartmentDetail.
     * @param {ApartmentDetailUpsertArgs} args - Arguments to update or create a ApartmentDetail.
     * @example
     * // Update or create a ApartmentDetail
     * const apartmentDetail = await prisma.apartmentDetail.upsert({
     *   create: {
     *     // ... data to create a ApartmentDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApartmentDetail we want to update
     *   }
     * })
     */
    upsert<T extends ApartmentDetailUpsertArgs>(args: SelectSubset<T, ApartmentDetailUpsertArgs<ExtArgs>>): Prisma__ApartmentDetailClient<$Result.GetResult<Prisma.$ApartmentDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApartmentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentDetailCountArgs} args - Arguments to filter ApartmentDetails to count.
     * @example
     * // Count the number of ApartmentDetails
     * const count = await prisma.apartmentDetail.count({
     *   where: {
     *     // ... the filter for the ApartmentDetails we want to count
     *   }
     * })
    **/
    count<T extends ApartmentDetailCountArgs>(
      args?: Subset<T, ApartmentDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApartmentDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApartmentDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApartmentDetailAggregateArgs>(args: Subset<T, ApartmentDetailAggregateArgs>): Prisma.PrismaPromise<GetApartmentDetailAggregateType<T>>

    /**
     * Group by ApartmentDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApartmentDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApartmentDetailGroupByArgs['orderBy'] }
        : { orderBy?: ApartmentDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApartmentDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApartmentDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApartmentDetail model
   */
  readonly fields: ApartmentDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApartmentDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApartmentDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApartmentDetail model
   */
  interface ApartmentDetailFieldRefs {
    readonly id: FieldRef<"ApartmentDetail", 'Int'>
    readonly apartmentId: FieldRef<"ApartmentDetail", 'Int'>
    readonly description: FieldRef<"ApartmentDetail", 'String'>
    readonly imageUrl: FieldRef<"ApartmentDetail", 'String'>
    readonly createdAt: FieldRef<"ApartmentDetail", 'DateTime'>
    readonly updatedAt: FieldRef<"ApartmentDetail", 'DateTime'>
    readonly deletedAt: FieldRef<"ApartmentDetail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApartmentDetail findUnique
   */
  export type ApartmentDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentDetail
     */
    select?: ApartmentDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentDetail
     */
    omit?: ApartmentDetailOmit<ExtArgs> | null
    /**
     * Filter, which ApartmentDetail to fetch.
     */
    where: ApartmentDetailWhereUniqueInput
  }

  /**
   * ApartmentDetail findUniqueOrThrow
   */
  export type ApartmentDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentDetail
     */
    select?: ApartmentDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentDetail
     */
    omit?: ApartmentDetailOmit<ExtArgs> | null
    /**
     * Filter, which ApartmentDetail to fetch.
     */
    where: ApartmentDetailWhereUniqueInput
  }

  /**
   * ApartmentDetail findFirst
   */
  export type ApartmentDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentDetail
     */
    select?: ApartmentDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentDetail
     */
    omit?: ApartmentDetailOmit<ExtArgs> | null
    /**
     * Filter, which ApartmentDetail to fetch.
     */
    where?: ApartmentDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApartmentDetails to fetch.
     */
    orderBy?: ApartmentDetailOrderByWithRelationInput | ApartmentDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApartmentDetails.
     */
    cursor?: ApartmentDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApartmentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApartmentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApartmentDetails.
     */
    distinct?: ApartmentDetailScalarFieldEnum | ApartmentDetailScalarFieldEnum[]
  }

  /**
   * ApartmentDetail findFirstOrThrow
   */
  export type ApartmentDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentDetail
     */
    select?: ApartmentDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentDetail
     */
    omit?: ApartmentDetailOmit<ExtArgs> | null
    /**
     * Filter, which ApartmentDetail to fetch.
     */
    where?: ApartmentDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApartmentDetails to fetch.
     */
    orderBy?: ApartmentDetailOrderByWithRelationInput | ApartmentDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApartmentDetails.
     */
    cursor?: ApartmentDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApartmentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApartmentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApartmentDetails.
     */
    distinct?: ApartmentDetailScalarFieldEnum | ApartmentDetailScalarFieldEnum[]
  }

  /**
   * ApartmentDetail findMany
   */
  export type ApartmentDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentDetail
     */
    select?: ApartmentDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentDetail
     */
    omit?: ApartmentDetailOmit<ExtArgs> | null
    /**
     * Filter, which ApartmentDetails to fetch.
     */
    where?: ApartmentDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApartmentDetails to fetch.
     */
    orderBy?: ApartmentDetailOrderByWithRelationInput | ApartmentDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApartmentDetails.
     */
    cursor?: ApartmentDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApartmentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApartmentDetails.
     */
    skip?: number
    distinct?: ApartmentDetailScalarFieldEnum | ApartmentDetailScalarFieldEnum[]
  }

  /**
   * ApartmentDetail create
   */
  export type ApartmentDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentDetail
     */
    select?: ApartmentDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentDetail
     */
    omit?: ApartmentDetailOmit<ExtArgs> | null
    /**
     * The data needed to create a ApartmentDetail.
     */
    data: XOR<ApartmentDetailCreateInput, ApartmentDetailUncheckedCreateInput>
  }

  /**
   * ApartmentDetail createMany
   */
  export type ApartmentDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApartmentDetails.
     */
    data: ApartmentDetailCreateManyInput | ApartmentDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApartmentDetail update
   */
  export type ApartmentDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentDetail
     */
    select?: ApartmentDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentDetail
     */
    omit?: ApartmentDetailOmit<ExtArgs> | null
    /**
     * The data needed to update a ApartmentDetail.
     */
    data: XOR<ApartmentDetailUpdateInput, ApartmentDetailUncheckedUpdateInput>
    /**
     * Choose, which ApartmentDetail to update.
     */
    where: ApartmentDetailWhereUniqueInput
  }

  /**
   * ApartmentDetail updateMany
   */
  export type ApartmentDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApartmentDetails.
     */
    data: XOR<ApartmentDetailUpdateManyMutationInput, ApartmentDetailUncheckedUpdateManyInput>
    /**
     * Filter which ApartmentDetails to update
     */
    where?: ApartmentDetailWhereInput
    /**
     * Limit how many ApartmentDetails to update.
     */
    limit?: number
  }

  /**
   * ApartmentDetail upsert
   */
  export type ApartmentDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentDetail
     */
    select?: ApartmentDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentDetail
     */
    omit?: ApartmentDetailOmit<ExtArgs> | null
    /**
     * The filter to search for the ApartmentDetail to update in case it exists.
     */
    where: ApartmentDetailWhereUniqueInput
    /**
     * In case the ApartmentDetail found by the `where` argument doesn't exist, create a new ApartmentDetail with this data.
     */
    create: XOR<ApartmentDetailCreateInput, ApartmentDetailUncheckedCreateInput>
    /**
     * In case the ApartmentDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApartmentDetailUpdateInput, ApartmentDetailUncheckedUpdateInput>
  }

  /**
   * ApartmentDetail delete
   */
  export type ApartmentDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentDetail
     */
    select?: ApartmentDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentDetail
     */
    omit?: ApartmentDetailOmit<ExtArgs> | null
    /**
     * Filter which ApartmentDetail to delete.
     */
    where: ApartmentDetailWhereUniqueInput
  }

  /**
   * ApartmentDetail deleteMany
   */
  export type ApartmentDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApartmentDetails to delete
     */
    where?: ApartmentDetailWhereInput
    /**
     * Limit how many ApartmentDetails to delete.
     */
    limit?: number
  }

  /**
   * ApartmentDetail without action
   */
  export type ApartmentDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentDetail
     */
    select?: ApartmentDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentDetail
     */
    omit?: ApartmentDetailOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ApartmentDetailScalarFieldEnum: {
    id: 'id',
    apartmentId: 'apartmentId',
    description: 'description',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ApartmentDetailScalarFieldEnum = (typeof ApartmentDetailScalarFieldEnum)[keyof typeof ApartmentDetailScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ApartmentDetailOrderByRelevanceFieldEnum: {
    description: 'description',
    imageUrl: 'imageUrl'
  };

  export type ApartmentDetailOrderByRelevanceFieldEnum = (typeof ApartmentDetailOrderByRelevanceFieldEnum)[keyof typeof ApartmentDetailOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ApartmentDetailWhereInput = {
    AND?: ApartmentDetailWhereInput | ApartmentDetailWhereInput[]
    OR?: ApartmentDetailWhereInput[]
    NOT?: ApartmentDetailWhereInput | ApartmentDetailWhereInput[]
    id?: IntFilter<"ApartmentDetail"> | number
    apartmentId?: IntFilter<"ApartmentDetail"> | number
    description?: StringFilter<"ApartmentDetail"> | string
    imageUrl?: StringFilter<"ApartmentDetail"> | string
    createdAt?: DateTimeFilter<"ApartmentDetail"> | Date | string
    updatedAt?: DateTimeFilter<"ApartmentDetail"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ApartmentDetail"> | Date | string | null
  }

  export type ApartmentDetailOrderByWithRelationInput = {
    id?: SortOrder
    apartmentId?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _relevance?: ApartmentDetailOrderByRelevanceInput
  }

  export type ApartmentDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    apartmentId?: number
    AND?: ApartmentDetailWhereInput | ApartmentDetailWhereInput[]
    OR?: ApartmentDetailWhereInput[]
    NOT?: ApartmentDetailWhereInput | ApartmentDetailWhereInput[]
    description?: StringFilter<"ApartmentDetail"> | string
    imageUrl?: StringFilter<"ApartmentDetail"> | string
    createdAt?: DateTimeFilter<"ApartmentDetail"> | Date | string
    updatedAt?: DateTimeFilter<"ApartmentDetail"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ApartmentDetail"> | Date | string | null
  }, "id" | "apartmentId">

  export type ApartmentDetailOrderByWithAggregationInput = {
    id?: SortOrder
    apartmentId?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ApartmentDetailCountOrderByAggregateInput
    _avg?: ApartmentDetailAvgOrderByAggregateInput
    _max?: ApartmentDetailMaxOrderByAggregateInput
    _min?: ApartmentDetailMinOrderByAggregateInput
    _sum?: ApartmentDetailSumOrderByAggregateInput
  }

  export type ApartmentDetailScalarWhereWithAggregatesInput = {
    AND?: ApartmentDetailScalarWhereWithAggregatesInput | ApartmentDetailScalarWhereWithAggregatesInput[]
    OR?: ApartmentDetailScalarWhereWithAggregatesInput[]
    NOT?: ApartmentDetailScalarWhereWithAggregatesInput | ApartmentDetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ApartmentDetail"> | number
    apartmentId?: IntWithAggregatesFilter<"ApartmentDetail"> | number
    description?: StringWithAggregatesFilter<"ApartmentDetail"> | string
    imageUrl?: StringWithAggregatesFilter<"ApartmentDetail"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ApartmentDetail"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ApartmentDetail"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"ApartmentDetail"> | Date | string | null
  }

  export type ApartmentDetailCreateInput = {
    apartmentId: number
    description: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ApartmentDetailUncheckedCreateInput = {
    id?: number
    apartmentId: number
    description: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ApartmentDetailUpdateInput = {
    apartmentId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApartmentDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    apartmentId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApartmentDetailCreateManyInput = {
    id?: number
    apartmentId: number
    description: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ApartmentDetailUpdateManyMutationInput = {
    apartmentId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApartmentDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    apartmentId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApartmentDetailOrderByRelevanceInput = {
    fields: ApartmentDetailOrderByRelevanceFieldEnum | ApartmentDetailOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ApartmentDetailCountOrderByAggregateInput = {
    id?: SortOrder
    apartmentId?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ApartmentDetailAvgOrderByAggregateInput = {
    id?: SortOrder
    apartmentId?: SortOrder
  }

  export type ApartmentDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    apartmentId?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ApartmentDetailMinOrderByAggregateInput = {
    id?: SortOrder
    apartmentId?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ApartmentDetailSumOrderByAggregateInput = {
    id?: SortOrder
    apartmentId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
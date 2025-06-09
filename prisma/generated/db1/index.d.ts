
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
 * Model TypeApartment
 * 
 */
export type TypeApartment = $Result.DefaultSelection<Prisma.$TypeApartmentPayload>
/**
 * Model Apartment
 * 
 */
export type Apartment = $Result.DefaultSelection<Prisma.$ApartmentPayload>
/**
 * Model ApartmentRate
 * 
 */
export type ApartmentRate = $Result.DefaultSelection<Prisma.$ApartmentRatePayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model ReserveState
 * 
 */
export type ReserveState = $Result.DefaultSelection<Prisma.$ReserveStatePayload>
/**
 * Model Reservation
 * 
 */
export type Reservation = $Result.DefaultSelection<Prisma.$ReservationPayload>
/**
 * Model PaymentConcept
 * 
 */
export type PaymentConcept = $Result.DefaultSelection<Prisma.$PaymentConceptPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TypeApartments
 * const typeApartments = await prisma.typeApartment.findMany()
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
   * // Fetch zero or more TypeApartments
   * const typeApartments = await prisma.typeApartment.findMany()
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
   * `prisma.typeApartment`: Exposes CRUD operations for the **TypeApartment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TypeApartments
    * const typeApartments = await prisma.typeApartment.findMany()
    * ```
    */
  get typeApartment(): Prisma.TypeApartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apartment`: Exposes CRUD operations for the **Apartment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apartments
    * const apartments = await prisma.apartment.findMany()
    * ```
    */
  get apartment(): Prisma.ApartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apartmentRate`: Exposes CRUD operations for the **ApartmentRate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApartmentRates
    * const apartmentRates = await prisma.apartmentRate.findMany()
    * ```
    */
  get apartmentRate(): Prisma.ApartmentRateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reserveState`: Exposes CRUD operations for the **ReserveState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReserveStates
    * const reserveStates = await prisma.reserveState.findMany()
    * ```
    */
  get reserveState(): Prisma.ReserveStateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentConcept`: Exposes CRUD operations for the **PaymentConcept** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentConcepts
    * const paymentConcepts = await prisma.paymentConcept.findMany()
    * ```
    */
  get paymentConcept(): Prisma.PaymentConceptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;
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
    TypeApartment: 'TypeApartment',
    Apartment: 'Apartment',
    ApartmentRate: 'ApartmentRate',
    Customer: 'Customer',
    ReserveState: 'ReserveState',
    Reservation: 'Reservation',
    PaymentConcept: 'PaymentConcept',
    Payment: 'Payment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db1?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "typeApartment" | "apartment" | "apartmentRate" | "customer" | "reserveState" | "reservation" | "paymentConcept" | "payment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TypeApartment: {
        payload: Prisma.$TypeApartmentPayload<ExtArgs>
        fields: Prisma.TypeApartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TypeApartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeApartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TypeApartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeApartmentPayload>
          }
          findFirst: {
            args: Prisma.TypeApartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeApartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TypeApartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeApartmentPayload>
          }
          findMany: {
            args: Prisma.TypeApartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeApartmentPayload>[]
          }
          create: {
            args: Prisma.TypeApartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeApartmentPayload>
          }
          createMany: {
            args: Prisma.TypeApartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TypeApartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeApartmentPayload>
          }
          update: {
            args: Prisma.TypeApartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeApartmentPayload>
          }
          deleteMany: {
            args: Prisma.TypeApartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TypeApartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TypeApartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeApartmentPayload>
          }
          aggregate: {
            args: Prisma.TypeApartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTypeApartment>
          }
          groupBy: {
            args: Prisma.TypeApartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TypeApartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TypeApartmentCountArgs<ExtArgs>
            result: $Utils.Optional<TypeApartmentCountAggregateOutputType> | number
          }
        }
      }
      Apartment: {
        payload: Prisma.$ApartmentPayload<ExtArgs>
        fields: Prisma.ApartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>
          }
          findFirst: {
            args: Prisma.ApartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>
          }
          findMany: {
            args: Prisma.ApartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>[]
          }
          create: {
            args: Prisma.ApartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>
          }
          createMany: {
            args: Prisma.ApartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ApartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>
          }
          update: {
            args: Prisma.ApartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>
          }
          deleteMany: {
            args: Prisma.ApartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ApartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>
          }
          aggregate: {
            args: Prisma.ApartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApartment>
          }
          groupBy: {
            args: Prisma.ApartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApartmentCountArgs<ExtArgs>
            result: $Utils.Optional<ApartmentCountAggregateOutputType> | number
          }
        }
      }
      ApartmentRate: {
        payload: Prisma.$ApartmentRatePayload<ExtArgs>
        fields: Prisma.ApartmentRateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApartmentRateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentRatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApartmentRateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentRatePayload>
          }
          findFirst: {
            args: Prisma.ApartmentRateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentRatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApartmentRateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentRatePayload>
          }
          findMany: {
            args: Prisma.ApartmentRateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentRatePayload>[]
          }
          create: {
            args: Prisma.ApartmentRateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentRatePayload>
          }
          createMany: {
            args: Prisma.ApartmentRateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ApartmentRateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentRatePayload>
          }
          update: {
            args: Prisma.ApartmentRateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentRatePayload>
          }
          deleteMany: {
            args: Prisma.ApartmentRateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApartmentRateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ApartmentRateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentRatePayload>
          }
          aggregate: {
            args: Prisma.ApartmentRateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApartmentRate>
          }
          groupBy: {
            args: Prisma.ApartmentRateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApartmentRateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApartmentRateCountArgs<ExtArgs>
            result: $Utils.Optional<ApartmentRateCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      ReserveState: {
        payload: Prisma.$ReserveStatePayload<ExtArgs>
        fields: Prisma.ReserveStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReserveStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReserveStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveStatePayload>
          }
          findFirst: {
            args: Prisma.ReserveStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReserveStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveStatePayload>
          }
          findMany: {
            args: Prisma.ReserveStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveStatePayload>[]
          }
          create: {
            args: Prisma.ReserveStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveStatePayload>
          }
          createMany: {
            args: Prisma.ReserveStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReserveStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveStatePayload>
          }
          update: {
            args: Prisma.ReserveStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveStatePayload>
          }
          deleteMany: {
            args: Prisma.ReserveStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReserveStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReserveStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveStatePayload>
          }
          aggregate: {
            args: Prisma.ReserveStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReserveState>
          }
          groupBy: {
            args: Prisma.ReserveStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReserveStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReserveStateCountArgs<ExtArgs>
            result: $Utils.Optional<ReserveStateCountAggregateOutputType> | number
          }
        }
      }
      Reservation: {
        payload: Prisma.$ReservationPayload<ExtArgs>
        fields: Prisma.ReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findFirst: {
            args: Prisma.ReservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findMany: {
            args: Prisma.ReservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          create: {
            args: Prisma.ReservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          createMany: {
            args: Prisma.ReservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          update: {
            args: Prisma.ReservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          deleteMany: {
            args: Prisma.ReservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.ReservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
          }
        }
      }
      PaymentConcept: {
        payload: Prisma.$PaymentConceptPayload<ExtArgs>
        fields: Prisma.PaymentConceptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentConceptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentConceptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentConceptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentConceptPayload>
          }
          findFirst: {
            args: Prisma.PaymentConceptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentConceptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentConceptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentConceptPayload>
          }
          findMany: {
            args: Prisma.PaymentConceptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentConceptPayload>[]
          }
          create: {
            args: Prisma.PaymentConceptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentConceptPayload>
          }
          createMany: {
            args: Prisma.PaymentConceptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentConceptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentConceptPayload>
          }
          update: {
            args: Prisma.PaymentConceptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentConceptPayload>
          }
          deleteMany: {
            args: Prisma.PaymentConceptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentConceptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentConceptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentConceptPayload>
          }
          aggregate: {
            args: Prisma.PaymentConceptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentConcept>
          }
          groupBy: {
            args: Prisma.PaymentConceptGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentConceptGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentConceptCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentConceptCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
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
    typeApartment?: TypeApartmentOmit
    apartment?: ApartmentOmit
    apartmentRate?: ApartmentRateOmit
    customer?: CustomerOmit
    reserveState?: ReserveStateOmit
    reservation?: ReservationOmit
    paymentConcept?: PaymentConceptOmit
    payment?: PaymentOmit
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
   * Count Type TypeApartmentCountOutputType
   */

  export type TypeApartmentCountOutputType = {
    apartments: number
  }

  export type TypeApartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apartments?: boolean | TypeApartmentCountOutputTypeCountApartmentsArgs
  }

  // Custom InputTypes
  /**
   * TypeApartmentCountOutputType without action
   */
  export type TypeApartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeApartmentCountOutputType
     */
    select?: TypeApartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TypeApartmentCountOutputType without action
   */
  export type TypeApartmentCountOutputTypeCountApartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApartmentWhereInput
  }


  /**
   * Count Type ApartmentCountOutputType
   */

  export type ApartmentCountOutputType = {
    rates: number
    reservations: number
  }

  export type ApartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rates?: boolean | ApartmentCountOutputTypeCountRatesArgs
    reservations?: boolean | ApartmentCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * ApartmentCountOutputType without action
   */
  export type ApartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentCountOutputType
     */
    select?: ApartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApartmentCountOutputType without action
   */
  export type ApartmentCountOutputTypeCountRatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApartmentRateWhereInput
  }

  /**
   * ApartmentCountOutputType without action
   */
  export type ApartmentCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    reservations: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | CustomerCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * Count Type ReserveStateCountOutputType
   */

  export type ReserveStateCountOutputType = {
    reservations: number
  }

  export type ReserveStateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | ReserveStateCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * ReserveStateCountOutputType without action
   */
  export type ReserveStateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveStateCountOutputType
     */
    select?: ReserveStateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReserveStateCountOutputType without action
   */
  export type ReserveStateCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * Count Type ReservationCountOutputType
   */

  export type ReservationCountOutputType = {
    payments: number
  }

  export type ReservationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | ReservationCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationCountOutputType
     */
    select?: ReservationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type PaymentConceptCountOutputType
   */

  export type PaymentConceptCountOutputType = {
    payments: number
  }

  export type PaymentConceptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | PaymentConceptCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * PaymentConceptCountOutputType without action
   */
  export type PaymentConceptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentConceptCountOutputType
     */
    select?: PaymentConceptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentConceptCountOutputType without action
   */
  export type PaymentConceptCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TypeApartment
   */

  export type AggregateTypeApartment = {
    _count: TypeApartmentCountAggregateOutputType | null
    _avg: TypeApartmentAvgAggregateOutputType | null
    _sum: TypeApartmentSumAggregateOutputType | null
    _min: TypeApartmentMinAggregateOutputType | null
    _max: TypeApartmentMaxAggregateOutputType | null
  }

  export type TypeApartmentAvgAggregateOutputType = {
    id: number | null
  }

  export type TypeApartmentSumAggregateOutputType = {
    id: number | null
  }

  export type TypeApartmentMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TypeApartmentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TypeApartmentCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type TypeApartmentAvgAggregateInputType = {
    id?: true
  }

  export type TypeApartmentSumAggregateInputType = {
    id?: true
  }

  export type TypeApartmentMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TypeApartmentMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TypeApartmentCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type TypeApartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TypeApartment to aggregate.
     */
    where?: TypeApartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeApartments to fetch.
     */
    orderBy?: TypeApartmentOrderByWithRelationInput | TypeApartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TypeApartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeApartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeApartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TypeApartments
    **/
    _count?: true | TypeApartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TypeApartmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TypeApartmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypeApartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypeApartmentMaxAggregateInputType
  }

  export type GetTypeApartmentAggregateType<T extends TypeApartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateTypeApartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTypeApartment[P]>
      : GetScalarType<T[P], AggregateTypeApartment[P]>
  }




  export type TypeApartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypeApartmentWhereInput
    orderBy?: TypeApartmentOrderByWithAggregationInput | TypeApartmentOrderByWithAggregationInput[]
    by: TypeApartmentScalarFieldEnum[] | TypeApartmentScalarFieldEnum
    having?: TypeApartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypeApartmentCountAggregateInputType | true
    _avg?: TypeApartmentAvgAggregateInputType
    _sum?: TypeApartmentSumAggregateInputType
    _min?: TypeApartmentMinAggregateInputType
    _max?: TypeApartmentMaxAggregateInputType
  }

  export type TypeApartmentGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: TypeApartmentCountAggregateOutputType | null
    _avg: TypeApartmentAvgAggregateOutputType | null
    _sum: TypeApartmentSumAggregateOutputType | null
    _min: TypeApartmentMinAggregateOutputType | null
    _max: TypeApartmentMaxAggregateOutputType | null
  }

  type GetTypeApartmentGroupByPayload<T extends TypeApartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypeApartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypeApartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypeApartmentGroupByOutputType[P]>
            : GetScalarType<T[P], TypeApartmentGroupByOutputType[P]>
        }
      >
    >


  export type TypeApartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    apartments?: boolean | TypeApartment$apartmentsArgs<ExtArgs>
    _count?: boolean | TypeApartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["typeApartment"]>



  export type TypeApartmentSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type TypeApartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["typeApartment"]>
  export type TypeApartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apartments?: boolean | TypeApartment$apartmentsArgs<ExtArgs>
    _count?: boolean | TypeApartmentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TypeApartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TypeApartment"
    objects: {
      apartments: Prisma.$ApartmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["typeApartment"]>
    composites: {}
  }

  type TypeApartmentGetPayload<S extends boolean | null | undefined | TypeApartmentDefaultArgs> = $Result.GetResult<Prisma.$TypeApartmentPayload, S>

  type TypeApartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TypeApartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TypeApartmentCountAggregateInputType | true
    }

  export interface TypeApartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TypeApartment'], meta: { name: 'TypeApartment' } }
    /**
     * Find zero or one TypeApartment that matches the filter.
     * @param {TypeApartmentFindUniqueArgs} args - Arguments to find a TypeApartment
     * @example
     * // Get one TypeApartment
     * const typeApartment = await prisma.typeApartment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TypeApartmentFindUniqueArgs>(args: SelectSubset<T, TypeApartmentFindUniqueArgs<ExtArgs>>): Prisma__TypeApartmentClient<$Result.GetResult<Prisma.$TypeApartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TypeApartment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TypeApartmentFindUniqueOrThrowArgs} args - Arguments to find a TypeApartment
     * @example
     * // Get one TypeApartment
     * const typeApartment = await prisma.typeApartment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TypeApartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, TypeApartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TypeApartmentClient<$Result.GetResult<Prisma.$TypeApartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TypeApartment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeApartmentFindFirstArgs} args - Arguments to find a TypeApartment
     * @example
     * // Get one TypeApartment
     * const typeApartment = await prisma.typeApartment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TypeApartmentFindFirstArgs>(args?: SelectSubset<T, TypeApartmentFindFirstArgs<ExtArgs>>): Prisma__TypeApartmentClient<$Result.GetResult<Prisma.$TypeApartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TypeApartment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeApartmentFindFirstOrThrowArgs} args - Arguments to find a TypeApartment
     * @example
     * // Get one TypeApartment
     * const typeApartment = await prisma.typeApartment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TypeApartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, TypeApartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TypeApartmentClient<$Result.GetResult<Prisma.$TypeApartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TypeApartments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeApartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TypeApartments
     * const typeApartments = await prisma.typeApartment.findMany()
     * 
     * // Get first 10 TypeApartments
     * const typeApartments = await prisma.typeApartment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const typeApartmentWithIdOnly = await prisma.typeApartment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TypeApartmentFindManyArgs>(args?: SelectSubset<T, TypeApartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypeApartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TypeApartment.
     * @param {TypeApartmentCreateArgs} args - Arguments to create a TypeApartment.
     * @example
     * // Create one TypeApartment
     * const TypeApartment = await prisma.typeApartment.create({
     *   data: {
     *     // ... data to create a TypeApartment
     *   }
     * })
     * 
     */
    create<T extends TypeApartmentCreateArgs>(args: SelectSubset<T, TypeApartmentCreateArgs<ExtArgs>>): Prisma__TypeApartmentClient<$Result.GetResult<Prisma.$TypeApartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TypeApartments.
     * @param {TypeApartmentCreateManyArgs} args - Arguments to create many TypeApartments.
     * @example
     * // Create many TypeApartments
     * const typeApartment = await prisma.typeApartment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TypeApartmentCreateManyArgs>(args?: SelectSubset<T, TypeApartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TypeApartment.
     * @param {TypeApartmentDeleteArgs} args - Arguments to delete one TypeApartment.
     * @example
     * // Delete one TypeApartment
     * const TypeApartment = await prisma.typeApartment.delete({
     *   where: {
     *     // ... filter to delete one TypeApartment
     *   }
     * })
     * 
     */
    delete<T extends TypeApartmentDeleteArgs>(args: SelectSubset<T, TypeApartmentDeleteArgs<ExtArgs>>): Prisma__TypeApartmentClient<$Result.GetResult<Prisma.$TypeApartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TypeApartment.
     * @param {TypeApartmentUpdateArgs} args - Arguments to update one TypeApartment.
     * @example
     * // Update one TypeApartment
     * const typeApartment = await prisma.typeApartment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TypeApartmentUpdateArgs>(args: SelectSubset<T, TypeApartmentUpdateArgs<ExtArgs>>): Prisma__TypeApartmentClient<$Result.GetResult<Prisma.$TypeApartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TypeApartments.
     * @param {TypeApartmentDeleteManyArgs} args - Arguments to filter TypeApartments to delete.
     * @example
     * // Delete a few TypeApartments
     * const { count } = await prisma.typeApartment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TypeApartmentDeleteManyArgs>(args?: SelectSubset<T, TypeApartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TypeApartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeApartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TypeApartments
     * const typeApartment = await prisma.typeApartment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TypeApartmentUpdateManyArgs>(args: SelectSubset<T, TypeApartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TypeApartment.
     * @param {TypeApartmentUpsertArgs} args - Arguments to update or create a TypeApartment.
     * @example
     * // Update or create a TypeApartment
     * const typeApartment = await prisma.typeApartment.upsert({
     *   create: {
     *     // ... data to create a TypeApartment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TypeApartment we want to update
     *   }
     * })
     */
    upsert<T extends TypeApartmentUpsertArgs>(args: SelectSubset<T, TypeApartmentUpsertArgs<ExtArgs>>): Prisma__TypeApartmentClient<$Result.GetResult<Prisma.$TypeApartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TypeApartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeApartmentCountArgs} args - Arguments to filter TypeApartments to count.
     * @example
     * // Count the number of TypeApartments
     * const count = await prisma.typeApartment.count({
     *   where: {
     *     // ... the filter for the TypeApartments we want to count
     *   }
     * })
    **/
    count<T extends TypeApartmentCountArgs>(
      args?: Subset<T, TypeApartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypeApartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TypeApartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeApartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TypeApartmentAggregateArgs>(args: Subset<T, TypeApartmentAggregateArgs>): Prisma.PrismaPromise<GetTypeApartmentAggregateType<T>>

    /**
     * Group by TypeApartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeApartmentGroupByArgs} args - Group by arguments.
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
      T extends TypeApartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypeApartmentGroupByArgs['orderBy'] }
        : { orderBy?: TypeApartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TypeApartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeApartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TypeApartment model
   */
  readonly fields: TypeApartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TypeApartment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TypeApartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apartments<T extends TypeApartment$apartmentsArgs<ExtArgs> = {}>(args?: Subset<T, TypeApartment$apartmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TypeApartment model
   */
  interface TypeApartmentFieldRefs {
    readonly id: FieldRef<"TypeApartment", 'Int'>
    readonly name: FieldRef<"TypeApartment", 'String'>
    readonly description: FieldRef<"TypeApartment", 'String'>
    readonly createdAt: FieldRef<"TypeApartment", 'DateTime'>
    readonly updatedAt: FieldRef<"TypeApartment", 'DateTime'>
    readonly deletedAt: FieldRef<"TypeApartment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TypeApartment findUnique
   */
  export type TypeApartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeApartment
     */
    select?: TypeApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeApartment
     */
    omit?: TypeApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeApartmentInclude<ExtArgs> | null
    /**
     * Filter, which TypeApartment to fetch.
     */
    where: TypeApartmentWhereUniqueInput
  }

  /**
   * TypeApartment findUniqueOrThrow
   */
  export type TypeApartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeApartment
     */
    select?: TypeApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeApartment
     */
    omit?: TypeApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeApartmentInclude<ExtArgs> | null
    /**
     * Filter, which TypeApartment to fetch.
     */
    where: TypeApartmentWhereUniqueInput
  }

  /**
   * TypeApartment findFirst
   */
  export type TypeApartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeApartment
     */
    select?: TypeApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeApartment
     */
    omit?: TypeApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeApartmentInclude<ExtArgs> | null
    /**
     * Filter, which TypeApartment to fetch.
     */
    where?: TypeApartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeApartments to fetch.
     */
    orderBy?: TypeApartmentOrderByWithRelationInput | TypeApartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TypeApartments.
     */
    cursor?: TypeApartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeApartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeApartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TypeApartments.
     */
    distinct?: TypeApartmentScalarFieldEnum | TypeApartmentScalarFieldEnum[]
  }

  /**
   * TypeApartment findFirstOrThrow
   */
  export type TypeApartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeApartment
     */
    select?: TypeApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeApartment
     */
    omit?: TypeApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeApartmentInclude<ExtArgs> | null
    /**
     * Filter, which TypeApartment to fetch.
     */
    where?: TypeApartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeApartments to fetch.
     */
    orderBy?: TypeApartmentOrderByWithRelationInput | TypeApartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TypeApartments.
     */
    cursor?: TypeApartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeApartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeApartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TypeApartments.
     */
    distinct?: TypeApartmentScalarFieldEnum | TypeApartmentScalarFieldEnum[]
  }

  /**
   * TypeApartment findMany
   */
  export type TypeApartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeApartment
     */
    select?: TypeApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeApartment
     */
    omit?: TypeApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeApartmentInclude<ExtArgs> | null
    /**
     * Filter, which TypeApartments to fetch.
     */
    where?: TypeApartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeApartments to fetch.
     */
    orderBy?: TypeApartmentOrderByWithRelationInput | TypeApartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TypeApartments.
     */
    cursor?: TypeApartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeApartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeApartments.
     */
    skip?: number
    distinct?: TypeApartmentScalarFieldEnum | TypeApartmentScalarFieldEnum[]
  }

  /**
   * TypeApartment create
   */
  export type TypeApartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeApartment
     */
    select?: TypeApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeApartment
     */
    omit?: TypeApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeApartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a TypeApartment.
     */
    data: XOR<TypeApartmentCreateInput, TypeApartmentUncheckedCreateInput>
  }

  /**
   * TypeApartment createMany
   */
  export type TypeApartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TypeApartments.
     */
    data: TypeApartmentCreateManyInput | TypeApartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TypeApartment update
   */
  export type TypeApartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeApartment
     */
    select?: TypeApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeApartment
     */
    omit?: TypeApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeApartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a TypeApartment.
     */
    data: XOR<TypeApartmentUpdateInput, TypeApartmentUncheckedUpdateInput>
    /**
     * Choose, which TypeApartment to update.
     */
    where: TypeApartmentWhereUniqueInput
  }

  /**
   * TypeApartment updateMany
   */
  export type TypeApartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TypeApartments.
     */
    data: XOR<TypeApartmentUpdateManyMutationInput, TypeApartmentUncheckedUpdateManyInput>
    /**
     * Filter which TypeApartments to update
     */
    where?: TypeApartmentWhereInput
    /**
     * Limit how many TypeApartments to update.
     */
    limit?: number
  }

  /**
   * TypeApartment upsert
   */
  export type TypeApartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeApartment
     */
    select?: TypeApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeApartment
     */
    omit?: TypeApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeApartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the TypeApartment to update in case it exists.
     */
    where: TypeApartmentWhereUniqueInput
    /**
     * In case the TypeApartment found by the `where` argument doesn't exist, create a new TypeApartment with this data.
     */
    create: XOR<TypeApartmentCreateInput, TypeApartmentUncheckedCreateInput>
    /**
     * In case the TypeApartment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TypeApartmentUpdateInput, TypeApartmentUncheckedUpdateInput>
  }

  /**
   * TypeApartment delete
   */
  export type TypeApartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeApartment
     */
    select?: TypeApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeApartment
     */
    omit?: TypeApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeApartmentInclude<ExtArgs> | null
    /**
     * Filter which TypeApartment to delete.
     */
    where: TypeApartmentWhereUniqueInput
  }

  /**
   * TypeApartment deleteMany
   */
  export type TypeApartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TypeApartments to delete
     */
    where?: TypeApartmentWhereInput
    /**
     * Limit how many TypeApartments to delete.
     */
    limit?: number
  }

  /**
   * TypeApartment.apartments
   */
  export type TypeApartment$apartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    where?: ApartmentWhereInput
    orderBy?: ApartmentOrderByWithRelationInput | ApartmentOrderByWithRelationInput[]
    cursor?: ApartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApartmentScalarFieldEnum | ApartmentScalarFieldEnum[]
  }

  /**
   * TypeApartment without action
   */
  export type TypeApartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeApartment
     */
    select?: TypeApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeApartment
     */
    omit?: TypeApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeApartmentInclude<ExtArgs> | null
  }


  /**
   * Model Apartment
   */

  export type AggregateApartment = {
    _count: ApartmentCountAggregateOutputType | null
    _avg: ApartmentAvgAggregateOutputType | null
    _sum: ApartmentSumAggregateOutputType | null
    _min: ApartmentMinAggregateOutputType | null
    _max: ApartmentMaxAggregateOutputType | null
  }

  export type ApartmentAvgAggregateOutputType = {
    id: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    typeApartmentId: number | null
  }

  export type ApartmentSumAggregateOutputType = {
    id: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    typeApartmentId: number | null
  }

  export type ApartmentMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    city: string | null
    country: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    isActive: boolean | null
    typeApartmentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ApartmentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    city: string | null
    country: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    isActive: boolean | null
    typeApartmentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ApartmentCountAggregateOutputType = {
    id: number
    name: number
    address: number
    city: number
    country: number
    latitude: number
    longitude: number
    isActive: number
    typeApartmentId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ApartmentAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    typeApartmentId?: true
  }

  export type ApartmentSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    typeApartmentId?: true
  }

  export type ApartmentMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    country?: true
    latitude?: true
    longitude?: true
    isActive?: true
    typeApartmentId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ApartmentMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    country?: true
    latitude?: true
    longitude?: true
    isActive?: true
    typeApartmentId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ApartmentCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    country?: true
    latitude?: true
    longitude?: true
    isActive?: true
    typeApartmentId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ApartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Apartment to aggregate.
     */
    where?: ApartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apartments to fetch.
     */
    orderBy?: ApartmentOrderByWithRelationInput | ApartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Apartments
    **/
    _count?: true | ApartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApartmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApartmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApartmentMaxAggregateInputType
  }

  export type GetApartmentAggregateType<T extends ApartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateApartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApartment[P]>
      : GetScalarType<T[P], AggregateApartment[P]>
  }




  export type ApartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApartmentWhereInput
    orderBy?: ApartmentOrderByWithAggregationInput | ApartmentOrderByWithAggregationInput[]
    by: ApartmentScalarFieldEnum[] | ApartmentScalarFieldEnum
    having?: ApartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApartmentCountAggregateInputType | true
    _avg?: ApartmentAvgAggregateInputType
    _sum?: ApartmentSumAggregateInputType
    _min?: ApartmentMinAggregateInputType
    _max?: ApartmentMaxAggregateInputType
  }

  export type ApartmentGroupByOutputType = {
    id: number
    name: string
    address: string
    city: string
    country: string
    latitude: Decimal
    longitude: Decimal
    isActive: boolean | null
    typeApartmentId: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ApartmentCountAggregateOutputType | null
    _avg: ApartmentAvgAggregateOutputType | null
    _sum: ApartmentSumAggregateOutputType | null
    _min: ApartmentMinAggregateOutputType | null
    _max: ApartmentMaxAggregateOutputType | null
  }

  type GetApartmentGroupByPayload<T extends ApartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApartmentGroupByOutputType[P]>
            : GetScalarType<T[P], ApartmentGroupByOutputType[P]>
        }
      >
    >


  export type ApartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    latitude?: boolean
    longitude?: boolean
    isActive?: boolean
    typeApartmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    typeApartment?: boolean | TypeApartmentDefaultArgs<ExtArgs>
    rates?: boolean | Apartment$ratesArgs<ExtArgs>
    reservations?: boolean | Apartment$reservationsArgs<ExtArgs>
    _count?: boolean | ApartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apartment"]>



  export type ApartmentSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    latitude?: boolean
    longitude?: boolean
    isActive?: boolean
    typeApartmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ApartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "city" | "country" | "latitude" | "longitude" | "isActive" | "typeApartmentId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["apartment"]>
  export type ApartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    typeApartment?: boolean | TypeApartmentDefaultArgs<ExtArgs>
    rates?: boolean | Apartment$ratesArgs<ExtArgs>
    reservations?: boolean | Apartment$reservationsArgs<ExtArgs>
    _count?: boolean | ApartmentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ApartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Apartment"
    objects: {
      typeApartment: Prisma.$TypeApartmentPayload<ExtArgs>
      rates: Prisma.$ApartmentRatePayload<ExtArgs>[]
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string
      city: string
      country: string
      latitude: Prisma.Decimal
      longitude: Prisma.Decimal
      isActive: boolean | null
      typeApartmentId: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["apartment"]>
    composites: {}
  }

  type ApartmentGetPayload<S extends boolean | null | undefined | ApartmentDefaultArgs> = $Result.GetResult<Prisma.$ApartmentPayload, S>

  type ApartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApartmentCountAggregateInputType | true
    }

  export interface ApartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Apartment'], meta: { name: 'Apartment' } }
    /**
     * Find zero or one Apartment that matches the filter.
     * @param {ApartmentFindUniqueArgs} args - Arguments to find a Apartment
     * @example
     * // Get one Apartment
     * const apartment = await prisma.apartment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApartmentFindUniqueArgs>(args: SelectSubset<T, ApartmentFindUniqueArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Apartment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApartmentFindUniqueOrThrowArgs} args - Arguments to find a Apartment
     * @example
     * // Get one Apartment
     * const apartment = await prisma.apartment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ApartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apartment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentFindFirstArgs} args - Arguments to find a Apartment
     * @example
     * // Get one Apartment
     * const apartment = await prisma.apartment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApartmentFindFirstArgs>(args?: SelectSubset<T, ApartmentFindFirstArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apartment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentFindFirstOrThrowArgs} args - Arguments to find a Apartment
     * @example
     * // Get one Apartment
     * const apartment = await prisma.apartment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ApartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Apartments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apartments
     * const apartments = await prisma.apartment.findMany()
     * 
     * // Get first 10 Apartments
     * const apartments = await prisma.apartment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apartmentWithIdOnly = await prisma.apartment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApartmentFindManyArgs>(args?: SelectSubset<T, ApartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Apartment.
     * @param {ApartmentCreateArgs} args - Arguments to create a Apartment.
     * @example
     * // Create one Apartment
     * const Apartment = await prisma.apartment.create({
     *   data: {
     *     // ... data to create a Apartment
     *   }
     * })
     * 
     */
    create<T extends ApartmentCreateArgs>(args: SelectSubset<T, ApartmentCreateArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Apartments.
     * @param {ApartmentCreateManyArgs} args - Arguments to create many Apartments.
     * @example
     * // Create many Apartments
     * const apartment = await prisma.apartment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApartmentCreateManyArgs>(args?: SelectSubset<T, ApartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Apartment.
     * @param {ApartmentDeleteArgs} args - Arguments to delete one Apartment.
     * @example
     * // Delete one Apartment
     * const Apartment = await prisma.apartment.delete({
     *   where: {
     *     // ... filter to delete one Apartment
     *   }
     * })
     * 
     */
    delete<T extends ApartmentDeleteArgs>(args: SelectSubset<T, ApartmentDeleteArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Apartment.
     * @param {ApartmentUpdateArgs} args - Arguments to update one Apartment.
     * @example
     * // Update one Apartment
     * const apartment = await prisma.apartment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApartmentUpdateArgs>(args: SelectSubset<T, ApartmentUpdateArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Apartments.
     * @param {ApartmentDeleteManyArgs} args - Arguments to filter Apartments to delete.
     * @example
     * // Delete a few Apartments
     * const { count } = await prisma.apartment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApartmentDeleteManyArgs>(args?: SelectSubset<T, ApartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apartments
     * const apartment = await prisma.apartment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApartmentUpdateManyArgs>(args: SelectSubset<T, ApartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Apartment.
     * @param {ApartmentUpsertArgs} args - Arguments to update or create a Apartment.
     * @example
     * // Update or create a Apartment
     * const apartment = await prisma.apartment.upsert({
     *   create: {
     *     // ... data to create a Apartment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Apartment we want to update
     *   }
     * })
     */
    upsert<T extends ApartmentUpsertArgs>(args: SelectSubset<T, ApartmentUpsertArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Apartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentCountArgs} args - Arguments to filter Apartments to count.
     * @example
     * // Count the number of Apartments
     * const count = await prisma.apartment.count({
     *   where: {
     *     // ... the filter for the Apartments we want to count
     *   }
     * })
    **/
    count<T extends ApartmentCountArgs>(
      args?: Subset<T, ApartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Apartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApartmentAggregateArgs>(args: Subset<T, ApartmentAggregateArgs>): Prisma.PrismaPromise<GetApartmentAggregateType<T>>

    /**
     * Group by Apartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentGroupByArgs} args - Group by arguments.
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
      T extends ApartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApartmentGroupByArgs['orderBy'] }
        : { orderBy?: ApartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Apartment model
   */
  readonly fields: ApartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Apartment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    typeApartment<T extends TypeApartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TypeApartmentDefaultArgs<ExtArgs>>): Prisma__TypeApartmentClient<$Result.GetResult<Prisma.$TypeApartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rates<T extends Apartment$ratesArgs<ExtArgs> = {}>(args?: Subset<T, Apartment$ratesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApartmentRatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservations<T extends Apartment$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Apartment$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Apartment model
   */
  interface ApartmentFieldRefs {
    readonly id: FieldRef<"Apartment", 'Int'>
    readonly name: FieldRef<"Apartment", 'String'>
    readonly address: FieldRef<"Apartment", 'String'>
    readonly city: FieldRef<"Apartment", 'String'>
    readonly country: FieldRef<"Apartment", 'String'>
    readonly latitude: FieldRef<"Apartment", 'Decimal'>
    readonly longitude: FieldRef<"Apartment", 'Decimal'>
    readonly isActive: FieldRef<"Apartment", 'Boolean'>
    readonly typeApartmentId: FieldRef<"Apartment", 'Int'>
    readonly createdAt: FieldRef<"Apartment", 'DateTime'>
    readonly updatedAt: FieldRef<"Apartment", 'DateTime'>
    readonly deletedAt: FieldRef<"Apartment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Apartment findUnique
   */
  export type ApartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * Filter, which Apartment to fetch.
     */
    where: ApartmentWhereUniqueInput
  }

  /**
   * Apartment findUniqueOrThrow
   */
  export type ApartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * Filter, which Apartment to fetch.
     */
    where: ApartmentWhereUniqueInput
  }

  /**
   * Apartment findFirst
   */
  export type ApartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * Filter, which Apartment to fetch.
     */
    where?: ApartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apartments to fetch.
     */
    orderBy?: ApartmentOrderByWithRelationInput | ApartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apartments.
     */
    cursor?: ApartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apartments.
     */
    distinct?: ApartmentScalarFieldEnum | ApartmentScalarFieldEnum[]
  }

  /**
   * Apartment findFirstOrThrow
   */
  export type ApartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * Filter, which Apartment to fetch.
     */
    where?: ApartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apartments to fetch.
     */
    orderBy?: ApartmentOrderByWithRelationInput | ApartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apartments.
     */
    cursor?: ApartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apartments.
     */
    distinct?: ApartmentScalarFieldEnum | ApartmentScalarFieldEnum[]
  }

  /**
   * Apartment findMany
   */
  export type ApartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * Filter, which Apartments to fetch.
     */
    where?: ApartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apartments to fetch.
     */
    orderBy?: ApartmentOrderByWithRelationInput | ApartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Apartments.
     */
    cursor?: ApartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apartments.
     */
    skip?: number
    distinct?: ApartmentScalarFieldEnum | ApartmentScalarFieldEnum[]
  }

  /**
   * Apartment create
   */
  export type ApartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Apartment.
     */
    data: XOR<ApartmentCreateInput, ApartmentUncheckedCreateInput>
  }

  /**
   * Apartment createMany
   */
  export type ApartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Apartments.
     */
    data: ApartmentCreateManyInput | ApartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Apartment update
   */
  export type ApartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Apartment.
     */
    data: XOR<ApartmentUpdateInput, ApartmentUncheckedUpdateInput>
    /**
     * Choose, which Apartment to update.
     */
    where: ApartmentWhereUniqueInput
  }

  /**
   * Apartment updateMany
   */
  export type ApartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Apartments.
     */
    data: XOR<ApartmentUpdateManyMutationInput, ApartmentUncheckedUpdateManyInput>
    /**
     * Filter which Apartments to update
     */
    where?: ApartmentWhereInput
    /**
     * Limit how many Apartments to update.
     */
    limit?: number
  }

  /**
   * Apartment upsert
   */
  export type ApartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Apartment to update in case it exists.
     */
    where: ApartmentWhereUniqueInput
    /**
     * In case the Apartment found by the `where` argument doesn't exist, create a new Apartment with this data.
     */
    create: XOR<ApartmentCreateInput, ApartmentUncheckedCreateInput>
    /**
     * In case the Apartment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApartmentUpdateInput, ApartmentUncheckedUpdateInput>
  }

  /**
   * Apartment delete
   */
  export type ApartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * Filter which Apartment to delete.
     */
    where: ApartmentWhereUniqueInput
  }

  /**
   * Apartment deleteMany
   */
  export type ApartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Apartments to delete
     */
    where?: ApartmentWhereInput
    /**
     * Limit how many Apartments to delete.
     */
    limit?: number
  }

  /**
   * Apartment.rates
   */
  export type Apartment$ratesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentRate
     */
    select?: ApartmentRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentRate
     */
    omit?: ApartmentRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentRateInclude<ExtArgs> | null
    where?: ApartmentRateWhereInput
    orderBy?: ApartmentRateOrderByWithRelationInput | ApartmentRateOrderByWithRelationInput[]
    cursor?: ApartmentRateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApartmentRateScalarFieldEnum | ApartmentRateScalarFieldEnum[]
  }

  /**
   * Apartment.reservations
   */
  export type Apartment$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Apartment without action
   */
  export type ApartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
  }


  /**
   * Model ApartmentRate
   */

  export type AggregateApartmentRate = {
    _count: ApartmentRateCountAggregateOutputType | null
    _avg: ApartmentRateAvgAggregateOutputType | null
    _sum: ApartmentRateSumAggregateOutputType | null
    _min: ApartmentRateMinAggregateOutputType | null
    _max: ApartmentRateMaxAggregateOutputType | null
  }

  export type ApartmentRateAvgAggregateOutputType = {
    id: number | null
    apartmentId: number | null
    price: Decimal | null
  }

  export type ApartmentRateSumAggregateOutputType = {
    id: number | null
    apartmentId: number | null
    price: Decimal | null
  }

  export type ApartmentRateMinAggregateOutputType = {
    id: number | null
    apartmentId: number | null
    startDate: Date | null
    endDate: Date | null
    price: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ApartmentRateMaxAggregateOutputType = {
    id: number | null
    apartmentId: number | null
    startDate: Date | null
    endDate: Date | null
    price: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ApartmentRateCountAggregateOutputType = {
    id: number
    apartmentId: number
    startDate: number
    endDate: number
    price: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ApartmentRateAvgAggregateInputType = {
    id?: true
    apartmentId?: true
    price?: true
  }

  export type ApartmentRateSumAggregateInputType = {
    id?: true
    apartmentId?: true
    price?: true
  }

  export type ApartmentRateMinAggregateInputType = {
    id?: true
    apartmentId?: true
    startDate?: true
    endDate?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ApartmentRateMaxAggregateInputType = {
    id?: true
    apartmentId?: true
    startDate?: true
    endDate?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ApartmentRateCountAggregateInputType = {
    id?: true
    apartmentId?: true
    startDate?: true
    endDate?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ApartmentRateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApartmentRate to aggregate.
     */
    where?: ApartmentRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApartmentRates to fetch.
     */
    orderBy?: ApartmentRateOrderByWithRelationInput | ApartmentRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApartmentRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApartmentRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApartmentRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApartmentRates
    **/
    _count?: true | ApartmentRateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApartmentRateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApartmentRateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApartmentRateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApartmentRateMaxAggregateInputType
  }

  export type GetApartmentRateAggregateType<T extends ApartmentRateAggregateArgs> = {
        [P in keyof T & keyof AggregateApartmentRate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApartmentRate[P]>
      : GetScalarType<T[P], AggregateApartmentRate[P]>
  }




  export type ApartmentRateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApartmentRateWhereInput
    orderBy?: ApartmentRateOrderByWithAggregationInput | ApartmentRateOrderByWithAggregationInput[]
    by: ApartmentRateScalarFieldEnum[] | ApartmentRateScalarFieldEnum
    having?: ApartmentRateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApartmentRateCountAggregateInputType | true
    _avg?: ApartmentRateAvgAggregateInputType
    _sum?: ApartmentRateSumAggregateInputType
    _min?: ApartmentRateMinAggregateInputType
    _max?: ApartmentRateMaxAggregateInputType
  }

  export type ApartmentRateGroupByOutputType = {
    id: number
    apartmentId: number
    startDate: Date
    endDate: Date
    price: Decimal
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ApartmentRateCountAggregateOutputType | null
    _avg: ApartmentRateAvgAggregateOutputType | null
    _sum: ApartmentRateSumAggregateOutputType | null
    _min: ApartmentRateMinAggregateOutputType | null
    _max: ApartmentRateMaxAggregateOutputType | null
  }

  type GetApartmentRateGroupByPayload<T extends ApartmentRateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApartmentRateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApartmentRateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApartmentRateGroupByOutputType[P]>
            : GetScalarType<T[P], ApartmentRateGroupByOutputType[P]>
        }
      >
    >


  export type ApartmentRateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apartmentId?: boolean
    startDate?: boolean
    endDate?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apartmentRate"]>



  export type ApartmentRateSelectScalar = {
    id?: boolean
    apartmentId?: boolean
    startDate?: boolean
    endDate?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ApartmentRateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "apartmentId" | "startDate" | "endDate" | "price" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["apartmentRate"]>
  export type ApartmentRateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }

  export type $ApartmentRatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApartmentRate"
    objects: {
      apartment: Prisma.$ApartmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      apartmentId: number
      startDate: Date
      endDate: Date
      price: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["apartmentRate"]>
    composites: {}
  }

  type ApartmentRateGetPayload<S extends boolean | null | undefined | ApartmentRateDefaultArgs> = $Result.GetResult<Prisma.$ApartmentRatePayload, S>

  type ApartmentRateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApartmentRateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApartmentRateCountAggregateInputType | true
    }

  export interface ApartmentRateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApartmentRate'], meta: { name: 'ApartmentRate' } }
    /**
     * Find zero or one ApartmentRate that matches the filter.
     * @param {ApartmentRateFindUniqueArgs} args - Arguments to find a ApartmentRate
     * @example
     * // Get one ApartmentRate
     * const apartmentRate = await prisma.apartmentRate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApartmentRateFindUniqueArgs>(args: SelectSubset<T, ApartmentRateFindUniqueArgs<ExtArgs>>): Prisma__ApartmentRateClient<$Result.GetResult<Prisma.$ApartmentRatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApartmentRate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApartmentRateFindUniqueOrThrowArgs} args - Arguments to find a ApartmentRate
     * @example
     * // Get one ApartmentRate
     * const apartmentRate = await prisma.apartmentRate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApartmentRateFindUniqueOrThrowArgs>(args: SelectSubset<T, ApartmentRateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApartmentRateClient<$Result.GetResult<Prisma.$ApartmentRatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApartmentRate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentRateFindFirstArgs} args - Arguments to find a ApartmentRate
     * @example
     * // Get one ApartmentRate
     * const apartmentRate = await prisma.apartmentRate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApartmentRateFindFirstArgs>(args?: SelectSubset<T, ApartmentRateFindFirstArgs<ExtArgs>>): Prisma__ApartmentRateClient<$Result.GetResult<Prisma.$ApartmentRatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApartmentRate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentRateFindFirstOrThrowArgs} args - Arguments to find a ApartmentRate
     * @example
     * // Get one ApartmentRate
     * const apartmentRate = await prisma.apartmentRate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApartmentRateFindFirstOrThrowArgs>(args?: SelectSubset<T, ApartmentRateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApartmentRateClient<$Result.GetResult<Prisma.$ApartmentRatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApartmentRates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentRateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApartmentRates
     * const apartmentRates = await prisma.apartmentRate.findMany()
     * 
     * // Get first 10 ApartmentRates
     * const apartmentRates = await prisma.apartmentRate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apartmentRateWithIdOnly = await prisma.apartmentRate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApartmentRateFindManyArgs>(args?: SelectSubset<T, ApartmentRateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApartmentRatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApartmentRate.
     * @param {ApartmentRateCreateArgs} args - Arguments to create a ApartmentRate.
     * @example
     * // Create one ApartmentRate
     * const ApartmentRate = await prisma.apartmentRate.create({
     *   data: {
     *     // ... data to create a ApartmentRate
     *   }
     * })
     * 
     */
    create<T extends ApartmentRateCreateArgs>(args: SelectSubset<T, ApartmentRateCreateArgs<ExtArgs>>): Prisma__ApartmentRateClient<$Result.GetResult<Prisma.$ApartmentRatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApartmentRates.
     * @param {ApartmentRateCreateManyArgs} args - Arguments to create many ApartmentRates.
     * @example
     * // Create many ApartmentRates
     * const apartmentRate = await prisma.apartmentRate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApartmentRateCreateManyArgs>(args?: SelectSubset<T, ApartmentRateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ApartmentRate.
     * @param {ApartmentRateDeleteArgs} args - Arguments to delete one ApartmentRate.
     * @example
     * // Delete one ApartmentRate
     * const ApartmentRate = await prisma.apartmentRate.delete({
     *   where: {
     *     // ... filter to delete one ApartmentRate
     *   }
     * })
     * 
     */
    delete<T extends ApartmentRateDeleteArgs>(args: SelectSubset<T, ApartmentRateDeleteArgs<ExtArgs>>): Prisma__ApartmentRateClient<$Result.GetResult<Prisma.$ApartmentRatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApartmentRate.
     * @param {ApartmentRateUpdateArgs} args - Arguments to update one ApartmentRate.
     * @example
     * // Update one ApartmentRate
     * const apartmentRate = await prisma.apartmentRate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApartmentRateUpdateArgs>(args: SelectSubset<T, ApartmentRateUpdateArgs<ExtArgs>>): Prisma__ApartmentRateClient<$Result.GetResult<Prisma.$ApartmentRatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApartmentRates.
     * @param {ApartmentRateDeleteManyArgs} args - Arguments to filter ApartmentRates to delete.
     * @example
     * // Delete a few ApartmentRates
     * const { count } = await prisma.apartmentRate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApartmentRateDeleteManyArgs>(args?: SelectSubset<T, ApartmentRateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApartmentRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentRateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApartmentRates
     * const apartmentRate = await prisma.apartmentRate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApartmentRateUpdateManyArgs>(args: SelectSubset<T, ApartmentRateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ApartmentRate.
     * @param {ApartmentRateUpsertArgs} args - Arguments to update or create a ApartmentRate.
     * @example
     * // Update or create a ApartmentRate
     * const apartmentRate = await prisma.apartmentRate.upsert({
     *   create: {
     *     // ... data to create a ApartmentRate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApartmentRate we want to update
     *   }
     * })
     */
    upsert<T extends ApartmentRateUpsertArgs>(args: SelectSubset<T, ApartmentRateUpsertArgs<ExtArgs>>): Prisma__ApartmentRateClient<$Result.GetResult<Prisma.$ApartmentRatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApartmentRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentRateCountArgs} args - Arguments to filter ApartmentRates to count.
     * @example
     * // Count the number of ApartmentRates
     * const count = await prisma.apartmentRate.count({
     *   where: {
     *     // ... the filter for the ApartmentRates we want to count
     *   }
     * })
    **/
    count<T extends ApartmentRateCountArgs>(
      args?: Subset<T, ApartmentRateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApartmentRateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApartmentRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentRateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApartmentRateAggregateArgs>(args: Subset<T, ApartmentRateAggregateArgs>): Prisma.PrismaPromise<GetApartmentRateAggregateType<T>>

    /**
     * Group by ApartmentRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentRateGroupByArgs} args - Group by arguments.
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
      T extends ApartmentRateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApartmentRateGroupByArgs['orderBy'] }
        : { orderBy?: ApartmentRateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApartmentRateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApartmentRateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApartmentRate model
   */
  readonly fields: ApartmentRateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApartmentRate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApartmentRateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apartment<T extends ApartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApartmentDefaultArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ApartmentRate model
   */
  interface ApartmentRateFieldRefs {
    readonly id: FieldRef<"ApartmentRate", 'Int'>
    readonly apartmentId: FieldRef<"ApartmentRate", 'Int'>
    readonly startDate: FieldRef<"ApartmentRate", 'DateTime'>
    readonly endDate: FieldRef<"ApartmentRate", 'DateTime'>
    readonly price: FieldRef<"ApartmentRate", 'Decimal'>
    readonly createdAt: FieldRef<"ApartmentRate", 'DateTime'>
    readonly updatedAt: FieldRef<"ApartmentRate", 'DateTime'>
    readonly deletedAt: FieldRef<"ApartmentRate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApartmentRate findUnique
   */
  export type ApartmentRateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentRate
     */
    select?: ApartmentRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentRate
     */
    omit?: ApartmentRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentRateInclude<ExtArgs> | null
    /**
     * Filter, which ApartmentRate to fetch.
     */
    where: ApartmentRateWhereUniqueInput
  }

  /**
   * ApartmentRate findUniqueOrThrow
   */
  export type ApartmentRateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentRate
     */
    select?: ApartmentRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentRate
     */
    omit?: ApartmentRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentRateInclude<ExtArgs> | null
    /**
     * Filter, which ApartmentRate to fetch.
     */
    where: ApartmentRateWhereUniqueInput
  }

  /**
   * ApartmentRate findFirst
   */
  export type ApartmentRateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentRate
     */
    select?: ApartmentRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentRate
     */
    omit?: ApartmentRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentRateInclude<ExtArgs> | null
    /**
     * Filter, which ApartmentRate to fetch.
     */
    where?: ApartmentRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApartmentRates to fetch.
     */
    orderBy?: ApartmentRateOrderByWithRelationInput | ApartmentRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApartmentRates.
     */
    cursor?: ApartmentRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApartmentRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApartmentRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApartmentRates.
     */
    distinct?: ApartmentRateScalarFieldEnum | ApartmentRateScalarFieldEnum[]
  }

  /**
   * ApartmentRate findFirstOrThrow
   */
  export type ApartmentRateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentRate
     */
    select?: ApartmentRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentRate
     */
    omit?: ApartmentRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentRateInclude<ExtArgs> | null
    /**
     * Filter, which ApartmentRate to fetch.
     */
    where?: ApartmentRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApartmentRates to fetch.
     */
    orderBy?: ApartmentRateOrderByWithRelationInput | ApartmentRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApartmentRates.
     */
    cursor?: ApartmentRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApartmentRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApartmentRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApartmentRates.
     */
    distinct?: ApartmentRateScalarFieldEnum | ApartmentRateScalarFieldEnum[]
  }

  /**
   * ApartmentRate findMany
   */
  export type ApartmentRateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentRate
     */
    select?: ApartmentRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentRate
     */
    omit?: ApartmentRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentRateInclude<ExtArgs> | null
    /**
     * Filter, which ApartmentRates to fetch.
     */
    where?: ApartmentRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApartmentRates to fetch.
     */
    orderBy?: ApartmentRateOrderByWithRelationInput | ApartmentRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApartmentRates.
     */
    cursor?: ApartmentRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApartmentRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApartmentRates.
     */
    skip?: number
    distinct?: ApartmentRateScalarFieldEnum | ApartmentRateScalarFieldEnum[]
  }

  /**
   * ApartmentRate create
   */
  export type ApartmentRateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentRate
     */
    select?: ApartmentRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentRate
     */
    omit?: ApartmentRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentRateInclude<ExtArgs> | null
    /**
     * The data needed to create a ApartmentRate.
     */
    data: XOR<ApartmentRateCreateInput, ApartmentRateUncheckedCreateInput>
  }

  /**
   * ApartmentRate createMany
   */
  export type ApartmentRateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApartmentRates.
     */
    data: ApartmentRateCreateManyInput | ApartmentRateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApartmentRate update
   */
  export type ApartmentRateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentRate
     */
    select?: ApartmentRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentRate
     */
    omit?: ApartmentRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentRateInclude<ExtArgs> | null
    /**
     * The data needed to update a ApartmentRate.
     */
    data: XOR<ApartmentRateUpdateInput, ApartmentRateUncheckedUpdateInput>
    /**
     * Choose, which ApartmentRate to update.
     */
    where: ApartmentRateWhereUniqueInput
  }

  /**
   * ApartmentRate updateMany
   */
  export type ApartmentRateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApartmentRates.
     */
    data: XOR<ApartmentRateUpdateManyMutationInput, ApartmentRateUncheckedUpdateManyInput>
    /**
     * Filter which ApartmentRates to update
     */
    where?: ApartmentRateWhereInput
    /**
     * Limit how many ApartmentRates to update.
     */
    limit?: number
  }

  /**
   * ApartmentRate upsert
   */
  export type ApartmentRateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentRate
     */
    select?: ApartmentRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentRate
     */
    omit?: ApartmentRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentRateInclude<ExtArgs> | null
    /**
     * The filter to search for the ApartmentRate to update in case it exists.
     */
    where: ApartmentRateWhereUniqueInput
    /**
     * In case the ApartmentRate found by the `where` argument doesn't exist, create a new ApartmentRate with this data.
     */
    create: XOR<ApartmentRateCreateInput, ApartmentRateUncheckedCreateInput>
    /**
     * In case the ApartmentRate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApartmentRateUpdateInput, ApartmentRateUncheckedUpdateInput>
  }

  /**
   * ApartmentRate delete
   */
  export type ApartmentRateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentRate
     */
    select?: ApartmentRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentRate
     */
    omit?: ApartmentRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentRateInclude<ExtArgs> | null
    /**
     * Filter which ApartmentRate to delete.
     */
    where: ApartmentRateWhereUniqueInput
  }

  /**
   * ApartmentRate deleteMany
   */
  export type ApartmentRateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApartmentRates to delete
     */
    where?: ApartmentRateWhereInput
    /**
     * Limit how many ApartmentRates to delete.
     */
    limit?: number
  }

  /**
   * ApartmentRate without action
   */
  export type ApartmentRateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentRate
     */
    select?: ApartmentRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApartmentRate
     */
    omit?: ApartmentRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentRateInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    surname: number
    email: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    name: string
    surname: string | null
    email: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    reservations?: boolean | Customer$reservationsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>



  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    surname?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "surname" | "email" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | Customer$reservationsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      surname: string | null
      email: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservations<T extends Customer$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly surname: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
    readonly deletedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.reservations
   */
  export type Customer$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model ReserveState
   */

  export type AggregateReserveState = {
    _count: ReserveStateCountAggregateOutputType | null
    _avg: ReserveStateAvgAggregateOutputType | null
    _sum: ReserveStateSumAggregateOutputType | null
    _min: ReserveStateMinAggregateOutputType | null
    _max: ReserveStateMaxAggregateOutputType | null
  }

  export type ReserveStateAvgAggregateOutputType = {
    id: number | null
  }

  export type ReserveStateSumAggregateOutputType = {
    id: number | null
  }

  export type ReserveStateMinAggregateOutputType = {
    id: number | null
    state: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ReserveStateMaxAggregateOutputType = {
    id: number | null
    state: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ReserveStateCountAggregateOutputType = {
    id: number
    state: number
    description: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ReserveStateAvgAggregateInputType = {
    id?: true
  }

  export type ReserveStateSumAggregateInputType = {
    id?: true
  }

  export type ReserveStateMinAggregateInputType = {
    id?: true
    state?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ReserveStateMaxAggregateInputType = {
    id?: true
    state?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ReserveStateCountAggregateInputType = {
    id?: true
    state?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ReserveStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReserveState to aggregate.
     */
    where?: ReserveStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReserveStates to fetch.
     */
    orderBy?: ReserveStateOrderByWithRelationInput | ReserveStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReserveStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReserveStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReserveStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReserveStates
    **/
    _count?: true | ReserveStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReserveStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReserveStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReserveStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReserveStateMaxAggregateInputType
  }

  export type GetReserveStateAggregateType<T extends ReserveStateAggregateArgs> = {
        [P in keyof T & keyof AggregateReserveState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReserveState[P]>
      : GetScalarType<T[P], AggregateReserveState[P]>
  }




  export type ReserveStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReserveStateWhereInput
    orderBy?: ReserveStateOrderByWithAggregationInput | ReserveStateOrderByWithAggregationInput[]
    by: ReserveStateScalarFieldEnum[] | ReserveStateScalarFieldEnum
    having?: ReserveStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReserveStateCountAggregateInputType | true
    _avg?: ReserveStateAvgAggregateInputType
    _sum?: ReserveStateSumAggregateInputType
    _min?: ReserveStateMinAggregateInputType
    _max?: ReserveStateMaxAggregateInputType
  }

  export type ReserveStateGroupByOutputType = {
    id: number
    state: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ReserveStateCountAggregateOutputType | null
    _avg: ReserveStateAvgAggregateOutputType | null
    _sum: ReserveStateSumAggregateOutputType | null
    _min: ReserveStateMinAggregateOutputType | null
    _max: ReserveStateMaxAggregateOutputType | null
  }

  type GetReserveStateGroupByPayload<T extends ReserveStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReserveStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReserveStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReserveStateGroupByOutputType[P]>
            : GetScalarType<T[P], ReserveStateGroupByOutputType[P]>
        }
      >
    >


  export type ReserveStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    state?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    reservations?: boolean | ReserveState$reservationsArgs<ExtArgs>
    _count?: boolean | ReserveStateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserveState"]>



  export type ReserveStateSelectScalar = {
    id?: boolean
    state?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ReserveStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "state" | "description" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["reserveState"]>
  export type ReserveStateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | ReserveState$reservationsArgs<ExtArgs>
    _count?: boolean | ReserveStateCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ReserveStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReserveState"
    objects: {
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      state: string
      description: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["reserveState"]>
    composites: {}
  }

  type ReserveStateGetPayload<S extends boolean | null | undefined | ReserveStateDefaultArgs> = $Result.GetResult<Prisma.$ReserveStatePayload, S>

  type ReserveStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReserveStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReserveStateCountAggregateInputType | true
    }

  export interface ReserveStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReserveState'], meta: { name: 'ReserveState' } }
    /**
     * Find zero or one ReserveState that matches the filter.
     * @param {ReserveStateFindUniqueArgs} args - Arguments to find a ReserveState
     * @example
     * // Get one ReserveState
     * const reserveState = await prisma.reserveState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReserveStateFindUniqueArgs>(args: SelectSubset<T, ReserveStateFindUniqueArgs<ExtArgs>>): Prisma__ReserveStateClient<$Result.GetResult<Prisma.$ReserveStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReserveState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReserveStateFindUniqueOrThrowArgs} args - Arguments to find a ReserveState
     * @example
     * // Get one ReserveState
     * const reserveState = await prisma.reserveState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReserveStateFindUniqueOrThrowArgs>(args: SelectSubset<T, ReserveStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReserveStateClient<$Result.GetResult<Prisma.$ReserveStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReserveState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReserveStateFindFirstArgs} args - Arguments to find a ReserveState
     * @example
     * // Get one ReserveState
     * const reserveState = await prisma.reserveState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReserveStateFindFirstArgs>(args?: SelectSubset<T, ReserveStateFindFirstArgs<ExtArgs>>): Prisma__ReserveStateClient<$Result.GetResult<Prisma.$ReserveStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReserveState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReserveStateFindFirstOrThrowArgs} args - Arguments to find a ReserveState
     * @example
     * // Get one ReserveState
     * const reserveState = await prisma.reserveState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReserveStateFindFirstOrThrowArgs>(args?: SelectSubset<T, ReserveStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReserveStateClient<$Result.GetResult<Prisma.$ReserveStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReserveStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReserveStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReserveStates
     * const reserveStates = await prisma.reserveState.findMany()
     * 
     * // Get first 10 ReserveStates
     * const reserveStates = await prisma.reserveState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reserveStateWithIdOnly = await prisma.reserveState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReserveStateFindManyArgs>(args?: SelectSubset<T, ReserveStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReserveStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReserveState.
     * @param {ReserveStateCreateArgs} args - Arguments to create a ReserveState.
     * @example
     * // Create one ReserveState
     * const ReserveState = await prisma.reserveState.create({
     *   data: {
     *     // ... data to create a ReserveState
     *   }
     * })
     * 
     */
    create<T extends ReserveStateCreateArgs>(args: SelectSubset<T, ReserveStateCreateArgs<ExtArgs>>): Prisma__ReserveStateClient<$Result.GetResult<Prisma.$ReserveStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReserveStates.
     * @param {ReserveStateCreateManyArgs} args - Arguments to create many ReserveStates.
     * @example
     * // Create many ReserveStates
     * const reserveState = await prisma.reserveState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReserveStateCreateManyArgs>(args?: SelectSubset<T, ReserveStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReserveState.
     * @param {ReserveStateDeleteArgs} args - Arguments to delete one ReserveState.
     * @example
     * // Delete one ReserveState
     * const ReserveState = await prisma.reserveState.delete({
     *   where: {
     *     // ... filter to delete one ReserveState
     *   }
     * })
     * 
     */
    delete<T extends ReserveStateDeleteArgs>(args: SelectSubset<T, ReserveStateDeleteArgs<ExtArgs>>): Prisma__ReserveStateClient<$Result.GetResult<Prisma.$ReserveStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReserveState.
     * @param {ReserveStateUpdateArgs} args - Arguments to update one ReserveState.
     * @example
     * // Update one ReserveState
     * const reserveState = await prisma.reserveState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReserveStateUpdateArgs>(args: SelectSubset<T, ReserveStateUpdateArgs<ExtArgs>>): Prisma__ReserveStateClient<$Result.GetResult<Prisma.$ReserveStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReserveStates.
     * @param {ReserveStateDeleteManyArgs} args - Arguments to filter ReserveStates to delete.
     * @example
     * // Delete a few ReserveStates
     * const { count } = await prisma.reserveState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReserveStateDeleteManyArgs>(args?: SelectSubset<T, ReserveStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReserveStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReserveStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReserveStates
     * const reserveState = await prisma.reserveState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReserveStateUpdateManyArgs>(args: SelectSubset<T, ReserveStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReserveState.
     * @param {ReserveStateUpsertArgs} args - Arguments to update or create a ReserveState.
     * @example
     * // Update or create a ReserveState
     * const reserveState = await prisma.reserveState.upsert({
     *   create: {
     *     // ... data to create a ReserveState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReserveState we want to update
     *   }
     * })
     */
    upsert<T extends ReserveStateUpsertArgs>(args: SelectSubset<T, ReserveStateUpsertArgs<ExtArgs>>): Prisma__ReserveStateClient<$Result.GetResult<Prisma.$ReserveStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReserveStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReserveStateCountArgs} args - Arguments to filter ReserveStates to count.
     * @example
     * // Count the number of ReserveStates
     * const count = await prisma.reserveState.count({
     *   where: {
     *     // ... the filter for the ReserveStates we want to count
     *   }
     * })
    **/
    count<T extends ReserveStateCountArgs>(
      args?: Subset<T, ReserveStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReserveStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReserveState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReserveStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReserveStateAggregateArgs>(args: Subset<T, ReserveStateAggregateArgs>): Prisma.PrismaPromise<GetReserveStateAggregateType<T>>

    /**
     * Group by ReserveState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReserveStateGroupByArgs} args - Group by arguments.
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
      T extends ReserveStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReserveStateGroupByArgs['orderBy'] }
        : { orderBy?: ReserveStateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReserveStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReserveStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReserveState model
   */
  readonly fields: ReserveStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReserveState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReserveStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservations<T extends ReserveState$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, ReserveState$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ReserveState model
   */
  interface ReserveStateFieldRefs {
    readonly id: FieldRef<"ReserveState", 'Int'>
    readonly state: FieldRef<"ReserveState", 'String'>
    readonly description: FieldRef<"ReserveState", 'String'>
    readonly createdAt: FieldRef<"ReserveState", 'DateTime'>
    readonly updatedAt: FieldRef<"ReserveState", 'DateTime'>
    readonly deletedAt: FieldRef<"ReserveState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReserveState findUnique
   */
  export type ReserveStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveState
     */
    select?: ReserveStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveState
     */
    omit?: ReserveStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveStateInclude<ExtArgs> | null
    /**
     * Filter, which ReserveState to fetch.
     */
    where: ReserveStateWhereUniqueInput
  }

  /**
   * ReserveState findUniqueOrThrow
   */
  export type ReserveStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveState
     */
    select?: ReserveStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveState
     */
    omit?: ReserveStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveStateInclude<ExtArgs> | null
    /**
     * Filter, which ReserveState to fetch.
     */
    where: ReserveStateWhereUniqueInput
  }

  /**
   * ReserveState findFirst
   */
  export type ReserveStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveState
     */
    select?: ReserveStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveState
     */
    omit?: ReserveStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveStateInclude<ExtArgs> | null
    /**
     * Filter, which ReserveState to fetch.
     */
    where?: ReserveStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReserveStates to fetch.
     */
    orderBy?: ReserveStateOrderByWithRelationInput | ReserveStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReserveStates.
     */
    cursor?: ReserveStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReserveStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReserveStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReserveStates.
     */
    distinct?: ReserveStateScalarFieldEnum | ReserveStateScalarFieldEnum[]
  }

  /**
   * ReserveState findFirstOrThrow
   */
  export type ReserveStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveState
     */
    select?: ReserveStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveState
     */
    omit?: ReserveStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveStateInclude<ExtArgs> | null
    /**
     * Filter, which ReserveState to fetch.
     */
    where?: ReserveStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReserveStates to fetch.
     */
    orderBy?: ReserveStateOrderByWithRelationInput | ReserveStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReserveStates.
     */
    cursor?: ReserveStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReserveStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReserveStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReserveStates.
     */
    distinct?: ReserveStateScalarFieldEnum | ReserveStateScalarFieldEnum[]
  }

  /**
   * ReserveState findMany
   */
  export type ReserveStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveState
     */
    select?: ReserveStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveState
     */
    omit?: ReserveStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveStateInclude<ExtArgs> | null
    /**
     * Filter, which ReserveStates to fetch.
     */
    where?: ReserveStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReserveStates to fetch.
     */
    orderBy?: ReserveStateOrderByWithRelationInput | ReserveStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReserveStates.
     */
    cursor?: ReserveStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReserveStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReserveStates.
     */
    skip?: number
    distinct?: ReserveStateScalarFieldEnum | ReserveStateScalarFieldEnum[]
  }

  /**
   * ReserveState create
   */
  export type ReserveStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveState
     */
    select?: ReserveStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveState
     */
    omit?: ReserveStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveStateInclude<ExtArgs> | null
    /**
     * The data needed to create a ReserveState.
     */
    data: XOR<ReserveStateCreateInput, ReserveStateUncheckedCreateInput>
  }

  /**
   * ReserveState createMany
   */
  export type ReserveStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReserveStates.
     */
    data: ReserveStateCreateManyInput | ReserveStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReserveState update
   */
  export type ReserveStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveState
     */
    select?: ReserveStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveState
     */
    omit?: ReserveStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveStateInclude<ExtArgs> | null
    /**
     * The data needed to update a ReserveState.
     */
    data: XOR<ReserveStateUpdateInput, ReserveStateUncheckedUpdateInput>
    /**
     * Choose, which ReserveState to update.
     */
    where: ReserveStateWhereUniqueInput
  }

  /**
   * ReserveState updateMany
   */
  export type ReserveStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReserveStates.
     */
    data: XOR<ReserveStateUpdateManyMutationInput, ReserveStateUncheckedUpdateManyInput>
    /**
     * Filter which ReserveStates to update
     */
    where?: ReserveStateWhereInput
    /**
     * Limit how many ReserveStates to update.
     */
    limit?: number
  }

  /**
   * ReserveState upsert
   */
  export type ReserveStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveState
     */
    select?: ReserveStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveState
     */
    omit?: ReserveStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveStateInclude<ExtArgs> | null
    /**
     * The filter to search for the ReserveState to update in case it exists.
     */
    where: ReserveStateWhereUniqueInput
    /**
     * In case the ReserveState found by the `where` argument doesn't exist, create a new ReserveState with this data.
     */
    create: XOR<ReserveStateCreateInput, ReserveStateUncheckedCreateInput>
    /**
     * In case the ReserveState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReserveStateUpdateInput, ReserveStateUncheckedUpdateInput>
  }

  /**
   * ReserveState delete
   */
  export type ReserveStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveState
     */
    select?: ReserveStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveState
     */
    omit?: ReserveStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveStateInclude<ExtArgs> | null
    /**
     * Filter which ReserveState to delete.
     */
    where: ReserveStateWhereUniqueInput
  }

  /**
   * ReserveState deleteMany
   */
  export type ReserveStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReserveStates to delete
     */
    where?: ReserveStateWhereInput
    /**
     * Limit how many ReserveStates to delete.
     */
    limit?: number
  }

  /**
   * ReserveState.reservations
   */
  export type ReserveState$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * ReserveState without action
   */
  export type ReserveStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveState
     */
    select?: ReserveStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveState
     */
    omit?: ReserveStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveStateInclude<ExtArgs> | null
  }


  /**
   * Model Reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationAvgAggregateOutputType = {
    id: number | null
    status: number | null
    apartmentId: number | null
    customerId: number | null
  }

  export type ReservationSumAggregateOutputType = {
    id: number | null
    status: number | null
    apartmentId: number | null
    customerId: number | null
  }

  export type ReservationMinAggregateOutputType = {
    id: number | null
    code: string | null
    startDate: Date | null
    endDate: Date | null
    status: number | null
    apartmentId: number | null
    customerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ReservationMaxAggregateOutputType = {
    id: number | null
    code: string | null
    startDate: Date | null
    endDate: Date | null
    status: number | null
    apartmentId: number | null
    customerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ReservationCountAggregateOutputType = {
    id: number
    code: number
    startDate: number
    endDate: number
    status: number
    apartmentId: number
    customerId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ReservationAvgAggregateInputType = {
    id?: true
    status?: true
    apartmentId?: true
    customerId?: true
  }

  export type ReservationSumAggregateInputType = {
    id?: true
    status?: true
    apartmentId?: true
    customerId?: true
  }

  export type ReservationMinAggregateInputType = {
    id?: true
    code?: true
    startDate?: true
    endDate?: true
    status?: true
    apartmentId?: true
    customerId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ReservationMaxAggregateInputType = {
    id?: true
    code?: true
    startDate?: true
    endDate?: true
    status?: true
    apartmentId?: true
    customerId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ReservationCountAggregateInputType = {
    id?: true
    code?: true
    startDate?: true
    endDate?: true
    status?: true
    apartmentId?: true
    customerId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservation to aggregate.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type ReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithAggregationInput | ReservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: ReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _avg?: ReservationAvgAggregateInputType
    _sum?: ReservationSumAggregateInputType
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    id: number
    code: string
    startDate: Date
    endDate: Date
    status: number
    apartmentId: number
    customerId: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type ReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    apartmentId?: boolean
    customerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    reserveState?: boolean | ReserveStateDefaultArgs<ExtArgs>
    payments?: boolean | Reservation$paymentsArgs<ExtArgs>
    _count?: boolean | ReservationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>



  export type ReservationSelectScalar = {
    id?: boolean
    code?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    apartmentId?: boolean
    customerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ReservationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "startDate" | "endDate" | "status" | "apartmentId" | "customerId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["reservation"]>
  export type ReservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    reserveState?: boolean | ReserveStateDefaultArgs<ExtArgs>
    payments?: boolean | Reservation$paymentsArgs<ExtArgs>
    _count?: boolean | ReservationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {
      apartment: Prisma.$ApartmentPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs>
      reserveState: Prisma.$ReserveStatePayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      startDate: Date
      endDate: Date
      status: number
      apartmentId: number
      customerId: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }

  type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = $Result.GetResult<Prisma.$ReservationPayload, S>

  type ReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface ReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservation'], meta: { name: 'Reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {ReservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationFindUniqueArgs>(args: SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationFindFirstArgs>(args?: SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationWithIdOnly = await prisma.reservation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationFindManyArgs>(args?: SelectSubset<T, ReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservation.
     * @param {ReservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
     */
    create<T extends ReservationCreateArgs>(args: SelectSubset<T, ReservationCreateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservations.
     * @param {ReservationCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationCreateManyArgs>(args?: SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reservation.
     * @param {ReservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
     */
    delete<T extends ReservationDeleteArgs>(args: SelectSubset<T, ReservationDeleteArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservation.
     * @param {ReservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationUpdateArgs>(args: SelectSubset<T, ReservationUpdateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationDeleteManyArgs>(args?: SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationUpdateManyArgs>(args: SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reservation.
     * @param {ReservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
     */
    upsert<T extends ReservationUpsertArgs>(args: SelectSubset<T, ReservationUpsertArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationCountArgs>(
      args?: Subset<T, ReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationGroupByArgs} args - Group by arguments.
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
      T extends ReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationGroupByArgs['orderBy'] }
        : { orderBy?: ReservationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservation model
   */
  readonly fields: ReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apartment<T extends ApartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApartmentDefaultArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reserveState<T extends ReserveStateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReserveStateDefaultArgs<ExtArgs>>): Prisma__ReserveStateClient<$Result.GetResult<Prisma.$ReserveStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends Reservation$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Reservation model
   */
  interface ReservationFieldRefs {
    readonly id: FieldRef<"Reservation", 'Int'>
    readonly code: FieldRef<"Reservation", 'String'>
    readonly startDate: FieldRef<"Reservation", 'DateTime'>
    readonly endDate: FieldRef<"Reservation", 'DateTime'>
    readonly status: FieldRef<"Reservation", 'Int'>
    readonly apartmentId: FieldRef<"Reservation", 'Int'>
    readonly customerId: FieldRef<"Reservation", 'Int'>
    readonly createdAt: FieldRef<"Reservation", 'DateTime'>
    readonly updatedAt: FieldRef<"Reservation", 'DateTime'>
    readonly deletedAt: FieldRef<"Reservation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reservation findUnique
   */
  export type ReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findUniqueOrThrow
   */
  export type ReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findFirst
   */
  export type ReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findFirstOrThrow
   */
  export type ReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findMany
   */
  export type ReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation create
   */
  export type ReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservation.
     */
    data: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
  }

  /**
   * Reservation createMany
   */
  export type ReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservation update
   */
  export type ReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservation.
     */
    data: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
    /**
     * Choose, which Reservation to update.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation updateMany
   */
  export type ReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
  }

  /**
   * Reservation upsert
   */
  export type ReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservation to update in case it exists.
     */
    where: ReservationWhereUniqueInput
    /**
     * In case the Reservation found by the `where` argument doesn't exist, create a new Reservation with this data.
     */
    create: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
    /**
     * In case the Reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
  }

  /**
   * Reservation delete
   */
  export type ReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter which Reservation to delete.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation deleteMany
   */
  export type ReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to delete.
     */
    limit?: number
  }

  /**
   * Reservation.payments
   */
  export type Reservation$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Reservation without action
   */
  export type ReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
  }


  /**
   * Model PaymentConcept
   */

  export type AggregatePaymentConcept = {
    _count: PaymentConceptCountAggregateOutputType | null
    _avg: PaymentConceptAvgAggregateOutputType | null
    _sum: PaymentConceptSumAggregateOutputType | null
    _min: PaymentConceptMinAggregateOutputType | null
    _max: PaymentConceptMaxAggregateOutputType | null
  }

  export type PaymentConceptAvgAggregateOutputType = {
    id: number | null
  }

  export type PaymentConceptSumAggregateOutputType = {
    id: number | null
  }

  export type PaymentConceptMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PaymentConceptMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PaymentConceptCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type PaymentConceptAvgAggregateInputType = {
    id?: true
  }

  export type PaymentConceptSumAggregateInputType = {
    id?: true
  }

  export type PaymentConceptMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PaymentConceptMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PaymentConceptCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type PaymentConceptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentConcept to aggregate.
     */
    where?: PaymentConceptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentConcepts to fetch.
     */
    orderBy?: PaymentConceptOrderByWithRelationInput | PaymentConceptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentConceptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentConcepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentConcepts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentConcepts
    **/
    _count?: true | PaymentConceptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentConceptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentConceptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentConceptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentConceptMaxAggregateInputType
  }

  export type GetPaymentConceptAggregateType<T extends PaymentConceptAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentConcept]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentConcept[P]>
      : GetScalarType<T[P], AggregatePaymentConcept[P]>
  }




  export type PaymentConceptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentConceptWhereInput
    orderBy?: PaymentConceptOrderByWithAggregationInput | PaymentConceptOrderByWithAggregationInput[]
    by: PaymentConceptScalarFieldEnum[] | PaymentConceptScalarFieldEnum
    having?: PaymentConceptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentConceptCountAggregateInputType | true
    _avg?: PaymentConceptAvgAggregateInputType
    _sum?: PaymentConceptSumAggregateInputType
    _min?: PaymentConceptMinAggregateInputType
    _max?: PaymentConceptMaxAggregateInputType
  }

  export type PaymentConceptGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: PaymentConceptCountAggregateOutputType | null
    _avg: PaymentConceptAvgAggregateOutputType | null
    _sum: PaymentConceptSumAggregateOutputType | null
    _min: PaymentConceptMinAggregateOutputType | null
    _max: PaymentConceptMaxAggregateOutputType | null
  }

  type GetPaymentConceptGroupByPayload<T extends PaymentConceptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentConceptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentConceptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentConceptGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentConceptGroupByOutputType[P]>
        }
      >
    >


  export type PaymentConceptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    payments?: boolean | PaymentConcept$paymentsArgs<ExtArgs>
    _count?: boolean | PaymentConceptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentConcept"]>



  export type PaymentConceptSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type PaymentConceptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["paymentConcept"]>
  export type PaymentConceptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | PaymentConcept$paymentsArgs<ExtArgs>
    _count?: boolean | PaymentConceptCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PaymentConceptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentConcept"
    objects: {
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["paymentConcept"]>
    composites: {}
  }

  type PaymentConceptGetPayload<S extends boolean | null | undefined | PaymentConceptDefaultArgs> = $Result.GetResult<Prisma.$PaymentConceptPayload, S>

  type PaymentConceptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentConceptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentConceptCountAggregateInputType | true
    }

  export interface PaymentConceptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentConcept'], meta: { name: 'PaymentConcept' } }
    /**
     * Find zero or one PaymentConcept that matches the filter.
     * @param {PaymentConceptFindUniqueArgs} args - Arguments to find a PaymentConcept
     * @example
     * // Get one PaymentConcept
     * const paymentConcept = await prisma.paymentConcept.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentConceptFindUniqueArgs>(args: SelectSubset<T, PaymentConceptFindUniqueArgs<ExtArgs>>): Prisma__PaymentConceptClient<$Result.GetResult<Prisma.$PaymentConceptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentConcept that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentConceptFindUniqueOrThrowArgs} args - Arguments to find a PaymentConcept
     * @example
     * // Get one PaymentConcept
     * const paymentConcept = await prisma.paymentConcept.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentConceptFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentConceptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentConceptClient<$Result.GetResult<Prisma.$PaymentConceptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentConcept that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentConceptFindFirstArgs} args - Arguments to find a PaymentConcept
     * @example
     * // Get one PaymentConcept
     * const paymentConcept = await prisma.paymentConcept.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentConceptFindFirstArgs>(args?: SelectSubset<T, PaymentConceptFindFirstArgs<ExtArgs>>): Prisma__PaymentConceptClient<$Result.GetResult<Prisma.$PaymentConceptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentConcept that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentConceptFindFirstOrThrowArgs} args - Arguments to find a PaymentConcept
     * @example
     * // Get one PaymentConcept
     * const paymentConcept = await prisma.paymentConcept.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentConceptFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentConceptFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentConceptClient<$Result.GetResult<Prisma.$PaymentConceptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentConcepts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentConceptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentConcepts
     * const paymentConcepts = await prisma.paymentConcept.findMany()
     * 
     * // Get first 10 PaymentConcepts
     * const paymentConcepts = await prisma.paymentConcept.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentConceptWithIdOnly = await prisma.paymentConcept.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentConceptFindManyArgs>(args?: SelectSubset<T, PaymentConceptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentConceptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentConcept.
     * @param {PaymentConceptCreateArgs} args - Arguments to create a PaymentConcept.
     * @example
     * // Create one PaymentConcept
     * const PaymentConcept = await prisma.paymentConcept.create({
     *   data: {
     *     // ... data to create a PaymentConcept
     *   }
     * })
     * 
     */
    create<T extends PaymentConceptCreateArgs>(args: SelectSubset<T, PaymentConceptCreateArgs<ExtArgs>>): Prisma__PaymentConceptClient<$Result.GetResult<Prisma.$PaymentConceptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentConcepts.
     * @param {PaymentConceptCreateManyArgs} args - Arguments to create many PaymentConcepts.
     * @example
     * // Create many PaymentConcepts
     * const paymentConcept = await prisma.paymentConcept.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentConceptCreateManyArgs>(args?: SelectSubset<T, PaymentConceptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PaymentConcept.
     * @param {PaymentConceptDeleteArgs} args - Arguments to delete one PaymentConcept.
     * @example
     * // Delete one PaymentConcept
     * const PaymentConcept = await prisma.paymentConcept.delete({
     *   where: {
     *     // ... filter to delete one PaymentConcept
     *   }
     * })
     * 
     */
    delete<T extends PaymentConceptDeleteArgs>(args: SelectSubset<T, PaymentConceptDeleteArgs<ExtArgs>>): Prisma__PaymentConceptClient<$Result.GetResult<Prisma.$PaymentConceptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentConcept.
     * @param {PaymentConceptUpdateArgs} args - Arguments to update one PaymentConcept.
     * @example
     * // Update one PaymentConcept
     * const paymentConcept = await prisma.paymentConcept.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentConceptUpdateArgs>(args: SelectSubset<T, PaymentConceptUpdateArgs<ExtArgs>>): Prisma__PaymentConceptClient<$Result.GetResult<Prisma.$PaymentConceptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentConcepts.
     * @param {PaymentConceptDeleteManyArgs} args - Arguments to filter PaymentConcepts to delete.
     * @example
     * // Delete a few PaymentConcepts
     * const { count } = await prisma.paymentConcept.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentConceptDeleteManyArgs>(args?: SelectSubset<T, PaymentConceptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentConcepts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentConceptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentConcepts
     * const paymentConcept = await prisma.paymentConcept.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentConceptUpdateManyArgs>(args: SelectSubset<T, PaymentConceptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentConcept.
     * @param {PaymentConceptUpsertArgs} args - Arguments to update or create a PaymentConcept.
     * @example
     * // Update or create a PaymentConcept
     * const paymentConcept = await prisma.paymentConcept.upsert({
     *   create: {
     *     // ... data to create a PaymentConcept
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentConcept we want to update
     *   }
     * })
     */
    upsert<T extends PaymentConceptUpsertArgs>(args: SelectSubset<T, PaymentConceptUpsertArgs<ExtArgs>>): Prisma__PaymentConceptClient<$Result.GetResult<Prisma.$PaymentConceptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentConcepts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentConceptCountArgs} args - Arguments to filter PaymentConcepts to count.
     * @example
     * // Count the number of PaymentConcepts
     * const count = await prisma.paymentConcept.count({
     *   where: {
     *     // ... the filter for the PaymentConcepts we want to count
     *   }
     * })
    **/
    count<T extends PaymentConceptCountArgs>(
      args?: Subset<T, PaymentConceptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentConceptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentConcept.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentConceptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentConceptAggregateArgs>(args: Subset<T, PaymentConceptAggregateArgs>): Prisma.PrismaPromise<GetPaymentConceptAggregateType<T>>

    /**
     * Group by PaymentConcept.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentConceptGroupByArgs} args - Group by arguments.
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
      T extends PaymentConceptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentConceptGroupByArgs['orderBy'] }
        : { orderBy?: PaymentConceptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentConceptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentConceptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentConcept model
   */
  readonly fields: PaymentConceptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentConcept.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentConceptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payments<T extends PaymentConcept$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, PaymentConcept$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PaymentConcept model
   */
  interface PaymentConceptFieldRefs {
    readonly id: FieldRef<"PaymentConcept", 'Int'>
    readonly name: FieldRef<"PaymentConcept", 'String'>
    readonly description: FieldRef<"PaymentConcept", 'String'>
    readonly createdAt: FieldRef<"PaymentConcept", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentConcept", 'DateTime'>
    readonly deletedAt: FieldRef<"PaymentConcept", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentConcept findUnique
   */
  export type PaymentConceptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentConcept
     */
    select?: PaymentConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentConcept
     */
    omit?: PaymentConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentConceptInclude<ExtArgs> | null
    /**
     * Filter, which PaymentConcept to fetch.
     */
    where: PaymentConceptWhereUniqueInput
  }

  /**
   * PaymentConcept findUniqueOrThrow
   */
  export type PaymentConceptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentConcept
     */
    select?: PaymentConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentConcept
     */
    omit?: PaymentConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentConceptInclude<ExtArgs> | null
    /**
     * Filter, which PaymentConcept to fetch.
     */
    where: PaymentConceptWhereUniqueInput
  }

  /**
   * PaymentConcept findFirst
   */
  export type PaymentConceptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentConcept
     */
    select?: PaymentConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentConcept
     */
    omit?: PaymentConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentConceptInclude<ExtArgs> | null
    /**
     * Filter, which PaymentConcept to fetch.
     */
    where?: PaymentConceptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentConcepts to fetch.
     */
    orderBy?: PaymentConceptOrderByWithRelationInput | PaymentConceptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentConcepts.
     */
    cursor?: PaymentConceptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentConcepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentConcepts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentConcepts.
     */
    distinct?: PaymentConceptScalarFieldEnum | PaymentConceptScalarFieldEnum[]
  }

  /**
   * PaymentConcept findFirstOrThrow
   */
  export type PaymentConceptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentConcept
     */
    select?: PaymentConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentConcept
     */
    omit?: PaymentConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentConceptInclude<ExtArgs> | null
    /**
     * Filter, which PaymentConcept to fetch.
     */
    where?: PaymentConceptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentConcepts to fetch.
     */
    orderBy?: PaymentConceptOrderByWithRelationInput | PaymentConceptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentConcepts.
     */
    cursor?: PaymentConceptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentConcepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentConcepts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentConcepts.
     */
    distinct?: PaymentConceptScalarFieldEnum | PaymentConceptScalarFieldEnum[]
  }

  /**
   * PaymentConcept findMany
   */
  export type PaymentConceptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentConcept
     */
    select?: PaymentConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentConcept
     */
    omit?: PaymentConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentConceptInclude<ExtArgs> | null
    /**
     * Filter, which PaymentConcepts to fetch.
     */
    where?: PaymentConceptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentConcepts to fetch.
     */
    orderBy?: PaymentConceptOrderByWithRelationInput | PaymentConceptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentConcepts.
     */
    cursor?: PaymentConceptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentConcepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentConcepts.
     */
    skip?: number
    distinct?: PaymentConceptScalarFieldEnum | PaymentConceptScalarFieldEnum[]
  }

  /**
   * PaymentConcept create
   */
  export type PaymentConceptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentConcept
     */
    select?: PaymentConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentConcept
     */
    omit?: PaymentConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentConceptInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentConcept.
     */
    data: XOR<PaymentConceptCreateInput, PaymentConceptUncheckedCreateInput>
  }

  /**
   * PaymentConcept createMany
   */
  export type PaymentConceptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentConcepts.
     */
    data: PaymentConceptCreateManyInput | PaymentConceptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentConcept update
   */
  export type PaymentConceptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentConcept
     */
    select?: PaymentConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentConcept
     */
    omit?: PaymentConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentConceptInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentConcept.
     */
    data: XOR<PaymentConceptUpdateInput, PaymentConceptUncheckedUpdateInput>
    /**
     * Choose, which PaymentConcept to update.
     */
    where: PaymentConceptWhereUniqueInput
  }

  /**
   * PaymentConcept updateMany
   */
  export type PaymentConceptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentConcepts.
     */
    data: XOR<PaymentConceptUpdateManyMutationInput, PaymentConceptUncheckedUpdateManyInput>
    /**
     * Filter which PaymentConcepts to update
     */
    where?: PaymentConceptWhereInput
    /**
     * Limit how many PaymentConcepts to update.
     */
    limit?: number
  }

  /**
   * PaymentConcept upsert
   */
  export type PaymentConceptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentConcept
     */
    select?: PaymentConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentConcept
     */
    omit?: PaymentConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentConceptInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentConcept to update in case it exists.
     */
    where: PaymentConceptWhereUniqueInput
    /**
     * In case the PaymentConcept found by the `where` argument doesn't exist, create a new PaymentConcept with this data.
     */
    create: XOR<PaymentConceptCreateInput, PaymentConceptUncheckedCreateInput>
    /**
     * In case the PaymentConcept was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentConceptUpdateInput, PaymentConceptUncheckedUpdateInput>
  }

  /**
   * PaymentConcept delete
   */
  export type PaymentConceptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentConcept
     */
    select?: PaymentConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentConcept
     */
    omit?: PaymentConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentConceptInclude<ExtArgs> | null
    /**
     * Filter which PaymentConcept to delete.
     */
    where: PaymentConceptWhereUniqueInput
  }

  /**
   * PaymentConcept deleteMany
   */
  export type PaymentConceptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentConcepts to delete
     */
    where?: PaymentConceptWhereInput
    /**
     * Limit how many PaymentConcepts to delete.
     */
    limit?: number
  }

  /**
   * PaymentConcept.payments
   */
  export type PaymentConcept$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * PaymentConcept without action
   */
  export type PaymentConceptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentConcept
     */
    select?: PaymentConceptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentConcept
     */
    omit?: PaymentConceptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentConceptInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    reservationId: number | null
    conceptId: number | null
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    reservationId: number | null
    conceptId: number | null
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    reservationId: number | null
    conceptId: number | null
    amount: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    reservationId: number | null
    conceptId: number | null
    amount: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    reservationId: number
    conceptId: number
    amount: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    reservationId?: true
    conceptId?: true
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    reservationId?: true
    conceptId?: true
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    reservationId?: true
    conceptId?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    reservationId?: true
    conceptId?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    reservationId?: true
    conceptId?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    reservationId: number
    conceptId: number
    amount: Decimal
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    conceptId?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
    concept?: boolean | PaymentConceptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>



  export type PaymentSelectScalar = {
    id?: boolean
    reservationId?: boolean
    conceptId?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reservationId" | "conceptId" | "amount" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
    concept?: boolean | PaymentConceptDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      reservation: Prisma.$ReservationPayload<ExtArgs>
      concept: Prisma.$PaymentConceptPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reservationId: number
      conceptId: number
      amount: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservation<T extends ReservationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservationDefaultArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    concept<T extends PaymentConceptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentConceptDefaultArgs<ExtArgs>>): Prisma__PaymentConceptClient<$Result.GetResult<Prisma.$PaymentConceptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly reservationId: FieldRef<"Payment", 'Int'>
    readonly conceptId: FieldRef<"Payment", 'Int'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
    readonly deletedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
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


  export const TypeApartmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type TypeApartmentScalarFieldEnum = (typeof TypeApartmentScalarFieldEnum)[keyof typeof TypeApartmentScalarFieldEnum]


  export const ApartmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    city: 'city',
    country: 'country',
    latitude: 'latitude',
    longitude: 'longitude',
    isActive: 'isActive',
    typeApartmentId: 'typeApartmentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ApartmentScalarFieldEnum = (typeof ApartmentScalarFieldEnum)[keyof typeof ApartmentScalarFieldEnum]


  export const ApartmentRateScalarFieldEnum: {
    id: 'id',
    apartmentId: 'apartmentId',
    startDate: 'startDate',
    endDate: 'endDate',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ApartmentRateScalarFieldEnum = (typeof ApartmentRateScalarFieldEnum)[keyof typeof ApartmentRateScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    surname: 'surname',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const ReserveStateScalarFieldEnum: {
    id: 'id',
    state: 'state',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ReserveStateScalarFieldEnum = (typeof ReserveStateScalarFieldEnum)[keyof typeof ReserveStateScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    id: 'id',
    code: 'code',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    apartmentId: 'apartmentId',
    customerId: 'customerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const PaymentConceptScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type PaymentConceptScalarFieldEnum = (typeof PaymentConceptScalarFieldEnum)[keyof typeof PaymentConceptScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    reservationId: 'reservationId',
    conceptId: 'conceptId',
    amount: 'amount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


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


  export const TypeApartmentOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type TypeApartmentOrderByRelevanceFieldEnum = (typeof TypeApartmentOrderByRelevanceFieldEnum)[keyof typeof TypeApartmentOrderByRelevanceFieldEnum]


  export const ApartmentOrderByRelevanceFieldEnum: {
    name: 'name',
    address: 'address',
    city: 'city',
    country: 'country'
  };

  export type ApartmentOrderByRelevanceFieldEnum = (typeof ApartmentOrderByRelevanceFieldEnum)[keyof typeof ApartmentOrderByRelevanceFieldEnum]


  export const CustomerOrderByRelevanceFieldEnum: {
    name: 'name',
    surname: 'surname',
    email: 'email'
  };

  export type CustomerOrderByRelevanceFieldEnum = (typeof CustomerOrderByRelevanceFieldEnum)[keyof typeof CustomerOrderByRelevanceFieldEnum]


  export const ReserveStateOrderByRelevanceFieldEnum: {
    state: 'state',
    description: 'description'
  };

  export type ReserveStateOrderByRelevanceFieldEnum = (typeof ReserveStateOrderByRelevanceFieldEnum)[keyof typeof ReserveStateOrderByRelevanceFieldEnum]


  export const ReservationOrderByRelevanceFieldEnum: {
    code: 'code'
  };

  export type ReservationOrderByRelevanceFieldEnum = (typeof ReservationOrderByRelevanceFieldEnum)[keyof typeof ReservationOrderByRelevanceFieldEnum]


  export const PaymentConceptOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type PaymentConceptOrderByRelevanceFieldEnum = (typeof PaymentConceptOrderByRelevanceFieldEnum)[keyof typeof PaymentConceptOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type TypeApartmentWhereInput = {
    AND?: TypeApartmentWhereInput | TypeApartmentWhereInput[]
    OR?: TypeApartmentWhereInput[]
    NOT?: TypeApartmentWhereInput | TypeApartmentWhereInput[]
    id?: IntFilter<"TypeApartment"> | number
    name?: StringFilter<"TypeApartment"> | string
    description?: StringNullableFilter<"TypeApartment"> | string | null
    createdAt?: DateTimeFilter<"TypeApartment"> | Date | string
    updatedAt?: DateTimeFilter<"TypeApartment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TypeApartment"> | Date | string | null
    apartments?: ApartmentListRelationFilter
  }

  export type TypeApartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    apartments?: ApartmentOrderByRelationAggregateInput
    _relevance?: TypeApartmentOrderByRelevanceInput
  }

  export type TypeApartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TypeApartmentWhereInput | TypeApartmentWhereInput[]
    OR?: TypeApartmentWhereInput[]
    NOT?: TypeApartmentWhereInput | TypeApartmentWhereInput[]
    name?: StringFilter<"TypeApartment"> | string
    description?: StringNullableFilter<"TypeApartment"> | string | null
    createdAt?: DateTimeFilter<"TypeApartment"> | Date | string
    updatedAt?: DateTimeFilter<"TypeApartment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TypeApartment"> | Date | string | null
    apartments?: ApartmentListRelationFilter
  }, "id">

  export type TypeApartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: TypeApartmentCountOrderByAggregateInput
    _avg?: TypeApartmentAvgOrderByAggregateInput
    _max?: TypeApartmentMaxOrderByAggregateInput
    _min?: TypeApartmentMinOrderByAggregateInput
    _sum?: TypeApartmentSumOrderByAggregateInput
  }

  export type TypeApartmentScalarWhereWithAggregatesInput = {
    AND?: TypeApartmentScalarWhereWithAggregatesInput | TypeApartmentScalarWhereWithAggregatesInput[]
    OR?: TypeApartmentScalarWhereWithAggregatesInput[]
    NOT?: TypeApartmentScalarWhereWithAggregatesInput | TypeApartmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TypeApartment"> | number
    name?: StringWithAggregatesFilter<"TypeApartment"> | string
    description?: StringNullableWithAggregatesFilter<"TypeApartment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TypeApartment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TypeApartment"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"TypeApartment"> | Date | string | null
  }

  export type ApartmentWhereInput = {
    AND?: ApartmentWhereInput | ApartmentWhereInput[]
    OR?: ApartmentWhereInput[]
    NOT?: ApartmentWhereInput | ApartmentWhereInput[]
    id?: IntFilter<"Apartment"> | number
    name?: StringFilter<"Apartment"> | string
    address?: StringFilter<"Apartment"> | string
    city?: StringFilter<"Apartment"> | string
    country?: StringFilter<"Apartment"> | string
    latitude?: DecimalFilter<"Apartment"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Apartment"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolNullableFilter<"Apartment"> | boolean | null
    typeApartmentId?: IntFilter<"Apartment"> | number
    createdAt?: DateTimeFilter<"Apartment"> | Date | string
    updatedAt?: DateTimeFilter<"Apartment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Apartment"> | Date | string | null
    typeApartment?: XOR<TypeApartmentScalarRelationFilter, TypeApartmentWhereInput>
    rates?: ApartmentRateListRelationFilter
    reservations?: ReservationListRelationFilter
  }

  export type ApartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isActive?: SortOrderInput | SortOrder
    typeApartmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    typeApartment?: TypeApartmentOrderByWithRelationInput
    rates?: ApartmentRateOrderByRelationAggregateInput
    reservations?: ReservationOrderByRelationAggregateInput
    _relevance?: ApartmentOrderByRelevanceInput
  }

  export type ApartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ApartmentWhereInput | ApartmentWhereInput[]
    OR?: ApartmentWhereInput[]
    NOT?: ApartmentWhereInput | ApartmentWhereInput[]
    name?: StringFilter<"Apartment"> | string
    address?: StringFilter<"Apartment"> | string
    city?: StringFilter<"Apartment"> | string
    country?: StringFilter<"Apartment"> | string
    latitude?: DecimalFilter<"Apartment"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Apartment"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolNullableFilter<"Apartment"> | boolean | null
    typeApartmentId?: IntFilter<"Apartment"> | number
    createdAt?: DateTimeFilter<"Apartment"> | Date | string
    updatedAt?: DateTimeFilter<"Apartment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Apartment"> | Date | string | null
    typeApartment?: XOR<TypeApartmentScalarRelationFilter, TypeApartmentWhereInput>
    rates?: ApartmentRateListRelationFilter
    reservations?: ReservationListRelationFilter
  }, "id">

  export type ApartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isActive?: SortOrderInput | SortOrder
    typeApartmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ApartmentCountOrderByAggregateInput
    _avg?: ApartmentAvgOrderByAggregateInput
    _max?: ApartmentMaxOrderByAggregateInput
    _min?: ApartmentMinOrderByAggregateInput
    _sum?: ApartmentSumOrderByAggregateInput
  }

  export type ApartmentScalarWhereWithAggregatesInput = {
    AND?: ApartmentScalarWhereWithAggregatesInput | ApartmentScalarWhereWithAggregatesInput[]
    OR?: ApartmentScalarWhereWithAggregatesInput[]
    NOT?: ApartmentScalarWhereWithAggregatesInput | ApartmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Apartment"> | number
    name?: StringWithAggregatesFilter<"Apartment"> | string
    address?: StringWithAggregatesFilter<"Apartment"> | string
    city?: StringWithAggregatesFilter<"Apartment"> | string
    country?: StringWithAggregatesFilter<"Apartment"> | string
    latitude?: DecimalWithAggregatesFilter<"Apartment"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter<"Apartment"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolNullableWithAggregatesFilter<"Apartment"> | boolean | null
    typeApartmentId?: IntWithAggregatesFilter<"Apartment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Apartment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Apartment"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Apartment"> | Date | string | null
  }

  export type ApartmentRateWhereInput = {
    AND?: ApartmentRateWhereInput | ApartmentRateWhereInput[]
    OR?: ApartmentRateWhereInput[]
    NOT?: ApartmentRateWhereInput | ApartmentRateWhereInput[]
    id?: IntFilter<"ApartmentRate"> | number
    apartmentId?: IntFilter<"ApartmentRate"> | number
    startDate?: DateTimeFilter<"ApartmentRate"> | Date | string
    endDate?: DateTimeFilter<"ApartmentRate"> | Date | string
    price?: DecimalFilter<"ApartmentRate"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"ApartmentRate"> | Date | string
    updatedAt?: DateTimeFilter<"ApartmentRate"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ApartmentRate"> | Date | string | null
    apartment?: XOR<ApartmentScalarRelationFilter, ApartmentWhereInput>
  }

  export type ApartmentRateOrderByWithRelationInput = {
    id?: SortOrder
    apartmentId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    apartment?: ApartmentOrderByWithRelationInput
  }

  export type ApartmentRateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ApartmentRateWhereInput | ApartmentRateWhereInput[]
    OR?: ApartmentRateWhereInput[]
    NOT?: ApartmentRateWhereInput | ApartmentRateWhereInput[]
    apartmentId?: IntFilter<"ApartmentRate"> | number
    startDate?: DateTimeFilter<"ApartmentRate"> | Date | string
    endDate?: DateTimeFilter<"ApartmentRate"> | Date | string
    price?: DecimalFilter<"ApartmentRate"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"ApartmentRate"> | Date | string
    updatedAt?: DateTimeFilter<"ApartmentRate"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ApartmentRate"> | Date | string | null
    apartment?: XOR<ApartmentScalarRelationFilter, ApartmentWhereInput>
  }, "id">

  export type ApartmentRateOrderByWithAggregationInput = {
    id?: SortOrder
    apartmentId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ApartmentRateCountOrderByAggregateInput
    _avg?: ApartmentRateAvgOrderByAggregateInput
    _max?: ApartmentRateMaxOrderByAggregateInput
    _min?: ApartmentRateMinOrderByAggregateInput
    _sum?: ApartmentRateSumOrderByAggregateInput
  }

  export type ApartmentRateScalarWhereWithAggregatesInput = {
    AND?: ApartmentRateScalarWhereWithAggregatesInput | ApartmentRateScalarWhereWithAggregatesInput[]
    OR?: ApartmentRateScalarWhereWithAggregatesInput[]
    NOT?: ApartmentRateScalarWhereWithAggregatesInput | ApartmentRateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ApartmentRate"> | number
    apartmentId?: IntWithAggregatesFilter<"ApartmentRate"> | number
    startDate?: DateTimeWithAggregatesFilter<"ApartmentRate"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"ApartmentRate"> | Date | string
    price?: DecimalWithAggregatesFilter<"ApartmentRate"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"ApartmentRate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ApartmentRate"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"ApartmentRate"> | Date | string | null
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    name?: StringFilter<"Customer"> | string
    surname?: StringNullableFilter<"Customer"> | string | null
    email?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Customer"> | Date | string | null
    reservations?: ReservationListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrderInput | SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    reservations?: ReservationOrderByRelationAggregateInput
    _relevance?: CustomerOrderByRelevanceInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    surname?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Customer"> | Date | string | null
    reservations?: ReservationListRelationFilter
  }, "id" | "email">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrderInput | SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    name?: StringWithAggregatesFilter<"Customer"> | string
    surname?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    email?: StringWithAggregatesFilter<"Customer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Customer"> | Date | string | null
  }

  export type ReserveStateWhereInput = {
    AND?: ReserveStateWhereInput | ReserveStateWhereInput[]
    OR?: ReserveStateWhereInput[]
    NOT?: ReserveStateWhereInput | ReserveStateWhereInput[]
    id?: IntFilter<"ReserveState"> | number
    state?: StringFilter<"ReserveState"> | string
    description?: StringNullableFilter<"ReserveState"> | string | null
    createdAt?: DateTimeFilter<"ReserveState"> | Date | string
    updatedAt?: DateTimeFilter<"ReserveState"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ReserveState"> | Date | string | null
    reservations?: ReservationListRelationFilter
  }

  export type ReserveStateOrderByWithRelationInput = {
    id?: SortOrder
    state?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    reservations?: ReservationOrderByRelationAggregateInput
    _relevance?: ReserveStateOrderByRelevanceInput
  }

  export type ReserveStateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReserveStateWhereInput | ReserveStateWhereInput[]
    OR?: ReserveStateWhereInput[]
    NOT?: ReserveStateWhereInput | ReserveStateWhereInput[]
    state?: StringFilter<"ReserveState"> | string
    description?: StringNullableFilter<"ReserveState"> | string | null
    createdAt?: DateTimeFilter<"ReserveState"> | Date | string
    updatedAt?: DateTimeFilter<"ReserveState"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ReserveState"> | Date | string | null
    reservations?: ReservationListRelationFilter
  }, "id">

  export type ReserveStateOrderByWithAggregationInput = {
    id?: SortOrder
    state?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ReserveStateCountOrderByAggregateInput
    _avg?: ReserveStateAvgOrderByAggregateInput
    _max?: ReserveStateMaxOrderByAggregateInput
    _min?: ReserveStateMinOrderByAggregateInput
    _sum?: ReserveStateSumOrderByAggregateInput
  }

  export type ReserveStateScalarWhereWithAggregatesInput = {
    AND?: ReserveStateScalarWhereWithAggregatesInput | ReserveStateScalarWhereWithAggregatesInput[]
    OR?: ReserveStateScalarWhereWithAggregatesInput[]
    NOT?: ReserveStateScalarWhereWithAggregatesInput | ReserveStateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ReserveState"> | number
    state?: StringWithAggregatesFilter<"ReserveState"> | string
    description?: StringNullableWithAggregatesFilter<"ReserveState"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ReserveState"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReserveState"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"ReserveState"> | Date | string | null
  }

  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    id?: IntFilter<"Reservation"> | number
    code?: StringFilter<"Reservation"> | string
    startDate?: DateTimeFilter<"Reservation"> | Date | string
    endDate?: DateTimeFilter<"Reservation"> | Date | string
    status?: IntFilter<"Reservation"> | number
    apartmentId?: IntFilter<"Reservation"> | number
    customerId?: IntFilter<"Reservation"> | number
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
    apartment?: XOR<ApartmentScalarRelationFilter, ApartmentWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    reserveState?: XOR<ReserveStateScalarRelationFilter, ReserveStateWhereInput>
    payments?: PaymentListRelationFilter
  }

  export type ReservationOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    apartmentId?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    apartment?: ApartmentOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    reserveState?: ReserveStateOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
    _relevance?: ReservationOrderByRelevanceInput
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    startDate?: DateTimeFilter<"Reservation"> | Date | string
    endDate?: DateTimeFilter<"Reservation"> | Date | string
    status?: IntFilter<"Reservation"> | number
    apartmentId?: IntFilter<"Reservation"> | number
    customerId?: IntFilter<"Reservation"> | number
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
    apartment?: XOR<ApartmentScalarRelationFilter, ApartmentWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    reserveState?: XOR<ReserveStateScalarRelationFilter, ReserveStateWhereInput>
    payments?: PaymentListRelationFilter
  }, "id" | "code">

  export type ReservationOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    apartmentId?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ReservationCountOrderByAggregateInput
    _avg?: ReservationAvgOrderByAggregateInput
    _max?: ReservationMaxOrderByAggregateInput
    _min?: ReservationMinOrderByAggregateInput
    _sum?: ReservationSumOrderByAggregateInput
  }

  export type ReservationScalarWhereWithAggregatesInput = {
    AND?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    OR?: ReservationScalarWhereWithAggregatesInput[]
    NOT?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reservation"> | number
    code?: StringWithAggregatesFilter<"Reservation"> | string
    startDate?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    status?: IntWithAggregatesFilter<"Reservation"> | number
    apartmentId?: IntWithAggregatesFilter<"Reservation"> | number
    customerId?: IntWithAggregatesFilter<"Reservation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Reservation"> | Date | string | null
  }

  export type PaymentConceptWhereInput = {
    AND?: PaymentConceptWhereInput | PaymentConceptWhereInput[]
    OR?: PaymentConceptWhereInput[]
    NOT?: PaymentConceptWhereInput | PaymentConceptWhereInput[]
    id?: IntFilter<"PaymentConcept"> | number
    name?: StringFilter<"PaymentConcept"> | string
    description?: StringNullableFilter<"PaymentConcept"> | string | null
    createdAt?: DateTimeFilter<"PaymentConcept"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentConcept"> | Date | string
    deletedAt?: DateTimeNullableFilter<"PaymentConcept"> | Date | string | null
    payments?: PaymentListRelationFilter
  }

  export type PaymentConceptOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    payments?: PaymentOrderByRelationAggregateInput
    _relevance?: PaymentConceptOrderByRelevanceInput
  }

  export type PaymentConceptWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentConceptWhereInput | PaymentConceptWhereInput[]
    OR?: PaymentConceptWhereInput[]
    NOT?: PaymentConceptWhereInput | PaymentConceptWhereInput[]
    name?: StringFilter<"PaymentConcept"> | string
    description?: StringNullableFilter<"PaymentConcept"> | string | null
    createdAt?: DateTimeFilter<"PaymentConcept"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentConcept"> | Date | string
    deletedAt?: DateTimeNullableFilter<"PaymentConcept"> | Date | string | null
    payments?: PaymentListRelationFilter
  }, "id">

  export type PaymentConceptOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: PaymentConceptCountOrderByAggregateInput
    _avg?: PaymentConceptAvgOrderByAggregateInput
    _max?: PaymentConceptMaxOrderByAggregateInput
    _min?: PaymentConceptMinOrderByAggregateInput
    _sum?: PaymentConceptSumOrderByAggregateInput
  }

  export type PaymentConceptScalarWhereWithAggregatesInput = {
    AND?: PaymentConceptScalarWhereWithAggregatesInput | PaymentConceptScalarWhereWithAggregatesInput[]
    OR?: PaymentConceptScalarWhereWithAggregatesInput[]
    NOT?: PaymentConceptScalarWhereWithAggregatesInput | PaymentConceptScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentConcept"> | number
    name?: StringWithAggregatesFilter<"PaymentConcept"> | string
    description?: StringNullableWithAggregatesFilter<"PaymentConcept"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PaymentConcept"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentConcept"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"PaymentConcept"> | Date | string | null
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    reservationId?: IntFilter<"Payment"> | number
    conceptId?: IntFilter<"Payment"> | number
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
    concept?: XOR<PaymentConceptScalarRelationFilter, PaymentConceptWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    conceptId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    reservation?: ReservationOrderByWithRelationInput
    concept?: PaymentConceptOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    reservationId?: IntFilter<"Payment"> | number
    conceptId?: IntFilter<"Payment"> | number
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
    concept?: XOR<PaymentConceptScalarRelationFilter, PaymentConceptWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    conceptId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    reservationId?: IntWithAggregatesFilter<"Payment"> | number
    conceptId?: IntWithAggregatesFilter<"Payment"> | number
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
  }

  export type TypeApartmentCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    apartments?: ApartmentCreateNestedManyWithoutTypeApartmentInput
  }

  export type TypeApartmentUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    apartments?: ApartmentUncheckedCreateNestedManyWithoutTypeApartmentInput
  }

  export type TypeApartmentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apartments?: ApartmentUpdateManyWithoutTypeApartmentNestedInput
  }

  export type TypeApartmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apartments?: ApartmentUncheckedUpdateManyWithoutTypeApartmentNestedInput
  }

  export type TypeApartmentCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TypeApartmentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TypeApartmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApartmentCreateInput = {
    name: string
    address: string
    city: string
    country: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    isActive?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    typeApartment: TypeApartmentCreateNestedOneWithoutApartmentsInput
    rates?: ApartmentRateCreateNestedManyWithoutApartmentInput
    reservations?: ReservationCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentUncheckedCreateInput = {
    id?: number
    name: string
    address: string
    city: string
    country: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    isActive?: boolean | null
    typeApartmentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    rates?: ApartmentRateUncheckedCreateNestedManyWithoutApartmentInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typeApartment?: TypeApartmentUpdateOneRequiredWithoutApartmentsNestedInput
    rates?: ApartmentRateUpdateManyWithoutApartmentNestedInput
    reservations?: ReservationUpdateManyWithoutApartmentNestedInput
  }

  export type ApartmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    typeApartmentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rates?: ApartmentRateUncheckedUpdateManyWithoutApartmentNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutApartmentNestedInput
  }

  export type ApartmentCreateManyInput = {
    id?: number
    name: string
    address: string
    city: string
    country: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    isActive?: boolean | null
    typeApartmentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ApartmentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApartmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    typeApartmentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApartmentRateCreateInput = {
    startDate: Date | string
    endDate: Date | string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    apartment: ApartmentCreateNestedOneWithoutRatesInput
  }

  export type ApartmentRateUncheckedCreateInput = {
    id?: number
    apartmentId: number
    startDate: Date | string
    endDate: Date | string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ApartmentRateUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apartment?: ApartmentUpdateOneRequiredWithoutRatesNestedInput
  }

  export type ApartmentRateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    apartmentId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApartmentRateCreateManyInput = {
    id?: number
    apartmentId: number
    startDate: Date | string
    endDate: Date | string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ApartmentRateUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApartmentRateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    apartmentId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerCreateInput = {
    name: string
    surname?: string | null
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reservations?: ReservationCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    name: string
    surname?: string | null
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reservations?: ReservationUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservations?: ReservationUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservations?: ReservationUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    name: string
    surname?: string | null
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReserveStateCreateInput = {
    state: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reservations?: ReservationCreateNestedManyWithoutReserveStateInput
  }

  export type ReserveStateUncheckedCreateInput = {
    id?: number
    state: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reservations?: ReservationUncheckedCreateNestedManyWithoutReserveStateInput
  }

  export type ReserveStateUpdateInput = {
    state?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservations?: ReservationUpdateManyWithoutReserveStateNestedInput
  }

  export type ReserveStateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservations?: ReservationUncheckedUpdateManyWithoutReserveStateNestedInput
  }

  export type ReserveStateCreateManyInput = {
    id?: number
    state: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ReserveStateUpdateManyMutationInput = {
    state?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReserveStateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReservationCreateInput = {
    code: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    apartment: ApartmentCreateNestedOneWithoutReservationsInput
    customer: CustomerCreateNestedOneWithoutReservationsInput
    reserveState: ReserveStateCreateNestedOneWithoutReservationsInput
    payments?: PaymentCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateInput = {
    id?: number
    code: string
    startDate: Date | string
    endDate: Date | string
    status: number
    apartmentId: number
    customerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    payments?: PaymentUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apartment?: ApartmentUpdateOneRequiredWithoutReservationsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutReservationsNestedInput
    reserveState?: ReserveStateUpdateOneRequiredWithoutReservationsNestedInput
    payments?: PaymentUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    apartmentId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationCreateManyInput = {
    id?: number
    code: string
    startDate: Date | string
    endDate: Date | string
    status: number
    apartmentId: number
    customerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ReservationUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReservationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    apartmentId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentConceptCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    payments?: PaymentCreateNestedManyWithoutConceptInput
  }

  export type PaymentConceptUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    payments?: PaymentUncheckedCreateNestedManyWithoutConceptInput
  }

  export type PaymentConceptUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentUpdateManyWithoutConceptNestedInput
  }

  export type PaymentConceptUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentUncheckedUpdateManyWithoutConceptNestedInput
  }

  export type PaymentConceptCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PaymentConceptUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentConceptUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reservation: ReservationCreateNestedOneWithoutPaymentsInput
    concept: PaymentConceptCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    reservationId: number
    conceptId: number
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PaymentUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservation?: ReservationUpdateOneRequiredWithoutPaymentsNestedInput
    concept?: PaymentConceptUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservationId?: IntFieldUpdateOperationsInput | number
    conceptId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentCreateManyInput = {
    id?: number
    reservationId: number
    conceptId: number
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PaymentUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservationId?: IntFieldUpdateOperationsInput | number
    conceptId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type ApartmentListRelationFilter = {
    every?: ApartmentWhereInput
    some?: ApartmentWhereInput
    none?: ApartmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApartmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TypeApartmentOrderByRelevanceInput = {
    fields: TypeApartmentOrderByRelevanceFieldEnum | TypeApartmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TypeApartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TypeApartmentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TypeApartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TypeApartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TypeApartmentSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type TypeApartmentScalarRelationFilter = {
    is?: TypeApartmentWhereInput
    isNot?: TypeApartmentWhereInput
  }

  export type ApartmentRateListRelationFilter = {
    every?: ApartmentRateWhereInput
    some?: ApartmentRateWhereInput
    none?: ApartmentRateWhereInput
  }

  export type ReservationListRelationFilter = {
    every?: ReservationWhereInput
    some?: ReservationWhereInput
    none?: ReservationWhereInput
  }

  export type ApartmentRateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApartmentOrderByRelevanceInput = {
    fields: ApartmentOrderByRelevanceFieldEnum | ApartmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ApartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isActive?: SortOrder
    typeApartmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ApartmentAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    typeApartmentId?: SortOrder
  }

  export type ApartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isActive?: SortOrder
    typeApartmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ApartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isActive?: SortOrder
    typeApartmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ApartmentSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    typeApartmentId?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ApartmentScalarRelationFilter = {
    is?: ApartmentWhereInput
    isNot?: ApartmentWhereInput
  }

  export type ApartmentRateCountOrderByAggregateInput = {
    id?: SortOrder
    apartmentId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ApartmentRateAvgOrderByAggregateInput = {
    id?: SortOrder
    apartmentId?: SortOrder
    price?: SortOrder
  }

  export type ApartmentRateMaxOrderByAggregateInput = {
    id?: SortOrder
    apartmentId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ApartmentRateMinOrderByAggregateInput = {
    id?: SortOrder
    apartmentId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ApartmentRateSumOrderByAggregateInput = {
    id?: SortOrder
    apartmentId?: SortOrder
    price?: SortOrder
  }

  export type CustomerOrderByRelevanceInput = {
    fields: CustomerOrderByRelevanceFieldEnum | CustomerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ReserveStateOrderByRelevanceInput = {
    fields: ReserveStateOrderByRelevanceFieldEnum | ReserveStateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReserveStateCountOrderByAggregateInput = {
    id?: SortOrder
    state?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ReserveStateAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ReserveStateMaxOrderByAggregateInput = {
    id?: SortOrder
    state?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ReserveStateMinOrderByAggregateInput = {
    id?: SortOrder
    state?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ReserveStateSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type ReserveStateScalarRelationFilter = {
    is?: ReserveStateWhereInput
    isNot?: ReserveStateWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationOrderByRelevanceInput = {
    fields: ReservationOrderByRelevanceFieldEnum | ReservationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReservationCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    apartmentId?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ReservationAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    apartmentId?: SortOrder
    customerId?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    apartmentId?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    apartmentId?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ReservationSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    apartmentId?: SortOrder
    customerId?: SortOrder
  }

  export type PaymentConceptOrderByRelevanceInput = {
    fields: PaymentConceptOrderByRelevanceFieldEnum | PaymentConceptOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentConceptCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PaymentConceptAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PaymentConceptMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PaymentConceptMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PaymentConceptSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ReservationScalarRelationFilter = {
    is?: ReservationWhereInput
    isNot?: ReservationWhereInput
  }

  export type PaymentConceptScalarRelationFilter = {
    is?: PaymentConceptWhereInput
    isNot?: PaymentConceptWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    conceptId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    conceptId?: SortOrder
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    conceptId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    conceptId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    conceptId?: SortOrder
    amount?: SortOrder
  }

  export type ApartmentCreateNestedManyWithoutTypeApartmentInput = {
    create?: XOR<ApartmentCreateWithoutTypeApartmentInput, ApartmentUncheckedCreateWithoutTypeApartmentInput> | ApartmentCreateWithoutTypeApartmentInput[] | ApartmentUncheckedCreateWithoutTypeApartmentInput[]
    connectOrCreate?: ApartmentCreateOrConnectWithoutTypeApartmentInput | ApartmentCreateOrConnectWithoutTypeApartmentInput[]
    createMany?: ApartmentCreateManyTypeApartmentInputEnvelope
    connect?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
  }

  export type ApartmentUncheckedCreateNestedManyWithoutTypeApartmentInput = {
    create?: XOR<ApartmentCreateWithoutTypeApartmentInput, ApartmentUncheckedCreateWithoutTypeApartmentInput> | ApartmentCreateWithoutTypeApartmentInput[] | ApartmentUncheckedCreateWithoutTypeApartmentInput[]
    connectOrCreate?: ApartmentCreateOrConnectWithoutTypeApartmentInput | ApartmentCreateOrConnectWithoutTypeApartmentInput[]
    createMany?: ApartmentCreateManyTypeApartmentInputEnvelope
    connect?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ApartmentUpdateManyWithoutTypeApartmentNestedInput = {
    create?: XOR<ApartmentCreateWithoutTypeApartmentInput, ApartmentUncheckedCreateWithoutTypeApartmentInput> | ApartmentCreateWithoutTypeApartmentInput[] | ApartmentUncheckedCreateWithoutTypeApartmentInput[]
    connectOrCreate?: ApartmentCreateOrConnectWithoutTypeApartmentInput | ApartmentCreateOrConnectWithoutTypeApartmentInput[]
    upsert?: ApartmentUpsertWithWhereUniqueWithoutTypeApartmentInput | ApartmentUpsertWithWhereUniqueWithoutTypeApartmentInput[]
    createMany?: ApartmentCreateManyTypeApartmentInputEnvelope
    set?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
    disconnect?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
    delete?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
    connect?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
    update?: ApartmentUpdateWithWhereUniqueWithoutTypeApartmentInput | ApartmentUpdateWithWhereUniqueWithoutTypeApartmentInput[]
    updateMany?: ApartmentUpdateManyWithWhereWithoutTypeApartmentInput | ApartmentUpdateManyWithWhereWithoutTypeApartmentInput[]
    deleteMany?: ApartmentScalarWhereInput | ApartmentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ApartmentUncheckedUpdateManyWithoutTypeApartmentNestedInput = {
    create?: XOR<ApartmentCreateWithoutTypeApartmentInput, ApartmentUncheckedCreateWithoutTypeApartmentInput> | ApartmentCreateWithoutTypeApartmentInput[] | ApartmentUncheckedCreateWithoutTypeApartmentInput[]
    connectOrCreate?: ApartmentCreateOrConnectWithoutTypeApartmentInput | ApartmentCreateOrConnectWithoutTypeApartmentInput[]
    upsert?: ApartmentUpsertWithWhereUniqueWithoutTypeApartmentInput | ApartmentUpsertWithWhereUniqueWithoutTypeApartmentInput[]
    createMany?: ApartmentCreateManyTypeApartmentInputEnvelope
    set?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
    disconnect?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
    delete?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
    connect?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
    update?: ApartmentUpdateWithWhereUniqueWithoutTypeApartmentInput | ApartmentUpdateWithWhereUniqueWithoutTypeApartmentInput[]
    updateMany?: ApartmentUpdateManyWithWhereWithoutTypeApartmentInput | ApartmentUpdateManyWithWhereWithoutTypeApartmentInput[]
    deleteMany?: ApartmentScalarWhereInput | ApartmentScalarWhereInput[]
  }

  export type TypeApartmentCreateNestedOneWithoutApartmentsInput = {
    create?: XOR<TypeApartmentCreateWithoutApartmentsInput, TypeApartmentUncheckedCreateWithoutApartmentsInput>
    connectOrCreate?: TypeApartmentCreateOrConnectWithoutApartmentsInput
    connect?: TypeApartmentWhereUniqueInput
  }

  export type ApartmentRateCreateNestedManyWithoutApartmentInput = {
    create?: XOR<ApartmentRateCreateWithoutApartmentInput, ApartmentRateUncheckedCreateWithoutApartmentInput> | ApartmentRateCreateWithoutApartmentInput[] | ApartmentRateUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: ApartmentRateCreateOrConnectWithoutApartmentInput | ApartmentRateCreateOrConnectWithoutApartmentInput[]
    createMany?: ApartmentRateCreateManyApartmentInputEnvelope
    connect?: ApartmentRateWhereUniqueInput | ApartmentRateWhereUniqueInput[]
  }

  export type ReservationCreateNestedManyWithoutApartmentInput = {
    create?: XOR<ReservationCreateWithoutApartmentInput, ReservationUncheckedCreateWithoutApartmentInput> | ReservationCreateWithoutApartmentInput[] | ReservationUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutApartmentInput | ReservationCreateOrConnectWithoutApartmentInput[]
    createMany?: ReservationCreateManyApartmentInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ApartmentRateUncheckedCreateNestedManyWithoutApartmentInput = {
    create?: XOR<ApartmentRateCreateWithoutApartmentInput, ApartmentRateUncheckedCreateWithoutApartmentInput> | ApartmentRateCreateWithoutApartmentInput[] | ApartmentRateUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: ApartmentRateCreateOrConnectWithoutApartmentInput | ApartmentRateCreateOrConnectWithoutApartmentInput[]
    createMany?: ApartmentRateCreateManyApartmentInputEnvelope
    connect?: ApartmentRateWhereUniqueInput | ApartmentRateWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutApartmentInput = {
    create?: XOR<ReservationCreateWithoutApartmentInput, ReservationUncheckedCreateWithoutApartmentInput> | ReservationCreateWithoutApartmentInput[] | ReservationUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutApartmentInput | ReservationCreateOrConnectWithoutApartmentInput[]
    createMany?: ReservationCreateManyApartmentInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type TypeApartmentUpdateOneRequiredWithoutApartmentsNestedInput = {
    create?: XOR<TypeApartmentCreateWithoutApartmentsInput, TypeApartmentUncheckedCreateWithoutApartmentsInput>
    connectOrCreate?: TypeApartmentCreateOrConnectWithoutApartmentsInput
    upsert?: TypeApartmentUpsertWithoutApartmentsInput
    connect?: TypeApartmentWhereUniqueInput
    update?: XOR<XOR<TypeApartmentUpdateToOneWithWhereWithoutApartmentsInput, TypeApartmentUpdateWithoutApartmentsInput>, TypeApartmentUncheckedUpdateWithoutApartmentsInput>
  }

  export type ApartmentRateUpdateManyWithoutApartmentNestedInput = {
    create?: XOR<ApartmentRateCreateWithoutApartmentInput, ApartmentRateUncheckedCreateWithoutApartmentInput> | ApartmentRateCreateWithoutApartmentInput[] | ApartmentRateUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: ApartmentRateCreateOrConnectWithoutApartmentInput | ApartmentRateCreateOrConnectWithoutApartmentInput[]
    upsert?: ApartmentRateUpsertWithWhereUniqueWithoutApartmentInput | ApartmentRateUpsertWithWhereUniqueWithoutApartmentInput[]
    createMany?: ApartmentRateCreateManyApartmentInputEnvelope
    set?: ApartmentRateWhereUniqueInput | ApartmentRateWhereUniqueInput[]
    disconnect?: ApartmentRateWhereUniqueInput | ApartmentRateWhereUniqueInput[]
    delete?: ApartmentRateWhereUniqueInput | ApartmentRateWhereUniqueInput[]
    connect?: ApartmentRateWhereUniqueInput | ApartmentRateWhereUniqueInput[]
    update?: ApartmentRateUpdateWithWhereUniqueWithoutApartmentInput | ApartmentRateUpdateWithWhereUniqueWithoutApartmentInput[]
    updateMany?: ApartmentRateUpdateManyWithWhereWithoutApartmentInput | ApartmentRateUpdateManyWithWhereWithoutApartmentInput[]
    deleteMany?: ApartmentRateScalarWhereInput | ApartmentRateScalarWhereInput[]
  }

  export type ReservationUpdateManyWithoutApartmentNestedInput = {
    create?: XOR<ReservationCreateWithoutApartmentInput, ReservationUncheckedCreateWithoutApartmentInput> | ReservationCreateWithoutApartmentInput[] | ReservationUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutApartmentInput | ReservationCreateOrConnectWithoutApartmentInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutApartmentInput | ReservationUpsertWithWhereUniqueWithoutApartmentInput[]
    createMany?: ReservationCreateManyApartmentInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutApartmentInput | ReservationUpdateWithWhereUniqueWithoutApartmentInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutApartmentInput | ReservationUpdateManyWithWhereWithoutApartmentInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ApartmentRateUncheckedUpdateManyWithoutApartmentNestedInput = {
    create?: XOR<ApartmentRateCreateWithoutApartmentInput, ApartmentRateUncheckedCreateWithoutApartmentInput> | ApartmentRateCreateWithoutApartmentInput[] | ApartmentRateUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: ApartmentRateCreateOrConnectWithoutApartmentInput | ApartmentRateCreateOrConnectWithoutApartmentInput[]
    upsert?: ApartmentRateUpsertWithWhereUniqueWithoutApartmentInput | ApartmentRateUpsertWithWhereUniqueWithoutApartmentInput[]
    createMany?: ApartmentRateCreateManyApartmentInputEnvelope
    set?: ApartmentRateWhereUniqueInput | ApartmentRateWhereUniqueInput[]
    disconnect?: ApartmentRateWhereUniqueInput | ApartmentRateWhereUniqueInput[]
    delete?: ApartmentRateWhereUniqueInput | ApartmentRateWhereUniqueInput[]
    connect?: ApartmentRateWhereUniqueInput | ApartmentRateWhereUniqueInput[]
    update?: ApartmentRateUpdateWithWhereUniqueWithoutApartmentInput | ApartmentRateUpdateWithWhereUniqueWithoutApartmentInput[]
    updateMany?: ApartmentRateUpdateManyWithWhereWithoutApartmentInput | ApartmentRateUpdateManyWithWhereWithoutApartmentInput[]
    deleteMany?: ApartmentRateScalarWhereInput | ApartmentRateScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutApartmentNestedInput = {
    create?: XOR<ReservationCreateWithoutApartmentInput, ReservationUncheckedCreateWithoutApartmentInput> | ReservationCreateWithoutApartmentInput[] | ReservationUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutApartmentInput | ReservationCreateOrConnectWithoutApartmentInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutApartmentInput | ReservationUpsertWithWhereUniqueWithoutApartmentInput[]
    createMany?: ReservationCreateManyApartmentInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutApartmentInput | ReservationUpdateWithWhereUniqueWithoutApartmentInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutApartmentInput | ReservationUpdateManyWithWhereWithoutApartmentInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ApartmentCreateNestedOneWithoutRatesInput = {
    create?: XOR<ApartmentCreateWithoutRatesInput, ApartmentUncheckedCreateWithoutRatesInput>
    connectOrCreate?: ApartmentCreateOrConnectWithoutRatesInput
    connect?: ApartmentWhereUniqueInput
  }

  export type ApartmentUpdateOneRequiredWithoutRatesNestedInput = {
    create?: XOR<ApartmentCreateWithoutRatesInput, ApartmentUncheckedCreateWithoutRatesInput>
    connectOrCreate?: ApartmentCreateOrConnectWithoutRatesInput
    upsert?: ApartmentUpsertWithoutRatesInput
    connect?: ApartmentWhereUniqueInput
    update?: XOR<XOR<ApartmentUpdateToOneWithWhereWithoutRatesInput, ApartmentUpdateWithoutRatesInput>, ApartmentUncheckedUpdateWithoutRatesInput>
  }

  export type ReservationCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ReservationCreateWithoutCustomerInput, ReservationUncheckedCreateWithoutCustomerInput> | ReservationCreateWithoutCustomerInput[] | ReservationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutCustomerInput | ReservationCreateOrConnectWithoutCustomerInput[]
    createMany?: ReservationCreateManyCustomerInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ReservationCreateWithoutCustomerInput, ReservationUncheckedCreateWithoutCustomerInput> | ReservationCreateWithoutCustomerInput[] | ReservationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutCustomerInput | ReservationCreateOrConnectWithoutCustomerInput[]
    createMany?: ReservationCreateManyCustomerInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReservationUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ReservationCreateWithoutCustomerInput, ReservationUncheckedCreateWithoutCustomerInput> | ReservationCreateWithoutCustomerInput[] | ReservationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutCustomerInput | ReservationCreateOrConnectWithoutCustomerInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutCustomerInput | ReservationUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ReservationCreateManyCustomerInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutCustomerInput | ReservationUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutCustomerInput | ReservationUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ReservationCreateWithoutCustomerInput, ReservationUncheckedCreateWithoutCustomerInput> | ReservationCreateWithoutCustomerInput[] | ReservationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutCustomerInput | ReservationCreateOrConnectWithoutCustomerInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutCustomerInput | ReservationUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ReservationCreateManyCustomerInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutCustomerInput | ReservationUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutCustomerInput | ReservationUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReservationCreateNestedManyWithoutReserveStateInput = {
    create?: XOR<ReservationCreateWithoutReserveStateInput, ReservationUncheckedCreateWithoutReserveStateInput> | ReservationCreateWithoutReserveStateInput[] | ReservationUncheckedCreateWithoutReserveStateInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutReserveStateInput | ReservationCreateOrConnectWithoutReserveStateInput[]
    createMany?: ReservationCreateManyReserveStateInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutReserveStateInput = {
    create?: XOR<ReservationCreateWithoutReserveStateInput, ReservationUncheckedCreateWithoutReserveStateInput> | ReservationCreateWithoutReserveStateInput[] | ReservationUncheckedCreateWithoutReserveStateInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutReserveStateInput | ReservationCreateOrConnectWithoutReserveStateInput[]
    createMany?: ReservationCreateManyReserveStateInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReservationUpdateManyWithoutReserveStateNestedInput = {
    create?: XOR<ReservationCreateWithoutReserveStateInput, ReservationUncheckedCreateWithoutReserveStateInput> | ReservationCreateWithoutReserveStateInput[] | ReservationUncheckedCreateWithoutReserveStateInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutReserveStateInput | ReservationCreateOrConnectWithoutReserveStateInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutReserveStateInput | ReservationUpsertWithWhereUniqueWithoutReserveStateInput[]
    createMany?: ReservationCreateManyReserveStateInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutReserveStateInput | ReservationUpdateWithWhereUniqueWithoutReserveStateInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutReserveStateInput | ReservationUpdateManyWithWhereWithoutReserveStateInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutReserveStateNestedInput = {
    create?: XOR<ReservationCreateWithoutReserveStateInput, ReservationUncheckedCreateWithoutReserveStateInput> | ReservationCreateWithoutReserveStateInput[] | ReservationUncheckedCreateWithoutReserveStateInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutReserveStateInput | ReservationCreateOrConnectWithoutReserveStateInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutReserveStateInput | ReservationUpsertWithWhereUniqueWithoutReserveStateInput[]
    createMany?: ReservationCreateManyReserveStateInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutReserveStateInput | ReservationUpdateWithWhereUniqueWithoutReserveStateInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutReserveStateInput | ReservationUpdateManyWithWhereWithoutReserveStateInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ApartmentCreateNestedOneWithoutReservationsInput = {
    create?: XOR<ApartmentCreateWithoutReservationsInput, ApartmentUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: ApartmentCreateOrConnectWithoutReservationsInput
    connect?: ApartmentWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutReservationsInput = {
    create?: XOR<CustomerCreateWithoutReservationsInput, CustomerUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutReservationsInput
    connect?: CustomerWhereUniqueInput
  }

  export type ReserveStateCreateNestedOneWithoutReservationsInput = {
    create?: XOR<ReserveStateCreateWithoutReservationsInput, ReserveStateUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: ReserveStateCreateOrConnectWithoutReservationsInput
    connect?: ReserveStateWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutReservationInput = {
    create?: XOR<PaymentCreateWithoutReservationInput, PaymentUncheckedCreateWithoutReservationInput> | PaymentCreateWithoutReservationInput[] | PaymentUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutReservationInput | PaymentCreateOrConnectWithoutReservationInput[]
    createMany?: PaymentCreateManyReservationInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutReservationInput = {
    create?: XOR<PaymentCreateWithoutReservationInput, PaymentUncheckedCreateWithoutReservationInput> | PaymentCreateWithoutReservationInput[] | PaymentUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutReservationInput | PaymentCreateOrConnectWithoutReservationInput[]
    createMany?: PaymentCreateManyReservationInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ApartmentUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<ApartmentCreateWithoutReservationsInput, ApartmentUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: ApartmentCreateOrConnectWithoutReservationsInput
    upsert?: ApartmentUpsertWithoutReservationsInput
    connect?: ApartmentWhereUniqueInput
    update?: XOR<XOR<ApartmentUpdateToOneWithWhereWithoutReservationsInput, ApartmentUpdateWithoutReservationsInput>, ApartmentUncheckedUpdateWithoutReservationsInput>
  }

  export type CustomerUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<CustomerCreateWithoutReservationsInput, CustomerUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutReservationsInput
    upsert?: CustomerUpsertWithoutReservationsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutReservationsInput, CustomerUpdateWithoutReservationsInput>, CustomerUncheckedUpdateWithoutReservationsInput>
  }

  export type ReserveStateUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<ReserveStateCreateWithoutReservationsInput, ReserveStateUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: ReserveStateCreateOrConnectWithoutReservationsInput
    upsert?: ReserveStateUpsertWithoutReservationsInput
    connect?: ReserveStateWhereUniqueInput
    update?: XOR<XOR<ReserveStateUpdateToOneWithWhereWithoutReservationsInput, ReserveStateUpdateWithoutReservationsInput>, ReserveStateUncheckedUpdateWithoutReservationsInput>
  }

  export type PaymentUpdateManyWithoutReservationNestedInput = {
    create?: XOR<PaymentCreateWithoutReservationInput, PaymentUncheckedCreateWithoutReservationInput> | PaymentCreateWithoutReservationInput[] | PaymentUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutReservationInput | PaymentCreateOrConnectWithoutReservationInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutReservationInput | PaymentUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: PaymentCreateManyReservationInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutReservationInput | PaymentUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutReservationInput | PaymentUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutReservationNestedInput = {
    create?: XOR<PaymentCreateWithoutReservationInput, PaymentUncheckedCreateWithoutReservationInput> | PaymentCreateWithoutReservationInput[] | PaymentUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutReservationInput | PaymentCreateOrConnectWithoutReservationInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutReservationInput | PaymentUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: PaymentCreateManyReservationInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutReservationInput | PaymentUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutReservationInput | PaymentUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentCreateNestedManyWithoutConceptInput = {
    create?: XOR<PaymentCreateWithoutConceptInput, PaymentUncheckedCreateWithoutConceptInput> | PaymentCreateWithoutConceptInput[] | PaymentUncheckedCreateWithoutConceptInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutConceptInput | PaymentCreateOrConnectWithoutConceptInput[]
    createMany?: PaymentCreateManyConceptInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutConceptInput = {
    create?: XOR<PaymentCreateWithoutConceptInput, PaymentUncheckedCreateWithoutConceptInput> | PaymentCreateWithoutConceptInput[] | PaymentUncheckedCreateWithoutConceptInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutConceptInput | PaymentCreateOrConnectWithoutConceptInput[]
    createMany?: PaymentCreateManyConceptInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUpdateManyWithoutConceptNestedInput = {
    create?: XOR<PaymentCreateWithoutConceptInput, PaymentUncheckedCreateWithoutConceptInput> | PaymentCreateWithoutConceptInput[] | PaymentUncheckedCreateWithoutConceptInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutConceptInput | PaymentCreateOrConnectWithoutConceptInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutConceptInput | PaymentUpsertWithWhereUniqueWithoutConceptInput[]
    createMany?: PaymentCreateManyConceptInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutConceptInput | PaymentUpdateWithWhereUniqueWithoutConceptInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutConceptInput | PaymentUpdateManyWithWhereWithoutConceptInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutConceptNestedInput = {
    create?: XOR<PaymentCreateWithoutConceptInput, PaymentUncheckedCreateWithoutConceptInput> | PaymentCreateWithoutConceptInput[] | PaymentUncheckedCreateWithoutConceptInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutConceptInput | PaymentCreateOrConnectWithoutConceptInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutConceptInput | PaymentUpsertWithWhereUniqueWithoutConceptInput[]
    createMany?: PaymentCreateManyConceptInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutConceptInput | PaymentUpdateWithWhereUniqueWithoutConceptInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutConceptInput | PaymentUpdateManyWithWhereWithoutConceptInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ReservationCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<ReservationCreateWithoutPaymentsInput, ReservationUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutPaymentsInput
    connect?: ReservationWhereUniqueInput
  }

  export type PaymentConceptCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<PaymentConceptCreateWithoutPaymentsInput, PaymentConceptUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PaymentConceptCreateOrConnectWithoutPaymentsInput
    connect?: PaymentConceptWhereUniqueInput
  }

  export type ReservationUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<ReservationCreateWithoutPaymentsInput, ReservationUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutPaymentsInput
    upsert?: ReservationUpsertWithoutPaymentsInput
    connect?: ReservationWhereUniqueInput
    update?: XOR<XOR<ReservationUpdateToOneWithWhereWithoutPaymentsInput, ReservationUpdateWithoutPaymentsInput>, ReservationUncheckedUpdateWithoutPaymentsInput>
  }

  export type PaymentConceptUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<PaymentConceptCreateWithoutPaymentsInput, PaymentConceptUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PaymentConceptCreateOrConnectWithoutPaymentsInput
    upsert?: PaymentConceptUpsertWithoutPaymentsInput
    connect?: PaymentConceptWhereUniqueInput
    update?: XOR<XOR<PaymentConceptUpdateToOneWithWhereWithoutPaymentsInput, PaymentConceptUpdateWithoutPaymentsInput>, PaymentConceptUncheckedUpdateWithoutPaymentsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ApartmentCreateWithoutTypeApartmentInput = {
    name: string
    address: string
    city: string
    country: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    isActive?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    rates?: ApartmentRateCreateNestedManyWithoutApartmentInput
    reservations?: ReservationCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentUncheckedCreateWithoutTypeApartmentInput = {
    id?: number
    name: string
    address: string
    city: string
    country: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    isActive?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    rates?: ApartmentRateUncheckedCreateNestedManyWithoutApartmentInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentCreateOrConnectWithoutTypeApartmentInput = {
    where: ApartmentWhereUniqueInput
    create: XOR<ApartmentCreateWithoutTypeApartmentInput, ApartmentUncheckedCreateWithoutTypeApartmentInput>
  }

  export type ApartmentCreateManyTypeApartmentInputEnvelope = {
    data: ApartmentCreateManyTypeApartmentInput | ApartmentCreateManyTypeApartmentInput[]
    skipDuplicates?: boolean
  }

  export type ApartmentUpsertWithWhereUniqueWithoutTypeApartmentInput = {
    where: ApartmentWhereUniqueInput
    update: XOR<ApartmentUpdateWithoutTypeApartmentInput, ApartmentUncheckedUpdateWithoutTypeApartmentInput>
    create: XOR<ApartmentCreateWithoutTypeApartmentInput, ApartmentUncheckedCreateWithoutTypeApartmentInput>
  }

  export type ApartmentUpdateWithWhereUniqueWithoutTypeApartmentInput = {
    where: ApartmentWhereUniqueInput
    data: XOR<ApartmentUpdateWithoutTypeApartmentInput, ApartmentUncheckedUpdateWithoutTypeApartmentInput>
  }

  export type ApartmentUpdateManyWithWhereWithoutTypeApartmentInput = {
    where: ApartmentScalarWhereInput
    data: XOR<ApartmentUpdateManyMutationInput, ApartmentUncheckedUpdateManyWithoutTypeApartmentInput>
  }

  export type ApartmentScalarWhereInput = {
    AND?: ApartmentScalarWhereInput | ApartmentScalarWhereInput[]
    OR?: ApartmentScalarWhereInput[]
    NOT?: ApartmentScalarWhereInput | ApartmentScalarWhereInput[]
    id?: IntFilter<"Apartment"> | number
    name?: StringFilter<"Apartment"> | string
    address?: StringFilter<"Apartment"> | string
    city?: StringFilter<"Apartment"> | string
    country?: StringFilter<"Apartment"> | string
    latitude?: DecimalFilter<"Apartment"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Apartment"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolNullableFilter<"Apartment"> | boolean | null
    typeApartmentId?: IntFilter<"Apartment"> | number
    createdAt?: DateTimeFilter<"Apartment"> | Date | string
    updatedAt?: DateTimeFilter<"Apartment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Apartment"> | Date | string | null
  }

  export type TypeApartmentCreateWithoutApartmentsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TypeApartmentUncheckedCreateWithoutApartmentsInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TypeApartmentCreateOrConnectWithoutApartmentsInput = {
    where: TypeApartmentWhereUniqueInput
    create: XOR<TypeApartmentCreateWithoutApartmentsInput, TypeApartmentUncheckedCreateWithoutApartmentsInput>
  }

  export type ApartmentRateCreateWithoutApartmentInput = {
    startDate: Date | string
    endDate: Date | string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ApartmentRateUncheckedCreateWithoutApartmentInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ApartmentRateCreateOrConnectWithoutApartmentInput = {
    where: ApartmentRateWhereUniqueInput
    create: XOR<ApartmentRateCreateWithoutApartmentInput, ApartmentRateUncheckedCreateWithoutApartmentInput>
  }

  export type ApartmentRateCreateManyApartmentInputEnvelope = {
    data: ApartmentRateCreateManyApartmentInput | ApartmentRateCreateManyApartmentInput[]
    skipDuplicates?: boolean
  }

  export type ReservationCreateWithoutApartmentInput = {
    code: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customer: CustomerCreateNestedOneWithoutReservationsInput
    reserveState: ReserveStateCreateNestedOneWithoutReservationsInput
    payments?: PaymentCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutApartmentInput = {
    id?: number
    code: string
    startDate: Date | string
    endDate: Date | string
    status: number
    customerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    payments?: PaymentUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutApartmentInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutApartmentInput, ReservationUncheckedCreateWithoutApartmentInput>
  }

  export type ReservationCreateManyApartmentInputEnvelope = {
    data: ReservationCreateManyApartmentInput | ReservationCreateManyApartmentInput[]
    skipDuplicates?: boolean
  }

  export type TypeApartmentUpsertWithoutApartmentsInput = {
    update: XOR<TypeApartmentUpdateWithoutApartmentsInput, TypeApartmentUncheckedUpdateWithoutApartmentsInput>
    create: XOR<TypeApartmentCreateWithoutApartmentsInput, TypeApartmentUncheckedCreateWithoutApartmentsInput>
    where?: TypeApartmentWhereInput
  }

  export type TypeApartmentUpdateToOneWithWhereWithoutApartmentsInput = {
    where?: TypeApartmentWhereInput
    data: XOR<TypeApartmentUpdateWithoutApartmentsInput, TypeApartmentUncheckedUpdateWithoutApartmentsInput>
  }

  export type TypeApartmentUpdateWithoutApartmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TypeApartmentUncheckedUpdateWithoutApartmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApartmentRateUpsertWithWhereUniqueWithoutApartmentInput = {
    where: ApartmentRateWhereUniqueInput
    update: XOR<ApartmentRateUpdateWithoutApartmentInput, ApartmentRateUncheckedUpdateWithoutApartmentInput>
    create: XOR<ApartmentRateCreateWithoutApartmentInput, ApartmentRateUncheckedCreateWithoutApartmentInput>
  }

  export type ApartmentRateUpdateWithWhereUniqueWithoutApartmentInput = {
    where: ApartmentRateWhereUniqueInput
    data: XOR<ApartmentRateUpdateWithoutApartmentInput, ApartmentRateUncheckedUpdateWithoutApartmentInput>
  }

  export type ApartmentRateUpdateManyWithWhereWithoutApartmentInput = {
    where: ApartmentRateScalarWhereInput
    data: XOR<ApartmentRateUpdateManyMutationInput, ApartmentRateUncheckedUpdateManyWithoutApartmentInput>
  }

  export type ApartmentRateScalarWhereInput = {
    AND?: ApartmentRateScalarWhereInput | ApartmentRateScalarWhereInput[]
    OR?: ApartmentRateScalarWhereInput[]
    NOT?: ApartmentRateScalarWhereInput | ApartmentRateScalarWhereInput[]
    id?: IntFilter<"ApartmentRate"> | number
    apartmentId?: IntFilter<"ApartmentRate"> | number
    startDate?: DateTimeFilter<"ApartmentRate"> | Date | string
    endDate?: DateTimeFilter<"ApartmentRate"> | Date | string
    price?: DecimalFilter<"ApartmentRate"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"ApartmentRate"> | Date | string
    updatedAt?: DateTimeFilter<"ApartmentRate"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ApartmentRate"> | Date | string | null
  }

  export type ReservationUpsertWithWhereUniqueWithoutApartmentInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutApartmentInput, ReservationUncheckedUpdateWithoutApartmentInput>
    create: XOR<ReservationCreateWithoutApartmentInput, ReservationUncheckedCreateWithoutApartmentInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutApartmentInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutApartmentInput, ReservationUncheckedUpdateWithoutApartmentInput>
  }

  export type ReservationUpdateManyWithWhereWithoutApartmentInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutApartmentInput>
  }

  export type ReservationScalarWhereInput = {
    AND?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    OR?: ReservationScalarWhereInput[]
    NOT?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    id?: IntFilter<"Reservation"> | number
    code?: StringFilter<"Reservation"> | string
    startDate?: DateTimeFilter<"Reservation"> | Date | string
    endDate?: DateTimeFilter<"Reservation"> | Date | string
    status?: IntFilter<"Reservation"> | number
    apartmentId?: IntFilter<"Reservation"> | number
    customerId?: IntFilter<"Reservation"> | number
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
  }

  export type ApartmentCreateWithoutRatesInput = {
    name: string
    address: string
    city: string
    country: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    isActive?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    typeApartment: TypeApartmentCreateNestedOneWithoutApartmentsInput
    reservations?: ReservationCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentUncheckedCreateWithoutRatesInput = {
    id?: number
    name: string
    address: string
    city: string
    country: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    isActive?: boolean | null
    typeApartmentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reservations?: ReservationUncheckedCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentCreateOrConnectWithoutRatesInput = {
    where: ApartmentWhereUniqueInput
    create: XOR<ApartmentCreateWithoutRatesInput, ApartmentUncheckedCreateWithoutRatesInput>
  }

  export type ApartmentUpsertWithoutRatesInput = {
    update: XOR<ApartmentUpdateWithoutRatesInput, ApartmentUncheckedUpdateWithoutRatesInput>
    create: XOR<ApartmentCreateWithoutRatesInput, ApartmentUncheckedCreateWithoutRatesInput>
    where?: ApartmentWhereInput
  }

  export type ApartmentUpdateToOneWithWhereWithoutRatesInput = {
    where?: ApartmentWhereInput
    data: XOR<ApartmentUpdateWithoutRatesInput, ApartmentUncheckedUpdateWithoutRatesInput>
  }

  export type ApartmentUpdateWithoutRatesInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typeApartment?: TypeApartmentUpdateOneRequiredWithoutApartmentsNestedInput
    reservations?: ReservationUpdateManyWithoutApartmentNestedInput
  }

  export type ApartmentUncheckedUpdateWithoutRatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    typeApartmentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservations?: ReservationUncheckedUpdateManyWithoutApartmentNestedInput
  }

  export type ReservationCreateWithoutCustomerInput = {
    code: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    apartment: ApartmentCreateNestedOneWithoutReservationsInput
    reserveState: ReserveStateCreateNestedOneWithoutReservationsInput
    payments?: PaymentCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutCustomerInput = {
    id?: number
    code: string
    startDate: Date | string
    endDate: Date | string
    status: number
    apartmentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    payments?: PaymentUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutCustomerInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutCustomerInput, ReservationUncheckedCreateWithoutCustomerInput>
  }

  export type ReservationCreateManyCustomerInputEnvelope = {
    data: ReservationCreateManyCustomerInput | ReservationCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ReservationUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutCustomerInput, ReservationUncheckedUpdateWithoutCustomerInput>
    create: XOR<ReservationCreateWithoutCustomerInput, ReservationUncheckedCreateWithoutCustomerInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutCustomerInput, ReservationUncheckedUpdateWithoutCustomerInput>
  }

  export type ReservationUpdateManyWithWhereWithoutCustomerInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutCustomerInput>
  }

  export type ReservationCreateWithoutReserveStateInput = {
    code: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    apartment: ApartmentCreateNestedOneWithoutReservationsInput
    customer: CustomerCreateNestedOneWithoutReservationsInput
    payments?: PaymentCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutReserveStateInput = {
    id?: number
    code: string
    startDate: Date | string
    endDate: Date | string
    apartmentId: number
    customerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    payments?: PaymentUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutReserveStateInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutReserveStateInput, ReservationUncheckedCreateWithoutReserveStateInput>
  }

  export type ReservationCreateManyReserveStateInputEnvelope = {
    data: ReservationCreateManyReserveStateInput | ReservationCreateManyReserveStateInput[]
    skipDuplicates?: boolean
  }

  export type ReservationUpsertWithWhereUniqueWithoutReserveStateInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutReserveStateInput, ReservationUncheckedUpdateWithoutReserveStateInput>
    create: XOR<ReservationCreateWithoutReserveStateInput, ReservationUncheckedCreateWithoutReserveStateInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutReserveStateInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutReserveStateInput, ReservationUncheckedUpdateWithoutReserveStateInput>
  }

  export type ReservationUpdateManyWithWhereWithoutReserveStateInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutReserveStateInput>
  }

  export type ApartmentCreateWithoutReservationsInput = {
    name: string
    address: string
    city: string
    country: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    isActive?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    typeApartment: TypeApartmentCreateNestedOneWithoutApartmentsInput
    rates?: ApartmentRateCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentUncheckedCreateWithoutReservationsInput = {
    id?: number
    name: string
    address: string
    city: string
    country: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    isActive?: boolean | null
    typeApartmentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    rates?: ApartmentRateUncheckedCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentCreateOrConnectWithoutReservationsInput = {
    where: ApartmentWhereUniqueInput
    create: XOR<ApartmentCreateWithoutReservationsInput, ApartmentUncheckedCreateWithoutReservationsInput>
  }

  export type CustomerCreateWithoutReservationsInput = {
    name: string
    surname?: string | null
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CustomerUncheckedCreateWithoutReservationsInput = {
    id?: number
    name: string
    surname?: string | null
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CustomerCreateOrConnectWithoutReservationsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutReservationsInput, CustomerUncheckedCreateWithoutReservationsInput>
  }

  export type ReserveStateCreateWithoutReservationsInput = {
    state: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ReserveStateUncheckedCreateWithoutReservationsInput = {
    id?: number
    state: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ReserveStateCreateOrConnectWithoutReservationsInput = {
    where: ReserveStateWhereUniqueInput
    create: XOR<ReserveStateCreateWithoutReservationsInput, ReserveStateUncheckedCreateWithoutReservationsInput>
  }

  export type PaymentCreateWithoutReservationInput = {
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    concept: PaymentConceptCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutReservationInput = {
    id?: number
    conceptId: number
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PaymentCreateOrConnectWithoutReservationInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutReservationInput, PaymentUncheckedCreateWithoutReservationInput>
  }

  export type PaymentCreateManyReservationInputEnvelope = {
    data: PaymentCreateManyReservationInput | PaymentCreateManyReservationInput[]
    skipDuplicates?: boolean
  }

  export type ApartmentUpsertWithoutReservationsInput = {
    update: XOR<ApartmentUpdateWithoutReservationsInput, ApartmentUncheckedUpdateWithoutReservationsInput>
    create: XOR<ApartmentCreateWithoutReservationsInput, ApartmentUncheckedCreateWithoutReservationsInput>
    where?: ApartmentWhereInput
  }

  export type ApartmentUpdateToOneWithWhereWithoutReservationsInput = {
    where?: ApartmentWhereInput
    data: XOR<ApartmentUpdateWithoutReservationsInput, ApartmentUncheckedUpdateWithoutReservationsInput>
  }

  export type ApartmentUpdateWithoutReservationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typeApartment?: TypeApartmentUpdateOneRequiredWithoutApartmentsNestedInput
    rates?: ApartmentRateUpdateManyWithoutApartmentNestedInput
  }

  export type ApartmentUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    typeApartmentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rates?: ApartmentRateUncheckedUpdateManyWithoutApartmentNestedInput
  }

  export type CustomerUpsertWithoutReservationsInput = {
    update: XOR<CustomerUpdateWithoutReservationsInput, CustomerUncheckedUpdateWithoutReservationsInput>
    create: XOR<CustomerCreateWithoutReservationsInput, CustomerUncheckedCreateWithoutReservationsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutReservationsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutReservationsInput, CustomerUncheckedUpdateWithoutReservationsInput>
  }

  export type CustomerUpdateWithoutReservationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReserveStateUpsertWithoutReservationsInput = {
    update: XOR<ReserveStateUpdateWithoutReservationsInput, ReserveStateUncheckedUpdateWithoutReservationsInput>
    create: XOR<ReserveStateCreateWithoutReservationsInput, ReserveStateUncheckedCreateWithoutReservationsInput>
    where?: ReserveStateWhereInput
  }

  export type ReserveStateUpdateToOneWithWhereWithoutReservationsInput = {
    where?: ReserveStateWhereInput
    data: XOR<ReserveStateUpdateWithoutReservationsInput, ReserveStateUncheckedUpdateWithoutReservationsInput>
  }

  export type ReserveStateUpdateWithoutReservationsInput = {
    state?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReserveStateUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    state?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUpsertWithWhereUniqueWithoutReservationInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutReservationInput, PaymentUncheckedUpdateWithoutReservationInput>
    create: XOR<PaymentCreateWithoutReservationInput, PaymentUncheckedCreateWithoutReservationInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutReservationInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutReservationInput, PaymentUncheckedUpdateWithoutReservationInput>
  }

  export type PaymentUpdateManyWithWhereWithoutReservationInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutReservationInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    reservationId?: IntFilter<"Payment"> | number
    conceptId?: IntFilter<"Payment"> | number
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
  }

  export type PaymentCreateWithoutConceptInput = {
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reservation: ReservationCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutConceptInput = {
    id?: number
    reservationId: number
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PaymentCreateOrConnectWithoutConceptInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutConceptInput, PaymentUncheckedCreateWithoutConceptInput>
  }

  export type PaymentCreateManyConceptInputEnvelope = {
    data: PaymentCreateManyConceptInput | PaymentCreateManyConceptInput[]
    skipDuplicates?: boolean
  }

  export type PaymentUpsertWithWhereUniqueWithoutConceptInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutConceptInput, PaymentUncheckedUpdateWithoutConceptInput>
    create: XOR<PaymentCreateWithoutConceptInput, PaymentUncheckedCreateWithoutConceptInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutConceptInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutConceptInput, PaymentUncheckedUpdateWithoutConceptInput>
  }

  export type PaymentUpdateManyWithWhereWithoutConceptInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutConceptInput>
  }

  export type ReservationCreateWithoutPaymentsInput = {
    code: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    apartment: ApartmentCreateNestedOneWithoutReservationsInput
    customer: CustomerCreateNestedOneWithoutReservationsInput
    reserveState: ReserveStateCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutPaymentsInput = {
    id?: number
    code: string
    startDate: Date | string
    endDate: Date | string
    status: number
    apartmentId: number
    customerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ReservationCreateOrConnectWithoutPaymentsInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutPaymentsInput, ReservationUncheckedCreateWithoutPaymentsInput>
  }

  export type PaymentConceptCreateWithoutPaymentsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PaymentConceptUncheckedCreateWithoutPaymentsInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PaymentConceptCreateOrConnectWithoutPaymentsInput = {
    where: PaymentConceptWhereUniqueInput
    create: XOR<PaymentConceptCreateWithoutPaymentsInput, PaymentConceptUncheckedCreateWithoutPaymentsInput>
  }

  export type ReservationUpsertWithoutPaymentsInput = {
    update: XOR<ReservationUpdateWithoutPaymentsInput, ReservationUncheckedUpdateWithoutPaymentsInput>
    create: XOR<ReservationCreateWithoutPaymentsInput, ReservationUncheckedCreateWithoutPaymentsInput>
    where?: ReservationWhereInput
  }

  export type ReservationUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: ReservationWhereInput
    data: XOR<ReservationUpdateWithoutPaymentsInput, ReservationUncheckedUpdateWithoutPaymentsInput>
  }

  export type ReservationUpdateWithoutPaymentsInput = {
    code?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apartment?: ApartmentUpdateOneRequiredWithoutReservationsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutReservationsNestedInput
    reserveState?: ReserveStateUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    apartmentId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentConceptUpsertWithoutPaymentsInput = {
    update: XOR<PaymentConceptUpdateWithoutPaymentsInput, PaymentConceptUncheckedUpdateWithoutPaymentsInput>
    create: XOR<PaymentConceptCreateWithoutPaymentsInput, PaymentConceptUncheckedCreateWithoutPaymentsInput>
    where?: PaymentConceptWhereInput
  }

  export type PaymentConceptUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: PaymentConceptWhereInput
    data: XOR<PaymentConceptUpdateWithoutPaymentsInput, PaymentConceptUncheckedUpdateWithoutPaymentsInput>
  }

  export type PaymentConceptUpdateWithoutPaymentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentConceptUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApartmentCreateManyTypeApartmentInput = {
    id?: number
    name: string
    address: string
    city: string
    country: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    isActive?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ApartmentUpdateWithoutTypeApartmentInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rates?: ApartmentRateUpdateManyWithoutApartmentNestedInput
    reservations?: ReservationUpdateManyWithoutApartmentNestedInput
  }

  export type ApartmentUncheckedUpdateWithoutTypeApartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rates?: ApartmentRateUncheckedUpdateManyWithoutApartmentNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutApartmentNestedInput
  }

  export type ApartmentUncheckedUpdateManyWithoutTypeApartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApartmentRateCreateManyApartmentInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ReservationCreateManyApartmentInput = {
    id?: number
    code: string
    startDate: Date | string
    endDate: Date | string
    status: number
    customerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ApartmentRateUpdateWithoutApartmentInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApartmentRateUncheckedUpdateWithoutApartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApartmentRateUncheckedUpdateManyWithoutApartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReservationUpdateWithoutApartmentInput = {
    code?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUpdateOneRequiredWithoutReservationsNestedInput
    reserveState?: ReserveStateUpdateOneRequiredWithoutReservationsNestedInput
    payments?: PaymentUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutApartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutApartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReservationCreateManyCustomerInput = {
    id?: number
    code: string
    startDate: Date | string
    endDate: Date | string
    status: number
    apartmentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ReservationUpdateWithoutCustomerInput = {
    code?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apartment?: ApartmentUpdateOneRequiredWithoutReservationsNestedInput
    reserveState?: ReserveStateUpdateOneRequiredWithoutReservationsNestedInput
    payments?: PaymentUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    apartmentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    apartmentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReservationCreateManyReserveStateInput = {
    id?: number
    code: string
    startDate: Date | string
    endDate: Date | string
    apartmentId: number
    customerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ReservationUpdateWithoutReserveStateInput = {
    code?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apartment?: ApartmentUpdateOneRequiredWithoutReservationsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutReservationsNestedInput
    payments?: PaymentUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutReserveStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    apartmentId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutReserveStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    apartmentId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentCreateManyReservationInput = {
    id?: number
    conceptId: number
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PaymentUpdateWithoutReservationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    concept?: PaymentConceptUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutReservationInput = {
    id?: IntFieldUpdateOperationsInput | number
    conceptId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUncheckedUpdateManyWithoutReservationInput = {
    id?: IntFieldUpdateOperationsInput | number
    conceptId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentCreateManyConceptInput = {
    id?: number
    reservationId: number
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PaymentUpdateWithoutConceptInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservation?: ReservationUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutConceptInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservationId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUncheckedUpdateManyWithoutConceptInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservationId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
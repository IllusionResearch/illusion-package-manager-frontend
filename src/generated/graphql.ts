import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Short` scalar type represents non-fractional signed whole 16-bit numeric values. Short can represent values between -(2^15) and 2^15 - 1. */
  Short: any;
};

export type AddPackagePayloadInput = {
  readonly game: GameToken;
  readonly pattern: Scalars['String'];
  readonly repositoryName: Scalars['String'];
  readonly repositoryOwner: Scalars['String'];
};

export type EditPackagePayloadInput = {
  readonly game: GameToken;
  readonly id: Scalars['Int'];
  readonly pattern: Scalars['String'];
  readonly repositoryName: Scalars['String'];
  readonly repositoryOwner: Scalars['String'];
};

export const enum GameToken {
  Koikatsu = 'KOIKATSU',
  None = 'NONE'
};

export type PackageModel = {
  readonly game: GameToken;
  readonly id: Scalars['Int'];
  readonly pattern: Scalars['String'];
  readonly repositoryName: Scalars['String'];
  readonly repositoryOwner: Scalars['String'];
  readonly version: Version;
};

export type PackageMutation = {
  readonly addPackage: PackageModel;
  readonly editPackage: PackageModel;
};


export type PackageMutationAddPackageArgs = {
  payload: AddPackagePayloadInput;
};


export type PackageMutationEditPackageArgs = {
  payload: EditPackagePayloadInput;
};

export type PackageQuery = {
  readonly packages: ReadonlyArray<PackageModel>;
};

export type Version = {
  readonly build: Scalars['Int'];
  readonly compareTo: Scalars['Int'];
  readonly major: Scalars['Int'];
  readonly majorRevision: Scalars['Short'];
  readonly minor: Scalars['Int'];
  readonly minorRevision: Scalars['Short'];
  readonly revision: Scalars['Int'];
};


export type VersionCompareToArgs = {
  value?: InputMaybe<VersionInput>;
};

export type VersionInput = {
  readonly build: Scalars['Int'];
  readonly major: Scalars['Int'];
  readonly minor: Scalars['Int'];
  readonly revision: Scalars['Int'];
};

export type AddPackageMutationVariables = Exact<{
  payload: AddPackagePayloadInput;
}>;


export type AddPackageMutation = { readonly addPackage: { readonly id: number } };

export type EditPackageMutationVariables = Exact<{
  payload: EditPackagePayloadInput;
}>;


export type EditPackageMutation = { readonly editPackage: { readonly id: number } };

export type PackagesQueryVariables = Exact<{ [key: string]: never; }>;


export type PackagesQuery = { readonly packages: ReadonlyArray<{ readonly id: number, readonly game: GameToken, readonly pattern: string, readonly repositoryOwner: string, readonly repositoryName: string }> };


export const AddPackageDocument = gql`
    mutation addPackage($payload: AddPackagePayloadInput!) {
  addPackage(payload: $payload) {
    id
  }
}
    `;

/**
 * __useAddPackageMutation__
 *
 * To run a mutation, you first call `useAddPackageMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useAddPackageMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useAddPackageMutation({
 *   variables: {
 *     payload: // value for 'payload'
 *   },
 * });
 */
export function useAddPackageMutation(options: VueApolloComposable.UseMutationOptions<AddPackageMutation, AddPackageMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<AddPackageMutation, AddPackageMutationVariables>>) {
  return VueApolloComposable.useMutation<AddPackageMutation, AddPackageMutationVariables>(AddPackageDocument, options);
}
export type AddPackageMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<AddPackageMutation, AddPackageMutationVariables>;
export const EditPackageDocument = gql`
    mutation editPackage($payload: EditPackagePayloadInput!) {
  editPackage(payload: $payload) {
    id
  }
}
    `;

/**
 * __useEditPackageMutation__
 *
 * To run a mutation, you first call `useEditPackageMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useEditPackageMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useEditPackageMutation({
 *   variables: {
 *     payload: // value for 'payload'
 *   },
 * });
 */
export function useEditPackageMutation(options: VueApolloComposable.UseMutationOptions<EditPackageMutation, EditPackageMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<EditPackageMutation, EditPackageMutationVariables>>) {
  return VueApolloComposable.useMutation<EditPackageMutation, EditPackageMutationVariables>(EditPackageDocument, options);
}
export type EditPackageMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<EditPackageMutation, EditPackageMutationVariables>;
export const PackagesDocument = gql`
    query packages {
  packages {
    id
    game
    pattern
    repositoryOwner
    repositoryName
  }
}
    `;

/**
 * __usePackagesQuery__
 *
 * To run a query within a Vue component, call `usePackagesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePackagesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePackagesQuery();
 */
export function usePackagesQuery(options: VueApolloComposable.UseQueryOptions<PackagesQuery, PackagesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PackagesQuery, PackagesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PackagesQuery, PackagesQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<PackagesQuery, PackagesQueryVariables>(PackagesDocument, {}, options);
}
export type PackagesQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<PackagesQuery, PackagesQueryVariables>;
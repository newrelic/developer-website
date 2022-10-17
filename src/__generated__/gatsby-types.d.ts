/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: never;
};










type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type Mdx */
  readonly childrenMdx: Maybe<ReadonlyArray<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  readonly childMdx: Maybe<Mdx>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};


type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly flags: Maybe<SiteFlags>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly layout: Maybe<SiteLayout>;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteFlags = {
  readonly DEV_SSR: Maybe<Scalars['Boolean']>;
  readonly PRESERVE_WEBPACK_CACHE: Maybe<Scalars['Boolean']>;
  readonly PRESERVE_FILE_DOWNLOAD_CACHE: Maybe<Scalars['Boolean']>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly repository: Maybe<Scalars['String']>;
  readonly branch: Scalars['String'];
  readonly contributingUrl: Maybe<Scalars['String']>;
  readonly titleTemplate: Maybe<Scalars['String']>;
  readonly author: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
};

type SiteFunction = Node & {
  readonly functionRoute: Scalars['String'];
  readonly pluginName: Scalars['String'];
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly context: Maybe<SitePageContext>;
};

type SitePageContext = {
  readonly layout: Maybe<Scalars['String']>;
  readonly themeOptions: Maybe<SitePageContextThemeOptions>;
  readonly swiftypeEngineKey: Maybe<Scalars['String']>;
  readonly fileRelativePath: Maybe<Scalars['String']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly guidesFilter: Maybe<Scalars['String']>;
};

type SitePageContextThemeOptions = {
  readonly oneTrustID: Maybe<Scalars['String']>;
  readonly forceTrailingSlashes: Maybe<Scalars['Boolean']>;
  readonly layout: Maybe<SitePageContextThemeOptionsLayout>;
  readonly prism: Maybe<SitePageContextThemeOptionsPrism>;
  readonly splitio: Maybe<SitePageContextThemeOptionsSplitio>;
  readonly relatedResources: Maybe<SitePageContextThemeOptionsRelatedResources>;
  readonly newrelic: Maybe<SitePageContextThemeOptionsNewrelic>;
  readonly tessen: Maybe<SitePageContextThemeOptionsTessen>;
};

type SitePageContextThemeOptionsLayout = {
  readonly contentPadding: Maybe<Scalars['String']>;
  readonly maxWidth: Maybe<Scalars['String']>;
  readonly component: Maybe<Scalars['String']>;
  readonly mobileBreakpoint: Maybe<Scalars['String']>;
};

type SitePageContextThemeOptionsPrism = {
  readonly languages: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePageContextThemeOptionsSplitio = {
  readonly core: Maybe<SitePageContextThemeOptionsSplitioCore>;
  readonly features: Maybe<SitePageContextThemeOptionsSplitioFeatures>;
  readonly env: Maybe<SitePageContextThemeOptionsSplitioEnv>;
};

type SitePageContextThemeOptionsSplitioCore = {
  readonly authorizationKey: Maybe<Scalars['String']>;
};

type SitePageContextThemeOptionsSplitioFeatures = {
  readonly free_account_button_color: Maybe<SitePageContextThemeOptionsSplitioFeaturesFree_account_button_color>;
};

type SitePageContextThemeOptionsSplitioFeaturesFree_account_button_color = {
  readonly treatment: Maybe<Scalars['String']>;
};

type SitePageContextThemeOptionsSplitioEnv = {
  readonly development: Maybe<SitePageContextThemeOptionsSplitioEnvDevelopment>;
};

type SitePageContextThemeOptionsSplitioEnvDevelopment = {
  readonly features: Maybe<SitePageContextThemeOptionsSplitioEnvDevelopmentFeatures>;
  readonly core: Maybe<SitePageContextThemeOptionsSplitioEnvDevelopmentCore>;
};

type SitePageContextThemeOptionsSplitioEnvDevelopmentFeatures = {
  readonly developer_website_global_header_gh_buttons: Maybe<Scalars['String']>;
  readonly developer_website_right_rail_buttons: Maybe<Scalars['String']>;
  readonly super_tiles: Maybe<Scalars['String']>;
};

type SitePageContextThemeOptionsSplitioEnvDevelopmentCore = {
  readonly authorizationKey: Maybe<Scalars['String']>;
};

type SitePageContextThemeOptionsRelatedResources = {
  readonly swiftype: Maybe<SitePageContextThemeOptionsRelatedResourcesSwiftype>;
};

type SitePageContextThemeOptionsRelatedResourcesSwiftype = {
  readonly resultsPath: Maybe<Scalars['String']>;
  readonly refetch: Maybe<Scalars['Boolean']>;
  readonly engineKey: Maybe<Scalars['String']>;
  readonly limit: Maybe<Scalars['Int']>;
};

type SitePageContextThemeOptionsNewrelic = {
  readonly configs: Maybe<SitePageContextThemeOptionsNewrelicConfigs>;
};

type SitePageContextThemeOptionsNewrelicConfigs = {
  readonly production: Maybe<SitePageContextThemeOptionsNewrelicConfigsProduction>;
  readonly staging: Maybe<SitePageContextThemeOptionsNewrelicConfigsStaging>;
};

type SitePageContextThemeOptionsNewrelicConfigsProduction = {
  readonly instrumentationType: Maybe<Scalars['String']>;
  readonly accountId: Maybe<Scalars['String']>;
  readonly trustKey: Maybe<Scalars['String']>;
  readonly agentID: Maybe<Scalars['String']>;
  readonly licenseKey: Maybe<Scalars['String']>;
  readonly applicationID: Maybe<Scalars['String']>;
  readonly beacon: Maybe<Scalars['String']>;
  readonly errorBeacon: Maybe<Scalars['String']>;
};

type SitePageContextThemeOptionsNewrelicConfigsStaging = {
  readonly instrumentationType: Maybe<Scalars['String']>;
  readonly accountId: Maybe<Scalars['String']>;
  readonly trustKey: Maybe<Scalars['String']>;
  readonly agentID: Maybe<Scalars['String']>;
  readonly licenseKey: Maybe<Scalars['String']>;
  readonly applicationID: Maybe<Scalars['String']>;
  readonly beacon: Maybe<Scalars['String']>;
  readonly errorBeacon: Maybe<Scalars['String']>;
};

type SitePageContextThemeOptionsTessen = {
  readonly tessenVersion: Maybe<Scalars['String']>;
  readonly product: Maybe<Scalars['String']>;
  readonly subproduct: Maybe<Scalars['String']>;
  readonly segmentWriteKey: Maybe<Scalars['String']>;
  readonly trackPageViews: Maybe<Scalars['Boolean']>;
  readonly pageView: Maybe<SitePageContextThemeOptionsTessenPageView>;
};

type SitePageContextThemeOptionsTessenPageView = {
  readonly eventName: Maybe<Scalars['String']>;
  readonly category: Maybe<Scalars['String']>;
};

type SitePlugin = Node & {
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePluginPluginOptions = {
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly sourceMap: Maybe<Scalars['Boolean']>;
  readonly autoLabel: Maybe<Scalars['String']>;
  readonly labelFormat: Maybe<Scalars['String']>;
  readonly cssPropOptimization: Maybe<Scalars['Boolean']>;
  readonly output: Maybe<Scalars['String']>;
  readonly createLinkInHead: Maybe<Scalars['Boolean']>;
  readonly entryLimit: Maybe<Scalars['Int']>;
  readonly query: Maybe<Scalars['String']>;
  readonly classNameDark: Maybe<Scalars['String']>;
  readonly classNameLight: Maybe<Scalars['String']>;
  readonly storageKey: Maybe<Scalars['String']>;
  readonly minify: Maybe<Scalars['Boolean']>;
  readonly component: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly sitemap: Maybe<Scalars['String']>;
  readonly policy: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsPolicy>>>;
  readonly configs: Maybe<SitePluginPluginOptionsConfigs>;
  readonly oneTrustID: Maybe<Scalars['String']>;
  readonly forceTrailingSlashes: Maybe<Scalars['Boolean']>;
  readonly layout: Maybe<SitePluginPluginOptionsLayout>;
  readonly prism: Maybe<SitePluginPluginOptionsPrism>;
  readonly splitio: Maybe<SitePluginPluginOptionsSplitio>;
  readonly relatedResources: Maybe<SitePluginPluginOptionsRelatedResources>;
  readonly newrelic: Maybe<SitePluginPluginOptionsNewrelic>;
  readonly tessen: Maybe<SitePluginPluginOptionsTessen>;
  readonly implementation: Maybe<SitePluginPluginOptionsImplementation>;
  readonly short_name: Maybe<Scalars['String']>;
  readonly start_url: Maybe<Scalars['String']>;
  readonly background_color: Maybe<Scalars['String']>;
  readonly theme_color: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly legacy: Maybe<Scalars['Boolean']>;
  readonly theme_color_in_head: Maybe<Scalars['Boolean']>;
  readonly cache_busting_mode: Maybe<Scalars['String']>;
  readonly crossOrigin: Maybe<Scalars['String']>;
  readonly include_favicon: Maybe<Scalars['Boolean']>;
  readonly cacheDigest: Maybe<Scalars['String']>;
  readonly maxWidth: Maybe<Scalars['Int']>;
  readonly linkImagesToOriginal: Maybe<Scalars['Boolean']>;
  readonly showCaptions: Maybe<Scalars['Boolean']>;
  readonly markdownCaptions: Maybe<Scalars['Boolean']>;
  readonly sizeByPixelDensity: Maybe<Scalars['Boolean']>;
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly quality: Maybe<Scalars['Int']>;
  readonly withWebp: Maybe<Scalars['Boolean']>;
  readonly tracedSVG: Maybe<Scalars['Boolean']>;
  readonly loading: Maybe<Scalars['String']>;
  readonly decoding: Maybe<Scalars['String']>;
  readonly disableBgImageOnAlpha: Maybe<Scalars['Boolean']>;
  readonly disableBgImage: Maybe<Scalars['Boolean']>;
  readonly gatsbyRemarkPlugins: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsGatsbyRemarkPlugins>>>;
  readonly extensions: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly lessBabel: Maybe<Scalars['Boolean']>;
  readonly mediaTypes: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly root: Maybe<Scalars['String']>;
  readonly release: Maybe<Scalars['String']>;
  readonly debug: Maybe<Scalars['Boolean']>;
  readonly googleAnalytics: Maybe<SitePluginPluginOptionsGoogleAnalytics>;
  readonly environments: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly allPageHeaders: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly outputPath: Maybe<Scalars['String']>;
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchema>;
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsPolicy = {
  readonly userAgent: Maybe<Scalars['String']>;
  readonly allow: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsConfigs = {
  readonly production: Maybe<SitePluginPluginOptionsConfigsProduction>;
  readonly staging: Maybe<SitePluginPluginOptionsConfigsStaging>;
};

type SitePluginPluginOptionsConfigsProduction = {
  readonly instrumentationType: Maybe<Scalars['String']>;
  readonly accountId: Maybe<Scalars['String']>;
  readonly trustKey: Maybe<Scalars['String']>;
  readonly agentID: Maybe<Scalars['String']>;
  readonly licenseKey: Maybe<Scalars['String']>;
  readonly applicationID: Maybe<Scalars['String']>;
  readonly beacon: Maybe<Scalars['String']>;
  readonly errorBeacon: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsConfigsStaging = {
  readonly instrumentationType: Maybe<Scalars['String']>;
  readonly accountId: Maybe<Scalars['String']>;
  readonly trustKey: Maybe<Scalars['String']>;
  readonly agentID: Maybe<Scalars['String']>;
  readonly licenseKey: Maybe<Scalars['String']>;
  readonly applicationID: Maybe<Scalars['String']>;
  readonly beacon: Maybe<Scalars['String']>;
  readonly errorBeacon: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsLayout = {
  readonly contentPadding: Maybe<Scalars['String']>;
  readonly maxWidth: Maybe<Scalars['String']>;
  readonly component: Maybe<Scalars['String']>;
  readonly mobileBreakpoint: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPrism = {
  readonly languages: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPluginOptionsSplitio = {
  readonly core: Maybe<SitePluginPluginOptionsSplitioCore>;
  readonly features: Maybe<SitePluginPluginOptionsSplitioFeatures>;
  readonly env: Maybe<SitePluginPluginOptionsSplitioEnv>;
};

type SitePluginPluginOptionsSplitioCore = {
  readonly authorizationKey: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSplitioFeatures = {
  readonly free_account_button_color: Maybe<SitePluginPluginOptionsSplitioFeaturesFree_account_button_color>;
};

type SitePluginPluginOptionsSplitioFeaturesFree_account_button_color = {
  readonly treatment: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSplitioEnv = {
  readonly development: Maybe<SitePluginPluginOptionsSplitioEnvDevelopment>;
};

type SitePluginPluginOptionsSplitioEnvDevelopment = {
  readonly features: Maybe<SitePluginPluginOptionsSplitioEnvDevelopmentFeatures>;
  readonly core: Maybe<SitePluginPluginOptionsSplitioEnvDevelopmentCore>;
};

type SitePluginPluginOptionsSplitioEnvDevelopmentFeatures = {
  readonly developer_website_global_header_gh_buttons: Maybe<Scalars['String']>;
  readonly developer_website_right_rail_buttons: Maybe<Scalars['String']>;
  readonly super_tiles: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSplitioEnvDevelopmentCore = {
  readonly authorizationKey: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsRelatedResources = {
  readonly swiftype: Maybe<SitePluginPluginOptionsRelatedResourcesSwiftype>;
};

type SitePluginPluginOptionsRelatedResourcesSwiftype = {
  readonly resultsPath: Maybe<Scalars['String']>;
  readonly refetch: Maybe<Scalars['Boolean']>;
  readonly engineKey: Maybe<Scalars['String']>;
  readonly limit: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsNewrelic = {
  readonly configs: Maybe<SitePluginPluginOptionsNewrelicConfigs>;
};

type SitePluginPluginOptionsNewrelicConfigs = {
  readonly production: Maybe<SitePluginPluginOptionsNewrelicConfigsProduction>;
  readonly staging: Maybe<SitePluginPluginOptionsNewrelicConfigsStaging>;
};

type SitePluginPluginOptionsNewrelicConfigsProduction = {
  readonly instrumentationType: Maybe<Scalars['String']>;
  readonly accountId: Maybe<Scalars['String']>;
  readonly trustKey: Maybe<Scalars['String']>;
  readonly agentID: Maybe<Scalars['String']>;
  readonly licenseKey: Maybe<Scalars['String']>;
  readonly applicationID: Maybe<Scalars['String']>;
  readonly beacon: Maybe<Scalars['String']>;
  readonly errorBeacon: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsNewrelicConfigsStaging = {
  readonly instrumentationType: Maybe<Scalars['String']>;
  readonly accountId: Maybe<Scalars['String']>;
  readonly trustKey: Maybe<Scalars['String']>;
  readonly agentID: Maybe<Scalars['String']>;
  readonly licenseKey: Maybe<Scalars['String']>;
  readonly applicationID: Maybe<Scalars['String']>;
  readonly beacon: Maybe<Scalars['String']>;
  readonly errorBeacon: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsTessen = {
  readonly tessenVersion: Maybe<Scalars['String']>;
  readonly product: Maybe<Scalars['String']>;
  readonly subproduct: Maybe<Scalars['String']>;
  readonly segmentWriteKey: Maybe<Scalars['String']>;
  readonly trackPageViews: Maybe<Scalars['Boolean']>;
  readonly pageView: Maybe<SitePluginPluginOptionsTessenPageView>;
};

type SitePluginPluginOptionsTessenPageView = {
  readonly eventName: Maybe<Scalars['String']>;
  readonly category: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsImplementation = {
  readonly info: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsGatsbyRemarkPlugins = {
  readonly resolve: Maybe<Scalars['String']>;
  readonly options: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptions>;
};

type SitePluginPluginOptionsGatsbyRemarkPluginsOptions = {
  readonly maxHeight: Maybe<Scalars['Int']>;
  readonly maxWidth: Maybe<Scalars['Int']>;
  readonly fit: Maybe<Scalars['String']>;
  readonly linkImagesToOriginal: Maybe<Scalars['Boolean']>;
  readonly icon: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsGoogleAnalytics = {
  readonly trackingId: Maybe<Scalars['String']>;
  readonly autoStart: Maybe<Scalars['Boolean']>;
  readonly anonymize: Maybe<Scalars['Boolean']>;
  readonly controlCookieName: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsEmitSchema = {
  readonly src___generated___gatsby_schema_graphql: Maybe<Scalars['Boolean']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type ImageFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ImageCropFocus =
  | 'CENTER'
  | 1
  | 5
  | 2
  | 6
  | 3
  | 7
  | 4
  | 8
  | 16
  | 17;

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'white'
  | 'left'
  | 'right'
  | 'minority'
  | 'majority';

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_gatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AVIFOptions>;
  transformOptions: Maybe<TransformOptions>;
  backgroundColor: Maybe<Scalars['String']>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};


type ImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: Maybe<ImageFormat>;
};

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type AVIFOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly speed: Maybe<Scalars['Int']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type SiteLayout = {
  readonly contentPadding: Maybe<Scalars['String']>;
  readonly maxWidth: Maybe<Scalars['String']>;
  readonly mobileBreakpoint: Maybe<Scalars['String']>;
};

type MdxFrontmatter = {
  readonly startDate: Maybe<Scalars['Date']>;
  readonly endDate: Maybe<Scalars['Date']>;
  readonly title: Scalars['String'];
  readonly path: Maybe<Scalars['String']>;
  readonly template: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly tileShorthand: Maybe<MdxFrontmatterTileShorthand>;
  readonly resources: Maybe<ReadonlyArray<Maybe<MdxFrontmatterResources>>>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly redirects: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly duration: Maybe<Scalars['Int']>;
  readonly procIdx: Maybe<Scalars['Float']>;
  readonly promote: Maybe<Scalars['Boolean']>;
};


type MdxFrontmatter_startDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type MdxFrontmatter_endDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type MdxFrontmatterTileShorthand = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
};

type MdxFrontmatterResources = {
  readonly title: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type Locale = Node & {
  readonly name: Scalars['String'];
  readonly localName: Scalars['String'];
  readonly locale: Scalars['String'];
  readonly hrefLang: Scalars['String'];
  readonly isDefault: Scalars['Boolean'];
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type RelatedResource = Node & {
  readonly id: Scalars['ID'];
  readonly title: Scalars['String'];
  readonly url: Scalars['String'];
  readonly plugin: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type NewRelicThemeConfig = Node & {
  readonly env: Scalars['String'];
  readonly relatedResources: NewRelicThemeRelatedResourceConfig;
  readonly tessen: Maybe<NewRelicThemeTessenConfig>;
  readonly signup: Maybe<NewRelicThemeSignupConfig>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type NewRelicThemeRelatedResourceConfig = {
  readonly labels: ReadonlyArray<RelatedResourceLabel>;
};

type RelatedResourceLabel = {
  readonly baseUrl: Scalars['String'];
  readonly label: Scalars['String'];
};

type NewRelicThemeTessenConfig = {
  readonly product: Maybe<Scalars['String']>;
  readonly subproduct: Maybe<Scalars['String']>;
};

type NewRelicThemeSignupConfig = {
  readonly environment: Scalars['String'];
  readonly reCaptchaToken: Scalars['String'];
  readonly signupURL: Scalars['String'];
};

type MarkdownHeading = {
  readonly id: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type MarkdownExcerptFormats =
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

type MarkdownWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type MarkdownRemark = Node & {
  readonly id: Scalars['ID'];
  readonly html: Maybe<Scalars['String']>;
  readonly htmlAst: Maybe<Scalars['JSON']>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly excerptAst: Maybe<Scalars['JSON']>;
  readonly headings: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly tableOfContents: Maybe<Scalars['String']>;
  readonly wordCount: Maybe<MarkdownWordCount>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type MarkdownRemark_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


type MarkdownRemark_excerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type MarkdownRemark_headingsArgs = {
  depth: Maybe<MarkdownHeadingLevels>;
};


type MarkdownRemark_tableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth: Maybe<Scalars['Int']>;
  heading: Maybe<Scalars['String']>;
};

type MdxHeadingMdx = {
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type HeadingsMdx =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type MdxWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type Mdx = Node & {
  readonly rawBody: Scalars['String'];
  readonly fileAbsolutePath: Scalars['String'];
  readonly frontmatter: Maybe<MdxFrontmatter>;
  readonly slug: Maybe<Scalars['String']>;
  readonly body: Scalars['String'];
  readonly excerpt: Scalars['String'];
  readonly headings: Maybe<ReadonlyArray<Maybe<MdxHeadingMdx>>>;
  readonly html: Maybe<Scalars['String']>;
  readonly mdxAST: Maybe<Scalars['JSON']>;
  readonly tableOfContents: Maybe<Scalars['JSON']>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly wordCount: Maybe<MdxWordCount>;
  readonly fields: Maybe<MdxFields>;
  /** Returns all children nodes filtered by type RelatedResource */
  readonly childrenRelatedResource: Maybe<ReadonlyArray<Maybe<RelatedResource>>>;
  /** Returns the first child node of type RelatedResource or null if there are no children of given type on this node */
  readonly childRelatedResource: Maybe<RelatedResource>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly relatedResources: Maybe<ReadonlyArray<RelatedResource>>;
};


type Mdx_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type Mdx_headingsArgs = {
  depth: Maybe<HeadingsMdx>;
};


type Mdx_tableOfContentsArgs = {
  maxDepth: Maybe<Scalars['Int']>;
};


type Mdx_relatedResourcesArgs = {
  limit?: Maybe<Scalars['Int']>;
};

type MdxFields = {
  readonly fileRelativePath: Maybe<Scalars['String']>;
  readonly gitAuthorTime: Maybe<Scalars['Date']>;
  readonly slug: Maybe<Scalars['String']>;
};


type MdxFields_gitAuthorTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type NewRelicSdkPropTypeMeta = NewRelicSdkPropTypeArrayOfMeta | NewRelicSdkPropTypeEnumMeta | NewRelicSdkPropTypeFunctionMeta | NewRelicSdkPropTypeShapeMeta | NewRelicSdkPropTypeUnionMeta;

type NewRelicSdkPropTypeArrayOfMeta = {
  readonly itemTypes: NewRelicSdkPropTypeDefinitionType;
};

type NewRelicSdkPropTypeEnumMeta = {
  readonly constants: ReadonlyArray<Scalars['String']>;
};

type NewRelicSdkPropTypeFunctionMeta = {
  readonly returnValue: ReadonlyArray<Maybe<NewRelicSdkFunctionReturnValue>>;
  readonly arguments: ReadonlyArray<NewRelicSdkFunctionArgument>;
};

type NewRelicSdkPropTypeShapeMeta = {
  readonly types: ReadonlyArray<NewRelicSdkPropTypeDefinition>;
};

type NewRelicSdkPropTypeUnionMeta = {
  readonly types: ReadonlyArray<NewRelicSdkPropTypeDefinitionType>;
};

type NewRelicSdkComponent = Node & {
  readonly constants: ReadonlyArray<NewRelicSdkConstant>;
  readonly examples: ReadonlyArray<NewRelicSdkExample>;
  readonly propTypes: ReadonlyArray<NewRelicSdkPropTypeDefinition>;
  readonly typeDefs: ReadonlyArray<NewRelicSdkTypeDefinition>;
  readonly methods: ReadonlyArray<NewRelicSdkMethod>;
  readonly name: Maybe<Scalars['String']>;
  readonly usage: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly fields: Maybe<NewRelicSdkComponentFields>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type NewRelicSdkComponentFields = {
  readonly slug: Maybe<Scalars['String']>;
};

type NewRelicSdkApi = Node & {
  readonly constants: ReadonlyArray<NewRelicSdkConstant>;
  readonly examples: ReadonlyArray<NewRelicSdkExample>;
  readonly typeDefs: Maybe<ReadonlyArray<Maybe<NewRelicSdkTypeDefinition>>>;
  readonly methods: ReadonlyArray<NewRelicSdkMethod>;
  readonly name: Maybe<Scalars['String']>;
  readonly usage: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly fields: Maybe<NewRelicSdkApiFields>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type NewRelicSdkApiFields = {
  readonly slug: Maybe<Scalars['String']>;
};

type NewRelicSdkPropTypeDefinition = {
  readonly name: Scalars['String'];
  readonly type: NewRelicSdkPropTypeDefinitionType;
  readonly examples: ReadonlyArray<NewRelicSdkExample>;
  readonly defaultValue: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly deprecation: Maybe<NewRelicSdkComponentPropTypesDeprecation>;
  readonly isRequired: Maybe<Scalars['Boolean']>;
};

type NewRelicSdkMethod = {
  readonly examples: ReadonlyArray<NewRelicSdkExample>;
  readonly arguments: ReadonlyArray<NewRelicSdkFunctionArgument>;
  readonly returnValue: NewRelicSdkFunctionReturnValue;
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
};

type NewRelicSdkComponentPropTypesDeprecation = {
  readonly date: Scalars['Date'];
  readonly signature: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
};


type NewRelicSdkComponentPropTypesDeprecation_dateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type NewRelicSdkPropTypeDefinitionType = {
  readonly name: Scalars['String'];
  readonly raw: Scalars['String'];
  readonly meta: Maybe<NewRelicSdkPropTypeMeta>;
};

type NewRelicSdkFunctionReturnValue = {
  readonly description: Maybe<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly promiseType: Maybe<Scalars['String']>;
};

type NewRelicSdkFunctionArgument = {
  readonly description: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly type: Scalars['String'];
  readonly defaultValue: Maybe<Scalars['String']>;
};

type NewRelicSdkTypeDefinition = {
  readonly name: Scalars['String'];
  readonly properties: Maybe<ReadonlyArray<Maybe<NewRelicSdkTypeDefinitionProperty>>>;
};

type NewRelicSdkTypeDefinitionProperty = {
  readonly name: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly type: Scalars['String'];
};

type NewRelicSdkConstant = {
  readonly name: Scalars['String'];
  readonly value: Scalars['JSON'];
};

type NewRelicSdkExample = {
  readonly label: Scalars['String'];
  readonly sourceCode: Scalars['String'];
  readonly live: Scalars['Boolean'];
  readonly preview: Scalars['Boolean'];
};

type Query = {
  readonly newRelicSdk: NewRelicSdk;
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly locale: Maybe<Locale>;
  readonly allLocale: LocaleConnection;
  readonly relatedResource: Maybe<RelatedResource>;
  readonly allRelatedResource: RelatedResourceConnection;
  readonly newRelicThemeConfig: Maybe<NewRelicThemeConfig>;
  readonly allNewRelicThemeConfig: NewRelicThemeConfigConnection;
  readonly markdownRemark: Maybe<MarkdownRemark>;
  readonly allMarkdownRemark: MarkdownRemarkConnection;
  readonly mdx: Maybe<Mdx>;
  readonly allMdx: MdxConnection;
  readonly newRelicSdkComponent: Maybe<NewRelicSdkComponent>;
  readonly allNewRelicSdkComponent: NewRelicSdkComponentConnection;
  readonly newRelicSdkApi: Maybe<NewRelicSdkApi>;
  readonly allNewRelicSdkApi: NewRelicSdkApiConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  childrenMdx: Maybe<MdxFilterListInput>;
  childMdx: Maybe<MdxFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  flags: Maybe<SiteFlagsFilterInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteFunctionArgs = {
  functionRoute: Maybe<StringQueryOperatorInput>;
  pluginName: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  sort: Maybe<SiteFunctionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  context: Maybe<SitePageContextFilterInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_localeArgs = {
  name: Maybe<StringQueryOperatorInput>;
  localName: Maybe<StringQueryOperatorInput>;
  locale: Maybe<StringQueryOperatorInput>;
  hrefLang: Maybe<StringQueryOperatorInput>;
  isDefault: Maybe<BooleanQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allLocaleArgs = {
  filter: Maybe<LocaleFilterInput>;
  sort: Maybe<LocaleSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_relatedResourceArgs = {
  id: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  plugin: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allRelatedResourceArgs = {
  filter: Maybe<RelatedResourceFilterInput>;
  sort: Maybe<RelatedResourceSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_newRelicThemeConfigArgs = {
  env: Maybe<StringQueryOperatorInput>;
  relatedResources: Maybe<NewRelicThemeRelatedResourceConfigFilterInput>;
  tessen: Maybe<NewRelicThemeTessenConfigFilterInput>;
  signup: Maybe<NewRelicThemeSignupConfigFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allNewRelicThemeConfigArgs = {
  filter: Maybe<NewRelicThemeConfigFilterInput>;
  sort: Maybe<NewRelicThemeConfigSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_markdownRemarkArgs = {
  id: Maybe<StringQueryOperatorInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JSONQueryOperatorInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  excerptAst: Maybe<JSONQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMarkdownRemarkArgs = {
  filter: Maybe<MarkdownRemarkFilterInput>;
  sort: Maybe<MarkdownRemarkSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_mdxArgs = {
  rawBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MdxFrontmatterFilterInput>;
  slug: Maybe<StringQueryOperatorInput>;
  body: Maybe<StringQueryOperatorInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  headings: Maybe<MdxHeadingMdxFilterListInput>;
  html: Maybe<StringQueryOperatorInput>;
  mdxAST: Maybe<JSONQueryOperatorInput>;
  tableOfContents: Maybe<JSONQueryOperatorInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  wordCount: Maybe<MdxWordCountFilterInput>;
  fields: Maybe<MdxFieldsFilterInput>;
  childrenRelatedResource: Maybe<RelatedResourceFilterListInput>;
  childRelatedResource: Maybe<RelatedResourceFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMdxArgs = {
  filter: Maybe<MdxFilterInput>;
  sort: Maybe<MdxSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_newRelicSdkComponentArgs = {
  constants: Maybe<NewRelicSdkConstantFilterListInput>;
  examples: Maybe<NewRelicSdkExampleFilterListInput>;
  propTypes: Maybe<NewRelicSdkPropTypeDefinitionFilterListInput>;
  typeDefs: Maybe<NewRelicSdkTypeDefinitionFilterListInput>;
  methods: Maybe<NewRelicSdkMethodFilterListInput>;
  name: Maybe<StringQueryOperatorInput>;
  usage: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  fields: Maybe<NewRelicSdkComponentFieldsFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allNewRelicSdkComponentArgs = {
  filter: Maybe<NewRelicSdkComponentFilterInput>;
  sort: Maybe<NewRelicSdkComponentSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_newRelicSdkApiArgs = {
  constants: Maybe<NewRelicSdkConstantFilterListInput>;
  examples: Maybe<NewRelicSdkExampleFilterListInput>;
  typeDefs: Maybe<NewRelicSdkTypeDefinitionFilterListInput>;
  methods: Maybe<NewRelicSdkMethodFilterListInput>;
  name: Maybe<StringQueryOperatorInput>;
  usage: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  fields: Maybe<NewRelicSdkApiFieldsFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allNewRelicSdkApiArgs = {
  filter: Maybe<NewRelicSdkApiFilterInput>;
  sort: Maybe<NewRelicSdkApiSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
};

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type MdxFilterListInput = {
  readonly elemMatch: Maybe<MdxFilterInput>;
};

type MdxFilterInput = {
  readonly rawBody: Maybe<StringQueryOperatorInput>;
  readonly fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<MdxFrontmatterFilterInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly headings: Maybe<MdxHeadingMdxFilterListInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly mdxAST: Maybe<JSONQueryOperatorInput>;
  readonly tableOfContents: Maybe<JSONQueryOperatorInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly wordCount: Maybe<MdxWordCountFilterInput>;
  readonly fields: Maybe<MdxFieldsFilterInput>;
  readonly childrenRelatedResource: Maybe<RelatedResourceFilterListInput>;
  readonly childRelatedResource: Maybe<RelatedResourceFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type MdxFrontmatterFilterInput = {
  readonly startDate: Maybe<DateQueryOperatorInput>;
  readonly endDate: Maybe<DateQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly template: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly tileShorthand: Maybe<MdxFrontmatterTileShorthandFilterInput>;
  readonly resources: Maybe<MdxFrontmatterResourcesFilterListInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly redirects: Maybe<StringQueryOperatorInput>;
  readonly duration: Maybe<IntQueryOperatorInput>;
  readonly procIdx: Maybe<FloatQueryOperatorInput>;
  readonly promote: Maybe<BooleanQueryOperatorInput>;
};

type MdxFrontmatterTileShorthandFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
};

type MdxFrontmatterResourcesFilterListInput = {
  readonly elemMatch: Maybe<MdxFrontmatterResourcesFilterInput>;
};

type MdxFrontmatterResourcesFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
};

type MdxHeadingMdxFilterListInput = {
  readonly elemMatch: Maybe<MdxHeadingMdxFilterInput>;
};

type MdxHeadingMdxFilterInput = {
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MdxWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

type MdxFieldsFilterInput = {
  readonly fileRelativePath: Maybe<StringQueryOperatorInput>;
  readonly gitAuthorTime: Maybe<DateQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
};

type RelatedResourceFilterListInput = {
  readonly elemMatch: Maybe<RelatedResourceFilterInput>;
};

type RelatedResourceFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly plugin: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.original.width'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.children'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'childrenMdx'
  | 'childrenMdx.rawBody'
  | 'childrenMdx.fileAbsolutePath'
  | 'childrenMdx.frontmatter.startDate'
  | 'childrenMdx.frontmatter.endDate'
  | 'childrenMdx.frontmatter.title'
  | 'childrenMdx.frontmatter.path'
  | 'childrenMdx.frontmatter.template'
  | 'childrenMdx.frontmatter.description'
  | 'childrenMdx.frontmatter.tileShorthand.title'
  | 'childrenMdx.frontmatter.tileShorthand.description'
  | 'childrenMdx.frontmatter.resources'
  | 'childrenMdx.frontmatter.resources.title'
  | 'childrenMdx.frontmatter.resources.url'
  | 'childrenMdx.frontmatter.tags'
  | 'childrenMdx.frontmatter.redirects'
  | 'childrenMdx.frontmatter.duration'
  | 'childrenMdx.frontmatter.procIdx'
  | 'childrenMdx.frontmatter.promote'
  | 'childrenMdx.slug'
  | 'childrenMdx.body'
  | 'childrenMdx.excerpt'
  | 'childrenMdx.headings'
  | 'childrenMdx.headings.value'
  | 'childrenMdx.headings.depth'
  | 'childrenMdx.html'
  | 'childrenMdx.mdxAST'
  | 'childrenMdx.tableOfContents'
  | 'childrenMdx.timeToRead'
  | 'childrenMdx.wordCount.paragraphs'
  | 'childrenMdx.wordCount.sentences'
  | 'childrenMdx.wordCount.words'
  | 'childrenMdx.fields.fileRelativePath'
  | 'childrenMdx.fields.gitAuthorTime'
  | 'childrenMdx.fields.slug'
  | 'childrenMdx.childrenRelatedResource'
  | 'childrenMdx.childrenRelatedResource.id'
  | 'childrenMdx.childrenRelatedResource.title'
  | 'childrenMdx.childrenRelatedResource.url'
  | 'childrenMdx.childrenRelatedResource.plugin'
  | 'childrenMdx.childrenRelatedResource.parent.id'
  | 'childrenMdx.childrenRelatedResource.parent.children'
  | 'childrenMdx.childrenRelatedResource.children'
  | 'childrenMdx.childrenRelatedResource.children.id'
  | 'childrenMdx.childrenRelatedResource.children.children'
  | 'childrenMdx.childrenRelatedResource.internal.content'
  | 'childrenMdx.childrenRelatedResource.internal.contentDigest'
  | 'childrenMdx.childrenRelatedResource.internal.description'
  | 'childrenMdx.childrenRelatedResource.internal.fieldOwners'
  | 'childrenMdx.childrenRelatedResource.internal.ignoreType'
  | 'childrenMdx.childrenRelatedResource.internal.mediaType'
  | 'childrenMdx.childrenRelatedResource.internal.owner'
  | 'childrenMdx.childrenRelatedResource.internal.type'
  | 'childrenMdx.childRelatedResource.id'
  | 'childrenMdx.childRelatedResource.title'
  | 'childrenMdx.childRelatedResource.url'
  | 'childrenMdx.childRelatedResource.plugin'
  | 'childrenMdx.childRelatedResource.parent.id'
  | 'childrenMdx.childRelatedResource.parent.children'
  | 'childrenMdx.childRelatedResource.children'
  | 'childrenMdx.childRelatedResource.children.id'
  | 'childrenMdx.childRelatedResource.children.children'
  | 'childrenMdx.childRelatedResource.internal.content'
  | 'childrenMdx.childRelatedResource.internal.contentDigest'
  | 'childrenMdx.childRelatedResource.internal.description'
  | 'childrenMdx.childRelatedResource.internal.fieldOwners'
  | 'childrenMdx.childRelatedResource.internal.ignoreType'
  | 'childrenMdx.childRelatedResource.internal.mediaType'
  | 'childrenMdx.childRelatedResource.internal.owner'
  | 'childrenMdx.childRelatedResource.internal.type'
  | 'childrenMdx.id'
  | 'childrenMdx.parent.id'
  | 'childrenMdx.parent.parent.id'
  | 'childrenMdx.parent.parent.children'
  | 'childrenMdx.parent.children'
  | 'childrenMdx.parent.children.id'
  | 'childrenMdx.parent.children.children'
  | 'childrenMdx.parent.internal.content'
  | 'childrenMdx.parent.internal.contentDigest'
  | 'childrenMdx.parent.internal.description'
  | 'childrenMdx.parent.internal.fieldOwners'
  | 'childrenMdx.parent.internal.ignoreType'
  | 'childrenMdx.parent.internal.mediaType'
  | 'childrenMdx.parent.internal.owner'
  | 'childrenMdx.parent.internal.type'
  | 'childrenMdx.children'
  | 'childrenMdx.children.id'
  | 'childrenMdx.children.parent.id'
  | 'childrenMdx.children.parent.children'
  | 'childrenMdx.children.children'
  | 'childrenMdx.children.children.id'
  | 'childrenMdx.children.children.children'
  | 'childrenMdx.children.internal.content'
  | 'childrenMdx.children.internal.contentDigest'
  | 'childrenMdx.children.internal.description'
  | 'childrenMdx.children.internal.fieldOwners'
  | 'childrenMdx.children.internal.ignoreType'
  | 'childrenMdx.children.internal.mediaType'
  | 'childrenMdx.children.internal.owner'
  | 'childrenMdx.children.internal.type'
  | 'childrenMdx.internal.content'
  | 'childrenMdx.internal.contentDigest'
  | 'childrenMdx.internal.description'
  | 'childrenMdx.internal.fieldOwners'
  | 'childrenMdx.internal.ignoreType'
  | 'childrenMdx.internal.mediaType'
  | 'childrenMdx.internal.owner'
  | 'childrenMdx.internal.type'
  | 'childMdx.rawBody'
  | 'childMdx.fileAbsolutePath'
  | 'childMdx.frontmatter.startDate'
  | 'childMdx.frontmatter.endDate'
  | 'childMdx.frontmatter.title'
  | 'childMdx.frontmatter.path'
  | 'childMdx.frontmatter.template'
  | 'childMdx.frontmatter.description'
  | 'childMdx.frontmatter.tileShorthand.title'
  | 'childMdx.frontmatter.tileShorthand.description'
  | 'childMdx.frontmatter.resources'
  | 'childMdx.frontmatter.resources.title'
  | 'childMdx.frontmatter.resources.url'
  | 'childMdx.frontmatter.tags'
  | 'childMdx.frontmatter.redirects'
  | 'childMdx.frontmatter.duration'
  | 'childMdx.frontmatter.procIdx'
  | 'childMdx.frontmatter.promote'
  | 'childMdx.slug'
  | 'childMdx.body'
  | 'childMdx.excerpt'
  | 'childMdx.headings'
  | 'childMdx.headings.value'
  | 'childMdx.headings.depth'
  | 'childMdx.html'
  | 'childMdx.mdxAST'
  | 'childMdx.tableOfContents'
  | 'childMdx.timeToRead'
  | 'childMdx.wordCount.paragraphs'
  | 'childMdx.wordCount.sentences'
  | 'childMdx.wordCount.words'
  | 'childMdx.fields.fileRelativePath'
  | 'childMdx.fields.gitAuthorTime'
  | 'childMdx.fields.slug'
  | 'childMdx.childrenRelatedResource'
  | 'childMdx.childrenRelatedResource.id'
  | 'childMdx.childrenRelatedResource.title'
  | 'childMdx.childrenRelatedResource.url'
  | 'childMdx.childrenRelatedResource.plugin'
  | 'childMdx.childrenRelatedResource.parent.id'
  | 'childMdx.childrenRelatedResource.parent.children'
  | 'childMdx.childrenRelatedResource.children'
  | 'childMdx.childrenRelatedResource.children.id'
  | 'childMdx.childrenRelatedResource.children.children'
  | 'childMdx.childrenRelatedResource.internal.content'
  | 'childMdx.childrenRelatedResource.internal.contentDigest'
  | 'childMdx.childrenRelatedResource.internal.description'
  | 'childMdx.childrenRelatedResource.internal.fieldOwners'
  | 'childMdx.childrenRelatedResource.internal.ignoreType'
  | 'childMdx.childrenRelatedResource.internal.mediaType'
  | 'childMdx.childrenRelatedResource.internal.owner'
  | 'childMdx.childrenRelatedResource.internal.type'
  | 'childMdx.childRelatedResource.id'
  | 'childMdx.childRelatedResource.title'
  | 'childMdx.childRelatedResource.url'
  | 'childMdx.childRelatedResource.plugin'
  | 'childMdx.childRelatedResource.parent.id'
  | 'childMdx.childRelatedResource.parent.children'
  | 'childMdx.childRelatedResource.children'
  | 'childMdx.childRelatedResource.children.id'
  | 'childMdx.childRelatedResource.children.children'
  | 'childMdx.childRelatedResource.internal.content'
  | 'childMdx.childRelatedResource.internal.contentDigest'
  | 'childMdx.childRelatedResource.internal.description'
  | 'childMdx.childRelatedResource.internal.fieldOwners'
  | 'childMdx.childRelatedResource.internal.ignoreType'
  | 'childMdx.childRelatedResource.internal.mediaType'
  | 'childMdx.childRelatedResource.internal.owner'
  | 'childMdx.childRelatedResource.internal.type'
  | 'childMdx.id'
  | 'childMdx.parent.id'
  | 'childMdx.parent.parent.id'
  | 'childMdx.parent.parent.children'
  | 'childMdx.parent.children'
  | 'childMdx.parent.children.id'
  | 'childMdx.parent.children.children'
  | 'childMdx.parent.internal.content'
  | 'childMdx.parent.internal.contentDigest'
  | 'childMdx.parent.internal.description'
  | 'childMdx.parent.internal.fieldOwners'
  | 'childMdx.parent.internal.ignoreType'
  | 'childMdx.parent.internal.mediaType'
  | 'childMdx.parent.internal.owner'
  | 'childMdx.parent.internal.type'
  | 'childMdx.children'
  | 'childMdx.children.id'
  | 'childMdx.children.parent.id'
  | 'childMdx.children.parent.children'
  | 'childMdx.children.children'
  | 'childMdx.children.children.id'
  | 'childMdx.children.children.children'
  | 'childMdx.children.internal.content'
  | 'childMdx.children.internal.contentDigest'
  | 'childMdx.children.internal.description'
  | 'childMdx.children.internal.fieldOwners'
  | 'childMdx.children.internal.ignoreType'
  | 'childMdx.children.internal.mediaType'
  | 'childMdx.children.internal.owner'
  | 'childMdx.children.internal.type'
  | 'childMdx.internal.content'
  | 'childMdx.internal.contentDigest'
  | 'childMdx.internal.description'
  | 'childMdx.internal.fieldOwners'
  | 'childMdx.internal.ignoreType'
  | 'childMdx.internal.mediaType'
  | 'childMdx.internal.owner'
  | 'childMdx.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type FileGroupConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly childrenMdx: Maybe<MdxFilterListInput>;
  readonly childMdx: Maybe<MdxFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DirectoryGroupConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly repository: Maybe<StringQueryOperatorInput>;
  readonly branch: Maybe<StringQueryOperatorInput>;
  readonly contributingUrl: Maybe<StringQueryOperatorInput>;
  readonly titleTemplate: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
};

type SiteFlagsFilterInput = {
  readonly DEV_SSR: Maybe<BooleanQueryOperatorInput>;
  readonly PRESERVE_WEBPACK_CACHE: Maybe<BooleanQueryOperatorInput>;
  readonly PRESERVE_FILE_DOWNLOAD_CACHE: Maybe<BooleanQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'siteMetadata.repository'
  | 'siteMetadata.branch'
  | 'siteMetadata.contributingUrl'
  | 'siteMetadata.titleTemplate'
  | 'siteMetadata.author'
  | 'siteMetadata.siteUrl'
  | 'port'
  | 'host'
  | 'flags.DEV_SSR'
  | 'flags.PRESERVE_WEBPACK_CACHE'
  | 'flags.PRESERVE_FILE_DOWNLOAD_CACHE'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteGroupConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly flags: Maybe<SiteFlagsFilterInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteFunctionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteFunctionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteFunctionGroupConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionFilterInput = {
  readonly functionRoute: Maybe<StringQueryOperatorInput>;
  readonly pluginName: Maybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteFunctionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly sourceMap: Maybe<BooleanQueryOperatorInput>;
  readonly autoLabel: Maybe<StringQueryOperatorInput>;
  readonly labelFormat: Maybe<StringQueryOperatorInput>;
  readonly cssPropOptimization: Maybe<BooleanQueryOperatorInput>;
  readonly output: Maybe<StringQueryOperatorInput>;
  readonly createLinkInHead: Maybe<BooleanQueryOperatorInput>;
  readonly entryLimit: Maybe<IntQueryOperatorInput>;
  readonly query: Maybe<StringQueryOperatorInput>;
  readonly classNameDark: Maybe<StringQueryOperatorInput>;
  readonly classNameLight: Maybe<StringQueryOperatorInput>;
  readonly storageKey: Maybe<StringQueryOperatorInput>;
  readonly minify: Maybe<BooleanQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly sitemap: Maybe<StringQueryOperatorInput>;
  readonly policy: Maybe<SitePluginPluginOptionsPolicyFilterListInput>;
  readonly configs: Maybe<SitePluginPluginOptionsConfigsFilterInput>;
  readonly oneTrustID: Maybe<StringQueryOperatorInput>;
  readonly forceTrailingSlashes: Maybe<BooleanQueryOperatorInput>;
  readonly layout: Maybe<SitePluginPluginOptionsLayoutFilterInput>;
  readonly prism: Maybe<SitePluginPluginOptionsPrismFilterInput>;
  readonly splitio: Maybe<SitePluginPluginOptionsSplitioFilterInput>;
  readonly relatedResources: Maybe<SitePluginPluginOptionsRelatedResourcesFilterInput>;
  readonly newrelic: Maybe<SitePluginPluginOptionsNewrelicFilterInput>;
  readonly tessen: Maybe<SitePluginPluginOptionsTessenFilterInput>;
  readonly implementation: Maybe<SitePluginPluginOptionsImplementationFilterInput>;
  readonly short_name: Maybe<StringQueryOperatorInput>;
  readonly start_url: Maybe<StringQueryOperatorInput>;
  readonly background_color: Maybe<StringQueryOperatorInput>;
  readonly theme_color: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly legacy: Maybe<BooleanQueryOperatorInput>;
  readonly theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  readonly cache_busting_mode: Maybe<StringQueryOperatorInput>;
  readonly crossOrigin: Maybe<StringQueryOperatorInput>;
  readonly include_favicon: Maybe<BooleanQueryOperatorInput>;
  readonly cacheDigest: Maybe<StringQueryOperatorInput>;
  readonly maxWidth: Maybe<IntQueryOperatorInput>;
  readonly linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>;
  readonly showCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly markdownCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly sizeByPixelDensity: Maybe<BooleanQueryOperatorInput>;
  readonly backgroundColor: Maybe<StringQueryOperatorInput>;
  readonly quality: Maybe<IntQueryOperatorInput>;
  readonly withWebp: Maybe<BooleanQueryOperatorInput>;
  readonly tracedSVG: Maybe<BooleanQueryOperatorInput>;
  readonly loading: Maybe<StringQueryOperatorInput>;
  readonly decoding: Maybe<StringQueryOperatorInput>;
  readonly disableBgImageOnAlpha: Maybe<BooleanQueryOperatorInput>;
  readonly disableBgImage: Maybe<BooleanQueryOperatorInput>;
  readonly gatsbyRemarkPlugins: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput>;
  readonly extensions: Maybe<StringQueryOperatorInput>;
  readonly lessBabel: Maybe<BooleanQueryOperatorInput>;
  readonly mediaTypes: Maybe<StringQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly release: Maybe<StringQueryOperatorInput>;
  readonly debug: Maybe<BooleanQueryOperatorInput>;
  readonly googleAnalytics: Maybe<SitePluginPluginOptionsGoogleAnalyticsFilterInput>;
  readonly environments: Maybe<StringQueryOperatorInput>;
  readonly allPageHeaders: Maybe<StringQueryOperatorInput>;
  readonly outputPath: Maybe<StringQueryOperatorInput>;
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchemaFilterInput>;
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsPolicyFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsPolicyFilterInput>;
};

type SitePluginPluginOptionsPolicyFilterInput = {
  readonly userAgent: Maybe<StringQueryOperatorInput>;
  readonly allow: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsConfigsFilterInput = {
  readonly production: Maybe<SitePluginPluginOptionsConfigsProductionFilterInput>;
  readonly staging: Maybe<SitePluginPluginOptionsConfigsStagingFilterInput>;
};

type SitePluginPluginOptionsConfigsProductionFilterInput = {
  readonly instrumentationType: Maybe<StringQueryOperatorInput>;
  readonly accountId: Maybe<StringQueryOperatorInput>;
  readonly trustKey: Maybe<StringQueryOperatorInput>;
  readonly agentID: Maybe<StringQueryOperatorInput>;
  readonly licenseKey: Maybe<StringQueryOperatorInput>;
  readonly applicationID: Maybe<StringQueryOperatorInput>;
  readonly beacon: Maybe<StringQueryOperatorInput>;
  readonly errorBeacon: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsConfigsStagingFilterInput = {
  readonly instrumentationType: Maybe<StringQueryOperatorInput>;
  readonly accountId: Maybe<StringQueryOperatorInput>;
  readonly trustKey: Maybe<StringQueryOperatorInput>;
  readonly agentID: Maybe<StringQueryOperatorInput>;
  readonly licenseKey: Maybe<StringQueryOperatorInput>;
  readonly applicationID: Maybe<StringQueryOperatorInput>;
  readonly beacon: Maybe<StringQueryOperatorInput>;
  readonly errorBeacon: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsLayoutFilterInput = {
  readonly contentPadding: Maybe<StringQueryOperatorInput>;
  readonly maxWidth: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly mobileBreakpoint: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPrismFilterInput = {
  readonly languages: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSplitioFilterInput = {
  readonly core: Maybe<SitePluginPluginOptionsSplitioCoreFilterInput>;
  readonly features: Maybe<SitePluginPluginOptionsSplitioFeaturesFilterInput>;
  readonly env: Maybe<SitePluginPluginOptionsSplitioEnvFilterInput>;
};

type SitePluginPluginOptionsSplitioCoreFilterInput = {
  readonly authorizationKey: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSplitioFeaturesFilterInput = {
  readonly free_account_button_color: Maybe<SitePluginPluginOptionsSplitioFeaturesFree_account_button_colorFilterInput>;
};

type SitePluginPluginOptionsSplitioFeaturesFree_account_button_colorFilterInput = {
  readonly treatment: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSplitioEnvFilterInput = {
  readonly development: Maybe<SitePluginPluginOptionsSplitioEnvDevelopmentFilterInput>;
};

type SitePluginPluginOptionsSplitioEnvDevelopmentFilterInput = {
  readonly features: Maybe<SitePluginPluginOptionsSplitioEnvDevelopmentFeaturesFilterInput>;
  readonly core: Maybe<SitePluginPluginOptionsSplitioEnvDevelopmentCoreFilterInput>;
};

type SitePluginPluginOptionsSplitioEnvDevelopmentFeaturesFilterInput = {
  readonly developer_website_global_header_gh_buttons: Maybe<StringQueryOperatorInput>;
  readonly developer_website_right_rail_buttons: Maybe<StringQueryOperatorInput>;
  readonly super_tiles: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSplitioEnvDevelopmentCoreFilterInput = {
  readonly authorizationKey: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsRelatedResourcesFilterInput = {
  readonly swiftype: Maybe<SitePluginPluginOptionsRelatedResourcesSwiftypeFilterInput>;
};

type SitePluginPluginOptionsRelatedResourcesSwiftypeFilterInput = {
  readonly resultsPath: Maybe<StringQueryOperatorInput>;
  readonly refetch: Maybe<BooleanQueryOperatorInput>;
  readonly engineKey: Maybe<StringQueryOperatorInput>;
  readonly limit: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsNewrelicFilterInput = {
  readonly configs: Maybe<SitePluginPluginOptionsNewrelicConfigsFilterInput>;
};

type SitePluginPluginOptionsNewrelicConfigsFilterInput = {
  readonly production: Maybe<SitePluginPluginOptionsNewrelicConfigsProductionFilterInput>;
  readonly staging: Maybe<SitePluginPluginOptionsNewrelicConfigsStagingFilterInput>;
};

type SitePluginPluginOptionsNewrelicConfigsProductionFilterInput = {
  readonly instrumentationType: Maybe<StringQueryOperatorInput>;
  readonly accountId: Maybe<StringQueryOperatorInput>;
  readonly trustKey: Maybe<StringQueryOperatorInput>;
  readonly agentID: Maybe<StringQueryOperatorInput>;
  readonly licenseKey: Maybe<StringQueryOperatorInput>;
  readonly applicationID: Maybe<StringQueryOperatorInput>;
  readonly beacon: Maybe<StringQueryOperatorInput>;
  readonly errorBeacon: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsNewrelicConfigsStagingFilterInput = {
  readonly instrumentationType: Maybe<StringQueryOperatorInput>;
  readonly accountId: Maybe<StringQueryOperatorInput>;
  readonly trustKey: Maybe<StringQueryOperatorInput>;
  readonly agentID: Maybe<StringQueryOperatorInput>;
  readonly licenseKey: Maybe<StringQueryOperatorInput>;
  readonly applicationID: Maybe<StringQueryOperatorInput>;
  readonly beacon: Maybe<StringQueryOperatorInput>;
  readonly errorBeacon: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsTessenFilterInput = {
  readonly tessenVersion: Maybe<StringQueryOperatorInput>;
  readonly product: Maybe<StringQueryOperatorInput>;
  readonly subproduct: Maybe<StringQueryOperatorInput>;
  readonly segmentWriteKey: Maybe<StringQueryOperatorInput>;
  readonly trackPageViews: Maybe<BooleanQueryOperatorInput>;
  readonly pageView: Maybe<SitePluginPluginOptionsTessenPageViewFilterInput>;
};

type SitePluginPluginOptionsTessenPageViewFilterInput = {
  readonly eventName: Maybe<StringQueryOperatorInput>;
  readonly category: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsImplementationFilterInput = {
  readonly info: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput>;
};

type SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly options: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput>;
};

type SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput = {
  readonly maxHeight: Maybe<IntQueryOperatorInput>;
  readonly maxWidth: Maybe<IntQueryOperatorInput>;
  readonly fit: Maybe<StringQueryOperatorInput>;
  readonly linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsGoogleAnalyticsFilterInput = {
  readonly trackingId: Maybe<StringQueryOperatorInput>;
  readonly autoStart: Maybe<BooleanQueryOperatorInput>;
  readonly anonymize: Maybe<BooleanQueryOperatorInput>;
  readonly controlCookieName: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsEmitSchemaFilterInput = {
  readonly src___generated___gatsby_schema_graphql: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePageContextFilterInput = {
  readonly layout: Maybe<StringQueryOperatorInput>;
  readonly themeOptions: Maybe<SitePageContextThemeOptionsFilterInput>;
  readonly swiftypeEngineKey: Maybe<StringQueryOperatorInput>;
  readonly fileRelativePath: Maybe<StringQueryOperatorInput>;
  readonly locale: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly guidesFilter: Maybe<StringQueryOperatorInput>;
};

type SitePageContextThemeOptionsFilterInput = {
  readonly oneTrustID: Maybe<StringQueryOperatorInput>;
  readonly forceTrailingSlashes: Maybe<BooleanQueryOperatorInput>;
  readonly layout: Maybe<SitePageContextThemeOptionsLayoutFilterInput>;
  readonly prism: Maybe<SitePageContextThemeOptionsPrismFilterInput>;
  readonly splitio: Maybe<SitePageContextThemeOptionsSplitioFilterInput>;
  readonly relatedResources: Maybe<SitePageContextThemeOptionsRelatedResourcesFilterInput>;
  readonly newrelic: Maybe<SitePageContextThemeOptionsNewrelicFilterInput>;
  readonly tessen: Maybe<SitePageContextThemeOptionsTessenFilterInput>;
};

type SitePageContextThemeOptionsLayoutFilterInput = {
  readonly contentPadding: Maybe<StringQueryOperatorInput>;
  readonly maxWidth: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly mobileBreakpoint: Maybe<StringQueryOperatorInput>;
};

type SitePageContextThemeOptionsPrismFilterInput = {
  readonly languages: Maybe<StringQueryOperatorInput>;
};

type SitePageContextThemeOptionsSplitioFilterInput = {
  readonly core: Maybe<SitePageContextThemeOptionsSplitioCoreFilterInput>;
  readonly features: Maybe<SitePageContextThemeOptionsSplitioFeaturesFilterInput>;
  readonly env: Maybe<SitePageContextThemeOptionsSplitioEnvFilterInput>;
};

type SitePageContextThemeOptionsSplitioCoreFilterInput = {
  readonly authorizationKey: Maybe<StringQueryOperatorInput>;
};

type SitePageContextThemeOptionsSplitioFeaturesFilterInput = {
  readonly free_account_button_color: Maybe<SitePageContextThemeOptionsSplitioFeaturesFree_account_button_colorFilterInput>;
};

type SitePageContextThemeOptionsSplitioFeaturesFree_account_button_colorFilterInput = {
  readonly treatment: Maybe<StringQueryOperatorInput>;
};

type SitePageContextThemeOptionsSplitioEnvFilterInput = {
  readonly development: Maybe<SitePageContextThemeOptionsSplitioEnvDevelopmentFilterInput>;
};

type SitePageContextThemeOptionsSplitioEnvDevelopmentFilterInput = {
  readonly features: Maybe<SitePageContextThemeOptionsSplitioEnvDevelopmentFeaturesFilterInput>;
  readonly core: Maybe<SitePageContextThemeOptionsSplitioEnvDevelopmentCoreFilterInput>;
};

type SitePageContextThemeOptionsSplitioEnvDevelopmentFeaturesFilterInput = {
  readonly developer_website_global_header_gh_buttons: Maybe<StringQueryOperatorInput>;
  readonly developer_website_right_rail_buttons: Maybe<StringQueryOperatorInput>;
  readonly super_tiles: Maybe<StringQueryOperatorInput>;
};

type SitePageContextThemeOptionsSplitioEnvDevelopmentCoreFilterInput = {
  readonly authorizationKey: Maybe<StringQueryOperatorInput>;
};

type SitePageContextThemeOptionsRelatedResourcesFilterInput = {
  readonly swiftype: Maybe<SitePageContextThemeOptionsRelatedResourcesSwiftypeFilterInput>;
};

type SitePageContextThemeOptionsRelatedResourcesSwiftypeFilterInput = {
  readonly resultsPath: Maybe<StringQueryOperatorInput>;
  readonly refetch: Maybe<BooleanQueryOperatorInput>;
  readonly engineKey: Maybe<StringQueryOperatorInput>;
  readonly limit: Maybe<IntQueryOperatorInput>;
};

type SitePageContextThemeOptionsNewrelicFilterInput = {
  readonly configs: Maybe<SitePageContextThemeOptionsNewrelicConfigsFilterInput>;
};

type SitePageContextThemeOptionsNewrelicConfigsFilterInput = {
  readonly production: Maybe<SitePageContextThemeOptionsNewrelicConfigsProductionFilterInput>;
  readonly staging: Maybe<SitePageContextThemeOptionsNewrelicConfigsStagingFilterInput>;
};

type SitePageContextThemeOptionsNewrelicConfigsProductionFilterInput = {
  readonly instrumentationType: Maybe<StringQueryOperatorInput>;
  readonly accountId: Maybe<StringQueryOperatorInput>;
  readonly trustKey: Maybe<StringQueryOperatorInput>;
  readonly agentID: Maybe<StringQueryOperatorInput>;
  readonly licenseKey: Maybe<StringQueryOperatorInput>;
  readonly applicationID: Maybe<StringQueryOperatorInput>;
  readonly beacon: Maybe<StringQueryOperatorInput>;
  readonly errorBeacon: Maybe<StringQueryOperatorInput>;
};

type SitePageContextThemeOptionsNewrelicConfigsStagingFilterInput = {
  readonly instrumentationType: Maybe<StringQueryOperatorInput>;
  readonly accountId: Maybe<StringQueryOperatorInput>;
  readonly trustKey: Maybe<StringQueryOperatorInput>;
  readonly agentID: Maybe<StringQueryOperatorInput>;
  readonly licenseKey: Maybe<StringQueryOperatorInput>;
  readonly applicationID: Maybe<StringQueryOperatorInput>;
  readonly beacon: Maybe<StringQueryOperatorInput>;
  readonly errorBeacon: Maybe<StringQueryOperatorInput>;
};

type SitePageContextThemeOptionsTessenFilterInput = {
  readonly tessenVersion: Maybe<StringQueryOperatorInput>;
  readonly product: Maybe<StringQueryOperatorInput>;
  readonly subproduct: Maybe<StringQueryOperatorInput>;
  readonly segmentWriteKey: Maybe<StringQueryOperatorInput>;
  readonly trackPageViews: Maybe<BooleanQueryOperatorInput>;
  readonly pageView: Maybe<SitePageContextThemeOptionsTessenPageViewFilterInput>;
};

type SitePageContextThemeOptionsTessenPageViewFilterInput = {
  readonly eventName: Maybe<StringQueryOperatorInput>;
  readonly category: Maybe<StringQueryOperatorInput>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'isCreatedByStatefulCreatePages'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.pluginOptions.base64Width'
  | 'pluginCreator.pluginOptions.stripMetadata'
  | 'pluginCreator.pluginOptions.defaultQuality'
  | 'pluginCreator.pluginOptions.failOnError'
  | 'pluginCreator.pluginOptions.sourceMap'
  | 'pluginCreator.pluginOptions.autoLabel'
  | 'pluginCreator.pluginOptions.labelFormat'
  | 'pluginCreator.pluginOptions.cssPropOptimization'
  | 'pluginCreator.pluginOptions.output'
  | 'pluginCreator.pluginOptions.createLinkInHead'
  | 'pluginCreator.pluginOptions.entryLimit'
  | 'pluginCreator.pluginOptions.query'
  | 'pluginCreator.pluginOptions.classNameDark'
  | 'pluginCreator.pluginOptions.classNameLight'
  | 'pluginCreator.pluginOptions.storageKey'
  | 'pluginCreator.pluginOptions.minify'
  | 'pluginCreator.pluginOptions.component'
  | 'pluginCreator.pluginOptions.name'
  | 'pluginCreator.pluginOptions.path'
  | 'pluginCreator.pluginOptions.sitemap'
  | 'pluginCreator.pluginOptions.policy'
  | 'pluginCreator.pluginOptions.policy.userAgent'
  | 'pluginCreator.pluginOptions.policy.allow'
  | 'pluginCreator.pluginOptions.oneTrustID'
  | 'pluginCreator.pluginOptions.forceTrailingSlashes'
  | 'pluginCreator.pluginOptions.layout.contentPadding'
  | 'pluginCreator.pluginOptions.layout.maxWidth'
  | 'pluginCreator.pluginOptions.layout.component'
  | 'pluginCreator.pluginOptions.layout.mobileBreakpoint'
  | 'pluginCreator.pluginOptions.prism.languages'
  | 'pluginCreator.pluginOptions.tessen.tessenVersion'
  | 'pluginCreator.pluginOptions.tessen.product'
  | 'pluginCreator.pluginOptions.tessen.subproduct'
  | 'pluginCreator.pluginOptions.tessen.segmentWriteKey'
  | 'pluginCreator.pluginOptions.tessen.trackPageViews'
  | 'pluginCreator.pluginOptions.implementation.info'
  | 'pluginCreator.pluginOptions.short_name'
  | 'pluginCreator.pluginOptions.start_url'
  | 'pluginCreator.pluginOptions.background_color'
  | 'pluginCreator.pluginOptions.theme_color'
  | 'pluginCreator.pluginOptions.display'
  | 'pluginCreator.pluginOptions.icon'
  | 'pluginCreator.pluginOptions.legacy'
  | 'pluginCreator.pluginOptions.theme_color_in_head'
  | 'pluginCreator.pluginOptions.cache_busting_mode'
  | 'pluginCreator.pluginOptions.crossOrigin'
  | 'pluginCreator.pluginOptions.include_favicon'
  | 'pluginCreator.pluginOptions.cacheDigest'
  | 'pluginCreator.pluginOptions.maxWidth'
  | 'pluginCreator.pluginOptions.linkImagesToOriginal'
  | 'pluginCreator.pluginOptions.showCaptions'
  | 'pluginCreator.pluginOptions.markdownCaptions'
  | 'pluginCreator.pluginOptions.sizeByPixelDensity'
  | 'pluginCreator.pluginOptions.backgroundColor'
  | 'pluginCreator.pluginOptions.quality'
  | 'pluginCreator.pluginOptions.withWebp'
  | 'pluginCreator.pluginOptions.tracedSVG'
  | 'pluginCreator.pluginOptions.loading'
  | 'pluginCreator.pluginOptions.decoding'
  | 'pluginCreator.pluginOptions.disableBgImageOnAlpha'
  | 'pluginCreator.pluginOptions.disableBgImage'
  | 'pluginCreator.pluginOptions.gatsbyRemarkPlugins'
  | 'pluginCreator.pluginOptions.gatsbyRemarkPlugins.resolve'
  | 'pluginCreator.pluginOptions.extensions'
  | 'pluginCreator.pluginOptions.lessBabel'
  | 'pluginCreator.pluginOptions.mediaTypes'
  | 'pluginCreator.pluginOptions.root'
  | 'pluginCreator.pluginOptions.release'
  | 'pluginCreator.pluginOptions.debug'
  | 'pluginCreator.pluginOptions.googleAnalytics.trackingId'
  | 'pluginCreator.pluginOptions.googleAnalytics.autoStart'
  | 'pluginCreator.pluginOptions.googleAnalytics.anonymize'
  | 'pluginCreator.pluginOptions.googleAnalytics.controlCookieName'
  | 'pluginCreator.pluginOptions.environments'
  | 'pluginCreator.pluginOptions.allPageHeaders'
  | 'pluginCreator.pluginOptions.outputPath'
  | 'pluginCreator.pluginOptions.emitSchema.src___generated___gatsby_schema_graphql'
  | 'pluginCreator.pluginOptions.isTSX'
  | 'pluginCreator.pluginOptions.jsxPragma'
  | 'pluginCreator.pluginOptions.allExtensions'
  | 'pluginCreator.pluginOptions.pathCheck'
  | 'pluginCreator.packageJson.name'
  | 'pluginCreator.packageJson.description'
  | 'pluginCreator.packageJson.version'
  | 'pluginCreator.packageJson.main'
  | 'pluginCreator.packageJson.license'
  | 'pluginCreator.packageJson.dependencies'
  | 'pluginCreator.packageJson.dependencies.name'
  | 'pluginCreator.packageJson.dependencies.version'
  | 'pluginCreator.packageJson.devDependencies'
  | 'pluginCreator.packageJson.devDependencies.name'
  | 'pluginCreator.packageJson.devDependencies.version'
  | 'pluginCreator.packageJson.peerDependencies'
  | 'pluginCreator.packageJson.peerDependencies.name'
  | 'pluginCreator.packageJson.peerDependencies.version'
  | 'pluginCreator.packageJson.keywords'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'pluginCreatorId'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'context.layout'
  | 'context.themeOptions.oneTrustID'
  | 'context.themeOptions.forceTrailingSlashes'
  | 'context.themeOptions.layout.contentPadding'
  | 'context.themeOptions.layout.maxWidth'
  | 'context.themeOptions.layout.component'
  | 'context.themeOptions.layout.mobileBreakpoint'
  | 'context.themeOptions.prism.languages'
  | 'context.themeOptions.tessen.tessenVersion'
  | 'context.themeOptions.tessen.product'
  | 'context.themeOptions.tessen.subproduct'
  | 'context.themeOptions.tessen.segmentWriteKey'
  | 'context.themeOptions.tessen.trackPageViews'
  | 'context.swiftypeEngineKey'
  | 'context.fileRelativePath'
  | 'context.locale'
  | 'context.slug'
  | 'context.guidesFilter';

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePageGroupConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions.base64Width'
  | 'pluginOptions.stripMetadata'
  | 'pluginOptions.defaultQuality'
  | 'pluginOptions.failOnError'
  | 'pluginOptions.sourceMap'
  | 'pluginOptions.autoLabel'
  | 'pluginOptions.labelFormat'
  | 'pluginOptions.cssPropOptimization'
  | 'pluginOptions.output'
  | 'pluginOptions.createLinkInHead'
  | 'pluginOptions.entryLimit'
  | 'pluginOptions.query'
  | 'pluginOptions.classNameDark'
  | 'pluginOptions.classNameLight'
  | 'pluginOptions.storageKey'
  | 'pluginOptions.minify'
  | 'pluginOptions.component'
  | 'pluginOptions.name'
  | 'pluginOptions.path'
  | 'pluginOptions.sitemap'
  | 'pluginOptions.policy'
  | 'pluginOptions.policy.userAgent'
  | 'pluginOptions.policy.allow'
  | 'pluginOptions.configs.production.instrumentationType'
  | 'pluginOptions.configs.production.accountId'
  | 'pluginOptions.configs.production.trustKey'
  | 'pluginOptions.configs.production.agentID'
  | 'pluginOptions.configs.production.licenseKey'
  | 'pluginOptions.configs.production.applicationID'
  | 'pluginOptions.configs.production.beacon'
  | 'pluginOptions.configs.production.errorBeacon'
  | 'pluginOptions.configs.staging.instrumentationType'
  | 'pluginOptions.configs.staging.accountId'
  | 'pluginOptions.configs.staging.trustKey'
  | 'pluginOptions.configs.staging.agentID'
  | 'pluginOptions.configs.staging.licenseKey'
  | 'pluginOptions.configs.staging.applicationID'
  | 'pluginOptions.configs.staging.beacon'
  | 'pluginOptions.configs.staging.errorBeacon'
  | 'pluginOptions.oneTrustID'
  | 'pluginOptions.forceTrailingSlashes'
  | 'pluginOptions.layout.contentPadding'
  | 'pluginOptions.layout.maxWidth'
  | 'pluginOptions.layout.component'
  | 'pluginOptions.layout.mobileBreakpoint'
  | 'pluginOptions.prism.languages'
  | 'pluginOptions.splitio.core.authorizationKey'
  | 'pluginOptions.relatedResources.swiftype.resultsPath'
  | 'pluginOptions.relatedResources.swiftype.refetch'
  | 'pluginOptions.relatedResources.swiftype.engineKey'
  | 'pluginOptions.relatedResources.swiftype.limit'
  | 'pluginOptions.tessen.tessenVersion'
  | 'pluginOptions.tessen.product'
  | 'pluginOptions.tessen.subproduct'
  | 'pluginOptions.tessen.segmentWriteKey'
  | 'pluginOptions.tessen.trackPageViews'
  | 'pluginOptions.tessen.pageView.eventName'
  | 'pluginOptions.tessen.pageView.category'
  | 'pluginOptions.implementation.info'
  | 'pluginOptions.short_name'
  | 'pluginOptions.start_url'
  | 'pluginOptions.background_color'
  | 'pluginOptions.theme_color'
  | 'pluginOptions.display'
  | 'pluginOptions.icon'
  | 'pluginOptions.legacy'
  | 'pluginOptions.theme_color_in_head'
  | 'pluginOptions.cache_busting_mode'
  | 'pluginOptions.crossOrigin'
  | 'pluginOptions.include_favicon'
  | 'pluginOptions.cacheDigest'
  | 'pluginOptions.maxWidth'
  | 'pluginOptions.linkImagesToOriginal'
  | 'pluginOptions.showCaptions'
  | 'pluginOptions.markdownCaptions'
  | 'pluginOptions.sizeByPixelDensity'
  | 'pluginOptions.backgroundColor'
  | 'pluginOptions.quality'
  | 'pluginOptions.withWebp'
  | 'pluginOptions.tracedSVG'
  | 'pluginOptions.loading'
  | 'pluginOptions.decoding'
  | 'pluginOptions.disableBgImageOnAlpha'
  | 'pluginOptions.disableBgImage'
  | 'pluginOptions.gatsbyRemarkPlugins'
  | 'pluginOptions.gatsbyRemarkPlugins.resolve'
  | 'pluginOptions.gatsbyRemarkPlugins.options.maxHeight'
  | 'pluginOptions.gatsbyRemarkPlugins.options.maxWidth'
  | 'pluginOptions.gatsbyRemarkPlugins.options.fit'
  | 'pluginOptions.gatsbyRemarkPlugins.options.linkImagesToOriginal'
  | 'pluginOptions.gatsbyRemarkPlugins.options.icon'
  | 'pluginOptions.extensions'
  | 'pluginOptions.lessBabel'
  | 'pluginOptions.mediaTypes'
  | 'pluginOptions.root'
  | 'pluginOptions.release'
  | 'pluginOptions.debug'
  | 'pluginOptions.googleAnalytics.trackingId'
  | 'pluginOptions.googleAnalytics.autoStart'
  | 'pluginOptions.googleAnalytics.anonymize'
  | 'pluginOptions.googleAnalytics.controlCookieName'
  | 'pluginOptions.environments'
  | 'pluginOptions.allPageHeaders'
  | 'pluginOptions.outputPath'
  | 'pluginOptions.emitSchema.src___generated___gatsby_schema_graphql'
  | 'pluginOptions.isTSX'
  | 'pluginOptions.jsxPragma'
  | 'pluginOptions.allExtensions'
  | 'pluginOptions.pathCheck'
  | 'packageJson.name'
  | 'packageJson.description'
  | 'packageJson.version'
  | 'packageJson.main'
  | 'packageJson.license'
  | 'packageJson.dependencies'
  | 'packageJson.dependencies.name'
  | 'packageJson.dependencies.version'
  | 'packageJson.devDependencies'
  | 'packageJson.devDependencies.name'
  | 'packageJson.devDependencies.version'
  | 'packageJson.peerDependencies'
  | 'packageJson.peerDependencies.name'
  | 'packageJson.peerDependencies.version'
  | 'packageJson.keywords'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePluginGroupConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteBuildMetadataGroupConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fixed.originalName'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationWidth'
  | 'fluid.presentationHeight'
  | 'gatsbyImageData'
  | 'original.width'
  | 'original.height'
  | 'original.src'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'resize.originalName'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ImageSharpGroupConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type LocaleConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<LocaleEdge>;
  readonly nodes: ReadonlyArray<Locale>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<LocaleGroupConnection>;
};


type LocaleConnection_distinctArgs = {
  field: LocaleFieldsEnum;
};


type LocaleConnection_maxArgs = {
  field: LocaleFieldsEnum;
};


type LocaleConnection_minArgs = {
  field: LocaleFieldsEnum;
};


type LocaleConnection_sumArgs = {
  field: LocaleFieldsEnum;
};


type LocaleConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: LocaleFieldsEnum;
};

type LocaleEdge = {
  readonly next: Maybe<Locale>;
  readonly node: Locale;
  readonly previous: Maybe<Locale>;
};

type LocaleFieldsEnum =
  | 'name'
  | 'localName'
  | 'locale'
  | 'hrefLang'
  | 'isDefault'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type LocaleGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<LocaleEdge>;
  readonly nodes: ReadonlyArray<Locale>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<LocaleGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type LocaleGroupConnection_distinctArgs = {
  field: LocaleFieldsEnum;
};


type LocaleGroupConnection_maxArgs = {
  field: LocaleFieldsEnum;
};


type LocaleGroupConnection_minArgs = {
  field: LocaleFieldsEnum;
};


type LocaleGroupConnection_sumArgs = {
  field: LocaleFieldsEnum;
};


type LocaleGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: LocaleFieldsEnum;
};

type LocaleFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly localName: Maybe<StringQueryOperatorInput>;
  readonly locale: Maybe<StringQueryOperatorInput>;
  readonly hrefLang: Maybe<StringQueryOperatorInput>;
  readonly isDefault: Maybe<BooleanQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type LocaleSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<LocaleFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type RelatedResourceConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<RelatedResourceEdge>;
  readonly nodes: ReadonlyArray<RelatedResource>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<RelatedResourceGroupConnection>;
};


type RelatedResourceConnection_distinctArgs = {
  field: RelatedResourceFieldsEnum;
};


type RelatedResourceConnection_maxArgs = {
  field: RelatedResourceFieldsEnum;
};


type RelatedResourceConnection_minArgs = {
  field: RelatedResourceFieldsEnum;
};


type RelatedResourceConnection_sumArgs = {
  field: RelatedResourceFieldsEnum;
};


type RelatedResourceConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: RelatedResourceFieldsEnum;
};

type RelatedResourceEdge = {
  readonly next: Maybe<RelatedResource>;
  readonly node: RelatedResource;
  readonly previous: Maybe<RelatedResource>;
};

type RelatedResourceFieldsEnum =
  | 'id'
  | 'title'
  | 'url'
  | 'plugin'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type RelatedResourceGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<RelatedResourceEdge>;
  readonly nodes: ReadonlyArray<RelatedResource>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<RelatedResourceGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type RelatedResourceGroupConnection_distinctArgs = {
  field: RelatedResourceFieldsEnum;
};


type RelatedResourceGroupConnection_maxArgs = {
  field: RelatedResourceFieldsEnum;
};


type RelatedResourceGroupConnection_minArgs = {
  field: RelatedResourceFieldsEnum;
};


type RelatedResourceGroupConnection_sumArgs = {
  field: RelatedResourceFieldsEnum;
};


type RelatedResourceGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: RelatedResourceFieldsEnum;
};

type RelatedResourceSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<RelatedResourceFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type NewRelicThemeRelatedResourceConfigFilterInput = {
  readonly labels: Maybe<RelatedResourceLabelFilterListInput>;
};

type RelatedResourceLabelFilterListInput = {
  readonly elemMatch: Maybe<RelatedResourceLabelFilterInput>;
};

type RelatedResourceLabelFilterInput = {
  readonly baseUrl: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type NewRelicThemeTessenConfigFilterInput = {
  readonly product: Maybe<StringQueryOperatorInput>;
  readonly subproduct: Maybe<StringQueryOperatorInput>;
};

type NewRelicThemeSignupConfigFilterInput = {
  readonly environment: Maybe<StringQueryOperatorInput>;
  readonly reCaptchaToken: Maybe<StringQueryOperatorInput>;
  readonly signupURL: Maybe<StringQueryOperatorInput>;
};

type NewRelicThemeConfigConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<NewRelicThemeConfigEdge>;
  readonly nodes: ReadonlyArray<NewRelicThemeConfig>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<NewRelicThemeConfigGroupConnection>;
};


type NewRelicThemeConfigConnection_distinctArgs = {
  field: NewRelicThemeConfigFieldsEnum;
};


type NewRelicThemeConfigConnection_maxArgs = {
  field: NewRelicThemeConfigFieldsEnum;
};


type NewRelicThemeConfigConnection_minArgs = {
  field: NewRelicThemeConfigFieldsEnum;
};


type NewRelicThemeConfigConnection_sumArgs = {
  field: NewRelicThemeConfigFieldsEnum;
};


type NewRelicThemeConfigConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: NewRelicThemeConfigFieldsEnum;
};

type NewRelicThemeConfigEdge = {
  readonly next: Maybe<NewRelicThemeConfig>;
  readonly node: NewRelicThemeConfig;
  readonly previous: Maybe<NewRelicThemeConfig>;
};

type NewRelicThemeConfigFieldsEnum =
  | 'env'
  | 'relatedResources.labels'
  | 'relatedResources.labels.baseUrl'
  | 'relatedResources.labels.label'
  | 'tessen.product'
  | 'tessen.subproduct'
  | 'signup.environment'
  | 'signup.reCaptchaToken'
  | 'signup.signupURL'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type NewRelicThemeConfigGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<NewRelicThemeConfigEdge>;
  readonly nodes: ReadonlyArray<NewRelicThemeConfig>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<NewRelicThemeConfigGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type NewRelicThemeConfigGroupConnection_distinctArgs = {
  field: NewRelicThemeConfigFieldsEnum;
};


type NewRelicThemeConfigGroupConnection_maxArgs = {
  field: NewRelicThemeConfigFieldsEnum;
};


type NewRelicThemeConfigGroupConnection_minArgs = {
  field: NewRelicThemeConfigFieldsEnum;
};


type NewRelicThemeConfigGroupConnection_sumArgs = {
  field: NewRelicThemeConfigFieldsEnum;
};


type NewRelicThemeConfigGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: NewRelicThemeConfigFieldsEnum;
};

type NewRelicThemeConfigFilterInput = {
  readonly env: Maybe<StringQueryOperatorInput>;
  readonly relatedResources: Maybe<NewRelicThemeRelatedResourceConfigFilterInput>;
  readonly tessen: Maybe<NewRelicThemeTessenConfigFilterInput>;
  readonly signup: Maybe<NewRelicThemeSignupConfigFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NewRelicThemeConfigSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<NewRelicThemeConfigFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MarkdownHeadingFilterListInput = {
  readonly elemMatch: Maybe<MarkdownHeadingFilterInput>;
};

type MarkdownHeadingFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MarkdownWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

type MarkdownRemarkConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
};


type MarkdownRemarkConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_maxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_minArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_sumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkEdge = {
  readonly next: Maybe<MarkdownRemark>;
  readonly node: MarkdownRemark;
  readonly previous: Maybe<MarkdownRemark>;
};

type MarkdownRemarkFieldsEnum =
  | 'id'
  | 'html'
  | 'htmlAst'
  | 'excerpt'
  | 'excerptAst'
  | 'headings'
  | 'headings.id'
  | 'headings.value'
  | 'headings.depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount.paragraphs'
  | 'wordCount.sentences'
  | 'wordCount.words'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type MarkdownRemarkGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type MarkdownRemarkGroupConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_maxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_minArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_sumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly htmlAst: Maybe<JSONQueryOperatorInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly excerptAst: Maybe<JSONQueryOperatorInput>;
  readonly headings: Maybe<MarkdownHeadingFilterListInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly tableOfContents: Maybe<StringQueryOperatorInput>;
  readonly wordCount: Maybe<MarkdownWordCountFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type MarkdownRemarkSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MdxConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
};


type MdxConnection_distinctArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_maxArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_minArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_sumArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

type MdxEdge = {
  readonly next: Maybe<Mdx>;
  readonly node: Mdx;
  readonly previous: Maybe<Mdx>;
};

type MdxFieldsEnum =
  | 'rawBody'
  | 'fileAbsolutePath'
  | 'frontmatter.startDate'
  | 'frontmatter.endDate'
  | 'frontmatter.title'
  | 'frontmatter.path'
  | 'frontmatter.template'
  | 'frontmatter.description'
  | 'frontmatter.tileShorthand.title'
  | 'frontmatter.tileShorthand.description'
  | 'frontmatter.resources'
  | 'frontmatter.resources.title'
  | 'frontmatter.resources.url'
  | 'frontmatter.tags'
  | 'frontmatter.redirects'
  | 'frontmatter.duration'
  | 'frontmatter.procIdx'
  | 'frontmatter.promote'
  | 'slug'
  | 'body'
  | 'excerpt'
  | 'headings'
  | 'headings.value'
  | 'headings.depth'
  | 'html'
  | 'mdxAST'
  | 'tableOfContents'
  | 'timeToRead'
  | 'wordCount.paragraphs'
  | 'wordCount.sentences'
  | 'wordCount.words'
  | 'fields.fileRelativePath'
  | 'fields.gitAuthorTime'
  | 'fields.slug'
  | 'childrenRelatedResource'
  | 'childrenRelatedResource.id'
  | 'childrenRelatedResource.title'
  | 'childrenRelatedResource.url'
  | 'childrenRelatedResource.plugin'
  | 'childrenRelatedResource.parent.id'
  | 'childrenRelatedResource.parent.parent.id'
  | 'childrenRelatedResource.parent.parent.children'
  | 'childrenRelatedResource.parent.children'
  | 'childrenRelatedResource.parent.children.id'
  | 'childrenRelatedResource.parent.children.children'
  | 'childrenRelatedResource.parent.internal.content'
  | 'childrenRelatedResource.parent.internal.contentDigest'
  | 'childrenRelatedResource.parent.internal.description'
  | 'childrenRelatedResource.parent.internal.fieldOwners'
  | 'childrenRelatedResource.parent.internal.ignoreType'
  | 'childrenRelatedResource.parent.internal.mediaType'
  | 'childrenRelatedResource.parent.internal.owner'
  | 'childrenRelatedResource.parent.internal.type'
  | 'childrenRelatedResource.children'
  | 'childrenRelatedResource.children.id'
  | 'childrenRelatedResource.children.parent.id'
  | 'childrenRelatedResource.children.parent.children'
  | 'childrenRelatedResource.children.children'
  | 'childrenRelatedResource.children.children.id'
  | 'childrenRelatedResource.children.children.children'
  | 'childrenRelatedResource.children.internal.content'
  | 'childrenRelatedResource.children.internal.contentDigest'
  | 'childrenRelatedResource.children.internal.description'
  | 'childrenRelatedResource.children.internal.fieldOwners'
  | 'childrenRelatedResource.children.internal.ignoreType'
  | 'childrenRelatedResource.children.internal.mediaType'
  | 'childrenRelatedResource.children.internal.owner'
  | 'childrenRelatedResource.children.internal.type'
  | 'childrenRelatedResource.internal.content'
  | 'childrenRelatedResource.internal.contentDigest'
  | 'childrenRelatedResource.internal.description'
  | 'childrenRelatedResource.internal.fieldOwners'
  | 'childrenRelatedResource.internal.ignoreType'
  | 'childrenRelatedResource.internal.mediaType'
  | 'childrenRelatedResource.internal.owner'
  | 'childrenRelatedResource.internal.type'
  | 'childRelatedResource.id'
  | 'childRelatedResource.title'
  | 'childRelatedResource.url'
  | 'childRelatedResource.plugin'
  | 'childRelatedResource.parent.id'
  | 'childRelatedResource.parent.parent.id'
  | 'childRelatedResource.parent.parent.children'
  | 'childRelatedResource.parent.children'
  | 'childRelatedResource.parent.children.id'
  | 'childRelatedResource.parent.children.children'
  | 'childRelatedResource.parent.internal.content'
  | 'childRelatedResource.parent.internal.contentDigest'
  | 'childRelatedResource.parent.internal.description'
  | 'childRelatedResource.parent.internal.fieldOwners'
  | 'childRelatedResource.parent.internal.ignoreType'
  | 'childRelatedResource.parent.internal.mediaType'
  | 'childRelatedResource.parent.internal.owner'
  | 'childRelatedResource.parent.internal.type'
  | 'childRelatedResource.children'
  | 'childRelatedResource.children.id'
  | 'childRelatedResource.children.parent.id'
  | 'childRelatedResource.children.parent.children'
  | 'childRelatedResource.children.children'
  | 'childRelatedResource.children.children.id'
  | 'childRelatedResource.children.children.children'
  | 'childRelatedResource.children.internal.content'
  | 'childRelatedResource.children.internal.contentDigest'
  | 'childRelatedResource.children.internal.description'
  | 'childRelatedResource.children.internal.fieldOwners'
  | 'childRelatedResource.children.internal.ignoreType'
  | 'childRelatedResource.children.internal.mediaType'
  | 'childRelatedResource.children.internal.owner'
  | 'childRelatedResource.children.internal.type'
  | 'childRelatedResource.internal.content'
  | 'childRelatedResource.internal.contentDigest'
  | 'childRelatedResource.internal.description'
  | 'childRelatedResource.internal.fieldOwners'
  | 'childRelatedResource.internal.ignoreType'
  | 'childRelatedResource.internal.mediaType'
  | 'childRelatedResource.internal.owner'
  | 'childRelatedResource.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type MdxGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type MdxGroupConnection_distinctArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_maxArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_minArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_sumArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

type MdxSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MdxFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type NewRelicSdkConstantFilterListInput = {
  readonly elemMatch: Maybe<NewRelicSdkConstantFilterInput>;
};

type NewRelicSdkConstantFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly value: Maybe<JSONQueryOperatorInput>;
};

type NewRelicSdkExampleFilterListInput = {
  readonly elemMatch: Maybe<NewRelicSdkExampleFilterInput>;
};

type NewRelicSdkExampleFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly sourceCode: Maybe<StringQueryOperatorInput>;
  readonly live: Maybe<BooleanQueryOperatorInput>;
  readonly preview: Maybe<BooleanQueryOperatorInput>;
};

type NewRelicSdkPropTypeDefinitionFilterListInput = {
  readonly elemMatch: Maybe<NewRelicSdkPropTypeDefinitionFilterInput>;
};

type NewRelicSdkPropTypeDefinitionFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<NewRelicSdkPropTypeDefinitionTypeFilterInput>;
  readonly examples: Maybe<NewRelicSdkExampleFilterListInput>;
  readonly defaultValue: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly deprecation: Maybe<NewRelicSdkComponentPropTypesDeprecationFilterInput>;
  readonly isRequired: Maybe<BooleanQueryOperatorInput>;
};

type NewRelicSdkPropTypeDefinitionTypeFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly raw: Maybe<StringQueryOperatorInput>;
};

type NewRelicSdkComponentPropTypesDeprecationFilterInput = {
  readonly date: Maybe<DateQueryOperatorInput>;
  readonly signature: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
};

type NewRelicSdkTypeDefinitionFilterListInput = {
  readonly elemMatch: Maybe<NewRelicSdkTypeDefinitionFilterInput>;
};

type NewRelicSdkTypeDefinitionFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly properties: Maybe<NewRelicSdkTypeDefinitionPropertyFilterListInput>;
};

type NewRelicSdkTypeDefinitionPropertyFilterListInput = {
  readonly elemMatch: Maybe<NewRelicSdkTypeDefinitionPropertyFilterInput>;
};

type NewRelicSdkTypeDefinitionPropertyFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type NewRelicSdkMethodFilterListInput = {
  readonly elemMatch: Maybe<NewRelicSdkMethodFilterInput>;
};

type NewRelicSdkMethodFilterInput = {
  readonly examples: Maybe<NewRelicSdkExampleFilterListInput>;
  readonly arguments: Maybe<NewRelicSdkFunctionArgumentFilterListInput>;
  readonly returnValue: Maybe<NewRelicSdkFunctionReturnValueFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
};

type NewRelicSdkFunctionArgumentFilterListInput = {
  readonly elemMatch: Maybe<NewRelicSdkFunctionArgumentFilterInput>;
};

type NewRelicSdkFunctionArgumentFilterInput = {
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly defaultValue: Maybe<StringQueryOperatorInput>;
};

type NewRelicSdkFunctionReturnValueFilterInput = {
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly promiseType: Maybe<StringQueryOperatorInput>;
};

type NewRelicSdkComponentFieldsFilterInput = {
  readonly slug: Maybe<StringQueryOperatorInput>;
};

type NewRelicSdkComponentConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<NewRelicSdkComponentEdge>;
  readonly nodes: ReadonlyArray<NewRelicSdkComponent>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<NewRelicSdkComponentGroupConnection>;
};


type NewRelicSdkComponentConnection_distinctArgs = {
  field: NewRelicSdkComponentFieldsEnum;
};


type NewRelicSdkComponentConnection_maxArgs = {
  field: NewRelicSdkComponentFieldsEnum;
};


type NewRelicSdkComponentConnection_minArgs = {
  field: NewRelicSdkComponentFieldsEnum;
};


type NewRelicSdkComponentConnection_sumArgs = {
  field: NewRelicSdkComponentFieldsEnum;
};


type NewRelicSdkComponentConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: NewRelicSdkComponentFieldsEnum;
};

type NewRelicSdkComponentEdge = {
  readonly next: Maybe<NewRelicSdkComponent>;
  readonly node: NewRelicSdkComponent;
  readonly previous: Maybe<NewRelicSdkComponent>;
};

type NewRelicSdkComponentFieldsEnum =
  | 'constants'
  | 'constants.name'
  | 'constants.value'
  | 'examples'
  | 'examples.label'
  | 'examples.sourceCode'
  | 'examples.live'
  | 'examples.preview'
  | 'propTypes'
  | 'propTypes.name'
  | 'propTypes.type.name'
  | 'propTypes.type.raw'
  | 'propTypes.examples'
  | 'propTypes.examples.label'
  | 'propTypes.examples.sourceCode'
  | 'propTypes.examples.live'
  | 'propTypes.examples.preview'
  | 'propTypes.defaultValue'
  | 'propTypes.description'
  | 'propTypes.deprecation.date'
  | 'propTypes.deprecation.signature'
  | 'propTypes.deprecation.description'
  | 'propTypes.isRequired'
  | 'typeDefs'
  | 'typeDefs.name'
  | 'typeDefs.properties'
  | 'typeDefs.properties.name'
  | 'typeDefs.properties.description'
  | 'typeDefs.properties.type'
  | 'methods'
  | 'methods.examples'
  | 'methods.examples.label'
  | 'methods.examples.sourceCode'
  | 'methods.examples.live'
  | 'methods.examples.preview'
  | 'methods.arguments'
  | 'methods.arguments.description'
  | 'methods.arguments.name'
  | 'methods.arguments.type'
  | 'methods.arguments.defaultValue'
  | 'methods.returnValue.description'
  | 'methods.returnValue.type'
  | 'methods.returnValue.promiseType'
  | 'methods.name'
  | 'methods.description'
  | 'name'
  | 'usage'
  | 'description'
  | 'fields.slug'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type NewRelicSdkComponentGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<NewRelicSdkComponentEdge>;
  readonly nodes: ReadonlyArray<NewRelicSdkComponent>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<NewRelicSdkComponentGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type NewRelicSdkComponentGroupConnection_distinctArgs = {
  field: NewRelicSdkComponentFieldsEnum;
};


type NewRelicSdkComponentGroupConnection_maxArgs = {
  field: NewRelicSdkComponentFieldsEnum;
};


type NewRelicSdkComponentGroupConnection_minArgs = {
  field: NewRelicSdkComponentFieldsEnum;
};


type NewRelicSdkComponentGroupConnection_sumArgs = {
  field: NewRelicSdkComponentFieldsEnum;
};


type NewRelicSdkComponentGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: NewRelicSdkComponentFieldsEnum;
};

type NewRelicSdkComponentFilterInput = {
  readonly constants: Maybe<NewRelicSdkConstantFilterListInput>;
  readonly examples: Maybe<NewRelicSdkExampleFilterListInput>;
  readonly propTypes: Maybe<NewRelicSdkPropTypeDefinitionFilterListInput>;
  readonly typeDefs: Maybe<NewRelicSdkTypeDefinitionFilterListInput>;
  readonly methods: Maybe<NewRelicSdkMethodFilterListInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly usage: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fields: Maybe<NewRelicSdkComponentFieldsFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NewRelicSdkComponentSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<NewRelicSdkComponentFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type NewRelicSdkApiFieldsFilterInput = {
  readonly slug: Maybe<StringQueryOperatorInput>;
};

type NewRelicSdkApiConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<NewRelicSdkApiEdge>;
  readonly nodes: ReadonlyArray<NewRelicSdkApi>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<NewRelicSdkApiGroupConnection>;
};


type NewRelicSdkApiConnection_distinctArgs = {
  field: NewRelicSdkApiFieldsEnum;
};


type NewRelicSdkApiConnection_maxArgs = {
  field: NewRelicSdkApiFieldsEnum;
};


type NewRelicSdkApiConnection_minArgs = {
  field: NewRelicSdkApiFieldsEnum;
};


type NewRelicSdkApiConnection_sumArgs = {
  field: NewRelicSdkApiFieldsEnum;
};


type NewRelicSdkApiConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: NewRelicSdkApiFieldsEnum;
};

type NewRelicSdkApiEdge = {
  readonly next: Maybe<NewRelicSdkApi>;
  readonly node: NewRelicSdkApi;
  readonly previous: Maybe<NewRelicSdkApi>;
};

type NewRelicSdkApiFieldsEnum =
  | 'constants'
  | 'constants.name'
  | 'constants.value'
  | 'examples'
  | 'examples.label'
  | 'examples.sourceCode'
  | 'examples.live'
  | 'examples.preview'
  | 'typeDefs'
  | 'typeDefs.name'
  | 'typeDefs.properties'
  | 'typeDefs.properties.name'
  | 'typeDefs.properties.description'
  | 'typeDefs.properties.type'
  | 'methods'
  | 'methods.examples'
  | 'methods.examples.label'
  | 'methods.examples.sourceCode'
  | 'methods.examples.live'
  | 'methods.examples.preview'
  | 'methods.arguments'
  | 'methods.arguments.description'
  | 'methods.arguments.name'
  | 'methods.arguments.type'
  | 'methods.arguments.defaultValue'
  | 'methods.returnValue.description'
  | 'methods.returnValue.type'
  | 'methods.returnValue.promiseType'
  | 'methods.name'
  | 'methods.description'
  | 'name'
  | 'usage'
  | 'description'
  | 'fields.slug'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type NewRelicSdkApiGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<NewRelicSdkApiEdge>;
  readonly nodes: ReadonlyArray<NewRelicSdkApi>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<NewRelicSdkApiGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type NewRelicSdkApiGroupConnection_distinctArgs = {
  field: NewRelicSdkApiFieldsEnum;
};


type NewRelicSdkApiGroupConnection_maxArgs = {
  field: NewRelicSdkApiFieldsEnum;
};


type NewRelicSdkApiGroupConnection_minArgs = {
  field: NewRelicSdkApiFieldsEnum;
};


type NewRelicSdkApiGroupConnection_sumArgs = {
  field: NewRelicSdkApiFieldsEnum;
};


type NewRelicSdkApiGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: NewRelicSdkApiFieldsEnum;
};

type NewRelicSdkApiFilterInput = {
  readonly constants: Maybe<NewRelicSdkConstantFilterListInput>;
  readonly examples: Maybe<NewRelicSdkExampleFilterListInput>;
  readonly typeDefs: Maybe<NewRelicSdkTypeDefinitionFilterListInput>;
  readonly methods: Maybe<NewRelicSdkMethodFilterListInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly usage: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fields: Maybe<NewRelicSdkApiFieldsFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NewRelicSdkApiSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<NewRelicSdkApiFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type NewRelicSdk = {
  readonly version: Scalars['String'];
  readonly assets: NewRelicSdkAssets;
};

type NewRelicSdkAssets = {
  readonly js: Scalars['String'];
  readonly css: Scalars['String'];
};

type usersmtahirDocumentsGitHubdeveloperWebsitesrctemplatesembedPageJs381472333QueryVariables = Exact<{
  slug: Scalars['String'];
}>;


type usersmtahirDocumentsGitHubdeveloperWebsitesrctemplatesembedPageJs381472333Query = { readonly mdx: Maybe<(
    Pick<Mdx, 'body'>
    & { readonly frontmatter: Maybe<Pick<MdxFrontmatter, 'title'>> }
  )> };

type PageUpdated_pageFragment = { readonly fields: Maybe<Pick<MdxFields, 'gitAuthorTime'>> };

type usersmtahirDocumentsGitHubdeveloperWebsitesrctemplatesGuideTemplateJs3004003558QueryVariables = Exact<{
  slug: Scalars['String'];
}>;


type usersmtahirDocumentsGitHubdeveloperWebsitesrctemplatesGuideTemplateJs3004003558Query = { readonly mdx: Maybe<(
    Pick<Mdx, 'body'>
    & { readonly frontmatter: Maybe<Pick<MdxFrontmatter, 'duration' | 'title' | 'description' | 'tags'>>, readonly fields: Maybe<Pick<MdxFields, 'fileRelativePath' | 'slug'>>, readonly relatedResources: Maybe<ReadonlyArray<Pick<RelatedResource, 'title' | 'url'>>> }
    & PageUpdated_pageFragment
  )> };

type usersmtahirDocumentsGitHubdeveloperWebsitesrctemplatesOverviewTemplateJs1786578654QueryVariables = Exact<{
  slug: Scalars['String'];
  guidesFilter: Scalars['String'];
}>;


type usersmtahirDocumentsGitHubdeveloperWebsitesrctemplatesOverviewTemplateJs1786578654Query = { readonly mdx: Maybe<(
    Pick<Mdx, 'body'>
    & { readonly frontmatter: Maybe<Pick<MdxFrontmatter, 'path' | 'title' | 'description'>> }
  )>, readonly guides: { readonly nodes: ReadonlyArray<{ readonly fields: Maybe<Pick<MdxFields, 'slug'>>, readonly frontmatter: Maybe<(
        Pick<MdxFrontmatter, 'title' | 'description' | 'duration'>
        & { readonly tileShorthand: Maybe<Pick<MdxFrontmatterTileShorthand, 'title' | 'description'>> }
      )> }> } };

type usersmtahirDocumentsGitHubdeveloperWebsitesrctemplatesLabOverviewTemplateJs3626099723QueryVariables = Exact<{
  slug: Scalars['String'];
  guidesFilter: Scalars['String'];
}>;


type usersmtahirDocumentsGitHubdeveloperWebsitesrctemplatesLabOverviewTemplateJs3626099723Query = { readonly mdx: Maybe<(
    Pick<Mdx, 'body'>
    & { readonly frontmatter: Maybe<Pick<MdxFrontmatter, 'path' | 'title' | 'description'>> }
  )>, readonly guides: { readonly nodes: ReadonlyArray<{ readonly fields: Maybe<Pick<MdxFields, 'slug'>>, readonly frontmatter: Maybe<(
        Pick<MdxFrontmatter, 'path' | 'title' | 'description' | 'duration' | 'procIdx'>
        & { readonly tileShorthand: Maybe<Pick<MdxFrontmatterTileShorthand, 'title' | 'description'>> }
      )> }> } };

type PropList_propTypesFragment = (
  Pick<NewRelicSdkPropTypeDefinition, 'name' | 'description' | 'isRequired' | 'defaultValue'>
  & { readonly deprecation: Maybe<Pick<NewRelicSdkComponentPropTypesDeprecation, 'date' | 'description'>>, readonly examples: ReadonlyArray<ReferenceExample_exampleFragment>, readonly type: (
    Pick<NewRelicSdkPropTypeDefinitionType, 'name' | 'raw'>
    & { readonly meta: Maybe<{ readonly itemTypes: (
        { readonly meta: Maybe<Pick<NewRelicSdkPropTypeEnumMeta, 'constants'> | FuncTypeFragment | (
          { readonly types: ReadonlyArray<{ readonly type: { readonly meta: Maybe<Pick<NewRelicSdkPropTypeEnumMeta, 'constants'> | FuncTypeFragment | (
                { readonly types: ReadonlyArray<{ readonly meta: Maybe<Pick<NewRelicSdkPropTypeEnumMeta, 'constants'> | FuncTypeFragment | (
                    { readonly types: ReadonlyArray<{ readonly type: { readonly meta: Maybe<Pick<NewRelicSdkPropTypeEnumMeta, 'constants'> | FuncTypeFragment> } }> }
                    & ShapeTypeFragment
                  )> }> }
                & UnionTypeFragment
              )> } }> }
          & ShapeTypeFragment
        ) | (
          { readonly types: ReadonlyArray<{ readonly meta: Maybe<Pick<NewRelicSdkPropTypeEnumMeta, 'constants'> | FuncTypeFragment> }> }
          & UnionTypeFragment
        )> }
        & DefTypeFragment
      ) } | Pick<NewRelicSdkPropTypeEnumMeta, 'constants'> | FuncTypeFragment | (
      { readonly types: ReadonlyArray<{ readonly type: { readonly meta: Maybe<Pick<NewRelicSdkPropTypeEnumMeta, 'constants'> | FuncTypeFragment | (
            { readonly types: ReadonlyArray<{ readonly meta: Maybe<Pick<NewRelicSdkPropTypeEnumMeta, 'constants'> | FuncTypeFragment | (
                { readonly types: ReadonlyArray<{ readonly type: { readonly meta: Maybe<Pick<NewRelicSdkPropTypeEnumMeta, 'constants'> | FuncTypeFragment> } }> }
                & ShapeTypeFragment
              )> }> }
            & UnionTypeFragment
          )> } }> }
      & ShapeTypeFragment
    ) | (
      { readonly types: ReadonlyArray<{ readonly meta: Maybe<{ readonly itemTypes: (
            { readonly meta: Maybe<Pick<NewRelicSdkPropTypeEnumMeta, 'constants'> | FuncTypeFragment | { readonly types: ReadonlyArray<{ readonly meta: Maybe<Pick<NewRelicSdkPropTypeEnumMeta, 'constants'> | FuncTypeFragment> }> }> }
            & DefTypeFragment
          ) } | Pick<NewRelicSdkPropTypeEnumMeta, 'constants'> | FuncTypeFragment | (
          { readonly types: ReadonlyArray<{ readonly type: { readonly meta: Maybe<Pick<NewRelicSdkPropTypeEnumMeta, 'constants'> | FuncTypeFragment> } }> }
          & ShapeTypeFragment
        )> }> }
      & UnionTypeFragment
    )> }
  ) }
);

type ReferenceExample_exampleFragment = Pick<NewRelicSdkExample, 'label' | 'sourceCode' | 'live' | 'preview'>;

type DefTypeFragment = Pick<NewRelicSdkPropTypeDefinitionType, 'name' | 'raw'>;

type FuncTypeFragment = { readonly arguments: ReadonlyArray<FunctionDefinition_argumentsFragment>, readonly returnValue: ReadonlyArray<Maybe<FunctionDefinition_returnValueFragment>> };

type FunctionDefinition_argumentsFragment = Pick<NewRelicSdkFunctionArgument, 'name' | 'type' | 'description'>;

type FunctionDefinition_returnValueFragment = Pick<NewRelicSdkFunctionReturnValue, 'type' | 'description'>;

type ShapeTypeFragment = { readonly types: ReadonlyArray<(
    Pick<NewRelicSdkPropTypeDefinition, 'name' | 'description' | 'isRequired' | 'defaultValue'>
    & { readonly deprecation: Maybe<Pick<NewRelicSdkComponentPropTypesDeprecation, 'date' | 'description'>>, readonly examples: ReadonlyArray<ReferenceExample_exampleFragment>, readonly type: Pick<NewRelicSdkPropTypeDefinitionType, 'name' | 'raw'> }
  )> };

type UnionTypeFragment = { readonly types: ReadonlyArray<Pick<NewRelicSdkPropTypeDefinitionType, 'name' | 'raw'>> };

type MethodReference_methodFragment = (
  Pick<NewRelicSdkMethod, 'name' | 'description'>
  & { readonly examples: ReadonlyArray<ReferenceExample_exampleFragment>, readonly arguments: ReadonlyArray<FunctionDefinition_argumentsFragment>, readonly returnValue: FunctionDefinition_returnValueFragment }
);

type TypeDefReference_typeDefFragment = (
  Pick<NewRelicSdkTypeDefinition, 'name'>
  & { readonly properties: Maybe<ReadonlyArray<Maybe<Pick<NewRelicSdkTypeDefinitionProperty, 'name' | 'description' | 'type'>>>> }
);

type usersmtahirDocumentsGitHubdeveloperWebsitesrctemplatesComponentReferenceTemplateJs198282387QueryVariables = Exact<{
  slug: Scalars['String'];
}>;


type usersmtahirDocumentsGitHubdeveloperWebsitesrctemplatesComponentReferenceTemplateJs198282387Query = { readonly newRelicSdkComponent: Maybe<(
    Pick<NewRelicSdkComponent, 'name' | 'description' | 'usage'>
    & { readonly propTypes: ReadonlyArray<PropList_propTypesFragment>, readonly examples: ReadonlyArray<ReferenceExample_exampleFragment>, readonly methods: ReadonlyArray<MethodReference_methodFragment>, readonly typeDefs: ReadonlyArray<TypeDefReference_typeDefFragment> }
  )> };

type ConstantReference_constantFragment = Pick<NewRelicSdkConstant, 'name' | 'value'>;

type usersmtahirDocumentsGitHubdeveloperWebsitesrctemplatesApiReferenceTemplateJs1865166777QueryVariables = Exact<{
  slug: Scalars['String'];
}>;


type usersmtahirDocumentsGitHubdeveloperWebsitesrctemplatesApiReferenceTemplateJs1865166777Query = { readonly newRelicSdkApi: Maybe<(
    Pick<NewRelicSdkApi, 'name' | 'description' | 'usage'>
    & { readonly examples: ReadonlyArray<ReferenceExample_exampleFragment>, readonly methods: ReadonlyArray<MethodReference_methodFragment>, readonly typeDefs: Maybe<ReadonlyArray<Maybe<TypeDefReference_typeDefFragment>>>, readonly constants: ReadonlyArray<ConstantReference_constantFragment> }
  )> };

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSiteFunction: { readonly nodes: ReadonlyArray<Pick<SiteFunction, 'functionRoute'>> }, readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type usersmtahirDocumentsGitHubdeveloperWebsitesrcpagesindexJs1455287213QueryVariables = Exact<{ [key: string]: never; }>;


type usersmtahirDocumentsGitHubdeveloperWebsitesrcpagesindexJs1455287213Query = { readonly allMdx: { readonly nodes: ReadonlyArray<{ readonly fields: Maybe<Pick<MdxFields, 'slug'>>, readonly frontmatter: Maybe<(
        Pick<MdxFrontmatter, 'title' | 'description' | 'duration'>
        & { readonly tileShorthand: Maybe<Pick<MdxFrontmatterTileShorthand, 'title' | 'description'>> }
      )> }> } };

type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_1_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'author'>> }> };

type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_2_Query = { readonly placeholderImage: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluidFragment> }> }> };

type Unnamed_3_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_3_Query = { readonly newRelicSdk: { readonly assets: Pick<NewRelicSdkAssets, 'css'> } };

type Unnamed_4_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_4_Query = { readonly allMdx: { readonly nodes: ReadonlyArray<(
      Pick<Mdx, 'slug' | 'body'>
      & { readonly frontmatter: Maybe<Pick<MdxFrontmatter, 'startDate' | 'endDate'>> }
    )> } };

type Unnamed_5_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_5_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'contributingUrl'>> }> };

type Unnamed_6_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_6_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'repository' | 'branch'>> }> };

type Unnamed_7_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_7_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteUrl' | 'repository'>> }> };

type FooterQueryQueryVariables = Exact<{ [key: string]: never; }>;


type FooterQueryQuery = { readonly sitePage: Maybe<Pick<SitePage, 'id'>> };

type GlobalNavLinkQueryQueryVariables = Exact<{ [key: string]: never; }>;


type GlobalNavLinkQueryQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteUrl'>> }> };

type GlobalHeaderQueryQueryVariables = Exact<{ [key: string]: never; }>;


type GlobalHeaderQueryQuery = { readonly allLocale: { readonly nodes: ReadonlyArray<Pick<Locale, 'locale' | 'localName' | 'isDefault'>> }, readonly site: Maybe<{ readonly layout: Maybe<Pick<SiteLayout, 'mobileBreakpoint'>> }> };

type Unnamed_8_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_8_Query = { readonly allLocale: { readonly nodes: ReadonlyArray<Pick<Locale, 'name' | 'locale' | 'localName' | 'hrefLang' | 'isDefault'>> } };

type Unnamed_9_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_9_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteUrl'>> }> };

type Unnamed_10_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_10_Query = { readonly site: Maybe<{ readonly layout: Maybe<Pick<SiteLayout, 'mobileBreakpoint'>> }> };

type Unnamed_11_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_11_Query = { readonly site: Maybe<{ readonly layout: Maybe<Pick<SiteLayout, 'mobileBreakpoint'>> }> };

type Unnamed_12_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_12_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteUrl'>> }>, readonly newRelicThemeConfig: Maybe<{ readonly relatedResources: { readonly labels: ReadonlyArray<Pick<RelatedResourceLabel, 'baseUrl' | 'label'>> } }> };

type Unnamed_13_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_13_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<(
      Pick<SiteSiteMetadata, 'titleTemplate' | 'siteUrl'>
      & { defaultTitle: SiteSiteMetadata['title'] }
    )> }>, readonly allLocale: { readonly nodes: ReadonlyArray<Pick<Locale, 'locale' | 'hrefLang' | 'isDefault'>> }, readonly newRelicThemeConfig: Maybe<{ readonly signup: Maybe<Pick<NewRelicThemeSignupConfig, 'reCaptchaToken'>> }> };

type Unnamed_14_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_14_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteUrl'>>, readonly layout: Maybe<Pick<SiteLayout, 'mobileBreakpoint'>> }> };

type BarQueryQueryVariables = Exact<{ [key: string]: never; }>;


type BarQueryQuery = { readonly site: Maybe<{ readonly layout: Maybe<Pick<SiteLayout, 'mobileBreakpoint'>> }> };

type Unnamed_15_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_15_Query = { readonly newRelicThemeConfig: Maybe<{ readonly tessen: Maybe<Pick<NewRelicThemeTessenConfig, 'product' | 'subproduct'>> }> };

type Resources_pageFragment = { readonly frontmatter: Maybe<{ readonly resources: Maybe<ReadonlyArray<Maybe<Pick<MdxFrontmatterResources, 'title' | 'url'>>>> }>, readonly relatedResources: Maybe<ReadonlyArray<Pick<RelatedResource, 'title' | 'url'>>> };

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

}
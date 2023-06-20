---
lang: en-US
title: Changelog
description: Changelog OpenRegistry
---

# Changelog
All notable changes to this project will be documented in this file.

## [unreleased]

### Bug Fixes

- Fix(CI): Update GitHub Actions to use new Env vars

- Fix: Lining issues

- Fix: Removed unused/commented code

- Fix: Error handling in few Handlers

- Fix: GitHub actions

- Fix: Configuration settings for enabling/disabling features

- Fix: Use RSA for signing JWTs

- Fix(docs): Link development setup guide in README

- Fix: Linting errors

- Fix: GitHub Actions to use HTTPS for OpenRegistry

- Fix: Indentation for config.yaml example file

- Fix: OCI Push Action

- Fix: Use latest Docker version for GitHub Actions

- Fix: Docker build steps

- Fix: BasicAuth middleware route matching

- Fix: Use new header key for OCI Chunked Push Min chunk size

OCI recently added support for defining a minimum size for chunks when
uploading an image with chunked uploading. The header key is
`OCI-Chunk-Min-Length` and the value for it is set in bytes.
We default to 5MB (5242880 Bytes) but it can be overridden via the
config.yaml file using `dfs.<storage_provider>.min_chunk_size`

- Fix(ci): Re-enable OCI GitHub Action Workflows

- Fix(ci): Storj CI setup

- Fix(ci): Use unique names for OCI report output files

- Fix: Upload progress byte size

- Fix: JWT parsing in middlewares

- Fix: Time comparison for webauthn registration API

- Fix(deps): Use go-webauthn instead of duo-labs

- Fix: GitHub & Webauthn Sign up conflicts

- Fix: Linting issues

- Fix(deps): JWT Middleware

- Fix(deps): Bump go-webauthn and added Timeout options

- Fix: Re-enable Email/Password signin, signup flows

- Fix: YAML config example & webauthn queries formatting

- Fix: Github Login user validation

- Fix: Logger and github handlers

- Fix(ci): Debug Github Actions with tmate

- Fix: GitHub pull request template

- Fix: Logging

- Fix: Error message for SignUp API

- Fix: GitHub Setup Finish API

This API used to redirect the client to a predefined url on success, but now it
returns a 202 Status Accepted Code on success.
The error handling remains the same

- Fix: Database migrations

- Fix(deps): Version bump google/go-github@v50

- Fix: Environment variables for OCI Actions

- Fix(deps): Bump golangci-lint github action

- Fix: URL decode before parsing cookies

- Fix: Filebase PreSignURL method

- Fix(bump): Lib golang-jwt v5

- Fix(ci): Use filebase for OCI tests backend


### Features

- Feat: Filebase(IPFS) as a Storage Backend

- Add: AbortMultipartUpload for failed layer push

- Feat: Storj backend integration

- Add: Option to automatically select enabled DFS backend

Also fixed a concurrent map write issue in CompleteUpload method

- Add: Min chunk size for multipart uploads

This commit adds an additional header to the response of "StartUpload"
(which is start chunked upload according to OCI Spec). The header is
"OCI-Chunk-Min-Bytes" and it's default value is set to 5MB/5242880B

- Feat(ci): Optional debugging using tmate

- Add(ci): GitHub Actions debugging

- Feat: PasswordLess login with WebAuthn

- Feat: Webauthn service

- Add: Methods to rollback failed login/registration

- Add: Github Apps Integration

- Add: Sorted branches based on default branch

- Feat: Github actions via automated PR

- Add: Locks for OAuth2 state in-mem store

- Add: New logging for webauthn server

- Add: GitHub webhook event types

- Feat: Storj integration with Uplink

- Add: Registry namespace & reference validation


### Miscellaneous Tasks

- Chore: go mod tidy

- Chore(ci): Added debugging into github actions

- Chore: Run Dependabot weekly on fridays

- Chore(deps): Use main tag for OCI Spec GH Actions

- Chore(ci): Run OCI tests with Storj Uplink

- Chore(ci): Lock OCI distribution conformance version


### Refactor

- Refactor!: dockerfile

- Change: As per PR comments

- included the refrence to coventionla commits
- added a point for breaking changes must contain a ! with commit type
- commit messages must always be lowercase
- a good and a bad example for PRs

- Remove: Dead code in WebAuthn

- Refactor: Split user related storage interfaces

Instead of one large interface to cover for everything, we now have
multiple, smaller interfaces to make our backend more composable.
Refactor goes like this:

```go
// Postgres Core
type PgTxnHandler interface {
    NewTxn(ctx context.Context) (pgx.Tx, error)
    Abort(ctx context.Context, txn pgx.Tx) error
    Commit(ctx context.Context, txn pgx.Tx) error
}

// User specific
type UserReader interface  {
    PgTxnHandler
    ...
}
type UserWriter interface  {
    PgTxnHandler
    ...
}
type UserDeleter interface  {
    PgTxnHandler
    ...
}
type UserReadWriteDeleter interface  {
    PgTxnHandler
    ...
}

// WebAuthn specific
type WebAuthn interface {
    PgTxnHandler
    UserReader
    UserWriter

    GetWebAuthNSessionData(ctx context.Context, userId string, sessionType string) (*webauthn.SessionData, error)
    AddWebAuthSessionData(ctx context.Context, userId string, sessionData *webauthn.SessionData, sessionType string) error
    GetWebAuthNCredentials(ctx context.Context, userId string) (*webauthn.Credential, error)
    AddWebAuthNCredentials(ctx context.Context, userId string, credential *webauthn.Credential) error
}
```

- Refactor: Export methods from auth package

We have some utility methods in `auth` package which can be used in
different packages. We now make rewrite those methods as public
functions.

- Remove: Dead types & methods

- Refactor: Move webauthn to its own package

- Refactor: Cookie nomenclature

- Refactor: Use registry namespace from echo.Context

The registryNamespaceValidator middleware sets the registry namespace in
the echo.Context (which is the request context). We use the value for
the namespace from the value set by the middleware unlike we did before
(calculate inside each handler)


## [0.2.2] - 2022-06-29

### Bug Fixes

- Fix: Bump Skynet SDK version

This PR bumps the Skynet SDK version from our fork. Skynet has switched
to API Keys instead of JWT Header. This broke our existing Skynet
Integration. Simply by passing the variable of `SkynetApiKey` while
initlizing the Skynet Client, entire functionality is restored.

Signed-off-by: jay-dee7 <jasdeepsingh.uppal@gmail.com>

- Fix: Bump Skynet SDK

In this PR, we bumped the Skynet SDK to use
`v2.0.2-0.20220629062209-f31ff192458d` version. Skynet updated their Pin
Skylink API to return a response body and StatusOk (200) code, previously they
returned NoContent (204) Status Code

Signed-off-by: jay-dee7 <jasdeepsingh.uppal@gmail.com>


### Refactor

- Remove: Custom Skynet JWT setting in Github Actions

Signed-off-by: jay-dee7 <jasdeepsingh.uppal@gmail.com>


## [0.2.1] - 2022-04-13

## [0.2.0] - 2022-04-08

### Security

- Security: Removed user-controlled redirect URL

Github CodeQL detected a medium level security vulerability in this run: https://github.com/containerish/OpenRegistry/runs/5711928771
In GithubCallbackHandler, we receive a "path" query param, which we use
to redirect user back to our web interface. We anyway provide webui
redirect url via config so it's better to stick to that.

Signed-off-by: jay-dee7 <jasdeepsingh.uppal@gmail.com>


## [0.1.0] - 2021-11-26

## [0.0.2-beta] - 2021-11-17

### Bug Fixes

- Fix: bug fix for token auth

We recently added JWT auth and it introduced a bug that let's anyone
push images under any namespace:

This PR fixes the bug introduced in PR #48

**johndoe** want to push **app1** so he creates an image named
`openregistry.dev/johndoe/app1`, since he's the owner of the image, he
can push the image.

**johndoe** wants to push **app1** to **janedoe's** account, so he makes
a request as:
`openregistry.dev/janedoe/app1` and this worked too (which it should
not)

With this PR, we now check that only `pull` should be allowed and `push`
should be restricted to user's own namespace.

Signed-off-by: jay-dee7 <jasdeepsingh.uppal@gmail.com>

- Fix: initial user signup fix

Signed-off-by: jay-dee7 <jasdeepsingh.uppal@gmail.com>


### Features

- Add: enhanced signin experience

- User can now signin using email or username
- Added extra checks to cover edge cases

Signed-off-by: guacamole <gunjanwalecha@gmail.com>

- Add: added better error responses

- Added JSONBlob whereever displaying registry errors

Signed-off-by: guacamole <gunjanwalecha@gmail.com>

- Add: added api support for fetching registry images by namespace, usernames and imagename

Signed-off-by: guacamole <gunjanwalecha@gmail.com>

- Added freshping badge

Signed-off-by: guacamole <gunjanwalecha@gmail.com>


### Refactor

- Refactor: removed concurrent retry for failed log messages

We've commented the code for concurrent retries for failed log messages.
This was needed since we're flooding the NIC with too many requests and
it causes unexpected behaviours

Signed-off-by: jay-dee7 <jasdeepsingh.uppal@gmail.com>


## [0.0.1-beta] - 2021-10-05

### Bug Fixes

- Fixed delete api test case

Signed-off-by: guacamole <gunjanwalecha@gmail.com>

- Fixed go.mod and jwt vulnerabilities

Signed-off-by: guacamole <gunjanwalecha@gmail.com>

- Fixed DeleteLayer api test case

Signed-off-by: guacamole <gunjanwalecha@gmail.com>

- Fixed Docker file to use cache

Signed-off-by: guacamole <gunjanwalecha@gmail.com>

- Fix: removed int overflow vulnerability

Wrapped the overflowing int with uint and restricted the numbers of
layers within a manifest to be within math.MaxInt16

Signed-off-by: jay-dee7 <jasdeepsingh.uppal@gmail.com>

- Fix: implemented delete apis

- Implemented delete Manifest and tags through DeleteTagOrManifest api
- Implemented delete blob through DeleteLayer api

Signed-off-by: guacamole <gunjanwalecha@gmail.com>

- Fix: github action for conformance

This PR adds the `OCI_CROSSMOUNT_NAMESPACE` environment variable in the
github action config file. This enables us passing all the test cases.

Signed-off-by: jay-dee7 <jasdeepsingh.uppal@gmail.com>

- Fix: changed router name to nsRouter for namespace router

Signed-off-by: guacamole <gunjanwalecha@gmail.com>


### Documentation

- Doc: added git-cliff for easy changelog generation

git-cliff uses a config.toml file present at the root directory of the
project and generates a changelog as follows:
```git cliff -vv -u -o CHANGELOG.md```

Signed-off-by: jay-dee7 <jasdeepsingh.uppal@gmail.com>

- Doc: added code of conduct

Signed-off-by: jay-dee7 <jasdeepsingh.uppal@gmail.com>


### Features

- Added registration apis

Signed-off-by: guacamole <gunjanwalecha@gmail.com>

- Added registration,authentication and authorization

Signed-off-by: guacamole <gunjanwalecha@gmail.com>

- Added mod-fix command for go-skynet fork

Signed-off-by: jay-dee7 <jasdeepsingh.uppal@gmail.com>

- Adding github actions

Signed-off-by: gunjan valecha <guacamole@gunjans-MacBook-Pro.local>
Signed-off-by: guacamole <gunjanwalecha@gmail.com>

- Added badge for OCI conformance
- Implemented tag/list api

Signed-off-by: guacamole <gunjanwalecha@gmail.com>

- Feat: added catalog api

- to list the available repositories
- uses auth middleware to authenticate the user and returns user's private repositories
- further modifications to be made when user can access public repos along with their own

Signed-off-by: guacamole <gunjanwalecha@gmail.com>


### Miscellaneous Tasks

- Chore: added golangci linter to improve code quality

Signed-off-by: guacamole <gunjanwalecha@gmail.com>

- Chore: adds golangci-lint github action

- Adding github action for linting checks on pull requests

Signed-off-by: guacamole <gunjanwalecha@gmail.com>

- Chore: fixes failing linter github action

Signed-off-by: jay-dee7 <jasdeepsingh.uppal@gmail.com>


### Refactor

- Refactored and removed dead code

Signed-off-by: guacamole <gunjanwalecha@gmail.com>

- Removed unneccessary println

Signed-off-by: guacamole <gunjanwalecha@gmail.com>

- Refactor: refactored code so as to comply with golangci linter

Signed-off-by: guacamole <gunjanwalecha@gmail.com>

- Refactor: removed deadcode as suggested in issue #42

Signed-off-by: guacamole <gunjanwalecha@gmail.com>

- Refactor: refactored to make code more manageable

- added auth/basic_auth that contains basic auth functions
- added telemetry for future logging and metrics purposes
- added router to contain all the routes and register route funtions

Signed-off-by: guacamole <gunjanwalecha@gmail.com>


### Security

- Upgraded containerd version to v1.5.4

Signed-off-by: jay-dee7 <jasdeepsingh.uppal@gmail.com>

- Merge pull request #14 from jay-dee7/containerd-security-fix

upgraded containerd version to v1.5.4
- Quality Check - Github CodeQL Workflow

This PR adds a Github Workflow for adding CodeQL Analysis to detect any security vulnerabilities

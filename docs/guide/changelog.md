---
lang: en-US
title: Changelog
description: Changelog for OpenRegistry
---

# Changelog

All notable changes to this project will be documented in this file.

## [unreleased]

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


### Documentation

- Doc: added git-cliff for easy changelog generation

git-cliff uses a config.toml file present at the root directory of the
project and generates a changelog as follows:
```git cliff -vv -u -o CHANGELOG.md```

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


### Refactor

- Refactored and removed dead code

Signed-off-by: guacamole <gunjanwalecha@gmail.com>

- Removed unneccessary println

Signed-off-by: guacamole <gunjanwalecha@gmail.com>


### Security

- Upgraded containerd version to v1.5.4

Signed-off-by: jay-dee7 <jasdeepsingh.uppal@gmail.com>

- Merge pull request #14 from jay-dee7/containerd-security-fix

upgraded containerd version to v1.5.4
- Quality Check - Github CodeQL Workflow

This PR adds a Github Workflow for adding CodeQL Analysis to detect any security vulnerabilities

<!-- generated by git-cliff -->

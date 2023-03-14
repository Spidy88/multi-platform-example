This package represents a multi-platform application. It uses the multi-platform UI Kit. This package does not deploy itself but instead exports all the application code to be consumed by other packages. You could do deployment here, but in some cases you might have an existing application already that just needs to consume the components. Therefore, to show the more complex case, this package will export the core app sans mounting and deployment.

### The Problem

We can once again generate two build exports, one for web and one for native. We can easily do this with TSConfig paths. `import { Button } from '@ui-kit';` can be mapped to `@abc/ui-kit/dist/web` or `@abc/ui-kit/dist/native` in the corresponding TSConfigs. Unfortunately, these paths do not get rewritten. Consuming packages will immediately complain about not being able to find `@ui-kit`.

### The Solution

We need to rewrite our imports. There are existing Typescript plugins for this that use TTypescript and/or TS-Patch. Unfortunately we do have the same issue as UI Kit, which is handling the `.web.ts` and `.native.ts` extensions.
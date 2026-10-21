# Portfolio and FreeBoard deployment

The GitHub Pages workflow publishes this portfolio at `https://ataullha.github.io/`
and FreeBoard at `https://ataullha.github.io/FreeBoard/`. The whiteboard icon beside
Classroom opens the hosted application. Classroom retains its existing Google
Drive destination.

The workflow builds FreeBoard from the public `Ataullha/FreeBoard` repository,
runs its formatting, TypeScript, test, production-build and production-dependency
checks, and copies the static output into `FreeBoard/`. Its relative asset URLs,
manifest and service-worker scope support that subdirectory. No credentials,
backend or runtime CDN are required by FreeBoard.

## Publish changes

- A push to this repository's `main` branch rebuilds and publishes the portfolio
  and the latest FreeBoard `main` branch.
- After a change made only in `Ataullha/FreeBoard`, open this repository's
  **Actions → Publish portfolio and FreeBoard → Run workflow**. Use `main`, or a
  reviewed FreeBoard tag or commit, in `freeboard_ref`.
- GitHub Pages settings must use **GitHub Actions** as the publishing source.
- Build jobs have read permissions. Only the deployment job can publish Pages;
  GitHub supplies its short-lived deployment token. No personal access token is
  needed.

Existing visitors receive a FreeBoard update through **Save & restart**. Saved
boards use browser storage on this website origin and survive application-cache
updates. Visitors should download editable backups for important boards.

FreeBoard's source, license, setup and verification report live in the
[`Ataullha/FreeBoard`](https://github.com/Ataullha/FreeBoard) repository. The
portfolio itself retains its existing content and rights notices.

## Previous address

The earlier `/FreePod/` address redirects to `/FreeBoard/`. Its small compatibility
worker waits for the existing application's **Save & restart** action before
taking over an active session. It redirects future navigations and retains access
to cached assets for an older tab. It does not delete boards or clear browser
storage. Both paths use the same origin, so saved boards remain available.

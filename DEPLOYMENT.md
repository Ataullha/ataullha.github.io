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

## Application address

FreeBoard is published only at `/FreeBoard/`. The earlier `/FreePod/` deployment
and its compatibility redirect have been removed from the site. The workflow
checks that the published artifact contains no `FreePod` directory. The portfolio
icon and source repository link to `/FreeBoard/`.

Saved boards remain in the same origin's IndexedDB; removing the old deployment
does not clear browser storage. Use the FreeBoard address for future visits.

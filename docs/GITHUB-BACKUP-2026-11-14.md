# Private GitHub source backup — 14 November 2026

The user authorized saving the current project and pushing to their own private GitHub repository, with no deployment. Existing local Git history was preserved rather than reinitialized.

- Account: `talhalatif132`, confirmed by GitHub CLI browser/device authorization.
- Repository: https://github.com/talhalatif132/ekotint-homepage-demo
- Remote: `origin`, `https://github.com/talhalatif132/ekotint-homepage-demo.git`.
- Branch: `main`.
- Implementation checkpoint: `f158dc1` — Save current Ekotint homepage and product refinements.
- Visibility: GitHub API confirmed `PRIVATE` before the first source push.
- Hosting: no deployment, GitHub Pages setup, hosting connection or automated deployment workflow was created.

## Contents and checks

The checkpoint includes current source, public assets, project documentation, image masters, preserved legacy prototypes and existing Git history. Dependencies, generated builds, environment files and local hosting credentials remain ignored. `.vercel/` was added to the ignore list; `.sites-runtime/` must remain excluded. Original client documents outside this project directory were not copied into this code backup.

Staged whitespace checks passed. Pattern-based current and historical text checks found no candidate credentials; this is not a guarantee about arbitrary data formats. No included/current/history Git blob exceeded 50 MiB. No GitHub Actions workflows or active local deployment hooks were found. No UI/application changes or additional app test/build run was needed for this backup task; the existing dated QA evidence is retained in the repository.

GitHub CLI 2.104.0 is installed locally. Authentication is handled by the CLI's credential store, with a repository-local GitHub credential-helper configuration; no access token is committed. Existing Git author identity was preserved.

## Restore the project

Using a GitHub account with access to this private repository:

```sh
git clone https://github.com/talhalatif132/ekotint-homepage-demo.git
cd ekotint-homepage-demo
npm ci
npm run dev
```

Read `AGENTS.md` and `docs/EKOTINT-PROJECT-HANDOVER.md` before further work. Preview is on port 3023. Generating `out/` does not authorize publishing it; release rules exclude the preserved unfinished catalogue/prototype pages.

## Later client repository

The same code and history can be pushed to a client repository once the user has write access. Add a separate named remote or change `origin` deliberately. Confirm the destination and any hosting integration before a future push. Deleting this private backup is optional and is not part of the current task.

## Verification checkpoint

The initial source push succeeded. `git ls-remote origin refs/heads/main` returned `f158dc12201e3b551efca6c23f431df8c5992b83`, exactly matching local `HEAD` at the implementation checkpoint. `main` tracks `origin/main`. This verification record and the updated handover are saved in a follow-up documentation commit, followed by a final local/remote tip and clean-worktree check. No application or hosting changes were made during verification.

## Official workflow references

Reviewed 14 November 2026: [import an existing local repository](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github), [GitHub file limits](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github), [GitHub CLI authentication](https://cli.github.com/manual/gh_auth_login) and [repository creation](https://cli.github.com/manual/gh_repo_create). Used to preserve history, authenticate without sharing credentials in chat, select private visibility and verify suitability of the existing assets for a normal Git push.

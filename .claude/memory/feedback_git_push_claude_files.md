---
name: Never push Claude config files
description: CLAUDE.md and .claude/ directory must never be committed or pushed to git
type: feedback
---

Never commit or push `CLAUDE.md` or anything in `.claude/` to the git repository.

**Why:** These are local-only Claude Code configuration and memory files. They are not part of the project source and should not be visible to other contributors or included in PRs.

**How to apply:** Before any `git add`, `git commit`, or `git push`, verify that `CLAUDE.md` and `.claude/` are not staged. If they appear in `git status`, skip them. Suggest adding them to `.gitignore` if they are not already excluded.
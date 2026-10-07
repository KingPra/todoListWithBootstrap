# Credential cleanup

The Trello integration is disabled before any request is sent. Both token literals, including the commented-out token, are removed. Owner must confirm active use and approve a secure server-side integration before merging; do not put a replacement Trello token in browser code.

This branch removes credential values from current files only. Existing Git history, forks, clones, cached views, and earlier deployments may still contain them. No credentials were tested or revoked, no history was rewritten, and no deployment was performed. The owner must revoke or replace exposed credentials through the provider's authenticated dashboard separately.

Do not merge or deploy this draft until its impact is reviewed. Do not commit replacement secrets, including in generated bundles or source maps.

<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Reference experience
- Keep TanStack Start as the host and sole router; the browser-only reference renderer preserves the source illustration choreography without executing in SSR.
- Store downloaded reference media as Lovable asset pointers and rewrite reference resources to their managed URLs so the page does not hotlink original artwork.
- Keep the captured animation renderer under `public/reference`; adapt its mount lifecycle and navigation through `ReferenceExperience` rather than introducing another app router.
- Disable source analytics and mailing-list submission in the recreation; do not send visitor information to the reference site's services.

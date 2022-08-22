<script lang="ts">
  type IconNames = "search" | "rss";

  const icons: Record<IconNames, string> = {
    search: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fill-rule="evenodd">
        <path d="M0 0h24v24H0z"/>
        <circle stroke="currentColor" stroke-width="2" stroke-linecap="round" cx="11" cy="11" r="7"/>
        <path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="m16 17 3 3"/>
      </g>
    </svg>`,
    rss: `<svg viewBox="0 0 16 16">
      <path fill="currentColor" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm1.5 2.5c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1 0-2zm0 4a6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1 0-2zm.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
    </svg>`
  };

  export let name: IconNames;

  $: iconHTML = Reflect.get(icons, name);
</script>

{@html iconHTML}

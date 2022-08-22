<script lang="ts">
  import { isHasEmoji } from "../lib";
  export let icon: string;
  export let size: string;
</script>

{#if icon.startsWith("http")}
  <img
    class="icon is-img rounded"
    style="--size: {size};"
    draggable="false"
    src={icon}
    alt="Иконка статьи"
  />
{:else if isHasEmoji(icon)}
  <span class="icon is-emoji rounded select-none" style="--size: {size};"
    >{icon}</span
  >
{:else}
  <img
    class="icon is-img rounded"
    style="--size: {size};"
    draggable="false"
    src={icon}
    alt="Иконка статьи"
  />
{/if}

<style>
  .icon.is-img {
    width: var(--size);
    height: var(--size);
  }

  .icon.is-emoji {
    font-size: var(--size);
  }
</style>

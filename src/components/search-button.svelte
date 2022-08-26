<script lang="ts">
  import { onMount } from "svelte";
  import { get, writable } from "svelte/store";
  import { isSearchDialogShow } from "../lib";
  import Icon from "./icon.svelte";

  const isMac = writable(false);

  onMount(() => {
    isMac.set(navigator.userAgent.includes("Mac"));

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.code !== "KeyK") {
        return;
      }

      if (get(isMac)) {
        if (event.metaKey) {
          isSearchDialogShow.set(true);
        }
      } else {
        if (event.ctrlKey) {
          isSearchDialogShow.set(true);
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  });

  const onClickButton = () => isSearchDialogShow.set(true);
</script>

<button on:click={onClickButton} class="interactive flex gap-1 items-center">
  <div class="w-[1em]">
    <Icon name="search" />
  </div>
  <span class="hidden sm:flex gap-2">
    <span>Найти</span>
    <span>
      {#if $isMac}
        <kbd>cmd</kbd>
      {:else}
        <kbd>ctrl</kbd>
      {/if}
      <span>+</span>
      <kdb>K</kdb>
    </span>
  </span>
</button>

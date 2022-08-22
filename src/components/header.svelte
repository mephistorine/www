<script lang="ts">
  import type { Breadcrumb } from "../models";
  import Icon from "./icon.svelte";
  import PageIcon from "./page-icon.svelte";

  export let breadcrumbs: readonly Breadcrumb[] = [];
</script>

<header class="p-2">
  <div class="max-w-[1440px] flex justify-between">
    <div>
      <ul class="flex justify-between items-center gap-2">
        {#each breadcrumbs as breadcrumb}
          <li>
            <a
              href={breadcrumb.url}
              class="special-link flex items-center gap-2 interactive"
            >
              {#if breadcrumb.icon !== null}
                <PageIcon icon={breadcrumb.icon} size="1rem" />
              {/if}

              <span>{breadcrumb.name}</span>
            </a>
          </li>
        {/each}
      </ul>
    </div>

    <div>
      <button class="interactive flex gap-1 items-center">
        <div class="w-[1em]">
          <Icon name="search" />
        </div>
        <span class="hidden sm:flex gap-2">
          <span>Найти</span>
        </span>
      </button>
    </div>
  </div>
</header>

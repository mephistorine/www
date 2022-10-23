<script lang="ts">
  import type { Breadcrumb } from "../models";
  import PageIcon from "./page-icon.svelte";
  import SearchButton from "./search-button.svelte";

  export let breadcrumbs: readonly Breadcrumb[] = [];
</script>

<header class="p-2">
  <div class="max-w-[1440px] mx-auto flex justify-between">
    <div>
      <ul class="flex justify-between items-center gap-2">
        {#each breadcrumbs as breadcrumb}
          <li class="after:content-['/'] after:ml-[0.3rem] after:text-[#bebebe] hidden first:flex first:after:invisible last:after:hidden sm:flex sm:first:after:visible">
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

    <div class="flex gap-2">
      <!--<select id="theme-switcher" class="bg-transparent">
        <option value="DARK">Темная</option>
        <option value="LIGHT">Светлая</option>
        <option selected value="SYSTEM">Системная</option>
      </select>-->
      <SearchButton />
    </div>
  </div>
</header>

<script lang="ts">
  import { onMount } from "svelte";
  import { writable, Writable, get, derived } from "svelte/store";
  import { isSearchDialogShow, makeSearchResultString } from "../lib";
  import type { AllSiteData } from "../models";
import { BREADCRUMBS } from "../static-data";
  import Icon from "./icon.svelte";
  import PageIcon from "./page-icon.svelte";

  interface ResultItem {
    title: string
    icon: string
    url: string
    parentPage: string | null
  }

  const search: Writable<string> = writable<string>("");
  const loaderState: Writable<"loading" | "queit" | "error"> = writable("loading");
  const allSiteData: Writable<AllSiteData | null> = writable<AllSiteData | null>(null);
  const results = derived([search, allSiteData], ([ searchString, data ], set: (value: readonly ResultItem[]) => void) => {
    if (searchString.length <= 0 || data === null) {
      set([])
      return
    }

    const results: readonly ResultItem[] = data.entities
      .map<ResultItem>((entity) => {
        if (entity.type === "ARTICLE") {
          return {
            title: entity.value.title,
            icon: entity.value.icon,
            url: entity.url,
            parentPage: BREADCRUMBS.articles.name
          }
        }

        if (entity.type === "TALK") {
          return {
            title: entity.value.title,
            icon: "👻",
            url: `${ BREADCRUMBS.talks.url }#${ entity.value.id }`,
            parentPage: BREADCRUMBS.talks.name
          }
        }

        // @ts-ignore
        throw new TypeError(`Unknown entity type="${ entity.type }"`)
      })
      .filter((item) => item.title.toLowerCase().includes(searchString.toLowerCase()))

    set(results)
  })

  const resultsCountLine = derived(results, (results, set) => set(makeSearchResultString(results.length)))

  const closeMe: () => void = () => {
    search.set("")
    isSearchDialogShow.set(false)
  }

  onMount(() => {
    const isSearchDialogShowUnsubsribe = isSearchDialogShow.subscribe((isShow: boolean) => {
      if (isShow && get(allSiteData) === null) {
        fetch(`/data.json`)
          .then((response) => response.json())
          .then((value) => {
            allSiteData.set(value)
            // loaderState.set("queit")
          })
          .catch((error) => {
            console.error(error)
            loaderState.set("error")
          })
          .finally(() => isSearchDialogShowUnsubsribe())
      }
    })

    return () => {
      isSearchDialogShowUnsubsribe()
    }
  });

  const onInput = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    search.set(value);
  };

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeMe()
    }
  };

  const onClickContainer = (event: Event) => {
    if (event.currentTarget === event.target) {
      closeMe()
    }
  };
</script>

{#if $isSearchDialogShow}
  <div on:keydown={onKeyDown} on:click={onClickContainer} class="fixed top-0 left-0 w-full h-full bg-gray-700/70 flex justify-center items-end sm:items-center">
    <div class="relative flex flex-col justify-between bg-white rounded overflow-hidden w-full sm:w-[450px]">
      <header class="flex items-center border-b relative">
        <div class="absolute top-1/2 -translate-y-1/2 left-2 w-6">
          <Icon name="search" />
        </div>

        <!-- svelte-ignore a11y-autofocus -->
        <input
          on:input={onInput}
          class="flex-grow outline-0 p-2 pl-10"
          type="text"
          placeholder="Тот кто ищет – всегда найдет..."
          autofocus
        />
      </header>

      <div class="flex-grow p-2 h-[250px] overflow-auto">
        <ul class="divide-y">
          {#each $results as item}
            <li>
              <a href={item.url} class="flex items-start gap-3 p-2 hover:bg-gray-100 cursor-pointer">
                <div><PageIcon icon={item.icon} size="1em" /></div>

                <div>
                  <p>{item.title}</p>
                  {#if item.parentPage !== null}
                    <p class="text-sm text-gray-400">{item.parentPage}</p>
                  {/if}
                </div>
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <footer class="text-gray-400 select-none p-2 border-t">
        <ul class="flex gap-6 text-xs">
          <li>{$resultsCountLine}</li>
        </ul>
      </footer>

      <!-- {#if $loaderState === "loading"}
        <div class="absolute top-0 left-0 w-full h-full bg-black/30 flex justify-center items-center">
          <div class="text-3xl animate-spin select-none">🌀</div>
        </div>
      {/if} -->
    </div>
  </div>
{/if}

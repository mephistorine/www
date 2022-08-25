<script lang="ts">
  import { getTag } from "../static-data";

  export let slug: string;
  $: tag = getTag(slug);
  $: {
    if (typeof tag === "undefined") {
      throw new Error(`Article tag with slug="${tag}" not found`);
    }
  }
</script>

<span
  title={tag?.name}
  style="background-color: {tag?.backgroundColor};"
  class="block p-1 pt-0.5 rounded text-black dark:text-white text-sm leading-none hover:opacity-80"
  >{tag?.slug}</span>

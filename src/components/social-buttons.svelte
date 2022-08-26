<script lang="ts">
  export let title: string;
  export let url: string;

  const twitterUrl = new URL("https://twitter.com/intent/tweet");
  twitterUrl.searchParams.set("text", title);
  twitterUrl.searchParams.set("url", url);

  const vkUrl = new URL("https://vk.com/share.php");
  vkUrl.searchParams.set("title", title);
  vkUrl.searchParams.set("url", url);
</script>

<ul class="flex gap-2 overflow-x-auto">
  <li>
    <a
      class="block px-2 py-1 whitespace-nowrap border rounded hover:bg-gray-200"
      href="/rss.xml"
      target="_blank"
      rel="noreferrer">Подписаться на RSS</a
    >
  </li>
  <li>
    <a
      class="block px-2 py-1 whitespace-nowrap border rounded hover:bg-gray-200"
      href={twitterUrl.toString()}
      target="_blank"
      rel="noreferrer">Твитнуть</a
    >
  </li>
  <li>
    <a
      class="block px-2 py-1 whitespace-nowrap border rounded hover:bg-gray-200"
      href={vkUrl.toString()}
      target="_blank"
      rel="noreferrer">Поделиться в ВК</a
    >
  </li>
</ul>

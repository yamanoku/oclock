<script lang="ts">
  import { onMount } from "svelte";
  let time = new Date();

  $: hours = String(time.getHours()).padStart(2, "0");
  $: minutes = String(time.getMinutes()).padStart(2, "0");
  $: seconds = String(time.getSeconds()).padStart(2, "0");

  onMount(() => {
    const interval = setInterval(() => {
      time = new Date();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<main>
  <h1 class="visually-hidden">O'Clock App</h1>
  <div
    id="visually-hidden-oclock"
    class="visually-hidden"
    role="timer"
    aria-live="polite"
    aria-atomic="true"
  >
    {hours}:{minutes}
  </div>
  <div id="visually-oclock" class="visually-oclock" aria-hidden="true">
    {hours}:{minutes}:{seconds}
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .visually-oclock {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 4.5rem;
    font-variant-numeric: tabular-nums;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<svelte:options customElement="seconds-component" />

<script lang="ts">
  let time = $state(new Date());

  let seconds = $derived(String(time.getSeconds()).padStart(2, "0"));

  $effect(() => {
    const interval = setInterval(() => {
      time = new Date();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<div id="visually-seconds" class="visually-seconds" aria-hidden="true">
  {seconds}
</div>

<style>
  .visually-seconds {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 4.5rem;
    font-variant-numeric: tabular-nums;
    user-select: none;
  }
</style>

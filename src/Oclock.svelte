<svelte:options customElement="oclock-component" />

<script lang="ts">
  let time = $state(new Date());

  let hours = $derived(String(time.getHours()).padStart(2, "0"));
  let minutes = $derived(String(time.getMinutes()).padStart(2, "0"));
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

<div
  id="visually-hidden-oclock"
  class="visually-hidden-oclock"
  role="timer"
  aria-live="polite"
  aria-atomic="true"
>
  {hours}:{minutes}
</div>
<div id="visually-oclock" class="visually-oclock" aria-hidden="true">
  {hours}:{minutes}:{seconds}
</div>

<style>
  .visually-oclock {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 4.5rem;
    font-variant-numeric: tabular-nums;
    user-select: none;
  }

  .visually-hidden-oclock {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 4px;
    height: 4px;
    opacity: 0;
    overflow: hidden;
    border: none;
    margin: 0;
    padding: 0;
    display: block;
    visibility: visible;
  }
</style>


<script type="text/javascript">
  document.addEventListener("DOMContentLoaded", () => {
    const toggleDark = document.getElementById('toggleDark');
    toggleDark.addEventListener('click', function() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }
      alert("click!");
    });
  });
</script>

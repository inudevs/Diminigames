<template>
  <nav>
    <a href="#rps">가위바위보</a>
    <a href="#baseball">숫자야구</a>
    <a href="#about">정보</a>
  </nav>
</template>

<script>
</script>

<style>
body {
  margin: 0;
}

nav {
  background-color: #f1f3f5;
  border-bottom: 2px solid #dee2e6;

  overflow: hidden;

  margin-bottom: 0.5em;
  padding: 0.2em 0;
}

nav a {
  color: #343a40;

  font-size: 2.2rem;
  font-family: "Nanum Gothic", sans-serif;

  text-decoration: none;

  margin: 0 0.4em;
}

@media screen and (max-width: 900px) {
  nav a {
    font-size: 2rem;
  }
}

@media screen and (max-width: 600px) {
  nav a {
    font-size: 1.5rem;
  }
}
</style>

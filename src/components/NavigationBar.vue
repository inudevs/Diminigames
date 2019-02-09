<template>
  <nav id="top-nav">
    <span id="site-title">디미니게임즈</span>
    <ul>
      <li>
        <a class="menu-link" href="#rps">가위바위보</a>
      </li>
      <li>
        <a class="menu-link" href="#baseball">숫자야구</a>
      </li>
      <li>
        <a class="menu-link" href="#about">정보</a>
      </li>
    </ul>
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

  margin-bottom: 1em;
  padding: 0.2em 0;
}

#top-nav #site-title {
  display: inline;
  color: #212529;

  font-size: 1.8em;
  font-family: "Nanum Barun Gothic";
  font-weight: bold;

  padding: 0 0.5em 0 0.5em;

  border-right: 2px solid #adb5bd;
}

#top-nav ul {
  display: inline;

  padding: 0;

  overflow: scroll;
}

#top-nav ul li {
  list-style: none;
  display: inline;
}

#top-nav .menu-link {
  color: #343a40;

  font-size: 1.8em;
  font-family: "Nanum Gothic", sans-serif;

  text-decoration: none;

  margin: 0 0.5em;
}

@media screen and (max-width: 900px) {
  #top-nav #site-title {
    font-size: 1.6em;
  }

  #top-nav .menu-link {
    font-size: 1.6em;
  }
}

@media screen and (max-width: 600px) {
  #top-nav #site-title {
    font-size: 1.4em;
  }

  #top-nav .menu-link {
    font-size: 1.4em;
  }
}
</style>

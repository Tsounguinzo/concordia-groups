<script>
  import "../../app.css";
  import {header} from "$lib/stores";
  import {Header, Footer} from "$lib";
</script>

<Header title={$header.title} subtitle={$header.subtitle}/>

<slot />

<Footer/>
<template>
  <div class="author-info">
    <h1>About the Author</h1>
    <p>I’m a twenty-something trying to find her place in this vast, scary, and sometimes wonderous universe. I have a Master in Environmental Management, and have worked with state agencies and a variety of environmental nonprofits. I’m interested in wildlife conservation, habitat management, and environmental communication. I have experience working in the field using camera traps, conducting water quality tests, and native/invasive vegetation assessments. I’ve also analyzed data using software/programs like ArcGIS, QGIS, Circuitscape, Maxent, and R.</p>
    <p>
      I enjoy reading, art history, learning about wildlife, folklore/mythology, and writing.
      I am currently doing fieldwork to assist in the study of Beech Leaf Disease distribution in Connecticut.
    </p>
    <p>I also work nights managing New England’s largest collection of vampire hunting memorabilia.</p>
    <p>Just kidding.</p>
    <p>I’m actually a freelance crypto-consultant. I spent this past fall tracking Connecticut’s elusive Glawackus, and am now helping a neighbor negotiate rent for a family of squatting fairies in her attic.</p>
    <p>No but seriously.</p>
    <p>I work as a blacksmith, forging weapons for the eventual zombie apocalypse.</p>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
	props: ['showTitle']
}
</script>

<style lang="scss">
.author-info {
  h1 {
    text-align: center;
    margin-top: 2rem;
  }
  h1,
  p {
    margin-left: auto;
    margin-right: auto;
  }
  p {
    width: 80%;

    &:first-of-type {
      margin-top: 6rem;
      text-indent: 10%;
    }
  }
}
</style>

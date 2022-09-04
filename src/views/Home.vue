<template>
    <div class="home wrap">
       <EachSong />
       <EachSong />
       <CurrentlyPlaying />
    </div>
</template>

<script>
import EachSong from '../components/EachSong.vue';
import CurrentlyPlaying from '../components/CurrentlyPlaying.vue';
export default {
    components: { EachSong, CurrentlyPlaying }
}
</script>

<style scoped>

</style>
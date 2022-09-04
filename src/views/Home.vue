<template>
    <div class="home">
       <EachSong />
    </div>
</template>

<script>
import EachSong from '../components/EachSong.vue';
export default {
    components: { EachSong }
}
</script>

<style scoped>
    .home {
        height: 100vh;
        width: 100%;
        padding: 2rem 1rem; 
        background: linear-gradient(135deg, hsla(226, 49%, 19%, 1) 0%, hsla(288, 56%, 26%, 1) 100%);
        /*background: linear-gradient(135deg, hsla(0, 0%, 0%, 1) 7%, hsla(288, 56%, 26%, 1) 100%);*/
    }
</style>
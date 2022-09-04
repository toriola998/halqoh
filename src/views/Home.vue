<template>
    <div class="home">
        <div class="song flex">
            <div>
                <p>Burdha</p>
                <p>Sami Yusuf</p>
            </div>
            <div class="circle flex">
                <img src="./../assets/icons/play-btn.svg"
                    alt="play lecture"
                    height=""
                    width=""/>
                <img src="./../assets/icons/pause.png"
                    alt="pause lecture"
                    height=""
                    width=""
                    v-if="this.isPlaying"
                    />    
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isPlaying: false,
        }
  }
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

    .song {
        justify-content: space-between;
        width: 90vw;
        height: 4.5rem;
        background: radial-gradient(102.06% 345.4% at 50% 34.02%, rgba(87, 29, 102, 0.62) 0%, #223053 100%);
        margin: 1rem auto;
        border-radius: 20px;
        padding: 15px;
    }
</style>
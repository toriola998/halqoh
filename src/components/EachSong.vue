<template>
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
</template>

<script>
export default {
    data() {
        return {
            isPlaying: false,
        };
    },
}
</script>

<style scoped>
     .song {
        justify-content: space-between;
        width: 90vw;
        height: 4.5rem;
        background: radial-gradient(102.06% 345.4% at 50% 34.02%, rgba(87, 29, 102, 0.62) 0%, #223053 100%);
        margin: 1rem auto;
        border-radius: 20px;
        padding: 15px;
    }

    .song p {
        font-size: .9rem;
    }
</style>
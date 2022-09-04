<template>
    <div class="playing wrap">
        <img src="./../assets/icons/back-arrow.svg"
            alt="Go back to playlist"
            height=""
            width=""
            class="go-back"/>
        <img src="./../assets/green-photo.svg" 
            class="photos cover"
            alt=""
            height=""
            width=""/>
        <div class="flex name"> 
            <div>
                <p>Burdha</p>
                <p>Sami Yusuf</p>
            </div>
            <img src="./../assets/icons/favorite.svg"
                alt=""
                height=""
                width=""/>
        </div>
        <div class="range-wrap">
            <input type="range" 
                class="progress1"/>
            <div class="flex music-duration">
                <p>00:00</p>
                <p>03:44</p>
            </div>
        </div>
            <!-- <div class="now-playing-icons flex">  
                <img src="./assets/shuffle.svg" style="margin-top: 10px" class="shuffle-btn"/>
                <div class="play-circle flex">
                    <img src="./assets/previous.svg" class="prev-btn1"/>
                </div>
                <div class="play-circle flex">
                    <img src="./assets/play-btn.svg" class="play-btn1"/>
                    <img src="./assets/pause.png" class="pause-btn1"/>
                </div>
                <div class="play-circle flex">
                    <img src="./assets/next.svg" class="next-btn1"/>
                </div>
                <img src="./assets/repeat.svg" style="margin-top: 10px" class="repeat-btn"/>
    
    </div> -->
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import "./../assets/css/input-range.css"; 
    .playing {
        position: relative;
    }
    .go-back {
        position: absolute;
        top: 1rem;
        left: 1rem;
    }
    .cover {
        margin: 4rem auto 2rem;
        display: block;
    }

    .name {
        margin: 1rem 0;
    }
</style>
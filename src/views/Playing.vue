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


        <div class="current-song flex">  
            <img src="./../assets/icons/shuffle.svg" 
                 alt=""
                 width=""
                 height=""/>
            <div class="circle">
                <img src="./../assets/icons/previous.svg"
                    alt=""
                    height=""
                    width=""/>
            </div>
            <div class="circle">
                <img src="./../assets/icons/play-btn.svg"
                     alt=""
                     height=""
                     width=""/>
                <img src="./../assets/icons/pause.png"
                     alt=""
                     height=""
                     width=""/>
            </div>
            <div class="circle">
                <img src="./../assets/icons/next.svg"
                     alt=""
                     height=""
                     width=""/>
            </div>
            <img src="./../assets/icons/repeat.svg"
                alt=""
                height=""
                width=""/>

</div>
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

    .current-song {
        justify-content: space-between;
        /* justify-content: space-evenly; */
        margin: 1.5rem;
        background-color: white;
    }
</style>
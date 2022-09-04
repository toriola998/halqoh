<template>
    <div class="current-song"> 
        <div class="flex">  
            <img src="./../assets/green-photo.svg" 
                class="cover"
                alt=""
                height="60"
                width="60"/>
            <div>
                <p>Burdha</p>
                <p>Sami Yusuf</p>
            </div>
             
            <div class="current-controls flex">               
                <img src="./../assets/icons/previous.svg" 
                        alt="go to play previous lecture"
                        height=""
                        width=""/>
                <img src="./../assets/icons/play-btn.svg"
                        alt="play lecture"
                        height=""
                        width=""/>
                <img src="./../assets/icons/next.svg"
                    alt="go to next lecture"
                    height=""
                    width=""/>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.current-song {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 9999;
        background-color: purple;
        border-top-right-radius: 25px;
        border-top-left-radius: 25px;
    }

    .current-song > div {
        justify-content: space-between;
        height: 6rem;
        padding: 0 1rem;
    }

    .current-controls {
        width: 7rem;
    }
</style>
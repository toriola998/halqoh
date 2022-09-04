<template>
    <div>
        <router-view />
    </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');   
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}

.wrap {
    min-height: 100vh;
    width: 100%;
    padding: 2rem 1rem; 
    background: linear-gradient(135deg, hsla(226, 49%, 19%, 1) 0%, hsla(288, 56%, 26%, 1) 100%);
}

.flex,
.circle {
	display: flex;
	align-items: center;
}

p {
    color: white;
    font-size: .9rem;
}

.circle {
    width: 3rem;
    height: 3rem;
    border-radius: 25px;
    background: linear-gradient(180deg, #7C3C87 0%, rgba(196, 196, 196, 0) 100%);
    justify-content: center;
    z-index: 99;
}

.song,
.name,
.music-duration,
.current-controls {
    justify-content: space-between;
}
</style>

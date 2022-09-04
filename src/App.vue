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
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.flex {
	display: flex;
	align-items: center;
}

p {
    color: white;
}

.circle {
    width: 3rem;
    height: 3rem;
    border-radius: 25px;
    background: linear-gradient(180deg, #7C3C87 0%, rgba(196, 196, 196, 0) 100%);
    justify-content: center;
    z-index: 99;
}
</style>

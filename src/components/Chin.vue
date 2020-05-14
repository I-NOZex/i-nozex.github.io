<template>
    <div class="frame-chin">
        <div class="device-buttons">
            <button @click="$router.go(-1)" class="back button">
                <fa icon="arrow-left" />
            </button>

            <router-link to="/" class="start button">
                <fa :icon="['fab', 'windows']" />
            </router-link>

            <router-link to="/help" class="search button">
                <fa icon="search" />
            </router-link>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.frame-chin {
    position: absolute;
    bottom: 0;
    height: 60px;
    width: 100%;
    background-color: #0c0c0d;
    z-index: 999;
}

.device-buttons {
    display: flex;
    justify-content: space-around;
}

.device-buttons .button {
    display: inline-flex;
    font-size: 14pt;
    padding: 20px;
    background-color: transparent;
    border: 0px solid transparent;
    color: white;
    cursor: pointer;
}
</style>
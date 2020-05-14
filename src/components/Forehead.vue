<template>
    <div class="frame-forehead">
        <div class="centered-content">
            <div class="speaker-grill"></div>
            <p class="brand-name">TiagoFM</p>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
$grillFrameColor: #1f1f1f;
$grillFrameColorReflect: #323234;

.frame-forehead {
    position: absolute;
    top: 0;
    height: 60px;
    width: 100%;
    background-color: #0c0c0d;
    z-index: 999;
}

.centered-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.speaker-grill {
    background-image: url('../assets/speaker-grill.jpg');
    background-size: 100%;
    margin-top: 4px;
    width: 90px;
    height: 4px;
    align-self: center;
    box-shadow: -1px -1px 1px $grillFrameColor, 1px -1px 1px $grillFrameColor,
        1px -1px 1px $grillFrameColorReflect,
        1px 1px 1px $grillFrameColorReflect;
}

.brand-name {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
        sans-serif;
    font-size: 15pt;
    letter-spacing: 0.5pt;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: normal;
    margin: 14px auto;
    color: #d3d7dd;
}
</style>
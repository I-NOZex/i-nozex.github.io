<template>
    <div class="tile-grid">
        <Tile :icon="['fas', 'user-astronaut']" tile-caption="About" size="medium" href="/profile" />
        <Tile :icon="['fas', 'history']" tile-caption="Experience" size="medium" href="/work" />
        <Tile :icon="['fas', 'brain']" tile-caption="Competences" size="medium" href="/competences" />
        <Tile :icon="['fab', 'facebook-f']" tile-caption="hey" :href="{ path: '/web-browser', query: { url: 'http://m.fb.me/tiagofmdotcom' }}" />
        <Tile :icon="['fab', 'github']" tile-caption="hey" :href="{ path: '/web-browser', query: { url: 'http://github.com/I-NOZex' }}" />
        <Tile :icon="['fab', 'stack-overflow']" tile-caption="hey" :href="{ path: '/web-browser', query: { url: 'http://stackoverflow.com/I-NOZex' }}" />
        <Tile :icon="['fas', 'envelope']" tile-caption="hey" :href="{ path: '/web-browser', query: { url: 'mailto:tiagofm.profissional@outlook.pt' }}" />
        <Tile :icon="['fab', 'linkedin']" tile-caption="People I worked with" size="medium" :href="{ path: '/web-browser', query: { url: 'http://linkedin.com/in/tiagofmdotcom' }}" />
        <Tile :icon="['fas', 'code']" tile-caption="Projects" size="medium" href="/projects" />
        <Tile :icon="['fab', 'edge']" tile-caption="Browser" size="big" href="/web-browser" />
        <Tile :icon="['fab', 'instagram']" tile-caption="hey" size="big" :href="{ path: '/web-browser', query: { url: 'http://instagram.com/i_nozex' }}" />

        <router-link to="/competences" class="last-tile">
            View my skills <fa icon="arrow-right"/>
        </router-link>

    </div>
</template>

<script>

import Tile from './Tile';
export default {
    components: {
        Tile
    },
};
</script>

<style>
.tile-grid {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    background-image: url("https://i.imgur.com/5TxPHtd.jpg");
    background-size: cover;
    background-position: center;
}

.last-tile {
    padding: 10px;
    float: left;
    box-sizing: border-box;
    width: 100%;
}

.last-tile {
    margin-bottom: 10px;
    text-align: right;
}

.last-tile:active {
    background: rgba(0, 0, 0, 0.4)
}

.last-tile{
    color: white;
    text-decoration: none;
}

.last-tile .svg-inline--fa{
    margin-left: 10px;
}
</style>
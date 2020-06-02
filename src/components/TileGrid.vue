<template>
    <div class="tile-grid">
        <Tile
            :icon="['fas', 'user-astronaut']"
            tile-caption="About"
            size="medium"
            href="/profile"
        />
        <!--|-->
        <Tile
            :icon="['fas', 'history']"
            tile-caption="Experience"
            size="medium"
            href="/work"
        />
        <!--|-->
        <Tile
            :icon="['fas', 'brain']"
            tile-caption="Competences"
            size="medium"
            href="/competences"
        />
        <!--|-->
        <Tile
            :icon="['fab', 'facebook-f']"
            tile-caption="hey"
            externalHref="http://m.fb.me/tiagofmdotcom"
        />
        <!--|-->
        <Tile
            :icon="['fab', 'github']"
            tile-caption="hey"
            externalHref="http://github.com/I-NOZex"
        />
        <!--|-->
        <Tile
            :icon="['fab', 'stack-overflow']"
            tile-caption="hey"
            externalHref="https://stackoverflow.com/users/1869192/i-nozex"
        />
        <!--|-->
        <Tile
            :icon="['fas', 'envelope']"
            tile-caption="hey"
            externalHref="mailto:tiagofm.profissional@outlook.pt"
        />        
        <!--|-->
        <Tile
            :icon="['fab', 'linkedin']"
            tile-caption="People I worked with"
            size="medium"
            externalHref="http://linkedin.com/in/tiagofmdotcom"
        />
        <!--|-->
        <Tile
            :icon="['fas', 'code']"
            tile-caption="Projects"
            size="medium"
            href="/projects"
        />
        <!--|-->
        <Tile
            :icon="['fab', 'instagram']"
            tile-caption="Instagram"
            size="big"
            externalHref="http://instagram.com/i_nozex"
        />
        <!--|-->

        <router-link
            to="/competences"
            class="last-tile"
        >
            View my skills
            <fa icon="arrow-right" />
        </router-link>

    </div>
</template>

<script>
import Tile from './Tile';
export default {
    components: {
        Tile
    }
};
</script>

<style>
.tile-grid {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    background-image: url('https://i.imgur.com/5TxPHtd.jpg');
    background-size: cover;
    background-position: center;
}

.last-tile {
    padding: 10px;
    float: left;
    margin-bottom: 10px;
    text-align: right;
    box-sizing: border-box;
    width: 100%;
    color: white;
    text-decoration: none;
}

.last-tile:active {
    background: rgba(0, 0, 0, 0.4);
}

.last-tile .svg-inline--fa {
    margin-left: 10px;
}
</style>
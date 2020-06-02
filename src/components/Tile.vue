<template>
    <div>
        <router-link v-if="href" :to="href" :class="`tile ${size}`">
            <div class="topleft"></div>
            <div class="top"></div>
            <div class="topright"></div>
            <div class="left"></div>
            <div class="center"></div>
            <div class="right"></div>
            <div class="bottomleft"></div>
            <div class="bottom"></div>
            <div class="bottomright"></div>
            <div  class="content">
                <fa :icon="icon" />
                <span class="title-caption">{{tileCaption}}</span>
            </div>
        </router-link>

        <a v-if="externalHref" :href="externalHref" target="_blank" :class="`tile ${size}`">
            <div class="topleft"></div>
                <div class="top"></div>
                <div class="topright"></div>
                <div class="left"></div>
                <div class="center"></div>
                <div class="right"></div>
                <div class="bottomleft"></div>
                <div class="bottom"></div>
                <div class="bottomright"></div>
                <div  class="content">
                    <fa :icon="icon" />
                    <span class="title-caption">{{tileCaption}}</span>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        size: {
            default: 'small',
            type: String
        },
        icon: {
            required: true,
            type: Array
        },
        tileCaption: {
            default: '',
            type: String
        },
        href: [String, Object],
        externalHref: {
            type: String,
            default: ''
        }
    },
};
</script>

<style lang="scss">
$width: 404px;

.tile {
    padding: 10px;
    float: left;
    box-sizing: border-box;
}

.title-caption {
    position: absolute;
    left: 8px;
    bottom: 6px;
    font-size: 14px;
}

.small .title-caption {
    display: none;
}

.small {
    width: calc(#{$width} / 4);
    height: calc(#{$width} / 4);
    -webkit-perspective: 600px;
    -moz-perspective: 600px;
    perspective: 600px;
}
.medium {
    width: calc(#{$width} / 2);
    height: calc(#{$width} / 2);
    -webkit-perspective: 1000px;
    -moz-perspective: 1000px;
    perspective: 1000px;
}
.big {
    width: $width;
    height: calc(#{$width} / 2);
    -webkit-perspective: 2000px;
    -moz-perspective: 2000px;
    perspective: 2000px;
}
/* areas */
.topleft,
.top,
.topright,
.left,
.center,
.right,
.bottomleft,
.bottom,
.bottomright {
    position: relative;
    width: 33.333333%;
    height: 33.333333%;
    float: left;
    z-index: 10;
}
.big .topleft,
.big .topright,
.big .left,
.big .right,
.big .bottomleft,
.big .bottomright {
    width: 20%;
}
.big .top,
.big .center,
.big .bottom {
    width: 60%;
}
.content {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba($accentColor, 0.8);
    color: white;
    z-index: 9;
    -webkit-transition-property: all, width, height;
    -webkit-transition-duration: 0.2s, 0s, 0s;
    -moz-transition-property: all;
    -moz-transition-duration: 0.2s;
    transition-property: all, width, height;
    transition-duration: 0.2s, 0s, 0s;
    text-align: center;
    display: block;
}

.small .content .svg-inline--fa{
    font-size: calc(#{$width} / 8);
}

.medium .content .svg-inline--fa{
    font-size: calc(#{$width} / 4);
}

.big .content .svg-inline--fa{
    font-size: calc(#{$width} / 4);
}

.content .svg-inline--fa {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* photo */
.content img {
    position: absolute;
    width: 100%;
    left: 0;
    animation: photoanim 20s infinite;
    -webkit-animation: photoanim 20s infinite;
    -moz-animation: photoanim 20s infinite;
}
@-webkit-keyframes photoanim {
    0% {
        top: 0;
    }
    50% {
        top: -80px;
    }
    100% {
        top: 0;
    }
}
@-moz-keyframes photoanim {
    0% {
        top: 0;
    }
    50% {
        top: -80px;
    }
    100% {
        top: 0;
    }
}
@keyframes photoanim {
    0% {
        top: 0;
    }
    50% {
        top: -80px;
    }
    100% {
        top: 0;
    }
}

/* small active */
.small .topleft:active ~ .content {
    -webkit-transform: rotate3d(50, -50, 0, 15deg);
    -moz-transform: rotate3d(50, -50, 0, 15deg);
    transform: rotate3d(50, -50, 0, 15deg);
}
.small .top:active ~ .content {
    -webkit-transform: rotate3d(50, 0, 0, 12deg);
    -moz-transform: rotate3d(50, 0, 0, 12deg);
    transform: rotate3d(50, 0, 0, 12deg);
    -webkit-transform-origin: 100% 100%;
    -moz-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
}
.small .topright:active ~ .content {
    -webkit-transform: rotate3d(50, 50, 0, 15deg);
    -moz-transform: rotate3d(50, 50, 0, 15deg);
    transform: rotate3d(50, 50, 0, 15deg);
}
.small .left:active ~ .content {
    -webkit-transform: rotate3d(0, -50, 0, 12deg);
    -moz-transform: rotate3d(0, -50, 0, 12deg);
    transform: rotate3d(0, -50, 0, 12deg);
    -webkit-transform-origin: 100% 100%;
    -moz-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
}
.small .center:active ~ .content {
    -webkit-transform: scale(0.9, 0.9);
    -moz-transform: scale(0.9, 0.9);
    transform: scale(0.9, 0.9);
}
.small .right:active ~ .content {
    -webkit-transform: rotate3d(0, 50, 0, 12deg);
    -moz-transform: rotate3d(0, 50, 0, 12deg);
    transform: rotate3d(0, 50, 0, 12deg);
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    transform-origin: 0 0;
}
.small .bottomleft:active ~ .content {
    -webkit-transform: rotate3d(50, 50, 0, -15deg);
    -moz-transform: rotate3d(50, 50, 0, -15deg);
    transform: rotate3d(50, 50, 0, -15deg);
}
.small .bottom:active ~ .content {
    -webkit-transform: rotate3d(-50, 0, 0, 12deg);
    -moz-transform: rotate3d(-50, 0, 0, 12deg);
    transform: rotate3d(-50, 0, 0, 12deg);
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    transform-origin: 0 0;
}
.small .bottomright:active ~ .content {
    -webkit-transform: rotate3d(50, -50, 0, -15deg);
    -moz-transform: rotate3d(50, -50, 0, -15deg);
    transform: rotate3d(50, -50, 0, -15deg);
}

/* medium active */
.medium .topleft:active ~ .content {
    -webkit-transform: rotate3d(105, -105, 0, 15deg);
    -moz-transform: rotate3d(105, -105, 0, 15deg);
    transform: rotate3d(105, -105, 0, 15deg);
}
.medium .top:active ~ .content {
    -webkit-transform: rotate3d(105, 0, 0, 12deg);
    -moz-transform: rotate3d(105, 0, 0, 12deg);
    transform: rotate3d(105, 0, 0, 12deg);
    -webkit-transform-origin: 100% 100%;
    -moz-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
}
.medium .topright:active ~ .content {
    -webkit-transform: rotate3d(105, 105, 0, 15deg);
    -moz-transform: rotate3d(105, 105, 0, 15deg);
    transform: rotate3d(105, 105, 0, 15deg);
}
.medium .left:active ~ .content {
    -webkit-transform: rotate3d(0, -105, 0, 12deg);
    -moz-transform: rotate3d(0, -105, 0, 12deg);
    transform: rotate3d(0, -105, 0, 12deg);
    -webkit-transform-origin: 100% 100%;
    -moz-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
}
.medium .center:active ~ .content {
    -webkit-transform: scale(0.94, 0.94);
    -moz-transform: scale(0.94, 0.94);
    transform: scale(0.94, 0.94);
}
.medium .right:active ~ .content {
    -webkit-transform: rotate3d(0, 105, 0, 12deg);
    -moz-transform: rotate3d(0, 105, 0, 12deg);
    transform: rotate3d(0, 105, 0, 12deg);
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    transform-origin: 0 0;
}
.medium .bottomleft:active ~ .content {
    -webkit-transform: rotate3d(105, 105, 0, -15deg);
    -moz-transform: rotate3d(105, 105, 0, -15deg);
    transform: rotate3d(105, 105, 0, -15deg);
}
.medium .bottom:active ~ .content {
    -webkit-transform: rotate3d(-105, 0, 0, 12deg);
    -moz-transform: rotate3d(-105, 0, 0, 12deg);
    transform: rotate3d(-105, 0, 0, 12deg);
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    transform-origin: 0 0;
}
.medium .bottomright:active ~ .content {
    -webkit-transform: rotate3d(105, -105, 0, -15deg);
    -moz-transform: rotate3d(105, -105, 0, -15deg);
    transform: rotate3d(105, -105, 0, -15deg);
}

/* big active */
.big .topleft:active ~ .content {
    -webkit-transform: rotate3d(220, -105, 0, 13deg);
    -moz-transform: rotate3d(220, -105, 0, 13deg);
    transform: rotate3d(220, -105, 0, 13deg);
}
.big .top:active ~ .content {
    -webkit-transform: rotate3d(220, 0, 0, 12deg);
    -moz-transform: rotate3d(220, 0, 0, 12deg);
    transform: rotate3d(220, 0, 0, 12deg);
    -webkit-transform-origin: 100% 100%;
    -moz-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
}
.big .topright:active ~ .content {
    -webkit-transform: rotate3d(220, 105, 0, 13deg);
    -moz-transform: rotate3d(220, 105, 0, 13deg);
    transform: rotate3d(105, 220, 0, 13deg);
}
.big .left:active ~ .content {
    -webkit-transform: rotate3d(0, -220, 0, 7deg);
    -moz-transform: rotate3d(0, -220, 0, 7deg);
    transform: rotate3d(0, -220, 0, 7deg);
    -webkit-transform-origin: 100% 100%;
    -moz-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
}
.big .center:active ~ .content {
    -webkit-transform: scale(0.97, 0.97);
    -moz-transform: scale(0.97, 0.97);
    transform: scale(0.97, 0.97);
}
.big .right:active ~ .content {
    -webkit-transform: rotate3d(0, 220, 0, 7deg);
    -moz-transform: rotate3d(0, 220, 0, 7deg);
    transform: rotate3d(0, 220, 0, 7deg);
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    transform-origin: 0 0;
}
.big .bottomleft:active ~ .content {
    -webkit-transform: rotate3d(220, 105, 0, -13deg);
    -moz-transform: rotate3d(220, 105, 0, -13deg);
    transform: rotate3d(220, 105, 0, -13deg);
}
.big .bottom:active ~ .content {
    -webkit-transform: rotate3d(-220, 0, 0, 12deg);
    -moz-transform: rotate3d(-220, 0, 0, 12deg);
    transform: rotate3d(-220, 0, 0, 12deg);
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    transform-origin: 0 0;
}
.big .bottomright:active ~ .content {
    -webkit-transform: rotate3d(220, -105, 0, -13deg);
    -moz-transform: rotate3d(220, -105, 0, -13deg);
    transform: rotate3d(220, -105, 0, -13deg);
}

/* different colors */
.facebook {
    background-color: #3b5998;
}
.youtube {
    background-color: white;
}
.hidden {
    overflow: hidden;
}


@media (max-width: 500px) {
    $widthMobile: 100vw;

    .small {
        width: calc(#{$widthMobile} / 4);
        height: calc(#{$widthMobile} / 4);
        -webkit-perspective: calc(#{$widthMobile} * 1.5);
        -moz-perspective: calc(#{$widthMobile} * 1.5);
        perspective: calc(#{$widthMobile} * 1.5);
    }
    .medium {
        width: calc(#{$widthMobile} / 2);
        height: calc(#{$widthMobile} / 2);
        -webkit-perspective: calc(#{$widthMobile} * 2.5);
        -moz-perspective: calc(#{$widthMobile} * 2.5);
        perspective: calc(#{$widthMobile} * 2.5);
    }
    .big {
        width: $widthMobile;
        height: calc(#{$widthMobile} / 2);
        -webkit-perspective: calc(#{$widthMobile} * 5);
        -moz-perspective: calc(#{$widthMobile} * 5);
        perspective: calc(#{$widthMobile} * 5);
    }
}

@media (max-width: 380px) {
    $widthMobile: 100vw;

    .small .content .svg-inline--fa{
        font-size: calc(#{$widthMobile} / 8);
    }

    .medium .content .svg-inline--fa{
        font-size: calc(#{$widthMobile} / 4);
    }

    .big .content .svg-inline--fa{
        font-size: calc(#{$widthMobile} / 4);
    }

}
</style>
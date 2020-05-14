<template>
    <div :class="`tile ${size}`">
        <div :class="{topleft: true, active: tileIsPressed0}"
        @mousedown="tileIsPressed0 = true"
        @mouseleave="tileIsPressed0 = false"
        @mouseup="tileIsPressed0 = false"
        @touchstart="tileIsPressed0 = true"
        @touchend="tileIsPressed0 = false"
        @touchcancel="tileIsPressed0 = false"></div>

        <div :class="{top: true, active: tileIsPressed1}"
        @mousedown="tileIsPressed1 = true"
        @mouseleave="tileIsPressed1 = false"
        @mouseup="tileIsPressed1 = false"
        @touchstart="tileIsPressed1 = true"
        @touchend="tileIsPressed1 = false"
        @touchcancel="tileIsPressed1 = false"></div>

        <div :class="{topright: true, active: tileIsPressed2}"
        @mousedown="tileIsPressed2 = true"
        @mouseleave="tileIsPressed2 = false"
        @mouseup="tileIsPressed2 = false"
        @touchstart="tileIsPressed2 = true"
        @touchend="tileIsPressed2 = false"
        @touchcancel="tileIsPressed2 = false"></div>

        <div :class="{left: true, active: tileIsPressed3}"
        @mousedown="tileIsPressed3 = true"
        @mouseleave="tileIsPressed3 = false"
        @mouseup="tileIsPressed3 = false"
        @touchstart="tileIsPressed3 = true"
        @touchend="tileIsPressed3 = false"
        @touchcancel="tileIsPressed3 = false"></div>

        <div :class="{center: true, active: tileIsPressed4}"
        @mousedown="tileIsPressed4 = true"
        @mouseleave="tileIsPressed4 = false"
        @mouseup="tileIsPressed4 = false"
        @touchstart="tileIsPressed4 = true"
        @touchend="tileIsPressed4 = false"
        @touchcancel="tileIsPressed4 = false"></div>

        <div :class="{right: true, active: tileIsPressed5}"
        @mousedown="tileIsPressed5 = true"
        @mouseleave="tileIsPressed5 = false"
        @mouseup="tileIsPressed5 = false"
        @touchstart="tileIsPressed5 = true"
        @touchend="tileIsPressed5 = false"
        @touchcancel="tileIsPressed5 = false"></div>

        <div :class="{bottomleft: true, active: tileIsPressed6}"
        @mousedown="tileIsPressed6 = true"
        @mouseleave="tileIsPressed6 = false"
        @mouseup="tileIsPressed6 = false"
        @touchstart="tileIsPressed6 = true"
        @touchend="tileIsPressed6 = false"
        @touchcancel="tileIsPressed6 = false"></div>

        <div :class="{bottom: true, active: tileIsPressed7}"
        @mousedown="tileIsPressed7 = true"
        @mouseleave="tileIsPressed7 = false"
        @mouseup="tileIsPressed7 = false"
        @touchstart="tileIsPressed7 = true"
        @touchend="tileIsPressed7 = false"
        @touchcancel="tileIsPressed7 = false"></div>

        <div :class="{bottomright: true, active: tileIsPressed8}"
        @mousedown="tileIsPressed8 = true"
        @mouseleave="tileIsPressed8 = false"
        @mouseup="tileIsPressed8 = false"
        @touchstart="tileIsPressed8 = true"
        @touchend="tileIsPressed8 = false"
        @touchcancel="tileIsPressed8 = false"></div>




        
        <div :to="href" class="content">
            <fa :icon="icon" />
            <span class="title-caption">{{tileCaption}}</span>
        </div>
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
        href: {
            default: '',
            type: String
        }  
    },

    data() {
        return {
            tileIsPressed0: false,
            tileIsPressed1: false,
            tileIsPressed2: false,
            tileIsPressed3: false,
            tileIsPressed4: false,
            tileIsPressed5: false,
            tileIsPressed6: false,
            tileIsPressed7: false,
            tileIsPressed8: false,
        }
    }
};
</script>

<style lang="scss">
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
    width: calc(404px / 4);
    height: calc(404px / 4);
    -webkit-perspective: 600px;
    -moz-perspective: 600px;
    perspective: 600px;
}
.medium {
    width: calc(404px / 2);
    height: calc(404px / 2);
    -webkit-perspective: 1000px;
    -moz-perspective: 1000px;
    perspective: 1000px;
}
.big {
    width: 404px;
    height: calc(404px / 2);
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
    background-color: rgba(#0076d7, 0.8);
    color: white;
    z-index: 10;
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
    font-size: calc(404px / 8);
}

.medium .content .svg-inline--fa{
    font-size: calc(404px / 4);
}

.big .content .svg-inline--fa{
    font-size: calc(404px / 4);
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
.small .topleft.active ~ .content {
    -webkit-transform: rotate3d(50, -50, 0, 15deg);
    -moz-transform: rotate3d(50, -50, 0, 15deg);
    transform: rotate3d(50, -50, 0, 15deg);
}
.small .top.active ~ .content {
    -webkit-transform: rotate3d(50, 0, 0, 12deg);
    -moz-transform: rotate3d(50, 0, 0, 12deg);
    transform: rotate3d(50, 0, 0, 12deg);
    -webkit-transform-origin: 100% 100%;
    -moz-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
}
.small .topright.active ~ .content {
    -webkit-transform: rotate3d(50, 50, 0, 15deg);
    -moz-transform: rotate3d(50, 50, 0, 15deg);
    transform: rotate3d(50, 50, 0, 15deg);
}
.small .left.active ~ .content {
    -webkit-transform: rotate3d(0, -50, 0, 12deg);
    -moz-transform: rotate3d(0, -50, 0, 12deg);
    transform: rotate3d(0, -50, 0, 12deg);
    -webkit-transform-origin: 100% 100%;
    -moz-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
}
.small .center.active ~ .content {
    -webkit-transform: scale(0.9, 0.9);
    -moz-transform: scale(0.9, 0.9);
    transform: scale(0.9, 0.9);
}
.small .right.active ~ .content {
    -webkit-transform: rotate3d(0, 50, 0, 12deg);
    -moz-transform: rotate3d(0, 50, 0, 12deg);
    transform: rotate3d(0, 50, 0, 12deg);
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    transform-origin: 0 0;
}
.small .bottomleft.active ~ .content {
    -webkit-transform: rotate3d(50, 50, 0, -15deg);
    -moz-transform: rotate3d(50, 50, 0, -15deg);
    transform: rotate3d(50, 50, 0, -15deg);
}
.small .bottom.active ~ .content {
    -webkit-transform: rotate3d(-50, 0, 0, 12deg);
    -moz-transform: rotate3d(-50, 0, 0, 12deg);
    transform: rotate3d(-50, 0, 0, 12deg);
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    transform-origin: 0 0;
}
.small .bottomright.active ~ .content {
    -webkit-transform: rotate3d(50, -50, 0, -15deg);
    -moz-transform: rotate3d(50, -50, 0, -15deg);
    transform: rotate3d(50, -50, 0, -15deg);
}

/* medium active */
.medium .topleft.active ~ .content {
    -webkit-transform: rotate3d(105, -105, 0, 15deg);
    -moz-transform: rotate3d(105, -105, 0, 15deg);
    transform: rotate3d(105, -105, 0, 15deg);
}
.medium .top.active ~ .content {
    -webkit-transform: rotate3d(105, 0, 0, 12deg);
    -moz-transform: rotate3d(105, 0, 0, 12deg);
    transform: rotate3d(105, 0, 0, 12deg);
    -webkit-transform-origin: 100% 100%;
    -moz-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
}
.medium .topright.active ~ .content {
    -webkit-transform: rotate3d(105, 105, 0, 15deg);
    -moz-transform: rotate3d(105, 105, 0, 15deg);
    transform: rotate3d(105, 105, 0, 15deg);
}
.medium .left.active ~ .content {
    -webkit-transform: rotate3d(0, -105, 0, 12deg);
    -moz-transform: rotate3d(0, -105, 0, 12deg);
    transform: rotate3d(0, -105, 0, 12deg);
    -webkit-transform-origin: 100% 100%;
    -moz-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
}
.medium .center.active ~ .content {
    -webkit-transform: scale(0.94, 0.94);
    -moz-transform: scale(0.94, 0.94);
    transform: scale(0.94, 0.94);
}
.medium .right.active ~ .content {
    -webkit-transform: rotate3d(0, 105, 0, 12deg);
    -moz-transform: rotate3d(0, 105, 0, 12deg);
    transform: rotate3d(0, 105, 0, 12deg);
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    transform-origin: 0 0;
}
.medium .bottomleft.active ~ .content {
    -webkit-transform: rotate3d(105, 105, 0, -15deg);
    -moz-transform: rotate3d(105, 105, 0, -15deg);
    transform: rotate3d(105, 105, 0, -15deg);
}
.medium .bottom.active ~ .content {
    -webkit-transform: rotate3d(-105, 0, 0, 12deg);
    -moz-transform: rotate3d(-105, 0, 0, 12deg);
    transform: rotate3d(-105, 0, 0, 12deg);
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    transform-origin: 0 0;
}
.medium .bottomright.active ~ .content {
    -webkit-transform: rotate3d(105, -105, 0, -15deg);
    -moz-transform: rotate3d(105, -105, 0, -15deg);
    transform: rotate3d(105, -105, 0, -15deg);
}

/* big active */
.big .topleft.active ~ .content {
    -webkit-transform: rotate3d(220, -105, 0, 13deg);
    -moz-transform: rotate3d(220, -105, 0, 13deg);
    transform: rotate3d(220, -105, 0, 13deg);
}
.big .top.active ~ .content {
    -webkit-transform: rotate3d(220, 0, 0, 12deg);
    -moz-transform: rotate3d(220, 0, 0, 12deg);
    transform: rotate3d(220, 0, 0, 12deg);
    -webkit-transform-origin: 100% 100%;
    -moz-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
}
.big .topright.active ~ .content {
    -webkit-transform: rotate3d(220, 105, 0, 13deg);
    -moz-transform: rotate3d(220, 105, 0, 13deg);
    transform: rotate3d(105, 220, 0, 13deg);
}
.big .left.active ~ .content {
    -webkit-transform: rotate3d(0, -220, 0, 7deg);
    -moz-transform: rotate3d(0, -220, 0, 7deg);
    transform: rotate3d(0, -220, 0, 7deg);
    -webkit-transform-origin: 100% 100%;
    -moz-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
}
.big .center.active ~ .content {
    -webkit-transform: scale(0.97, 0.97);
    -moz-transform: scale(0.97, 0.97);
    transform: scale(0.97, 0.97);
}
.big .right.active ~ .content {
    -webkit-transform: rotate3d(0, 220, 0, 7deg);
    -moz-transform: rotate3d(0, 220, 0, 7deg);
    transform: rotate3d(0, 220, 0, 7deg);
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    transform-origin: 0 0;
}
.big .bottomleft.active ~ .content {
    -webkit-transform: rotate3d(220, 105, 0, -13deg);
    -moz-transform: rotate3d(220, 105, 0, -13deg);
    transform: rotate3d(220, 105, 0, -13deg);
}
.big .bottom.active ~ .content {
    -webkit-transform: rotate3d(-220, 0, 0, 12deg);
    -moz-transform: rotate3d(-220, 0, 0, 12deg);
    transform: rotate3d(-220, 0, 0, 12deg);
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    transform-origin: 0 0;
}
.big .bottomright.active ~ .content {
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
</style>
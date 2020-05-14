<template>
    <div class="about-page">
        <h1 class="contact-name">Tiago Ferreira Marques</h1>
        <h3 class="tab-name">Profile</h3>
        <figure class="contact-photo">
            <img
                src="https://i.imgur.com/HiDraAW.jpg?1"
                alt="Tiago Ferreira Marques"
                height="125"
                width="125"
                class="round-image image"
            >
            <figcaption class="caption">
                <p class="body">
                    My name is Tiago and I am curious.<br>I try to learn more about everything, and seek solutions to the problems around me.
                </p>
                <h6 class="footer">Software Developer, Coffee Glutton, Code Quality Lover</h6>
            </figcaption>
        </figure>

        <div class="contact-quote">
            <fa icon="quote-left"/>&nbsp;Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live&nbsp;<fa icon="quote-right"/>
            <p class="author">― John Woods</p>
        </div>

        <div>
            <p>The Genesis</p>
            <p>Since i was a child i had a passion for gizmos, electronics and technology, but have the opportunity to use a computer at that time, it was difficult. Then in adolescence, the world of computers come to me. I tried to find out more, and in a few months I found myself doing my first program.</p>
        </div>

        <div>
            <p>The Future is Today</p>
            <p>Since i was a child i had a passion for gizmos, electronics and technology, but have the opportunity to use a computer at that time, it was difficult. Then in adolescence, the world of computers come to me. I tried to find out more, and in a few months I found myself doing my first program.</p>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.about-page {
    background-color: $accentColor;
    padding: 16px;
    color: white;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
}

.contact-name {
    text-transform: uppercase;
    font-size: 16pt;
    font-weight: bold;
}

.tab-name {
    font-size: 20pt;
    font-weight: 300;
}

.contact-photo {
    margin: 0;
    display: flex;
    flex-direction: row;
}

.contact-photo .caption {
    margin-left: 16px;
    text-align: right;    
}

.contact-photo .caption .body {
    margin-top: 10px;
}


.contact-photo .caption .footer {
    margin-top: 0;
    font-size: 8pt;
    width: 115%;
    margin-left: -14%;
}

.contact-quote {
    text-align: center;
    background: rgba(0,0,0, 0.2);
    margin-left: -16px;
    display: block;
    width: 100%;
    padding: 8px 16px;
}

.contact-quote .svg-inline--fa {
    margin: 2px;
}

.contact-quote .author{
    text-align: right;
    margin: 3px 0;
}

.round-image {
    border-radius: 100%;
}
</style>
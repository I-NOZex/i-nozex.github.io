<template>
    <div class="work-page">
        <ol class="timeline">
            <li
                class="timeline-item"
                value="2018"
            >
                <div class="event-detail">
                    <h2 class="event-name">Software Developer <br> <a href="#"><fa icon="link"/>&nbsp;Howdy - Worklife Barometer </a></h2>
                    <p class="event-description">
                        Howdy - Great science behind a small model Together with a team of business psychologists, we have developed the well-being tool Howdy, who, with the scientific questionnaire WHO-5 in the back, gives you an overview and relevant up-to-date information on well-being at work. Howdy also gives your employees the opportunity to stop, notice and follow their own well-being. It may sound like a time waster, but in fact, it is only about five questions every 14 days, which on average takes less than a minute to answer.
                        <br>
                        <img
                            class="attached-image"
                            src="https://howdy.care/wp-content/uploads/2019/09/Howdy_Color.png"
                        />
                    </p>
                </div>
            </li>
            <li
                class="timeline-item"
                value="2018"
            >
                <div class="event-detail">
                    <h2 class="event-name">AP Degree Computer Science <br> <a href="#"><fa icon="link"/>&nbsp;University College of Northern Denmark</a></h2>
                    <p class="event-description">
                        Howdy - Great science behind a small model Together with a team of business psychologists, we have developed the well-being tool Howdy, who, with the scientific questionnaire WHO-5 in the back, gives you an overview and relevant up-to-date information on well-being at work. Howdy also gives your employees the opportunity to stop, notice and follow their own well-being. It may sound like a time waster, but in fact, it is only about five questions every 14 days, which on average takes less than a minute to answer.
                        <br>
                        <img
                            class="attached-image"
                            src="https://www.ucn.dk/Files/Templates/Designs/ucn2015/img/ucnlogo.svg"
                        />
                    </p>
                </div>
            </li>
            <li
                class="timeline-item"
                value="2017"
            >
                <div class="event-detail">
                    <h2 class="event-name">Fullstack Developer <br> <a href="#"><fa icon="link"/>&nbsp;UBIWHERE</a></h2>
                    <p class="event-description">
▪ Development of web platforms aimed at Portuguese gastronomy and tourism, using technologies such as GIT, Docker, Angular.js, React, Django, Wordpress &amp; Yii2 Framework and MySQL.                        <br>
                        <img
                            class="attached-image"
                            src="https://www.fiware.org/wp-content/uploads/2018/03/ubiwhere_400x120.png"
                        />
                    </p>
                </div>
            </li>
            <li
                class="timeline-item"
                value="2015"
            >
                <div class="event-detail">
                    <h2 class="event-name">Software Developer <br> <a href="#"><fa icon="link"/>&nbsp;Bi-Silque</a></h2>
                    <p class="event-description">
Member of the software development team (Bi-Bright) in the Bi-Silque group, located in Esmoriz - Aveiro

▪ Development of mobile application to scan and annotate documents and boards, with Xamarin Android/iOS ;
▪ Development of annotation software for desktop and interactive whiteboards using Node - Webkit JS for macOS and Windows, with possibility to collaborate in real-time with another devices though WebRTC (including tablets, with Cordova client app);
▪ Development of multi level radial menu, dynamically rendered with SVG;
▪ Developed module using design-pattern Publish-Subscriber to manage a complex user interaction flow;
▪ Developement of audio recording module for Android and iOS Xamarin;

Apart from my duties, I will also enrich my knowledge with courses.
                        <img
                            class="attached-image"
                            src="https://www.bisilque.com/client/skins/images/bisilque-text.png"
                        />
                    </p>
                </div>
            </li>
            <li
                class="timeline-item"
                value="2015"
            >
                <div class="event-detail">
                    evoke it
                </div>
            </li>
            <li
                class="timeline-item"
                value="2013"
            >
                <div class="event-detail">
                    estga
                </div>
            </li>
            <li
                class="timeline-item"
                value="2013"
            >
                <div class="event-detail">
                    ...
                </div>
            </li>
        </ol>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.work-page {
    background-color: #1e1e1e;

    padding: 16px;
    color: white;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    box-sizing: border-box;
}

.timeline {
    list-style: none;
    margin: 0;
    padding: 0;
}

.timeline-item {
    display: grid;
    grid-template-columns: 54px 1fr;
    grid-template-rows: 1fr;
    gap: 20px;
    grid-template-areas: 'left event-detail';
    margin-bottom: 54px;
}

.timeline-item::before {
    content: attr(value) ' ';
    border: 2px solid #0078d7;
    border-radius: 100px;
    height: 50px;
    width: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    grid-area: left;
}

.timeline-item::after {
    content: '';
    height: 100%;
    width: 2px;
    background: #0078d7;
    min-height: 100px;
    position: relative;
    top: 54px;
    left: 26px;
    grid-area: left;
    display: inline-grid;
}

.timeline-item:last-child:after {
    display: none;
}

.event-detail {
    grid-area: event-detail;
    background-color: $accentColor;
    padding: 16px;
    position: relative;
}

.event-detail::after {
    content: ' ';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 14px 10px 0;
    border-color: transparent #0076d7 transparent transparent;
    right: 100%;
    position: absolute;
    top: 22px;
}

.event-detail a {
    color: white;
    font-size: 12pt;
    font-weight: 400;
    text-decoration: none;
}

.event-name {
    font-size: 14pt;
}

.attached-image {
    background: white;
    padding: 16px;
    margin-top: 16px;
    width: 100%;
    box-sizing: border-box;
}


</style>
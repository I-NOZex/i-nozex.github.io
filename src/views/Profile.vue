<template>
    <div class="about-page">
        <figure class="hero-container">
            <img
                src="https://i.imgur.com/HiDraAW.jpg?1"
                alt="Tiago Ferreira Marques"
                height="125"
                width="125"
                class="round-image profile-photo"
            >
            <figcaption class="caption">
                <h1 class="profile-name">Tiago Ferreira Marques</h1>
                <h6 class="profile-title">Software Developer, Coffee Glutton, Code Quality Lover</h6>
                <p class="body">
                    My name is Tiago and I am curious.<br>
                    I try to learn more about everything, and seek solutions to the problems around me. Computer appeared halfway through my teen years and since then I grow professionally in the adventure that is knowledge.                    
                </p>
            </figcaption>
        </figure>

        <div class="profile-quote container-inverted">
            <fa icon="quote-left" />&nbsp;Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live&nbsp;
            <fa icon="quote-right" />
            <p class="author">― John Woods</p>
        </div>

        <div class="profile-history">
            <h3 class="section-title">The Road So Far...</h3>
            <div>
                <p class="section-subtitle divider right">
                    The Genesis
                </p>
                <p>
                    Since I was a child i had a passion for gizmos, electronics and technology, but have the opportunity to use a computer at that time, it was difficult. Then in adolescence, the world of computers come to me. I tried to find out more, and in a few months I found myself doing my first program
                </p>
            </div>

            <div>
                <p class="section-subtitle divider right">
                    The future is Today
                </p>
                <p>
                    Currently my focus skills is more emphasized in web technologies, including JavaScript, jQuery, PHP, ASPx, Ajax, REST, CSS3, HTML5 and entering in the world of NodeJS. But not restricted to web technologies, over the years i have gained competencies in Delphi, VB.net, C#, Java, Python and others.
                </p>
            </div>

            <div>
                <p class="section-subtitle divider right">
                    What Happens Next
                </p>
                <p>
                    My biggest ambition is to add to my portfolio of knowledge, languages like C, C++ and Assembly in the next three years. I also want to know more paradigms, methodologies and programming conventions to not only know how to do different solutions, but to be effective in each of them.
                </p>
            </div>            
        </div>

        <router-link to="/work" class="container-inverted goto-work">
            View my work <fa icon="arrow-right"/>
        </router-link>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.about-page {
    background-color: $accentColor;
background: linear-gradient(200deg, rgba(107,105,214,1) 0%, rgba(0,120,215,1) 50%, rgba(0,183,195,1) 100%); 
background-attachment: local;   
    padding: 16px;
    color: white;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    box-sizing: border-box;
}

.divider {
    display: flex;
    align-items: center;
    width: 100%;
    white-space: nowrap;
}

.divider.left::before,
.divider.right::after {
    content: '';
    border: 0px solid transparent;
    background: rgba(243, 242, 241, 0.3);
    height: 1px;
    width: 100%;
    align-self: center;
    margin-top: 6px;
    margin-left: 12px;
}

.hero-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.profile-photo {
    z-index: 9;
    border: 3px solid white;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
}

.profile-name {
    text-transform: uppercase;
    font-size: 16pt;
    font-weight: bold;
}

.section-title {
    font-size: 20pt;
    font-weight: 300;
    text-align: center;
    font-weight: 600;
}

.hero-container .caption {
    text-align: center;
}

.hero-container .caption .body {
    margin-top: 10px;
}

.hero-container .caption .profile-title {
    margin-top: 0;
    font-size: 8pt;
}

.profile-quote {
    text-align: center;
    display: block;
    padding: 16px 0;
}

.profile-quote .svg-inline--fa {
    margin: 2px;
}

.profile-quote .author {
    text-align: right;
    margin: 3px 0;
}

.section-subtitle {
    font-weight: 600;
}

.round-image {
    border-radius: 100%;
}

.container-inverted {
    background: rgba(0, 0, 0, 0.2);
    margin: -16px;
    margin-bottom: 0;
    padding: 16px;
    display: block;
}

.goto-work {
    margin-top: 10px;
    text-align: right;
}

.goto-work:active {
    background: rgba(0, 0, 0, 0.4)
}

.goto-work{
    color: white;
    text-decoration: none;
}

.goto-work .svg-inline--fa{
    margin-left: 10px;
}
</style>
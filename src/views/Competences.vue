<template>
    <div class="competences-page">
        <div class="search-bar">
            <input type="text" placeholder="Search" :value="query"
@input="e => query = e.target.value" class="search-input"/>
            <button class="search-btn"><fa icon="search"/></button>
        </div>

        <nav class="scroll-to-group-list" v-if="query">
            <div class="list-group no-space">
                <div class="group-container" v-for="(skill, i) in queryResult" :key="i">
                    <div class="list-item">
                        <div class="skill-item">
                            <img class="skill-logo" :src="skill.logo" v-bind:style="{backgroundColor: skill.color}"/>
                            <div class="skill-name">
                                {{ skill.label }}
                            </div>
                        </div>
                    </div>                                                              
                </div>
            </div>
        </nav>

        <nav class="scroll-to-group-list" v-if="!query">
            <div class="list-group" v-for="(group, i) in skillGroups" :key="i">
                <div class="header">
                    <div class="scroll-link">
                        <fa :icon="group.icon"/>
                    </div>
                    <h2 class="title">{{ group.label }}</h2>
                </div>

                <div class="group-container" v-for="(skill, i) in group.items" :key="i">
                    <div class="list-item">
                        <div class="skill-item">
                            <img class="skill-logo" :src="skill.logo" v-bind:style="{backgroundColor: skill.color}"/>
                            <div class="skill-name">
                                {{ skill.label }}
                            </div>
                        </div>
                    </div>                                                              
                </div>
            </div>
        </nav>

    </div>
</template>

<script>
export default {
    data() {
        return {
            /*favourites : [
                {icon: '', label: '', color: '#007acc'}
            ],
            honorableMentions : [
                {icon: '', label: '', color: '#007acc'}
            ],            favourites : [
                {icon: '', label: '', color: '#007acc'}
            ],*/

            query: '',

            skillGroups : {
                favourites : {
                    label: 'Favourites',
                    icon: 'trophy',
                    items: [
                        {logo: require('../assets/images/logos/js.png'), label: 'Javascript ES6', color: '#f7df1e'},
                        {logo: require('../assets/images/logos/vue.png'), label: 'Vue.js', color: '#35495e'},
                        {logo: require('../assets/images/logos/php.png'), label: 'PHP', color: '#36447f'},
                        {logo: require('../assets/images/logos/wordpress.png'), label: 'Wordpress', color: '#3698c5'},
                        {logo: require('../assets/images/logos/yii2.png'), label: 'Yii2', color: '#1e6887'}
                    ]
                },
                honorableMentions : {
                    label: 'Honorable Mentions',
                    icon: 'medal',
                    items: [
                        {logo: require('../assets/images/logos/tns.png'), label: 'Nativescript', color: '#3c5afd'},
                        {logo: require('../assets/images/logos/csharp.png'), label: 'C#', color: '#68217a'},
                        {logo: require('../assets/images/logos/xaml.png'), label: 'UWP / WPF', color: '#0078d7'},
                        {logo: require('../assets/images/logos/angular.png'), label: 'Angular', color: '#dd0330'},
                        {logo: require('../assets/images/logos/django.png'), label: 'Django', color: '#092e20'}
                    ]
                },            
                web : {
                    label: 'Web',
                    icon: 'globe',
                    items: [
                        {logo: require('../assets/images/logos/js.png'), label: 'Javascript ES6', color: '#f7df1e'},
                        {logo: require('../assets/images/logos/vue.png'), label: 'Vue.js', color: '#35495e'},
                        {logo: require('../assets/images/logos/php.png'), label: 'PHP', color: '#36447f'},
                        {logo: require('../assets/images/logos/wordpress.png'), label: 'Wordpress', color: '#3698c5'},
                        {logo: require('../assets/images/logos/yii2.png'), label: 'Yii2', color: '#1e6887'},
                        {logo: require('../assets/images/logos/angular.png'), label: 'Angular', color: '#dd0330'},
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'Strapi', color: '#007acc'},
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'Gatsby', color: '#007acc'},
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'Ajax', color: '#007acc'},
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'NodeJS', color: '#007acc'},
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'Asp Mvc5', color: '#007acc'},
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'CSS3', color: '#007acc'},
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'HTML5', color: '#007acc'},
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'jQuery', color: '#007acc'},
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'REST', color: '#007acc'},
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'GraphQL', color: '#007acc'},
                        {logo: require('../assets/images/logos/django.png'), label: 'Django', color: '#092e20'}
                    ]
                }, 
                mobile : {
                    label: 'Mobile',
                    icon: 'mobile-alt',
                    items: [
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'Nativescript', color: '#007acc'},
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'Xamarin', color: '#007acc'},
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'Android', color: '#007acc'},
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'iOS', color: '#007acc'},
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'Cordova', color: '#007acc'},
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'Ionic', color: '#007acc'},
                    ]
                }, 
                desktop : {
                    label: 'Desktop',
                    icon: 'desktop',
                    items: [
                        {logo: require('../assets/images/logos/csharp.png'), label: 'C#', color: '#68217a'},
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'Delphi', color: '#007acc'},
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'Pascal', color: '#007acc'},
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'VB.NET', color: '#007acc'},
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'Python', color: '#007acc'},
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'Java', color: '#007acc'},
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'Node-Webkit', color: '#007acc'},
                        {logo: require('../assets/images/logos/xaml.png'), label: 'WPF', color: '#0078d7'},
                        {logo: require('../assets/images/logos/xaml.png'), label: 'UWP', color: '#0078d7'},
                    ]
                },        
                database : {
                    label: 'Database',
                    icon: 'database',
                    items: [
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'MySQL', color: '#007acc'},
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'Microsoft SQL Server', color: '#007acc'},
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'MongoDB', color: '#007acc'},
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'SQLite', color: '#007acc'},
                    ]
                },   
                misc : {
                    label: 'Misc',
                    icon: 'random',
                    items: [
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'GIT', color: '#007acc'},
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'Docker', color: '#007acc'},
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'Gimp', color: '#007acc'},
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'Powershell', color: '#007acc'},
                        {logo: 'https://i.imgur.com/OasOVPk.png', label: 'Bash', color: '#007acc'},
                    ]
                },                                                                               
            }
        }
    },

    computed: {
        queryResult() {
            const searchableSkills = Object.values(this.skillGroups).filter(
                s => !['Favourites','Honorable Mentions'].includes(s.label)
            );

            const res=  searchableSkills.map( //get skills groupped
                (s) => [...s.items]

            ).reduce( //join those groups
                (acc, currVal) => [...acc, ...currVal]

            ).filter( // search the skill label
                k => k.label.toLowerCase()
                .includes(
                    this.query.toLowerCase()
                )
            )

            console.dir(res)
            return res;
        }
    },    

    methods: {
        search(query) {
            const searchableSkills = Object.values(this.skillGroups).filter(
                s => !['Favourites','Honorable Mentions'].includes(s.label)
            );

            searchableSkills.map( //get skills groupped
                (s) => [...s.items]

            ).reduce( //join those groups
                (acc, currVal) => [...acc, ...currVal]

            ).filter( // search the skill label
                k => k.label.toLowerCase()
                .includes(
                    query.toLowerCase()
                )
            )
        }
    }

};
</script>

<style lang="scss">
.competences-page {
    background-color: #1e1e1e;
    padding: 16px;
    color: white;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    box-sizing: border-box;
}

.search-bar {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    background: black;
    border: 2px solid #666;
    margin-bottom: 16px;
}

.search-bar:hover {
    border-color: #999;
}


.search-bar:focus-within {
    border-color: $accentColor;
    background-color: white;
}


.search-input {
    width: 100%;
    box-sizing: border-box;
    background-color: transparent;
    border: 0 solid transparent;
    color: #666;
    text-indent: 6px;
}

.search-input:focus {
    background-color: white;
    border: 0 solid transparent;
}

.search-btn {
    background-color: transparent;
    border: 0 solid transparent;
    color: #666;
    padding: 6px 10px;
}

.search-bar:focus-within .search-btn:hover{
    background-color: $accentColor;
}

.search-bar:focus-within .search-btn:hover .svg-inline--fa {
    color: white;
}


.scroll-to-group-list {
    display: flex;
    flex-direction: column;
    counter-reset: item;
    list-style-type: none;
}

.list-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}

.list-group.no-space {
    margin-bottom: 0;
}

.list-group .header {
    display: flex;
flex-direction: row;
align-items: center;
    margin: 4px 0;

}

.list-group .header .title{
    margin: 0;
    margin-left: 16px;
}

.scroll-link {
    color: white;
    border: 2px solid $accentColor;
    height: 35px;
    width: 35px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.group-container {
    padding: 0;
}

.skill-item {
    display: flex;
    flex-direction: row;
    margin: 4px 0;
    align-items: center;
}

.skill-logo {
    margin-right: 16px;
    height: 24px;
    width: 24px;
    padding: 7.5px;
    background-color: $accentColor;
}
</style>
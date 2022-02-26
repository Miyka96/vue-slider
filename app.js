const app = new Vue (
    {
        el: "#container",


        data: {
            slides:
            [
                {
                    image:"img-carousel/img-1.jpg",
                    title:"Doom Eternal",
                    description: "Questo gioco è ottimo per rilassarsi, spaccare il cranio ai demoni si è rivelato scientificamente antistress"
                },
                {
                    image:"img-carousel/img-2.jpeg",
                    title: "Hollow Knight",
                    description: "Questo metroidvania è un capolavoro indie, platform, roguelike con una lore dalle sfumature soulslike"
                },
                {
                    image: "img-carousel/img-3.jpg",
                    title: "Undertale",
                    description: "Questo è puro meta, ha cambiato la storia del gaming, pioniere e rivoluzionario"
                },
                {
                    image:"img-carousel/img-4.jpg",
                    title: "Bloodborne",
                    description: "Questo è uno dei più bei soulslike di sempre, gioco di punta della From Software"
                },
                {
                    image:"img-carousel/img-5.jpg",
                    title: "The Legend of Zelda BOTW",
                    description: "Questo gioco è uno dei migliori Zelda open world di sempre"
                },
                {
                    image:"img-carousel/img-6.jpg",
                    title: "Death Stranding",
                    description: "Questo è un capolavoro autoriale del maestro Hideo Kojima"
                }
            ],
            currentIndex: 0,
        },


        methods: {
            up: function() {
                if (this.currentIndex > 0){
                    this.currentIndex --
                }
                else{
                    this.currentIndex = 5
                }
            },
            down: function() {
                if (this.currentIndex < 5){
                    this.currentIndex ++
                }
                else {
                    this.currentIndex = 0
                }
            },


        },
    }
)
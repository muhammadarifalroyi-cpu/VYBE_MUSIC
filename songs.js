const vybeSongs = [
{
        id: 1,
        title: "24K Magic",
        artist: "Bruno Mars",
        album: "Bruno Mars",
        genre: "Rock",
        country: "English",
        cover: "images/album-25.jpg",
        audio: "music/24K Magic.mp3"
    },

    {
        id: 2,
        title: "A Little Girl",
        artist: "Oh Hyuk",
        album: "Korean Song",
        genre: "Acoustic",
        country: "Korea",
        cover: "images/album-2.jpg",
        audio: "music/A Little Girl.mp3"
    },

    {
        id: 3,
        title: "ADAMAS",
        artist: "LiSA",
        album: "Sword Art Online: Alicization",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-18.jpg",
        audio: "music/ADAMAS.mp3"
    },

    {
        id: 4,
        title: "Adu Rayu",
        artist: "Yovie Widianto, Tulus & Glenn Fredly",
        album: "Indonesia Song",
        genre: "R&B",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Adu Rayu.mp3"
    },

    {
        id: 5,
        title: "Ajarkan Aku",
        artist: "Arvian Dwi",
        album: "Arvian Dwi",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-27.jpg",
        audio: "music/Ajarkan Aku.mp3"
    },

    {
        id: 6,
        title: "Akeboshi",
        artist: "LiSA",
        album: "Demon Slayer",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-17.jpg",
        audio: "music/Akeboshi.mp3"
    },

    {
        id: 7,
        title: "Ao no Sumika",
        artist: "Tatsuya Kitani",
        album: "Jujutsu Kaisen",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-21.jpg",
        audio: "music/Ao no Sumika.mp3"
    },

    {
        id: 8,
        title: "As It Was",
        artist: "Harry Styles",
        album: "English Song",
        genre: "POP",
        country: "English",
        cover: "images/album-5.jpg",
        audio: "music/As It Was.mp3"
    },

    {
        id: 9,
        title: "At My Worst",
        artist: "Pink Sweats",
        album: "Acoustic Song",
        genre: "Acoustic",
        country: "English",
        cover: "images/album-1.jpg",
        audio: "music/At My Worst.mp3"
    },

    {
        id: 10,
        title: "Attention",
        artist: "Charlie Puth",
        album: "Charlie Puth",
        genre: "POP",
        country: "English",
        cover: "images/album-26.jpg",
        audio: "music/Attention.mp3"
    },

    {
        id: 11,
        title: "Ayat-Ayat Cinta",
        artist: "Rossa",
        album: "Rossa",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-29.jpg",
        audio: "music/Ayat-Ayat Cinta.mp3"
    },

    {
        id: 12,
        title: "Baby",
        artist: "Justin Bieber",
        album: "Justin Bieber",
        genre: "R&B",
        country: "English",
        cover: "images/album-22.jpg",
        audio: "music/Baby.mp3"
    },

    {
        id: 13,
        title: "Bad Habits",
        artist: "Ed Sheeran",
        album: "Ed Sheeran",
        genre: "POP",
        country: "English",
        cover: "images/album-24.jpg",
        audio: "music/Bad Habits.mp3"
    },

    {
        id: 14,
        title: "Beautiful",
        artist: "Crush",
        album: "Goblin / Guardian: The Lonely and Great God",
        genre: "OST",
        country: "Korea",
        cover: "images/album-11.jpg",
        audio: "music/Beautiful.mp3"
    },

    {
        id: 15,
        title: "Believe",
        artist: "Folder 5",
        album: "One Piece",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-20.jpg",
        audio: "music/Believe.mp3"
    },

    {
        id: 16,
        title: "Berpisah Itu Mudah",
        artist: "Rizky Febian",
        album: "Rizky Febian",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-23.jpg",
        audio: "music/Berpisah Itu Mudah.mp3"
    },

    {
        id: 17,
        title: "Blue Bird",
        artist: "Ikimono Gakari",
        album: "Naruto Shippuden",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-19.jpg",
        audio: "music/Blue Bird.mp3"
    },

    {
        id: 18,
        title: "Can You See My Heart",
        artist: "Heize",
        album: "Hotel Del Luna",
        genre: "OST",
        country: "Korea",
        cover: "images/album-14.jpg",
        audio: "music/Can You See My Heart.mp3"
    },

    {
        id: 19,
        title: "DJ Bagaikan Langit",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "Indonesia",
        cover: "images/album-7.jpg",
        audio: "music/DJ Bagaikan Langit.mp3"
    },

    {
        id: 20,
        title: "Hanya Rindu",
        artist: "Andmesh Kamaleng",
        album: "Andmesh Kamaleng",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-28.jpg",
        audio: "music/Hanya Rindu.mp3"
    },

    {
        id: 21,
        title: "If I Can't Have You",
        artist: "Shawn Mendes",
        album: "Shawn Mendes",
        genre: "POP",
        country: "English",
        cover: "images/album-31.jpg",
        audio: "music/If I Can't Have You.mp3"
    },

    {
        id: 22,
        title: "Love You With All My Heart",
        artist: "Crush",
        album: "Queen of Tears",
        genre: "OST",
        country: "Korea",
        cover: "images/album-16.jpg",
        audio: "music/Love You With All My Heart.mp3"
    },

    {
        id: 23,
        title: "Paradise",
        artist: "T-Max",
        album: "Boys Over Flowers",
        genre: "OST",
        country: "Korea",
        cover: "images/album-13.jpg",
        audio: "music/Paradise.mp3"
    },

    {
        id: 24,
        title: "Qing Fei De Yi",
        artist: "Harlem Yu",
        album: "Meteor Garden",
        genre: "OST",
        country: "China",
        cover: "images/album-9.jpg",
        audio: "music/Qing Fei De Yi.mp3"
    },

    {
        id: 25,
        title: "Qīng qīng rú wǒ",
        artist: "Yù Kěwéi",
        album: "Pursuit of Jade",
        genre: "OST",
        country: "China",
        cover: "images/album-8.jpg",
        audio: "music/Qīng qīng rú wǒ.mp3"
    },

    {
        id: 26,
        title: "Reset",
        artist: "Tiger JK feat. Jinsil",
        album: "Who Are You: School 2015",
        genre: "OST",
        country: "Korea",
        cover: "images/album-12.jpg",
        audio: "music/Reset.mp3"
    },

    {
        id: 27,
        title: "Semoga Engkau Bahagia",
        artist: "Ziell Ferdian",
        album: "Ziell Ferdian",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-30.jpg",
        audio: "music/Semoga Engkau Bahagia.mp3"
    },

    {
        id: 28,
        title: "The K2",
        artist: "Various Artists",
        album: "K2",
        genre: "OST",
        country: "Korea",
        cover: "images/album-15.jpg",
        audio: "music/The K2.mp3"
    },

    {
        id: 29,
        title: "Tong Hua",
        artist: "Guang Liang",
        album: "Chines Song",
        genre: "R&B",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Tong Hua.mp3"
    },

    {
        id: 30,
        title: "Yesterday",
        artist: "Official HIGE DANdism",
        album: "Anime Song",
        genre: "Rock",
        country: "Jepang",
        cover: "images/album-6.jpg",
        audio: "music/Yesterday.mp3"
    },

    {
        id: 31,
        title: "You Are My Everything",
        artist: "Gummy",
        album: "Descendants of the Sun",
        genre: "OST",
        country: "Korea",
        cover: "images/album-10.jpg",
        audio: "music/You Are My Everything.mp3"
    },

    {
        id: 32,
        title: "Adakah Lebih Dariku",
        artist: "Ziell Ferdian",
        album: "Ziell Ferdian",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-30.jpg",
        audio: "music/Adakah Lebih Dariku.mp3"
    },

    {
        id: 33,
        title: "Aduh",
        artist: "Maliq & D'Essentials",
        album: "Indonesia Song",
        genre: "R&B",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Aduh.mp3"
    },

    {
        id: 34,
        title: "Adult",
        artist: "Sondia",
        album: "Korean Song",
        genre: "POP",
        country: "Korea",
        cover: "images/album-2.jpg",
        audio: "music/Adult.mp3"
    },

    {
        id: 35,
        title: "Ai Ni Dan Shuo Bu Chu Kou",
        artist: "Karencici",
        album: "Chines Song",
        genre: "R&B",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Ai Ni Dan Shuo Bu Chu Kou.mp3"
    },

    {
        id: 36,
        title: "Ai Wo Hai Shi Ta",
        artist: "David Tao",
        album: "Chines Song",
        genre: "R&B",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Ai Wo Hai Shi Ta.mp3"
    },

    {
        id: 37,
        title: "Aku Bukan Untukmu",
        artist: "Rossa",
        album: "Rossa",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-29.jpg",
        audio: "music/Aku Bukan Untukmu.mp3"
    },

    {
        id: 38,
        title: "All About You",
        artist: "Taeyeon",
        album: "Hotel Del Luna",
        genre: "OST",
        country: "Korea",
        cover: "images/album-14.jpg",
        audio: "music/All About You.mp3"
    },

    {
        id: 39,
        title: "Always",
        artist: "Yoon Mi Rae",
        album: "Descendants of the Sun",
        genre: "OST",
        country: "Korea",
        cover: "images/album-10.jpg",
        audio: "music/Always.mp3"
    },

    {
        id: 40,
        title: "Amazing Grace",
        artist: "Various Artists",
        album: "K2",
        genre: "OST",
        country: "Korea",
        cover: "images/album-15.jpg",
        audio: "music/Amazing Grace.mp3"
    },

    {
        id: 41,
        title: "Amin Paling Serius",
        artist: "Sal Priadi & Nadin Amizah",
        album: "Indonesia Song",
        genre: "Acoustic",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Amin Paling Serius.mp3"
    },

    {
        id: 42,
        title: "Anemone",
        artist: "Kim Bo-hyung",
        album: "K2",
        genre: "OST",
        country: "Korea",
        cover: "images/album-15.jpg",
        audio: "music/Anemone.mp3"
    },

    {
        id: 43,
        title: "Anganku Anganmu",
        artist: "Raisa & Isyana Sarasvati",
        album: "Indonesia Song",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Anganku Anganmu.mp3"
    },

    {
        id: 44,
        title: "ANIMA",
        artist: "ReoNa",
        album: "Sword Art Online: Alicization",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-18.jpg",
        audio: "music/ANIMA.mp3"
    },

    {
        id: 45,
        title: "Another Day",
        artist: "Monday Kiz & Punch",
        album: "Hotel Del Luna",
        genre: "OST",
        country: "Korea",
        cover: "images/album-14.jpg",
        audio: "music/Another Day.mp3"
    },

    {
        id: 46,
        title: "Anugerah Terindah",
        artist: "Andmesh Kamaleng",
        album: "Andmesh Kamaleng",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-28.jpg",
        audio: "music/Anugerah Terindah.mp3"
    },

    {
        id: 47,
        title: "APT",
        artist: "ROSÉ & Bruno Mars",
        album: "Bruno Mars",
        genre: "Rock",
        country: "English",
        cover: "images/album-25.jpg",
        audio: "music/APT.mp3"
    },

    {
        id: 48,
        title: "Asal Kau Bahagia",
        artist: "Armada",
        album: "Indonesia Song",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Asal Kau Bahagia.mp3"
    },

    {
        id: 49,
        title: "Ashita wa Kyou Yori",
        artist: "Go Shiina ft. Nami Nakagawa",
        album: "Anime Song",
        genre: "Acoustic",
        country: "Jepang",
        cover: "images/album-6.jpg",
        audio: "music/Ashita wa Kyou Yori.mp3"
    },

    {
        id: 50,
        title: "Atas Nama Cinta",
        artist: "Rossa",
        album: "Rossa",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-29.jpg",
        audio: "music/Atas Nama Cinta.mp3"
    },

    {
        id: 51,
        title: "Auditory Hallucination",
        artist: "Jang Jae-in ft. NaShow",
        album: "Korean Song",
        genre: "R&B",
        country: "Korea",
        cover: "images/album-2.jpg",
        audio: "music/Auditory Hallucination.mp3"
    },

    {
        id: 52,
        title: "Bad Guy",
        artist: "Billie Eilish",
        album: "English Song",
        genre: "POP",
        country: "English",
        cover: "images/album-5.jpg",
        audio: "music/Bad Guy.mp3"
    },

    {
        id: 53,
        title: "Balasan Penghianatan",
        artist: "Ziell Ferdian",
        album: "Ziell Ferdian",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-30.jpg",
        audio: "music/Balasan Penghianatan.mp3"
    },

    {
        id: 54,
        title: "Bawalah Cintamu",
        artist: "Ziell Ferdian",
        album: "Ziell Ferdian",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-30.jpg",
        audio: "music/Bawalah Cintamu.mp3"
    },

    {
        id: 55,
        title: "Beautiful People",
        artist: "Ed Sheeran ft. Khalid",
        album: "Ed Sheeran",
        genre: "POP",
        country: "English",
        cover: "images/album-24.jpg",
        audio: "music/Beautiful People.mp3"
    },

    {
        id: 56,
        title: "Because I'm Stupid",
        artist: "SS501",
        album: "Boys Over Flowers",
        genre: "OST",
        country: "Korea",
        cover: "images/album-13.jpg",
        audio: "music/Because I'm Stupid.mp3"
    },

    {
        id: 57,
        title: "Bertaut",
        artist: "Nadin Amizah",
        album: "Indonesia Song",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Bertaut.mp3"
    },

    {
        id: 58,
        title: "Bintang Yang Hilang",
        artist: "Arvian Dwi",
        album: "Arvian Dwi",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-27.jpg",
        audio: "music/Bintang Yang Hilang.mp3"
    },

    {
        id: 59,
        title: "Birds of a Feather",
        artist: "Billie Eilish",
        album: "English Song",
        genre: "POP",
        country: "English",
        cover: "images/album-5.jpg",
        audio: "music/Birds of a Feather.mp3"
    },

    {
        id: 60,
        title: "Bisa Tanpamu",
        artist: "Andmesh Kamaleng",
        album: "Andmesh Kamaleng",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-28.jpg",
        audio: "music/Bisa Tanpamu.mp3"
    },

    {
        id: 61,
        title: "Blinding Lights",
        artist: "The Weeknd",
        album: "English Song",
        genre: "R&B",
        country: "English",
        cover: "images/album-5.jpg",
        audio: "music/Blinding Lights.mp3"
    },

    {
        id: 62,
        title: "Blow Away",
        artist: "Baechigi feat. Punch",
        album: "Who Are You: School 2015",
        genre: "OST",
        country: "Korea",
        cover: "images/album-12.jpg",
        audio: "music/Blow Away.mp3"
    },

    {
        id: 63,
        title: "Blueming",
        artist: "IU",
        album: "Acoustic Song",
        genre: "Acoustic",
        country: "Korea",
        cover: "images/album-1.jpg",
        audio: "music/Blueming.mp3"
    },

    {
        id: 64,
        title: "Bo Li",
        artist: "Gareth.T",
        album: "Chines Song",
        genre: "R&B",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Bo Li.mp3"
    },

    {
        id: 65,
        title: "Bon Voyage!",
        artist: "Bon-Bon Blanco",
        album: "One Piece",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-20.jpg",
        audio: "music/Bon Voyage!.mp3"
    },

    {
        id: 66,
        title: "Bu Ran",
        artist: "Mao Buyi",
        album: "Chines Song",
        genre: "POP",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Bu Ran.mp3"
    },

    {
        id: 67,
        title: "Bunga Hati",
        artist: "Salma Salsabil",
        album: "Indonesia Song",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Bunga Hati.mp3"
    },

    {
        id: 68,
        title: "Castle on the Hill",
        artist: "Ed Sheeran",
        album: "Ed Sheeran",
        genre: "POP",
        country: "English",
        cover: "images/album-24.jpg",
        audio: "music/Castle on the Hill.mp3"
    },

    {
        id: 69,
        title: "Cheap Thrills",
        artist: "Sia ft. Sean Paul",
        album: "English Song",
        genre: "POP",
        country: "English",
        cover: "images/album-5.jpg",
        audio: "music/Cheap Thrills.mp3"
    },

    {
        id: 70,
        title: "Chi Xin Jue Dui",
        artist: "Li Sheng Jie",
        album: "Chines Song",
        genre: "R&B",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Chi Xin Jue Dui.mp3"
    },

    {
        id: 71,
        title: "Chu Ci Xin Dong Hai Ji De",
        artist: "Nothing",
        album: "Chines Song",
        genre: "R&B",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Chu Ci Xin Dong Hai Ji De.mp3"
    },

    {
        id: 72,
        title: "Cinta",
        artist: "GAC",
        album: "Indonesia Song",
        genre: "R&B",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Cinta.mp3"
    },

    {
        id: 73,
        title: "Cinta Luar Biasa",
        artist: "Andmesh Kamaleng",
        album: "Andmesh Kamaleng",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-28.jpg",
        audio: "music/Cinta Luar Biasa.mp3"
    },

    {
        id: 74,
        title: "Closer",
        artist: "The Chainsmokers ft. Halsey",
        album: "English Song",
        genre: "POP",
        country: "English",
        cover: "images/album-5.jpg",
        audio: "music/Closer.mp3"
    },

    {
        id: 75,
        title: "Creating Memories",
        artist: "Various Artists",
        album: "Meteor Garden",
        genre: "OST",
        country: "China",
        cover: "images/album-9.jpg",
        audio: "music/Creating Memories.mp3"
    },

    {
        id: 76,
        title: "Cry Baby",
        artist: "Official HIGE DANdism",
        album: "Anime Song",
        genre: "POP",
        country: "Jepang",
        cover: "images/album-6.jpg",
        audio: "music/Cry Baby.mp3"
    },

    {
        id: 77,
        title: "Da Tou Zhen",
        artist: "Nothing",
        album: "Chines Song",
        genre: "R&B",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Da Tou Zhen.mp3"
    },

    {
        id: 78,
        title: "Da Yu",
        artist: "Zhou Shen",
        album: "Chines Song",
        genre: "Acoustic",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Da Yu.mp3"
    },

    {
        id: 79,
        title: "Dandelions",
        artist: "Ruth B.",
        album: "Acoustic Song",
        genre: "Acoustic",
        country: "English",
        cover: "images/album-1.jpg",
        audio: "music/Dandelions.mp3"
    },

    {
        id: 80,
        title: "Dangerously",
        artist: "Charlie Puth",
        album: "Charlie Puth",
        genre: "POP",
        country: "English",
        cover: "images/album-26.jpg",
        audio: "music/Dangerously.mp3"
    },

    {
        id: 81,
        title: "Dekat di Hati",
        artist: "RAN",
        album: "Indonesia Song",
        genre: "Jazz",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Dekat di Hati.mp3"
    },

    {
        id: 82,
        title: "Di Yi Ci",
        artist: "Tao Hong Jie",
        album: "Chines Song",
        genre: "R&B",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Di Yi Ci.mp3"
    },

    {
        id: 83,
        title: "Dia",
        artist: "Anji",
        album: "Indonesia Song",
        genre: "Acoustic",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Dia.mp3"
    },

    {
        id: 84,
        title: "Die With A Smile",
        artist: "Lady Gaga & Bruno Mars.",
        album: "Bruno Mars",
        genre: "POP",
        country: "English",
        cover: "images/album-25.jpg",
        audio: "music/Die With A Smile.mp3"
    },

    {
        id: 85,
        title: "Ditto",
        artist: "NewJeans",
        album: "Acoustic Song",
        genre: "Acoustic",
        country: "Korea",
        cover: "images/album-1.jpg",
        audio: "music/Ditto.mp3"
    },

    {
        id: 86,
        title: "DJ Astronaut in the Ocean",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "English",
        cover: "images/album-7.jpg",
        audio: "music/DJ Astronaut in the Ocean.mp3"
    },

    {
        id: 87,
        title: "DJ Beggin",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "English",
        cover: "images/album-7.jpg",
        audio: "music/DJ Beggin.mp3"
    },

    {
        id: 88,
        title: "DJ Better",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "Korea",
        cover: "images/album-7.jpg",
        audio: "music/DJ Better.mp3"
    },

    {
        id: 89,
        title: "DJ Calm Down",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "English",
        cover: "images/album-7.jpg",
        audio: "music/DJ Calm Down.mp3"
    },

    {
        id: 90,
        title: "DJ Cinta Karena Cinta",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "Indonesia",
        cover: "images/album-7.jpg",
        audio: "music/DJ Cinta Karena Cinta.mp3"
    },

    {
        id: 91,
        title: "DJ Dynamite",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "Korea",
        cover: "images/album-7.jpg",
        audio: "music/DJ Dynamite.mp3"
    },

    {
        id: 92,
        title: "DJ Entah Apa yang Merasukimu",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "Indonesia",
        cover: "images/album-7.jpg",
        audio: "music/DJ Entah Apa yang Merasukimu.mp3"
    },

    {
        id: 93,
        title: "DJ Gala Bunga Matahari",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "Indonesia",
        cover: "images/album-7.jpg",
        audio: "music/DJ Gala Bunga Matahari.mp3"
    },

    {
        id: 94,
        title: "DJ Hati-Hati di Jalan",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "Indonesia",
        cover: "images/album-7.jpg",
        audio: "music/DJ Hati-Hati di Jalan.mp3"
    },

    {
        id: 95,
        title: "DJ Hingga Tua Bersama",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "Indonesia",
        cover: "images/album-7.jpg",
        audio: "music/DJ Hingga Tua Bersama.mp3"
    },

    {
        id: 96,
        title: "DJ Hype Boy",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "Korea",
        cover: "images/album-7.jpg",
        audio: "music/DJ Hype Boy.mp3"
    },

    {
        id: 97,
        title: "DJ Idol",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "Jepang",
        cover: "images/album-7.jpg",
        audio: "music/DJ Idol.mp3"
    },

    {
        id: 98,
        title: "DJ I'm Good (Blue)",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "English",
        cover: "images/album-7.jpg",
        audio: "music/DJ I'm Good (Blue).mp3"
    },

    {
        id: 99,
        title: "DJ Kaibutsu",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "Jepang",
        cover: "images/album-7.jpg",
        audio: "music/DJ Kaibutsu.mp3"
    },

    {
        id: 100,
        title: "DJ Kě Wǒ",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "China",
        cover: "images/album-7.jpg",
        audio: "music/DJ Kě Wǒ.mp3"
    },

    {
        id: 101,
        title: "DJ KICK BACK",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "Jepang",
        cover: "images/album-7.jpg",
        audio: "music/DJ KICK BACK.mp3"
    },

    {
        id: 102,
        title: "DJ Komang",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "Indonesia",
        cover: "images/album-7.jpg",
        audio: "music/DJ Komang.mp3"
    },

    {
        id: 103,
        title: "DJ Ku Puja-Puja",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "Indonesia",
        cover: "images/album-7.jpg",
        audio: "music/DJ Ku Puja-Puja.mp3"
    },

    {
        id: 104,
        title: "DJ Lí Bié Kāi Chū Huā",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "China",
        cover: "images/album-7.jpg",
        audio: "music/DJ Lí Bié Kāi Chū Huā.mp3"
    },

    {
        id: 105,
        title: "DJ Liáng Liáng",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "China",
        cover: "images/album-7.jpg",
        audio: "music/DJ Liáng Liáng.mp3"
    },

    {
        id: 106,
        title: "DJ Little Dark Age",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "English",
        cover: "images/album-7.jpg",
        audio: "music/DJ Little Dark Age.mp3"
    },

    {
        id: 107,
        title: "DJ LOVE DIVE",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "Korea",
        cover: "images/album-7.jpg",
        audio: "music/DJ LOVE DIVE.mp3"
    },

    {
        id: 108,
        title: "DJ Love Story",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "English",
        cover: "images/album-7.jpg",
        audio: "music/DJ Love Story.mp3"
    },

    {
        id: 109,
        title: "DJ Magnetic",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "Korea",
        cover: "images/album-7.jpg",
        audio: "music/DJ Magnetic.mp3"
    },

    {
        id: 110,
        title: "DJ Makeba",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "English",
        cover: "images/album-7.jpg",
        audio: "music/DJ Makeba.mp3"
    },

    {
        id: 111,
        title: "DJ Murder on the Dancefloor",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "English",
        cover: "images/album-7.jpg",
        audio: "music/DJ Murder on the Dancefloor.mp3"
    },

    {
        id: 112,
        title: "DJ Next Level",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "Korea",
        cover: "images/album-7.jpg",
        audio: "music/DJ Next Level.mp3"
    },

    {
        id: 113,
        title: "DJ Nǐ De Dá'àn",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "China",
        cover: "images/album-7.jpg",
        audio: "music/DJ Nǐ De Dá'àn.mp3"
    },

    {
        id: 114,
        title: "DJ Papi Chulo",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "Indonesia",
        cover: "images/album-7.jpg",
        audio: "music/DJ Papi Chulo.mp3"
    },

    {
        id: 115,
        title: "DJ Runtah",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "Indonesia",
        cover: "images/album-7.jpg",
        audio: "music/DJ Runtah.mp3"
    },

    {
        id: 116,
        title: "DJ Salah Apa Aku",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "Indonesia",
        cover: "images/album-7.jpg",
        audio: "music/DJ Salah Apa Aku.mp3"
    },

    {
        id: 117,
        title: "DJ Sang Dewi",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "Indonesia",
        cover: "images/album-7.jpg",
        audio: "music/DJ Sang Dewi.mp3"
    },

    {
        id: 118,
        title: "DJ Shake It to the Max",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "English",
        cover: "images/album-7.jpg",
        audio: "music/DJ Shake It to the Max.mp3"
    },

    {
        id: 119,
        title: "DJ Shukufuk",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "Jepang",
        cover: "images/album-7.jpg",
        audio: "music/DJ Shukufuk.mp3"
    },

    {
        id: 120,
        title: "DJ Sial",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "Indonesia",
        cover: "images/album-7.jpg",
        audio: "music/DJ Sial.mp3"
    },

    {
        id: 121,
        title: "DJ STAY",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "English",
        cover: "images/album-7.jpg",
        audio: "music/DJ STAY.mp3"
    },

    {
        id: 122,
        title: "DJ Sungguh Ku Merasa Resah",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "Indonesia",
        cover: "images/album-7.jpg",
        audio: "music/DJ Sungguh Ku Merasa Resah.mp3"
    },

    {
        id: 123,
        title: "DJ Super Shy",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "Korea",
        cover: "images/album-7.jpg",
        audio: "music/DJ Super Shy.mp3"
    },

    {
        id: 124,
        title: "DJ Tak Segampang Itu",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "Indonesia",
        cover: "images/album-7.jpg",
        audio: "music/DJ Tak Segampang Itu.mp3"
    },

    {
        id: 125,
        title: "DJ Wǒ Men De Gē",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "China",
        cover: "images/album-7.jpg",
        audio: "music/DJ Wǒ Men De Gē.mp3"
    },

    {
        id: 126,
        title: "DJ Xiǎo Chéng Xià Tiān",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "China",
        cover: "images/album-7.jpg",
        audio: "music/DJ Xiǎo Chéng Xià Tiān.mp3"
    },

    {
        id: 127,
        title: "DJ Xīng Chén Dà Hǎi",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "China",
        cover: "images/album-7.jpg",
        audio: "music/DJ Xīng Chén Dà Hǎi.mp3"
    },

    {
        id: 128,
        title: "DJ Yoru ni Kakeru",
        artist: "DJ",
        album: "DJ/Remix",
        genre: "EDM",
        country: "Jepang",
        cover: "images/album-7.jpg",
        audio: "music/DJ Yoru ni Kakeru.mp3"
    },

    {
        id: 129,
        title: "Done For Me",
        artist: "Punch",
        album: "Hotel Del Luna",
        genre: "OST",
        country: "Korea",
        cover: "images/album-14.jpg",
        audio: "music/Done For Me.mp3"
    },

    {
        id: 130,
        title: "Duka",
        artist: "Last Child",
        album: "Indonesia Song",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Duka.mp3"
    },

    {
        id: 131,
        title: "Eight",
        artist: "IU ft. SUGA",
        album: "Acoustic Song",
        genre: "Acoustic",
        country: "Korea",
        cover: "images/album-1.jpg",
        audio: "music/Eight.mp3"
    },

    {
        id: 132,
        title: "Everytime",
        artist: "chen & Punch",
        album: "Descendants of the Sun",
        genre: "OST",
        country: "Korea",
        cover: "images/album-10.jpg",
        audio: "music/Everytime.mp3"
    },

    {
        id: 133,
        title: "Fallin",
        artist: "Hong Isaac",
        album: "Queen of Tears",
        genre: "OST",
        country: "Korea",
        cover: "images/album-16.jpg",
        audio: "music/Fallin.mp3"
    },

    {
        id: 134,
        title: "Fiction",
        artist: "Sumika",
        album: "Anime Song",
        genre: "POP",
        country: "Jepang",
        cover: "images/album-6.jpg",
        audio: "music/Fiction.mp3"
    },

    {
        id: 135,
        title: "Flowers",
        artist: "Miley Cyrus",
        album: "English Song",
        genre: "POP",
        country: "English",
        cover: "images/album-5.jpg",
        audio: "music/Flowers.mp3"
    },

    {
        id: 136,
        title: "For You",
        artist: "Dylan Wang",
        album: "Meteor Garden",
        genre: "OST",
        country: "China",
        cover: "images/album-9.jpg",
        audio: "music/For You.mp3"
    },

    {
        id: 137,
        title: "forget me not",
        artist: "ReoNa",
        album: "Sword Art Online: Alicization",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-18.jpg",
        audio: "music/forget me not.mp3"
    },
    {
        id: 138,
        title: "from the edge",
        artist: "LiSA",
        album: "Demon Slayer",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-17.jpg",
        audio: "music/from the edge.mp3"
    },

    {
        id: 139,
        title: "From the Start",
        artist: "SOOBIN",
        album: "Queen of Tears",
        genre: "OST",
        country: "Korea",
        cover: "images/album-16.jpg",
        audio: "music/From the Start.mp3"
    },

    {
        id: 140,
        title: "Gala Bunga Matahari",
        artist: "Sal Priadi",
        album: "Indonesia Song",
        genre: "Acoustic",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Gala Bunga Matahari.mp3"
    },

    {
        id: 141,
        title: "Galway Girl",
        artist: "Ed Sheeran",
        album: "Ed Sheeran",
        genre: "POP",
        country: "English",
        cover: "images/album-24.jpg",
        audio: "music/Galway Girl.mp3"
    },

    {
        id: 142,
        title: "Gao Bai Qi Qiu",
        artist: "Jay Chou",
        album: "Acoustic Song",
        genre: "Acoustic",
        country: "China",
        cover: "images/album-1.jpg",
        audio: "music/Gao Bai Qi Qiu.mp3"
    },
    {
        id: 143,
        title: "Girls Like You",
        artist: "roon 5 ft. Cardi B",
        album: "English Song",
        genre: "R&B",
        country: "English",
        cover: "images/album-5.jpg",
        audio: "music/Girls Like You.mp3"
    },
    {
        id: 144,
        title: "Give It Back",
        artist: "Cö shu Nie",
        album: "Jujutsu Kaisen",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-21.jpg",
        audio: "music/Give It Back.mp3"
    },

    {
        id: 145,
        title: "Give You My Heart",
        artist: "IU",
        album: "Korean Song",
        genre: "POP",
        country: "Korea",
        cover: "images/album-2.jpg",
        audio: "music/Give You My Heart.mp3"
    },

    {
        id: 146,
        title: "Golden Hour",
        artist: "JVKE",
        album: "Acoustic Song",
        genre: "Acoustic",
        country: "English",
        cover: "images/album-1.jpg",
        audio: "music/Golden Hour.mp3"
    },

    {
        id: 147,
        title: "Grenade",
        artist: "Bruno Mars",
        album: "Bruno Mars",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-25.jpg",
        audio: "music/Grenade.mp3"
    },

    {
        id: 148,
        title: "Guang Nian Zhi Wai",
        artist: "G.E.M.",
        album: "Chines Song",
        genre: "POP",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Guang Nian Zhi Wai.mp3"
    },

    {
        id: 149,
        title: "Guo Ke",
        artist: "Zhou Shen",
        album: "Chines Song",
        genre: "R&B",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Guo Ke.mp3"
    },

    {
        id: 150,
        title: "Gurenge",
        artist: "LiSA",
        album: "Demon Slayer",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-17.jpg",
        audio: "music/Gurenge.mp3"
    },

    {
        id: 151,
        title: "Hai Yu Ni",
        artist: "Ma Ye",
        album: "Chines Song",
        genre: "R&B",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Hai Yu Ni.mp3"
    },

    {
        id: 152,
        title: "Hati Yang Kau Sakiti",
        artist: "Rossa",
        album: "Rossa",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-29.jpg",
        audio: "music/Hati Yang Kau Sakiti.mp3"
    },

    {
        id: 153,
        title: "Hati-Hati di Jalan",
        artist: "Tulus",
        album: "Indonesia Song",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Hati-Hati di Jalan.mp3"
    },

    {
        id: 154,
        title: "Hatimu Milik Dia",
        artist: "Arvian Dwi",
        album: "Arvian Dwi",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-27.jpg",
        audio: "music/Hatimu Milik Dia.mp3"
    },

    {
        id: 155,
        title: "Havana",
        artist: "Camila Cabello ft. Young Thug",
        album: "English Song",
        genre: "POP",
        country: "English",
        cover: "images/album-5.jpg",
        audio: "music/Havana.mp3"
    },

    {
        id: 156,
        title: "Hero's Come Back",
        artist: "nobodyknows",
        album: "Naruto Shippuden",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-19.jpg",
        audio: "music/Hero's Come Back.mp3"
    },

    {
        id: 157,
        title: "Hold Me Back",
        artist: "Heize",
        album: "Queen of Tears",
        genre: "OST",
        country: "Korea",
        cover: "images/album-16.jpg",
        audio: "music/Hold Me Back.mp3"
    },

    {
        id: 158,
        title: "Homura",
        artist: "LiSA",
        album: "Demon Slayer",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-17.jpg",
        audio: "music/Homura.mp3"
    },

    {
        id: 159,
        title: "Hong Se Gao Gen",
        artist: "Tanya Chua",
        album: "Chines Song",
        genre: "R&B",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Hong Se Gao Gen.mp3"
    },

    {
        id: 160,
        title: "Hope",
        artist: "Namie Amuro",
        album: "One Piece",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-20.jpg",
        audio: "music/Hope.mp3"
    },

    {
        id: 161,
        title: "How Can I Love",
        artist: "Xia",
        album: "Descendants of the Sun",
        genre: "OST",
        country: "Korea",
        cover: "images/album-10.jpg",
        audio: "music/How Can I Love.mp3"
    },

    {
        id: 162,
        title: "How Long",
        artist: "Charlie Puth",
        album: "Charlie Puth",
        genre: "POP",
        country: "English",
        cover: "images/album-26.jpg",
        audio: "music/How Long.mp3"
    },

    {
        id: 163,
        title: "I Don't Care",
        artist: "Ed Sheeran & Justin Bieber",
        album: "Ed Sheeran",
        genre: "POP",
        country: "English",
        cover: "images/album-24.jpg",
        audio: "music/I Don't Care.mp3"
    },

    {
        id: 164,
        title: "I Don't Think That I Like Her",
        artist: "Charlie Puth",
        album: "Charlie Puth",
        genre: "POP",
        country: "English",
        cover: "images/album-26.jpg",
        audio: "music/I Don't Think That I Like Her.mp3"
    },

    {
        id: 165,
        title: "I Know What You Did Last Summer",
        artist: "Shawn Mendes & Camila Cabello",
        album: "Shawn Mendes",
        genre: "POP",
        country: "English",
        cover: "images/album-31.jpg",
        audio: "music/I Know What You Did Last Summer.mp3"
    },

    {
        id: 166,
        title: "I Will Go to You Like the First Snow",
        artist: "Ailee",
        album: "Goblin / Guardian: The Lonely and Great God",
        genre: "OST",
        country: "Korea",
        cover: "images/album-11.jpg",
        audio: "music/I Will Go to You Like the First Snow.mp3"
    },

    {
        id: 167,
        title: "I'll Listen to You",
        artist: "Yoon Mi-rae",
        album: "Who Are You: School 2015",
        genre: "OST",
        country: "Korea",
        cover: "images/album-12.jpg",
        audio: "music/I'll Listen to You.mp3"
    },

    {
        id: 168,
        title: "In My Blood",
        artist: "Shawn Mendes",
        album: "Shawn Mendes",
        genre: "POP",
        country: "English",
        cover: "images/album-31.jpg",
        audio: "music/In My Blood.mp3"
    },

    {
        id: 169,
        title: "Indah Pada Waktunya",
        artist: "Rizky Febian",
        album: "Rizky Febian",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-23.jpg",
        audio: "music/Indah Pada Waktunya.mp3"
    },

    {
        id: 170,
        title: "Intention",
        artist: "Justin Bieber",
        album: "Justin Bieber",
        genre: "R&B",
        country: "English",
        cover: "images/album-22.jpg",
        audio: "music/Intention.mp3"
    },

    {
        id: 171,
        title: "Iris",
        artist: "Eir Aoi",
        album: "Sword Art Online: Alicization",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-18.jpg",
        audio: "music/Iris.mp3"
    },

    {
        id: 172,
        title: "IRIS OUT",
        artist: "Kenshi Yonezu",
        album: "Anime Song",
        genre: "Rock",
        country: "Jepang",
        cover: "images/album-6.jpg",
        audio: "music/IRIS OUT.mp3"
    },

    {
        id: 173,
        title: "It'll Be Okay",
        artist: "Shawn Mendes",
        album: "Shawn Mendes",
        genre: "POP",
        country: "English",
        cover: "images/album-31.jpg",
        audio: "music/It'll Be Okay.mp3"
    },

    {
        id: 174,
        title: "It's Definitely You",
        artist: "V & Jin",
        album: "Korean Song",
        genre: "POP",
        country: "Korea",
        cover: "images/album-2.jpg",
        audio: "music/It's Definitely You.mp3"
    },

    {
        id: 175,
        title: "It's Only Me",
        artist: "Kaleb J",
        album: "Indonesia Song",
        genre: "R&B",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/It's Only Me.mp3"
    },

    {
        id: 176,
        title: "Jangan Rubah Takdiku",
        artist: "Andmesh Kamaleng",
        album: "Andmesh Kamaleng",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-28.jpg",
        audio: "music/Jangan Rubah Takdiku.mp3"
    },

    {
        id: 177,
        title: "Jing Qiao Qiao",
        artist: "Chen Yibing",
        album: "Acoustic Song",
        genre: "Acoustic",
        country: "China",
        cover: "images/album-1.jpg",
        audio: "music/Jing Qiao Qiao.mp3"
    },

    {
        id: 178,
        title: "Jiwa Yang Bersedih",
        artist: "Ghea Indrawari",
        album: "Indonesia Song",
        genre: "Acoustic",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Jiwa Yang Bersedih.mp3"
    },

    {
        id: 179,
        title: "Jue Ai",
        artist: "Faye Chan",
        album: "Chines Song",
        genre: "POP",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Jue Ai.mp3"
    },

    {
        id: 180,
        title: "Just the Way You Are",
        artist: "Bruno Mars",
        album: "Bruno Mars",
        genre: "POP",
        country: "English",
        cover: "images/album-25.jpg",
        audio: "music/Just the Way You Are.mp3"
    },

    {
        id: 181,
        title: "Kaibutsu no Uta",
        artist: "Yorushika",
        album: "Anime Song",
        genre: "POP",
        country: "Jepang",
        cover: "images/album-6.jpg",
        audio: "music/Kaibutsu no Uta.mp3"
    },

    {
        id: 182,
        title: "Kaikai Kitan",
        artist: "Eve",
        album: "Jujutsu Kaisen",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-21.jpg",
        audio: "music/Kaikai Kitan.mp3"
    },

    {
        id: 183,
        title: "Kamu Yang Kutunggu",
        artist: "Rossa",
        album: "Rossa",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-29.jpg",
        audio: "music/Kamu Yang Kutunggu.mp3"
    },

    {
        id: 184,
        title: "Kara no Kokoro",
        artist: "Anly",
        album: "Naruto Shippuden",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-19.jpg",
        audio: "music/Kara no Kokoro.mp3"
    },

    {
        id: 185,
        title: "Ke Xi Bu Shi Ni",
        artist: "Liang Jing Ru",
        album: "Chines Song",
        genre: "R&B",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Ke Xi Bu Shi Ni.mp3"
    },

    {
        id: 186,
        title: "Kenangan",
        artist: "Ziell Ferdian",
        album: "Ziell Ferdian",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-30.jpg",
        audio: "music/Kenangan.mp3"
    },

    {
        id: 187,
        title: "Kesempurnaan Cinta",
        artist: "Rizky Febian",
        album: "Rizky Febian",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-23.jpg",
        audio: "music/Kesempurnaan Cinta.mp3"
    },

    {
        id: 188,
        title: "Kini",
        artist: "Rossa",
        album: "Rossa",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-29.jpg",
        audio: "music/Kini.mp3"
    },

    {
        id: 189,
        title: "Kita Usahakan Lagi",
        artist: "Batas Senja",
        album: "Acoustic Song",
        genre: "Acoustic",
        country: "Indonesia",
        cover: "images/album-1.jpg",
        audio: "music/Kita Usahakan Lagi.mp3"
    },

    {
        id: 190,
        title: "Kizuna no Kiseki",
        artist: "MAN WITH A MISSION × milet",
        album: "Demon Slayer",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-17.jpg",
        audio: "music/Kizuna no Kiseki.mp3"
    },

    {
        id: 191,
        title: "Koi wo Shita no wa",
        artist: "Aimer",
        album: "Anime Song",
        genre: "Acoustic",
        country: "Jepang",
        cover: "images/album-6.jpg",
        audio: "music/Koi wo Shita no wa.mp3"
    },

    {
        id: 192,
        title: "Komang",
        artist: "Raim Laode",
        album: "Indonesia Song",
        genre: "Acoustic",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Komang.mp3"
    },

    {
        id: 193,
        title: "Kuatkan Pundakku",
        artist: "Arvian Dwi",
        album: "Arvian Dwi",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-27.jpg",
        audio: "music/Kuatkan Pundakku.mp3"
    },

    {
        id: 194,
        title: "Kumau Dia",
        artist: "Andmesh Kamaleng",
        album: "Andmesh Kamaleng",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-28.jpg",
        audio: "music/Kumau Dia.mp3"
    },

    {
        id: 195,
        title: "Kurangnya Apa",
        artist: "Ziell Ferdian",
        album: "Ziell Ferdian",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-30.jpg",
        audio: "music/Kurangnya Apa.mp3"
    },

    {
        id: 196,
        title: "Kusushiki",
        artist: "Mrs. GREEN APPLE",
        album: "Anime Song",
        genre: "Rock",
        country: "Jepang",
        cover: "images/album-6.jpg",
        audio: "music/Kusushiki.mp3"
    },

    {
        id: 197,
        title: "Kyouran Hey Kids!!",
        artist: "THE ORAL CIGARETTES",
        album: "Anime Song",
        genre: "Rock",
        country: "Jepang",
        cover: "images/album-6.jpg",
        audio: "music/Kyouran Hey Kids!!.mp3"
    },

    {
        id: 198,
        title: "Lantas",
        artist: "Juicy Luicy",
        album: "Indonesia Song",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Lantas.mp3"
    },

    {
        id: 199,
        title: "Lean On",
        artist: "Major Lazer & DJ Snake ft. MØ",
        album: "English Song",
        genre: "POP",
        country: "English",
        cover: "images/album-5.jpg",
        audio: "music/Lean On.mp3"
    },

    {
        id: 200,
        title: "Left and Right",
        artist: "Charlie Puth ft. Jung Kook",
        album: "Charlie Puth",
        genre: "POP",
        country: "English",
        cover: "images/album-26.jpg",
        audio: "music/Left and Right.mp3"
    },

    {
        id: 201,
        title: "Let Me Love You",
        artist: "DJ Snake ft. Justin Bieber",
        album: "English Song",
        genre: "R&B",
        country: "English",
        cover: "images/album-5.jpg",
        audio: "music/Let Me Love You.mp3"
    },

    {
        id: 202,
        title: "Lian Ren Wei Man",
        artist: "S.H.E",
        album: "Chines Song",
        genre: "R&B",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Lian Ren Wei Man.mp3"
    },

    {
        id: 203,
        title: "Liang Liang",
        artist: "Yang Zongwei & Zhang Bichen",
        album: "Chines Song",
        genre: "Acoustic",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Liang Liang.mp3"
    },

    {
        id: 204,
        title: "Light Switch",
        artist: "Charlie Puth",
        album: "Charlie Puth",
        genre: "POP",
        country: "English",
        cover: "images/album-26.jpg",
        audio: "music/Light Switch.mp3"
    },

    {
        id: 205,
        title: "Lilac",
        artist: "Mrs. GREEN APPLE",
        album: "Anime Song",
        genre: "Rock",
        country: "Jepang",
        cover: "images/album-6.jpg",
        audio: "music/Lilac.mp3"
    },

    {
        id: 206,
        title: "Liu Xing Yu",
        artist: "F4",
        album: "Meteor Garden",
        genre: "OST",
        country: "China",
        cover: "images/album-9.jpg",
        audio: "music/Liu Xing Yu.mp3"
    },

    {
        id: 207,
        title: "Locked Out of Heaven",
        artist: "Bruno Mars",
        album: "Bruno Mars",
        genre: "Rock",
        country: "English",
        cover: "images/album-25.jpg",
        audio: "music/Locked Out of Heaven.mp3"
    },

    {
        id: 208,
        title: "Lost in Japan",
        artist: "Shawn Mendes",
        album: "Shawn Mendes",
        genre: "R&B",
        country: "English",
        cover: "images/album-31.jpg",
        audio: "music/Lost in Japan.mp3"
    },

    {
        id: 209,
        title: "LOST IN PARADISE",
        artist: "ALI feat. AKLO",
        album: "Jujutsu Kaisen",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-21.jpg",
        audio: "music/LOST IN PARADISE.mp3"
    },

    {
        id: 210,
        title: "Love",
        artist: "IU",
        album: "Acoustic Song",
        genre: "Acoustic",
        country: "Korea",
        cover: "images/album-1.jpg",
        audio: "music/Love.mp3"
    },
    {
        id: 211,
        title: "Love Song",
        artist: "Park Bo-ram",
        album: "Who Are You: School 2015",
        genre: "OST",
        country: "Korea",
        cover: "images/album-12.jpg",
        audio: "music/Love Song.mp3"
    },

    {
        id: 212,
        title: "Love You",
        artist: "Min Kyunghoon",
        album: "K2",
        genre: "OST",
        country: "Korea",
        cover: "images/album-15.jpg",
        audio: "music/Love You.mp3"
    },

    {
        id: 213,
        title: "Love Yourself",
        artist: "Justin Bieber",
        album: "Justin Bieber",
        genre: "Acoustic",
        country: "English",
        cover: "images/album-22.jpg",
        audio: "music/Love Yourself.mp3"
    },

    {
        id: 214,
        title: "Love, Maybe",
        artist: "MeloMance",
        album: "Korean Song",
        genre: "Acoustic",
        country: "Korea",
        cover: "images/album-2.jpg",
        audio: "music/Love, Maybe.mp3"
    },

    {
        id: 215,
        title: "Lovely",
        artist: "Billie Eilish & Khalid",
        album: "English Song",
        genre: "R&B",
        country: "English",
        cover: "images/album-5.jpg",
        audio: "music/Lovely.mp3"
    },

    {
        id: 216,
        title: "Lucid Dreams",
        artist: "Juice WRLD",
        album: "English Song",
        genre: "POP",
        country: "English",
        cover: "images/album-5.jpg",
        audio: "music/Lucid Dreams.mp3"
    },

    {
        id: 217,
        title: "Lucky",
        artist: "Ashily",
        album: "Boys Over Flowers",
        genre: "OST",
        country: "Korea",
        cover: "images/album-13.jpg",
        audio: "music/Lucky.mp3"
    },
    {
        id: 218,
        title: "Luo Sha Hai Shi",
        artist: "Dao Lang",
        album: "Chines Song",
        genre: "POP",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Luo Sha Hai Shi.mp3"
    },

    {
        id: 219,
        title: "Making a Lover",
        artist: "SS501",
        album: "Boys Over Flowers",
        genre: "OST",
        country: "Korea",
        cover: "images/album-13.jpg",
        audio: "music/Making a Lover.mp3"
    },

    {
        id: 220,
        title: "Mana Janjimu",
        artist: "Ziell Ferdian",
        album: "Ziell Ferdian",
        genre: "Acoustic",
        country: "Indonesia",
        cover: "images/album-30.jpg",
        audio: "music/Mana Janjimu.mp3"
    },

    {
        id: 221,
        title: "Mangu",
        artist: "Fourtwnty & Charita Utami",
        album: "Indonesia Song",
        genre: "Acoustic",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Mangu.mp3"
    },

    {
        id: 222,
        title: "Mei Deng Dao Ni",
        artist: "Nothing",
        album: "Chines Song",
        genre: "R&B",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Mei Deng Dao Ni.mp3"
    },


    {
        id: 223,
        title: "Melawan Restu",
        artist: "Mahalini",
        album: "Indonesia Song",
        genre: "Acoustic",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Melawan Restu.mp3"
    },


    {
        id: 224,
        title: "Melepas Lajang",
        artist: "Arvian Dwi",
        album: "Arvian Dwi",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-27.jpg",
        audio: "music/Melepas Lajang.mp3"
    },


    {
        id: 225,
        title: "Melukis Senja",
        artist: "Budi Doremi",
        album: "Indonesia Song",
        genre: "Acoustic",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Melukis Senja.mp3"
    },

    {
        id: 226,
        title: "Mencari dan Mencari",
        artist: "Arvian Dwi",
        album: "Arvian Dwi",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-27.jpg",
        audio: "music/Mencari dan Mencari.mp3"
    },

    {
        id: 227,
        title: "Merawat Luka",
        artist: "Ziell Ferdian",
        album: "Ziell Ferdian",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-30.jpg",
        audio: "music/Merawat Luka.mp3"
    },

    {
        id: 228,
        title: "Mercy",
        artist: "Shawn Mendes",
        album: "Shawn Mendes",
        genre: "POP",
        country: "English",
        cover: "images/album-31.jpg",
        audio: "music/Mercy.mp3"
    },

    {
        id: 229,
        title: "Mixed Nuts",
        artist: "Official HIGE DANdism",
        album: "Anime Song",
        genre: "Jazz",
        country: "Jepang",
        cover: "images/album-6.jpg",
        audio: "music/Mixed Nuts.mp3"
    },

    {
        id: 230,
        title: "More Than Words",
        artist: "Hitsuji bungaku",
        album: "Jujutsu Kaisen",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-21.jpg",
        audio: "music/More Than Words.mp3"
    },

    {
        id: 231,
        title: "Mù yǐ chéng zhōu",
        artist: "Zhāng Yuǎn",
        album: "Pursuit of Jade",
        genre: "OST",
        country: "China",
        cover: "images/album-8.jpg",
        audio: "music/Mù yǐ chéng zhōu.mp3"
    },

    {
        id: 232,
        title: "My Eyes",
        artist: "Jung Joon-il",
        album: "Goblin / Guardian: The Lonely and Great God",
        genre: "OST",
        country: "Korea",
        cover: "images/album-11.jpg",
        audio: "music/My Eyes.mp3"
    },

    {
        id: 233,
        title: "Nandemonaiya",
        artist: "RADWIMPS",
        album: "Anime Song",
        genre: "POP",
        country: "Jepang",
        cover: "images/album-6.jpg",
        audio: "music/Nandemonaiya.mp3"
    },

    {
        id: 234,
        title: "Nanti Kita Seperti Ini",
        artist: "Batas Senja",
        album: "Indonesia Song",
        genre: "Acoustic",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Nanti Kita Seperti Ini.mp3"
    },

    {
        id: 235,
        title: "Never in My Mind",
        artist: "F4",
        album: "Meteor Garden",
        genre: "OST",
        country: "China",
        cover: "images/album-9.jpg",
        audio: "music/Never in My Mind.mp3"
    },

    {
        id: 236,
        title: "Never Say Never",
        artist: "Justin Bieber",
        album: "Justin Bieber",
        genre: "POP",
        country: "Justin",
        cover: "images/album-22.jpg",
        audio: "music/Never Say Never.mp3"
    },

    {
        id: 237,
        title: "New Rules",
        artist: "Dua Lipa",
        album: "English Song",
        genre: "POP",
        country: "English",
        cover: "images/album-5.jpg",
        audio: "music/New Rules.mp3"
    },

    {
        id: 238,
        title: "Ni De Da An",
        artist: "A Rong",
        album: "Chines Song ",
        genre: "POP",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Ni De Da An.mp3"
    },

    {
        id: 239,
        title: "Ni Hai Zhu Zai Wo De Ming Tian",
        artist: "Nothing",
        album: "Chines Song",
        genre: "R&B",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Ni Hai Zhu Zai Wo De Ming Tian.mp3"
    },

    {
        id: 240,
        title: "Ni Hao Bu Hao",
        artist: "Eric Chou",
        album: "Chines Song",
        genre: "R&B",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Ni Hao Bu Hao.mp3"
    },

    {
        id: 241,
        title: "Ni Na Me Ai Ta",
        artist: "Li Sheng Jie & Lin Long Xuan",
        album: "Chines Song",
        genre: "R&B",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Ni Na Me Ai Ta.mp3"
    },

    {
        id: 242,
        title: "Ni Yao De Ai",
        artist: "Penny Tai",
        album: "Acoustic Song",
        genre: "Acoustic",
        country: "China",
        cover: "images/album-1.jpg",
        audio: "music/Ni Yao De Ai.mp3"
    },

    {
        id: 243,
        title: "Now I Know",
        artist: "Kaleb J",
        album: "Indonesia Song",
        genre: "R&B",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Now I Know.mp3"
    },

    {
        id: 244,
        title: "Nyaman",
        artist: "Andmesh Kamaleng",
        album: "Andmesh Kamaleng",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-28.jpg",
        audio: "music/Nyaman.mp3"
    },

    {
        id: 245,
        title: "Once Again",
        artist: "Mad Clown & Kim Na Young",
        album: "Descendants of the Sun",
        genre: "OST",
        country: "Korea",
        cover: "images/album-10.jpg",
        audio: "music/Once Again.mp3"
    },

    {
        id: 246,
        title: "One Call",
        artist: "Charlie Puth",
        album: "Charlie Puth",
        genre: "POP",
        country: "English",
        cover: "images/album-26.jpg",
        audio: "music/One Call.mp3"
    },

    {
        id: 247,
        title: "One Day",
        artist: "The Rootless",
        album: "One Piece",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-20.jpg",
        audio: "music/One Day.mp3"
    },

    {
        id: 248,
        title: "One More Time",
        artist: "Tree Bicycle",
        album: "Boys Over Flowers",
        genre: "OST",
        country: "Korea",
        cover: "images/album-13.jpg",
        audio: "music/One More Time.mp3"
    },

    {
        id: 249,
        title: "One Only",
        artist: "Pamungkas",
        album: "Indonesia Song",
        genre: "Acoustic",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/One Only.mp3"
    },

    {
        id: 250,
        title: "Only You",
        artist: "Yang Da-il",
        album: "Hotel Del Luna",
        genre: "OST",
        country: "Korea",
        cover: "images/album-14.jpg",
        audio: "music/Only You.mp3"
    },
    
    {
        id: 251,
        title: "Ordinary",
        artist: "Alex Warren",
        album: "English Song",
        genre: "Acoustic",
        country: "English",
        cover: "images/album-5.jpg",
        audio: "music/Ordinary.mp3"
    },

    {
        id: 252,
        title: "P.S. I Love You",
        artist: "Paul Partohap",
        album: "Indonesia Song",
        genre: "R&B",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/P.S. I Love You.mp3"
    },

    {
        id: 253,
        title: "PAINT",
        artist: "I Don't Like Mondays.",
        album: "One Piece",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-20.jpg",
        audio: "music/PAINT.mp3"
    },

    {
        id: 254,
        title: "Pamit",
        artist: "Tulus",
        album: "Indonesia Song",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Pamit.mp3"
    },

    {
        id: 255,
        title: "Peace Sign",
        artist: "Kenshi Yonezu",
        album: "Anime Song",
        genre: "POP",
        country: "Jepang",
        cover: "images/album-6.jpg",
        audio: "music/Peace Sign.mp3"
    },

    {
        id: 256,
        title: "Perfect",
        artist: "Ed Sheeran",
        album: "Ed Sheeran",
        genre: "POP",
        country: "English",
        cover: "images/album-24.jpg",
        audio: "music/Perfect.mp3"
    },

    {
        id: 257,
        title: "Photograph",
        artist: "Ed Sheeran",
        album: "Ed Sheeran",
        genre: "POP",
        country: "English",
        cover: "images/album-24.jpg",
        audio: "music/Photograph.mp3"
    },


    {
        id: 258,
        title: "Pilihan Hatinya",
        artist: "Arvian Dwi",
        album: "Arvian Dwi",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-27.jpg",
        audio: "music/Pilihan Hatinya.mp3"
    },

    {
        id: 259,
        title: "Pudar",
        artist: "Rossa",
        album: "Rossa",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-29.jpg",
        audio: "music/Pudar.mp3"
    },

    {
        id: 260,
        title: "Pupus",
        artist: "Dewa 19 / Hanin Dhiya",
        album: "Acoustic Song",
        genre: "Acoustic",
        country: "Indonesia",
        cover: "images/album-1.jpg",
        audio: "music/Pupus.mp3"
    },

    {
        id: 261,
        title: "Pura Pura Lupa",
        artist: "Mahen",
        album: "Indonesia Song",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Pura Pura Lupa.mp3"
    },

    {
        id: 262,
        title: "Putus Tapi Cinta",
        artist: "Andmesh Kamaleng",
        album: "Andmesh Kamaleng",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-28.jpg",
        audio: "music/Putus Tapi Cinta.mp3"
    },

    {
        id: 263,
        title: "Qián lù",
        artist: "Sal Priadi & Nadin Amizah",
        album: "Pursuit of Jade",
        genre: "OST",
        country: "China",
        cover: "images/album-8.jpg",
        audio: "music/Qián lù.mp3"
    },

    {
        id: 264,
        title: "Ragu",
        artist: "Rizky Febian",
        album: "Rizky Febian",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-23.jpg",
        audio: "music/Ragu.mp3"
    },

    {
        id: 265,
        title: "Rayuan Perempuan Gila",
        artist: "Nadin Amizah",
        album: "Indonesia Song",
        genre: "Acoustic",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Rayuan Perempuan Gila.mp3"
    },

    {
        id: 266,
        title: "Remember",
        artist: "Younha",
        album: "Who Are You: School 2015",
        genre: "OST",
        country: "Korea",
        cover: "images/album-12.jpg",
        audio: "music/Remember.mp3"
    },

    {
        id: 267,
        title: "Remember Me",
        artist: "Gummy",
        album: "Hotel Del Luna",
        genre: "OST",
        country: "Korea",
        cover: "images/album-14.jpg",
        audio: "music/Remember Me.mp3"
    },

    {
        id: 268,
        title: "Resah",
        artist: "Payung Teduh",
        album: "Acoustic Song",
        genre: "Acoustic",
        country: "Indonesia",
        cover: "images/album-1.jpg",
        audio: "music/Resah.mp3"
    },

    {
        id: 269,
        title: "RESISTER",
        artist: "ASCA",
        album: "Sword Art Online: Alicization",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-18.jpg",
        audio: "music/RESISTER.mp3"
    },

    {
        id: 270,
        title: "Return",
        artist: "Wendy",
        album: "Who Are You: School 2015",
        genre: "OST",
        country: "Korea",
        cover: "images/album-12.jpg",
        audio: "music/Return.mp3"
    },

    {
        id: 271,
        title: "Romantic Sunday",
        artist: "Car, the garden",
        album: "Korean Song",
        genre: "Acoustic",
        country: "Korea",
        cover: "images/album-2.jpg",
        audio: "music/Romantic Sunday.mp3"
    },

    {
        id: 272,
        title: "Round and Round",
        artist: "Heize & Han Soo-ji",
        album: "Goblin / Guardian: The Lonely and Great God",
        genre: "OST",
        country: "Korea",
        cover: "images/album-11.jpg",
        audio: "music/Round and Round.mp3"
    },

    {
        id: 273,
        title: "Rumah ke Rumah",
        artist: "Hindia",
        album: "Indonesia Song",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Rumah ke Rumah.mp3"
    },

    {
        id: 274,
        title: "Runtuh",
        artist: "Feby Putri ft. Fiersa Besari",
        album: "Acoustic Song",
        genre: "Acoustic",
        country: "Indonesia",
        cover: "images/album-1.jpg",
        audio: "music/Runtuh.mp3"
    },

    {
        id: 275,
        title: "Sahabat Yang Mencintai",
        artist: "Arvian Dwi",
        album: "Arvian Dwi",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-27.jpg",
        audio: "music/Sahabat Yang Mencintai.mp3"
    },

    {
        id: 276,
        title: "Salah Apa Aku",
        artist: "Ilir 7",
        album: "Indonesia Song",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Salah Apa Aku.mp3"
    },

    {
        id: 277,
        title: "Same Day",
        artist: "Kim Bo-hyung",
        album: "K2",
        genre: "OST",
        country: "Korea",
        cover: "images/album-15.jpg",
        audio: "music/Same Day.mp3"
    },

    {
        id: 278,
        title: "Sampai Jadi Debu",
        artist: "Banda Neira",
        album: "Indonesia Song",
        genre: "Acoustic",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Sampai Jadi Debu.mp3"
    },

    {
        id: 279,
        title: "Sang Dewi",
        artist: "Lyodra & Andi Rianto",
        album: "Indonesia Song",
        genre: "Jazz",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Sang Dewi.mp3"
    },

    {
        id: 280,
        title: "Satu Shaf di Belakangku",
        artist: "Arvian Dwi",
        album: "Arvian Dwi",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-27.jpg",
        audio: "music/Satu Shaf di Belakangku.mp3"
    },

    {
        id: 281,
        title: "Savage Love",
        artist: "Jawsh 685 & Jason Derulo",
        album: "English Song",
        genre: "R&B",
        country: "English",
        cover: "images/album-5.jpg",
        audio: "music/Savage Love.mp3"
    },

    {
        id: 282,
        title: "See You Again",
        artist: "Wiz Khalifa ft. Charlie Puth",
        album: "Charlie Puth",
        genre: "POP",
        country: "English",
        cover: "images/album-26.jpg",
        audio: "music/See You Again.mp3"
    },

    {
        id: 283,
        title: "Señorita",
        artist: "Shawn Mendes & Camila Cabello",
        album: "Shawn Mendes",
        genre: "POP",
        country: "English",
        cover: "images/album-31.jpg",
        audio: "music/Señorita.mp3"
    },

    {
        id: 284,
        title: "Senyumlah",
        artist: "Andmesh Kamaleng",
        album: "Andmesh Kamaleng",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-28.jpg",
        audio: "music/Senyumlah.mp3"
    },

    {
        id: 285,
        title: "Sesakit Inikah ",
        artist: "Ziell Ferdian",
        album: "Ziell Ferdian",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-30.jpg",
        audio: "music/Sesakit Inikah .mp3"
    },

    {
        id: 286,
        title: "Sesi Potret",
        artist: "eńau & Ari Lesmana",
        album: "Indonesia Song",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Sesi Potret.mp3"
    },

    {
        id: 287,
        title: "Seven",
        artist: "Jung Kook ft. Latto",
        album: "Acoustic Song",
        genre: "Acoustic",
        country: "Korea",
        cover: "images/album-1.jpg",
        audio: "music/Seven.mp3"
    },

    {
        id: 288,
        title: "Shan Hu Hai",
        artist: "Zhou Jie Lun & Liang Xin Yi",
        album: "Chines Song",
        genre: "R&B",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Shan Hu Hai.mp3"
    },

    {
        id: 289,
        title: "Shao Nian",
        artist: "Meng Ran",
        album: "Chines Song",
        genre: "POP",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Shao Nian.mp3"
    },

    {
        id: 290,
        title: "Shape of You",
        artist: "Ed Sheeran",
        album: "Ed Sheeran",
        genre: "POP",
        country: "English",
        cover: "images/album-24.jpg",
        audio: "music/Shape of You.mp3"
    },

    {
        id: 291,
        title: "Share the World",
        artist: "Tohoshinki",
        album: "One Piece",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-20.jpg",
        audio: "music/Share the World.mp3"
    },

    {
        id: 292,
        title: "Shi Jie Zhe Me Da Hai Shi Yu Jian Ni",
        artist: "Cheng Xiang",
        album: "Chines Song ",
        genre: "Acoustic",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Shi Jie Zhe Me Da Hai Shi Yu Jian Ni.mp3"
    },

    {
        id: 293,
        title: "Shirogane",
        artist: "LiSA",
        album: "Demon Slayer",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-17.jpg",
        audio: "music/Shirogane.mp3"
    },

    {
        id: 294,
        title: "Shivers",
        artist: "Ed Sheeran",
        album: "Ed Sheeran",
        genre: "POP",
        country: "English",
        cover: "images/album-24.jpg",
        audio: "music/Shivers.mp3"
    },

    {
        id: 295,
        title: "Sial",
        artist: "Mahalini",
        album: "Indonesia Song",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Sial.mp3"
    },

    {
        id: 296,
        title: "Sign",
        artist: "FLOW",
        album: "Naruto Shippuden",
        genre: "Acoustic",
        country: "Anime",
        cover: "images/album-19.jpg",
        audio: "music/Sign.mp3"
    },

    {
        id: 297,
        title: "Silhouette",
        artist: "KANA-BOON",
        album: "Naruto Shippuden",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-19.jpg",
        audio: "music/Silhouette.mp3"
    },

    {
        id: 298,
        title: "Someone You Loved",
        artist: "Lewis Capaldi",
        album: "English Song",
        genre: "POP",
        country: "English",
        cover: "images/album-5.jpg",
        audio: "music/Someone You Loved.mp3"
    },

    {
        id: 299,
        title: "Something Just Like This",
        artist: "The Chainsmokers & Coldplay",
        album: "English Song",
        genre: "POP",
        country: "English",
        cover: "images/album-5.jpg",
        audio: "music/Something Just Like This.mp3"
    },

    {
        id: 300,
        title: "Sometimes",
        artist: "Yoo Sung Eun",
        album: "K2",
        genre: "OST",
        country: "Korea",
        cover: "images/album-15.jpg",
        audio: "music/Sometimes.mp3"
    },

    {
        id: 301,
        title: "Sorry",
        artist: "Justin Bieber",
        album: "Justin Bieber",
        genre: "POP",
        country: "English",
        cover: "images/album-22.jpg",
        audio: "music/Sorry.mp3"
    },

    {
        id: 302,
        title: "SPECIALZ",
        artist: "King Gnu",
        album: "Jujutsu Kaisen",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-21.jpg",
        audio: "music/SPECIALZ.mp3"
    },

    {
        id: 303,
        title: "Stand by Me",
        artist: "SHINee",
        album: "Boys Over Flowers",
        genre: "OST",
        country: "Korea",
        cover: "images/album-13.jpg",
        audio: "music/Stand by Me.mp3"
    },
    {
        id: 304,
        title: "Starboy",
        artist: "The Weeknd ft. Daft Punk",
        album: "English Song",
        genre: "R&B",
        country: "English",
        cover: "images/album-5.jpg",
        audio: "music/Starboy.mp3"
    },

    {
        id: 305,
        title: "Start Over",
        artist: "Gaho",
        album: "Korean Song",
        genre: "POP",
        country: "Korea",
        cover: "images/album-2.jpg",
        audio: "music/Start Over.mp3"
    },


    {
        id: 306,
        title: "Stay",
        artist: "The Kid LAROI & Justin Bieber",
        album: "English Song",
        genre: "R&B",
        country: "English",
        cover: "images/album-5.jpg",
        audio: "music/Stay.mp3"
    },

    {
        id: 307,
        title: "Stay With Me",
        artist: "Chanyeol & Punch",
        album: "Goblin / Guardian: The Lonely and Great God",
        genre: "OST",
        country: "Korea",
        cover: "images/album-11.jpg",
        audio: "music/Stay With Me.mp3"
    },

    {
        id: 308,
        title: "Stitches",
        artist: "Shawn Mendes",
        album: "Shawn Mendes",
        genre: "POP",
        country: "English",
        cover: "images/album-31.jpg",
        audio: "music/Stitches.mp3"
    },

    {
        id: 309,
        title: "Stressed Out",
        artist: "Twenty One Pilots",
        album: "English Song",
        genre: "POP",
        country: "English",
        cover: "images/album-5.jpg",
        audio: "music/Stressed Out.mp3"
    },

    {
        id: 310,
        title: "Sudah Tak Cinta",
        artist: "Ziell Ferdian",
        album: "Ziell Ferdian",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-30.jpg",
        audio: "music/Sudah Tak Cinta.mp3"
    },

    {
        id: 311,
        title: "Sudden Shower",
        artist: "ECLIPSE",
        album: "Korean Song",
        genre: "POP",
        country: "Korea",
        cover: "images/album-2.jpg",
        audio: "music/Sudden Shower.mp3"
    },

    {
        id: 312,
        title: "Surat Cinta Untuk Starla",
        artist: "Virgoun",
        album: "Indonesia Song",
        genre: "Acoustic",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Surat Cinta Untuk Starla.mp3"
    },

    {
        id: 313,
        title: "Sweet Night",
        artist: "V",
        album: "Korean Song",
        genre: "Acoustic",
        country: "Korea",
        cover: "images/album-2.jpg",
        audio: "music/Sweet Night.mp3"
    },

    {
        id: 314,
        title: "Tak Ingin Usai",
        artist: "Keisya Levronka",
        album: "Acoustic Song",
        genre: "Acoustic",
        country: "Indonesia",
        cover: "images/album-1.jpg",
        audio: "music/Tak Ingin Usai.mp3"
    },


    {
        id: 315,
        title: "Tak Lagi Sama",
        artist: "Rizky Febian",
        album: "Rizky Febian",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-23.jpg",
        audio: "music/Tak Lagi Sama.mp3"
    },

    {
        id: 316,
        title: "Tak Sanggup Lagi",
        artist: "Rossa",
        album: "Rossa",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-29.jpg",
        audio: "music/Tak Sanggup Lagi.mp3"
    },

    {
        id: 317,
        title: "Tak Segampang Itu",
        artist: "Anggi Marito",
        album: "Indonesia Song",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/Tak Segampang Itu.mp3"
    },

    {
        id: 318,
        title: "Talk Love",
        artist: "K.Will",
        album: "Descendants of the Sun",
        genre: "OST",
        country: "Korea",
        cover: "images/album-10.jpg",
        audio: "music/Talk Love.mp3"
    },

    {
        id: 319,
        title: "Talking to the Moon",
        artist: "Bruno Mars",
        album: "Bruno Mars",
        genre: "POP",
        country: "English",
        cover: "images/album-25.jpg",
        audio: "music/Talking to the Moon.mp3"
    },


    {
        id: 320,
        title: "Te Bie De Ren",
        artist: "Khalil Fong",
        album: "Chines Song",
        genre: "R&B",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Te Bie De Ren.mp3"
    },


    {
        id: 321,
        title: "Tegar",
        artist: "Rossa",
        album: "Rossa",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-29.jpg",
        audio: "music/Tegar.mp3"
    },

    {
        id: 322,
        title: "Tell Me It's Not a Dream",
        artist: "10CM",
        album: "Queen of Tears",
        genre: "OST",
        country: "Korea",
        cover: "images/album-16.jpg",
        audio: "music/Tell Me It's Not a Dream.mp3"
    },

    {
        id: 323,
        title: "Terlalu Cinta",
        artist: "Rossa",
        album: "Rossa",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-29.jpg",
        audio: "music/Terlalu Cinta.mp3"
    },

    {
        id: 324,
        title: "That's Not How This Works",
        artist: "Charlie Puth ft. Dan + Shay",
        album: "Charlie Puth",
        genre: "POP",
        country: "English",
        cover: "images/album-26.jpg",
        audio: "music/That's Not How This Works.mp3"
    },

    {
        id: 325,
        title: "That's What I Like",
        artist: "Bruno Mars",
        album: "Bruno Mars",
        genre: "R&B",
        country: "English",
        cover: "images/album-25.jpg",
        audio: "music/That's What I Like.mp3"
    },

    {
        id: 326,
        title: "The Hills",
        artist: "The Weeknd",
        album: "English Song",
        genre: "R&B",
        country: "English",
        cover: "images/album-5.jpg",
        audio: "music/The Hills.mp3"
    },

    {
        id: 327,
        title: "The Love You Want",
        artist: "Dylan Wang",
        album: "Meteor Garden",
        genre: "OST",
        country: "China",
        cover: "images/album-9.jpg",
        audio: "music/The Love You Want.mp3"
    },

    {
        id: 328,
        title: "The Reasons of My Smiles",
        artist: "BSS",
        album: "Queen of Tears",
        genre: "OST",
        country: "Korea",
        cover: "images/album-16.jpg",
        audio: "music/The Reasons of My Smiles.mp3"
    },

    {
        id: 329,
        title: "There's Nothing Holdin' Me Back",
        artist: "Shawn Mendes",
        album: "Shawn Mendes",
        genre: "Rock",
        country: "English",
        cover: "images/album-31.jpg",
        audio: "music/There's Nothing Holdin' Me Back.mp3"
    },

    {
        id: 330,
        title: "Thinking Out Loud",
        artist: "Ed Sheeran",
        album: "Ed Sheeran",
        genre: "POP",
        country: "English",
        cover: "images/album-24.jpg",
        audio: "music/Thinking Out Loud.mp3"
    },

    {
        id: 331,
        title: "Through the Night",
        artist: "IU",
        album: "Acoustic Song",
        genre: "Acoustic",
        country: "Korea",
        cover: "images/album-1.jpg",
        audio: "music/Through the Night.mp3"
    },

    {
        id: 332,
        title: "Till the End",
        artist: "ReoNa",
        album: "Sword Art Online: Alicization",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-18.jpg",
        audio: "music/Till the End.mp3"
    },

    {
        id: 333,
        title: "To the Bone",
        artist: "Pamungkas",
        album: "Indonesia Song",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-3.jpg",
        audio: "music/To the Bone.mp3"
    },

    {
        id: 334,
        title: "Treat You Better",
        artist: "Shawn Mendes",
        album: "Shawn Mendes",
        genre: "POP",
        country: "English",
        cover: "images/album-31.jpg",
        audio: "music/Treat You Better.mp3"
    },

    {
        id: 335,
        title: "unlasting",
        artist: "LiSA",
        album: "Sword Art Online: Alicization",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-18.jpg",
        audio: "music/unlasting.mp3"
    },

    {
        id: 336,
        title: "Until I Found You",
        artist: "Stephen Sanchez",
        album: "Acoustic Song",
        genre: "Acoustic",
        country: "English",
        cover: "images/album-1.jpg",
        audio: "music/Until I Found You.mp3"
    },

    {
        id: 337,
        title: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        album: "Bruno Mars",
        genre: "POP",
        country: "English",
        cover: "images/album-25.jpg",
        audio: "music/Uptown Funk.mp3"
    },

    {
        id: 338,
        title: "We All Lie",
        artist: "Ha Jin",
        album: "Korean Song",
        genre: "POP",
        country: "Korea",
        cover: "images/album-2.jpg",
        audio: "music/We All Lie.mp3"
    },

    {
        id: 339,
        title: "We Are!",
        artist: "Hiroshi Kitadani",
        album: "One Piece",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-20.jpg",
        audio: "music/We Are!.mp3"
    },

    {
        id: 340,
        title: "We Don't Talk Anymore",
        artist: "Charlie Puth ft. Selena Gomez",
        album: "Charlie Puth",
        genre: "POP",
        country: "English",
        cover: "images/album-26.jpg",
        audio: "music/We Don't Talk Anymore.mp3"
    },

    {
        id: 341,
        title: "When I Was Your Man",
        artist: "Bruno Mars",
        album: "Bruno Mars",
        genre: "POP",
        country: "English",
        cover: "images/album-25.jpg",
        audio: "music/When I Was Your Man.mp3"
    },

    {
        id: 342,
        title: "Where Our Blue Is",
        artist: "Tatsuya Kitani",
        album: "Jujutsu Kaisen",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-21.jpg",
        audio: "music/Where Our Blue Is.mp3"
    },

    {
        id: 343,
        title: "Who",
        artist: "Jimin",
        album: "Acoustic Song",
        genre: "Acoustic",
        country: "Korea",
        cover: "images/album-1.jpg",
        audio: "music/Who.mp3"
    },

    {
        id: 344,
        title: "Who Are You",
        artist: "Sam Kim",
        album: "Goblin / Guardian: The Lonely and Great God",
        genre: "OST",
        country: "Korea",
        cover: "images/album-11.jpg",
        audio: "music/Who Are You.mp3"
    },

    {
        id: 345,
        title: "With You",
        artist: "Jimin & Ha Sung-woon",
        album: "Korean Song",
        genre: "POP",
        country: "Korea",
        cover: "images/album-2.jpg",
        audio: "music/With You.mp3"
    },

    {
        id: 346,
        title: "Wǒ duì yuánfèn xiǎoxīnyìyì",
        artist: "Xǔ Hèbīn",
        album: "Pursuit of Jade",
        genre: "OST",
        country: "China",
        cover: "images/album-8.jpg",
        audio: "music/Wǒ duì yuánfèn xiǎoxīnyìyì.mp3"
    },

    {
        id: 347,
        title: "Wo Men Lian Ai Ba",
        artist: "Shan Shuo",
        album: "Chines Song",
        genre: "R&B",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Wo Men Lian Ai Ba.mp3"
    },

    {
        id: 348,
        title: "Wu Ji",
        artist: "Xiao Zhan & Wang Yibo",
        album: "Chines Song",
        genre: "POP",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Wu Ji.mp3"
    },

    {
        id: 349,
        title: "Wu Mei Zi Jiang",
        artist: "Li Ronghao",
        album: "Chines Song",
        genre: "Acoustic",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Wu Mei Zi Jiang.mp3"
    },

    {
        id: 350,
        title: "Xi Huan Ni",
        artist: "Beyond",
        album: "Chines Song",
        genre: "R&B",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Xi Huan Ni.mp3"
    },

    {
        id: 351,
        title: "Xiang Nian Ni Xiang Wo",
        artist: "Eric Chou",
        album: "Chines Song",
        genre: "R&B",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Xiang Nian Ni Xiang Wo.mp3"
    },

    {
        id: 352,
        title: "Xiang Qing Tian Xiang Yu Tian",
        artist: "Silence Wang",
        album: "Chines Song",
        genre: "Acoustic",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Xiang Qing Tian Xiang Yu Tian.mp3"
    },

    {
        id: 353,
        title: "Xiao Cheng Xia Tian",
        artist: "LBI",
        album: "Chines Song",
        genre: "POP",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Xiao Cheng Xia Tian.mp3"
    },

    {
        id: 354,
        title: "Xiao Chou",
        artist: "Mao Buyi",
        album: "Chines Song",
        genre: "Acoustic",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Xiao Chou.mp3"
    },

    {
        id: 355,
        title: "Xiao Xing",
        artist: "Hebe Tien",
        album: "Acoustic Song",
        genre: "Acoustic",
        country: "China",
        cover: "images/album-1.jpg",
        audio: "music/Xiao Xing.mp3"
    },

    {
        id: 356,
        title: "Xiao Xing Yun",
        artist: "Tian Fu Zhen",
        album: "Chines Song",
        genre: "R&B",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Xiao Xing Yun.mp3"
    },

    {
        id: 357,
        title: "Xing Chen Da Hai",
        artist: "Huang Xiaoyun",
        album: "Chines Song",
        genre: "POP",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Xing Chen Da Hai.mp3"
    },

    {
        id: 358,
        title: "Yang Kau Siakan",
        artist: "Arvian Dwi",
        album: "Arvian Dwi",
        genre: "POP",
        country: "Indonesia",
        cover: "images/album-27.jpg",
        audio: "music/Yang Kau Siakan.mp3"
    },

    {
        id: 359,
        title: "Yi Han",
        artist: "DinDin",
        album: "Chines Song",
        genre: "R&B",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Yi Han.mp3"
    },

    {
        id: 360,
        title: "Yi Lu Xiang Bei",
        artist: "Zhou Jie Lun",
        album: "Chines Song",
        genre: "R&B",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Yi Lu Xiang Bei.mp3"
    },

    {
        id: 361,
        title: "Yī niàn",
        artist: "Zhāng Zǐníng & Lǐ Xīny",
        album: "Pursuit of Jade",
        genre: "OST",
        country: "China",
        cover: "images/album-8.jpg",
        audio: "music/Yī niàn.mp3"
    },

    {
        id: 362,
        title: "Yi Ran Ai Ni",
        artist: "Wang Leehom",
        album: "Acoustic Song",
        genre: "Acoustic",
        country: "China",
        cover: "images/album-1.jpg",
        audio: "music/Yi Ran Ai Ni.mp3"
    },

    {
        id: 363,
        title: "You Fei",
        artist: "Zhou Shen",
        album: "Chines Song",
        genre: "POP",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/You Fei.mp3"
    },

    {
        id: 364,
        title: "You R",
        artist: "Zhao Lusi",
        album: "Chines Song",
        genre: "POP",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/You R.mp3"
    },

    {
        id: 365,
        title: "Yuan De Yi Ren Xin",
        artist: "Li Xing Liang",
        album: "Chines Song",
        genre: "R&B",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Yuan De Yi Ren Xin.mp3"
    },

    {
        id: 366,
        title: "Yue Liang Dai Biao Wo De Xin",
        artist: "Teresa Teng",
        album: "Acoustic Song",
        genre: "Acoustic",
        country: "China",
        cover: "images/album-1.jpg",
        audio: "music/Yue Liang Dai Biao Wo De Xin.mp3"
    },

    {
        id: 367,
        title: "Zankyou Sanka",
        artist: "Aimer",
        album: "Demon Slayer",
        genre: "Anime",
        country: "Jepang",
        cover: "images/album-17.jpg",
        audio: "music/Zankyou Sanka.mp3"
    },

    {
        id: 368,
        title: "Zenzenzense",
        artist: "RADWIMPS",
        album: "Anime Song",
        genre: "POP",
        country: "Jepang",
        cover: "images/album-6.jpg",
        audio: "music/Zenzenzense.mp3"
    },

    {
        id: 369,
        title: "Zhi Xiang Ba Ni Tou Tou Cang Hao",
        artist: "Silence Wang & Zhao Lusi",
        album: "Chines Song",
        genre: "Acoustic",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Zhi Xiang Ba Ni Tou Tou Cang Hao.mp3"
    },

    {
        id: 370,
        title: "Zhi Zai Jin Ye",
        artist: "Mao Buyi",
        album: "Chines Song",
        genre: "Acoustic",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Zhi Zai Jin Ye.mp3"
    },

    {
        id: 371,
        title: "Zhòng lǐ xún tā qiān bǎi dù",
        artist: "Zhāng Bìchén",
        album: "Pursuit of Jade",
        genre: "OST",
        country: "China",
        cover: "images/album-8.jpg",
        audio: "music/Zhòng lǐ xún tā qiān bǎi dù.mp3"
    },

    {
        id: 372,
        title: "Zhui Guang Zhe",
        artist: "Yoyo Sham",
        album: "Chines Song",
        genre: "Acoustic",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Zhui Guang Zhe.mp3"
    },

    {
        id: 373,
        title: "Zuo Shou Zhi Yue",
        artist: "Sa Dingding",
        album: "Chines Song",
        genre: "POP",
        country: "China",
        cover: "images/album-4.jpg",
        audio: "music/Zuo Shou Zhi Yue.mp3"
    },


];



window.vybeSongs = vybeSongs;
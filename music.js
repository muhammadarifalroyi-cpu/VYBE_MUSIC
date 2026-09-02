/*
=====================================================
VYBE MUSIC SYSTEM
=====================================================

Tugas file:

- Session / Login
- Search
- Genre filter
- Country filter
- Album filter
- Album rendering
- Song rendering
- Music player
- Play / Pause
- Next / Previous
- Progress
- Volume
- Mute
- Shuffle
- Repeat
- Hide / Show songs
- Restore last song
- Restore last position
- Restore player settings
- Favorite synchronization
- Navigation
- Settings
- Logout
- API Playlist

Favorite:
favorite.js

Playlist:
playlist.js

Data lagu:
song.js
=====================================================
*/


document.addEventListener("DOMContentLoaded", function () {

    console.log("VYBE MUSIC SYSTEM AKTIF");


    /*
    =================================================
    SESSION
    =================================================
    */

    if (localStorage.getItem("vybeLogin") !== "true") {

        window.location.href = "index.html";

        return;

    }


    /*
    =================================================
    DATA LAGU
    =================================================
    */

    const songs = Array.isArray(window.vybeSongs)
        ? window.vybeSongs
        : [];


    /*
    =================================================
    PLAYER QUEUE
    =================================================
    */

    let currentSongs = [...songs];

    let currentIndex = -1;


    let currentGenre = "all";

    let currentCountry = "all";

    let currentAlbum = "all";


    /*
    =================================================
    RESTORE PLAYER STATE
    =================================================
    */

    let isShuffle =
        localStorage.getItem("vybeShuffle") === "true";


    let repeatMode =
        localStorage.getItem("vybeRepeat") || "off";


    let lastSongId =
        Number(
            localStorage.getItem("vybeLastSongId")
        ) || null;


    let lastPosition =
        Number(
            localStorage.getItem("vybeLastPosition")
        ) || 0;


    let wasPlaying =
        localStorage.getItem("vybeWasPlaying") === "true";


    let savedVolume =
        Number(
            localStorage.getItem("vybeVolume")
        );


    if (!Number.isFinite(savedVolume)) {

        savedVolume = 0.5;

    }


    savedVolume =
        Math.max(
            0,
            Math.min(
                1,
                savedVolume
            )
        );


    let savedMuted =
        localStorage.getItem("vybeMuted") === "true";


    /*
    =================================================
    ELEMENT
    =================================================
    */

    const songList =
        document.getElementById("songList");


    const albumGrid =
        document.getElementById("albumGrid");


    const searchInput =
        document.getElementById("searchInput");


    const resultCount =
        document.getElementById("resultCount");


    const emptySearch =
        document.getElementById("emptySearch");


    const audio =
        document.getElementById("audioPlayer");


    const playButton =
        document.getElementById("playButton");


    const prevButton =
        document.getElementById("prevButton");


    const nextButton =
        document.getElementById("nextButton");


    const progressBar =
        document.getElementById("progressBar");


    const currentTime =
        document.getElementById("currentTime");


    const duration =
        document.getElementById("duration");


    const playerTitle =
        document.getElementById("playerTitle");


    const playerArtist =
        document.getElementById("playerArtist");


    const playerCover =
        document.getElementById("playerCover");


    const playerPlaceholder =
        document.getElementById(
            "playerCoverPlaceholder"
        );


    const pageTitle =
        document.getElementById("pageTitle");


    const volumeBar =
        document.getElementById("volumeBar");


    const muteButton =
        document.getElementById("muteButton");


    const shuffleButton =
        document.getElementById("shuffleButton");


    const repeatButton =
        document.getElementById("repeatButton");


    const toggleSongsButton =
        document.getElementById(
            "toggleSongsButton"
        );


    const songsSection =
        document.getElementById(
            "songsSection"
        );


    /*
    =================================================
    HELPER
    =================================================
    */

    function getSongById(id) {

        const numericId = Number(id);

        return songs.find(function (song) {

            return Number(song.id) === numericId;

        });

    }


    /*
    =================================================
    FORMAT TIME
    =================================================
    */

    function formatTime(seconds) {

        if (
            !Number.isFinite(seconds) ||
            seconds < 0
        ) {

            return "0:00";

        }


        const minutes =
            Math.floor(seconds / 60);


        const secs =
            Math.floor(seconds % 60);


        return (
            minutes +
            ":" +
            String(secs).padStart(2, "0")
        );

    }


    /*
    =================================================
    SAVE HIDE / SHOW
    =================================================
    */

    function saveSongsVisibility(hidden) {

        localStorage.setItem(
            "vybeSongsHidden",
            String(hidden)
        );

    }


    function restoreSongsVisibility() {

        if (!songList || !toggleSongsButton) {

            return;

        }


        const hidden =
            localStorage.getItem(
                "vybeSongsHidden"
            ) === "true";


        if (hidden) {

            songList.style.display = "none";

            toggleSongsButton.textContent = "Show";

        } else {

            songList.style.display = "";

            toggleSongsButton.textContent = "Hide";

        }

    }


    if (
        toggleSongsButton &&
        songList &&
        songsSection
    ) {

        toggleSongsButton.addEventListener(
            "click",
            function () {

                const currentlyHidden =
                    songList.style.display === "none";


                if (currentlyHidden) {

                    songList.style.display = "";

                    toggleSongsButton.textContent =
                        "Hide";

                    saveSongsVisibility(false);

                } else {

                    songList.style.display = "none";

                    toggleSongsButton.textContent =
                        "Show";

                    saveSongsVisibility(true);

                }

            }
        );

    }


    /*
    =================================================
    SAVE PLAYER SETTINGS
    =================================================
    */

    function savePlayerSettings() {

        localStorage.setItem(
            "vybeShuffle",
            String(isShuffle)
        );


        localStorage.setItem(
            "vybeRepeat",
            repeatMode
        );


        if (audio) {

            localStorage.setItem(
                "vybeVolume",
                String(audio.volume)
            );


            localStorage.setItem(
                "vybeMuted",
                String(audio.muted)
            );

        }

    }


    /*
    =================================================
    SAVE LAST SONG
    =================================================
    */

    function saveLastSong() {

        if (
            !audio ||
            currentSongs.length === 0 ||
            currentIndex < 0 ||
            currentIndex >= currentSongs.length
        ) {

            return;

        }


        const song =
            currentSongs[currentIndex];


        if (!song) {

            return;

        }


        localStorage.setItem(
            "vybeLastSongId",
            String(song.id)
        );


        if (
            Number.isFinite(audio.currentTime)
        ) {

            localStorage.setItem(
                "vybeLastPosition",
                String(audio.currentTime)
            );

        }

    }


    /*
    =================================================
    SAVE PLAY STATE
    =================================================
    */

    function savePlayState(playing) {

        localStorage.setItem(
            "vybeWasPlaying",
            String(playing)
        );

    }


    /*
    =================================================
    SAVE EVERYTHING
    =================================================
    */

    function saveEverything() {

        saveLastSong();

        savePlayerSettings();

        if (audio) {

            savePlayState(
                !audio.paused
            );

        }

    }


    /*
    =================================================
    PLAY BUTTON
    =================================================
    */

    function updatePlayButton(playing) {

        if (!playButton) {

            return;

        }


        playButton.textContent =
            playing
                ? "❚❚"
                : "▶";

    }


    /*
    =================================================
    PLAYER INFORMATION
    =================================================
    */

    function updatePlayerInfo(song) {

        if (!song) {

            return;

        }


        if (playerTitle) {

            playerTitle.textContent =
                song.title ||
                "Unknown Title";

        }


        if (playerArtist) {

            playerArtist.textContent =
                song.artist ||
                "Unknown Artist";

        }


        if (playerCover) {

            playerCover.onerror =
                function () {

                    this.onerror = null;

                    this.src =
                        "images/default-cover.jpg";

                };


            playerCover.src =
                song.cover ||
                "images/default-cover.jpg";


            playerCover.style.display =
                "block";

        }


        if (playerPlaceholder) {

            playerPlaceholder.style.display =
                "none";

        }

    }


    /*
    =================================================
    RENDER SONG
    =================================================
    */

    function renderSongs(list) {

        if (!songList) {

            return;

        }


        songList.innerHTML = "";


        if (
            !Array.isArray(list) ||
            list.length === 0
        ) {

            songList.innerHTML = `

                <div class="empty-state">

                    <h3>Music not found</h3>

                    <p>
                        Coba ubah filter
                        atau pencarian.
                    </p>

                </div>

            `;

            return;

        }


        list.forEach(function (song) {

            const item =
                document.createElement("div");


            item.className =
                "song-item";


            item.dataset.id =
                song.id;


            item.innerHTML = `

                <img
                    src="${
                        song.cover ||
                        "images/default-cover.jpg"
                    }"
                    alt="${
                        song.title ||
                        "Unknown Title"
                    }"
                    onerror="
                        this.onerror=null;
                        this.src='images/default-cover.jpg';
                    "
                >

                <div class="song-main-info">

                    <div class="song-title">
                        ${
                            song.title ||
                            "Unknown Title"
                        }
                    </div>

                    <div class="song-artist">
                        ${
                            song.artist ||
                            "Unknown Artist"
                        }
                    </div>

                </div>

                <div class="song-meta">

                    ${
                        song.genre ||
                        "Unknown"
                    }

                    •

                    ${
                        song.country ||
                        "Unknown"
                    }

                </div>

                <button
                    class="favorite-button"
                    data-id="${song.id}"
                    type="button"
                    title="Add to favorites"
                >
                    ♡
                </button>

            `;


            songList.appendChild(item);

        });


        /*
        Favorite tetap dikelola
        oleh favorite.js
        */

        if (
            typeof window.updateFavoriteButtons ===
            "function"
        ) {

            window.updateFavoriteButtons();

        }

    }


    /*
    =================================================
    RENDER ALBUM
    =================================================
    */

    function renderAlbums(list) {

        if (!albumGrid) {

            return;

        }


        albumGrid.innerHTML = "";


        const albums = [];


        (list || []).forEach(function (song) {

            const albumName =
                song.album ||
                "Unknown Album";


            const exists =
                albums.some(function (album) {

                    return album.name === albumName;

                });


            if (!exists) {

                albums.push({

                    name: albumName,

                    artist:
                        song.artist ||
                        "Unknown Artist",

                    cover:
                        song.cover ||
                        "images/default-cover.jpg"

                });

            }

        });


        albums.forEach(function (album) {

            const card =
                document.createElement("div");


            card.className =
                "album-card";


            card.innerHTML = `

                <div class="album-cover">

                    <img
                        src="${album.cover}"
                        alt="${album.name}"
                        onerror="
                            this.onerror=null;
                            this.src='images/default-cover.jpg';
                        "
                    >

                </div>

                <div class="album-info">

                    <h3>
                        ${album.name}
                    </h3>

                    <p>
                        ${album.artist}
                    </p>

                </div>

            `;


            albumGrid.appendChild(card);

        });

    }


    /*
    =================================================
    ALBUM FILTER
    =================================================
    */

    function createAlbumFilters() {

        const albumFilters =
            document.getElementById(
                "albumFilters"
            );


        if (!albumFilters) {

            return;

        }


        const albums = [
            ...new Set(
                songs
                    .map(function (song) {

                        return song.album;

                    })
                    .filter(function (album) {

                        return (
                            album &&
                            album.trim() !== ""
                        );

                    })
            )
        ];


        albums.sort(function (a, b) {

            return a.localeCompare(b);

        });


        albumFilters.innerHTML = `

            <button
                class="filter-button active"
                data-album="all"
            >
                All
            </button>

        `;


        albums.forEach(function (album) {

            const button =
                document.createElement("button");


            button.className =
                "filter-button";


            button.dataset.album =
                album;


            button.textContent =
                album;


            albumFilters.appendChild(
                button
            );

        });


        albumFilters
            .querySelectorAll(
                ".filter-button"
            )
            .forEach(function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        albumFilters
                            .querySelectorAll(
                                ".filter-button"
                            )
                            .forEach(
                                function (item) {

                                    item.classList.remove(
                                        "active"
                                    );

                                }
                            );


                        button.classList.add(
                            "active"
                        );


                        currentAlbum =
                            button.dataset.album;


                        applyFilters();

                    }
                );

            });

    }


    /*
    =================================================
    APPLY FILTER
    =================================================
    */

    function applyFilters() {

        const search =
            searchInput
                ? searchInput.value
                    .trim()
                    .toLowerCase()
                : "";


        currentSongs =
            songs.filter(function (song) {

                const genre =
                    String(
                        song.genre || ""
                    );


                const country =
                    String(
                        song.country || ""
                    );


                const album =
                    String(
                        song.album || ""
                    );


                const title =
                    String(
                        song.title || ""
                    )
                    .toLowerCase();


                const artist =
                    String(
                        song.artist || ""
                    )
                    .toLowerCase();


                const albumLower =
                    album.toLowerCase();


                const genreMatch =
                    currentGenre === "all" ||
                    genre === currentGenre;


                const countryMatch =
                    currentCountry === "all" ||
                    country === currentCountry;


                const albumMatch =
                    currentAlbum === "all" ||
                    album === currentAlbum;


                const searchMatch =
                    !search ||
                    title.includes(search) ||
                    artist.includes(search) ||
                    albumLower.includes(search);


                return (
                    genreMatch &&
                    countryMatch &&
                    albumMatch &&
                    searchMatch
                );

            });


        renderSongs(currentSongs);

        renderAlbums(currentSongs);


        if (resultCount) {

            resultCount.textContent =
                `${currentSongs.length} songs`;

        }


        if (emptySearch) {

            emptySearch.style.display =
                currentSongs.length === 0
                    ? "block"
                    : "none";

        }


        /*
        Jika lagu sedang dimainkan
        dan masih ada di filter,
        pertahankan index.
        */

        if (audio && audio.src) {

            const playingId =
                Number(
                    localStorage.getItem(
                        "vybeLastSongId"
                    )
                );


            const newIndex =
                currentSongs.findIndex(
                    function (song) {

                        return (
                            Number(song.id) ===
                            playingId
                        );

                    }
                );


            if (newIndex >= 0) {

                currentIndex =
                    newIndex;

            }

        }

    }


    /*
    =================================================
    GENRE FILTER
    =================================================
    */

    document
        .querySelectorAll("[data-genre]")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    document
                        .querySelectorAll(
                            "[data-genre]"
                        )
                        .forEach(function (item) {

                            item.classList.remove(
                                "active"
                            );

                        });


                    button.classList.add(
                        "active"
                    );


                    currentGenre =
                        button.dataset.genre;


                    applyFilters();

                }
            );

        });


    /*
    =================================================
    COUNTRY FILTER
    =================================================
    */

    document
        .querySelectorAll("[data-country]")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    document
                        .querySelectorAll(
                            "[data-country]"
                        )
                        .forEach(function (item) {

                            item.classList.remove(
                                "active"
                            );

                        });


                    button.classList.add(
                        "active"
                    );


                    currentCountry =
                        button.dataset.country;


                    applyFilters();

                }
            );

        });


    /*
    =================================================
    SEARCH
    =================================================
    */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            applyFilters
        );

    }


    /*
    =================================================
    PLAY SONG
    =================================================
    */

    function playSongById(
        id,
        restorePosition = false
    ) {

        const song =
            getSongById(id);


        if (!song) {

            console.warn(
                "Lagu tidak ditemukan:",
                id
            );

            return;

        }


        /*
        Cari lagu dalam daftar saat ini.
        */

        let index =
            currentSongs.findIndex(
                function (item) {

                    return (
                        Number(item.id) ===
                        Number(song.id)
                    );

                }
            );


        /*
        Jika lagu tidak ada karena
        filter sedang aktif,
        gunakan semua lagu sebagai queue.
        */

        if (index < 0) {

            currentSongs =
                [...songs];


            index =
                currentSongs.findIndex(
                    function (item) {

                        return (
                            Number(item.id) ===
                            Number(song.id)
                        );

                    }
                );

        }


        currentIndex =
            index;


        updatePlayerInfo(song);


        if (!audio) {

            return;

        }


        if (!song.audio) {

            console.warn(
                "File audio tidak tersedia:",
                song.title
            );


            audio.pause();

            audio.removeAttribute("src");

            audio.load();

            updatePlayButton(false);

            savePlayState(false);

            return;

        }


        const newSrc =
            new URL(
                song.audio,
                window.location.href
            ).href;


        const currentSrc =
            audio.src;


        /*
        Lagu berbeda.
        */

        if (currentSrc !== newSrc) {

            audio.src =
                song.audio;

            audio.load();

        }


        /*
        Volume dan mute.
        */

        audio.volume =
            savedVolume;


        audio.muted =
            savedMuted;


        /*
        Restore posisi.
        */

        if (restorePosition) {

            const position =
                Number(lastPosition);


            if (
                Number.isFinite(position) &&
                position > 0
            ) {

                const restoreHandler =
                    function () {

                        if (
                            Number.isFinite(
                                audio.duration
                            ) &&
                            audio.duration > 0
                        ) {

                            audio.currentTime =
                                Math.min(
                                    position,
                                    audio.duration
                                );

                        }


                        audio.removeEventListener(
                            "loadedmetadata",
                            restoreHandler
                        );

                    };


                audio.addEventListener(
                    "loadedmetadata",
                    restoreHandler
                );

            }

        } else {

            lastPosition = 0;


            localStorage.setItem(
                "vybeLastPosition",
                "0"
            );

        }


        /*
        Simpan lagu sebelum play.
        */

        localStorage.setItem(
            "vybeLastSongId",
            String(song.id)
        );


        /*
        Mainkan lagu.
        */

        audio.play()
            .then(function () {

                updatePlayButton(true);

                savePlayState(true);

                saveLastSong();

            })
            .catch(function (error) {

                console.warn(
                    "Browser memblokir autoplay:",
                    error
                );


                updatePlayButton(false);

                /*
                Jangan mengubah state
                menjadi true jika autoplay
                ditolak browser.
                */

            });

    }


    /*
    =================================================
    PUBLIC PLAY API
    =================================================
    */

    window.playSongById =
        playSongById;


    /*
    =================================================
    CLICK SONG
    =================================================
    */

    document.addEventListener(
        "click",
        function (event) {

            const songItem =
                event.target.closest(
                    ".song-item"
                );


            if (!songItem) {

                return;

            }


            /*
            Favorite ditangani
            favorite.js.
            */

            if (
                event.target.closest(
                    ".favorite-button"
                )
            ) {

                return;

            }


            /*
            Jangan play jika klik
            tombol lain.
            */

            if (
                event.target.closest(
                    "button"
                )
            ) {

                return;

            }


            const id =
                Number(
                    songItem.dataset.id
                );


            playSongById(id);

        }
    );


    /*
    =================================================
    PLAY / PAUSE
    =================================================
    */

    function togglePlay() {

        if (!audio) {

            return;

        }


        /*
        Belum ada lagu.
        */

        if (!audio.src) {

            if (currentSongs.length > 0) {

                playSongById(
                    currentSongs[0].id
                );

            }

            return;

        }


        if (audio.paused) {

            audio.play()
                .then(function () {

                    updatePlayButton(true);

                    savePlayState(true);

                })
                .catch(function (error) {

                    console.warn(
                        "Audio gagal diputar:",
                        error
                    );

                });

        } else {

            audio.pause();

        }

    }


    if (playButton) {

        playButton.addEventListener(
            "click",
            togglePlay
        );

    }


    /*
    =================================================
    VOLUME
    =================================================
    */

    function updateVolumeUI() {

        if (!audio) {

            return;

        }


        if (volumeBar) {

            volumeBar.value =
                audio.volume * 100;

        }


        updateMuteButton();

    }


    function setVolume(value) {

        if (!audio) {

            return;

        }


        let volume =
            Number(value);


        if (!Number.isFinite(volume)) {

            volume = 50;

        }


        volume =
            Math.max(
                0,
                Math.min(
                    100,
                    volume
                )
            );


        audio.volume =
            volume / 100;


        savedVolume =
            audio.volume;


        if (audio.volume > 0) {

            audio.muted = false;

            savedMuted = false;

        }


        localStorage.setItem(
            "vybeVolume",
            String(savedVolume)
        );


        localStorage.setItem(
            "vybeMuted",
            String(audio.muted)
        );


        updateVolumeUI();

    }


    if (volumeBar) {

        volumeBar.value =
            savedVolume * 100;


        volumeBar.addEventListener(
            "input",
            function () {

                setVolume(
                    volumeBar.value
                );

            }
        );

    }


    /*
    =================================================
    MUTE
    =================================================
    */

    function updateMuteButton() {

        if (!muteButton) {

            return;

        }


        const muted =
            !audio ||
            audio.muted ||
            audio.volume === 0;


        muteButton.textContent =
            muted
                ? "🔇"
                : "🔊";


        muteButton.title =
            muted
                ? "Unmute"
                : "Mute";


        muteButton.classList.toggle(
            "active",
            muted
        );

    }


    function toggleMute() {

        if (!audio) {

            return;

        }


        if (
            audio.muted ||
            audio.volume === 0
        ) {

            audio.muted = false;


            if (audio.volume === 0) {

                audio.volume =
                    savedVolume > 0
                        ? savedVolume
                        : 0.5;

            }


            savedMuted = false;

        } else {

            savedVolume =
                audio.volume;


            audio.muted = true;

            savedMuted = true;

        }


        localStorage.setItem(
            "vybeVolume",
            String(savedVolume)
        );


        localStorage.setItem(
            "vybeMuted",
            String(savedMuted)
        );


        updateVolumeUI();

    }


    if (muteButton) {

        muteButton.addEventListener(
            "click",
            toggleMute
        );

    }


    /*
    =================================================
    SHUFFLE
    =================================================
    */

    function updateShuffleButton() {

        if (!shuffleButton) {

            return;

        }


        shuffleButton.classList.toggle(
            "active",
            isShuffle
        );


        shuffleButton.textContent =
            "🔀";


        shuffleButton.title =
            isShuffle
                ? "Shuffle: ON"
                : "Shuffle: OFF";

    }


    function toggleShuffle() {

        isShuffle =
            !isShuffle;


        localStorage.setItem(
            "vybeShuffle",
            String(isShuffle)
        );


        updateShuffleButton();

    }


    if (shuffleButton) {

        shuffleButton.addEventListener(
            "click",
            toggleShuffle
        );

    }


    /*
    =================================================
    REPEAT
    =================================================
    */

    function updateRepeatButton() {

        if (!repeatButton) {

            return;

        }


        repeatButton.classList.toggle(
            "active",
            repeatMode !== "off"
        );


        if (repeatMode === "one") {

            repeatButton.textContent =
                "🔂";


            repeatButton.title =
                "Repeat: One";

        } else if (
            repeatMode === "all"
        ) {

            repeatButton.textContent =
                "🔁";


            repeatButton.title =
                "Repeat: All";

        } else {

            repeatButton.textContent =
                "🔁";


            repeatButton.title =
                "Repeat: Off";

        }

    }


    function toggleRepeat() {

        if (repeatMode === "off") {

            repeatMode = "all";

        } else if (
            repeatMode === "all"
        ) {

            repeatMode = "one";

        } else {

            repeatMode = "off";

        }


        localStorage.setItem(
            "vybeRepeat",
            repeatMode
        );


        updateRepeatButton();

    }


    if (repeatButton) {

        repeatButton.addEventListener(
            "click",
            toggleRepeat
        );

    }


    /*
    =================================================
    RANDOM SONG
    =================================================
    */

    function playRandomSong() {

        if (
            currentSongs.length === 0
        ) {

            return;

        }


        if (
            currentSongs.length === 1
        ) {

            playSongById(
                currentSongs[0].id
            );

            return;

        }


        let randomIndex;


        do {

            randomIndex =
                Math.floor(
                    Math.random() *
                    currentSongs.length
                );

        } while (
            randomIndex === currentIndex
        );


        currentIndex =
            randomIndex;


        playSongById(
            currentSongs[currentIndex].id
        );

    }


    /*
    =================================================
    NEXT
    =================================================
    */

    function playNext() {

        if (
            currentSongs.length === 0
        ) {

            return;

        }


        if (isShuffle) {

            playRandomSong();

            return;

        }


        if (currentIndex < 0) {

            currentIndex = 0;

        } else {

            currentIndex++;

        }


        if (
            currentIndex >=
            currentSongs.length
        ) {

            if (repeatMode === "all") {

                currentIndex = 0;

            } else {

                currentIndex =
                    currentSongs.length - 1;


                updatePlayButton(false);

                savePlayState(false);

                saveLastSong();

                return;

            }

        }


        playSongById(
            currentSongs[currentIndex].id
        );

    }


    /*
    =================================================
    PREVIOUS
    =================================================
    */

    function playPrevious() {

        if (
            currentSongs.length === 0
        ) {

            return;

        }


        /*
        Jika sudah berjalan > 3 detik,
        kembali ke awal lagu.
        */

        if (
            audio &&
            audio.currentTime > 3
        ) {

            audio.currentTime = 0;

            saveLastSong();

            return;

        }


        currentIndex--;


        if (currentIndex < 0) {

            if (repeatMode === "all") {

                currentIndex =
                    currentSongs.length - 1;

            } else {

                currentIndex = 0;

            }

        }


        playSongById(
            currentSongs[currentIndex].id
        );

    }


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            playNext
        );

    }


    if (prevButton) {

        prevButton.addEventListener(
            "click",
            playPrevious
        );

    }


    /*
    =================================================
    PROGRESS BAR
    =================================================
    */

    if (progressBar) {

        progressBar.addEventListener(
            "input",
            function () {

                if (
                    !audio ||
                    !Number.isFinite(
                        audio.duration
                    ) ||
                    audio.duration <= 0
                ) {

                    return;

                }


                audio.currentTime =
                    (
                        Number(
                            progressBar.value
                        ) / 100
                    ) *
                    audio.duration;


                saveLastSong();

            }
        );

    }


    /*
    =================================================
    AUDIO EVENTS
    =================================================
    */

    if (audio) {

        audio.volume =
            savedVolume;


        audio.muted =
            savedMuted;


        updateVolumeUI();


        /*
        PLAY
        */

        audio.addEventListener(
            "play",
            function () {

                updatePlayButton(true);

                savePlayState(true);

            }
        );


        /*
        PAUSE
        */

        audio.addEventListener(
            "pause",
            function () {

                updatePlayButton(false);

                savePlayState(false);

                saveLastSong();

            }
        );


        /*
        TIME UPDATE
        */

        let lastSavedSecond = -1;


        audio.addEventListener(
            "timeupdate",
            function () {

                if (
                    !Number.isFinite(
                        audio.duration
                    ) ||
                    audio.duration <= 0
                ) {

                    return;

                }


                const percent =
                    (
                        audio.currentTime /
                        audio.duration
                    ) * 100;


                if (progressBar) {

                    progressBar.value =
                        percent;

                }


                if (currentTime) {

                    currentTime.textContent =
                        formatTime(
                            audio.currentTime
                        );

                }


                /*
                Simpan posisi setiap
                5 detik.
                */

                const second =
                    Math.floor(
                        audio.currentTime
                    );


                if (
                    second > 0 &&
                    second % 5 === 0 &&
                    second !== lastSavedSecond
                ) {

                    lastSavedSecond =
                        second;


                    saveLastSong();

                }

            }
        );


        /*
        LOADED METADATA
        */

        audio.addEventListener(
            "loadedmetadata",
            function () {

                if (duration) {

                    duration.textContent =
                        formatTime(
                            audio.duration
                        );

                }


                updateVolumeUI();

            }
        );


        /*
        ENDED
        */

        audio.addEventListener(
            "ended",
            handleSongEnded
        );


        /*
        ERROR
        */

        audio.addEventListener(
            "error",
            function () {

                console.warn(
                    "File audio tidak dapat dibaca:",
                    audio.src
                );


                updatePlayButton(false);

                savePlayState(false);

            }
        );

    }


    /*
    =================================================
    SONG ENDED
    =================================================
    */

    function handleSongEnded() {

        /*
        REPEAT ONE
        */

        if (repeatMode === "one") {

            if (audio) {

                audio.currentTime = 0;


                audio.play()
                    .then(function () {

                        updatePlayButton(true);

                        savePlayState(true);

                    })
                    .catch(function (error) {

                        console.warn(
                            "Repeat gagal:",
                            error
                        );

                        updatePlayButton(false);

                    });

            }


            return;

        }


        /*
        SHUFFLE
        */

        if (isShuffle) {

            playRandomSong();

            return;

        }


        /*
        NEXT SONG
        */

        if (
            currentIndex <
            currentSongs.length - 1
        ) {

            currentIndex++;


            playSongById(
                currentSongs[currentIndex].id
            );


            return;

        }


        /*
        REPEAT ALL
        */

        if (repeatMode === "all") {

            currentIndex = 0;


            playSongById(
                currentSongs[0].id
            );


            return;

        }


        /*
        REPEAT OFF
        */

        updatePlayButton(false);

        savePlayState(false);

        saveLastSong();

    }


    /*
    =================================================
    FAVORITE SYNC
    =================================================
    */

    window.addEventListener(
        "storage",
        function (event) {

            if (
                event.key ===
                "vybeFavorites"
            ) {

                if (
                    typeof window.renderFavorites ===
                    "function"
                ) {

                    window.renderFavorites();

                }


                if (
                    typeof window.updateFavoriteButtons ===
                    "function"
                ) {

                    window.updateFavoriteButtons();

                }

            }

        }
    );


    /*
    =================================================
    NAVIGATION
    =================================================
    */

    document
        .querySelectorAll(".nav-item")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    document
                        .querySelectorAll(
                            ".nav-item"
                        )
                        .forEach(function (item) {

                            item.classList.remove(
                                "active"
                            );

                        });


                    button.classList.add(
                        "active"
                    );


                    const section =
                        button.dataset.section;


                    if (pageTitle) {

                        const titles = {

                            home:
                                "Discover Your Vibe",

                            songs:
                                "All Songs",

                            favorites:
                                "Your Favorites",

                            playlists:
                                "Your Playlists"

                        };


                        pageTitle.textContent =
                            titles[section] ||
                            "VYBE MUSIC";

                    }


                    const target =
                        document.getElementById(
                            section === "home"
                                ? "homeSection"
                                : section + "Section"
                        );


                    if (target) {

                        target.scrollIntoView({

                            behavior: "smooth"

                        });

                    }


                    /*
                    Refresh Favorite
                    */

                    if (
                        section ===
                        "favorites"
                    ) {

                        if (
                            typeof window.renderFavorites ===
                            "function"
                        ) {

                            window.renderFavorites();

                        }

                    }


                    /*
                    Refresh Playlist
                    */

                    if (
                        section ===
                        "playlists"
                    ) {

                        if (
                            typeof window.renderPlaylists ===
                            "function"
                        ) {

                            window.renderPlaylists();

                        }

                    }

                }
            );

        });


    /*
    =================================================
    EXPLORE BUTTON
    =================================================
    */

    const exploreButton =
        document.getElementById(
            "exploreButton"
        );


    if (exploreButton) {

        exploreButton.addEventListener(
            "click",
            function () {

                const target =
                    document.getElementById(
                        "songsSection"
                    );


                if (target) {

                    target.scrollIntoView({

                        behavior: "smooth"

                    });

                }

            }
        );

    }


    /*
    =================================================
    SETTINGS
    =================================================
    */

    const settingsButton =
        document.getElementById(
            "settingsButton"
        );


    const settingsModal =
        document.getElementById(
            "settingsModal"
        );


    const closeSettingsModal =
        document.getElementById(
            "closeSettingsModal"
        );


    function openSettings() {

        if (!settingsModal) {

            return;

        }


        settingsModal.classList.add(
            "show"
        );

    }


    function closeSettings() {

        if (!settingsModal) {

            return;

        }


        settingsModal.classList.remove(
            "show"
        );

    }


    if (settingsButton) {

        settingsButton.addEventListener(
            "click",
            openSettings
        );

    }


    if (closeSettingsModal) {

        closeSettingsModal.addEventListener(
            "click",
            closeSettings
        );

    }


    if (settingsModal) {

        settingsModal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target ===
                    settingsModal
                ) {

                    closeSettings();

                }

            }
        );

    }


    /*
    =================================================
    LOGOUT
    =================================================
    */

    const logoutButton =
        document.getElementById(
            "logoutButton"
        );


    if (logoutButton) {

        logoutButton.addEventListener(
            "click",
            function () {

                /*
                Simpan seluruh state
                sebelum logout.
                */

                saveEverything();


                /*
                Hentikan audio.
                */

                if (audio) {

                    audio.pause();

                    audio.removeAttribute(
                        "src"
                    );

                    audio.load();

                }


                /*
                Hapus session login saja.

                Favorite / playlist /
                player state TIDAK dihapus.
                */

                localStorage.removeItem(
                    "vybeLogin"
                );


                localStorage.removeItem(
                    "vybeUsername"
                );


                window.location.href =
                    "index.html";

            }
        );

    }


    /*
    =================================================
    RESTORE LAST SONG
    =================================================
    */

    function restoreLastSong() {

        if (
            !lastSongId
        ) {

            updatePlayButton(false);

            return;

        }


        const song =
            getSongById(lastSongId);


        if (!song) {

            localStorage.removeItem(
                "vybeLastSongId"
            );


            localStorage.removeItem(
                "vybeLastPosition"
            );


            localStorage.removeItem(
                "vybeWasPlaying"
            );


            return;

        }


        /*
        Cari lagu dalam current queue.
        */

        currentIndex =
            currentSongs.findIndex(
                function (item) {

                    return (
                        Number(item.id) ===
                        Number(lastSongId)
                    );

                }
            );


        /*
        Jika tidak ada karena filter,
        gunakan semua lagu.
        */

        if (currentIndex < 0) {

            currentSongs =
                [...songs];


            currentIndex =
                currentSongs.findIndex(
                    function (item) {

                        return (
                            Number(item.id) ===
                            Number(lastSongId)
                        );

                    }
                );

        }


        updatePlayerInfo(song);


        if (
            !audio ||
            !song.audio
        ) {

            updatePlayButton(false);

            return;

        }


        audio.src =
            song.audio;


        audio.volume =
            savedVolume;


        audio.muted =
            savedMuted;


        audio.load();


        /*
        Restore posisi dan status play.
        */

        const restoreHandler =
            function () {

                if (
                    Number.isFinite(
                        audio.duration
                    ) &&
                    audio.duration > 0
                ) {

                    if (
                        lastPosition > 0
                    ) {

                        audio.currentTime =
                            Math.min(
                                lastPosition,
                                audio.duration
                            );

                    }

                }


                audio.removeEventListener(
                    "loadedmetadata",
                    restoreHandler
                );


                /*
                Jika sebelum refresh
                lagu sedang PLAY,
                coba lanjutkan.
                */

                if (wasPlaying) {

                    audio.play()
                        .then(function () {

                            updatePlayButton(true);

                            savePlayState(true);

                        })
                        .catch(function (error) {

                            /*
                            Chrome/Edge/Safari
                            mungkin memblokir
                            autoplay.

                            Lagu tetap di posisi
                            terakhir dan user
                            cukup tekan Play.
                            */

                            console.warn(
                                "Autoplay diblokir browser:",
                                error
                            );


                            updatePlayButton(false);

                        });

                } else {

                    updatePlayButton(false);

                }

            };


        audio.addEventListener(
            "loadedmetadata",
            restoreHandler
        );

    }


    /*
    =================================================
    SETTINGS VOLUME
    =================================================
    */

    function updateSettingsVolume() {

        const settingsVolume =
            document.getElementById(
                "settingsVolume"
            );


        if (
            settingsVolume &&
            audio
        ) {

            settingsVolume.value =
                audio.volume * 100;

        }

    }


    /*
    =================================================
    PUBLIC API
    =================================================
    */

    window.applyMusicFilters =
        applyFilters;


    window.playNextSong =
        playNext;


    window.playPreviousSong =
        playPrevious;


    window.toggleMusicPlay =
        togglePlay;


    window.setMusicVolume =
        setVolume;


    window.updateMusicVolume =
        updateVolumeUI;


    window.saveMusicState =
        saveEverything;


    /*
    =================================================
    INITIALIZE
    =================================================
    */

    restoreSongsVisibility();


    createAlbumFilters();


    applyFilters();


    updateShuffleButton();


    updateRepeatButton();


    if (audio) {

        audio.volume =
            savedVolume;


        audio.muted =
            savedMuted;


        updateVolumeUI();

        updateSettingsVolume();

    }


    /*
    Favorite
    */

    if (
        typeof window.renderFavorites ===
        "function"
    ) {

        window.renderFavorites();

    }


    if (
        typeof window.updateFavoriteButtons ===
        "function"
    ) {

        window.updateFavoriteButtons();

    }


    /*
    Playlist
    */

    if (
        typeof window.renderPlaylists ===
        "function"
    ) {

        window.renderPlaylists();

    }


    /*
    Restore lagu terakhir
    */

    restoreLastSong();


    /*
    Simpan state ketika
    halaman akan ditinggalkan.
    */

    window.addEventListener(
        "beforeunload",
        function () {

            saveEverything();

        }
    );


    /*
    Simpan state ketika
    tab berpindah ke background.
    */

    document.addEventListener(
        "visibilitychange",
        function () {

            if (
                document.visibilityState ===
                "hidden"
            ) {

                saveEverything();

            }

        }
    );


    console.log(
        "VYBE MUSIC PLAYER SIAP"
    );

});
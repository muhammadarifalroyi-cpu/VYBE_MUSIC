document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "VYBE PLAYLIST SYSTEM AKTIF"
        );


        /*
        =====================================================
        PLAYLIST DATA
        =====================================================
        */

        let playlists =
            JSON.parse(
                localStorage.getItem(
                    "vybePlaylists"
                )
            ) || [];


        const songs =
            window.vybeSongs || [];


        /*
        =====================================================
        ELEMENTS
        =====================================================
        */

        const modal =
            document.getElementById(
                "playlistModal"
            );

        const createButton =
            document.getElementById(
                "createPlaylistButton"
            );

        const featureButton =
            document.getElementById(
                "featurePlaylistButton"
            );

        const closeButton =
            document.getElementById(
                "closePlaylistModal"
            );

        const saveButton =
            document.getElementById(
                "savePlaylistButton"
            );

        const nameInput =
            document.getElementById(
                "playlistNameInput"
            );

        const descriptionInput =
            document.getElementById(
                "playlistDescriptionInput"
            );

        const grid =
            document.getElementById(
                "playlistGrid"
            );


        /*
        =====================================================
        SAVE PLAYLISTS
        =====================================================
        */

        function savePlaylists() {

            localStorage.setItem(
                "vybePlaylists",
                JSON.stringify(
                    playlists
                )
            );

        }


        /*
        =====================================================
        OPEN CREATE PLAYLIST MODAL
        =====================================================
        */

        function openModal() {

            if (!modal) {
                return;
            }

            modal.classList.add(
                "show"
            );


            if (nameInput) {

                setTimeout(
                    function () {

                        nameInput.focus();

                    },
                    100
                );

            }

        }


        /*
        =====================================================
        CLOSE CREATE PLAYLIST MODAL
        =====================================================
        */

        function closeModal() {

            if (!modal) {
                return;
            }

            modal.classList.remove(
                "show"
            );

        }


        /*
        =====================================================
        CLEAR FORM
        =====================================================
        */

        function clearForm() {

            if (nameInput) {

                nameInput.value =
                    "";

            }


            if (descriptionInput) {

                descriptionInput.value =
                    "";

            }

        }


        /*
        =====================================================
        CREATE PLAYLIST
        =====================================================
        */

        function createPlaylist() {

            const name =
                nameInput
                    ? nameInput.value.trim()
                    : "";


            const description =
                descriptionInput
                    ? descriptionInput.value.trim()
                    : "";


            if (!name) {

                alert(
                    "Masukkan nama playlist."
                );


                if (nameInput) {

                    nameInput.focus();

                }

                return;

            }


            const playlist = {

                id:
                    Date.now(),

                name:
                    name,

                description:
                    description,

                songs:
                    [],

                date:
                    new Date()
                        .toLocaleDateString(
                            "id-ID"
                        )

            };


            playlists.push(
                playlist
            );


            savePlaylists();

            renderPlaylists();

            clearForm();

            closeModal();


            console.log(
                "Playlist dibuat:",
                playlist.name
            );

        }


        /*
        =====================================================
        GET FIRST SONG
        =====================================================
        */

        function getFirstSong(
            playlist
        ) {

            if (
                !playlist ||
                !Array.isArray(
                    playlist.songs
                ) ||
                playlist.songs.length === 0
            ) {

                return null;

            }


            return (
                songs.find(
                    function (song) {

                        return (
                            Number(song.id) ===
                            Number(
                                playlist.songs[0]
                            )
                        );

                    }
                ) || null
            );

        }


        /*
        =====================================================
        GET PLAYLIST COVER
        =====================================================
        */

        function getPlaylistCover(
            playlist
        ) {

            const firstSong =
                getFirstSong(
                    playlist
                );


            if (
                firstSong &&
                firstSong.cover
            ) {

                return firstSong.cover;

            }


            return "";

        }


        /*
        =====================================================
        RENDER PLAYLISTS
        =====================================================
        */

        function renderPlaylists() {

            if (!grid) {
                return;
            }


            /*
            NORMALIZE
            */

            playlists.forEach(
                function (playlist) {

                    if (
                        !Array.isArray(
                            playlist.songs
                        )
                    ) {

                        playlist.songs = [];

                    }

                }
            );


            /*
            EMPTY
            */

            if (
                playlists.length === 0
            ) {

                grid.innerHTML = `

                    <div class="empty-playlist">

                        <div class="empty-playlist-icon">
                            ♫
                        </div>

                        <h3>
                            No playlist yet
                        </h3>

                        <p>
                            Buat playlist pertama
                            kamu dan mulai kumpulkan
                            lagu favorit.
                        </p>

                        <button
                            class="create-playlist-button"
                            id="emptyCreatePlaylist"
                            type="button"
                        >
                            + Create Playlist
                        </button>

                    </div>

                `;

                return;

            }


            grid.innerHTML =
                "";


            /*
            LOOP PLAYLIST
            */

            playlists.forEach(
                function (playlist) {

                    const card =
                        document.createElement(
                            "div"
                        );


                    card.className =
                        "playlist-card";


                    card.dataset.id =
                        playlist.id;


                    const playlistCover =
                        getPlaylistCover(
                            playlist
                        );


                    card.innerHTML = `

                        <div
                            class="playlist-cover"
                            data-open-playlist="${playlist.id}"
                            ${
                                playlistCover
                                    ? `
                                        style="
                                            background-image:
                                            url('${playlistCover}');
                                            background-size:cover;
                                            background-position:center;
                                        "
                                      `
                                    : ""
                            }
                        >

                            ${
                                playlistCover
                                    ? ""
                                    : `
                                        <div class="playlist-cover-placeholder">
                                            ♫
                                        </div>
                                    `
                            }

                        </div>


                        <div
                            class="playlist-info"
                            data-open-playlist="${playlist.id}"
                        >

                            <h3>
                                ${
                                    playlist.name ||
                                    "Untitled Playlist"
                                }
                            </h3>


                            <p>
                                ${
                                    playlist.description ||
                                    "Your personal playlist"
                                }
                            </p>


                            <div class="playlist-meta">

                                <span>
                                    ♫
                                    ${
                                        playlist.songs.length
                                    }
                                    songs
                                </span>


                                <span>
                                    ${
                                        playlist.date ||
                                        ""
                                    }
                                </span>

                            </div>

                        </div>


                        <button
                            class="playlist-add-song"
                            data-add-song="${playlist.id}"
                            type="button"
                            title="Add songs"
                        >
                            + Add Songs
                        </button>


                        <button
                            class="playlist-menu"
                            data-delete="${playlist.id}"
                            type="button"
                            title="Delete playlist"
                        >
                            ×
                        </button>

                    `;


                    grid.appendChild(
                        card
                    );

                }
            );

        }


        /*
        =====================================================
        ADD SONG TO PLAYLIST
        =====================================================
        */

        function addSongToPlaylist(
            songId,
            playlistId
        ) {

            const playlist =
                playlists.find(
                    function (item) {

                        return (
                            Number(item.id) ===
                            Number(playlistId)
                        );

                    }
                );


            if (!playlist) {

                alert(
                    "Playlist tidak ditemukan."
                );

                return false;

            }


            if (
                !Array.isArray(
                    playlist.songs
                )
            ) {

                playlist.songs = [];

            }


            const alreadyExists =
                playlist.songs.some(
                    function (id) {

                        return (
                            Number(id) ===
                            Number(songId)
                        );

                    }
                );


            if (alreadyExists) {

                return false;

            }


            const song =
                songs.find(
                    function (item) {

                        return (
                            Number(item.id) ===
                            Number(songId)
                        );

                    }
                );


            if (!song) {

                alert(
                    "Lagu tidak ditemukan."
                );

                return false;

            }


            playlist.songs.push(
                song.id
            );


            savePlaylists();

            renderPlaylists();


            console.log(
                "Lagu ditambahkan:",
                song.title,
                "→",
                playlist.name
            );


            return true;

        }


        /*
        =====================================================
        REMOVE SONG
        =====================================================
        */

        function removeSongFromPlaylist(
            songId,
            playlistId
        ) {

            const playlist =
                playlists.find(
                    function (item) {

                        return (
                            Number(item.id) ===
                            Number(playlistId)
                        );

                    }
                );


            if (!playlist) {
                return false;
            }


            if (
                !Array.isArray(
                    playlist.songs
                )
            ) {

                playlist.songs = [];

            }


            const before =
                playlist.songs.length;


            playlist.songs =
                playlist.songs.filter(
                    function (id) {

                        return (
                            Number(id) !==
                            Number(songId)
                        );

                    }
                );


            if (
                playlist.songs.length ===
                before
            ) {

                return false;

            }


            savePlaylists();

            renderPlaylists();


            return true;

        }


        /*
        =====================================================
        GET PLAYLIST SONGS
        =====================================================
        */

        function getPlaylistSongs(
            playlistId
        ) {

            const playlist =
                playlists.find(
                    function (item) {

                        return (
                            Number(item.id) ===
                            Number(playlistId)
                        );

                    }
                );


            if (!playlist) {
                return [];
            }


            if (
                !Array.isArray(
                    playlist.songs
                )
            ) {

                return [];

            }


            return playlist.songs
                .map(
                    function (songId) {

                        return songs.find(
                            function (song) {

                                return (
                                    Number(song.id) ===
                                    Number(songId)
                                );

                            }
                        );

                    }
                )
                .filter(
                    function (song) {

                        return !!song;

                    }
                );

        }


        /*
        =====================================================
        CREATE ADD SONG MODAL
        =====================================================
        */

        function createAddSongModal() {

            if (
                document.getElementById(
                    "vybeAddSongsModal"
                )
            ) {

                return;

            }


            const addModal =
                document.createElement(
                    "div"
                );


            addModal.id =
                "vybeAddSongsModal";


            addModal.className =
                "playlist-modal";


            addModal.innerHTML = `

                <div class="playlist-modal-card playlist-add-modal-card">

                    <button
                        class="modal-close"
                        id="vybeCloseAddSongs"
                        type="button"
                        title="Close"
                    >
                        ×
                    </button>


                    <p class="topbar-small">
                        ADD SONGS TO PLAYLIST
                    </p>


                    <h2 id="vybeAddSongsTitle">
                        Add Songs to Playlist
                    </h2>


                    <p
                        class="modal-description"
                        id="vybeAddSongsDescription"
                    >
                        Pilih lagu yang ingin kamu tambahkan.
                    </p>


                    <!-- SEARCH -->

                    <div class="playlist-song-search">

                        <span class="playlist-search-icon">
                            ⌕
                        </span>

                        <input
                            type="text"
                            id="vybeAddSongsSearch"
                            placeholder="Search song, artist, album..."
                            autocomplete="off"
                        >

                    </div>


                    <!-- INFORMATION -->

                    <div class="playlist-selection-info">

                        <span id="vybeSelectedCount">
                            0 songs in playlist
                        </span>


                        <button
                            type="button"
                            id="vybeSelectAllSongs"
                        >
                            Select All
                        </button>

                    </div>


                    <!-- SONG LIST -->

                    <div
                        id="vybeAddSongsList"
                        class="playlist-add-song-list"
                    ></div>


                    <!-- DONE -->

                    <button
                        type="button"
                        id="vybeDoneAddSongs"
                        class="playlist-done-button"
                    >
                        DONE
                    </button>

                </div>

            `;


            document.body.appendChild(
                addModal
            );


            /*
            CLOSE
            */

            const close =
                document.getElementById(
                    "vybeCloseAddSongs"
                );


            if (close) {

                close.addEventListener(
                    "click",
                    closeAddSongModal
                );

            }


            /*
            DONE
            */

            const doneButton =
                document.getElementById(
                    "vybeDoneAddSongs"
                );


            if (doneButton) {

                doneButton.addEventListener(
                    "click",
                    closeAddSongModal
                );

            }


            /*
            SEARCH
            */

            const search =
                document.getElementById(
                    "vybeAddSongsSearch"
                );


            if (search) {

                search.addEventListener(
                    "input",
                    function () {

                        const playlistId =
                            Number(
                                addModal.dataset.playlistId
                            );


                        renderAddSongItems(
                            getFilteredSongs(
                                search.value
                            ),
                            playlistId
                        );

                    }
                );

            }


            /*
            SELECT ALL
            */

            const selectAll =
                document.getElementById(
                    "vybeSelectAllSongs"
                );


            if (selectAll) {

                selectAll.addEventListener(
                    "click",
                    function () {

                        const playlistId =
                            Number(
                                addModal.dataset.playlistId
                            );


                        const playlist =
                            playlists.find(
                                function (item) {

                                    return (
                                        Number(item.id) ===
                                        playlistId
                                    );

                                }
                            );


                        if (!playlist) {
                            return;
                        }


                        if (
                            playlist.songs.length ===
                            songs.length
                        ) {

                            return;

                        }


                        songs.forEach(
                            function (song) {

                                const exists =
                                    playlist.songs.some(
                                        function (id) {

                                            return (
                                                Number(id) ===
                                                Number(song.id)
                                            );

                                        }
                                    );


                                if (!exists) {

                                    playlist.songs.push(
                                        song.id
                                    );

                                }

                            }
                        );


                        savePlaylists();

                        renderPlaylists();


                        renderAddSongItems(
                            getFilteredSongs(
                                search
                                    ? search.value
                                    : ""
                            ),
                            playlistId
                        );

                    }
                );

            }


            /*
            CLICK OUTSIDE
            */

            addModal.addEventListener(
                "click",
                function (event) {

                    if (
                        event.target ===
                        addModal
                    ) {

                        closeAddSongModal();

                    }

                }
            );

        }


        /*
        =====================================================
        CLOSE ADD SONG MODAL
        =====================================================
        */

        function closeAddSongModal() {

            const addModal =
                document.getElementById(
                    "vybeAddSongsModal"
                );


            if (!addModal) {
                return;
            }


            addModal.classList.remove(
                "show"
            );


            const search =
                document.getElementById(
                    "vybeAddSongsSearch"
                );


            if (search) {

                search.value =
                    "";

            }

        }


        /*
        =====================================================
        FILTER ADD SONGS
        =====================================================
        */

        function getFilteredSongs(
            value
        ) {

            const keyword =
                String(
                    value || ""
                )
                .trim()
                .toLowerCase();


            if (!keyword) {

                return [
                    ...songs
                ];

            }


            return songs.filter(
                function (song) {

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


                    const album =
                        String(
                            song.album || ""
                        )
                        .toLowerCase();


                    const genre =
                        String(
                            song.genre || ""
                        )
                        .toLowerCase();


                    const country =
                        String(
                            song.country || ""
                        )
                        .toLowerCase();


                    return (
                        title.includes(keyword) ||
                        artist.includes(keyword) ||
                        album.includes(keyword) ||
                        genre.includes(keyword) ||
                        country.includes(keyword)
                    );

                }
            );

        }


        /*
        =====================================================
        UPDATE SELECTED COUNT
        =====================================================
        */

        function updateSelectedCount(
            playlistId
        ) {

            const count =
                document.getElementById(
                    "vybeSelectedCount"
                );


            if (!count) {
                return;
            }


            const playlist =
                playlists.find(
                    function (item) {

                        return (
                            Number(item.id) ===
                            Number(playlistId)
                        );

                    }
                );


            if (!playlist) {
                return;
            }


            count.textContent =
                `${playlist.songs.length} songs in playlist`;

        }


        /*
        =====================================================
        RENDER ADD SONG ITEMS
        =====================================================
        */

        function renderAddSongItems(
            songListData,
            playlistId
        ) {

            const list =
                document.getElementById(
                    "vybeAddSongsList"
                );


            if (!list) {
                return;
            }


            const playlist =
                playlists.find(
                    function (item) {

                        return (
                            Number(item.id) ===
                            Number(playlistId)
                        );

                    }
                );


            if (!playlist) {
                return;
            }


            list.innerHTML =
                "";


            updateSelectedCount(
                playlistId
            );


            /*
            NO SONG
            */

            if (
                songs.length === 0
            ) {

                list.innerHTML = `

                    <div class="playlist-no-result">

                        <div>
                            ♫
                        </div>

                        <h3>
                            Belum ada lagu
                        </h3>

                        <p>
                            Tambahkan lagu terlebih dahulu
                            ke songs.js.
                        </p>

                    </div>

                `;

                return;

            }


            /*
            SEARCH NO RESULT
            */

            if (
                songListData.length === 0
            ) {

                list.innerHTML = `

                    <div class="playlist-no-result">

                        <div>
                            🔍
                        </div>

                        <h3>
                            Music not found
                        </h3>

                        <p>
                            Coba cari judul,
                            artist, atau album lain.
                        </p>

                    </div>

                `;

                return;

            }


            /*
            SONG ITEMS
            */

            songListData.forEach(
                function (song) {

                    const exists =
                        playlist.songs.some(
                            function (id) {

                                return (
                                    Number(id) ===
                                    Number(song.id)
                                );

                            }
                        );


                    const item =
                        document.createElement(
                            "div"
                        );


                    item.className =
                        "playlist-add-song-item";


                    if (exists) {

                        item.classList.add(
                            "song-already-added"
                        );

                    }


                    item.dataset.songId =
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


                        <div class="playlist-add-song-info">

                            <strong>
                                ${
                                    song.title ||
                                    "Unknown Title"
                                }
                            </strong>


                            <span>
                                ${
                                    song.artist ||
                                    "Unknown Artist"
                                }
                            </span>


                            ${
                                song.album
                                    ? `
                                        <small>
                                            ${song.album}
                                        </small>
                                      `
                                    : ""
                            }

                        </div>


                        <button
                            type="button"
                            class="
                                playlist-select-song
                                ${
                                    exists
                                        ? "added"
                                        : ""
                                }
                            "
                            data-select-song="${song.id}"
                            ${
                                exists
                                    ? "disabled"
                                    : ""
                            }
                        >

                            ${
                                exists
                                    ? "✓ Added"
                                    : "+ Add"
                            }

                        </button>

                    `;


                    list.appendChild(
                        item
                    );

                }
            );

        }


        /*
        =====================================================
        OPEN ADD SONG MODAL
        =====================================================
        */

        function openAddSongToPlaylist(
            playlistId
        ) {

            const playlist =
                playlists.find(
                    function (item) {

                        return (
                            Number(item.id) ===
                            Number(playlistId)
                        );

                    }
                );


            if (!playlist) {
                return;
            }


            createAddSongModal();


            const addModal =
                document.getElementById(
                    "vybeAddSongsModal"
                );


            const title =
                document.getElementById(
                    "vybeAddSongsTitle"
                );


            const description =
                document.getElementById(
                    "vybeAddSongsDescription"
                );


            const search =
                document.getElementById(
                    "vybeAddSongsSearch"
                );


            if (!addModal) {
                return;
            }


            /*
            SET PLAYLIST ID
            */

            addModal.dataset.playlistId =
                playlistId;


            /*
            TITLE
            */

            if (title) {

                title.textContent =
                    `Add Songs to ${playlist.name}`;

            }


            /*
            DESCRIPTION
            */

            if (description) {

                description.textContent =
                    "Pilih lagu yang ingin kamu tambahkan ke playlist.";

            }


            /*
            RESET SEARCH
            */

            if (search) {

                search.value =
                    "";

            }


            /*
            RENDER
            */

            renderAddSongItems(
                songs,
                playlistId
            );


            /*
            OPEN
            */

            addModal.classList.add(
                "show"
            );


            /*
            FOCUS SEARCH
            */

            if (search) {

                setTimeout(
                    function () {

                        search.focus();

                    },
                    100
                );

            }

        }


        /*
        =====================================================
        ADD SONG BUTTON
        =====================================================
        */

        document.addEventListener(
            "click",
            function (event) {

                const addButton =
                    event.target.closest(
                        "[data-select-song]"
                    );


                if (!addButton) {
                    return;
                }


                const addModal =
                    document.getElementById(
                        "vybeAddSongsModal"
                    );


                if (!addModal) {
                    return;
                }


                const playlistId =
                    Number(
                        addModal.dataset.playlistId
                    );


                const songId =
                    Number(
                        addButton.dataset.selectSong
                    );


                const success =
                    addSongToPlaylist(
                        songId,
                        playlistId
                    );


                if (!success) {
                    return;
                }


                /*
                UPDATE BUTTON
                */

                addButton.disabled =
                    true;


                addButton.textContent =
                    "✓ Added";


                addButton.classList.add(
                    "added"
                );


                /*
                UPDATE ROW
                */

                const item =
                    addButton.closest(
                        ".playlist-add-song-item"
                    );


                if (item) {

                    item.classList.add(
                        "song-already-added"
                    );

                }


                /*
                UPDATE COUNT
                */

                updateSelectedCount(
                    playlistId
                );

            }
        );


        /*
        =====================================================
        CREATE PLAYLIST DETAIL MODAL
        =====================================================
        */

        function createDetailModal() {

            if (
                document.getElementById(
                    "vybePlaylistDetailModal"
                )
            ) {

                return;

            }


            const detailModal =
                document.createElement(
                    "div"
                );


            detailModal.id =
                "vybePlaylistDetailModal";


            detailModal.className =
                "playlist-modal";


            detailModal.innerHTML = `

                <div class="playlist-modal-card playlist-detail-card">

                    <button
                        class="modal-close"
                        id="vybeClosePlaylistDetail"
                        type="button"
                        title="Close"
                    >
                        ×
                    </button>


                    <p class="topbar-small">
                        YOUR PLAYLIST
                    </p>


                    <h2 id="vybePlaylistDetailTitle">
                        Playlist
                    </h2>


                    <p
                        class="modal-description"
                        id="vybePlaylistDetailDescription"
                    ></p>


                    <div
                        id="vybePlaylistDetailList"
                        class="playlist-detail-list"
                    ></div>

                </div>

            `;


            document.body.appendChild(
                detailModal
            );


            const close =
                document.getElementById(
                    "vybeClosePlaylistDetail"
                );


            if (close) {

                close.addEventListener(
                    "click",
                    closePlaylistDetail
                );

            }


            detailModal.addEventListener(
                "click",
                function (event) {

                    if (
                        event.target ===
                        detailModal
                    ) {

                        closePlaylistDetail();

                    }

                }
            );

        }


        /*
        =====================================================
        CLOSE DETAIL
        =====================================================
        */

        function closePlaylistDetail() {

            const detailModal =
                document.getElementById(
                    "vybePlaylistDetailModal"
                );


            if (!detailModal) {
                return;
            }


            detailModal.classList.remove(
                "show"
            );

        }


        /*
        =====================================================
        OPEN DETAIL
        =====================================================
        */

        function openPlaylistDetail(
            playlistId
        ) {

            const playlist =
                playlists.find(
                    function (item) {

                        return (
                            Number(item.id) ===
                            Number(playlistId)
                        );

                    }
                );


            if (!playlist) {
                return;
            }


            createDetailModal();


            const detailModal =
                document.getElementById(
                    "vybePlaylistDetailModal"
                );


            const title =
                document.getElementById(
                    "vybePlaylistDetailTitle"
                );


            const description =
                document.getElementById(
                    "vybePlaylistDetailDescription"
                );


            const list =
                document.getElementById(
                    "vybePlaylistDetailList"
                );


            if (
                !detailModal ||
                !list
            ) {

                return;

            }


            const playlistSongs =
                getPlaylistSongs(
                    playlistId
                );


            if (title) {

                title.textContent =
                    playlist.name ||
                    "Untitled Playlist";

            }


            if (description) {

                description.textContent =
                    playlist.description
                        ? playlist.description
                        : `${playlistSongs.length} songs`;

            }


            list.innerHTML =
                "";


            /*
            EMPTY
            */

            if (
                playlistSongs.length === 0
            ) {

                list.innerHTML = `

                    <div class="empty-state">

                        <div class="empty-playlist-icon">
                            ♫
                        </div>

                        <h3>
                            Playlist masih kosong
                        </h3>

                        <p>
                            Tambahkan lagu untuk
                            mulai mengisi playlist.
                        </p>

                    </div>

                `;


                detailModal.classList.add(
                    "show"
                );

                return;

            }


            /*
            SONGS
            */

            playlistSongs.forEach(
                function (song, index) {

                    const item =
                        document.createElement(
                            "div"
                        );


                    item.className =
                        "playlist-detail-song";


                    item.dataset.songId =
                        song.id;


                    item.innerHTML = `

                        <div class="playlist-detail-number">

                            ${
                                String(
                                    index + 1
                                ).padStart(
                                    2,
                                    "0"
                                )
                            }

                        </div>


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


                        <div class="playlist-detail-song-info">

                            <strong>
                                ${
                                    song.title ||
                                    "Unknown Title"
                                }
                            </strong>


                            <span>
                                ${
                                    song.artist ||
                                    "Unknown Artist"
                                }
                            </span>

                        </div>


                        <button
                            class="playlist-play-song"
                            data-play-playlist-song="${song.id}"
                            type="button"
                            title="Play song"
                        >
                            ▶
                        </button>


                        <button
                            class="playlist-remove-song"
                            data-remove-song="${song.id}"
                            data-remove-playlist="${playlist.id}"
                            type="button"
                            title="Remove from playlist"
                        >
                            ×
                        </button>

                    `;


                    list.appendChild(
                        item
                    );

                }
            );


            detailModal.dataset.playlistId =
                playlistId;


            detailModal.classList.add(
                "show"
            );

        }


        /*
        =====================================================
        REMOVE SONG FROM DETAIL
        =====================================================
        */

        document.addEventListener(
            "click",
            function (event) {

                const removeButton =
                    event.target.closest(
                        "[data-remove-song]"
                    );


                if (!removeButton) {
                    return;
                }


                const songId =
                    Number(
                        removeButton.dataset.removeSong
                    );


                const playlistId =
                    Number(
                        removeButton.dataset.removePlaylist
                    );


                const playlist =
                    playlists.find(
                        function (item) {

                            return (
                                Number(item.id) ===
                                Number(playlistId)
                            );

                        }
                    );


                if (!playlist) {
                    return;
                }


                const song =
                    songs.find(
                        function (item) {

                            return (
                                Number(item.id) ===
                                Number(songId)
                            );

                        }
                    );


                const confirmed =
                    confirm(
                        `Hapus "${song ? song.title : "lagu ini"}" dari playlist "${playlist.name}"?`
                    );


                if (!confirmed) {
                    return;
                }


                removeSongFromPlaylist(
                    songId,
                    playlistId
                );


                openPlaylistDetail(
                    playlistId
                );

            }
        );


        /*
        =====================================================
        PLAY SONG FROM PLAYLIST
        =====================================================
        */

        function playPlaylistSong(
            songId
        ) {

            if (
                typeof window.playSongById ===
                "function"
            ) {

                window.playSongById(
                    Number(songId)
                );

                return;

            }


            const song =
                songs.find(
                    function (item) {

                        return (
                            Number(item.id) ===
                            Number(songId)
                        );

                    }
                );


            if (song) {

                console.log(
                    "Song playlist:",
                    song.title
                );

            }

        }


        /*
        =====================================================
        PLAY BUTTON DETAIL
        =====================================================
        */

        document.addEventListener(
            "click",
            function (event) {

                const button =
                    event.target.closest(
                        "[data-play-playlist-song]"
                    );


                if (!button) {
                    return;
                }


                const songId =
                    Number(
                        button.dataset
                            .playPlaylistSong
                    );


                playPlaylistSong(
                    songId
                );

            }
        );


        /*
        =====================================================
        CREATE PLAYLIST BUTTON
        =====================================================
        */

        if (createButton) {

            createButton.addEventListener(
                "click",
                openModal
            );

        }


        /*
        =====================================================
        FEATURE PLAYLIST
        =====================================================
        */

        if (featureButton) {

            featureButton.addEventListener(
                "click",
                openModal
            );

        }


        /*
        =====================================================
        CLOSE CREATE
        =====================================================
        */

        if (closeButton) {

            closeButton.addEventListener(
                "click",
                closeModal
            );

        }


        /*
        =====================================================
        SAVE CREATE
        =====================================================
        */

        if (saveButton) {

            saveButton.addEventListener(
                "click",
                createPlaylist
            );

        }


        /*
        =====================================================
        ENTER CREATE
        =====================================================
        */

        if (nameInput) {

            nameInput.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key ===
                        "Enter"
                    ) {

                        event.preventDefault();

                        createPlaylist();

                    }

                }
            );

        }


        /*
        =====================================================
        PLAYLIST CARD EVENTS
        =====================================================
        */

        document.addEventListener(
            "click",
            function (event) {

                /*
                EMPTY CREATE
                */

                const emptyCreate =
                    event.target.closest(
                        "#emptyCreatePlaylist"
                    );


                if (emptyCreate) {

                    openModal();

                    return;

                }


                /*
                ADD SONGS
                */

                const addSongButton =
                    event.target.closest(
                        "[data-add-song]"
                    );


                if (addSongButton) {

                    const playlistId =
                        Number(
                            addSongButton.dataset
                                .addSong
                        );


                    openAddSongToPlaylist(
                        playlistId
                    );


                    return;

                }


                /*
                DELETE PLAYLIST
                */

                const deleteButton =
                    event.target.closest(
                        "[data-delete]"
                    );


                if (deleteButton) {

                    const id =
                        Number(
                            deleteButton.dataset
                                .delete
                        );


                    const playlist =
                        playlists.find(
                            function (item) {

                                return (
                                    Number(item.id) ===
                                    id
                                );

                            }
                        );


                    if (!playlist) {
                        return;
                    }


                    const confirmed =
                        confirm(
                            `Hapus playlist "${playlist.name}"?`
                        );


                    if (!confirmed) {
                        return;
                    }


                    playlists =
                        playlists.filter(
                            function (item) {

                                return (
                                    Number(item.id) !==
                                    id
                                );

                            }
                        );


                    savePlaylists();

                    renderPlaylists();


                    return;

                }


                /*
                OPEN PLAYLIST
                */

                const openPlaylist =
                    event.target.closest(
                        "[data-open-playlist]"
                    );


                if (openPlaylist) {

                    const playlistId =
                        Number(
                            openPlaylist.dataset
                                .openPlaylist
                        );


                    openPlaylistDetail(
                        playlistId
                    );

                }

            }
        );


        /*
        =====================================================
        ESC CLOSE
        =====================================================
        */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key !==
                    "Escape"
                ) {

                    return;

                }


                closeModal();

                closeAddSongModal();

                closePlaylistDetail();

            }
        );


        /*
        =====================================================
        OUTSIDE CREATE MODAL
        =====================================================
        */

        if (modal) {

            modal.addEventListener(
                "click",
                function (event) {

                    if (
                        event.target ===
                        modal
                    ) {

                        closeModal();

                    }

                }
            );

        }


        /*
        =====================================================
        PUBLIC API
        =====================================================
        */

        window.renderPlaylists =
            renderPlaylists;


        window.openPlaylistModal =
            openModal;


        window.closePlaylistModal =
            closeModal;


        window.openAddSongToPlaylist =
            openAddSongToPlaylist;


        window.closeAddSongModal =
            closeAddSongModal;


        window.openPlaylistDetail =
            openPlaylistDetail;


        window.closePlaylistDetail =
            closePlaylistDetail;


        window.getVybePlaylists =
            function () {

                return playlists;

            };


        window.addSongToPlaylist =
            addSongToPlaylist;


        window.removeSongFromPlaylist =
            removeSongFromPlaylist;


        window.getPlaylistSongs =
            getPlaylistSongs;


        window.playPlaylistSong =
            playPlaylistSong;


        /*
        =====================================================
        INITIAL
        =====================================================
        */

        createAddSongModal();

        createDetailModal();

        renderPlaylists();


        console.log(
            "VYBE PLAYLIST SYSTEM SIAP"
        );

    }
);
document.addEventListener(
    "DOMContentLoaded",
    function () {

        let favorites =
            JSON.parse(
                localStorage.getItem(
                    "vybeFavorites"
                )
            ) || [];


        function saveFavorites() {

            localStorage.setItem(
                "vybeFavorites",
                JSON.stringify(favorites)
            );

        }


        function isFavorite(id) {

            return favorites.includes(id);

        }


        function heartIcon() {

            return `
                <svg
                    class="heart-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path
                        d="
                        M20.84 4.61
                        a5.5 5.5 0 0 0-7.78 0
                        L12 5.67
                        l-1.06-1.06
                        a5.5 5.5 0 0 0-7.78 7.78
                        l1.06 1.06
                        L12 21.23
                        l7.78-7.78
                        1.06-1.06
                        a5.5 5.5 0 0 0 0-7.78
                        z
                        "
                    ></path>
                </svg>
            `;

        }


        function updateFavoriteButtons() {

            document
                .querySelectorAll(
                    ".favorite-button"
                )
                .forEach(
                    function (button) {

                        const id =
                            Number(
                                button.dataset.id
                            );

                        const active =
                            isFavorite(id);

                        button.classList.toggle(
                            "active",
                            active
                        );

                        button.innerHTML =
                            heartIcon();

                        button.title =
                            active
                                ? "Remove from favorites"
                                : "Add to favorites";

                    }
                );

        }


        function renderFavorites() {

            const list =
                document.getElementById(
                    "favoriteList"
                );

            const count =
                document.getElementById(
                    "favoriteCount"
                );


            if (!list) {
                return;
            }


            const songs =
                window.vybeSongs || [];


            const favoriteSongs =
                songs.filter(
                    function (song) {

                        return favorites.includes(
                            song.id
                        );

                    }
                );


            if (count) {

                count.textContent =
                    `${favoriteSongs.length} favorites`;

            }


            if (
                favoriteSongs.length === 0
            ) {

                list.innerHTML = `

                    <div class="empty-state">

                        <div class="empty-heart">
                            ${heartIcon()}
                        </div>

                        <h3>
                            Your favorites are empty
                        </h3>

                        <p>
                            Klik ❤️ pada lagu
                            untuk menyimpannya.
                        </p>

                    </div>

                `;

                return;

            }


            list.innerHTML = "";


            favoriteSongs.forEach(
                function (song) {

                    const item =
                        document.createElement(
                            "div"
                        );

                    item.className =
                        "song-item favorite-item";

                    item.dataset.id =
                        song.id;


                    item.innerHTML = `

                        <img
                            src="${song.cover}"
                            alt="${song.title}"
                            onerror="
                                this.src='images/default-cover.jpg'
                            "
                        >

                        <div>

                            <div class="song-title">
                                ${song.title}
                            </div>

                            <div class="song-artist">
                                ${song.artist}
                            </div>

                        </div>

                        <div class="song-meta">

                            ${song.genre}
                            •
                            ${song.country}

                        </div>

                        <button
                            type="button"
                            class="favorite-button active"
                            data-id="${song.id}"
                            title="Remove from favorites"
                        >
                            ${heartIcon()}
                        </button>

                    `;


                    list.appendChild(item);

                }
            );


            updateFavoriteButtons();

        }


        function toggleFavorite(id) {

            if (
                isFavorite(id)
            ) {

                favorites =
                    favorites.filter(
                        function (favoriteId) {

                            return favoriteId !== id;

                        }
                    );

            } else {

                favorites.push(id);

            }


            saveFavorites();

            renderFavorites();

            updateFavoriteButtons();

        }


        document.addEventListener(
            "click",
            function (event) {

                const button =
                    event.target.closest(
                        ".favorite-button"
                    );


                if (!button) {
                    return;
                }


                event.stopPropagation();


                const id =
                    Number(
                        button.dataset.id
                    );


                toggleFavorite(id);

            }
        );


        window.renderFavorites =
            renderFavorites;

        window.updateFavoriteButtons =
            updateFavoriteButtons;

        window.toggleFavorite =
            toggleFavorite;


        renderFavorites();

    }
);
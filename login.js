document.addEventListener("DOMContentLoaded", function () {

    console.log("VYBE LOGIN SYSTEM AKTIF");


    /*
    =====================================================
    ELEMENT
    =====================================================
    */

    const loginForm =
        document.getElementById("loginForm");

    const usernameInput =
        document.getElementById("username");

    const passwordInput =
        document.getElementById("password");

    const loginMessage =
        document.getElementById("loginMessage");

    const togglePassword =
        document.getElementById("togglePassword");


    /*
    =====================================================
    CEK SESSION
    =====================================================
    */

    const session =
        localStorage.getItem("vybeLogin");

    if (session === "true") {

        window.location.href = "music.html";

        return;
    }


    /*
    =====================================================
    TOGGLE PASSWORD
    =====================================================
    */

    if (
        passwordInput &&
        togglePassword
    ) {

        togglePassword.addEventListener(
            "click",
            function () {

                /*
                Password sedang tersembunyi
                */

                if (
                    passwordInput.type === "password"
                ) {

                    passwordInput.type =
                        "text";

                    togglePassword.textContent =
                        "◉";

                    togglePassword.setAttribute(
                        "aria-label",
                        "Hide password"
                    );

                    togglePassword.setAttribute(
                        "title",
                        "Hide password"
                    );

                }

                /*
                Password sedang terlihat
                */

                else {

                    passwordInput.type =
                        "password";

                    togglePassword.textContent =
                        "👁";

                    togglePassword.setAttribute(
                        "aria-label",
                        "Show password"
                    );

                    togglePassword.setAttribute(
                        "title",
                        "Show password"
                    );

                }

            }
        );

    }


    /*
    =====================================================
    LOGIN
    =====================================================
    */

    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const username =
                    usernameInput.value.trim();

                const password =
                    passwordInput.value.trim();


                /*
                -------------------------------------------------
                VALIDASI
                -------------------------------------------------
                */

                if (
                    !username ||
                    !password
                ) {

                    showMessage(
                        "Username dan password wajib diisi.",
                        "error"
                    );

                    return;
                }


                /*
                -------------------------------------------------
                DEMO LOGIN
                -------------------------------------------------
                */

                if (
                    username === "alroyi02" &&
                    password === "vybemusic#02"
                ) {

                    localStorage.setItem(
                        "vybeLogin",
                        "true"
                    );

                    localStorage.setItem(
                        "vybeUsername",
                        username
                    );


                    showMessage(
                        "Login berhasil. Membuka VYBE MUSIC...",
                        "success"
                    );


                    setTimeout(
                        function () {

                            window.location.href =
                                "music.html";

                        },
                        600
                    );

                }

                else {

                    showMessage(
                        "Username atau password salah.",
                        "error"
                    );

                }

            }
        );

    }


    /*
    =====================================================
    MESSAGE
    =====================================================
    */

    function showMessage(
        message,
        type
    ) {

        if (!loginMessage) {

            return;

        }


        loginMessage.textContent =
            message;

        loginMessage.className =
            "login-message " + type;

    }

});
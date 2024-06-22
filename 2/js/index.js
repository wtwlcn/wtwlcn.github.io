var index = 0
    $('.content-l button').click(function () {
        index++
        if (index % 2 == 1) {
            $('.content-l h2').attr("style",
                "transform: translate(-180px, 10px); width: 50%;")
            $('.content-l span').attr("style",
                "transform: translate(-180px, 10px); width: 50%; font: 400 25px 'Gochi Hand'; line-height: 1.5; ")
            $('.content-l button').attr("style",
                "width: 300px; height: 55px; top: 20%; background-position-x: 70px; transform: rotate(180deg);")
            $('.circle').attr("style",
                "width: 400px;height: 400px;left: 57%;top: 50%;border: 23px #ffffff dashed; ")
            $('.content-l img').attr("style",
                "bottom: 0px;")
            $('.content-l').attr("style",
                "width: 63%;")
            $('.content-r').attr("style",
                "width: 37%;")
            $('.img').attr("style",
                "padding: 10px; transform: scale(1);")
            $('.img img').attr("style",
                "transform: rotate(0);width: 100%;height: 100%;box-shadow: none;border-radius: 30px;")
            // 伪元素
            var style = document.createElement('style');
            style.innerHTML = `
                .content::before {
                   width: 900px;
                   height: 900px;
                   left: 49%;
                   bottom: -27%;
                }
            `;
            document.head.appendChild(style);
            var style = document.createElement('style');
            style.innerHTML = `
                .content::after {
                    opacity: 0;
                }
            `;
            document.head.appendChild(style);
             
        } else {
            $('.content-l h2').attr("style",
                " transform: translateY(-30px); width: 80%;")
            $('.content-l span').attr("style",
                "transform: translateY(-30px); width: 80%; font: 100 20px 'Gochi Hand'; line-height: 2; ")
            $('.content-l button').attr("style",
                "width: 150px; height: 50px; top: 80%; background-position-x: 0; transform: rotate(0deg);")
            $('.circle').attr("style",
                "width: 800px;height: 800px;left: -440px;bottom: -440px;border: 43px #fff dashed; ")
            $('.content-l img').attr("style",
                "bottom: -500px;")
            $('.content-l').attr("style",
                "width: 40%;")
            $('.content-r').attr("style",
                "width: 60%;")
            $('.img').attr("style",
                "padding: 0px;  ")
            $('.img img').attr("style",
                "width: 60%;height: 90%;box-shadow: 10px 20px 28px #0c48888c;border-radius: 0px;")
            // 伪元素
            var style = document.createElement('style');
            style.innerHTML = `
                .content::before {
                   width: 700px;
                   height: 700px;
                   left: -420px;
                   bottom:-420px;
                }
            `;
            document.head.appendChild(style);
            var style = document.createElement('style');
            style.innerHTML = `
                .content::after {
                    opacity: 1;
                }
            `;
            document.head.appendChild(style);
        }
    })
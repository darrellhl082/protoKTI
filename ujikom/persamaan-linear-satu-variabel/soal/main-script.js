$(document).ready(function () {
    //variable declaration
    let question = [];
    let pageX = 0;
    let answeArr = [];
    let choosed;
    let randNumFix = findRandNum();
    let questionArray = [
        [
            ["Dalam pernyataan 2x + 3 = 1, yang termasuk ke dalam variabel adalah..."],
            [2, 'x', 3, 1],
            ["b", "4"],
            ["Pembahasannya gini1"]
        ],
        [
            ["Jika x + 3 = 7, maka nilai x yang memenuhi adalah..."],
            [7, 1, 6, 4],
            ["b", "4"],
            ["Pembahasannya gini2"]
        ],
        [
            ["Nilai y yang tepat untuk persamaan 5 - y = -1 adalah..."],
            [2, 5, 6, 8],
            ["b", "4"],
            ["Pembahasannya gini3"]
        ],
        [
            ["Berapakah nilai dari 1/2m - 6, jika nilai m = 4?"],
            [2, 5, 6, 8],
            ["b", "4"],
            ["Pembahasannya gini4"]
        ],
        [
            ["Jika penyelesaian untuk 2x - 5 = 3 adalah a, dan penyelesaian untuk -3x + 2 = -4 adalah b. Maka nilai dari 2b -a adalah..."],
            [2, 5, 6, 8],
            ["b", "4"],
            ["Pembahasannya gini5"]
        ],
        [
            ["Berapa nilai p yang tepat untuk persamaan 1/3p - 4 = 7?"],
            [2, 5, 6, 8],
            ["b", "4"],
            ["Pembahasannya gini6"]
        ],
        [
            ["Berapakah nilai a yang tepat jika 5 - a = 3a + 17?"],
            [2, 5, 6, 8],
            ["b", "4"],
            ["Pembahasannya gini7"]
        ],
        [
            ["Yasin membeli buku sebanyak 2 kotak ditambah 5 buku tambahan. Jumlah buku yang dibeli oleh Yasin adalah 19 buah. Berapa banyak buku yang ada dalam setiap kotak? "],
            [2, 5, 6, 8],
            ["b", "4"],
            ["Pembahasannya gini8"]
        ],
        [
            ["Berapa nilai m yang tepat jika 2m + 8 = m - 3?"],
            [2, 5, 6, 8],
            ["b", "4"],
            ["Pembahasannya gini9"]
        ],
        [
            ["Dalam persamaan x - 3 = 8, berapa nilai koefisien dari variabel x?"],
            [2, 5, 6, 8],
            ["b", "4"],
            ["Pembahasannya gini10"]
        ],
        [
            ["Kalimat terbuka yang dihubungkan tanda sama dengan (=) dan hanya mempunyai satu variabel berpangkat 1 disebut..."],
            [2, 5, 6, 8],
            ["b", "4"],
            ["Pembahasannya gini11"]
        ],
        [
            ["Dalam persamaan 2/5p - 4/5 = 7/5, nilai p yang tepat adalah..."],
            [2, 5, 6, 8],
            ["b", "4"],
            ["Pembahasannya gini12"]
        ],
        [
            ["JIka nilai x = 3, manakah persamaan yang benar diantara jawaban berikut?"],
            [2, 5, 6, 8],
            ["b", "4"],
            ["Pembahasannya gini13"]
        ],
        [
            ["Manakah yang termasuk ke dalam persamaan linear satu variabel?"],
            [2, 5, 6, 8],
            ["b", "4"],
            ["Pembahasannya gini14"]
        ],
        [
            ["Zaki membeli 1 box pensil dan 6 pensil tambahan. Sedangkan Fikri membeli 2 box pensil saja. Setiap 1 box pensil berisi 8 buah pensil. Berapa total pensil yang dibeli oleh mereka berdua?"],
            [2, 5, 6, 8],
            ["b", "4"],
            ["Pembahasannya gini15"]
        ],
        ["Apakah 2x - 12 termasuk persamaan linear satu variabel?", [2, 5, 6, 8],
            ["b", "4"],
            ["Pembahasannya gini16"]
        ],
        ["3a + 2 = 11, jika nilai a = 3. Benarkah pernyataan tersebut?", [2, 5, 6, 8],
            ["b", "4"],
            ["Pembahasannya gini17"]
        ],
        ["Berapa nilai p yang tepat untuk 3p - 5 = 7?", [2, 5, 6, 8],
            ["b", "4"],
            ["Pembahasannya gini18"]
        ],
        ["Yang merupakan ciri-ciri dari persamaan linear satu variabel adalah di bawah berikut, kecuali...", [2, 5, 6, 8],
            ["b", "4"],
            ["Pembahasannya gini19"]
        ],
        ["Jika 5b - 12 = 3 + 2b, maka nilai b yang tepat adalah...", [2, 5, 6, 8],
            ["b", "4"],
            ["Pembahasannya gini20"]
        ]


    ]
    let trueList = $('.listTrue');
    let falseList = $('.listFalse');

    randNumFix.forEach(m => question.push(questionArray[m]));


    let userAns = [];
    let trueAns = [];
    let falseAns = [];
    let trueNum;
    let answerArrTrue = [];
    question.forEach((m, i) => {
        answerArrTrue.push(m[2][0])
    })
    console.log(question)
    //function declaration  
    function findRandNum() {
        let randomNumber = [];
        let randNum;
        let num;

        function checkNum() {
            randNum = Math.floor(Math.random() * (20 - 1) + 1);
            for (let z = 0; z < randomNumber.length; z++) {
                if (randNum == randomNumber[z]) {
                    checkNum();
                }

            }

            return randNum;

        }
        for (let i = 0; i < 5; i++) {
            num = checkNum();
            randomNumber.push(num);

        }

        return randomNumber;

    }

    function expSet(question) {
        $(".true1").html(`${question[0][2][0]}. ${question[0][2][1]}`);
        $(".exp1").html(question[0][3]);
        $(".true2").html(`${question[1][2][0]}. ${question[1][2][1]}`);
        $(".exp2").html(question[1][3]);
        $(".true3").html(`${question[2][2][0]}. ${question[2][2][1]}`);
        $(".exp3").html(question[2][3]);
        $(".true4").html(`${question[3][2][0]}. ${question[3][2][1]}`);
        $(".exp4").html(question[3][3]);
        $(".true5").html(`${question[4][2][0]}. ${question[4][2][1]}`);
        $(".exp5").html(question[4][3]);
    }

    function starthtmlSet(paging) {
        $('#back').addClass('d-none');
        $('#nomor').html("Nomor 1")
        $("#num1").html(question[paging][0]);
        $("#num2").html(question[paging][0]);
        $("#num3").html(question[paging][0]);
        $("#num4").html(question[paging][0]);
        $(".ans-1-a").html(question[paging][1][0]);
        $(".ans-1-b").html(question[paging][1][1]);
        $(".ans-1-c").html(question[paging][1][2]);
        $(".ans-1-d").html(question[paging][1][3]);


    }

    function checkAns(userAnswer, trueAnswer) {
        userAns.forEach((m, i) => {
            if (m == trueAnswer[i]) {
                trueAns.push(i + 1)
            } else {
                falseAns.push(i + 1)
            }
        })
        $('#trueAmount').html(trueAns.length)
        $('#falseAmount').html(falseAns.length)
        $('#scorePage').html(trueAns.length * 20)
        trueAns.forEach((m, i) => {
            $(trueList[i]).html(`Nomor ${m}`)
        })
        falseAns.forEach((m, i) => {
            $(falseList[i]).html(`Nomor ${m}`)
        })
        console.log(trueAnswer)
    }
    //conditional set
    $('.score-page').hide();
    //event handler
    $('.answer').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('choosed');
        $(this).toggleClass('bg-dark');
        $(this).toggleClass('box');
    });
    $('#next').click(function (e) {
        e.preventDefault();

        choosed = $('.choosed');
        if (choosed.length > 1) {
            alert('Hanya pilih satu')
        } else if (choosed.length == 0) {
            alert('Anda Tidak Memilih Apapun');
        } else {
            pageX++;
            choosed = $('.choosed').attr("code");
            answerArr = choosed;
            if (pageX == 1) {
                // userAns.nomor1 = choosed;
                userAns[0] = choosed;
            } else if (pageX == 2) {
                // userAns.nomor2 = choosed;
                userAns[1] = choosed;
            } else if (pageX == 3) {
                // userAns.nomor3 = choosed;
                userAns[2] = choosed;
            } else if (pageX == 4) {
                // userAns.nomor4 = choosed;
                userAns[3] = choosed;
            } else if (pageX >= 5) {
                // userAns.nomor5 = choosed;
                userAns[4] = choosed;
                console.log(userAns);
                $('.score-page').show()
                $('.quest-page').hide()
                $("#next").html('Selesai')
                checkAns(userAns, answerArrTrue)
            }

            if (pageX < 4) {
                $("#next").html('Selanjutnya')
            }
            $("#num1").html(question[pageX][0]);
            $("#num2").html(question[pageX][0]);
            $("#num3").html(question[pageX][0]);
            $("#num4").html(question[pageX][0]);
            $(".ans-1-a").html(question[pageX][1][0]);
            $(".ans-1-b").html(question[pageX][1][1]);
            $(".ans-1-c").html(question[pageX][1][2]);
            $(".ans-1-d").html(question[pageX][1][3]);
        }
        $('#nomor').html(`Nomor ${pageX + 1}`);
        $('.answer').removeClass('choosed');

        $('.answer').addClass('box');
        $('.answer').removeClass('bg-dark');

    });
    starthtmlSet(pageX);
    expSet(question)
});
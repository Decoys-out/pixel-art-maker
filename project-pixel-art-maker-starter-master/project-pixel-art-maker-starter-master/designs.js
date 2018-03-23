$(function () {
    let height = $('#inputHeight');
    let width = $('#inputWeight');
    let canvas = $('#pixelCanvas');
    let pickColor = $('#colorPicker');

    function makeGrid() {
        let noOfRows = height.val();
        let noOfCols = width.val();
        canvas.append('<tbody></tbody>')
        let table = canvas.find('tbody');
        for (let i = 0; i < noOfRows; i++) {
            table.append('<tr></tr>')
        }
        for (let i = 0; i < noOfCols; i++) {
            canvas.find('tr').append('<td class="background"></td>');
        }
    }
    $(document).ready(function () {
        $('#submit').on('click', function (e) {
            e.preventDefault();
            makeGrid();
        });

        $(canvas).on('click', 'td', function (e) {
            let color = pickColor.val();
            let apply = $(this).css('background-color');
            console.log(apply + " color:" + color);

            if ($(this).hasClass('background')) {
                $(this).toggleClass('background');
                $(this).css("background-color", color);
            } else {
                $(this).toggleClass('background');
                $(this).css("background-color", "transparent");
            }

        })

    });

});
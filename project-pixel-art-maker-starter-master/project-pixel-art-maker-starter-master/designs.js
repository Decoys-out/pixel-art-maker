$(function () {
    //defining the variables
    let height = $('#inputHeight');
    let width = $('#inputWeight');
    let canvas = $('#pixelCanvas');
    let pickColor = $('#colorPicker');
//function to create the grid
    function makeGrid() {
        let noOfRows = height.val();
        let noOfCols = width.val();
        canvas.find('tbody').remove()
        canvas.append('<tbody></tbody>')
        let table = canvas.find('tbody');
        for (let i = 0; i < noOfRows; i++) {
            table.append('<tr></tr>')
        }
        for (let i = 0; i < noOfCols; i++) {
            canvas.find('tr').append('<td class="background"></td>');
        }
    }
    //function to cal the make grid function
    $(document).ready(function () {
        $('#submit').on('click', function (e) {
            e.preventDefault();
            makeGrid();
        });

        $(canvas).on('click', 'td', function (e) {
            let color = pickColor.val();
            let apply = $(this).css('background-color');
            console.log(apply + " color:" + color);
            //to apply the color in the cell
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
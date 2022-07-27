// Select color input
// Select size input
var height, width, color;
// When size is submitted by the user, call makeGrid()
$(document).ready(function() {
    $('sizePicker').submit(function makeGrid(grid) {
        $('table').remove();
        var rows = $('#input_height').val();
        var cols = $('#input_width').val();
            for (var i = 1; i <= rows; i++)
            $('table').append('<tr></tr>');
            for (var j = 1; j <= cols; j++) {
                $('tr:last').append('<td></td>');
                $('td').attr("class", 'cells');
            }
            grid.preventDefault();

            $('.cells').click(function(event) {
                var paint = $('#colorPicker').val();
                $(event.target).css('background-color', paint);
            });
    });
});




$('#sizePicker').submit(function (event)  {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);
})





















function makeGrid(x,y) {
    $('tr').remove();

    // Your code goes here!
    for (var i = 1; i <= x; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (var j = 1; j <= y; j++){
            $('#table' + i).append('<td></td>');
        }
    }
    //add color
    $('td').click(function addColor() {
        color = $('#colorPicker').val();
        if ($(this).attr('style')){
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}
var mouseDown = 0;
document.body.onmousedown = function() { 
  ++mouseDown;
}
document.body.onmouseup = function() {
  --mouseDown;
}

//grid building
const gridBox =  document.querySelector('#griddy');
function updateCanvas(n)
{
    while ( gridBox.firstChild )
    {
        gridBox.removeChild( gridBox.firstChild );
    }

    for(i = 0; i<n; i++)
    {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        gridBox.appendChild(row);
        for(j = 0; j < n; j++)
        {
            const div = document.createElement('div'); 
            div.setAttribute('class', 'mini');
            row.appendChild(div);
        }

    }
}


//grid siziing
var size = 10;   //default size 5
updateCanvas(size);
var slider = document.getElementById("myRange");
var minis = document.querySelectorAll('.mini');

slider.oninput = function()
{
    size = slider.value;
    updateCanvas(size);
    minis = document.querySelectorAll('.mini');
    updateMinis(color);
}

//color picker
var color = "black"; // default color black
updateMinis(color);
var colorPicker = document.querySelector('#colorpicker');
colorPicker.addEventListener('input', () => {
    color = colorPicker.value;
    updateMinis(color);
    });

function updateMinis(c)
{
    minis.forEach((mini) => 
    {

        mini.addEventListener('mousedown', function(e)
        {
                mini.setAttribute("style", "background-color: " + c);
        });
        mini.addEventListener('mouseover', function(e)
        {
            if(e.buttons == 1)
            {
                mini.setAttribute("style", "background-color: " + c);
            }

            
        });

        
    });

}

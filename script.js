const gridBox =  document.querySelector('#griddy');

function updateCanvas(n)
{
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



size = prompt("enter your desired canvas size");
updateCanvas(size);

const minis = document.querySelectorAll('.mini');

minis.forEach((mini) => {

    mini.addEventListener('mouseenter', () => {
      mini.setAttribute("style", "background-color: black");
    });
  });



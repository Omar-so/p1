document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementsByClassName('b')[0];
    const con = document.getElementsByClassName('con')[0];
    const imageElement = document.getElementsByClassName('img')[0];

    imageElement.addEventListener('click', function() {
        const ex = document.createElement('div');
        ex.className = 'ex';

        const input = document.createElement('input');
        input.type = 'text';
        input.className = 't';
        input.placeholder = 'Another input';
        input.style.fontSize = '10px'; // Corrected the font size property

        const img1 = document.createElement('img');
        img1.src = 'r.jpg';
        img1.alt = 'Image';

        const img2 = document.createElement('img');
        img2.src = 'images.png';
        img2.alt = 'Another Image';

        img1.addEventListener('click', function() {
            if (input.style.filter === 'blur(5px)') {
                input.style.filter = 'none'; // Remove blur effect
            } else {
                input.style.filter = 'blur(5px)'; // Apply blur effect
            }
        });

        img2.addEventListener('click', function() {
            ex.remove(); // Remove the div when the second image is clicked
        });

        ex.appendChild(input);
        ex.appendChild(img1);
        ex.appendChild(img2);
        con.appendChild(ex);
        ex.style.visibility = 'visible'; // Ensure visibility is set
    });
});

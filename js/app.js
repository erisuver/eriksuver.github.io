jQuery(document).foundation();

jQuery(document).ready(function($) {
    var dataPorto = [
        {
            'images': [
                '../images/project1-img1.png',
                '../images/project1-img2.png',
                '../images/project1-img3.png'
            ],
            'url': 'https://github.com/erisuver/pos-siomay-apps/'
        },
        {
            'images': [
                '../images/project2-img1.png',
                '../images/project2-img2.png',
                '../images/project2-img3.png'
            ],
            'url': 'https://github.com/erisuver/toolshop-apps/'
        },
        {
            'images': [
                '../images/project3-img1.png',
                '../images/project3-img2.png',
                '../images/project3-img3.png'
            ],
            'url': 'https://pasienqu.com/'
        }
        // Add more projects as needed
    ];

    var $portoContainer = $('#porto-container');

    // Loop through the portfolio data and generate items
    dataPorto.forEach(function(project) {
        var $projectItem = $('<div class="cell medium-4"></div>'); // Each project container
        var $link = $('<a href="' + project.url + '" target="_blank" class="project-link"></a>'); // GitHub link

        var $imagesContainer = $('<div class="project-images"></div>'); // Container for images

        // Loop through images for each project
        project.images.forEach(function(imagePath) {
            var $image = $('<img src="' + imagePath + '" class="image" alt="Project Image">');
            $imagesContainer.append($image);
        });

        // Add images container inside the link
        $link.append($imagesContainer);

        // Append the link inside the project item
        $projectItem.append($link);

        // Finally, append the project item to the main portfolio container
        $portoContainer.append($projectItem);
    });
});

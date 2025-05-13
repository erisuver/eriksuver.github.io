jQuery(document).foundation();


jQuery(document).ready(function($) {

        var dataPorto = [
        {
            'image': [
                '../images/project1-img1.png',
                '../images/project1-img2.png',
                '../images/project1-img3.png'
            ],
            'url': 'https://github.com/erisuver/pos-siomay-apps'
        },
        {
            'image': [
                '../images/project2-img1.png',
                '../images/project2-img2.png',
                '../images/project2-img3.png'
            ],
            'url': 'https://github.com/erisuver/toolshop-apps'
        },
        {
            'image': [
                '../images/project3-img1.png',
                '../images/project3-img2.png',
                '../images/project3-img3.png'
            ],
            'url': 'https://pasienqu.com/'
        }
        // Tambahkan proyek lainnya di sini
    ];

    $portoContainer = $('#porto-container');
    dataPorto.forEach(e => {
        let $item = $('<div class="cell medium-4"></div>');
        $item.html('<div class="item-porto"><a href="'+e.url+'" target="_blank"><img src="'+e.image+'" class="image"></a></div>');
        $item.appendTo($portoContainer);
    });

})
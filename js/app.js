jQuery(document).foundation();


jQuery(document).ready(function($) {

    var dataPorto = [
        {
            'image':'../images/peacelovedogshouston.png',
            'url':'https://peacelovedogshouston.com/'
        },
        {
            'image':'../images/centennial.houstonzoo.png',
            'url':'https://centennial.houstonzoo.org/'
        },
        {
            'image':'../images/posterhouse.png',
            'url':'https://posterhouse.org/'
        },
        {
            'image':'../images/daily-joy.png',
            'url':'https://www.daily-joy.org/'
        },
        {
            'image':'../images/mpc.png',
            'url':'https://www.mpc.id/'
        },
        {
            'image':'../images/actreport.png',
            'url':'https://actreport.com/'
        },
        {
            'image':'../images/buffalobayou.png',
            'url':'https://buffalobayou.org/'
        },
        {
            'image':'../images/einhorn.cornell.png',
            'url':'https://einhorn.cornell.edu/'
        },
        {
            'image':'../images/socialbulldog.png',
            'url':'https://socialbulldog.com/'
        }
    ]

    $portoContainer = $('#porto-container');
    dataPorto.forEach(e => {
        let $item = $('<div class="cell medium-4"></div>');
        $item.html('<div class="item-porto"><a href="'+e.url+'" target="_blank"><img src="'+e.image+'" class="image"></a></div>');
        $item.appendTo($portoContainer);
    });

})
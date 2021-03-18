const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.3,
    listFolded: false,
    listMaxHeight: 60,
    mutex: true,
    preload: 'auto',
    audio: [
        {
            name: '瞬き',
            artist: '春茶オサム',
            url: 'http://music.163.com/song/media/outer/url?id=556042458.mp3',
            cover: 'http://p1.music.126.net/O_FQeMbLFE39rsW4glCr7Q==/109951164061739945.jpg?param=130y130',
        },
        {
            name: '打上花火',
            artist: 'kobasolo / 春茶 / 伊礼亮',
            url: 'http://music.163.com/song/media/outer/url?id=1338972497.mp3',
            cover: 'http://p2.music.126.net/ErIn1C-8bLhROh0-wyljaw==/109951163894382465.jpg?param=130y130',
        },
        {
            name: 'Lemon',
            artist: 'kobasolo / 春茶',
            url: 'http://music.163.com/song/media/outer/url?id=1339044717.mp3',
            cover: 'http://p2.music.126.net/ErIn1C-8bLhROh0-wyljaw==/109951163894382465.jpg?param=130y130',
        },
        {
            name: '恋音と雨空',
            artist: '春茶',
            url: 'http://music.163.com/song/media/outer/url?id=1420072252.mp3',
            cover: 'http://p1.music.126.net/YydedMxFaskj7txCCekDCw==/109951164666603036.jpg?param=130y130',
        },
        {
            name: '貴方解剖純愛歌〜死ね〜',
            artist: '春茶',
            url: 'http://music.163.com/song/media/outer/url?id=1351268113.mp3',
            cover: 'http://p1.music.126.net/YydedMxFaskj7txCCekDCw==/109951164666603036.jpg?param=130y130',
        },
        {
            name: '灰色と青',
            artist: 'kobasolo / 春茶',
            url: 'http://music.163.com/song/media/outer/url?id=1339048598.mp3',
            cover: 'http://p1.music.126.net/YydedMxFaskj7txCCekDCw==/109951164666603036.jpg?param=130y130',
        },
        {
            name: 'ラブレター',
            artist: 'kobasolo / 春茶',
            url: 'http://music.163.com/song/media/outer/url?id=1354813259.mp3',
            cover: 'http://p2.music.126.net/b3XZOXy2wX_Ep8tWrzEmuQ==/109951163957110005.jpg?param=130y130',
        },
        {
            name: 'England Had a Queen',
            artist: 'Tamas Wells',
            url: 'http://music.163.com/song/media/outer/url?id=2001276.mp3',
            cover: 'http://p2.music.126.net/AgrA8qRLSgrFZ7NmxuU41w==/6665239487718933.jpg?param=130y130',
        },
        {
            name: 'The Crime at Edmond Lake',
            artist: 'Tamas Wells',
            url: 'http://music.163.com/song/media/outer/url?id=2001272.mp3',
            cover: 'http://p2.music.126.net/AgrA8qRLSgrFZ7NmxuU41w==/6665239487718933.jpg?param=130y130',
        },
        {
            name: 'Valder Fields',
            artist: 'Tamas Wells',
            url: 'http://music.163.com/song/media/outer/url?id=2001320.mp3',
            cover: 'http://p1.music.126.net/irlK0xcRGW8jw3wq165onw==/109951165361156638.jpg?param=130y130',
        },
    ]
});

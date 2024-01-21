let arrLang = {
    'en': {
        'title': 'Scientia sit potentia',
        'MainText': 'If you love a book, it will make your life easier, help you understand the motley and stormy confusion of thoughts, feelings, and events in a friendly way. She will teach you to respect a person and yourself, she inspires the mind and heart with a sense of love for the world, for humanity. M. Gorky'
    },
    'ru': {
        'title': 'Знание - это сила',
        'MainText': 'Любите книгу – она облегчит вам жизнь, дружески поможет разобраться в пёстрой и бурной путанице мыслей, чувств, событий. Она научит вас уважать человека и самих себя, она окрыляет ум и сердце чувством любви к миру, к человечеству. М. Горький'
    }
}

$(function(){
    $('.translate').click(function(){
        let lang = $(this).attr('id');
        $('[key]').each(function(){
            let key = $(this).attr('key');
            $(this).text(arrLang[lang][key]);
        })
    })
});
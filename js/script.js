$(document).ready(function(){

    
    $('input').keyup(function(event){
        if(event.keycode == 13 || event.which == 13){
            let postScritto = $('input').val();
            console.log(postScritto);
            $('input').val(' ');
            let post = $('.template .post').clone();
            post.append(postScritto);
            $('.test').append(post).children().addClass('active');
            let postAttivo = $('.test .active');
            console.log(postAttivo);
            
            
            setTimeout(function(){
                if ($('.notizie .test .post').firstchild().hasClass('active')){
                    
                }
            },5000);


            setTimeout(function () {
                let postAttivo = $('.test .post .active');
                $('.notizie .test .post').removeClass('active');
                postAttivo.next().addClass('active');
            }, 5000);

        };
    });



});














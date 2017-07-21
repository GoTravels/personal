$(function(){
        var head=$('.head');
        var closed=$('.closed');
        closed.click(function () {
            $(this).toggleClass('put');
            head.toggleClass('head1');
        });

        var fullpage=$('.boxs');
        fullpage.css('display','none');
        head.css('display','none');
        setTimeout(function () {
            fullpage.css('display','block');
            head.css('display','block');
        },2000);


        var radio=$('.uls li'),slides=$('.live',fullpage);
        var state={
            active:0,
            vh:$(window).height(),
            museflag:true
        }
        function current(){
            slides.removeClass('active');
            var value='translate(0,'+ - state.active * state.vh +'px)';
            fullpage.css({transform:value});
            slides.eq(state.active).addClass('active');
            radio.removeClass('hong').eq(state.active).addClass('hong');
        }
        radio.on('click',function(){
            state.active=$(this).index();
            current();
        });
        function onresize(){
            state.vh=($(window).height());
        }
        function headtransition(){
            state.museflag=true;
        }
        function next(){
            if(state.museflag){
                state.active=(state.active+1>4)?0:state.active+1;
                state.museflag=true;
                current()
            }
        }

        function prev(){
            if(state.museflag){
                state.active=(state.active-1<0)?0:state.active-1;
                state.museflag=true;
                current();
            }
        }
        $(window).resize(onresize);
        $(window).on('wheel',function(e){
            if(e.originalEvent.wheelDelta<0){
                next();
            }else if(e.originalEvent.wheelDelta>0){
                prev();
            }
        })
        fullpage.on('transitionend',headtransition);

        $(document).keydown(function(event){
            if (event.keyCode===40) {
                next();
            }else if(event.keyCode===38){
                prev();
            }
        })
	
	

	});

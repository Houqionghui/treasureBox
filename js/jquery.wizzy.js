

(function ($) {

    $.fn.wizzy = function (options) {

        let settings = $.extend({
            stepNumbers: false,
            progressType: 'fill',
        }, options);

        return this.each(function () {
            let elem = $(this);
            let nav = elem.find('.wz-header nav');
            let navigator = elem.find('.wz-navigator');
            let content = elem.find('.wz-inner');
            let contit = elem.find('.con_tit');


            let btnNext = '<a href="#" class="btn btn-primary right" data-action="next">下一题<i class="fas fa-angle-right"></i></a>';
            let btnBack = '<a href="#" class="btns btn-default left" data-action="back"><i class="fas fa-angle-left"></i>上一题</a>';
            // let btnFinish = '<a href="#" class="btn btn-success right" data-action="finish">完成 <i class="fas fa-check"></i></a>';
            let btnFinish = '<a href="#" class="btn btn-success right">去抽奖 <i class="fas fa-check"></i></a>';


            let step_links = elem.find('nav a').toArray();
            let step_count = step_links.length;
            let step_status = new Array(step_count);
            let step_content = elem.find('.wz-step').toArray();
            let link_width = $(step_links[0]).width();
            let step = 0;



          


            //未选中弹出
            function check() {
               
                //请求数据的
                //  $.ajax({
                //         url: ``,
                //         method: 'post',
                //         async: false,
                //         dataType: 'json',
                //         success: result => {
                //             imgData = result;//从服务器端获取到的结果
                //         }
                //     });

                let index = $(".active").index();
                // console.log(index);


                if (index === 0) {
                    $('.btn').click(function (e) {
                        let val = $('input:radio[name="back"]:checked').val();
                        if (val == null) {
                            alert('请选择')
                        } else {
                            e.preventDefault();
                            let action = $(this).data('action');
                            react(action);
                        }
                    })

                };
                if (index == 1) {
                    $('.btn').click(function () {
                        let val = $('input:radio[name="back1"]:checked').val();
                        if (val == null) {
                            alert('请选择')
                        } else {
                            let action = $(this).data('action');
                            react(action);


                        }
                    })

                };

                if (index == 2) {
                    $('.btn').click(function () {
                        let val = $('input:radio[name="back2"]:checked').val();
                        if (val == null) {
                            alert('请选择')
                        } else {
                            let action = $(this).data('action');
                            react(action);


                        }
                    })

                };
                if (index == 3) {
                    $('.btn').click(function () {
                        let val = $('input:radio[name="back3"]:checked').val();
                        if (val == null) {
                            alert('请选择')
                        } else {
                            let action = $(this).data('action');
                            react(action);


                        }
                    })

                };
                if (index == 4) {
                    $('.btn').click(function () {
                        let val = $('input:radio[name="back4"]:checked').val();
                        if (val == null) {
                            alert('请选择')
                        } else {
                            let action = $(this).data('action');
                            react(action);


                        }
                    })

                };
                if (index == 5) {
                    $('.btn').click(function () {
                        let val = $('input:radio[name="back5"]:checked').val();
                        if (val == null) {
                            alert('请选择')
                        } else {
                            let action = $(this).data('action');
                            react(action);


                        }
                    })

                };

                if (index == 6) {
                    $('.btn').click(function () {
                        let val = $('input:radio[name="back6"]:checked').val();
                        if (val == null) {
                            alert('请选择')
                        } else {
                            let action = $(this).data('action');
                            react(action);
                            window.location.href = "draw.html";
                           
                        }
                    })

                };

                //点击完成按钮跳转的
                // if (index == 6) {
                //     let inputa = 1;
                //     $('.btn').click(function () {
                //         console.log(1);
                //         if (inputa == 1) {
                           

                //         }
                //         else {
                //             alert('提交错误')
                //         }

                //     })
                // }

                $(document).ready(function(){
                    var param0 = $("input[name='back']").val();
                    
                    sessionStorage.setItem('num1', param0);
                  
                    
                    var param1 = $("input:radio[name='back1']:checked").val();
                   
                    // console.log(param1);
                    sessionStorage.setItem('num2', param1);
                    
                  
                    var param2 = $("input:radio[name='back2']:checked").val();
                  
                    sessionStorage.setItem('num3', param2);

                    var param3 = $("input:radio[name='back3']:checked").val();
                    
                    sessionStorage.setItem('num4', param3);
                     
                    
                    var param4 = $("input:radio[name='back4']:checked").val();
                    // console.log("param4:"+param4);
                    sessionStorage.setItem('num5', param4);

                    var param5 = $("input:radio[name='back5']:checked").val();
                   
                    sessionStorage.setItem('num6', param5);
                    
                    var param6 = $("input:radio[name='back6']:checked").val();
                    
                    sessionStorage.setItem('num7', param6);
                     
                    // console.log("stringify():"+JSON.stringify(param0));
                    // console.log(JSON.parse(param));
                     
                    
                    })
              
              
            }


            function init() {
                for (i = 1; i < step_count; i++) {
                    step_status[i] = 0;
                }
                step_status[0] = 1;
                updateTemplate();
                render();
            }

            function moveProgress(step) {
                if (settings.progressType == 'fill') {
                    let progressWidth = link_width * (step + 1);
                    nav.find('.progress').css({ 'width': progressWidth + 'px' });
                }
                if (settings.progressType == 'slide') {
                    nav.find('.progress').css({ 'width': link_width + 'px' });
                    let distance = link_width * (step);
                    nav.find('.progress').css({ 'left': distance + 'px' });
                }

            }

            function updateTemplate() {
                nav.append('<div class="progress"></div>');
                moveProgress(step);
                step_links.forEach(element => {
                    $(element).wrapInner('<span></span>');
                });
            }

            /**
             * 
             * @param {boolean} show 
             */
            function loader(show) {
                let loader = '<div class="loading"></div>';
                if (show === true) { //Show Loader Spinner
                    content.fadeOut(400, function () {
                        elem.addClass('progress');
                        setTimeout(() => {
                            elem.append(loader);
                        }, 500);
                    });
                }
                else {
                    elem.find('.loading').remove();
                    elem.removeClass('progress');
                    setTimeout(() => {
                        content.fadeIn(400);
                    }, 400);
                }
            }

            /**
             * 
             * @param {string} action 
             */

            function react(action) {

                if (step >= 0 && step < step_count) {
                    if (action === 'next') {
                        step_status[step++] = 1;
                        if (step_status[step] === 0) {
                            step_status[step] = 1;
                        }
                        render(step);
                    }
                    else if (action == 'back') {
                        step--;
                        render(step);
                    }
                    else if (action == 'finish') {
                        loader(true);
                        setTimeout(() => {
                            loader(false);
                        }, 3000);
                    }
                }

            }

            // 渲染内容
            function render() {
                navigator.html('');

                if (step === 0) {
                    navigator.append(btnNext);


                }

                else if (step === step_count - 1) {
                    navigator.append(btnBack + btnFinish);
                }
                else {
                    navigator.append(btnBack + btnNext);
                }
                elem.find('nav a').removeClass('active completed');
                for (i = 0; i < step; i++) {
                    $(step_links[i]).addClass('completed');
                }
                $(step_links[i]).addClass('active');

                elem.find('.wz-body .wz-step').removeClass('active');
                $(step_content[step]).addClass('active');

                moveProgress(step);
                check();
                // referForm()

            }

            /**
             * Click events
             */
            $(elem).on('click', '.wz-navigator .btns', function (e) {
                e.preventDefault();
                let action = $(this).data('action');
                react(action);
            });


            $(elem).on('click', 'nav a', function (e) {
                e.preventDefault();
                let step_check = $(this).index();
                if (step_status[step_check] === 1 || step_status[step_check] === 2) {
                    step = $(this).index();
                    render();
                }
                else {
                    console.log('Check errors');
                }
            });


            init();



        });
    }


}(jQuery));
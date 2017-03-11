$(document).ready(()=>{
  const quizz=[
    {
      question: '1. Which nation won the most World Cups?',
      options:[
        {
          op: 'Argentina',
          val: 'inc'
        },
        {
          op: 'Germany',
          val: 'inc'
        },
        {
          op: 'Brazil',
          val: 'ans'
        },
        {
          op: 'Italy',
          val: 'inc'
        }
      ]
    },
    {
      question:'2. Which country won the first World Cup?',
      options:[
        {
          op:'Spain',
          val:'inc'
        },
        {
          op:'Uruguay',
          val:'ans'
        },
        {
          op:'Brazil',
          val:'inc'
        },
        {
          op:'France',
          val:'inc'
        }
      ]
    },
    {
      question:'3. Which country is hosting the next World Cup',
      options:[
        {
          op:'United States',
          val:'inc'
        },
        {
          op:'Qatar',
          val:'inc'
        },
        {
          op:'South Africa',
          val:'inc'
        },
        {
          op:'Russia',
          val:'ans'
        }
      ]
    },
    {
      question:'4. When did the United States hosted the World Cup',
      options:[
        {
          op:'1994',
          val:'ans'
        },
        {
          op:'2006',
          val:'inc'
        },
        {
          op:'1986',
          val:'inc'
        },
        {
          op:'2002',
          val:'inc'
        }
      ]
    },
    {
      question:'5. Which was the first African country to host a World Cup',
      options:[
        {
          op:'South Africa',
          val:'ans'
        },
        {
          op:'Togo',
          val:'inc'
        },
        {
          op:'Nigeria',
          val:'inc'
        },
        {
          op:'Cameroon',
          val:'inc'
        }
      ]
    }
  ]

  $('.opener button').on('click',()=>{
    $('.opener').addClass('hidden')
    $('.quizz').removeClass('hidden')
    getQuizz(i, quizz, right, wrong)
  })
  let i=0
  let right=0, wrong=0

  function getQuizz(i, quizz, right, wrong){
    let j=0
    const counter = quizz.length;
    if(i < counter){
      $('.quizz h2').text(quizz[i].question)
      $('form').empty()
      while(j < quizz[i].options.length){
        $('form').append('<label>'+quizz[i].options[j].op+'</label><input name="test" type="radio" value="'+quizz[i].options[j].val+'">')
        j++
      }
      $('input[name="test"]').on('click',(e)=>{
        const $this = $(e.currentTarget)
        $('.btn_hidden').removeClass('btn_hidden')
        $('.counter').css('display', 'flex')
        if($this.val() === 'ans'){
          $this.prev().css('background-color','#23bb97')
          $('.correct').css('display','block')
          $('.right').text(right+=1)
        }else{
          $this.prev().css('background-color', '#e35138');
          $('.incorrect').css('display','block')
          $('.wrong').text(wrong+=1)
        }
        $this.parent().children('input').prop('disabled',true)
      })
      $('.current_question').text((i+1)+'/'+quizz.length)
      $('.next').on('click',(e)=>{
        const $this = $(e.currentTarget)
        i++;
        $('.correct, .incorrect').css('display','none')
        $this.addClass('btn_hidden')
        getQuizz(i, quizz, right, wrong)
      })
    }
  }
})

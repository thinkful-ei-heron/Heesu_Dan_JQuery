function showResult() {
    $('#number-chooser').submit(event => {
      // this stops the default form submission behavior
      event.preventDefault();
      let num = $(event.currentTarget).find('#number-choice').val();
      console.log(num);
      num = parseInt(num);
      let buzzResult = [];
      for(let i=1; i<=num; i++) {
          buzzResult.push(createHtml(fizzBuzz(i)));
      }
      console.log(buzzResult);
      const html = buzzResult;
      $('.js-results').html(html);
    });  
};

function fizzBuzz(num) {
    if(num%15 ===0) return 'fizzbuzz';
    if(num%5 ===0) return 'fizz';
    if(num%3 ===0) return 'buzz';
    return num;
};

function createHtml(result) {
    let className = '';
    if(typeof result === 'string') {
        className = result;
    }
    return `
    <div class="fizz-buzz-item ${className}">
        <span>${result}</span>
    </div>
    `
};

$(showResult);


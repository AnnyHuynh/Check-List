// $('.form')
//   .find('input, textarea')
//   .on('keyup blur focus', function(e) {
//     var $this = $(this),
//     label = $this.prev('label');

//     if (e.type === 'keyup') {
//     if ($this.val() === '') {
//         label.removeClass('active highlight');
//       } else {
//       label.addClass('active highlight');
//       }
//   } else if (e.type === 'blur') {
//       if ($this.val() === '') {
//         label.removeClass('active highlight');
//       } else {
//         label.removeClass('highlight');
//       }
//   } else if (e.type === 'focus') {
//       if ($this.val() === '') {
//         label.removeClass('highlight');
//     }
//     else if( $this.val() !== '' ) {
//         label.addClass('highlight');
//       }
//   }
//   });

// $('.tab a').on('click', function(e) {
//   e.preventDefault();

//   $(this)
//     .parent()
//     .addClass('active');
//   $(this)
//     .parent()
//     .siblings()
//     .removeClass('active');

//   target = $(this).attr('href');

//   $('.tab-content > div')
//     .not(target)
//     .hide();

//   $(target).fadeIn(600);
// });

toggleVisibility = function(id) {
  var e = document.getElementById(id);

  if (e.id === 'signin') {
    e.style.display = 'none';
    $('#signup').css('display', 'block');
  } else {
    e.style.display = 'none';
    $('#signin').css('display', 'block');
  }

  if (e.id === 'userprofile') {
    if (e.style.display === 'none') {
      $('#userprofile').css('display', 'block');
      $('.findgroups').css('display', 'none');
    } else {
      $('#userprofile').css('display', 'none');
      $('.findgroups').css('display', 'block');
    }
  }
};

$('#register-button').click(function(event) {
  event.preventDefault();
  $('#register').removeClass('register-display');
  $('.login-form').hide('slow');
});

$('#sign-in').click(function() {
  console.log('sign me in please');
  $('#register').addClass('register-display');
  $('.login-form').show('slow');
});

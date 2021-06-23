(function (window, document) {
    var menu = document.getElementById('menu'),
      WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange':'resize';
    
    function toggleHorizontal() {
        [].forEach.call(
          document.getElementById('menu').querySelectorAll('.custom-can-transform'),
        function(el){
          el.classList.toggle('pure-menu-horizontal');
        }
      );
    };
    
    function toggleMenu() {
      // set timeout so that the panel has a chance to roll up
      // before the menu switches states
      if (menu.classList.contains('open')) {
        setTimeout(toggleHorizontal, 500);
      }
      else {
        toggleHorizontal();
      }
      menu.classList.toggle('open');
      document.getElementById('toggle').classList.toggle('x');
    };
    
    function closeMenu() {
      if (menu.classList.contains('open')) {
        toggleMenu();
      }
    }
    
    document.getElementById('toggle').addEventListener('click', function (e) {
      toggleMenu();
    });
    
    window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
    })(this, this.document);
    
    
    ;(function () {
    
      window.Sqzme = {};
    
      var FlashMessage = {
        clear: function () {
          var fm = document.getElementsByClassName('sqzme-flash-message');
    
          if (fm.length > 0) {
            setTimeout(function () {
              fm[0].style.display = 'none';
            }, 3000);
          }
        }
      };
    
      window.Sqzme.FlashMessage = FlashMessage;
    
      /* on load */
      $(document).ready(function ($) {
        FlashMessage.clear();
    
        $('.sqzme-ticker-select').select2({
          ajax: {
            url: '/monitor/p/util/ticker',
            dataType: 'json',
            delay: 250,
            data: function (p) {
              return {
                q: p.term
              };
            },
            processResults: function (data, p) {
              return {
                results: data
              };
            },
          },
        });
        $('.sqzme-ticker-submit').click(function () {
          if (!$('.sqzme-ticker-select').val()) {
            return false;
          }
        });
      });
    
    })();
    
import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

declare var jQuery: any; // Si tienes @types/jquery, puedes cambiar 'any' por 'JQueryStatic'

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initTheme(): void {
    this.setupStellar();
    this.fullHeight();
    this.loader();
    this.carousel();
    this.dropdownHover();
    this.magnificPopupSetup();
    this.counter();
    this.contentWayPoint();
  }

  private setupStellar(): void {
    jQuery(window).stellar({
      responsive: true,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: 'scroll'
    });
  }

  private fullHeight(): void {
    const setFullHeight = () => {
      jQuery('.js-fullheight').css('height', jQuery(window).height());
    };

    setFullHeight();

    jQuery(window).resize(setFullHeight);
  }

  private loader(): void {
    setTimeout(() => {
      if (jQuery('#ftco-loader').length > 0) {
        jQuery('#ftco-loader').removeClass('show');
      }
    }, 1);
  }

  private carousel(): void {
    jQuery('.home-slider').owlCarousel({
      // ... opciones aquí
    });

    jQuery('.carousel-testimony').owlCarousel({
      // ... opciones aquí
    });
  }

  private dropdownHover(): void {
    jQuery('nav .dropdown').hover(function() {
      const $this = jQuery(this);
      $this.addClass('show');
      $this.find('> a').attr('aria-expanded', true);
      $this.find('.dropdown-menu').addClass('show');
    }, function() {
      const $this = jQuery(this);
      $this.removeClass('show');
      $this.find('> a').attr('aria-expanded', false);
      $this.find('.dropdown-menu').removeClass('show');
    });

    jQuery('#dropdown04').on('show.bs.dropdown', function() {
      console.log('show');
    });
  }

  private magnificPopupSetup(): void {
    jQuery('.image-popup').magnificPopup({
      // ... opciones aquí
    });

    jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      // ... opciones aquí
    });
  }

  private counter(): void {
    jQuery('#section-counter').waypoint((direction) => {
      if (direction === 'down' && !jQuery(this.element).hasClass('ftco-animated')) {
        jQuery('.number').each(function() {
          const $this = jQuery(this);
          const num = $this.data('number');
          $this.animateNumber({ number: num }, 7000);
        });
      }
    }, { offset: '95%' });
  }

  private contentWayPoint(): void {
    jQuery('.ftco-animate').waypoint((direction) => {
      if (direction === 'down' && !jQuery(this.element).hasClass('ftco-animated')) {
        jQuery(this.element).addClass('item-animate');
        setTimeout(() => {
          jQuery('body .ftco-animate.item-animate').each(function(k) {
            const el = jQuery(this);
            setTimeout(() => {
              const effect = el.data('animate-effect');
              if (effect) el.addClass(`${effect} ftco-animated`);
              el.removeClass('item-animate');
            }, k * 50);
          });
        }, 100);
      }
    }, { offset: '95%' });
  }

}

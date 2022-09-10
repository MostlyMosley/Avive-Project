import {Component, OnInit, Renderer2, ViewChild, ElementRef, HostListener} from '@angular/core';
import {NavigationEnd, Route, Router} from '@angular/router';
import { Location} from '@angular/common';
import {MainLayoutRoutes} from "../main-layout.routing";

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit{
    // private listTitles: any[];
    // location: Location;
    // private nativeElement: Node;
    // private toggleButton;
    // private sidebarVisible: boolean;
    //
    // public isCollapsed = true;
    // @ViewChild("navbar-cmp", {static: false}) button;
    //
    // constructor(location:Location, private renderer : Renderer2, private element : ElementRef, private router: Router) {
    //     this.location = location;
    //     this.nativeElement = element.nativeElement;
    //     this.sidebarVisible = false;
    // }
    //
    // ngOnInit(){
    //     this.listTitles = ROUTES.filter(listTitle => listTitle);
    //     var navbar : HTMLElement = this.element.nativeElement;
    //     this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    //     this.router.events.subscribe((event) => {
    //       this.sidebarClose();
    //    });
    // }
    // getTitle(){
    //   var titlee = this.location.prepareExternalUrl(this.location.path());
    //   if(titlee.charAt(0) === '#'){
    //       titlee = titlee.slice( 1 );
    //   }
    //   for(var item = 0; item < this.listTitles.length; item++){
    //       if(this.listTitles[item].path === titlee){
    //           return this.listTitles[item].title;
    //       }
    //   }
    //   return 'Dashboard';
    // }
    // sidebarToggle() {
    //     if (this.sidebarVisible === false) {
    //         this.sidebarOpen();
    //     } else {
    //         this.sidebarClose();
    //     }
    //   }
    //   sidebarOpen() {
    //       const toggleButton = this.toggleButton;
    //       const html = document.getElementsByTagName('html')[0];
    //       const mainPanel =  <HTMLElement>document.getElementsByClassName('main-panel')[0];
    //       setTimeout(function(){
    //           toggleButton.classList.add('toggled');
    //       }, 500);
    //
    //       html.classList.add('nav-open');
    //       if (window.innerWidth < 991) {
    //         mainPanel.style.position = 'fixed';
    //       }
    //       this.sidebarVisible = true;
    //   };
    //   sidebarClose() {
    //       const html = document.getElementsByTagName('html')[0];
    //       const mainPanel =  <HTMLElement>document.getElementsByClassName('main-panel')[0];
    //       if (window.innerWidth < 991) {
    //         setTimeout(function(){
    //           mainPanel.style.position = '';
    //         }, 500);
    //       }
    //       this.toggleButton.classList.remove('toggled');
    //       this.sidebarVisible = false;
    //       html.classList.remove('nav-open');
    //   };
    //   collapse(){
    //     this.isCollapsed = !this.isCollapsed;
    //     const navbar = document.getElementsByTagName('nav')[0];
    //     console.log(navbar);
    //     if (!this.isCollapsed) {
    //       navbar.classList.remove('navbar-transparent');
    //       navbar.classList.add('bg-white');
    //     }else{
    //       navbar.classList.add('navbar-transparent');
    //       navbar.classList.remove('bg-white');
    //     }
    //
    //   }


  public isCollapsed = true;
  activeRoute: string = '';
  sideNavOpen: boolean = false;
  windowIsMobile: boolean = false;
  private html = document.getElementsByTagName('html')[0];
  private mainPanel =  document.getElementsByClassName('main-panel')[0] as HTMLElement;

  constructor(public router: Router) {}

  ngOnInit(): void{
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.url.replace('/', '');
        // tslint:disable-next-line:no-shadowed-variable
        const route = MainLayoutRoutes.find((route: Route) => route.path === url);
        if (route && route.data && route.data.title) {
          this.activeRoute = route.data.title.toString();
        } else {
          this.activeRoute = 'Page Not Found :(';
        }
      }
    });
    this.onWindowResize();
  }
  toggleSideNav(): void {
    if (this.sideNavOpen) this.closeSideNav(); else this.openSideNav();
  }
  closeSideNav(): void {
    this.html.classList.remove('nav-open');
    if (window.innerWidth < 991) setTimeout(() => this.mainPanel.style.position = 'fixed', 500);
    this.sideNavOpen = false;
  }
  openSideNav(): void {
    this.html.classList.add('nav-open');
    if (window.innerWidth > 991) this.mainPanel.style.position = '';
    this.sideNavOpen = true;
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize(): void {
    this.collapse(true);
    const width = window.innerWidth;
    if (width < 991) {
      this.windowIsMobile = true;
      if (this.sideNavOpen) {
        this.closeSideNav();
      }
    } else {
      this.windowIsMobile = false;
      this.mainPanel.style.position = '';
      if (!this.sideNavOpen) {
        this.openSideNav();
      }
    }
  }

  collapse(force?: boolean): void {
    this.isCollapsed = force ? force : !this.isCollapsed;
    const navbar = document.getElementsByTagName('nav')[0];
    if (!this.isCollapsed) {
      if (window.innerWidth < 991) {
        navbar.classList.remove('navbar-transparent');
        navbar.classList.add('bg-white');
      }
    }else{
      navbar.classList.add('navbar-transparent');
      navbar.classList.remove('bg-white');
    }
  }
}

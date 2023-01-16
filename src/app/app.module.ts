import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from "ngx-accordion";
import { StickyNavModule } from 'ng2-sticky-nav';
import { TabsModule } from 'ngx-tabset';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CountUpModule } from 'ngx-countup';
import { IconsService } from './components/common/icons/icons.service';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { NavbarStyleOneComponent } from './components/common/navbar-style-one/navbar-style-one.component';
import { WebHostingDemoComponent } from './components/pages/web-hosting-demo/web-hosting-demo.component';
import { PcRepairDemoComponent } from './components/pages/pc-repair-demo/pc-repair-demo.component';
import { IotDemoComponent } from './components/pages/iot-demo/iot-demo.component';
import { NavbarStyleTwoComponent } from './components/common/navbar-style-two/navbar-style-two.component';
import { MachineLearningDemoComponent } from './components/pages/machine-learning-demo/machine-learning-demo.component';
import { MachineLearningDemo2Component } from './components/pages/machine-learning-demo2/machine-learning-demo2.component';
import { DigitalAgencyDemoComponent } from './components/pages/digital-agency-demo/digital-agency-demo.component';
import { DigitalAgencyPortfolioDemoComponent } from './components/pages/digital-agency-portfolio-demo/digital-agency-portfolio-demo.component';
import { BigDataAnalyticsDemoComponent } from './components/pages/big-data-analytics-demo/big-data-analytics-demo.component';
import { NavbarStyleThreeComponent } from './components/common/navbar-style-three/navbar-style-three.component';
import { NavbarStyleFourComponent } from './components/common/navbar-style-four/navbar-style-four.component';
import { NavbarStyleFiveComponent } from './components/common/navbar-style-five/navbar-style-five.component';
import { NavbarStyleSixComponent } from './components/common/navbar-style-six/navbar-style-six.component';
import { HomeDemoStaticImageComponent } from './components/pages/home-demo-static-image/home-demo-static-image.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { BlogRightSidebarComponent } from './components/pages/blog-right-sidebar/blog-right-sidebar.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { TeamComponent } from './components/pages/team/team.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { About1Component } from './components/pages/about1/about1.component';
import { About2Component } from './components/pages/about2/about2.component';
import { About3Component } from './components/pages/about3/about3.component';
import { FeaturesComponent } from './components/pages/features/features.component';
import { FeaturesDetailsComponent } from './components/pages/features-details/features-details.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ProjectsDetailsComponent } from './components/pages/projects-details/projects-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeDemoOneComponent,
    HomeDemoTwoComponent,
    NavbarStyleOneComponent,
    WebHostingDemoComponent,
    PcRepairDemoComponent,
    IotDemoComponent,
    NavbarStyleTwoComponent,
    MachineLearningDemoComponent,
    MachineLearningDemo2Component,
    DigitalAgencyDemoComponent,
    DigitalAgencyPortfolioDemoComponent,
    BigDataAnalyticsDemoComponent,
    NavbarStyleThreeComponent,
    NavbarStyleFourComponent,
    NavbarStyleFiveComponent,
    NavbarStyleSixComponent,
    HomeDemoStaticImageComponent,
    ContactComponent,
    NotFoundComponent,
    BlogGridComponent,
    BlogRightSidebarComponent,
    BlogDetailsComponent,
    ProductsComponent,
    ProductsDetailsComponent,
    CartComponent,
    CheckoutComponent,
    ComingSoonComponent,
    TeamComponent,
    PricingComponent,
    FaqComponent,
    About1Component,
    About2Component,
    About3Component,
    FeaturesComponent,
    FeaturesDetailsComponent,
    ServicesComponent,
    ServicesDetailsComponent,
    ProjectsComponent,
    ProjectsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgxScrollTopModule,
    IconsService,
    CountUpModule,
    StickyNavModule,
    TabsModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
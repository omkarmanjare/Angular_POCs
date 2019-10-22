import {Component} from '@angular/core'  //this is what helps you to bring the required references

@Component({
selector : 'pm-root',                    // you add this to let know what is the html element where 
                                        //the respective html of this component will be visible
template : `<div>
              <h1> {{pageTitle}} </h1>
              <pm-products></pm-products>       
            </div>`

})

export class AppComponent{
  pageTitle:string = 'ACME Product Managemnet';                    //here pageTitle is a property of app.component
}
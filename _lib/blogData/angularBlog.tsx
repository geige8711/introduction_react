import { BlogQuestionItem } from "./types";

// { &#123;
// } &#125;
// [ &#91;
// ] &#93;
// < &lt;
// = &#61;
// > &gt;
// ( &#40;
// ) &#4;

export const angular: BlogQuestionItem[] = [
    {
        q: "Different Angular version has different default component type.",
        a: (
            <div>
                <p>
                    With the release of Angular 19, standalone components became
                    the default for new Angular components.
                </p>
                <p>
                    That means that if you DON&apos;T set standalone: false
                    (e.g., if you don&apos;t set standalone at all) inside of
                    @Component(), you&apos;ll get a standalone component
                </p>
                <p>
                    In older Angular versions (&lt; 19), it was exactly the
                    other way around: Module-based components were the default -
                    i.e., you had to explicitly set standalone: true to get a
                    standalone component. Not setting standalone at all would
                    give you a Module-based component.
                </p>
                <p>
                    Standalone component can have imports of standalone
                    components array. For example:
                    {`
                    @Component({
                        selector: 'app-root',
                        templateUrl: './app.component.html',
                        imports: [HeaderComponent, UserComponent, TasksComponent]
                    })
                    export class AppComponent {
                        ...
                    }
                    `}
                    in the array, all components have to be standlone component.
                </p>
                <p>Module-based componet do not have imports array</p>
                <p>
                    in the main.ts file, for standalone based project:
                    {`
                    bootstrapApplication(AppComponent).catch((err)=>console.error(err));
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "How do modules work",
        a: (
            <div>
                <p>
                    first create a app.modules.ts file in the app folder, with
                    following:
                </p>
                <p>
                    {`
                    import { NgModule } from '@angular/core';
                    import { BrowserModule } from '@angular/platform-browser';
                    import { FormsModule } from '@angular/forms';

                    import { AppComponent } from './app.component';
                    import { HeaderComponent } from './header.component';
                    import { UserComponent } from './user.component';
                    import { TasksComponent } from './tasks.component';

                    @NgModule({
                        declarations: [AppComponent, HeaderComponent, UserComponent],
                        bootstrap: [AppComponent],
                        imports: [BrowserModule, TasksComponent, FormsModule]
                    })
                    export class AppModule {}
                    `}
                    in the declarations, it contains all components that will be
                    used in the project, and all these components must be
                    module-based components.
                    <br /> for the bootstrap, it should have only one component,
                    which is the root component for the project.
                    <br /> for imports array, not only used for enabling
                    standalone components but also for including other modules.
                    <br /> for module-based project, BrowserModule must be
                    imported, and only can be imported in the root app.module.ts
                    <br /> FormsModule can allow us to use two ways binding:
                    [(ngModel)]
                </p>
                <p>
                    {`
                    import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
                    import { AppModule } from './app/app.module';

                    platformBrowserDynamic().bootstrapModule(AppModule);
                    `}
                </p>
                <p>
                    In the module-based project, it is very common to create
                    shared modules, create a file shared.modules.ts with
                    following:
                    {`
                    import { NgModule } from '@angular/core';

                    import { CardComponent } from './card.component';

                    @NgModule({
                        declarations: [CardComponent],
                        exports: [CardComponent],
                        imports: [FormsModule]
                    })
                    export class SharedModule {}
                    `}
                    <br /> SharedModule is independent module, if in the
                    declarations there are components that use two way binds, it
                    has to import formModule by itself, can not inherit from
                    parent modules.
                    <br /> then we have to import it in the app.module.ts file
                    like this:
                    {`
                    @NgModule({
                        declarations: [AppComponent, HeaderComponent, UserComponent],
                        bootstrap: [AppComponent],
                        imports: [BrowserModule, TasksComponent, FormsModule, SharedModule]
                    })
                    export class AppModule {}
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "How to configure image assets in Angular",
        a: (
            <div>
                <p>
                    in the angular.json file, we can set up assets attribute
                    like this:
                    {`
                    "assets": [
                        "src/favicon.ico",
                        "src/assets",
                        {
                            "glob": "**/*",
                            "input": "public"
                        }
                    ]
                    `}
                    <br /> in the src folder to create folder assets, put images
                    into assets folder.
                    <br /> in the html template file, it can be used like this:
                    {`
                    <img src="assets/logo.png"/>
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "commonly used Angular Cli command",
        a: (
            <div>
                <p>
                    install angular cli globally:
                    {`
                        npm install -g @angular/cli
                    `}
                </p>
                <p>
                    generate component:
                    {`
                    ng generate component header
                    `}
                    or short code:
                    {`
                    ng g c header
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "html element property bind",
        a: (
            <div>
                <p>
                    use square bracket to bind property without curly brackets:
                    {`
                    <img [src]="selectedUser.avatar"/>
                    `}
                </p>
                <p>
                    access data to dispaly with curly brackets:
                    {`
                    <div>{{selectedUser.name}}</div>
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "html input element two ways binding",
        a: (
            <div>
                <p>
                    1. use ngModel
                    {`
                    <input type="text" [(ngModel)]="enteredTitle"/>
                    `}
                    in the component.ts file need to import FormsModule from
                    @angular/forms
                    {`
                    import { FormsModule } from '@angular/forms';

                    @Component({
                        selector: 'app-user',
                        templateUrl: './user.component.html',
                        imports: [FormsModule]
                    })
                    export class UserComponent {
                        enteredTitle=''
                    }
                    `}
                </p>
                <p>
                    2. use signal, it can ready signal automatically, no need to
                    call
                </p>
                {`
                    <input type="text" [(ngModel)]="enteredTitle"/>
                `}
                in the component.ts file need to import FormsModule from
                @angular/forms and signal
                {`
                    import { FormsModule } from '@angular/forms';
                    import { signal } from '@angular/core';

                    @Component({
                        selector: 'app-user',
                        templateUrl: './user.component.html',
                        imports: [FormsModule]
                    })
                    export class UserComponent {
                        enteredTitle =  signal('');
                    }
                `}
                <p>
                    3. combination of Input and Output, variable name must be
                    same, and Output variable name wiht Change ending.
                </p>
                {`
                    import { Output, Input } from '@angular/core';

                    @Component({
                        selector: 'app-user',
                        templateUrl: './user.component.html',
                        imports: []
                    })
                    export class UserComponent {
                        @Input({ required: true }) size!: {width: string; height: string};
                        @Output() sizeChange = new EventEmitter<{width: string; height: string}>();

                        onReset() {
                            this.sizeChange.emit({
                                width: '200',
                                height: '100'
                            });
                        }
                    }
                `}
                <p>4. using model after Angular 17.2.</p>
                {`
                    import { model } from '@angular/core';

                    @Component({
                        selector: 'app-user',
                        templateUrl: './user.component.html',
                        imports: []
                    })
                    export class UserComponent {
                        size = model.required<{width: string; height: string}>();

                        onReset() {
                            this.size.set({
                                width: '200',
                                height: '100'
                            });
                        }
                    }
                `}
            </div>
        ),
        r: "self summary",
    },
    {
        q: "html element attributes bind",
        a: (
            <div>
                <p>
                    use square bracket to bind property without curly brackets:
                    {`
                    <div 
                        role="progressbar" 
                        [attr.aria-valuenow]="currentVal" 
                        [attr.aria-valuemax]="maxVal">
                        ...
                    </div>
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "html element event listening",
        a: (
            <div>
                <p>
                    use bracket to listen:
                    {`
                    <div 
                        (click)="onClick()"
                        ...
                    </div>
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to use computed value",
        a: (
            <div>
                <p>
                    1. use get method
                    {`
                    @Component({
                        selector: 'app-user',
                        templateUrl: './user.component.html',
                    })
                    export class UserComponent {
                        selectedUser = DUMMY_USERS[randomIndex];

                        get imagePath(){
                            return 'assets/users/' + this.selectedUser.avatar;
                        }
                    }
                    `}
                    then can be used in html template like this:
                    {`
                    <img [src]="imagePath"/>
                    `}
                    <br /> without brackets like a normal property
                </p>
                <p>
                    2. use computed and signal together
                    {`
                    import { computed, input} from '@angular/core';
                    @Component({
                        selector: 'app-user',
                        templateUrl: './user.component.html',
                    })
                    export class UserComponent {
                        avatar = input.required<string>();
                        imagePath = computed(()=>'assets/users/' + this.avatar())
                    }
                    `}
                    then this computed property is also a signal, need to be
                    called in html template:
                    {`
                    <img [src]="imagePath()"/>
                    `}
                    <br /> with brackets like a normal signal
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to manage state and change data",
        a: (
            <div>
                <p>
                    1. directly assign value to the property, relying on Zone.js
                    and Angular&apos;s change detection mechanism to update DOM
                    automatically.
                    {`
                    @Component({
                        selector: 'app-user',
                        templateUrl: './user.component.html',
                    })
                    export class UserComponent {
                        selectedUser = DUMMY_USERS[randomIndex];

                        onClick(){
                            this.selectedUser = DUMMY_USERS[randomIndex];
                        }
                    }
                    `}
                </p>
                <p>
                    2. using Signals to notify Angular about value changes and
                    required UI updates, supported since Angular 16
                    {`
                    import { signal } from '@angular/core';

                    @Component({
                        selector: 'app-user',
                        templateUrl: './user.component.html',
                    })
                    export class UserComponent {
                        selectedUser = signal<User>(DUMMY_USERS[randomIndex]);

                        onClick(){
                            this.selectedUser.set(DUMMY_USERS[randomIndex]);
                        }
                    }
                    `}
                    when used in html template, it has to be called like
                    function:
                    {`
                    <img [src]="selectedUser().avatar"/>
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to define component properties",
        a: (
            <div>
                <p>
                    1. using @Input decorator.
                    {`
                    import { Input } from '@angular/core';

                    @Component({
                        selector: 'app-user',
                        templateUrl: './user.component.html',
                    })
                    export class UserComponent {
                        @Input({required: true}) avatar!:string;
                        @Input() name?:string; // optional property
                    }
                    `}
                    <br /> then, it can be used in the parent html template:
                    {`
                    <app-user [avatar]="users[0].avatar"/>
                    `}
                </p>
                <p>
                    2. using input signal, reminder: input signal can not use
                    set method, it is read only
                    {`
                    import { input } from '@angular/core';

                    @Component({
                        selector: 'app-user',
                        templateUrl: './user.component.html',
                    })
                    export class UserComponent {
                        avatar = input.required<string>();
                        imageUrl = input<string>(); // optional property
                    }
                    `}
                    <br /> then, it can be used in html template:
                    {`
                    <app-user [avatar]="users[0].avatar"/>
                    `}
                    <br /> if want to access the property value in the self html
                    template user.component.html, need like a signal to call
                    function
                    {`
                    <div>{{avatar()}}</div>
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to pass data from child component to parent component",
        a: (
            <div>
                <p>
                    1. using @Output decorator.
                    {`
                    import { Output, EventEmitter } from '@angular/core';

                    @Component({
                        selector: 'app-user',
                        templateUrl: './user.component.html',
                    })
                    export class UserComponent {
                        @Output() select = new EventEmitter<string>();

                        onClick(){
                            this.select.emit("id");
                        }
                    }
                    `}
                    <br /> then, it can be used in the parent html template:
                    {`
                    <app-user (select)="onSelectUser($event)"/>
                    `}
                    $event holds the value that is from child
                </p>
                <p>
                    2. using output
                    {`
                    import { output } from '@angular/core';

                    @Component({
                        selector: 'app-user',
                        templateUrl: './user.component.html',
                    })
                    export class UserComponent {
                        select = output<string>();

                        onClick(){
                            this.select.emit("id");
                        }
                    }
                    `}
                    <br /> then, it can be used in the parent html template:
                    {`
                    <app-user (select)="onSelectUser($event)"/>
                    `}
                    $event holds the value that is from child
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to loop a list",
        a: (
            <div>
                <p>
                    1. using @for.(only after Angular version17)
                    {`
                    @for (user of users; track user.id) {
                        <li>
                            <app-user [user]="user" (select)="onSelectUser($event)"/>
                            {{ $first }} to check if element is first or not
                            {{ $last }} to check if element is last or not
                            {{ $odd }} to check if element is odd or not
                            {{ $even }} to check if element is even or not
                            {{ $count }} is total count of items for users array
                            {{ $index }} is element index
                        </li>
                    } @empty {
                        <p>No Users if users is empty array, will fallback to @empty</p>
                    }
                    `}
                </p>
                <p>
                    2. using ngFor
                    {`
                    <li *ngFor="let user of users; index as i">
                        <app-user [user]="user" (select)="onSelectUser($event)"/>
                    </li>
                    `}
                    in the component.ts file, we have to import NgFor:
                    {`
                    import { NgFor } from '@angular/common';

                    @Component({
                        selector: 'app-user',
                        templateUrl: './user.component.html',
                        imports: [NgFor]
                    })
                    export class UserComponent {
                        ...
                    }
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to output conditionally",
        a: (
            <div>
                <p>
                    1. using @if.(only after Angular version17)
                    {`
                    @if (selectedUser) {
                        <app-user [name]="selectedUser.name"/>
                    } @else {
                        <p>no user selected</p>
                    }
                    `}
                </p>
                <p>
                    2. using ngIf
                    {`
                    <app-user *ngIf="selectedUser; else fallback" [name]="selectedUser!.name"/>
                    <ng-template #fallback>
                        <p>no user selected</p>
                    </ng-template>
                    `}
                    in the component.ts file, we have to import NgIf:
                    {`
                    import { NgIf } from '@angular/common';

                    @Component({
                        selector: 'app-user',
                        templateUrl: './user.component.html',
                        imports: [NgIf]
                    })
                    export class UserComponent {
                        ...
                    }
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to define model for each component",
        a: (
            <div>
                <p>
                    1. create user.model.ts file, in the file:
                    {`
                    export interface User {
                        id: string;
                        avatar: string;
                        name: string;
                    }
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to add conditinal class",
        a: (
            <div>
                <p>
                    1. if we want to add active class, we can do like this:
                    {`
                    <button [class.active]="selected">Submit</button>
                    `}
                </p>
                <p>
                    2. bind ngClass:
                    {`
                    <nav [ngClass]="{ 'bg-amber-50': isActive }"></nav>
                    `}
                    in the component.ts file need to import CommonModule
                    {`
                    import { CommonModule } from '@angular/common';

                    @Component({
                        selector: 'app-user',
                        templateUrl: './user.component.html',
                        imports: [CommonModule]
                    })
                    export class UserComponent {
                        ...
                    }
                    `}
                </p>
                <p>
                    3. bind class:
                    {`
                    <nav [class]="{ 'bg-amber-50': isActive }"></nav>
                    `}
                </p>
                <p>
                    there is no difference between binding [class] and [ngClass]
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to add inline style dynamically",
        a: (
            <div>
                <p>
                    1. bind single attribute of style:
                    {`
                    <button [style.height]="selected ? '0px' : '10px'">Submit</button>
                    `}
                </p>
                <p>
                    2. bind multiple style attributes:
                    {`
                    <nav [style]="{ fontSize: isActive ? '20px' : '30px' }"></nav>
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to add children html",
        a: (
            <div>
                <p>
                    1. add ng-content in the html template:
                    {`
                    <div>
                        <ng-content/>
                    </div>
                    `}
                </p>
                <p>
                    in the parent component:
                    {`
                    <app-user>
                        <div>
                            ...
                        </div>
                    </app-user>
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to inject service",
        a: (
            <div>
                <p>
                    1. add it in constructor:
                    {`
                    constructor(private tasksService: TasksService){}
                    `}
                </p>
                <p>
                    2.use inject function:
                    {`
                    import { inject } from '@angular/core';

                    @Component({
                        selector: 'app-user',
                        templateUrl: './user.component.html',
                        imports: []
                    })
                    export class UserComponent {
                        private tasksService = inject(TasksService)
                    }
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to use ng-content in multiple slots",
        a: (
            <div>
                <p>
                    1. in the button html template, it can add class selector
                    {`
                    <span>
                        <ng-content />
                    </span>
                    <ng-content select=".icon"/>
                    `}
                </p>
                <p>
                    in button component.ts file, add attribute selector:
                    {`
                    import { Component } from '@angular/core';

                    @Component({
                        selector: 'button[appButton], a[appButton]',
                        templateUrl: './user.component.html',
                        imports: []
                    })
                    export class ButtonComponent {
                        ...
                    }
                    `}
                </p>
                <p>
                    {`
                    <button appButton>
                        Submit
                        <span class="icon">⌲</span>
                    </button>
                    `}
                </p>
                <p>
                    2. use ngProjectAs
                    {`
                    <span>
                        <ng-content />
                    </span>
                    <ng-content select="icon"/>
                    `}
                    {`
                    <button appButton>
                        Submit
                        <span ngProjectAs="icon">⌲</span>
                    </button>
                    `}
                </p>
                <p>
                    3. use ng-content wrap to give default content,if there is
                    no html children:
                    {`
                        <ng-content>
                            ⌲
                        </ng-content>
                    `}
                </p>
                <p>
                    4. use ng-content to select multiple element
                    {`
                        <ng-content select="input, textarea" />
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to make style globally",
        a: (
            <div>
                <p>
                    set encapsulation as ViewEncapsulation.None:
                    {`
                    import { Component, ViewEncapsulation } from '@angular/core';

                    @Component({
                        selector: 'button[appButton], a[appButton]',
                        templateUrl: './user.component.html',
                        imports: [],
                        encapsulation: ViewEncapsulation.None
                    })
                    export class ButtonComponent {
                        ...
                    }
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to add class to component",
        a: (
            <div>
                <p>
                    1. in the @Component decorator:
                    {`
                    import { Component, ViewEncapsulation } from '@angular/core';

                    @Component({
                        selector: 'button[appButton], a[appButton]',
                        templateUrl: './user.component.html',
                        imports: [],
                        host: {
                            class: 'control'
                        }
                    })
                    export class ButtonComponent {
                        ...
                    }
                    `}
                </p>
                <p>
                    2. use @HostBinding in the component class:
                    {`
                    import { Component, ViewEncapsulation } from '@angular/core';

                    @Component({
                        selector: 'button[appButton], a[appButton]',
                        templateUrl: './user.component.html',
                        imports: [],
                    })
                    export class ButtonComponent {
                        @HostBinding('class') className = 'control';
                    }
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to add event listener to component",
        a: (
            <div>
                <p>
                    1. in the @Component decorator:
                    {`
                    import { Component, ViewEncapsulation } from '@angular/core';

                    @Component({
                        selector: 'button[appButton], a[appButton]',
                        templateUrl: './user.component.html',
                        imports: [],
                        host: {
                            '(click)': ' onClick()'
                        }
                    })
                    export class ButtonComponent {
                        onClick(){
                            console.log("Clicked");
                        }
                    }
                    `}
                </p>
                <p>
                    2. use @HostListener in the component class:
                    {`
                    import { Component, ViewEncapsulation } from '@angular/core';

                    @Component({
                        selector: 'button[appButton], a[appButton]',
                        templateUrl: './user.component.html',
                        imports: [],
                    })
                    export class ButtonComponent {
                        @HostListener('click') onClick(){
                            console.log("Clicked");
                        }
                    }
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to access component self programmatically",
        a: (
            <div>
                <p>
                    use ElementRef:
                    {`
                    import { Component, inject, ElementRef } from '@angular/core';

                    @Component({
                        selector: 'button[appButton], a[appButton]',
                        templateUrl: './user.component.html',
                        imports: [],
                    })
                    export class ButtonComponent {
                        private el = inject(ElementRef);

                        onClick(){
                            console.log("this component ref:");
                            console.log(this.el);
                        }
                    }
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "what is lifecycle method for Angular",
        a: (
            <div>
                <p>
                    ngOnChanges(), ngOnInit(), ngDoCheck(),
                    ngAfterContentInit(), ngAfterContentChecked(),
                    ngAfterViewInit(), ngAfterViewChecked(), ngOnDestroy()
                </p>
                <p>
                    {`
                    import { Component } from '@angular/core';

                    @Component({
                        selector: 'button[appButton], a[appButton]',
                        templateUrl: './user.component.html',
                        imports: [],
                    })
                    export class ButtonComponent implements
                        OnInit,
                        OnChanges,
                        DoCheck,
                        AfterContentInit,
                        AfterContentChecked,
                        AfterViewInit,
                        AfterViewChecked,
                        OnDestroy
                    {
                        ngOnChanges(){
                            ...
                        }
                        ngOnInit(){
                            ...
                        }
                        ngDoCheck(){
                            ...
                        }
                        ngAfterContentInit(){
                            ...
                        }
                        ngAfterContentChecked(){
                            ...
                        }
                        ngAfterViewInit(){
                            ...
                        }
                        ngAfterViewChecked(){
                            ...
                        }
                        ngOnDestroy(){
                            ...
                        }
                    }
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to use DestroyRef",
        a: (
            <div>
                <p>
                    Angular 16 introduces DestroyRef, which is similar to
                    lifecycle function ngOnDestroy
                </p>
                <p>
                    {`
                    import { Component, inject, DestroyRef } from '@angular/core';

                    @Component({
                        selector: 'button[appButton], a[appButton]',
                        templateUrl: './user.component.html',
                        imports: [],
                    })
                    export class ButtonComponent implements OnInit, OnDestroy {
                        private destroyRef = inject(DestroyRef)
                        ngOnInit() {
                            const interval = setInterval(()=>{
                                ...
                            }, 5000);
                            this.destroyRef.onDestroy(()=>{
                                clearInterval(interval);
                            });
                        }
                        ngOnDestroy(){
                            ...
                        }
                    }
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to define template variables to access component or html element",
        a: (
            <div>
                <p>
                    {`
                    <form (ngSubmit)="onSubmit(titleInput.value)">
                        <input #titleInput />
                        <app-control #ctl />
                    </form>
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to access template variables in component class",
        a: (
            <div>
                <p>1. first define a template variable form</p>
                <p>
                    {`
                    <form (ngSubmit)="onSubmit(titleInput.value)" #form>
                        <input #titleInput />
                        <app-control #ctl />
                    </form>
                    `}
                </p>
                <p>2. using ViewChild</p>
                <p>
                    {`
                    import { Component, inject, ElementRef } from '@angular/core';

                    @Component({
                        selector: 'button[appButton], a[appButton]',
                        templateUrl: './user.component.html',
                        imports: [],
                    })
                    export class ButtonComponent implements AfterViewInit{
                        // also can be a class component, for example, @ViewChild(ButtonComponent)
                        @ViewChild('form') form?: ElementRef<HTMLFormElement>;
                        onSubmit(title: string){
                            this.form?.nativeElement.reset();
                        }

                        ngAfterViewInit(){
                            // this method will ensure we can access ViewChild variable form
                        }
                    }
                    `}
                </p>
                <p>after Angular 17.3, we can use viewChild function</p>
                <p>
                    {`
                    import { Component, viewChild } from '@angular/core';

                    @Component({
                        selector: 'button[appButton], a[appButton]',
                        templateUrl: './user.component.html',
                        imports: [],
                    })
                    export class ButtonComponent implements AfterViewInit{
                        private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
                        onSubmit(title: string){
                            this.form().nativeElement.reset();
                        }

                        ngAfterViewInit(){
                            // this method will ensure we can access ViewChild variable form
                        }
                    }
                    `}
                </p>
                <p>
                    Similarly, we can use @ViewChildren or viewChildren to
                    access multiple elements or components
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to access elements inside <ng-content />",
        a: (
            <div>
                <p>
                    1. first define a template variable input in the parent
                    component html template:
                </p>
                <p>
                    {`
                    <app-control label="Title">
                        <input #input/>
                    </app-control>
                    `}
                </p>
                <p>in control.component.html:</p>
                <p>
                    {`
                    <label>{{ label() }}</label>
                    <ng-content select="input, textarea" />
                    `}
                </p>
                <p>2. using ContentChild</p>
                <p>
                    {`
                    import { Component, inject, ElementRef } from '@angular/core';

                    @Component({
                        selector: 'button[appButton], a[appButton]',
                        templateUrl: './user.component.html',
                        imports: [],
                    })
                    export class ControlComponent implements AfterContentInit{
                        // also can be a class component, for example, @ViewChild(ButtonComponent)
                        @ContentChild('input') control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
                        onSubmit(title: string){
                            this.form?.nativeElement.reset();
                        }

                        ngAfterContentInit() {
                            // this method will ensure we can access ContentChild variable control
                        }
                    }
                    `}
                </p>
                <p>after Angular 17.3, we can use contentChild function</p>
                <p>
                    {`
                    import { Component, contentChild } from '@angular/core';

                    @Component({
                        selector: 'button[appButton], a[appButton]',
                        templateUrl: './user.component.html',
                        imports: [],
                    })
                    export class ButtonComponent implements AfterContentInit{
                        private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
                        onSubmit(title: string){
                            console.log(this.control());
                        }

                        ngAfterContentInit() {
                            // this method will ensure we can access ContentChild variable control
                        }
                    }
                    `}
                </p>
                <p>
                    Similarly, we can use @ContentChildren or contentChildren to
                    access multiple elements or components
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to detect any changes for entire angular app",
        a: (
            <div>
                <p>we can use afterRender and afterNextRender</p>
                <p>
                    availabe after Angular 16:
                    {`
                    import { Component, afterRender, afterNextRender } from '@angular/core';

                    @Component({
                        selector: 'button[appButton], a[appButton]',
                        templateUrl: './user.component.html',
                        imports: [],
                    })
                    export class ControlComponent{
                        constructor() {
                            afterRender(()=>{
                                ...
                            });

                            afterNextRender(()=>{
                                ...
                            });
                        }
                    }
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to listen the signal value change",
        a: (
            <div>
                <p>we can use effect function in component constructor</p>
                <p>
                    {`
                    import { Component, effect } from '@angular/core';

                    @Component({
                        selector: 'button[appButton], a[appButton]',
                        templateUrl: './user.component.html',
                        imports: [],
                    })
                    export class ControlComponent{
                        currentStatus = signal<string>('');
                        constructor() {
                            effect(()=>{
                                console.log(this.currentStatus());
                            });
                        }
                    }
                    `}
                </p>
                <p>
                    It does provide you with an onCleanup hook which you can
                    execute as part of your effect function to define what
                    should happen before the effect code runs the next time:
                </p>
                <p>
                    {`
                    effect((onCleanup) => {
                        const tasks = getTasks();
                        const timer = setTimeout(() => {
                            ...
                        }, 1000);

                        onCleanup(() => {
                            clearTimeout(timer);
                        });
                    });
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to access signal previous value",
        a: (
            <div>
                <p>
                    {`
                    import { Component } from '@angular/core';

                    @Component({
                        selector: 'button[appButton], a[appButton]',
                        templateUrl: './user.component.html',
                        imports: [],
                    })
                    export class ControlComponent{
                        currentStatus = signal<boolean>(false);
                        onToggle(){
                            this.currentStatus.update(o=>!o);
                        }
                    }
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to use attribute directive",
        a: (
            <div>
                <p>1.setup a directive</p>
                <p>
                    {`
                    import { Directive, input, ElementRef } from '@angular/core';

                    @Directive({
                        selector: 'a[appSafeLink]',
                        standalone: true,
                        host: {
                            '(click)': 'onConfirmLeavePage($event)',
                        }
                    })
                    export class SafeLinkDirective{
                        queryParam = input('myapp', { alias: 'appSafeLink'});
                        private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

                        onConfirmLeavePage(event: MouseEvent) {
                            const wantsToLeave = window.confirm("Do you want to leave the app");

                            if(wantsToLeave){
                                const address = this.hostElementRef.nativeElement.href;
                                this.hostElementRef.nativeElement.href = address + '?from='  + this.queryParam();
                                return;
                            }

                            event.preventDefault();
                        }
                    }
                    `}
                </p>
                <p>2. consumed in the component</p>
                <p>
                    need to import directive in the component.ts file:
                    {`
                    import { Component } from '@angular/core';

                    @Component({
                        selector: 'app-control',
                        templateUrl: './user.component.html',
                        imports: [SafeLinkDirective],
                    })
                    export class ControlComponent{
                        ...
                    }
                    `}
                </p>
                <p>
                    in the html template:
                    {`
                    <a href="https://angular.dev?from=myapp" appSafeLink="myapp-docs-link">Angular Document</a>
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to use structural directive",
        a: (
            <div>
                <p>1.setup a directive</p>
                <p>
                    {`
                    import { Directive, TemplateRef, effect, inject, input, ViewContainerRef } from '@angular/core';

                    export type Permission = 'admin' | 'user' | 'guest';

                    @Directive({
                        selector: '[appAuth]',
                        standalone: true,
                    })
                    export class AuthDirective{
                        userType = input.required<Permission>({ alias: 'appAuth'});
                        private authService = inject(AuthService);
                        private templateRef = inject(TemplateRef);
                        private viewContainerRef = inject(ViewContainerRef);

                        constructor() {
                            effect(()=>{
                                if(this.authService.activePermission()===this.userType()){
                                    this.viewContainerRef.createEmbeddedView(this.templateRef);
                                } else {
                                    this.viewContainerRef.clear(); 
                                }
                            });
                        }
                    }
                    `}
                </p>
                <p>2. consumed in the component</p>
                <p>
                    need to import directive in the component.ts file:
                    {`
                    import { Component } from '@angular/core';

                    @Component({
                        selector: 'app-control',
                        templateUrl: './user.component.html',
                        imports: [AuthDirective],
                    })
                    export class ControlComponent{
                        ...
                    }
                    `}
                </p>
                <p>
                    in the html template:
                    {`
                    <ng-tempate appAuth="admin">
                        <p>Only admins should see this.</p>
                    </ng-template>
                    `}
                    or we can use *appAuth
                    {`
                    <p *appAuth="'admin'">
                        Only admins should see this!
                    </p>
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to combine two or more directive by using hostDirectives",
        a: (
            <div>
                <p>1.setup a directive</p>
                <p>
                    {`
                    import { Directive, TemplateRef, effect, inject, input, ViewContainerRef } from '@angular/core';

                    export type Permission = 'admin' | 'user' | 'guest';

                    @Directive({
                        selector: '[appAuth]',
                        standalone: true,
                        hostDirectives: [LogDirective]
                    })
                    export class AuthDirective{
                        ...
                    }
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to use pipe",
        a: (
            <div>
                <p>1. import DatePipe</p>
                <p>
                    {`
                    import { Component } from '@angular/core';
                    import { DatePipe, DecimalPipe } from '@angular/common';


                    @Component({
                        selector: 'app-root',
                        standalone: true,
                        TemplateUrl: './app.component.html',
                        imports: [DatePipe, DecimalPipe]
                    })
                    export class AppComponent{
                        ...
                    }
                    `}
                </p>
                <p>2. consumed in html template</p>
                <p>
                    {`
                    <p>{{ currentDate | date:'medium' }}</p>
                    <p>{{ currentTemperature | number:'1.1-2' }}</p>
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to build up custom pipe",
        a: (
            <div>
                <p>1. create a file temperature.pipe.ts</p>
                <p>
                    {`
                    import { Pipe, PipeTransform } from '@angular/core';

                    @Pipe({
                        name: 'temp',
                        standalone: true
                    })
                    export class TemperaturePipe implements PipeTransform{
                        transform(value: string | number, inputType: 'cel' | 'fah', outputType?: 'cel' | 'fah',){
                        }
                    }
                    `}
                </p>
                <p>2. import TemperaturePipe</p>
                <p>
                    {`
                    @Component({
                        selector: 'app-root',
                        standalone: true,
                        TemplateUrl: './app.component.html',
                        imports: [TemperaturePipe]
                    })
                    export class AppComponent{
                        ...
                    }
                    `}
                </p>
                <p>
                    3. consumed in html template, using : to seperate arguments
                </p>
                <p>
                    {`
                    <p>{{ currentTemperature | temp: 'cel' : 'fah' }}</p>
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "there are 3 ways to inject service",
        a: (
            <div>
                <p>
                    1. provideIn: &apos;root&apos; registers an injectable
                    thing(e.g. a service) with Application Root Environment
                    Injector. Therefore, All components, directives, services
                    etc, can request the value(e.g. an instance of this service)
                </p>
                <p>this is the most common way to setup service</p>
                <p>
                    {`
                    import { Injectable } from '@angular/core';

                    @Injectable({
                        providedIn: 'root',
                    })
                    export class TasksService{
                        ...
                    }
                    `}
                </p>
                <p>2. add service for whole application, in the main.ts:</p>
                <p>
                    {`
                    import { bootstrapApplication } from '@angular/platform-browser';
                    import { AppComponent } from './app/app.component';

                    bootstrapApplication(
                        AppComponent, { providers: [TasksService] }
                    ).catch(err=>console.error(err));
                    `}
                </p>
                <p>then this service is injectable</p>
                <p>3. element injector:</p>
                <p>
                    {`
                    import { Component } from '@angular/core;

                    @Component({
                        selector: 'app-tasks',
                        standalone: true,
                        templateUrl: './tasks.component.html',
                        imports: [NewTaskComponent, TasksListComponent],
                        providers: [TasksService]
                    })
                    export class TasksComponent {
                        ...
                    }
                    `}
                </p>
                <p>
                    this service is only availabe and injectable for all
                    children components and TasksComponent self
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to set up custom dependency injection tokens and providers",
        a: (
            <div>
                <p>1. inject a serice class</p>
                <p>
                    {`
                    const TasksServiceToken = new InjectionToken<TasksService>('tasks-service-token');

                    bootstrapApplication(
                        AppComponent,
                        {providers: [{provide: TasksServiceToken, useClass: TasksService}]}
                    ).catch(err=>console.error(err));
                    `}
                </p>
                <p>2. inject a value</p>
                <p>
                    {`
                    import { bootstrapApplication } from '@angular/platform-browser';
                    import { AppComponent } from './app/app.component';

                    type Options = {
                        value: 'open' | 'in-progress' | 'done';
                        taskStatus: TaskStatus;
                        text: string;
                    }[];

                    export const TASK_STATUS_OPTIONS = new InjectionToken<Options>('task-status-options');

                    export const TaskStatusOptions: Options = [
                        {
                            value: 'open',
                            taskStatus: 'OPEN',
                            text: 'Open',
                        },
                        {
                            value: 'done',
                            taskStatus: 'DONE',
                            text: 'Completed',
                        }
                    ];

                    const taskStatusOptionsProvider: Provider = {
                        provide: TASK_STATUS_OPTIONS,
                        useValue: TaskStatusOptions
                    };

                    bootstrapApplication(
                        AppComponent, { providers: [taskStatusOptionsProvider] }
                    ).catch(err=>console.error(err));
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to avoid Zone Pollution",
        a: (
            <div>
                <p>1. using NgZone injection</p>
                <p>
                    {`
                    import { Component, NgZone } from '@angular/core';

                    @Component({
                        selector: 'button[appButton], a[appButton]',
                        templateUrl: './user.component.html',
                        imports: [],
                    })
                    export class ButtonComponent implements OnInit{
                        private zone = inject(NgZone);

                        ngOnInit() {
                            this.zone.runOutsideAngular(()=>{
                                setTimeout(()=>{
                                    console.log("Time expired!")
                                },5000);
                            });
                        }
                    }
                    `}
                </p>
                <p>
                    2. using OnPush Strategy, instructs Angular to run change
                    detection for a component subtree only when: The root
                    component of the subtree receives new inputs as the result
                    of a template binding
                </p>
                <p>
                    {`
                    import { Component, NgZone, ChangeDetectionStrategy } from '@angular/core';

                    @Component({
                        selector: 'button[appButton], a[appButton]',
                        templateUrl: './user.component.html',
                        imports: [],
                        changeDetection: ChangeDetectionStrategy.OnPush
                    })
                    export class ButtonComponent implements OnInit{
                        ...
                    }
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to use OnPush with objects",
        a: (
            <div>
                <p>1. using signal</p>
                <p>2. using AsyncPipe</p>
                <p>in the service</p>
                <p>
                    {`
                    import { Component, NgZone } from '@angular/core';
                    import { AsyncPipe } from '@angular/common';

                    @Injectable({
                        providedIn: 'root',
                    })
                    export class ButtonComponent implements OnInit{
                        messages$ = new BehaviorSubject<string[]>([]);
                        private messages: string[] = [];

                        addMessage(message: string) {
                            this.messages = [...this.messages, message];
                            this.messages$.next(this.messages);
                        }
                    }
                    `}
                </p>
                <p>in the component.ts file:</p>
                <p>
                    {`
                    import { Component, NgZone } from '@angular/core';
                    import { AsyncPipe } from '@angular/common';

                    @Component({
                        selector: 'button[appButton], a[appButton]',
                        templateUrl: './user.component.html',
                        imports: [AsyncPipe],
                        changeDetection: ChangeDetectionStrategy.OnPush
                    })
                    export class ButtonComponent implements OnInit{
                        private messagesService = inject(MessagesService);
                        messages$ = this.messagesService.messages$;
                    }
                    `}
                </p>
                <p>in the html template file:</p>
                <p>
                    {`
                    <ul>
                        @for (message of messages$ | async; track message) {
                            <li>{{ message }}</li>
                        }
                    </ul>
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to setup zoneless",
        a: (
            <div>
                <p>1. remove zone.js in polyfills in angular.json</p>
                <p>
                    {`
                        "polyfills": [ "zone.js" ],
                    `}
                </p>
                <p>
                    2. add provideExperimentalZonelessChangeDetection() in the
                    providers array in the app.config.ts
                </p>
                <p>
                    {`
                    import { provideExperimentalZonelessChangeDetection } from '@angular/core';

                        bootstrapApplication(AppComponent, {
                            providers: [provideExperimentalZonelessChangeDetection()]
                        }).catch(err=>console.error(err));
                    `}
                </p>
                <p>3. use signal in the whole application</p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "what are observables and signals for",
        a: (
            <div>
                <p>
                    Observables: Great for managing events & streamed data, do
                    not have initial values
                </p>
                <p>
                    Signals: Great for managing application state, have initial
                    values
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to covert signal to observable",
        a: (
            <div>
                <p>
                    {`
                    import { Component } from '@angular/core';
                    import { toObservable } from "@angular/core/rxjs-interop";

                    @Component({
                        selector: 'button[appButton], a[appButton]',
                        templateUrl: './user.component.html',
                    })
                    export class ButtonComponent implements OnInit{
                        clickCount = signal(0);
                        clickCount$ = toObservable(clickCount);

                        ngOnInit(): void {
                            this.clickCount$.subscribe({
                                next: (val)=>{console.log(val);}
                            });
                        }
                    }
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to covert objservale to signal",
        a: (
            <div>
                <p>
                    {`
                    import { Component } from '@angular/core';
                    import { toObservable, toSignal } from "@angular/core/rxjs-interop";

                    @Component({
                        selector: 'button[appButton], a[appButton]',
                        templateUrl: './user.component.html',
                    })
                    export class ButtonComponent{
                        interval$ = interval(1000);
                        intervalSignal = toSignal(this.interval$, {initalValue: 0});
                    }
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
    {
        q: "how to create custom Obervable",
        a: (
            <div>
                <p>
                    {`
                    import { Component } from '@angular/core';
                    import { Observable } from "rxjs";

                    @Component({
                        selector: 'button[appButton], a[appButton]',
                        templateUrl: './user.component.html',
                    })
                    export class ButtonComponent implements OnInit{
                        customInterval$ = new Observable((subscriber)=>{
                            let timesExecuted = 0;

                            const interval = setInterval(()=>{
                                if(timesExecuted > 3) {
                                    clearInterval(interval);
                                    subscriber.complete();
                                    return;
                                }
                                console.log('Emitting new value...');
                                subscriber.next({ message: 'New value'});
                                timesExecuted++;
                            }, 2000);
                        });

                        ngOnInit(): void {
                            this.customInterval$.subscribe({
                                next: (val) => { console.log(val); }
                                complete: () => { console.log('COMPLETED'); }
                            });
                        }
                    }
                    `}
                </p>
            </div>
        ),
        r: "self summary",
    },
];

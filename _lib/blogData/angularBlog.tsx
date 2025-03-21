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
                    import { signal, computed} from '@angular/core';
                    @Component({
                        selector: 'app-user',
                        templateUrl: './user.component.html',
                    })
                    export class UserComponent {
                        selectedUser = DUMMY_USERS[randomIndex];
                        imagePath = computed(()=>'assets/users/' + this.selectedUser().avatar)
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
                        </li>
                    }
                    `}
                </p>
                <p>
                    2. using ngFor
                    {`
                    <li *ngFor="let user of users; ; index as i">
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
];

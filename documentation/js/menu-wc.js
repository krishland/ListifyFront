'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">projet-certification-g1 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-4357cc9547d9979c35a26ec4d1d3f935a05f6292e6206ebe3bee48e6560d3afa010a881d3358cf19984a81046c09b156252dc5971ab6227726edd767bdd98101"' : 'data-target="#xs-components-links-module-AppModule-4357cc9547d9979c35a26ec4d1d3f935a05f6292e6206ebe3bee48e6560d3afa010a881d3358cf19984a81046c09b156252dc5971ab6227726edd767bdd98101"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-4357cc9547d9979c35a26ec4d1d3f935a05f6292e6206ebe3bee48e6560d3afa010a881d3358cf19984a81046c09b156252dc5971ab6227726edd767bdd98101"' :
                                            'id="xs-components-links-module-AppModule-4357cc9547d9979c35a26ec4d1d3f935a05f6292e6206ebe3bee48e6560d3afa010a881d3358cf19984a81046c09b156252dc5971ab6227726edd767bdd98101"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-495c04418b59bf126b7524c8d5637dafd3710dabf14872b4791b43ff463e1b91b80b2a6678771e46749360675674c3f3b04438fbfa4a46afa60ec376b281098b"' : 'data-target="#xs-components-links-module-CoreModule-495c04418b59bf126b7524c8d5637dafd3710dabf14872b4791b43ff463e1b91b80b2a6678771e46749360675674c3f3b04438fbfa4a46afa60ec376b281098b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-495c04418b59bf126b7524c8d5637dafd3710dabf14872b4791b43ff463e1b91b80b2a6678771e46749360675674c3f3b04438fbfa4a46afa60ec376b281098b"' :
                                            'id="xs-components-links-module-CoreModule-495c04418b59bf126b7524c8d5637dafd3710dabf14872b4791b43ff463e1b91b80b2a6678771e46749360675674c3f3b04438fbfa4a46afa60ec376b281098b"' }>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IconsModule.html" data-type="entity-link" >IconsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IconsModule-1ad291f88203d8434f4edecffd617a3c2b63202bb595316979bf694a918a00a3006b2100afbc098a01695a86bd46952cfee084a1e1b68975eb381bf80a28cdcb"' : 'data-target="#xs-components-links-module-IconsModule-1ad291f88203d8434f4edecffd617a3c2b63202bb595316979bf694a918a00a3006b2100afbc098a01695a86bd46952cfee084a1e1b68975eb381bf80a28cdcb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IconsModule-1ad291f88203d8434f4edecffd617a3c2b63202bb595316979bf694a918a00a3006b2100afbc098a01695a86bd46952cfee084a1e1b68975eb381bf80a28cdcb"' :
                                            'id="xs-components-links-module-IconsModule-1ad291f88203d8434f4edecffd617a3c2b63202bb595316979bf694a918a00a3006b2100afbc098a01695a86bd46952cfee084a1e1b68975eb381bf80a28cdcb"' }>
                                            <li class="link">
                                                <a href="components/IconChevronDownComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconChevronDownComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconEditComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundModule.html" data-type="entity-link" >PageNotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageNotFoundModule-6ad31ea04546759716ec2963457f1d97edf5a4f069b3c5d6db3532e37d779b2ebfc302089933b0b691a31d19d35326fa0bbbff3f517864cb9bcd58b847ac2789"' : 'data-target="#xs-components-links-module-PageNotFoundModule-6ad31ea04546759716ec2963457f1d97edf5a4f069b3c5d6db3532e37d779b2ebfc302089933b0b691a31d19d35326fa0bbbff3f517864cb9bcd58b847ac2789"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageNotFoundModule-6ad31ea04546759716ec2963457f1d97edf5a4f069b3c5d6db3532e37d779b2ebfc302089933b0b691a31d19d35326fa0bbbff3f517864cb9bcd58b847ac2789"' :
                                            'id="xs-components-links-module-PageNotFoundModule-6ad31ea04546759716ec2963457f1d97edf5a4f069b3c5d6db3532e37d779b2ebfc302089933b0b691a31d19d35326fa0bbbff3f517864cb9bcd58b847ac2789"' }>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundRoutingModule.html" data-type="entity-link" >PageNotFoundRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-807a84b30f9928d7e3f5f27ee9922be88a92010f9637b2e83826a04ff563824e8518c59b6d7bd9e586f7a94af560aeeae1a6f14b2d3425fdb206c2d25b30d7f5"' : 'data-target="#xs-components-links-module-SharedModule-807a84b30f9928d7e3f5f27ee9922be88a92010f9637b2e83826a04ff563824e8518c59b6d7bd9e586f7a94af560aeeae1a6f14b2d3425fdb206c2d25b30d7f5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-807a84b30f9928d7e3f5f27ee9922be88a92010f9637b2e83826a04ff563824e8518c59b6d7bd9e586f7a94af560aeeae1a6f14b2d3425fdb206c2d25b30d7f5"' :
                                            'id="xs-components-links-module-SharedModule-807a84b30f9928d7e3f5f27ee9922be88a92010f9637b2e83826a04ff563824e8518c59b6d7bd9e586f7a94af560aeeae1a6f14b2d3425fdb206c2d25b30d7f5"' }>
                                            <li class="link">
                                                <a href="components/BtnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BtnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ColumnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ColumnComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-807a84b30f9928d7e3f5f27ee9922be88a92010f9637b2e83826a04ff563824e8518c59b6d7bd9e586f7a94af560aeeae1a6f14b2d3425fdb206c2d25b30d7f5"' : 'data-target="#xs-directives-links-module-SharedModule-807a84b30f9928d7e3f5f27ee9922be88a92010f9637b2e83826a04ff563824e8518c59b6d7bd9e586f7a94af560aeeae1a6f14b2d3425fdb206c2d25b30d7f5"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-807a84b30f9928d7e3f5f27ee9922be88a92010f9637b2e83826a04ff563824e8518c59b6d7bd9e586f7a94af560aeeae1a6f14b2d3425fdb206c2d25b30d7f5"' :
                                        'id="xs-directives-links-module-SharedModule-807a84b30f9928d7e3f5f27ee9922be88a92010f9637b2e83826a04ff563824e8518c59b6d7bd9e586f7a94af560aeeae1a6f14b2d3425fdb206c2d25b30d7f5"' }>
                                        <li class="link">
                                            <a href="directives/StateDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StateDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TasksModule.html" data-type="entity-link" >TasksModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TasksModule-af57257567c16d751a017f3bdb8e0147c0eb8769ca3510cff97d038a6e1d4fa69e82414d7ba5cb6134e4009186e5d6a86206648a06c1c2f379df83351d7587d5"' : 'data-target="#xs-components-links-module-TasksModule-af57257567c16d751a017f3bdb8e0147c0eb8769ca3510cff97d038a6e1d4fa69e82414d7ba5cb6134e4009186e5d6a86206648a06c1c2f379df83351d7587d5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TasksModule-af57257567c16d751a017f3bdb8e0147c0eb8769ca3510cff97d038a6e1d4fa69e82414d7ba5cb6134e4009186e5d6a86206648a06c1c2f379df83351d7587d5"' :
                                            'id="xs-components-links-module-TasksModule-af57257567c16d751a017f3bdb8e0147c0eb8769ca3510cff97d038a6e1d4fa69e82414d7ba5cb6134e4009186e5d6a86206648a06c1c2f379df83351d7587d5"' }>
                                            <li class="link">
                                                <a href="components/FormTaskComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormTaskComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageAddTaskComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddTaskComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditTaskComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditTaskComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListTasksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListTasksComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TasksRoutingModule.html" data-type="entity-link" >TasksRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link" >UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-94705d956c0378aa0cd55011ac10d36e6ed2f04962d8aba97b8fafee5daf15c2762545b2708aedad168c297bff61f2489394bccf570ac8f83b994df6b5d804e7"' : 'data-target="#xs-components-links-module-UiModule-94705d956c0378aa0cd55011ac10d36e6ed2f04962d8aba97b8fafee5daf15c2762545b2708aedad168c297bff61f2489394bccf570ac8f83b994df6b5d804e7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-94705d956c0378aa0cd55011ac10d36e6ed2f04962d8aba97b8fafee5daf15c2762545b2708aedad168c297bff61f2489394bccf570ac8f83b994df6b5d804e7"' :
                                            'id="xs-components-links-module-UiModule-94705d956c0378aa0cd55011ac10d36e6ed2f04962d8aba97b8fafee5daf15c2762545b2708aedad168c297bff61f2489394bccf570ac8f83b994df6b5d804e7"' }>
                                            <li class="link">
                                                <a href="components/UiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Task.html" data-type="entity-link" >Task</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/TasksService.html" data-type="entity-link" >TasksService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/TaskI.html" data-type="entity-link" >TaskI</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
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
                    <a href="index.html" data-type="index-link">dr documentation</a>
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
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppMaterialModule.html" data-type="entity-link">AppMaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-d1f997d033103ef04353d30bc928bb9a"' : 'data-target="#xs-components-links-module-AppModule-d1f997d033103ef04353d30bc928bb9a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d1f997d033103ef04353d30bc928bb9a"' :
                                            'id="xs-components-links-module-AppModule-d1f997d033103ef04353d30bc928bb9a"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationModule.html" data-type="entity-link">AuthenticationModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CloudModule.html" data-type="entity-link">CloudModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CloudModule-8ec0fcc92d7666a107d32284ce88bc7a"' : 'data-target="#xs-components-links-module-CloudModule-8ec0fcc92d7666a107d32284ce88bc7a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CloudModule-8ec0fcc92d7666a107d32284ce88bc7a"' :
                                            'id="xs-components-links-module-CloudModule-8ec0fcc92d7666a107d32284ce88bc7a"' }>
                                            <li class="link">
                                                <a href="components/CloudAddDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CloudAddDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CloudLandingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CloudLandingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CloudModule-8ec0fcc92d7666a107d32284ce88bc7a"' : 'data-target="#xs-injectables-links-module-CloudModule-8ec0fcc92d7666a107d32284ce88bc7a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CloudModule-8ec0fcc92d7666a107d32284ce88bc7a"' :
                                        'id="xs-injectables-links-module-CloudModule-8ec0fcc92d7666a107d32284ce88bc7a"' }>
                                        <li class="link">
                                            <a href="injectables/CloudOperationsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CloudOperationsService</a>
                                        </li>
                                    </ul>
                                </li>
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
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Auth.html" data-type="entity-link">Auth</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Catalog.html" data-type="entity-link">Catalog</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Domain.html" data-type="entity-link">Domain</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Endpoint.html" data-type="entity-link">Endpoint</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Error.html" data-type="entity-link">Error</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Identity.html" data-type="entity-link">Identity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IdName.html" data-type="entity-link">IdName</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDomainScoped.html" data-type="entity-link">IDomainScoped</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IError.html" data-type="entity-link">IError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INewCloud.html" data-type="entity-link">INewCloud</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRecDomainScoped.html" data-type="entity-link">IRecDomainScoped</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Password.html" data-type="entity-link">Password</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Scope.html" data-type="entity-link">Scope</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Token.html" data-type="entity-link">Token</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User-1.html" data-type="entity-link">User</a>
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
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
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
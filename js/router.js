export class Router {
    constructor(paths){
        this.paths = paths
        this.initRouter()
    }

    initRouter(){
        const {location: {pathname = '/index.thml'}} = window
        const URL = pathname === '/index.html' ? home : pathname.replace('/', "")
        this.load(URL)
    }

    load(page = 'home'){
        const { paths } = this
        console.log(paths[page])
        const {path, template } = paths[page] || paths.error
        const $CONTAINER = document.querySelector('#content')
        window.history.pushState({}, "", path)
    }

    
}
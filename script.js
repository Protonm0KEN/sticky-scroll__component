//* SCROLL PROJECT

class Scroll {
    constructor(obj){
        this.element = document.querySelector(obj.element) /* получаем элемент */
        this.top = obj.top /* присваиваем данные отступов взятые из обьекта obj */
        this.element.style.position = 'fixed' /* задаём элементу фиксированную позицию */
        this.unit = obj.unit/* присваиваем единицу измерения из обьекта если есть */
        
        this.element.style.top = this.scroll()
        
        window.addEventListener ('scroll', () => this.scroll()) 
    }
    scroll(){
        this.number = this.scrollNumber()
        if(this.number - scrollY > 0){
            this.element.style.top = this.number - scrollY + 'px'
        }else {
            this.element.style.top = 0
        }
    }
    scrollNumber(){
        if(this.unit == 'px'){
            return this.top >= 0 ? this.top : 0 
        }else if(this.unit == '%' || this.unit == undefined){
            return window.innerHeight / 100 * this.top - this.element.offsetHeight 
        }
    }
}

let scroll = new Scroll({
    element: '.header__nav',
    top: 100,
})
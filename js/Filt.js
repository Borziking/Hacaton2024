const list = document.querySelector('.list'),
    items = document.querySelectorAll('.blocks_item')

function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        console.log(targetId)

        switch(targetId) {
            case 'all':
                break
            case '1':
                GetItem('1')
                break
            case '2':
                GetItem('2')
                break
        }
    }) 
}
filter()

function GetItem(Name) { 
    items.forEach(item => {
        if(item.classList.contains(Name)) {
            item.style.display = 'block'
        }
        else {
            item.style.display = 'none'
        }
    })
}
const BASE_URL = "http://localhost:3000/api/"
let $categoriesSelect = document.querySelector('.categorySelect')

function handlerCategory (id) {
    fetch(`${BASE_URL}categories/${id}`)
    .then(res => res.json())
    .then(result => {
        let category = result.data
        })
}
$categoriesSelect.addEventListener('change', function(e){
    $subcategoriesSelect.innerHTML = ""
    handlerCategory(e.target.value)
})

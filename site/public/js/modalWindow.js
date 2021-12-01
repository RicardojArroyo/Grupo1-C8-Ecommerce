/* function cancelWindow() {
    document.querySelector('#button-cancel').addEventListener('click', () => {
        document.querySelector('.modal-background').style.display = 'none'
    })
} */

/* function deleteProduct(id) {
    document.querySelector('.modal-background').style.display = 'flex'
    document.body.innerHTML += `<div class="modal-background">
    <div class="modal">
        <p>Estas seguro de que desea eliminar este producto?</p>
        <p>Esta acción no se puede deshacer</p>
        <p>${producto.id}</p>
        <div class="modal-button">
            <form action="/admin/delete/${id}?_method=DELETE" method="POST">
                <button type="submit" id="button-delete">Eliminar</button>
            </form>
            <button id="button-cancel"><a href="/admin/products">Cancelar</a></button>
        </div>
    </div>
</div>`} */

/* window.addEventListener('load', () => {

    let $deleteButton = document.querySelectorAll('.delete-button');
    let $cancel = document.querySelector('#button-cancel')
    let $delete = document.querySelector('#button-delete')

    console.log($deleteButton);

    $deleteButton.forEach(elemento => {
        elemento.addEventListener('mouseover', () => {
            document.querySelector('.modal-background').style.display = 'flex'
        })
    })
    /* $deleteButton.addEventListener('mouseover', () => {
        document.querySelector('.modal-background').style.display = 'flex'
    })
}) */
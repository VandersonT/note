let selected = null;
let notes;
/*let teste = ['teste1', 'teste2', 'teste3', 'teste4', 'teste5'];
localStorage.setItem("notes", JSON.stringify(teste))*/

/*Get all notes from localStorage*/
let list = [];
if(localStorage.getItem("notes")){
    list = JSON.parse(localStorage.getItem("notes"));
    if(list.length > 0){
        mountNotes(list);
    }
}
/***/

/*Create a new note*/
let newNote = document.querySelector('.newNote');
newNote.addEventListener('click', function(){
    alert('Criando nova nota')
});
/***/

/*Notes events*/
document.querySelector('.delete').addEventListener('click', function(){
    if(confirm('Você quer realmente deletar essa nota?'+selected)){
        list.splice(selected, 1);
        mountNotes(list)
        selected = null;
        localStorage.setItem("notes", JSON.stringify(list))
        if(list.length < 1){
            document.querySelector('.boxNotes').innerHTML = '<p class="empty" noteId="">Você não possui nada anotado</p>';
        }
    }
});

document.querySelector('.edit').addEventListener('click', function(){
    document.querySelector('.openNote').innerText = list[selected];
    document.querySelector('.BoxOpenNote').style.display = 'flex';
});

document.querySelector('.cancel').addEventListener('click', function(){
    document.querySelector('.BoxOpenNote').style.display = 'none';
});
/***/

/*Close noteMenu*/
document.querySelector('.boxNotes').addEventListener('click', function(e){
    if(this === e.target){
        document.querySelector('.menuNote').style.display = 'none';
        newNote.style.bottom = '3%';
        for(let j = 0; j < notes.length; j++){
            notes[j].classList.remove('selected');
        }
    }
})

document.querySelector('.closeNoteMenu').addEventListener('click', function(e){
    if(this === e.target){
        document.querySelector('.menuNote').style.display = 'none';
        newNote.style.bottom = '3%';
    }
})
/***/

/*Functions*/
function mountNotes(list){

    document.querySelector('.boxNotes').innerHTML = '';

    for(let i = 0; i < list.length; i++){
        document.querySelector('.boxNotes').innerHTML += `
            <div class="noteSingle">
                <p><i class="fas fa-thumbtack pin"></i></p>
                ${list[i]}
            </div>
        `;
        document.querySelectorAll('.noteSingle')[i].setAttribute('noteId', i)
    }
    sendEventsToNotes()
}

sendEventsToNotes()
function sendEventsToNotes(){
    notes = document.querySelectorAll('.noteSingle');

    for(let i = 0; i < notes.length; i++){
        notes[i].addEventListener('click', function(e){
            let id = notes[i].getAttribute('noteId');
            selected = id;
            
            document.querySelector('.menuNote').style.display = 'flex';
            newNote.style.bottom = '80px';

            for(let j = 0; j < notes.length; j++){
                notes[j].classList.remove('selected');
            }
            notes[i].classList.add('selected');
        })
    }
}
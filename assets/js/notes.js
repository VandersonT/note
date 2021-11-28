let selected = null;
let notes;

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
    document.querySelector('.openNote').innerText = '';
    document.querySelector('.BoxOpenNote').style.display = 'flex';
    selected = null;
});
/***/

/*Notes events*/
document.querySelector('.delete').addEventListener('click', function(){
    if(confirm('Você quer realmente deletar essa nota?')){
        list.splice(selected, 1);
        mountNotes(list);
        selected = null;
        localStorage.setItem("notes", JSON.stringify(list))
        if(list.length < 1){
            document.querySelector('.boxNotes').innerHTML = '<p class="empty" noteId="">Você não possui nada anotado</p>';
        }
        document.querySelector('.menuNote').style.display = 'none';
        newNote.style.bottom = '3%';
    }
});

for(let i = 0; i < list.length; i++){
    notes[i].addEventListener('dblclick', function(e){
        document.querySelector('.openNote').innerText = list[selected];
        document.querySelector('.BoxOpenNote').style.display = 'flex';
    })
}


document.querySelector('.edit').addEventListener('click', function(){
    document.querySelector('.openNote').innerText = list[selected];
    document.querySelector('.BoxOpenNote').style.display = 'flex';
});

document.querySelector('.cancel').addEventListener('click', function(){
    document.querySelector('.BoxOpenNote').style.display = 'none';
});

document.querySelector('.save').addEventListener('click', function(){
    let textEdited = document.querySelector('.openNote').innerText;
    
    if(selected == null){
        list.push(textEdited);
        selected = list.length -1;
        
    }else{
        list[selected] = textEdited;
    }

    localStorage.setItem("notes", JSON.stringify(list));
    document.querySelector('.BoxOpenNote').style.display = 'none';
    mountNotes(list);
    notes[selected].classList.add('selected');
})

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
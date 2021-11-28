/*let notes = ['Levar a lola para passear', 'jantar com a mina lá', 'teste atoa de anotação', 'bla bla bla'];
localStorage.setItem("notes", JSON.stringify(notes))*/

/*Get all notes from localStorage*/
if(localStorage.getItem("notes")){
    let list = JSON.parse(localStorage.getItem("notes"));

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

}

/*Create a new note*/
let newNote = document.querySelector('.newNote');

newNote.addEventListener('click', function(){
    alert('Criando nova nota')
});


/*Note single*/
let notes = document.querySelectorAll('.noteSingle');
let selected = null;

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

/*Close noteMenu*/
document.querySelector('.boxNotes').addEventListener('click', function(e){
    if(this === e.target){
        document.querySelector('.menuNote').style.display = 'none';
        newNote.style.bottom = '3%';
    }
})

document.querySelector('.closeNoteMenu').addEventListener('click', function(e){
    if(this === e.target){
        document.querySelector('.menuNote').style.display = 'none';
        newNote.style.bottom = '3%';
    }
})
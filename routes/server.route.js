import { createNote ,getNoteById , getAllNotes, editNote, deleteNote } from "../controller/notes.controller.js";
import { createNoteGroup, deleteNoteGroup, editNoteGroup, getAllNoteGroups, getNoteGroupById } from "../controller/notegroup.controller.js";


export const routes = (router) => {
    //noted api 
    router.post('/create-note', createNote);
    router.post('/notes/:id', getNoteById);
   router.post('/notes',getAllNotes);
   router.post('/edit-note',editNote);
   router.post('/delete-note',deleteNote);
    //notes groups api
   router.post('/create-note-group',createNoteGroup);
   router.post('/delete-note-group',deleteNoteGroup);
   router.post('/notegroups',getAllNoteGroups);
   router.post('/editnotegroup',editNoteGroup);
   router.post('/notegroups/:id',getNoteGroupById);
}


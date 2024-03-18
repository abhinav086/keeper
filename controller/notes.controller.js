import { Note } from "../models/note.model.js";
        
export const createNote = async (req,res) => {
    try {
        const { title, content } = req.body;
        const newNote = new Note({
            title,
            content,
          });

        res.status(201).json(newNote);

        await newNote.save();
    
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
};

export const getNoteById = async (req, res) => {
  try {
      // Extract note group ID from request parameters
      const noteId = req.body.id;
  
      // Find the note group by ID
      const note = await Note.findById(noteId);
  
      // Check if note group was found
      if (!note) {
        return res.status(404).json({ error: 'Note not found' });
      }
  
      // Respond with the found note group
      res.json(note);
    } catch (err) {
      // Handle errors
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  };


export const getAllNotes =  async(req, res) => {
    try {
        const AllNotes = await Note.find();
        res.status(200).json({notes: AllNotes});
    }
    catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server error'});
    }

};

export const editNote = async (req, res) => {
  try {
    // Extract note ID and updated content from request parameters and body
    const noteId = req.body.id;
    const updatedContent = req.body.content;

    // Find the note by ID and update its content
    const updatedNote = await Note.findByIdAndUpdate({_id: noteId}, {content: updatedContent} );

    // Check if note was found and updated
    if (!updatedNote) {
      return res.status(404).json({ error: 'Note not found' });
    }

    // Respond with the updated note
    res.json(updatedNote);
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

export const deleteNote = async (req, res) => {
  try {
      // Extract note group ID from request parameters
      const noteId = req.body.id;
  
      // Find the note group by ID and delete it
      const deletedNote = await Note.findByIdAndDelete({_id: noteId});
  
      // Check if note group was found and deleted
      if (!deletedNote) {
        return res.status(404).json({ error: 'Note  not found' });
      }
  
      // Respond with a success message
      res.json({ message: 'Note  deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
};
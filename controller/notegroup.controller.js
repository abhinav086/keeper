import { NoteGroup } from "../models/notegroup.model.js";

export const createNoteGroup = async (req, res) => {
    try {
        const { name } = req.body;

        const newNoteGroup = new NoteGroup({
         name: name
    });
    // Save the new note group to the database

     await newNoteGroup.save();


// Respond with the saved note group
  res.status(201).json({ message: 'Note created'});


    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Server error'});
    }
};

export const deleteNoteGroup = async (req, res) => {
    try {
        // Extract note group ID from request parameters
        const noteGroupId = req.body.noteGroupId;
    
        // Find the note group by ID and delete it
        const deletedNoteGroup = await NoteGroup.findByIdAndDelete({_id: noteGroupId});
    
        // Check if note group was found and deleted
        if (!deletedNoteGroup) {
          return res.status(404).json({ error: 'Note group not found' });
        }
    
        // Respond with a success message
        res.json({ message: 'Note group deleted successfully' });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      }
};

export const getAllNoteGroups = async (req, res) => {
    try {
        // Fetch all note groups from the database
        const allNoteGroups = await NoteGroup.find();
    
        // Respond with the list of note groups
        res.json(allNoteGroups);
      } catch (err) {
        // Handle errors
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      }

 };

 export const editNoteGroup = async (req, res) => {
    try {
        // Extract note group ID and updated name from request parameters and body
        const noteGroupId = req.body.id;
        const updatedName = req.body.name;
    
        // Find the note group by ID and update its name
        const updatedNoteGroup = await NoteGroup.findByIdAndUpdate({_id: noteGroupId}, {name: updatedName});

    
    
        // Check if note group was found and updated
        if (!updatedNoteGroup) {
          return res.status(404).json({ error: 'Note group not found' });
        }
    
        // Respond with the updated note group
        res.json(updatedNoteGroup);
      } catch (err) {
        // Handle errors
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      }
    
 };

 export const getNoteGroupById = async (req, res) => {
    try {
        // Extract note group ID from request parameters
        const noteGroupId = req.body.id;
    
        // Find the note group by ID
        const noteGroup = await NoteGroup.findById(noteGroupId);
    
        // Check if note group was found
        if (!noteGroup) {
          return res.status(404).json({ error: 'Note group not found' });
        }
    
        // Respond with the found note group
        res.json(noteGroup);
      } catch (err) {
        // Handle errors
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      }
    };
    


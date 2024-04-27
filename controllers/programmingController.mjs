import Programming from '../models/programming.mjs';

const getAllProgrammings = async(req,res) => {
    const programs = await Programming.find();
    res.json({programs: programs});
};

const getProgramming = async(req, res) => {
    const programId = req.params.id;
    const program = await Programming.findById(programId);
    res.json({ program: program })
};

const createProgramming = async(req, res) => {
    const name = req.body.name
    const release_Date = req.body.release_Date
    const current_Version = req.body.current_Version
    const usage = req.body.usage

    const program = await Programming.create({
        name: name,
        release_Date: release_Date,
        current_Version: current_Version,
        usage: usage
    });
    res.json({ program: program})
};

const updateProgramming = async(req, res) => {
    const programId = req.params.id
    const name = req.body.name
    const release_Date = req.body.release_Date
    const current_Version = req.body.current_Version
    const usage = req.body.usage

    const program = await Programming.findByIdAndUpdate(programId, {
        name: name,
        release_Date: release_Date,
        current_Version: current_Version,
        usage: usage
    })
    const updatedProgramming = await Programming.findById(programId)
    res.json({ program: updatedProgramming})
}

const deleteProgramming = async(req, res) => {
    const programId = req.params.id;
    const program = await Programming.findByIdAndDelete(programId)
    res.json({success: "Programming Language has been deleted successfully"})
};

export {getAllProgrammings, getProgramming, createProgramming, updateProgramming, deleteProgramming}
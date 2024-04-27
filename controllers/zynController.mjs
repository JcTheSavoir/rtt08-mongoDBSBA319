import Zyn from '../models/zyn.mjs';

const getAllZyns = async(req,res) => {
    const zyns = await Zyn.find();
    res.json({zyns: zyns});
};

const getZyn = async(req, res) => {
    const zynId = req.params.id;
    const zyn = await Zyn.findById(zynId);
    res.json({ zyn: zyn })
};

const createZyn = async(req, res) => {
    const name = req.body.name
    const release_Date = req.body.release_Date
    const flavor = req.body.flavor
    const strength_Options = req.body.strength_Options

    const zyn = await Zyn.create({
        name: name,
        flavor: flavor,
        release_Date: release_Date,
        strength_Options: strength_Options
    });
    res.json({ zyn: zyn})
};

const updateZyn = async(req, res) => {
    const zynId = req.params.id
    const name = req.body.name
    const release_Date = req.body.release_Date
    const flavor = req.body.flavor
    const strength_Options = req.body.strength_Options

    const zyn = await Zyn.findByIdAndUpdate(zynId, {
        name: name,
        flavor: flavor,
        release_Date: release_Date,
        strength_Options: strength_Options
    })
    const updatedZyn = await Zyn.findById(zynId)
    res.json({ zyn: updatedZyn})
}

const deleteZyn = async(req, res) => {
    const zynId = req.params.id;
    const zyn = await Zyn.findByIdAndDelete(zynId)
    res.json({success: "Zyn ... been deleted successfully..."})
};

export {getAllZyns, getZyn, createZyn, updateZyn, deleteZyn}
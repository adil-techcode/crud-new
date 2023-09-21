import Crudmodel from "../models/crudModel.js";

class crud {

    static get = async (req, res) => {
        try {

            const data = await Crudmodel.find({});
            console.log(data)
            res.status(200).send(data)

        }
        catch (error) {
            res.status(200).send(error)
        }



    }

    static update = async (req, res) => {
        try {

            const {id} = req.params;
            const { name, desc } = req.body;

            console.log(name)
            console.log(desc)
            console.log(id)
            await Crudmodel.findByIdAndUpdate(id, { $set: { name: name, desc: desc } })
            res.status(200).send("updated")
        }
        catch (error) {
            res.status(400).send("error")
        }

    }

    static post = async (req, res) => {
        try {
            const { name, desc } = req.body;
            const post = new Crudmodel({
                name: name,
                desc: desc
            });
            await post.save();
            res.status(200).send("posted")
        }

        catch (error) {
            res.status(200).send(error)
        }


    }
    static delete = async(req, res) => {

        try {

            const {id} = req.params;
            await Crudmodel.findByIdAndDelete(id);
            res.status(200).send("deleted")
        }
        catch (error) {
            res.status(400).send("error")
        }
    }

}


export default crud;
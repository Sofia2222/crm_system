class authController {
    postLogin (req, res) {
        try{
            let {email, password} = req.body;
            console.log(email, password)
            res.status(200).json('login');
        }catch (e) {
            console.log(e.message);
            res.status(400).json(e.message);
        }
    }
    postRegister (req, res){
        try{
            let {email, name, surname, phone, password, website } = req.body;
            console.log(email, name, surname, phone, password, website)
            res.status(200).json('register');
        }catch (e) {
            console.log(e.message);
            res.status(400).json(e.message);
        }
    }
}

module.exports = new authController();
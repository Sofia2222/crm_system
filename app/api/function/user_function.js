const User = require("../../database/models/general/User");
const Company = require("../../database/models/general/Company");

const save_user = async (data, company_id) => {
    let {email, name, surname, phone, password, website, company_name, db_name} = data;
    console.log(email, name, surname, phone, password, website, companyName, db_name);

    // const user = new User(
    //     {
    //         name: bodyname,
    //         surname: surname,
    //         phone: phone,
    //         email: email,
    //         password: password,
    //         website: website,
    //         company_id: company_id
    //     });
    // await user.save();
    // return user;
}




module.exports = {
    save_user,

}
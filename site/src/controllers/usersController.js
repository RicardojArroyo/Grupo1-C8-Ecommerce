module.exports = {
    /* Register form */
    register: (req, res) => {
        res.render('/users/register')  
    },
    /* Login form */
    login: (req, res) => {
        res.render('/users/login')
    },
    /* User profile */
    editProfile: (req, res) =>{
        res.render('/users/editProfile')
    },
    /* User password */
        password: (req, res) => {
        res.render('/users/password')
    }
}

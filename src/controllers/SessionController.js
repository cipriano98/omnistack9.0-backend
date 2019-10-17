// Index, show, store, update, destroy
// `index` == Lista várias sessões
// `show` == Lista apenas uma sessão
// `store` == Cria uma sessão
// `update` == Alterar uma sessão
// `destroy` == Remover uma sessão

const User = require( '../models/User' );

module.exports = {
  async store( req, res ) {
    const { email } = req.body;

    let user = await User.findOne( { email } );

    if( !user ) {

      user = await User.create( { email } );

    }

  
    return res.json( user );
  }
};
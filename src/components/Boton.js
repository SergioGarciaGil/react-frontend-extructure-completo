import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUsers } from "../redux/actions";

function Boton(props) {
  function traerUsuarios() {
    props.getUsers();
  }
  return (
    <>
      <Link to="/users">
        <button onClick={traerUsuarios}>Traer Usuario</button>
      </Link>
    </>
  );
}

export default connect(null, { getUsers })(Boton);

//OTRA FORMA DE HACER COn: mapDispatchToPro es:

//function mapDispatchToPro(){
//return {
// getUsers: ()=> dispatch(getUsers())

// }
// }
// export default connect(null, mapDispatchToPro)(Boton);

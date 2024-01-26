import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div>
            <h1>Enter your Login credentials.</h1>
            <form>
               <label>Name :</label> <input type="text"/><br></br><br></br>
                <label>Mail-id :</label> <input type="email" /><br></br><br></br>
                <label>Password :</label> <input type="password" /><br></br><br></br>
                <input type="submit" value = "Submit" /><br></br><br></br>
            </form>
            <p>New to Our page?      <Link to="/NewUser">Create an account.</Link></p>
        </div>
    )
}
export default Login;


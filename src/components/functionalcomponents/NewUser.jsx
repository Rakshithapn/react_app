const NewUser = () => {
    return (
        <div>
            <h1>Enter your details to create an account.</h1>
            <form>
                Name: <input type="text" /><br></br><br></br>
                Email: <input type="email" /><br></br><br></br>
                New Password: <input type="password" /><br></br><br></br>
                Confirm Password: <input type="password" /><br></br><br></br>
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}
export default NewUser;
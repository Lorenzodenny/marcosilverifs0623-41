const MyFooter = () => {

    const currentDate = new Date();
    //const day = currentDate.getDate();
    const monthIndex = currentDate.getMonth(); 
    const year = currentDate.getFullYear();
    //const hours = currentDate.getHours();
    //const minutes = currentDate.getMinutes();
    //const seconds = currentDate.getSeconds();

    
    const monthNames = [
        "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
        "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
    ];

    return (
        <div> 
            <p>&copy; {monthNames[monthIndex]} {year} 🌥 Il Meteo 🌥</p>
                <a href="#">Termini e condizioni</a>
                <a href="#">Privacy</a>
                <a href="#">Contattaci</a>
        </div>
    )
}

export default MyFooter;

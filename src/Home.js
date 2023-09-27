const Home = () => {

    function submitForm() {
        // Get the form element
            var form = document.getElementById("form");
            // Access the input field value
            var DISTANCE = form.elements["distance"].value;
            let CONSUMPTION = form.elements["avrage"].value;
            let PRICE = form.elements["price"].value;
          
            // Now you can use the 'data' variable in your JavaScript code
            console.log("Data submitted: " + DISTANCE);
            console.log("Data submitted: " + CONSUMPTION);
            console.log("Data submitted: " + PRICE);
            let final_price=(CONSUMPTION/100*DISTANCE*PRICE).toFixed(2);
            let final_fuel_used=(CONSUMPTION/100*DISTANCE).toFixed(2);
            console.log("Total price of the trip: "+final_price+" RONI.");
            console.log("Fuel used (L): "+final_fuel_used+" litres.");
            // SHOWING DATA IN THE WEBSITE
            document.getElementById("print_price").innerHTML = final_price+" RONI";
            document.getElementById("print_usedfuel").innerHTML = final_fuel_used+" L";
        }



    return (  
        
        <div className="window">
    
             <h2 className="calculatorclasic">Calculator Clasic</h2>   
            <div className="form_calculator">
                <form id="form" name="calculator" action="" method="GET">
                    <label htmlFor="distance">Distanta:</label><br />
                    <input type="number" id="distance" name="distance" className="input" /><br />
                    <hr />
                    <label htmlFor="avrage">Consum mediu:</label><br/>
                    <input type="number" id="avrage" name="avrage" className="input" />
                    <hr />
                    <label htmlFor="price">Pret combustibil:</label><br />
                    <input type="number" id="price" name="price" className="input" />
                    <hr />
                    <button type="button" className="button" id="button" onClick={submitForm}>
                        Calculeaza
                    </button>
                    </form>
                    <hr />
                    <p>Introduceți distanța traseului dumneavoastră în prima căsuță.</p>
                    <p>Introduceți consumul mediu al autoturismului dumneavoastră în a doua căsuță.</p>
                    <p>Introduceți pretul per litru al combustibilului utilizat în a treia căsuță.</p>
                
            </div>
    
        <hr/>
        <div className="result_calculator">
    
            <h3>Veți plăti pentru drum: </h3>
            <div className="print">
            <p id="print_price"></p>
            </div>
            
            <h3>Mașina va consuma: </h3>
            <div className="print">
            <p id="print_usedfuel"></p>
            </div>
    
        </div>
    
        </div>

        
        
    );
  
}
 
export default Home;
